const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf8');

// 1. Remove imageBreathe animations ONLY properties (safest)
css = css.replace(/animation:\s*imageBreathe[^;]+;/g, '');

// 2. Fix navbar animation
css = css.replace(/\/\* --- Sticky Blur Navbar --- \*\/\s*\.navbar-modern\s*{[\s\S]*?}\s*\.navbar-modern\.scrolled\s*{[\s\S]*?}/, `/* --- Sticky Blur Navbar --- */
.navbar-modern {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 90px;
    z-index: 100;
    transition: background 0.3s ease, height 0.3s ease;
    border-bottom: 1px solid transparent;
}

.navbar-modern.scrolled {
    background: rgba(24, 24, 24, 0.8);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
    padding: 0;
    height: 80px;
}`);

// 3. Add hue-rotate for the logo to turn yellow into blue
const hueRule = `
/* Filter logo yellow to match primary blue */
img[src*="logo-state.png"] {
    filter: hue-rotate(155deg) brightness(1.1) saturate(1.2) drop-shadow(0 0 5px rgba(0, 168, 255, 0.3));
}
`;

if (!css.includes('hue-rotate(155deg)')) {
    css += hueRule;
}

fs.writeFileSync('style.css', css);
console.log('Fixed CSS perfectly!');
