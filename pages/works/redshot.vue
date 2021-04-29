<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col
        cols="12"
        class="text-center white--text"
        style="background: linear-gradient(135deg, #555, #000)"
      >
        <p class="text-h3 text-sm-h2">RedShot</p>
        <span class="text-h4">銃火器プラグイン</span>
      </v-col>
      <v-col cols="12" class="gradient-bg pa-1"></v-col>
      <v-col cols="12" sm="10" md="9" lg="7" xl="6">
        <p class="text-center text-h3 text-sm-h2 text-capitalize">features</p>

        <section>
          <p class="text-center text-h4">精度</p>
          <p class="text-body-1">
            腰撃ち・しゃがみ撃ち・覗きうちによって命中精度が変化
          </p>
          <video
            width="100%"
            controls
            src="https://www.dl.dropboxusercontent.com/s/vxht9s7mne9sfi6/seido.mp4"
          />
        </section>

        <section class="mt-8">
          <p class="text-center text-h4">射撃</p>
          <p class="text-body-1">ダメージのある雪玉を連射</p>
          <video
            width="100%"
            controls
            src="https://www.dl.dropboxusercontent.com/s/tokrxae0pw6wdej/shoot.mp4"
          />
        </section>

        <section class="mt-8">
          <p class="text-center text-h4">照準</p>
          <p class="text-body-1">かぼちゃを被り、スコープに</p>
          <video
            width="100%"
            controls
            src="https://www.dl.dropboxusercontent.com/s/1awzuj5obrfk30b/scope.mp4"
          />
        </section>

        <section class="mt-8">
          <p class="text-center text-h4">カスタマイズ</p>
          <p class="text-body-1">ダメージ量・精度・自由にカスタム</p>
          <v-card>
            <v-img src="/redshot_conf.png"></v-img>
            <noscript
              ><img
                src="/redshot_conf.png"
                alt="redshot_conf.png"
                style="width: 100%"
            /></noscript>
          </v-card>
        </section>

        <section class="text-center mt-6 text-h4">
          <a
            href="https://github.com/warspitenavy/redshot/"
            class="text-decoration-none"
          >
            <v-icon x-large>mdi-github</v-icon>
            RedShot - GitHub
          </a>
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>

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
