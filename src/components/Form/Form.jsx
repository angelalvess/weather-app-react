// eslint-disable-next-line no-unused-vars
import React from 'react';
import Card from '../Card/Card';

function Form() {
  return (
    <div className="flex flex-col w-full h-screen   items-center justify-center">
      <form>
        <input
          className="p-3 rounded-lg outline-none min-w-80"
          type="text"
          placeholder="City"
        />
        <button
          className="p-3 bg-blue-500 hover:bg-blue-700  text-white rounded-lg ml-3"
          type="submit"
        >
          Search
        </button>
      </form>

      <Card />
    </div>
  );
}

export default Form;
