import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    restaurants: [],
    users: [
      {
        id:1,
        name: "Tiago",
        email: "admin@email.com",
        password: "password"
      }
    ],
    dishes: []
  },
  mutations: {},
  actions: {},
  modules: {}
});
