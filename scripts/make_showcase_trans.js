const sharp = require('sharp');

async function makeTransparent(inputPath, outputPath) {
  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const out = Buffer.alloc(info.width * info.height * 4);
  for (let i = 0; i < info.width * info.height; i++) {
    const r = data[i * 3];
    const g = data[i * 3 + 1];
    const b = data[i * 3 + 2];

    // Check if pixel is white/near white background
    if (r >= 250 && g >= 250 && b >= 250) {
      out[i * 4] = 255;
      out[i * 4 + 1] = 255;
      out[i * 4 + 2] = 255;
      out[i * 4 + 3] = 0; // transparent
    } else if (r >= 242 && g >= 242 && b >= 242) {
      const alpha = Math.max(0, 255 - Math.round(((r + g + b) / 3 - 242) * (255 / 13)));
      out[i * 4] = r;
      out[i * 4 + 1] = g;
      out[i * 4 + 2] = b;
      out[i * 4 + 3] = alpha;
    } else {
      out[i * 4] = r;
      out[i * 4 + 1] = g;
      out[i * 4 + 2] = b;
      out[i * 4 + 3] = 255;
    }
  }

  await sharp(out, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .png()
    .toFile(outputPath);

  console.log(`Saved transparent image to ${outputPath}`);
}

async function run() {
  await makeTransparent(
    'public/Component/BBCE2376-BD2C-4E67-9556-CA5509574DAB.PNG',
    'public/Component/showcase-2-pintu-trans.png'
  );
  await makeTransparent(
    'public/Component/BFFC194C-6B17-4F8E-B5CB-D539BC1989FB.PNG',
    'public/Component/showcase-1-pintu-trans.png'
  );
}

run().catch(console.error);
