<template>
  <v-col tag="section" cols="12" sm="11" md="10" lg="9" xl="7">
    <h2 class="text-center text-h3" v-text="title" />
    <p class="my-4" v-text="text" />
    <img v-if="image" :src="image" class="media-shadow" style="width: 100%" />
    <video
      v-if="video"
      controls
      class="media-shadow"
      width="100%"
      :src="video"
    />
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: { type: String, default: '' },
    text: { type: String, default: '' },
    image: { type: String, default: '' },
    video: { type: String, default: '' },
  },
})
</script>
