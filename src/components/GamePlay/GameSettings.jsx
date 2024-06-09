import { useState } from "react";
import Modal from "../UI/Modal.jsx";
import RadioSelection from "../UI/RadioSelection.jsx";

const speedSettingOptions = ['easy', 'normal', 'hard']
const digitSettingOptions = ['one', 'two', 'mixed']
export default function GameSettings({ onSettingOptions, onModalIsOpen, onModalIsClose, onSetModalIsOpen }) {

  const [settings, setSettings] = useState({ digit: "one", speed: "easy" })
  function getRadioValueHandler(option) {
    if (option === "one" || option === "two" || option === "mixed") {
      setSettings((prevOption) => ({
        ...prevOption,
        digit: option
      }))
    }

    if (option === "easy" || option === "normal" || option === "hard") {
      setSettings((prevOption) => ({
        ...prevOption,
        speed: option
      }))
    }
  }
  function playBtnHandler() {
    onSettingOptions(settings)
    onSetModalIsOpen(false)
  }
  function closeBtnHandler(event) {
    onModalIsClose()
    if (event.key == "Escape") {
    }
  }
  return (

    <Modal open={onModalIsOpen} modalSize={2.25}>
      <button className="close-btn" onKeyDown={closeBtnHandler} onClick={closeBtnHandler}></button>
      <h1 className="modal_title">Settings</h1>
      <div className="modal-content">
        <h3 className="setting-option-title">Speed</h3>
        <RadioSelection options={speedSettingOptions} onGetRadioValue={getRadioValueHandler} />
        <h3 className="setting-option-title">Digits</h3>
        <RadioSelection options={digitSettingOptions} onGetRadioValue={getRadioValueHandler} />

        <div className="play-btn-wrapper">
          <button className="btn play-icon" onClick={playBtnHandler}>
            Play
          </button>
        </div>
      </div>
    </Modal>
  )
}
