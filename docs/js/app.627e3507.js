(function(){"use strict";var e={4295:function(e,t,a){var n=a(9963),i=a(6462),r=a(3862),l=(a(4415),a(6252)),o=a(2262),s=a(7538),u=a(3577);function p(e,t,a,n,i,r){const o=(0,l.up)("el-row"),s=(0,l.up)("List"),p=(0,l.up)("el-card");return(0,l.wg)(),(0,l.j4)(p,{shadow:"never"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l._)("h1",null,(0,u.zw)(e.title[a.language]),1)])),_:1}),(0,l.Wm)(o,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s,{list:r.programs},null,8,["list"])])),_:1})])),_:1})}function g(e,t,a,n,i,r){const o=(0,l.up)("RowItem"),s=(0,l.up)("el-col"),u=(0,l.up)("el-row");return(0,l.wg)(),(0,l.j4)(u,null,{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.list,((e,t)=>((0,l.wg)(),(0,l.j4)(s,{key:t},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{image:e.image,title:e.title,url:e.url,begin:e.begin,end:e.end,tags:e.tags},null,8,["image","title","url","begin","end","tags"])])),_:2},1024)))),128))])),_:1})}const m={class:"noselect item-title"},c={key:1,class:"noselect item-title"};function d(e,t,a,n,i,r){const o=(0,l.up)("el-image"),s=(0,l.up)("el-row"),p=(0,l.up)("el-link"),g=(0,l.up)("el-tag"),d=(0,l.up)("el-space"),w=(0,l.up)("el-card");return(0,l.wg)(),(0,l.j4)(w,{class:"item-card",shadow:"always"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Wm)(o,{class:"noselect item-image",src:a.image,fit:"cover"},null,8,["src"])])),_:1}),(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[a.url?((0,l.wg)(),(0,l.j4)(p,{key:0,href:a.url,type:"primary"},{default:(0,l.w5)((()=>[(0,l._)("h1",m,(0,u.zw)(a.title),1)])),_:1},8,["href"])):((0,l.wg)(),(0,l.iD)("h1",c,(0,u.zw)(a.title),1))])),_:1}),(0,l.Wm)(s,{class:"item-period"},{default:(0,l.w5)((()=>[(0,l._)("span",null,(0,u.zw)(r.period),1)])),_:1}),(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,{wrap:""},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.tags,((t,a)=>((0,l.wg)(),(0,l.j4)(g,{class:"noselect",key:a,type:e.color[a%5]},{default:(0,l.w5)((()=>[(0,l._)("span",null,(0,u.zw)(t),1)])),_:2},1032,["type"])))),128))])),_:1})])),_:1})])),_:1})}const w=["C","C++","C++11","C++14","C++17","C++20","C#","JavaScript","TypeScript","Go","Python","Java","Lua","batch","bash","tcsh","Rust","Dart","Ruby"],f=["Sqlite","SFML","OpenGL","Detours","React","Vue","koa","WPF","WinForms","ASP.NET","antd","Element Plus","Vuetify","TypeORM","Unity","Docker","AWS","WMI","WinAPI","NSFWjs","FreeBSD","MPU6050"],h=["Motion Capture","Hooking","DLL Injection","Web","Windows Application","Game","Socket","Machine Learning","Minimax","HCI","VR"];var b={name:"lhs-row-item",props:{image:{type:String,required:!0},title:{type:String,required:!0},url:String,begin:{type:String,validator(e){return!isNaN(Date.parse(e))}},end:{type:String,validator(e){return!isNaN(Date.parse(e))}},tags:{type:Array,validator(e){return e.every((e=>w.includes(e)||f.includes(e)||h.includes(e)))}}},data:()=>({color:["","success","info","warning","danger"]}),computed:{period(){return this.begin?`${this.begin} ~ ${this.end}`:""}}},_=a(3744);const v=(0,_.Z)(b,[["render",d],["__scopeId","data-v-46cfa1c0"]]);var j=v,y={name:"lhs-list",components:{RowItem:j},props:{list:Array}};const k=(0,_.Z)(y,[["render",g],["__scopeId","data-v-c718d7e0"]]);var W=k,C={name:"program",components:{List:W},props:{language:String},data:()=>({title:{korean:"활동",english:"Activies",japanese:"活動"}}),computed:{programs(){return[{title:{korean:"CIA 동아리 게시판",english:"Club CIA Homepage",japanese:"サークル CIA ホームページ"}[this.language],image:"https://github.com/droplet92/droplet92.github.io/blob/master/public/images/cia.gif?raw=true",url:"https://github.com/CartoonIsArt",begin:"2017. 09.",end:"2021. 10.",tags:["Web","React","JavaScript","TypeScript","TypeORM","AWS","Docker","koa","antd","NSFWjs"]},{title:{korean:"HCI KOREA 2022 학술대회",english:"HCI KOREA 2022 Conference",japanese:"HCI KOREA 2022 学術大会"}[this.language],image:"https://img.youtube.com/vi/BwWbenk8UsU/maxresdefault.jpg",url:"https://www.youtube.com/watch?v=BwWbenk8UsU",begin:"2021. 03.",end:"2022. 02.",tags:["HCI","VR","Unity","C#"]},{title:{korean:"COM's 동아리 회지 - MPU6050을 이용한 모션 캡처",english:"Club COM's Article - Motion Capture Using MPU6050",japanese:"サークル COM's 会誌 - MPU6050を使ったモーションキャプチャー"}[this.language],image:"https://img.youtube.com/vi/86nRW5NOb_c/maxresdefault.jpg",url:"https://github.com/droplet92/mpu6050_mocap",begin:"2020. 07.",end:"2020. 09.",tags:["Motion Capture","OpenGL","C++17","MPU6050"]},{title:"reversi",image:"https://github.com/droplet92/droplet92.github.io/blob/master/public/images/reversi.gif?raw=true",url:"https://github.com/droplet92/reversi",begin:"2019. 07.",end:"2019. 11.",tags:["Game","C++17","SFML","Minimax"]},{title:"devichat",image:"https://github.com/droplet92/devichat/blob/master/2020-07-15-20-50-47.png?raw=true",url:"https://github.com/droplet92/devichat",begin:"2020. 10.",end:"2020. 10.",tags:["Socket","C","FreeBSD"]}]}}};const S=(0,_.Z)(C,[["render",p]]);var I=S;function U(e,t,a,n,i,r){const o=(0,l.up)("el-row"),s=(0,l.up)("el-timeline-item"),p=(0,l.up)("el-timeline"),g=(0,l.up)("el-card");return(0,l.wg)(),(0,l.j4)(g,{shadow:"never"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l._)("h1",null,(0,u.zw)(e.title[a.language]),1)])),_:1}),(0,l.Wm)(o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{class:"timeline"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.awards,((e,t)=>((0,l.wg)(),(0,l.j4)(s,{key:t,timestamp:e.timestamp},{default:(0,l.w5)((()=>[(0,l._)("p",null,(0,u.zw)(e.title),1)])),_:2},1032,["timestamp"])))),128))])),_:1})])),_:1})])),_:1})}var O={name:"awards",props:{language:String},data:()=>({title:{korean:"수상이력",english:"Awards",japanese:"受賞歴"}}),computed:{awards(){return[{title:{korean:"광운대 X 국민대 SW Challenge 3등",english:"Kwangwoon Univ. X Kookmin Univ. SW Challenge 3rd.",japanese:"Kwangwoon Univ. X Kookmin Univ. SWチャレンジ 3rd."}[this.language],timestamp:"2017. 06."},{title:{korean:"광운대학교 공학설계입문 장려상",english:"Kwangwoon Univ. Engineering Design Competition participation prize",japanese:"Kwangwoon Univ. 工学設計入門大会 奬勵賞"}[this.language],timestamp:"2017. 06."},{title:{korean:"광운대학교 2017 IoT 스마트소프트웨어(SW) 경진대회 우수상",english:"Kwangwoon Univ. 2017 IoT Smart Software Competition excellence award",japanese:"Kwangwoon Univ. 2017 IoT スマートソフトウェアコンペティション優秀賞"}[this.language],timestamp:"2017. 11."},{title:{korean:"2021 한국컴퓨터종합학술대회(KCC2021) 학부생/주니어 논문경진대회 우수상",english:"2021 KCC2021 Undergraduate/Junior Paper Competition excellence award",japanese:"2021 KCC2021 学部生/ジュニア 論文コンペティション優秀賞"}[this.language],timestamp:"2021. 07."}]}}};const D=(0,_.Z)(O,[["render",U]]);var K=D;function H(e,t,a,n,i,r){const o=(0,l.up)("el-row"),s=(0,l.up)("el-timeline-item"),p=(0,l.up)("el-timeline"),g=(0,l.up)("el-card");return(0,l.wg)(),(0,l.j4)(g,{shadow:"never"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l._)("h1",null,(0,u.zw)(e.title[a.language]),1)])),_:1}),(0,l.Wm)(o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{class:"timeline"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.career,((e,t)=>((0,l.wg)(),(0,l.j4)(s,{key:t,timestamp:e.timestamp},{default:(0,l.w5)((()=>[(0,l._)("p",null,(0,u.zw)(e.title),1)])),_:2},1032,["timestamp"])))),128))])),_:1})])),_:1})])),_:1})}var A={name:"career",props:{language:String},data:()=>({title:{korean:"경력",english:"Career",japanese:"履歴"}}),computed:{career(){return[{title:{korean:"광운대학교 컴퓨터정보공학부 (4.19/4.5)",english:"Kwangwoon University School of Computer and Information Engineering (4.19/4.5)",japanese:"Kwangwoon University School of Computer and Information Engineering (4.19/4.5)"}[this.language],timestamp:"2017. 03. ~ 2024. 02."},{title:{korean:"f1 security (한국인터넷진흥원 프로젝트 용역)",english:"f1 security (KISA Project)",japanese:"f1 security (KISAプロジェクト参加)"}[this.language],timestamp:"2019. 06. ~ 2019. 12."},{title:{korean:"해군 정보보호병",english:"ROK Navy CERT",japanese:"大韓民国海軍サイバーセキュリティ兵"}[this.language],timestamp:"2021. 10. ~ 2023. 06."}]}}};const P=(0,_.Z)(A,[["render",H]]);var L=P;function z(e,t,a,n,i,r){const o=(0,l.up)("el-row"),s=(0,l.up)("el-timeline-item"),p=(0,l.up)("el-timeline"),g=(0,l.up)("el-card");return(0,l.wg)(),(0,l.j4)(g,{shadow:"never"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l._)("h1",null,(0,u.zw)(e.title[a.language]),1)])),_:1}),(0,l.Wm)(o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{class:"timeline"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.certificates,((e,t)=>((0,l.wg)(),(0,l.j4)(s,{key:t,timestamp:e.timestamp},{default:(0,l.w5)((()=>[(0,l._)("p",null,(0,u.zw)(e.title),1)])),_:2},1032,["timestamp"])))),128))])),_:1})])),_:1})])),_:1})}var M={name:"certificate",props:{language:String},data:()=>({title:{korean:"자격증",english:"Certificates",japanese:"資格"}}),computed:{certificates(){return[{title:{korean:"TOPCIT 수준 3 (503/1000)",english:"TOPCIT Level 3 (503/1000)",japanese:"TOPCIT レベル 3 (503/1000)"}[this.language],timestamp:"2020. 10."},{title:"JLPT N1 (159/180)",timestamp:"2021. 09."},{title:{korean:"정보처리기사",english:"Engineer Information Processing",japanese:"応用情報技術者試験"}[this.language],timestamp:"2022. 06."},{title:{korean:"리눅스마스터 2급",english:"Linux master Level 2",japanese:"Linux master レベル 2"}[this.language],timestamp:"2022. 09."}]}}};const R=(0,_.Z)(M,[["render",z]]);var T=R;const x=e=>((0,l.dD)("data-v-12833be4"),e=e(),(0,l.Cn)(),e),E=x((()=>(0,l._)("img",{class:"item-icon",width:"16",height:"16",alt:"Instagram",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Instagram.svg/512px-Instagram.svg.png"},null,-1)));function F(e,t,a,n,i,r){const o=(0,l.up)("el-row"),s=(0,l.up)("Message"),p=(0,l.up)("el-icon"),g=(0,l.up)("el-link"),m=(0,l.up)("el-card");return(0,l.wg)(),(0,l.j4)(m,{shadow:"never"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l._)("h1",null,(0,u.zw)(e.title[a.language]),1)])),_:1}),(0,l.Wm)(o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{shadow:"never",style:{width:"190px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{justify:"start"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{class:"item-icon"},{default:(0,l.w5)((()=>[(0,l.Wm)(s)])),_:1}),(0,l.Wm)(g,{href:"mailto:lhs1438@gmail.com",type:"primary",underline:!1},{default:(0,l.w5)((()=>[(0,l.Uk)((0,u.zw)(e.email),1)])),_:1})])),_:1}),(0,l.Wm)(o,{justify:"start"},{default:(0,l.w5)((()=>[E,(0,l.Wm)(g,{href:e.instagram_url,type:"primary",underline:!1},{default:(0,l.w5)((()=>[(0,l.Uk)((0,u.zw)(e.instagram),1)])),_:1},8,["href"])])),_:1})])),_:1})])),_:1})])),_:1})}var Z={name:"contacts",props:{language:String},data:()=>({title:{korean:"연락처",english:"Contacts",japanese:"連絡先"},email:"lhs1438@gmail.com",instagram:"@hansu.m3u8",instagram_url:"https://www.instagram.com/hansu.m3u8"})};const N=(0,_.Z)(Z,[["render",F],["__scopeId","data-v-12833be4"]]);var X=N;function G(e,t,a,n,i,r){const o=(0,l.up)("el-row"),s=(0,l.up)("Grid"),p=(0,l.up)("el-card");return(0,l.wg)(),(0,l.j4)(p,{shadow:"never"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l._)("h1",null,(0,u.zw)(e.title[a.language]),1)])),_:1}),(0,l.Wm)(o,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s,{list:r.hobbies},null,8,["list"])])),_:1})])),_:1})}function Y(e,t,a,n,i,r){const o=(0,l.up)("RowItem"),s=(0,l.up)("el-col"),u=(0,l.up)("el-row");return(0,l.wg)(),(0,l.j4)(u,{justify:"center",gutter:20},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.list,((e,t)=>((0,l.wg)(),(0,l.j4)(s,{xs:24,sm:12,lg:8,key:t},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{image:e.image,title:e.title,url:e.url,begin:e.begin,end:e.end},null,8,["image","title","url","begin","end"])])),_:2},1024)))),128))])),_:1})}var B={name:"lhs-grid",components:{RowItem:j},props:{list:Array}};const q=(0,_.Z)(B,[["render",Y],["__scopeId","data-v-4557e4e4"]]);var J=q,V={name:"hobby",components:{Grid:J},props:{language:String},data:()=>({title:{korean:"취미",english:"Hobbies",japanese:"趣味"}}),computed:{hobbies(){return[{title:{korean:"라이브/콘서트",english:"Music Live/Concert",japanese:"ライブ・コンサート参加"}[this.language],image:"https://github.com/droplet92/droplet92.github.io/blob/master/public/images/gukkasten.jpg?raw=true"},{title:{korean:"게임",english:"Video game",japanese:"ビデオゲーム"}[this.language],image:"https://github.com/droplet92/droplet92.github.io/blob/master/public/images/game.jpg?raw=true"},{title:{korean:"여행",english:"Trip",japanese:"旅行"}[this.language],image:"https://github.com/droplet92/droplet92.github.io/blob/master/public/images/trip1812.jpg?raw=true"},{title:{korean:"보드게임",english:"Board game",japanese:"ボードゲーム"}[this.language],image:"https://github.com/droplet92/droplet92.github.io/blob/master/public/images/boardgame.jpg?raw=true"}]}}};const $=(0,_.Z)(V,[["render",G]]);var Q=$;function ee(e,t,a,n,i,r){const o=(0,l.up)("ColumnItem"),s=(0,l.up)("el-card");return(0,l.wg)(),(0,l.j4)(s,{shadow:"never"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{image:"https://avatars.githubusercontent.com/u/31408641?v=4",name:e.name[a.language],description:e.greeting[a.language]},null,8,["name","description"])])),_:1})}const te={class:"noselect"};function ae(e,t,a,n,i,r){const o=(0,l.up)("el-image"),s=(0,l.up)("el-row"),p=(0,l.up)("el-col"),g=(0,l.up)("el-card");return(0,l.wg)(),(0,l.j4)(g,{class:"item-card",shadow:"always"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{xs:18,md:12},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{class:"noselect item-image",src:a.image,fit:"cover",lazy:""},null,8,["src"])])),_:1}),(0,l.Wm)(s,{justify:"center"},{default:(0,l.w5)((()=>[(0,l._)("h1",te,(0,u.zw)(a.name),1)])),_:1}),(0,l.Wm)(s,{justify:"center"},{default:(0,l.w5)((()=>[(0,l._)("span",null,(0,u.zw)(a.description),1)])),_:1})])),_:1})])),_:1})])),_:1})}var ne={name:"lhs-column-item",props:{image:{type:String,required:!0},name:{type:String,required:!0},description:{type:String,required:!0}}};const ie=(0,_.Z)(ne,[["render",ae],["__scopeId","data-v-d873a19c"]]);var re=ie,le={name:"introduction",components:{ColumnItem:re},props:{language:String},data:()=>({name:{korean:"이한수",english:"이한수 (Hansu Lee)",japanese:"이한수 (Lee Hansu)"},greeting:{korean:"안녕하세요!",english:"Hello!",japanese:"こんにちは!"}})};const oe=(0,_.Z)(le,[["render",ee]]);var se=oe;const ue=(0,l._)("br",null,null,-1),pe=(0,l._)("br",null,null,-1),ge=(0,l.Uk)(" 한국어(DBpia) "),me=(0,l.Uk)(" 日本語(PDF, Self-translation) ");function ce(e,t,a,n,i,r){const o=(0,l.up)("el-row"),s=(0,l.up)("Link"),p=(0,l.up)("el-icon"),g=(0,l.up)("el-link"),m=(0,l.up)("el-timeline-item"),c=(0,l.up)("el-timeline"),d=(0,l.up)("el-card");return(0,l.wg)(),(0,l.j4)(d,{shadow:"never"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l._)("h1",null,(0,u.zw)(e.title[a.language]),1)])),_:1}),(0,l.Wm)(o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"timeline"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.papers,((e,t)=>((0,l.wg)(),(0,l.j4)(m,{key:t,timestamp:e.timestamp},{default:(0,l.w5)((()=>[(0,l._)("p",null,[(0,l.Uk)((0,u.zw)(e.writer),1),ue,(0,l.Uk)(" "+(0,u.zw)(e.title),1),pe,(0,l.Uk)(" "+(0,u.zw)(e.journal),1)]),(0,l._)("div",null,[(0,l.Wm)(p,{color:"#409EFC"},{default:(0,l.w5)((()=>[(0,l.Wm)(s)])),_:1}),(0,l.Wm)(g,{href:e.url,type:"primary"},{default:(0,l.w5)((()=>[ge])),_:2},1032,["href"])]),(0,l._)("div",null,[(0,l.Wm)(p,{color:"#409EFC"},{default:(0,l.w5)((()=>[(0,l.Wm)(s)])),_:1}),(0,l.Wm)(g,{disabled:void 0===e.japanese,href:e.japanese,type:"primary"},{default:(0,l.w5)((()=>[me])),_:2},1032,["disabled","href"])])])),_:2},1032,["timestamp"])))),128))])),_:1})])),_:1})])),_:1})}var de={name:"paper",props:{language:String},data:()=>({title:{korean:"논문",english:"Papers",japanese:"論文"}}),computed:{papers(){return[{writer:"이한수, 김동주, 이혁준, 황동혁",title:{korean:"랜섬웨어 대응 및 데이터 유출 보호를 위한 파일 접근 로그 기반 파일 접근 제어 시스템",english:"A File Access Control System Based on File Access Logs for Ransomware Response and Data Loss Prevention System",japanese:"ランサムウェア対策及び情報漏洩防止のためにファイルアクセスログに基づくファイルアクセス制御システム"}[this.language],journal:"한국정보과학회 2021 학술발표논문집 2054-2056",timestamp:"2021. 06.",url:"https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE10583527",japanese:"https://github.com/droplet92/droplet92.github.io/blob/master/public/ransomware.pdf"},{writer:"김명지, 김효리, 박유림, 이영현, 이한수, 정범영, 송원철, 정동훈",title:{korean:"1인칭 메타버스 게임의 HUD UI와 공간 UI가 사용자 경험에 미치는 효과",english:"How HUD UI and Spatial UI Affect User Experience in First-Person Metaverse Game",japanese:"1人称視点メタバースゲームのHUD UIと空間UIがユーザーエクスペリエンスに及ぼす効果"}[this.language],journal:"PROCEEDINGS OF HCI KOREA 2022 학술대회 발표 논문집 403-409",timestamp:"2022. 02.",url:"https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11043849",japanese:"https://github.com/droplet92/droplet92.github.io/blob/master/public/metaverse.pdf"}]}}};const we=(0,_.Z)(de,[["render",ce]]);var fe=we;function he(e,t,a,n,i,r){const o=(0,l.up)("el-card");return(0,l.wg)(),(0,l.j4)(o,{shadow:"never"},{default:(0,l.w5)((()=>[(0,l._)("p",null,(0,u.zw)(e.message[a.language]),1)])),_:1})}var be={name:"thankyou",props:{language:String},data:()=>({message:{korean:"감사합니다",english:"Thank you",japanese:"ありがとうございます"}})};const _e=(0,_.Z)(be,[["render",he]]);var ve=_e;const je=(0,l.Uk)("한국어"),ye=(0,l.Uk)("English"),ke=(0,l.Uk)("日本語"),We={id:"main"};function Ce(e){return(e,t)=>{const a=(0,l.up)("el-button"),n=(0,l.up)("el-dropdown-item"),i=(0,l.up)("el-dropdown-menu"),r=(0,l.up)("el-dropdown"),u=(0,l.up)("el-affix"),p=(0,l.up)("el-row"),g=(0,l.up)("el-col");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(p,{justify:"end"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{class:"app-affix-wrapper",offset:32},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{onCommand:e.change_dictionary},{dropdown:(0,l.w5)((()=>[(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[(0,l.Wm)(n,{command:"korean"},{default:(0,l.w5)((()=>[je])),_:1}),(0,l.Wm)(n,{command:"english"},{default:(0,l.w5)((()=>[ye])),_:1}),(0,l.Wm)(n,{command:"japanese"},{default:(0,l.w5)((()=>[ke])),_:1})])),_:1})])),default:(0,l.w5)((()=>[(0,l.Wm)(a,{class:"app-btn",color:"#383C6D",icon:(0,o.SU)(s.Z),circle:""},null,8,["icon"])])),_:1},8,["onCommand"])])),_:1})])),_:1}),(0,l.Wm)(p,{justify:"center"},{default:(0,l.w5)((()=>[(0,l._)("div",We,[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.components,((e,t)=>((0,l.wg)(),(0,l.j4)((0,l.LL)(e),{key:t,language:(0,o.SU)(Ie)},null,8,["language"])))),128))])),_:1})])])),_:1})],64)}}const Se={korean:"korean",english:"english",japanese:"japanese"},Ie="ko-KR"===navigator.language?Se.korean:"ja"===navigator.language?Se.japanese:Se.english,Ue={name:"App",data:()=>({components:[(0,o.Xl)(se),(0,o.Xl)(I),(0,o.Xl)(Q),(0,o.Xl)(fe),(0,o.Xl)(L),(0,o.Xl)(K),(0,o.Xl)(T),(0,o.Xl)(X),(0,o.Xl)(ve)],language:Ie}),methods:{change_dictionary:function(e){this.language=Se[e]}}};var Oe=Object.assign(Ue,{setup:Ce});const De=Oe;var Ke=De;const He=(0,n.ri)(Ke);for(const[Ae,Pe]of Object.entries(r))He.component(Ae,Pe);He.use(i.Z),He.mount("#app")}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=e,function(){var e=[];a.O=function(t,n,i,r){if(!n){var l=1/0;for(p=0;p<e.length;p++){n=e[p][0],i=e[p][1],r=e[p][2];for(var o=!0,s=0;s<n.length;s++)(!1&r||l>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[s])}))?n.splice(s--,1):(o=!1,r<l&&(l=r));if(o){e.splice(p--,1);var u=i();void 0!==u&&(t=u)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[n,i,r]}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,r,l=n[0],o=n[1],s=n[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(s)var p=s(a)}for(t&&t(n);u<l.length;u++)r=l[u],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(p)},n=self["webpackChunkLHS"]=self["webpackChunkLHS"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(4295)}));n=a.O(n)})();
//# sourceMappingURL=app.627e3507.js.map