<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-alert
          class="mx-auto mt-4"
          type="warning"
          colored-border
          border="bottom"
          max-width="36em"
          >readme作るの面倒なので、使い方は作者に聞いてください！</v-alert
        >
      </v-col>

      <v-col
        v-for="(e, index) in sections"
        :key="index"
        tag="section"
        cols="12"
        sm="11"
        md="10"
        lg="9"
        xl="7"
      >
        <h2 class="text-center text-h3" v-text="e.title"></h2>
        <p class="my-4" v-text="e.text"></p>
        <v-card class="mx-auto">
          <v-img :src="e.image"></v-img>
          <noscript><img :src="e.image" style="width: 100%" /></noscript>
        </v-card>
      </v-col>

      <v-col tag="section" class="text-center mt-6 text-h4" cols="12">
        <a
          href="https://github.com/warspitenavy/columba-livia/"
          class="text-decoration-none"
        >
          <v-icon x-large>mdi-github</v-icon>
          ColumbaLivia - GitHub
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
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
            'プレイヤーのBotを設定できるので、誰がログイン中か、また人数もひと目で分かります。Botが設定されていれば、ゲーム内チャットは、そのプレイヤーBotから発信されます',
          image: '/columba-livia/columba-livia-discord.jpg',
        },
      ],
    }
  },
}
</script>
