import React from 'react'
import './homepage.css'
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';

function HomePage() {


    const slideAnimation = useSpring({
        from: { transform: 'translateY(-1500px)' , opacity: '-20'  },
        to: { transform: 'translateY(1rem)' , transition : '1s ease-out' , opacity: '1' },
        
      });
    

  const nav = useNavigate()
  return (

    
    <animated.div style={slideAnimation}>
<div className="container">
  <div className="card-container">
      <div className="Abs-card">
        <div className="Abs-card-content">
          <h2>Abs Workout</h2>
          <p>Build your Abs Like Pro</p>
        </div>
        <div className="arrow-button">
            <button onClick={() => nav('/AbsWorkout')}><svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1178_3683)">
              <path d="M28.7236 8.70059C29.1105 8.3065 29.1047 7.67336 28.7106 7.28644L22.2885 0.981122C21.8944 0.594197 21.2613 0.600006 20.8744 0.994096C20.4874 1.38819 20.4932 2.02132 20.8873 2.40825L26.5958 8.01297L20.9911 13.7215C20.6042 14.1156 20.61 14.7487 21.0041 15.1356C21.3982 15.5226 22.0313 15.5168 22.4183 15.1227L28.7236 8.70059ZM3.00917 9.2294L28.0192 8.99996L28.0008 7.00004L2.99083 7.22948L3.00917 9.2294Z" fill="black" />
            </g>
            <defs>
              <filter id="filter0_d_1178_3683" x="-0.00878906" y="0.694336" width="32.0186" height="22.7275" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="5" />
                <feGaussianBlur stdDeviation="1.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1178_3683" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1178_3683" result="shape" />
              </filter>
            </defs>
          </svg></button>
          

        </div>
      </div>

      <div className="chest-card">
        <div className="chest-card-content">
          <h2>Chest Workout</h2>
          <p>Make your Chest look Great!</p>
        </div>
        <div className="arrow-button">
            <button onClick={() => nav('/ChestWorkout')}><svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1178_3683)">
              <path d="M28.7236 8.70059C29.1105 8.3065 29.1047 7.67336 28.7106 7.28644L22.2885 0.981122C21.8944 0.594197 21.2613 0.600006 20.8744 0.994096C20.4874 1.38819 20.4932 2.02132 20.8873 2.40825L26.5958 8.01297L20.9911 13.7215C20.6042 14.1156 20.61 14.7487 21.0041 15.1356C21.3982 15.5226 22.0313 15.5168 22.4183 15.1227L28.7236 8.70059ZM3.00917 9.2294L28.0192 8.99996L28.0008 7.00004L2.99083 7.22948L3.00917 9.2294Z" fill="black" />
            </g>
            <defs>
              <filter id="filter0_d_1178_3683" x="-0.00878906" y="0.694336" width="32.0186" height="22.7275" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="5" />
                <feGaussianBlur stdDeviation="1.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1178_3683" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1178_3683" result="shape" />
              </filter>
            </defs>
          </svg></button>


        </div>
      </div>

        <div className="leg-card">
          <div className="leg-card-content">
            <h2>Leg Workout</h2>
            <p>Don't skip the leg day</p>
          </div>
          <div className="arrow-button">
            <button onClick={() => nav('/LegWorkout')}><svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_1178_3683)">
                <path d="M28.7236 8.70059C29.1105 8.3065 29.1047 7.67336 28.7106 7.28644L22.2885 0.981122C21.8944 0.594197 21.2613 0.600006 20.8744 0.994096C20.4874 1.38819 20.4932 2.02132 20.8873 2.40825L26.5958 8.01297L20.9911 13.7215C20.6042 14.1156 20.61 14.7487 21.0041 15.1356C21.3982 15.5226 22.0313 15.5168 22.4183 15.1227L28.7236 8.70059ZM3.00917 9.2294L28.0192 8.99996L28.0008 7.00004L2.99083 7.22948L3.00917 9.2294Z" fill="black" />
              </g>
              <defs>
                <filter id="filter0_d_1178_3683" x="-0.00878906" y="0.694336" width="32.0186" height="22.7275" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="5" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1178_3683" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1178_3683" result="shape" />
                </filter>
              </defs>
            </svg></button>


          </div>
        </div>

        <div className="Shoulder-card">
          <div className="shoulder-card-content">
            <h2>Shoulder Workout</h2>
            <p>Make your Shoulder big, bad and even badder</p>
          </div>
          <div className="arrow-button">
            <button onClick={() => nav('/ShoulderWorkout')}><svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_1178_3683)">
                <path d="M28.7236 8.70059C29.1105 8.3065 29.1047 7.67336 28.7106 7.28644L22.2885 0.981122C21.8944 0.594197 21.2613 0.600006 20.8744 0.994096C20.4874 1.38819 20.4932 2.02132 20.8873 2.40825L26.5958 8.01297L20.9911 13.7215C20.6042 14.1156 20.61 14.7487 21.0041 15.1356C21.3982 15.5226 22.0313 15.5168 22.4183 15.1227L28.7236 8.70059ZM3.00917 9.2294L28.0192 8.99996L28.0008 7.00004L2.99083 7.22948L3.00917 9.2294Z" fill="black" />
              </g>
              <defs>
                <filter id="filter0_d_1178_3683" x="-0.00878906" y="0.694336" width="32.0186" height="22.7275" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="5" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1178_3683" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1178_3683" result="shape" />
                </filter>
              </defs>
            </svg></button>


          </div>
        </div>
      </div>
</div>

</animated.div>

  )
}

export default HomePage