const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf8');

// 1. Remove imageBreathe animations
css = css.replace(/animation:\s*imageBreathe[^;]+;/g, '');
css = css.replace(/@keyframes imageBreathe\s*{[\s\S]*?}/g, '');

// 2. Add hue-rotate for the logo to turn yellow into blue
const hueRule = `
/* Filter logo yellow to match primary blue */
img[src*="logo-state.png"] {
    filter: hue-rotate(155deg) brightness(1.1) saturate(1.2) drop-shadow(0 0 5px rgba(0, 168, 255, 0.3));
}
`;

css += hueRule;

fs.writeFileSync('style.css', css);
console.log('Fixed CSS again!');
