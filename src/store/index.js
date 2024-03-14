import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user_list: [],
    company_data: [],
  },
  categories: [],
  getters: {
    getUserList: (state) => {
      return state.user_list;
    },
    getCompanydata: (state) => {
      return state.company_data;
    },
  },
  mutations: {
    SET_USER_LIST(state, value) {
      state.user_list = value;
    },
    SET_COMPANY_DATA(state, value) {
      state.company_data = value;
    },
  },
  actions: {
    setUserList({ commit }, value) {
      commit("SET_USER_LIST", value);
    },
    setCompanyData({ commit }, value) {
      commit("SET_COMPANY_DATA", value);
    },
  },
});
