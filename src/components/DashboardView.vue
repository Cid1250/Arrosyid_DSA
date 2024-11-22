<template>
  <div>
    <h1>Welcome to the Dashboard</h1>
    <v-btn @click="logout">Logout</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>
