import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import api from "./api/api";
import Path from "./components/Home/Home/path";
import Pathuser from "./components/Home/NorHome/path";
// import "./mock/people.js";

Vue.prototype.APIurl = api;
Vue.prototype.Path = Path;
Vue.prototype.Pathuser = Pathuser;

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(ElementUI);

// axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.baseURL = "http://127.0.0.1:8080";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.withCredentials = false;
// axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
