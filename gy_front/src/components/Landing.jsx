import React from 'react';

function Landing() {
  return (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Bienvenue à Gasy Innovation Technologie</h1>
        <p className="text-lg text-gray-600">Votre partenaire en innovation technologique.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-6">
          En savoir plus
        </button>
      </div>
    </div>
  );
}

export default Landing;
