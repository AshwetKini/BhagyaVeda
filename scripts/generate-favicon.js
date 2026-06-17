import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createFavicon() {
  const logoPath = path.resolve(__dirname, '../public/logo.png');
  const favPngPath = path.resolve(__dirname, '../public/favicon.png');
  const favIcoPath = path.resolve(__dirname, '../public/favicon.ico');
  const favSvgPath = path.resolve(__dirname, '../public/favicon.svg');

  // 1. Remove public/favicon.svg (Vite default logo or old designs)
  if (fs.existsSync(favSvgPath)) {
    fs.unlinkSync(favSvgPath);
    console.log('Removed favicon.svg');
  }

  // 2. Convert and resize logo.png to 48x48 favicon.png
  if (fs.existsSync(logoPath)) {
    await sharp(logoPath)
      .resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(favPngPath);
    console.log('Successfully created public/favicon.png');

    // 3. Save as favicon.ico
    await sharp(logoPath)
      .resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(favIcoPath);
    console.log('Successfully created public/favicon.ico');
  } else {
    console.error('Error: logo.png not found at', logoPath);
  }
}

createFavicon().catch(console.error);
