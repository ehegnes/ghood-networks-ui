<template>
  <v-container fluid>
    <v-layout column>
      <div class="subheading">Rewards</div>
      <v-layout row>
        <v-card v-for="(card, i) in cards" class="reward-card">
          <v-img
            :src="card.src"
            height="200px"
            width="300px"
            >
            <v-container
              fill-height
              fluid
              pa-2
              >
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text" v-text="card.title"></span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>

          <v-card-actions>
            <v-chip>${{card.money}}</v-chip>
            <div style="margin-left: 12px">{{card.text}}</div>
            <v-spacer />
              <v-chip color="secondary"><v-icon>star</v-icon>{{card.points}}</v-chip>
          </v-card-actions>
        </v-card>
      </v-layout>

      <div style="height: 24px"></div>
      <div class="title">Get More Points!</div>
      <div style="height: 24px"></div>
      <div class="subheading">Goals</div>
      <div>
        <v-chip v-for="chip in chips" color="accent">{{chip.text}}</v-chip>
      </div>
      <v-layout row>
        <v-card v-for="(card, i) in cards" class="reward-card">
          <v-img
            :src="card.src"
            height="100px"
            width="200px"
            >
            <v-container
              fill-height
              fluid
              pa-2
              >
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text" v-text="card.title"></span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>

          <v-card-actions>
            <div>{{card.text}}</div>
            <v-spacer />
              <v-chip color="secondary"><v-icon>star</v-icon>{{card.points}}</v-chip>
          </v-card-actions>
        </v-card>
      </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import colors from 'vuetify/es5/util/colors'

export default {
  data: () => ({
    cards: [
      {
        text: "Nike Gift Card",
        points: 50,
        money: 15,
        src: "https://images.unsplash.com/photo-1556694679-bfd2743bfc4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
      },
      {
        text: "Amazon Gift Card",
        points: 200,
        money: 100,
        src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
      }
    ],
    chips: [
      { text: "Bank Account", color: colors.brown.lighten1 },
      { text: "Something", color: colors.pink.darken3 },
      { text: "Job", color: colors.orange.darken3 },
    ],
  }),
}
</script>

<style lang="stylus" scoped>
.reward-card
  margin-right 24px
</style>
