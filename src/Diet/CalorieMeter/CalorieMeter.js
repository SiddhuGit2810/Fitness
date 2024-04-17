import React, { useState } from 'react';

import './CalorieMeter.css';

function CalorieMeter() {

    const [height, setheight] = useState('')
    const [weight, setweight] = useState('')
    const [age, setage] = useState('')
    const [gender, setGender] = useState("")
    const [bmr, setbmr] = useState(null)
    const [showcalcmeter, setshowcalcmeter] = useState(false)

    const calculateBMR = () => {
        if (height && weight && age) {
            const Height = parseFloat(height)
            const Weight = parseFloat(weight)
            const Age = parseFloat(age)
            const genderfact = gender === 'male' ? 5 : -161
            const calculate = (10 * Weight) + (6.25 * Height) - (5 * Age) + genderfact;
            setbmr(calculate)
            setshowcalcmeter(true)
            console.log(genderfact);
        } else {
            alert('error');
        }
    }


    return (
        <div className="calorie-calc-container">
            <div className="div">
                {/* <div className="calorie-calc"> */}
                <form className='calorie-meter'>
                    <div className="form-header">
                        <svg width="81" height="47" viewBox="0 0 81 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_i_1245_2826)">
                                <path d="M64.0957 5.40816L47.0152 41.1806C45.5185 44.8605 42.8772 47 39.9717 47C37.5946 47 35.5696 45.8019 34.425 43.9191C33.1924 41.694 33.2804 38.9555 34.7772 36.6448L57.1402 1.8138C58.2848 0.102203 60.5739 -0.496856 62.4228 0.444523C64.2717 1.3859 64.9761 3.5254 64.0957 5.40816ZM70.0826 15.7633C68.762 14.3941 66.5609 14.3085 65.0641 15.5922C63.6554 16.8759 63.5674 19.0154 64.888 20.4702C70.6989 26.632 73.9565 34.6765 73.9565 43.1489C73.9565 45.0317 75.5413 46.5721 77.4783 46.5721C79.4152 46.5721 81 45.0317 81 43.1489C81 32.9649 77.1261 23.2088 70.0826 15.7633ZM43.3174 10.1151C45.2544 10.2862 46.9272 8.91693 47.1033 7.03418C47.2793 5.15142 45.8707 3.5254 43.9337 3.35424C42.7891 3.26866 41.6446 3.18308 40.5 3.18308C18.137 3.18308 0 21.1549 0 43.2345C0 45.1172 1.58478 46.6577 3.52174 46.6577C5.4587 46.6577 7.04348 45.1172 7.04348 43.2345C7.04348 24.9204 22.0109 10.0295 40.5 10.0295C41.4685 9.94389 42.437 10.0295 43.3174 10.1151Z" fill="black" />
                            </g>
                            <defs>
                                <filter id="filter0_i_1245_2826" x="0" y="0" width="81" height="51" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1245_2826" />
                                </filter>
                            </defs>
                        </svg>
                        {/* <br /> */}
                        <h2>CALORIE METER</h2>
                    </div>
                    <div className="meter-content">

                        <label htmlFor="Height">Height</label> <br />
                        <input type="text" placeholder='cm' id='height' value={height}
                            onChange={(e) => setheight(e.target.value)} /> <br />
                        <label htmlFor="weight">Weight</label> <br />
                        <input type="text" placeholder='kg' id='weight' value={weight}
                            onChange={(e) => setweight(e.target.value)} /> <br />
                        <label htmlFor="age">Age</label> <br />
                        <input type="text" id="age" value={age} onChange={(e) => setage(e.target.value)} /> <br/>
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="male" name="gender" value="male" checked={gender === 'male'} onChange={() => setGender('male')} />
                        <label htmlFor="female">Female</label>
                        <input type="radio" id="female" name="gender" value="female" checked={gender === 'female'} onChange={() => setGender('female')} />
                        <br/>
                        <button type='button' id='calculate' onClick={calculateBMR}>Calculate</button>

                        {/* {bmr && <div>Your Basal Metabolic Rate (BMR) is: {bmr.toFixed(2)}</div>} */}


                    </div>
                </form>
            </div>
            {showcalcmeter && (
                <div className="calcmeter">
                    <div>your calorie level is: {bmr}</div>
                </div>
            )}
            <div className='empty'></div>
        </div>
    );
}

export default CalorieMeter;
