require('dotenv').config();
import axios from 'axios';

const POPULAR_MOVIE_API = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`;

export const getPopular = async () => {
  const {
    data: { results },
  } = await axios.get(`${POPULAR_MOVIE_API}`);
  return results;
};
