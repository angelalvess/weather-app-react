// eslint-disable-next-line no-unused-vars
import React from 'react';
import propTypes from 'prop-types';

function Card({ data }) {
  const { location, current } = data;

  return (
    <div className="bg-white p-6 mt-8 rounded-lg shadow-md mr-20 min-w-[220px]">
      <div className="text-center">
        <span className="block text-xl font-bold text-slate-700 ">
          {location.name}
          {', '}
        </span>
        <span className="text-slate-500 text-sm font-medium">
          {`${location.region}, ${location.country}`}
        </span>
      </div>

      <div className="flex justify-center items-center ml-3 mt-14 mb-7">
        <span className="text-7xl font-bold text-slate-700">
          {current.temp_c}
        </span>
        <span className="text-2xl text-slate-700 font-bold">°C</span>
      </div>

      <div className="flex justify-center flex-col items-center ">
        <img src={current.condition.icon} alt="Weather" />
        <span className="text-slate-500 font-medium">
          {current.condition.text}
        </span>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  data: propTypes.objectOf(propTypes.object).isRequired,
};
