<template>
  <v-app id="ghood" dark>
    <v-toolbar app absolute clipped-left>
      <span class="title ml-3 mr-5">
        <span class="secondary--text">g</span>hood&nbsp;
      </span>
      <v-spacer></v-spacer>
      <div>
        <v-chip color="primary"> <v-icon>star</v-icon>25 </v-chip>
      </div>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
    <v-bottom-nav :value="true" absolute color="transparent">
      <v-btn v-for="(item, i) in bottomNav" flat :value="item.text">
        <span>{{ item.text }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    bottomNav: [
      { icon: 'home', text: 'Home', active: true },
      { icon: 'search', text: 'Discover' },
      { icon: 'person', text: 'Me' },
      { icon: 'people', text: 'Community' },
    ],
  }),
}
</script>

<style lang="stylus">
#ghood
  .v-navigation-drawer__border
    display: none
</style>
