<template>
  <v-container tag="article" fluid>
    <v-row
      justify="center"
      style="background: linear-gradient(135deg, #555, #000)"
    >
      <v-col
        cols="6"
        sm="5"
        md="4"
        class="d-flex align-center justify-center mt-4"
      >
        <img
          src="/about-me/icon01.png"
          alt="profile icon"
          style="max-width: 100%"
      /></v-col>
      <v-col class="d-flex align-center justify-center mb-4" cols="12">
        <h3 class="text-h4 text-sm-h2 white--text text-capitalize">leon</h3>
      </v-col>
      <v-col cols="12" class="gradient-bg pa-1" />
    </v-row>
    <v-row class="mt-6" justify="center">
      <v-col cols="12" sm="9" md="4" lg="3" xl="2">
        <social />
      </v-col>
      <v-col cols="12" sm="9" md="7" lg="6" xl="5">
        <game />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Game from '~/components/about-me/Game.vue'
import Social from '~/components/about-me/Social.vue'
export default {
  components: { Game, Social },
}
</script>
