
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import ChestWorkout from './ChestWorkout/ChestWorkout';
import AbsWorkout from './AbsWorkout/AbsWorkout';
import LegWorkout from './LegWorkout/LegWorkout';
import OtherWorkout from './OtherWorkout/OtherWorkout';
import Topmenubar from './Topmenubar/Topmenubar';
import SideBar from './SideNavBar/SideBar';
import Shoulder from './ShoulderWorkout/Shoulder';
import HomePage from './HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <div className="MainPage">
        <div className="SideBar">
          <SideBar />
        </div>
        <div className="Content">
          <Topmenubar />
          <div className="WorkOutPage">
            <Routes>
              <Route path='/ChestWorkout' element={<ChestWorkout />} />
              <Route path='/ShoulderWorkout' element={<Shoulder />} />
              <Route path="/AbsWorkout" element={<AbsWorkout />} />
              <Route path="/LegWorkout" element={<LegWorkout />} />
              <Route path="/OtherWorkout" element={<OtherWorkout />} />

              <Route path="/HomePage" element={<HomePage />} />


            </Routes>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App