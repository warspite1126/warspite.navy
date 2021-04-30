<template>
  <v-app>
    <v-app-bar app dark>
      <v-toolbar-title class="ml-4 overflow-visible d-flex align-center">
        <router-link to="/" style="height: 1.6em">
          <img src="/warspite-navy-white.svg" style="height: 1.6em" />
        </router-link>
      </v-toolbar-title>

      <v-spacer />

      <v-tabs class="tb_tab" right color="light-green">
        <v-tab
          v-for="(menuItem, index) in menuItems"
          :key="index"
          :to="menuItem.to"
        >
          {{ menuItem.name }}</v-tab
        >
      </v-tabs>
    </v-app-bar>

    <v-main>
      <v-tabs class="sp-tab" show-arrows fixed-tabs dark color="light-green">
        <v-tab
          v-for="(menuItem, index) in menuItems"
          :key="index"
          :to="menuItem.to"
        >
          {{ menuItem.name }}
        </v-tab>
      </v-tabs>
      <v-container fluid class="pa-0">
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
          name: 'works',
          to: '/works',
        },
        {
          name: 'about me',
          to: '/about-me',
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
.tb_tab {
  display: none;

  @include bp-tb {
    display: block !important;
  }
}

.sp-tab {
  @include bp-tb {
    display: none !important;
  }
}
</style>
