import { useContext } from "react"
import Question from "./Question"
import Summary from "./Summary.jsx"
import { getRandomNumberInRange } from "../../Helper/helper.js"
import { GameContext } from "../../store/game-context.jsx"

export default function Quiz({ settings }) {

  const { userAnswers } = useContext(GameContext)

  const nextQuestion = userAnswers.length


  function questionSpeed() {
    if (settings.speed === 'easy') return 8;
    if (settings.speed === 'normal') return 6;
    if (settings.speed === 'hard') return 3;
  }

  function questionGenerator() {
    let question;
    do {
      if (settings.digit === "one") question = getRandomNumberInRange(0, 9).toString()
      if (settings.digit === "two") question = getRandomNumberInRange(10, 99).toString()
      if (settings.digit === "mixed") question = getRandomNumberInRange(0, 99).toString()
    }
    while ((userAnswers.length && userAnswers[userAnswers.length - 1].question === question)) // to prevent 2 same question in a row
    return question
  }
  if (nextQuestion === 10) return <Summary />
  return (

    <div className="main-wrapper">
      <div id="quiz">
        <Question question={questionGenerator()}
          speed={questionSpeed()}
        />
      </div>
    </div>)
}
