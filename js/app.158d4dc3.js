(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var p=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),c=n.n(r);c.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[!1!==e.supportContactApi?[n("h1",[e._v("Web contacts API")]),n("h3",[e._v("Supported properties :")]),e._l(e.properties,(function(t){return n("div",{key:t.name},[e._v(" "+e._s(t.name)+" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"propertie.checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.checked)?e._i(t.checked,null)>-1:t.checked},on:{change:function(n){var r=t.checked,c=n.target,o=!!c.checked;if(Array.isArray(r)){var a=null,u=e._i(r,a);c.checked?u<0&&e.$set(t,"checked",r.concat([a])):u>-1&&e.$set(t,"checked",r.slice(0,u).concat(r.slice(u+1)))}else e.$set(t,"checked",o)}}})])})),n("button",{on:{click:e.onClick}},[e._v("Fetch contacts")]),null!==e.contacts?n("div",e._l(e.contacts,(function(t){return n("div",{key:t},e._l(t,(function(t,r){return n("div",{key:r},[e._v(" "+e._s(r)+" : "),t.length>0?n("span",[e._v(" "+e._s(t.reduce((function(e,t){return e+" , "+t})))+" ")]):e._e()])})),0)})),0):e._e()]:[n("h1",[e._v(" The Web contacts API Is not supported in your browser please try with Google Chrome Android 80+ ")])]],2)},o=[],a=(n("4de4"),n("d81d"),n("b0c0"),n("96cf"),n("1da1")),u={name:"App",data:function(){return{properties:null,supportContactApi:null,contacts:null}},mounted:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return navigator.contacts||(e.supportContactApi=!1),t.next=3,navigator.contacts.getProperties();case 3:e.properties=t.sent,e.properties=e.properties.map((function(e){return{name:e,checked:!0}}));case 5:case"end":return t.stop()}}),t)})))()},methods:{onClick:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.properties.filter((function(e){return e.checked})).map((function(e){return e.name})),0!==n.length){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,navigator.contacts.select(n);case 5:e.contacts=t.sent;case 6:case"end":return t.stop()}}),t)})))()}}},i=u,s=(n("034f"),n("2877")),p=Object(s["a"])(i,c,o,!1,null,null,null),l=p.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.158d4dc3.js.map