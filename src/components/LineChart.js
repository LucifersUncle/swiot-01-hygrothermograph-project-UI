import React, { useEffect, useState } from "react"
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';
// import { doc, Timestamp, addDoc, setDoc } from '@firebase/firestore';
// import { firebaseConfig } from "../../../../Backend/firebase";

//GET THE DATA FROM FIREBASE HERE!
// TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBdtuKdg4tN3XNH8IddEc9B6Ad6eTnsxJ4",
//   authDomain: "swiot-backend.firebaseapp.com",
//   projectId: "swiot-backend",
//   storageBucket: "swiot-backend.appspot.com",
//   messagingSenderId: "436810103863",
//   appId: "1:436810103863:web:121902b9e3e51c30c893b2",
//   measurementId: "G-S7Q04KBLL4"
// };

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app)
// const dbRef = collection(db, "measurements");
// const snapshot = getDocs(dbRef, "measurements");
var count = 0;

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

const LineChart = () => {
  const [chartData, setChartData] = useState({
    datasets: []
  })

  const chart = () => {
    
    // snapshot.docs.map(item => {
    //   // console.log(item.data().temperature)
    //   let unix_timestamp = item.data().timestamp.getDate()
    //   var date = new Date(unix_timestamp * 1000)
    //   console.log(date)
    // })
    count++;
    console.log("App Rendered " + count + " times!");

    setChartData({
      // labels: snapshot.docs.map((item) => new Date(item.data().timestamp * 1000)),
      datasets: [
        {
          label: 'Temperature 🌡️',
          // data: snapshot.docs.map((item) => item.data().temperature),
          backgroundColor: [
            'rgba(255, 255, 255, 1)'
          ],
          borderWidth: 2,
          borderColor: 'rgba(255, 0, 0, 0.8)'
            },
            {
              label: 'Humdidity 💧',
              // data: snapshot.docs.map((item) => item.data().humidity),
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
            chart();
          }, [])
          
          return (
            <div style={{height: "fit-content", width: "1024px"}} className="card">
            <h2>DHT11</h2>
            <Chart type='line' data={chartData} />
        </div>
    )
  }

export default LineChart;