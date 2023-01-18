import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from "axios";
import parseRoute from './lib/parse-route.js'
import EquipmentCard from './equipment-card/EquipmentCard.jsx'
import MonsterCard from './monster-card/MonsterCard.jsx';
import NavBar from './navbar/navbar.jsx';

export default function App() {

  return(
    <NavBar />
    // <EquipmentCard />
    // <MonsterCard />
  )

}
