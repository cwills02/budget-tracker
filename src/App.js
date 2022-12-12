import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [amountInput, setAmountInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')
  const [total, setTotal] = useState(0)
  const [items, setItems] = useState([])

  const inputRef = useRef(null)

  const addItemHandler = () => {
    const newItem = {description: descriptionInput, amount: amountInput}
    if(amountInput !== '' && descriptionInput !== '') {
      setItems([...items, newItem])
      setTotal(total + Number(amountInput))
    }
    setAmountInput('')
    setDescriptionInput('')
    inputRef.current.focus()
  }

  const removeItemHandler = (listItem) => {
    setTotal(total - listItem.amount)
    const newItems = items.filter(item => item !== listItem)
    setItems(newItems)
  }

  const amountInputHandler = (e) => {
      setAmountInput(e.target.value)
  }

  const descriptionInputHandler = (e) => {
    setDescriptionInput(e.target.value)
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
        <button 
          className='remove-item'
          onClick={() => removeItemHandler(item)}
        >
          X
        </button>
      </div>
    ))
  }

  return (
    <div className="App">
      <div className='banner'>
        <h1>Budget Tracker</h1>
      </div>
      <div className='container'>
        <input 
          placeholder='Add amount'
          onChange={amountInputHandler}
          value={amountInput}
          type='number'
          ref={inputRef}
        />
        <input 
          placeholder='Add Description'
          onChange={descriptionInputHandler}
          value={descriptionInput}
        />
        <div>
          <button onClick={addItemHandler}>Add Item</button>
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
