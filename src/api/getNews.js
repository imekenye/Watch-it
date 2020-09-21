import axios from 'axios';

const NEWS_API = `https://newsapi.org/v2/everything?q=movie&apiKey=${process.env.NEWS_API_KEY}`;

export const getNews = async () => {
  const {
    data: { articles },
  } = await axios.get(NEWS_API);
  return articles.slice(1, 13);
};
