<template>
  <div>
    <table>
      <thead>
        <tr>
          <th colspan="2">Supported properties</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="propertie in properties" :key="propertie.name">
          <td>{{ propertie.name }}</td>
          <td>
            <input type="checkbox" v-model="propertie.checked" />
          </td>
        </tr>
      </tbody>
    </table>

    <div>
      <label for="multiple-options">Fetch multiple contacts ?</label>
      <input id="multiple-options" type="checkbox" v-model="options.multiple" />
    </div>
    <button class="fetch-button" @click="onClick">Fetch contacts</button>

    <table v-if="contacts !== null">
      <thead>
        <tr>
          <th colspan="2">Selected contacts</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="([propertie, values], index) in contacts
            .map(c => Object.entries(c))
            .flat()"
          :key="`${propertie}-${index}`"
        >
          <td>{{ propertie }}</td>
          <td>
            <span v-if="values.length > 0">{{
              values.reduce((a, b) => `${a} , ${b}`)
            }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ContactsPicker",
  data: () => ({
    properties: null,
    options: { multiple: true },
    contacts: null
  }),
  async mounted() {
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
      this.contacts = await navigator.contacts.select(
        propertiesName,
        this.options
      );
    }
  }
};
</script>

<style>
th {
  text-align: center;
}
.fetch-button {
  margin-top: 15px;
}
</style>
