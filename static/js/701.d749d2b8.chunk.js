"use strict";(self.webpackChunkgoose_track_frontend=self.webpackChunkgoose_track_frontend||[]).push([[701],{5435:function(n,e,t){t.d(e,{h:function(){return g}});var r,i,d,a,c,o,l=t(1087),s=t(168),u=t(6444),f=u.ZP.div(r||(r=(0,s.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  background-color: #565759;\n"]))),x=u.ZP.div(i||(i=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n"]))),h=u.ZP.span(d||(d=(0,s.Z)(["\n  font-size: 32px;\n  margin-right: 10px;\n"]))),p=(0,u.ZP)(h)(a||(a=(0,s.Z)(["\n  font-weight: bold;\n  margin-right: 8px;\n"]))),y=u.ZP.div(c||(c=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n"]))),Z=u.ZP.button(o||(o=(0,s.Z)(["\n  border: unset;\n  cursor: pointer;\n  background-color: #565759;\n  height: 20px;\n  margin-right: 2px;\n  border-radius: 4px;\n  color: #e6e6e6;\n"]))),j=t(3329),g=function(n){var e=n.today,t=n.prevHandler,r=n.nextHandler,i=n.todayHandler,d=n.currentDay;return(0,j.jsxs)(f,{children:[(0,j.jsxs)(x,{children:[(0,j.jsxs)("div",{children:[d&&(0,j.jsx)(h,{children:e.format("D")}),(0,j.jsx)(p,{children:e.format("MMMM")}),(0,j.jsx)(h,{children:e.format("YYYY")})]}),(0,j.jsxs)(y,{children:[(0,j.jsx)(Z,{type:"button",onClick:t,children:"<"}),(0,j.jsx)(Z,{type:"button",onClick:i,children:"Today"}),(0,j.jsx)(Z,{type:"button",onClick:r,children:">"})]})]}),(0,j.jsxs)(y,{children:[(0,j.jsx)(l.OL,{to:"calendar",children:"Month/"}),(0,j.jsx)(l.OL,{to:"day",children:"Day"})]})]})}},7701:function(n,e,t){t.r(e),t.d(e,{CurrentDayPage:function(){return D}});var r,i,d,a,c,o,l,s=t(3433),u=t(9439),f=t(2426),x=t.n(f),h=t(2791),p=t(5435),y=t(168),Z=t(6444),j=Z.ZP.div(r||(r=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),g=Z.ZP.div(i||(i=(0,y.Z)(["\n  /* background-color: ","; */\n  color: black;\n  ","\n"])),(function(n){return n.isWeekend?"#272829":"#1e1f21"}),(function(n){return n.isHeader&&"text-align:center"})),m=Z.ZP.div(d||(d=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: red;\n  border-radius: 50%;\n\n  width: 100%;\n  height: 100%;\n"]))),b=Z.ZP.div(a||(a=(0,y.Z)(["\n  display: flex;\n  /* align-items: center; */\n  justify-content: space-between;\n"]))),v=Z.ZP.div(c||(c=(0,y.Z)(["\n  display: flex;\n  /* align-items: center; */\n  justify-content: space-between;\n"]))),k=Z.ZP.div(o||(o=(0,y.Z)(["\n  :not(:last-child) {\n    margin-right: 20px;\n  }\n"]))),P=Z.ZP.div(l||(l=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  /* align-items: center; */\n  justify-content: space-between;\n"]))),w=t(3329),D=function(){x().updateLocale("en",{day:{dow:1}});var n=(0,h.useState)(x()()),e=(0,u.Z)(n,2),t=e[0],r=e[1],i=(0,h.useState)(x()()),d=(0,u.Z)(i,2),a=d[0],c=d[1],o=t.clone().startOf("isoWeek"),l=o.clone().subtract(1,"day"),f=(0,s.Z)(Array(7)).map((function(){return l.add(1,"day").clone()})),y=function(n){return a.isSame(n,"day")};return(0,w.jsx)("main",{children:(0,w.jsxs)(j,{children:[(0,w.jsx)(p.h,{prevHandler:function(){var n=t.clone().subtract(1,"day");n.isBefore(o)?(c(o),r(o)):(c(n),r(n))},nextHandler:function(){var n=t.clone().add(1,"day");n.isAfter(o.clone().add(6,"day"))?(c(o.clone().add(6,"day")),r(o.clone().add(6,"day"))):(r(n),c(n))},todayHandler:function(){c(x()()),r(x()())},today:t,currentDay:!0}),(0,w.jsxs)(P,{children:[(0,w.jsx)(b,{children:f.map((function(n,e){return(0,w.jsx)(k,{children:n.format("ddd").toUpperCase()},e)}))}),(0,w.jsx)(v,{children:f.map((function(n){return(0,w.jsx)("div",{children:(0,w.jsx)(g,{children:y(n)?(0,w.jsx)(m,{children:n.format("D")}):n.format("D")})},n.format("DDMMYY"))}))})]})]})})}}}]);
//# sourceMappingURL=701.d749d2b8.chunk.js.map