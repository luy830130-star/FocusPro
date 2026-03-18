const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgContent = fs.readFileSync('./icon.svg');

// iOS icon sizes
const sizes = [
  { name: 'icon-20.png', size: 20 },
  { name: 'icon-29.png', size: 29 },
  { name: 'icon-40.png', size: 40 },
  { name: 'icon-58.png', size: 58 },
  { name: 'icon-60.png', size: 60 },
  { name: 'icon-76.png', size: 76 },
  { name: 'icon-80.png', size: 80 },
  { name: 'icon-87.png', size: 87 },
  { name: 'icon-100.png', size: 100 },
  { name: 'icon-120.png', size: 120 },
  { name: 'icon-128.png', size: 128 },
  { name: 'icon-152.png', size: 152 },
  { name: 'icon-167.png', size: 167 },
  { name: 'icon-180.png', size: 180 },
  { name: 'icon-256.png', size: 256 },
  { name: 'icon-512.png', size: 512 },
  { name: 'icon-1024.png', size: 1024 },
];

const iosDir = './ios-icons';
if (!fs.existsSync(iosDir)) {
  fs.mkdirSync(iosDir);
}

async function generateIcons() {
  console.log('🎨 Generating iOS icons...');
  
  for (const { name, size } of sizes) {
    await sharp(svgContent)
      .resize(size, size)
      .png()
      .toFile(path.join(iosDir, name));
    console.log(`  ✅ ${name}`);
  }
  
  console.log('\n📦 All icons generated!');
  console.log(`   Location: ${path.resolve(iosDir)}`);
}

generateIcons().catch(console.error);
