import React from 'react';
import Timer from '../Timer/Timer';
import ProfileCard from '../ProfileCard/ProfileCard';
import './MySchedule.css';

function MySchedule() {
  return (
    <div className="schedule-homepage">
      <div className="side-by-side">
        <Timer />
        <ProfileCard />
      </div>
    </div>
  );
}

export default MySchedule;
