import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap';
//讀取畫面套件
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import App from './App.vue'
import router from './router'
import './bus';
import currencyFilter from './filters/currency';
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

Vue.component('loading',Loading);
Vue.filter('currency',currencyFilter);

axios.defaults.withCredentials = true;//跨域問題處理

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

//router.beforeEach 導航守衛
router.beforeEach((to, from, next) => {
  //先確認跳轉的頁面是否需要驗證，如果頁面需要驗證時，向伺服器請求目前使否為登入狀態，若是未登入狀態導向回登入頁面。
  if (to.meta.requiresAuth) {
    const api = "https://vue-course-api.hexschool.io/api/user/check";
    axios.post(api).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        next();
      } else {
        alert('請重新登入');
        next({
          path: '/Login',
        });
      }
    });
  } else {
    //next 通過
    next();
  }
})