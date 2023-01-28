import React from "react";
import { useEquipment } from '../api.jsx'
import "./EquipmentCard.css"


export default function EquipmentCard() {
  const equipment = useEquipment()
  let num = 6;
  return (
    <>
      <div className="container py-5 text-center d-flex justify-content-around ">
        <div className="row test">
      {
        equipment.sort((a, b) => a.id - b.id)
          .map((item, idx) => idx < num && (
              <div className="card Card mb-3 mx-3 col-3"  key={item.id}>
                <img src={item.image} className="card-img-top img-size" alt="..."></img>
                <div className="card-body">
                  <a href="#" className="btn btn-primary">Details</a>
                </div>
              </div>
          ))
        }
        </div>
      </div>

    </>
  )
}
