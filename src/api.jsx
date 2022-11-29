import React, { useEffect, useState } from "react";
import axios from "axios";



export const fetchItems = () => {
  return axios.get(`https://botw-compendium.herokuapp.com/api/v2/category/equipment`)
    .then(({ data }) => {
      console.log(data)
      return data
    })
}
// function Items() {
//   const [items, setItems] = useState([])
//   // const [itemData, setItemData] = useState('')


//   useEffect(() => {
//     fetchItems().then((equipment) => {
//       // setItemData(JSON.stringify(equipment) || 'No items')
//       setItems(equipment.data)
//     })
//   }, [])

// }
