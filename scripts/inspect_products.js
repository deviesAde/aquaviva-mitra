const sharp = require('sharp');

async function inspect(path) {
  const meta = await sharp(path).metadata();
  console.log(`=== ${path} (${meta.width}x${meta.height}) ===`);
  
  // Let's create a 50x50 ASCII representation of where the pixels are
  const { data } = await sharp(path).resize(50, 40).raw().toBuffer({ resolveWithObject: true });
  for (let y = 0; y < 40; y += 2) {
    let line = '';
    for (let x = 0; x < 50; x++) {
      const idx = (y * 50 + x) * 3;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      if (r > 240 && g > 240 && b > 240) {
        line += ' '; // white
      } else if (b > r + 30 && b > g) {
        line += 'B'; // blue
      } else if (r > 180 && g < 120 && b < 120) {
        line += 'O'; // orange/red
      } else {
        line += '#'; // dark / gray / other
      }
    }
    console.log(line);
  }
}

async function run() {
  await inspect('public/Component/BBCE2376-BD2C-4E67-9556-CA5509574DAB.PNG');
  await inspect('public/Component/BFFC194C-6B17-4F8E-B5CB-D539BC1989FB.PNG');
  await inspect('public/Component/3D4E3669-4A6B-4E93-B2ED-E6BEF210887B.PNG');
}

run().catch(console.error);
