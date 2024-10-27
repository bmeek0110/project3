import axios from 'axios';

const API_URL = 'http://localhost:5000/api/predictions';

export const submitPrediction = async (eventId, matchPredictions) => {
  const token = localStorage.getItem('token');
  await axios.post(API_URL, { eventId, matchPredictions }, { headers: { Authorization: `Bearer ${token}` } });
};
