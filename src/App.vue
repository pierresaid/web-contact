<template>
  <div id="app">
    <template v-if="supportContactApi !== false">
      <h1>Web contacts API</h1>
      <h3>Supported properties :</h3>
      <div v-for="propertie in properties" :key="propertie.name">
        {{ propertie.name }}
        <input type="checkbox" v-model="propertie.checked" />
      </div>
      <button @click="onClick">Fetch contacts</button>
      <div v-if="contacts !== null">
        <div v-for="contact in contacts" :key="contact">
          <div v-for="(values, propertie) in contact" :key="propertie">
            {{ propertie }} :
            <span v-if="values.length > 0">
              {{ values.reduce((a, b) => `${a} , ${b}`) }}
            </span>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <h1>
        The Web contacts API Is not supported in your browser please try with
        Google Chrome Android 80+
      </h1>
    </template>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    properties: null,
    supportContactApi: null,
    contacts: null
  }),
  async mounted() {
    if (!navigator.contacts) {
      this.supportContactApi = false;
    }
    this.properties = await navigator.contacts.getProperties();
    this.properties = this.properties.map(p => ({ name: p, checked: true }));
  },
  methods: {
    async onClick() {
      const propertiesName = this.properties
        .filter(p => p.checked)
        .map(p => p.name);
      if (propertiesName.length === 0) {
        return;
      }
      this.contacts = await navigator.contacts.select(propertiesName);
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
