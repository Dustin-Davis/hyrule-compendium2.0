import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import './App.css'
import axios from "axios"
import EquipmentCard from './equipment-card/EquipmentCard.jsx'
import MonsterCard from './monster-card/MonsterCard.jsx';
import NavBar from './navbar/navbar.jsx';
import Home from './Home/Home.jsx';

export default function App() {

  return(
    <>
      <NavBar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/equipment' element={<EquipmentCard />}/>
      <Route path='/monster' element={<MonsterCard />} />
      <Route path='/materials' element={<MaterialsCard />} />
    </Routes>



    </>
  )
}
