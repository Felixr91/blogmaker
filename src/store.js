import Vue from 'vue'
import Vuex from 'vuex'
// import VueRouter from 'vue-router';
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    goBlog() {
      router.push({ name: 'postblog' })
    }
  }
})
