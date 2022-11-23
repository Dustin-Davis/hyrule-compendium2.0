import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([])
  const [itemData, setItemData] = useState('')

  useEffect(() => {
    fetchItems().then((equipment) => {
      setItemData(equipment || 'No items')
    })
  }, [])


  return (
    <div className="App">
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => {
          fetchItems()
        }}> call
        </button>
        <p>
          {itemData}
        </p>
      </div>

    </div>
  )
}

export default App
