import { useContext, useState } from "react";
import GameSettings from "./GameSettings";
import Quiz from "./Quiz";
import playIcon from "../../assets/BasicGUI/ButtonText_Small_Blue_Round.png"
import { GameContext } from "../../store/game-context";
import CountDown from "./CountDown";


export default function GamePlay() {
  const [startGame, setStartGame] = useState({})
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [countDownEnd, setCountDownEnd] = useState(null)
  const { setUserAnswers } = useContext(GameContext)
  function settingOptionsHandler(settings) {

    if (settings.speed !== "") setStartGame(settings)
  }
  function openSettingsModalHandler() {
    setUserAnswers([])
    setModalIsOpen(true)
  }
  function onCountDownEndHandler(count) {
    setCountDownEnd(count)
    console.log(count)
  }
  return (

    <main>
      {!Object.keys(startGame).length &&
        <div className={"start-btn-wrapper"}>
          <button className="btn start-icon" onClick={openSettingsModalHandler}>
          </button>
        </div>
      }

      <GameSettings
        onSettingOptions={settingOptionsHandler}
        onModalIsOpen={modalIsOpen}
        onModalIsClose={() => setModalIsOpen(false)}
        onSetModalIsOpen={setModalIsOpen}
      />


      {Object.keys(startGame).length !== 0 && countDownEnd !== 0 && <CountDown onCountDownEnd={onCountDownEndHandler} />}
      {countDownEnd === 0 && <Quiz settings={startGame} />}

    </main >
  )
}

// 
//
//
// {Object.keys(startGame).length !== 0 && setTimeout(() => { <Quiz settings={startGame} /> }, 3000)}
