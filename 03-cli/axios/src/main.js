import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

Vue.config.productionTip = false;

axios.defaults.baseURL =
  "https://firestore.googleapis.com/v1/projects/[PROJECT-ID]/databases/(default)/documents";

axios.interceptors.request.use(
  (config) => {
    console.log("interceptors request1", config);
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const interceptorsRequestId = axios.interceptors.request.use(
  (config) => {
    console.log("interceptors request2", config);
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  (resp) => {
    console.log("interceptors response", resp);
    return resp;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// 取り除ける
axios.interceptors.request.eject(interceptorsRequestId);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
