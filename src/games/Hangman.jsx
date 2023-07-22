import React, { useState, useEffect } from 'react';
import './Hangman.css';

const Hangman = () => {
  const words = ['REACT', 'JAVASCRIPT', 'NODE', 'HTML', 'CSS'];
  const maxAttempts = 6;

  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState(new Set());
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setWord(words[randomIndex]);
  }, []);

  const handleGuess = (letter) => {
    if (!guessedLetters.has(letter)) {
      setGuessedLetters(new Set([...guessedLetters, letter]));
      if (!word.includes(letter)) {
        setAttempts(attempts + 1);
      }
    }
  };

  const maskedWord = word
    .split('')
    .map((letter) => (guessedLetters.has(letter) ? letter : '_'))
    .join(' ');

  const isGameOver = attempts >= maxAttempts;
  const isGameWon = word.split('').every((letter) => guessedLetters.has(letter));

  return (
    <div>
      <h1>Hangman Game</h1>
      <div className="hangman-container">
        <div className="hangman-figure">
          {/* Add your hangman figure images here based on the number of attempts */}
          {/* For simplicity, I'm using a text representation */}
          {`Attempts Left: ${maxAttempts - attempts}`}
        </div>
        <div className="hangman-word">{maskedWord}</div>
        <div className="hangman-keyboard">
          {/* Create buttons for each letter of the alphabet */}
          {Array(26)
            .fill()
            .map((_, index) => {
              const letter = String.fromCharCode(65 + index);
              return (
                <button key={letter} onClick={() => handleGuess(letter)} disabled={guessedLetters.has(letter)}>
                  {letter}
                </button>
              );
            })}
        </div>
      </div>
      {isGameOver && <div>Game Over! The word was: {word}</div>}
      {isGameWon && <div>Congratulations! You've won!</div>}
    </div>
  );
};

export default Hangman;