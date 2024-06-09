import { useContext, useState } from "react";
import GameSettings from "./GameSettings";
import Quiz from "./Quiz";
import playIcon from "../../assets/BasicGUI/ButtonText_Small_Blue_Round.png"
import { GameContext } from "../../store/game-context";


export default function GamePlay() {
  const [startGame, setStartGame] = useState({})
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { setUserAnswers } = useContext(GameContext)
  function settingOptionsHandler(settings) {

    if (settings.speed !== "") setStartGame(settings)
  }
  function openSettingsModalHandler() {

    setUserAnswers([])
    setModalIsOpen(true)
  }
  return (

    <main>
      {!Object.keys(startGame).length &&
        <div className={"start-btn-wrapper"}>
          <button className="btn start-icon" onClick={openSettingsModalHandler}>
            Start
          </button>
        </div>
      }

      <GameSettings
        onSettingOptions={settingOptionsHandler}
        onModalIsOpen={modalIsOpen}
        onModalIsClose={() => setModalIsOpen(false)}
        onSetModalIsOpen={setModalIsOpen}
      />

      {Object.keys(startGame).length !== 0 && <Quiz settings={startGame} on />}
    </main >
  )
}
