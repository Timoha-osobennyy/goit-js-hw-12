import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50426597-51e17373704e5765d60c36e2e';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: PER_PAGE,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch images: ${error.message}`);
  }
}
