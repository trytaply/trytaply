import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Erzwingt das Full-Width Layout ohne React-Einschränkungen
    const root = document.getElementById('root');
    if (root) {
      root.style.maxWidth = 'none';
      root.style.padding = '0';
      root.style.margin = '0';
      root.style.width = '100%';
    }
    document.body.style.margin = "0";
    document.body.style.backgroundColor = "#06090F";
  }, []);

  return (
    <div className="landing-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
        
        .landing-root {
          --blue: #0A84FF; --cyan: #32D6FF; --dark: #06090F;
          --border: rgba(255,255,255,.07); --text: rgba(255,255,255,.48);
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: var(--dark);
          color: #fff;
          min-height: 100vh;
          width: 100%;
          position: relative;
        }

        /* Hintergrund-Grid & Glow */
        .hero-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image: 
            linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%);
        }

        .hero-glow {
          position: absolute; top: 30%; left: 50%; transform: translate(-50%, -50%);
          width: 80vw; height: 60vh;
          background: radial-gradient(circle, rgba(10,132,255,0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Nav */
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 6%; height: 70px;
          background: rgba(6, 9, 15, 0.8); backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
        }

        /* Hero Content */
        .hero {
          padding: 140px 6% 60px;
          display: flex; flex-direction: column; align-items: center;
          text-align: center; position: relative; z-index: 10;
        }

        .badge {
          background: rgba(10,132,255,0.1); color: var(--cyan);
          padding: 6px 16px; border-radius: 100px; font-size: 0.8rem;
          border: 1px solid rgba(10,132,255,0.2); margin-bottom: 24px;
        }

        h1 {
          font-size: clamp(2.5rem, 8vw, 4.8rem); font-weight: 900;
          line-height: 1.05; letter-spacing: -0.04em; margin-bottom: 24px;
        }

        .grad {
          background: linear-gradient(90deg, var(--blue), var(--cyan));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }

        .subtext {
          color: var(--text); max-width: 580px; font-size: 1.1rem;
          line-height: 1.6; margin-bottom: 40px;
        }

        /* Buttons */
        .btn-container { display: flex; gap: 16px; margin-bottom: 80px; }
        .btn-primary {
          background: var(--blue); color: #fff; padding: 16px 32px;
          border-radius: 12px; font-weight: 700; border: none; cursor: pointer;
          box-shadow: 0 0 20px rgba(10,132,255,0.3);
        }
        .btn-secondary {
          background: rgba(255,255,255,0.05); color: #fff; padding: 16px 32px;
          border-radius: 12px; font-weight: 700; border: 1px solid var(--border); cursor: pointer;
        }

        /* Phones */
        .phones-container {
          display: flex; align-items: flex-end; gap: 20px;
          perspective: 1000px;
        }
        .phone {
          width: 210px; height: 420px; background: #04080F;
          border-radius: 36px; border: 2px solid var(--border);
          box-shadow: 0 40px 80px rgba(0,0,0,0.6);
          overflow: hidden; position: relative;
        }
        .phone.center {
          width: 240px; height: 480px; border-color: var(--blue);
          z-index: 2; transform: translateY(-20px);
        }
        .notch {
          width: 80px; height: 20px; background: #04080F;
          margin: 0 auto; border-radius: 0 0 14px 14px;
        }

        /* Stats */
        .stats {
          display: flex; border-top: 1px solid var(--border);
          background: rgba(255,255,255,0.01);
        }
        .stat {
          flex: 1; padding: 60px 20px; text-align: center;
          border-right: 1px solid var(--border);
        }
        .stat h2 { font-size: 3rem; font-weight: 900; color: var(--blue); margin-bottom: 8px; }
        .stat p { color: var(--text); font-size: 0.9rem; }
      `}</style>

      <div className="hero-grid"></div>
      <div className="hero-glow"></div>

      <nav>
        <div style={{fontWeight: 900, fontSize: '1.4rem'}}>trytaply<span className="grad">.</span></div>
        <button className="btn-primary" style={{padding: '8px 20px'}} onClick={() => navigate('/register')}>Kostenlos testen</button>
      </nav>

      <section className="hero">
        <div className="badge">• Neu · Linz, Österreich · 2025</div>
        <h1>Das smarte Bestellsystem<br/><span className="grad">für dein Restaurant.</span></h1>
        <p className="subtext">
          Gäste scannen. Gäste bestellen. Gäste zahlen – direkt am Tisch.<br/>
          Kein Kellner für die Bestellung nötig. Mehr Umsatz, weniger Stress.
        </p>

        <div className="btn-container">
          <button className="btn-primary" onClick={() => navigate('/register')}>30 Tage gratis testen →</button>
          <button className="btn-secondary">Demo ansehen</button>
        </div>

        <div className="phones-container">
          {/* Linkes Phone */}
          <div className="phone">
            <div className="notch"></div>
            <div style={{padding: '15px', fontSize: '0.7rem', textAlign: 'left'}}>
               <div style={{color: 'var(--cyan)'}}>Rizzma Linz</div>
               <div style={{fontWeight: 800, margin: '5px 0'}}>Tisch 4</div>
               <div style={{marginTop: '20px', background: '#0D1520', padding: '10px', borderRadius: '10px'}}>
                  🍔 Farmhouse Burger <span style={{float: 'right'}}>€ 13,90</span>
               </div>
            </div>
          </div>
          
          {/* Mittleres Phone */}
          <div className="phone center">
            <div className="notch"></div>
            <div style={{padding: '25px', textAlign: 'center'}}>
               <div style={{fontSize: '0.8rem', color: var(--text)}}>Gesamtbetrag</div>
               <div style={{fontSize: '2.2rem', fontWeight: 900, margin: '15px 0'}}>€ 45,43</div>
               <div style={{background: 'var(--blue)', padding: '15px', borderRadius: '12px', fontWeight: 900, marginTop: '100px'}}>€ 45,43 bezahlen ✓</div>
            </div>
          </div>

          {/* Rechtes Phone */}
          <div className="phone">
            <div className="notch"></div>
            <div style={{padding: '15px', fontSize: '0.7rem', textAlign: 'left'}}>
               <div style={{background: '#0b1928', padding: '10px', borderRadius: '8px'}}>Küche - RIZZMA</div>
               <div style={{border: '1px solid var(--blue)', margin: '10px 0', padding: '10px', borderRadius: '8px'}}>
                 <b>Tisch 4</b><br/>2x Farmhouse
               </div>
            </div>
          </div>
        </div>
      </section>

      <div className="stats">
        <div className="stat"><h2>+22%</h2><p>mehr Umsatz</p></div>
        <div className="stat"><h2>3 Min</h2><p>schneller[cite: 1]</p></div>
        <div className="stat" style={{border: 'none'}}><h2>0 €</h2><p>Setup-Kosten[cite: 1]</p></div>
      </div>
    </div>
  );
};

export default Landing;