const sharp = require('sharp');
const fs = require('fs');

async function main() {
  const src = 'C:/Users/Richo/.gemini/antigravity-ide/brain/e22e21af-7b73-4b67-b6e4-e75e20daa45c/.user_uploaded/media_1794136148465.png';
  
  // Let's inspect the entire pedestal bounding box in the source image
  // Width: 1024, Height: 487
  // Crop from left: 240, top: 340, width: 540, height: 147
  const { data, info } = await sharp(src)
    .extract({ left: 240, top: 340, width: 540, height: 147 })
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Let's make pure white or near white background transparent
  const out = Buffer.alloc(info.width * info.height * 4);
  for (let i = 0; i < info.width * info.height; i++) {
    const r = data[i * 4];
    const g = data[i * 4 + 1];
    const b = data[i * 4 + 2];
    const a = data[i * 4 + 3];

    // If near white (r > 245, g > 245, b > 245)
    if (r >= 250 && g >= 250 && b >= 250) {
      out[i * 4] = 255;
      out[i * 4 + 1] = 255;
      out[i * 4 + 2] = 255;
      out[i * 4 + 3] = 0; // Transparent
    } else if (r >= 242 && g >= 242 && b >= 242) {
      // Soft antialiased edge
      const alpha = Math.max(0, 255 - Math.round(((r + g + b) / 3 - 242) * (255 / 13)));
      out[i * 4] = r;
      out[i * 4 + 1] = g;
      out[i * 4 + 2] = b;
      out[i * 4 + 3] = alpha;
    } else {
      out[i * 4] = r;
      out[i * 4 + 1] = g;
      out[i * 4 + 2] = b;
      out[i * 4 + 3] = a;
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
    .toFile('public/Component/moss-pedestal.png');

  console.log('Saved public/Component/moss-pedestal.png successfully!');
}

main().catch(console.error);
