import axios from 'axios';

const api = axios.create({
    baseURL:'https://api-iddog.idwall.co'
});

export default api;
