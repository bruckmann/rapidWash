import axios from 'axios';

const apiService = axios.create({ 
  baseURL: "http://54.92.216.34:3030" // Endereço da api na AWS, caso estiver rodando em dev utilizar http://localhost:3030/
});

export default apiService;