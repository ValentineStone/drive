<template>
  <v-card flat>
    <v-toolbar :class="[
      'mb-3 elevation-2 accent--text',
        $vuetify.dark ? undefined : 'secondary',
    ]">
      <v-spacer/>
      <div :class="[
        'text-xs-center',
        $vuetify.breakpoint.xs ? 'headline' : 'display-1'
      ]">
        {{
          category === 'free'
          ? 'Пробный тест'
          : 'Тест по категории ' + category
        }}
      </div>
      <v-spacer/>
    </v-toolbar>



      <v-container grid-list-md>
      <v-layout wrap justify-center>

    <template v-if="questions.length">
      <template  v-for="(question, index) of questions" >
        <v-flex xs12 sm10 md7 :key="question.id">
          <v-divider v-if="index" :key="index" class="mb-4"/>
          <Question :value="question"/>
        </v-flex>
      </template>
    </template>
    <div v-else>В этом тесте нет вопросов</div>

    

      </v-layout>
      </v-container>

  </v-card>
</template>

<script>
  import Question from '@/components/forms/Question'
  export default {
    props: ['category'],
    computed: {
      questions() {
        if (this.category === 'free')
          return this.$model.freeTestQuestions
        else
          return []
      }
    },
    components: { Question }
  }
</script>

<style>

</style>
