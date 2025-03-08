const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' }
];

async function generateFavicons() {
  const inputSvg = fs.readFileSync(path.join(__dirname, '../public/favicon.svg'));
  
  for (const { size, name } of sizes) {
    await sharp(inputSvg)
      .resize(size, size)
      .png()
      .toFile(path.join(__dirname, '../public', name));
    
    console.log(`Generated ${name}`);
  }

  // Generate ICO file (16x16 and 32x32 combined)
  const ico16 = await sharp(inputSvg)
    .resize(16, 16)
    .png()
    .toBuffer();

  const ico32 = await sharp(inputSvg)
    .resize(32, 32)
    .png()
    .toBuffer();

  // Use the 32x32 version as favicon.ico
  await sharp(ico32)
    .toFile(path.join(__dirname, '../public/favicon.ico'));
    
  console.log('Generated favicon.ico');
}

generateFavicons().catch(console.error);
