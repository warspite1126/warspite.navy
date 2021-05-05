<template>
  <v-col tag="section" cols="12" class="text-center">
    <h3 class="text-h3 mb-4">リポジトリ</h3>
    <v-card max-width="24em" class="mx-auto" :href="link" target="blank">
      <v-card-title class="justify-center">
        <v-icon x-large>mdi-github</v-icon>
        <span class="text-h6 ma-1" v-text="text"></span>
      </v-card-title>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    text: { type: String, default: '' },
    link: { type: String, default: '' },
  },
})
</script>
