const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'icons');

const files = fs.readdirSync(iconsDir);

const icons = files
  .filter(file => file.endsWith('.svg'))
  .map(file => file.replace('.svg', ''));

// JSON bana do
fs.writeFileSync('icons.json', JSON.stringify(icons, null, 2));

console.log('✅ icons.json ready');