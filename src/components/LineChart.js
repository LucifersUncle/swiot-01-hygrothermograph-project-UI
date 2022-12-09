import React, { useEffect, useState } from "react"
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { dataService } from "../services/data.service";
import { Measurement } from "../models/measurements";

var count = 0;

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

const temperatureReadings = [];
const humidityReadings = [];
const timestamps = [];
const readingArray = [];
const uniqueChars = [];

function update() {
  console.log(readingArray.length)
}

const response = new Promise((res) => res(dataService.getData()))
  .then(result => {
    result.map(item => {
      readingArray.push(item.payload)
    })

    var sortedarray = readingArray.sort(compare)

    sortedarray.map(item => {
      temperatureReadings.push(item.temperature)
      humidityReadings.push(item.humidity)
      timestamps.push(item.timestamp)

      timestamps.forEach((element) => {
      if (!uniqueChars.includes(element)) {
        uniqueChars.push(element);
    }
});
    })
  })

// const response = new Promise((res) => res(dataService.getData()))
// .then(result => {
//   result.map(item => {
//     array.push(item.payload)
//   })

//   var sortedarray = array.sort(compare)

//   sortedarray.map(item => {
//     temperatureReadings.push(item.temperature)
//     humidityReadings.push(item.humidity)
//     timestamps.push(item.timestamp)
//   })
// })

function compare( a, b ) {
  if ( a.timestamp < b.timestamp ){
    return -1;
  }
  if ( a.timestamp > b.timestamp ){
    return 1;
  }
  return 0;
}

const LineChart = () => {
  const [chartData, setChartData] = useState({datasets: []})
  const [chartData1, setChartData1] = useState({datasets1: []})
  const [temperature, setTemperature] = useState(temperatureReadings)
  const [humidity, setHumidity] = useState(humidityReadings)
  const [timestampLabel, setTimestampLabel] = useState(uniqueChars)
  const [state, setState] = useState(true);
  

  
  const chart = () => {
    count++;
    console.log("App Rendered " + count + " times!");
    setChartData({
      labels: timestampLabel, //timestamps
      datasets: [
        {
          label: 'Temperature 🌡️',
          data: temperature,
          backgroundColor: [
            'rgba(255, 255, 255, 1)'
          ],
          borderWidth: 2,
          borderColor: 'rgba(255, 0, 0, 0.8)'
          },
          {
            label: 'Humdidity 💧',
            data: humidity,
            backgroundColor: [
              'rgba(255, 255, 255, 1)'
            ],
            borderWidth: 2,
            borderColor: 'rgba(0, 130, 255, 0.8)',
          },
        ],
      spanGaps: true
    })
  }

      useEffect(() => {
        setTemperature(temperatureReadings)
            chart();
      }, [state])

      function handleSumbmit(event) {
        event.preventDefault();
        if(state) {
          setState(false)
        } else {
          setState(true)
        }
        console.log("test")
      }

          return (
            <div style={{height: "fit-content", width: "1024px"}} className="card">
            <h2>DHT11</h2>
            <Chart type='line' data={chartData} />
            <button onClick={handleSumbmit}>Refresh Data</button>
        </div>
    )
  }

export default LineChart;