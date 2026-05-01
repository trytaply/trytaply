<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>trytaply – Scan. Order. Done.</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --blue:#0A84FF;--cyan:#32D6FF;--dark:#06090F;--navy:#050D1E;
  --card:#0D1520;--card2:#111B2A;--border:rgba(255,255,255,.07);
  --text:rgba(255,255,255,.48);--green:#4ADE80;--amber:#FBBF24;
}
html{scroll-behavior:smooth}
body{font-family:'Plus Jakarta Sans',sans-serif;background:var(--dark);color:#fff;overflow-x:hidden}

/* ── UTILS ── */
.grad{background:linear-gradient(90deg,var(--blue),var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.grad-bg{background:linear-gradient(135deg,var(--blue),var(--cyan))}

/* ── NAV ── */
nav{
  position:fixed;top:0;left:0;right:0;z-index:100;
  display:flex;align-items:center;justify-content:space-between;
  padding:0 6%;height:66px;
  background:rgba(5,13,30,.85);backdrop-filter:blur(24px);
  border-bottom:1px solid var(--border);
}
.nav-logo{display:flex;align-items:center;gap:10px}
.nav-brand{font-size:1.25rem;font-weight:900;letter-spacing:-.03em}
.nav-links{display:flex;gap:28px}
.nav-links a{color:var(--text);text-decoration:none;font-size:.85rem;font-weight:500;transition:color .2s}
.nav-links a:hover{color:#fff}
.nav-cta{
  padding:9px 22px;border-radius:10px;
  background:linear-gradient(135deg,var(--blue),var(--cyan));
  color:#fff;font-weight:800;font-size:.82rem;
  border:none;cursor:pointer;font-family:inherit;
  transition:opacity .2s,transform .2s;
}
.nav-cta:hover{opacity:.85;transform:translateY(-1px)}
@media(max-width:680px){.nav-links{display:none}}

/* ── HERO ── */
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
.hero-glow2{
  position:absolute;width:400px;height:400px;border-radius:50%;
  background:radial-gradient(circle,rgba(50,214,255,.06),transparent 65%);
  top:20%;right:10%;pointer-events:none;
}
.hero-grid{
  position:absolute;inset:0;pointer-events:none;
  background-image:linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px);
  background-size:56px 56px;
  mask-image:radial-gradient(ellipse at 50% 40%,black 20%,transparent 75%);
}
.hero-badge{
  display:inline-flex;align-items:center;gap:7px;
  background:rgba(10,132,255,.1);border:1px solid rgba(10,132,255,.22);
  border-radius:30px;padding:5px 14px;
  font-size:.7rem;font-weight:700;color:var(--cyan);
  margin-bottom:24px;position:relative;z-index:1;
}
.pulse{width:6px;height:6px;border-radius:50%;background:var(--cyan);animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.2}}
.hero h1{
  font-size:clamp(2.6rem,7vw,5.4rem);font-weight:900;
  letter-spacing:-.05em;line-height:1.0;
  margin-bottom:20px;position:relative;z-index:1;
}
.hero-sub{
  font-size:clamp(.88rem,1.5vw,1.05rem);color:var(--text);
  max-width:520px;line-height:1.68;
  margin:0 auto 36px;position:relative;z-index:1;
}
.hero-btns{
  display:flex;gap:12px;flex-wrap:wrap;
  justify-content:center;margin-bottom:68px;
  position:relative;z-index:1;
}
.btn-primary{
  padding:14px 32px;border-radius:13px;
  background:linear-gradient(135deg,var(--blue),var(--cyan));
  color:#fff;font-weight:800;font-size:.95rem;
  border:none;cursor:pointer;font-family:inherit;
  box-shadow:0 8px 28px rgba(10,132,255,.3);
  transition:transform .2s,box-shadow .2s;
}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 12px 40px rgba(10,132,255,.45)}
.btn-ghost{
  padding:14px 26px;border-radius:13px;
  border:1.5px solid rgba(255,255,255,.14);
  background:transparent;color:#fff;
  font-weight:600;font-size:.95rem;
  cursor:pointer;font-family:inherit;
  transition:border-color .2s,background .2s;
}
.btn-ghost:hover{border-color:rgba(255,255,255,.3);background:rgba(255,255,255,.05)}

/* ── PHONE CLUSTER ── */
.phones{
  display:flex;gap:14px;align-items:flex-end;
  justify-content:center;position:relative;z-index:1;
}
.phone{
  width:200px;border-radius:34px;
  background:#04080F;border:2px solid rgba(255,255,255,.1);
  overflow:hidden;
  box-shadow:0 32px 64px rgba(0,0,0,.65),0 0 0 1px rgba(255,255,255,.04);
}
.phone.main{width:218px;transform:translateY(-18px);border-color:rgba(10,132,255,.3)}
.phone.side{opacity:.55;transform:scale(.93)}
.notch{width:72px;height:22px;background:#04080F;border-radius:0 0 12px 12px;margin:0 auto;position:relative;z-index:2}
.screen{background:#06090F;padding-bottom:14px}

/* Screen: menu */
.app-bar{
  padding:12px 13px 10px;
  background:linear-gradient(160deg,#0b1928,#07111f);
  border-bottom:1px solid rgba(255,255,255,.06);
}
.app-rest{font-size:.58rem;font-weight:600;color:var(--cyan);letter-spacing:.05em;margin-bottom:2px}
.app-tisch{font-size:.9rem;font-weight:900;letter-spacing:-.02em}
.app-tisch span{color:var(--cyan)}
.mtabs{display:flex;background:rgba(13,21,32,.8);border-bottom:1px solid rgba(255,255,255,.05)}
.mtab{flex:1;text-align:center;padding:7px 0;font-size:.52rem;font-weight:700;color:rgba(255,255,255,.3);letter-spacing:.04em;border-bottom:2px solid transparent}
.mtab.a{color:var(--cyan);border-bottom-color:var(--cyan)}
.cat-row{padding:7px 12px 3px;font-size:.52rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.25)}
.mitem{display:flex;align-items:center;gap:7px;padding:7px 12px;border-bottom:1px solid rgba(255,255,255,.04)}
.mitem.hi{background:rgba(10,132,255,.05)}
.mitem-ico{width:34px;height:34px;border-radius:8px;background:#111b2a;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:1rem}
.mitem-info{flex:1;min-width:0}
.mitem-name{font-size:.62rem;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mitem-desc{font-size:.5rem;color:var(--text);margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mitem-price{font-size:.62rem;font-weight:800;color:var(--cyan);white-space:nowrap}
.mitem-add{width:20px;height:20px;border-radius:6px;background:linear-gradient(135deg,var(--blue),var(--cyan));display:flex;align-items:center;justify-content:center;font-size:.8rem;font-weight:900;color:#fff;flex-shrink:0}
.qty-ctrl{display:flex;align-items:center;gap:4px}
.qc{width:16px;height:16px;border-radius:5px;background:rgba(10,132,255,.15);color:var(--cyan);font-size:.7rem;font-weight:900;display:flex;align-items:center;justify-content:center}
.qn{font-size:.6rem;font-weight:900;width:10px;text-align:center}
.cart-strip{
  margin:7px 12px 0;
  background:linear-gradient(135deg,var(--blue),var(--cyan));
  border-radius:9px;padding:8px 12px;
  display:flex;align-items:center;justify-content:space-between;
}
.cs-l{font-size:.55rem;font-weight:700;opacity:.85}
.cs-v{font-size:.65rem;font-weight:900}
.cs-a{font-size:.55rem;font-weight:700;opacity:.9}

/* Screen: pay */
.pay-s{padding:12px 13px}
.pay-ht{font-size:.55rem;color:var(--text);margin-bottom:2px}
.pay-amt{font-size:1.6rem;font-weight:900;letter-spacing:-.05em;margin-bottom:10px}
.pay-amt sup{font-size:.8rem;vertical-align:top;margin-top:4px}
.pay-items{margin-bottom:8px}
.pi{display:flex;justify-content:space-between;font-size:.54rem;padding:3px 0;border-bottom:1px solid rgba(255,255,255,.04)}
.pi-l{color:var(--text)}
.pm-t{font-size:.5rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:5px}
.pm-row{display:flex;gap:5px;margin-bottom:8px}
.pmb{flex:1;padding:6px 3px;border-radius:7px;border:1.5px solid rgba(255,255,255,.08);background:rgba(255,255,255,.03);text-align:center;font-size:.52rem;font-weight:700;color:var(--text);display:flex;flex-direction:column;align-items:center;gap:2px}
.pmb.sel{border-color:var(--blue);background:rgba(10,132,255,.12);color:#fff}
.pmb-ico{font-size:.85rem}
.tip-row{display:flex;gap:4px;margin-bottom:8px}
.tip-b{flex:1;padding:5px 2px;border-radius:7px;border:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.02);text-align:center;font-size:.56rem;font-weight:700;color:var(--text)}
.tip-b.sel{border-color:var(--cyan);color:var(--cyan);background:rgba(50,214,255,.08)}
.pay-btn-m{width:100%;padding:10px;border-radius:10px;background:linear-gradient(135deg,var(--blue),var(--cyan));color:#fff;font-weight:900;font-size:.65rem;border:none;cursor:pointer;font-family:inherit}

/* Screen: KDS */
.kds-bar{
  padding:10px 13px;background:linear-gradient(160deg,#0b1928,#07111f);
  border-bottom:1px solid rgba(255,255,255,.06);
  display:flex;align-items:center;justify-content:space-between;
}
.kds-t{font-size:.6rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--cyan)}
.kds-live{display:flex;align-items:center;gap:4px;font-size:.5rem;color:rgba(255,255,255,.35)}
.kds-dot{width:5px;height:5px;border-radius:50%;background:var(--green);animation:pulse 2s infinite}
.kds-card{margin:8px 10px 0;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:10px;overflow:hidden}
.kds-card.new{border-color:rgba(10,132,255,.35)}
.kds-ch{display:flex;align-items:center;justify-content:space-between;padding:7px 10px;background:rgba(10,132,255,.06);border-bottom:1px solid rgba(255,255,255,.04)}
.kds-tn{font-size:.6rem;font-weight:900;color:var(--cyan)}
.kds-time{font-size:.5rem;color:rgba(255,255,255,.3)}
.kds-st{font-size:.48rem;font-weight:700;padding:2px 6px;border-radius:5px;background:rgba(10,132,255,.18);color:var(--blue)}
.kds-st.ok{background:rgba(74,222,128,.12);color:var(--green)}
.kds-items-l{padding:6px 10px}
.kds-li{display:flex;justify-content:space-between;font-size:.55rem;padding:2px 0;border-bottom:1px solid rgba(255,255,255,.04)}
.kds-li:last-child{border:none}
.kds-qty{font-weight:900;color:var(--cyan);background:rgba(50,214,255,.08);border-radius:3px;padding:0 4px;margin-right:5px}
.kds-action{margin:0 10px 8px;padding:7px;border-radius:7px;background:linear-gradient(135deg,var(--blue),var(--cyan));text-align:center;font-size:.55rem;font-weight:700;cursor:pointer}

/* ── STATS ── */
.stats{display:flex;border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
.stat{flex:1;text-align:center;padding:28px 12px;border-right:1px solid var(--border)}
.stat:last-child{border:none}
.stat-n{font-size:clamp(1.8rem,3.5vw,2.6rem);font-weight:900;letter-spacing:-.05em;background:linear-gradient(135deg,var(--blue),var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1}
.stat-l{font-size:.72rem;color:var(--text);margin-top:4px}
@media(max-width:600px){.stats{flex-wrap:wrap}.stat{min-width:50%;border-bottom:1px solid var(--border)}}

/* ── SECTION ── */
.section{padding:96px 6%}
.section-header{text-align:center;margin-bottom:60px}
.eyebrow{font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--cyan);margin-bottom:14px;display:block}
.section-h2{font-size:clamp(1.8rem,4vw,2.8rem);font-weight:900;letter-spacing:-.04em;line-height:1.1;margin-bottom:14px}
.section-p{font-size:.92rem;color:var(--text);max-width:500px;margin:0 auto;line-height:1.65}

/* ── FEATURES ── */
.feat-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px;max-width:1060px;margin:0 auto}
.feat-card{background:var(--card);border:1px solid var(--border);border-radius:18px;padding:26px;transition:border-color .25s,transform .25s}
.feat-card:hover{border-color:rgba(10,132,255,.3);transform:translateY(-3px)}
.feat-icon{width:46px;height:46px;border-radius:13px;background:rgba(10,132,255,.1);border:1px solid rgba(10,132,255,.18);display:flex;align-items:center;justify-content:center;font-size:1.3rem;margin-bottom:16px}
.feat-card h3{font-size:.95rem;font-weight:800;margin-bottom:7px;letter-spacing:-.01em}
.feat-card p{font-size:.78rem;color:var(--text);line-height:1.6}

/* ── HOW IT WORKS ── */
.how-section{
  padding:96px 6%;
  background:linear-gradient(180deg,var(--dark) 0%,#07101e 50%,var(--dark) 100%);
}
.steps{display:flex;gap:0;max-width:820px;margin:0 auto;position:relative}
.steps::before{
  content:'';position:absolute;top:30px;
  left:calc(16.7%);right:calc(16.7%);
  height:2px;background:linear-gradient(90deg,var(--blue),var(--cyan));opacity:.25;
}
.step{flex:1;text-align:center;padding:0 10px}
.step-circle{
  width:60px;height:60px;border-radius:50%;
  background:linear-gradient(135deg,var(--blue),var(--cyan));
  display:flex;align-items:center;justify-content:center;
  font-size:1.4rem;margin:0 auto 16px;
  box-shadow:0 6px 20px rgba(10,132,255,.3);
  position:relative;z-index:1;
}
.step h3{font-size:.9rem;font-weight:800;margin-bottom:7px}
.step p{font-size:.74rem;color:var(--text);line-height:1.55}
@media(max-width:600px){.steps{flex-direction:column;gap:28px}.steps::before{display:none}}

/* ── PRICING ── */
.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;max-width:900px;margin:0 auto 20px}
@media(max-width:720px){.pricing-grid{grid-template-columns:1fr;max-width:380px}}
.plan{background:var(--card);border:1.5px solid var(--border);border-radius:20px;padding:26px 22px;display:flex;flex-direction:column;position:relative;overflow:hidden;transition:transform .25s}
.plan:hover{transform:translateY(-3px)}
.plan.feat{border-color:rgba(10,132,255,.4);background:linear-gradient(160deg,#0c1e3a,#081530);box-shadow:0 0 36px rgba(10,132,255,.1)}
.plan.feat::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--blue),var(--cyan))}
.pop-tag{display:inline-block;background:linear-gradient(90deg,var(--blue),var(--cyan));font-size:.58rem;font-weight:800;letter-spacing:.06em;padding:3px 10px;border-radius:20px;margin-bottom:12px}
.plan-name{font-size:.62rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--cyan);margin-bottom:6px}
.plan-price{display:flex;align-items:flex-end;gap:3px;margin-bottom:3px;line-height:1}
.plan-eur{font-size:1rem;font-weight:700;color:var(--text);margin-bottom:5px}
.plan-num{font-size:2.8rem;font-weight:900;letter-spacing:-.06em}
.plan-per{font-size:.72rem;font-weight:500;color:var(--text);margin-bottom:8px}
.plan-desc{font-size:.72rem;color:var(--text);line-height:1.5;margin-bottom:18px;min-height:42px}
.plan-div{height:1px;background:rgba(255,255,255,.07);margin-bottom:16px}
.feat-list{list-style:none;display:flex;flex-direction:column;gap:7px;margin-bottom:auto;padding-bottom:22px}
.fi{display:flex;align-items:flex-start;gap:8px;font-size:.73rem;color:rgba(255,255,255,.7);line-height:1.4}
.fi.off{color:rgba(255,255,255,.25)}
.fi-ck{width:17px;height:17px;border-radius:5px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.58rem;margin-top:1px}
.fi-ck.y{background:rgba(10,132,255,.18);color:var(--cyan)}
.fi-ck.n{background:rgba(255,255,255,.05);color:rgba(255,255,255,.2)}
.plan-btn{margin-top:auto;width:100%;padding:12px;border-radius:12px;font-size:.82rem;font-weight:800;cursor:pointer;font-family:inherit;border:1.5px solid rgba(255,255,255,.12);background:transparent;color:#fff;transition:all .2s}
.plan-btn:hover{border-color:rgba(255,255,255,.28);background:rgba(255,255,255,.05)}
.plan.feat .plan-btn{background:linear-gradient(135deg,var(--blue),var(--cyan));border-color:transparent;box-shadow:0 5px 18px rgba(10,132,255,.3)}

/* ── TABLET ADD-ON ── */
.addon{
  max-width:900px;margin:0 auto 60px;
  background:linear-gradient(135deg,rgba(10,132,255,.07),rgba(50,214,255,.04));
  border:1.5px solid rgba(10,132,255,.2);border-radius:18px;
  padding:22px 26px;display:flex;gap:18px;align-items:center;flex-wrap:wrap;
}
.addon-ico{width:52px;height:52px;border-radius:14px;background:rgba(10,132,255,.12);border:1px solid rgba(10,132,255,.2);display:flex;align-items:center;justify-content:center;font-size:1.5rem;flex-shrink:0}
.addon-info{flex:1;min-width:200px}
.addon-tag{font-size:.58rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--cyan);margin-bottom:4px}
.addon-title{font-size:.95rem;font-weight:800;margin-bottom:3px}
.addon-desc{font-size:.72rem;color:var(--text);line-height:1.55}
.addon-chips{display:flex;gap:5px;flex-wrap:wrap;margin-top:8px}
.chip{font-size:.58rem;font-weight:600;padding:3px 8px;border-radius:20px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);color:rgba(255,255,255,.5)}
.chip.g{background:rgba(74,222,128,.08);border-color:rgba(74,222,128,.18);color:var(--green)}
.addon-price-box{text-align:center;flex-shrink:0}
.addon-p{font-size:1.8rem;font-weight:900;letter-spacing:-.04em;background:linear-gradient(135deg,var(--blue),var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1}
.addon-ps{font-size:.64rem;color:var(--text);margin-top:2px}
.addon-btn{margin-top:10px;padding:8px 18px;border-radius:9px;background:linear-gradient(135deg,var(--blue),var(--cyan));color:#fff;font-weight:800;font-size:.72rem;border:none;cursor:pointer;font-family:inherit;white-space:nowrap}

/* ── TRUST ── */
.trust{display:flex;border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
.trust-i{flex:1;display:flex;align-items:center;justify-content:center;gap:8px;padding:18px 12px;border-right:1px solid var(--border)}
.trust-i:last-child{border:none}
.trust-ico{font-size:1.1rem}
.trust-txt strong{font-size:.72rem;display:block;color:#fff}
.trust-txt span{font-size:.64rem;color:var(--text)}
@media(max-width:600px){.trust{flex-wrap:wrap}.trust-i{min-width:50%}}

/* ── CTA ── */
.cta-section{
  padding:100px 6%;text-align:center;
  background:linear-gradient(135deg,rgba(10,132,255,.07),rgba(50,214,255,.04));
  border-top:1px solid rgba(10,132,255,.12);
}
.cta-section h2{font-size:clamp(1.8rem,4.5vw,3rem);font-weight:900;letter-spacing:-.04em;margin-bottom:14px;line-height:1.05}
.cta-section p{font-size:.92rem;color:var(--text);margin-bottom:32px;max-width:440px;margin-left:auto;margin-right:auto;line-height:1.65}

/* ── FOOTER ── */
footer{
  padding:36px 6%;display:flex;align-items:center;
  justify-content:space-between;border-top:1px solid var(--border);flex-wrap:wrap;gap:12px;
}
.footer-brand{font-size:1.1rem;font-weight:900;letter-spacing:-.02em}
footer p{font-size:.72rem;color:rgba(255,255,255,.28)}
.footer-links{display:flex;gap:20px}
.footer-links a{font-size:.72rem;color:var(--text);text-decoration:none}
.footer-links a:hover{color:#fff}
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <div class="nav-logo">
    <svg width="34" height="34" viewBox="0 0 72 72" fill="none"><rect width="72" height="72" rx="18" fill="#0D1520"/><defs><linearGradient id="lg0" x1="0" y1="0" x2="72" y2="72" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#0A84FF"/><stop offset="100%" stop-color="#32D6FF"/></linearGradient></defs><rect x="10" y="28" width="52" height="10" rx="5" fill="url(#lg0)" opacity=".9"/><rect x="17" y="38" width="7" height="18" rx="3.5" fill="url(#lg0)" opacity=".55"/><rect x="48" y="38" width="7" height="18" rx="3.5" fill="url(#lg0)" opacity=".55"/><circle cx="36" cy="22" r="5" stroke="url(#lg0)" stroke-width="2"/><circle cx="36" cy="22" r="2.5" fill="white" opacity=".9"/></svg>
    <span class="nav-brand">trytaply<span class="grad">.</span></span>
  </div>
  <div class="nav-links">
    <a href="#features">Features</a>
    <a href="#how">So geht's</a>
    <a href="#pricing">Preise</a>
  </div>
  <button class="nav-cta">Kostenlos testen →</button>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-glow"></div>
  <div class="hero-glow2"></div>
  <div class="hero-grid"></div>

  <div class="hero-badge"><span class="pulse"></span>Neu · Linz, Österreich · 2025</div>

  <h1>
    Das smarte Bestellsystem<br>
    <span class="grad">für dein Restaurant.</span>
  </h1>
  <p class="hero-sub">
    Gäste scannen. Gäste bestellen. Gäste zahlen – direkt am Tisch.
    Kein Kellner für die Bestellung nötig. Mehr Umsatz, weniger Stress.
  </p>
  <div class="hero-btns">
    <button class="btn-primary">30 Tage gratis testen →</button>
    <button class="btn-ghost">Demo ansehen</button>
  </div>

  <!-- PHONES -->
  <div class="phones">

    <!-- LEFT: Menu -->
    <div class="phone side">
      <div class="notch"></div>
      <div class="screen">
        <div class="app-bar">
          <div class="app-rest">Rizzma Linz</div>
          <div class="app-tisch">Tisch <span>4</span></div>
        </div>
        <div class="mtabs">
          <div class="mtab a">SPEISEN</div>
          <div class="mtab">GETRÄNKE</div>
          <div class="mtab">EXTRAS</div>
        </div>
        <div class="cat-row">Burger & Wraps</div>
        <div class="mitem hi">
          <div class="mitem-ico">🍔</div>
          <div class="mitem-info">
            <div class="mitem-name">Farmhouse</div>
            <div class="mitem-desc">Beef, Cheddar, Bacon, BBQ</div>
          </div>
          <div class="mitem-price">€ 13,90</div>
          <div class="qty-ctrl"><div class="qc">−</div><div class="qn">2</div><div class="qc">+</div></div>
        </div>
        <div class="mitem">
          <div class="mitem-ico">🍟</div>
          <div class="mitem-info">
            <div class="mitem-name">Beef Fries</div>
            <div class="mitem-desc">Crispy Fries, Beef Sauce</div>
          </div>
          <div class="mitem-price">€ 6,50</div>
          <div class="mitem-add">+</div>
        </div>
        <div class="cat-row">Getränke</div>
        <div class="mitem">
          <div class="mitem-ico">🥤</div>
          <div class="mitem-info">
            <div class="mitem-name">Coca-Cola</div>
            <div class="mitem-desc">0,4l, eisgekühlt</div>
          </div>
          <div class="mitem-price">€ 3,50</div>
          <div class="mitem-add">+</div>
        </div>
        <div class="cart-strip">
          <div><div class="cs-l">2 Artikel</div><div class="cs-v">€ 27,80</div></div>
          <div class="cs-a">Warenkorb →</div>
        </div>
      </div>
    </div>

    <!-- CENTER: Payment -->
    <div class="phone main">
      <div class="notch"></div>
      <div class="screen">
        <div class="app-bar">
          <div class="app-rest">trytaply · Bezahlen</div>
          <div class="app-tisch">Tisch <span>4</span> · Rizzma</div>
        </div>
        <div class="pay-s">
          <div class="pay-ht">Gesamtbetrag</div>
          <div class="pay-amt"><sup>€</sup>41,30</div>
          <div class="pay-items">
            <div class="pi"><span class="pi-l">2× Farmhouse</span><span>€ 27,80</span></div>
            <div class="pi"><span class="pi-l">1× Beef Fries</span><span>€ 6,50</span></div>
            <div class="pi"><span class="pi-l">2× Coca-Cola</span><span>€ 7,00</span></div>
          </div>
          <div class="pm-t">Zahlungsart</div>
          <div class="pm-row">
            <div class="pmb sel"><div class="pmb-ico">💳</div><span>Karte</span></div>
            <div class="pmb"><div class="pmb-ico"></div><span>Apple Pay</span></div>
            <div class="pmb"><div class="pmb-ico">G</div><span>Google</span></div>
          </div>
          <div class="pm-t">Trinkgeld</div>
          <div class="tip-row">
            <div class="tip-b">0%</div>
            <div class="tip-b">5%</div>
            <div class="tip-b sel">10%</div>
            <div class="tip-b">15%</div>
          </div>
          <button class="pay-btn-m">€ 45,43 bezahlen ✓</button>
        </div>
      </div>
    </div>

    <!-- RIGHT: KDS -->
    <div class="phone side">
      <div class="notch"></div>
      <div class="screen">
        <div class="kds-bar">
          <div class="kds-t">Küche · Rizzma</div>
          <div class="kds-live"><div class="kds-dot"></div>Live</div>
        </div>
        <div class="kds-card new">
          <div class="kds-ch">
            <div>
              <div class="kds-tn">Tisch 4</div>
              <div class="kds-time">Gerade eingegangen</div>
            </div>
            <span class="kds-st">NEU</span>
          </div>
          <div class="kds-items-l">
            <div class="kds-li"><span><span class="kds-qty">2×</span>Farmhouse</span><span style="font-size:.48rem;color:var(--text)">€ 27,80</span></div>
            <div class="kds-li"><span><span class="kds-qty">1×</span>Beef Fries</span><span style="font-size:.48rem;color:var(--text)">€ 6,50</span></div>
            <div class="kds-li"><span><span class="kds-qty">2×</span>Coca-Cola</span><span style="font-size:.48rem;color:var(--text)">€ 7,00</span></div>
          </div>
          <div class="kds-action">In Zubereitung →</div>
        </div>
        <div class="kds-card" style="margin-top:8px">
          <div class="kds-ch">
            <div>
              <div class="kds-tn">Tisch 7</div>
              <div class="kds-time">vor 8 Min</div>
            </div>
            <span class="kds-st ok">FERTIG</span>
          </div>
          <div class="kds-items-l">
            <div class="kds-li"><span><span class="kds-qty" style="color:var(--green);background:rgba(74,222,128,.08)">3×</span>Farmhouse</span></div>
            <div class="kds-li"><span><span class="kds-qty" style="color:var(--green);background:rgba(74,222,128,.08)">2×</span>Beef Fries</span></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- STATS -->
<div class="stats">
  <div class="stat"><div class="stat-n">+22%</div><div class="stat-l">mehr Umsatz pro Tisch</div></div>
  <div class="stat"><div class="stat-n">3 Min</div><div class="stat-l">schnellere Bestellung</div></div>
  <div class="stat"><div class="stat-n">0 €</div><div class="stat-l">Einrichtungsgebühr</div></div>
  <div class="stat"><div class="stat-n">5 Min</div><div class="stat-l">Setup-Zeit</div></div>
</div>

<!-- FEATURES -->
<section class="section" id="features">
  <div class="section-header">
    <span class="eyebrow">Features</span>
    <h2 class="section-h2">Alles was dein Restaurant braucht</h2>
    <p class="section-p">Entwickelt für österreichische Gastronomen – einfach, günstig, RKSV-konform.</p>
  </div>
  <div class="feat-grid">
    <div class="feat-card"><div class="feat-icon">📱</div><h3>QR-Code Bestellung</h3><p>Gäste scannen – Browser öffnet sich sofort. Keine App nötig, funktioniert auf jedem Smartphone.</p></div>
    <div class="feat-card"><div class="feat-icon">💳</div><h3>Zahlung am Tisch</h3><p>Karte, Apple Pay, Google Pay. Rechnung teilen mit einem Klick. Trinkgeld digital wählbar.</p></div>
    <div class="feat-card"><div class="feat-icon">👨‍🍳</div><h3>Echtzeit Küchendisplay</h3><p>Neue Bestellungen erscheinen sofort am Küchen-Tablet. Kein Ausdrucken, keine Missverständnisse.</p></div>
    <div class="feat-card"><div class="feat-icon">📊</div><h3>Analytics Dashboard</h3><p>Sieh welche Gerichte wann am meisten bestellt werden. Datenbasierte Entscheidungen für dein Menü.</p></div>
    <div class="feat-card"><div class="feat-icon">🌍</div><h3>Mehrsprachige Karte</h3><p>DE, EN, TR – perfekt für Tourismus-Hotspots in ganz Österreich.</p></div>
    <div class="feat-card"><div class="feat-icon">🔒</div><h3>RKSV-konform</h3><p>Vollständig nach österreichischer Registrierkassenpflicht. Kein Stress mit dem Finanzamt.</p></div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section class="how-section" id="how">
  <div class="section-header">
    <span class="eyebrow">So einfach geht's</span>
    <h2 class="section-h2">Scan. Order. <span class="grad">Done.</span></h2>
    <p class="section-p">Drei Schritte – mehr braucht's nicht.</p>
  </div>
  <div class="steps">
    <div class="step">
      <div class="step-circle">📷</div>
      <h3>QR scannen</h3>
      <p>Gast scannt QR-Code am Tisch. Keine App, kein Login. Sofort im Browser.</p>
    </div>
    <div class="step">
      <div class="step-circle">🛒</div>
      <h3>Bestellen</h3>
      <p>Speisekarte durchblättern, Gerichte wählen, Sonderwünsche eingeben.</p>
    </div>
    <div class="step">
      <div class="step-circle">✅</div>
      <h3>Bezahlen</h3>
      <p>Direkt in der App zahlen. Rechnung teilen, Trinkgeld – alles digital.</p>
    </div>
  </div>
</section>

<!-- PRICING -->
<section class="section" id="pricing">
  <div class="section-header">
    <span class="eyebrow">Preise</span>
    <h2 class="section-h2">Einfach. Fair. <span class="grad">Kein Verstecktes.</span></h2>
    <p class="section-p">Monatlich kündbar. Keine Einrichtungsgebühr. 30 Tage kostenlos testen.</p>
  </div>

  <div class="pricing-grid">
    <!-- STARTER -->
    <div class="plan">
      <div class="plan-name">Starter</div>
      <div class="plan-price"><span class="plan-eur">€</span><span class="plan-num">49</span></div>
      <div class="plan-per">/Monat · monatlich kündbar</div>
      <p class="plan-desc">Für kleine Cafes und Bistros. Alles für den Start.</p>
      <div class="plan-div"></div>
      <ul class="feat-list">
        <li class="fi"><span class="fi-ck y">✓</span>Bis 20 Tische</li>
        <li class="fi"><span class="fi-ck y">✓</span>QR-Code Bestellung</li>
        <li class="fi"><span class="fi-ck y">✓</span>Karte, Apple & Google Pay</li>
        <li class="fi"><span class="fi-ck y">✓</span>Küchendisplay (KDS)</li>
        <li class="fi"><span class="fi-ck y">✓</span>Menü-Editor & Bilder</li>
        <li class="fi"><span class="fi-ck y">✓</span>RKSV-konform</li>
        <li class="fi off"><span class="fi-ck n">–</span>Analytics</li>
        <li class="fi off"><span class="fi-ck n">–</span>Upselling</li>
      </ul>
      <button class="plan-btn">30 Tage gratis →</button>
    </div>

    <!-- PROFESSIONAL -->
    <div class="plan feat">
      <div class="pop-tag">⭐ Beliebtestes Paket</div>
      <div class="plan-name">Professional</div>
      <div class="plan-price"><span class="plan-eur">€</span><span class="plan-num">79</span></div>
      <div class="plan-per">/Monat · monatlich kündbar</div>
      <p class="plan-desc">Der Standard für Restaurants. Mehr Umsatz durch Upselling.</p>
      <div class="plan-div"></div>
      <ul class="feat-list">
        <li class="fi"><span class="fi-ck y">✓</span>Bis 60 Tische</li>
        <li class="fi"><span class="fi-ck y">✓</span>Alles aus Starter</li>
        <li class="fi"><span class="fi-ck y">✓</span>Analytics Dashboard</li>
        <li class="fi"><span class="fi-ck y">✓</span>Upselling-Funktion</li>
        <li class="fi"><span class="fi-ck y">✓</span>Split-Bill</li>
        <li class="fi"><span class="fi-ck y">✓</span>Mehrsprachige Karte</li>
        <li class="fi"><span class="fi-ck y">✓</span>Allergen-Filter</li>
        <li class="fi"><span class="fi-ck y">✓</span>Loyalty-Stempelkarte</li>
      </ul>
      <button class="plan-btn">30 Tage gratis →</button>
    </div>

    <!-- ENTERPRISE -->
    <div class="plan">
      <div class="plan-name">Enterprise</div>
      <div class="plan-price"><span class="plan-eur">€</span><span class="plan-num">119</span></div>
      <div class="plan-per">/Monat · monatlich kündbar</div>
      <p class="plan-desc">Für Betriebe mit mehreren Standorten und hohem Volumen.</p>
      <div class="plan-div"></div>
      <ul class="feat-list">
        <li class="fi"><span class="fi-ck y">✓</span>Unbegrenzte Tische</li>
        <li class="fi"><span class="fi-ck y">✓</span>Alles aus Professional</li>
        <li class="fi"><span class="fi-ck y">✓</span>Multi-Location</li>
        <li class="fi"><span class="fi-ck y">✓</span>API-Zugang</li>
        <li class="fi"><span class="fi-ck y">✓</span>Kassensystem-Integration</li>
        <li class="fi"><span class="fi-ck y">✓</span>Prioritäts-Support</li>
        <li class="fi"><span class="fi-ck y">✓</span>SLA Garantie</li>
        <li class="fi"><span class="fi-ck y">✓</span>Onboarding vor Ort</li>
      </ul>
      <button class="plan-btn">Kontakt aufnehmen →</button>
    </div>
  </div>

  <!-- TABLET ADD-ON -->
  <div class="addon">
    <div class="addon-ico">📟</div>
    <div class="addon-info">
      <div class="addon-tag">Optional · Add-on · zu jedem Paket buchbar</div>
      <div class="addon-title">KDS Tablet – fertig konfiguriert & geliefert</div>
      <div class="addon-desc">Wir schicken ein vorbereitetes Tablet per Post. Auspacken, WLAN eingeben, fertig. Das Tablet bleibt unser Eigentum und wird bei Kündigung zurückgeschickt.</div>
      <div class="addon-chips">
        <span class="chip g">✓ Vorkonfiguriert</span>
        <span class="chip g">✓ Per Post geliefert</span>
        <span class="chip">6 Monate Mindestlaufzeit</span>
        <span class="chip">Ersatz bei Defekt</span>
        <span class="chip">Rückgabe bei Kündigung</span>
      </div>
    </div>
    <div class="addon-price-box">
      <div class="addon-p">+10€</div>
      <div class="addon-ps">/Monat zusätzlich<br>zu deinem Abo</div>
      <button class="addon-btn">Tablet dazu buchen →</button>
    </div>
  </div>

  <!-- TRUST -->
  <div class="trust" style="max-width:900px;margin:0 auto;border-radius:16px;overflow:hidden;border:1px solid var(--border)">
    <div class="trust-i"><span class="trust-ico">🔒</span><div class="trust-txt"><strong>RKSV-konform</strong><span>Fiskaltrust AT</span></div></div>
    <div class="trust-i"><span class="trust-ico">🇦🇹</span><div class="trust-txt"><strong>Made in Linz</strong><span>Support auf Deutsch</span></div></div>
    <div class="trust-i"><span class="trust-ico">📞</span><div class="trust-txt"><strong>Persönlicher Support</strong><span>Direkte Handynummer</span></div></div>
    <div class="trust-i"><span class="trust-ico">↺</span><div class="trust-txt"><strong>Jederzeit kündbar</strong><span>Kein Risiko</span></div></div>
  </div>
</section>

<!-- CTA -->
<div class="cta-section">
  <h2>Bereit für smarte<br><span class="grad">Gastronomie?</span></h2>
  <p>30 Tage kostenlos. Keine Kreditkarte. Setup in 5 Minuten. Persönlicher Support aus Linz.</p>
  <button class="btn-primary" style="font-size:1rem;padding:16px 40px">Jetzt kostenlos starten →</button>
</div>

<!-- FOOTER -->
<footer>
  <div class="footer-brand">trytaply<span class="grad">.</span></div>
  <p>© 2025 trytaply · Linz, Österreich · Scan. Order. Done.</p>
  <div class="footer-links">
    <a href="#">Datenschutz</a>
    <a href="#">Impressum</a>
    <a href="#">AGB</a>
    <a href="#">Kontakt</a>
  </div>
</footer>

</body>
</html>
