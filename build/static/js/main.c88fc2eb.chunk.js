(this["webpackJsonpauth0-react-sample"]=this["webpackJsonpauth0-react-sample"]||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){e.exports=a.p+"static/media/logo.8d4ce0d7.png"},37:function(e,t,a){e.exports=a(55)},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(10),c=a.n(r),i=a(3),o=a(4),s=a(26),u=a.n(s),m=function(){return l.a.createElement("div",{class:"div-block"},l.a.createElement("img",{src:u.a,loading:"lazy",width:"293",alt:"",class:"image-2"}),l.a.createElement("h1",{class:"heading-3"},l.a.createElement("span",{class:"text-span"},"Pizza42")),l.a.createElement("h1",{class:"heading"},"Best Brooklyn Pizzas In Town!"),l.a.createElement("h1",{class:"heading-2"},"Contact us: (123)-456-7890"))},p=function(){return l.a.createElement("div",{className:"spinner"},l.a.createElement("img",{src:"https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg",alt:"Loading..."}))},h=a(9),d=function(){return l.a.createElement("div",{className:"navbar-nav mr-auto"},l.a.createElement(h.b,{to:"/",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active"},"Home"),l.a.createElement(h.b,{to:"/profile",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active"},"Profile"),l.a.createElement(h.b,{to:"/menu",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active"},"Menu"),l.a.createElement(h.b,{to:"/order",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active"},"Order Now"))},v=function(){var e=Object(o.b)().loginWithRedirect;return l.a.createElement("button",{className:"btn btn-primary btn-block",onClick:function(){return e({scope:"create:order"})}},"Log In")},g=function(){var e=Object(o.b)().logout;return l.a.createElement("button",{className:"btn btn-danger btn-block",onClick:function(){return e({returnTo:window.location.origin})}},"Log Out")},E=function(){return Object(o.b)().isAuthenticated?l.a.createElement(g,null):l.a.createElement(v,null)},f=function(){return l.a.createElement("div",{className:"navbar-nav ml-auto"},l.a.createElement(E,null))},b=function(){return l.a.createElement("div",{className:"nav-container mb-3"},l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light bg-light"},l.a.createElement("div",{className:"container"},l.a.createElement("div",null),l.a.createElement(d,null),l.a.createElement(f,null))))},k=function(){return l.a.createElement(m,null)},O=a(13),x=a.n(O),y=a(20),j=a(15),z=a(19),N=function(){var e=Object(o.b)().user,t=(e.name,e.picture,e.email,Object(o.b)().getAccessTokenSilently),a=Object(n.useState)(""),r=Object(z.a)(a,2),c=(r[0],r[1]),i=Object(n.useState)({apiMessage:[]}),s=Object(z.a)(i,2),u=s[0],m=s[1],p=function(){var e=Object(j.a)(x.a.mark((function e(){var a,n,l,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:return a=e.sent,e.next=6,fetch("".concat("http://localhost:6060","/api/messages/getorders"),{headers:{Authorization:"Bearer ".concat(a)}});case 6:return n=e.sent,e.next=9,n.json();case 9:l=e.sent,r=l.orders,m(Object(y.a)(Object(y.a)({},u),{},{apiMessage:r})),h(),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),c(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),h=function(){return console.log(u.apiMessage[0]),l.a.createElement("div",{className:"App"},l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Orders"),l.a.createElement("th",null,"Date")),u.apiMessage.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.type),l.a.createElement("td",null,e.timestamp))}))))};return l.a.createElement("div",null,l.a.createElement("div",{class:"div-block-2"},l.a.createElement("h1",{class:"heading-6"},"Previous orders"),l.a.createElement("button",{className:"btn btn-primary ",onClick:function(){p()}},"Show Previous Orders")),h())},w=function(){var e=Object(o.b)().user,t=e.name,a=e.picture,n=e.email;return l.a.createElement("div",null,l.a.createElement("div",{className:"col-md-2 mb-3"},l.a.createElement("img",{src:a,alt:"Profile",className:"rounded-circle img-fluid profile-picture mb-3 mb-md-0"})),l.a.createElement("div",{className:"col-md text-center text-md-left"},l.a.createElement("h2",null,"Hi ",t,"!"),l.a.createElement("h4",null,"Email: ",n)))},C=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(w,null),l.a.createElement(N,null))},P=function(){return l.a.createElement("div",null,l.a.createElement("h1",{class:"heading-4"},"Menu"),l.a.createElement("ul",{role:"list"},l.a.createElement("li",{class:"list-item"},"Veggie Pizza - Cheese Base (Red base) with onions, mushrooms, peppers"),l.a.createElement("li",{class:"list-item-2"},"Pepperoni Pizza "),l.a.createElement("li",{class:"list-item-3"},"Cheese Pizza"),l.a.createElement("li",{class:"list-item-4"},"Italian Sausage Pizza")))},A=function(){return l.a.createElement(P,null)},S=a(28),H=a(29),I=a(34),T=a(32),M=a(12),B=function(){return l.a.createElement(M.a,{color:"success"},"Order Placed!")},R=function(e){Object(I.a)(a,e);var t=Object(T.a)(a);function a(e){var n;return Object(S.a)(this,a),(n=t.call(this,e)).placeorders=Object(j.a)(x.a.mark((function e(){var t,a,l,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=n.props.auth0.getAccessTokenSilently,e.next=4,t();case 4:return a=e.sent,console.log(a),console.log(n.finalOrder),l={type:n.finalOrder},r={method:"POST",headers:{Authorization:"Bearer ".concat(a),"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(l)},e.next=11,fetch("".concat("http://localhost:6060","/api/messages/placeorders"),r);case 11:return e.abrupt("return",e.sent);case 14:e.prev=14,e.t0=e.catch(0),console.log("enters here"),console.log(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,14]])}))),n.plain="",n.italian="",n.veggie="",n.pepperoni="",n.finalOrder="",n.setMessage={},n.state={showComponent:!1},n}return Object(H.a)(a,[{key:"checkAuth",value:function(){console.log("enters");var e=this.props.auth0.isAuthenticated;return console.log(e),!!e}},{key:"checkEmailVerification",value:function(){return!!this.props.auth0.user.email_verified}},{key:"submitIt",value:function(){try{if(this.checkAuth())if(this.checkEmailVerification()){for(var e=[this.plain,this.pepperoni,this.veggie,this.italian],t=[],a=e.length,n=0;n<a;n++)null!=e[n]&&""!=e[n]&&t.push(e[n]);this.finalOrder=t.join(),this.count=1,console.log(this.count),this.placeorders(),null!=this.finalOrder&&""!=this.finalOrder&&this.setState({showComponent:!0})}else console.log("email not verified");else console.log("not authenticated"),(0,this.props.auth0.loginWithRedirect)()}catch(l){console.log(l)}}},{key:"plainHandle",value:function(e){var t=e.target.checked;this.plain=t?e.target.value:""}},{key:"pepperoniHandle",value:function(e){var t=e.target.checked;this.pepperoni=t?e.target.value:""}},{key:"veggieHandle",value:function(e){var t=e.target.checked;this.veggie=t?e.target.value:""}},{key:"italianHandle",value:function(e){var t=e.target.checked;this.italian=t?e.target.value:" "}},{key:"render",value:function(){var e,t=this;return this.checkAuth()&&!this.checkEmailVerification()?(console.log("hello"),e=l.a.createElement(M.a,{color:"warning"},"Please Verify your email before placing an order")):e=l.a.createElement("h1",null,"Place your Order"),1==this.count&&l.a.createElement(M.a,{color:"success"},"Order Placed!"),l.a.createElement("div",null,e,l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",value:"plain cheese",onChange:function(e){return t.plainHandle(e)}}),"Plain Cheese Pizza"),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",value:"pepperoni",onChange:function(e){return t.pepperoniHandle(e)}}),"Pepperoni Pizza"),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",value:"veggie",onChange:function(e){return t.veggieHandle(e)}}),"Veggie Pizza"),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",value:"italian",onChange:function(e){return t.italianHandle(e)}}),"Italian Sausage Pizza"),l.a.createElement("button",{className:"btn btn-primary ",onClick:function(){t.submitIt()}},"Submit Order")),this.state.showComponent?l.a.createElement(B,null):null)}}]),a}(n.Component),V=Object(o.c)(R),L=function(){return l.a.createElement(V,null)},D=a(33),J=function(e){var t=e.component,a=Object(D.a)(e,["component"]);return l.a.createElement(i.a,Object.assign({component:Object(o.d)(t,{onRedirecting:function(){return l.a.createElement(p,null)}})},a))},W=(a(23),a(24),a(25),a(54),function(){return Object(o.b)().isLoading?l.a.createElement(p,null):l.a.createElement("div",{id:"app",className:"d-flex flex-column h-100"},l.a.createElement(b,null),l.a.createElement("div",{className:"container flex-grow-1"},l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",exact:!0,component:k}),l.a.createElement(i.a,{path:"/menu",exact:!0,component:A}),l.a.createElement(i.a,{path:"/order",exact:!0,component:L}),l.a.createElement(J,{path:"/profile",component:C}))))}),Z=function(e){var t=e.children,a=Object(i.f)();return l.a.createElement(o.a,{domain:"dev-njufz051.us.auth0.com",clientId:"ZG8p2wwowron8enO3RlkcDg63TrDZ8ku",redirectUri:window.location.origin,onRedirectCallback:function(e){a.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)},audience:"https://express.pizza"},t)};c.a.render(l.a.createElement(h.a,null,l.a.createElement(Z,null,l.a.createElement(W,null))),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.c88fc2eb.chunk.js.map