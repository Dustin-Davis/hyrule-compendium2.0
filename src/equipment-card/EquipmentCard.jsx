import React from "react";
import './EquipmentCard.css'
import { useEquipment } from '../api.jsx'




export default function EquipmentCard() {
  const equipment = useEquipment()
  let num = 1

  return (
    <div>
      {
        equipment.sort((a, b) => a.id - b.id)
          .map((item, idx) => idx < num && (
            <div key={item.id}>
              <div className="flip-card" tabIndex="0">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={item.image} alt=""></img>
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
  )
}
