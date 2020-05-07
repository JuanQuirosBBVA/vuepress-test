import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import router from './router'
import axios from 'axios'
import store from './vuex'



Vue.config.productionTip = false

const token = localStorage.getItem('auth._token.local')
if (token) {
  axios.defaults.headers.common['Authorization'] = "Bearer " + token
  store.dispatch("USER_REQUEST")
}

new Vue({
  render: h => h(App),
  store,
  vuetify,
  router,
}).$mount('#app')

