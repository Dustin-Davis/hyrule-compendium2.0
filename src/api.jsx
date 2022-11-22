import React, { useEffect, useState } from "react";


function GetEquipment() {
  const [items, setItems] = useState();

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch('https://botw-compendium.herokuapp.com/api/v2/all')
      .then(res => res.json())
      .then(console.log(res.json()))
      .then(
        (result) => {
          setItems(result);
          console.log(result)
        }
      )
  }, [])
  console.log(items)
  return (
    <div>
      <h2>items.name</h2>
    </div>
  )
}



export default GetEquipment ;
