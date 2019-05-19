import Vue from 'vue'
import router from './ROUTER'
import App from './App.vue'

Vue.use(router);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
