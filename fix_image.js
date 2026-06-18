const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('https://images.unsplash.com/photo-1611095973763-414019902439?q=80&w=800&auto=format&fit=crop', 'imgs/marceneiro.jpg');
fs.writeFileSync('index.html', html);
console.log('Fixed Image!');
