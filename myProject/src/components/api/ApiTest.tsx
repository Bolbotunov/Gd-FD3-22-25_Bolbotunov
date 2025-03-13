import axios from 'axios';
import { API_KEY, ID } from './configAPI';

const BASE_URL = 'https://trackapi.nutritionix.com/v2';

export const searchFood = async (query: any) => {
  try {
    console.log('Request Body:', { query });
    const response = await axios.post(
      `${BASE_URL}/natural/nutrients`, 
      { query },
      {
        headers: {
          'x-app-id': ID,
          'x-app-key': API_KEY,
          'Content-Type': 'application/json'
        },
      }
    );
    console.log('API response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
