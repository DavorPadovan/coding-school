<template>
  <v-navigation-drawer app v-model="drawerModel" :temporary="!isDrawerFixed" :fixed="isDrawerFixed" :permanent="isDrawerFixed" :miniVariant="isDrawerFixed" width="300" dark>
    <v-list-item two-line>
      <v-list-item-avatar color="primary">
        <img v-if="userAvatar" :src="userAvatar">
        <span v-else class="white--text">JD</span>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>John Doe</v-list-item-title>
        <v-list-item-subtitle>Administrator</v-list-item-subtitle>
      </v-list-item-content>

      <v-btn v-if="!isDrawerFixed" icon @click.stop="toggleDrawerType">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <v-list nav>
      <v-list-item :to="{ name: 'home' }" key="home" link exact>
        <v-list-item-icon>
          <v-icon>mdi-gauge</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item :to="{ name: 'franchises' }" key="franchises" link>
        <v-list-item-icon>
          <v-icon>mdi-map-marker</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Franchises</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <v-list-item v-if="isDrawerFixed" @click.stop="toggleDrawerType" link>
        <v-icon>mdi-chevron-right</v-icon>
      </v-list-item>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ['drawer'],
  computed: {
    drawerModel: {
      get: function () {
        return this.drawer
      },
      set: function (e) {
        if (!e) this.$emit('toggleDrawer')
      }
    },
    isDrawerFixed () {
      return this.$store.state.isDrawerFixed
    },
    userAvatar () {
      const rnd = Math.floor(Math.random() * 90) + 1

      return (rnd % 2 === 0) ? `https://randomuser.me/api/portraits/men/${rnd}.jpg` : false
    }
  },
  methods: {
    toggleDrawerType () {
      this.$store.dispatch('toggleDrawerType')
    }
  }
}
</script>
