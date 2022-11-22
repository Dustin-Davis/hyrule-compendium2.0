import React, { useEffect, useState } from "react";
import axios from "axios";
import Test from "./test";

function GetEquipment() {
  const [items, setItems] = useState();

  useEffect(() => {
    fetchItems();
  }, []);


  const fetchItems = () => {
      axios.get(`https://botw-compendium.herokuapp.com/api/v2/category/equipment`)
        .then((response) => response.json())
        .then((res) => {
          setItems(res.data.equipment)
        })
  }
return  (
  <Test items={items} />
)
}



export default GetEquipment;
