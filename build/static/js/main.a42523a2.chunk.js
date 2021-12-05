(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{49:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s(25),c=s.n(a),o=s(10),r=s(11),l=s(13),i=s(12),j=(s(16),s(4)),d=s(2),b=s(0),u=function(e){Object(l.a)(s,e);var t=Object(i.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{class:"row justify-content-md-center mt-3 mb-3",children:Object(b.jsx)("div",{class:"col",children:Object(b.jsxs)("div",{class:"page-header",children:[Object(b.jsxs)("h1",{children:["Welcome to ",Object(b.jsx)("small",{class:"text-muted",children:"AutoGo"})]}),Object(b.jsx)("p",{class:"lead",children:"Make meetings happen, generate client bookings, and manage your schedule \u2014 all with Doodle Premium."})]})})})})}}]),s}(n.Component),O=s(3),p=s(7),h=s.n(p);function m(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),s=t[0],a=t[1],c=Object(n.useState)(""),o=Object(O.a)(c,2),r=o[0],l=o[1],i=Object(n.useState)("Not authorized"),j=Object(O.a)(i,2),u=j[0],p=j[1],m=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_DOMAIN||"localhost",x=Object(d.f)();return Object(b.jsxs)("div",{class:"row align-items-center",children:[Object(b.jsx)("div",{class:"col",children:Object(b.jsxs)("form",{class:"form-horizontal",children:[Object(b.jsxs)("div",{class:"form-floating mb-3",children:[Object(b.jsx)("input",{onChange:function(e){a(e.target.value)},name:"inputUserName",type:"text",class:"form-control",id:"inputUserNameStaff",placeholder:"User name",required:!0}),Object(b.jsx)("label",{for:"inputUserName",class:"form-label",children:"User Name"})]}),Object(b.jsxs)("div",{class:"form-floating mb-3",children:[Object(b.jsx)("input",{onChange:function(e){l(e.target.value)},name:"inputPassword",type:"password",class:"form-control",id:"inputPasswordStaff",placeholder:"Password",required:!0}),Object(b.jsx)("label",{for:"inputPassword",class:"form-label",children:"Password"})]}),Object(b.jsx)("div",{class:"position-relative",children:Object(b.jsx)("div",{class:"position-absolute top-0 end-0",children:Object(b.jsx)("button",{onClick:function(){""!==s&&""!==r&&h.a.post("http://".concat(m,":8081/api/staff_login"),{loginType:"staff",usr:s,pwd:r}).then((function(e){p(e.data),""!==s&&""!==e.data?(localStorage.setItem("currentUser",s),localStorage.setItem("password",r),x("/staff-home"),window.location.reload()):alert(u)}))},id:"staff-login-btn",class:"btn btn-dark",type:"button",children:"Log In As Staff"})})})]})}),Object(b.jsx)("div",{class:"col",children:Object(b.jsxs)("form",{class:"form-horizontal",children:[Object(b.jsxs)("div",{class:"form-floating mb-3",children:[Object(b.jsx)("input",{onChange:function(e){a(e.target.value)},name:"inputUserName",type:"text",class:"form-control",id:"inputUserNameGuest",placeholder:"User name",required:!0}),Object(b.jsx)("label",{for:"inputUserName",class:"form-label",children:"User Name"})]}),Object(b.jsxs)("div",{class:"form-floating mb-3",children:[Object(b.jsx)("input",{onChange:function(e){l(e.target.value)},name:"inputPassword",type:"password",class:"form-control",id:"inputPasswordGuest",placeholder:"Password",required:!0}),Object(b.jsx)("label",{for:"inputPassword",class:"form-label",children:"Password"})]}),Object(b.jsx)("div",{class:"position-relative",children:Object(b.jsx)("div",{class:"position-absolute top-0 end-0",children:Object(b.jsx)("button",{onClick:function(){""!==s&&""!==r&&h.a.post("http://".concat(m,":8081/api/guest_login"),{loginType:"guest",usr:s,pwd:r}).then((function(e){p(e.data),""!==s&&"guest-ok"===e.data?(localStorage.setItem("currentUser",s),localStorage.setItem("password",r),x("/guest-home"),window.location.reload()):alert(u)}))},id:"guest-login-btn",class:"btn btn-dark",type:"button",children:"Log In As Guest"})})})]})})]})}function x(){var e={backgroundColor:"black",color:"white",textDecoration:"none",padding:"10px",borderRadius:"10px"},t={margin:"20px"};return Object(b.jsxs)("div",{children:["Guest Home page",Object(b.jsx)("br",{}),Object(b.jsx)("div",{style:t,children:Object(b.jsx)("a",{href:"/guest-view-appointment",style:e,children:"view my appointments"})}),Object(b.jsx)("div",{style:t,children:Object(b.jsx)("a",{href:"",style:e,children:"book a appointment"})}),Object(b.jsx)("div",{style:t,children:Object(b.jsx)("a",{href:"",style:e,children:"my profile"})})]})}function f(){var e={backgroundColor:"black",color:"white",textDecoration:"none",padding:"10px",borderRadius:"10px"},t={margin:"20px"};return Object(b.jsxs)("div",{children:["StaffHome page",Object(b.jsx)("br",{}),Object(b.jsx)("div",{style:t,children:Object(b.jsx)("a",{href:"/staff-view-appointment",style:e,children:"view my appointments"})}),Object(b.jsx)("div",{style:t,children:Object(b.jsx)("a",{href:"",style:e,children:"my profile"})})]})}function g(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),s=t[0],a=t[1],c=Object(n.useState)(""),o=Object(O.a)(c,2),r=o[0],l=o[1],i=Object(n.useState)(""),j=Object(O.a)(i,2),u=j[0],p=j[1],m=Object(n.useState)(""),x=Object(O.a)(m,2),f=x[0],g=x[1],v=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_DOMAIN||"localhost",S=Object(d.f)();return Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{class:"mb-3",children:[Object(b.jsx)("label",{for:"username",class:"form-label",children:"Username"}),Object(b.jsx)("input",{onChange:function(e){a(e.target.value)},class:"form-control",id:"username",required:!0})]}),Object(b.jsxs)("div",{class:"mb-3",children:[Object(b.jsx)("label",{for:"password",class:"form-label",children:"Password"}),Object(b.jsx)("input",{onChange:function(e){l(e.target.value)},type:"password",class:"form-control",id:"password",required:!0})]}),Object(b.jsxs)("div",{class:"mb-3",children:[Object(b.jsx)("label",{for:"position",class:"form-label",children:"Position (optional)"}),Object(b.jsx)("input",{onChange:function(e){p(e.target.value)},class:"form-control",id:"position",placeholder:"E.g. manager"})]}),Object(b.jsxs)("div",{class:"mb-3",children:[Object(b.jsx)("label",{for:"branchNo",class:"form-label",children:"Branch Number"}),Object(b.jsx)("input",{onChange:function(e){g(e.target.value)},class:"form-control",id:"branchNo",required:!0})]}),Object(b.jsx)("button",{onClick:function(){""!==s&&""!==r&&""!==f&&(console.log("staff-signup usr "+s),console.log("staff-signup pws "+r),h.a.post("http://".concat(v,":8081/api/staff_signup"),{signupType:"staff",username:s,password:r,position:u,branchNo:f}).then((function(e){console.log("Inside"),console.log(e),localStorage.setItem("currentUser",s),S("/login"),window.location.reload()})))},type:"button",class:"btn btn-primary",children:"Signup As Staff"})]})}function v(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),s=t[0],a=t[1],c=Object(n.useState)(""),o=Object(O.a)(c,2),r=o[0],l=o[1],i=Object(n.useState)(""),j=Object(O.a)(i,2),u=j[0],p=j[1],m=Object(n.useState)(""),x=Object(O.a)(m,2),f=x[0],g=x[1],v=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_DOMAIN||"localhost",S=Object(d.f)();return Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{class:"mb-3",children:[Object(b.jsx)("label",{for:"username",class:"form-label",children:"Username"}),Object(b.jsx)("input",{onChange:function(e){a(e.target.value)},class:"form-control",id:"username",required:!0})]}),Object(b.jsxs)("div",{class:"mb-3",children:[Object(b.jsx)("label",{for:"password",class:"form-label",children:"Password"}),Object(b.jsx)("input",{onChange:function(e){l(e.target.value)},type:"password",class:"form-control",id:"password",required:!0})]}),Object(b.jsxs)("div",{class:"mb-3",children:[Object(b.jsx)("label",{for:"address",class:"form-label",children:"Address (optional)"}),Object(b.jsx)("input",{onChange:function(e){p(e.target.value)},class:"form-control",id:"address"})]}),Object(b.jsxs)("div",{class:"mb-3",children:[Object(b.jsx)("label",{for:"phone",class:"form-label",children:"Phone"}),Object(b.jsx)("input",{onChange:function(e){g(e.target.value)},class:"form-control",id:"phone",required:!0})]}),Object(b.jsx)("button",{onClick:function(){""!==s&&""!==r&&""!==f&&(console.log("guest-signup usr "+s),console.log("guest-signup pws "+r),h.a.post("http://".concat(v,":8081/api/guest_signup"),{signupType:"guest",username:s,password:r,address:u,phone:f}).then((function(e){console.log(e),localStorage.setItem("currentUser",s),S("/login"),window.location.reload()})))},type:"button",class:"btn btn-primary",children:"Signup As Guest"})]})}function S(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_DOMAIN||"localhost",t=Object(n.useState)([]),s=Object(O.a)(t,2),a=s[0],c=s[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Guest View Appointment Page"}),Object(b.jsxs)("div",{style:{margin:"20px"},children:[Object(b.jsx)("a",{href:"/guest-home",style:{backgroundColor:"black",color:"white",textDecoration:"none",padding:"10px",borderRadius:"10px"},children:"Back to Guest Home Page"}),Object(b.jsx)("br",{})]}),Object(b.jsx)("button",{onClick:function(){console.log(localStorage.currentUser),console.log(localStorage.password),h.a.post("http://".concat(e,":8081/api/guest_view_appointment"),{userName:localStorage.currentUser,password:localStorage.password}).then((function(e){console.log(e.data),c(e.data)}))},children:"Show Appointments"}),a.map((function(e){return console.log(e),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{value:e.appointmentNo,readOnly:!0}),Object(b.jsx)("input",{value:e.serviceType,readOnly:!0}),Object(b.jsx)("input",{value:e.serviceDescription,readOnly:!0}),Object(b.jsx)("input",{value:e.date|DataView,readOnly:!0}),Object(b.jsx)("input",{value:e.location,readOnly:!0})]})}))]})}function w(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_DOMAIN||"localhost",t=Object(n.useState)([]),s=Object(O.a)(t,2),a=s[0],c=s[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Staff View Appointment Page"}),Object(b.jsxs)("div",{style:{margin:"20px"},children:[Object(b.jsx)("a",{href:"/staff-home",style:{backgroundColor:"black",color:"white",textDecoration:"none",padding:"10px",borderRadius:"10px"},children:"Back to Staff Home Page"}),Object(b.jsx)("br",{})]}),Object(b.jsx)("button",{onClick:function(){console.log(localStorage.currentUser),h.a.post("http://".concat(e,":8081/api/staff_view_appointment"),{userName:localStorage.currentUser,password:localStorage.password}).then((function(e){c(e.data)}))},children:"Show Appointments"}),a.map((function(e){return console.log(e),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{value:"AppointmentNo",readOnly:!0}),Object(b.jsx)("input",{value:"Service Type",readOnly:!0}),Object(b.jsx)("input",{value:"Service Description",readOnly:!0}),Object(b.jsx)("input",{value:"Date",readOnly:!0}),Object(b.jsx)("input",{value:"License Plate",readOnly:!0}),Object(b.jsx)("input",{value:e.appointmentNo,readOnly:!0}),Object(b.jsx)("input",{value:e.serviceType,readOnly:!0}),Object(b.jsx)("input",{value:e.serviceDescription,readOnly:!0}),Object(b.jsx)("input",{value:e.date,readOnly:!0}),Object(b.jsx)("input",{value:e.date|DataView,readOnly:!0}),Object(b.jsx)("input",{value:e.licensePlate,readOnly:!0})]})}))]})}var y=function(e){Object(l.a)(s,e);var t=Object(i.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(j.b,{to:"/",className:"navbar-brand",children:"AutoGo"}),Object(b.jsxs)("div",{className:"navbar-nav ms-auto",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(j.b,{to:"/login",className:"nav-link",children:"Login"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(j.b,{to:"/staff-signup",className:"nav-link",children:"Staff Signup"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(j.b,{to:"/guest-signup",className:"nav-link",children:"Guest Signup"})})]})]})}),Object(b.jsx)("div",{className:"container mt-3",children:Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{path:"/",element:Object(b.jsx)(u,{})}),Object(b.jsx)(d.a,{path:"/login",element:Object(b.jsx)(m,{})}),Object(b.jsx)(d.a,{path:"/staff-signup",element:Object(b.jsx)(g,{})}),Object(b.jsx)(d.a,{path:"/guest-signup",element:Object(b.jsx)(v,{})}),Object(b.jsx)(d.a,{path:"/guest-home",element:Object(b.jsx)(x,{})}),Object(b.jsx)(d.a,{path:"/staff-home",element:Object(b.jsx)(f,{})}),Object(b.jsx)(d.a,{path:"/guest-view-appointment",element:Object(b.jsx)(S,{})}),Object(b.jsx)(d.a,{path:"/staff-view-appointment",element:Object(b.jsx)(w,{})})]})}),Object(b.jsx)("footer",{className:"py-3 my-4"})]})}}]),s}(n.Component),_=y;c.a.render(Object(b.jsx)(j.a,{children:Object(b.jsx)(_,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.a42523a2.chunk.js.map