import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    if (count === 20) return;
    setCount(count + 1);
  }

  const decreaseCount = () => {
    if (count === 0) return;
    setCount(count - 1);
  }

  return (
    <>
      <h1>Simple Counter</h1>
      <h2>Count is  :  {count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </>
  )
}

export default App
