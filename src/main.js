import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/router'
import store from './store/store'
import dateFilter from './filters/date.filter'
import currencyFilter from './filters/currency.filter'
import tooltipDirective from './directives/tooltip.directive'
import Paginate from 'vuejs-paginate'
import Vuelidate from 'vuelidate/src'
import messagePlugin from './utils/message.plugin'
import Loader from './components/app/Loader'

import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.component('Paginate', Paginate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: "AIzaSyCOi7lqwMjJdMjDqRXlAExBi7sgp-LuPnw",
  authDomain: "crm-vuejs-2a6f7.firebaseapp.com",
  databaseURL: "https://crm-vuejs-2a6f7.firebaseio.com",
  projectId: "crm-vuejs-2a6f7",
  storageBucket: "crm-vuejs-2a6f7.appspot.com",
  messagingSenderId: "1077691038540",
  appId: "1:1077691038540:web:98ca3e3a2c921863342de9"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


