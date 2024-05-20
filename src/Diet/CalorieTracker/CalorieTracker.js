import React, { useContext, useEffect, useState } from 'react';
import './CalorieTracker.css';
import axios from 'axios';

import { EmailContext } from '../../Usecontext/UseContext';

function CalorieTracker() {



    const [mapTableData, setmapTableData] = useState([])

    const context = useContext(EmailContext) || {}




    const url = "https://fitness-60022916701.development.catalystserverless.in/server/ZCQL_DIET/tabledetails";


    useEffect(() => {
        const tabledata = async () => {

            const body = {

                "email": context.contextemail
            }
            const data = await axios.post(url, body)

            const mapTableData = data.data

            setmapTableData(mapTableData)

            console.log(mapTableData)
            


        }

        tabledata()

    }, [])











    return (
        <div>

            <div className="table-container">

                <table>

                    <thead>

                        <tr>
                            <th>Date</th>


                            <th>Food</th>
                            <th>Calorie</th>
                            <th>Protein</th>
                        </tr>
                    </thead>

                    {mapTableData.map((e) => (

                        <>


                            <tbody className="table-body-container" >
                                <tr>
                                    <td> {e.CalorieTracker.DateDa}</td>
                                    <td> {e.CalorieTracker.Foods}</td>
                                    <td>{e.CalorieTracker.Calories}</td>
                                    <td> {e.CalorieTracker.Protein}</td>
                                </tr>
                            </tbody>




                        </>

                    ))}

                </table>

            </div>




            {/* <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Food</th>
                            <th>Calorie</th>
                            <th>Protein</th>
                            
                        </tr>
                    </thead>
                    <tbody className="table-body-container">
                        <tr>
                            <td>2024-04-19</td>
                            <td>Sprout</td>
                            <td>45</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>2024-04-19</td>
                            <td>Sprout</td>
                            <td>45</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>2024-04-19</td>
                            <td>Sprout</td>
                            <td>45</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>2024-04-19</td>
                            <td>Sprout</td>
                            <td>45</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>2024-04-19</td>
                            <td>Sprout</td>
                            <td>45</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>2024-04-19</td>
                            <td>Sprout</td>
                            <td>45</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>2024-04-19</td>
                            <td>Sprout</td>
                            <td>45</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>2024-04-19</td>
                            <td>Sprout</td>
                            <td>45</td>
                            <td>23</td>
                        </tr>
                        
                        
                       
                    </tbody>
                </table>
            </div> */}
        </div>
    );
}

export default CalorieTracker;

