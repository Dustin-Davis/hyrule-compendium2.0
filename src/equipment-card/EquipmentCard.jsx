import React, { useState } from "react";
import { useEquipment } from '../api.jsx'
import "./EquipmentCard.css"

export default function EquipmentCard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const equipment = useEquipment();

  let num = 5;

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <>
      <div className="container py-5 text-center d-flex justify-content-around">
        <div className="row row-cols-3 justify-content-around">
          {
            equipment
              .sort((a, b) => a.id - b.id)
              .map((item, idx) => idx < num && (
                <div className="card Card mb-3 mx-3 col" key={item.id}>
                  <img src={item.image} className="card-img-top rounded mt-3" alt="..." />
                  <div className="card-body">
                    <button className="btn btn-primary" onClick={() => setSelectedItem(item) && setShowModal(true)}>Details</button>
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
                <button className="btn btn-close" onClick={handleCloseModal}>x</button>
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
