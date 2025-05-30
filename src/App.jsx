import "./App.css";
import { useState, useEffect } from "react";
import shuffle from "./utils/shuffle";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [catData, setCatData] = useState([]);
  const [clicked, setClicked] = useState(new Set());

  useEffect(() => {
    let isActive = true;
    const temp = [];

    const catIDs = [
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
    ];
    const url = `https://api.thecatapi.com/v1/images/search?breed_ids=`;
    const api_key =
      "live_eSPdZgaQ4sJiUjA4Mw7mhT1idVDPsV7lS67UPtJwp3Dko493j4QxyNfcRbxtuEQS";

    const fetches = catIDs.map((catID) =>
      fetch(url + catID, { headers: { "x-api-key": api_key } })
        .then((res) => res.json())
        .then((data) => {
          if (isActive)
            temp.push({
              id: data[0].breeds[0].id,
              name: data[0].breeds[0].name,
              img: data[0].url,
            });
        })
    );

    Promise.all(fetches).then(() => setCatData(temp));

    return () => {
      isActive = false;
    };
  }, []);

  const onCardClick = (name, e) => {
    if (clicked.has(name)) {
      setScore(0);
      setClicked(new Set());
    } else {
      setClicked(new Set(clicked.add(name)));
      setScore(score + 1);
      if (score + 1 > bestScore) setBestScore(bestScore + 1);
    }
    shuffle(catData);
    e.currentTarget.blur(); // removing button focus on click
  };

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <main>
        {catData.length > 1 ? (
          catData.map((data) => (
            <Card
              key={data.id}
              name={data.name}
              img={data.img}
              onClick={onCardClick}
            />
          ))
        ) : (
          <div className="loader"></div>
        )}
      </main>
      <footer>Background by <a href="https://www.freepik.com/free-vector/cute-playful-footprint-pattern-background-fauna-fun_45018544.htm#fromView=keyword&page=1&position=23&uuid=c61da0dc-33af-46e8-9256-e76b8e274894&query=Cat+Paw+Print">starline</a> on Freepik</footer>
    </>
  );
}

function Header({ score, bestScore }) {
  return (
    <header>
      <h1>Memory Game: Cat Edition</h1>
      <div className="instructions">
        One click per kitty, repeat and you’re beat! 🐱
      </div>
      <div className="score-wrapper">
        <h2>Score: {score}</h2>
        <h2>Best Score: {bestScore}</h2>
      </div>
    </header>
  );
}

function Card({ name, img, onClick }) {
  return (
    <button className="card" onClick={() => onClick(name)}>
      <img className="img" src={img} />
      <h3>{name}</h3>
    </button>
  );
}

export default App;
