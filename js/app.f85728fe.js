(function(e){function t(t){for(var i,n,s=t[0],c=t[1],l=t[2],d=0,u=[];d<s.length;d++)n=s[d],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&u.push(a[n][0]),a[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);f&&f(t);while(u.length)u.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],i=!0,n=1;n<r.length;n++){var s=r[n];0!==a[s]&&(i=!1)}i&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var i={},n={app:0},a={app:0},o=[];function s(e){return c.p+"js/"+({"franchise-details":"franchise-details","franchise-edit~franchises":"franchise-edit~franchises","franchise-edit":"franchise-edit",franchises:"franchises"}[e]||e)+"."+{"franchise-details":"eb31331e","franchise-edit~franchises":"5eb812fb","franchise-edit":"578e0edd",franchises:"8abc127f"}[e]+".js"}function c(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"franchise-details":1,"franchise-edit~franchises":1,"franchise-edit":1,franchises:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var i="css/"+({"franchise-details":"franchise-details","franchise-edit~franchises":"franchise-edit~franchises","franchise-edit":"franchise-edit",franchises:"franchises"}[e]||e)+"."+{"franchise-details":"9951b639","franchise-edit~franchises":"ad5e95d8","franchise-edit":"94a9948c",franchises:"edeeec4e"}[e]+".css",a=c.p+i,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===i||d===a))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===i||d===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var i=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete n[e],f.parentNode.removeChild(f),r(o)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){n[e]=0})));var i=a[e];if(0!==i)if(i)t.push(i[2]);else{var o=new Promise((function(t,r){i=a[e]=[t,r]}));t.push(i[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var i=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+n+")",u.name="ChunkLoadError",u.type=i,u.request=n,r[1](u)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=i,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(r,i,function(t){return e[t]}.bind(null,i));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/coding-school/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var f=d;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),n=(r("d3b7"),r("8c4f")),a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h1",{staticClass:"display-1 my-6"},[e._v("Dashboard")]),r("p",[e._v("Nothing to see here. Yet.")])])}],s={name:"Dashboard"},c=s,l=r("2877"),d=Object(l["a"])(c,a,o,!1,null,null,null),u=d.exports;i["a"].use(n["a"]);var f=[{path:"/",name:"home",component:u},{path:"/franchises",name:"franchises",component:function(){return Promise.all([r.e("franchise-edit~franchises"),r.e("franchises")]).then(r.bind(null,"847b"))},children:[{path:":id",name:"franchise-details",component:function(){return r.e("franchise-details").then(r.bind(null,"2d94"))}},{path:":id/edit",name:"franchise-edit",component:function(){return Promise.all([r.e("franchise-edit~franchises"),r.e("franchise-edit")]).then(r.bind(null,"4698"))}}]}],h=new n["a"]({mode:"history",base:"/coding-school/",routes:f}),p=h,m=(r("7db0"),r("2f62"));i["a"].use(m["a"]);var v=new m["a"].Store({state:{isDrawerFixed:!1,franchises:[{id:"1",title:"CodingSchool Slovenia",website:"https://www.codingschool.si",street:"Ljubljanska cesta 100",zip:"8000",city:"Novo mesto",active:!0},{id:"2",title:"CodingSchool Austria",website:"https://www.codingschool.at",street:"Strasse 100",zip:"1000",city:"Wien",active:!0},{id:"3",title:"CodingSchool Germany",website:"https://www.codingschool.de",street:"Strasse 100",zip:"1000",city:"Berlin",active:!0},{id:"4",title:"CodingSchool Portugal",website:"https://www.codingschool.pt",street:"Avenida 100",zip:"1000",city:"Lisbon",active:!1},{id:"5",title:"CodingSchool Italy",website:"https://www.codingschool.it",street:"Strada 100",zip:"1000",city:"Milan",active:!1},{id:"6",title:"CodingSchool Croatia",website:"https://www.codingschool.hr",street:"Ulica 100",zip:"1000",city:"Zagreb",active:!0},{id:"7",title:"CodingSchool Serbia",website:"https://www.codingschool.rs",street:"Ulica 100",zip:"1000",city:"Beograd",active:!0}]},getters:{getFranchiseByID:function(e){return function(t){return e.franchises.find((function(e){return e.id===t}))}}},mutations:{getSavedDrawerType:function(e){e.isDrawerFixed="true"===localStorage.isDrawerFixed},toggleDrawerType:function(e){e.isDrawerFixed=!e.isDrawerFixed}},actions:{toggleDrawerType:function(e){localStorage.isDrawerFixed=!e.state.isDrawerFixed,e.commit("toggleDrawerType")}}}),g=(r("5319"),r("f309"));i["a"].use(g["a"]);var w=new g["a"]({theme:{themes:{light:{primary:"#30d9a4"}},options:{minifyTheme:function(e){return e.replace(/[\r\n|\r|\n]/g,"")}}}}),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("navbar",{attrs:{drawer:e.drawer},on:{toggleDrawer:e.toggleDrawer}}),r("sidebar",{attrs:{drawer:e.drawer},on:{toggleDrawer:e.toggleDrawer}}),r("v-content",[r("v-container",[r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("router-view")],1)],1)],1)],1)},y=[],D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[e.isDrawerFixed?e._e():r("v-app-bar-nav-icon",{on:{click:function(t){return t.stopPropagation(),e.toggleDrawer(t)}}}),r("v-toolbar-title",[e._v("Dashboard")]),r("v-spacer"),r("notification-center")],1)},_=[],x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[r("v-btn",e._g({attrs:{text:"",icon:"",color:"white"}},i),[e.hasUnread?r("v-icon",[e._v("mdi-bell-ring")]):r("v-icon",[e._v("mdi-bell-outline")])],1)]}}])},[r("v-list",{attrs:{width:"300"}},e._l(e.notifications,(function(t){return r("v-list-item",{key:t.id,attrs:{"two-line":"",link:""},on:{click:function(r){return e.markAsRead(t)}}},[r("v-list-item-content",{class:t.read?"grey--text text--lighten-1":""},[r("v-list-item-title",[e._v(e._s(t.title))]),r("v-list-item-subtitle",[e._v(e._s(t.text))])],1)],1)})),1)],1)},S=[],k=(r("159b"),{data:function(){return{notifications:[{id:1,title:"First notification",text:"This is your first ever notification.",read:!1},{id:2,title:"Second notification",text:"This is your second important notification.",read:!1}]}},computed:{hasUnread:function(){var e=0;return this.notifications.forEach((function(t){t.read||e++})),e>0}},methods:{markAsRead:function(e){e.read=!0}}}),V=k,T=r("6544"),C=r.n(T),F=r("8336"),j=r("132d"),A=r("8860"),L=r("da13"),I=r("5d23"),O=r("e449"),E=Object(l["a"])(V,x,S,!1,null,null,null),P=E.exports;C()(E,{VBtn:F["a"],VIcon:j["a"],VList:A["a"],VListItem:L["a"],VListItemContent:I["a"],VListItemSubtitle:I["b"],VListItemTitle:I["c"],VMenu:O["a"]});var $={props:["drawer"],components:{NotificationCenter:P},computed:{isDrawerFixed:function(){return this.$store.state.isDrawerFixed}},methods:{toggleDrawer:function(){this.$emit("toggleDrawer")}}},M=$,N=r("40dc"),B=r("5bc1"),z=r("2fa4"),U=r("2a7f"),J=Object(l["a"])(M,D,_,!1,null,null,null),q=J.exports;C()(J,{VAppBar:N["a"],VAppBarNavIcon:B["a"],VSpacer:z["a"],VToolbarTitle:U["a"]});var R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-navigation-drawer",{attrs:{app:"",temporary:!e.isDrawerFixed,fixed:e.isDrawerFixed,permanent:e.isDrawerFixed,miniVariant:e.isDrawerFixed,width:"300",dark:""},scopedSlots:e._u([{key:"append",fn:function(){return[e.isDrawerFixed?r("v-list-item",{attrs:{link:""},on:{click:function(t){return t.stopPropagation(),e.toggleDrawerType(t)}}},[r("v-icon",[e._v("mdi-chevron-right")])],1):e._e()]},proxy:!0}]),model:{value:e.drawerModel,callback:function(t){e.drawerModel=t},expression:"drawerModel"}},[r("v-list-item",{attrs:{"two-line":""}},[r("v-list-item-avatar",{attrs:{color:"primary"}},[e.userAvatar?r("img",{attrs:{src:e.userAvatar}}):r("span",{staticClass:"white--text"},[e._v("JD")])]),r("v-list-item-content",[r("v-list-item-title",[e._v("John Doe")]),r("v-list-item-subtitle",[e._v("Administrator")])],1),e.isDrawerFixed?e._e():r("v-btn",{attrs:{icon:""},on:{click:function(t){return t.stopPropagation(),e.toggleDrawerType(t)}}},[r("v-icon",[e._v("mdi-chevron-left")])],1)],1),r("v-divider"),r("v-list",{attrs:{nav:""}},[r("v-list-item",{key:"home",attrs:{to:{name:"home"},link:"",exact:""}},[r("v-list-item-icon",[r("v-icon",[e._v("mdi-gauge")])],1),r("v-list-item-content",[r("v-list-item-title",[e._v("Dashboard")])],1)],1),r("v-list-item",{key:"franchises",attrs:{to:{name:"franchises"},link:""}},[r("v-list-item-icon",[r("v-icon",[e._v("mdi-map-marker")])],1),r("v-list-item-content",[r("v-list-item-title",[e._v("Franchises")])],1)],1)],1)],1)},G=[],H={props:["drawer"],computed:{drawerModel:{get:function(){return this.drawer},set:function(e){e||this.$emit("toggleDrawer")}},isDrawerFixed:function(){return this.$store.state.isDrawerFixed},userAvatar:function(){var e=Math.floor(90*Math.random())+1;return e%2===0&&"https://randomuser.me/api/portraits/men/".concat(e,".jpg")}},methods:{toggleDrawerType:function(){this.$store.dispatch("toggleDrawerType")}}},K=H,W=r("ce7e"),Y=r("8270"),Z=r("34c3"),Q=r("f774"),X=Object(l["a"])(K,R,G,!1,null,null,null),ee=X.exports;C()(X,{VBtn:F["a"],VDivider:W["a"],VIcon:j["a"],VList:A["a"],VListItem:L["a"],VListItemAvatar:Y["a"],VListItemContent:I["a"],VListItemIcon:Z["a"],VListItemSubtitle:I["b"],VListItemTitle:I["c"],VNavigationDrawer:Q["a"]});var te={name:"App",components:{Navbar:q,Sidebar:ee},data:function(){return{drawer:!1}},methods:{toggleDrawer:function(){this.drawer=!this.drawer}},created:function(){this.$store.commit("getSavedDrawerType")}},re=te,ie=r("7496"),ne=r("a523"),ae=r("a75b"),oe=Object(l["a"])(re,b,y,!1,null,null,null),se=oe.exports;C()(oe,{VApp:ie["a"],VContainer:ne["a"],VContent:ae["a"]});r("dbaa");i["a"].config.productionTip=!1,new i["a"]({router:p,store:v,vuetify:w,render:function(e){return e(se)}}).$mount("#app")},dbaa:function(e,t,r){}});
//# sourceMappingURL=app.f85728fe.js.map