<<<<<<< HEAD
import React from 'react'

import video from '../video/video.mp4'

import '../Progess/ProgessHomePage.css'
import CalorieTracker from './CalorieTracker/CalorieTracker'
=======
import React, { useEffect, useState } from 'react';
import video from '../video/video.mp4';
import '../Progess/ProgessHomePage.css';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
>>>>>>> refs/remotes/origin/main

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Test() {
  const [chartData, setChartData] = useState({});
  const [calorieValue, setCalorieValue] = useState(0);
  const [proteinValue, setProteinValue] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentDate = "2024-05-20";
        const body = {
          "currentDate": currentDate
        };

        const response = await axios.post("https://fitness-60022916701.development.catalystserverless.in/server/TODAY_DATA/todaycalorieData", body);
        const data = response.data[0].Calories;
        console.log(data);

        const todayCalorieValue = data.Calorie_Value;
        const todayProteinValue = data.Protien_Value;

        setCalorieValue(todayCalorieValue);
        setProteinValue(todayProteinValue);

        const formattedData = {
          labels: ['Calories', 'Protein'], // Labels for the x-axis
          datasets: [{
            label: 'Calories',
            data: [todayCalorieValue, todayProteinValue],
            backgroundColor: ['rgba(153,102,255,0.6)', 'rgba(255,159,64,0.6)'],
            barThickness: 15,
            borderRadius: { topLeft: 10, topRight: 10, bottomLeft: 10, bottomRight: 10 }
          }]
        };

        setChartData(formattedData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
<<<<<<< HEAD


    <div>
      
     
     
      
      
      
      <video src={video} width="800" height="400" autoPlay muted loop id='background-video' />


<div className="CalrieTracker">

<CalorieTracker/>

</div>
    
      
      
=======
    <div className="container">
      <video src={video} autoPlay muted loop id='background-video' className="video-bg" />
      <div className="container1">
        <h2>Today's Nutrients</h2>
        {/* <p>Calorie Value: {calorieValue}</p>
        <p>Protein Value: {proteinValue}</p> */}
        <div className="content">
          {chartData.labels ? (
            <Bar
              options={{
                responsive: true,
                scales: {
                  y: {
                    beginAtZero: true,
                    type: 'linear',
                    grid: {
                      display: false, // Show horizontal grid lines
                      borderDash: [1,1], // Customize grid line style
                    },
                    ticks: {
                      display: true
                    }
                  },
                  x: {
                    grid: {
                      display: false
                    },
                    ticks: {
                      display: false
                    }
                  }
                }
              }}
              data={chartData}
            />
          ) : (
            <p>Loading chart...</p>
          )}
        </div>
>>>>>>> refs/remotes/origin/main
      </div>
    </div>
  );
}

export default Test;
