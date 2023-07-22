import React, { useState } from 'react';


const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav>
      <ul>
        <li className={activeItem === 'Home' ? 'active' : ''} onClick={() => handleItemClick('Home')}>
          TicTacToe
        </li>
        <li className={activeItem === 'About' ? 'active' : ''} onClick={() => handleItemClick('About')}>
          Chess
        </li>
        <li className={activeItem === 'Contact' ? 'active' : ''} onClick={() => handleItemClick('Contact')}>
          Battle Ship
        </li>
        <li className={activeItem === 'Contact' ? 'active' : ''} onClick={() => handleItemClick('Contact')}>
          Hangman
        </li>
        <li className={activeItem === 'Contact' ? 'active' : ''} onClick={() => handleItemClick('Contact')}>
          Checkers
        </li>
        <li className={activeItem === 'Contact' ? 'active' : ''} onClick={() => handleItemClick('Contact')}>
          PacMan
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;