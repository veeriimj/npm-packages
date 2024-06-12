import axios from 'axios';
import getCookie from './getCookie';


const cookieName = process.env.REACT_APP_COOKIE_NAME;
const apiVersion = process.env.REACT_APP_API_VERSION;
const baseURL = `${process.env.REACT_APP_BASE_URL}/${apiVersion}`;

const instance = axios.create({
    baseURL: baseURL,
    // withCredentials:true
});

export const frontEndInstance = axios.create({
    withCredentials: true,
})

instance.interceptors.request.use(requestSuccess, requestError);
frontEndInstance.interceptors.request.use(requestSuccess, requestError);

function requestSuccess(config) {
    config.headers.Authorization = `Bearer ${getCookie(cookieName)}`;
    return config;
}

function requestError(error) {
    return Promise.reject(error);
}

instance.interceptors.response.use(responseSuccess, responseError);
frontEndInstance.interceptors.request.use(responseSuccess, responseError);


function responseSuccess(response) {
    return response;
}

function responseError(error) {
    return Promise.reject(error);
}

export default instance;