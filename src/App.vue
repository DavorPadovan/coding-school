<template>
  <v-app>
    <navbar :drawer="drawer" @toggleDrawer="toggleDrawer" />
    <sidebar :drawer="drawer" @toggleDrawer="toggleDrawer" />

    <v-content>
      <v-container>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar
  },
  data () {
    return {
      drawer: false
    }
  },
  methods: {
    toggleDrawer () {
      this.drawer = !this.drawer
    }
  },
  created () {
    this.$store.commit('getSavedDrawerType')
  }
}
</script>
