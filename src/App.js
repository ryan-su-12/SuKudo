import React from 'react';

import TicTacToe from "./games/TTT.jsx"

import Navbar from "./components/navbar.jsx";

import "./style.scss"




const App = () => {
  return (
    <div>
      <Navbar />
      <h1>Tic Tac Toe</h1>
      <TicTacToe />
      
    </div>
  );
};

export default App;