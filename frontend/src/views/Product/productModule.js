import { fetchIssue, deleteIssue, createIssue } from "@/axios/api/issue";
import { PRODUCTS_KEY } from "@/const/storageKey";
import { v4 as uuidv4 } from "uuid";

const productsModule = {
  namespaced: true,
  state: {
    products: [],
    modelIssue: {
      title: "",
      description: "",
    },
  },
  mutations: {
    RESET_EDIT_ISSUE(state) {
      state.modelIssue = {};
    },
    RESET_MODEL_ISSUE(state) {
      state.modelIssue = {
        title: "",
        description: "",
      };
    },
    ADD_ISSUE(state, product) {
      state.products.unshift(product);
      localStorage.setItem(PRODUCTS_KEY, JSON.stringify(state.products));

      state.products = JSON.parse(localStorage.getItem(PRODUCTS_KEY)) || [];
    },
    SET_MODEL_PRODUCT(state, product) {
      state.modelIssue = { ...product };
    },
    UPDATE_ISSUE(state, product) {
      const index = state.products.findIndex((p) => p._id === product._id);
      if (index !== -1) {
        state.products[index] = product;
        localStorage.setItem(PRODUCTS_KEY, JSON.stringify(state.products));
        state.products = JSON.parse(localStorage.getItem(PRODUCTS_KEY)) || [];
      }
    },
    SET_ISSUES(state, issues) {
      state.products = issues;
    },
  },
  actions: {
    editIssue({ commit }, product) {
      console.log(product, "product");
      commit("UPDATE_ISSUE", product);
    },
    async addIssue({ commit, dispatch }, issue) {
      console.log(issue,'add issue')
      let id = uuidv4();

      let finalIssueData = {
        title: issue.title,
        description: issue.description
      };
      await createIssue(finalIssueData)
      dispatch("fetchIssues");
    },
    updateIssue({ commit }, product) {
      commit("UPDATE_ISSUE", product);
      commit("RESET_MODEL_ISSUE");
    },
    async deleteIssue({ commit, dispatch }, id) {
      try {
        await deleteIssue(id);
        dispatch("fetchIssues");
        // console.log(issues.data, "issues");
      } catch (err) {}
    },
    setModelIssue({ commit }, product) {
      commit("SET_MODEL_PRODUCT", product);
    },
    async fetchIssues({ commit }) {
      // In a real app, fetch from an API or local storage
      const issues = await fetchIssue();

      commit("SET_ISSUES", issues.data.data.issues);
    },
    resetModelIssue({ commit }) {
      commit("RESET_MODEL_ISSUE");
    },
    resetEditIssue({ commit }) {
      commit("RESET_EDIT_ISSUE");
    },
  },
  getters: {
    allIssues(state) {
      return state.products;
    },
  },
};

export default productsModule;
