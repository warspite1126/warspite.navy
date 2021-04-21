<template>
  <v-app v-resize="onResize">
    <v-app-bar app dense>
      <v-toolbar-title class="ml-4 overflow-visible">
        warspite.navy
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon v-if="nav" @click="drawer = true" />

      <v-tabs v-if="!nav" right>
        <v-tab
          v-for="(menuItem, index) in menuItems"
          :key="index"
          :to="menuItem.to"
        >
          {{ menuItem.name }}</v-tab
        >
      </v-tabs>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary right>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            v-for="(menuItem, index) in menuItems"
            :key="index"
            :to="menuItem.to"
          >
            <v-list-item-title> {{ menuItem.name }} </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      nav: false,
      menuItems: [
        {
          name: 'index',
          to: '/',
        },
        {
          name: 'services',
          to: '/services',
        },
        {
          name: 'works',
          to: '/works',
        },
      ],
    }
  },
  mounted() {
    this.onResize()
  },
  methods: {
    onResize() {
      if (window.innerWidth <= 768) {
        this.nav = true
      } else {
        this.nav = false
        this.drawer = false
      }
    },
  },
}
</script>
