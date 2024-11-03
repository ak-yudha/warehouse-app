import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export const createPenerimaan = (data) => api.post('/penerimaan', data);
export const createPengeluaran = (data) => api.post('/pengeluaran', data);
export const getStockReport = () => api.get('/stock');

export default api;