<template>
  <v-app>
    <v-app-bar app dark>
      <v-toolbar-title class="ml-4 overflow-visible d-flex align-center">
        <img src="/warspite-navy-white.svg" class="header-logo" />
      </v-toolbar-title>
      <v-spacer />
      <!-- <v-app-bar-nav-icon @click="drawer = true" /> -->
      <!-- <label for="drawerCheckbox">
        <div class="v-icon mdi mdi-menu" />
      </label>
      <label class="drawer-overlay" for="drawerCheckbox"></label> -->

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

    <!-- <input id="drawerCheckbox" class="drawer-checkbox" type="checkbox" hidden /> -->
    <!-- <v-navigation-drawer v-model="drawer" fixed temporary right>
      <v-list nav dense class="navigation-list">
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
    </v-navigation-drawer> -->

    <v-main>
      <v-tabs class="sp-tab" show-arrows dark color="light-green">
        <v-tab
          v-for="(menuItem, index) in menuItems"
          :key="index"
          :to="menuItem.to"
        >
          {{ menuItem.name }}
        </v-tab>
      </v-tabs>
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

// .v-app-bar {
//   z-index: 2;
// }
// .v-main {
//   z-index: 1;
// }

// .drawer-icon {
//   @include bp-tb {
//     display: none !important;
//   }
// }
// .drawer-overlay {
//   position: fixed;

//   width: 100%;
//   height: 100%;

//   display: none;
//   opacity: 0;
//   background: black;

//   pointer-events: none;
// }

// .navigation-list {
//   display: none;
//   z-index: 3;
//   position: fixed;
//   width: 20em;

//   left: auto;
//   right: auto;
// }
// #drawerCheckbox:checked ~ .navigation-list {
//   display: block;
// }

// .v-navigation-drawer {
//   display: block;
// }
</style>
