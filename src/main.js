import Vue from 'vue'
// import App from './components/Cms.vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-186540839-1',
  router
})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')