import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from "axios";
import {fetchItems} from './api.jsx'


function App() {
  const [items, setItems] = useState([])
  // const [itemData, setItemData] = useState('')
  let num = 10


  useEffect(() => {
    fetchItems().then((equipment) => {
      // setItemData(JSON.stringify(equipment) || 'No items')
      setItems(equipment.data)
    })
  }, [])


  return (
    <div className="App">
      <div className="card">
        {
          items.sort((a, b) => a.id - b.id)
            .map((item, idx) => idx < num && (
              <div key={item.id}>
                <p >
                  {item.name}
                </p>
                <img src={item.image} alt=""></img>
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default App
