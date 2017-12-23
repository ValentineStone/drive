<template>
  <v-flex xs12>
    <v-card>
      <v-card-text class="text-xs-center">
        <div>
          <v-btn fab flat small
            v-for="{ id } of $model.licenseCategories"
            :key="id"
            :outline="$route.query.category === id"
            :to="{ query: { category: id } }"

            active-class=""
            class="ma-0"
            :color="$vuetify.dark ? 'accent' : 'primary'"
          >{{id}}</v-btn>
        </div>
        <div v-if="!$route.query.category">Выберите категорию</div>
        <template v-if="$route.query.category">
          <v-divider class="my-3"/>
          <Test :category="$route.query.category" />
        </template>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
  import Test from '@/components/Test'
  export default {
    data() {
      return {
        selectedCategory: this.$route.query.category || 'A',
      }
    },
    components: { Test }
  }
</script>


