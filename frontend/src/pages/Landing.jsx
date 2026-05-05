import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const styles = {
    page: {
      minHeight: '100vh', background: '#06090F', color: '#fff',
      fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", overflowX: 'hidden'
    },
    nav: {
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 6%', height: 64,
      background: 'rgba(5,13,30,0.85)', backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.07)'
    },
    logo: { fontSize: '1.3rem', fontWeight: 900, letterSpacing: '-0.03em' },
    logoDot: { background: 'linear-gradient(90deg,#0A84FF,#32D6FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    navBtn: {
      padding: '9px 22px', borderRadius: 10,
      background: 'linear-gradient(135deg,#0A84FF,#32D6FF)',
      color: '#fff', fontWeight: 800, fontSize: '0.85rem',
      border: 'none', cursor: 'pointer', fontFamily: 'inherit'
    },
    hero: {
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '100px 6% 60px', textAlign: 'center', position: 'relative'
    },
    glow: {
      position: 'absolute', width: 800, height: 800, borderRadius: '50%',
      background: 'radial-gradient(circle,rgba(10,132,255,0.1),transparent 65%)',
      top: '50%', left: '50%', transform: 'translate(-50%,-55%)', pointerEvents: 'none'
    },
    badge: {
      display: 'inline-flex', alignItems: 'center', gap: 7,
      background: 'rgba(10,132,255,0.1)', border: '1px solid rgba(10,132,255,0.22)',
      borderRadius: 30, padding: '5px 14px',
      fontSize: '0.7rem', fontWeight: 700, color: '#32D6FF',
      marginBottom: 24, position: 'relative', zIndex: 1
    },
    h1: {
      fontSize: 'clamp(2.4rem,7vw,5rem)', fontWeight: 900,
      letterSpacing: '-0.05em', lineHeight: 1.0,
      marginBottom: 20, position: 'relative', zIndex: 1
    },
    grad: { background: 'linear-gradient(90deg,#0A84FF,#32D6FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    sub: {
      fontSize: 'clamp(0.88rem,1.5vw,1.05rem)', color: 'rgba(255,255,255,0.48)',
      maxWidth: 520, lineHeight: 1.68, margin: '0 auto 36px',
      position: 'relative', zIndex: 1
    },
    btnRow: { display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', position: 'relative', zIndex: 1 },
    btnPrimary: {
      padding: '14px 32px', borderRadius: 13,
      background: 'linear-gradient(135deg,#0A84FF,#32D6FF)',
      color: '#fff', fontWeight: 800, fontSize: '0.95rem',
      border: 'none', cursor: 'pointer', fontFamily: 'inherit',
      boxShadow: '0 8px 28px rgba(10,132,255,0.3)'
    },
    btnGhost: {
      padding: '14px 26px', borderRadius: 13,
      border: '1.5px solid rgba(255,255,255,0.14)',
      background: 'transparent', color: '#fff',
      fontWeight: 600, fontSize: '0.95rem',
      cursor: 'pointer', fontFamily: 'inherit'
    },
    stats: { display: 'flex', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' },
    stat: { flex: 1, textAlign: 'center', padding: '28px 12px', borderRight: '1px solid rgba(255,255,255,0.07)' },
    statN: {
      fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 900, letterSpacing: '-0.05em',
      background: 'linear-gradient(135deg,#0A84FF,#32D6FF)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1
    },
    statL: { fontSize: '0.72rem', color: 'rgba(255,255,255,0.48)', marginTop: 4 },
    section: { padding: '80px 6%', maxWidth: 1060, margin: '0 auto' },
    sectionTitle: { textAlign: 'center', marginBottom: 48 },
    eyebrow: { fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#32D6FF', marginBottom: 12, display: 'block' },
    h2: { fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 12 },
    featGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 14 },
    featCard: { background: '#0D1520', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 18, padding: 26 },
    featIcon: {
      width: 46, height: 46, borderRadius: 13,
      background: 'rgba(10,132,255,0.1)', border: '1px solid rgba(10,132,255,0.18)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '1.3rem', marginBottom: 16
    },
    pricingGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: 14, maxWidth: 880, margin: '0 auto 20px' },
    plan: { background: '#0D1520', border: '1.5px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '26px 22px', display: 'flex', flexDirection: 'column' },
    planFeat: { borderColor: 'rgba(10,132,255,0.4)', background: 'linear-gradient(160deg,#0c1e3a,#081530)' },
    cta: {
      padding: '80px 6%', textAlign: 'center',
      background: 'linear-gradient(135deg,rgba(10,132,255,0.07),rgba(50,214,255,0.04))',
      borderTop: '1px solid rgba(10,132,255,0.12)'
    },
    footer: {
      padding: '32px 6%', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.07)',
      flexWrap: 'wrap', gap: 12
    }
  };

  const features = [
    { icon: '📱', title: 'QR-Code Bestellung', desc: 'Gäste scannen – sofort im Browser. Keine App nötig.' },
    { icon: '💳', title: 'Zahlung am Tisch', desc: 'Karte, Apple Pay, Google Pay. Rechnung teilen.' },
    { icon: '👨‍🍳', title: 'Küchendisplay', desc: 'Neue Bestellungen erscheinen sofort in der Küche.' },
    { icon: '📊', title: 'Analytics', desc: 'Welche Gerichte gehen wann? Datenbasierte Entscheidungen.' },
    { icon: '🌍', title: 'Mehrsprachig', desc: 'DE / EN / TR – perfekt für Tourismus.' },
    { icon: '🔒', title: 'RKSV-konform', desc: 'Vollständig nach österreichischer Kassenpflicht.' },
  ];

  const plans = [
    { name: 'Starter', price: '49', desc: 'Für kleine Cafes & Bistros', features: ['Bis 20 Tische', 'QR-Bestellung', 'Karte & Apple Pay', 'KDS', 'RKSV'], featured: false },
    { name: 'Professional', price: '79', desc: 'Der Standard für Restaurants', features: ['Bis 60 Tische', 'Alles aus Starter', 'Analytics', 'Upselling', 'Split-Bill', 'Mehrsprachig'], featured: true },
    { name: 'Enterprise', price: '119', desc: 'Für mehrere Standorte', features: ['Unbegrenzte Tische', 'Alles aus Pro', 'Multi-Location', 'API-Zugang', 'Prioritäts-Support'], featured: false },
  ];

  return (
    <div style={styles.page}>
      {/* NAV */}
      <nav style={styles.nav}>
        <span style={styles.logo}>trytaply<span style={styles.logoDot}>.</span></span>
        <div style={{ display: 'flex', gap: 12 }}>
          {token
            ? <button style={styles.navBtn} onClick={() => navigate('/dashboard')}>Dashboard →</button>
            : <>
                <button style={styles.btnGhost} onClick={() => navigate('/login')}>Login</button>
                <button style={styles.navBtn} onClick={() => navigate('/register')}>Kostenlos testen →</button>
              </>
          }
        </div>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.glow} />
        <div style={styles.badge}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#32D6FF', animation: 'pulse 2s infinite', display: 'inline-block' }} />
          Neu · Linz, Österreich · 2025
        </div>
        <h1 style={styles.h1}>
          Das smarte Bestellsystem<br />
          <span style={styles.grad}>für dein Restaurant.</span>
        </h1>
        <p style={styles.sub}>
          Gäste scannen. Gäste bestellen. Gäste zahlen – direkt am Tisch.
          Kein Kellner für die Bestellung nötig. Mehr Umsatz, weniger Stress.
        </p>
        <div style={styles.btnRow}>
          <button style={styles.btnPrimary} onClick={() => navigate('/register')}>30 Tage gratis testen →</button>
          <button style={styles.btnGhost} onClick={() => navigate('/login')}>Einloggen</button>
        </div>
      </section>

      {/* STATS */}
      <div style={styles.stats}>
        {[['+ 22%', 'mehr Umsatz pro Tisch'], ['3 Min', 'schnellere Bestellung'], ['0 €', 'Einrichtungsgebühr'], ['5 Min', 'Setup-Zeit']].map(([n, l]) => (
          <div key={l} style={{ ...styles.stat }}>
            <div style={styles.statN}>{n}</div>
            <div style={styles.statL}>{l}</div>
          </div>
        ))}
      </div>

      {/* FEATURES */}
      <div style={{ padding: '80px 6%', background: '#06090F' }}>
        <div style={styles.sectionTitle}>
          <span style={styles.eyebrow}>Features</span>
          <h2 style={styles.h2}>Alles was dein Restaurant braucht</h2>
        </div>
        <div style={{ ...styles.featGrid, maxWidth: 1060, margin: '0 auto' }}>
          {features.map(f => (
            <div key={f.title} style={styles.featCard}>
              <div style={styles.featIcon}>{f.icon}</div>
              <div style={{ fontWeight: 800, marginBottom: 8 }}>{f.title}</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.48)', lineHeight: 1.6 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PRICING */}
      <div style={{ padding: '80px 6%' }}>
        <div style={styles.sectionTitle}>
          <span style={styles.eyebrow}>Preise</span>
          <h2 style={styles.h2}>Einfach. Fair. <span style={styles.grad}>Kein Verstecktes.</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.48)', fontSize: '0.9rem' }}>Monatlich kündbar · 30 Tage kostenlos · Keine Kreditkarte</p>
        </div>
        <div style={styles.pricingGrid}>
          {plans.map(p => (
            <div key={p.name} style={{ ...styles.plan, ...(p.featured ? styles.planFeat : {}) }}>
              {p.featured && <div style={{ fontSize: '0.6rem', fontWeight: 800, background: 'linear-gradient(90deg,#0A84FF,#32D6FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 10 }}>⭐ BELIEBTESTES PAKET</div>}
              <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#32D6FF', marginBottom: 8 }}>{p.name}</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, marginBottom: 4 }}>
                <span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>€</span>
                <span style={{ fontSize: '2.8rem', fontWeight: 900, letterSpacing: '-0.06em', lineHeight: 1 }}>{p.price}</span>
              </div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>/Monat · monatlich kündbar</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: 20, minHeight: 40 }}>{p.desc}</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 'auto', paddingBottom: 22 }}>
                {p.features.map(feat => (
                  <li key={feat} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>
                    <span style={{ width: 17, height: 17, borderRadius: 5, background: 'rgba(10,132,255,0.18)', color: '#32D6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate('/register')}
                style={{
                  marginTop: 'auto', width: '100%', padding: 12, borderRadius: 12,
                  fontSize: '0.85rem', fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit',
                  background: p.featured ? 'linear-gradient(135deg,#0A84FF,#32D6FF)' : 'transparent',
                  border: p.featured ? 'none' : '1.5px solid rgba(255,255,255,0.12)',
                  color: '#fff'
                }}>
                30 Tage gratis →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={styles.cta}>
        <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: 14 }}>
          Bereit für smarte <span style={styles.grad}>Gastronomie?</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.48)', marginBottom: 32, maxWidth: 440, margin: '0 auto 32px', lineHeight: 1.65 }}>
          30 Tage kostenlos. Keine Kreditkarte. Setup in 5 Minuten.
        </p>
        <button style={{ ...styles.btnPrimary, fontSize: '1rem', padding: '16px 40px' }} onClick={() => navigate('/register')}>
          Jetzt kostenlos starten →
        </button>
      </div>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <span style={{ fontSize: '1.1rem', fontWeight: 900 }}>trytaply<span style={styles.logoDot}>.</span></span>
        <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)' }}>© 2025 trytaply · Linz, Österreich · Scan. Order. Done.</span>
        <div style={{ display: 'flex', gap: 20 }}>
          {['Datenschutz', 'Impressum', 'AGB'].map(l => (
            <a key={l} href="#" style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>{l}</a>
          ))}
        </div>
      </footer>

      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.2}}`}</style>
    </div>
  );
}