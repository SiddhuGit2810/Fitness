import React, { useState } from 'react'

import "./Sidebar.css"
import { useNavigate } from 'react-router-dom';


function SideBar() {

   const nav= useNavigate ()



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
          <hr className='line' />
          <ul className="navbar-nav">

          <li>
              
              <button  className='chest-btn' onClick={()=> nav('/HomePage')}  >    HomePage</button>

            </li>

            <li>
              
              <button  className='chest-btn' onClick={()=> nav('/ChestWorkout')}  >       Chest Workout</button>

            </li>
            <li>
            
              <button className='abs-btn' onClick={()=> nav('./AbsWorkout')}>   Abs Workout</button>

            </li>
            <li>
            
              <button className='leg-btn' onClick={()=> nav('./LegWorkout')}> Leg Workout</button>
            </li>
            <li>
             
            <button className='shoulder-btn' onClick={()=> nav('/ShoulderWorkout')}  >Shoulder Workout</button>

            </li>
            <li>
              
              <button className='other-btn' onClick={()=> nav('./OtherWorkout')}> Other Workout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar