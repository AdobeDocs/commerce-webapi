/**
 * Copyright 2025 Adobe All Rights Reserved.
 * NOTICE:  All information contained herein is, and remains the property of Adobe and its suppliers, if any.
 * The intellectual and technical concepts contained herein are proprietary to Adobe and its suppliers and are protected by all applicable intellectual property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material is strictly forbidden unless prior written permission is obtained from Adobe.
 */

/**
 * Configuration Validation Tests
 * Validates src/pages/config.md navigation configuration
 */

const fs = require('fs');
const path = require('path');

const CONFIG_FILE = path.join(__dirname, '../src/pages/config.md');
const PAGES_DIR = path.join(__dirname, '../src/pages');

// Regex patterns
const MARKDOWN_LINK_REGEX = /^\[.+\]\([^)]+\)$/;
const TITLE_REGEX = /^\[(.+)\]/;
const LINK_REGEX = /\]\((.+)\)$/;

/**
 * Helper functions to reduce duplication
 */
const isExternalUrl = (url) => url.startsWith('http://') || url.startsWith('https://');
const isAnchorLink = (url) => url.startsWith('#');

const extractTitle = (entry) => {
  const match = entry.match(TITLE_REGEX);
  return match ? match[1] : null;
};

const extractLink = (entry) => {
  const match = entry.match(LINK_REGEX);
  return match ? match[1] : null;
};

const getAllEntries = (configData) => {
  const entries = [...configData.pages];
  configData.subPages.forEach((item) => {
    entries.push(item.parent);
    entries.push(...item.children);
  });
  return entries;
};

const getAllLinks = (configData, internalOnly = false) => {
  const links = [];
  getAllEntries(configData).forEach((entry) => {
    const link = extractLink(entry);
    if (link && (!internalOnly || !isExternalUrl(link))) {
      links.push(link);
    }
  });
  return links;
};

const getAllTitles = (configData) => {
  return getAllEntries(configData).map(extractTitle).filter(Boolean);
};

/**
 * Custom parser for config.md format
 */
function parseConfig(content) {
  const lines = content.split('\n');
  const config = {
    pathPrefix: [],
    pages: [],
    subPages: []
  };

  let currentSection = null;
  let currentParent = null;

  for (const line of lines) {
    // Skip empty lines
    if (!line.trim()) continue;

    // Detect section headers
    if (line.startsWith('- pathPrefix:')) {
      currentSection = 'pathPrefix';
      currentParent = null;
      continue;
    } else if (line.startsWith('- pages:')) {
      currentSection = 'pages';
      currentParent = null;
      continue;
    } else if (line.startsWith('- subPages:')) {
      currentSection = 'subPages';
      currentParent = null;
      continue;
    }

    // Parse content based on current section
    if (currentSection === 'pathPrefix') {
      const match = line.match(/^\s+- (.+)$/);
      if (match) {
        config.pathPrefix.push(match[1]);
      }
    } else if (currentSection === 'pages' || currentSection === 'subPages') {
      // Check indentation level
      const indent = line.match(/^(\s*)/)[1].length;
      const match = line.match(/^\s*- (\[.+\]\(.+\))$/);
      
      if (match) {
        const entry = match[1];
        
        if (currentSection === 'pages') {
          config.pages.push(entry);
        } else {
          // subPages section
          if (indent === 4) {
            // Top level or parent
            currentParent = entry;
            config.subPages.push({ parent: entry, children: [] });
          } else if (indent > 4) {
            // Child entry
            if (currentParent) {
              const parentObj = config.subPages[config.subPages.length - 1];
              if (parentObj) {
                parentObj.children.push(entry);
              }
            }
          }
        }
      }
    }
  }

  return config;
}

describe('Config.md Navigation Tests', () => {
  let configContent;
  let configData;

  beforeAll(() => {
    configContent = fs.readFileSync(CONFIG_FILE, 'utf8');
    configData = parseConfig(configContent);
  });

  describe('File Structure', () => {
    test('config.md file should exist', () => {
      expect(fs.existsSync(CONFIG_FILE)).toBe(true);
    });

    test('config.md should not be empty', () => {
      expect(configContent.trim()).not.toBe('');
    });

    test('config.md should be parseable', () => {
      expect(configData).toBeDefined();
      expect(configData).toHaveProperty('pathPrefix');
      expect(configData).toHaveProperty('pages');
      expect(configData).toHaveProperty('subPages');
    });

    test('all link entries in raw content should be properly formatted', () => {
      const lines = configContent.split('\n');
      let currentSection = null;
      const malformedLines = [];

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Track current section
        if (line.startsWith('- pages:')) {
          currentSection = 'pages';
          continue;
        } else if (line.startsWith('- subPages:')) {
          currentSection = 'subPages';
          continue;
        } else if (line.startsWith('- pathPrefix:')) {
          currentSection = null;
          continue;
        }

        // Check if line looks like it should be a link entry
        if (currentSection && line.trim().startsWith('- [')) {
          // Should match proper markdown link format [text](url)
          if (!line.match(/^\s*- \[.+\]\(.+\)$/)) {
            malformedLines.push({
              line: i + 1,
              content: line.trim(),
              section: currentSection
            });
          }
        }
      }

      if (malformedLines.length > 0) {
        const errorMsg = malformedLines.map(m => 
          `Line ${m.line} in ${m.section}: ${m.content}`
        ).join('\n  ');
        throw new Error(`Found malformed link entries:\n  ${errorMsg}`);
      }

      expect(malformedLines.length).toBe(0);
    });
  });

  describe('Required Sections', () => {
    test('should have pathPrefix defined', () => {
      expect(configData).toHaveProperty('pathPrefix');
      expect(Array.isArray(configData.pathPrefix)).toBe(true);
      expect(configData.pathPrefix.length).toBeGreaterThan(0);
    });

    test('pathPrefix should start and end with /', () => {
      configData.pathPrefix.forEach((prefix) => {
        expect(prefix).toMatch(/^\//);
        expect(prefix).toMatch(/\/$/);
      });
    });

    test('should have pages defined', () => {
      expect(configData).toHaveProperty('pages');
      expect(Array.isArray(configData.pages)).toBe(true);
      expect(configData.pages.length).toBeGreaterThan(0);
    });

    test('should have subPages defined', () => {
      expect(configData).toHaveProperty('subPages');
      expect(Array.isArray(configData.subPages)).toBe(true);
      expect(configData.subPages.length).toBeGreaterThan(0);
    });
  });

  describe('Pages Section Validation', () => {
    test('all page entries should be valid markdown links', () => {
      configData.pages.forEach((page) => {
        expect(page).toMatch(MARKDOWN_LINK_REGEX);
      });
    });

    test('page titles should not be empty', () => {
      configData.pages.forEach((page) => {
        const title = extractTitle(page);
        expect(title).not.toBeNull();
        expect(title.trim()).not.toBe('');
      });
    });

    test('internal page links should point to existing files', () => {
      configData.pages.forEach((page) => {
        const link = extractLink(page);
        if (link && !isExternalUrl(link) && !isAnchorLink(link)) {
          const filePath = path.join(PAGES_DIR, link);
          expect(fs.existsSync(filePath)).toBe(true);
        }
      });
    });
  });

  describe('SubPages Section Validation', () => {
    test('all subPage entries should be valid markdown links', () => {
      configData.subPages.forEach((item) => {
        expect(item.parent).toMatch(MARKDOWN_LINK_REGEX);
        item.children.forEach((child) => {
          expect(child).toMatch(MARKDOWN_LINK_REGEX);
        });
      });
    });

    test('subPage titles should not be empty', () => {
      configData.subPages.forEach((item) => {
        const parentTitle = extractTitle(item.parent);
        expect(parentTitle).not.toBeNull();
        expect(parentTitle.trim()).not.toBe('');
        
        item.children.forEach((child) => {
          const childTitle = extractTitle(child);
          expect(childTitle).not.toBeNull();
          expect(childTitle.trim()).not.toBe('');
        });
      });
    });

    test('internal subPage links should point to existing files', () => {
      configData.subPages.forEach((item) => {
        const parentLink = extractLink(item.parent);
        if (parentLink && !isExternalUrl(parentLink) && !isAnchorLink(parentLink)) {
          const filePath = path.join(PAGES_DIR, parentLink);
          expect(fs.existsSync(filePath)).toBe(true);
        }
        
        item.children.forEach((child) => {
          const childLink = extractLink(child);
          if (childLink && !isExternalUrl(childLink) && !isAnchorLink(childLink)) {
            const filePath = path.join(PAGES_DIR, childLink);
            expect(fs.existsSync(filePath)).toBe(true);
          }
        });
      });
    });

    test('nested pages should be properly structured', () => {
      configData.subPages.forEach((item) => {
        expect(item.parent).toMatch(MARKDOWN_LINK_REGEX);
        expect(Array.isArray(item.children)).toBe(true);
      });
    });
  });

  describe('Link Format Validation', () => {
    test('internal links should use .md extension', () => {
      const links = getAllLinks(configData, true);
      links.forEach((link) => {
        // Skip anchor links as they don't need .md extension
        if (!isAnchorLink(link)) {
          expect(link).toMatch(/\.md$/);
        }
      });
    });

    test('links should not contain double slashes', () => {
      const links = getAllLinks(configData, true);
      links.forEach((link) => {
        expect(link).not.toMatch(/\/\//);
      });
    });

    test('links should use forward slashes', () => {
      const links = getAllLinks(configData, true);
      links.forEach((link) => {
        expect(link).not.toMatch(/\\/);
      });
    });

    test('should not have duplicate links within the pages section', () => {
      const pageLinks = configData.pages
        .map(extractLink)
        .filter(link => link && !isExternalUrl(link));
      const uniquePageLinks = new Set(pageLinks);
      expect(pageLinks.length).toBe(uniquePageLinks.size);
    });
  });

  describe('Title Validation', () => {
    test('titles should not be empty', () => {
      const titles = getAllTitles(configData);
      titles.forEach((title) => {
        expect(title.trim()).not.toBe('');
      });
    });

    test('titles should not be too long', () => {
      const maxLength = 100;
      const titles = getAllTitles(configData);
      titles.forEach((title) => {
        expect(title.length).toBeLessThanOrEqual(maxLength);
      });
    });

    test('titles should not have leading/trailing whitespace', () => {
      const titles = getAllTitles(configData);
      titles.forEach((title) => {
        expect(title).toBe(title.trim());
      });
    });
  });

  describe('File System Consistency', () => {
    test('all referenced markdown files should exist', () => {
      const links = getAllLinks(configData, true);
      const markdownLinks = links.filter(link => link.endsWith('.md'));
      
      markdownLinks.forEach((link) => {
        const filePath = path.join(PAGES_DIR, link);
        expect(fs.existsSync(filePath)).toBe(true);
      });
    });
  });
});

