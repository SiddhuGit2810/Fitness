import React from 'react'
import './homepage.css'
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';

function HomePage() {


  const slideAnimation = useSpring({
    from: { transform: 'translateY(-50px)', opacity: '0' },
    to: { transform: 'translateY(0.8rem)', transition: '0.5s ease-out', opacity: '1' },
  });


  const nav = useNavigate()
  return (


    <animated.div style={slideAnimation}>
      <div className="container">
        <div className="homePageBox">
          <div className="Abs-card">
            <div className="Abs-card-content">
              <h2>Abs Workout</h2>
              <p>Build your Abs Like Pro</p>
            </div>
            <div className="arrow-button">
              <button onClick={() => nav('/AbsWorkout')}><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18.2572" cy="18.2575" r="16.6361" transform="rotate(-90 18.2572 18.2575)" fill="white" stroke="black" stroke-width="2.08134" stroke-linejoin="round" />
                <path d="M23.9756 18.7773L10.4588 18.7773" stroke="black" stroke-width="2.08134" stroke-linejoin="round" />
                <path d="M18.7773 12.5395C21.2136 14.9758 22.5796 16.3418 25.0159 18.7781L18.7773 25.0166" stroke="black" stroke-width="2.08134" stroke-linejoin="round" />
              </svg>
</button>


            </div>
          </div>

          <div className="chest-card">
            <div className="chest-card-content">
              <h2>Chest Workout</h2>
              <p>Make your Chest look Great!</p>
            </div>
            <div className="arrow-button">
              <button onClick={() => nav('/ChestWorkout')}><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18.2572" cy="18.2575" r="16.6361" transform="rotate(-90 18.2572 18.2575)" fill="white" stroke="black" stroke-width="2.08134" stroke-linejoin="round" />
                <path d="M23.9756 18.7773L10.4588 18.7773" stroke="black" stroke-width="2.08134" stroke-linejoin="round" />
                <path d="M18.7773 12.5395C21.2136 14.9758 22.5796 16.3418 25.0159 18.7781L18.7773 25.0166" stroke="black" stroke-width="2.08134" stroke-linejoin="round" />
              </svg>
</button>


            </div>
          </div>

          <div className="leg-card">
            <div className="leg-card-content">
              <h2>Leg Workout</h2>
              <p>Don't skip the leg day</p>
            </div>
            <div className="arrow-button">
              <button onClick={() => nav('/LegWorkout')}><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18.2572" cy="18.2575" r="16.6361" transform="rotate(-90 18.2572 18.2575)" fill="white" stroke="black" stroke-width="2.08134" stroke-linejoin="round" />
                <path d="M23.9756 18.7773L10.4588 18.7773" stroke="black" stroke-width="2.08134" stroke-linejoin="round" />
                <path d="M18.7773 12.5395C21.2136 14.9758 22.5796 16.3418 25.0159 18.7781L18.7773 25.0166" stroke="black" stroke-width="2.08134" stroke-linejoin="round" />
              </svg>
</button>


            </div>
          </div>

          <div className="Shoulder-card">
            <div className="shoulder-card-content">
              <h2>Shoulder Workout</h2>
              <p>Make your Shoulder big, bad and even badder</p>
            </div>
            <div className="arrow-button">
              <button onClick={() => nav('/ShoulderWorkout')}><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18.2572" cy="18.2575" r="16.6361" transform="rotate(-90 18.2572 18.2575)" fill="white" stroke="black" stroke-width="2.08134" stroke-linejoin="round" />
                <path d="M23.9756 18.7773L10.4588 18.7773" stroke="black" stroke-width="2.08134" stroke-linejoin="round" />
                <path d="M18.7773 12.5395C21.2136 14.9758 22.5796 16.3418 25.0159 18.7781L18.7773 25.0166" stroke="black" stroke-width="2.08134" stroke-linejoin="round" />
              </svg>
</button>


            </div>
          </div>
        </div>
      </div>

    </animated.div>

  )
}

export default HomePage