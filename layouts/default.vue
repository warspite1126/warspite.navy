<template>
  <v-app>
    <v-app-bar app dark>
      <v-toolbar-title class="ml-4 overflow-visible d-flex align-center">
        <img src="/warspite-navy-white.svg" class="header-logo" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon @click="drawer = true" />

      <v-tabs v-if="!nav" right color="light-green">
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
            <v-list-item-title class="text-uppercase">
              {{ menuItem.name }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
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
          name: 'home',
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

<style lang="scss" scoped>
.header-logo {
  height: 1.6em;
}

.v-app-bar__nav-icon {
  @include bp-tb {
    display: none !important;
  }
}

.v-tabs {
  display: none;

  @include bp-tb {
    display: block !important;
  }
}
</style>
