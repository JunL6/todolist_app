(this.webpackJsonptodolist_app=this.webpackJsonptodolist_app||[]).push([[0],{123:function(e,t,a){e.exports=a(235)},224:function(e,t,a){},225:function(e,t,a){},228:function(e,t,a){e.exports=a.p+"static/media/logo.183dc3a6.svg"},229:function(e,t,a){},230:function(e,t,a){},233:function(e,t,a){},234:function(e,t,a){},235:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),c=a.n(o),l=a(35),i=a(11),s=a(16),u=a(109),m=a(246),d=a(85),p=a(74),h=[{id:-1,text:"drink water",timeCreated:1584135899914,isCompleted:!1,groupId:-1},{id:-2,text:"wash hands",timeCreated:1584135992855,isCompleted:!0,groupId:-2}],f=Object(l.c)({todoList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add_todoItem":return[].concat(Object(p.a)(e),[t.payload]);case"toggle_todoItem":var a=e.map((function(e){return e.id===t.payload?Object(d.a)(Object(d.a)({},e),{},{isCompleted:!e.isCompleted}):e}));return a;default:return e}},visibility:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"switch_visibility":return console.log("clicked toggle: "+t.payload),t.payload;default:return e}},groupSelected:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"select_group":return t.payload;default:return e}},groupList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{groupName:"Default Group",groupId:-1},{groupName:"Group 2",groupId:-2}],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add_group":return console.log("here is being executed"),[].concat(Object(p.a)(e),[t.payload]);default:return e}},form:m.a,authed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_user":case"auth_user":return t.payload||!1;default:return e}}}),g=a(14),b=a.n(g);function E(e){return{type:"auth_user",payload:e}}var v=a(39),y=a(40),j=a(45),O=a(44),N=a(9),C=a(248),k=a(113),w=a(33);a(224);var x=Object(i.b)((function(e){return{authed:e.authed}}))((function(e){var t=e.history.location.pathname;return"/login"===t||"/signup"===t||"/app"===t?r.a.createElement(r.a.Fragment,null):r.a.createElement(C.a,{className:"header transparent",expand:"lg"},r.a.createElement(w.LinkContainer,{to:e.authed?"/app":"/",style:{color:"white"}},r.a.createElement(C.a.Brand,{className:"mr-auto"},"Todoie")),r.a.createElement(w.LinkContainer,{to:"/login"},r.a.createElement(k.a,{variant:"light",className:"mr-2"},"Log in")),r.a.createElement(w.LinkContainer,{to:"/signup"},r.a.createElement(k.a,{variant:"outline-light",className:"mr-2"},"Sign up")))})),S=a(6),_=a(241),I=a(242),L=a(114),B=a(247),D=a(250),T=(a(225),a(68)),G=a.n(T);var P={authUser:E},A=Object(i.b)((function(e){return{authed:e.authed}}),P)((function(e){var t=Object(n.useState)(),a=Object(S.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(),i=Object(S.a)(l,2),u=i[0],m=i[1],d=Object(n.useState)(!1),p=Object(S.a)(d,2),h=p[0],f=p[1],g=Object(n.useState)(!1),E=Object(S.a)(g,2),v=E[0],y=E[1];return r.a.createElement("div",{className:"auth bg-light"},r.a.createElement(_.a,{fluid:!0},r.a.createElement(I.a,{className:"pt-5 justify-content-center align-items-center"},r.a.createElement(s.Link,{to:"/",className:"d-flex align-items-end logo-link"},r.a.createElement("img",{src:G.a,width:"30",height:"30"}),r.a.createElement("h3",{className:"d-inline-block m-0 text-dark"},"odoie"))),r.a.createElement(I.a,{className:"my-4 justify-content-center"},r.a.createElement(L.a,{className:"auth-form-container pt-3 pb-4 px-4 border rounded"},r.a.createElement(B.a,{noValidate:!0,validated:h,onSubmit:function(t){!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),f(!0),t.preventDefault();var a={username:o,password:u};b.a.post("/api/login",a).then((function(t){console.log(t),200===t.status&&(e.authUser(JSON.parse(t.config.data).username),console.log(e.authed),e.history.push("/app"))})).catch((function(e){console.error(e),y(!0),m(null)}))}},r.a.createElement("h3",{className:"text-center text-secondary"},"Log in"),r.a.createElement(B.a.Group,{controlId:"formBasicEmail"},r.a.createElement(B.a.Label,{className:"font-weight-bold"},"Email"),r.a.createElement(B.a.Control,{type:"email",placeholder:"Enter email",required:!0,onChange:function(e){return c(e.target.value)}}),r.a.createElement(B.a.Control.Feedback,{type:"invalid"},"Please provide a proper Email.")),r.a.createElement(B.a.Group,{controlId:"formBasicPassword",className:"mb-4"},r.a.createElement(B.a.Label,{className:"font-weight-bold"},"Password"),r.a.createElement(B.a.Control,{type:"password",placeholder:"Password",required:!0,onChange:function(e){return m(e.target.value)}}),r.a.createElement(B.a.Control.Feedback,{type:"invalid"},"Please provide a proper password.")),r.a.createElement(k.a,{variant:"primary",type:"submit",block:!0},"Log in"),r.a.createElement("div",{className:"text-danger",style:{display:v?"block":"none"}},"Invalid username or password")),r.a.createElement(D.a.Divider,null),r.a.createElement("div",{className:"text-muted"},"Don't have an account yet? ",r.a.createElement(s.Link,{to:"/signup"},"Sign up"))))))}));var U={authUser:E},F=Object(i.b)(null,U)((function(e){var t=Object(n.useState)(),a=Object(S.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(),i=Object(S.a)(l,2),u=i[0],m=i[1],d=Object(n.useState)(!1),p=Object(S.a)(d,2),h=p[0],f=p[1];return r.a.createElement("div",{className:"auth bg-light"},r.a.createElement(_.a,{fluid:!0},r.a.createElement(I.a,{className:"pt-5 justify-content-center align-items-center"},r.a.createElement(s.Link,{to:"/",className:"d-flex align-items-end logo-link"},r.a.createElement("img",{src:G.a,width:"30",height:"30"}),r.a.createElement("h3",{className:"d-inline-block m-0 text-dark"},"odoie"))),r.a.createElement(I.a,{className:"my-4 justify-content-center"},r.a.createElement(L.a,{className:"auth-form-container pt-3 pb-4 px-4 border rounded"},r.a.createElement(B.a,{onSubmit:function(t){t.preventDefault();var a={username:o,password:u};b.a.post("/api/signup",a).then((function(t){console.log(t),200===t.status&&(e.authUser(a.username),e.history.push("/app"))})).catch((function(e){console.error(e),e.toString().includes("409")&&(f(!0),m(null))}))}},r.a.createElement("h3",{className:"text-center text-secondary"},"Sign up"),r.a.createElement(B.a.Group,{controlId:"formBasicEmail"},r.a.createElement(B.a.Label,{className:"font-weight-bold"},"Email"),r.a.createElement(B.a.Control,{type:"email",placeholder:"Enter email",required:!0,onChange:function(e){c(e.target.value)}}),r.a.createElement(B.a.Control.Feedback,{type:"invalid"},"Please provide a proper Email."),r.a.createElement(B.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(B.a.Group,{controlId:"formBasicPassword",className:"mb-4"},r.a.createElement(B.a.Label,{className:"font-weight-bold"},"Password"),r.a.createElement(B.a.Control,{type:"password",placeholder:"Password",required:!0,onChange:function(e){m(e.target.value)}}),r.a.createElement(B.a.Control.Feedback,{type:"invalid"},"Please provide a proper password.")),r.a.createElement(k.a,{variant:"primary",type:"submit",block:!0},"Sign up"),r.a.createElement("div",{className:"text-danger",style:{display:h?"block":"none"}},"Email has been registered.")),r.a.createElement(D.a.Divider,null),r.a.createElement("div",{className:"text-muted"},"Already have an account? ",r.a.createElement(s.Link,{to:"/login"},"Log in"))))))}));a(228),a(229);function M(e){return r.a.createElement(_.a,{fluid:!0,className:"landing-page"},r.a.createElement("div",{className:"layer"}," "),r.a.createElement("div",{className:"content d-flex flex-column justify-content-center"},r.a.createElement(I.a,{className:"justify-content-center py-3 m-0"},r.a.createElement("h1",{className:"text-light"},"Todoie")),r.a.createElement(I.a,{className:"justify-content-center m-0"},r.a.createElement("h4",{className:"text-light"},"A simple todo list app.")),r.a.createElement(I.a,{className:"justify-content-center pt-3 m-0"},r.a.createElement(L.a,{xs:"auto"},r.a.createElement(w.LinkContainer,{to:"/signup"},r.a.createElement(k.a,{variant:"info",size:"lg"},"Sign up for free now!"))))))}var q=a(115),V=r.a.createContext(),J=function(e){var t=Object(n.useState)(),a=Object(S.a)(t,2),o=a[0],c=a[1];return r.a.createElement(V.Provider,{value:[o,c]},e.children)};var z=function(e){var t=Object(n.useState)(""),a=Object(S.a)(t,2),o=a[0],c=a[1],l=Object(n.useContext)(V),i=Object(S.a)(l,2),s=i[0];return i[1],r.a.createElement(B.a,{onSubmit:function(t){t.preventDefault();var a,n=o.trim();n&&(a=n,b.a.post("/api/insertTodo",{groupId:s,todoContent:a,createdTime:new Date}).then((function(){e.setCount((function(e){return e+1}))})),c(""),console.log("add to do: "+n))},className:"mb-3"},r.a.createElement(I.a,null,r.a.createElement(q.a,{type:"text",value:o,onChange:function(e){c(e.target.value)},style:{width:"300px"},className:"mr-2"}),r.a.createElement(k.a,{variant:"info",type:"submit"},"Add Todo")))};var H=Object(i.b)((function(e){return{visibility:e.visibility}}))((function(e){var t=Object(n.useContext)(V),a=Object(S.a)(t,2),o=a[0];return a[1],r.a.createElement("div",{className:"todo-list"},r.a.createElement("ul",null,function(e,t,a){switch(t){case 0:return e.filter((function(e){return e.groupId===a}));case 1:return e.filter((function(e){return e.groupId===a&&!1===e.isCompleted}));case 2:return e.filter((function(e){return e.groupId===a&&!0===e.isCompleted}))}}(e.list,e.visibility,o).map((function(t){return r.a.createElement("li",{key:t._id,className:t.isCompleted?"todo-list_li--completed":"todo-list_li--incomplete",onClick:function(){var a;a=t._id,b.a.post("/api/updateTodo",{todoId:a,isToggled:!0}).then((function(t){e.setCount((function(e){return e+1}))}))}},t.todoContent)}))))})),R=a(64),W=function(e){Object(j.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).renderButton=n.renderButton.bind(Object(R.a)(n)),n}return Object(y.a)(a,[{key:"renderButton",value:function(e,t){var a=this;return r.a.createElement("button",{className:this.props.visibility===t?"status-toggle_button--selected":"",onClick:function(){return a.props.switchVisibility(t)}},e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"status-toggle"},this.renderButton("All",0),this.renderButton("Todo",1),this.renderButton("Done",2))}}]),a}(n.Component);var K=Object(i.b)((function(e){return{visibility:e.visibility}}),{switchVisibility:function(e){return{type:"switch_visibility",payload:e}}})(W),Q=a(249),X=a(4),Y=a.n(X),Z=a(245),$=a(243);function ee(e){return r.a.createElement(Z.a,{show:e.isModalOpen,onHide:e.closeModal,centered:!0},r.a.createElement(Z.a.Header,{closeButton:!0},r.a.createElement(Z.a.Title,null,"New group")),r.a.createElement(Z.a.Body,null,r.a.createElement($.a,null,r.a.createElement(q.a,{placeholder:"New group name",onChange:e.onGroupNameInputChange}))),r.a.createElement(Z.a.Footer,null,r.a.createElement(k.a,{variant:"secondary",onClick:e.closeModal},"Close"),r.a.createElement(k.a,{variant:"primary",onClick:e.onAddNewGroup},"Add")))}a(230);function te(e){var t,a,o=Object(n.useState)(!1),c=Object(S.a)(o,2),l=c[0],i=c[1],s=Object(n.useState)(""),u=Object(S.a)(s,2),m=u[0],d=u[1],p=Object(n.useContext)(V),h=Object(S.a)(p,2),f=h[0],g=h[1],E=Object(n.useState)(!1),v=Object(S.a)(E,2);v[0],v[1];function y(){i(!1)}return Object(n.useEffect)((function(){!f&&e.groups.length>0&&g(e.groups[0]._id)}),[f,e.groups]),r.a.createElement("div",{className:"group-selector mt-5"},r.a.createElement("h4",{className:"mb-3 ml-3"},"Groups"),r.a.createElement(Q.a,{className:"mb-2"},(t=e.groups,a=f,t.map((function(e){return r.a.createElement(Q.a.Item,{key:e._id,className:Y()("item",{"item-selected":e._id===a,"text-primary":e._id===a}),onClick:function(){g(e._id)}},r.a.createElement("span",null,e.groupName))})))),r.a.createElement(I.a,{className:"justify-content-center"},r.a.createElement(k.a,{variant:"secondary",size:"sm",className:"mt-3",onClick:function(){i(!0)}},"Add group")),r.a.createElement(ee,{isModalOpen:l,closeModal:y,onGroupNameInputChange:function(e){if(e.target.value){var t=e.target.value.trim();d(t)}},onAddNewGroup:function(t){t.preventDefault(),b.a.post("/api/addGroup",{groupName:m,timeCreated:new Date}).then((function(t){console.log(t),g(t.data._id),e.setCount((function(e){return e+1}))})),y(),d("")}}))}var ae=a(244),ne=a(24),re=a(117),oe=a(118);var ce=Object(i.b)((function(e){return{authed:e.authed}}))((function(e){var t=Object(N.k)();return r.a.createElement(C.a,{bg:"dark"},r.a.createElement(w.LinkContainer,{to:e.authed?"/app":"/",style:{color:"white"}},r.a.createElement(C.a.Brand,null,"Todoie")),r.a.createElement(k.a,{variant:"outline-secondary",onClick:function(){e.setIsSidebarOpen(!e.isSidebarOpen)}},r.a.createElement(re.a,{icon:oe.a})),r.a.createElement(ae.a,{className:"ml-auto",title:e.authed,variant:"secondary"},r.a.createElement(ne.a.Item,{onClick:function(){b.a.get("/api/logout").then((function(){t.push("/")}))}},"Log out")))}));a(233);function le(e){return r.a.createElement("div",{bg:"dark",className:Y()("sidebar",{"is-open":e.isSidebarOpen})},e.children)}function ie(e){var t=Object(n.useState)(null),a=Object(S.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(0),i=Object(S.a)(l,2),s=i[0],u=i[1],m=Object(n.useState)(!0),d=Object(S.a)(m,2),p=d[0],h=d[1];return Object(n.useEffect)((function(){b.a.get("/api/getUserData").then((function(e){c(e.data)}))}),[s]),r.a.createElement(_.a,{fluid:!0,className:"p-0",style:{height:"100vh"}},r.a.createElement(ce,{isSidebarOpen:p,setIsSidebarOpen:h}),r.a.createElement(J,null,r.a.createElement("div",{className:"container-"},console.log(o?o.todos:[]),console.log(s),r.a.createElement(le,{isSidebarOpen:p},r.a.createElement(te,{groups:o?o.groups:[],setCount:u})),r.a.createElement("div",{className:"middle-lane"},r.a.createElement(z,{setCount:u}),r.a.createElement(K,null),r.a.createElement(H,{list:o?o.todos:[],setCount:u})))))}a(234);var se=a(121),ue=function(e){Object(j.a)(a,e);var t=Object(O.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(y.a)(a,[{key:"render",value:function(){var e=this.props,t=e.component,a=e.path,n=Object(se.a)(e,["component","path"]);return r.a.createElement(N.d,Object.assign({path:a},n),this.props.authed?r.a.createElement(t,null):r.a.createElement(N.c,{to:"/login"}))}}]),a}(r.a.Component),me=Object(i.b)((function(e){return{authed:e.authed}}))(ue),de=function(e){Object(j.a)(a,e);var t=Object(O.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(y.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N.d,{component:x}),r.a.createElement(N.d,{path:"/login",component:A}),r.a.createElement(N.d,{path:"/signup",component:F}),r.a.createElement(N.d,{path:"/",exact:!0,component:M}),r.a.createElement(me,{path:"/app",component:ie}))}}]),a}(r.a.Component),pe={fetchUser:function(){return function(e){b.a.get("/api/current_user").then((function(t){console.log(t),e({type:"fetch_user",payload:t.data.username})})).catch((function(e){return console.error(e)}))}}},he=Object(i.b)(null,pe)(de);c.a.render(r.a.createElement(i.a,{store:Object(l.d)(f,Object(l.a)(u.a))},r.a.createElement(s.BrowserRouter,null,r.a.createElement(he,null))),document.getElementById("root"))},68:function(e,t,a){e.exports=a.p+"static/media/Todoie_logo.6a235456.svg"}},[[123,1,2]]]);
//# sourceMappingURL=main.be4203b6.chunk.js.map