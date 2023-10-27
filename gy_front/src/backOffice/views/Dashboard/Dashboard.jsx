import React from "react";
import { Bar, Line, Doughnut, Pie, Radar, PolarArea } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Layout from "../Layout";
import { BsArrowDown, BsCircleHalf } from "react-icons/bs";

Chart.register(...registerables);
function Dashboard() {
  const containerStyle =
    "p-4 md:p-6 bg-white rounded-lg shadow-md w-full flex flex-wrap min-h-screen";
  const chartStyle = "w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-6 md:mb-0";
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Ventes mensuelles",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    scales: {
      x: {
        type: "category",
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Tendance des ventes",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const doughnutData = {
    labels: ["Rouge", "Bleu", "Vert"],
    datasets: [
      {
        data: [30, 40, 20],
        backgroundColor: ["#FF0000", "#0000FF", "#008000"],
      },
    ],
  };

  const pieData = {
    labels: ["Rouge", "Bleu", "Vert"],
    datasets: [
      {
        data: [30, 40, 20],
        backgroundColor: ["#FF0000", "#0000FF", "#008000"],
      },
    ],
  };

  const radarData = {
    labels: ["Ventes", "Marketing", "Support", "Développement", "Design"],
    datasets: [
      {
        label: "Département A",
        data: [65, 59, 90, 81, 56],
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
        pointBorderColor: "#fff",
      },
      {
        label: "Département B",
        data: [28, 48, 40, 19, 96],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
        pointBorderColor: "#fff",
      },
    ],
  };

  const polarAreaData = {
    labels: ["Rouge", "Bleu", "Vert", "Jaune", "Violet"],
    datasets: [
      {
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          "#FF0000",
          "#0000FF",
          "#008000",
          "#FFFF00",
          "#800080",
        ],
      },
    ],
  };

  return (
    <div id=" min-w-full">
      <div className="grid grid-cols-4 gap-3 py-5 mb-5  text-white">
        <div className="bg-blue-400 hover:scale-105 transition-all  p-3  min-h-[90px] flex justify-center items-center rounded-md shadow-md">
          Nombre de <span className="ml-2 font-bold">20</span>
         
        </div>
        <div className="bg-pink-400 hover:scale-105 transition-all p-3 min-h-[90px] flex justify-center items-center rounded-md shadow-md">
          Nombre de <span className="ml-2 font-bold">20</span>
        </div>
        <div className="bg-orange-400 hover:scale-105 transition-all p-3 min-h-[90px] flex justify-center items-center rounded-md shadow-md">
          Nombre de <span className="ml-2 font-bold">20</span>
        </div>
        <div className="bg-violet-400 hover:scale-105 transition-all p-3 min-h-[90px] flex justify-center items-center rounded-md shadow-md">
          Nombre de <span className="ml-2 font-bold">20</span>
        </div>
      </div>
      <div className="flex gap-3 justify-between">
        <div className="grid grid-cols-2 gap-3  min-w-[400px]">
          <div className="flex flex-col  hover:scale-105 transition-all bg-white  rounded-md shadow  min-w-[220px] p-3 min-h-[90px]  justify-center space-y-2 ">
            <h2 className="font-bold text-gray-600">Poste le plus aimés</h2>
            <span className="text-[30px] font-bold text-gray-600">100.5</span>
            <span className="flex space-x-2 items-center text-gray-600">
              <BsArrowDown className="text-blue-500" /> 
              <span className="font-bold text-sm">201%</span>
              <span>Lorem ipsum dolor sit </span>
            </span>
          </div>
          <div className="flex flex-col  hover:scale-105 transition-all bg-white  rounded-md shadow  min-w-[220px] p-3 min-h-[90px]  justify-center space-y-2 ">
            <h2 className="font-bold text-gray-600">Poste le plus aimés</h2>
            <span className="text-[30px] font-bold text-gray-600">100.5</span>
            <span className="flex space-x-2 items-center text-gray-600">
              <BsArrowDown className="text-blue-500" /> 
              <span className="font-bold text-sm">201%</span>
              <span>Lorem ipsum dolor sit </span>
            </span>
          </div>
          <div className="flex flex-col  hover:scale-105 transition-all bg-white  rounded-md shadow  min-w-[220px] p-3 min-h-[90px]  justify-center space-y-2 ">
            <h2 className="font-bold text-gray-600">Poste le plus aimés</h2>
            <span className="text-[30px] font-bold text-gray-600">100.5</span>
            <span className="flex space-x-2 items-center text-gray-600">
              <BsArrowDown className="text-blue-500" /> 
              <span className="font-bold text-sm">201%</span>
              <span>Lorem ipsum dolor sit </span>
            </span>
          </div>
          <div className="flex flex-col  hover:scale-105 transition-all bg-white  rounded-md shadow  min-w-[220px] p-3 min-h-[90px]  justify-center space-y-2 ">
            <h2 className="font-bold text-gray-600">Poste le plus aimés</h2>
            <span className="text-[30px] font-bold text-gray-600">100.5</span>
            <span className="flex space-x-2 items-center text-gray-600">
              <BsArrowDown className="text-blue-500" /> 
              <span className="font-bold text-sm">201%</span>
              <span>Lorem ipsum dolor sit </span>
            </span>
          </div>
          
        </div>
        <div className="flex-grow flex items-center   justify-center bg-white  rounded-md shadow">
     
          <Bar data={barData} options={barOptions} className="" />
        </div>
      </div>
{/* 
      <Pie data={pieData} />

      <Doughnut data={doughnutData} /> */}
    </div>
  );
}

export default Dashboard;
