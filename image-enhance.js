// image-enhance.js
// Enhances public/profile-original.jpg and writes public/profile.jpg and public/profile.webp
// Requires `sharp` package: run `npm install sharp` before using.

const fs = require('fs');
const path = require('path');

const sharp = require('sharp');

const inputPath = path.join(__dirname, 'public', 'profile-original.jpg');
const outJpg = path.join(__dirname, 'public', 'profile.jpg');
const outWebp = path.join(__dirname, 'public', 'profile.webp');

async function enhance() {
  if (!fs.existsSync(inputPath)) {
    console.error('Error: public/profile-original.jpg not found.');
    console.error('Place your original image at public/profile-original.jpg and rerun `node image-enhance.js`.');
    process.exit(1);
  }

  try {
    // Read input and run a pipeline that:
    // - resize to 1000x1000 (fit: cover)
    // - autoOrient
    // - normalize (improve colors)
    // - sharpen
    // - output high-quality jpeg and webp

    await sharp(inputPath)
      .rotate() // auto orient
      .resize(1000, 1000, { fit: 'cover', position: 'centre' })
      .modulate({ brightness: 1.03, saturation: 1.02 })
      .sharpen()
      .jpeg({ quality: 92, mozjpeg: true })
      .toFile(outJpg);

    await sharp(inputPath)
      .rotate()
      .resize(1000, 1000, { fit: 'cover', position: 'centre' })
      .modulate({ brightness: 1.03, saturation: 1.02 })
      .sharpen()
      .webp({ quality: 90 })
      .toFile(outWebp);

    console.log('Enhanced images written:');
    console.log(' -', outJpg);
    console.log(' -', outWebp);
    console.log('\nNext: commit the files and push to GitHub:');
    console.log('  git add public/profile.jpg public/profile.webp');
    console.log('  git commit -m "Add enhanced profile image"');
    console.log('  git push');
  } catch (err) {
    console.error('Error enhancing image:', err);
    process.exit(1);
  }
}

enhance();
