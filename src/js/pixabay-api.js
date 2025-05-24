import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50426597-51e17373704e5765d60c36e2e';  

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
