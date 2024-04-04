
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
import DietHomePage from './Diet/DietHomePage/DietHomePage';

function App() {
  return (
    <div className="App">
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
              <Route path='/ChestWorkout' element={<ChestWorkout />} />
              <Route path='/ShoulderWorkout' element={<Shoulder />} />
              <Route path="/AbsWorkout" element={<AbsWorkout />} />
              <Route path="/LegWorkout" element={<LegWorkout />} />
              <Route path="/OtherWorkout" element={<OtherWorkout />} />

              <Route path="/HomePage" element={<HomePage />} />




              


            </Routes>


          </div>


              
              <div className="Diet">


    <Routes>


      <Route   path='/DietHomePage' element={<DietHomePage/>}   />



    </Routes>



              </div>



        </div>
      </div>
    </div>

  )
}

export default App