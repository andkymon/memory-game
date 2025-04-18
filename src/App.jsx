import './App.css'
import { useState } from 'react'

function App() {
  const [score, setScore] = useState(0);

  const onCardClick = () => {
    setScore(score + 1);
  }

  return (
    <>
      <Header score={score} />
      <main>
        <Card onClick={onCardClick} />
        <Card onClick={onCardClick} />
        <Card onClick={onCardClick} />
      </main>
    </>
  )
}

function Header({ score }) {
  return (
    <header>
      <h1>Memory Game: Cat Edition</h1>
        <div className='instructions'>One click per kitty, repeat and you’re beat! 🐱</div>
        <div className='score-wrapper'>
          <h2>Score: {score.toString()}</h2>
          <h2>Best Score:</h2>
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
