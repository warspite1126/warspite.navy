<template>
  <v-container class="mt-2">
    <v-row justify="center" justify-lg="start">
      <v-card
        v-for="(e, index) in works"
        :key="index"
        class="ma-2"
        min-width="10em"
        max-width="22em"
        :to="e.link"
      >
        <v-img :src="e.img"></v-img>
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
          img: '/r2.jpg',
          description: 'Minecraft - Discord連携',
          link: '/works/columba-livia',
        },
        {
          title: 'RedShot',
          img: '/r2.jpg',
          description: 'サーバーサイドで銃火器',
          link: '/',
        },
        {
          title: 'KonoXa',
          img: '/r2.jpg',
          description: '荷物の配送状況を通知',
          link: '/',
        },
        {
          title: 'Kyokotan',
          img: '/r2.jpg',
          description: '荷物の配送状況を通知(サポート終了)',
          link: '/',
        },
      ],
    }
  },
}
</script>
