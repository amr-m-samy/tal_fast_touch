import { useContext, useState } from "react";
import { GameContext } from "../../store/game-context";
import GamePlay from "./GamePlay";

export default function HomePage() {
  const [key, setKey] = useState(0);
  const { userAnswers, setUserAnswers } = useContext(GameContext)
  function homeBtnHandler() {
    setUserAnswers([])
    setKey(prevKey => prevKey + 1)
  }
  return (
    <>
      <GamePlay key={key} />
      {userAnswers.length === 10 && <button className="home-btn btn " onClick={() => { homeBtnHandler() }}></button>}

    </>
  )
}
