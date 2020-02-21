<template>
  <div id="app">
    <button @click="onClick">Test Contacts</button>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    onClick() {
      if (navigator.contacts) {
        alert("Yes");
      } else {
        alert("No");
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
