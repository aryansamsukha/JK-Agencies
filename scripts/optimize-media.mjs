import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = path.join(root, 'public', 'New folder');
const outDir = path.join(root, 'public', 'media');

fs.mkdirSync(outDir, { recursive: true });

const files = fs.readdirSync(sourceDir).filter((name) => /\.(png|jpe?g)$/i.test(name));

for (const file of files) {
  const input = path.join(sourceDir, file);
  const output = path.join(outDir, `${path.parse(file).name}.webp`);
  await sharp(input)
    .rotate()
    .resize({ width: 1400, height: 1400, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 68, effort: 4 })
    .toFile(output);

  const before = fs.statSync(input).size;
  const after = fs.statSync(output).size;
  console.log(
    `${file}  ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024).toFixed(0)}KB`,
  );
}
