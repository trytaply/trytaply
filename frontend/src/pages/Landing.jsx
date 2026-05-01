import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  // Dieser Effekt sorgt dafür, dass die Seite ganz oben startet und 
  // das Standard-CSS von React (wie die weißen Ränder) ignoriert wird.
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.backgroundColor = "#06090F";
    return () => {
      document.body.style.margin = "";
    };
  }, []);

  return (
    <div className="landing-wrapper">
      {/* Wir betten das CSS direkt ein, damit es exakt wie in deiner Vorlage aussieht */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
        
        .landing-wrapper {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #06090F;
          color: #fff;
          overflow-x: hidden;
          --blue: #0A84FF; --cyan: #32D6FF; --dark: #06090F;
          --border: rgba(255,255,255,.07); --text: rgba(255,255,255,.48);
          --green: #4ADE80;
        }

        .grad { background: linear-gradient(90deg, var(--blue), var(--cyan)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 6%; height: 66px;
          background: rgba(5,13,30,.85); backdrop-filter: blur(24px);
          border-bottom: 1px solid var(--border);
        }

        .hero {
          min-height: 100vh; display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 100px 6% 60px; position: relative; text-align: center;
        }

        .hero-glow {
          position: absolute; width: 900px; height: 900px; border-radius: 50%;
          background: radial-gradient(circle, rgba(10,132,255,.1), transparent 65%);
          top: 50%; left: 50%; transform: translate(-50%, -55%); pointer-events: none;
        }

        .hero-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image: linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%);
        }

        .hero h1 {
          font-size: clamp(2.6rem, 7vw, 5.4rem); font-weight: 900;
          letter-spacing: -.05em; line-height: 1.1; color: #ffffff;
          margin-bottom: 20px; position: relative; z-index: 1;
        }

        /* Phone Cluster Styling */
        .phones { display: flex; gap: 14px; align-items: flex-end; justify-content: center; position: relative; z-index: 1; margin-top: 40px; }
        .phone { width: 200px; border-radius: 34px; background: #04080F; border: 2px solid rgba(255,255,255,0.1); overflow: hidden; box-shadow: 0 32px 64px rgba(0,0,0,0.5); }
        .phone.main { width: 218px; transform: translateY(-18px); border-color: var(--blue); }
        .notch { width: 72px; height: 22px; background: #04080F; border-radius: 0 0 12px 12px; margin: 0 auto; }
        .screen { background: #06090F; padding-bottom: 14px; min-height: 300px; text-align: left; }

        /* Buttons */
        .btn-primary {
          padding: 14px 32px; border-radius: 13px;
          background: linear-gradient(135deg, var(--blue), var(--cyan));
          color: #fff; font-weight: 800; border: none; cursor: pointer;
          box-shadow: 0 8px 28px rgba(10,132,255,.3); transition: transform 0.2s;
        }
        .btn-primary:hover { transform: translateY(-2px); }

        .stats { display: flex; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); background: #06090F; }
        .stat { flex: 1; text-align: center; padding: 28px 12px; border-right: 1px solid var(--border); }
        .stat-n { font-size: 2.2rem; font-weight: 900; color: var(--blue); }

        @media (max-width: 768px) {
          .phones { display: none; } /* Auf Mobile verstecken für bessere Übersicht */
          .stats { flex-direction: column; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: 900 }}>trytaply<span className="grad">.</span></span>
        </div>
        <button className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.8rem' }} onClick={() => navigate('/login')}>
          Login
        </button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow"></div>
        <div className="hero-grid"></div>
        
        <div style={{ background: 'rgba(10,132,255,.1)', border: '1px solid var(--blue)', borderRadius: '30px', padding: '5px 14px', fontSize: '0.7rem', color: '#32D6FF', marginBottom: '20px', zIndex: 2 }}>
          Neu · Linz, Österreich · 2025
        </div>

        <h1>
          Das smarte Bestellsystem<br />
          <span className="grad">für dein Restaurant.</span>
        </h1>
        
        <p style={{ color: 'var(--text)', maxWidth: '520px', margin: '0 auto 36px', lineHeight: 1.6, zIndex: 2 }}>
          Gäste scannen. Gäste bestellen. Gäste zahlen – direkt am Tisch.
          Mehr Umsatz, weniger Stress.
        </p>

        <div style={{ display: 'flex', gap: '12px', zIndex: 2 }}>
          <button className="btn-primary" onClick={() => navigate('/register')}>30 Tage gratis testen →</button>
        </div>

        {/* PHONES PREVIEW */}
        <div className="phones">
          {/* Menu Phone */}
          <div className="phone">
            <div className="notch"></div>
            <div className="screen">
               <div style={{ padding: '10px', fontSize: '0.6rem', borderBottom: '1px solid #222' }}>
                 <div style={{ color: 'var(--cyan)' }}>Rizzma Linz</div>
                 <div style={{ fontWeight: 'bold' }}>Tisch 4</div>
               </div>
               <div style={{ padding: '10px' }}>
                 <div style={{ fontSize: '0.7rem', marginBottom: '5px' }}>🍔 Farmhouse Burger</div>
                 <div style={{ fontSize: '0.7rem', color: 'var(--cyan)' }}>€ 13,90</div>
               </div>
            </div>
          </div>

          {/* Payment Phone (Main) */}
          <div className="phone main">
            <div className="notch"></div>
            <div className="screen">
               <div style={{ padding: '15px', textAlign: 'center' }}>
                 <div style={{ fontSize: '0.5rem', color: 'var(--text)' }}>Gesamtbetrag</div>
                 <div style={{ fontSize: '1.5rem', fontWeight: 900 }}>€ 45,43</div>
                 <div style={{ marginTop: '20px', background: 'var(--blue)', padding: '10px', borderRadius: '10px', fontSize: '0.7rem' }}>
                   Jetzt bezahlen
                 </div>
               </div>
            </div>
          </div>

          {/* KDS Phone */}
          <div className="phone">
            <div className="notch"></div>
            <div className="screen">
               <div style={{ padding: '10px', background: '#0b1928', fontSize: '0.6rem' }}>Küche · Live</div>
               <div style={{ margin: '10px', padding: '10px', border: '1px solid var(--blue)', borderRadius: '10px' }}>
                 <div style={{ fontSize: '0.6rem', fontWeight: 'bold' }}>Tisch 4</div>
                 <div style={{ fontSize: '0.5rem' }}>2x Farmhouse</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats">
        <div className="stat"><div className="stat-n">+22%</div><div style={{ fontSize: '0.7rem', color: 'var(--text)' }}>mehr Umsatz</div></div>
        <div className="stat"><div className="stat-n">3 Min</div><div style={{ fontSize: '0.7rem', color: 'var(--text)' }}>schneller</div></div>
        <div className="stat"><div className="stat-n">0 €</div><div style={{ fontSize: '0.7rem', color: 'var(--text)' }}>Setup-Kosten</div></div>
      </div>

      {/* CTA SECTION */}
      <section style={{ padding: '100px 6%', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900 }}>Bereit für den Start?</h2>
        <button className="btn-primary" style={{ marginTop: '30px' }} onClick={() => navigate('/register')}>
          Kostenlos registrieren
        </button>
      </section>
    </div>
  );
};

export default Landing;