<template>
  <v-card>
    <v-card-title class="justify-center text-h5 text-capitalize"
      >game</v-card-title
    >
    <v-card-text>
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="(e, index) in game" :key="index">
            <v-list-item-content>
              <v-list-item-title
                class="text-h6 mb-4"
                v-text="e.title"
              ></v-list-item-title>
              <img :src="e.image" style="width: 100%; border-radius: 1em" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      game: [
        {
          title: 'THE iDOLM@STER SHINY COLORS',
          image: '/about-me/shinycolors.jpg',
        },
        {
          title: 'THE iDOLM@STER MILLION LIVE! THEATER DAYS',
          image: '/about-me/millionlive.jpg',
        },
        { title: 'Minecraft', image: '/about-me/mc.jpg' },
      ],
    }
  },
})
</script>
