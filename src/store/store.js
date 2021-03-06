import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info';
import category from './category';
import record from './record';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  actions: {
    async fetchCurrency() {
      //в комментариях сервис валют с уникальным api key
      //const key = process.env.VUE_APP_FIXER
      //const res = await fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB`)
      const res = await fetch(`https://api.exchangeratesapi.io/latest`)
      return await res.json()
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth, info, category, record
  }
})
