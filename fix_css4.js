const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

// 1. Hide the timer progress bar
css = css.replace(/\.hero-slide-progress\s*{[\s\S]*?}/, `.hero-slide-progress {\n    display: none;\n}`);

// 2. Remove yellow sweeping line in MDF cards
css = css.replace(/animation:\s*shimmerSweep[^;]+;/g, '');

// 3. Make floating badges static (remove backdrop-filter and adjust background)
css = css.replace(/backdrop-filter:\s*blur[^;]+;/g, '');
css = css.replace(/-webkit-backdrop-filter:\s*blur[^;]+;/g, '');
css = css.replace(/background:\s*rgba\(10,\s*10,\s*12,\s*0\.75\);/g, 'background: rgba(10, 10, 12, 0.95);');

// 4. Improve the mobile styling of the 'Ambientes' cards
// We already have a media query max-width: 900px at the end, I'll replace its content
const mobileCSS = `@media (max-width: 900px) {
    .ambiente-row, .ambiente-row.row-reverse {
        flex-direction: column;
        gap: 20px;
        padding: 15px;
        border: 1px solid rgba(234, 179, 8, 0.2);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    }
    .ambiente-slider-col {
        width: 100%;
        height: 250px;
        flex: none;
        min-height: 250px;
        border-radius: 8px;
    }
    .ambiente-content-col {
        width: 100%;
        flex: none;
        padding: 0 5px 10px 5px;
    }
    .ambiente-content-col h3 {
        font-size: 1.6rem;
    }
    .ambiente-content-col p {
        font-size: 0.95rem;
    }
}`;

// Find the existing @media (max-width: 900px) from add_ambientes.js and replace it
css = css.replace(/@media \(max-width: 900px\) {[\s\S]*?\.ambiente-content-col {[\s\S]*?}[\s\S]*?}/, mobileCSS);

fs.writeFileSync('style.css', css);
console.log('CSS fixes applied.');
