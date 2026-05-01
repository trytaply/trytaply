import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Erzwingt, dass die React-Standard-Styles (weiße Ränder) ignoriert werden
    const root = document.getElementById('root');
    if (root) {
      root.style.maxWidth = 'none';
      root.style.padding = '0';
      root.style.margin = '0';
      root.style.width = '100%';
    }
  }, []);

  return (
    <>
      {/* Dein Original-CSS direkt eingebunden */}
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        :root{
          --blue:#0A84FF;--cyan:#32D6FF;--dark:#06090F;--navy:#050D1E;
          --card:#0D1520;--card2:#111B2A;--border:rgba(255,255,255,.07);
          --text:rgba(255,255,255,.48);--green:#4ADE80;--amber:#FBBF24;
        }
        html{scroll-behavior:smooth}
        .landing-page-body {
          font-family:'Plus Jakarta Sans',sans-serif;
          background:var(--dark);
          color:#fff;
          overflow-x:hidden;
          width: 100%;
        }
        .grad{background:linear-gradient(90deg,var(--blue),var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        nav{
          position:fixed;top:0;left:0;right:0;z-index:100;
          display:flex;align-items:center;justify-content:space-between;
          padding:0 6%;height:66px;
          background:rgba(5,13,30,.85);backdrop-filter:blur(24px);
          border-bottom:1px solid var(--border);
        }
        .hero{
          min-height:100vh;display:flex;flex-direction:column;
          align-items:center;justify-content:center;
          padding:100px 6% 60px;position:relative;overflow:hidden;text-align:center;
        }
        .hero-glow{
          position:absolute;width:900px;height:900px;border-radius:50%;
          background:radial-gradient(circle,rgba(10,132,255,.1),transparent 65%);
          top:50%;left:50%;transform:translate(-50%,-55%);pointer-events:none;
        }
        .hero h1{
          font-size:clamp(2.6rem,7vw,5.4rem);font-weight:900;
          letter-spacing:-.05em;line-height:1.0;
          margin-bottom:20px;position:relative;z-index:1;
        }
        .btn-primary{
          padding:14px 32px;border-radius:13px;
          background:linear-gradient(135deg,var(--blue),var(--cyan));
          color:#fff;font-weight:800;font-size:.95rem;
          border:none;cursor:pointer;
          box-shadow:0 8px 28px rgba(10,132,255,.3);
        }
        .phones{display:flex;gap:14px;align-items:flex-end;justify-content:center;position:relative;z-index:1;}
        .phone{width:200px;border-radius:34px;background:#04080F;border:2px solid rgba(255,255,255,.1);overflow:hidden;}
        .phone.main{width:218px;transform:translateY(-18px);border-color:rgba(10,132,255,.3)}
        .stats{display:flex;border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
        .stat{flex:1;text-align:center;padding:28px 12px;border-right:1px solid var(--border)}
        .pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;max-width:900px;margin:0 auto 20px}
        .plan{background:var(--card);border:1.5px solid var(--border);border-radius:20px;padding:26px 22px;}
        /* ... und so weiter für alle deine Styles aus dem HTML ... */
      `}</style>

      <div className="landing-page-body">
        {/* NAV */}
        <nav>
          <div className="nav-logo">
            <span className="nav-brand">trytaply<span className="grad">.</span></span>
          </div>
          <button className="nav-cta" onClick={() => navigate('/register')}>Kostenlos testen →</button>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="hero-glow"></div>
          <div className="hero-badge">Neu · Linz, Österreich · 2025</div>
          <h1> Das smarte Bestellsystem<br /><span className="grad">für dein Restaurant.</span></h1>
          <p className="hero-sub" style={{color: 'rgba(255,255,255,.48)', maxWidth: '520px', margin: '0 auto 36px'}}>
            Gäste scannen. Gäste bestellen. Gäste zahlen – direkt am Tisch.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => navigate('/register')}>30 Tage gratis testen →</button>
          </div>

          <div className="phones">
            {/* Hier kommen deine Phone-Divs aus dem HTML rein */}
            <div className="phone main">
              <div className="screen" style={{padding: '20px'}}>
                <div style={{fontSize: '0.8rem', color: 'var(--cyan)'}}>Rizzma Linz</div>
                <div style={{fontSize: '1.5rem', fontWeight: 900}}>€ 45,43</div>
                <button className="btn-primary" style={{width: '100%', marginTop: '20px', fontSize: '0.7rem'}}>Bezahlen</button>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <div className="stats">
          <div className="stat"><div className="stat-n" style={{fontSize: '2.6rem', fontWeight: 900, color: '#0A84FF'}}>+22%</div><div style={{fontSize: '0.7rem', color: 'rgba(255,255,255,.48)'}}>mehr Umsatz[cite: 1]</div></div>
          <div className="stat"><div className="stat-n" style={{fontSize: '2.6rem', fontWeight: 900, color: '#0A84FF'}}>3 Min</div><div style={{fontSize: '0.7rem', color: 'rgba(255,255,255,.48)'}}>schneller[cite: 1]</div></div>
          <div className="stat"><div className="stat-n" style={{fontSize: '2.6rem', fontWeight: 900, color: '#0A84FF'}}>0 €</div><div style={{fontSize: '0.7rem', color: 'rgba(255,255,255,.48)'}}>Setup-Kosten[cite: 1]</div></div>
        </div>
      </div>
    </>
  );
};

export default Landing;