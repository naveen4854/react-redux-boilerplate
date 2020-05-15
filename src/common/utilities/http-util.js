import axios, { AxiosRequestConfig } from 'axios';
import API_URL from 'src/config';

/**
 * http post
 * @param {*} absoluteUrl 
 * @param {*} data 
 * @param {*} config 
 */
const post = async (absoluteUrl, data, config = {}) => {
    try {
        const api = API_URL + absoluteUrl;
        const response = await axios.post(api, data, config);
        return response.data;
    } catch (error) {
        debugger;
        throw error;
    }
}

/**
 * http get
 * @param {*} absoluteUrl 
 * @param {*} queryString 
 */
const get = async (absoluteUrl, queryString = '') => {
    try {
        let getUrl = API_URL + absoluteUrl;
        if (queryString !== '') {
            getUrl = getUrl + "?" + queryString;
        }
        const response = await axios.get(getUrl)
        return response.data;
    } catch (error) {
        debugger;
        throw error;
    }
}

/**
 * request interceptor, can be used to manipulate every req before it requests an api
 */
axios.interceptors.request.use(
    (config) => {
        // config.headers = Object.assign({}, config.headers, {
        //     'Content-type': 'application/json'
        // });
        const authToken = localStorage.getItem('userToken');
        if (authToken) {
            config.headers = Object.assign({}, config.headers, {
                Authorization: `Bearer ${authToken}`
            });
        } else {
        }
        // config.headers = Object.assign({}, config.headers, {
        //     ContentType: 'application/x-www-form-urlencoded'
        // });
        return config;
    },
    (error) => {
        console.log('request error', error)
        return Promise.reject(error);
    }
);

/**
 * response interceptor, can be used to manipulate response and add default implementations
 */
axios.interceptors.response.use(
    (response) => {
        const responseData = response.data;;
        const status = responseData.status;
        if (!status)
            return Promise.reject();

        if (status.responseStatus !== 'SUCCESS')
            return Promise.reject(status.responseStatus);

        return responseData;
    },
    (error) => {
        debugger;
        console.log('request error', error)
        return Promise.reject(error);
    }
);

export default { post, get };