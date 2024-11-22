<template>
  <div class="space-theme">
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <v-img
        class="mx-auto mb-6"
        max-width="128"
        src="@/assets/images/space-icon.svg"
        alt="Space Icon"
      ></v-img>
      <div class="text-h6 text-center text-primary mb-4">
        Welcome to Space Login
      </div>
      <v-text-field
        v-model="email"
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        v-model="password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>
      <v-btn class="mb-4" color="blue" size="large" variant="tonal" block @click="login">
        Log In
      </v-btn>
      <div class="text-center mb-4 text-medium-emphasis">OR</div>
      <v-btn color="green" variant="tonal" block @click="loginWithGoogle">
        <v-icon left icon="mdi-google"></v-icon>
        Log in with Google
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      visible: false,
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("https://your-api.com/login", {
          email: this.email,
          password: this.password,
        });
        if (response.data.success) {
          this.$store.dispatch("auth/setToken", response.data.token);
          this.$router.push("/dashboard");
        } else {
          alert("Login gagal");
        }
      } catch (error) {
        console.error(error);
        alert("Terjadi kesalahan.");
      }
    },
    loginWithGoogle() {
      const googleAuthUrl = "https://accounts.google.com/o/oauth2/auth";
      const clientId = "YOUR_GOOGLE_CLIENT_ID";
      const redirectUri = "http://localhost:8080/auth/callback";
      const scope = "email profile";
      const authUrl = `${googleAuthUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}`;
      window.location.href = authUrl;
    },
  },
};
</script>

<style>
.space-theme {
  background-image: url("@/assets/images/space-bg.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-primary {
  color: #64b5f6;
}
</style>
