<template>
  <v-form
    v-modular
    spellcheck="false"
  >
    <v-text-field
      label="Логин"
      v-model="model.login"
      :rules="[v => !!v || 'Введите имя пользователя']"
    />
    <v-text-field
      label="Пароль"
      v-model="model.password"
      :append-icon="passhide ? 'visibility' : 'visibility_off'"
      :append-icon-cb="() => (passhide = !passhide)"
      :type="passhide ? 'password' : 'text'"
      :rules="[v => !!v || 'Введите пароль']"
    />

    <v-btn block type="submit" color="primary">Войти</v-btn>
    
  </v-form>
</template>

<script>
  import vmodel from '@/vmodel'
  export default {
    mixins: [vmodel],
    data: () => ({
      passhide: true
    }),
  }
</script>