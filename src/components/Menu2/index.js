import React, { useState } from 'react';
import './style.css';
import { menuContent2 } from '../../content_option' ;

const Menu2 = () => {
  const [categories, setCategories] = useState(menuContent2);

  return (
    <div className="container">
      <h1>Menu des Plats</h1>
      {categories.map((categorie) => (
        <div key={categorie.id}>
          <h2>{categorie.nom}</h2>
          <ul>
            {categorie.plats.map((plat) => (
              <li key={plat.id}>
                <strong>{plat.nom}</strong> - {plat.prix}€
                <p>{plat.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu2;
