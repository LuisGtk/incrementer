import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {
  // 
  const [count, setCount] = useState(0)
  return <>
  <header> 
    Count: {count}
    </header>
    <div class="flex"> 
    <button onClick={() => setCount(0)}>Reset</button>
    <button onClick={() => setCount(prevCount => prevCount - 1)}>
      Decrement
    </button>
    <button onClick={() => setCount(prevCount => prevCount + 1)}>
      Increment
    </button>
    </div>
  </>
  
}

export default App;