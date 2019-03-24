import Vue from 'vue'
import Vuex from 'vuex'
// import VueRouter from 'vue-router';
import router from './router'
import firebase from 'firebase'
import db from './utils/firebaseInit'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},

  },
  mutations: {

  },
  actions: {
    goBlog() {
      router.push({ name: 'postblog' })
    },
    goHome() {
      router.push({ name: 'home' })
    },
    goDashboard() {
      router.push({ name: 'dashboard' })
    },
    getBlogs({ commit, dispatch }) {
      db.collection("blogs").get().then(querySnapShot => {
        var blogs = []
        querySnapShot.forEach(docRef => {
          var blog = docRef.data()
          blog.id = docRef.id
          blogs.push(blog)
        })
        commit("setBlogs", blogs)
      })
        .catch(err => { console.error(err) })
    },
  }
})
