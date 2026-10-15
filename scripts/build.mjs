import { readFile, writeFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'vite';

// Ship the same portfolio markup to visitors and crawlers before React loads.
const renderDirectory = path.resolve('node_modules/.cache/delta-film-prerender');
await build();

try {
  await build({
    build: {
      ssr: 'src/entry-server.tsx',
      outDir: renderDirectory,
      emptyOutDir: true,
      copyPublicDir: false,
    },
  });
  const { render } = await import(pathToFileURL(path.join(renderDirectory, 'entry-server.js')).href);
  const template = await readFile('dist/index.html', 'utf8');
  const root = '<div id="root"></div>';
  if (!template.includes(root)) {
    throw new Error('Cannot prerender: the HTML root placeholder is missing.');
  }
  await writeFile('dist/index.html', template.replace(root, `<div id="root">${render()}</div>`));
  console.log('Prerendered the DELTA FILM portfolio into dist/index.html.');
} finally {
  await rm(renderDirectory, { recursive: true, force: true });
}
