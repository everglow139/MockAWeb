import Vue from 'vue'
// import ElementUI from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

import "swiper/css/swiper.css"
import router from './router';
import '@/mock/mockServe'
import store from './store';
import vueResource from 'vue-resource'
Vue.use(ElementUI);
Vue.use(vueResource)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
