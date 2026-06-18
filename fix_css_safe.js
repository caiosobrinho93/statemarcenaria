const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf8');

// Remove animation from .fb-top-left
css = css.replace(/\.fb-top-left\s*{[\s\S]*?}/, (match) => {
    return match.replace(/animation:\s*badgeTeleport1[^;]+;/, '');
});

// Remove animation from .fb-bottom-right
css = css.replace(/\.fb-bottom-right\s*{[\s\S]*?}/, (match) => {
    return match.replace(/animation:\s*badgeTeleport2[^;]+;/, '').replace(/animation-delay:\s*-8s;/, '');
});

fs.writeFileSync('style.css', css);
console.log('Fixed CSS again!');
