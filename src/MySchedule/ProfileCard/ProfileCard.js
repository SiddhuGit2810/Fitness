<<<<<<< HEAD
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
=======
import React from 'react';
import './ProfileCard.css';
import userImage from './images.jpeg';

function ProfileCard() {
    return (
        <div className="profile-card-container">
            <div className="left-section">
                <div className="logo">
                    <img src={userImage} alt="user" className="profile-image" />
                </div>
            </div>
            <div className="right-section">
                <h1 className="profile-title">Roshan</h1>
                <h3 className="profile-email">roshan@gmail.com</h3>
                <div className="bio">
                    <div className="profile-item">
                        <span className="profile-label">Age:</span>
                        <span className="profile-value">24</span>
                    </div>
                    <div className="profile-item">
                        <span className="profile-label">Height:</span>
                        <span className="profile-value">172 cm</span>
                    </div>
                    <div className="profile-item">
                        <span className="profile-label">Weight:</span>
                        <span className="profile-value">60 kg</span>
>>>>>>> refs/remotes/origin/main
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
