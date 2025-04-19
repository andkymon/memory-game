import './App.css'
import { useState } from 'react'

function App() {
  const [catIDs, setCatIDs] = useState([
      "pers",
      "siam",
      "beng",
      "sphy",
      "mcoo",
      "rblu",
      "ragd",
      "sfol",
      "buri",
      "abys",
      "bsho",
      "orie",
    ]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const onCardClick = () => {
    setScore(score + 1);
    if (score + 1 > bestScore) setBestScore(bestScore + 1);
  };

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <main>
        {catIDs.map(entry => <Card key={entry} id={entry} onClick={onCardClick} />)}
      </main>
    </>
  );
}

function Header({ score, bestScore }) {
  return (
    <header>
      <h1>Memory Game: Cat Edition</h1>
        <div className='instructions'>One click per kitty, repeat and you’re beat! 🐱</div>
        <div className='score-wrapper'>
          <h2>Score: {score}</h2>
          <h2>Best Score: {bestScore}</h2>
        </div>
    </header>
  )
}

function Card({ id, onClick }) {
  return (
    <button className='card' onClick={onClick}>
      <div className='img'></div>
      <h3>{id}</h3>
    </button>
  )
}

export default App
