<template>
  <v-container fluid>
    <v-row>
      <v-col
        class="text-center"
        cols="12"
        style="background: linear-gradient(135deg, #555, #000)"
      >
        <v-img class="mx-auto mt-4" max-width="16em" src="/icon01.png"> </v-img>
        <div class="text-h2" style="color: white">Leon</div>
      </v-col>
    </v-row>
    <v-row justify="center" class="mt-5">
      <v-col cols="12" sm="8" md="4" lg="3">
        <v-card>
          <v-card-title class="justify-center text-h5">Social</v-card-title>
          <v-list>
            <v-list-item-group>
              <v-list-item
                v-for="(e, index) in social"
                :key="index"
                :href="e.link"
              >
                <v-list-item-icon>
                  <v-icon large v-text="e.icon"></v-icon>
                  <v-img
                    v-if="e.origIcon"
                    :src="e.origIcon"
                    width="36px"
                  ></v-img>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    class="text-body-1"
                    v-text="e.title"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" sm="8" md="7" lg="6" xl="5">
        <v-card>
          <v-card-title class="justify-center text-h5">Game</v-card-title>
          <v-card-text>
            <v-list disabled>
              <v-list-item-group>
                <v-list-item v-for="(e, index) in game" :key="index">
                  <v-list-item-content>
                    <v-list-item-title
                      class="text-body-1"
                      v-text="e.title"
                    ></v-list-item-title>
                    <v-img :src="e.image" style="border-radius: 1em"></v-img>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  data() {
    return {
      social: [
        {
          title: 'warspitenavy',
          icon: 'mdi-github',
          link: 'https://github.com/warspitenavy/',
        },
        {
          title: 'warspitenavy',
          icon: 'mdi-twitter',
          link: 'https://twitter.com/warspitenavy/',
        },
        {
          title: 'warspitenavy',
          origIcon: '/qiita.png',
          link: 'https://qiita.com/warspitenavy/',
        },
      ],
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
