const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/<div class="wave"><\/div>/g, '');
fs.writeFileSync('index.html', html);
console.log('Done!');
