import React from "react";
import './MonsterCard.css'
import { useMonsters } from '../api.jsx'




export default function MonsterCard() {
  const monster = useMonsters()
  return (
    <>
      {
        monster.sort((a, b) => a.id - b.id)
          .map((item) => (
            <div className="card Card" key={item.id}>
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
