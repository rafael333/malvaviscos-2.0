import React, { useState } from 'react';
import '../pages/Guide.css';

interface MarshmallowGuideProps {
    onBack: () => void;
}

const MarshmallowGuide: React.FC<MarshmallowGuideProps> = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState<'tab1' | 'tab2'>('tab1');
    const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
    const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

    const toggleAccordion = (id: string) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    const toggleFlip = (index: number) => {
        setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }));
    };

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            {/* Header */}
            <header className="flex items-center p-4 justify-between sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
                <button onClick={onBack} className="text-primary size-10 flex items-center justify-center cursor-pointer">
                    <span className="material-symbols-outlined">arrow_back_ios</span>
                </button>
                <h2 className="text-[#1b120d] dark:text-white text-lg font-bold">Guía Completa</h2>
                <div className="w-10"></div>
            </header>

            <div className="guide-content">
                {/* HEADER SECTION */}
                <div className="guide-header">
                    <div className="main-title">Malvaviscos</div>
                    <div className="sub-title">Caseros</div>
                    <div className="guide-tag">Guía completa sin horno</div>
                </div>

                {/* ALERT */}
                <div className="alert-box">
                    <p className="alert-text">
                        ⚠️ <span style={{ textDecoration: 'underline' }}>IMPORTANTE:</span> Los malvaviscos caseros son sensibles a
                        la humedad. El secreto está en cocinar el almíbar al punto exacto y dejar secar muy bien.
                    </p>
                </div>

                {/* INGREDIENTS */}
                <h2 className="section-title">Ingredientes Exactos</h2>
                <div className="grid-4">
                    <div className="card">
                        <div className="card-header">1. Hidratar</div>
                        <ul className="ingredient-list">
                            <li className="ingredient-item"><i className="ri-drop-line"></i> 12g Gelatina</li>
                            <li className="ingredient-item"><i className="ri-cup-line"></i> 60ml Agua</li>
                        </ul>
                    </div>
                    <div className="card">
                        <div className="card-header">2. Almíbar</div>
                        <ul className="ingredient-list">
                            <li className="ingredient-item"><i className="ri-spoon-line"></i> 200g Azúcar</li>
                            <li className="ingredient-item"><i className="ri-contrast-drop-line"></i> 120ml Agua</li>
                            <li className="ingredient-item"><i className="ri-honey-pot-line"></i> 100g Glucosa</li>
                        </ul>
                    </div>
                    <div className="card">
                        <div className="card-header">3. Finalizar</div>
                        <ul className="ingredient-list">
                            <li className="ingredient-item"><i className="ri-magic-line"></i> 1 cdta Vainilla</li>
                            <li className="ingredient-item"><i className="ri-palette-line"></i> Colorante Gel</li>
                            <li className="ingredient-item"><i className="ri-shining-line"></i> Pizca de Sal</li>
                        </ul>
                    </div>
                    <div className="card">
                        <div className="card-header">4. Espolvorear</div>
                        <ul className="ingredient-list">
                            <li className="ingredient-item"><i className="ri-snowy-line"></i> 100g Azúcar Glass</li>
                            <li className="ingredient-item"><i className="ri-seedling-line"></i> 100g Fécula Maíz</li>
                        </ul>
                    </div>
                </div>

                {/* PASO A PASO */}
                <h2 className="section-title">Paso a Paso Infalible</h2>
                <div className="step-container">
                    {/* Paso 1 */}
                    <div className="step-card">
                        <div className="step-number">01</div>
                        <h3 className="step-title">Hidratar la Gelatina</h3>
                        <div className="step-content">
                            <p>Mezcla la gelatina en polvo con los 60ml de agua fría en un tazón pequeño. Remueve bien y deja
                                reposar 5-10 minutos hasta que absorba el líquido y parezca una "esponja".</p>
                        </div>
                    </div>

                    {/* Paso 2 */}
                    <div className="step-card">
                        <div className="step-number">02</div>
                        <h3 className="step-title">El Almíbar (Punto Exacto)</h3>
                        <div className="step-content">
                            <p>En una olla, coloca azúcar, agua y glucosa. Lleva a fuego medio sin revolver. <br /><br />
                                <strong>🌡️ Temperatura:</strong> 115°C - 118°C (Punto bola blanda).
                            </p>
                            <div className="tip-box">
                                <div className="tip-title"><i className="ri-lightbulb-flash-line"></i> SIN TERMÓMETRO:</div>
                                <p>Deja caer un poco de almíbar en un vaso con agua fría. Si puedes formar una bolita suave y
                                    flexible con los dedos, ¡está listo!</p>
                            </div>
                        </div>
                    </div>

                    {/* Paso 3 */}
                    <div className="step-card">
                        <div className="step-number">03</div>
                        <h3 className="step-title">Batir, Batir, Batir</h3>
                        <div className="step-content">
                            <p>Derrite la gelatina hidratada (microondas 15 seg). Colócala en la batidora. Enciende y agrega el
                                almíbar caliente en forma de hilo por el borde.<br /> Sube a velocidad máxima y bate 8-12 minutos
                                hasta obtener una mezcla blanca, brillante
                                y que forme picos firmes. Agrega vainilla y colorante al final.</p>
                        </div>
                    </div>

                    {/* Paso 4 */}
                    <div className="step-card">
                        <div className="step-number">04</div>
                        <h3 className="step-title">Dejar Firmar</h3>
                        <div className="step-content">
                            <p>Engrasa un molde y espolvorea con la mezcla de polvos (Glass + Maicena). Vierte la mezcla, alisa
                                rápido y cubre con más polvo.<br /> ⏳ <strong>Tiempo:</strong> Deja reposar 6-8 horas a
                                temperatura ambiente.</p>
                        </div>
                    </div>
                </div>

                {/* MASA MOLDEABLE TABS */}
                <h2 className="section-title">Técnicas de Moldeado</h2>
                <div className="tabs-container">
                    <div className="tab-headers">
                        <button
                            className={`tab-btn ${activeTab === 'tab1' ? 'active' : ''}`}
                            onClick={() => setActiveTab('tab1')}
                        >
                            🖐️ Opción 1: Con las Manos
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'tab2' ? 'active' : ''}`}
                            onClick={() => setActiveTab('tab2')}
                        >
                            🎨 Opción 2: Manga Pastelera
                        </button>
                    </div>

                    <div id="tab1" className={`tab-content ${activeTab === 'tab1' ? 'active' : ''}`}>
                        <p><strong>Perfecto para figuras detalladas (conejos, personajes).</strong><br /><br /> 1. Corta un trozo
                            del malvavisco ya firme (reposado 8h).<br /> 2. Amasa con las manos agregando poco a poco la mezcla
                            "antiadherente" (azúcar glass + maicena).<br /> 3. El punto es cuando parece plastilina: no se pega,
                            se estira sin romperse y mantiene la forma.<br /><br />
                            <span className="highlight">TIP:</span> Si se seca, agrega una gotita de agua.
                        </p>
                    </div>
                    <div id="tab2" className={`tab-content ${activeTab === 'tab2' ? 'active' : ''}`}>
                        <p><strong>Perfecto para formas rápidas y fluidas.</strong><br /><br /> 1. Usa la mezcla RECIÉN batida (aún
                            tibia y fluida).<br /> 2. Coloca en manga pastelera con boquilla redonda.<br /> 3. Haz las formas
                            directamente sobre una bandeja con maicena.<br /><br />
                            <span className="highlight">TIP:</span> Trabaja rápido antes de que la gelatina cuaje.
                        </p>
                    </div>
                </div>

                {/* CONEJITO SECTION */}
                <div className="accordion-section">
                    <h2 className="section-title" style={{ color: 'var(--pink)' }}>🐰 Moldeado: Conejito Detallado</h2>

                    <div className="accordion-item">
                        <div className={`accordion-header ${activeAccordion === 'c1' ? 'active' : ''}`} onClick={() => toggleAccordion('c1')}>
                            <span>1. CUERPO (Base)</span>
                            <i className="ri-arrow-down-s-line accordion-icon"></i>
                        </div>
                        <div className="accordion-body" style={{ maxHeight: activeAccordion === 'c1' ? '1000px' : '0' }}>
                            <div className="accordion-content">
                                <div className="text-aid">
                                    <p><strong>Paso A:</strong> Haz una bolita grande de 3-4 cm (cuerpo). Rueda hasta que esté
                                        lisa.<br />
                                        <strong>Paso B:</strong> Haz una bolita más pequeña de 2 cm (cabeza).<br />
                                        <strong>Unión:</strong> Humedece un pincel con poquita agua, toca el cuerpo y pega la
                                        cabeza encima presionando suavemente.
                                    </p>
                                </div>
                                <div className="visual-aid">
                                    <div className="shape-circle" style={{ width: '120px', height: '120px' }}></div>
                                    <div className="shape-circle" style={{ width: '80px', height: '80px', position: 'absolute', top: '40px' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <div className={`accordion-header ${activeAccordion === 'c2' ? 'active' : ''}`} onClick={() => toggleAccordion('c2')}>
                            <span>2. OREJAS (Forma Gota)</span>
                            <i className="ri-arrow-down-s-line accordion-icon"></i>
                        </div>
                        <div className="accordion-body" style={{ maxHeight: activeAccordion === 'c2' ? '1000px' : '0' }}>
                            <div className="accordion-content">
                                <div className="text-aid">
                                    <p>Haz 2 gotitas alargadas. Aplástalas un poco con el dedo pero deja volumen en la base.
                                        <br />
                                        <strong>Tip:</strong> Deja secar la cabeza 10 min antes de pegar las orejas para que no
                                        se caigan por el peso. Pégalas ligeramente hacia atrás.
                                    </p>
                                </div>
                                <div className="visual-aid">
                                    <div className="shape-drop" style={{ marginRight: '20px' }}></div>
                                    <div className="shape-drop" style={{ transform: 'scaleX(-1) rotate(45deg)' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <div className={`accordion-header ${activeAccordion === 'c3' ? 'active' : ''}`} onClick={() => toggleAccordion('c3')}>
                            <span>3. PATITAS Y COLITA</span>
                            <i className="ri-arrow-down-s-line accordion-icon"></i>
                        </div>
                        <div className="accordion-body" style={{ maxHeight: activeAccordion === 'c3' ? '1000px' : '0' }}>
                            <div className="accordion-content">
                                <div className="text-aid">
                                    <p><strong>Patitas:</strong> 2 bolitas pequeñas aplastadas. Pégalas al frente en la base del
                                        cuerpo.<br />
                                        <strong>Colita:</strong> 1 bolita pequeña pegada atrás. Puedes picarla con un palillo
                                        para dar textura de pelaje.
                                    </p>
                                </div>
                                <div className="visual-aid">
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <div className="shape-circle" style={{ width: '50px', height: '50px' }}></div>
                                        <div className="shape-circle" style={{ width: '50px', height: '50px' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <div className={`accordion-header ${activeAccordion === 'c4' ? 'active' : ''}`} onClick={() => toggleAccordion('c4')}>
                            <span>4. CARITA (Expresión)</span>
                            <i className="ri-arrow-down-s-line accordion-icon"></i>
                        </div>
                        <div className="accordion-body" style={{ maxHeight: activeAccordion === 'c4' ? '1000px' : '0' }}>
                            <div className="accordion-content">
                                <div className="text-aid">
                                    <p><strong>Ojos:</strong> Bolitas negras minúsculas o plumón comestible.<br />
                                        <strong>Nariz:</strong> Triángulo rosa pequeño.<br />
                                        <strong>Boca:</strong> Marca una "Y" invertida con un palillo o dibuja con tinta negra
                                        comestible.
                                    </p>
                                </div>
                                <div className="visual-aid">
                                    <span style={{ fontSize: '100px' }}>🐰</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FLORES FLIP CARDS */}
                <h2 className="section-title" style={{ color: 'var(--dark-purple)' }}>🌺 Moldeado: Flores 3D</h2>
                <div className="flower-grid">

                    {/* Flor 1 */}
                    <div className={`flip-card ${flippedCards[1] ? 'flipped' : ''}`} onClick={() => toggleFlip(1)}>
                        <div className="flip-inner">
                            <div className="flip-front">
                                <i className="ri-flower-line flower-icon"></i>
                                <div className="flower-title">Flor Simple</div>
                                <div className="tap-hint">Tap para ver pasos 👆</div>
                            </div>
                            <div className="flip-back">
                                <h3 style={{ marginBottom: '20px', color: 'var(--pink)' }}>Pasos:</h3>
                                <p style={{ fontSize: '24px', lineHeight: 1.5 }}>
                                    1. Haz un centro redondo aplastado.<br /> 2. Haz 5 gotitas para pétalos.<br /> 3. Pega los
                                    pétalos alrededor del centro.<br /> 4. Marca una línea central en cada pétalo con un
                                    palillo.<br />
                                    <br /><strong>Secado:</strong> 2-4 horas.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Flor 2 */}
                    <div className={`flip-card ${flippedCards[2] ? 'flipped' : ''}`} onClick={() => toggleFlip(2)}>
                        <div className="flip-inner">
                            <div className="flip-front">
                                <i className="ri-plant-line flower-icon" style={{ color: '#FF8A80' }}></i>
                                <div className="flower-title">Rosa Fácil</div>
                                <div className="tap-hint">Tap para ver pasos 👆</div>
                            </div>
                            <div className="flip-back">
                                <h3 style={{ marginBottom: '20px', color: 'var(--pink)' }}>Pasos (Muy Vendida):</h3>
                                <p style={{ fontSize: '24px', lineHeight: 1.5 }}>
                                    1. Haz un conito base.<br /> 2. Aplasta 6-8 bolitas hasta hacer discos muy finos
                                    (pétalos).<br /> 3. Enrolla el primero sobre el cono.<br /> 4. Pega los demás intercalados,
                                    abriendo los bordes hacia afuera.<br />
                                    <br /><strong>Tip:</strong> Corta la base sobrante.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Flor 3 */}
                    <div className={`flip-card ${flippedCards[3] ? 'flipped' : ''}`} onClick={() => toggleFlip(3)}>
                        <div className="flip-inner">
                            <div className="flip-front">
                                <i className="ri-leaf-line flower-icon" style={{ color: 'var(--green)' }}></i>
                                <div className="flower-title">Con Hojas</div>
                                <div className="tap-hint">Tap para ver pasos 👆</div>
                            </div>
                            <div className="flip-back">
                                <h3 style={{ marginBottom: '20px', color: 'var(--green)' }}>Pasos:</h3>
                                <p style={{ fontSize: '24px', lineHeight: 1.5 }}>
                                    1. Arma una flor simple de 5 pétalos.<br /> 2. Haz 2 óvalos verdes y aplástalos.<br /> 3. Marca
                                    las venas con un tenedor o palillo.<br /> 4. Pega debajo de la flor asomando por los
                                    lados.<br />
                                    <br /><strong>Uso:</strong> Ideal para cupcakes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PERSONAJES UNIVERSAL */}
                <div className="accordion-section">
                    <h2 className="section-title" style={{ color: 'var(--blue)' }}>👧 Personajes: Base Universal</h2>

                    <div className="accordion-item">
                        <div className={`accordion-header ${activeAccordion === 'p1' ? 'active' : ''}`} onClick={() => toggleAccordion('p1')}>
                            <span>1. ESTRUCTURA (Cabeza y Cuerpo)</span>
                            <i className="ri-arrow-down-s-line accordion-icon"></i>
                        </div>
                        <div className="accordion-body" style={{ maxHeight: activeAccordion === 'p1' ? '1000px' : '0' }}>
                            <div className="accordion-content">
                                <div className="text-aid">
                                    <p><strong>Cabeza:</strong> Bolita perfecta (3cm).<br />
                                        <strong>Cuerpo:</strong> Elige CONO (para vestidos) o CILINDRO (para pantalones).<br />
                                        <strong>Técnica Palillo Interno:</strong> Para figuras grandes, atraviesa el cuerpo con
                                        un palillo dejando 1cm fuera y clava la cabeza ahí. ¡Estructura firme!
                                    </p>
                                </div>
                                <div className="visual-aid">
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <div className="shape-circle"
                                            style={{ width: '80px', height: '80px', marginBottom: '-10px', zIndex: 2 }}></div>
                                        <div className="shape-cone"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <div className={`accordion-header ${activeAccordion === 'p2' ? 'active' : ''}`} onClick={() => toggleAccordion('p2')}>
                            <span>2. EXTREMIDADES</span>
                            <i className="ri-arrow-down-s-line accordion-icon"></i>
                        </div>
                        <div className="accordion-body" style={{ maxHeight: activeAccordion === 'p2' ? '1000px' : '0' }}>
                            <div className="accordion-content">
                                <div className="text-aid">
                                    <p><strong>Brazos:</strong> Mini cilindros de 2cm. Afina en la "muñeca".<br />
                                        <strong>Piernas:</strong> Cilindros más gruesos. Pega en la base.<br />
                                        <strong>Pies/Zapatos:</strong> Bolitas o pequeños óvalos de otro color.
                                    </p>
                                </div>
                                <div className="visual-aid">
                                    <div className="shape-cyl" style={{ width: '30px', height: '100px', transform: 'rotate(-20deg)' }}></div>
                                    <div className="shape-cyl"
                                        style={{ width: '30px', height: '100px', transform: 'rotate(20deg)', marginLeft: '20px' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <div className={`accordion-header ${activeAccordion === 'p3' ? 'active' : ''}`} onClick={() => toggleAccordion('p3')}>
                            <span>3. CABELLO Y ROPA</span>
                            <i className="ri-arrow-down-s-line accordion-icon"></i>
                        </div>
                        <div className="accordion-body" style={{ maxHeight: activeAccordion === 'p3' ? '1000px' : '0' }}>
                            <div className="accordion-content">
                                <div className="text-aid">
                                    <p><strong>Cabello:</strong> Aplana masa delgada y corta tiras (planchitas) o haz un "gorro"
                                        de masa y texturiza.<br />
                                        <strong>Ropa:</strong> Añade capas finas sobre el cuerpo base. Agrega lazos (2 gotitas)
                                        o botones (bolitas mini).<br />
                                        <strong>Color:</strong> Tiñe la masa antes de modelar.
                                    </p>
                                </div>
                                <div className="visual-aid">
                                    <i className="ri-shirt-line" style={{ fontSize: '150px', color: 'var(--blue)', opacity: 0.6 }}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TIMELINE & TIPS */}
                <h2 className="section-title">Tiempos y Cuidados</h2>

                <div className="timeline">
                    <div className="time-point">
                        <span className="time-val">30 min</span>
                        <span className="time-desc">Secado entre capas</span>
                    </div>
                    <div className="time-point">
                        <span className="time-val">24 hrs</span>
                        <span className="time-desc">Firme para empacar</span>
                    </div>
                    <div className="time-point">
                        <span className="time-val">48 hrs</span>
                        <span className="time-desc">Dureza total</span>
                    </div>
                </div>

                <div className="tips-grid">
                    <div className="check-item"><i className="ri-checkbox-circle-fill"></i> Manos bien espolvoreadas</div>
                    <div className="check-item"><i className="ri-checkbox-circle-fill"></i> NUNCA refrigerar (humedad)</div>
                    <div className="check-item"><i className="ri-checkbox-circle-fill"></i> Usa colorante en Gel</div>
                    <div className="check-item"><i className="ri-checkbox-circle-fill"></i> Figuras pequeñas venden mejor</div>
                    <div className="check-item"><i className="ri-checkbox-circle-fill"></i> Evita piezas muy gruesas</div>
                    <div className="check-item"><i className="ri-checkbox-circle-fill"></i> Secar bien antes de bolsa</div>
                </div>

                <div className="storage-container">
                    <div className="storage-card">
                        <i className="ri-archive-line storage-icon"></i>
                        <div className="storage-text">Caja Hermética</div>
                    </div>
                    <div className="storage-card">
                        <i className="ri-sun-cloudy-line storage-icon"></i>
                        <div className="storage-text">Lejos del Sol</div>
                    </div>
                    <div className="storage-card">
                        <i className="ri-shopping-bag-3-line storage-icon"></i>
                        <div className="storage-text">Bolsa Celofán</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MarshmallowGuide;
