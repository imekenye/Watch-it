import axios from 'axios';

const fetchTrailer = async (movie_id) => {
  const {
    data: { results },
  } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${process.env.API_KEY}`
  );
  return results;
};

export default fetchTrailer;
