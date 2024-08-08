import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL + '/api';


const client = axios.create({
  baseURL: BASE_URL,
});

export default client;
