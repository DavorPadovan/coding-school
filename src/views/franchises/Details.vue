<template>
  <div class="franchise-edit">
    <v-navigation-drawer v-model="drawer" app temporary right>
      <v-container fluid>
        <h1 class="headline my-2">{{ franchise.title }}</h1>
        <p><a :href="franchise.website" target="_blank">{{ franchise.website }}</a></p>
      </v-container>
    </v-navigation-drawer>
  </div>
</template>

<style lang="less" scoped>
  .v-navigation-drawer {
    max-width: 100%;
    width: 600px !important;
  }
</style>

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
