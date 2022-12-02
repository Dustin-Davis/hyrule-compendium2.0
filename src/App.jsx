import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from "axios";
import EquipmentCard from './equipment-card/EquipmentCard.jsx'

function App() {

  return (
    <div className="App">
      <EquipmentCard />
    </div>
  )
}

export default App
