import axios from 'axios';
const requests = axios.create({
    baseURL:"",
    timeout:5000
});

requests.interceptors.request.use(config => {
    // Do something before request is sent
    return config;
}, error => {
    // Do something with request error
    return Promise.reject(error);
});

requests.interceptors.response.use(response => {
    // Do something with response data
    return response;
}, error => {
    // Do something with response error
    return Promise.reject(error);
});

export default requests;