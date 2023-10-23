import React from "react";
import bg_landing from "../assets/images/home-background-01.jpg";
function Landing() {
  return (
    <div
      style={{ backgroundImage: `url(${bg_landing})` }}
      className=" min-h-screen flex items-center justify-center min-w-full bg-cover "
    >
      <div className=" min-h-screen flex items-center justify-center min-w-full bg-black bg-opacity-50">
        <div className="text-center ">
          <h1 className="text-4xl font-bold text-teal-800 mb-4 " style={{textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)"}}>
            Bienvenue à Gasy Innovation Technologie
          </h1>
          <p className="text-lg text-white">
            Votre partenaire en innovation technologique.
          </p>
          <button className="bg-teal-700 shadow-md hover:bg-teal-800 text-white font-bold py-2 px-4 rounded-full mt-6">
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
