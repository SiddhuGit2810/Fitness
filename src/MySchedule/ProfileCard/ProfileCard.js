import React, { useContext, useEffect, useState } from 'react';
import './ProfileCard.css';
import userImage from './images.jpeg';
import axios from 'axios';
import { EmailContext } from '../../Usecontext/UseContext';

function ProfileCard() {

    const [imageid, setimageid] = useState('')
    const [username, setusername] = useState('')
    const contextEmail = useContext(EmailContext) || {}
    
    useEffect(() => {
        const body = {email: contextEmail.contextemail}
        axios.post("https://fitness-60022916701.development.catalystserverless.in/server/GetImageID/getImageId", body).then((e)=>{
            console.log(e)
            var imageid = e.data[0].Users.PictureID
            var username = e.data[0].Users.UserName
            console.log(username)
            setimageid(imageid)
            setusername(username)

            })
    
    }, [])
    
    // var Images = fetch(`https://fitness-60022916701.development.catalystserverless.in/server/ProfileImage/downloadFile/`)
   

    return (
        <div className="profile-card-container">
            <div className="left-section">
                <div className="logo">
                    <img src={`https://fitness-60022916701.development.catalystserverless.in/server/ProfileImage/downloadFile/${imageid}`}   className="profile-image" />
                </div>
            </div>
            <div className="right-section">
                <h1 className="profile-title">{username}</h1>
                <h3 className="profile-email">{contextEmail.contextemail}</h3>
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
