import React, { useState } from 'react';
import './style.css';
import { menuContent } from '../../content_option' ;

const Menu = () => {
  const [categories, setCategories] = useState(menuContent);

  return (
    <div className="container">
      {categories.map((categorie) => (
        <div key={categorie.id}>
          <h2>{categorie.nom}</h2>
          <ul>
            {categorie.boissons.map((boisson) => (
              <li key={boisson.id}>
                {boisson.nom} - {boisson.prix}€
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;
