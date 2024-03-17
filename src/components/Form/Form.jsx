// eslint-disable-next-line no-unused-vars
import React from 'react';

function Form() {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <form>
        <input
          className="p-3 rounded-lg outline-none"
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
    </div>
  );
}

export default Form;
