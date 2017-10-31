/**
 * Created by chao on 2017/9/30.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import list from './modules/list';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        list,
    },
    getters
});

export default store