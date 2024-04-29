import React, { useContext, useState, useEffect } from "react";
import { useSpring, animated } from '@react-spring/web';
import './LegWorkout.css'
import axios from "axios";
import { EmailContext } from '../../Usecontext/UseContext';


function LegWorkout() {

    const contextEmail = useContext(EmailContext) || {} // Consuming context correctly

    console.log("Email from context:", contextEmail);

    const [PresentWorkoutName, setPresentWorkoutName] = useState("")
    const [error, setError] = useState("")

    const [prevDate, setprevDate] = useState("")

    const [date, setDate] = useState("")
    const [formData, setformData] = useState({

        set1: "",
        count1: "",
        weight1: "",
        set2: "",
        count2: "",
        weight2: "",
        set3: "",
        count3: "",
        weight3: "",
        variant: "",
        date: ""

    })

    console.log(formData)

    const [FitnessData, setFitnessData] = useState([])

    const [isActive, setActive] = useState("false")

    const ToggleClass = async (data) => {
        setActive(!isActive);

        setPresentWorkoutName(data)

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

        setprevDate(PreviousDate)

        var VariantWorkoutData = {

            "variantName": data,
            "dateTime": PreviousDate,
            "email": contextEmail.contextemail

        }


        var WorkOutData = await axios.post(DataUrl, VariantWorkoutData)





        setFitnessData(WorkOutData.data)





    };

    const slideAnimation = useSpring({
        from: { transform: 'translateY(-50px)', opacity: '0' },
        to: { transform: 'translateY(0.8rem)', transition: '0.5s ease-out', opacity: '1' },
    });

    const handleChange = (e) => {

        const { name, value } = e.target;
        setformData({
            ...formData,

            [name]: value,



        });
    };


    useEffect(() => {
        var todayDate = new Date().toISOString().slice(0, 10);
        setDate(todayDate);

        setformData({
            ...formData,
            variant: PresentWorkoutName,
            date: todayDate
        });
    }, [PresentWorkoutName]);




    async function pushData() {




        try {

            console.log("inside try " + FitnessData[0].Previous.DateDa)

            if (new Date(FitnessData[0].Previous.DateDa) < new Date(date)) {

                console.log("in")

                const url = "https://fitness-60022916701.development.catalystserverless.in/server/Data/past"


                console.log(JSON.stringify(formData))






                const response = await axios.post(url, formData);

                console.log(response)

            }
            else {
                setError("Record Already exist for date")

            }


        }
        catch (err) {

            console.log(err)

            if (err.response.data === "Request failed with status 409 and code : DUPLICATE_VALUE , message : Duplicate value for DateDa. Please give a different value") {
                setError("Record Already exist for date")
            }


        }



    }



    return (
        <animated.div style={slideAnimation}>
            <div className="leg-container">

                <div className="WorkoutTypeContainer">


                    <div class="WorkoutTypeCard">
                        <div class="Wcard-details">
                            <p class="text-title">Squats</p>
                            <p class="text-body">Card Details</p>
                        </div>

                        <button className="WorkoutTypeCard-button" onClick={() => ToggleClass("Squats")}> More info  </button>

                    </div>

                    <div class="WorkoutTypeCard">
                        <div class="Wcard-details">
                            <p class="text-title">
                                Leg Press</p>
                            <p class="text-body">Card Details</p>
                        </div>
                        <button className="WorkoutTypeCard-button" onClick={() => ToggleClass("Leg_Press")} > More info  </button>
                    </div>




                    <div class="WorkoutTypeCard">
                        <div class="Wcard-details">
                            <p class="text-title">Lunge</p>
                            <p class="text-body">Card Details</p>
                        </div>
                        <button className="WorkoutTypeCard-button" onClick={() => ToggleClass("Lunge")} > More info  </button>
                    </div>


                    <div class="WorkoutTypeCard">
                        <div class="Wcard-details">
                            <p class="text-title">Dead Lift</p>
                            <p class="text-body">Card Details</p>
                        </div>
                        <button className="WorkoutTypeCard-button" onClick={() => ToggleClass("Dead_Lift")} > More info  </button>
                    </div>

                </div>


                <div className={isActive ? "WorkoutDataContainer Hide" : "WorkoutDataContainer"}>


                    <div className="flip-card-container">

                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <p>Previous Workout   <br />  <h6>{prevDate} </h6></p>
                                </div>
                                <div className="flip-card-back">

                                    {

                                        FitnessData.map((item) => (



                                            <>

                                                <div className="input-set">
                                                    <input type="text" className="input-field" placeholder="Count" value={item.Previous.Set1} />
                                                    <input type="text" className="input-field" placeholder="Set" value={item.Previous.Set2} />
                                                    <input type="text" className="input-field" placeholder="Weight" value={item.Previous.Set2} />
                                                </div>
                                                <div className="input-set">
                                                    <input type="text" className="input-field" placeholder="Count" value={item.Previous.Count1} />
                                                    <input type="text" className="input-field" placeholder="Set" value={item.Previous.Count2} />
                                                    <input type="text" className="input-field" placeholder="Weight" value={item.Previous.Count3} />
                                                </div>
                                                <div className="input-set">
                                                    <input type="text" className="input-field" placeholder="Count" value={item.Previous.Weight1} />
                                                    <input type="text" className="input-field" placeholder="Set" value={item.Previous.Weight2} />
                                                    <input type="text" className="input-field" placeholder="Weight" value={item.Previous.Weight2} />
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
                                    <p>Present Workout

                                        <h6> {PresentWorkoutName} </h6>
                                        <h6>{error}</h6>
                                    </p>
                                </div>
                                <div className="flip-card-back">
                                    <div className="input-set">

                                        <input type="text" className="input-field" placeholder="Set" name="set1" value={formData.set1} onChange={handleChange} />
                                        <input type="text" className="input-field" placeholder="Set" name="set2" value={formData.set2} onChange={handleChange} />
                                        <input type="text" className="input-field" placeholder="Set" name="set3" value={formData.set3} onChange={handleChange} />

                                    </div>
                                    <div className="input-set">
                                        <input type="text" className="input-field" placeholder="Count" name="count1" value={formData.count1} onChange={handleChange} />
                                        <input type="text" className="input-field" placeholder="Count" name="count2" value={formData.count2} onChange={handleChange} />
                                        <input type="text" className="input-field" placeholder="Count" name="count3" value={formData.count3} onChange={handleChange} />
                                    </div>
                                    <div className="input-set">
                                        <input type="text" className="input-field" placeholder="Weight" name="weight1" value={formData.weight1} onChange={handleChange} />
                                        <input type="text" className="input-field" placeholder="Weight" name="weight2" value={formData.weight2} onChange={handleChange} />
                                        <input type="text" className="input-field" placeholder="Weight" name="weight3" value={formData.weight3} onChange={handleChange} />
                                    </div>
                                    <button className="register-btn" onClick={() => pushData()} >Add Set to Current Exercise</button>
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

export default LegWorkout