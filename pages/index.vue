<template>
  <v-container>
    <v-row justify="center">
      <index-image />
      <news />
    </v-row>
  </v-container>
</template>

<script>
import IndexImage from './index-image.vue'
import News from './news.vue'
export default {
  components: { News, IndexImage },
}
</script>
