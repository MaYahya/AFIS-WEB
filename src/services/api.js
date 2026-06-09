import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';
const STORAGE_URL = import.meta.env.VITE_STORAGE_URL || 'http://localhost:8000/storage';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export const getSiteData = async () => {
  try {
    const response = await api.get('/site-data');
    return response.data;
  } catch (error) {
    console.error('Error fetching site data:', error);
    throw error;
  }
};

export const getImageUrl = (path) => {
  if (!path) return null;
  if (path.startsWith('http')) return path;
  return `${STORAGE_URL}/${path}`;
};

export default api;
