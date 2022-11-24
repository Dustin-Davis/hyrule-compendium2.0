import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from "axios";


const fetchItems = () => {
 return axios.get(`https://botw-compendium.herokuapp.com/api/v2/category/equipment`)
    .then(({ data }) => {
      console.log(data)
      return data
    })
}

function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([])
  const [itemData, setItemData] = useState('')

  useEffect(() => {
    fetchItems().then((equipment) => {
      setItemData(JSON.stringify(equipment) || 'No items')
      setItems(equipment.data)
    })
  }, [])


  return (
    <div className="App">
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {
          items.sort((a, b) => a.id - b.id)
          .map((item, idx) => (
            <p key={item.id}>
            {item.name}
          </p>
        ))
      }
      </div>

    </div>
  )
}

export default App
