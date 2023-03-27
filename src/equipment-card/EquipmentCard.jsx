import React, { useState } from "react";
import { useEquipment } from '../api.jsx'
import { useMonsters } from '../api.jsx'
import "./EquipmentCard.css"

export default function EquipmentCard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [num, setNum] = useState(16);
  const equipment = useEquipment();

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
          <option value={128}>128</option>
          <option value={equipment.length}>All</option>
        </select>
      </div>
      <div className="container py-5 text-center d-flex justify-content-around">
        <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-4 row-cols-sm-3 row-cols-2 test justify-content-around ">
          {
            equipment
              .sort((a, b) => a.id - b.id)
              .map((item, idx) => idx < num && (
                <div className="card Card mb-3 mx-3" key={item.id}>
                  <div className="txt-color mt-2">{item.name.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</div>
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
                <h3>{selectedItem.name.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h3>
                <button className="btn btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <p>Category: {selectedItem.category.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
                <p>{selectedItem.description}</p>
                <p>Common Location: {selectedItem.common_locations}</p>
                <p>Attack: {selectedItem.attack}</p>
                <p>Defense: {selectedItem.defense}</p>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
}
