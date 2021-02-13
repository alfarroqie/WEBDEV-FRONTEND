<template>
  <div id="app">
    <v-app id="inspire">
      <body>
        <div class="container">
          <v-card class="event-card">
              <v-list align="center">
                    <v-avatar color="indigo" size="100">
                        <v-icon dark>
                            mdi-account-circle
                        </v-icon>
                    </v-avatar>
                </v-list>
                <v-list align="center">
                <div class="container">
                    <h1>{{ userData.name }}</h1>
                    <h3>{{ userData.email }}</h3>
                </div>
                </v-list>
                    <v-list align="center">
                            <v-btn
                                depressed
                                color="primary"
                                >
                                Edit Profil
                            </v-btn>
                    </v-list>
                <v-list align="center">
                    <v-divider class="mx-4"></v-divider>
                        <div class="title">
                        <h1>Artikel yang disimpan</h1>
                        </div>
                </v-list>
          </v-card>
        </div>
      </body>
    </v-app>
  </div>
</template>

<script>
import UserService from "../../services/UserDataService";

export default {
  name: "users",
  data() {
    return {
      userData: "",
      userId:""
    };
  },
  methods: {
    getProfilUser(id) {
      UserService.getProfilUser(id)
        .then((response) => {
          this.userData = response.data;
        })
        .catch((e)=> {
          console.log(e);
        })
    },
  },
  mounted() {
    let temp = JSON.parse(localStorage.getItem('user'));
      this.userId = temp.dataUser.userId;
      console.log(this.userId);
      this.getProfilUser(this.userId);
  },
};
</script>

<style scoped>
.text-center {
    margin: 2em auto 4em;
}
.container {
  margin: 2em auto 4em;
}
.event-card {
  overflow: hidden;
  width: 50%;
  margin: 60px auto auto;
  border-radius: 0.3em;
}
.event-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content {
  padding: 50px 30px;
}
.content h1 {
  font-size: 2em;
}
</style>
