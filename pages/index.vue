<template>
  <v-container class="pa-6">
    <v-row justify="center">
      <v-col cols="12" sm="9" md="8" lg="7" xl="6" class="pa-3">
        <img src="/r2_e.jpg" class="media-shadow" style="width: 100%" />
      </v-col>
      <v-col cols="12" sm="9" md="4" lg="4" xl="3" class="pa-3">
        <v-card>
          <v-card-title class="text-capitalize justify-center text-h5"
            >news</v-card-title
          >
          <v-card-text>
            <v-list>
              <v-list-item-group>
                <v-list-item
                  v-for="(e, index) in news"
                  :key="index"
                  :to="e.link"
                >
                  <v-list-item-content>
                    <v-list-item-title
                      class="text-subtitle-1"
                      v-text="e.title"
                    ></v-list-item-title>
                    <v-list-item-subtitle
                      class="text-subtitle-1"
                      v-text="e.date"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      news: [
        {
          title: 'Yanwen対応',
          date: '2021.05.29',
          link: '/works/konoxa',
        },
        {
          title: 'ColumbaLivia完成',
          date: '2021.04.20',
          link: '/works/columba-livia',
        },
        {
          title: 'KonoXa稼働開始',
          date: '2021.04.06',
          link: '/works/konoxa',
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
