<template>
  <div class="franchises">
    <h1 class="display-1 my-6">Franchises</h1>

    <v-data-table :headers="headers" :items="franchises" :items-per-page="10" class="elevation-1">
      <template v-slot:item.active="{ item }">
        <v-chip :color="item.active ? 'green' : 'red'" dark small>{{ item.active ? 'YES' : 'NO' }}</v-chip>
      </template>

      <template v-slot:item.action="{ item }">
        <v-btn text icon :to="{ name: 'franchise-details', params: { id: item.id } }">
          <v-icon small>mdi-information</v-icon>
        </v-btn>

        <v-btn text icon :to="{ name: 'franchise-edit', params: { id: item.id } }">
          <v-icon small>mdi-pencil</v-icon>
        </v-btn>
      </template>
    </v-data-table>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Franchises',
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    headers () {
      return [{
        value: 'title', text: 'Title'
      }, {
        value: 'website', text: 'Website'
      }, {
        value: 'street', text: 'Street'
      }, {
        value: 'city', text: 'City'
      }, {
        value: 'zip', text: 'ZIP code'
      }, {
        value: 'active', text: 'Active'
      }, {
        value: 'action', text: 'Action'
      }]
    },
    franchises () {
      return this.$store.state.franchises
    }
  }
}
</script>
