import React, { useContext, useState, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web';
import "./ChestWorkout.css"
import axios from "axios";
import { EmailContext } from '../../Usecontext/UseContext';
import Modal from "../Modal/Modal";


function ChestWorkout() {

  const contextEmail = useContext(EmailContext) || {}

  // console.log("Email from context:", contextEmail);

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

  const [openModal, setopenModal] = useState(false)

  const [cxVariantName, setcxVariantName] = useState([])
  const [cxVarianttype, setcxVariantType] = useState([])

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

  const [isActive, setActive] = useState(true)


  const ToggleClass = async (data) => {
    setActive(!isActive);

    // var element = document.getElementById("flipcard");
    // element.scrollIntoView();
    // element.scrollIntoView(false);
    // element.scrollIntoView({ block: "end" });
    // element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

    setPresentWorkoutName(data)

    var DateUrl = "https://fitness-60022916701.development.catalystserverless.in/server/ZCQL/getVariantDate"

    var DataUrl = "https://fitness-60022916701.development.catalystserverless.in/server/ZCQL/getVaraiantData"

    var VariantData = {
      "variantName": data,
      "email": contextEmail.contextemail
    }

    const FitnessDate = await axios.post(DateUrl, VariantData)

    const dates = FitnessDate.data.map(element => element.Previous.DateDa);
    // console.log(dates)

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

    console.log(WorkOutData)



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

  useEffect(() => {

    async function component() {
      const url = "https://fitness-60022916701.development.catalystserverless.in/server/CxVariants/getVariant"

      const body = {
        "email": contextEmail.contextemail,
        "varianttype": "chest"
      }


      const data = await axios.post(url, body)

      console.log("cx")



      const cxVariantName = data.data

      setcxVariantName(cxVariantName)
      setcxVariantType(cxVarianttype)

      console.log(cxVariantName)
      console.log(cxVarianttype)

    }

    //

    component()

  }, [])


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
      <div className="chest-container">

        <div className="WorkoutTypeContainer">


          <div class="WorkoutTypeCard">
            <div class="Wcard-details">
              <p class="text-title">Incline Pushups</p>
              <p class="text-body">Card Details</p>
            </div>

            {/* <button className="WorkoutTypeCard-button" onClick={() => ToggleClass("Incline_Pushups")}> More info  </button> */}

            <a className="WorkoutTypeCard-button" href="#popup2" onClick={() => ToggleClass("Incline_Pushups")}> More Info</a>

          </div>

          <div class="WorkoutTypeCard">
            <div class="Wcard-details">
              <p class="text-title">
                Plank</p>
              <p class="text-body">Card Details</p>
            </div>
            {/* <button className="WorkoutTypeCard-button" onClick={() => ToggleClass("Plank")} > More info  </button> */}
            <a className="WorkoutTypeCard-button" href="#popup2" onClick={() => ToggleClass("Plank")}> More Info</a>
          </div>




          <div class="WorkoutTypeCard">
            <div class="Wcard-details">
              <p class="text-title">Cable Crossover</p>
              <p class="text-body">Card Details</p>
            </div>
            {/* <button className="WorkoutTypeCard-button" onClick={() => ToggleClass("Cable_Crossover")} > More info  </button> */}
            <a className="WorkoutTypeCard-button" href="#popup2" onClick={() => ToggleClass("Cable_Crossover")}> More Info</a>
          </div>




          <div class="WorkoutTypeCard">
            <div class="Wcard-details">
              <p class="text-title">Chest Fly</p>
              <p class="text-body">Card Details</p>
            </div>
            {/* <button className="WorkoutTypeCard-button" onClick={() => ToggleClass("Chest_Fly")} > More info  </button> */}
            <a className="WorkoutTypeCard-button" href="#popup2" onClick={() => ToggleClass("Chest_Fly")}> More Info</a>
          </div>


          {

            cxVariantName.map((e) => (<div class="WorkoutTypeCard ">
              <div class="Wcard-details">
                <p class="text-title cx">{e.CxVariants.VariantName}</p>
                <p class="text-body">Card Details</p>
              </div>

              {/* <button className="WorkoutTypeCard-button" onClick={() => ToggleClass(e.CxVariants.VariantName)} > More info  </button> */}
              <a className="WorkoutTypeCard-button" href="#popup2" onClick={() => ToggleClass(e.CxVariants.VariantName)} >More Info</a>

            </div>))



          }

          <div class="WorkoutTypeCard">
            <div class="Wcard-details">
              <p class="text-title">Add Variant</p>

            </div>

            {/* <button className="WorkoutTypeCard-button" onClick={() => setopenModal(true)} > Add info  </button>
            <Modal open={openModal} onClose={() => setopenModal(false)} /> */}
            <a className="WorkoutTypeCard-button" href="#popup3"  >Add variant</a>
          </div>

        </div>

        <div id='popup2' className='popup-container popup-style-2'>
          <div className="popup-content">
            <a href="#" className='close'>&times;</a>
            <div className="WorkoutDataContainer">
              <div className="flip-card-container" id='flipcard'>

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
        </div>




        {/* <div className="flip-card-container">

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

          </div> */}

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


  )
}

export default ChestWorkout