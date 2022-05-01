/*#======================================================#
* # + Projet: Principal Component Analysis automation    #
* # + Date:   04/2022                                    #
* # + Description: Return PCA and infos by and CSV or    #
* # XLSX that was given by user                          #
* # + Author: Thiago Piovesan                            #
* #======================================================#
* # Libs importation:
*/
import axios from 'axios';

const url = 'http://localhost:8080/'

const axiosInstance = axios.create({
    baseURL: url
});

/*axios.Instance.interceptors.request.use(
    function (config) {
        const token = window.localStorage.token;
        if (token) {
            config.headers.Authorization = token
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);*/

export const api = {
    get(endpoint) {
        return axiosInstance.get(endpoint);
    },
    post(endpoint, body) {
        return axiosInstance.post(endpoint, body);
    },
    put(endpoint, body) {
        return axiosInstance.put(endpoint, body);
    },
    delete(endpoint) {
        return axiosInstance.delete(endpoint);
    }
}