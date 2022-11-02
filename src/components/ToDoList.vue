<template>
  <div id = "elements">
    <input v-bind:checked="isDone" type = "checkbox" id="todo-list" >
    <label for="todo-list" id="todo-list">{{ label }} </label>

  </div>
</template>

<script>
export default {
  name: "ToDoList",
  props: {
    label: {required: true, type: String},
    done: {default: false, type: Boolean},
    id: {required: false, type: Number}
  },
  data() {
    return {
      isDone : this.done
    }
  }
}
</script>

<style scoped>
#elements label {
  padding-left: 0.7em;
}

input[type="checkbox"] {
  filter: invert(90%) hue-rotate(230deg) brightness(1.2);
  width:17px;
  height:17px;
}
</style>