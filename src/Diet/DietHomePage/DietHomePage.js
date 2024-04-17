import React from 'react'
import CalorieCalculator from '../CalorieCalculator/CalorieCalculator'
import CalorieMeter from '../CalorieMeter/CalorieMeter'

import CalorieTracker from '../CalorieTracker/CalorieTracker'

import './DietHomePage.css'

function DietHomePage() {
  return (

<>

    <div>DietHomePage</div>
<div className="DietContainer">

  <div className="First"><div className="">  <CalorieCalculator/>   </div>

<div className=""> <CalorieMeter/> 
            <div className="Second">

              <div className=""> <CalorieTracker /> </div>

            </div>
            </div>
 </div>





</div>

  


    </>
  )
}

export default DietHomePage