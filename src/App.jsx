import './App.css'
import { useState } from 'react'

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const onCardClick = () => {
    setScore(score + 1);
    if (score + 1 > bestScore) setBestScore(bestScore + 1);
  }

  // Just a temporary function to check if best score works as intended
  const onCardClick2 = () => {
    setScore(0);
  }

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <main>
        <Card onClick={onCardClick} />
        <Card onClick={onCardClick2} />
        <Card onClick={onCardClick} />
      </main>
    </>
  )
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

function Card({ onClick }) {
  return (
    <button className='card' onClick={onClick}>
      <div className='img'></div>
      <h3>Cat Name</h3>
    </button>
  )
}

export default App
