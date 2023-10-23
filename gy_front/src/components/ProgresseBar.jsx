import React from "react";
import "./css/ProgressBar.css";


export const configureProggressBar = (statueOftarget) => {
  const progressBar = document.getElementById("brique");
  switch (statueOftarget) {
    case "very_weak":
      progressBar.style.width = "5%";
      progressBar.style.backgroundColor = "#ff0000";
      break;
    case "weak":
      progressBar.style.width = "10%";
       progressBar.style.backgroundColor = "#ff3300";
      break;
    case "poor":
      progressBar.style.width = "13%";
       progressBar.style.backgroundColor = "#ff6600";
      break;
    case "insufficient":
      progressBar.style.width = "15%";
       progressBar.style.backgroundColor = "#ff9933";
      break;
    case "unsatisfactory":
      progressBar.style.width = "17%";
       progressBar.style.backgroundColor = "#ffff00";
      break;
    case "bad":
      progressBar.style.width = "10%";
       progressBar.style.backgroundColor = "#ffff66";
      break;
    case "acceptable":
      progressBar.style.width = "40%";
       progressBar.style.backgroundColor = "#ccff66";
      break;
    case "moderate":
      progressBar.style.width = "0%";
       progressBar.style.backgroundColor = "#99ff00";
      break;
    case "good":
      progressBar.style.width = "50%";
       progressBar.style.backgroundColor = "#00ff00";
      break;
    case "strong":
      progressBar.style.width = "70%";
       progressBar.style.backgroundColor = "#3366ff";
      break;
    case "excelent":
      progressBar.style.width = "80%";
       progressBar.style.backgroundColor = "#66ccff";
      break;
    case "very_strong":
      progressBar.style.width = "90%";
       progressBar.style.backgroundColor = "#0000ff";
      break;
    case "secure":
      progressBar.style.width = "100%";
       progressBar.style.backgroundColor = "#9900ff";
      break;
    default:
      break;
  }
};

function ProgresseBar() {
  return (
    <div className="w-[98%] h-2 bg-white shadow-sm rounded-md overflow-hidden mx-auto my-1">
      <div id="brique" className="min-h-full"></div>
    </div>
  );
}

export default ProgresseBar;
