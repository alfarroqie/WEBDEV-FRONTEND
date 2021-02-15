(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-090d957a"],{2742:function(e,t,a){},"56c9":function(e,t,a){"use strict";a("2742")},"5ace":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vue-template"},[a("v-card",{staticClass:"event-card"},[a("v-list",{attrs:{align:"left"}},[a("form",[a("h3",{staticClass:"text-center"},[e._v("Sign Up")]),a("div",{staticClass:"form-group"},[a("label",[e._v("Full Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.fullnameUser,expression:"fullnameUser"}],staticClass:"form-control form-control-lg",attrs:{type:"text",required:""},domProps:{value:e.fullnameUser},on:{input:function(t){t.target.composing||(e.fullnameUser=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[e._v("Username")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],staticClass:"form-control form-control-lg",attrs:{type:"username",required:""},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[e._v("email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.emailUser,expression:"emailUser"}],staticClass:"form-control form-control-lg",attrs:{type:"email",required:""},domProps:{value:e.emailUser},on:{input:function(t){t.target.composing||(e.emailUser=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordUser,expression:"passwordUser"}],staticClass:"form-control form-control-lg",attrs:{type:"password",required:""},domProps:{value:e.passwordUser},on:{input:function(t){t.target.composing||(e.passwordUser=t.target.value)}}})]),a("RouterLink",{attrs:{to:"/signup"}},[a("a",{attrs:{href:"#"}},[a("button",{staticClass:"btn btn-primary btn-lg btn-block",staticStyle:{color:"white"},attrs:{type:"submit"},on:{click:e.addUser}},[e._v(" Sign Up ")])])]),a("p",{staticClass:"forgot-account text-right",staticStyle:{"padding-top":"10px"}},[e._v(" Already have an account? "),a("router-link",{attrs:{to:"/login"}},[e._v("Log in")])],1)],1)])],1)],1)},s=[],o=a("eaaf"),n=a("619f"),i={component:{ErrorDialog:n["a"]},data:function(){return{fullnameUser:"",userName:"",emailUser:"",passwordUser:""}},methods:{addUser:function(){var e=this,t={name:this.fullnameUser,username:this.userName,email:this.emailUser,password:this.passwordUser,isAdmin:!1},a={email:this.emailUser,password:this.passwordUser};this.isLoading=!0,o["a"].create(t).then((function(t){e.isLoading=!1,console.log(t),o["a"].login(a).then((function(t){e.isLoading=!1,console.log(t),localStorage.removeItem("user"),localStorage.setItem("user",JSON.stringify(t.data)),console.log("Authentication: ",t.data),e.$router.push("/")})).catch((function(t){e.isLoading=!1,e.isError=!0,console.log(t)}))})).catch((function(t){e.isLoading=!1,e.isError=!0,console.log(t)}))}}},l=i,c=(a("56c9"),a("2877")),u=Object(c["a"])(l,r,s,!1,null,null,null);t["default"]=u.exports},"619f":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{width:"500"},model:{value:e.isDialog,callback:function(t){e.isDialog=t},expression:"isDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline red darken-2",staticStyle:{color:"white"}},[e._v(" "+e._s(e.errorTitle)+" ")]),a("v-card-text",{staticClass:"body-1 pa-10"},[e._v(" "+e._s(e.errorMessage)+" ")]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.isDialog=!1}}},[e._v(" Okay ")])],1)],1)],1)],1)},s=[],o={props:{isDialog:{type:Boolean,default:!1},errorTitle:{type:String,default:"Title"},errorMessage:{type:String,default:"Error"}}},n=o,i=a("2877"),l=Object(i["a"])(n,r,s,!1,null,null,null);t["a"]=l.exports},eaaf:function(e,t,a){"use strict";var r=a("d4ec"),s=a("bee2"),o=a("c427"),n=a("3ca2"),i="/users",l=function(){function e(){Object(r["a"])(this,e)}return Object(s["a"])(e,[{key:"create",value:function(e){return o["a"].post(i+"/signup",e)}},{key:"getAll",value:function(){return o["a"].get(i)}},{key:"login",value:function(e){return o["a"].post(i+"/login",e)}},{key:"changePassword",value:function(e){return o["a"].put(i+"/change-password",e,{headers:Object(n["a"])()})}},{key:"delete",value:function(e){return o["a"].delete(i+"/delete/".concat(e),{headers:Object(n["a"])()})}},{key:"getProfilUser",value:function(e){return o["a"].get(i+"/profile/".concat(e),{headers:Object(n["a"])()})}},{key:"saveNews",value:function(e){return o["a"].post(i+"/save",e,{headers:Object(n["a"])()})}},{key:"likeNews",value:function(e){return o["a"].post(i+"/like",e,{headers:Object(n["a"])()})}}]),e}();t["a"]=new l}}]);
//# sourceMappingURL=chunk-090d957a.6e3e0a47.js.map