<template>
  <v-flex xs12 sm8>
    <v-tabs grow class="limit-md">
      <v-tabs-bar>
        <v-tabs-item to="/login">
          Вход
        </v-tabs-item>
        <v-tabs-item to="/register">
          Регистрация
        </v-tabs-item>
        <v-tabs-slider/>
      </v-tabs-bar>
    </v-tabs>
    <router-view v-model="formData" @submit="onSubmit"/>
  </v-flex>
</template>

<script>
  export default {
    data: () => ({
      formData: {}
    }),
    methods: {
      onSubmit() {
        if (this.$route.name === 'register')
          this.$model.register(this.formData)
        else
          this.$model.authenticate(this.formData)
      }
    }
  }
</script>
