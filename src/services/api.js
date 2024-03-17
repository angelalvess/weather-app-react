import axios from 'axios';

const KEY = 'd97dcda397134ca7a00212306241703';

const axiosData = async (city) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;
  const response = await axios.get(url);
  const data = await response.data;
  return data;
};

export default axiosData;
