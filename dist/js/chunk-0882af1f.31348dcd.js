(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0882af1f"],{"2ca9":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{staticClass:"list px-3 mx-auto",attrs:{align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"12"}},[n("v-card",{staticClass:"mx-auto",attrs:{tile:""}},[n("v-card-title",[e._v("List User")]),n("v-data-table",{attrs:{headers:e.headers,items:e.users,"disable-pagination":"","hide-default-footer":!0},scopedSlots:e._u([{key:"item.actions",fn:function(t){var a=t.item;return[n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteUser(a.id)}}},[e._v("mdi-delete")])]}}],null,!0)})],1)],1)],1)},s=[],r=(n("b0c0"),n("eaaf")),i={name:"users-list",data:function(){return{users:[],title:"",headers:[{text:"Id",align:"start",sortable:!1,value:"id"},{text:"Name",sortable:!1,value:"name"},{text:"Email",value:"email",sortable:!1},{text:"Username",value:"username",sortable:!1},{text:"Admin",value:"isAdmin",sortable:!1},{text:"Delete",value:"actions",sortable:!1}]}},methods:{retrieveUser:function(){var e=this;r["a"].getAll().then((function(t){e.users=t.data})).catch((function(){}))},refreshList:function(){this.retrieveUser()},deleteUser:function(e){var t=this;r["a"].delete(e).then((function(){t.refreshList()})).catch((function(){}))},getDisplayUser:function(e){return{id:e.id,name:e.name,email:e.email,username:e.namusernamee,isAdmin:e.isAdmin?"Admin":"User"}}},mounted:function(){this.retrieveUser()}},u=i,l=(n("b522"),n("2877")),c=Object(l["a"])(u,a,s,!1,null,"402ca048",null);t["default"]=c.exports},b522:function(e,t,n){"use strict";n("be1b")},be1b:function(e,t,n){},eaaf:function(e,t,n){"use strict";var a=n("d4ec"),s=n("bee2"),r=n("c427"),i="/users",u=function(){function e(){Object(a["a"])(this,e)}return Object(s["a"])(e,[{key:"create",value:function(e){return r["a"].post(i+"/signup",e)}},{key:"getAll",value:function(){return r["a"].get(i)}},{key:"login",value:function(e){return r["a"].post(i+"/login",e)}},{key:"changePassword",value:function(e){return r["a"].put(i+"/change-password",e)}},{key:"delete",value:function(){return r["a"].delete(i+"/delete")}},{key:"getProfilUser",value:function(e){return r["a"].get(i+"/".concat(e))}}]),e}();t["a"]=new u}}]);
//# sourceMappingURL=chunk-0882af1f.31348dcd.js.map