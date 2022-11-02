<template>
  <body id="background" >
  <div id="app">
    <br><br><br><br>
    <h1> TODO  </h1>
    <h2> {{ this.toDoItems }} </h2>
    <br>
    <to-do-item @todo-added="addToDo"></to-do-item>
    <br>
    <ul class="list-unstyled ">
      <li v-for="item in this.toDoItems" :key="item.id">
        <to-do-list :label="item.label" :done="item.done" :id="item.id"
                    @change ="updateDoneStatus(item.id)"
        ></to-do-list>
      </li>
      <li>
        <p>{{ this.toDoItems.filter(item => item.done).length }} of {{ this.toDoItems.length }} items</p>
      </li>
    </ul>
    <div>
      <button  @click="showAll()" type="submit" class="btn btn-outline-light" id = "all">All</button>
      <button  @click="showActive()" type="submit" class="btn btn-outline-light" id = "non-complited">Active</button>
      <button  @click="showComplited()" type="submit" class="btn btn-outline-light" id = "complited">Completed</button>
    </div>
    <br><button  @click="deleteComplited()" type="submit" class="btn btn-danger" id = "delete">Delete complited</button>
  </div>
  </body>
</template>

<script>
// import uniqueId from 'lodash.uniqueid';
import ToDoList from './components/ToDoList.vue';
import axios from 'axios';
import ToDoItem from "@/components/ToDoItem";

export default {
  name: 'App',
  components: {
    ToDoList,
    ToDoItem
  },

  data() {
    return {
      toDoItems: [
        // {id: uniqueId('todo-'), label: 'Meditation', done: false},
        // {id: uniqueId('todo-'), label: 'Code', done: true}
      ],
      allItems: [],
      CompletedItems: [],
      counter: 0,
      text: []
    };
  },
  methods: {
    getItems() {

      fetch('http://localhost:8080/api/v1/item/', { cache: 'reload' })
          .then((response) => response.ok ? response.json() : [])
          .then((data) => this.toDoItems = data)

    },
    addToDo(toDoLabel) {

      // this.toDoItems.push({id:uniqueId('todo-'),label: toDoLabel, done: false});
      let item = {label: toDoLabel, done: false};
      axios
          .post('http://localhost:8080/api/v1/item', item).then((response) => {
            this.toDoItems = response.data;
          });
    },
    updateDoneStatus(toDoId) {
      let items = [];
      console.log(this.toDoItems);

      if (this.allItems.length === 0) {
        items = this.toDoItems;
      }else{
        items = this.allItems;
      }

      const toDoToUpdate = items.find(item => item.id === toDoId);
      toDoToUpdate.done = !(toDoToUpdate.done)
      axios
          .put('http://localhost:8080/api/v1/item/' + toDoToUpdate.id).then((response) => {
        this.toDoItems = response.data;
      });

    },
    deleteComplited() {
      const notCompletedItems = [];
      let items = [];

      if (this.allItems.length === 0) {
        items = this.toDoItems;
      }else{
        items = this.allItems;
      }

      for (const element of items) {
        if (element.done === false) {
          notCompletedItems.push({id: element.id, label: element.label, done: element.done})
        }
      }

      axios
          .delete('http://localhost:8080/api/v1/item/deleteAll').then((response) => {
            this.toDoItems = response.data;
          });

      this.toDoItems = notCompletedItems;
      this.allItems = this.toDoItems;
    },
    showComplited(){
      const completedItems = []
      if (this.allItems.length === 0) {
        this.allItems = this.toDoItems;
      }else{
        this.toDoItems = this.allItems;
      }
      for (const element of this.toDoItems) {
        if (element.done === true) {
          completedItems.push({id: element.id, label: element.label, done: element.done})
        }
      }
      this.toDoItems = completedItems;
    },
    showActive(){
      // const activeItems = []
      this.toDoItems.filter(item => item.done === false);
      // if (this.allItems.length === 0) {
      //   this.allItems = this.toDoItems;
      // }else{
      //   this.toDoItems = this.allItems;
      // }
      // for (const element of this.toDoItems) {
      //   if (element.done === false) {
      //     activeItems.push({id: element.id, label: element.label, done: element.done})
      //   }
      // }
      // this.toDoItems = activeItems;
    },
    showAll(){
      if (this.allItems.length === 0) {
        this.allItems = this.toDoItems;
      }
      this.toDoItems = this.allItems;
      this.allItems = [];
    }
  },
  created() {
    this.getItems();
    console.log(this.toDoItems);
  }
}
</script>

<style>
@import "style.css";
</style>
