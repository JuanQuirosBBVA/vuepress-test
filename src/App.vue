<template>
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

