const sharp = require('sharp');
const path = require('path');

const inputPath = 'C:/Users/aryan/.gemini/antigravity-ide/brain/42410146-89bd-48ed-9c76-557222938eb0/media__1787207392942.jpg';
const outputPath = path.join(__dirname, '../public/logo.png');

async function processImage() {
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const { width, height } = metadata;

  // Get raw RGBA buffer
  const rawBuffer = await image.ensureAlpha().raw().toBuffer();

  const numPixels = width * height;
  for (let i = 0; i < numPixels; i++) {
    const offset = i * 4;
    const r = rawBuffer[offset];
    const g = rawBuffer[offset + 1];
    const b = rawBuffer[offset + 2];

    const brightness = Math.max(r, g, b);

    if (brightness < 12) {
      rawBuffer[offset + 3] = 0; // Fully transparent
    } else if (brightness < 35) {
      // Soft transition for anti-aliasing edges
      const alphaFactor = (brightness - 12) / (35 - 12);
      rawBuffer[offset + 3] = Math.round(alphaFactor * 255);
    } else {
      rawBuffer[offset + 3] = 255;
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
    .toFile(outputPath);

  console.log(`Transparent logo written to ${outputPath}`);
}

processImage().catch(console.error);
