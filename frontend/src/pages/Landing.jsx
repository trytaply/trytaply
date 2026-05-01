import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Dieser Teil killt die weißen Ränder deines Projekts radikal
    const root = document.getElementById('root');
    if (root) {
      root.style.maxWidth = 'none';
      root.style.padding = '0';
      root.style.margin = '0';
      root.style.width = '100%';
    }
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.backgroundColor = "#06090F";
  }, []);

  return (
    <div className="landing-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
        
        .landing-container {
          --blue:#0A84FF; --cyan:#32D6FF; --dark:#06090F; --navy:#050D1E;
          --card:#0D1520; --card2:#111B2A; --border:rgba(255,255,255,.07);
          --text:rgba(255,255,255,.48); --green:#4ADE80; --amber:#FBBF24;
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: var(--dark);
          color: #fff;
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
        }

        .grad { background: linear-gradient(90deg, var(--blue), var(--cyan)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        
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
          padding: 100px 6% 60px; position: relative; overflow: hidden; text-align: center;
        }

        .hero-glow {
          position: absolute; width: 900px; height: 900px; border-radius: 50%;
          background: radial-gradient(circle, rgba(10,132,255,.1), transparent 65%);
          top: 50%; left: 50%; transform: translate(-50%, -50%); pointer-events: none;
        }

        .hero h1 {
          font-size: clamp(2.6rem, 7vw, 5.4rem); font-weight: 900;
          letter-spacing: -.05em; line-height: 1.0; margin-bottom: 20px; position: relative; z-index: 1;
        }

        .phones { display: flex; gap: 14px; align-items: flex-end; justify-content: center; position: relative; z-index: 1; }
        .phone { width: 200px; border-radius: 34px; background: #04080F; border: 2px solid rgba(255,255,255,.1); overflow: hidden; box-shadow: 0 32px 64px rgba(0,0,0,.65); }
        .phone.main { width: 218px; transform: translateY(-18px); border-color: rgba(10,132,255,.3); }
        .screen { background: #06090F; padding-bottom: 14px; text-align: left; }
        
        .btn-primary {
          padding: 14px 32px; border-radius: 13px;
          background: linear-gradient(135deg, var(--blue), var(--cyan));
          color: #fff; font-weight: 800; border: none; cursor: pointer;
          box-shadow: 0 8px 28px rgba(10,132,255,.3);
        }

        .stats { display: flex; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .stat { flex: 1; text-align: center; padding: 28px 12px; border-right: 1px solid var(--border); }
        .stat-n { font-size: 2.6rem; font-weight: 900; color: var(--blue); }

        .feat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 14px; max-width: 1060px; margin: 0 auto; }
        .feat-card { background: var(--card); border: 1px solid var(--border); border-radius: 18px; padding: 26px; }

        .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; max-width: 900px; margin: 40px auto; }
        .plan { background: var(--card); border: 1.5px solid var(--border); border-radius: 20px; padding: 26px 22px; text-align: left; }
        .plan.feat { border-color: var(--blue); }

        @media (max-width: 768px) {
          .pricing-grid { grid-template-columns: 1fr; }
          .stats { flex-wrap: wrap; }
          .stat { min-width: 50%; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav>
        <div style={{fontWeight: 900, fontSize: '1.25rem'}}>trytaply<span className="grad">.</span></div>
        <div style={{display: 'flex', gap: '20px'}}>
           <button onClick={() => navigate('/login')} style={{background: 'none', border: 'none', color: '#fff', cursor: 'pointer'}}>Login</button>
           <button onClick={() => navigate('/register')} className="btn-primary" style={{padding: '8px 20px'}}>Kostenlos testen</button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-glow"></div>
        <div style={{background: 'rgba(10,132,255,.1)', color: 'var(--cyan)', padding: '5px 15px', borderRadius: '20px', fontSize: '0.7rem', marginBottom: '20px', zIndex: 1}}>
          Neu · Linz, Österreich · 2025
        </div>
        <h1>Das smarte Bestellsystem<br/><span className="grad">für dein Restaurant.</span></h1>
        <p style={{color: 'var(--text)', maxWidth: '520px', margin: '0 auto 40px', lineHeight: 1.6, zIndex: 1}}>
          Gäste scannen. Gäste bestellen. Gäste zahlen – direkt am Tisch.
        </p>
        <div style={{display: 'flex', gap: '15px', marginBottom: '60px', zIndex: 1}}>
          <button className="btn-primary" onClick={() => navigate('/register')}>30 Tage gratis testen →</button>
        </div>

        {/* PHONES CLUSTER */}
        <div className="phones">
          {/* MENU PHONE */}
          <div className="phone side" style={{opacity: 0.6}}>
            <div className="screen">
              <div style={{padding: '10px', background: '#0b1928', fontSize: '0.6rem'}}>Rizzma Linz · Tisch 4</div>
              <div style={{padding: '10px', fontSize: '0.7rem'}}>🍔 Farmhouse Burger <span style={{float: 'right'}}>€ 13,90</span></div>
              <div style={{padding: '10px', fontSize: '0.7rem'}}>🍟 Beef Fries <span style={{float: 'right'}}>€ 6,50</span></div>
            </div>
          </div>
          {/* PAYMENT PHONE */}
          <div className="phone main">
            <div className="screen">
              <div style={{padding: '15px', textAlign: 'center'}}>
                <div style={{fontSize: '0.6rem', color: 'var(--text)'}}>Gesamtbetrag</div>
                <div style={{fontSize: '1.8rem', fontWeight: 900, margin: '10px 0'}}>€ 45,43</div>
                <button className="btn-primary" style={{width: '100%', fontSize: '0.7rem'}}>Bezahlen ✓</button>
              </div>
            </div>
          </div>
          {/* KDS PHONE */}
          <div className="phone side" style={{opacity: 0.6}}>
            <div className="screen">
              <div style={{padding: '10px', background: '#0b1928', fontSize: '0.6rem'}}>Küche · Live</div>
              <div style={{margin: '10px', padding: '10px', border: '1px solid var(--blue)', borderRadius: '8px', fontSize: '0.6rem'}}>
                <b>Tisch 4</b><br/>2x Farmhouse
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats">
        <div className="stat"><div className="stat-n">+22%</div><div style={{color: 'var(--text)', fontSize: '0.8rem'}}>mehr Umsatz</div></div>
        <div className="stat"><div className="stat-n">3 Min</div><div style={{color: 'var(--text)', fontSize: '0.8rem'}}>schneller[cite: 1]</div></div>
        <div className="stat"><div className="stat-n">0 €</div><div style={{color: 'var(--text)', fontSize: '0.8rem'}}>Setup-Kosten[cite: 1]</div></div>
      </div>

      {/* FEATURES */}
      <section style={{padding: '100px 6%'}}>
        <div style={{textAlign: 'center', marginBottom: '60px'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: 900}}>Alles was du brauchst</h2>
          <p style={{color: 'var(--text)'}}>Entwickelt für die österreichische Gastronomie.[cite: 1]</p>
        </div>
        <div className="feat-grid">
          <div className="feat-card"><h3>📱 QR-Bestellung</h3><p style={{color:'var(--text)', fontSize: '0.8rem'}}>Keine App nötig.[cite: 1]</p></div>
          <div className="feat-card"><h3>💳 Zahlung am Tisch</h3><p style={{color:'var(--text)', fontSize: '0.8rem'}}>Apple & Google Pay integriert.[cite: 1]</p></div>
          <div className="feat-card"><h3>🔒 RKSV-konform</h3><p style={{color:'var(--text)', fontSize: '0.8rem'}}>Finanzamt-sicher.[cite: 1]</p></div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{padding: '100px 6%', background: '#07101e'}}>
        <div style={{textAlign: 'center', marginBottom: '40px'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: 900}}>Faire Preise</h2>
        </div>
        <div className="pricing-grid">
          <div className="plan"><h3>Starter</h3><div style={{fontSize: '2rem', fontWeight: 900}}>€ 49</div><p>Bis 20 Tische[cite: 1]</p></div>
          <div className="plan feat"><h3>Pro</h3><div style={{fontSize: '2rem', fontWeight: 900}}>€ 79</div><p>Der Standard für Restaurants.[cite: 1]</p></div>
          <div className="plan"><h3>Enterprise</h3><div style={{fontSize: '2rem', fontWeight: 900}}>€ 119</div><p>Für große Betriebe.[cite: 1]</p></div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{padding: '40px 6%', textAlign: 'center', borderTop: '1px solid var(--border)'}}>
        <div style={{fontWeight: 900, marginBottom: '10px'}}>trytaply.</div>
        <p style={{color: 'var(--text)', fontSize: '0.7rem'}}>© 2025 Linz, Österreich[cite: 1]</p>
      </footer>
    </div>
  );
};

export default Landing;