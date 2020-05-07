
<template>
  <v-app id="keep"  >
    <v-app-bar
      app
      clipped-left
      color="white"
      elevation="0"
    >
       <router-link to="/"><span class="title ml-3 mr-5">Escuela&nbsp;<span class="font-weight-light">Celicidad {{$store.state.user}} {{this.drawer}}</span></span></router-link>
      <v-spacer></v-spacer>
       <router-link v-if='!logged' to="/login"><span class="title ml-3 mr-5">Inicia Sesión {{this.authSt}}</span></router-link>
       <router-link v-if='logged' to="/login"><span class="title ml-3 mr-5">Sesión iniciada {{this.authSt}}</span></router-link>
    </v-app-bar>

    <v-content class="white">
      <router-view ></router-view>
    </v-content>
  </v-app>
</template>

<script>

import store from './vuex'

export default {
    computed: {
      user() {
         return store.getters.getUser;
      },
      isAuthenticated(){
        return store.getters.isAuthenticated;
      }},
    mounted() {
      console.log("hi")
      console.log(!store.getters.isAuthenticated)
      console.log(store.getters.user)
    },
    data: () => ({
      authSt: null,
      logged: store.getters.isAuthenticated,
      drawer: 1,
  }),
   watch: {
    user(newValue, oldValue) {
      console.log(`Updating from ${oldValue} to ${newValue}`);
      this.authSt = newValue
    },
    isAuthenticated(newValue, oldValue) {
      console.log(`Updating from ${oldValue} to ${newValue}`);
      this.logged = newValue
    },
  },}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900');
@import url('https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css');

#keep .v-navigation-drawer__border {
  display: none
}
</style>

<!--<template>
  <div id="app">
   <div v-html="input"></div>  
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'App',
  data() {
    return {
        input: null
    }
  },
   created() {
 this.loadFile()
 },
methods: {
        loadFile() {
          axios({
            method: "get",
            url: "./tutorial/index.html"
          })
            .then(result => {
              this.input = result.data;
              console.log("Data: " + result.data)
            })
            .catch(error => {
              console.error("error getting file: " + error);
            });
        },
      }
}
</script>

-->