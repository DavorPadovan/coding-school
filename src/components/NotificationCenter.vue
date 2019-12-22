<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <v-btn text icon color="white" v-on="on">
        <v-icon v-if="hasUnread">mdi-bell-ring</v-icon>
        <v-icon v-else>mdi-bell-outline</v-icon>
      </v-btn>
    </template>

    <v-list width="300">
      <v-list-item two-line link v-for="notification in notifications" :key="notification.id" @click="markAsRead(notification)">
        <v-list-item-content :class="notification.read ? 'grey--text text--lighten-1' : ''">
          <v-list-item-title>{{ notification.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ notification.text }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data () {
    return {
      notifications: [{
        id: 1,
        title: 'First notification',
        text: 'This is your first ever notification.',
        read: false
      }, {
        id: 2,
        title: 'Second notification',
        text: 'This is your second important notification.',
        read: false
      }]
    }
  },
  computed: {
    hasUnread () {
      let unread = 0

      this.notifications.forEach((notification) => {
        if (!notification.read) unread++
      })

      return unread > 0
    }
  },
  methods: {
    markAsRead (notification) {
      notification.read = true
    }
  }
}
</script>
