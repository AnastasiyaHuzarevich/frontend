<template>
  <form  @submit.prevent="onSubmit">
    <div>
      <button type="submit" class="btn btn-danger"> Delete complited </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "ToDelete",
  methods: {
    onSubmit() {
      if (this.done === false) {
        return;
      }
      this.$emit('todo-delete', this.id)
    }
  }
}
</script>

<style scoped>

</style>