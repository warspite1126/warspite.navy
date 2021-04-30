<template>
  <article-component
    title="RedShot"
    text="銃火器プラグイン"
    :sections="sections"
    :github="github"
  />
</template>

<script>
import Vue from 'vue'
import ArticleComponent from '~/components/works/ArticleComponent.vue'
export default Vue.extend({
  components: { ArticleComponent },
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
      github: {
        text: 'redshot',
        link: 'https://github.com/warspitenavy/redshot',
      },
    }
  },
})
</script>
