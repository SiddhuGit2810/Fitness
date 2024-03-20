
import { Route ,Routes,Navigate} from 'react-router-dom';
import './App.css';
import ChestWorkout from './ChestWorkout/ChestWorkout';

import SideBar from './SideNavBar/SideBar';
import Shoulder from './ShoulderWorkout/Shoulder';

function App() {


    return (
      <div className="">


 <div className="MainPage">

<div className="SideBar">

<SideBar/>


</div>


<div className="WorkOutPage">


<Routes>

<Route path='/chestWorkout'  element={<ChestWorkout/>} />

<Route path='/shoulderWorkout' element={<Shoulder/>} />


</Routes>





</div>


       


 </div>





      </div>
    )


}

export default App