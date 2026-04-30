import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';

export default function KDS() {
  const { slug } = useParams();
  const [orders, setOrders] = useState([]);
  const [connected, setConnected] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [newOrderIds, setNewOrderIds] = useState(new Set());
  const prevOrderIds = useRef(new Set());
  const intervalRef = useRef(null);

  useEffect(() => {
    loadOrders();
    // Poll every 4 seconds
    intervalRef.current = setInterval(loadOrders, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  async function loadOrders() {
    try {
      const res = await API.get('/orders/active');
      const incoming = res.data || [];

      // Detect new orders for highlight animation
      const incomingIds = new Set(incoming.map(o => o.ID));
      const newIds = new Set([...incomingIds].filter(id => !prevOrderIds.current.has(id)));
      if (newIds.size > 0) {
        setNewOrderIds(prev => new Set([...prev, ...newIds]));
        // Play beep sound for new orders
        playBeep();
        // Remove highlight after 3s
        setTimeout(() => {
          setNewOrderIds(prev => {
            const next = new Set(prev);
            newIds.forEach(id => next.delete(id));
            return next;
          });
        }, 3000);
      }
      prevOrderIds.current = incomingIds;

      setOrders(incoming);
      setConnected(true);
      setLastUpdate(new Date());
    } catch (e) {
      setConnected(false);
    }
  }

  function playBeep() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 880;
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.3);
    } catch (e) {}
  }

  async function updateStatus(orderId, status) {
    try {
      await API.patch(`/orders/${orderId}/status`, { status });
      loadOrders();
    } catch (e) {
      alert('Fehler beim Status-Update');
    }
  }

  const pending   = orders.filter(o => o.STATUS === 'pending');
  const preparing = orders.filter(o => o.STATUS === 'preparing');

  const s = {
    page: {
      minHeight: '100vh', background: '#04080F', color: '#fff',
      fontFamily: 'Arial, sans-serif', padding: 16
    },
    header: {
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      marginBottom: 20, padding: '12px 16px',
      background: '#0D1520', borderRadius: 14, border: '1px solid rgba(255,255,255,0.07)'
    },
    headerLeft: { display: 'flex', alignItems: 'center', gap: 14 },
    logo: { fontSize: '1.1rem', fontWeight: 900 },
    logoDot: { background: 'linear-gradient(90deg,#0A84FF,#32D6FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    kdsLabel: { fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#32D6FF' },
    live: {
      display: 'flex', alignItems: 'center', gap: 6,
      fontSize: '0.75rem', fontWeight: 700, color: '#4ADE80'
    },
    offline: { color: '#F87171' },
    liveDot: (ok) => ({
      width: 8, height: 8, borderRadius: '50%',
      background: ok ? '#4ADE80' : '#F87171',
      animation: ok ? 'pulse 2s infinite' : 'none'
    }),
    updateTime: { fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', marginTop: 2 },
    colsWrap: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 },
    col: { display: 'flex', flexDirection: 'column', gap: 10 },
    colHeader: {
      padding: '10px 14px', borderRadius: 10, marginBottom: 4,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between'
    },
    colTitle: { fontWeight: 800, fontSize: '0.85rem' },
    badge: (color) => ({
      fontSize: '0.65rem', fontWeight: 800, padding: '3px 10px', borderRadius: 20,
      background: color === 'blue' ? 'rgba(10,132,255,0.2)' : 'rgba(251,191,36,0.15)',
      color: color === 'blue' ? '#0A84FF' : '#FBBF24',
      border: color === 'blue' ? '1px solid rgba(10,132,255,0.3)' : '1px solid rgba(251,191,36,0.3)'
    }),
    orderCard: (isNew) => ({
      background: '#0D1520',
      border: isNew ? '2px solid #0A84FF' : '1px solid rgba(255,255,255,0.08)',
      borderRadius: 14, overflow: 'hidden',
      boxShadow: isNew ? '0 0 20px rgba(10,132,255,0.25)' : 'none',
      transition: 'all 0.3s'
    }),
    orderHead: (color) => ({
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '10px 14px',
      background: color === 'blue' ? 'rgba(10,132,255,0.1)' : 'rgba(251,191,36,0.08)',
      borderBottom: '1px solid rgba(255,255,255,0.05)'
    }),
    tableNum: { fontWeight: 900, fontSize: '1rem' },
    tableNumBlue: { color: '#32D6FF' },
    tableNumAmber: { color: '#FBBF24' },
    timeAgo: { fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', marginTop: 2 },
    newTag: {
      fontSize: '0.6rem', fontWeight: 800, padding: '3px 8px', borderRadius: 20,
      background: 'rgba(10,132,255,0.2)', color: '#0A84FF', border: '1px solid rgba(10,132,255,0.3)',
      animation: 'pulse 1s infinite'
    },
    itemsList: { padding: '8px 14px' },
    item: {
      display: 'flex', justifyContent: 'space-between',
      padding: '5px 0', fontSize: '0.82rem',
      borderBottom: '1px solid rgba(255,255,255,0.04)'
    },
    itemLast: { borderBottom: 'none' },
    qty: (color) => ({
      fontWeight: 900, marginRight: 6,
      color: color === 'blue' ? '#32D6FF' : '#FBBF24',
      background: color === 'blue' ? 'rgba(50,214,255,0.1)' : 'rgba(251,191,36,0.1)',
      padding: '1px 6px', borderRadius: 4, fontSize: '0.75rem'
    }),
    itemNote: { fontSize: '0.65rem', color: '#FBBF24', padding: '4px 0', fontStyle: 'italic' },
    note: { padding: '4px 14px 8px', fontSize: '0.7rem', color: '#FBBF24', fontStyle: 'italic' },
    btnRow: { padding: '8px 14px 12px', display: 'flex', gap: 8 },
    btnStart: {
      flex: 1, padding: '10px', borderRadius: 10,
      background: 'linear-gradient(135deg,#0A84FF,#32D6FF)',
      border: 'none', color: '#fff', fontWeight: 800, fontSize: '0.8rem',
      cursor: 'pointer', fontFamily: 'inherit'
    },
    btnDone: {
      flex: 1, padding: '10px', borderRadius: 10,
      background: 'linear-gradient(135deg,#16a34a,#4ADE80)',
      border: 'none', color: '#fff', fontWeight: 800, fontSize: '0.8rem',
      cursor: 'pointer', fontFamily: 'inherit'
    },
    empty: {
      textAlign: 'center', padding: '40px 20px',
      color: 'rgba(255,255,255,0.2)', fontSize: '0.85rem',
      background: 'rgba(255,255,255,0.02)', borderRadius: 14,
      border: '1px dashed rgba(255,255,255,0.08)'
    }
  };

  function timeAgo(dateStr) {
    const d = new Date(dateStr);
    const diff = Math.round((Date.now() - d) / 60000);
    if (diff < 1) return 'Gerade eben';
    if (diff === 1) return 'vor 1 Min';
    return `vor ${diff} Min`;
  }

  function OrderCard({ order, color }) {
    const isNew = newOrderIds.has(order.ID);
    const isPending = order.STATUS === 'pending';

    return (
      <div style={s.orderCard(isNew)}>
        <div style={s.orderHead(color)}>
          <div>
            <div style={{ ...s.tableNum, ...(color === 'blue' ? s.tableNumBlue : s.tableNumAmber) }}>
              Tisch {order.TABLE_NUMBER}
            </div>
            <div style={s.timeAgo}>{timeAgo(order.CREATED_AT)}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {isNew && <span style={s.newTag}>🆕 NEU</span>}
            <span style={{ fontWeight: 800, fontSize: '0.85rem', color: '#fff' }}>
              € {Number(order.TOTAL || 0).toFixed(2)}
            </span>
          </div>
        </div>

        <div style={s.itemsList}>
          {(order.items || []).map((item, i) => (
            <div key={item.ID} style={{ ...s.item, ...(i === (order.items?.length - 1) ? s.itemLast : {}) }}>
              <span>
                <span style={s.qty(color)}>{item.QUANTITY}×</span>
                {item.ITEM_NAME}
              </span>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem' }}>
                € {(Number(item.ITEM_PRICE) * item.QUANTITY).toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        {order.NOTE && <div style={s.note}>📝 {order.NOTE}</div>}

        <div style={s.btnRow}>
          {isPending
            ? <button style={s.btnStart} onClick={() => updateStatus(order.ID, 'preparing')}>
                ⟳ In Zubereitung
              </button>
            : <button style={s.btnDone} onClick={() => updateStatus(order.ID, 'ready')}>
                ✓ Fertig – Servieren
              </button>
          }
        </div>
      </div>
    );
  }

  return (
    <div style={s.page}>
      {/* Header */}
      <div style={s.header}>
        <div style={s.headerLeft}>
          <div>
            <div style={s.logo}>trytaply<span style={s.logoDot}>.</span></div>
            <div style={s.kdsLabel}>Küchendisplay · {slug}</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: '8px 14px' }}>
            <div style={{ ...s.live, ...(connected ? {} : s.offline) }}>
              <span style={s.liveDot(connected)} />
              {connected ? 'Verbunden' : 'Getrennt'}
            </div>
            <div style={s.updateTime}>
              {lastUpdate ? 'Update: ' + lastUpdate.toLocaleTimeString('de-AT') : '...'}
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '2rem', fontWeight: 900, background: 'linear-gradient(135deg,#0A84FF,#32D6FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1 }}>
            {orders.length}
          </div>
          <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>aktive Bestellungen</div>
        </div>
      </div>

      {/* Two columns */}
      <div style={s.colsWrap}>
        {/* Pending */}
        <div style={s.col}>
          <div style={{ ...s.colHeader, background: 'rgba(10,132,255,0.07)', borderRadius: 10 }}>
            <span style={s.colTitle}>🆕 Neue Bestellungen</span>
            <span style={s.badge('blue')}>{pending.length}</span>
          </div>
          {pending.length === 0
            ? <div style={s.empty}>Keine neuen Bestellungen</div>
            : pending.map(order => <OrderCard key={order.ID} order={order} color="blue" />)
          }
        </div>

        {/* Preparing */}
        <div style={s.col}>
          <div style={{ ...s.colHeader, background: 'rgba(251,191,36,0.06)', borderRadius: 10 }}>
            <span style={s.colTitle}>🍳 In Zubereitung</span>
            <span style={s.badge('amber')}>{preparing.length}</span>
          </div>
          {preparing.length === 0
            ? <div style={s.empty}>Keine Bestellungen in Zubereitung</div>
            : preparing.map(order => <OrderCard key={order.ID} order={order} color="amber" />)
          }
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
      `}</style>
    </div>
  );
}
