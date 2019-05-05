<template>
  <v-app id="ghood" dark>
    <v-navigation-drawer v-model="drawer" fixed clipped app>
      <NavList :items="top_items" />
      <v-spacer></v-spacer>
      <NavList :items="bottom_items" />
    </v-navigation-drawer>
    <v-toolbar app absolute clipped-left>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5"
        ><span class="secondary--text">g</span>hood&nbsp;
        <span class="font-weight-light">Dashboard</span>
      </span>
      <v-spacer></v-spacer>
      <v-layout row align-center>
        <v-icon left>stars</v-icon>
        <v-flex
          ><v-progress-linear id="progress" value="80"></v-progress-linear
        ></v-flex>
      </v-layout>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <!--Content-->
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavList from '@/components/NavList.vue'

export default {
  components: {
    NavList,
  },
  data: () => ({
    drawer: null,
    top_items: [
      { heading: 'Navigation' },
      { icon: 'dashboard', text: 'Dashboard', active: true },
      { icon: 'trending_up', text: 'Progress' },
      { icon: 'card_giftcard', text: 'Rewards' },
    ],
    bottom_items: [
      { heading: 'Other' },
      { icon: 'help', text: 'Help' },
      { icon: 'settings', text: 'Settings' },
    ],
  }),
}
</script>

<style lang="stylus">
#ghood
  .v-navigation-drawer__border
    display: none
</style>
