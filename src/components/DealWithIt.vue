<template>
  <v-card class="white--text" img="/static/deal_with_it.gif">
    <v-system-bar status color="primary" lights-out>
      <v-spacer/>
      <v-icon>network_wifi</v-icon>
      <v-icon>signal_cellular_null</v-icon>
      <v-icon>battery_full</v-icon>
      <span>12:30</span>
    </v-system-bar>
    <v-card-title primary-title class="d-block">
      <h3 class="headline mb-1">Deal With It!</h3>
      <blockquote>
        <strong>Fluttershy</strong>: <i>...um rainbow i don't thin...</i><br>
        <strong>Rainbow Dash</strong>: <i>(sunglasses) Deal With It!</i><br>
        <strong>Fluttershy</strong>: <i>um okay...</i>
      </blockquote>
    </v-card-title>
    <v-card-actions>
      <v-spacer/>
      <v-btn @click="$vuetify.dark = !$vuetify.dark">Deal With It!</v-btn>
    </v-card-actions>
  </v-card>
</template>
