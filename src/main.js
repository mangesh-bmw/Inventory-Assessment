import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { store } from "./store/";
import rules from "./assets/js/rules";

Vue.config.productionTip = false;
Vue.prototype.$rules = rules
new Vue({
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
