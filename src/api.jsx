import React, { useEffect, useState } from "react";
import axios from "axios";



const fetchEquipment = () => {
  return axios.get(`https://botw-compendium.herokuapp.com/api/v2/category/equipment`)
    .then(({ data }) => {
      console.log(data)
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

export {useEquipment}
