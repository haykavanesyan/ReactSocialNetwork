(this.webpackJsonpReactSocialNetwork=this.webpackJsonpReactSocialNetwork||[]).push([[0],{112:function(e,t,n){e.exports={profile:"profile_profile__12aYL"}},113:function(e,t,n){e.exports={profile_nav:"profile_nav_profile_nav__3-kJe"}},114:function(e,t,n){e.exports={posts:"posts_posts__1NqYB"}},116:function(e,t,n){e.exports={friend:"friend_friend__1b4I3",text:"friend_text__2ZENo"}},117:function(e,t,n){e.exports={item:"friender_item__1a0ny"}},118:function(e,t,n){e.exports={error:"login_error__3g-zQ"}},120:function(e,t,n){e.exports=n.p+"static/media/200.1d52ecc1.gif"},123:function(e,t,n){e.exports=n(252)},128:function(e,t,n){},129:function(e,t,n){},248:function(e,t){},251:function(e,t){},252:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),u=n(51),c=n.n(u),l=(n(128),n(129),n(21)),s=n(22),i=n(25),f=n(24),m=n(71),p=n.n(m),d=n(9),b=function(e){return o.a.createElement("div",{className:p.a.head},o.a.createElement("p",null,o.a.createElement(d.b,{to:"/"},"HEAD")),o.a.createElement("div",{className:p.a.login},e.userData.log?o.a.createElement("div",null,e.userData.login," ",o.a.createElement("button",{href:"/login",onClick:e.logoutThunk},"LogOut")):o.a.createElement(d.b,{to:"/login"},"login")))},h=n(10),E=n(31),g=n(4),v=E.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"dfa7ba6d-ffa7-442f-a308-54584e93775b"}}),_=function(){return v.get("auth/me").then((function(e){return e.data}))},O=function(e){return v.put("profile/status",{status:e})},j={id:null,email:null,login:null,log:!1,error:"",resultCode:null},w=function(e){return{type:"ADD_DATA",data:e}},D=function(e){return{type:"LOG",b:e}},k=function(e){Object(i.a)(n,e);var t=Object(f.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.logInThunk()}},{key:"render",value:function(){return o.a.createElement(b,this.props)}}]),n}(o.a.Component),S=Object(h.b)((function(e){return{userData:e.userData}}),{addData:w,log:D,logInThunk:function(){return function(e){_().then((function(t){e(w(t.data)),0===t.resultCode&&e(D(!0))}))}},logoutThunk:function(){return function(e){v.delete("auth/login").then((function(t){0===t.data.resultCode&&(e(w(null)),e(D(!1)))}))}}})(k),T=n(35),y=n.n(T),N=function(){return o.a.createElement("div",{className:y.a.nav},o.a.createElement(d.b,{to:"/profile"},o.a.createElement("div",{className:y.a.item},"Profile")),o.a.createElement("div",{className:y.a.item},"Feeds"),o.a.createElement(d.b,{to:"/messages"},o.a.createElement("div",{className:y.a.item},"Messages")),o.a.createElement(d.b,{to:"/users"},o.a.createElement("div",{className:y.a.item},"Find Users")))},A=n(112),I=n.n(A),P=n(75),C=n.n(P),L=function(e){Object(i.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={bool:!0,value:e.props.status},e.change=function(t){O(t.target.value),e.setState({value:t.target.value})},e.activateMode=function(){e.setState({bool:!0})},e.disableMode=function(){e.setState({bool:!1})},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,this.state.bool?o.a.createElement("span",{onClick:this.props.userData.id===this.props.profileInfo.userId?this.disableMode:null}," ",this.props.status," "):o.a.createElement("input",{onBlur:this.activateMode,value:this.state.value,onChange:this.change}))}}]),n}(o.a.Component),x=function(e){return e.profileInfo?o.a.createElement("div",{className:C.a.profile_head},o.a.createElement("div",{className:C.a.profilePicture},o.a.createElement("img",{src:e.profileInfo.photos.large})),o.a.createElement(L,{userData:e.userData,status:e.status,profileInfo:e.profileInfo})):o.a.createElement("div",null)},M=n(113),U=n.n(M),F=function(){return o.a.createElement("div",{className:U.a.profile_nav})},R=n(76),G=n.n(R),V=n(114),W=n.n(V),B=function(e){return o.a.createElement("div",{className:W.a.posts},e.post,o.a.createElement("p",null," Likes: ",e.like," "))},H=n(254),Y=n(253),J=Object(Y.a)({form:"AddNewPost"})((function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement(H.a,{component:"input",name:"new_post"}),o.a.createElement("div",{className:G.a.button},o.a.createElement("button",null,"Post")))})),K=function(e){var t=e.profile.posts.map((function(e){return o.a.createElement(B,{post:e.post,like:e.like})}));return o.a.createElement("div",{className:G.a.newPost},o.a.createElement("div",null,o.a.createElement(J,{onSubmit:function(t){e.addPost(t.new_post)}})),o.a.createElement("div",null,t))},X=Object(h.b)((function(e){return{profile:e.profile}}),(function(e){return{addPost:function(t){e({type:"ADD_POST",value:t})},textValue:function(t){e({type:"TEXT_VALUES",text:t})}}}))(K),q=function(e){return o.a.createElement("div",{className:I.a.profile},o.a.createElement(x,{profileInfo:e.profileInfo,userData:e.userData,status:e.status}),o.a.createElement(F,null),o.a.createElement(X,null))},z=n(7),Q=n(8),Z=n(29),$={posts:[],textValue:"",profileInfo:null,status:""},ee=function(e){return function(t){return t.log?o.a.createElement(e,t):o.a.createElement(Q.a,{to:"/login"})}},te=function(e){Object(i.a)(n,e);var t=Object(f.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e=e?this.props.match.params.userId:this.props.userData.id,this.props.profileInformationThunk(e),this.props.getStatusThunk(e)}},{key:"render",value:function(){return o.a.createElement(q,this.props)}}]),n}(o.a.Component),ne=Object(z.d)(Object(h.b)((function(e){return{profileInfo:e.profile.profileInfo,status:e.profile.status,log:e.userData.log,userData:e.userData}}),{profileInformationThunk:function(e){return function(t){(function(e){return v.get("profile/".concat(e)).then((function(e){return e.data}))})(e).then((function(e){return t({type:"SET_USERS_PROFILE",info:e})}))}},getStatusThunk:function(e){return function(t){(function(e){return v.get("profile/status/".concat(e))})(e).then((function(e){t({type:"SET_STATUS",status:e.data})}))}}}),Q.f,ee)(te),ae=n(116),re=n.n(ae),oe=(n(117),function(e){return o.a.createElement("div",{className:re.a.friend})}),ue=n(36),ce=n.n(ue),le=function(e){return o.a.createElement("div",null,o.a.createElement(d.b,{to:"/messages/"+e.name}," ",e.name," "))},se=function(e){return o.a.createElement("div",null,e.message)},ie=(n(248),n(122)),fe=n(118),me=n.n(fe),pe=function(e){return function(t){var n=t.input,a=t.meta,r=Object(ie.a)(t,["input","meta"]),u=a.touched&&a.error;return o.a.createElement("div",null,o.a.createElement(e,Object.assign({className:u?me.a.error:""},n,r)))}},de=pe("input"),be=pe("textarea"),he=Object(Y.a)({form:"AddNewMessage"})((function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement(H.a,{component:be,name:"new_message",placeholder:"Write your message"}),o.a.createElement("div",{className:ce.a.button},o.a.createElement("button",null,"Senc")))})),Ee=function(e){var t=e.messages.friendsData.map((function(e){return o.a.createElement(le,{name:e.name})})),n=e.messages.chatData.map((function(e){return o.a.createElement(se,{message:e.message})}));return o.a.createElement("div",{className:ce.a.messages},o.a.createElement("div",{className:ce.a.friends},t),o.a.createElement("div",{className:ce.a.chat},o.a.createElement("div",null,n),o.a.createElement("div",{className:ce.a.send},o.a.createElement(he,{onSubmit:function(t){e.addMessage(t.new_message)}}))))},ge=Object(z.d)(Object(h.b)((function(e){return{messages:e.messages,log:e.userData.log}}),(function(e){return{addMessage:function(t){e({type:"ADD_MESSAGE",value:t})},messageValue:function(t){e({type:"MESSAGE_VALUE",text:t})}}})),ee)(Ee),ve=n(79),_e=n.n(ve),Oe=function(e){return o.a.createElement("div",null,e.users.map((function(t){return o.a.createElement("div",{className:_e.a.block},o.a.createElement(d.b,{to:"/profile/"+t.id},o.a.createElement("div",{className:_e.a.ava},o.a.createElement("img",{src:t.photos.large}))),o.a.createElement("div",null,t.name),o.a.createElement("div",null,t.country),o.a.createElement("div",null,o.a.createElement("button",{disabled:e.buttonDisable.some((function(e){return e===t.id})),onClick:t.followed?function(){e.unFollowThunk(t.id)}:function(){e.FollowThunk(t.id)}},t.followed?"unfollow":"follow")))})))},je=n(119),we=n.n(je),De=n(120),ke=n.n(De),Se={users:[],activePage:1,wait:!1,buttonDisable:[]},Te=function(e){return{type:"FOLLOW",id:e}},ye=function(e){return{type:"UNFOLLOW",id:e}},Ne=function(e){return{type:"SET_USERS",users:e}},Ae=function(e){return{type:"WAIT",b:e}},Ie=function(e,t){return{type:"BUTTON_DISABLE",d:e,userId:t}},Pe=function(e){Object(i.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).pageChanger=function(t){e.props.getUsersThunk(t)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunk()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(we.a,{activePage:this.props.activePage,totalItemsCount:450,pageRangeDisplayed:5,onChange:this.pageChanger}),this.props.wait?o.a.createElement("img",{src:ke.a}):o.a.createElement(Oe,{users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,button:this.props.button,buttonDisable:this.props.buttonDisable,FollowThunk:this.props.FollowThunk,unFollowThunk:this.props.unFollowThunk}))}}]),n}(o.a.Component),Ce=Object(h.b)((function(e){return{users:e.usersPage.users,activePage:e.usersPage.activePage,wait:e.usersPage.wait,buttonDisable:e.usersPage.buttonDisable}}),{getUsersThunk:function(e,t){return function(n){n(Ae(!0)),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return v.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))}(e,t).then((function(e){n(Ae(!1)),n(Ne(e.items))}))}},follow:Te,unfollow:ye,setUsers:Ne,pageChanger:function(e){return{type:"CHANGE_PAGE",page:e}},waitChange:Ae,button:Ie,FollowThunk:function(e){return function(t){t(Ie(!0,e)),function(e){return v.post("follow/".concat(e)).then((function(e){return e.data}))}(e).then((function(n){0==n.resultCode&&t(Te(e))})),t(Ie(!1,e))}},unFollowThunk:function(e){return function(t){t(Ie(!0,e)),function(e){return v.delete("follow/".concat(e)).then((function(e){return e.data}))}(e).then((function(n){0==n.resultCode&&t(ye(e))})),t(Ie(!1,e))}}})(Pe),Le=function(e){if(!e)return"fail"},xe=Object(h.b)((function(e){return{log:e.userData.log}}),{loginThunk:function(e,t,n){return function(a){return function(e,t,n){return v.post("auth/login",{email:e,password:t,rememberMe:n})}(e,t,n).then((function(e){0===e.data.resultCode&&_().then((function(e){a(w(e.data)),0===e.resultCode&&a(D(!0))}))}))}}})((function(e){return!0===e.log?o.a.createElement(Q.a,{to:"/profile"}):o.a.createElement("div",null,o.a.createElement(Ue,{onSubmit:function(t){e.loginThunk(t.login,t.password,!0)}}))})),Me=(a=4,function(e){if(e.length<a)return"please write 8 simbols"}),Ue=Object(Y.a)({form:"login"})((function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement(H.a,{name:"login",component:de,placeholder:"login",validate:[Le]}),o.a.createElement("br",null),o.a.createElement(H.a,{name:"password",component:de,placeholder:"Password",type:"password",validate:[Le,Me]}),o.a.createElement("br",null),o.a.createElement(H.a,{name:"rememberMe",component:"input",type:"checkbox"}),"Remember Me",o.a.createElement("br",null),o.a.createElement("button",null,"login"),o.a.createElement("br",null))})),Fe=function(e){return o.a.createElement("div",{className:"app"},o.a.createElement(S,null),o.a.createElement(N,null),o.a.createElement("div",{className:"content"},o.a.createElement(Q.b,{path:"/profile/:userId?",render:function(){return o.a.createElement(ne,null)}}),o.a.createElement(Q.b,{path:"/messages",render:function(){return o.a.createElement(ge,null)}}),o.a.createElement(Q.b,{path:"/users",render:function(){return o.a.createElement(Ce,null)}}),o.a.createElement(Q.b,{path:"/login",render:function(){return o.a.createElement(xe,null)}})),o.a.createElement(oe,{store:e.store}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(251);var Re={friendsData:[{name:"David"},{name:"Diana"},{name:"Mko"},{name:"kavij"},{name:"Hayk"},{name:"Levon"}],messageValue:"",chatData:[]},Ge=n(121),Ve=n(255),We=Object(z.c)({profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":return Object(g.a)(Object(g.a)({},e),{},{posts:[{post:t.value,like:0}].concat(Object(Z.a)(e.posts))});case"TEXT_VALUES":return Object(g.a)(Object(g.a)({},e),{},{textValue:t.text});case"SET_USERS_PROFILE":return Object(g.a)(Object(g.a)({},e),{},{profileInfo:t.info});case"SET_STATUS":return Object(g.a)(Object(g.a)({},e),{},{status:t.status});default:return e}},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE":return Object(g.a)(Object(g.a)({},e),{},{chatData:[].concat(Object(Z.a)(e.chatData),[{message:t.value}])});case"MESSAGE_VALUE":return Object(g.a)(Object(g.a)({},e),{},{messageValue:t.text});default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(g.a)(Object(g.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(g.a)(Object(g.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(g.a)(Object(g.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(g.a)(Object(g.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(g.a)(Object(g.a)({},e),{},{users:Object(Z.a)(t.users)});case"CHANGE_PAGE":return Object(g.a)(Object(g.a)({},e),{},{activePage:t.page});case"WAIT":return Object(g.a)(Object(g.a)({},e),{},{wait:t.b});case"BUTTON_DISABLE":return Object(g.a)(Object(g.a)({},e),{},{wait:t.d,buttonDisable:e.wait?[].concat(Object(Z.a)(e.buttonDisable),[t.userId]):e.buttonDisable.filter((function(e){return e==t.userId}))});default:return e}},userData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DATA":return Object(g.a)(Object(g.a)({},e),t.data);case"LOG":return Object(g.a)(Object(g.a)({},e),{},{log:t.b});case"LOGIN":return Object(g.a)(Object(g.a)({},e),{},{error:t.error,resultCode:t.resultCode});default:return e}},form:Ve.a}),Be=Object(z.e)(We,Object(z.a)(Ge.a));window.store=Be;var He=Be,Ye=function(){c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d.a,null,o.a.createElement(h.a,{store:He},o.a.createElement(Fe,null)))),document.getElementById("root"))};Ye(),He.subscribe(Ye),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,n){e.exports={nav:"nav_nav__jF-7_",item:"nav_item__1EvY7"}},36:function(e,t,n){e.exports={messages:"messages_messages__3R9HB",friends:"messages_friends___kkYw",chat:"messages_chat__3DKuC"}},71:function(e,t,n){e.exports={head:"head_head__nUkF2",login:"head_login__1dcnN"}},75:function(e,t,n){e.exports={profile_head:"profile_head_profile_head__1TbLN",profilePicture:"profile_head_profilePicture__33O6L"}},76:function(e,t,n){e.exports={newPost:"newPost_newPost__1hmJs",button:"newPost_button__1_mgV"}},79:function(e,t,n){e.exports={block:"users_block__3-uRW",ava:"users_ava__1644M",disable:"users_disable__2MrTn"}}},[[123,1,2]]]);
//# sourceMappingURL=main.732afb47.chunk.js.map