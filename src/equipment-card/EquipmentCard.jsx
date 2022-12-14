import React from "react";
// import './EquipmentCard.css'
import { useEquipment } from '../api.jsx'





export default function EquipmentCard() {
  const equipment = useEquipment()
  let num = 18

  return (
    <>
      <a href='#monster'>monster</a>
      <div className="container">
        <div className="row">
        {
          equipment.sort((a, b) => a.id - b.id)
          .map((item, idx) => idx < num && (
            <div key={item.id} className="column">
                <div className="flip-card" tabIndex="0">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={item.image} alt="" className="img"></img>
                    </div>
                    <div className="flip-card-back">
                      <p>{item.name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}</p>
                      <p>{item.description}</p>
                      <p>Attack: {item.attack}</p>
                      <p>Defense: {item.defense}</p>
                    </div>
                  </div>
                </div>
            </div>
            ))
          }
        </div>
    </div>
  </>
  )
}
