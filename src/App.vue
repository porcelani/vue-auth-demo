<template>
  <main id="app" class="section">
    <div class="container">
      <nav-main></nav-main>
      <router-view></router-view>
    </div>
    <div class="container">
      <nav-footer></nav-footer>
    </div>

  </main>
</template>

<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';

  export default {
    components: {
      navMain: Header,
      navFooter: Footer
    },
    methods: {
      setUser: function () {
        this.$store.dispatch('setUser');
      }
    },
    created() {
      // when the app is created run the set user method
      // this uses Vuex to check if a user is signed in
      // check out mutations in the store.js file
      this.setUser();
    }
  };
</script>

<style lang="scss">
  body {
    font-family: "Roboto", sans-serif;
  }
</style>
