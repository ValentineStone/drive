<template>
  <v-form
    v-modular
    spellcheck="false"
  >
    <v-text-field
      label="Логин"
      v-model="model.username"
    />
    <v-text-field
      label="Пароль"
      v-model="model.password"
      :append-icon="passhide ? 'visibility' : 'visibility_off'"
      :append-icon-cb="() => (passhide = !passhide)"
      :type="passhide ? 'password' : 'text'"
      :rules="[v => !!v || 'Введите пароль']"
    />
    <v-text-field
      label="Повтор пароля"
      :append-icon="passhide ? 'visibility' : 'visibility_off'"
      :append-icon-cb="() => (passhide = !passhide)"
      :type="passhide ? 'password' : 'text'"
      :rules="[v => v === model.password || 'Пароли должны совпадать']"
    />

    <v-btn block type="submit" color="primary">Зарегистрироваться</v-btn>
    
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