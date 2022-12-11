import { useState } from 'react';
import './App.css';

function App() {
  const [amountInput, setAmountInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')
  const [total, setTotal] = useState(0)

  const amountInputHandler = (e) => {
    if(!isNaN(Number(e.target.value))) {
      setAmountInput(Number(e.target.value))
    }
  }

  const descriptionInputHandler = (e) => {
    setDescriptionInput(e.target.value)
  }

  const increment = () => {
    const amountIncrement = amountInput
    const newTotal = total + amountIncrement
    setTotal(newTotal)
    setAmountInput('')
  }

  const decrement = () => {
    const amountDecrement = amountInput
    const newTotal = total - amountDecrement
    setTotal(newTotal)
    setAmountInput('')
  }

  return (
    <div className="App">
      <h1>Budget Tracker</h1>
      <div className='container'>
        <input 
          placeholder='Add amount'
          onChange={amountInputHandler}
          value={amountInput}
        />
        <input 
          placeholder='Add Description'
          onChange={descriptionInputHandler}
          value={descriptionInput}
        />
        <div>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
      </div>
      <h2>${total}</h2>
    </div>
  );
}

export default App;
