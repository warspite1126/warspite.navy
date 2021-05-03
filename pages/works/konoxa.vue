<template>
  <v-container tag="article" fluid>
    <title-component title="KonoXa" text="荷物追跡サービス" />
    <v-container class="pa-6 ma-6 px-xl-16 mx-auto">
      <konoxa-section-component :section="notificationSection" />
      <konoxa-section-component :section="trackingSection" />
      <konoxa-section-component :section="registSection" />
    </v-container>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import KonoxaSectionComponent from '~/components/works/KonoxaSectionComponent.vue'
import TitleComponent from '~/components/works/TitleComponent.vue'
export default Vue.extend({
  components: { TitleComponent, KonoxaSectionComponent },
  data() {
    return {
      notificationSection: {
        title: '通知機能',
        img: [
          '/konoxa/konoxa-yamato.png',
          '/konoxa/konoxa-yubin02.png',
          '/konoxa/konoxa-yubin.png',
          '/konoxa/konoxa-sagawa.png',
        ],
      },
      trackingSection: {
        title: '追跡機能',
        img: ['/konoxa/konoxa-tr.png', '/konoxa/konoxa-tr-yamato.png'],
      },
      registSection: {
        title: '追跡登録',
        img: ['/konoxa/konoxa-toroku.png', '/konoxa/konoxa-jizen-toroku.png'],
      },
    }
  },
})
</script>
