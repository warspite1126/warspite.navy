<template>
  <v-col cols="12" sm="10" md="9" lg="7" xl="6">
    <v-alert
      class="mx-auto"
      type="warning"
      colored-border
      border="bottom"
      max-width="36em"
      >readme作るの面倒なので、使い方は作者に聞いてください！</v-alert
    >
    <p class="text-center text-h3 text-sm-h2 text-capitalize">features</p>

    <section>
      <p class="text-center text-h4">チャット同期</p>
      <p class="text-body-1">Discordとゲーム内のチャットが同期します</p>

      <v-card class="mx-auto">
        <v-img src="/columba-livia-mc.jpg"></v-img>
        <noscript
          ><img
            src="/columba-livia-mc.jpg"
            alt="columba-livia-mc.jpg"
            style="width: 100%"
        /></noscript>
      </v-card>
    </section>

    <section>
      <p class="text-center text-h4 mt-8">プレイヤーとBotをリンク</p>
      <div class="text-body-1">
        <p>
          プレイヤーのBotを設定できるので、誰がログイン中か、また人数もひと目で分かります。
        </p>
        <p>
          Botが設定されていれば、ゲーム内チャットは、そのプレイヤーBotから発信されます
        </p>
      </div>
      <v-card class="mx-auto" max-width="48em">
        <v-img src="/columba-livia-discord.jpg"></v-img>
        <noscript
          ><img
            src="/columba-livia-discord.jpg"
            alt="columba-livia-discord.jpg"
            style="width: 100%"
        /></noscript>
      </v-card>
    </section>

    <section class="text-center mt-6 text-h4">
      <a
        href="https://github.com/warspitenavy/columba-livia/"
        class="text-decoration-none"
      >
        <v-icon x-large>mdi-github</v-icon>
        ColumbaLivia - GitHub
      </a>
    </section>
  </v-col>
</template>
