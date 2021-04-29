<template>
  <v-col cols="12" sm="8" md="7" lg="6" xl="5">
    <v-card>
      <v-card-title class="justify-center text-h5 text-capitalize"
        >game</v-card-title
      >
      <v-card-text>
        <v-list disabled>
          <v-list-item-group>
            <v-list-item v-for="(e, index) in game" :key="index">
              <v-list-item-content>
                <v-list-item-title
                  class="text-h6 mb-4"
                  v-text="e.title"
                ></v-list-item-title>
                <v-img :src="e.image" style="border-radius: 1em"></v-img>
                <noscript
                  ><img :src="e.image" :alt="e.title" style="width: 100%"
                /></noscript>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script lang="ts">
export default {
  data() {
    return {
      game: [
        { title: 'THE iDOLM@STER SHINY COLORS', image: '/shinycolors.jpg' },
        {
          title: 'THE iDOLM@STER MILLION LIVE! THEATER DAYS',
          image: '/millionlive.jpg',
        },
        { title: 'Minecraft', image: '/mc.jpg' },
      ],
    }
  },
}
</script>
