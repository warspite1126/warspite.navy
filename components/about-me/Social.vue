<template>
  <v-card>
    <v-card-title class="justify-center text-h5 text-capitalize"
      >social</v-card-title
    >
    <v-list>
      <v-list-item-group>
        <v-list-item
          v-for="(e, index) in social"
          :key="index"
          :href="e.link"
          target="blank"
        >
          <v-list-item-icon v-if="!e.origIcon">
            <v-icon large v-text="e.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-icon v-if="e.origIcon">
            <img :src="e.origIcon" style="width: 36px; height: 36px" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              class="text-body-1"
              v-text="e.title"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script lang="ts">
export default {
  data() {
    return {
      social: [
        {
          title: 'warspitenavy',
          icon: 'mdi-github',
          link: 'https://github.com/warspitenavy/',
        },
        {
          title: 'warspitenavy',
          icon: 'mdi-twitter',
          link: 'https://twitter.com/warspitenavy/',
        },
        {
          title: 'warspitenavy',
          origIcon: '/about-me/qiita.png',
          link: 'https://qiita.com/warspitenavy/',
        },
      ],
    }
  },
}
</script>
