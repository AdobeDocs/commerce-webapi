#!/usr/bin/env node
// Runs SpectaQL for each GraphQL schema version and writes lint-clean Markdown
// fragments to the path declared in each config's spectaql.targetDir/targetFile.
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

// Reads spectaql.targetDir and spectaql.targetFile from a config YAML and
// returns the resolved absolute path of the output file.
function outputFileFor(configRelPath) {
  const cfg = yaml.load(fs.readFileSync(path.resolve(ROOT, configRelPath), 'utf8'));
  const dir = cfg.spectaql.targetDir;
  const file = cfg.spectaql.targetFile;
  if (!dir || !file) throw new Error(`${configRelPath}: missing spectaql.targetDir or spectaql.targetFile`);
  return path.resolve(ROOT, dir, file);
}

// To add a new schema version: add an entry here and a matching config YAML,
// then add a generate:graphql-api-docs:X-Y-Z script to package.json.
const schemas = [
  { version: '2.4.9', config: 'spectaql/config_2-4-9.yml' },
  { version: '2.4.6', config: 'spectaql/config_2-4-6.yml' },
  { version: '2.4.7', config: 'spectaql/config_2-4-7.yml' },
  { version: '2.4.8', config: 'spectaql/config_2-4-8.yml' },
  { version: 'saas',  config: 'spectaql/config_saas.yml'  },
];

// Optional version filter passed as the first CLI argument.
const filter = process.argv[2];
const toRun = filter ? schemas.filter(s => s.version === filter) : schemas;
if (filter && toRun.length === 0) {
  console.error(`Unknown version: ${filter}. Valid values: ${schemas.map(s => s.version).join(', ')}`);
  process.exit(1);
}

for (const { config } of toRun) {
  const configPath = path.resolve(ROOT, config);
  const outputFile = outputFileFor(config);
  const outputDir = path.dirname(outputFile);

  // Prevent path traversal: config must live inside spectaql/.
  const spectaqlDir = path.resolve(ROOT, 'spectaql');
  if (!configPath.startsWith(spectaqlDir + path.sep)) {
    console.error(`Config path escapes spectaql directory: ${configPath}`);
    process.exit(1);
  }

  fs.mkdirSync(outputDir, { recursive: true });

  console.log(`Generating ${outputFile}...`);
  // npm adds node_modules/.bin to PATH, so the spectaql binary resolves without
  // an explicit path.
  execFileSync('spectaql', [configPath], { stdio: 'inherit', cwd: ROOT });

  if (!fs.existsSync(outputFile)) {
    console.error(`SpectaQL did not produce ${outputFile}`);
    process.exit(1);
  }

  // Handlebars block helpers leave runs of 3+ blank lines; collapse to one.
  const content = fs.readFileSync(outputFile, 'utf8');
  const cleaned = content.replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';
  fs.writeFileSync(outputFile, cleaned, 'utf8');

  // SpectaQL always copies its JS/CSS assets alongside the output file even
  // when generating Markdown. Remove them so only .md files are committed.
  for (const dir of ['javascripts', 'stylesheets']) { // cspell:ignore javascripts
    fs.rmSync(path.join(outputDir, dir), { recursive: true, force: true });
  }

  console.log(`Generated: ${outputFile}`);
}
