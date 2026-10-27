import fs from 'node:fs';

const files = [
  'src/data/products.ts',
  'src/data/categories.ts',
  'src/data/brands.ts',
];

for (const file of files) {
  const before = fs.readFileSync(file, 'utf8');
  const after = before.replace(
    /\/New%20folder\/([^'"\\]+)\.(png|jpe?g)/gi,
    (_match, name) => `/media/${name}.webp`,
  );
  fs.writeFileSync(file, after);
  console.log(file, before === after ? 'unchanged' : 'updated');
}
