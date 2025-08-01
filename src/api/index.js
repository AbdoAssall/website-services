import axios from 'axios';

const api = axios.create({
    baseURL: 'https://your-backend-api.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
