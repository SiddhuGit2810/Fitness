import React from "react";
import './AbsWorkout.css'
import Card from 'react-bootstrap/Card';

function AbsWorkout() {
    return (

        <div className="container">
            <div className="container1">
                <div class="centerdiv">
                    <h4>Exercise</h4>
                    <br />
                    <input type="text" id="exercise"></input>
                </div>

                <div class="card" id="card1">Yesterday's Workout:

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

                <div class="card" id="card2">Today's Workout:

                    <div class="group-set2">
                        <div class="set1">
                            <br />
                            <br />
                            <input type="text" placeholder="Count" id="count2" />
                            <br />
                            <br />
                            <input type="text" placeholder="Set" id="set2" />
                            <br />
                            <br />
                            <input type="text" placeholder="Weight" id="weight2" />
                        </div>

                        <div class="set2">
                            <br />
                            <br />
                            <input type="text" placeholder="Count" id="count2" />
                            <br />
                            <br />
                            <input type="text" placeholder="Set" id="set2" />
                            <br />
                            <br />
                            <input type="text" placeholder="Weight" id="weight2" />
                        </div>

                        <div class="set3">
                            <br />
                            <br />
                            <input type="text" placeholder="Count" id="count2" />
                            <br />
                            <br />
                            <input type="text" placeholder="Set" id="set2" />
                            <br />
                            <br />
                            <input type="text" placeholder="Weight" id="weight2" />
                        </div>
                    </div>
                </div>

                <div class="card" id="card3">Tommorrow's  Workout:

                    <div class="group-set3">
                        <div class="set1">
                            <br />
                            <br />
                            <input type="text" placeholder="Count" id="count3" />
                            <br />
                            <br />
                            <input type="text" placeholder="Set" id="set3" />
                            <br />
                            <br />
                            <input type="text" placeholder="Weight" id="weight3" />
                        </div>

                        <div class="set2">
                            <br />
                            <br />
                            <input type="text" placeholder="Count" id="count3" />
                            <br />
                            <br />
                            <input type="text" placeholder="Set" id="set3" />
                            <br />
                            <br />
                            <input type="text" placeholder="Weight" id="weight3" />
                        </div>

                        <div class="set3">
                            <br />
                            <br />
                            <input type="text" placeholder="Count" id="count3" />
                            <br />
                            <br />
                            <input type="text" placeholder="Set" id="set3" />
                            <br />
                            <br />
                            <input type="text" placeholder="Weight" id="weight3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AbsWorkout