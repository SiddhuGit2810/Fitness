import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web';
import "./ChestWorkout.css"
import axios from "axios";


function ChestWorkout() {

  const [FitnessData, setFitnessData] = useState([])

  const [isActive, setActive] = useState("false")


  const ToggleClass = async (data) => {
    setActive(!isActive);


    var DateUrl = "https://fitness-60022916701.development.catalystserverless.in/server/ZCQL/getVariantDate"

    var DataUrl = "https://fitness-60022916701.development.catalystserverless.in/server/ZCQL/getVaraiantData"

    var VariantData = {
      "variantName": data
    }

    const FitnessDate = await axios.post(DateUrl, VariantData)

    const dates = FitnessDate.data.map(element => element.Previous.DateDa);
    console.log(dates)

    var todayDate = new Date().toISOString().slice(0, 10);

    var array = []

    dates.forEach(myFucntion)

    function myFucntion(item, index) {
      const startDate = new Date(item);
      const endDate = new Date(todayDate);

      const differenceMs = endDate - startDate;

      const daysDifference = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

      array.push(daysDifference)

    }



    var PostiveNumber = array.filter(number => number >= 0)

    var lowest = Math.min(...PostiveNumber)

    var index = array.indexOf(lowest)

    var PreviousDate = dates[index]

    console.log(PreviousDate)

    var VariantWorkoutData = {

      "variantName": data,
      "dateTime": PreviousDate

    }


    var WorkOutData = await axios.post(DataUrl, VariantWorkoutData)





    setFitnessData(WorkOutData.data)





  };


  const slideAnimation = useSpring({
    from: { transform: 'translateY(-50px)', opacity: '0' },
    to: { transform: 'translateY(0.8rem)', transition: '0.5s ease-out', opacity: '1' },
  });


  return (
    <animated.div style={slideAnimation}>
      <div className="chest-container">

        <div className="WorkoutTypeContainer">


          <div class="WorkoutTypeCard">
            <div class="Wcard-details">
              <p class="text-title">Incline Pushups</p>
              <p class="text-body">Card Details</p>
            </div>

            <button className="WorkoutTypeCard-button" onClick={() => ToggleClass("Incline_Pushups")}> More info  </button>

          </div>

          <div class="WorkoutTypeCard">
            <div class="Wcard-details">
              <p class="text-title">
                Plank</p>
              <p class="text-body">Card Details</p>
            </div>
            <button className="WorkoutTypeCard-button" onClick={() => ToggleClass("Plank")} > More info  </button>
          </div>




          <div class="WorkoutTypeCard">
            <div class="Wcard-details">
              <p class="text-title">Cable Crossover</p>
              <p class="text-body">Card Details</p>
            </div>
            <button className="WorkoutTypeCard-button" onClick={() => ToggleClass("Cable_Crossover")} > More info  </button>
          </div>




          <div class="WorkoutTypeCard">
            <div class="Wcard-details">
              <p class="text-title">Chest Fly</p>
              <p class="text-body">Card Details</p>
            </div>
            <button className="WorkoutTypeCard-button" onClick={() => ToggleClass("Chest_Fly")} > More info  </button>
          </div>

        </div>


        <div className={isActive ? "WorkoutDataContainer Hide" : "WorkoutDataContainer"}>


          <div className="flip-card-container">

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>Previous Workout</p>
                </div>
                <div className="flip-card-back">

                  {

                    FitnessData.map((item) => (



                      <>


                  <div className="input-set">
                          <input type="text" className="input-field" placeholder="Count" value={item.Previous.Set1} />
                          <input type="text" className="input-field" placeholder="Set" value={item.Previous.Set2} />
                          <input type="text" className="input-field" placeholder="Weight" value={item.Previous.Set3} />
                  </div>
                  <div className="input-set">
                          <input type="text" className="input-field" placeholder="Count" value={item.Previous.Count1} />
                          <input type="text" className="input-field" placeholder="Set" value={item.Previous.Count2} />
                          <input type="text" className="input-field" placeholder="Weight" value={item.Previous.Count3} />
                  </div>
                  <div className="input-set">
                          <input type="text" className="input-field" placeholder="Count" value={item.Previous.Weight1} />
                          <input type="text" className="input-field" placeholder="Set" value={item.Previous.Weight2} />
                          <input type="text" className="input-field" placeholder="Weight" value={item.Previous.Weight3} />
                  </div>


                      </>
                    ))

                  }
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>Present Workout</p>
                </div>
                <div className="flip-card-back">
                  <div className="input-set">
                    <input type="text" className="input-field" placeholder="Count" />
                    <input type="text" className="input-field" placeholder="Set" />
                    <input type="text" className="input-field" placeholder="Weight" />
                  </div>
                  <div className="input-set">
                    <input type="text" className="input-field" placeholder="Count" />
                    <input type="text" className="input-field" placeholder="Set" />
                    <input type="text" className="input-field" placeholder="Weight" />
                  </div>
                  <div className="input-set">
                    <input type="text" className="input-field" placeholder="Count" />
                    <input type="text" className="input-field" placeholder="Set" />
                    <input type="text" className="input-field" placeholder="Weight" />
                  </div>
                  <button className="register-btn">Add Set to Current Exercise</button>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>Future Workout</p>
                </div>
                <div className="flip-card-back">
                  <div className="input-set">
                    <input type="text" className="input-field" placeholder="Count" />
                    <input type="text" className="input-field" placeholder="Set" />
                    <input type="text" className="input-field" placeholder="Weight" />
                  </div>
                  <div className="input-set">
                    <input type="text" className="input-field" placeholder="Count" />
                    <input type="text" className="input-field" placeholder="Set" />
                    <input type="text" className="input-field" placeholder="Weight" />
                  </div>
                  <div className="input-set">
                    <input type="text" className="input-field" placeholder="Count" />
                    <input type="text" className="input-field" placeholder="Set" />
                    <input type="text" className="input-field" placeholder="Weight" />
                  </div>
                </div>
              </div>
            </div>

          </div>



        </div>

      </div >
    </animated.div>


  )
}

export default ChestWorkout