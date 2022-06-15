import './App.css';
import React, { useState } from 'react';
// The useState hook lets us manage the internal state of a function component. It takes an initial value as an argument and returns an array with the current state and a function to update it.

const App = () => {
  // 
  const [count, setCount] = useState(0)

  return <>
  <h1> Incrementer App</h1>
    <header>
      {/* counter on page */}
      Count: {count}
    </header>
    <div class="flex">
      <button onClick={() => setCount(0)}>
        <p>Reset</p>
      </button>
      {/* below the code ecrements the count and increment it respectively by passing in 
    functions that take the previous count as the parameter and return the new count. */}
      <button onClick={() => setCount(prevCount => prevCount - 1)}>
        <p>Decrement</p>

      </button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        <p>Increment</p>
      </button>
    </div>
  </>

}

export default App;