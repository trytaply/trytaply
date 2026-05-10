import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [scrolled, setScrolled] = useState(false);
  const [billingYearly, setBillingYearly] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const plans = [
    {
      name: 'Starter', monthlyPrice: '39', yearlyPrice: '33', cents: '.99',
      desc: 'Für kleine Cafes und Bistros.',
      features: ['Bis 20 Tische','QR-Code Bestellung','Karte, Apple & Google Pay','Küchendisplay (KDS)','Menü-Editor','RKSV-konform'],
      missing: ['Analytics','Upselling','Mehrsprachig'], featured: false,
    },
    {
      name: 'Professional', monthlyPrice: '69', yearlyPrice: '58', cents: '.99',
      desc: 'Der Standard für Restaurants.',
      features: ['Bis 60 Tische','Alles aus Starter','Analytics Dashboard','Upselling-Funktion','Split-Bill','Mehrsprachige Karte','Allergen-Filter','Loyalty-Stempelkarte'],
      missing: [], featured: true,
    },
    {
      name: 'Enterprise', monthlyPrice: '119', yearlyPrice: '99', cents: '.99',
      desc: 'Für Betriebe mit mehreren Standorten.',
      features: ['Unbegrenzte Tische','Alles aus Professional','Multi-Location','API-Zugang','Kassensystem-Integration','Prioritäts-Support','SLA Garantie','Onboarding vor Ort'],
      missing: [], featured: false,
    },
  ];

  const features = [
    { icon: '📱', title: 'QR-Code Bestellung', desc: 'Gäste scannen – Browser öffnet sich sofort. Keine App, kein Login.' },
    { icon: '💳', title: 'Zahlung am Tisch', desc: 'Karte, Apple Pay, Google Pay. Rechnung teilen mit einem Klick.' },
    { icon: '👨‍🍳', title: 'Echtzeit Küchendisplay', desc: 'Neue Bestellungen erscheinen sofort – kein Ausdrucken nötig.' },
    { icon: '📊', title: 'Analytics Dashboard', desc: 'Welche Gerichte wann? Datenbasierte Entscheidungen.' },
    { icon: '🌍', title: 'Mehrsprachige Karte', desc: 'DE, EN, TR – perfekt für Tourismus in Österreich.' },
    { icon: '🔒', title: 'RKSV-konform', desc: 'Vollständig nach österreichischer Kassenpflicht.' },
  ];

  const BLUE = '#0A84FF';
  const CYAN = '#32D6FF';
  const DARK = '#06090F';
  const NAVY = '#0D1520';
  const BORDER = 'rgba(255,255,255,0.07)';
  const TEXT = 'rgba(255,255,255,0.48)';
  const SYNE = "'Syne', 'Arial Black', sans-serif";
  const JAKARTA = "'Plus Jakarta Sans', Arial, sans-serif";
  const GRAD = { background: `linear-gradient(90deg,${BLUE},${CYAN})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' };

  return (
    <div style={{ width: '100%', background: DARK, color: '#fff', overflowX: 'hidden', fontFamily: JAKARTA }}>
      <style>{`
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.25}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
        .hero-anim{animation:fadeUp 0.7s ease both}
        .phone-float{animation:float 4s ease-in-out infinite}
        .feat-card{background:${NAVY};border:1px solid ${BORDER};border-radius:20px;padding:28px;transition:border-color .25s,transform .25s;cursor:default}
        .feat-card:hover{border-color:rgba(10,132,255,0.35);transform:translateY(-4px)}
        .plan-card{background:${NAVY};border:1.5px solid rgba(255,255,255,0.08);border-radius:22px;padding:28px 24px;display:flex;flex-direction:column;transition:transform .25s;position:relative;overflow:hidden}
        .plan-card:hover{transform:translateY(-4px)}
        .plan-featured{border-color:rgba(10,132,255,0.45)!important;background:linear-gradient(160deg,#0c1e3a 0%,#081530 100%)!important;box-shadow:0 0 48px rgba(10,132,255,0.12)!important}
        .plan-featured::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,${BLUE},${CYAN})}
        .btn-cta{padding:13px 28px;border-radius:12px;background:linear-gradient(135deg,${BLUE},${CYAN});color:#fff;font-weight:800;font-size:0.9rem;border:none;cursor:pointer;font-family:${JAKARTA};box-shadow:0 6px 24px rgba(10,132,255,0.35);transition:transform .2s,box-shadow .2s;white-space:nowrap}
        .btn-cta:hover{transform:translateY(-2px);box-shadow:0 10px 32px rgba(10,132,255,0.5)}
        .btn-cta-lg{font-size:1rem;padding:15px 36px}
        .btn-outline{padding:13px 24px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.15);background:transparent;color:rgba(255,255,255,0.85);font-weight:600;font-size:0.9rem;cursor:pointer;font-family:${JAKARTA};transition:border-color .2s,background .2s}
        .btn-outline:hover{border-color:rgba(255,255,255,0.32);background:rgba(255,255,255,0.05)}
        .nav-a{color:rgba(255,255,255,0.5);text-decoration:none;font-size:0.875rem;font-weight:600;transition:color .2s;font-family:${JAKARTA}}
        .nav-a:hover{color:#fff}
        .stat-block{flex:1;text-align:center;padding:32px 16px;border-right:1px solid ${BORDER}}
        .stat-block:last-child{border-right:none}
        .toggle{width:52px;height:28px;border-radius:14px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.15);cursor:pointer;position:relative;transition:background .2s;flex-shrink:0}
        .toggle.on{background:linear-gradient(90deg,${BLUE},${CYAN});border-color:transparent}
        .toggle-k{position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#fff;transition:transform .25s;box-shadow:0 2px 6px rgba(0,0,0,0.3)}
        .toggle.on .toggle-k{transform:translateX(24px)}
        .step-num{width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,${BLUE},${CYAN});display:flex;align-items:center;justify-content:center;font-size:1.5rem;margin:0 auto 20px;box-shadow:0 6px 20px rgba(10,132,255,0.35);position:relative;z-index:1}
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        position:'fixed',top:0,left:0,right:0,zIndex:100,
        display:'flex',alignItems:'center',justifyContent:'space-between',
        padding:'0 6%',height:66,
        background: scrolled ? 'rgba(6,9,15,0.95)' : 'rgba(6,9,15,0.7)',
        backdropFilter:'blur(24px)',
        borderBottom: scrolled ? `1px solid ${BORDER}` : '1px solid transparent',
        transition:'all 0.3s'
      }}>
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <svg width="34" height="34" viewBox="0 0 72 72" fill="none">
            <rect width="72" height="72" rx="18" fill={NAVY}/>
            <defs><linearGradient id="lg" x1="0" y1="0" x2="72" y2="72" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor={BLUE}/><stop offset="100%" stopColor={CYAN}/></linearGradient></defs>
            <rect x="10" y="28" width="52" height="10" rx="5" fill="url(#lg)" opacity=".9"/>
            <rect x="17" y="38" width="7" height="18" rx="3.5" fill="url(#lg)" opacity=".55"/>
            <rect x="48" y="38" width="7" height="18" rx="3.5" fill="url(#lg)" opacity=".55"/>
            <circle cx="36" cy="22" r="5" stroke="url(#lg)" strokeWidth="2"/>
            <circle cx="36" cy="22" r="2.5" fill="white" opacity=".9"/>
          </svg>
          <span style={{fontSize:'1.25rem',fontWeight:800,letterSpacing:'-0.03em',fontFamily:SYNE}}>
            trytaply<span style={GRAD}>.</span>
          </span>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:28}}>
          <a className="nav-a" href="#features">Features</a>
          <a className="nav-a" href="#how">So geht's</a>
          <a className="nav-a" href="#pricing">Preise</a>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          {token
            ? <button className="btn-cta" onClick={()=>navigate('/dashboard')}>Dashboard →</button>
            : <>
                <button className="btn-outline" onClick={()=>navigate('/login')}>Login</button>
                <button className="btn-cta" onClick={()=>navigate('/register')}>Kostenlos testen →</button>
              </>
          }
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        minHeight:'100vh',display:'flex',flexDirection:'column',
        alignItems:'center',justifyContent:'center',
        padding:'120px 6% 80px',textAlign:'center',position:'relative',overflow:'hidden'
      }}>
        {/* Glows */}
        <div style={{position:'absolute',width:900,height:900,borderRadius:'50%',background:'radial-gradient(circle,rgba(10,132,255,0.1),transparent 65%)',top:'50%',left:'50%',transform:'translate(-50%,-55%)',pointerEvents:'none'}}/>
        <div style={{position:'absolute',width:500,height:500,borderRadius:'50%',background:'radial-gradient(circle,rgba(50,214,255,0.06),transparent 65%)',top:'15%',right:'5%',pointerEvents:'none'}}/>
        {/* Grid overlay */}
        <div style={{position:'absolute',inset:0,pointerEvents:'none',backgroundImage:'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',backgroundSize:'56px 56px',maskImage:'radial-gradient(ellipse at 50% 40%,black 20%,transparent 75%)',WebkitMaskImage:'radial-gradient(ellipse at 50% 40%,black 20%,transparent 75%)'}}/>

        <div className="hero-anim" style={{position:'relative',zIndex:1,width:'100%'}}>
          {/* Badge */}
          <div style={{display:'inline-flex',alignItems:'center',gap:7,background:'rgba(10,132,255,0.1)',border:'1px solid rgba(10,132,255,0.22)',borderRadius:30,padding:'5px 14px',fontSize:'0.7rem',fontWeight:700,color:CYAN,marginBottom:28}}>
            <span style={{width:6,height:6,borderRadius:'50%',background:CYAN,animation:'pulse 2s infinite',display:'inline-block'}}/>
            Neu · Linz, Österreich · 2025
          </div>

          {/* H1 */}
          <h1 style={{fontSize:'clamp(2.8rem,6vw,5rem)',fontWeight:800,letterSpacing:'-0.05em',lineHeight:1.02,marginBottom:22,fontFamily:SYNE}}>
            Das smarte Bestellsystem<br/>
            <span style={GRAD}>für dein Restaurant.</span>
          </h1>

          <p style={{fontSize:'clamp(0.92rem,1.4vw,1.08rem)',color:TEXT,maxWidth:540,lineHeight:1.7,margin:'0 auto 40px'}}>
            Gäste scannen. Gäste bestellen. Gäste zahlen – direkt am Tisch.
            Kein Kellner für die Bestellung nötig. Mehr Umsatz, weniger Stress.
          </p>

          <div style={{display:'flex',gap:12,justifyContent:'center',marginBottom:72,flexWrap:'wrap'}}>
            <button className="btn-cta btn-cta-lg" onClick={()=>navigate('/register')}>30 Tage gratis testen →</button>
            <button className="btn-outline" style={{fontSize:'1rem',padding:'15px 28px'}} onClick={()=>navigate('/login')}>Einloggen</button>
          </div>

          {/* PHONES */}
          <div style={{display:'flex',gap:16,alignItems:'flex-end',justifyContent:'center',position:'relative',zIndex:1}}>

            {/* Left phone */}
            <div style={{width:196,borderRadius:32,background:'#04080F',border:'2px solid rgba(255,255,255,0.1)',overflow:'hidden',boxShadow:'0 24px 48px rgba(0,0,0,0.6)',opacity:0.58,transform:'scale(0.93) translateY(10px)'}}>
              <div style={{width:68,height:20,background:'#04080F',borderRadius:'0 0 10px 10px',margin:'0 auto'}}/>
              <div>
                <div style={{padding:'12px 13px 10px',background:'linear-gradient(160deg,#0b1928,#07111f)',borderBottom:`1px solid ${BORDER}`}}>
                  <div style={{fontSize:10,fontWeight:600,color:CYAN,letterSpacing:'0.05em',marginBottom:2}}>Rizzma Linz</div>
                  <div style={{fontSize:15,fontWeight:900,fontFamily:SYNE}}>Tisch <span style={{color:CYAN}}>4</span></div>
                </div>
                <div style={{display:'flex',background:'rgba(13,21,32,0.8)',borderBottom:`1px solid ${BORDER}`}}>
                  {['SPEISEN','GETRÄNKE','EXTRAS'].map((t,i)=>(
                    <div key={t} style={{flex:1,textAlign:'center',padding:'8px 2px',fontSize:9,fontWeight:700,color:i===0?CYAN:'rgba(255,255,255,0.3)',borderBottom:i===0?`2px solid ${CYAN}`:'2px solid transparent'}}>{t}</div>
                  ))}
                </div>
                {[['🍔','Farmhouse','Beef, Cheddar, BBQ','€ 13,90',true],['🍟','Beef Fries','Crispy, Beef Sauce','€ 6,50',false],['🥤','Coca-Cola','0,4l eisgekühlt','€ 3,50',false]].map(([ico,name,desc,price,hi])=>(
                  <div key={name} style={{display:'flex',alignItems:'center',gap:7,padding:'7px 12px',borderBottom:`1px solid ${BORDER}`,background:hi?'rgba(10,132,255,0.05)':''}}>
                    <div style={{width:32,height:32,borderRadius:8,background:'#111b2a',flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1rem'}}>{ico}</div>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{fontSize:10,fontWeight:800}}>{name}</div>
                      <div style={{fontSize:9,color:TEXT}}>{desc}</div>
                    </div>
                    <div style={{fontSize:10,fontWeight:800,color:CYAN,whiteSpace:'nowrap'}}>{price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Center phone */}
            <div className="phone-float" style={{width:220,borderRadius:34,background:'#04080F',border:`2px solid rgba(10,132,255,0.3)`,overflow:'hidden',boxShadow:`0 32px 64px rgba(0,0,0,0.65), 0 0 40px rgba(10,132,255,0.1)`,zIndex:2}}>
              <div style={{width:68,height:22,background:'#04080F',borderRadius:'0 0 12px 12px',margin:'0 auto'}}/>
              <div>
                <div style={{padding:'12px 14px',background:'linear-gradient(160deg,#0b1928,#07111f)',borderBottom:`1px solid ${BORDER}`}}>
                  <div style={{fontSize:10,color:'rgba(255,255,255,0.4)',marginBottom:2}}>trytaply · Bezahlen</div>
                  <div style={{fontSize:16,fontWeight:900,fontFamily:SYNE}}>Tisch <span style={{color:CYAN}}>4</span> · Rizzma</div>
                </div>
                <div style={{padding:'14px 14px'}}>
                  <div style={{fontSize:10,color:TEXT,marginBottom:2}}>Gesamtbetrag</div>
                  <div style={{fontSize:32,fontWeight:900,letterSpacing:'-0.05em',marginBottom:12,lineHeight:1,fontFamily:SYNE}}>
                    <sup style={{fontSize:14,verticalAlign:'top',marginTop:6,display:'inline-block'}}>€</sup>41,30
                  </div>
                  {[['2× Farmhouse','€ 27,80'],['1× Beef Fries','€ 6,50'],['2× Coca-Cola','€ 7,00']].map(([l,v])=>(
                    <div key={l} style={{display:'flex',justifyContent:'space-between',padding:'3px 0',borderBottom:`1px solid ${BORDER}`,fontSize:9}}>
                      <span style={{color:TEXT}}>{l}</span><span style={{fontWeight:600}}>{v}</span>
                    </div>
                  ))}
                  <div style={{fontSize:9,fontWeight:700,color:'rgba(255,255,255,0.3)',letterSpacing:'0.1em',textTransform:'uppercase',margin:'10px 0 6px'}}>Zahlungsart</div>
                  <div style={{display:'flex',gap:5,marginBottom:10}}>
                    {[['💳','Karte',true],['','Apple Pay',false],['G','Google',false]].map(([ico,lbl,sel])=>(
                      <div key={lbl} style={{flex:1,padding:'6px 3px',borderRadius:7,border:sel?`1.5px solid ${BLUE}`:'1.5px solid rgba(255,255,255,0.08)',background:sel?'rgba(10,132,255,0.12)':'rgba(255,255,255,0.03)',textAlign:'center',fontSize:9,fontWeight:700,color:sel?'#fff':'rgba(255,255,255,0.4)'}}>
                        <div style={{fontSize:14}}>{ico}</div>{lbl}
                      </div>
                    ))}
                  </div>
                  <div style={{fontSize:9,fontWeight:700,color:'rgba(255,255,255,0.3)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:6}}>Trinkgeld</div>
                  <div style={{display:'flex',gap:4,marginBottom:12}}>
                    {['0%','5%','10%','15%'].map((t,i)=>(
                      <div key={t} style={{flex:1,padding:'5px 2px',borderRadius:7,border:i===2?`1px solid ${CYAN}`:'1px solid rgba(255,255,255,0.07)',background:i===2?'rgba(50,214,255,0.08)':'rgba(255,255,255,0.02)',textAlign:'center',fontSize:9,fontWeight:700,color:i===2?CYAN:'rgba(255,255,255,0.4)'}}>{t}</div>
                    ))}
                  </div>
                  <div style={{width:'100%',padding:'11px',borderRadius:11,background:`linear-gradient(135deg,${BLUE},${CYAN})`,color:'#fff',fontWeight:900,fontSize:11,textAlign:'center',cursor:'pointer'}}>
                    € 45,43 bezahlen ✓
                  </div>
                </div>
              </div>
            </div>

            {/* Right phone - KDS */}
            <div style={{width:196,borderRadius:32,background:'#04080F',border:'2px solid rgba(255,255,255,0.1)',overflow:'hidden',boxShadow:'0 24px 48px rgba(0,0,0,0.6)',opacity:0.58,transform:'scale(0.93) translateY(10px)'}}>
              <div style={{width:68,height:20,background:'#04080F',borderRadius:'0 0 10px 10px',margin:'0 auto'}}/>
              <div>
                <div style={{padding:'10px 13px',background:'linear-gradient(160deg,#0b1928,#07111f)',borderBottom:`1px solid ${BORDER}`,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <div style={{fontSize:10,fontWeight:800,letterSpacing:'0.06em',textTransform:'uppercase',color:CYAN,fontFamily:SYNE}}>Küche · Rizzma</div>
                  <div style={{display:'flex',alignItems:'center',gap:4,fontSize:9,color:'rgba(255,255,255,0.35)'}}>
                    <span style={{width:5,height:5,borderRadius:'50%',background:'#4ADE80',animation:'pulse 2s infinite',display:'inline-block'}}/>Live
                  </div>
                </div>
                {[{t:4,time:'Gerade',s:'NEU',items:['2× Farmhouse','1× Beef Fries','2× Coca-Cola'],n:true},{t:7,time:'vor 8 Min',s:'FERTIG',items:['3× Farmhouse','2× Beef Fries'],n:false}].map(o=>(
                  <div key={o.t} style={{margin:'8px 10px 0',background:'rgba(255,255,255,0.03)',border:o.n?'1px solid rgba(10,132,255,0.35)':`1px solid ${BORDER}`,borderRadius:10,overflow:'hidden'}}>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'7px 10px',background:o.n?'rgba(10,132,255,0.06)':'rgba(74,222,128,0.04)',borderBottom:`1px solid ${BORDER}`}}>
                      <div>
                        <div style={{fontSize:10,fontWeight:900,color:o.n?CYAN:'#4ADE80',fontFamily:SYNE}}>Tisch {o.t}</div>
                        <div style={{fontSize:9,color:'rgba(255,255,255,0.3)'}}>{o.time}</div>
                      </div>
                      <span style={{fontSize:8,fontWeight:700,padding:'2px 6px',borderRadius:5,background:o.n?'rgba(10,132,255,0.18)':'rgba(74,222,128,0.12)',color:o.n?BLUE:'#4ADE80'}}>{o.s}</span>
                    </div>
                    <div style={{padding:'5px 10px'}}>
                      {o.items.map(item=>(
                        <div key={item} style={{fontSize:9,padding:'2px 0',borderBottom:`1px solid ${BORDER}`,color:'rgba(255,255,255,0.65)'}}>{item}</div>
                      ))}
                    </div>
                    {o.n && <div style={{margin:'0 8px 8px',padding:'7px',borderRadius:7,background:`linear-gradient(135deg,${BLUE},${CYAN})`,textAlign:'center',fontSize:9,fontWeight:700,cursor:'pointer'}}>In Zubereitung →</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div style={{display:'flex',borderTop:`1px solid ${BORDER}`,borderBottom:`1px solid ${BORDER}`}}>
        {[['+ 22%','mehr Umsatz pro Tisch'],['3 Min','schnellere Bestellung'],['0 €','Einrichtungsgebühr'],['5 Min','Setup-Zeit']].map(([n,l])=>(
          <div key={l} className="stat-block">
            <div style={{fontSize:'clamp(1.8rem,3vw,2.5rem)',fontWeight:800,letterSpacing:'-0.05em',...GRAD,lineHeight:1,fontFamily:SYNE}}>{n}</div>
            <div style={{fontSize:'0.72rem',color:TEXT,marginTop:5}}>{l}</div>
          </div>
        ))}
      </div>

      {/* ── FEATURES ── */}
      <section id="features" style={{padding:'96px 6%'}}>
        <div style={{textAlign:'center',marginBottom:60}}>
          <span style={{fontSize:'0.68rem',fontWeight:700,letterSpacing:'0.18em',textTransform:'uppercase',color:CYAN,display:'block',marginBottom:14}}>Features</span>
          <h2 style={{fontSize:'clamp(1.8rem,4vw,2.8rem)',fontWeight:800,letterSpacing:'-0.04em',lineHeight:1.1,marginBottom:14,fontFamily:SYNE}}>Alles was dein Restaurant braucht</h2>
          <p style={{fontSize:'0.92rem',color:TEXT,maxWidth:500,margin:'0 auto',lineHeight:1.65}}>Entwickelt für österreichische Gastronomen – einfach, günstig, RKSV-konform.</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:14,maxWidth:1060,margin:'0 auto'}}>
          {features.map(f=>(
            <div key={f.title} className="feat-card">
              <div style={{width:48,height:48,borderRadius:14,background:'rgba(10,132,255,0.1)',border:'1px solid rgba(10,132,255,0.18)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.3rem',marginBottom:18}}>{f.icon}</div>
              <h3 style={{fontSize:'1rem',fontWeight:800,marginBottom:8,fontFamily:SYNE}}>{f.title}</h3>
              <p style={{fontSize:'0.8rem',color:TEXT,lineHeight:1.65}}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW ── */}
      <section id="how" style={{padding:'96px 6%',background:'linear-gradient(180deg,#06090F 0%,#07101e 50%,#06090F 100%)'}}>
        <div style={{textAlign:'center',marginBottom:60}}>
          <span style={{fontSize:'0.68rem',fontWeight:700,letterSpacing:'0.18em',textTransform:'uppercase',color:CYAN,display:'block',marginBottom:14}}>So einfach geht's</span>
          <h2 style={{fontSize:'clamp(1.8rem,4vw,2.8rem)',fontWeight:800,letterSpacing:'-0.04em',fontFamily:SYNE}}>
            Scan. Order. <span style={GRAD}>Done.</span>
          </h2>
        </div>
        <div style={{display:'flex',gap:0,maxWidth:820,margin:'0 auto',position:'relative'}}>
          <div style={{position:'absolute',top:32,left:'calc(16.7%)',right:'calc(16.7%)',height:2,background:`linear-gradient(90deg,${BLUE},${CYAN})`,opacity:.25}}/>
          {[['📷','QR scannen','Gast scannt QR-Code am Tisch. Keine App, kein Login. Sofort im Browser.'],['🛒','Bestellen','Speisekarte, Warenkorb, Sonderwünsche – alles direkt am Tisch.'],['✅','Bezahlen & fertig','Direkt in der App zahlen. Rechnung teilen, Trinkgeld digital.']].map(([ico,title,desc])=>(
            <div key={title} style={{flex:1,textAlign:'center',padding:'0 12px'}}>
              <div className="step-num">{ico}</div>
              <h3 style={{fontSize:'0.95rem',fontWeight:800,marginBottom:8,fontFamily:SYNE}}>{title}</h3>
              <p style={{fontSize:'0.78rem',color:TEXT,lineHeight:1.6}}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{padding:'96px 6%'}}>
        <div style={{textAlign:'center',marginBottom:48}}>
          <span style={{fontSize:'0.68rem',fontWeight:700,letterSpacing:'0.18em',textTransform:'uppercase',color:CYAN,display:'block',marginBottom:14}}>Preise</span>
          <h2 style={{fontSize:'clamp(1.8rem,4vw,2.8rem)',fontWeight:800,letterSpacing:'-0.04em',marginBottom:14,fontFamily:SYNE}}>
            Einfach. Fair. <span style={GRAD}>Kein Verstecktes.</span>
          </h2>
          <p style={{fontSize:'0.9rem',color:TEXT,marginBottom:28}}>Monatlich kündbar · 30 Tage kostenlos · Keine Kreditkarte</p>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:12}}>
            <span style={{fontSize:'0.85rem',fontWeight:600,color:billingYearly?TEXT:'#fff'}}>Monatlich</span>
            <div className={`toggle ${billingYearly?'on':''}`} onClick={()=>setBillingYearly(!billingYearly)}>
              <div className="toggle-k"/>
            </div>
            <span style={{fontSize:'0.85rem',fontWeight:600,color:billingYearly?'#fff':TEXT}}>Jährlich</span>
            <span style={{fontSize:'0.65rem',fontWeight:800,background:'rgba(74,222,128,0.12)',color:'#4ADE80',border:'1px solid rgba(74,222,128,0.25)',borderRadius:20,padding:'3px 9px'}}>2 Monate gratis</span>
          </div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:14,maxWidth:900,margin:'0 auto 20px'}}>
          {plans.map(p=>(
            <div key={p.name} className={`plan-card ${p.featured?'plan-featured':''}`}>
              {p.featured && <div style={{fontSize:'0.6rem',fontWeight:800,...GRAD,marginBottom:12,letterSpacing:'0.06em'}}>⭐ BELIEBTESTES PAKET</div>}
              <div style={{fontSize:'0.65rem',fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',color:CYAN,marginBottom:8}}>{p.name}</div>
              <div style={{display:'flex',alignItems:'flex-end',gap:3,marginBottom:4,lineHeight:1}}>
                <span style={{fontSize:'1rem',fontWeight:700,color:'rgba(255,255,255,0.4)',marginBottom:6}}>€</span>
                <span style={{fontSize:'2.8rem',fontWeight:900,letterSpacing:'-0.06em',fontFamily:SYNE}}>{billingYearly?p.yearlyPrice:p.monthlyPrice}</span>
                <span style={{fontSize:'1rem',fontWeight:700,color:'rgba(255,255,255,0.4)',marginBottom:6}}>{p.cents}</span>
              </div>
              <div style={{fontSize:'0.72rem',color:'rgba(255,255,255,0.38)',marginBottom:8}}>/Monat{billingYearly?' · jährlich':' · monatlich kündbar'}</div>
              {billingYearly && <div style={{fontSize:'0.65rem',fontWeight:700,color:'#4ADE80',marginBottom:8}}>2 Monate gratis gespart!</div>}
              <p style={{fontSize:'0.74rem',color:TEXT,marginBottom:18,lineHeight:1.55,minHeight:36}}>{p.desc}</p>
              <div style={{height:1,background:BORDER,marginBottom:16}}/>
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:7,marginBottom:'auto',paddingBottom:22}}>
                {p.features.map(f=>(
                  <li key={f} style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:'0.75rem',color:'rgba(255,255,255,0.72)'}}>
                    <span style={{width:17,height:17,borderRadius:5,background:'rgba(10,132,255,0.18)',color:CYAN,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.58rem',fontWeight:700,flexShrink:0,marginTop:1}}>✓</span>
                    {f}
                  </li>
                ))}
                {p.missing.map(f=>(
                  <li key={f} style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:'0.75rem',color:'rgba(255,255,255,0.22)'}}>
                    <span style={{width:17,height:17,borderRadius:5,background:'rgba(255,255,255,0.05)',color:'rgba(255,255,255,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.58rem',flexShrink:0,marginTop:1}}>–</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button onClick={()=>navigate(p.name==='Enterprise'?'#':'register')}
                style={{marginTop:'auto',width:'100%',padding:'13px',borderRadius:13,fontSize:'0.85rem',fontWeight:800,cursor:'pointer',fontFamily:JAKARTA,background:p.featured?`linear-gradient(135deg,${BLUE},${CYAN})`:'transparent',border:p.featured?'none':'1.5px solid rgba(255,255,255,0.13)',color:'#fff',boxShadow:p.featured?`0 6px 20px rgba(10,132,255,0.3)`:'none'}}>
                {p.name==='Enterprise'?'Kontakt aufnehmen →':'30 Tage gratis →'}
              </button>
            </div>
          ))}
        </div>

        {/* Add-on */}
        <div style={{maxWidth:900,margin:'0 auto 0',background:'linear-gradient(135deg,rgba(10,132,255,0.07),rgba(50,214,255,0.04))',border:'1.5px solid rgba(10,132,255,0.2)',borderRadius:20,padding:'22px 26px',display:'flex',gap:18,alignItems:'center',flexWrap:'wrap'}}>
          <div style={{width:52,height:52,borderRadius:14,background:'rgba(10,132,255,0.12)',border:'1px solid rgba(10,132,255,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.5rem',flexShrink:0}}>📟</div>
          <div style={{flex:1,minWidth:200}}>
            <div style={{fontSize:'0.6rem',fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',color:CYAN,marginBottom:4}}>Optional · Add-on</div>
            <div style={{fontSize:'0.95rem',fontWeight:800,marginBottom:3,fontFamily:SYNE}}>KDS Tablet – fertig konfiguriert & geliefert</div>
            <div style={{fontSize:'0.74rem',color:TEXT,lineHeight:1.55,marginBottom:8}}>Auspacken, WLAN eingeben, fertig. Bleibt unser Eigentum. 6 Monate Mindestlaufzeit.</div>
            <div style={{display:'flex',gap:5,flexWrap:'wrap'}}>
              {['✓ Vorkonfiguriert','✓ Per Post geliefert','6 Mo. Mindestlaufzeit','Ersatz bei Defekt'].map(c=>(
                <span key={c} style={{fontSize:'0.6rem',fontWeight:600,padding:'3px 8px',borderRadius:20,background:c.startsWith('✓')?'rgba(74,222,128,0.08)':'rgba(255,255,255,0.06)',border:c.startsWith('✓')?'1px solid rgba(74,222,128,0.18)':`1px solid ${BORDER}`,color:c.startsWith('✓')?'#4ADE80':'rgba(255,255,255,0.5)'}}>{c}</span>
              ))}
            </div>
          </div>
          <div style={{textAlign:'center',flexShrink:0}}>
            <div style={{fontSize:'1.8rem',fontWeight:900,...GRAD,lineHeight:1,fontFamily:SYNE}}>+20€</div>
            <div style={{fontSize:'0.65rem',color:TEXT,marginTop:2,marginBottom:10}}>/Monat zusätzlich</div>
            <button className="btn-cta" style={{fontSize:'0.75rem',padding:'9px 18px'}}>Tablet dazu buchen →</button>
          </div>
        </div>

        {/* Trust */}
        <div style={{maxWidth:900,margin:'16px auto 0',display:'flex',borderRadius:16,overflow:'hidden',border:`1px solid ${BORDER}`}}>
          {[['🔒','RKSV-konform','Fiskaltrust AT'],['🇦🇹','Made in Linz','Support auf Deutsch'],['📞','Pers. Support','Direkte Handynummer'],['↺','Jederzeit kündbar','Kein Risiko']].map(([ico,t,s],i)=>(
            <div key={t} style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center',gap:8,padding:'18px 12px',borderRight:i<3?`1px solid ${BORDER}`:'none',background:NAVY}}>
              <span style={{fontSize:'1.1rem'}}>{ico}</span>
              <div>
                <div style={{fontSize:'0.72rem',fontWeight:700}}>{t}</div>
                <div style={{fontSize:'0.65rem',color:TEXT}}>{s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <div style={{padding:'96px 6%',textAlign:'center',background:'linear-gradient(135deg,rgba(10,132,255,0.07),rgba(50,214,255,0.04))',borderTop:'1px solid rgba(10,132,255,0.12)',borderBottom:'1px solid rgba(10,132,255,0.08)'}}>
        <h2 style={{fontSize:'clamp(1.8rem,4.5vw,3rem)',fontWeight:800,letterSpacing:'-0.04em',marginBottom:14,lineHeight:1.05,fontFamily:SYNE}}>
          Bereit für smarte<br/><span style={GRAD}>Gastronomie?</span>
        </h2>
        <p style={{fontSize:'1rem',color:TEXT,marginBottom:36,maxWidth:440,margin:'0 auto 36px',lineHeight:1.65}}>
          30 Tage kostenlos. Keine Kreditkarte. Setup in 5 Minuten. Support aus Linz.
        </p>
        <button className="btn-cta btn-cta-lg" onClick={()=>navigate('/register')}>Jetzt kostenlos starten →</button>
      </div>

      {/* ── FOOTER ── */}
      <footer style={{padding:'36px 6%',display:'flex',alignItems:'center',justifyContent:'space-between',borderTop:`1px solid ${BORDER}`,flexWrap:'wrap',gap:14}}>
        <span style={{fontSize:'1.1rem',fontWeight:900,fontFamily:SYNE}}>trytaply<span style={GRAD}>.</span></span>
        <span style={{fontSize:'0.72rem',color:'rgba(255,255,255,0.28)'}}>© 2025 trytaply · Linz, Österreich · Scan. Order. Done.</span>
        <div style={{display:'flex',gap:20}}>
          {['Datenschutz','Impressum','AGB','Kontakt'].map(l=>(
            <a key={l} href="#" style={{fontSize:'0.72rem',color:'rgba(255,255,255,0.38)',textDecoration:'none'}}>{l}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}
