import React, { useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Topmenubar from '../Topmenubar/Topmenubar';
import SideBar from '../SideNavBar/SideBar';
import ChestWorkout from '../Workout/ChestWorkout/ChestWorkout';
import AbsWorkout from '../Workout/AbsWorkout/AbsWorkout';
import LegWorkout from '../Workout/LegWorkout/LegWorkout';
import Shoulder from '../Workout/ShoulderWorkout/Shoulder';
import HomePage from '../HomePage/HomePage';
import DietHomePage from '../Diet/DietHomePage/DietHomePage';
import '../MainPage/MainPage.css';


import { EmailContext } from '../Usecontext/UseContext';
import Game from '../Progess/ProgessHomePage';
import MySchedule from '../MySchedule/MyScheduleHomePage/MySchedule';
import Modal from '../Workout/Modal/Modal';




function MainPage() {
  const { contextUser } = useContext(EmailContext) || {};
  const navigate = useNavigate();
  const user = contextUser;

  return (
    <div className="MainPage">
      <div className="SideBar">
        <SideBar />
      </div>
      <div className="Content">
        <div className="TopMenuBar">
          <Topmenubar />
        </div>
        <div className="WorkOutPage">
          <video src='1105292_1080' autoPlay muted loop id="background-video">
            
            Your browser does not support HTML5 video.
          </video>
          <Routes>
            <Route path="/ChestWorkout" element={<ChestWorkout />} />
            <Route path="/ShoulderWorkout" element={<Shoulder />} />
            <Route path="/AbsWorkout" element={<AbsWorkout />} />
            <Route path="/LegWorkout" element={<LegWorkout />} />
            <Route path="/Modal" element={<Modal/>} />
            <Route path="/HomePage" element={user ? <HomePage /> : navigate("/login")} />
          </Routes>
        </div>
        <div className="Diet">
          <Routes>
            <Route path="/DietHomePage" element={user ? <DietHomePage /> : navigate("/login")} />
          </Routes>
        </div>
      

<div className="Progress">
<Routes>
            <Route path="/ProgessHomePage" element={user ? <Game/> : navigate("/login")} />
          </Routes>



</div>

<div className="MySchedule">


  <Routes>
 
 <Route path='/ScheduleHomePage' element= { user ? <MySchedule/>:navigate("/login")} />
      
  </Routes>
</div>

      </div>
    </div>
  );
}

export default MainPage;
