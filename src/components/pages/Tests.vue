<template>
  <v-flex xs12>
    <v-card>
      <v-card-text :class="['text-xs-center', $vuetify.breakpoint.xs ? 'pa-1' : undefined]">
        <div class="mb-3">
          <v-btn fab flat :small="$vuetify.breakpoint.smAndDown"
            v-for="{ id } of $model.licenseCategories"
            :key="id"
            :outline="selectedCategory === id"
            :to="{ query: { category: id } }"

            active-class=""
            class="ma-0"
            :color="$vuetify.dark ? 'accent' : 'primary'"
          >{{id}}</v-btn>
          <div v-if="!selectedCategory">Выберите категорию</div>
        </div>
        <template v-if="selectedCategory">
          <Test :category="selectedCategory" />
        </template>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
  import Test from '@/components/Test'
  export default {
    components: { Test },
    computed: {
      selectedCategory() {
        return this.$route.query.category || ( this.$model.user ? 'B' : 'free' )
      }
    }
  }
</script>


