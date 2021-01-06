<template>
  <div class="wrapper wrapper--w900">
    <div class="card card-4">
      <div class="card-title">
        <h2>LOGIN</h2>
      </div>
      <form method="post" class="form">
        <label for="user-email" style="padding-top: 13px">&nbsp;Email</label>
        <input
          id="user-email"
          class="form-content"
          type="email"
          name="email"
          autocomplete="on"
          v-model="Email"
          required
        />
        <div class="form-border"></div>
        <label for="user-password" style="padding-top: 22px"
          >&nbsp;Password</label
        >
        <input
          id="user-password"
          class="form-content"
          type="password"
          name="password"
          v-model="Password"
          required
        />
        <div class="form-border"></div>
        <input
          id="submit-btn"
          type="submit"
          name="submit"
          value="LOGIN"
          @click="login"
        /><a href="#" id="signup">Don't have account yet?</a>
      </form>
    </div>
    <v-overlay :value="overlay" v-if="isLoading">
      <v-progress-circular
        class="loading"
        indeterminate
        color="red"
      ></v-progress-circular>
    </v-overlay>
    <error-dialog
      class="loading"
      errorTitle="Error"
      errorMessage="Error while"
      :isDialog="isError"
      v-if="isError"
    >
    </error-dialog>
  </div>
</template>

<script>
import UserService from "../services/UserDataService";
import ErrorDialog from "./ErrorDialog.vue";
export default {
  components: {
    ErrorDialog,
  },
  data() {
    return {
      Email: "",
      Password: "",
      isLoading: false,
      isError: false,
    };
  },
  methods: {
    login: function () {
      console.log(this.Email);
      console.log(this.Password);
      const sign = {
        email: this.Email,
        password: this.Password,
      };
      this.isLoading = true;
      UserService.login(sign)
        .then((result) => {
          this.isLoading = false;
          console.log(result);
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
/* ==========================================================================
   #CARD
   ========================================================================== */
.card {
  margin: 150px auto;
  padding: 0px 120px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  background: #fff;
}
.card-title {
  font-family: "Raleway Thin", sans-serif;
  letter-spacing: 4px;
  padding-bottom: 23px;
  padding-top: 13px;
  text-align: center;
}
.card-4 {
  background: #fff;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
}
.card-4 .card-body {
  padding: 57px 65px;
  padding-bottom: 65px;
}
@media (max-width: 900px) {
  .card-4 .card-body {
    padding: 50px 40px;
  }
}
a {
  text-decoration: none;
}
label {
  font-family: "Raleway", sans-serif;
  font-size: 11pt;
}
.form {
  align-items: left;
  display: flex;
  flex-direction: column;
}
.form-border {
  background: -webkit-linear-gradient(right, #000000, #000000);
  height: 1px;
  width: 100%;
}
.form-content {
  background: #fbfbfb;
  border: none;
  outline: none;
  padding-top: 14px;
}
#signup {
  color: #000000;
  font-family: "Raleway", sans-serif;
  font-size: 10pt;
  margin-top: 16px;
  text-align: center;
}
#submit-btn {
  background: -webkit-linear-gradient(right, #3868cd, #416ecf);
  border: none;
  border-radius: 21px;
  box-shadow: 0px 1px 8px #4272d7;
  cursor: pointer;
  color: white;
  font-family: "Raleway SemiBold", sans-serif;
  height: 42.3px;
  margin: 0 auto;
  margin-top: 50px;
  transition: 0.25s;
  width: 153px;
}
#submit-btn:hover {
  box-shadow: 0px 1px 18px #000000;
}
</style>