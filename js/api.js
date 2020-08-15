require('dotenv').config();

const popular_url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`;

export const getPopular = () => {
  return fetch(popular_url)
    .then((res) => res.json())
    .then((data) => data.results);
};
export const fetchTrailer = (movid) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movid}/videos?api_key=${process.env.API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => data.results);
};

// NEWS API

const news_url = `https://newsapi.org/v2/everything?q=movie&apiKey=${process.env.NEWS_API_KEY}`;

export const getNews = () => {
  return fetch(news_url)
    .then((res) => res.json())
    .then((data) => data.articles.slice(1, 13));
};
