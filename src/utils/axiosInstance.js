import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'http://localhost:9090/',
});


    export default axiosInstance;