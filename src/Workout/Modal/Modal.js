import React, { useContext, useState } from 'react'

import { EmailContext } from '../../Usecontext/UseContext'

import './Modal.css'
import axios from 'axios'

const Modal = ({open,onClose}) => {
    const [variantName, setvariantName] = useState('')



    const handleSubmit = (e)=>{
        e.preventDefault()
        alert('variantName' + "  " + variantName)
        setvariantName('')
    }

   

    const contextEmail = useContext(EmailContext) || {}
    async function pushCxVariant(){

        const url="https://fitness-60022916701.development.catalystserverless.in/server/CxVariants/CxVariant"
      
        const cxBody={
          "variant_Name":variantName,
          "email":contextEmail.contextemail
        }
      
        const cxResponse = await axios.post(url, cxBody);
      
              console.log(cxResponse)
      
      }
if(!open) return null

  return (
   <div className="overlay">
<div className="modalContainer">

<div>
            
  <div className="card">
        <form onSubmit={handleSubmit}>
          <label htmlFor="variantName">Variant Name</label>
          <div className="close">
    <button onClick={onClose}  >X</button>
</div>
          <input
            type="text"
            id="variantName"
            value={variantName}
            onChange={(e) => setvariantName(e.target.value)}
          />
          <button onClick={pushCxVariant} type="submit" className="animated-button">
            Create
          </button>
        </form>
      </div>
        </div>



</div>


   </div>
  )
}

export default Modal