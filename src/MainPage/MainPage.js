// MainPage.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Topmenubar from '../Topmenubar/Topmenubar';
import SideBar from '../SideNavBar/SideBar';
import ChestWorkout from '../Workout/ChestWorkout/ChestWorkout';
import AbsWorkout from '../Workout/AbsWorkout/AbsWorkout';
import LegWorkout from '../Workout/LegWorkout/LegWorkout';
import Shoulder from '../Workout/ShoulderWorkout/Shoulder';
import HomePage from '../HomePage/HomePage';
import DietHomePage from '../Diet/DietHomePage/DietHomePage';
import '../MainPage/MainPage.css';

function MainPage() {
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
          <Routes>
            <Route path="/ChestWorkout" element={<ChestWorkout />} />
            <Route path="/ShoulderWorkout" element={<Shoulder />} />
            <Route path="/AbsWorkout" element={<AbsWorkout />} />
            <Route path="/LegWorkout" element={<LegWorkout />} />
            <Route path="/HomePage" element={<HomePage />} />
          </Routes>
        </div>
        <div className="Diet">
          <Routes>
            <Route path="/DietHomePage" element={<DietHomePage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
