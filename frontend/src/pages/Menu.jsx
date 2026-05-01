import React, { useEffect, useState } from 'react';

const Menu = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Hier rufen wir die Daten von deinem Render-Backend ab
    fetch('https://trytaply.onrender.com/api/menu')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error("Fehler beim Laden des Menüs:", err));
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Unser Menü</h1>
      
      {/* Wenn das Array leer ist, zeigen wir einen Platzhaltertext */}
      {items.length === 0 ? (
        <p>Momentan sind noch keine Gerichte in der Datenbank verfügbar.</p>
      ) : (
        <ul style={{ padding: 0 }}>
          {items.map(item => (
            <li 
              key={item.ID} 
              style={{ 
                marginBottom: '20px', 
                listStyle: 'none', 
                borderBottom: '1px solid #eee', 
                paddingBottom: '15px' 
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <strong style={{ fontSize: '1.2em' }}>{item.NAME}</strong>
                <strong>{item.PRICE} €</strong>
              </div>
              
              <div style={{ color: '#666', fontSize: '0.9em', marginBottom: '5px' }}>
                Restaurant: {item.RESTAURANT_NAME || 'Unbekannt'}
              </div>
              
              {item.DESCRIPTION && (
                <p style={{ margin: '5px 0', fontSize: '0.95em' }}>{item.DESCRIPTION}</p>
              )}
              
              {item.ALLERGENS && (
                <div style={{ fontSize: '0.8em', color: '#d9534f', marginTop: '5px' }}>
                  Allergene: {item.ALLERGENS}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;