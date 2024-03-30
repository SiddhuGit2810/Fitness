import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web';

function Shoulder() {

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
      <div className="container">

        <div className="WorkoutTypeContainer">


          <div class="WorkoutTypeCard">
            <div class="Wcard-details">
              <p class="text-title">Dumbell Shoulder Press</p>
              <p class="text-body">Card Details</p>
            </div>

            <button className="WorkoutTypeCard-button" onClick={ToggleClass}> More info  </button>

          </div>

          <div class="WorkoutTypeCard">
            <div class="Wcard-details">
              <p class="text-title">
                Front raise</p>
              <p class="text-body">Card Details</p>
            </div>
            <button className="WorkoutTypeCard-button" onClick={ToggleClass} > More info  </button>
          </div>




          <div class="WorkoutTypeCard">
            <div class="Wcard-details">
              <p class="text-title">Overhead raise</p>
              <p class="text-body">Card Details</p>
            </div>
            <button className="WorkoutTypeCard-button" onClick={ToggleClass} > More info  </button>
          </div>




          <div class="WorkoutTypeCard">
            <div class="Wcard-details">
              <p class="text-title">Laternal Raise</p>
              <p class="text-body">Card Details</p>
            </div>
            <button className="WorkoutTypeCard-button" onClick={ToggleClass} > More info  </button>
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

      </div>
    </animated.div>
  )
}

export default Shoulder