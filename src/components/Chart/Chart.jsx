import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ country }) => { // Assuming 'country' is passed as a prop
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const initialDailyData = await fetchDailyData();
      if (initialDailyData) {
        setDailyData(initialDailyData);
      } else {
        setDailyData([]);
      }
    };

    fetchAPI();
  }, []);

  // Assuming 'confirmed', 'recovered', and 'deaths' are part of the 'dailyData' object
  // and you want to use their most recent values for the bar chart:
  const mostRecentData = dailyData && dailyData.length ? dailyData[dailyData.length - 1] : {};
  const { confirmed, recovered, deaths } = mostRecentData;


  const lineChart = (
    (dailyData && dailyData.length) // Now dailyData is guaranteed to be an array
      ? (
        <Line
          data={{
            labels: dailyData.map(({ date }) => date),
            datasets: [{
              data: dailyData.map(({ confirmed }) => confirmed),
              label: 'Infected',
              borderColor: 'white',
              backgroundColor: 'rgba(138, 186, 211, 0.5)',
              fill: true
            }, {
              data: dailyData.map(({ deaths }) => deaths),
              label: 'Deaths',
              borderColor: 'black',
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
              fill: true
            }],
          }}
        />) : null
  );

  const barChart = (
    confirmed
      ? (
        <Bar
          data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
              label: 'People',
              backgroundColor: [
                'rgba(0, 0, 255, 0.5)',
                'rgba(0, 255, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
              ],
              data: [confirmed.value, recovered.value, deaths.value]
            }]
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: `Current state in ${country}` }
          }}
        />
      ) : null
  );

  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  )
}

export default Chart;