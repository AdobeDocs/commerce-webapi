#!/usr/bin/env node
// Runs SpectaQL for each GraphQL schema version, splits the monolithic output
// into per-section chunk files, and syncs reference pages that embed each chunk
// via a single Fragment include.
//
// Usage:
//   npm run generate:graphql-api-docs           # all versions
//   npm run generate:graphql-api-docs:2.4.9     # single version
'use strict';

const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const ROOT = path.join(__dirname, '..');

// Types are split into fixed alphabetical ranges so each range maps to its own
// reference page instead of byte-sized chunks that still load on one page.
const TYPE_LETTER_RANGES = [
  { suffix: 'a-b', letters: 'AB', navTitle: 'Types A–B', heading: 'Types A–B' },
  { suffix: 'c-e', letters: 'CDE', navTitle: 'Types C–E', heading: 'Types C–E' },
  { suffix: 'f-i', letters: 'FGHIJ', navTitle: 'Types F–I', heading: 'Types F–I' },
  { suffix: 'k-p', letters: 'KLMNOP', navTitle: 'Types K–P', heading: 'Types K–P' },
  { suffix: 'q-s', letters: 'QRS', navTitle: 'Types Q–S', heading: 'Types Q–S' },
  { suffix: 't-z', letters: 'TUVWXYZ', navTitle: 'Types T–Z', heading: 'Types T–Z' },
];

const TYPES_HEADER = '## Types\n\n';

// Reads spectaql.targetDir and spectaql.targetFile from a config YAML and
// returns the resolved absolute path of the output file.
function outputFileFor(configRelPath) {
  const cfg = yaml.load(fs.readFileSync(path.resolve(ROOT, configRelPath), 'utf8'));
  const dir = cfg.spectaql.targetDir;
  const file = cfg.spectaql.targetFile;
  if (!dir || !file) throw new Error(`${configRelPath}: missing spectaql.targetDir or spectaql.targetFile`);
  return path.resolve(ROOT, dir, file);
}

// The H2 sections that represent distinct output files.
const MAIN_SECTIONS = new Set(['queries', 'mutations', 'subscriptions', 'types']);

// Split the document into a preamble and the main API sections.
// 'preamble' captures everything before the first recognised main section
// (i.e. the intro text plus any H2 boilerplate such as "API endpoint" and
// "Headers" that SpectaQL emits before the Queries section).
// Each main section is keyed by its lowercase name.
function parseSections(content) {
  const h2Matches = [...content.matchAll(/^## (.+)$/gm)];
  const sections = {};

  // Find where the first recognised main section begins.
  let preambleEnd = content.length;
  for (const m of h2Matches) {
    if (MAIN_SECTIONS.has(m[1].trim().toLowerCase())) {
      preambleEnd = m.index;
      break;
    }
  }
  sections.preamble = content.slice(0, preambleEnd);

  // Extract each main section up to the next main section boundary.
  const mainMatches = h2Matches.filter(m => MAIN_SECTIONS.has(m[1].trim().toLowerCase()));
  for (let i = 0; i < mainMatches.length; i++) {
    const name = mainMatches[i][1].trim().toLowerCase();
    const start = mainMatches[i].index;
    const end = i + 1 < mainMatches.length ? mainMatches[i + 1].index : content.length;
    sections[name] = content.slice(start, end);
  }

  return sections;
}

function letterRangeFor(typeName) {
  const letter = typeName.charAt(0).toUpperCase();
  return TYPE_LETTER_RANGES.find(range => range.letters.includes(letter));
}

// Split the types section at H3 boundaries into fixed alphabetical ranges.
function chunkByLetterRange(content) {
  const parts = content.split(/(?=^### )/m);
  const buckets = Object.fromEntries(TYPE_LETTER_RANGES.map(range => [range.suffix, '']));

  for (const part of parts) {
    const h3Match = part.match(/^### (\S+)/);
    if (!h3Match) {
      continue;
    }

    const range = letterRangeFor(h3Match[1]);
    if (!range) {
      console.warn(`  warning: type "${h3Match[1]}" has no letter range`);
      continue;
    }
    buckets[range.suffix] += part;
  }

  return TYPE_LETTER_RANGES.map(range => ({
    suffix: range.suffix,
    content: buckets[range.suffix]
      ? (TYPES_HEADER + buckets[range.suffix]).trimEnd() + '\n'
      : TYPES_HEADER,
  }));
}

function yamlQuote(value) {
  return JSON.stringify(value);
}

// Write or update a reference page that embeds a single generated fragment.
function writeReferencePage(pagePath, { title, description, heading, fragmentFile, fragmentsRelPath }) {
  const content = [
    '---',
    `title: ${yamlQuote(title)}`,
    `description: ${yamlQuote(description)}`,
    'keywords:',
    '  - GraphQL',
    '---',
    '',
    `# ${heading}`,
    '',
    `<Fragment src="${fragmentsRelPath}/${fragmentFile}" />`,
    '',
  ].join('\n');

  fs.writeFileSync(pagePath, content, 'utf8');
}

function schemaDescription(meta, sectionLabel) {
  if (meta.version === 'saas') {
    return `Review GraphQL ${sectionLabel} in the ${meta.productLabel} API schema.`;
  }
  return `Review GraphQL ${sectionLabel} in the ${meta.productLabel} ${meta.version} API schema.`;
}

function syncReferencePages(indexDir, schemaMeta, pageSpecs, fragmentsRelPath) {
  const indexAbsDir = path.resolve(ROOT, indexDir);

  for (const spec of pageSpecs) {
    const title = spec.pageTitleSuffix
      ? `${schemaMeta.titleBase}${spec.pageTitleSuffix}`
      : schemaMeta.titleBase;
    const description = spec.description(schemaMeta);
    const heading = spec.heading(schemaMeta);
    const pagePath = path.join(indexAbsDir, spec.pageFile);

    writeReferencePage(pagePath, {
      title,
      description,
      heading,
      fragmentFile: spec.fragmentFile,
      fragmentsRelPath,
    });
    console.log(`  updated ${path.join(indexDir, spec.pageFile)}`);
  }
}

// To add a new schema version: add an entry here and a matching config YAML,
// then add a generate:graphql-api-docs:X-Y-Z script to package.json.
const schemas = [
  {
    version: '2.4.9',
    config: 'spectaql/config.yml',
    indexDir: 'src/pages/reference/graphql/latest',
    titleBase: 'GraphQL API reference (2.4.9)',
    headingBase: 'Adobe Commerce GraphQL API',
    productLabel: 'Adobe Commerce',
  },
  {
    version: '2.4.8',
    config: 'spectaql/config_2-4-8.yml',
    indexDir: 'src/pages/reference/graphql/2-4-8',
    titleBase: 'GraphQL API reference (2.4.8)',
    headingBase: 'Adobe Commerce GraphQL API (2.4.8)',
    productLabel: 'Adobe Commerce',
  },
  {
    version: '2.4.7',
    config: 'spectaql/config_2-4-7.yml',
    indexDir: 'src/pages/reference/graphql/2-4-7',
    titleBase: 'GraphQL API reference (2.4.7)',
    headingBase: 'Adobe Commerce GraphQL API (2.4.7)',
    productLabel: 'Adobe Commerce',
  },
  {
    version: '2.4.6',
    config: 'spectaql/config_2-4-6.yml',
    indexDir: 'src/pages/reference/graphql/2-4-6',
    titleBase: 'GraphQL API reference (2.4.6)',
    headingBase: 'Adobe Commerce GraphQL API (2.4.6)',
    productLabel: 'Adobe Commerce',
  },
  {
    version: 'saas',
    config: 'spectaql/config_saas.yml',
    indexDir: 'src/pages/reference/graphql/saas',
    titleBase: 'GraphQL API reference (SaaS)',
    headingBase: 'Adobe Commerce as a Cloud Service GraphQL API',
    productLabel: 'Adobe Commerce as a Cloud Service',
  },
];

// Optional version filter passed as the first CLI argument.
const filter = process.argv[2];
const toRun = filter ? schemas.filter(s => s.version === filter) : schemas;
if (filter && toRun.length === 0) {
  console.error(`Unknown version: ${filter}. Valid values: ${schemas.map(s => s.version).join(', ')}`);
  process.exit(1);
}

for (const schema of toRun) {
  const { config, indexDir } = schema;
  const configPath = path.resolve(ROOT, config);
  const outputFile = outputFileFor(config);
  const outputDir = path.dirname(outputFile);
  const baseName = path.basename(outputFile, '.md');

  // Prevent path traversal: config must live inside spectaql/.
  const spectaqlDir = path.resolve(ROOT, 'spectaql');
  if (!configPath.startsWith(spectaqlDir + path.sep)) {
    console.error(`Config path escapes spectaql directory: ${configPath}`);
    process.exit(1);
  }

  fs.mkdirSync(outputDir, { recursive: true });

  // Remove stale chunk files from a previous run before regenerating so that
  // a shrinking schema doesn't leave orphaned files behind.
  for (const existing of fs.readdirSync(outputDir)) {
    if (existing.startsWith(baseName + '-') && existing.endsWith('.md')) {
      fs.unlinkSync(path.join(outputDir, existing));
    }
  }

  console.log(`Generating ${outputFile}...`);
  // npm adds node_modules/.bin to PATH, so the spectaql binary resolves without
  // an explicit path.
  execFileSync('spectaql', [configPath], { stdio: 'inherit', cwd: ROOT });

  if (!fs.existsSync(outputFile)) {
    console.error(`SpectaQL did not produce ${outputFile}`);
    process.exit(1);
  }

  // SpectaQL always copies its JS/CSS assets alongside the output file even
  // when generating Markdown. Remove them so only .md files are committed.
  for (const dir of ['javascripts', 'stylesheets']) { // cspell:ignore javascripts
    fs.rmSync(path.join(outputDir, dir), { recursive: true, force: true });
  }

  // Read the monolithic output, collapse excess blank lines, then delete it —
  // it will be replaced by the split chunk files below.
  const raw = fs.readFileSync(outputFile, 'utf8');
  const content = raw.replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';
  fs.unlinkSync(outputFile);

  const sections = parseSections(content);
  const pageSpecs = [];

  // Queries file: preamble (endpoint/header boilerplate) + queries section.
  {
    const fragmentFile = `${baseName}-queries.md`;
    const body = ((sections.preamble || '') + (sections.queries || '')).trimEnd() + '\n';
    fs.writeFileSync(path.join(outputDir, fragmentFile), body, 'utf8');
    console.log(`  wrote ${fragmentFile}`);
    pageSpecs.push({
      pageFile: 'index.md',
      fragmentFile,
      pageTitleSuffix: '',
      heading: meta => meta.headingBase,
      description: meta => schemaDescription(meta, 'queries'),
    });
  }

  // Mutations section.
  if (sections.mutations) {
    const fragmentFile = `${baseName}-mutations.md`;
    fs.writeFileSync(path.join(outputDir, fragmentFile), sections.mutations.trimEnd() + '\n', 'utf8');
    console.log(`  wrote ${fragmentFile}`);
    pageSpecs.push({
      pageFile: 'mutations.md',
      fragmentFile,
      pageTitleSuffix: ' – Mutations',
      heading: () => 'Mutations',
      description: meta => schemaDescription(meta, 'mutations'),
    });
  }

  // Subscriptions section (not present in current schemas, included for
  // forward-compatibility).
  if (sections.subscriptions) {
    const fragmentFile = `${baseName}-subscriptions.md`;
    fs.writeFileSync(path.join(outputDir, fragmentFile), sections.subscriptions.trimEnd() + '\n', 'utf8');
    console.log(`  wrote ${fragmentFile}`);
    pageSpecs.push({
      pageFile: 'subscriptions.md',
      fragmentFile,
      pageTitleSuffix: ' – Subscriptions',
      heading: () => 'Subscriptions',
      description: meta => schemaDescription(meta, 'subscriptions'),
    });
  }

  // Types section: split into fixed alphabetical ranges.
  if (sections.types) {
    const chunks = chunkByLetterRange(sections.types);
    for (const chunk of chunks) {
      const range = TYPE_LETTER_RANGES.find(entry => entry.suffix === chunk.suffix);
      const fragmentFile = `${baseName}-types-${chunk.suffix}.md`;
      fs.writeFileSync(path.join(outputDir, fragmentFile), chunk.content, 'utf8');
      console.log(`  wrote ${fragmentFile}`);
      pageSpecs.push({
        pageFile: `types-${chunk.suffix}.md`,
        fragmentFile,
        pageTitleSuffix: ` – ${range.navTitle}`,
        heading: () => range.heading,
        description: meta => schemaDescription(meta, range.navTitle.toLowerCase()),
      });
    }
  }

  const autogeneratedDir = path.resolve(ROOT, 'src/pages/includes/autogenerated');
  const fragmentsRelPath = path.relative(path.resolve(ROOT, indexDir), autogeneratedDir);
  syncReferencePages(indexDir, schema, pageSpecs, fragmentsRelPath);

  console.log(`Done: ${pageSpecs.length} reference pages for ${baseName}\n`);
}
