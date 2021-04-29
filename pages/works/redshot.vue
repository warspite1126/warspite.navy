<template>
  <v-container tag="article" fluid>
    <v-container fluid class="ma-0 pa-0">
      <v-row justify="center">
        <v-col
          cols="12"
          class="text-center white--text"
          style="background: linear-gradient(135deg, #555, #000)"
        >
          <h1 class="text-h3 text-sm-h2 my-4">RedShot</h1>
          <p class="text-h5">銃火器プラグイン</p>
        </v-col>
        <v-col cols="12" class="gradient-bg pa-1"></v-col>
      </v-row>
    </v-container>

    <v-container class="mt-8">
      <v-row justify="center">
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
          <video v-if="e.video" width="100%" controls :src="e.video" />
          <v-car v-if="e.image">
            <v-img :src="e.image"></v-img>
            <noscript
              ><img :src="e.image" alt="redshot config" style="width: 100%"
            /></noscript>
          </v-car>
        </v-col>

        <v-col tag="section" class="text-center mt-6 text-h4" cols="12">
          <a
            href="https://github.com/warspitenavy/redshot/"
            class="text-decoration-none"
          >
            <v-icon x-large>mdi-github</v-icon>
            RedShot - GitHub
          </a>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        {
          title: '精度',
          text: '腰撃ち・しゃがみ撃ち・覗きうちによって命中精度が変化',
          video:
            'https://www.dl.dropboxusercontent.com/s/vxht9s7mne9sfi6/seido.mp4',
        },
        {
          title: '射撃',
          text: 'ダメージのある雪玉を連射',
          video:
            'https://www.dl.dropboxusercontent.com/s/tokrxae0pw6wdej/shoot.mp4',
        },
        {
          title: '照準',
          text: 'スコープ機能',
          video:
            'https://www.dl.dropboxusercontent.com/s/1awzuj5obrfk30b/scope.mp4',
        },
        {
          title: 'カスタマイズ',
          text: 'ダメージ量・精度・自由にカスタム',
          image: '/redshot/redshot_conf.png',
        },
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
