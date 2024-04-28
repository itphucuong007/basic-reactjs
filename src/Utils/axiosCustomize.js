import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8081/'
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    console.log('interceptors: ', response);
    console.log('response.data: ', response.data);

    return response && response.data ? response.data : response;

}, function (error) {
    console.log('error interceptors: ', error);
    console.log('error.data: ', error.data);
    return error && error.response && error.response.data ? error.response.data : Promise.reject(error);
});

export default instance
