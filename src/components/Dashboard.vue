<template>
  <div id="program">
    <h2>Programas</h2>

    <input type="text" @keyup.enter="addProgram(program)" v-model="program.name" placeholder="Novo programa"/>

    <ul class="program-list">
      <li v-for="program in programs">
        {{program.name}}
        <button @click="removeProgram(program)">Remove</button>
      </li>

    </ul>

  </div>
</template>

<script>
  import {dbProgramRef} from "../firebaseConfig";


  export default {
    data: function () {
      return {
        programs: [],
        program: {}
      };
    },
    mounted() {
    },
    computed: {},
    methods: {
      addProgram: function (copyProgram) {
        this.program = {};
        dbProgramRef.push(copyProgram)
      },

      removeProgram: function (program) {
        dbProgramRef.child(program).remove()
      }
    }
  };
</script>

<style lang="scss">
</style>
