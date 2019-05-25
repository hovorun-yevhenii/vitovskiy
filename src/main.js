import Vue from 'vue'
import router from './router'
import App from './App.vue'
import $fetch from './fetch'
import AppImage from './components/AppImage'

Vue.component('app-image', AppImage);
Vue.use(router);
Vue.prototype['$fetch'] = $fetch;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
