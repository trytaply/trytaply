import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [scrolled, setScrolled] = useState(false);
  const [yearly, setYearly] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const plans = [
    {
      name:'Starter', mo:'39', yr:'33', cents:'.99',
      desc:'Für kleine Cafes & Bistros.',
      feat:['Bis 20 Tische','QR-Bestellung','Karte & Apple/Google Pay','Küchendisplay (KDS)','Menü-Editor','RKSV-konform'],
      off:['Analytics','Upselling','Mehrsprachig'], hot:false
    },
    {
      name:'Professional', mo:'69', yr:'58', cents:'.99',
      desc:'Der Standard für Restaurants.',
      feat:['Bis 60 Tische','Alles aus Starter','Analytics Dashboard','Upselling-Funktion','Split-Bill','Mehrsprachige Karte','Allergen-Filter','Loyalty-Karte'],
      off:[], hot:true
    },
    {
      name:'Enterprise', mo:'119', yr:'99', cents:'.99',
      desc:'Für mehrere Standorte.',
      feat:['Unbegrenzte Tische','Alles aus Professional','Multi-Location','API-Zugang','Kassensystem-Integration','Prioritäts-Support','SLA Garantie','Onboarding vor Ort'],
      off:[], hot:false
    },
  ];

  return (
    <div style={{width:'100%',minHeight:'100vh',background:'#06090F',color:'#fff',fontFamily:"'Plus Jakarta Sans','Helvetica Neue',Arial,sans-serif",overflowX:'hidden'}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
        html,body,#root{margin:0;padding:0;width:100%;background:#06090F}
        *{box-sizing:border-box}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.2}}
        @keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        .fc{display:flex;flex-direction:column}
        .cta{display:inline-block;padding:12px 28px;border-radius:12px;background:linear-gradient(135deg,#0A84FF,#32D6FF);color:#fff;font-weight:800;font-size:15px;border:none;cursor:pointer;font-family:inherit;white-space:nowrap;transition:transform .15s,box-shadow .15s;box-shadow:0 4px 20px rgba(10,132,255,.35)}
        .cta:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(10,132,255,.5)}
        .outline{display:inline-block;padding:12px 24px;border-radius:12px;border:1.5px solid rgba(255,255,255,.18);background:transparent;color:rgba(255,255,255,.85);font-weight:600;font-size:15px;cursor:pointer;font-family:inherit;white-space:nowrap;transition:border-color .15s,background .15s}
        .outline:hover{border-color:rgba(255,255,255,.35);background:rgba(255,255,255,.06)}
        .na{color:rgba(255,255,255,.5);text-decoration:none;font-size:14px;font-weight:600;transition:color .15s}
        .na:hover{color:#fff}
        .fc-box{background:#0D1520;border:1px solid rgba(255,255,255,.07);border-radius:18px;padding:26px;transition:border-color .2s,transform .2s}
        .fc-box:hover{border-color:rgba(10,132,255,.32);transform:translateY(-3px)}
        .pc{background:#0D1520;border:1.5px solid rgba(255,255,255,.08);border-radius:20px;padding:26px 22px;display:flex;flex-direction:column;position:relative;overflow:hidden;transition:transform .2s}
        .pc:hover{transform:translateY(-4px)}
        .pc.hot{border-color:rgba(10,132,255,.42);background:linear-gradient(160deg,#0c1e3a,#081530);box-shadow:0 0 40px rgba(10,132,255,.1)}
        .pc.hot::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#0A84FF,#32D6FF)}
        .tog{width:50px;height:26px;border-radius:13px;cursor:pointer;position:relative;transition:background .2s;flex-shrink:0;border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.1)}
        .tog.on{background:linear-gradient(90deg,#0A84FF,#32D6FF);border-color:transparent}
        .tok{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:#fff;transition:transform .22s;box-shadow:0 1px 5px rgba(0,0,0,.3)}
        .tog.on .tok{transform:translateX(24px)}
        .sb{flex:1;text-align:center;padding:28px 12px;border-right:1px solid rgba(255,255,255,.07)}
        .sb:last-child{border-right:none}
        .phone-bob{animation:bob 4s ease-in-out infinite}
      `}</style>

      {/* NAV */}
      <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:200,height:62,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 5%',background:scrolled?'rgba(6,9,15,.95)':'rgba(6,9,15,.75)',backdropFilter:'blur(20px)',borderBottom:scrolled?'1px solid rgba(255,255,255,.07)':'1px solid transparent',transition:'all .3s'}}>
        <div style={{display:'flex',alignItems:'center',gap:9}}>
          <svg width="32" height="32" viewBox="0 0 72 72" fill="none">
            <rect width="72" height="72" rx="16" fill="#0D1520"/>
            <defs><linearGradient id="g" x1="0" y1="0" x2="72" y2="72" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#0A84FF"/><stop offset="100%" stopColor="#32D6FF"/></linearGradient></defs>
            <rect x="10" y="28" width="52" height="10" rx="5" fill="url(#g)" opacity=".9"/>
            <rect x="17" y="38" width="7" height="18" rx="3.5" fill="url(#g)" opacity=".55"/>
            <rect x="48" y="38" width="7" height="18" rx="3.5" fill="url(#g)" opacity=".55"/>
            <circle cx="36" cy="22" r="5" stroke="url(#g)" strokeWidth="2"/>
            <circle cx="36" cy="22" r="2.5" fill="white" opacity=".9"/>
          </svg>
          <span style={{fontSize:20,fontWeight:900,letterSpacing:'-.02em'}}>trytaply<span style={{background:'linear-gradient(90deg,#0A84FF,#32D6FF)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>.</span></span>
        </div>
        <div style={{display:'flex',gap:28}}>
          <a className="na" href="#features">Features</a>
          <a className="na" href="#how">So geht's</a>
          <a className="na" href="#pricing">Preise</a>
        </div>
        <div style={{display:'flex',gap:10}}>
          {token
            ? <button className="cta" onClick={()=>navigate('/dashboard')}>Dashboard →</button>
            : <><button className="outline" onClick={()=>navigate('/login')}>Login</button><button className="cta" onClick={()=>navigate('/register')}>Kostenlos testen →</button></>
          }
        </div>
      </nav>

      {/* HERO */}
      <section style={{minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'110px 5% 60px',textAlign:'center',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',width:800,height:800,borderRadius:'50%',background:'radial-gradient(circle,rgba(10,132,255,.09),transparent 65%)',top:'40%',left:'50%',transform:'translate(-50%,-50%)',pointerEvents:'none'}}/>
        <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px)',backgroundSize:'52px 52px',WebkitMaskImage:'radial-gradient(ellipse at 50% 35%,black 15%,transparent 70%)',maskImage:'radial-gradient(ellipse at 50% 35%,black 15%,transparent 70%)',pointerEvents:'none'}}/>

        {/* Badge */}
        <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(10,132,255,.1)',border:'1px solid rgba(10,132,255,.2)',borderRadius:30,padding:'5px 14px',fontSize:12,fontWeight:700,color:'#32D6FF',marginBottom:24,position:'relative',zIndex:1}}>
          <span style={{width:6,height:6,borderRadius:'50%',background:'#32D6FF',animation:'pulse 2s infinite',display:'inline-block'}}/>
          Neu · Linz, Österreich · 2025
        </div>

        {/* Headline */}
        <h1 style={{fontSize:'clamp(26px,4.5vw,58px)',fontWeight:900,letterSpacing:'-.04em',lineHeight:1.05,marginBottom:18,position:'relative',zIndex:1,maxWidth:760,margin:'0 auto 18px'}}>
          <span style={{color:'#fff',display:'block'}}>Das smarte Bestellsystem</span>
          <span style={{background:'linear-gradient(90deg,#0A84FF,#32D6FF)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',display:'block'}}>für dein Restaurant.</span>
        </h1>

        <p style={{fontSize:'clamp(14px,1.3vw,17px)',color:'rgba(255,255,255,.5)',maxWidth:500,lineHeight:1.7,margin:'0 auto 36px',position:'relative',zIndex:1}}>
          Gäste scannen. Gäste bestellen. Gäste zahlen – direkt am Tisch. Kein Kellner für die Bestellung nötig. Mehr Umsatz, weniger Stress.
        </p>

        <div style={{display:'flex',gap:10,justifyContent:'center',flexWrap:'wrap',marginBottom:56,position:'relative',zIndex:1}}>
          <button className="cta" style={{fontSize:16,padding:'14px 32px'}} onClick={()=>navigate('/register')}>30 Tage gratis testen →</button>
          <button className="outline" style={{fontSize:16,padding:'14px 26px'}} onClick={()=>navigate('/login')}>Einloggen</button>
        </div>

        {/* PHONES */}
        <div style={{display:'flex',gap:14,alignItems:'flex-end',justifyContent:'center',position:'relative',zIndex:1}}>

          {/* Left */}
          <div style={{width:182,borderRadius:28,background:'#04080F',border:'2px solid rgba(255,255,255,.1)',overflow:'hidden',boxShadow:'0 20px 40px rgba(0,0,0,.6)',opacity:.55,transform:'scale(.91) translateY(12px)'}}>
            <div style={{width:60,height:18,background:'#04080F',borderRadius:'0 0 10px 10px',margin:'0 auto'}}/>
            <div style={{padding:'10px 12px 8px',background:'linear-gradient(160deg,#0b1928,#07111f)',borderBottom:'1px solid rgba(255,255,255,.06)'}}>
              <div style={{fontSize:9,fontWeight:600,color:'#32D6FF',marginBottom:2}}>Rizzma Linz</div>
              <div style={{fontSize:14,fontWeight:900}}>Tisch <span style={{color:'#32D6FF'}}>4</span></div>
            </div>
            <div style={{display:'flex',borderBottom:'1px solid rgba(255,255,255,.06)'}}>
              {['SPEISEN','GETRÄNKE','EXTRAS'].map((t,i)=>(
                <div key={t} style={{flex:1,textAlign:'center',padding:'7px 2px',fontSize:8,fontWeight:700,color:i===0?'#32D6FF':'rgba(255,255,255,.3)',borderBottom:i===0?'2px solid #32D6FF':'2px solid transparent'}}>{t}</div>
              ))}
            </div>
            {[['🍔','Farmhouse','Beef, Cheddar','€ 13,90',true],['🍟','Beef Fries','Crispy Fries','€ 6,50',false],['🥤','Coca-Cola','0,4l kalt','€ 3,50',false]].map(([ic,nm,ds,pr,hi])=>(
              <div key={nm} style={{display:'flex',alignItems:'center',gap:6,padding:'7px 11px',borderBottom:'1px solid rgba(255,255,255,.04)',background:hi?'rgba(10,132,255,.05)':''}}>
                <div style={{width:30,height:30,borderRadius:7,background:'#111b2a',flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'.9rem'}}>{ic}</div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontSize:9,fontWeight:800}}>{nm}</div>
                  <div style={{fontSize:8,color:'rgba(255,255,255,.4)'}}>{ds}</div>
                </div>
                <div style={{fontSize:9,fontWeight:800,color:'#32D6FF',whiteSpace:'nowrap'}}>{pr}</div>
              </div>
            ))}
            <div style={{margin:8,padding:'8px 10px',borderRadius:9,background:'linear-gradient(135deg,#0A84FF,#32D6FF)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div><div style={{fontSize:8,fontWeight:700,opacity:.85}}>2 Artikel</div><div style={{fontSize:11,fontWeight:900}}>€ 20,40</div></div>
              <div style={{fontSize:8,fontWeight:700,opacity:.9}}>Warenkorb →</div>
            </div>
          </div>

          {/* Center */}
          <div className="phone-bob" style={{width:210,borderRadius:32,background:'#04080F',border:'2px solid rgba(10,132,255,.3)',overflow:'hidden',boxShadow:'0 28px 56px rgba(0,0,0,.65),0 0 36px rgba(10,132,255,.1)',zIndex:2}}>
            <div style={{width:64,height:20,background:'#04080F',borderRadius:'0 0 11px 11px',margin:'0 auto'}}/>
            <div style={{padding:'12px 13px 8px',background:'linear-gradient(160deg,#0b1928,#07111f)',borderBottom:'1px solid rgba(255,255,255,.06)'}}>
              <div style={{fontSize:9,color:'rgba(255,255,255,.4)',marginBottom:2}}>trytaply · Bezahlen</div>
              <div style={{fontSize:15,fontWeight:900}}>Tisch <span style={{color:'#32D6FF'}}>4</span> · Rizzma</div>
            </div>
            <div style={{padding:'12px 13px'}}>
              <div style={{fontSize:9,color:'rgba(255,255,255,.4)',marginBottom:1}}>Gesamtbetrag</div>
              <div style={{fontSize:28,fontWeight:900,letterSpacing:'-.05em',lineHeight:1,marginBottom:10}}><sup style={{fontSize:13,verticalAlign:'top',marginTop:5,display:'inline-block'}}>€</sup>41,30</div>
              {[['2× Farmhouse','€ 27,80'],['1× Beef Fries','€ 6,50'],['2× Coca-Cola','€ 7,00']].map(([l,v])=>(
                <div key={l} style={{display:'flex',justifyContent:'space-between',padding:'3px 0',borderBottom:'1px solid rgba(255,255,255,.05)',fontSize:9}}>
                  <span style={{color:'rgba(255,255,255,.45)'}}>{l}</span><span style={{fontWeight:600}}>{v}</span>
                </div>
              ))}
              <div style={{fontSize:8,fontWeight:700,color:'rgba(255,255,255,.3)',textTransform:'uppercase',letterSpacing:'.1em',margin:'9px 0 5px'}}>Zahlungsart</div>
              <div style={{display:'flex',gap:5,marginBottom:9}}>
                {[['💳','Karte',true],['','Apple Pay',false],['G','Google',false]].map(([ic,lb,sel])=>(
                  <div key={lb} style={{flex:1,padding:'5px 2px',borderRadius:7,border:sel?'1.5px solid #0A84FF':'1.5px solid rgba(255,255,255,.08)',background:sel?'rgba(10,132,255,.12)':'rgba(255,255,255,.03)',textAlign:'center',fontSize:8,fontWeight:700,color:sel?'#fff':'rgba(255,255,255,.4)'}}>
                    <div style={{fontSize:13}}>{ic}</div>{lb}
                  </div>
                ))}
              </div>
              <div style={{display:'flex',gap:4,marginBottom:10}}>
                {['0%','5%','10%','15%'].map((t,i)=>(
                  <div key={t} style={{flex:1,padding:'4px 2px',borderRadius:6,border:i===2?'1px solid #32D6FF':'1px solid rgba(255,255,255,.07)',background:i===2?'rgba(50,214,255,.08)':'rgba(255,255,255,.02)',textAlign:'center',fontSize:8,fontWeight:700,color:i===2?'#32D6FF':'rgba(255,255,255,.4)'}}>{t}</div>
                ))}
              </div>
              <div style={{width:'100%',padding:'10px',borderRadius:10,background:'linear-gradient(135deg,#0A84FF,#32D6FF)',color:'#fff',fontWeight:900,fontSize:11,textAlign:'center'}}>€ 45,43 bezahlen ✓</div>
            </div>
          </div>

          {/* Right KDS */}
          <div style={{width:182,borderRadius:28,background:'#04080F',border:'2px solid rgba(255,255,255,.1)',overflow:'hidden',boxShadow:'0 20px 40px rgba(0,0,0,.6)',opacity:.55,transform:'scale(.91) translateY(12px)'}}>
            <div style={{width:60,height:18,background:'#04080F',borderRadius:'0 0 10px 10px',margin:'0 auto'}}/>
            <div style={{padding:'9px 12px',background:'linear-gradient(160deg,#0b1928,#07111f)',borderBottom:'1px solid rgba(255,255,255,.06)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div style={{fontSize:9,fontWeight:800,color:'#32D6FF',letterSpacing:'.05em',textTransform:'uppercase'}}>Küche · Rizzma</div>
              <div style={{display:'flex',alignItems:'center',gap:3,fontSize:8,color:'rgba(255,255,255,.35)'}}>
                <span style={{width:5,height:5,borderRadius:'50%',background:'#4ADE80',display:'inline-block',animation:'pulse 2s infinite'}}/>Live
              </div>
            </div>
            {[{t:4,time:'Gerade',s:'NEU',items:['2× Farmhouse','1× Beef Fries','2× Cola'],n:true},{t:7,time:'vor 8 Min',s:'FERTIG',items:['3× Farmhouse','2× Beef Fries'],n:false}].map(o=>(
              <div key={o.t} style={{margin:'8px 9px 0',background:'rgba(255,255,255,.03)',border:o.n?'1px solid rgba(10,132,255,.32)':'1px solid rgba(255,255,255,.07)',borderRadius:9,overflow:'hidden'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'6px 9px',background:o.n?'rgba(10,132,255,.06)':'rgba(74,222,128,.04)',borderBottom:'1px solid rgba(255,255,255,.04)'}}>
                  <div>
                    <div style={{fontSize:9,fontWeight:900,color:o.n?'#32D6FF':'#4ADE80'}}>Tisch {o.t}</div>
                    <div style={{fontSize:8,color:'rgba(255,255,255,.3)'}}>{o.time}</div>
                  </div>
                  <span style={{fontSize:8,fontWeight:700,padding:'2px 6px',borderRadius:4,background:o.n?'rgba(10,132,255,.18)':'rgba(74,222,128,.12)',color:o.n?'#0A84FF':'#4ADE80'}}>{o.s}</span>
                </div>
                <div style={{padding:'5px 9px'}}>
                  {o.items.map(it=>(
                    <div key={it} style={{fontSize:8,padding:'2px 0',borderBottom:'1px solid rgba(255,255,255,.04)',color:'rgba(255,255,255,.65)'}}>{it}</div>
                  ))}
                </div>
                {o.n && <div style={{margin:'0 7px 7px',padding:'6px',borderRadius:6,background:'linear-gradient(135deg,#0A84FF,#32D6FF)',textAlign:'center',fontSize:8,fontWeight:700}}>In Zubereitung →</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <div style={{display:'flex',borderTop:'1px solid rgba(255,255,255,.07)',borderBottom:'1px solid rgba(255,255,255,.07)'}}>
        {[['+ 22%','mehr Umsatz pro Tisch'],['3 Min','schnellere Bestellung'],['0 €','Einrichtungsgebühr'],['5 Min','Setup-Zeit']].map(([n,l])=>(
          <div key={l} className="sb">
            <div style={{fontSize:'clamp(20px,3vw,36px)',fontWeight:900,letterSpacing:'-.05em',background:'linear-gradient(135deg,#0A84FF,#32D6FF)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',lineHeight:1}}>{n}</div>
            <div style={{fontSize:12,color:'rgba(255,255,255,.45)',marginTop:5}}>{l}</div>
          </div>
        ))}
      </div>

      {/* FEATURES */}
      <section id="features" style={{padding:'80px 5%'}}>
        <div style={{textAlign:'center',marginBottom:52}}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:'.18em',textTransform:'uppercase',color:'#32D6FF',marginBottom:12}}>Features</div>
          <h2 style={{fontSize:'clamp(22px,3.5vw,40px)',fontWeight:900,letterSpacing:'-.04em',marginBottom:12,lineHeight:1.1}}>Alles was dein Restaurant braucht</h2>
          <p style={{fontSize:15,color:'rgba(255,255,255,.45)',maxWidth:480,margin:'0 auto',lineHeight:1.65}}>Entwickelt für österreichische Gastronomen – einfach, günstig, RKSV-konform.</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:12,maxWidth:1040,margin:'0 auto'}}>
          {[['📱','QR-Code Bestellung','Gäste scannen – Browser öffnet sich sofort. Keine App, kein Login.'],['💳','Zahlung am Tisch','Karte, Apple Pay, Google Pay. Rechnung teilen mit einem Klick.'],['👨‍🍳','Echtzeit Küchendisplay','Neue Bestellungen erscheinen sofort – kein Ausdrucken nötig.'],['📊','Analytics Dashboard','Welche Gerichte wann? Datenbasierte Entscheidungen.'],['🌍','Mehrsprachige Karte','DE, EN, TR – perfekt für Tourismus in Österreich.'],['🔒','RKSV-konform','Vollständig nach österreichischer Kassenpflicht.']].map(([ic,t,d])=>(
            <div key={t} className="fc-box">
              <div style={{width:46,height:46,borderRadius:13,background:'rgba(10,132,255,.1)',border:'1px solid rgba(10,132,255,.18)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.3rem',marginBottom:16}}>{ic}</div>
              <div style={{fontSize:15,fontWeight:800,marginBottom:7}}>{t}</div>
              <div style={{fontSize:13,color:'rgba(255,255,255,.45)',lineHeight:1.6}}>{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW */}
      <section id="how" style={{padding:'80px 5%',background:'linear-gradient(180deg,#06090F,#07101e 50%,#06090F)'}}>
        <div style={{textAlign:'center',marginBottom:52}}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:'.18em',textTransform:'uppercase',color:'#32D6FF',marginBottom:12}}>So einfach geht's</div>
          <h2 style={{fontSize:'clamp(22px,3.5vw,40px)',fontWeight:900,letterSpacing:'-.04em',lineHeight:1.1}}>
            Scan. Order. <span style={{background:'linear-gradient(90deg,#0A84FF,#32D6FF)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Done.</span>
          </h2>
        </div>
        <div style={{display:'flex',maxWidth:780,margin:'0 auto',position:'relative'}}>
          <div style={{position:'absolute',top:29,left:'16.7%',right:'16.7%',height:2,background:'linear-gradient(90deg,#0A84FF,#32D6FF)',opacity:.22}}/>
          {[['📷','QR scannen','Gast scannt QR am Tisch. Keine App, kein Login.'],['🛒','Bestellen','Speisekarte, Warenkorb, absenden.'],['✅','Bezahlen','Karte oder Apple/Google Pay. Digital.']].map(([ic,t,d])=>(
            <div key={t} style={{flex:1,textAlign:'center',padding:'0 10px'}}>
              <div style={{width:60,height:60,borderRadius:'50%',background:'linear-gradient(135deg,#0A84FF,#32D6FF)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.4rem',margin:'0 auto 16px',boxShadow:'0 4px 18px rgba(10,132,255,.3)',position:'relative',zIndex:1}}>{ic}</div>
              <div style={{fontSize:15,fontWeight:800,marginBottom:7}}>{t}</div>
              <div style={{fontSize:13,color:'rgba(255,255,255,.45)',lineHeight:1.6}}>{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{padding:'80px 5%'}}>
        <div style={{textAlign:'center',marginBottom:44}}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:'.18em',textTransform:'uppercase',color:'#32D6FF',marginBottom:12}}>Preise</div>
          <h2 style={{fontSize:'clamp(22px,3.5vw,40px)',fontWeight:900,letterSpacing:'-.04em',marginBottom:12,lineHeight:1.1}}>
            Einfach. Fair. <span style={{background:'linear-gradient(90deg,#0A84FF,#32D6FF)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Kein Verstecktes.</span>
          </h2>
          <p style={{fontSize:14,color:'rgba(255,255,255,.45)',marginBottom:24}}>Monatlich kündbar · 30 Tage kostenlos · Keine Kreditkarte</p>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:10}}>
            <span style={{fontSize:14,fontWeight:600,color:yearly?'rgba(255,255,255,.4)':'#fff'}}>Monatlich</span>
            <div className={`tog ${yearly?'on':''}`} onClick={()=>setYearly(!yearly)}><div className="tok"/></div>
            <span style={{fontSize:14,fontWeight:600,color:yearly?'#fff':'rgba(255,255,255,.4)'}}>Jährlich</span>
            <span style={{fontSize:11,fontWeight:800,background:'rgba(74,222,128,.1)',color:'#4ADE80',border:'1px solid rgba(74,222,128,.22)',borderRadius:20,padding:'3px 9px'}}>2 Monate gratis</span>
          </div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:13,maxWidth:880,margin:'0 auto 16px'}}>
          {plans.map(p=>(
            <div key={p.name} className={`pc ${p.hot?'hot':''}`}>
              {p.hot && <div style={{fontSize:10,fontWeight:800,background:'linear-gradient(90deg,#0A84FF,#32D6FF)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',marginBottom:10,letterSpacing:'.06em'}}>⭐ BELIEBTESTES PAKET</div>}
              <div style={{fontSize:10,fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:'#32D6FF',marginBottom:7}}>{p.name}</div>
              <div style={{display:'flex',alignItems:'flex-end',gap:2,marginBottom:3,lineHeight:1}}>
                <span style={{fontSize:15,fontWeight:700,color:'rgba(255,255,255,.38)',marginBottom:4}}>€</span>
                <span style={{fontSize:42,fontWeight:900,letterSpacing:'-.06em'}}>{yearly?p.yr:p.mo}</span>
                <span style={{fontSize:15,fontWeight:700,color:'rgba(255,255,255,.38)',marginBottom:4}}>{p.cents}</span>
              </div>
              <div style={{fontSize:11,color:'rgba(255,255,255,.35)',marginBottom:yearly?4:14}}>/Monat{yearly?' · jährlich':' · monatlich kündbar'}</div>
              {yearly && <div style={{fontSize:11,fontWeight:700,color:'#4ADE80',marginBottom:12}}>2 Monate gratis!</div>}
              <div style={{fontSize:12,color:'rgba(255,255,255,.45)',marginBottom:16,lineHeight:1.5,minHeight:32}}>{p.desc}</div>
              <div style={{height:1,background:'rgba(255,255,255,.07)',marginBottom:14}}/>
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:6,marginBottom:'auto',paddingBottom:20}}>
                {p.feat.map(f=>(
                  <li key={f} style={{display:'flex',alignItems:'flex-start',gap:7,fontSize:12,color:'rgba(255,255,255,.72)'}}>
                    <span style={{width:16,height:16,borderRadius:5,background:'rgba(10,132,255,.18)',color:'#32D6FF',display:'flex',alignItems:'center',justifyContent:'center',fontSize:9,fontWeight:700,flexShrink:0,marginTop:1}}>✓</span>{f}
                  </li>
                ))}
                {p.off.map(f=>(
                  <li key={f} style={{display:'flex',alignItems:'flex-start',gap:7,fontSize:12,color:'rgba(255,255,255,.2)'}}>
                    <span style={{width:16,height:16,borderRadius:5,background:'rgba(255,255,255,.05)',color:'rgba(255,255,255,.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:9,flexShrink:0,marginTop:1}}>–</span>{f}
                  </li>
                ))}
              </ul>
              <button onClick={()=>navigate(p.name==='Enterprise'?'/':'register')} style={{marginTop:'auto',width:'100%',padding:'12px',borderRadius:12,fontSize:13,fontWeight:800,cursor:'pointer',fontFamily:'inherit',background:p.hot?'linear-gradient(135deg,#0A84FF,#32D6FF)':'transparent',border:p.hot?'none':'1.5px solid rgba(255,255,255,.12)',color:'#fff',boxShadow:p.hot?'0 5px 18px rgba(10,132,255,.28)':'none'}}>
                {p.name==='Enterprise'?'Kontakt aufnehmen →':'30 Tage gratis →'}
              </button>
            </div>
          ))}
        </div>

        {/* Tablet addon */}
        <div style={{maxWidth:880,margin:'0 auto',background:'linear-gradient(135deg,rgba(10,132,255,.07),rgba(50,214,255,.04))',border:'1.5px solid rgba(10,132,255,.2)',borderRadius:18,padding:'20px 24px',display:'flex',gap:16,alignItems:'center',flexWrap:'wrap'}}>
          <div style={{width:48,height:48,borderRadius:13,background:'rgba(10,132,255,.12)',border:'1px solid rgba(10,132,255,.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.4rem',flexShrink:0}}>📟</div>
          <div style={{flex:1,minWidth:180}}>
            <div style={{fontSize:9,fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:'#32D6FF',marginBottom:3}}>Optional · Add-on</div>
            <div style={{fontSize:15,fontWeight:800,marginBottom:3}}>KDS Tablet – fertig konfiguriert & geliefert</div>
            <div style={{fontSize:12,color:'rgba(255,255,255,.45)',lineHeight:1.5,marginBottom:7}}>Auspacken, WLAN eingeben, fertig. Unser Eigentum – Rückgabe bei Kündigung. 6 Monate Mindestlaufzeit.</div>
            <div style={{display:'flex',gap:5,flexWrap:'wrap'}}>
              {['✓ Vorkonfiguriert','✓ Per Post','6 Mo. Mindestlaufzeit','Ersatz bei Defekt'].map(c=>(
                <span key={c} style={{fontSize:10,fontWeight:600,padding:'2px 8px',borderRadius:20,background:c.startsWith('✓')?'rgba(74,222,128,.08)':'rgba(255,255,255,.05)',border:c.startsWith('✓')?'1px solid rgba(74,222,128,.18)':'1px solid rgba(255,255,255,.08)',color:c.startsWith('✓')?'#4ADE80':'rgba(255,255,255,.45)'}}>{c}</span>
              ))}
            </div>
          </div>
          <div style={{textAlign:'center',flexShrink:0}}>
            <div style={{fontSize:28,fontWeight:900,background:'linear-gradient(135deg,#0A84FF,#32D6FF)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',lineHeight:1}}>+20€</div>
            <div style={{fontSize:11,color:'rgba(255,255,255,.4)',marginTop:2,marginBottom:10}}>/Monat zusätzlich</div>
            <button className="cta" style={{fontSize:12,padding:'8px 16px'}}>Tablet buchen →</button>
          </div>
        </div>

        {/* Trust */}
        <div style={{maxWidth:880,margin:'14px auto 0',display:'flex',borderRadius:14,overflow:'hidden',border:'1px solid rgba(255,255,255,.07)'}}>
          {[['🔒','RKSV-konform','Fiskaltrust AT'],['🇦🇹','Made in Linz','Support auf Deutsch'],['📞','Persönlicher Support','Direkte Handynummer'],['↺','Jederzeit kündbar','Kein Risiko']].map(([ic,t,s],i)=>(
            <div key={t} style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center',gap:7,padding:'16px 10px',borderRight:i<3?'1px solid rgba(255,255,255,.07)':'none',background:'#0D1520'}}>
              <span style={{fontSize:16}}>{ic}</span>
              <div>
                <div style={{fontSize:11,fontWeight:700}}>{t}</div>
                <div style={{fontSize:10,color:'rgba(255,255,255,.4)'}}>{s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div style={{padding:'80px 5%',textAlign:'center',background:'linear-gradient(135deg,rgba(10,132,255,.07),rgba(50,214,255,.04))',borderTop:'1px solid rgba(10,132,255,.12)',borderBottom:'1px solid rgba(10,132,255,.08)'}}>
        <h2 style={{fontSize:'clamp(22px,4vw,44px)',fontWeight:900,letterSpacing:'-.04em',marginBottom:14,lineHeight:1.05}}>
          Bereit für smarte <span style={{background:'linear-gradient(90deg,#0A84FF,#32D6FF)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Gastronomie?</span>
        </h2>
        <p style={{fontSize:15,color:'rgba(255,255,255,.45)',maxWidth:420,margin:'0 auto 32px',lineHeight:1.65}}>30 Tage kostenlos. Keine Kreditkarte. Setup in 5 Minuten. Persönlicher Support aus Linz.</p>
        <button className="cta" style={{fontSize:16,padding:'15px 40px'}} onClick={()=>navigate('/register')}>Jetzt kostenlos starten →</button>
      </div>

      {/* FOOTER */}
      <footer style={{padding:'32px 5%',display:'flex',alignItems:'center',justifyContent:'space-between',borderTop:'1px solid rgba(255,255,255,.07)',flexWrap:'wrap',gap:12}}>
        <span style={{fontSize:18,fontWeight:900}}>trytaply<span style={{background:'linear-gradient(90deg,#0A84FF,#32D6FF)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>.</span></span>
        <span style={{fontSize:12,color:'rgba(255,255,255,.28)'}}>© 2025 trytaply · Linz, Österreich · Scan. Order. Done.</span>
        <div style={{display:'flex',gap:18}}>
          {['Datenschutz','Impressum','AGB','Kontakt'].map(l=>(
            <a key={l} href="#" style={{fontSize:12,color:'rgba(255,255,255,.35)',textDecoration:'none'}}>{l}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}
