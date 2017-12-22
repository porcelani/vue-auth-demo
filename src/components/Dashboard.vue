<template>
  <section id="dashboard">
    <h1 class="title has-text-centered">Dashboard</h1>
    <h2>{{ msg }}</h2>
    <button v-on:click="show">Click</button>
  </section>
</template>

<script>
  import Firebase from "firebase";

  export default {
    data: function () {
      return {
        msg: "Testing",
        todos: []
      };
    },
    mounted() {

    },
    methods: {
      show: function () {
        console.log("Show");
      },
      // Push new post in to Todos
      addTodo: function () {
        Todos.push(this.newTodo)
        this.newTodo.text = ''
      },
      // Remove child based on key - firebase function
      removeTodo: function (key) {
        Todos.child(key).remove()
      }
    }

  };
</script>

<style lang="scss">
</style>
