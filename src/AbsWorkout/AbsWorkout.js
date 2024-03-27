import React, { useState } from "react";
import './AbsWorkout.css'
import { useSpring, animated } from '@react-spring/web';


function AbsWorkout() {

  const [isActive, setActive] = useState("false")

  const ToggleClass = () => {
    setActive(!isActive);
  };

  const slideAnimation = useSpring({
    from: { transform: 'translateY(-50px)', opacity: '0' },
    to: { transform: 'translateY(0.8rem)', transition: '0.5s ease-out', opacity: '1' },
  });


  return (

    <animated.div style={slideAnimation}>
    <div className="MainContainer">

      <div className="WorkoutTypeContainer">


        <div class="WorkoutTypeCard">
          <div class="Wcard-details">
            <p class="text-title">Mountain Climbers</p>
            <p class="text-body">Card Details</p>
          </div>

          <button className="WorkoutTypeCard-button" onClick={ToggleClass} > More info  </button>

        </div>













        <div class="WorkoutTypeCard">
          <div class="Wcard-details">
            <p class="text-title">
              Plank</p>
            <p class="text-body">Card Details</p>
          </div>
          <a class="WorkoutTypeCard-button" href="#link">More info</a>
        </div>




        <div class="WorkoutTypeCard">
          <div class="Wcard-details">
            <p class="text-title">Bicycle crunch</p>
            <p class="text-body">Card Details</p>
          </div>
          <a class="WorkoutTypeCard-button" href="#link">More info</a>
        </div>




        <div class="WorkoutTypeCard">
          <div class="Wcard-details">
            <p class="text-title">Deadbug</p>
            <p class="text-body">Card Details</p>
          </div>
          <a class="WorkoutTypeCard-button" href="#link">More info</a>
        </div>

      </div>


      <div className={isActive ? "WorkoutDataContainer Hide" : "WorkoutDataContainer"}>

          <div class="card-container">
            <div class="data-card">
              <div class="img-content">
                <h1>Previous Work</h1>
              </div>
              <div class="content">
                <p class="heading">Card Hover</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipii
                  voluptas ten mollitia pariatur odit, ab
                  minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                  necessitatibus dignissimos molestias.
                </p>
              </div>
            </div>
          </div>

          <div class="card-container">
            <div class="data-card">
              <div class="img-content">
                <h1>Present Work</h1>
              </div>
              <div class="content">
                <p class="heading">Card Hover</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipii
                  voluptas ten mollitia pariatur odit, ab
                  minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                  necessitatibus dignissimos molestias.
                </p>
              </div>
            </div>
          </div>

          <div class="card-container">
            <div class="data-card">
              <div class="img-content">
                <h1>Future Work</h1>
              </div>
              <div class="content">
                <p class="heading">Card Hover</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipii
                  voluptas ten mollitia pariatur odit, ab
                  minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                  necessitatibus dignissimos molestias.
                </p>
              </div>
            </div>
          </div>



        {/* <div className="Previous">

          <div class="hover-card">
            <div class="hover-card-inner">
              <div class="hover-card-front">
                <p class="title">Previous Workout</p>

              </div>
              <div class="hover-card-back">

                <div className="group-set1">
                  <div class="Set1">
                    <br />
                    <br />
                    <input type="text" placeholder="Count" id="count1" />
                    <br />
                    <br />
                    <input type="text" placeholder="Set" id="set1" />
                    <br />
                    <br />
                    <input type="text" placeholder="Weight" id="weight1" />
                  </div>

                  <div class="Set2">
                    <br />
                    <br />
                    <input type="text" placeholder="Count" id="count1" />
                    <br />
                    <br />
                    <input type="text" placeholder="Set" id="set1" />
                    <br />
                    <br />
                    <input type="text" placeholder="Weight" id="weight1" />
                  </div>

                  <div class="Set3">
                    <br />
                    <br />
                    <input type="text" placeholder="Count" id="count1" />
                    <br />
                    <br />
                    <input type="text" placeholder="Set" id="set1" />
                    <br />
                    <br />
                    <input type="text" placeholder="Weight" id="weight1" />
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>

        <div className="Present">

          <div class="hover-card">
            <div class="hover-card-inner">
              <div class="hover-card-front">
                <p class="title">Present Workout</p>

              </div>
              <div class="hover-card-back">

                <div className="group-set1">
                  <div class="Set1">
                    <br />
                    <br />
                    <input type="text" placeholder="Count" id="count1" />
                    <br />
                    <br />
                    <input type="text" placeholder="Set" id="set1" />
                    <br />
                    <br />
                    <input type="text" placeholder="Weight" id="weight1" />
                  </div>

                  <div class="Set2">
                    <br />
                    <br />
                    <input type="text" placeholder="Count" id="count1" />
                    <br />
                    <br />
                    <input type="text" placeholder="Set" id="set1" />
                    <br />
                    <br />
                    <input type="text" placeholder="Weight" id="weight1" />
                  </div>

                  <div class="Set3">
                    <br />
                    <br />
                    <input type="text" placeholder="Count" id="count1" />
                    <br />
                    <br />
                    <input type="text" placeholder="Set" id="set1" />
                    <br />
                    <br />
                    <input type="text" placeholder="Weight" id="weight1" />
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>




        <div className="Future">

          <div class="hover-card">
            <div class="hover-card-inner">
              <div class="hover-card-front">
                <p class="title">Future  <br></br> Workout</p>

              </div>
              <div class="hover-card-back">

                <div className="group-set1">
                  <div class="Set1">
                    <br />
                    <br />
                    <input type="text" placeholder="Count" id="count1" />
                    <br />
                    <br />
                    <input type="text" placeholder="Set" id="set1" />
                    <br />
                    <br />
                    <input type="text" placeholder="Weight" id="weight1" />
                  </div>

                  <div class="Set2">
                    <br />
                    <br />
                    <input type="text" placeholder="Count" id="count1" />
                    <br />
                    <br />
                    <input type="text" placeholder="Set" id="set1" />
                    <br />
                    <br />
                    <input type="text" placeholder="Weight" id="weight1" />
                  </div>

                  <div class="Set3">
                    <br />
                    <br />
                    <input type="text" placeholder="Count" id="count1" />
                    <br />
                    <br />
                    <input type="text" placeholder="Set" id="set1" />
                    <br />
                    <br />
                    <input type="text" placeholder="Weight" id="weight1" />
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div> */}

      </div>

    </div>
    </animated.div>

  )
}

export default AbsWorkout