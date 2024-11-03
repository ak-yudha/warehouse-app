import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api'
});

export const addReceive = (data) => api.post('/receive', data);
export const addIssue = (data) => api.post('/issue', data);
export const getStock = () => api.get('/stock');