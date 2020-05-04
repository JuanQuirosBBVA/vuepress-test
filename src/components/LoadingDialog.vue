<template >
<div id="LoadingDialog">
 <v-dialog
                  v-model="dialog"
                  hide-overlay
                  persistent
                  width="300"
                >
                  <v-card
                    color="primary"
                    dark
                  >
                    <v-card-text>
                      {{this.loadingText}}
                      <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                      ></v-progress-linear>
                    </v-card-text>
                  </v-card>
                </v-dialog>
</div>
</template>
<script>
export default {
  data() {
    return { 
      loadingText: "Cargando comentarios",
      dialog: false
    }
  },
  methods: {
    showDialog(txt){
      this.loadingText= txt
      this.dialog = true
    },
    closeDialog(){
      this.dialog = false
    }
          
  }
}
</script>