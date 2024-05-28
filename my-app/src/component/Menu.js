import React from 'react';

const Menu = ({ items }) => (
  <div className="menu">
    {items.map(item => (
      <div key={item.id} className="menu-item">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <ul>
          {item.price.map((price, index) => (
            <li key={index}>Price: ${price} | Time: {item.time[index]} minutes</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Menu;