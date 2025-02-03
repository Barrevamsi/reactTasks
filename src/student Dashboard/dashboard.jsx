// import data from "./data.json"
// function Dashboard(){
//     return(
//         <>
//         <div>
//             <div>
//                 Upcomming Classes
//             </div>
//             <div></div>
//         </div>
//         {console.log(data)}
//         </>
//     )
// }
// export default Dashboard;



// import { useState, useEffect } from "react";

// const formatTime = (seconds) => {
//   const hrs = Math.floor(seconds / 3600);
//   const mins = Math.floor((seconds % 3600) / 60);
//   const secs = seconds % 60;

//   const paddedHrs = String(hrs).padStart(2, "0");
//   const paddedMins = String(mins).padStart(2, "0");
//   const paddedSecs = String(secs).padStart(2, "0");

//   return `${paddedHrs}:${paddedMins}:${paddedSecs}`;
// };

// const Dashboard = ({ startTime }) => {
//   const [time, setTime] = useState(startTime);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime((prevTime) => prevTime + 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-lg w-64 mx-auto mt-10">
//       <h1 className="text-xl font-bold text-gray-800">Reverse Countdown</h1>
//       <p className="text-3xl font-semibold text-blue-600 mt-2">
//         {formatTime(time)}
//       </p>
//     </div>
//   );
// };

// export default Dashboard;


