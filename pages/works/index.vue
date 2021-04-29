<template>
  <v-container class="mt-2">
    <v-row justify="center" justify-lg="start">
      <v-card
        v-for="(e, index) in works"
        :key="index"
        class="ma-2"
        min-width="0%"
        width="22em"
        min-height="0%"
        height="18em"
        :to="e.link"
      >
        <noscript
          ><img :src="e.img" style="width: 100%; height: 11em"
        /></noscript>
        <v-img :src="e.img" max-height="11em"></v-img>
        <v-card-title class="text-h5" v-text="e.title"></v-card-title>
        <v-card-text class="text-body-2" v-text="e.description"></v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  data() {
    return {
      works: [
        {
          title: 'ColumbaLivia',
          img: '/columba-livia/image.png',
          description: 'Minecraft - Discord連携',
          link: '/works/columba-livia',
        },
        {
          title: 'RedShot',
          img: '/redshot/image.png',
          description: 'Minecraft - サーバーサイドで銃火器',
          link: '/works/redshot',
        },
        {
          title: 'KonoXa(このは)',
          img: '/konoxa/konoxa-logo.png',
          description: '荷物の配送状況を通知',
          link: '/works/konoxa',
        },
        {
          title: 'Kyokotan',
          img: '/r2.jpg',
          description: '荷物の配送状況を通知(サポート終了)',
          link: '/works',
        },
      ],
    }
  },
}
</script>
