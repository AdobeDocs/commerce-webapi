const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.resolve(__dirname, '../src/pages');
const FRAGMENT_REGEX = /<Fragment\b[^>]*\bsrc=(["'])([^"']+)\1[^>]*>/g;

function collectFragments(directory) {
  const fragments = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      fragments.push(...collectFragments(file));
    } else if (entry.name.endsWith('.md')) {
      const content = fs.readFileSync(file, 'utf8');
      for (const match of content.matchAll(FRAGMENT_REGEX)) {
        fragments.push({
          file: path.relative(PAGES_DIR, file),
          src: match[2],
        });
      }
    }
  }
  return fragments;
}

function resolveFragmentPath({ file, src }) {
  return src.startsWith('/')
    ? path.resolve(PAGES_DIR, `.${src}`)
    : path.resolve(PAGES_DIR, path.dirname(file), src);
}

describe('Fragment source paths', () => {
  const fragments = collectFragments(PAGES_DIR);

  test.each([
    ['/_includes/saas-only.md', 'graphql/schema/customer/queries/customer.md'],
    ['../../../../_includes/saas-only.md', 'graphql/schema/customer/queries/customer.md'],
    ['./_includes/saas-only.md', 'index.md'],
  ])('resolves %s from %s', (src, file) => {
    expect(resolveFragmentPath({ file, src })).toBe(path.join(PAGES_DIR, '_includes/saas-only.md'));
  });

  test('all fragments resolve to files inside the content root', () => {
    expect(fragments.length).toBeGreaterThan(0);
    const unresolved = fragments.filter(fragment => {
      const target = resolveFragmentPath(fragment);
      return !target.startsWith(PAGES_DIR + path.sep)
        || !fs.existsSync(target)
        || !fs.statSync(target).isFile();
    });
    expect(unresolved).toEqual([]);
  });
});
