<template>
  <div class="vue-template">
    <v-card class="event-card">
      <v-list align="left">
        <form>
          <h3 class="text-center">Login</h3>

          <div class="form-group">
            <label>E-mail</label>
            <input
              type="email"
              class="form-control form-control-lg"
              v-model="emailUser"
              required
            />
          </div>

          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              class="form-control form-control-lg"
              v-model="passwordUser"
              required
            />
          </div>

          <RouterLink :to="'/login'">
            <a href="">
              <button
                type="submit"
                class="btn btn-primary btn-lg btn-block"
                style="color: white"
                @click="loginUser"
              >
                Login
              </button>
            </a>
          </RouterLink>
          <p class="forgot-account text-right" style="padding-top: 10px">
            Don't have account yet?
            <router-link :to="'/signup'">Sign Up</router-link>
          </p>
        </form>
      </v-list>
    </v-card>
  </div>
</template>

<script>
// import UserDataService from '../services/UserDataService';
import UserService from "../services/UserDataService";
import ErrorDialog from "./ErrorDialog.vue";
export default {
  component: {
    ErrorDialog,
  },
  data() {
    return {
      emailUser: "",
      passwordUser: "",
    };
  },
  methods: {
    loginUser: function () {
      const users = {
        email: this.emailUser,
        password: this.passwordUser,
      };

      this.isLoading = true;
      UserService.login(users)
        .then((result) => {
          this.isLoading = false;
          // console.log(result);
          localStorage.removeItem("user");
          localStorage.setItem("user", JSON.stringify(result.data));
          const datauser = result.data.dataUser;
          // console.log("Authentication: ",result.data);
          if (datauser.isAdmin) {
            this.$router.push("/admin");
          } else {
            this.$router.push("/");
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.isError = true;
          console.log(err);
        });
    },
  },
};
</script>

<style>
.event-card {
  overflow: hidden;
  width: 500px;
  margin: 60px auto auto;
  padding: 20px;
  border-radius: 0.3em;
}
body {
  margin-top: 50px;
}
</style>