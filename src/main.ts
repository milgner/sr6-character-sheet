import Vue from 'vue';
import VueTour from 'vue-tour';
import App from './App.vue';
import './registerServiceWorker';
import store from './store';
import i18n from './i18n';
import vuetify from './plugins/vuetify';

require('vue-tour/dist/vue-tour.css');

Vue.use(VueTour);

Vue.config.productionTip = false;

new Vue({
  i18n,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
