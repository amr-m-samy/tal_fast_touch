import { useState } from "react"

export default function Answer({ answers, onSelectedAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer, id) => {
    setSelectedAnswer(id);
    onSelectedAnswer(answer);
  };
  return (
    <>
      {
        answers.map((item, id) => {
          return (
            < div className={`answer a${id + 1}`
            } style={{
              alignContent: `${item.align}`, justifySelf: `${item.justify}`
            }} key={id}>
              <button style={{
                display: `${selectedAnswer === id ? 'none' : 'inline-block'}`
              }}
                className={`answer-btn`}
                onClick={() => handleAnswerClick(item.answer, id)}>
                {item.answer}
              </button>
            </div >)
        })
      }
    </ >
  )
};

// animationName: `${answer2Digit.length > 0 ? '0' : 'fadeInOpacity'}`,
