(function(e){function t(t){for(var a,r,i=t[0],s=t[1],l=t[2],j=0,b=[];j<i.length;j++)r=i[j],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&b.push(c[r][0]),c[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==c[s]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},c={app:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"11ed":function(e,t,n){"use strict";n("313c")},"23da":function(e,t,n){},2478:function(e,t,n){"use strict";n("23da")},"2df9":function(e,t,n){},"313c":function(e,t,n){},"3ce6":function(e,t,n){},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function c(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=o,e.exports=c,c.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),c=n("c3a1"),o=(n("7437"),n("3c4d"));function r(e,t,n,c,o,r){var i=Object(a["resolveComponent"])("List"),s=Object(a["resolveComponent"])("el-card");return Object(a["openBlock"])(),Object(a["createBlock"])(s,{shadow:"never"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(i,{list:r.activities},null,8,["list"])]})),_:1})}function i(e,t,n,c,o,r){var i=Object(a["resolveComponent"])("RowItem"),s=Object(a["resolveComponent"])("el-col"),l=Object(a["resolveComponent"])("el-row");return Object(a["openBlock"])(),Object(a["createBlock"])(l,null,{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(n.list,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(s,{key:t},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(i,{image:e.image,title:e.title,url:e.url,begin:e.begin,end:e.end,tags:e.tags},null,8,["image","title","url","begin","end","tags"])]})),_:2},1024)})),128))]})),_:1})}var s={class:"noselect item-title"};function l(e,t,n,c,o,r){var i=Object(a["resolveComponent"])("el-image"),l=Object(a["resolveComponent"])("el-row"),u=Object(a["resolveComponent"])("el-link"),j=Object(a["resolveComponent"])("el-tag"),b=Object(a["resolveComponent"])("el-space"),d=Object(a["resolveComponent"])("el-card");return Object(a["openBlock"])(),Object(a["createBlock"])(d,{shadow:"always"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(l,null,{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(i,{class:"noselect item-image",src:n.image,fit:"cover",lazy:""},null,8,["src"])]})),_:1}),Object(a["createVNode"])(l,null,{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(u,{href:n.url,type:"primary"},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("h1",s,Object(a["toDisplayString"])(n.title),1)]})),_:1},8,["href"])]})),_:1}),Object(a["createVNode"])(l,{class:"item-period"},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(r.period),1)]})),_:1}),Object(a["createVNode"])(l,null,{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(b,{wrap:""},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(n.tags,(function(t,n){return Object(a["openBlock"])(),Object(a["createBlock"])(j,{class:"noselect",key:n,type:e.color[n%5]},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(t),1)]})),_:2},1032,["type"])})),128))]})),_:1})]})),_:1})]})),_:1})}n("d3b7"),n("caad"),n("2532"),n("99af");var u=n("c1df"),j=n.n(u),b=["C","C++","C++11","C++14","C++17","C++20","C#","JavaScript","TypeScript","Go","Python","Java","Lua","batch","bash","tcsh","Rust","Dart","Ruby"],d=["Sqlite","SFML","OpenGL","Detours","React","Vue","koa","WPF","WinForms","ASP.NET","antd","Element Plus","Vuetify","TypeORM","Unity","Docker","AWS","WMI","WinAPI","NSFWjs"],p=["Motion Capture","Hooking","DLL Injection","Web","Windows Application","Game","Socket","Machine Learning","Minimax"],m={name:"lhs-row-item",props:{image:{type:String,required:!0},title:{type:String,required:!0},url:String,begin:{type:String,required:!0,validator:function(e){return j()(e).isValid()}},end:{type:String,required:!0,validator:function(e){return j()(e).isValid()}},tags:{type:Array,validator:function(e){return e.every((function(e){return b.includes(e)||d.includes(e)||p.includes(e)}))}}},data:function(){return{color:["","success","info","warning","danger"]}},computed:{period:function(){return this.begin?"".concat(this.begin," ~ ").concat(this.end):""}}},g=(n("7476"),n("6b0d")),f=n.n(g);const h=f()(m,[["render",l],["__scopeId","data-v-fca1db2e"]]);var O=h,v={name:"lhs-list",components:{RowItem:O},props:{list:Array}};n("f7e1");const w=f()(v,[["render",i],["__scopeId","data-v-c718d7e0"]]);var k=w,C={name:"activity",components:{List:k},props:{language:String},computed:{activities:function(){return[{title:{korean:"화정고등학교 컴퓨터 동아리",english:"Hwajung High School Computer Club",japanese:"Hwajung High School Computer Club"}[this.language],image:"https://cdn.britannica.com/79/191679-050-C7114D2B/Adult-capybara.jpg",url:"https://hwajung.hs.kr/",begin:"2015. 03.",end:"2016. 12."},{title:{korean:"광운대학교 중앙 컴퓨터 동아리 COM's",english:"Kwangwoon University Computer Club COM's",japanese:"Kwangwoon University Computer Club COM's"}[this.language],image:"https://chico.ca.us/sites/main/files/imagecache/lightbox/main-images/dog_license.jpg",url:"https://coms.kw.ac.kr",begin:"2017. 03.",end:"2024. 02."},{title:{korean:"광운대학교 중앙 만화 동아리 CIA",english:"Kwangwoon University Cartoon Club CIA",japanese:"Kwangwoon University Cartoon Club CIA"}[this.language],image:"https://natashaskitchen.com/wp-content/uploads/2020/05/Vanilla-Cupcakes-3.jpg",url:"https://cartoonisart.duckdns.org",begin:"2017. 03.",end:"2024. 02."},{title:{korean:"광운대학교 겨울방학 튜터링",english:"Kwangwoon University Winter Vacation Tutoring",japanese:"Kwangwoon University Winter Vacation Tutoring"}[this.language],image:"https://www.nintendo.com//content/dam/noa/en_US/games/switch/s/splatoon-2-switch/splatoon-2-switch-hero.jpg",url:"",begin:"2017. 12.",end:"2017. 12."},{title:{korean:"자료구조 튜터링",english:"Kwangwoon University Data Structure Tutoring",japanese:"Kwangwoon University Data Structure Tutoring"}[this.language],image:"https://www.nintendo.com//content/dam/noa/en_US/games/switch/s/splatoon-2-switch/splatoon-2-switch-hero.jpg",url:"",begin:"2018. 09.",end:"2018. 12."}]}}};const y=f()(C,[["render",r]]);var S=y;function _(e,t,n,c,o,r){var i=Object(a["resolveComponent"])("el-timeline-item"),s=Object(a["resolveComponent"])("el-timeline"),l=Object(a["resolveComponent"])("el-card");return Object(a["openBlock"])(),Object(a["createBlock"])(l,{shadow:"never"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(s,null,{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(r.awards,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(i,{key:t,timestamp:e.timestamp},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("p",null,Object(a["toDisplayString"])(e.title),1)]})),_:2},1032,["timestamp"])})),128))]})),_:1})]})),_:1})}var x={name:"awards",props:{language:String},computed:{awards:function(){return[{title:{korean:"광운대X국민대 SW 경진대회",english:"Kwangwoon Univ. X Kookmin Univ. SW Compatition",japanese:"Kwangwoon Univ. X Kookmin Univ. SW Compatition"}[this.language],timestamp:"2017. 06."},{title:{korean:"광운대학교 공학설계입문 장려상",english:"Kwangwoon Univ. 공학설계입문 장려상",japanese:"Kwangwoon Univ. 공학설계입문 장려상"}[this.language],timestamp:"2017. 06."},{title:{korean:"광운대학교 IoT 스마트소프트웨어(SW) 경진대회",english:"Kwangwoon Univ. IoT Smart Software Compatition",japanese:"Kwangwoon Univ. IoT Smart Software Compatition"}[this.language],timestamp:"2017. 12."},{title:{korean:"2021 한국컴퓨터종합학술대회(KCC2021) 학부생/주니어 논문경진대회 우수상",english:"2021 KCC2021 undergraduate/junior paper compatition 우수상",japanese:"2021 KCC2021 undergraduate/junior paper compatition 우수상"}[this.language],timestamp:"2021. 07."}]}}};const B=f()(x,[["render",_]]);var N=B;function V(e,t,n,c,o,r){var i=Object(a["resolveComponent"])("el-timeline-item"),s=Object(a["resolveComponent"])("el-timeline"),l=Object(a["resolveComponent"])("el-card");return Object(a["openBlock"])(),Object(a["createBlock"])(l,{shadow:"never"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(s,null,{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(r.career,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(i,{key:t,timestamp:e.timestamp},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("p",null,Object(a["toDisplayString"])(e.title),1)]})),_:2},1032,["timestamp"])})),128))]})),_:1})]})),_:1})}var I={name:"career",props:{language:String},computed:{career:function(){return[{title:{korean:"f1 security (KISA 프로젝트 용역)",english:"f1 security (KISA Project)",japanese:"f1 security (KISAプロジェクト参加)"}[this.language],timestamp:"2019. 06. ~ 2019. 12."},{title:{korean:"해군 정보보호병",english:"ROK Navy Information Security",japanese:"海軍 情報セキュリティ兵"}[this.language],timestamp:"2021. 10. ~ 2023. 06."},{title:{korean:"광운대학교 컴퓨터정보공학부 (4.19/4.5, GPA 3.72)",english:"Kwangwoon University Computer Information Engineering (4.19/4.5, GPA 3.72)",japanese:"Kwangwoon University Computer Information Engineering (4.19/4.5, GPA 3.72)"}[this.language],timestamp:"2017. 03. ~ 2024. 02."}]}}};const K=f()(I,[["render",V]]);var T=K;function A(e,t,n,c,o,r){var i=Object(a["resolveComponent"])("el-timeline-item"),s=Object(a["resolveComponent"])("el-timeline"),l=Object(a["resolveComponent"])("el-card");return Object(a["openBlock"])(),Object(a["createBlock"])(l,{shadow:"never"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(s,null,{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(r.certificates,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(i,{key:t,timestamp:e.timestamp},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("p",null,Object(a["toDisplayString"])(e.title),1)]})),_:2},1032,["timestamp"])})),128))]})),_:1})]})),_:1})}var L={name:"certificate",props:{language:String},computed:{certificates:function(){return[{title:{korean:"TOPCIT 수준 3 (503/1000)",english:"TOPCIT Level 3 (503/1000)",japanese:"TOPCIT レベル 3 (503/1000)"},timestamp:"2020. 10."},{title:"JLPT N1 (159/180)",timestamp:"2021. 09."}]}}};const D=f()(L,[["render",A]]);var U=D;function z(e,t,n,c,o,r){var i=Object(a["resolveComponent"])("Grid"),s=Object(a["resolveComponent"])("el-card");return Object(a["openBlock"])(),Object(a["createBlock"])(s,{shadow:"never"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(i,{list:r.hobbies},null,8,["list"])]})),_:1})}function E(e,t,n,c,o,r){var i=Object(a["resolveComponent"])("RowItem"),s=Object(a["resolveComponent"])("el-col"),l=Object(a["resolveComponent"])("el-row");return Object(a["openBlock"])(),Object(a["createBlock"])(l,{justify:"center",gutter:20},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(n.list,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(s,{span:8,key:t},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(i,{image:e.image,title:e.title,url:e.url,begin:e.begin,end:e.end,tags:e.tags},null,8,["image","title","url","begin","end","tags"])]})),_:2},1024)})),128))]})),_:1})}var M={name:"lhs-grid",components:{RowItem:O},props:{list:Array}};n("11ed");const P=f()(M,[["render",E],["__scopeId","data-v-787dd7f6"]]);var W=P,F={name:"hobby",components:{Grid:W},props:{language:String},computed:{hobbies:function(){return[{title:{korean:"노래",english:"Music Listening & Singing",japanese:"歌"}[this.language],image:"https://cdn.britannica.com/79/191679-050-C7114D2B/Adult-capybara.jpg",url:"https://github.com/droplet92/reversi",tags:["Game","C++17","Sqlite","SFML"]},{title:{korean:"사진",english:"Pictures",japanese:"写真撮影"}[this.language],image:"https://chico.ca.us/sites/main/files/imagecache/lightbox/main-images/dog_license.jpg",url:"https://github.com/droplet92/devichat",tags:["Socket","C"]},{title:{korean:"그림",english:"Painting",japanese:"絵描き"}[this.language],image:"https://natashaskitchen.com/wp-content/uploads/2020/05/Vanilla-Cupcakes-3.jpg",url:"https://github.com/CartoonIsArt",tags:["Web","React","JavaScript","TypeScript","TypeORM","AWS","Docker","koa","antd","NSFWjs"]},{title:{korean:"패션",english:"fashion",japanese:"ファッション"}[this.language],image:"https://www.nintendo.com//content/dam/noa/en_US/games/switch/s/splatoon-2-switch/splatoon-2-switch-hero.jpg",url:"https://bitbucket.org",tags:["Game","Unity","C#"]}]}}};const G=f()(F,[["render",z]]);var R=G;n("b0c0");function q(e,t,n,c,o,r){var i=Object(a["resolveComponent"])("ColumnItem"),s=Object(a["resolveComponent"])("el-card");return Object(a["openBlock"])(),Object(a["createBlock"])(s,{shadow:"never"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(i,{image:"https://avatars.githubusercontent.com/u/31408641?v=4",name:e.name[n.language],description:e.greeting[n.language]},null,8,["name","description"])]})),_:1})}n("a4d3"),n("e01a");var H={class:"noselect"};function J(e,t,n,c,o,r){var i=Object(a["resolveComponent"])("el-image"),s=Object(a["resolveComponent"])("el-row"),l=Object(a["resolveComponent"])("el-col"),u=Object(a["resolveComponent"])("el-card");return Object(a["openBlock"])(),Object(a["createBlock"])(u,{class:"item-card",shadow:"always"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(s,{justify:"center"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(l,{span:12},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(s,{justify:"center"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(i,{class:"noselect item-image",src:n.image,fit:"cover",lazy:""},null,8,["src"])]})),_:1}),Object(a["createVNode"])(s,{justify:"center"},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("h1",H,Object(a["toDisplayString"])(n.name),1)]})),_:1}),Object(a["createVNode"])(s,{justify:"center"},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(n.description),1)]})),_:1})]})),_:1})]})),_:1})]})),_:1})}var X={name:"lhs-column-item",props:{image:{type:String,required:!0},name:{type:String,required:!0},description:{type:String,required:!0}}};n("d711");const Q=f()(X,[["render",J],["__scopeId","data-v-69d38908"]]);var Y=Q,Z={name:"introduction",components:{ColumnItem:Y},props:{language:String},data:function(){return{name:{korean:"이한수",english:"이한수 (Hansu Lee)",japanese:"이한수 (イ・ハンス)"},greeting:{korean:"안녕하세요!",english:"Hello!",japanese:"こんにちは!"}}}};const $=f()(Z,[["render",q]]);var ee=$;function te(e,t,n,c,o,r){var i=Object(a["resolveComponent"])("el-link"),s=Object(a["resolveComponent"])("el-timeline-item"),l=Object(a["resolveComponent"])("el-timeline"),u=Object(a["resolveComponent"])("el-card");return Object(a["openBlock"])(),Object(a["createBlock"])(u,{shadow:"never"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(l,null,{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(r.papers,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(s,{key:t,timestamp:e.timestamp},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(i,{href:e.url,type:"primary"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.cite),1)]})),_:2},1032,["href"])]})),_:2},1032,["timestamp"])})),128))]})),_:1})]})),_:1})}var ne={name:"paper",props:{language:String},computed:{papers:function(){return[{cite:{korean:"이한수, 김동주, 이혁준, 황동혁.(2021).랜섬웨어 대응 및 데이터 유출 보호를 위한 파일 접근 로그 기반 파일 접근 제어 시스템.한국정보과학회 학술발표논문집,(),2054-2056.",english:"이한수, 김동주, 이혁준, 황동혁.(2021).랜섬웨어 대응 및 데이터 유출 보호를 위한 파일 접근 로그 기반 파일 접근 제어 시스템.한국정보과학회 학술발표논문집,(),2054-2056.",japanese:"이한수, 김동주, 이혁준, 황동혁.(2021).랜섬웨어 대응 및 데이터 유출 보호를 위한 파일 접근 로그 기반 파일 접근 제어 시스템.한국정보과학회 학술발표논문집,(),2054-2056."}[this.language],timestamp:"2021. 06.",url:"https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE10583527"},{cite:{korean:"한국HCI학회",english:"한국HCI학회",japanese:"한국HCI학회"}[this.language],timestamp:"2022. 02.",url:"http://hcikorea.org/"}]}}};const ae=f()(ne,[["render",te]]);var ce=ae;function oe(e,t,n,c,o,r){var i=Object(a["resolveComponent"])("List"),s=Object(a["resolveComponent"])("el-card");return Object(a["openBlock"])(),Object(a["createBlock"])(s,{shadow:"never"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(i,{list:r.programs},null,8,["list"])]})),_:1})}var re={name:"program",components:{List:k},props:{language:String},computed:{programs:function(){return[{title:"reversi",image:"https://cdn.britannica.com/79/191679-050-C7114D2B/Adult-capybara.jpg",url:"https://github.com/droplet92/reversi",begin:"2019. 07.",end:"2019. 11.",tags:["Game","C++17","Sqlite","SFML"]},{title:"devichat",image:"https://chico.ca.us/sites/main/files/imagecache/lightbox/main-images/dog_license.jpg",url:"https://github.com/droplet92/devichat",begin:"2020. 10.",end:"2020. 10.",tags:["Socket","C"]},{title:{korean:"CIA 동아리 게시판",english:"CIA Club Homepage",japanese:"CIA 同好会 ホームページ"}[this.language],image:"https://natashaskitchen.com/wp-content/uploads/2020/05/Vanilla-Cupcakes-3.jpg",url:"https://github.com/CartoonIsArt",begin:"2017. 09.",end:"2021. 10.",tags:["Web","React","JavaScript","TypeScript","TypeORM","AWS","Docker","koa","antd","NSFWjs"]},{title:{korean:"KKLIM 게임 개발팀",english:"KKLIM Game Dev Team",japanese:"KKLIMゲーム開発チーム"}[this.language],image:"https://www.nintendo.com//content/dam/noa/en_US/games/switch/s/splatoon-2-switch/splatoon-2-switch-hero.jpg",url:"https://bitbucket.org",begin:"2021",end:"2023",tags:["Game","Unity","C#"]}]}}};const ie=f()(re,[["render",oe]]);var se=ie,le=Object(a["createElementVNode"])("p",null," 감사합니다. ",-1);function ue(e,t,n,c,o,r){var i=Object(a["resolveComponent"])("el-card");return Object(a["openBlock"])(),Object(a["createBlock"])(i,{shadow:"never"},{default:Object(a["withCtx"])((function(){return[le]})),_:1})}var je={name:"thankyou"};const be=f()(je,[["render",ue]]);var de=be,pe=Object(a["createTextVNode"])("한국어"),me=Object(a["createTextVNode"])("English"),ge=Object(a["createTextVNode"])("日本語");function fe(e){return function(e,t){var n=Object(a["resolveComponent"])("el-col"),c=Object(a["resolveComponent"])("el-button"),r=Object(a["resolveComponent"])("el-dropdown-item"),i=Object(a["resolveComponent"])("el-dropdown-menu"),s=Object(a["resolveComponent"])("el-dropdown"),l=Object(a["resolveComponent"])("el-affix"),u=Object(a["resolveComponent"])("el-row");return Object(a["openBlock"])(),Object(a["createBlock"])(u,{justify:"center"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(n,{span:12},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.components,(function(t,n){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{key:n},[(Object(a["openBlock"])(),Object(a["createBlock"])(Object(a["resolveDynamicComponent"])(t),{language:e.language},null,8,["language"]))])})),128))]})),_:1}),Object(a["createVNode"])(l,{offset:60},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(s,{onCommand:e.change_dictionary},{dropdown:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(i,null,{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(r,{command:"korean"},{default:Object(a["withCtx"])((function(){return[pe]})),_:1}),Object(a["createVNode"])(r,{command:"english"},{default:Object(a["withCtx"])((function(){return[me]})),_:1}),Object(a["createVNode"])(r,{command:"japanese"},{default:Object(a["withCtx"])((function(){return[ge]})),_:1})]})),_:1})]})),default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(c,{class:"app-btn",color:"#383C6D",icon:Object(a["unref"])(o["a"]),circle:""},null,8,["icon"])]})),_:1},8,["onCommand"])]})),_:1})]})),_:1})}}var he={korean:"korean",english:"english",japanese:"japanese"},Oe={name:"App",data:function(){return{components:[ee,se,R,S,ce,T,N,U,de],language:he.korean}},methods:{change_dictionary:function(e){this.language=he[e]}}},ve=Object.assign(Oe,{setup:fe});n("2478"),n("7d9d");const we=f()(ve,[["__scopeId","data-v-48201547"]]);var ke=we,Ce=Object(a["createApp"])(ke);Ce.use(c["a"]),Ce.mount("#app")},7476:function(e,t,n){"use strict";n("2df9")},"7d9d":function(e,t,n){"use strict";n("acbb")},acbb:function(e,t,n){},c917:function(e,t,n){},d711:function(e,t,n){"use strict";n("c917")},f7e1:function(e,t,n){"use strict";n("3ce6")}});
//# sourceMappingURL=app.a63d9016.js.map