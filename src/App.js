import { useState } from 'react';
import './App.css';

function App() {
  const [amountInput, setAmountInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')
  const [total, setTotal] = useState(0)

  const amountInputHandler = (e) => {
    setAmountInput(e.target.value)
  }

  const descriptionInputHandler = (e) => {
    setDescriptionInput(e.target.value)
  }

  const increment = () => {
    const amountIncrement = amountInput
    const newTotal = Number(total) + Number(amountIncrement)
    setTotal(newTotal)
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
          <button>-</button>
        </div>
      </div>
      <h2>{total}</h2>
    </div>
  );
}

export default App;
