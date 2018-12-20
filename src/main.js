import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';
import store from './store/store';

Vue.use(VueRouter);

Vue.filter('money', function(value) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });
  return formatter.format(value);
});
const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: (h) => h(App),
  router,
  store
});
