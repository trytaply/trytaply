import React, { useEffect, useState } from 'react';

const Menu = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Hier nutzen wir die Render-URL, die wir vorhin besprochen haben
    fetch('https://trytaply.onrender.com/api/menu')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error("Fehler beim Laden des Menüs:", err));
  }, []);

  return (
    <div>
      <h1>Unser Menü</h1>
      <ul>
        {items.map(item => (
          <li key={item.ID}>{item.NAME} - {item.PREIS}€</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu; // Das ist die Zeile, die Vite in deinem Screenshot vermisst hat!