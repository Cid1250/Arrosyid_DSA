import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createStore } from "vuex";
import auth from "./store/auth";

const store = createStore({
  modules: {
    auth,
  },
});

createApp(App).use(router).use(store).mount("#app");
