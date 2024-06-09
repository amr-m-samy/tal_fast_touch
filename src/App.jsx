import { useState } from "react";
import GamePlay from "./components/GamePlay/GamePlay";
import Header from "./components/Header";
import GameContextProvider from "./store/game-context";

function App() {

  const [key, setKey] = useState(0);
  function homeBtnHandler() {
    setKey(prevKey => prevKey + 1)
  }

  return (
    <GameContextProvider>
      {//<Header />
      }
      <GamePlay key={key} />

      <button className="home-btn btn " onClick={() => { homeBtnHandler() }}></button>
    </GameContextProvider>
  )
}

export default App;
