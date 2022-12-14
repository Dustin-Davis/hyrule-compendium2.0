import React from "react";
import './MonsterCard.css'
import { useMonsters } from '../api.jsx'




export default function MonsterCard() {
  const monster = useMonsters()
  let num = 16

  return (
    <>
      <div className="container">
        <div className="row">
          {
            monster.sort((a, b) => a.id - b.id)
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
