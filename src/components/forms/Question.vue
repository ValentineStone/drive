<template>
  <v-card flat class="transparent">
    <img v-if="!value.noimage" :src="'/static/img/tests/' + value.id + '.jpg'" style="max-width: 100%;">
    <v-card-text class="pa-1">
      <div class="subheading" v-text="value.question"/>

      <v-radio-group
        v-model="selectedAnswer"
        :rules="[v => v === this.value.correct || this.value.explanation || 'Ваш ответ не верен']"
      >
        <v-radio
          v-for="(answer, index) of value.answers"
          :key="index"
          :label="answer"
          :value="index+1"
          color="success"
        ></v-radio>
      </v-radio-group>

    </v-card-text>
  </v-card>
</template>

<script>
  import vmodel from '@/vmodel'
  export default {
    mixins: [vmodel],
    data() {
      return {
        selectedAnswer: null
      }
    }
  }
</script>

