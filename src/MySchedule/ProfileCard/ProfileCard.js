import React from 'react';

import './ProfileCard.css'

function ProfileCard() {
  return (
    <div className="ProfileCard">

<div className="container">
            <div className="row">
                <div className="col-md-offset-4 col-md-4">
                    <div className="email-signature">
                        <div className="signature-icon">
                            <i className="user-icon">👤</i>
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