(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a26a3912"],{"3ee7":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Breadcrumbs",{attrs:{items:t.items}}),e("v-layout",{attrs:{row:"",wrap:""}},[e("v-layout",{staticStyle:{"margin-left":"40px"},attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[e("v-select",{attrs:{"menu-props":"auto",items:t.agent_list,"item-text":"text","item-value":"value",label:"所属代理商",required:""},on:{change:t.info},model:{value:t.agent_id,callback:function(a){t.agent_id=a},expression:"agent_id"}})],1)],1),e("v-flex",{attrs:{xs12:"","mb-12":""}},[e("v-expansion-panel",{attrs:{popout:"",dark:""}},t._l(t.data,function(a,i){return e("v-expansion-panel-content",{key:i,scopedSlots:t._u([{key:"header",fn:function(){return[-1==a.status?e("div",[e("v-chip",{attrs:{color:"orange","text-color":"white"}},[t._v("\n                待处理\n                "),e("v-icon",{attrs:{right:""}},[t._v("wb_incandescent")])],1),e("v-chip",{attrs:{color:"orange"}},[t._v(t._s(t._f("time")(a.create_time)))]),e("v-chip",[t._v(t._s(t._f("slice")(a.content)))])],1):e("div",[e("v-chip",{attrs:{color:"success","text-color":"white"}},[t._v("\n                已处理\n                "),e("v-icon",{attrs:{right:""}},[t._v("check_circle")])],1),e("v-chip",{attrs:{color:"success"}},[t._v(t._s(t._f("time")(a.create_time)))]),e("v-chip",[t._v(t._s(t._f("slice")(a.content)))])],1)]},proxy:!0}],null,!0)},[e("v-card",[e("v-card-text",[e("div",{staticClass:"text-xs-left"},[e("v-chip",{attrs:{color:"secondary","text-color":"white"}},[t._v("用户预留联系方式")]),e("v-chip",[t._v(t._s(a.contact))])],1),e("div",{staticClass:"text-xs-left"},[e("v-chip",{attrs:{color:"secondary","text-color":"white"}},[t._v("用户预留反馈意见")]),e("p",{staticStyle:{"word-wrap":"break-word","word-break":"normal",padding:"0 14px 0 40px",color:"#FFFF00"}},[t._v(" "+t._s(a.content)+" ")])],1),e("div",{staticClass:"text-xs-left"},[e("v-chip",{attrs:{color:"secondary","text-color":"white"}},[t._v("用户反馈意见时间")]),e("v-chip",[t._v(t._s(t._f("time")(a.create_time)))])],1),e("div",{staticClass:"text-xs-left"},[e("v-chip",{staticStyle:{width:"128px"},attrs:{color:"secondary","text-color":"white"}},[t._v("用户ID")]),e("v-chip",[t._v(t._s(a.user_id))]),e("span",{staticStyle:{"font-size":"12px",color:"#ccc"}},[t._v("* 用户ID")])],1),1==a.status?e("div",{staticClass:"text-xs-left"},[e("v-chip",{staticStyle:{width:"128px"},attrs:{color:"success","text-color":"white"}},[t._v("已处理描述")]),e("v-chip",[t._v(t._s(a.description))])],1):t._e(),t._l(t.root_path,function(i,o){return["/api/v1/user/update_feedback"==i.url&&-1==a.status?e("div",{key:o,staticClass:"text-xs-right"},[e("v-btn",{attrs:{color:"warning"},on:{click:function(e){return t.ignore_(a.id)}}},[t._v("忽略 "+t._s(a.url))]),e("v-btn",{attrs:{color:"primary darken-1 white--text"},on:{click:function(e){return t.opinion_(a.id)}}},[t._v("已处理")])],1):t._e()]})],2)],1)],1)}),1)],1),e("div",{staticClass:"text-xs-center",staticStyle:{width:"100%",margin:"20px"}},[e("Page",{attrs:{total_number:t.total_number,page:t.page+1},on:{opinionPage:t.info_}})],1)],1),0==t.data.length?e("v-alert",{attrs:{value:!0,color:"warning",icon:"check_circle",outline:""}},[t._v("暂无用户反馈意见...")]):t._e(),e("v-layout",{attrs:{row:"","justify-center":""}},[e("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("       用户意见反馈处理描述")])]),e("v-card-text",[e("v-container",{attrs:{"grid-list-md":""}},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("v-textarea",{attrs:{outline:"",name:"input-7-4",label:"输入描述",value:""},model:{value:t.description,callback:function(a){t.description=a},expression:"description"}})],1)],1)],1),e("small",[t._v("       * 已处理用户意见反馈")])],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary darken-1",flat:""},on:{click:function(a){t.dialog=!1}}},[t._v("取消")]),e("v-btn",{attrs:{color:"primary darken-1 white--text"},on:{click:t.opinion}},[t._v("提交")])],1)],1)],1)],1),e("v-layout",{attrs:{row:"","justify-center":""}},[e("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dialog_,callback:function(a){t.dialog_=a},expression:"dialog_"}},[e("v-card",[e("v-card-title",{staticClass:"headline"},[t._v("确定要忽略该条意见反馈吗?")]),e("v-card-text",[t._v("确认操作该条意见反馈会被标记为已处理状态。")]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary darken-1",flat:""},on:{click:function(a){t.dialog_=!1}}},[t._v("取消")]),e("v-btn",{attrs:{color:"primary darken-1 white--text"},on:{click:t.ignore}},[t._v("确认")])],1)],1)],1)],1)],1)},o=[],s=e("5fdf"),n=e("e607"),c={components:{Breadcrumbs:s["a"],Page:n["a"]},data:function(){return{status:0,page:0,total_number:0,agent_list:[{text:"全部APP反馈信息",value:0},{text:"已处理",value:1},{text:"未处理",value:-1}],agent_id:{text:"全部APP反馈信息",value:0},items:[{text:"首页",disabled:!1,to:"/home"},{text:"用户反馈",disabled:!1,to:"/opinion"}],data:[],description:"",dialog:!1,dialog_:!1,root_path:this.$cookie.getLocalStorage("root_path").root_path}},mounted:function(){this.info(void 0)},methods:{info_:function(t){this.page=t-1,this.info(void 0)},info:function(t){var a=this;void 0!==t&&(this.page=0,this.status=t),this.$axios({method:"get",url:"".concat(this.$apis.URL.user_feedback,"?status=").concat(this.status,"&page=").concat(this.page),data:{}}).then(function(t){0===t.data.result?(a.data=t.data.datas.list,a.total_number=t.data.datas.total_number):a.$Dialog.getProductCheckResult_({text:t.data.message,timeout:3e3,snackbar:!0})}).catch(function(t){a.$Dialog.getProductCheckResult_({text:t,timeout:3e3,snackbar:!0})})},opinion_:function(t){this.dialog=!0,this.id=t},opinion:function(){var t=this;this.description.length<2?this.$Dialog.getProductCheckResult_({text:"请输入至少2个字符",timeout:3e3,snackbar:!0}):this.$axios({method:"post",url:this.$apis.URL.user_update_feedback,data:{id:this.id,status:1,description:this.description}}).then(function(a){0===a.data.result?(t.dialog=!1,t.id="",t.info(void 0),t.$Dialog.getProductCheckResult_({text:"此条意见反馈已标记为已处理！",timeout:3e3,snackbar:!0})):t.$Dialog.getProductCheckResult_({text:a.data.message,timeout:3e3,snackbar:!0})}).catch(function(a){t.$Dialog.getProductCheckResult_({text:a,timeout:3e3,snackbar:!0})})},ignore_:function(t){this.dialog_=!0,this.id=t},ignore:function(){var t=this;this.$axios({method:"post",url:this.$apis.URL.user_update_feedback,data:{id:this.id,status:1,description:"忽略"}}).then(function(a){0===a.data.result?(t.info(void 0),t.id="",t.dialog_=!1,t.$Dialog.getProductCheckResult_({text:"已忽略该条用户反馈！",timeout:3e3,snackbar:!0})):t.$Dialog.getProductCheckResult_({text:a.data.message,timeout:3e3,snackbar:!0})}).catch(function(a){t.$Dialog.getProductCheckResult_({text:a,timeout:3e3,snackbar:!0})})}}},r=c,l=(e("ade4"),e("2877")),d=e("6544"),u=e.n(d),v=e("0798"),_=e("8336"),p=e("b0af"),h=e("99d9"),x=e("12b2"),g=e("cc20"),f=e("a523"),m=e("169a"),k=e("cd55"),b=e("49e2"),w=e("0e8f"),y=e("132d"),C=e("a722"),P=e("b56d"),V=e("9910"),$=e("a844"),D=Object(l["a"])(r,i,o,!1,null,"61da7e54",null);a["default"]=D.exports;u()(D,{VAlert:v["a"],VBtn:_["a"],VCard:p["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:x["a"],VChip:g["a"],VContainer:f["a"],VDialog:m["a"],VExpansionPanel:k["a"],VExpansionPanelContent:b["a"],VFlex:w["a"],VIcon:y["a"],VLayout:C["a"],VSelect:P["a"],VSpacer:V["a"],VTextarea:$["a"]})},ade4:function(t,a,e){"use strict";var i=e("df97"),o=e.n(i);o.a},df97:function(t,a,e){}}]);
//# sourceMappingURL=chunk-a26a3912.11780f98.js.map