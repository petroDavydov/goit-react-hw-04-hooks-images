import axios from 'axios';

const MY_API_KEY = '22948593-eb3728724c643cf2948c736ef';
axios.defaults.baseURL = 'https://pixabay.com/api/';

async function fetchImage(query, page = 1) {
  try {
    const {
      data: { hits },
    } = await axios.get(
      `?&q=${query}&page=${page}&per_page=12&key=${MY_API_KEY}`,
    );

    return hits;
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchImage;
