<template>
  <v-row justify="center">
    <v-col
      cols="12"
      class="text-center white--text"
      style="background: linear-gradient(135deg, #555, #000)"
    >
      <h1 class="text-h3 text-sm-h2 my-4" v-text="title" />
      <p class="text-h5" v-text="text" />
    </v-col>
    <v-col cols="12" class="gradient-bg pa-1" />
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
})
</script>
