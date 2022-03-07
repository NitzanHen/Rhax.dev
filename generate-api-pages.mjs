import { existsSync, readFileSync, writeFileSync } from 'fs';
import { mkdir } from 'fs/promises';
import { dirname, join, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const apiPagePath = join(__dirname, 'components', 'ApiPage');
const topBarPath = join(__dirname, 'components', 'TopBar');
const apiPath = join(__dirname, 'rhax.api');

const api = JSON.parse(readFileSync('./rhax.api.json'));

const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

const relativePath = (from, to) => relative(from, to).replace(/\\/g, '/');

const pageTemplate = (name, path) => {
  const componentName = `${capitalize(name)}Page`;

  return `import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '${relativePath(path, apiPagePath)}';
import { TopBar } from '${relativePath(path, topBarPath)}';
import exports, { Module } from '${relativePath(path, apiPath)}';

const ${componentName}: NextPage = () => {
  const ${name} = exports.find(e => e.name === "${name}")!;

  return (
    <>
      <Head>
        <title>Rhax docs - ${name}</title>
      </Head>
      <TopBar />
      <ApiPage module={${name}} />
    </>
  );
};

export default ${componentName};`;
};

const writePromises = [];

for (const module of api) {
  const source = module.source.replace('.ts', '.tsx');
  const path = join(__dirname, 'pages', 'docs', 'api', source);
  const dir = dirname(path);

  if (existsSync(path)) {
    continue;
  }

  const promise = mkdir(dir, { recursive: true })
    .then(() => writeFileSync(path, pageTemplate(module.name, dir)));
  writePromises.push(promise);
}

await Promise.all(writePromises);
