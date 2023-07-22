import React from 'react';

import Hangman from "./games/Hangman.jsx"
import TicTacToe from "./games/TTT.jsx"

import Navbar from "./components/navbar.jsx";

import "./style.scss"




const App = () => {
  return (
    <div>
      <Navbar />
     <h1>Game Title (Change with routing) </h1>
      <TicTacToe />
     
    </div>
  );
};

export default App;