(function(t){function e(e){for(var r,a,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},i=[];function a(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d0af0fb":"051f042f","chunk-2d0c0895":"b1b2d34f","chunk-2d21dc93":"5c2871cf","chunk-2d230c58":"99d5e6f6"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=o[t]=[e,r]});e.push(n[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=a(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}o[t]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"header"},[n("NavBar",{attrs:{"nav-links":t.navLinks}})],1),n("div",{staticClass:"main"},[n("router-view")],1),n("Footer",{attrs:{copyrightText:t.copyrightText}})],1)},i=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",[r("div",{staticClass:"static-header"},[r("div",{staticClass:"main-logo"},[r("img",{attrs:{src:n("b640")}})]),r("div",{staticClass:"menu-icon"},[r("i",{staticClass:"ion-ios-menu",on:{click:t.toggleNav}})])]),r("ul",{ref:"nav",staticClass:"nav-items"},t._l(t.navLinks,function(e,n){return r("li",{key:n,staticClass:"nav-item"},[r("div",{staticClass:"nav-item-link",on:{click:function(n){return t.redirect(e.path)}}},[t._v("\n        "+t._s(e.text)+"\n        "),r("i",{class:e.icon,attrs:{icon:""}})])])}),0)])},s=[],c={props:["navLinks"],methods:{toggleNav:function(){var t=this.$refs.nav.classList;t.contains("active")?t.remove("active"):t.add("active")},redirect:function(t){this.toggleNav(),this.$router.push(t)}}},l=c,u=(n("6db8"),n("2877")),f=Object(u["a"])(l,a,s,!1,null,"0256697e",null),p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[t._m(0),n("div",{staticClass:"copyright-text"},[t._v(t._s(t.copyrightText))])])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-content"},[n("div",{staticClass:"messages"},[t._v("\n      We are building a one stop platform for frontend developers and designers.\n      "),n("br"),t._v("If you want to contribute to this community driven effort, please mail us\n      "),n("b",[t._v("contact@shoonya.ca")]),n("br")]),n("div",{staticClass:"social-links"},[n("div",{staticClass:"social-link"},[n("img",{attrs:{src:"https://www.frontend.social/images/slack.png",alt:"slack"}})]),n("div",{staticClass:"social-link"},[n("img",{attrs:{src:"https://www.frontend.social/images/twitter.png",alt:"twitter"}})]),n("div",{staticClass:"social-link"},[n("img",{attrs:{src:"https://www.frontend.social/images/github.png",alt:"github"}})])])])}],h={props:["copyrightText"]},m=h,b=(n("56e8"),Object(u["a"])(m,d,v,!1,null,"24156130",null)),g=b.exports,y={components:{NavBar:p,Footer:g},data:function(){return{navLinks:[{text:"Learn",path:"/learn",icon:"ion-ios-bonfire"},{text:"Jobs",path:"/jobs",icon:"ion-ios-briefcase"},{text:"Conferences",path:"/conferences",icon:"ion-ios-megaphone"},{text:"City",path:"/city",icon:"ion-ios-business"}],copyrightText:"Powered by Shoonya Technologies Ltd. © 2019 All Rights Reserved."}}},w=y,k=(n("5c0b"),Object(u["a"])(w,o,i,!1,null,null,null)),_=k.exports,x=n("8c4f"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t._v("Welcome to Frontend social")])},j=[],O={name:"home"},T=O,P=Object(u["a"])(T,C,j,!1,null,null,null),L=P.exports;r["a"].use(x["a"]);var E=new x["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:L},{path:"/city",name:"city",component:function(){return n.e("chunk-2d0af0fb").then(n.bind(null,"0d5f"))}},{path:"/jobs",name:"jobs",component:function(){return n.e("chunk-2d230c58").then(n.bind(null,"ee68"))}},{path:"/conferences",name:"conferences",component:function(){return n.e("chunk-2d21dc93").then(n.bind(null,"d37e"))}},{path:"/learn",name:"learn",component:function(){return n.e("chunk-2d0c0895").then(n.bind(null,"41ce"))}}]});r["a"].config.productionTip=!1,new r["a"]({router:E,render:function(t){return t(_)}}).$mount("#app")},"56e8":function(t,e,n){"use strict";var r=n("c0ac"),o=n.n(r);o.a},"5c0b":function(t,e,n){"use strict";var r=n("e332"),o=n.n(r);o.a},"6db8":function(t,e,n){"use strict";var r=n("ab00"),o=n.n(r);o.a},ab00:function(t,e,n){},b640:function(t,e,n){t.exports=n.p+"img/logo.6ec60ce0.jpg"},c0ac:function(t,e,n){},e332:function(t,e,n){}});
//# sourceMappingURL=app.cbbce6c5.js.map