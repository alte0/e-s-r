(this["webpackJsonpe-s-r"]=this["webpackJsonpe-s-r"]||[]).push([[0],{26:function(e,t,a){},32:function(e,t,a){e.exports=a(55)},41:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(10),l=a.n(r),i=a(13),o=a(18),c=a(28),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LOGIN":return t.payload;default:return e}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER_INFO":return t.payload;default:return e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL_USERS":return t.payload;default:return e}},h=Object(i.c)({login:m,user:u,users:d}),f=a(8),p=a(3),_=a(57),b=a(2),v=a(11),g=a(12),E=a(15),w=a(14),y=(a(26),a(41),function(e){var t=e.text;return s.a.createElement("div",{className:"success"},s.a.createElement("svg",{className:"success__svg",width:212,height:212,viewBox:"0 0 212 212",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{className:"success__path",d:"M106 13.25C54.7805 13.25 13.25 54.7805 13.25 106C13.25 157.22 54.7805 198.75 106 198.75C157.22 198.75 198.75 157.22 198.75 106C198.75 54.7805 157.22 13.25 106 13.25ZM146.061 75.7113L102.46 136.164C101.85 137.015 101.047 137.708 100.116 138.186C99.1856 138.664 98.1543 138.914 97.108 138.914C96.0617 138.914 95.0304 138.664 94.0997 138.186C93.169 137.708 92.3656 137.015 91.7563 136.164L65.9395 100.389C65.1527 99.2922 65.9395 97.7602 67.2852 97.7602H76.9949C79.1066 97.7602 81.1148 98.7746 82.357 100.514L97.0977 120.968L129.643 75.8355C130.885 74.1172 132.873 73.082 135.005 73.082H144.715C146.061 73.082 146.847 74.6141 146.061 75.7113Z",fill:"black",stroke:"black","orig-stroke":"black",strokeWidth:1,"orig-stroke-width":1,"animation-delay-opacity":0,"animation-delay-stroke":500,"animation-delay-fill":1500,"animation-duration-opacity":500,"animation-duration-stroke":1e3,"animation-duration-fill":500})),s.a.createElement("p",{className:"success__text"},"\u0412\u044b ",t))}),N=function(e,t){return e.test(t)},S=function(e,t,a){var n=e.length;return n>=t&&n<=a},C=function(e){var t=Object.fromEntries(e);return JSON.stringify(t)},x=a(21),F=a.n(x),k=a(30),O=a(29),j="GET",T="POST",I="PATCH",L=new(function(){function e(){var t=this;Object(v.a)(this,e),this._fetchRequest=function(){var e=Object(O.a)(F.a.mark((function e(a){var n,s,r,l,i,o,c,m,u,d,h,f,p,_;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.url,s=a.method,r=void 0===s?j:s,l=a.body,i=void 0===l?null:l,o=a.headersAppend,c=void 0===o?null:o,(m=new Headers).append("Content-Type","application/json"),c)for(u=0,d=Object.entries(c);u<d.length;u++)h=Object(k.a)(d[u],2),f=h[0],p=h[1],m.append("".concat(f),"".concat(p));return e.next=6,fetch("".concat(t._baseUrl,"/").concat(n),{method:r,body:i,headers:m});case 6:if(!(_=e.sent).ok){e.next=13;break}return e.next=10,_.json();case 10:return e.abrupt("return",e.sent);case 13:alert("\u041e\u0448\u0438\u0431\u043a\u0430: "+_.status);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._baseUrl="https://emphasoft-test-assignment.herokuapp.com"}return Object(g.a)(e,[{key:"getTokenAndAuth",value:function(e){return this._fetchRequest({url:"api-token-auth/",method:T,body:e})}},{key:"getAllUsers",value:function(e){return this._fetchRequest({url:"api/v1/users/",headersAppend:e})}},{key:"createUser",value:function(e,t){return this._fetchRequest({url:"api/v1/users/",method:T,body:e,headersAppend:t})}},{key:"updateUser",value:function(e,t,a){return this._fetchRequest({url:"api/v1/users/".concat(t,"/"),method:I,body:e,headersAppend:a})}}]),e}()),A=function(e){Object(E.a)(a,e);var t=Object(w.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).validateForm=function(e){var t=e.username,a=e.first_name,n=e.last_name,s=e.password,r=e.isValidPassword;return Boolean(S(t,1,150)&&S(a,1,30)&&S(n,1,150)&&S(s,1,128)&&r)},n.handleChangeUsername=function(e){var t=e.target.value;n.setState((function(e){return{username:t,isValidForm:n.validateForm(Object(b.a)(Object(b.a)({},e),{},{username:t}))}}))},n.handleChangeFirstName=function(e){var t=e.target.value.trim();n.setState((function(e){return{first_name:t,isValidForm:n.validateForm(Object(b.a)(Object(b.a)({},e),{},{first_name:t}))}}))},n.handleChangeLastName=function(e){var t=e.target.value.trim();n.setState((function(e){return{last_name:t,isValidForm:n.validateForm(Object(b.a)(Object(b.a)({},e),{},{last_name:t}))}}))},n.handleChangePassword=function(e){var t=e.target.value.trim(),a=N(/^(?=.*[A-Z])(?=.*\d).{8,}$/,t);n.setState((function(e){return{password:t,isValidPassword:a,isValidForm:n.validateForm(Object(b.a)(Object(b.a)({},e),{},{password:t,isValidPassword:a}))}}))},n.handleClickToggle=function(){n.setState((function(e){return{isTypeInputText:!e.isTypeInputText}}))},n.handleSubmit=function(e){e.preventDefault();var t=n.props.history,a=new FormData(e.target);a.append("is_active","true");var s=C(a);L.createUser(s,{accept:"application/json",Authorization:"Token 781bd9f1de084f4daa7ba2aa8a71a2eab855354e"}).then((function(e){e.id&&(n.setState({showSuccess:!0}),setTimeout((function(){t.push("/sing-in")}),3500))}))},n.initialState={username:"",first_name:"",last_name:"",password:"",isValidForm:!1,isTypeInputText:!1,isValidPassword:!1,showSuccess:!1},n.state=n.initialState,n}return Object(g.a)(a,[{key:"render",value:function(){return localStorage.getItem("token")?s.a.createElement(p.a,{to:"/"}):s.a.createElement(s.a.Fragment,null,s.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},s.a.createElement("div",{className:"form__field"},s.a.createElement("input",{className:"form__input",type:"text",name:"username",id:"username",required:!0,minLength:1,maxLength:150,value:this.state.username,onChange:this.handleChangeUsername,pattern:"^[\\w.@+-]+$"}),s.a.createElement("label",{className:"form__label form__label--absolute",htmlFor:"username"},"\u041b\u043e\u0433\u0438\u043d")),s.a.createElement("div",{className:"form__field"},s.a.createElement("input",{className:"form__input",type:"text",name:"first_name",id:"first_name",required:!0,maxLength:30,value:this.state.first_name,onChange:this.handleChangeFirstName}),s.a.createElement("label",{className:"form__label form__label--absolute",htmlFor:"first_name"},"\u0418\u043c\u044f")),s.a.createElement("div",{className:"form__field"},s.a.createElement("input",{className:"form__input",type:"text",name:"last_name",id:"last_name",required:!0,maxLength:150,value:this.state.last_name,onChange:this.handleChangeLastName}),s.a.createElement("label",{className:"form__label form__label--absolute",htmlFor:"last_name"},"\u0424\u0430\u043c\u0438\u043b\u0438\u044f")),s.a.createElement("div",{className:"form__field"},s.a.createElement("input",{className:"form__input",name:"password",id:"password",required:!0,minLength:8,maxLength:128,type:this.state.isTypeInputText?"text":"password",value:this.state.password,onChange:this.handleChangePassword,pattern:"^(?=.*[A-Z])(?=.*\\d).{8,}$"}),s.a.createElement("label",{className:"form__label form__label--absolute",htmlFor:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c"),s.a.createElement("button",{className:"form__switch-input-type",type:"button",onClick:this.handleClickToggle},s.a.createElement("svg",{className:this.state.isTypeInputText?"eye eye--on":"eye",width:16,height:12,viewBox:"0 0 19 14",fill:"none"},s.a.createElement("path",{d:"M12.113 7A2.572 2.572 0 116.97 7a2.572 2.572 0 015.143 0v0z"}),s.a.createElement("path",{d:"M1.363 7a8.575 8.575 0 0116.358 0A8.575 8.575 0 011.363 7v0z"})),s.a.createElement("span",{className:"visually-hidden"},"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0438\u043b\u0438 \u0441\u043a\u0440\u044b\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"))),s.a.createElement("div",{className:"form__field"},s.a.createElement("button",{className:"btn form__btn",type:"submit",disabled:!this.state.isValidForm},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f ")),s.a.createElement("div",{className:"form__field form__field--text-center"},s.a.createElement("span",{className:"form__question"},"\u0415\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442?"),s.a.createElement(f.b,{className:"form__link",to:"/sing-in"},"\u0412\u043e\u0439\u0442\u0438"))),this.state.showSuccess?s.a.createElement(y,{text:"\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b"}):"")}}]),a}(n.Component),V=Object(p.f)(A),P=(a(44),function(e){var t=e.title,a=e.isShowDesc,n=void 0===a||a;return s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",{className:"title"},t),n?s.a.createElement("p",{className:"title__desc"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0438 \u0434\u0430\u043d\u043d\u044b\u0435"):"")}),U=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(P,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),s.a.createElement(V,null))},D=function(e){Object(E.a)(a,e);var t=Object(w.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).validateForm=function(e){var t=e.username,a=e.password,n=e.isValidPassword;return Boolean(S(t,1,150)&&S(a,8,128)&&n)},n.handleChangeUsername=function(e){var t=e.target.value.trim();n.setState((function(e){return{username:t,isValidForm:n.validateForm(Object(b.a)(Object(b.a)({},e),{},{username:t}))}}))},n.handleChangePassword=function(e){var t=e.target.value.trim(),a=N(/^(?=.*[A-Z])(?=.*\d).{8,}$/,t);n.setState((function(e){return{password:t,isValidPassword:a,isValidForm:n.validateForm(Object(b.a)(Object(b.a)({},e),{},{password:t,isValidPassword:a}))}}))},n.handleClickToggle=function(){n.setState((function(e){return{isTypeInputText:!e.isTypeInputText}}))},n.handleSubmit=function(e){e.preventDefault();var t=new FormData(e.target),a=C(t);L.getTokenAndAuth(a).then((function(e){localStorage.setItem("token","Token ".concat(e.token)),localStorage.setItem("login",n.state.username),n.setState({showSuccess:!0}),setTimeout((function(){n.props.history.push("/")}),3500)}))},n.initialState={username:"",password:"",isValidForm:!1,isTypeInputText:!1,isValidPassword:!1,showSuccess:!1},n.state=n.initialState,n}return Object(g.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},s.a.createElement("div",{className:"form__field"},s.a.createElement("input",{className:"form__input",type:"text",name:"username",id:"username",required:!0,minLength:1,maxLength:150,value:this.state.username,onChange:this.handleChangeUsername,pattern:"^[\\w.@+-]+$"}),s.a.createElement("label",{className:"form__label form__label--absolute",htmlFor:"username"},"\u041b\u043e\u0433\u0438\u043d")),s.a.createElement("div",{className:"form__field form__field--mb40"},s.a.createElement("input",{className:"form__input",name:"password",id:"password",required:!0,minLength:8,maxLength:128,type:this.state.isTypeInputText?"text":"password",value:this.state.password,onChange:this.handleChangePassword,pattern:"^(?=.*[A-Z])(?=.*\\d).{8,}$"}),s.a.createElement("label",{className:"form__label form__label--absolute",htmlFor:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c"),s.a.createElement("button",{className:"form__switch-input-type",type:"button",onClick:this.handleClickToggle},s.a.createElement("svg",{className:this.state.isTypeInputText?"eye eye--on":"eye",width:16,height:12,viewBox:"0 0 19 14",fill:"none"},s.a.createElement("path",{d:"M12.113 7A2.572 2.572 0 116.97 7a2.572 2.572 0 015.143 0v0z"}),s.a.createElement("path",{d:"M1.363 7a8.575 8.575 0 0116.358 0A8.575 8.575 0 011.363 7v0z"})),s.a.createElement("span",{className:"visually-hidden"},"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0438\u043b\u0438 \u0441\u043a\u0440\u044b\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"))),s.a.createElement("div",{className:"form__field"},s.a.createElement("button",{className:"btn form__btn",type:"submit",disabled:!this.state.isValidForm},"\u0412\u043e\u0439\u0442\u0438 ")),s.a.createElement("div",{className:"form__field form__field--text-center"},s.a.createElement("span",{className:"form__question"},"\u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430?"),s.a.createElement(f.b,{className:"form__link",to:"/sing-up"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))),this.state.showSuccess?s.a.createElement(y,{text:"\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b"}):"")}}]),a}(n.Component),q=Object(p.f)(D),M=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(P,{title:"\u0412\u0445\u043e\u0434"}),s.a.createElement(q,null))},$=(a(45),function(e){Object(E.a)(a,e);var t=Object(w.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).validateForm=function(e){var t=e.username,a=e.first_name,n=e.last_name,s=e.password,r=e.isValidPassword;return Boolean(S(t,1,150)&&S(a,1,30)&&S(n,1,150)&&S(s,1,128)&&r)},n.handleChangeFirstName=function(e){var t=e.target.value.trim();n.setState((function(e){return{first_name:t,isValidForm:n.validateForm(Object(b.a)(Object(b.a)({},e),{},{first_name:t}))}}))},n.handleChangeLastName=function(e){var t=e.target.value.trim();n.setState((function(e){return{last_name:t,isValidForm:n.validateForm(Object(b.a)(Object(b.a)({},e),{},{last_name:t}))}}))},n.handleChangePassword=function(e){var t=e.target.value.trim(),a=N(/^(?=.*[A-Z])(?=.*\d).{8,}$/,t);n.setState((function(e){return{password:t,isValidPassword:a,isValidForm:n.validateForm(Object(b.a)(Object(b.a)({},e),{},{password:t,isValidPassword:a}))}}))},n.handleClickToggle=function(){n.setState((function(e){return{isTypeInputText:!e.isTypeInputText}}))},n.handleSubmit=function(e){e.preventDefault(),n.setState({showSuccess:!0});var t=new FormData(e.target),a=C(t),s={accept:"application/json",Authorization:localStorage.getItem("token")};L.updateUser(a,n.state.id,s).then((function(e){e.id&&(n.setState({isDisableForm:!0}),setTimeout((function(){n.setState({showSuccess:!1})}),3500))}))},n.handleClickEdit=function(){n.setState({isDisableForm:!1})},n.handleClickExit=function(){localStorage.removeItem("token"),localStorage.removeItem("login"),n.props.history.push("/sing-in")},n.initialState={first_name:"",id:"",is_active:!0,last_name:"",username:"",password:"",isValidForm:!1,isTypeInputText:!1,isValidPassword:!1,showSuccess:!1,isDisableForm:!0},n.state=n.initialState,n}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={Authorization:localStorage.getItem("token")};L.getAllUsers(t).then((function(t){e.props.getAllUsersDispatch(t);var a=function(e,t){var a=e.findIndex((function(e){return e.username.toLowerCase()===t.toLowerCase()}));return e[a]||null}(t,localStorage.getItem("login"));e.props.getUserInfoDispatch(a),e.setState((function(e){return Object.assign(Object(b.a)(Object(b.a)({},e),{},{id:a.id,is_active:a.is_active,username:a.username,first_name:a.first_name,last_name:a.last_name}))}))}))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"my-profile"},s.a.createElement("button",{disabled:!this.state.isDisableForm,onClick:this.handleClickEdit,className:"btn btn--edit my-profile__btn-left",type:"button"},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u0438 \u0434\u0430\u043d\u043d\u044b\u0435"),s.a.createElement("button",{onClick:this.handleClickExit,className:"btn btn--exit my-profile__btn-right",type:"button"},"\u0412\u044b\u0439\u0442\u0438")),s.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},s.a.createElement("fieldset",{className:"form__fieldset",disabled:this.state.isDisableForm},s.a.createElement("legend",{className:"visually-hidden"},"\u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),s.a.createElement("div",{className:"form__field"},s.a.createElement("input",{className:"form__input",type:"text",name:"username",id:"username",required:!0,minLength:1,maxLength:150,value:this.state.username,disabled:!0,pattern:"^[\\w.@+-]+$"}),s.a.createElement("label",{className:"form__label form__label--absolute",htmlFor:"username"},"\u041b\u043e\u0433\u0438\u043d")),s.a.createElement("div",{className:"form__field"},s.a.createElement("input",{className:"form__input",type:"text",name:"first_name",id:"first_name",required:!0,maxLength:30,value:this.state.first_name,onChange:this.handleChangeFirstName}),s.a.createElement("label",{className:"form__label form__label--absolute",htmlFor:"first_name"},"\u0418\u043c\u044f")),s.a.createElement("div",{className:"form__field"},s.a.createElement("input",{className:"form__input",type:"text",name:"last_name",id:"last_name",required:!0,maxLength:150,value:this.state.last_name,onChange:this.handleChangeLastName}),s.a.createElement("label",{className:"form__label form__label--absolute",htmlFor:"last_name"},"\u0424\u0430\u043c\u0438\u043b\u0438\u044f")),s.a.createElement("div",{className:"form__field"},s.a.createElement("input",{className:"form__input",name:"password",id:"password",minLength:8,maxLength:128,type:this.state.isTypeInputText?"text":"password",value:this.state.password,onChange:this.handleChangePassword,pattern:"^(?=.*[A-Z])(?=.*\\d).{8,}$"}),s.a.createElement("label",{className:"form__label form__label--absolute",htmlFor:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c"),s.a.createElement("button",{className:"form__switch-input-type",type:"button",onClick:this.handleClickToggle},s.a.createElement("svg",{className:this.state.isTypeInputText?"eye eye--on":"eye",width:16,height:12,viewBox:"0 0 19 14",fill:"none"},s.a.createElement("path",{d:"M12.113 7A2.572 2.572 0 116.97 7a2.572 2.572 0 015.143 0v0z"}),s.a.createElement("path",{d:"M1.363 7a8.575 8.575 0 0116.358 0A8.575 8.575 0 011.363 7v0z"})),s.a.createElement("span",{className:"visually-hidden"},"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0438\u043b\u0438 \u0441\u043a\u0440\u044b\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"))),s.a.createElement("div",{className:"form__field"},s.a.createElement("button",{className:"btn form__btn",type:"submit",disabled:!this.state.isValidForm},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435")))),this.state.showSuccess?s.a.createElement(y,{text:"\u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0435"}):"")}}]),a}(n.Component)),z=Object(p.f)(Object(o.b)((function(e){return{user:e.user,users:e.users}}),(function(e){return{getAllUsersDispatch:function(t){e({type:"GET_ALL_USERS",payload:t})},getUserInfoDispatch:function(t){e({type:"GET_USER_INFO",payload:t})}}}))($)),B=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(P,{title:"\u041c\u043e\u0438 \u0434\u0430\u043d\u043d\u044b\u0435",isShowDesc:!1}),s.a.createElement(z,null))},R=(a(46),Object(p.f)((function(e){var t=e.location.pathname,a="app-container";return"/sing-in"!==t&&"/sing-up"!==t||(a+=" app-container--center"),s.a.createElement("div",{className:a},e.children)}))),Z=function(e){return localStorage.getItem("token")?e.children:s.a.createElement(p.a,{to:"/sing-in"})},G=function(e){return localStorage.getItem("token")?s.a.createElement(p.a,{to:"/"}):e.children},H=(a(47),a(48),function(){return s.a.createElement(f.a,{basename:"/e-s-r"},s.a.createElement(R,null,s.a.createElement(p.b,{path:"/sing-in"},(function(e){var t=e.match;return s.a.createElement(_.a,{in:null!=t,timeout:300,classNames:"page",unmountOnExit:!0},s.a.createElement("div",{className:"page"},s.a.createElement(G,null,s.a.createElement(M,null))))})),s.a.createElement(p.b,{path:"/sing-up"},(function(e){var t=e.match;return s.a.createElement(_.a,{in:null!=t,timeout:300,classNames:"page",unmountOnExit:!0},s.a.createElement("div",{className:"page"},s.a.createElement(G,null,s.a.createElement(U,null))))})),s.a.createElement(p.b,{exact:!0,path:"/"},s.a.createElement(Z,null,s.a.createElement(B,null)))))});a(49),a(50),a(51),a(52),a(53),a(54),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=Object(i.a)(c.a),W=Object(i.d)(J),K=Object(i.e)(h,void 0,W);l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(o.a,{store:K},s.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.e71c6a84.chunk.js.map