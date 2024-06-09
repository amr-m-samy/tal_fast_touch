import { useState, useCallback, useEffect, useRef, useContext } from "react";
import Answer from "./Answer";
import QuestionTimer from "./QuestionTimer";
import { getRandomNumberInRange, shuffleArray } from "../../Helper/helper.js"
import { GameContext } from "../../store/game-context.jsx";

export default function Question({ question, speed }) {
  const [storeAnswers, setStoreAnswers] = useState([])
  const joinAnswer = useRef([])
  const { setUserAnswers } = useContext(GameContext)
  function selectedAnswerHandler(answerValue) {

    if (question.length === 2) {
      joinAnswer.current = [...joinAnswer.current, answerValue]
      if (joinAnswer.current.length !== 2) return

      answerValue = joinAnswer.current.join('')
      joinAnswer.current = []
    }
    let state
    if (answerValue === question) {
      state = 1
    }
    if (answerValue !== question) {
      state = 0
    }
    const userAnswer = { question: question, answer: answerValue, answerState: state }

    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, userAnswer]
    })
  }
  const onNextQuestionTimeoutHandler = useCallback(

    function onNextQuestionTimeoutHandler() {
      const userAnswer = { questionId: question, answer: null, answerState: null }
      joinAnswer.current = []

      setUserAnswers((prevUserAnswer) => {
        return [...prevUserAnswer, userAnswer]
      })
    }
    ,
    [],
  )

  function generateAnswers() {
    let answers = [];
    let newIndex;
    answers = Array.from({ length: 10 }, (_, index) => index.toString()) //gerenrate array [0,1,2 ....,9]
    if (question.length === 2) {
      if (question[0] === question[1]) {
        do {
          newIndex = getRandomNumberInRange(0, 9)
        }
        while (newIndex === answers[+question[0]])
        answers[newIndex] = question[0]
      }
    }
    return shuffleArray(answers)
  }

  useEffect(() => {
    const answersWithPossition = []
    const greneratedAnswers = generateAnswers();
    const alignOptions = ['center', 'start', 'end']
    greneratedAnswers.forEach(answer => {
      answersWithPossition.push({
        answer: answer,
        justify: alignOptions[getRandomNumberInRange(0, 2)],
        align: alignOptions[getRandomNumberInRange(0, 2)]
      })
    });
    setStoreAnswers(answersWithPossition)
  }, [question])

  return (
    <>
      <QuestionTimer
        key={Math.random()}
        onNextQuestion={onNextQuestionTimeoutHandler}
        speed={speed}
      />
      <div id="question">
        < h1 className="question-area ">{question}</h1>
        <Answer answers={storeAnswers}
          key={Math.random()}
          onSelectedAnswer={selectedAnswerHandler}
        />
      </div >
    </>
  )
} 
