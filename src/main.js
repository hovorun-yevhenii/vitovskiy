import Vue from 'vue'
import router from './router'
import App from './App.vue'
import AppImage from './components/AppImage'
import AppLoader from './components/AppLoader'

Vue.component('app-image', AppImage);
Vue.component('app-loader', AppLoader);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
