import React from 'react';
import './Menu.css';

const Menu = ({ items }) => (
  <div className="menu">
    {items.map(item => (
      <div key={item.id} className="menu-item">
        <div className="menu-item-image-container">
          <img src={item.image} alt={item.title} className="menu-item-image" />
        </div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="price-list">
          {item.price.map((price, index) => (
            <div key={index} className="price-row">
              {item.time && item.time[index] ? (
                <span className="price">{item.time[index]} Minutes&nbsp;&nbsp;—&nbsp;&nbsp;</span>
              ) : null}
              <span className="price">${price}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Menu;
