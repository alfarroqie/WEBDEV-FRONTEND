<template>
    <div class="vue-template">
        <form>
            <h3 class="text-center">Sign Up</h3>

            <div class="form-group">
                <label>Full Name</label>
                <input type="text" class="form-control form-control-lg" v-model="fullnameUser" required />
            </div>

            <div class="form-group">
                <label>Username</label>
                <input type="username" class="form-control form-control-lg" v-model="userName" required />
            </div>

            <div class="form-group">
                <label>email</label>
                <input type="email" class="form-control form-control-lg" v-model="emailUser" required />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" v-model="passwordUser" required />
            </div>
            <RouterLink :to="'/signup'">
                <a href="#"> <button type="submit" class="btn btn-primary btn-lg btn-block" @click="addUser">Sign Up</button> </a>
            </RouterLink>
            <p class="forgot-account text-right">
                Already registered?
                <router-link :to="'/login'">Log in</router-link>
            </p>
        </form>
    </div>
</template>

<script>
import UserService from "../services/UserDataService";
import ErrorDialog from "./ErrorDialog.vue";
export default {
    component:{
        ErrorDialog,
    },
    data() {
        return {
            fullnameUser : "",
            userName : "",
            emailUser : "",
            passwordUser : "",
        }
    },
    methods:{
      addUser : function(){
          const users = {
            name: this.fullnameUser,
            username: this.userName,
            email: this.emailUser,
            password: this.passwordUser,
            isAdmin: false,
          }

          const log = {
                email: this.emailUser,
                password:this.passwordUser
            }

          this.isLoading = true;
          UserService.create(users)
              .then(result => {
                this.isLoading = false;
                console.log(result);
                    UserService.login(log)
                    .then(result => {
                        this.isLoading = false;
                        console.log(result);
                        localStorage.removeItem('user');
                        localStorage.setItem('user', JSON.stringify(result.data));
                        console.log("Authentication: ",result.data);
                        this.$router.push("/");
                    })
                    .catch(err => {
                        this.isLoading = false;
                        this.isError = true;
                        console.log(err)})
                        // this.$router.push("/login");
                        // location.reload()
                    })
              .catch(err => {
                this.isLoading = false;
                this.isError = true;
                console.log(err)})
        }
    }
}
</script>

<style>
body {
    margin-top: 50px;
}
</style>