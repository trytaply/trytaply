import { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { jsPDF } from 'jspdf';
import API from '../api';

export default function Tables() {
  const [tables, setTables] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const [count, setCount] = useState(10);
  const APP_URL = import.meta.env.VITE_APP_URL || 'https://trytaply.at';

  useEffect(function() { loadData(); }, []);

  async function loadData() {
    const restRes = await API.get('/restaurants/me');
    setRestaurant(restRes.data);
    const tabRes = await API.get('/tables');
    setTables(tabRes.data);
  }

  async function generateTables() {
    await API.post('/tables/generate', { count: parseInt(count) });
    loadData();
  }

  function getQRUrl(tableNumber) {
    return APP_URL + '/r/' + restaurant.SLUG + '/' + tableNumber;
  }

  async function downloadQR(tableNumber) {
    const dataUrl = await QRCode.toDataURL(getQRUrl(tableNumber), {
      width: 400, color: { dark: '#06090F', light: '#FFFFFF' }
    });
    const link = document.createElement('a');
    link.download = 'tisch-' + tableNumber + '.png';
    link.href = dataUrl;
    link.click();
  }

  async function downloadAllPDF() {
    const pdf = new jsPDF({ format: 'a4' });
    const margin = 15, size = 55;
    for (let i = 0; i < tables.length; i++) {
      const t = tables[i];
      const qr = await QRCode.toDataURL(getQRUrl(t.TABLE_NUMBER), { width: 300 });
      if (i > 0 && i % 9 === 0) pdf.addPage();
      const col = i % 3, row = Math.floor(i / 3) % 3;
      const x = margin + col * (size + margin);
      const y = margin + row * (size + 20);
      pdf.addImage(qr, 'PNG', x, y, size, size);
      pdf.setFontSize(10);
pdf.text('Tisch ' + t.TABLE_NUMBER, x + size/2, y + size + 7, { align:'center' });
    }
    pdf.save('trytaply-qr-codes.pdf');
  }

  return (
    <div style={{padding:24,color:'#fff',background:'#06090F',minHeight:'100vh'}}>
      <h2 style={{marginBottom:20}}>Tische & QR-Codes</h2>

      <div style={{display:'flex',gap:10,marginBottom:20,alignItems:'center'}}>
        <input type='number' value={count} min={1} max={100}
          onChange={function(e){setCount(e.target.value);}}
          style={{width:80,padding:8,background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.1)',borderRadius:8,color:'#fff'}} />
        <button onClick={generateTables}
          style={{padding:'8px 16px',background:'linear-gradient(135deg,#0A84FF,#32D6FF)',border:'none',borderRadius:8,color:'#fff',fontWeight:700,cursor:'pointer'}}>
          Tische generieren
        </button>
        {tables.length > 0 && (
          <button onClick={downloadAllPDF}
            style={{padding:'8px 16px',background:'transparent',border:'1px solid rgba(255,255,255,.15)',borderRadius:8,color:'#fff',cursor:'pointer'}}>
            Alle als PDF
          </button>
        )}
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(130px,1fr))',gap:10}}>
        {tables.map(function(t) {
          return (
            <div key={t.ID} style={{textAlign:'center',padding:14,background:'#0D1520',borderRadius:12,border:'1px solid rgba(255,255,255,.07)'}}>
              <div style={{fontWeight:800,marginBottom:8}}>Tisch {t.TABLE_NUMBER}</div>
              <button onClick={function(){downloadQR(t.TABLE_NUMBER);}}
                style={{fontSize:11,padding:'5px 10px',background:'rgba(10,132,255,.15)',border:'1px solid rgba(10,132,255,.2)',borderRadius:6,color:'#32D6FF',cursor:'pointer'}}>
                ⬇ Download
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
