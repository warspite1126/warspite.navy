<template>
  <v-container tag="article" fluid>
    <v-container fluid class="ma-0 pa-0">
      <v-row justify="center">
        <v-col
          cols="12"
          class="text-center"
          style="background: linear-gradient(135deg, #555, #000)"
        >
          <img
            src="/konoxa/konoxa-logo.svg"
            alt="KonoXa"
            class="ma-4"
            style="max-width: 20em"
          />
          <p class="text-h5 text-sm-h4 white--text">荷物追跡サービス</p>
        </v-col>
        <v-col cols="12" class="gradient-bg pa-1"></v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row tag="section" justify="center" justify-xl="start">
        <v-col tag="h3" cols="12" class="text-center text-h3 mt-6"
          >通知機能</v-col
        >
        <v-col
          v-for="(e, index) in r_images"
          :key="index"
          cols="12"
          sm="10"
          md="6"
          lg="6"
          xl="3"
        >
          <v-card>
            <v-img :src="e"></v-img>
          </v-card>
        </v-col>
      </v-row>

      <v-row tag="section" justify="center">
        <v-col tag="h3" cols="12" class="text-center text-h3 mt-4"
          >追跡登録</v-col
        >
        <v-col
          v-for="(e, index) in toroku_images"
          :key="index"
          cols="12"
          sm="10"
          md="6"
          lg="6"
          xl="3"
        >
          <v-card>
            <v-img :src="e"></v-img>
          </v-card>
        </v-col>
      </v-row>

      <v-row tag="section" justify="center">
        <v-col tag="h3" cols="12" class="text-center text-h3 mt-4"
          >追跡機能</v-col
        >

        <v-col
          v-for="(e, index) in tr_images"
          :key="index"
          cols="12"
          sm="10"
          md="8"
          lg="5"
          xl="4"
        >
          <v-card>
            <v-img :src="e"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts">
export default {
  data() {
    return {
      r_images: [
        '/konoxa/konoxa-yamato.png',
        '/konoxa/konoxa-yubin02.png',
        '/konoxa/konoxa-yubin.png',
        '/konoxa/konoxa-sagawa.png',
      ],
      tr_images: ['/konoxa/konoxa-tr.png', '/konoxa/konoxa-tr-yamato.png'],
      toroku_images: [
        '/konoxa/konoxa-toroku.png',
        '/konoxa/konoxa-jizen-toroku.png',
      ],
    }
  },
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
