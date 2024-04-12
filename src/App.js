
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import ChestWorkout from './Workout/ChestWorkout/ChestWorkout';
import AbsWorkout from './Workout/AbsWorkout/AbsWorkout';
import LegWorkout from './Workout/LegWorkout/LegWorkout';
import OtherWorkout from './OtherWorkout/OtherWorkout';
import Topmenubar from './Topmenubar/Topmenubar';
import SideBar from './SideNavBar/SideBar';
import Shoulder from './Workout/ShoulderWorkout/Shoulder';
import HomePage from './HomePage/HomePage';
import DietHomePage from './Diet/DietHomePage/DietHomePage';
import Login from './Login/Login';
import MainPage from './MainPage/MainPage';

function App() {
  return (

<>

<div className="Login">

<Routes>

<Route path='/Load' element={<Login/>}/>

</Routes>

</div>

 


    </>
  )
}

export default App