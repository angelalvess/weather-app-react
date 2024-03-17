// eslint-disable-next-line no-unused-vars
import React from 'react';

function Card() {
  return (
    <div className="bg-white p-6 mt-8 rounded-lg shadow-md mr-20">
      <div className="text-center">
        <span className="block text-xl font-bold text-slate-700 ">
          City name
        </span>
        <span className="text-slate-500 text-sm font-medium">
          State name, Country
        </span>
      </div>

      <div className="flex justify-center items-center ml-3 mt-3 mb-3">
        <span className="text-7xl font-bold text-slate-700">27</span>
        <span className="text-2xl text-slate-700 font-bold">°C</span>
      </div>

      <div className="text-center ">
        <span className="block">Icon</span>
        <span className="text-slate-500 font-medium">Raining</span>
      </div>
    </div>
  );
}

export default Card;
