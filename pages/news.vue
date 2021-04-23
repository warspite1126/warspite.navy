<template>
  <v-card width="20em" class="fill-height">
    <v-card-title class="text-capitalize justify-center">news</v-card-title>
    <v-card-text>
      <v-list flat>
        <v-list-item-group>
          <v-list-item v-for="(e, index) in news" :key="index" :href="e.link">
            <v-list-item-content>
              <v-list-item-title>{{ e.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ e.date }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
export default {
  middleware: ['disable-direct-access'],
  data() {
    return {
      news: [
        {
          title: 'ColumbaLivia完成',
          date: '2021.04.20',
          link: 'https://github.com/warspitenavy/columba-livia',
        },
        {
          title: 'KonoXa稼働開始',
          date: '2021.04.06',
        },
        {
          title: 'Kyokotan終了',
          date: '2021.04.06',
        },
      ],
    }
  },
}
</script>
