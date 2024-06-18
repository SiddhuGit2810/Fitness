import React, { useEffect, useState } from 'react';
import video from '../video/video.mp4';
import '../Progess/ProgessHomePage.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Bar,Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
 
} from 'chart.js';
import CalorieTracker from './CalorieTracker/CalorieTracker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
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
            borderRadius: { topLeft: 10, topRight: 10, bottomLeft: 10, bottomRight: 10 },
            hoverOffset: 4
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
    <div className="container">
      <video src={video} autoPlay muted loop id='background-video' className="video-bg" />
      <div className="container1">
        <h2>Today's Nutrients</h2>
        {/* <p>Calorie Value: {calorieValue}</p>
        <p>Protein Value: {proteinValue}</p> */}
        <div className="content">
          {chartData.labels ? (
            <Doughnut
              options={{
                responsive: true,
                scales: {
                  y: {
                    beginAtZero: true,
                    type: 'linear',
                    grid: {
                      display: false,
                      borderDash: [1,1],
                    },
                    ticks: {
                      display: false
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
      </div>


      <div className="TableData"   >

        <CalorieTracker/>
      </div>
    </div>
  );
}

export default Test;
