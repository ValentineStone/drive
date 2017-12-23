<template>
  <div>

    <div flat dense class="headline text-xs-center">
      Тест по категории {{category}}
    </div>

    <v-list v-if="questions.length">
      <div v-for="question in questions" :key="question.id">
        <Question :value="question"/>
        <v-divider/>
      </div>
    </v-list>
    <div v-else>В этом тесте нет вопросов</div>

  </div>
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
    data() {
      return {
        items: [
          { header: 'Today' },
          { avatar: '/static/doc-images/lists/1.jpg', title: 'Brunch this weekend?', subtitle: "<span class='text--primary'>Ali Connors</span> — I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
          { divider: true, inset: true },
          { avatar: '/static/doc-images/lists/2.jpg', title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> — Wish I could come, but I'm out of town this weekend." },
          { divider: true, inset: true },
          { avatar: '/static/doc-images/lists/3.jpg', title: 'Oui oui', subtitle: "<span class='text--primary'>Sandra Adams</span> — Do you have Paris recommendations? Have you ever been?" }
        ]
      }
    },
    components: { Question }
  }
</script>

<style>

</style>
