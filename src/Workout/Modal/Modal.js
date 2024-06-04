import React, { useContext, useState } from 'react';
import { EmailContext } from '../../Usecontext/UseContext';
import './Modal.css';
import axios from 'axios';

const Modal = ({ open, onClose }) => {
  const [variantName, setVariantName] = useState('');
  const [variantType, setVariantType] = useState('');
  const contextEmail = useContext(EmailContext) || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert('variantName' + "  " + variantName);
    setVariantName('');
    setVariantType('')
  };

  async function pushCxVariant() {
    const url = "https://fitness-60022916701.development.catalystserverless.in/server/CxVariants/CxVariant";
    const cxBody = {
      "variant_Name": variantName,
      "email": contextEmail.contextemail,
      "varianttype": variantType
    };
    const cxResponse = await axios.post(url, cxBody);
    console.log(cxResponse);

  }

  if (!open) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-card">
          <div className="popup-close">
            <button onClick={onClose}>X</button>
          </div>
          <form onSubmit={handleSubmit} className="popup-form">
            <label htmlFor="variantName">Please enter the variant Name</label>
            <input
              type="text"
              id="variantName"
              value={variantName}
              onChange={(e) => setVariantName(e.target.value)}
            /><label htmlFor="variantName">Enter the variant type</label>
            <input
              type="text"
              id="variantType"
              value={variantType}
              onChange={(e) => setVariantType(e.target.value)}
            />
            <button onClick={pushCxVariant} type="submit" className="popup-button">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
