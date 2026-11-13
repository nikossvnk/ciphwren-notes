import { copyFile, mkdir, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const output = new URL('_site/', root);

// Only this generated directory is replaced; the app's web build is separate.
await rm(output, { recursive: true, force: true });
await mkdir(new URL('assets/', output), { recursive: true });

const files = [
  ['site/index.html', 'index.html'],
  ['site/styles.css', 'styles.css'],
  ['assets/brand/icon.svg', 'assets/icon.svg'],
  ['.github/banner.png', 'assets/banner.png'],
  ...['1-notes', '2-note', '4-bookmarks', '6-dark-mode', '7-dark-note'].map((name) => [
    `fastlane/metadata/android/en-US/images/phoneScreenshots/${name}.png`,
    `assets/${name}.png`,
  ]),
];

await Promise.all(files.map(([source, destination]) =>
  copyFile(new URL(source, root), new URL(destination, output))));
await writeFile(new URL('.nojekyll', output), '');
console.log(`Static presentation built at ${fileURLToPath(output)}`);
