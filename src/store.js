import Vue from 'vue';
import Vuex from 'vuex';
import Modules from './modules';

Vue.use(Vuex);

const store = new Vuex.Store({});

Modules.forEach((module) => {
  store.registerModule(module.name(), module.getStore());
});

export default store;
