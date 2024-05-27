import React from 'react'
import CalorieCalculator from '../CalorieCalculator/CalorieCalculator'
import CalorieMeter from '../CalorieMeter/CalorieMeter'



import './DietHomePage.css'
import TodaysCalorie from '../TodaysCalorie/TodaysCalorie'

function DietHomePage() {
  return (

    <>

      <div>DietHomePage</div>
      <div className="DietContainer">

        <div className="First"><div className="">  <CalorieCalculator />   </div>

          <div className=""> <CalorieMeter />
            
          </div>
        </div>
        <div className="Second">

          <div className=""> <TodaysCalorie/> </div>

        </div>




      </div>




    </>
  )
}

export default DietHomePage