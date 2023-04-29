"use strict";(self.webpackChunkgoose_track_frontend=self.webpackChunkgoose_track_frontend||[]).push([[913],{4173:function(n,e,t){t.d(e,{u:function(){return x}});var r,o,i,a=t(2791),d=t(4164),c=t(7192),s=t(168),l=t(6444),u=l.ZP.div(r||(r=(0,s.Z)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 20;\n  background-color: ",";\n  overflow-y: auto;\n"])),(function(n){return n.theme.colors.backdropBackground})),p=l.ZP.div(o||(o=(0,s.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  min-width: 360px;\n  max-width: 1200px;\n  max-height: 90%;\n  padding: 40px 28px;\n  border-radius: ",";\n  background-color: ",";\n  box-shadow: ",";\n"])),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.modalBackground}),(function(n){return n.theme.shadows.modal})),h=l.ZP.button(i||(i=(0,s.Z)(["\n  position: absolute;\n  top: 19px;\n  right: 19px;\n  background-color: transparent;\n  color: ",";\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: color 0.25s ease-in-out,\n    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: ",";\n    transform: scale(1.1);\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.blue})),m=t(3329),f=document.querySelector("#modal-root"),x=function(n){var e=n.toggleModal,t=n.children;(0,a.useEffect)((function(){var n=function(n){n instanceof KeyboardEvent&&"Escape"===n.code&&e()};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",n);var e=document.querySelector("#menuContainer");null!==e&&void 0!==e&&e.classList.contains("is-open")?document.body.style.overflow="hidden":document.body.style.overflow=""}}),[e]);return(0,d.createPortal)((0,m.jsx)(u,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,m.jsxs)(p,{children:[t,(0,m.jsx)(h,{type:"button",onClick:e,children:(0,m.jsx)(c.W.CloseIcon,{})})]})}),f)}},5435:function(n,e,t){t.d(e,{h:function(){return L}});var r,o,i,a,d,c,s,l,u,p,h,m,f,x=t(9230),g=(t(4289),t(168)),b=t(6444),y=t(1087),Z=b.ZP.div(r||(r=(0,g.Z)(["\n  padding-top: 16px;\n  padding-bottom: 16px;\n  padding-left: 20px;\n  padding-right: 20px;\n  width: 100%;\n\n  @media screen and (min-width: 768px) {\n    display: flex;\n    justify-content: space-between;\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n"]))),w=b.ZP.div(o||(o=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n\n  @media screen and (max-width: 767px) {\n    justify-content: space-between;\n  }\n\n  @media screen and (min-width: 768px) {\n    gap: 8px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    gap: 16px;\n  }\n"]))),v=b.ZP.div(i||(i=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n\n  color: ",";\n  padding: 8px 12px;\n  border-radius: 8px;\n  height: 100%;\n  min-width: 155px;\n\n  @media screen and (min-width: 768px) {\n    min-width: 173px;\n  }\n"])),(function(n){return n.theme.colors.currentDay}),(function(n){return n.theme.colors.white})),j=b.ZP.span(a||(a=(0,g.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.286;\n\n  text-transform: uppercase;\n\n  color: ",";\n  min-width: 24px;\n\n  &:not(:last-of-type) {\n    margin-right: 10px;\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    line-height: 1.125;\n  }\n"])),(function(n){return n.theme.colors.white3})),k=(0,b.ZP)(j)(d||(d=(0,g.Z)(["\n  font-weight: bold;\n"]))),Y=b.ZP.div(c||(c=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.125;\n\n  @media screen and (max-width: 767px) {\n    margin-top: 16px;\n  }\n"]))),D=b.ZP.div(s||(s=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n"]))),M=b.ZP.button(l||(l=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background-color: transparent;\n  padding: 7px;\n  border: 1px solid rgba(220, 227, 229, 0.5);\n  background-color: ",";\n  color: ",";\n\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n\n  &:disabled {\n    color: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    padding: 8px 16px;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.colors.grey9})),P=b.ZP.button(u||(u=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  cursor: pointer;\n  background-color: transparent;\n  border-radius: 8px;\n  padding: 8px 16px;\n  border: 1px solid rgba(220, 227, 229, 0.5);\n\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 1.1667;\n  background-color: ",";\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    padding: 8px 16px;\n    font-size: 16px;\n    line-height: 1.125;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.grey})),z=(b.ZP.button(p||(p=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background-color: transparent;\n  border-radius: 8px;\n  padding: 8px 16px;\n  border: 1px solid rgba(220, 227, 229, 0.5);\n\n  color: #616161;\n"]))),(0,b.ZP)(y.OL)(h||(h=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  color: ",";\n  padding: 9px 16px;\n  background-color: ",";\n  min-width: 82px;\n  &.active.act {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.navLink}),(function(n){return n.theme.colors.monitorLink}),(function(n){return n.theme.colors.monitorActiveLink}))),W=(0,b.ZP)(z)(m||(m=(0,g.Z)(["\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n"]))),S=(0,b.ZP)(z)(f||(f=(0,g.Z)(["\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n"]))),C=t(7192),H=t(7689),O=t(3329),L=function(n){var e=n.today,t=n.prevHandler,r=n.nextHandler,o=n.todayHandler,i=n.currentDay,a=n.nextDisabled,d=n.prevDisabled,c=(0,x.$G)().t,s=(0,H.TH)().pathname;return e.locale(c("lang")),(0,O.jsxs)(Z,{children:[(0,O.jsxs)(w,{children:[(0,O.jsxs)(v,{children:[i&&(0,O.jsx)(j,{children:e.format("D")}),(0,O.jsx)(k,{children:e.format("MMMM")}),(0,O.jsx)(j,{children:e.format("YYYY")})]}),(0,O.jsxs)(D,{children:[(0,O.jsx)(M,{type:"button",onClick:t,disabled:d,style:{transform:"rotate(180deg)"},children:(0,O.jsx)(C.W.Chevron,{})}),(0,O.jsx)(M,{type:"button",onClick:r,disabled:a,children:(0,O.jsx)(C.W.Chevron,{})})]}),(0,O.jsx)(P,{type:"button",onClick:o,children:c("Today")})]}),(0,O.jsxs)(Y,{children:[(0,O.jsx)(W,{className:s.includes("day")?"":"act",to:"/user/calendar",children:c("Month")}),(0,O.jsx)(S,{className:s.includes("day")?"act":"",to:"/user/calendar/day/".concat(e.format("YYYY-MM-DD")),children:c("Day")})]})]})}},9896:function(n,e,t){t.r(e),t.d(e,{CurrentDayPage:function(){return ce}});var r,o,i,a,d,c,s,l,u,p,h,m,f,x,g,b,y,Z,w,v,j,k,Y,D,M,P,z,W,S,C,H,O,L,B,I,A,E=t(3433),F=t(9439),_=t(2426),q=t.n(_),T=(t(4289),t(2791)),U=t(7689),R=t(5435),G=t(168),N=t(6444),$=N.ZP.div(r||(r=(0,G.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),K=N.ZP.div(o||(o=(0,G.Z)(["\n  padding-top: 16px;\n  padding-bottom: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  width: 100%;\n\n  @media screen and (min-width: 768px) {\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n"]))),J=N.ZP.div(i||(i=(0,G.Z)(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: black;\n  ","\n  width: 27px;\n  height: 26px;\n\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.125;\n  color: ",";\n"])),(function(n){return n.isHeader&&"text-align:center"}),(function(n){return n.theme.colors.black})),Q=N.ZP.div(a||(a=(0,G.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n  color: ",";\n  border-radius: ",";\n\n  width: 100%;\n  height: 100%;\n"])),(function(n){return n.theme.colors.currentDay}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.normal})),V=N.ZP.ul(d||(d=(0,G.Z)(["\n  list-style: none;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 14px 18px;\n  border: 1px solid rgba(220, 227, 229, 0.8);\n  border-radius: 8px;\n\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.286;\n\n  background-color: ",";\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    padding: 10px 46px;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.grey3})),X=N.ZP.li(c||(c=(0,G.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n\n  :nth-last-child(1) > span,\n  :nth-last-child(2) > span {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.blue})),nn=function(){var n=(0,T.useState)(!1),e=(0,F.Z)(n,2),t=e[0],r=e[1];return{isOpenModal:t,toggleModal:function(){r(!t)}}},en=t(9230),tn=t(7192),rn=N.ZP.button(s||(s=(0,G.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 52px;\n  gap: 8px;\n  margin-top: auto;\n\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n\n  text-align: center;\n\n  color: ",";\n\n  background-color: ",";\n  border: ",";\n  border-radius: ",";\n\n  cursor: pointer;\n"])),(function(n){return n.theme.fontFamily.main}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.lineHeights.xl}),(function(n){return n.theme.colors.black2}),(function(n){return n.theme.colors.blue3}),(function(n){return n.theme.borders.addButton}),(function(n){return n.theme.radii.normal})),on=t(3329),an=function(n){var e=n.onClick,t=(0,en.$G)().t;return(0,on.jsxs)(rn,{type:"button",onClick:e,children:[(0,on.jsx)(tn.W.AddIcon,{}),t("Add task")]})},dn=N.ZP.p(l||(l=(0,G.Z)(["\n  margin: 7px 0px 28px 0px;\n  font-size: ",";\n  line-height: ",";\n  font-family: ",";\n  font-weight: ",";\n  color: ",";\n  &:first-letter {\n    text-transform: uppercase;\n  }\n"])),(function(n){return n.theme.fontSizes.xl}),(function(n){return n.theme.lineHeights.m}),(function(n){return n.theme.fontFamily.main}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.columnHeader})),cn=function(n){var e=n.name;return(0,on.jsx)(dn,{children:e})},sn=t(4371),ln=N.ZP.article(u||(u=(0,G.Z)(["\n  width: 100%;\n\n  padding-top: 14px;\n  padding-bottom: 18px;\n  padding-left: 14px;\n  padding-right: 14px;\n\n  background-color: ",";\n\n  border: ",";\n  border-radius: ",";\n"])),(function(n){return n.theme.colors.taskCardBackground}),(function(n){return n.theme.borders.tasks}),(function(n){return n.theme.radii.normal})),un=N.ZP.h3(p||(p=(0,G.Z)(["\n  margin-bottom: 28px;\n\n  font-style: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 32px;\n  }\n"])),(function(n){return n.theme.fontFamily.main}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.lineHeights.l}),(function(n){return n.theme.colors.columnHeader})),pn=N.ZP.div(h||(h=(0,G.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: end;\n\n  gap: ","px;\n"])),(function(n){return n.theme.space[3]})),hn=N.ZP.div(m||(m=(0,G.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: ","px;\n  height: ","px;\n\n  overflow: hidden;\n\n  border: ",";\n  border-radius: ",";\n\n  background-color: ",";\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.borders.avatar}),(function(n){return n.theme.radii.round}),(function(n){return n.theme.colors.white})),mn=N.ZP.div(f||(f=(0,G.Z)(["\n  padding-top: ","px;\n  padding-bottom: ","px;\n  padding-left: 12px;\n  padding-right: 12px;\n\n  font-style: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n\n  color: ",";\n  background-color: ",";\n\n  border-radius: ",";\n"])),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.fontFamily.main}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.lineHeights.l}),(function(n){return n.theme.colors.white2}),(function(n){switch(n.name){case"low":return n.theme.colors.blue5;case"medium":return n.theme.colors.yellow;case"high":return n.theme.colors.pink;default:return n.theme.colors.grey4}}),(function(n){return n.theme.radii.small})),fn=t(1807),xn=t(4911),gn=t(1413),bn=t(4173),yn=t(1134),Zn=t(9085),wn=N.ZP.form(x||(x=(0,G.Z)(["\n  width: 303px;\n  padding-top: 8px;\n\n  font-family: ",";\n\n  @media screen and (min-width: 768px) {\n    width: 396px;\n    padding-top: 0px;\n  }\n"])),(function(n){return n.theme.fontFamily.main})),vn=N.ZP.span(g||(g=(0,G.Z)(["\n  display: block;\n  width: 100%;\n"]))),jn=N.ZP.span(b||(b=(0,G.Z)(["\n  display: block;\n  margin-bottom: ","px;\n  color: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fontSizes.xs})),kn=N.ZP.input(y||(y=(0,G.Z)(["\n  display: block;\n  width: 100%;\n\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-left: 14px;\n  padding-right: 14px;\n\n  margin-bottom: ","px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: ","px;\n  }\n\n  font-family: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n\n  color: ",";\n  background-color: ",";\n  outline: ",";\n\n  border: none;\n  border-radius: ",";\n\n  &::placeholder {\n    font-size: ",";\n    font-weight: ",";\n    line-height: ",";\n\n    color: ",";\n    background-color: ",";\n  }\n\n  &::-webkit-calendar-picker-indicator {\n    display: none;\n  }\n"])),(function(n){return"time"===n.type?n.theme.space[0]:n.theme.space[4]}),(function(n){return"time"===n.type?n.theme.space[0]:18}),(function(n){return n.theme.fontFamily.main}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.lineHeights.xl}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.colors.grey8}),(function(n){return n.theme.borders.modalInput}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.lineHeights.xl}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.colors.grey8})),Yn=N.ZP.div(Z||(Z=(0,G.Z)(["\n  display: flex;\n  gap: 15px;\n\n  width: 100%;\n\n  margin-bottom: 18px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 28px;\n  }\n"]))),Dn=N.ZP.ul(w||(w=(0,G.Z)(["\n  display: flex;\n  gap: 15px;\n  align-items: center;\n\n  width: 100%;\n\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[5]})),Mn=N.ZP.li(v||(v=(0,G.Z)(["\n  list-style: none;\n"]))),Pn=N.ZP.input(j||(j=(0,G.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n"]))),zn=N.ZP.span(k||(k=(0,G.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: start;\n\n  color: ",";\n\n  svg {\n    width: 12px;\n    height: 12px;\n  }\n\n  border-radius: ",";\n"])),(function(n){switch(n.name){case"low":return n.theme.colors.blue5;case"medium":return n.theme.colors.yellow;case"high":return n.theme.colors.pink;default:return n.theme.colors.grey4}}),(function(n){return n.theme.radii.round})),Wn=N.ZP.label(Y||(Y=(0,G.Z)(["\n  display: flex;\n  gap: 6px;\n  align-items: center;\n\n  font-family: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  text-transform: capitalize;\n\n  color: ",";\n"])),(function(n){return n.theme.fontFamily.main}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.lineHeights.s}),(function(n){return n.theme.colors.grey})),Sn=N.ZP.div(D||(D=(0,G.Z)(["\n  display: flex;\n  gap: 14px;\n  width: 100%;\n"]))),Cn=t(4925),Hn=N.ZP.button(M||(M=(0,G.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n\n  padding: 12px;\n\n  width: 100%;\n\n  text-transform: capitalize;\n  font-family: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n\n  color: ",";\n  background-color: ",";\n\n  border-radius: ",";\n  border: none;\n  outline: none;\n\n  cursor: pointer;\n\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    color: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    padding: 15px;\n  }\n"])),(function(n){return n.theme.fontFamily.main}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.lineHeights.xl}),(function(n){return"button"===n.type?n.theme.colors.black1:n.theme.colors.white3}),(function(n){return"button"===n.type?n.theme.colors.grey2:n.theme.colors.blue}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.hoverYellow}),(function(n){return n.theme.colors.blue})),On=["children"],Ln=function(n){var e=n.children,t=(0,Cn.Z)(n,On);return(0,on.jsx)(Hn,{type:t.type,onClick:t.onClick,children:e})},Bn=["todo","inprogress","done"],In=["low","medium","high"],An=q()(Date.now()).format("HH:mm"),En=function(n){var e,t,r,o,i,a=n.fieldsData,d=n.toggleModal,c=a.title?"edit":"add",s=localStorage.getItem("i18nextLng"),l=q()((i=30,+Date.now()+60*i*1e3)).format("HH:mm"),u=(0,U.UO)().current,p=(0,T.useState)(null!==(e=null===a||void 0===a?void 0:a.title)&&void 0!==e?e:""),h=(0,F.Z)(p,2),m=h[0],f=h[1],x=(0,T.useState)(null!==(t=null===a||void 0===a?void 0:a.start)&&void 0!==t?t:An),g=(0,F.Z)(x,2),b=g[0],y=g[1],Z=(0,T.useState)(null!==(r=null===a||void 0===a?void 0:a.end)&&void 0!==r?r:l),w=(0,F.Z)(Z,2),v=w[0],j=w[1],k=(0,T.useState)(null!==(o=null===a||void 0===a?void 0:a.priority)&&void 0!==o?o:""),Y=(0,F.Z)(k,2),D=Y[0],M=Y[1],P=(0,xn.I6)(),z=(0,F.Z)(P,2),W=z[0],S=z[1].isLoading,C=(0,xn._n)(),H=(0,F.Z)(C,2),O=H[0],L=H[1].isLoading,B=(0,yn.cI)(),I=B.register,A=B.handleSubmit,E=function(n){switch(console.log("e.target.name :>> ",n.target.name),n.target.name){case"title":f(n.target.value);break;case"start":y(n.target.value);break;case"end":j(n.target.value)}};return(0,on.jsxs)(wn,{onSubmit:A((function(n,e){var t=b<=v;if(!(b>=An)&&"add"===c)return Zn.Am.error("Start time can't be in past!"),void y(An);if(!t&&"add"===c)return Zn.Am.error("End time can't be lower of start time!"),void j(An);if("edit"===c)O((0,gn.Z)((0,gn.Z)({},a),n)),d();else{var r=(0,gn.Z)((0,gn.Z)({},n),{},{status:a.status,date:u});W({data:r,lang:s}),d()}}),(function(n,e){Object.keys(n).forEach((function(e){var t;Zn.Am.error("Field ".concat(e," ").concat(null===(t=n[e])||void 0===t?void 0:t.message))}))})),children:[(0,on.jsxs)(vn,{children:[(0,on.jsx)(jn,{children:"Title"}),(0,on.jsx)(kn,(0,gn.Z)((0,gn.Z)({type:"text",placeholder:"Enter text"},I("title",{required:" is requared!",maxLength:{value:250,message:"must be lower then 250 chars!"}})),{},{name:"title",value:m,onInput:E}))]}),(0,on.jsxs)(Yn,{children:[(0,on.jsxs)(vn,{children:[(0,on.jsx)(jn,{children:"Start"}),(0,on.jsx)(kn,(0,gn.Z)((0,gn.Z)({type:"time"},I("start",{required:"is requared!"})),{},{value:b,onInput:E}))]}),(0,on.jsxs)(vn,{children:[(0,on.jsx)(jn,{children:"End"}),(0,on.jsx)(kn,(0,gn.Z)((0,gn.Z)({},I("end",{required:"is requared!"})),{},{type:"time",value:v,onInput:E}))]})]}),(0,on.jsx)(Dn,{children:In.map((function(n,e){var t=In[e]===In[0],r=D?In[e].includes(D):t;return(0,on.jsx)(Mn,{children:(0,on.jsxs)(Wn,{children:[(0,on.jsx)(Pn,(0,gn.Z)((0,gn.Z)({},I("priority",{validate:{priority:function(n){return In.includes(n)||"is not valid"}}})),{},{type:"radio",value:n,defaultChecked:r,onChange:function(n){return M(n.target.value)}})),(0,on.jsx)(zn,{name:n,children:r?(0,on.jsx)(tn.W.RadioButtonActive,{}):(0,on.jsx)(tn.W.RadioButton,{})}),n]})},n)}))}),(0,on.jsxs)(Sn,{children:[(0,on.jsxs)(Ln,{type:"submit",disabled:S||L,children:["add"===c?(0,on.jsx)(tn.W.AddIcon,{width:"18px",height:"18px"}):(0,on.jsx)(tn.W.EditIcon,{}),c]}),"add"===c&&(0,on.jsx)(Ln,{type:"button",onClick:d,children:"Cancel"})]})]})},Fn=function(n){var e=n.status,t=n.data,r=n.toggleModal,o=(0,gn.Z)((0,gn.Z)({},t),{},{status:e});return(0,on.jsx)(bn.u,{toggleModal:r,children:(0,on.jsx)(En,{fieldsData:o,toggleModal:r})})},_n=(t(7366),t(7467)),qn=N.ZP.button(P||(P=(0,G.Z)(["\n  display: flex;\n  align-items: end;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n\n  border: none;\n  outline: none;\n  background-color: transparent;\n\n  cursor: pointer;\n\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n\n  &:disabled {\n    cursor: default;\n  }\n"])),(function(n){return n.theme.colors.blue})),Tn=(0,N.ZP)(_n.Z)(z||(z=(0,G.Z)(["\n  &-content {\n  }\n"]))),Un=N.ZP.ul(W||(W=(0,G.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 14px;\n\n  padding-top: 12px;\n  padding-bottom: 14px;\n  padding-left: 14px;\n  padding-right: 14px;\n\n  @media screen and (min-width: 768px) {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n"]))),Rn=N.ZP.li(S||(S=(0,G.Z)(["\n  list-style: none;\n  width: 100%;\n"]))),Gn=N.ZP.button(C||(C=(0,G.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0;\n  margin: 0;\n\n  border: none;\n  outline: none;\n  background-color: transparent;\n\n  font-style: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n\n  color: ",";\n\n  cursor: pointer;\n\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    color: ",";\n  }\n\n  &:disabled {\n    cursor: default;\n  }\n\n  @media screen and (min-width: 768px) {\n    font-style: ",";\n    font-size: ",";\n    font-weight: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.theme.fontFamily.main}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.lineHeights.m}),(function(n){return n.theme.colors.popup}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.fontFamily.main}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.lineHeights.l})),Nn=t(348),$n=function(n){var e=n.taskData,t=(0,xn._n)(),r=(0,F.Z)(t,1)[0],o=(0,Nn.a)("screen and (min-width: 768px)");return(0,on.jsx)(Tn,{trigger:(0,on.jsx)(qn,{children:(0,on.jsx)(tn.W.ArrowCircle,{})}),position:"top center",arrow:!1,offsetY:o?14:27,lockScroll:!0,closeOnDocumentClick:!0,closeOnEscape:!0,contentStyle:{width:o?"147px":"115px",height:o?"90px":"70px",padding:0,borderRadius:"8px",boxShadow:"0px 4px 16px rgba(17, 17, 17, 0.1)"},children:(0,on.jsx)(Un,{children:Bn.filter((function(n){return n!==e.status})).map((function(n){var t=n;switch(t){case"todo":t="To do";break;case"inprogress":t="In progress";break;case"done":t="Done";break;default:return null}return(0,on.jsx)(Rn,{children:(0,on.jsxs)(Gn,{onClick:function(){return function(n){var t=(0,gn.Z)((0,gn.Z)({},e),{},{status:n});r(t)}(n)},children:[t," ",(0,on.jsx)(tn.W.ArrowCircle,{width:o?"14px":"12px",height:o?"14px":"12px"})]})},n)}))})})},Kn=N.ZP.div(H||(H=(0,G.Z)(["\n  display: flex;\n  align-items: end;\n  gap: 10px;\n"]))),Jn=N.ZP.button(O||(O=(0,G.Z)(["\n  display: flex;\n  align-items: end;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n\n  border: none;\n  outline: none;\n  background-color: transparent;\n\n  cursor: pointer;\n\n  color: ",";\n\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n\n  &:disabled {\n    cursor: default;\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.blue})),Qn=function(n){var e=n.taskData,t=nn(),r=t.isOpenModal,o=t.toggleModal,i=(0,xn.gu)(),a=(0,F.Z)(i,2),d=a[0],c=a[1].isLoading,s=(0,xn._n)(),l=(0,F.Z)(s,1)[0].isLoading;return(0,on.jsxs)(on.Fragment,{children:[(0,on.jsxs)(Kn,{children:[(0,on.jsx)($n,{taskData:e}),(0,on.jsx)(Jn,{type:"button",onClick:o,disabled:c||l,children:(0,on.jsx)(tn.W.EditIcon,{})}),(0,on.jsx)(Jn,{type:"button",onClick:function(){return d(e._id)},disabled:c||l,children:(0,on.jsx)(tn.W.Delete,{})})]}),r&&(0,on.jsx)(Fn,{status:e.status,data:e,toggleModal:o})]})},Vn=function(n){var e=n.taskData,t=(0,sn.a)().user.avatarURL;return(0,on.jsxs)(ln,{children:[(0,on.jsx)(un,{children:(0,on.jsx)(fn.default,{text:e.title,length:30,tooltip:"true"})}),(0,on.jsxs)(pn,{children:[(0,on.jsxs)(pn,{children:[(0,on.jsx)(hn,{children:t?(0,on.jsx)("img",{src:t,alt:"user"}):(0,on.jsx)(tn.W.UserAvatar,{width:"16px",higth:"16px"})}),(0,on.jsx)(mn,{name:e.priority,children:e.priority})]}),(0,on.jsx)(Qn,{taskData:e})]})]})},Xn=t(1495),ne=(0,N.ZP)(Xn.E)(L||(L=(0,G.Z)(["\n  max-height: 290px;\n\n  margin-bottom: 8;\n\n  @media screen and (min-width: 768px) {\n    max-height: 378px;\n    margin-bottom: ","px;\n\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.colors.white})),ee=N.ZP.li(B||(B=(0,G.Z)(["\n  list-style: none;\n  :not(:last-child) {\n    margin-bottom: 14px;\n  }\n\n  @media screen and (min-width: 768px) {\n    :not(:last-child) {\n      margin-bottom: 18px;\n    }\n  }\n"]))),te={theme:"os-theme-dark",visibility:"auto",autoHide:"move",autoHideDelay:700,dragScroll:!0},re=function(n){var e=n.tasks,t=n.status,r=null===e||void 0===e?void 0:e.filter((function(n){return n.status===t}));return(0,on.jsx)(ne,{element:"ul",options:{scrollbars:te},children:null===r||void 0===r?void 0:r.map((function(n){return(0,on.jsx)(ee,{children:(0,on.jsx)(Vn,{taskData:n})},n._id)}))})},oe=N.ZP.li(I||(I=(0,G.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 18px 18px 10px 18px;\n  min-width: 335px;\n  width: 100%;\n  max-height: 432px;\n  list-style: none;\n  overflow-y: auto;\n\n  border: 1px solid rgba(220, 227, 229, 0.8);\n  border-radius: 8px;\n\n  background-color: ",";\n\n  scroll-snap-align: start;\n\n  @media screen and (min-width: 768px) {\n    min-width: 344px;\n    max-height: 568px;\n    padding: 18px 20px 28px 20px;\n  }\n"])),(function(n){return n.theme.colors.white})),ie=function(n){var e=n.name,t=n.tasks,r=n.status,o=nn(),i=o.isOpenModal,a=o.toggleModal,d=e;switch(e){case"todo":e="To do";break;case"inprogress":e="In progress";break;case"done":e="Done";break;default:return null}return(0,on.jsxs)(oe,{children:[(0,on.jsx)(cn,{name:e}),(0,on.jsx)(re,{tasks:t,status:r}),i&&(0,on.jsx)(Fn,{status:d,data:null,toggleModal:a}),(0,on.jsx)(an,{onClick:a})]})},ae=N.ZP.ul(A||(A=(0,G.Z)(["\n  display: flex;\n  list-style: none;\n  width: 100%;\n  gap: 16px;\n  min-height: 100%;\n  margin-top: 16px;\n\n  overflow: hidden;\n  overflow-x: auto;\n\n  scroll-snap-type: x mandatory;\n\n  @media screen and (min-width: 1440px) {\n    gap: 27px;\n  }\n"]))),de=function(n){var e=n.items,t=n.currentDate,r=(0,xn.mN)(null).data,o=null===r||void 0===r?void 0:r.filter((function(n){return n.date===t}));return(0,on.jsx)(ae,{children:e.map((function(n){return(0,on.jsx)(ie,{name:n,tasks:o,status:n},n)}))})},ce=function(){var n=(0,U.UO)().current,e=(0,U.s0)(),t=(0,en.$G)().t;q().updateLocale("en",{day:{dow:1}});var r=(0,T.useState)(q()(n)),o=(0,F.Z)(r,2),i=o[0],a=o[1];i.locale(t("lang"));var d=i.clone().startOf("isoWeek"),c=d.clone().subtract(1,"day"),s=(0,E.Z)(Array(7)).map((function(){return c.add(1,"day").clone()})),l=(0,T.useState)((function(){return!!i.clone().add(1,"day").isAfter(d.clone().add(6,"day"))})),u=(0,F.Z)(l,2),p=u[0],h=u[1],m=(0,T.useState)((function(){return!!i.clone().subtract(1,"day").isBefore(d)})),f=(0,F.Z)(m,2),x=f[0],g=f[1],b=function(n){return i.isSame(n,"day")},y=window.innerWidth<768;return(0,on.jsxs)($,{children:[(0,on.jsx)(R.h,{prevHandler:function(){var n=i.clone().subtract(1,"day");n.clone().format("YYYY-MM-DD")===i.clone().startOf("isoWeek").format("YYYY-MM-DD")&&n.clone().format("YYYY-MM-DD")!==i.clone().endOf("isoWeek").format("YYYY-MM-DD")&&g(!0),n.isBefore(d)?(g(!0),a(d),e("/user/calendar/day/".concat(d.format("YYYY-MM-DD")))):(h(!1),a(n),e("/user/calendar/day/".concat(n.format("YYYY-MM-DD"))))},nextHandler:function(){var n=i.clone().add(1,"day");n.clone().format("YYYY-MM-DD")===i.clone().endOf("isoWeek").format("YYYY-MM-DD")&&n.clone().format("YYYY-MM-DD")!==i.clone().startOf("isoWeek").format("YYYY-MM-DD")?(h(!0),a(d.clone().add(6,"day")),e("/user/calendar/day/".concat(d.clone().add(6,"day").format("YYYY-MM-DD")))):(g(!1),a(n),e("/user/calendar/day/".concat(n.format("YYYY-MM-DD"))))},todayHandler:function(){g(!1),h(!1),a(q()()),e("/user/calendar/day/".concat(q()().format("YYYY-MM-DD")))},today:i,currentDay:!0,nextDisabled:p,prevDisabled:x}),(0,on.jsxs)(K,{children:[(0,on.jsx)(V,{children:s.map((function(n){return(0,on.jsxs)(X,{children:[(0,on.jsx)("span",{children:n.format(y?"dd":"ddd").toUpperCase()}),(0,on.jsx)(J,{onClick:function(){return function(n){n.clone().format("YYYY-MM-DD")===i.clone().startOf("isoWeek").format("YYYY-MM-DD")&&n.clone().format("YYYY-MM-DD")!==i.clone().endOf("isoWeek").format("YYYY-MM-DD")?(g(!0),h(!1)):n.clone().format("YYYY-MM-DD")===i.clone().endOf("isoWeek").format("YYYY-MM-DD")&&n.clone().format("YYYY-MM-DD")!==i.clone().startOf("isoWeek").format("YYYY-MM-DD")?(h(!0),g(!1)):(g(!1),h(!1)),a(q()(n.format("YYYY-MM-DD"))),e("/user/calendar/day/".concat(n.format("YYYY-MM-DD")))}(n)},children:b(n)?(0,on.jsx)(Q,{children:n.format("D")}):n.format("D")})]},n.format("DDMMYY"))}))}),(0,on.jsx)(de,{items:Bn,currentDate:n})]})]})}}}]);
//# sourceMappingURL=913.7bd0cebb.chunk.js.map