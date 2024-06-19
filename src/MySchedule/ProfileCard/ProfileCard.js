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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
