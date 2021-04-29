<template>
  <v-col cols="12" sm="8" md="4" lg="3">
    <v-card>
      <v-card-title class="justify-center text-h5 text-capitalize"
        >social</v-card-title
      >
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="(e, index) in social" :key="index" :href="e.link">
            <v-list-item-icon v-if="!e.origIcon">
              <v-icon large v-text="e.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-icon v-if="e.origIcon">
              <img :src="e.origIcon" style="width: 36px" />
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
  </v-col>
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
          origIcon: '/qiita.png',
          link: 'https://qiita.com/warspitenavy/',
        },
      ],
    }
  },
}
</script>
