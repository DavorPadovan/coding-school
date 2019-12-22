<template>
  <div class="franchise-edit">
    <v-navigation-drawer v-model="drawer" absolute temporary right width="50%">
      <v-container fluid>
        <h1 class="headline my-2">{{ franchise.title }}</h1>

        <v-card tile>
          <v-card-text>
            <v-form>
              <v-text-field v-model="franchise.title" label="Franchise title" required></v-text-field>
              <v-text-field v-model="franchise.street" label="Street" required></v-text-field>
              <v-text-field v-model="franchise.city" label="City" required></v-text-field>
              <v-text-field v-model="franchise.zip" label="ZIP code" required></v-text-field>
              <v-text-field v-model="franchise.website" label="Website" required></v-text-field>
              <v-switch v-model="franchise.active" label="Active"></v-switch>
            </v-form>
          </v-card-text>
        </v-card>
      </v-container>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'FranchiseEdit',
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    franchise () {
      return this.$store.getters.getFranchiseByID(this.$route.params.id)
    }
  },
  mounted () {
    setTimeout(() => {
      this.drawer = true
    }, 0)
  },
  watch: {
    drawer () {
      if (!this.drawer) {
        setTimeout(() => {
          this.$router.push({ name: 'franchises' })
        }, 300)
      }
    }
  }
}
</script>
