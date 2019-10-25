<template>
  <v-app>

    <v-navigation-drawer temporary v-model="drawer" app fixed>
      <v-list>
        <v-list-item
                v-for="item in menuItems"
                :key="item.title"
                :to="item.link">
          <v-list-item-action>
            <v-icon color="black">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        <v-icon>
          menu
        </v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title class="headline text-uppercase">
        <router-link class="hidden-xs-only" to="/" tag="span" style="cursor: pointer">
        <v-img :src="require('./assets/logo.svg')"
               aspect-radio="1"
               width="50"
               class="hidden-xl-only"
        ></v-img>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
                text
                v-for="item in menuItems"
                :key="item.title"
                :to="item.link"
        >
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <!--<v-footer app>
      <span>&copy; 2019</span>
    </v-footer>-->

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data: () => ({
      drawer: false,
      menuItems: [
        {icon: 'home', title: 'Home', link: '/'},
      ]
    }),

  }
</script>
<style scoped>
</style>