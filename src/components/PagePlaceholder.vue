<template>
  <v-toolbar>
    <v-btn icon color="primary" class="ml-3" to="/home"><v-icon>home</v-icon></v-btn>
    <v-icon>chevron_right</v-icon>
    <v-breadcrumbs>
      <v-icon slot="divider">chevron_right</v-icon>
      <v-breadcrumbs-item v-for="part in parts.slice(0, -1)" :key="part.name">
        <router-link class="title" :to="part.path" v-text="part.name"/>
      </v-breadcrumbs-item>
      <v-breadcrumbs-item class="title" v-text="parts[parts.length - 1].name"/>
    </v-breadcrumbs>
    <!--
    <v-spacer/>
    <v-btn icon color="primary" to="/home"><v-icon>home</v-icon></v-btn>
    -->
  </v-toolbar>
</template>

<script>
  export default {
    computed: {
      parts() {
        let path = ''
        return this.$route.path.slice(1).split('/').map(part => ({
          name: part,
          path: path += '/' + part
        }))
      }
    }
  }
</script>


<style scoped>
  .title {
    text-transform: capitalize;
    text-decoration: none;
  }
</style>
