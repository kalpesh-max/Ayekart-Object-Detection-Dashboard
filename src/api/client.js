import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || '';

export const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 15000
});

export default apiClient;
