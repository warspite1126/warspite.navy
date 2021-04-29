<template>
  <v-container fluid>
    <v-row>
      <profile />
    </v-row>
    <v-row justify="center" class="mt-5">
      <social />
      <game />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Game from '~/components/about-me/Game.vue'
import Social from '~/components/about-me/Social.vue'
import Profile from '~/components/about-me/Profile.vue'
export default {
  components: { Game, Social, Profile },
}
</script>
