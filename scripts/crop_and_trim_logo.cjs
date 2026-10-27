const sharp = require('sharp');
const path = require('path');

const logoPath = path.join(__dirname, '../public/logo.png');

async function trimLogo() {
  // First ensure alpha, then trim empty space, and save
  const buffer = await sharp(logoPath)
    .trim({
      background: { r: 0, g: 0, b: 0, alpha: 0 },
      threshold: 10
    })
    .toBuffer();

  await sharp(buffer).toFile(logoPath);

  const meta = await sharp(logoPath).metadata();
  console.log(`Trimmed logo metadata: width=${meta.width}, height=${meta.height}`);
}

trimLogo().catch(console.error);
