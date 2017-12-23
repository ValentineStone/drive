
<template>
  <v-app :dark="$vuetify.dark">
    <v-toolbar app fixed dense>
      <v-spacer/>
      <v-tabs grow class="limit-md">
        <v-tabs-bar>
          <v-tabs-item to="/profile">
            <v-icon>account_circle</v-icon>
          </v-tabs-item>
          <v-tabs-item to="/theory">
            <v-icon>library_books</v-icon>
          </v-tabs-item>
          <v-tabs-item to="/tests">
           <v-icon>playlist_add_check</v-icon>
          </v-tabs-item>
          <v-tabs-item to="/practice">
           <v-icon>directions_car</v-icon>
          </v-tabs-item>
          <v-tabs-slider v-show="$route.path.match(/^\/(?:profile|theory|tests|practice)/)"/>
        </v-tabs-bar>
      </v-tabs>
      <v-spacer/>
    </v-toolbar>
    <v-content :class="$vuetify.dark ? undefined : 'grey lighten-3'">

      <v-container grid-list-md class="limit-md">
        <v-layout wrap justify-center>

        <router-view/>

        </v-layout>
      </v-container>

    </v-content>
    <v-footer app fixed>
      <span @click="$vuetify.dark = !$vuetify.dark">&copy; Леонид Романовский, 2017</span>
    </v-footer>

    <notifications position="top right">
      <template slot="body" slot-scope="props">
        <v-card class="px-1 py-1 mx-1 my-1 info">
          <v-json-tree :raw="props.item.text"/>
        </v-card>
      </template>
    </notifications>

  </v-app>
</template>

<script>

  import DealWithIt from '@/components/DealWithIt'

  export default {
    data() {
      return {
      }
    },
    watch: {
      '$vuetify.dark': value =>
        localStorage.setItem('drive-app-dark-theme', value)
    },
    beforeCreate() {
      this.$vuetify.dark =
        localStorage.getItem('drive-app-dark-theme') === 'true'
      this.$model.on('response', response => this.$notify(JSON.stringify(response)))
      this.$model.on('error', error => this.$notify(JSON.stringify(error)))
    },
    components: { DealWithIt }
  }
</script>


<style>
  html {
    overflow: auto;
  }

  @media (min-width: 960px) {
    .limit-md {
      max-width: 960px !important;
    }
  }

  ul.tabs__container {
    overflow: hidden;
  }

  .json-tree.json-tree-root {
    min-width: unset;
  }

  .mx-auto::before {
    margin-left: auto;
    margin-right: auto;
  }
</style>
