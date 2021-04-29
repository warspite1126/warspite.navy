<template>
  <v-container class="mt-3">
    <v-row justify="center">
      <v-col cols="12" sm="9" md="8" lg="7" xl="6">
        <index-image />
      </v-col>
      <v-col cols="12" sm="9" md="4" lg="4" xl="3">
        <news />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import IndexImage from '~/components/index/IndexImage.vue'
import News from '~/components/index/News.vue'
export default {
  components: { News, IndexImage },
}
</script>
