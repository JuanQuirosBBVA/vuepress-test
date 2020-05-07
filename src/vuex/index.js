// vuex/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({ modules: { auth: {state : {
    token: localStorage.getItem('auth._token.local') || '',
    status: '',
    user: {}
  },getters : {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
    user: state => state.user.firstname
  },mutations : {
    AUTH_REQUEST(state){
      state.status = 'loading'
    },
    AUTH_SUCCESS(state, user){
      state.status = 'success'
      state.token = user.token
      console.log(state.user)
    },
    USER_REQUEST(state, user){
      state.user = user,
      console.log(state.user)
    },
    AUTH_ERROR(state){
      state.status = 'error'
    },
  },actions : {
    AUTH_REQUEST({commit, dispatch}, user){
      return new Promise((resolve, reject) => { // The Promise used for router redirect in login
        commit('AUTH_REQUEST')
        axios({url: 'https://restaurantes.celicidad.net/api/auth/token/', data: user, method: 'POST' })
          .then(resp => {
            const token = resp.data.token
            const user = resp.data
            localStorage.setItem('auth._token.local', token) // store the token in localstorage
            axios.defaults.headers.common['Authorization'] = "Bearer " + token
            commit('AUTH_SUCCESS', user)
            dispatch('USER_REQUEST')
            resolve(resp)
          })
        .catch(err => {
          commit('AUTH_ERROR', err)
          localStorage.removeItem('auth._token.local') // if the request fails, remove any possible user token if possible
          reject(err)
        })
      })
    },
    USER_REQUEST({commit/*, dispatch*/}){
      return new Promise((resolve, reject) => { // The Promise used for router redirect in login
        axios({url: 'https://restaurantes.celicidad.net/api/auth/user/', method: 'GET' })
          .then(resp => {
            console.log(resp.data)
            commit('USER_REQUEST', resp.data)
            /*const token = resp.data.token
            const user = resp.data
            localStorage.setItem('auth._token.local', token) // store the token in localstorage
            axios.defaults.headers.common['Authorization'] = "Bearer " + token
            commit('AUTH_SUCCESS', user)
            // you have your token, now log in your user :)
            //dispatch(USER_REQUEST)
            resolve(resp)*/
          })
        .catch(err => {
          commit('AUTH_ERROR', err)
          localStorage.removeItem('auth._token.local') // if the request fails, remove any possible user token if possible
          reject(err)
        })
      })
    },
    AUTH_LOGOUT({commit/*, dispatch*/}){
        return new Promise((resolve/*, reject*/) => {
          commit('AUTH_LOGOUT')
          localStorage.removeItem('auth._token.local') // clear your user's token from localstorage
          delete axios.defaults.headers.common['Authorization']
          resolve()
        })
      }
  }  }}})