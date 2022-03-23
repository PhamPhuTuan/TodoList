import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

// Import Modules Store
import todosStore from "./todoData/todos.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { todosStore },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
});
