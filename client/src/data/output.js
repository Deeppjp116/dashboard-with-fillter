import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:9999/');
    return response.data; // Return the fetched data directly
  } catch (error) {
    console.log(error);
    return null; // Return null if there's an error
  }
};

export default fetchData;
