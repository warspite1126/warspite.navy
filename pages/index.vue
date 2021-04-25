<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8" style="background: red">
        <index-image />
      </v-col>
      <v-col cols="4" style="background: red">
        <news />
      </v-col>
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
