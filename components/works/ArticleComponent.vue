<template>
  <v-container tag="article" fluid>
    <title-component :title="title" :text="text" />
    <v-container class="pa-6 mt-6">
      <v-row justify="center">
        <section-component
          v-for="(e, index) in sections"
          :key="index"
          :title="e.title"
          :text="e.text"
          :image="e.image"
          :video="e.video"
        />
      </v-row>
      <v-row justify="center">
        <github-link :text="github.text" :link="github.link" />
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import TitleComponent from '~/components/works/TitleComponent.vue'
import SectionComponent from '~/components/works/SectionComponent.vue'
import GithubLink from '~/components/works/GithubLink.vue'
interface Section {
  title: String
  text: String
  image: String
  video: String
}
interface GitHub {
  text: String
  link: String
}
export default Vue.extend({
  components: { TitleComponent, SectionComponent, GithubLink },
  props: {
    title: { type: String, default: '' },
    text: { type: String, default: '' },
    sections: {
      type: Array as Vue.PropType<Section[]>,
      default: () => [{ title: '', text: '', image: '', video: '' }],
    },
    github: {
      type: Object as Vue.PropType<GitHub>,
      default: () => ({ text: '', link: '' }),
    },
  },
})
</script>
