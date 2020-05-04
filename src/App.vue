
<template>
  <v-app id="keep"  >
    <v-app-bar
      app
      clipped-left
      color="white"
      elevation="0"
    >
       <router-link to="/"><span class="title ml-3 mr-5">Escuela&nbsp;<span class="font-weight-light">Celicidad</span></span></router-link>
      <v-spacer></v-spacer>
       <router-link to="/login"><span class="title ml-3 mr-5">Inicia Sesión</span></router-link>
    </v-app-bar>

    <v-content class="white">
      <router-view ></router-view>
    </v-content>
  </v-app>
</template>

<script>

  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      items: [
        { icon: 'lightbulb_outline', text: 'Notes' },
        { icon: 'touch_app', text: 'Reminders' },
        { divider: true },
        { heading: 'Labels' },
        { icon: 'add', text: 'Create new label' },
        { divider: true },
        { icon: 'archive', text: 'Archive' },
        { icon: 'delete', text: 'Trash' },
        { divider: true },
        { icon: 'settings', text: 'Settings' },
        { icon: 'chat_bubble', text: 'Trash' },
        { icon: 'help', text: 'Help' },
        { icon: 'phonelink', text: 'App downloads' },
        { icon: 'keyboard', text: 'Keyboard shortcuts' },
      ]
  })}
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