<template>
  <v-container fluid>
    <v-row justify="center">
      <page-title />
      <v-col cols="12" class="gradient-bg pa-1"></v-col>
      <features />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import PageTitle from '~/components/works/columba-livia/PageTitle.vue'
import Features from '~/components/works/columba-livia/Features.vue'
export default {
  components: { PageTitle, Features },
}
</script>

<style scoped>
.gradient-bg {
  background: linear-gradient(
    90deg,
    #3854ee 0%,
    #7f7fff 40%,
    #ff47ff 80%,
    #ff7829 100%
  );
}
</style>
