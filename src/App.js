import { useState } from 'react';
import './App.css';

function App() {
  const [amountInput, setAmountInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')
  const [total, setTotal] = useState(0)
  const [items, setItems] = useState([])
  console.log(items)

  const addItemHandler = () => {
    const newItem = {description: descriptionInput, amount: amountInput}
    if(amountInput !== '' && descriptionInput !== '') {
      setItems([...items, newItem])
    }
  }

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
    addItemHandler()
    setAmountInput('')
    setDescriptionInput('')
  }

  const decrement = () => {
    const amountDecrement = amountInput
    const newTotal = total - amountDecrement
    setTotal(newTotal)
    addItemHandler()
    setDescriptionInput('')
    setAmountInput('')
  }

  let totalColor;
  if(total >= 0) {
    totalColor = 'green'
  } else {
    totalColor ='red'
  }

  let itemList;
  if(items !== []) {
    itemList = items.map((item, index) => (
      <div key={index} className='item-list'>
        <h4 className='item-description'>{item.description}</h4>
        <h4 className='item-amount'>${item.amount}</h4>
      </div>
    ))
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
      <h2>Total Budget: <span style={{color: totalColor}}>${total}</span></h2>
      <div className='list-container'>
        {itemList}
      </div>
    </div>
  );
}

export default App;
