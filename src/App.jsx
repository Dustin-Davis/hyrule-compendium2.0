import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from "axios";
import  {useEquipment}  from './api.jsx'
import EquipmentCard from './equipment-card/EquipmentCard.jsx'

function App() {
  const equipment = useEquipment()
  let num = 1

  return (
    <div className="App">
      <div className="card">
        {
          equipment.sort((a, b) => a.id - b.id)
            .map((item, idx) => idx < num && (
              <div key={item.id}>
                <p>{item.id}</p>
                <p >
                  {item.name}
                </p>
                <img src={item.image} alt=""></img>
              </div>
            ))
        }
      </div>
      <EquipmentCard />
    </div>
  )
}

export default App
