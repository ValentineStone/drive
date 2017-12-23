<template> <div>
  <div class="subheader" v-text="value.question"/>
  <v-json-tree :data="value" />
</div>
</template>

<script>
  import vmodel from '@/vmodel'
  export default {
    mixins: [vmodel],
    props: ['value']
  }
</script>

<style>

</style>
