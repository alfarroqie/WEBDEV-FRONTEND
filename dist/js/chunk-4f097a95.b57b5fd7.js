(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f097a95"],{"1dde":function(t,e,r){var n=r("d039"),i=r("b622"),o=r("2d00"),a=i("species");t.exports=function(t){return o>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4de4":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").filter,o=r("1dde"),a=r("ae40"),s=o("filter"),c=a("filter");n({target:"Array",proto:!0,forced:!s||!c},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},c6fc:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("v-app",{attrs:{id:"inspire"}},[r("v-app-bar",{attrs:{color:"#aac9c0",dark:"",fixed:"",app:""}},[r("a",{attrs:{href:"/news"}},[r("img",{staticStyle:{height:"70px",width:"auto"},attrs:{src:"https://i.ibb.co/Rb6yXLg/Voyagee-removebg-preview.png"}})]),r("v-spacer"),t.$vuetify.breakpoint.mdAndUp?r("v-toolbar-items",[t._l(t.menu,(function(e){return r("v-btn",{key:e.id,attrs:{to:e.link,depressed:"",color:"#aac9c0",dark:""}},[t._v(" "+t._s(e.title)+" ")])})),r("v-menu",{attrs:{"open-on-click":"",bottom:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[r("v-btn",t._g(t._b({attrs:{depressed:"",color:"#aac9c0",dark:""}},"v-btn",i,!1),n),[t._v(" Destinasi"),r("v-icon",[t._v("mdi-chevron-down")])],1)]}}],null,!1,4070794664)},[r("v-list",t._l(t.locCategory,(function(e){return r("v-list-item",{key:e.id,attrs:{to:"/newsList/"+e.name}},[(e.isLocation=!0)?r("v-list-item-title",[t._v(t._s(e.name))]):t._e()],1)})),1)],1),t.auth?r("v-btn",{attrs:{depressed:"",color:"#aac9c0",dark:""},on:{click:t.profilMenu}},[t._v(" Profil ")]):t._e(),t.auth?r("v-btn",{attrs:{depressed:"",color:"#aac9c0",dark:""},on:{click:t.logout}},[t._v(" Logout ")]):r("v-btn",{attrs:{to:"/login",depressed:"",color:"#aac9c0",dark:""}},[t._v(" Login ")])],2):t._e(),t.$vuetify.breakpoint.smAndDown?r("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{icon:""}},n),[r("v-icon",[t._v("mdi-menu")])],1)]}}],null,!1,3153626740)},[r("v-list",{attrs:{width:"200px"}},[r("v-list-item",[r("v-list-item-content",[t._l(t.menu,(function(e){return r("v-list-item-title",{key:e.id},[r("v-btn",{attrs:{text:"",block:"",href:e.link}},[t._v(t._s(e.title))])],1)})),r("v-menu",{attrs:{"open-on-click":"",left:"","offset-x":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[r("v-list-item-title",t._g(t._b({},"v-list-item-title",i,!1),n),[r("v-btn",{attrs:{text:"",block:""}},[t._v("Destinasi")])],1)]}}],null,!1,4261378178)},[r("v-list",t._l(t.category,(function(e){return r("v-list-item",{key:e.id,attrs:{to:"/newsList/"+e.name}},[r("v-list-item-title",[t._v(t._s(e.name))])],1)})),1)],1),r("v-list-item-title",[t.auth?r("v-btn",{attrs:{text:"",block:""},on:{click:t.profilMenu}},[t._v(" Profil ")]):t._e(),t.auth?r("v-btn",{attrs:{text:"",block:""},on:{click:t.logout}},[t._v(" Logout ")]):r("v-btn",{attrs:{text:"",block:"",href:"/login"}},[t._v("Login")])],1)],2)],1)],1)],1):t._e()],1),r("div",{staticClass:"container mt-3"},[r("router-view")],1),r("v-footer",{attrs:{absolute:"",height:"auto",color:"#aac9c0",dark:""}},[r("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[r("v-flex",{attrs:{color:"#aac9c0",dark:"","py-3":"","text-center":"","white--text":"",xs12:""}},[t._v(" Made by Kelompok 4-Webdev ©2020 ")])],1)],1)],1)],1)},i=[],o=(r("4de4"),r("d81d"),r("b0c0"),r("3c1f")),a={data:function(){return{menu:[{id:"1",title:"Terbaru",link:"/newsList/Terbaru"},{id:"2",title:"Terpopuler",link:"/newsList/Terpopuler"},{id:"3",title:"Kuliner",link:"/newsList/Kuliner"},{id:"4",title:"Tips",link:"/newsList/Tips"}],category:[],auth:!1}},methods:{menuItems:function(){return this.menu},retrieveCategory:function(){var t=this;o["a"].getAll().then((function(e){t.category=e.data.map(t.mapNewsCategory)})).catch((function(){}))},mapNewsCategory:function(t){return{name:t.name,isLocation:t.isLocation,id:t.id}},logout:function(){localStorage.removeItem("user"),this.$router.push("/"),location.reload()},profilMenu:function(){this.$router.push("/users")}},computed:{locCategory:function(){return this.category.filter((function(t){return 1==t.isLocation}))}},mounted:function(){this.retrieveCategory();var t=JSON.parse(localStorage.getItem("user"));t.token?this.auth=!0:this.auth=!1,t.dataUser.isAdmin&&this.$router.push("/admin")}},s=a,c=r("2877"),l=Object(c["a"])(s,n,i,!1,null,null,null);e["default"]=l.exports},d81d:function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").map,o=r("1dde"),a=r("ae40"),s=o("map"),c=a("map");n({target:"Array",proto:!0,forced:!s||!c},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-4f097a95.b57b5fd7.js.map