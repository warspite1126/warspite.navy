<template>
  <v-card>
    <v-card-title class="justify-center text-h5 text-capitalize"
      >game</v-card-title
    >
    <v-card-text>
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="(e, index) in game"
            :key="index"
            @click="
              dialogImage = e.image
              dialog = true
            "
          >
            <v-list-item-content>
              <!-- <p v-text="e.title"></p> -->
              <p class="text-body-1 text-sm-h6 mb-2" v-text="e.title" />
              <img :src="e.image" style="width: 100%; border-radius: 1em" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-dialog v-model="dialog">
        <v-img :src="dialogImage" />
      </v-dialog>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      dialog: false,
      dialogImage: '',
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
  methods: {
    conl() {
      console.log('conl')
    },
  },
})
</script>
