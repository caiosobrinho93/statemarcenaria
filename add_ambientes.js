const fs = require('fs');

// 1. Insert Ambientes section HTML
let html = fs.readFileSync('index.html', 'utf8');

const ambientesHtml = `
            <!-- Ambientes/Produtos Section -->
            <section id="ambientes" class="section-ambientes">
                <div class="container">
                    <div class="section-title-center reveal-up">
                        <span class="section-subtitle-tech">NOSSOS PROJETOS</span>
                        <h2 class="section-title-tech">AMBIENTES</h2>
                    </div>

                    <div class="ambientes-list">
                        <!-- Cozinha -->
                        <div class="ambiente-row reveal-up">
                            <div class="ambiente-slider-col">
                                <div class="ambiente-slider">
                                    <div class="a-slide" style="background-image: url('imgs/gourmet_kitchen.png'); animation-delay: 0s;"></div>
                                    <div class="a-slide" style="background-image: url('imgs/marceneiro.jpg'); animation-delay: 4s;"></div>
                                    <div class="a-slide" style="background-image: url('imgs/wood_texture.png'); animation-delay: 8s;"></div>
                                </div>
                            </div>
                            <div class="ambiente-content-col">
                                <h3>Cozinhas Planejadas</h3>
                                <p>Cozinhas gourmet com design inteligente e requinte. Aproveitamento total de espaço, ferragens com amortecimento de alta durabilidade e um acabamento impecável para o coração da sua casa.</p>
                                <a href="#" class="btn-tech-outline">VER MAIS <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>

                        <!-- Quarto / Closet (Inverted) -->
                        <div class="ambiente-row row-reverse reveal-up">
                            <div class="ambiente-slider-col">
                                <div class="ambiente-slider">
                                    <div class="a-slide" style="background-image: url('imgs/premium_closet.png'); animation-delay: 0s;"></div>
                                    <div class="a-slide" style="background-image: url('imgs/gourmet_kitchen.png'); animation-delay: 4s;"></div>
                                    <div class="a-slide" style="background-image: url('imgs/background.jpg'); animation-delay: 8s;"></div>
                                </div>
                            </div>
                            <div class="ambiente-content-col">
                                <h3>Quartos e Closets</h3>
                                <p>Ambientes íntimos projetados para o seu máximo conforto e elegância. Roupeiros com portas de correr deslizantes, painéis de cama sofisticados e closets iluminados com divisórias personalizadas.</p>
                                <a href="#" class="btn-tech-outline">VER MAIS <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>

                        <!-- Escritório / Corporativo -->
                        <div class="ambiente-row reveal-up">
                            <div class="ambiente-slider-col">
                                <div class="ambiente-slider">
                                    <div class="a-slide" style="background-image: url('imgs/home_corporate_office.png'); animation-delay: 0s;"></div>
                                    <div class="a-slide" style="background-image: url('imgs/premium_closet.png'); animation-delay: 4s;"></div>
                                    <div class="a-slide" style="background-image: url('imgs/marceneiro.jpg'); animation-delay: 8s;"></div>
                                </div>
                            </div>
                            <div class="ambiente-content-col">
                                <h3>Corporativo e Home Office</h3>
                                <p>Estações de trabalho em MDF premium, salas de reunião imponentes e home offices modernos. Ergonomia, durabilidade e estética alinhadas à produtividade da sua empresa.</p>
                                <a href="#" class="btn-tech-outline">VER MAIS <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
`;

if (!html.includes('id="ambientes"')) {
    html = html.replace('<!-- Authority Section -->', ambientesHtml + '\n            <!-- Authority Section -->');
    fs.writeFileSync('index.html', html);
    console.log('HTML inserted.');
}

// 2. Insert CSS and fix hero mobile padding
let css = fs.readFileSync('style.css', 'utf8');

// Fix mobile hero padding
css = css.replace(/padding:\s*120px\s*0\s*60px\s*0;/, 'padding: 120px 0 100px 0;\n        margin-bottom: 30px;');

const ambientesCss = `
/* --- Ambientes Section --- */
.section-ambientes {
    background-color: var(--bg-base);
    border-top: 1px solid var(--border);
    padding: 80px 0;
}

.ambientes-list {
    display: flex;
    flex-direction: column;
    gap: 60px;
    margin-top: 50px;
}

.ambiente-row {
    display: flex;
    align-items: center;
    gap: 50px;
    background: linear-gradient(135deg, #111115 0%, #07070a 100%);
    border: 1px solid var(--border);
    border-radius: var(--radius-card);
    padding: 30px;
    transition: var(--transition);
}

.ambiente-row:hover {
    border-color: rgba(234, 179, 8, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.55);
    background: linear-gradient(135deg, #16161d 0%, #0b0b0f 100%);
}

.ambiente-row.row-reverse {
    flex-direction: row-reverse;
}

.ambiente-slider-col {
    flex: 1;
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    height: 380px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.ambiente-slider {
    width: 100%;
    height: 100%;
    position: relative;
}

.a-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0;
    animation: ambienteSlideFade 12s infinite;
}

@keyframes ambienteSlideFade {
    0% { opacity: 0; transform: scale(1.05); }
    8% { opacity: 1; transform: scale(1); }
    33% { opacity: 1; transform: scale(1); }
    41% { opacity: 0; transform: scale(1.05); }
    100% { opacity: 0; transform: scale(1.05); }
}

.ambiente-content-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
}

.ambiente-content-col h3 {
    font-size: 2rem;
    color: var(--text-primary);
    font-weight: 700;
}

.ambiente-content-col p {
    color: var(--text-secondary);
    line-height: 1.7;
    font-size: 1.05rem;
}

@media (max-width: 900px) {
    .ambiente-row, .ambiente-row.row-reverse {
        flex-direction: column;
        gap: 30px;
    }
    .ambiente-slider-col {
        width: 100%;
        height: 280px;
    }
    .ambiente-content-col {
        width: 100%;
    }
}
`;

if (!css.includes('.section-ambientes')) {
    css += '\\n' + ambientesCss;
    fs.writeFileSync('style.css', css);
    console.log('CSS inserted.');
}
