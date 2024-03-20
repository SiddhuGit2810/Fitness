
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import ChestWorkout from './ChestWorkout/ChestWorkout';
import AbsWorkout from './AbsWorkout/AbsWorkout';
import LegWorkout from './LegWorkout/LegWorkout';
import OtherWorkout from './OtherWorkout/OtherWorkout';
import Topmenubar from './Topmenubar/Topmenubar';
import SideBar from './SideNavBar/SideBar';
import Shoulder from './ShoulderWorkout/Shoulder';

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
              <Route path='/chestWorkout' element={<ChestWorkout />} />
              <Route path='/shoulderWorkout' element={<Shoulder />} />
              <Route path="/AbsWorkout" element={<AbsWorkout />} />
              <Route path="/LegWorkout" element={<LegWorkout />} />
              <Route path="/OtherWorkout" element={<OtherWorkout />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App