import { useState, useEffect, useContext } from "react";
import { GameContext } from "../../store/game-context";

export default function QuestionTimer({ onNextQuestion, speed }) {
  const TIMER = speed * 1000;
  const { userAnswers } = useContext(GameContext)
  const [remainingTime, setRemainingTime] = useState(TIMER)
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => {
        return prev - 10
      })
    }, 10)
    return () => {
      clearInterval(interval)
    }
  }, [])
  useEffect(() => {
    const timer = setTimeout(() => {
      onNextQuestion()
      setRemainingTime(TIMER)
    }, TIMER)
    return () => {
      clearTimeout(timer)
    }
  }, [userAnswers])
  return (
    <progress id="question-time"
      className=""
      max={TIMER}
      value={remainingTime}
    />
  )
}
