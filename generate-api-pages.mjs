import { existsSync, readFileSync, writeFileSync } from 'fs';
import { mkdir } from 'fs/promises';
import { basename, dirname, join, relative } from 'path';
import { groupBy, keys } from 'rhax';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const apiPagePath = join(__dirname, 'components', 'ApiPage');
const topBarPath = join(__dirname, 'components', 'TopBar');
const apiPath = join(__dirname, 'rhax.api');

const apiRaw = JSON.parse(readFileSync('./rhax.api.json'));
const api = groupBy(apiRaw, e => e.source);

const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

const relativePath = (from, to) => relative(from, to).replace(/\\/g, '/');

const pageTemplate = (name, source, path) => {
  const componentName = `${capitalize(name)}Page`;

  return `import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '${relativePath(path, apiPagePath)}';
import { TopBar } from '${relativePath(path, topBarPath)}';
import api from '${relativePath(path, apiPath)}';

const ${componentName}: NextPage = () => {
  const exports = api["${source}"];

  return (
    <>
      <Head>
        <title>Rhax docs - ${name}</title>
      </Head>
      <TopBar />
      <ApiPage source={"${source}"} exports={exports} />
    </>
  );
};

export default ${componentName};`;
};

const writePromises = [];

for (const source of keys(api)) {
  const path = join(__dirname, 'pages', 'docs', 'api', source.replace('.ts', '.tsx'));
  const dir = dirname(path);

  const name = basename(source, '.ts');

  if (existsSync(path)) {
    continue;
  }

  const promise = mkdir(dir, { recursive: true })
    .then(() => writeFileSync(path, pageTemplate(name, source, dir)));
  writePromises.push(promise);
}

await Promise.all(writePromises);
