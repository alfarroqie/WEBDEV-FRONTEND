(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f990b14"],{"0d83":function(t,i,e){},"14cb":function(t,i,e){"use strict";e("0d83")},"378a":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-app",[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"sidebar"},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:" https://i.ibb.co/Rb6yXLg/Voyagee-removebg-preview.png",width:"150",height:"75"}})]),e("ul",[e("li",{on:{click:t.onDashboardClick}},[e("v-icon",{attrs:{medium:""}},[t._v("mdi-chart-line")]),e("v-text",[t._v(" Dashboard")])],1),e("li",{on:{click:t.onAddCategoriesClick}},[e("v-icon",{attrs:{medium:""}},[t._v("mdi-view-grid-plus")]),e("v-text",[t._v(" Tambah Kategori")])],1),e("li",{on:{click:t.onPostArticleClick}},[e("v-icon",{attrs:{medium:""}},[t._v("mdi-pencil-plus")]),e("v-text",[t._v(" Unggah Artikel")])],1),e("li",{on:{click:t.onListArticleClick}},[e("v-icon",{attrs:{medium:""}},[t._v("mdi-newspaper-variant-multiple-outline")]),e("v-text",[t._v(" Daftar Artikel")])],1),e("li",{on:{click:t.onListCategoriesClick}},[e("v-icon",{attrs:{medium:""}},[t._v("mdi-view-list")]),e("v-text",[t._v(" Daftar Kategori")])],1),e("li",{on:{click:t.onListUserClick}},[e("v-icon",{attrs:{medium:""}},[t._v("mdi-account-multiple")]),e("v-text",[t._v(" Daftar User")])],1),e("li",{on:{click:t.onAddAdminClick}},[e("v-icon",{attrs:{medium:""}},[t._v("mdi-account-plus")]),e("v-text",[t._v(" Tambah Admin")])],1),e("li",{on:{click:t.onLogOutClick}},[e("v-icon",{attrs:{medium:""}},[t._v("mdi-logout-variant")]),e("v-text",[t._v(" Logout")])],1)])]),e("div",{staticClass:"main_content"},[e("div",{staticClass:"header"},[t._v(" CMS "),e("div",{staticClass:"admin"},[e("v-col",[e("v-icon",{attrs:{large:""}},[t._v("mdi-account-circle")]),e("v-text",[t._v(" admin")])],1)],1)]),e("router-view")],1)])])},o=[],s={data:function(){},methods:{onDashboardClick:function(){"/admin/dashboard"!==this.$route.path&&this.$router.push("/admin/dashboard")},onAddCategoriesClick:function(){"/admin/addCategories"!==this.$route.path&&this.$router.push("/admin/addCategories")},onPostArticleClick:function(){"/admin/postArticle"!==this.$route.path&&this.$router.push("/admin/postArticle")},onListArticleClick:function(){"/admin/listArticle"!==this.$route.path&&this.$router.push("/admin/listArticle")},onListCategoriesClick:function(){"/admin/listCategories"!==this.$route.path&&this.$router.push("/admin/listCategories")},onListUserClick:function(){"/admin/listUser"!==this.$route.path&&this.$router.push("/admin/listUser")},onAddAdminClick:function(){"/admin/addAdmin"!==this.$route.path&&this.$router.push("/admin/addAdmin")},onLogOutClick:function(){localStorage.removeItem("user"),this.$router.push("/"),location.reload()}},mounted:function(){var t=JSON.parse(localStorage.getItem("user"));t.dataUser.isAdmin||this.$router.push("/")}},n=s,r=(e("14cb"),e("2877")),c=Object(r["a"])(n,a,o,!1,null,null,null);i["default"]=c.exports}}]);
//# sourceMappingURL=chunk-7f990b14.1ed2b421.js.map