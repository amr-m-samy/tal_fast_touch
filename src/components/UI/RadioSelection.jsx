import React, { useState } from 'react';
export default function RadioSelection({ options, onGetRadioValue }) {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    onGetRadioValue(event.target.value)
  };
  return (
    <div className="radio-group">
      {
        options.map((option) => {
          return (
            <label htmlFor={option} className="radio-label" key={option} >
              <span className='modal-text'>{option.toUpperCase()}</span>
              <span className={`radio-image ${selectedOption === option ? 'checked' : ''} option-image`}></span>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
                className="radio-input"
              />

            </label>

          )

        })
      }


    </div >
  )
}
