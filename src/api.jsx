import React, { useEffect, useState } from "react";
import axios from "axios";

const fetchEquipment = () => {
  return axios.get(`https://botw-compendium.herokuapp.com/api/v2/category/equipment`)
    .then(({ data }) => {
      console.log('Equipment Data:', data)
      return data
    })
}

function useEquipment() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetchEquipment().then((equipment) => {
      setItems(equipment.data)
    })
  }, [])

  return items
}

const fetchMonster = () => {
  return axios.get(`https://botw-compendium.herokuapp.com/api/v2/category/monsters`)
    .then(({ data }) => {
      console.log('Monster Data:', data)
      return data
    })
}

function useMonsters() {
  const [monsters, setMonsters] = useState([])

  useEffect(() => {
    fetchMonster().then((monster) => {
      setMonsters(monster.data)
    })
  }, [])

  return monsters
}

const fetchMaterials = () => {
  return axios.get(`https://botw-compendium.herokuapp.com/api/v2/category/materials`)
    .then(({ data }) => {
      console.log('Materials Data:', data)
      return data
    })
}

function useMaterials() {
  const [Materials, setMaterials] = useState([])

  useEffect(() => {
    fetchMaterials().then((materials) => {
      setMaterials(materials.data)
    })
  }, [])

  return Materials
}

export { useEquipment, useMonsters, useMaterials }
