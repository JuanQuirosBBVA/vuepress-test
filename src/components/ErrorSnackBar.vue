<template>
<div id="ErrorSnackBar">
    <v-snackbar
            v-model="snackbar"
            :bottom="true"
            color="error"
          >
            {{ snackbartext }}
            <v-btn
              dark
              red
              text
              @click="snackbar = false"
            >
              Cerrar
            </v-btn>
    </v-snackbar>
</div>
</template>
<script>
export default {
  data() {
    return { 
      snackbar: false,
      snackbartext: ''
    }
  }
}
</script>