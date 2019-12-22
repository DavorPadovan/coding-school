<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon v-if="!isDrawerFixed" @click.stop="toggleDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Dashboard</v-toolbar-title>

    <v-spacer></v-spacer>

    <notification-center />
  </v-app-bar>
</template>

<script>
import NotificationCenter from '@/components/NotificationCenter'

export default {
  props: ['drawer'],
  components: {
    NotificationCenter
  },
  computed: {
    isDrawerFixed () {
      return this.$store.state.isDrawerFixed
    }
  },
  methods: {
    toggleDrawer () {
      this.$emit('toggleDrawer')
    }
  }
}
</script>
