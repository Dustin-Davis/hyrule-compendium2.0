import React, { useState } from "react";
import { useMonsters } from '../api.jsx'
import "../equipment-card/EquipmentCard.css"

export default function MonsterCard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [num, setNum] = useState(16);
  const monster = useMonsters();

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
    document.body.style.overflow = 'unset';
  };

  const handleClick = (item) => {
    console.log("Button was clicked");
    setSelectedItem(item);
    setShowModal(true);
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
    }
  };

  const handleNumChange = (event) => {
    setNum(event.target.value);
  };

  return (
    <>
      <div className=" container pt-5 text-center d-flex justify-content-end">
        <label htmlFor="num-select">Number of items to display:</label>
        <select id="num-select" value={num} onChange={handleNumChange}>
          <option value={16}>16</option>
          <option value={32}>32</option>
          <option value={64}>64</option>
          <option value={monster.length}>All</option>
        </select>
      </div>
      <div className="container py-5 text-center d-flex justify-content-around">
        <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-4 row-cols-sm-3 row-cols-2 test justify-content-around">
          {
            monster
              .sort((a, b) => a.id - b.id)
              .map((item, idx) => idx < num && (
                <div className="card Card mb-3 mx-3 col" key={item.id}>
                  <img src={item.image} className="card-img-top rounded mt-3" alt="..." />
                  <div className="card-body">
                    <button className="btn btn-primary" onClick={() => handleClick(item)}>Details</button>
                  </div>
                </div>
              ))
          }
        </div>
      </div>
      {
        showModal && selectedItem && (
          <div className="modal-backdrop">
            <div className="modal-content">
              <div className="modal-header">
                <h3>{selectedItem.name}</h3>
                <button className="btn btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <p>Category: {selectedItem.category}</p>
                <p>{selectedItem.description}</p>
                <p>Common Location: {selectedItem.common_locations}</p>
                <p>Attack: {selectedItem.attack}</p>
                <p>Durability: {selectedItem.durability}</p>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
}
