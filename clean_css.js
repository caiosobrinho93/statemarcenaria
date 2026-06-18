const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf-8');

// 1. Update .service-card background
css = css.replace(/background-color:\s*#0b0b0d;/g, 'background: linear-gradient(135deg, #111115 0%, #07070a 100%);');

// 2. Remove animations from .service-card
css = css.replace(/animation:\s*iconPulseGlow[^;]+;/g, '');
// Remove pseudo elements block from .service-card
css = css.replace(/\/\* Glowing Border effect \(\w* \w* \w*, \w* \w* \w*\) \*\/(.|\n)*?(?=\/\* Action Button at the bottom \*\/)/, '\n\n');
// Let's use a more robust regex for the block:
// It starts at "/* Glowing Border effect" and ends before "/* Action Button at the bottom"
css = css.replace(/\/\* Glowing Border effect(.|\n)*?\/\* Action Button at the bottom \*\//, '/* Action Button at the bottom */');

// 3. Remove .material-block animations
css = css.replace(/animation:\s*slowCardFloat[^;]+;/g, '');
css = css.replace(/animation-play-state:\s*paused;/g, '');

// 4. Remove Staggered float animation delays for Materials grid
css = css.replace(/\/\* Staggered float animation delays for Materials grid \*\/(.|\n)*?(?=\.material-block h4 \{)/, '');

// 5. Remove Uiverse Waving Background for Material Block
css = css.replace(/\/\* Uiverse Waving Background for Material Block \*\/(.|\n)*?(?=@media \(max-width: 900px\))/, '');

// 6. Remove Staggered animation delays for Why Custom Section grid
css = css.replace(/\/\* Staggered animation delays for Why Custom Section grid \*\/(.|\n)*?(?=\.reason-image-card img \{)/, '');

fs.writeFileSync('style.css', css, 'utf-8');
console.log('Done!');
