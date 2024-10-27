import axios from 'axios';

const API_URL = 'https://newsapi.org/v2/everything?q=wwe&apiKey=YOUR_API_KEY';

export const fetchNews = async () => {
  const response = await axios.get(API_URL);
  return response.data.articles;
};
