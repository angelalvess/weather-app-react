// eslint-disable-next-line no-unused-vars

import axiosData from '../../services/api';
import { useState } from 'react';
import Card from '../Card/Card';
import initialData from '../../helpers/initialData';

function Form() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosData(city).then((response) => {
      setData(response);
    });
  };

  return (
    <div className="flex flex-col w-full h-screen   items-center justify-center">
      <form onSubmit={handleSubmit}>
        <input
          value={city}
          onChange={({ target: { value } }) => setCity(value)}
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

      <Card data={data} />
    </div>
  );
}

export default Form;
