const fs = require('fs');

// 1. Fix image in index.html
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1611095973763-414019902439?q=80&w=800&auto=format&fit=crop');
fs.writeFileSync('index.html', html);

// 2. Clean up style.css animations
let css = fs.readFileSync('style.css', 'utf8');

// Remove animations from floating badges
css = css.replace(/animation:\s*badgeTeleport1[^;]+;/g, '');
css = css.replace(/animation:\s*badgeTeleport2[^;]+;/g, '');
css = css.replace(/animation-delay:\s*-8s;/g, '');

// Remove keyframes for unused animations
css = css.replace(/@keyframes badgeTeleport1\s*{[^}]*}/g, '');
css = css.replace(/@keyframes badgeTeleport2\s*{[^}]*}/g, '');
css = css.replace(/@keyframes smoothFloat1\s*{[^}]*}/g, '');
css = css.replace(/@keyframes smoothFloat2\s*{[^}]*}/g, '');
css = css.replace(/@keyframes glowing-stars\s*{[^}]*}/g, '');
css = css.replace(/@keyframes shootingStarMove\s*{[^}]*}/g, '');

fs.writeFileSync('style.css', css);
console.log('Fixed HTML and CSS!');
