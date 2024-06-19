import React, { useEffect } from 'react';

import './ProfileCard.css'
import axios from 'axios';

function ProfileCard() {


 

   
   async function img() {
    const image=  await axios.get("https://fitness-60022916701.development.catalystserverless.in/server/ProfileImage/getDetails")

    

    const imgfile=image.data.file_details[0].file_name

    console.log(imgfile)

   }
   

   useEffect(() => {
     
   img()
  

   }, [])
   
//    res.data.file_details[0].file_name





  return (
    <div className="ProfileCard">

<div className="container">
            <div className="row">
                <div className="col-md-offset-4 col-md-4">
                    <div className="email-signature">
                        <div className="signature-icon">
                           <img src="imgfile" alt="" />
                        </div>
                        <div className="signature-details">
                            <h2 className="title">Roshan</h2>
                            <span className="post">
                                <img src="" alt="email icon"/> roshan@gmail.com
                            </span>
                        </div>
                        <ul className="signature-content">
                            <li>
                                <span className="phone-icon">📞</span>
                                <br /> Age
                                <br /> 24
                            </li>
                            <li>
                                <span className="envelope-icon">✉️</span>
                                <br /> Height
                                <br /> 172cm
                            </li>
                            <li>
                                <span className="globe-icon">🌐</span>
                                <br /> Weight
                                <br /> 60 kg
                            </li>
                        </ul>
                        <ul className="icon">
                            <li>
                                <a href="" className="facebook-icon">📘</a>
                            </li>
                            <li>
                                <a href="" className="instagram-icon">📸</a>
                            </li>
                            <li>
                                <a href="" className="twitter-icon">🐦</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  
    

    </div>
  )
}

export default ProfileCard