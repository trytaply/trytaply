import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';

export default function GuestApp() {
  const { slug, table } = useParams();
  const [data, setData] = useState(null);
  const [cart, setCart] = useState({});
  const [screen, setScreen] = useState('menu');
  const [activeTab, setActiveTab] = useState(null);
  const [note, setNote] = useState('');

  useEffect(function() {
    API.get('/menu/public/' + slug).then(function(res) {
      setData(res.data);
      if (res.data.categories.length > 0) {
        setActiveTab(res.data.categories[0].ID);
      }
    });
  }, [slug]);

  function addToCart(itemId) {
    setCart(function(c) {
      var n = Object.assign({}, c);
      n[itemId] = (n[itemId] || 0) + 1;
      return n;
    });
  }

  function removeFromCart(itemId) {
    setCart(function(c) {
      var n = Object.assign({}, c);
      if (n[itemId] > 1) n[itemId]--;
      else delete n[itemId];
      return n;
    });
  }

  async function placeOrder() {
    var items = Object.entries(cart).map(function(entry) {
      return { menuItemId: parseInt(entry[0]), quantity: entry[1] };
    });
    await API.post('/orders', {
      restaurantSlug: slug,
      tableNumber: parseInt(table),
      items: items,
      note: note
    });
    setCart({});
    setScreen('waiting');
  }

  if (!data) return <div style={{color:'#fff',padding:20}}>Lädt...</div>;

  var visibleItems = data.items.filter(function(i) { return i.CATEGORY_ID === activeTab; });
  var cartTotal = Object.entries(cart).reduce(function(sum, entry) {
    var item = data.items.find(function(i) { return i.ID == entry[0]; });
    return sum + (item ? item.PRICE * entry[1] : 0);
  }, 0);
  var cartCount = Object.values(cart).reduce(function(a, b) { return a + b; }, 0);

  return (
    <div style={{ maxWidth:420, margin:'0 auto', background:'#06090F', minHeight:'100vh', color:'#fff' }}>

      {screen === 'menu' && (
        <>
          <div style={{padding:'14px 16px',background:'#0D1520',borderBottom:'1px solid rgba(255,255,255,.07)'}}>
            <div style={{fontSize:11,color:'#32D6FF'}}>{data.restaurant.NAME}</div>
            <div style={{fontWeight:900,fontSize:16}}>Tisch {table}</div>
          </div>

          {/* Kategorie Tabs */}
          <div style={{display:'flex',background:'#0a111e',borderBottom:'1px solid rgba(255,255,255,.06)'}}>
            {data.categories.map(function(cat) {
              return (
                <button key={cat.ID} onClick={function(){ setActiveTab(cat.ID); }}
                  style={{ flex:1, padding:'10px 4px', background:'transparent', border:'none',
                           color: activeTab===cat.ID ? '#32D6FF' : 'rgba(255,255,255,.35)',
                           borderBottom: activeTab===cat.ID ? '2px solid #32D6FF' : '2px solid transparent',
                           fontWeight:700, cursor:'pointer', fontSize:11 }}>
                  {cat.NAME}
                </button>
              );
            })}
          </div>

          {/* Items */}
          {visibleItems.map(function(item) {
            return (
              <div key={item.ID} style={{display:'flex',gap:12,padding:'12px 14px',borderBottom:'1px solid rgba(255,255,255,.05)'}}>
                <div style={{flex:1}}>
                  <div style={{fontWeight:800,fontSize:14}}>{item.NAME}</div>
                  <div style={{fontSize:11,color:'rgba(255,255,255,.45)',marginTop:2}}>{item.DESCRIPTION}</div>
                  <div style={{color:'#32D6FF',fontWeight:800,marginTop:4}}>€ {Number(item.PRICE).toFixed(2)}</div>
                </div>
                {cart[item.ID] ? (
                  <div style={{display:'flex',alignItems:'center',gap:8}}>
                    <button onClick={function(){removeFromCart(item.ID);}} style={{width:26,height:26,borderRadius:7,background:'rgba(10,132,255,.15)',border:'none',color:'#32D6FF',fontSize:16,cursor:'pointer'}}>−</button>
                    <span style={{fontWeight:900}}>{cart[item.ID]}</span>
                    <button onClick={function(){addToCart(item.ID);}} style={{width:26,height:26,borderRadius:7,background:'rgba(10,132,255,.15)',border:'none',color:'#32D6FF',fontSize:16,cursor:'pointer'}}>+</button>
                  </div>
                ) : (
                  <button onClick={function(){addToCart(item.ID);}} style={{width:28,height:28,borderRadius:8,background:'linear-gradient(135deg,#0A84FF,#32D6FF)',border:'none',color:'#fff',fontSize:18,cursor:'pointer'}}>+</button>
                )}
              </div>
            );
          })}
          {/* Cart Bar */}
          {cartCount > 0 && (
            <div style={{position:'fixed',bottom:16,left:'50%',transform:'translateX(-50%)',width:'90%',maxWidth:380}}
                 onClick={function(){setScreen('cart');}}>
              <div style={{background:'linear-gradient(135deg,#0A84FF,#32D6FF)',borderRadius:14,padding:'12px 20px',
                           cursor:'pointer',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <span style={{fontWeight:700}}>{cartCount} Artikel</span>
                <span style={{fontWeight:900}}>€ {cartTotal.toFixed(2)}</span>
                <span style={{fontWeight:700}}>Warenkorb →</span>
              </div>
            </div>
          )}
        </>
      )}

      {screen === 'cart' && (
        <div style={{padding:16}}>
          <button onClick={function(){setScreen('menu');}} style={{background:'transparent',border:'1px solid rgba(255,255,255,.15)',color:'#fff',padding:'8px 16px',borderRadius:8,cursor:'pointer',marginBottom:16}}>← Zurück</button>
          <h2 style={{marginBottom:16}}>Deine Bestellung · Tisch {table}</h2>
          {Object.entries(cart).map(function(entry) {
            var item = data.items.find(function(i){return i.ID==entry[0];});
            if (!item) return null;
            return (
              <div key={entry[0]} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid rgba(255,255,255,.05)'}}>
                <span>{entry[1]}× {item.NAME}</span>
                <span style={{color:'#32D6FF',fontWeight:700}}>€ {(item.PRICE*entry[1]).toFixed(2)}</span>
              </div>
            );
          })}
          <textarea placeholder='Sonderwünsche...' value={note}
            onChange={function(e){setNote(e.target.value);}}
            style={{width:'100%',marginTop:16,padding:10,background:'rgba(255,255,255,.05)',
                    border:'1px solid rgba(255,255,255,.1)',borderRadius:8,color:'#fff',resize:'none',height:80}} />
          <div style={{fontWeight:900,fontSize:18,margin:'12px 0'}}>Gesamt: € {cartTotal.toFixed(2)}</div>
          <button onClick={placeOrder}
            style={{width:'100%',padding:14,background:'linear-gradient(135deg,#0A84FF,#32D6FF)',
                    border:'none',borderRadius:12,color:'#fff',fontWeight:900,cursor:'pointer',fontSize:15}}>
            Bestellung absenden →
          </button>
        </div>
      )}

      {screen === 'waiting' && (
        <div style={{padding:40,textAlign:'center'}}>
          <div style={{fontSize:52,marginBottom:16}}>👨‍🍳</div>
          <h2 style={{marginBottom:8}}>Bestellung eingegangen!</h2>
          <p style={{color:'rgba(255,255,255,.5)',lineHeight:1.6}}>Die Küche hat deine Bestellung erhalten.</p>
          <div style={{color:'#32D6FF',fontWeight:900,fontSize:24,marginTop:20}}>~15 Min</div>
        </div>
      )}

    </div>
  );
}
