export default {
  props: ['value'],
  data() { return { model: this.value } },
  watch: {
    model: {
      handler(newModel) {
        this.$emit('input', newModel)
      }, deep: true
    }
  }
}