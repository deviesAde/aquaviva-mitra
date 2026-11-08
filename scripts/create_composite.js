const sharp = require('sharp');

async function main() {
  // Bottle: public/Products/700ml.png (640 x 1107)
  // Pedestal: public/Component/moss-pedestal.png (540 x 147)
  
  // Let's create an ultra crisp canvas: 800 x 1200
  // Bottle scaled to width: 440, height: 761
  // Pedestal scaled to width: 700, height: 190
  
  const bottle = await sharp('public/Products/700ml.png')
    .resize(440, 761, { fit: 'inside' })
    .toBuffer();
    
  const pedestal = await sharp('public/Component/moss-pedestal.png')
    .resize(680, 185, { fit: 'inside' })
    .toBuffer();

  // Canvas width: 800, height: 950
  // Bottle top: 30, left: (800 - 440) / 2 = 180
  // Bottle bottom will be at 30 + 761 = 791
  // Pedestal top: 710 (overlaps bottle base by ~80px so bottle sits naturally on the moss)
  // Pedestal left: (800 - 680) / 2 = 60
  
  const canvas = await sharp({
    create: {
      width: 800,
      height: 940,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([
    // Pedestal behind lower bottle or bottle on pedestal
    { input: pedestal, top: 720, left: 60 },
    { input: bottle, top: 40, left: 180 }
  ])
  .png()
  .toFile('public/Component/bottle-with-pedestal.png');

  console.log('Created public/Component/bottle-with-pedestal.png:', canvas);
}

main().catch(console.error);
