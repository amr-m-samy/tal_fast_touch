import { useContext } from "react";
import cupSummary from "../../assets/quiz-complete.png"
import { GameContext } from "../../store/game-context";
export default function Summary() {

  const { userAnswers } = useContext(GameContext)
  const skippedAnswers = userAnswers.filter((answer) => answer.answerState === null);
  const correctAnswers = userAnswers.filter(
    (answer) => answer.answerState === 1
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;


  return <div className="main-wrapper">

    <div id="summary">
      <img src={cupSummary} alt="Trophy Icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p><span className="number">{skippedAnswersShare}%</span>
          <span className="text">SKIPPED</span>
        </p>

        <p><span className="number">{correctAnswersShare}%</span>
          <span className="text">Answered Correctly</span>
        </p>

        <p><span className="number">{wrongAnswersShare}%</span>
          <span className="text">ANSWERED INCORRECTLY</span>
        </p>
      </div>
    </div>

  </div>
}
