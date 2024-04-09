import React from 'react'
import CalorieCalculator from '../CalorieCalculator/CalorieCalculator'
import CalorieMeter from '../CalorieMeter/CalorieMeter'

import './DietHomePage.css'

function DietHomePage() {
  return (

<>

    <div>DietHomePage</div>
<div className="DietContainer">
<div className="">  <CalorieCalculator/>   </div>

<div className=""> <CalorieMeter/> </div>

</div>

  


    </>
  )
}

export default DietHomePage