import React, { useState } from 'react';

const App = () => {
  const [zero, setZero] = useState(0);

  return (
    <div>
      <h1>{zero}</h1>
      <button
        onClick={() => {
          setZero(zero + 1);
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          setZero(zero - 1);
        }}
      >
        decrease
      </button>
    </div>
  );
};

export default App;