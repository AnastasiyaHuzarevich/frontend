<template>
  <form  @submit.prevent="onSubmit">
    <div class="input-group w-50 mx-auto">
      <button type="submit" class="btn btn-danger"> <i class="icon-play"></i></button>
      <label for="new-todo-item"></label>
      <input class="form-control" type="text" id="new-todo-item" name="new-todo" autocomplete="off" v-model.lazy.trim="label" placeholder=" Create a new todo"/>
    </div><br>
  </form>
</template>

<script>
export default {
  name: "ToDoItem",
  methods: {
    onSubmit() {
      if (this.label === "") {
        return;
      }
      this.$emit('todo-added', this.label)
    }
  },
  data() {
    return {
      label: ""
    };
  }
}
</script>

<style scoped>
  input{
    display: inline-block;
    color:white;
   }

  button{
    height: 6vh;
    width: 5vw;
    background-color: #28273A!important;
    border: 0px ridge #28273A;
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
  }

  .icon-play{
    background-image : url(../assets/add2.png);
    background-size: cover;
    display: inline-block;
    height: 25px;
    width: 25px;
  }

</style>