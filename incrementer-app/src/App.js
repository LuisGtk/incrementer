import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0)
  return <> 
    Count: {count}
    <button onClick={() => setCount(0)}>Reset</button>
    <button onClick={() => setCount(prevCount => prevCount - 1)}>
      Decrement
    </button>
    <button onClick={() => setCount(prevCount => prevCount + 1)}>
      Increment
    </button>
    </>
}

export default App;
