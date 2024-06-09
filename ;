import React, { useState, useEffect } from 'react';

function CountDown({ onCountDownEnd }) {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      onCountDownEnd(count)
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div className="countdown">
      {count > 0 && <div key={Math.random()} className="count">{count}</div>}
      {count === 0 && <div className="count">Go!</div>}
      {onCountDownEnd(count)}
    </div>
  );
};

export default CountDown;
