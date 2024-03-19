import React, { useState } from 'react'

import "./Sidebar.css"

function SideBar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>


      <div className="border">
        <div className={`side-navbar ${isOpen ? 'open' : ''}`}>
          <div className="navbar-header">
            <button className="navbar-toggle" onClick={toggleNavbar}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </button>
            <div className="brand"> <h3>Begin Your Fitness </h3></div>
          </div>
          <ul className="navbar-nav">
            <li>
              <a href="#">Chest Workout</a>
            </li>
            <li>
              <a href="#">Abs Workout</a>
            </li>
            <li>
              <a href="#">Leg Workout</a>
            </li>
            <li>
              <a href="#">Shoulder Workout</a>
            </li>
            <li>
              <a href="#">Other Workouts</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar