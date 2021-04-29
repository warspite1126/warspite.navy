<template>
  <v-container tag="article" fluid>
    <page-title />
    <features />
  </v-container>
</template>

<script lang="ts">
import PageTitle from '~/components/works/columba-livia/PageTitle.vue'
import Features from '~/components/works/columba-livia/Features.vue'
export default {
  components: { PageTitle, Features },
}
</script>
