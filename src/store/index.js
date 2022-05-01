/*#======================================================#
* # + Projet: Principal Component Analysis automation    #
* # + Date:   04/2022                                    #
* # + Description: Return PCA and infos by and CSV or    #
* # XLSX that was given by user                          #
* # + Author: Thiago Piovesan                            #
* #======================================================#
* # Libs importation:
*/
import Vue from 'vue';
import Vuex from 'vuex';
import inference from './modules/inference';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        inference: inference
    }
});