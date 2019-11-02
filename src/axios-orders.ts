import axios from 'axios';

const instance = axios.create({
  baseURL: '<Firebase URL>'
});

export default instance;
