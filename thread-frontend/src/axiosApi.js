import axios from 'axios';

const axiosApi = axios.create({
	baseURL: 'http://localhost:8000/thread'
});

export default axiosApi;