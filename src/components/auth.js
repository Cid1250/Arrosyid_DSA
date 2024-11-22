export default {
  namespaced: true,
  state: {
    token: localStorage.getItem("token") || "",
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    clearToken(state) {
      state.token = "";
      localStorage.removeItem("token");
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit("setToken", token);
    },
    logout({ commit }) {
      commit("clearToken");
    },
  },
};
