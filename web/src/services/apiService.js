import axios from 'axios';

const apiService = axios.create({ 
  baseURL: "https://rapid-wash-api.herokuapp.com" // Endereço da api no heroku, caso estiver rodando em dev utilizar  http://localhost:3030/
});

export default apiService;