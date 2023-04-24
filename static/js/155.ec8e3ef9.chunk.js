"use strict";(self.webpackChunkgoose_track_frontend=self.webpackChunkgoose_track_frontend||[]).push([[155],{6549:function(n,e,t){t.d(e,{E:function(){return a}});var o=t(9439),r=t(1087),a=function(){var n,e,t=(0,r.lr)(),a=(0,o.Z)(t,2),i=a[0],d=a[1];return{lang:null!==(n=i.get("lang"))&&void 0!==n?n:"en",token:null!==(e=i.get("token"))&&void 0!==e?e:"",setSearchParams:d}}},5435:function(n,e,t){t.d(e,{h:function(){return P}});var o,r,a,i,d,l,c,s,u,f,p=t(9230),x=(t(4289),t(168)),h=t(6444),g=t(1087),v=h.ZP.div(o||(o=(0,x.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 32px;\n  /* background-color: #565759; */\n  width: 100%;\n"]))),y=h.ZP.div(r||(r=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n"]))),b=h.ZP.div(a||(a=(0,x.Z)(["\n  background-color: #3e85f3;\n  color: ",";\n  padding: 8px 12px;\n  border-radius: 8px;\n"])),(function(n){return n.theme.colors.white})),m=h.ZP.span(i||(i=(0,x.Z)(["\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 0.9;\n  margin-right: 10px;\n  text-transform: uppercase;\n  color: #ffffff;\n"]))),Z=(0,h.ZP)(m)(d||(d=(0,x.Z)(["\n  font-weight: bold;\n"]))),j=h.ZP.div(l||(l=(0,x.Z)(["\n  margin-left: 20px;\n  display: flex;\n  align-items: center;\n"]))),k=h.ZP.button(c||(c=(0,x.Z)(["\n  cursor: pointer;\n  background-color: transparent;\n  border-radius: 8px;\n  padding: 10px 10px;\n  border: 1px solid rgba(220, 227, 229, 0.5);\n  color: #616161;\n"]))),w=(0,h.ZP)(g.OL)(s||(s=(0,x.Z)(["\n  text-decoration: none;\n  color: #3e85f3;\n  padding: 8px 16px;\n  background-color: #e3f3ff;\n  &.active {\n    background-color: #3e85f350;\n  }\n"]))),D=(0,h.ZP)(w)(u||(u=(0,x.Z)(["\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n"]))),Y=(0,h.ZP)(w)(f||(f=(0,x.Z)(["\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n"]))),M=t(3329),P=function(n){var e=n.today,t=n.prevHandler,o=n.nextHandler,r=n.todayHandler,a=n.currentDay,i=n.nextDisabled,d=n.prevDisabled,l=(0,p.$G)().t;return(0,M.jsxs)(v,{children:[(0,M.jsxs)(y,{children:[(0,M.jsxs)(b,{children:[a&&(0,M.jsx)(m,{children:e.format("D")}),(0,M.jsx)(Z,{children:e.format("MMMM")}),(0,M.jsx)(m,{children:e.format("YYYY")})]}),(0,M.jsxs)(j,{children:[(0,M.jsx)(k,{type:"button",onClick:t,disabled:d,children:"<"}),(0,M.jsx)(k,{type:"button",onClick:r,children:l("Today")}),(0,M.jsx)(k,{type:"button",onClick:o,disabled:i,children:">"})]})]}),(0,M.jsxs)(j,{children:[(0,M.jsx)(D,{to:"/user/calendar",children:l("Month")}),(0,M.jsx)(Y,{to:"/user/day/".concat(e.format("YYYY-MM-DD")),children:l("Day")})]})]})}},6155:function(n,e,t){t.r(e),t.d(e,{CurrentDayPage:function(){return T}});var o,r,a,i,d,l,c,s,u=t(3433),f=t(9439),p=t(2426),x=t.n(p),h=(t(4289),t(2791)),g=t(7689),v=t(9230),y=t(5435),b=t(168),m=t(6444),Z=m.ZP.div(o||(o=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),j=m.ZP.div(r||(r=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: black;\n  ","\n  width: 27px;\n  height: 26px;\n\n  font-weight: 700;\n  color: #343434;\n"])),(function(n){return n.isHeader&&"text-align:center"})),k=m.ZP.div(a||(a=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n  color: ",";\n  border-radius: ",";\n\n  width: 100%;\n  height: 100%;\n"])),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.normal})),w=m.ZP.ul(i||(i=(0,b.Z)(["\n  list-style: none;\n  display: flex;\n\n  justify-content: space-between;\n  width: 100%;\n  border: 1px solid rgba(220, 227, 229, 0.8);\n  border-radius: 8px;\n  padding: 10px 46px;\n\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.286;\n  color: #616161;\n"]))),D=m.ZP.li(d||(d=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n"]))),Y=t(4164),M=t(828),P=m.ZP.div(l||(l=(0,b.Z)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 20;\n  background-color: ",";\n  overflow-y: auto;\n"])),(function(n){return n.theme.colors.backdropBackground})),C=m.ZP.div(c||(c=(0,b.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  max-width: 1200px;\n  max-height: 90%;\n  background-color: ",";\n  border: 1px solid;\n"])),(function(n){return n.theme.colors.modalBackground})),S=m.ZP.button(s||(s=(0,b.Z)(["\n  position: absolute;\n  top: 19px;\n  right: 19px;\n  background-color: transparent;\n  color: ",";\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: 250ms linear;\n\n  :hover {\n    color: red;\n  }\n"])),(function(n){return n.theme.colors.navBcg})),E=t(3329),H=document.querySelector("#modal-root"),L=function(n){var e=n.toggleModal,t=n.children;(0,h.useEffect)((function(){var n=function(n){n instanceof KeyboardEvent&&"Escape"===n.code&&e()};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",n),document.body.style.overflow=""}}),[e]);return(0,Y.createPortal)((0,E.jsx)(P,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,E.jsxs)(C,{children:[t,(0,E.jsx)(S,{type:"button",onClick:e,children:(0,E.jsx)(M.sQZ,{size:"16"})})]})}),H)},B=t(4942),I=t(6549),z=t(6782),A=function(n){var e,t,o,r,a=n.fieldsData,i=(0,I.E)().lang;console.log("lang :>> ",i);var d=(0,h.useState)(null!==(e=null===a||void 0===a?void 0:a.title[i])&&void 0!==e?e:""),l=(0,f.Z)(d,2),c=l[0],s=l[1],u=(0,h.useState)(null!==(t=null===a||void 0===a?void 0:a.start)&&void 0!==t?t:""),p=(0,f.Z)(u,2),x=p[0],g=p[1],v=(0,h.useState)(null!==(o=null===a||void 0===a?void 0:a.end)&&void 0!==o?o:""),y=(0,f.Z)(v,2),b=y[0],m=y[1],Z=(0,h.useState)(null!==(r=null===a||void 0===a?void 0:a.priority)&&void 0!==r?r:""),j=(0,f.Z)(Z,2),k=j[0],w=j[1],D=(0,z.I6)(),Y=(0,f.Z)(D,2),M=Y[0],P=Y[1].isLoading,C=a?"Edit":"Add",S=["low","medium","high"],H=function(n){switch(n.target.name){case"title":s(n.target.value);break;case"start":g(n.target.value);break;case"end":m(n.target.value)}};return console.log("taskIsLoading :>> ",P),(0,E.jsxs)("form",{style:{width:"303px",paddingTop:"48px",paddingBottom:"40px",paddingLeft:"18px",paddingRight:"18px",backgroundColor:"white"},onSubmit:function(n){var e;n.preventDefault();var t=new FormData(n.target),o={title:(0,B.Z)({},i,t.get("title")),start:t.get("start"),end:t.get("end"),priority:t.get("priority"),date:Date.now(),status:null!==(e=null===a||void 0===a?void 0:a.status)&&void 0!==e?e:"todo"};console.log("taskData :>> ",o),M(o)},children:[(0,E.jsxs)("label",{children:["Title",(0,E.jsx)("input",{name:"title",type:"text",value:c,onInput:H})]}),(0,E.jsxs)("label",{children:["Start",(0,E.jsx)("input",{name:"start",id:"start",type:"text",value:x,onInput:H})]}),(0,E.jsxs)("label",{children:["End",(0,E.jsx)("input",{name:"end",id:"end",type:"text",value:b,onInput:H})]}),(0,E.jsx)("div",{children:S.map((function(n,e){var t=S[e]===S[0],o=k?S[e].includes(k):t;return(0,E.jsxs)("label",{children:[(0,E.jsx)("input",{name:"priority",type:"radio",value:n,defaultChecked:o,onChange:function(n){return w(n.target.value)}}),n]},n)}))}),!P&&(0,E.jsx)("button",{type:"submit",children:C})]})},O=function(n){var e=n.data,t=n.closeModal;return console.log("data :>> ",e),(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(L,{toggleModal:t,children:(0,E.jsx)(A,{fieldsData:e})})})},T=function(){var n=(0,g.UO)().current,e=(0,g.s0)(),t=(0,v.$G)().t;x().updateLocale("en",{day:{dow:1}}),x().locale(t("lang"));var o=(0,h.useState)(x()(n)),r=(0,f.Z)(o,2),a=r[0],i=r[1],d=(0,h.useState)(!1),l=(0,f.Z)(d,2),c=l[0],s=l[1],p=a.clone().startOf("isoWeek"),b=p.clone().subtract(1,"day"),m=(0,u.Z)(Array(7)).map((function(){return b.add(1,"day").clone()})),Y=(0,h.useState)((function(){return!!a.clone().add(1,"day").isAfter(p.clone().add(6,"day"))})),M=(0,f.Z)(Y,2),P=M[0],C=M[1],S=(0,h.useState)((function(){return!!a.clone().subtract(1,"day").isBefore(p)})),H=(0,f.Z)(S,2),L=H[0],B=H[1],I=function(n){return a.isSame(n,"day")},z=function(){s(!c)};return(0,E.jsxs)("main",{style:{width:"1151px"},children:[(0,E.jsxs)(Z,{children:[(0,E.jsx)(y.h,{prevHandler:function(){var n=a.clone().subtract(1,"day");n.isBefore(p)?(B(!0),i(p),e("/user/day/".concat(p.format("YYYY-MM-DD")))):(C(!1),i(n),e("/user/day/".concat(n.format("YYYY-MM-DD"))))},nextHandler:function(){var n=a.clone().add(1,"day");n.isAfter(p.clone().add(6,"day"))?(C(!0),i(p.clone().add(6,"day")),e("/user/day/".concat(p.clone().add(6,"day").format("YYYY-MM-DD")))):(B(!1),i(n),e("/user/day/".concat(n.format("YYYY-MM-DD"))))},todayHandler:function(){B(!1),C(!1),i(x()()),e("/user/day/".concat(x()().format("YYYY-MM-DD")))},today:a,currentDay:!0,nextDisabled:P,prevDisabled:L}),(0,E.jsx)(w,{children:m.map((function(n){return(0,E.jsxs)(D,{children:[(0,E.jsx)("span",{children:n.format("ddd").toUpperCase()}),(0,E.jsx)(j,{children:I(n)?(0,E.jsx)(k,{children:n.format("D")}):n.format("D")})]},n.format("DDMMYY"))}))})]}),(0,E.jsx)("button",{type:"button",onClick:z,children:"Open modal"}),c&&(0,E.jsx)(O,{data:null,closeModal:z})]})}}}]);
//# sourceMappingURL=155.ec8e3ef9.chunk.js.map