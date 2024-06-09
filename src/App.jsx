
import HomePage from "./components/GamePlay/HomePage";
import GameContextProvider from "./store/game-context";

function App() {



  return (
    <GameContextProvider>
      <HomePage />
    </GameContextProvider>
  )
}

export default App;
