import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const register = async (username, password) => {
  await axios.post(`${API_URL}/register`, { username, password });
};

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  localStorage.setItem('token', response.data.token); // Save the token in local storage
};

export const logout = () => {
  localStorage.removeItem('token'); // Remove the token on logout
};
