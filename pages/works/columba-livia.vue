<template>
  <article-component
    title="ColumbaLivia"
    text="SpigotサーバーとDiscordを連携させるプラグイン"
    :sections="sections"
    :github="github"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import ArticleComponent from '~/components/works/ArticleComponent.vue'
export default Vue.extend({
  components: { ArticleComponent },
  data() {
    return {
      sections: [
        {
          title: 'チャット同期',
          text: 'Discordとゲーム内のチャットが同期します',
          image: '/columba-livia/columba-livia-mc.jpg',
        },
        {
          title: 'プレイヤーとBotをリンク',
          text:
            'プレイヤーのBotを設定できるので、誰がログイン中か、また人数もDiscord上で確認できます。Botが設定されていれば、ゲーム内チャットは、そのプレイヤーBotから発信されます',
          image: '/columba-livia/columba-livia-discord.jpg',
        },
      ],
      github: {
        text: 'columba-livia',
        link: 'https://github.com/warspitenavy/columba-livia',
      },
    }
  },
})
</script>
