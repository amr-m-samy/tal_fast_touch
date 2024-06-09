import { createContext, useState } from "react";

export const GameContext = createContext()

export default function GameContextProvider({ children }) {

  const [userAnswers, setUserAnswers] = useState([])

  const ctx = {
    userAnswers,
    setUserAnswers
  }
  return (
    <GameContext.Provider value={ctx}>
      {children}
    </GameContext.Provider>
  )
} 
