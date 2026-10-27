const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcPath = 'C:/Users/aryan/.gemini/antigravity-ide/brain/54b62c9f-d601-4f70-a002-21ba86a30f84/media__1788366220167.png';
const publicDir = path.join(__dirname, '../public');
const rawLogoPath = path.join(publicDir, 'nortek-logo.png');
const transparentLogoPath = path.join(publicDir, 'nortek-logo-transparent.png');

// 1. Copy raw file
fs.copyFileSync(srcPath, rawLogoPath);
console.log(`Copied logo to ${rawLogoPath}`);

// 2. Process transparency for dark background
async function processImage() {
  const image = sharp(rawLogoPath);
  const metadata = await image.metadata();
  const { width, height } = metadata;

  const rawBuffer = await image.ensureAlpha().raw().toBuffer();
  const numPixels = width * height;

  for (let i = 0; i < numPixels; i++) {
    const offset = i * 4;
    const r = rawBuffer[offset];
    const g = rawBuffer[offset + 1];
    const b = rawBuffer[offset + 2];

    const maxVal = Math.max(r, g, b);
    const minVal = Math.min(r, g, b);
    const diff = maxVal - minVal;

    // Dark grey background pixels in this image have maxVal < 42 and small diff between RGB
    if (maxVal < 40 && diff < 15) {
      rawBuffer[offset + 3] = 0; // Transparent
    } else if (maxVal < 55 && diff < 15) {
      const alphaFactor = (maxVal - 40) / 15;
      rawBuffer[offset + 3] = Math.round(alphaFactor * 255);
    }
  }

  await sharp(rawBuffer, {
    raw: {
      width,
      height,
      channels: 4,
    },
  })
    .png()
    .toFile(transparentLogoPath);

  console.log(`Transparent logo successfully created at ${transparentLogoPath}`);
}

processImage().catch(console.error);
