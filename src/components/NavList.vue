<template>
  <v-list dense>
    <template v-for="(item, i) in items">
      <v-layout v-if="item.heading" :key="i" row align-center>
        <v-flex xs6>
          <v-subheader v-if="item.heading">
            {{ item.heading }}
          </v-subheader>
        </v-flex>
      </v-layout>
      <v-divider
        v-else-if="item.divider"
        :key="i"
        dark
        class="my-3"
      ></v-divider>
      <v-list-tile v-else :key="i" ripple @click="nullClick">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ item.text }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>
</template>

<script>
export default {
  props: {
    items: {
      required: true,
      type: Array,
    },
  },
  data: () => ({}),
  methods: {
    nullClick: function() {},
  },
}
</script>

<style></style>
