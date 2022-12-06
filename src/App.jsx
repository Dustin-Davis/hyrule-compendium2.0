import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from "axios";
import EquipmentCard from './equipment-card/EquipmentCard.jsx'
import MonsterCard from './monster-card/MonsterCard.jsx';

function App() {

  return (
    <div className="App row">
      <div>
        <EquipmentCard />
      </div>
      <div >
        <MonsterCard />
      </div>
    </div>
  )
}

export default App
