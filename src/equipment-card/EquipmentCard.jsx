import React from "react";
import { useEquipment } from '../api.jsx'
import './EquipmentCard.css'


export default function EquipmentCard() {
  const equipment = useEquipment()

  return (
    <>
      {
        equipment.sort((a, b) => a.id - b.id)
          .map((item) =>(
            <div className="card Card"  key={item.id}>
              <img src={item.image} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          ))
      }

    </>
  )
}
