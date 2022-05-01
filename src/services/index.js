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

const url = 'https://sparta-back-end.herokuapp.com/'

const axiosInstance = axios.create({
    baseURL: url
});

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