import Vue from 'vue';
import Vuex from 'vuex';
import {createVuexStore} from 'vuex-simple';
import {RootModule} from './root';

Vue.use(Vuex);

export default createVuexStore(new RootModule());
