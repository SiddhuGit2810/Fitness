import React, { useEffect } from 'react'
import CalorieCalculator from '../CalorieCalculator/CalorieCalculator'
import CalorieMeter from '../CalorieMeter/CalorieMeter'

import AOS from 'aos';
import 'aos/dist/aos.css';

import './DietHomePage.css'
import TodaysCalorie from '../TodaysCalorie/TodaysCalorie'
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>


function DietHomePage() {


  useEffect(() => {
    AOS.init();
  }, [])

  return (


    <>
      <div >

        <div className="DietContainer">

          <div className="First">

            <div className=""  data-aos="zoom-in"  data-aos-duration="1500" >  <CalorieCalculator />   </div>

            <div className=""  data-aos="zoom-in-up"  data-aos-duration="1500" > <CalorieMeter />

            </div>
          </div>
          <div className="Second">

            <div className=""> <TodaysCalorie /> </div>

          </div>




        </div>


      </div>

    </>
  )
}

export default DietHomePage