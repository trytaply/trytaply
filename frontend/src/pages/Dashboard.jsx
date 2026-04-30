import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

export default function Dashboard() {
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);
  const [stats, setStats] = useState({ menuItems: 0, tables: 0, ordersToday: 0, revenue: 0 });
  const [recentOrders, setRecentOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { loadData(); }, []);

  async function loadData() {
    try {
      const restRes = await API.get('/restaurants/me');
      setRestaurant(restRes.data);

      const tabRes = await API.get('/tables');
      const menuRes = await API.get('/menu/my');
      const ordRes = await API.get('/orders/today');

      const todayOrders = ordRes.data || [];
      const revenue = todayOrders.reduce((s, o) => s + (Number(o.TOTAL) || 0), 0);

      setStats({
        menuItems: menuRes.data?.length || 0,
        tables: tabRes.data?.length || 0,
        ordersToday: todayOrders.length,
        revenue: revenue.toFixed(2)
      });
      setRecentOrders(todayOrders.slice(0, 5));
    } catch (e) {
      console.log('Dashboard Ladefehler:', e.message);
    }
    setLoading(false);
  }

  function logout() {
    localStorage.removeItem('token');
    navigate('/login');
  }

  const s = {
    page: { minHeight: '100vh', background: '#06090F', color: '#fff', fontFamily: 'Arial, sans-serif' },
    nav: {
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 32px', height: 60,
      background: '#0D1520', borderBottom: '1px solid rgba(255,255,255,0.07)'
    },
    logo: { fontSize: '1.2rem', fontWeight: 900 },
    logoDot: { background: 'linear-gradient(90deg,#0A84FF,#32D6FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    navLinks: { display: 'flex', gap: 8 },
    navLink: {
      padding: '7px 14px', borderRadius: 8, background: 'transparent',
      border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)',
      cursor: 'pointer', fontSize: '0.82rem', fontWeight: 600, fontFamily: 'inherit'
    },
    navLinkActive: { background: 'rgba(10,132,255,0.12)', borderColor: 'rgba(10,132,255,0.3)', color: '#32D6FF' },
    logoutBtn: {
      padding: '7px 14px', borderRadius: 8,
      background: 'transparent', border: '1px solid rgba(248,113,113,0.3)',
      color: '#f87171', cursor: 'pointer', fontSize: '0.82rem', fontFamily: 'inherit'
    },
    main: { padding: '32px', maxWidth: 1100, margin: '0 auto' },
    welcome: { marginBottom: 28 },
    welcomeH: { fontSize: '1.6rem', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 4 },
    welcomeSub: { fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)' },
    liveBadge: {
      display: 'inline-flex', alignItems: 'center', gap: 5,
      background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.25)',
      borderRadius: 20, padding: '4px 12px', fontSize: '0.7rem', fontWeight: 700, color: '#4ADE80', marginLeft: 10
    },
    statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 14, marginBottom: 28 },
    statCard: { background: '#0D1520', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 20 },
    statVal: {
      fontSize: '2.2rem', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1,
      background: 'linear-gradient(135deg,#0A84FF,#32D6FF)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
    },
    statLabel: { fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', marginTop: 5 },
    grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 },
    card: { background: '#0D1520', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden' },
    cardHeader: { padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    cardTitle: { fontSize: '0.9rem', fontWeight: 800 },
    quickBtn: {
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '14px 16px', cursor: 'pointer',
      background: 'transparent', border: 'none', width: '100%', textAlign: 'left',
      borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#fff', fontFamily: 'inherit'
    },
    quickIcon: {
      width: 40, height: 40, borderRadius: 12,
      background: 'rgba(10,132,255,0.1)', border: '1px solid rgba(10,132,255,0.15)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0
    },
    orderRow: {
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)', fontSize: '0.82rem'
    },
    statusBadge: (status) => ({
      fontSize: '0.6rem', fontWeight: 700, padding: '3px 8px', borderRadius: 20,
      background: status === 'paid' ? 'rgba(74,222,128,0.12)' : status === 'preparing' ? 'rgba(251,191,36,0.12)' : 'rgba(10,132,255,0.12)',
      color: status === 'paid' ? '#4ADE80' : status === 'preparing' ? '#FBBF24' : '#0A84FF',
    }),
    qrSection: { padding: '16px 20px' },
    qrUrl: {
      display: 'block', padding: '10px 14px', background: 'rgba(10,132,255,0.07)',
      border: '1px solid rgba(10,132,255,0.2)', borderRadius: 10,
      fontSize: '0.78rem', color: '#32D6FF', fontFamily: 'monospace', marginTop: 8,
      wordBreak: 'break-all'
    }
  };

  if (loading) return <div style={{ ...s.page, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ color: '#32D6FF', fontSize: '1rem' }}>Lädt...</div>
  </div>;

  return (
    <div style={s.page}>
      {/* NAV */}
      <nav style={s.nav}>
        <span style={s.logo}>trytaply<span style={s.logoDot}>.</span></span>
        <div style={s.navLinks}>
          <button style={{ ...s.navLink, ...s.navLinkActive }}>Dashboard</button>
          <button style={s.navLink} onClick={() => navigate('/dashboard/menu')}>Speisekarte</button>
          <button style={s.navLink} onClick={() => navigate('/dashboard/tables')}>Tische & QR</button>
          <button style={s.logoutBtn} onClick={logout}>Ausloggen</button>
        </div>
      </nav>

      <main style={s.main}>
        {/* Welcome */}
        <div style={s.welcome}>
          <div style={s.welcomeH}>
            Willkommen! 👋
            {restaurant?.IS_LIVE === 1 && <span style={s.liveBadge}><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ADE80' }} /> LIVE</span>}
          </div>
          <div style={s.welcomeSub}>{restaurant?.NAME || 'Dein Restaurant'} · trytaply Dashboard</div>
        </div>

        {/* Stats */}
        <div style={s.statsGrid}>
          {[
            { val: stats.ordersToday, label: 'Bestellungen heute' },
            { val: '€ ' + stats.revenue, label: 'Umsatz heute' },
            { val: stats.tables, label: 'Tische konfiguriert' },
            { val: stats.menuItems, label: 'Gerichte im Menü' },
          ].map(st => (
            <div key={st.label} style={s.statCard}>
              <div style={s.statVal}>{st.val || '0'}</div>
              <div style={s.statLabel}>{st.label}</div>
            </div>
          ))}
        </div>

        <div style={s.grid2}>
          {/* Quick Actions */}
          <div style={s.card}>
            <div style={s.cardHeader}>
              <span style={s.cardTitle}>Schnellzugriff</span>
            </div>
            {[
              { icon: '🍽️', label: 'Speisekarte verwalten', desc: 'Gerichte, Preise, Kategorien', path: '/dashboard/menu' },
              { icon: '📱', label: 'Tische & QR-Codes', desc: 'QR-Codes generieren & drucken', path: '/dashboard/tables' },
              { icon: '👨‍🍳', label: 'Küchendisplay öffnen', desc: 'KDS auf Tablet-Bildschirm', path: restaurant ? `/kds/${restaurant.SLUG}` : '/kds' },
            ].map(btn => (
              <button key={btn.label} style={s.quickBtn} onClick={() => navigate(btn.path)}>
                <div style={s.quickIcon}>{btn.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>{btn.label}</div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{btn.desc}</div>
                </div>
                <span style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.3)' }}>›</span>
              </button>
            ))}
          </div>

          {/* Recent Orders */}
          <div style={s.card}>
            <div style={s.cardHeader}>
              <span style={s.cardTitle}>Letzte Bestellungen</span>
              <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)' }}>heute</span>
            </div>
            {recentOrders.length === 0
              ? <div style={{ padding: '28px 16px', textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '0.82rem' }}>
                  Noch keine Bestellungen heute
                </div>
              : recentOrders.map(order => (
                <div key={order.ID} style={s.orderRow}>
                  <div>
                    <div style={{ fontWeight: 700 }}>Tisch {order.TABLE_NUMBER}</div>
                    <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>
                      {new Date(order.CREATED_AT).toLocaleTimeString('de-AT', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontWeight: 700, color: '#32D6FF' }}>€ {Number(order.TOTAL || 0).toFixed(2)}</span>
                    <span style={s.statusBadge(order.STATUS)}>{order.STATUS}</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        {/* QR Link Info */}
        {restaurant && (
          <div style={{ ...s.card, marginTop: 16 }}>
            <div style={s.cardHeader}>
              <span style={s.cardTitle}>📱 Gast-App Link</span>
              <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)' }}>QR-Code scannt zu dieser URL</span>
            </div>
            <div style={s.qrSection}>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Deine Gäste-URL (Tisch Beispiel):</div>
              <span style={s.qrUrl}>
                {window.location.origin}/r/{restaurant.SLUG}/1
              </span>
              <div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
                <button
                  onClick={() => window.open(`/r/${restaurant.SLUG}/1`, '_blank')}
                  style={{ padding: '8px 16px', borderRadius: 8, background: 'linear-gradient(135deg,#0A84FF,#32D6FF)', border: 'none', color: '#fff', fontWeight: 700, fontSize: '0.78rem', cursor: 'pointer' }}>
                  Vorschau öffnen
                </button>
                <button
                  onClick={() => navigate('/dashboard/tables')}
                  style={{ padding: '8px 16px', borderRadius: 8, background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', fontWeight: 700, fontSize: '0.78rem', cursor: 'pointer', fontFamily: 'inherit' }}>
                  QR-Codes drucken
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
