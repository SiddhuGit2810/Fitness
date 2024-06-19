import React, { useContext, useState, useEffect } from "react";
import { useSpring, animated } from '@react-spring/web';
import './LegWorkout.css';
import axios from "axios";
import { EmailContext } from '../../Usecontext/UseContext';
import Modal from "../Modal/Modal";

function LegWorkout() {


    const { contextEmail } = useContext(EmailContext) || {};

    ///add variant popup start


    const [variantName, setVariantName] = useState('');
    const [variantType, setVariantType] = useState('');




    const handleSubmit = async (e) => {
        e.preventDefault();
        await pushCxVariant();
        setVariantName('');
        setVariantType('');

    };


    async function pushCxVariant() {
        try {
            const url = "https://fitness-60022916701.development.catalystserverless.in/server/CxVariants/CxVariant";
            const cxBody = {
                "variant_Name": variantName,
                "email": contextEmail.contextemail,
                "varianttype": variantType
            };
            const cxResponse = await axios.post(url, cxBody);
            console.log(cxResponse);
        } catch (error) {
            console.error("Error creating variant", error);
        }
    }

    /// add variant popup end

    const [openModal, setOpenModal] = useState(false);
    const [cxVariantName, setCxVariantName] = useState([]);
    const [presentWorkoutName, setPresentWorkoutName] = useState("");
    const [error, setError] = useState("");
    const [prevDate, setPrevDate] = useState("");
    const [date, setDate] = useState("");
    const [formData, setFormData] = useState({
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
    });

    const [fitnessData, setFitnessData] = useState([]);
    const [isActive, setIsActive] = useState(false);

    const toggleClass = async (data) => {
        setIsActive(!isActive);

        // const element = document.getElementById("flipcard");
        // element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

        setPresentWorkoutName(data);

        const DateUrl = "https://fitness-60022916701.development.catalystserverless.in/server/ZCQL/getVariantDate";
        const DataUrl = "https://fitness-60022916701.development.catalystserverless.in/server/ZCQL/getVaraiantData";

        const variantData = {
            variantName: data,
            email: contextEmail
        };

        const fitnessDate = await axios.post(DateUrl, variantData);
        const dates = fitnessDate.data.map(element => element.Previous.DateDa);
        console.log(dates);

        const todayDate = new Date().toISOString().slice(0, 10);
        const array = dates.map(item => {
            const startDate = new Date(item);
            const endDate = new Date(todayDate);
            const differenceMs = endDate - startDate;
            return Math.floor(differenceMs / (1000 * 60 * 60 * 24));
        });

        const positiveNumbers = array.filter(number => number >= 0);
        const lowest = Math.min(...positiveNumbers);
        const index = array.indexOf(lowest);
        const previousDate = dates[index];

        setPrevDate(previousDate);

        const variantWorkoutData = {
            variantName: data,
            dateTime: previousDate,
            email: contextEmail
        };

        const workoutData = await axios.post(DataUrl, variantWorkoutData);
        setFitnessData(workoutData.data);
    };

    const slideAnimation = useSpring({
        from: { transform: 'translateY(-50px)', opacity: '0' },
        to: { transform: 'translateY(0.8rem)', transition: '0.5s ease-out', opacity: '1' },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    useEffect(() => {
        const todayDate = new Date().toISOString().slice(0, 10);
        setDate(todayDate);
        setFormData(prevState => ({
            ...prevState,
            variant: presentWorkoutName,
            date: todayDate
        }));
    }, [presentWorkoutName]);

    useEffect(() => {
        async function fetchData() {
            const url = "https://fitness-60022916701.development.catalystserverless.in/server/CxVariants/getVariant";
            const body = {
                email: contextEmail,
                varianttype: "Leg"
            };
            const data = await axios.post(url, body);
            setCxVariantName(data.data);
        }
        fetchData();
    }, [contextEmail]);

    const pushData = async () => {
        try {
            if (new Date(fitnessData[0]?.Previous?.DateDa) < new Date(date)) {
                const url = "https://fitness-60022916701.development.catalystserverless.in/server/Data/past";
                await axios.post(url, formData);
            } else {
                setError("Record already exists for this date");
            }
        } catch (err) {
            if (err.response?.data === "Request failed with status 409 and code : DUPLICATE_VALUE , message : Duplicate value for DateDa. Please give a different value") {
                setError("Record already exists for this date");
            }
        }
    };

    return (
        <animated.div style={slideAnimation}>
            <div className="leg-container">
                <div className="WorkoutTypeContainer">
                    <div className="WorkoutTypeCard">
                        <div className="Wcard-details">
                            <p className="text-title">Squats</p>
                            <p className="text-body">Card Details</p>
                        </div>
                        <a className="WorkoutTypeCard-button" href="#popup2" onClick={() => toggleClass("Squats")}>More Info</a>
                    </div>
                    <div className="WorkoutTypeCard">
                        <div className="Wcard-details">
                            <p className="text-title">Leg Press</p>
                            <p className="text-body">Card Details</p>
                        </div>
                        <a className="WorkoutTypeCard-button" href="#popup2" onClick={() => toggleClass("Leg_Press")}>More Info</a>
                    </div>
                    <div className="WorkoutTypeCard">
                        <div className="Wcard-details">
                            <p className="text-title">Lunge</p>
                            <p className="text-body">Card Details</p>
                        </div>
                        <a className="WorkoutTypeCard-button" href="#popup2" onClick={() => toggleClass("Lunge")}>More Info</a>
                    </div>
                    <div className="WorkoutTypeCard">
                        <div className="Wcard-details">
                            <p className="text-title">Dead Lift</p>
                            <p className="text-body">Card Details</p>
                        </div>
                        <a className="WorkoutTypeCard-button" href="#popup2" onClick={() => toggleClass("Dead_Lift")}>More Info</a>
                    </div>
                    {cxVariantName.map((e) => (
                        <div className="WorkoutTypeCard" key={e.CxVariants.VariantName}>
                            <div className="Wcard-details">
                                <p className="text-title cx">{e.CxVariants.VariantName}</p>
                                <p className="text-body">Card Details</p>
                            </div>
                            <a className="WorkoutTypeCard-button" href="#popup2" onClick={() => toggleClass(e.CxVariants.VariantName)}>More Info</a>
                        </div>
                    ))}
                    <div className="WorkoutTypeCard">
                        <div className="Wcard-details">
                            <p className="text-title">Add Variant</p>
                        </div>
                        {/* <button className="WorkoutTypeCard-button" onClick={() => setOpenModal(true)}>Add Info</button>
                        <Modal open={openModal} onClose={() => setOpenModal(false)} /> */}
                        <a className="WorkoutTypeCard-button" href="#popup3"  >Add variant</a>
                    </div>
                </div>
                <div id="popup2" className="popup-container popup-style-2">
                    <div className="popup-content">
                        <a href="#" className="close">&times;</a>
                    </div>
                    <div className="WorkoutDataContainer">
                        <div className="flip-card-container" id="flipcard">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <p>Previous Workout<br /><h6>{prevDate}</h6></p>
                                    </div>
                                    <div className="flip-card-back">
                                        {fitnessData.map((item, index) => (
                                            <div key={index}>
                                                <div className="input-set">
                                                    <input type="text" className="input-field" placeholder="Count" value={item.Previous.Set1} readOnly />
                                                    <input type="text" className="input-field" placeholder="Set" value={item.Previous.Set2} readOnly />
                                                    <input type="text" className="input-field" placeholder="Weight" value={item.Previous.Set3} readOnly />
                                                </div>
                                                <div className="input-set">
                                                    <input type="text" className="input-field" placeholder="Count" value={item.Previous.Count1} readOnly />
                                                    <input type="text" className="input-field" placeholder="Set" value={item.Previous.Count2} readOnly />
                                                    <input type="text" className="input-field" placeholder="Weight" value={item.Previous.Count3} readOnly />
                                                </div>
                                                <div className="input-set">
                                                    <input type="text" className="input-field" placeholder="Count" value={item.Previous.Weight1} readOnly />
                                                    <input type="text" className="input-field" placeholder="Set" value={item.Previous.Weight2} readOnly />
                                                    <input type="text" className="input-field" placeholder="Weight" value={item.Previous.Weight3} readOnly />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="flip-card">
                            <div className="card-details">
                                <p className="text-title">{presentWorkoutName}</p>
                            </div>
                            <form className="input-container" onSubmit={pushData}>
                                <div className="input-set">
                                    <input type="number" className="input-field" placeholder="Set 1" name="set1" value={formData.set1} onChange={handleChange} required />
                                    <input type="number" className="input-field" placeholder="Count 1" name="count1" value={formData.count1} onChange={handleChange} required />
                                    <input type="number" className="input-field" placeholder="Weight 1" name="weight1" value={formData.weight1} onChange={handleChange} required />
                                </div>
                                <div className="input-set">
                                    <input type="number" className="input-field" placeholder="Set 2" name="set2" value={formData.set2} onChange={handleChange} required />
                                    <input type="number" className="input-field" placeholder="Count 2" name="count2" value={formData.count2} onChange={handleChange} required />
                                    <input type="number" className="input-field" placeholder="Weight 2" name="weight2" value={formData.weight2} onChange={handleChange} required />
                                </div>
                                <div className="input-set">
                                    <input type="number" className="input-field" placeholder="Set 3" name="set3" value={formData.set3} onChange={handleChange} required />
                                    <input type="number" className="input-field" placeholder="Count 3" name="count3" value={formData.count3} onChange={handleChange} required />
                                    <input type="number" className="input-field" placeholder="Weight 3" name="weight3" value={formData.weight3} onChange={handleChange} required />
                                </div>
                                <div className="input-set">
                                    <input type="text" className="input-field" placeholder="Date" value={date} readOnly />
                                </div>
                                {error && <div className="error">{error}</div>}
                                <button type="submit" className="submit-button">Submit</button>
                            </form>
                        </div> */}

                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <p>Present Workout

                                        <h6> {presentWorkoutName} </h6>
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
                                    <button className="register-btn" onClick={() => pushData()}  >Add set to workout</button>
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

                <div id="popup3" className="popup-container popup-style-2">



                    <div className="popup-card">
                        <div className="popup-close">

                            <a href="#" className="close">&times;</a>


                        </div>
                        <form onSubmit={handleSubmit} className="popup-form">
                            <label htmlFor="variantName">Please enter the variant Name</label>
                            <input
                                type="text"
                                id="variantName"
                                value={variantName}
                                onChange={(e) => setVariantName(e.target.value)}
                                required
                            />
                            <label htmlFor="variantType">Enter the variant type</label>
                            <input
                                type="text"
                                id="variantType"
                                value={variantType}
                                onChange={(e) => setVariantType(e.target.value)}
                                required
                            />
                            <button type="submit" className="popup-button">
                                Create
                            </button>
                        </form>
                    </div>




                </div>

            </div>
        </animated.div>
    );
}

export default LegWorkout;
