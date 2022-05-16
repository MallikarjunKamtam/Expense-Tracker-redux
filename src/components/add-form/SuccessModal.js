import React from "react";
import "./success-modal.css";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import logo from "./";
const SuccessModal = ({ isModal, setIsModal }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Modal isOpen={isModal} style={customStyles}>
      <div className="modal-inner">
        <i className="fi fi-rr-checkbox"></i>
        <label className="modal-label">Added Succesfully</label>
        <Link to="/">
          <div className="take-home-button">Home</div>
        </Link>
      </div>
    </Modal>
  );
};

export default SuccessModal;
