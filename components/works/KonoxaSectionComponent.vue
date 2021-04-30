<template>
  <v-row tag="section" justify="center" justify-xl="start">
    <v-col
      tag="h3"
      cols="12"
      class="text-center text-h3 mt-6"
      v-text="section.title"
    />
    <v-col
      v-for="(e, index) in section.img"
      :key="index"
      cols="12"
      sm="10"
      md="6"
      lg="6"
      xl="4"
    >
      <img :src="e" style="width: 100%" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
interface Section {
  title: String
  img: String[]
}
export default Vue.extend({
  props: {
    section: {
      type: Object as Vue.PropType<Section>,
      default: () => ({ title: '', img: [''] }),
    },
  },
})
</script>

<style scoped>
.media-content {
  box-shadow: 0 0 0.3em 0.1em grey;
  border-radius: 0.25em;
}
</style>


<style scoped>
img {
  box-shadow: 0 0 0.3em 0.1em grey;
  border-radius: 0.25em;
}
</style>
