(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(e,t,n){e.exports={nav:"nav_nav__jF-7_",item:"nav_item__1EvY7"}},21:function(e,t,n){e.exports={messages:"messages_messages__3R9HB",friends:"messages_friends___kkYw",chat:"messages_chat__3DKuC"}},25:function(e,t,n){e.exports={head:"head_head__nUkF2",login:"head_login__1dcnN"}},29:function(e,t,n){e.exports={profile_head:"profile_head_profile_head__1TbLN",profilePicture:"profile_head_profilePicture__33O6L"}},30:function(e,t,n){e.exports={newPost:"newPost_newPost__1hmJs",button:"newPost_button__1_mgV"}},31:function(e,t,n){e.exports={block:"users_block__3-uRW",ava:"users_ava__1644M",disable:"users_disable__2MrTn"}},44:function(e,t,n){e.exports={profile:"profile_profile__12aYL"}},45:function(e,t,n){e.exports={profile_nav:"profile_nav_profile_nav__3-kJe"}},46:function(e,t,n){e.exports={posts:"posts_posts__1NqYB"}},47:function(e,t,n){e.exports={friend:"friend_friend__1b4I3",text:"friend_text__2ZENo"}},48:function(e,t,n){e.exports={item:"friender_item__1a0ny"}},50:function(e,t,n){e.exports=n.p+"static/media/200.1d52ecc1.gif"},52:function(e,t,n){e.exports=n(85)},57:function(e,t,n){},58:function(e,t,n){},81:function(e,t){},84:function(e,t){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(22),c=n.n(o),s=(n(57),n(58),n(14)),u=n(15),l=n(17),i=n(16),f=n(25),m=n.n(f),p=n(4),d=function(e){return r.a.createElement("div",{className:m.a.head},r.a.createElement("p",null,"Head"),r.a.createElement("div",{className:m.a.login},e.userData.log?e.userData.login:r.a.createElement(p.b,{to:"/login"},"login")))},h=n(9),b=n(13),E=n(1),g=b.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"dfa7ba6d-ffa7-442f-a308-54584e93775b"}}),v={id:null,email:null,login:null,log:!1},_=function(e){return{type:"ADD_DATA",data:e}},O=function(){return{type:"LOG"}},j=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.logInThunk()}},{key:"render",value:function(){return r.a.createElement(d,this.props)}}]),n}(r.a.Component),w=Object(h.b)((function(e){return{userData:e.userData}}),{addData:_,log:O,logInThunk:function(){return function(e){g.get("auth/me").then((function(e){return e.data})).then((function(t){e(_(t.data)),0===t.resultCode&&e({type:"LOG"})}))}}})(j),D=n(19),k=n.n(D),y=function(){return r.a.createElement("div",{className:k.a.nav},r.a.createElement(p.b,{to:"/profile"},r.a.createElement("div",{className:k.a.item},"Profile")),r.a.createElement("div",{className:k.a.item},"Feeds"),r.a.createElement(p.b,{to:"/messages"},r.a.createElement("div",{className:k.a.item},"Messages")),r.a.createElement(p.b,{to:"/users"},r.a.createElement("div",{className:k.a.item},"Find Users")))},T=n(44),N=n.n(T),P=n(29),A=n.n(P),I=function(e){return e.profileInfo?r.a.createElement("div",{className:A.a.profile_head},r.a.createElement("div",{className:A.a.profilePicture},r.a.createElement("img",{src:e.profileInfo.photos.large}))):r.a.createElement("div",null)},S=n(45),x=n.n(S),L=function(){return r.a.createElement("div",{className:x.a.profile_nav})},C=n(30),U=n.n(C),V=n(46),F=n.n(V),M=function(e){return r.a.createElement("div",{className:F.a.posts},e.post,r.a.createElement("p",null," Likes: ",e.like," "))},G=function(e){var t=e.profile.posts.map((function(e){return r.a.createElement(M,{post:e.post,like:e.like})}));return r.a.createElement("div",{className:U.a.newPost},r.a.createElement("div",null,r.a.createElement("input",{value:e.profile.textValue,onChange:function(t){var n=t.target.value;e.textValue(n)}}),r.a.createElement("div",{className:U.a.button},r.a.createElement("button",{onClick:function(){e.addPost()}},"Post"))),r.a.createElement("div",null,t))},R=Object(h.b)((function(e){return{profile:e.profile}}),(function(e){return{addPost:function(){e({type:"ADD_POST"})},textValue:function(t){e({type:"TEXT_VALUES",text:t})}}}))(G),W=function(e){return r.a.createElement("div",{className:N.a.profile},r.a.createElement(I,{profileInfo:e.profileInfo}),r.a.createElement(L,null),r.a.createElement(R,null))},B=n(3),H=n(12),Y={posts:[],textValue:"",profileInfo:null},J=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e=e?this.props.match.params.userId:2,this.props.profileInformationThunk(e)}},{key:"render",value:function(){return r.a.createElement(W,this.props)}}]),n}(r.a.Component),K=Object(B.e)(J),X=Object(h.b)((function(e){return{profileInfo:e.profile.profileInfo,log:e.userData.log}}),{profileInformationThunk:function(e){return function(t){(function(e){return g.get("profile/".concat(e)).then((function(e){return e.data}))})(e).then((function(e){return t({type:"SET_USERS_PROFILE",info:e})}))}}})(K),q=n(47),Z=n.n(q),$=(n(48),function(e){return r.a.createElement("div",{className:Z.a.friend})}),z=n(21),Q=n.n(z),ee=function(e){return r.a.createElement("div",null,r.a.createElement(p.b,{to:"/messages/"+e.name}," ",e.name," "))},te=function(e){return r.a.createElement("div",null,e.message)},ne=(n(81),function(e){var t=e.messages.friendsData.map((function(e){return r.a.createElement(ee,{name:e.name})})),n=e.messages.chatData.map((function(e){return r.a.createElement(te,{message:e.message})}));return r.a.createElement("div",{className:Q.a.messages},r.a.createElement("div",{className:Q.a.friends},t),r.a.createElement("div",{className:Q.a.chat},r.a.createElement("div",null,n),r.a.createElement("div",{className:Q.a.send},r.a.createElement("textarea",{value:e.messages.messageValue,onChange:function(t){var n=t.target.value;e.messageValue(n)}}),r.a.createElement("button",{onClick:function(){e.addMessage()}},"Send"))))}),ae=Object(h.b)((function(e){return{messages:e.messages,log:e.userData.log}}),(function(e){return{addMessage:function(){e({type:"ADD_MESSAGE"})},messageValue:function(t){e({type:"MESSAGE_VALUE",text:t})}}}))(ne),re=n(31),oe=n.n(re),ce=function(e){return r.a.createElement("div",null,e.users.map((function(t){return r.a.createElement("div",{className:oe.a.block},r.a.createElement(p.b,{to:"/profile/"+t.id},r.a.createElement("div",{className:oe.a.ava},r.a.createElement("img",{src:t.photos.small}))),r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.country),r.a.createElement("div",null,r.a.createElement("button",{disabled:e.buttonDisable.some((function(e){return e===t.id})),onClick:t.followed?function(){e.unFollowThunk(t.id)}:function(){e.FollowThunk(t.id)}},t.followed?"unfollow":"follow")))})))},se=n(49),ue=n.n(se),le=n(50),ie=n.n(le),fe={users:[],activePage:1,wait:!1,buttonDisable:[]},me=function(e){return{type:"FOLLOW",id:e}},pe=function(e){return{type:"UNFOLLOW",id:e}},de=function(e){return{type:"SET_USERS",users:e}},he=function(e){return{type:"WAIT",b:e}},be=function(e,t){return{type:"BUTTON_DISABLE",d:e,userId:t}},Ee=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).pageChanger=function(t){e.props.getUsersThunk(t)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunk()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ue.a,{activePage:this.props.activePage,totalItemsCount:450,pageRangeDisplayed:5,onChange:this.pageChanger}),this.props.wait?r.a.createElement("img",{src:ie.a}):r.a.createElement(ce,{users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,button:this.props.button,buttonDisable:this.props.buttonDisable,FollowThunk:this.props.FollowThunk,unFollowThunk:this.props.unFollowThunk}))}}]),n}(r.a.Component),ge=Object(h.b)((function(e){return{users:e.usersPage.users,activePage:e.usersPage.activePage,wait:e.usersPage.wait,buttonDisable:e.usersPage.buttonDisable}}),{getUsersThunk:function(e,t){return function(n){n(he(!0)),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return g.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))}(e,t).then((function(e){n(he(!1)),n(de(e.items))}))}},follow:me,unfollow:pe,setUsers:de,pageChanger:function(e){return{type:"CHANGE_PAGE",page:e}},waitChange:he,button:be,FollowThunk:function(e){return function(t){t(be(!0,e)),function(e){return g.post("follow/".concat(e)).then((function(e){return e.data}))}(e).then((function(n){0==n.resultCode&&t(me(e))})),t(be(!1,e))}},unFollowThunk:function(e){return function(t){t(be(!0,e)),function(e){return g.delete("follow/".concat(e)).then((function(e){return e.data}))}(e).then((function(n){0==n.resultCode&&t(pe(e))})),t(be(!1,e))}}})(Ee),ve=function(e){return r.a.createElement("h1",null,"Login")},_e=function(e){return r.a.createElement("div",{className:"app"},r.a.createElement(w,null),r.a.createElement(y,null),r.a.createElement("div",{className:"content"},r.a.createElement(B.a,{path:"/profile/:userId?",render:function(){return r.a.createElement(X,null)}}),r.a.createElement(B.a,{path:"/messages",render:function(){return r.a.createElement(ae,null)}}),r.a.createElement(B.a,{path:"/users",render:function(){return r.a.createElement(ge,null)}}),r.a.createElement(B.a,{path:"/login",render:function(){return r.a.createElement(ve,null)}})),r.a.createElement($,{store:e.store}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(84);var Oe=n(18),je={friendsData:[{name:"David"},{name:"Diana"},{name:"Mko"},{name:"kavij"},{name:"Hayk"},{name:"Levon"}],messageValue:"",chatData:[]},we=n(51),De=Object(Oe.c)({profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":return Object(E.a)(Object(E.a)({},e),{},{posts:[{post:e.textValue,like:0}].concat(Object(H.a)(e.posts)),textValue:""});case"TEXT_VALUES":return Object(E.a)(Object(E.a)({},e),{},{textValue:t.text});case"SET_USERS_PROFILE":return Object(E.a)(Object(E.a)({},e),{},{profileInfo:t.info});default:return e}},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE":return Object(E.a)(Object(E.a)({},e),{},{chatData:[].concat(Object(H.a)(e.chatData),[{message:e.messageValue}]),messageValue:""});case"MESSAGE_VALUE":return Object(E.a)(Object(E.a)({},e),{},{messageValue:t.text});default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(E.a)(Object(E.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(E.a)(Object(E.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(E.a)(Object(E.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(E.a)(Object(E.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(E.a)(Object(E.a)({},e),{},{users:Object(H.a)(t.users)});case"CHANGE_PAGE":return Object(E.a)(Object(E.a)({},e),{},{activePage:t.page});case"WAIT":return Object(E.a)(Object(E.a)({},e),{},{wait:t.b});case"BUTTON_DISABLE":return Object(E.a)(Object(E.a)({},e),{},{wait:t.d,buttonDisable:e.wait?[].concat(Object(H.a)(e.buttonDisable),[t.userId]):e.buttonDisable.filter((function(e){return e==t.userId}))});default:return e}},userData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DATA":return Object(E.a)(Object(E.a)({},e),t.data);case"LOG":return Object(E.a)(Object(E.a)({},e),{},{log:!0});default:return e}}}),ke=Object(Oe.d)(De,Object(Oe.a)(we.a));window.store=ke;var ye=ke,Te=function(){c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,null,r.a.createElement(h.a,{store:ye},r.a.createElement(_e,null)))),document.getElementById("root"))};Te(),ye.subscribe(Te),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.d043d1e2.chunk.js.map