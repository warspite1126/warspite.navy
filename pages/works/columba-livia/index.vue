<template>
  <v-container class="mt-2">
    <v-row justify="center">
      <v-col cols="12">
        <div class="text-center text-h3 text-sm-h2">
          <span>ColumbaLivia</span>
        </div>
        <div class="text-center text-h5 mt-4">
          <span>SpigotサーバーとDiscordを連携させるプラグイン</span>
        </div>
        <v-alert
          class="mt-4 mx-auto"
          type="warning"
          colored-border
          border="bottom"
          max-width="36em"
          >readme作るの面倒なので、使い方は作者に聞いてください！</v-alert
        >
      </v-col>
      <v-col cols="12" sm="10" lg="9" xl="7">
        <div class="text-center text-h3 text-sm-h2 text-capitalize">
          <span>features</span>
        </div>
        <div class="text-center text-h4 mt-4">
          <span>チャット同期</span>
        </div>
        <div class="text-body-1 mt-4">
          <p>Discordとゲーム内のチャットが同期します</p>
        </div>
        <v-card class="mx-auto mt-4">
          <v-img src="/columba-livia-mc.jpg"></v-img>
        </v-card>

        <div class="text-center text-h4 mt-8">
          <span>プレイヤーとBotをリンク</span>
        </div>
        <div class="text-body-1 mt-4">
          <p>
            プレイヤーのBotを設定できるので、誰がログイン中か、また人数もひと目で分かります。
          </p>
          <p>
            Botが設定されていれば、ゲーム内チャットは、そのプレイヤーBotから発信されます
          </p>
        </div>
        <v-card class="mx-auto mt-4" max-width="48em">
          <v-img src="/columba-livia-discord.jpg"></v-img>
        </v-card>
        <div class="text-center mt-6 text-h4">
          <a href="https://github.com/warspitenavy/columba-livia">
            <v-icon x-large>mdi-github</v-icon>
            ColumbaLivia - GitHub
          </a>
        </div>
      </v-col>
      <!-- <v-col cols="12" sm="11" md="10" lg="8" xl="7">
        <v-card>
          <v-img src="/columba-livia-mc.jpg"></v-img>
        </v-card>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {}
</script>
