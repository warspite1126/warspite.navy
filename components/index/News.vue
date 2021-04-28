<template>
  <v-card>
    <v-card-title class="text-capitalize justify-center text-h5"
      >news</v-card-title
    >
    <v-card-text>
      <v-list flat>
        <v-list-item-group>
          <v-list-item v-for="(e, index) in news" :key="index" :to="e.link">
            <v-list-item-content>
              <v-list-item-title
                class="subtitle-1"
                v-text="e.title"
              ></v-list-item-title>
              <v-list-item-subtitle
                class="text-body-1"
                v-text="e.date"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
export default {
  data() {
    return {
      news: [
        {
          title: 'ColumbaLivia完成',
          date: '2021.04.20',
          link: '/works/columba-livia',
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
