<template>
  <div id="app">
    <v-app id="inspire">
      <body>
        <div class="container">
          <v-card class="event-card">
            <div class="content">
              <h1>{{ currentNews.title }}</h1>
              <h5>Author: {{ currentNews.author }}</h5>
              <h6>Date: {{ currentNews.createdAt }}</h6>
              <v-list align="right">
                <v-icon medium>mdi-eye-outline</v-icon>
                <v-text> {{ currentNews.views }} views </v-text>
                <v-btn icon @click="share = true">
                  <v-icon>mdi-share</v-icon>
                </v-btn>
                <share-dialog v-model="share"></share-dialog>
                <v-btn icon>
                  <v-icon>mdi-bookmark-outline</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-heart-outline</v-icon>
                </v-btn>
              </v-list>
              <img :src="base_url + currentNews.pictLink" />
              <br /><br /><br />
              <div class="ql-editor">
                <p v-html="currentNews.content"></p>
              </div>
            </div>
          </v-card>
        </div>
      </body>
    </v-app>
  </div>
</template>

<script>
import NewsDataService from "../../services/NewsDataService";
const ShareDialog = () => import("./ShareDialog.vue");
import { BASE_URL } from "../../constURL";

export default {
  components: {
    ShareDialog,
  },
  name: "news",
  data() {
    return {
      currentNews: null,
      share: false,
      base_url: BASE_URL,
    };
  },
  methods: {
    getNews(id) {
      NewsDataService.get(id)
        .then((response) => {
          this.currentNews = response.data;
          this.currentNews.views += 1;
          NewsDataService.updateViews(id, this.currentNews)
            .then(() => {})
            .catch(() => {});
        })
        .catch(() => {});
    },
  },
  mounted() {
    this.getNews(this.$route.params.id);
  },
};
</script>

<style scoped>
.container {
  margin: 2em auto 4em;
}
.event-card {
  overflow: hidden;
  width: 85%;
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
