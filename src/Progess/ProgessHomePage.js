import React from 'react'

import video from '../video/video.mp4'

import '../Progess/ProgessHomePage.css'
import CalorieTracker from './CalorieTracker/CalorieTracker'


function Test() {
  return (


    <div>
      
     
     
      
      
      
      <video src={video} width="800" height="400" autoPlay muted loop id='background-video' />


<div className="CalrieTracker">

<CalorieTracker/>

</div>
    
      
      
      </div>
  )
}

export default Test