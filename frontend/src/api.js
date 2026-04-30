import axios from 'axios';

const API = axios.create({
baseURL: import.meta.env.VITE_API_URL || 'https://trytaply.onrender.com'
});

// Token automatisch bei jeder Anfrage hinzufügen
API.interceptors.request.use(function(config) {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = 'Bearer ' + token;
  return config;
});

export default API;
