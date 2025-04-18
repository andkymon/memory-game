import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Card />
        <Card />
        <Card />
      </main>
    </>
  )
}

function Header() {
  return (
    <header>
      <h1>Memory Game: Cat Edition</h1>
        <div className='instructions'>One click per kitty, repeat and you’re beat! 🐱</div>
        <div className='score-wrapper'>
          <h2>Score:</h2>
          <h2>Best Score:</h2>
        </div>
    </header>
  )
}

function Card() {
  return (
    <button className='card'>
      <div className='img'></div>
      <h3>Cat Name</h3>
    </button>
  )
}

export default App
