import { createStore } from "vuex";
import { productStarter } from "@/_starter/productStarter";
import { PRODUCTS_KEY, WARRANTY_CLAIMS_KEY } from "@/const/storageKey";
import { warrantyClaimStarter } from "@/_starter/warrantyClaimStarter";

export default createStore({
  state: {
    project : 'Vue3 + Vuetify',
    desc : 'Starter Template',
    role: 'STAFF',
    theme: 'light',
    user: {
      username: 'johan'
    },
  },
  mutations: {
    LOGOUT(state) {
      state.user = null;
      localStorage.removeItem('user');
      sessionStorage.removeItem('user');
    },
    SET_ISSUES(state, products) {
      localStorage.removeItem(PRODUCTS_KEY);
      localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
    },
    SET_WARRANTY_CLAIMS(state, warrantyClaims) {
      localStorage.removeItem(WARRANTY_CLAIMS_KEY);
      localStorage.setItem(WARRANTY_CLAIMS_KEY, JSON.stringify(warrantyClaims));
    }
  },
  actions: {
    logout({ commit }) {
      commit('LOGOUT');
    },
    starterData({ commit }) {
      commit('SET_ISSUES', productStarter);
      commit('SET_WARRANTY_CLAIMS', warrantyClaimStarter);
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
});
 