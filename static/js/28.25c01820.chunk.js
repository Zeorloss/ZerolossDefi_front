(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[28],{1e3:function(t,e,n){"use strict";var c,r,i,o=n(3),s=n.n(o),l=n(10),u=n(5),j=n(8),b=n(60),a=n(9),d=n(0),O=n(2),x=n(6),f=n(38),h=n(13),p=n(240),m=n(1),g=["onValidAddress","onAddressClick"];!function(t){t[t.NOT_VALID=0]="NOT_VALID",t[t.FOUND=1]="FOUND",t[t.NOT_FOUND=2]="NOT_FOUND"}(i||(i={}));var v=x.e.div(c||(c=Object(a.a)(["\n  align-items: center;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 0 0 "," ",";\n  left: 0;\n  padding-bottom: 8px;\n  padding-top: 16px;\n  position: absolute;\n  top: calc(100% - 12px);\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scaleY(0);\n  transform-origin: top;\n  width: 100%;\n  z-index: 15;\n\n  ","\n"])),(function(t){return t.theme.colors.input}),(function(t){return t.theme.colors.inputSecondary}),(function(t){return t.theme.radii.default}),(function(t){return t.theme.radii.default}),(function(t){return t.isOpen&&"\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  "})),C=Object(x.e)(O.Cc)(r||(r=Object(a.a)(["\n  cursor: pointer;\n  overflow-wrap: break-word;\n  font-weight: bold;\n  padding-left: 16px;\n  padding-right: 16px;\n"]))),B={isFetching:!1,resultFound:i.NOT_VALID,value:""},w=function(){return Promise.resolve(!0)};e.a=function(t){var e=t.onValidAddress,n=void 0===e?w:e,c=t.onAddressClick,r=Object(b.a)(t,g),o=Object(d.useState)(B),a=Object(j.a)(o,2),x=a[0],y=a[1],S=Object(h.b)().t,A=x.isFetching,k=x.resultFound,N=x.value;return Object(d.useEffect)((function(){!1!==Object(f.j)(N)?function(){var t=Object(l.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,y((function(t){return Object(u.a)(Object(u.a)({},t),{},{isFetching:!0})})),t.next=4,n(N);case 4:e=t.sent,y((function(t){return Object(u.a)(Object(u.a)({},t),{},{isFetching:!1,resultFound:e?i.FOUND:i.NOT_FOUND})})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),y((function(t){return Object(u.a)(Object(u.a)({},t),{},{isFetching:!1})}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}()():y((function(t){return Object(u.a)(Object(u.a)({},t),{},{resultFound:i.NOT_VALID})}))}),[N,n,y]),Object(m.jsxs)(O.p,Object(u.a)(Object(u.a)({position:"relative"},r),{},{children:[Object(m.jsx)(O.mb,{placeholder:S("Search %subject%",{subject:S("Address").toLowerCase()}),value:x.value,onChange:function(t){var e=t.target.value;y((function(t){return Object(u.a)(Object(u.a)({},t),{},{value:e})}))},style:{position:"relative",zIndex:16,paddingRight:"40px"}}),A&&Object(m.jsx)(O.p,{position:"absolute",top:"12px",right:"16px",style:{zIndex:17},children:Object(m.jsx)(p.a,{})}),Object(m.jsx)(v,{isOpen:k!==i.NOT_VALID,children:k===i.FOUND?Object(m.jsx)(C,{onClick:function(){y(B),c(x.value)},children:x.value}):Object(m.jsx)(O.Cc,{px:"16px",fontWeight:"bold",children:S("No results found.")})})]}))}},1598:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(49),i=n(79),o=n(972),s=n(40),l=n(466),u=n(472),j=n(237),b=n(2),a=n(13),d=n(474),O=n(110),x=n(1),f=function(){var t=Object(a.b)().t;return Object(x.jsx)(b.p,{mb:"24px",children:Object(x.jsxs)(b.q,{children:[Object(x.jsx)(O.a,{to:"/",children:t("Home")}),Object(x.jsx)(O.a,{to:"/prediction",children:t("Prediction")}),Object(x.jsx)(b.Cc,{children:t("Leaderboard")})]})})},h=function(){var t=Object(a.b)().t;return Object(x.jsxs)(d.a,{children:[Object(x.jsx)(f,{}),Object(x.jsx)(b.fb,{as:"h1",scale:"xxl",color:"secondary",children:t("Leaderboard")})]})},p=n(504),m=n(517),g=n(247),v=n(505);var C,B,w,y,S,A,k,N,W,D,L=n(76),F=n(318),R=n(5),z=n(60),T=n(8),E=n(9),I=n(6),P=n(38),V=n(319),q=n(194),U=n(101),_=n(468),H=n(105),M=["children"],Q=["amount","textPrefix","textColor"],Y=function(t){var e=t.children,n=Object(z.a)(t,M);return Object(x.jsx)(b.db,Object(R.a)(Object(R.a)({alignItems:"center",justifyContent:"space-between"},n),{},{children:e}))},G=function(t){var e=t.amount,n=t.textPrefix,c=void 0===n?"":n,r=t.textColor,i=void 0===r?"text":r,o=Object(z.a)(t,Q),s=Object(_.a)(),l=Object(H.d)(s,Math.abs(e));return e?Object(x.jsxs)(b.db,Object(R.a)(Object(R.a)({flexDirection:"column",alignItems:"flex-end"},o),{},{children:[Object(x.jsx)(b.Cc,{fontWeight:"bold",color:i,children:"".concat(c).concat(e.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:6}))}),Object(x.jsx)(b.Cc,{fontSize:"12px",color:"textSubtle",lineHeight:1,children:"~$".concat(l.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))})]})):null},J=function(t){var e=t.amount,n=Object(a.b)().t;return Object(x.jsxs)(Y,{mb:"4px",children:[Object(x.jsx)(b.Cc,{fontSize:"12px",color:"textSubtle",children:n("Net Winnings (BNB)")}),Object(x.jsx)(G,{amount:e,textPrefix:e>0?"+":"",textColor:e>0?"success":"failure"})]})},K=n(3),$=n.n(K),X=n(10),Z=n(470),tt=n.n(Z),et=n(322),nt=n.n(et),ct=I.e.div(C||(C=Object(E.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: 4px;\n  display: inline-flex;\n  justify-content: center;\n  height: 32px;\n  min-width: 16px;\n  padding-left: 8px;\n  padding-right: 8px;\n"])),(function(t){var e=t.theme,n=t.bgColor;return e.colors[n]})),rt=I.e.div(B||(B=Object(E.a)(["\n  color: #fff;\n  display: none;\n  text-transform: uppercase;\n\n  "," {\n    display: block;\n    margin-left: 4px;\n  }\n"])),(function(t){return t.theme.mediaQueries.lg})),it=function(t){var e=t.position,n=Object(a.b)().t,c=e===s.b.BULL,r=c?"success":"failure",i=c?Object(x.jsx)(b.h,{width:"24px",color:"white"}):Object(x.jsx)(b.d,{width:"24px",color:"white"});return Object(x.jsxs)(ct,{bgColor:r,children:[i,Object(x.jsx)(rt,{children:n(c?"Up":"Down")})]})},ot=function(t){var e=t.numberOfBets,n=void 0===e?5:e,r=t.account,i=Object(c.useState)(!1),o=Object(T.a)(i,2),s=o[0],l=o[1],u=Object(c.useState)([]),j=Object(T.a)(u,2),d=j[0],O=j[1],f=Object(a.b)().t,h=nt()(d,["round.epoch"],["desc"]);return Object(c.useEffect)((function(){(function(){var t=Object(X.a)($.a.mark((function t(){var e;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(!0),t.prev=1,t.next=4,Object(L.e)({user:r.toLowerCase()},n);case 4:e=t.sent,O(e.map(L.t));case 6:return t.prev=6,l(!1),t.finish(6);case 9:case"end":return t.stop()}}),t,null,[[1,,6,9]])})));return function(){return t.apply(this,arguments)}})()()}),[r,n,l,O]),Object(x.jsxs)(b.yc,{children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)(b.Ec,{children:f("Round")}),Object(x.jsx)(b.Ec,{children:f("Direction")}),Object(x.jsx)(b.Ec,{textAlign:"right",children:f("Winnings (BNB)")})]})}),Object(x.jsx)("tbody",{children:s?tt()(n).map((function(t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)(b.Ac,{children:Object(x.jsx)(b.hc,{width:"80px"})}),Object(x.jsx)(b.Ac,{children:Object(x.jsx)(b.hc,{width:"60px",height:"32px"})}),Object(x.jsx)(b.Ac,{children:Object(x.jsx)(b.hc,{width:"80px"})})]},t)})):h.map((function(t){var e=t.position===t.round.position;return Object(x.jsxs)("tr",{children:[Object(x.jsx)(b.Ac,{textAlign:"center",fontWeight:"bold",children:t.round.epoch.toLocaleString()}),Object(x.jsx)(b.Ac,{textAlign:"center",children:Object(x.jsx)(it,{position:t.position})}),Object(x.jsx)(b.Ac,{textAlign:"right",children:Object(x.jsx)(G,{amount:e?t.claimedNetBNB:t.amount,textPrefix:e?"+":"-",textColor:e?"success":"failure"})})]},t.id)}))})]})},st=function(t){var e=t.account,n=Object(a.b)().t,r=Object(c.useState)(!1),i=Object(T.a)(r,2),o=i[0],s=i[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(b.db,{alignItems:"center",justifyContent:"space-between",px:"24px",py:"32px",borderBottom:"1px solid",borderColor:"cardBorder",style:{cursor:"pointer"},onClick:function(){return s(!o)},children:[Object(x.jsx)(b.Cc,{as:"h5",color:"secondary",fontWeight:"bold",textTransform:"uppercase",fontSize:"12px",children:n("Last %num% Bets",{num:5})}),o?Object(x.jsx)(b.L,{}):Object(x.jsx)(b.O,{})]}),o&&Object(x.jsx)(ot,{account:e})]})},lt=function(t){var e=t.account,n=Object(a.b)().t;return Object(x.jsxs)(b.p,{p:"24px",children:[Object(x.jsx)(b.Cc,{as:"h5",color:"secondary",fontWeight:"bold",textTransform:"uppercase",fontSize:"12px",mb:"16px",children:n("Last %num% Bets",{num:5})}),Object(x.jsx)(b.z,{children:Object(x.jsx)(ot,{account:e})})]})},ut=Object(I.e)(b.sb)(w||(w=Object(E.a)(["\n  color: ",";\n\n  svg {\n    fill: ",";\n  }\n"])),(function(t){return t.theme.colors.text}),(function(t){return t.theme.colors.text})),jt=function(t){var e,n,c,r,i,l=t.account,u=t.onDismiss,j=t.onBeforeDismiss,d=Object(a.b)().t,O=Object(U.a)().theme,f=Object(o.v)(),h=l||f,p=Object(o.t)(h),m=Object(V.c)(h),g=Object(o.p)()===s.d.LOADING,v=Object(b.ed)().isDesktop;return Object(x.jsxs)(b.Jb,{minWidth:"320px",children:[Object(x.jsxs)(b.Kb,{background:O.colors.gradients.bubblegum,children:[Object(x.jsxs)(b.db,{alignItems:"center",style:{flex:1},children:[Object(x.jsx)(b.p,{width:["64px",null,null,null,null,null,"96px"],mr:"16px",children:Object(x.jsx)(b.Yb,{src:null===(e=m.nft)||void 0===e||null===(n=e.image)||void 0===n?void 0:n.thumbnail,height:96,width:96})}),Object(x.jsxs)(b.p,{children:[m.username&&Object(x.jsx)(b.fb,{scale:"lg",mb:"8px",children:m.username}),Object(x.jsx)(ut,{href:Object(P.e)(h,"address"),children:Object(q.a)(h)})]})]}),Object(x.jsx)(b.ib,{variant:"text",onClick:function(){j&&j(),u()},"aria-label":"Close the dialog",children:Object(x.jsx)(b.Q,{color:"text",width:"24px"})})]}),null===p?Object(x.jsx)(b.Cc,{p:"32px",textAlign:"center",fontWeight:"bold",children:d("No results found.")}):Object(x.jsxs)(b.p,{maxHeight:["500px",null,null,null,null,null,"none"],overflowY:"auto",children:[Object(x.jsxs)(b.eb,{gridTemplateColumns:["1fr",null,null,null,null,null,"repeat(4, 1fr)"],gridGap:"16px",p:"24px",borderBottom:"1px solid",borderColor:"cardBorder",children:[Object(x.jsxs)(b.p,{children:[Object(x.jsx)(b.Cc,{as:"h6",fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:"bold",mb:"8px",children:d("Net Winnings")}),g?Object(x.jsx)(b.hc,{}):Object(x.jsx)(G,{amount:null===p||void 0===p?void 0:p.netBNB,textPrefix:(null===p||void 0===p?void 0:p.netBNB)>0?"+":"",textColor:(null===p||void 0===p?void 0:p.netBNB)>0?"success":"failure",alignItems:"flex-end"})]}),Object(x.jsxs)(b.p,{children:[Object(x.jsx)(b.Cc,{as:"h6",fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:"bold",mb:"8px",children:d("Win Rate")}),g?Object(x.jsx)(b.hc,{}):Object(x.jsx)(b.Cc,{fontWeight:"bold",children:"".concat(null===p||void 0===p||null===(c=p.winRate)||void 0===c?void 0:c.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),"%")})]}),Object(x.jsxs)(b.p,{children:[Object(x.jsx)(b.Cc,{as:"h6",fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:"bold",mb:"8px",children:d("Rounds Won")}),g?Object(x.jsx)(b.hc,{}):Object(x.jsx)(b.Cc,{fontWeight:"bold",children:null===p||void 0===p||null===(r=p.totalBetsClaimed)||void 0===r?void 0:r.toLocaleString()})]}),Object(x.jsxs)(b.p,{children:[Object(x.jsx)(b.Cc,{as:"h6",fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:"bold",mb:"8px",children:d("Rounds Played")}),g?Object(x.jsx)(b.hc,{}):Object(x.jsx)(b.Cc,{fontWeight:"bold",children:null===p||void 0===p||null===(i=p.totalBets)||void 0===i?void 0:i.toLocaleString()})]})]}),v?Object(x.jsx)(lt,{account:h}):Object(x.jsx)(st,{account:h})]})]})},bt=["user"],at=Object(I.e)(b.p)(y||(y=Object(E.a)(["\n  order: 2;\n  margin-left: 8px;\n\n  "," {\n    order: 1;\n    margin-left: 0;\n    margin-right: 8px;\n  }\n"])),(function(t){return t.theme.mediaQueries.lg})),dt=Object(I.e)(b.p)(S||(S=Object(E.a)(["\n  order: 1;\n\n  "," {\n    order: 2;\n  }\n"])),(function(t){return t.theme.mediaQueries.lg})),Ot=function(t){var e,n,c=t.user,r=Object(z.a)(t,bt),i=Object(a.b)().t,o=Object(V.c)(c.id),s=Object(b.fd)(Object(x.jsx)(jt,{account:c.id})),l=Object(T.a)(s,1)[0];return Object(x.jsxs)(b.pc,{component:Object(x.jsxs)(b.db,Object(R.a)(Object(R.a)({alignItems:"center"},r),{},{children:[Object(x.jsxs)(dt,{children:[Object(x.jsx)(b.Cc,{color:"primary",fontWeight:"bold",children:o.username||Object(q.a)(c.id)})," "]}),Object(x.jsx)(at,{width:["32px",null,null,null,null,"40px"],height:["32px",null,null,null,null,"40px"],children:Object(x.jsx)(b.Yb,{src:null===(e=o.nft)||void 0===e||null===(n=e.image)||void 0===n?void 0:n.thumbnail,height:40,width:40})})]})),options:{placement:"bottom-start"},children:[Object(x.jsx)(b.qc,{onClick:l,children:i("View Stats")}),Object(x.jsx)(b.qc,{as:b.rb,href:Object(P.e)(c.id,"address"),bold:!1,color:"text",external:!0,children:i("View on BscScan")})]})},xt=["rank","user"],ft=function(t){var e=t.rank,n=t.user,c=Object(z.a)(t,xt);return Object(x.jsxs)("tr",Object(R.a)(Object(R.a)({},c),{},{children:[e?Object(x.jsx)(b.Ac,{children:Object(x.jsx)(b.Cc,{textAlign:"center",fontWeight:"bold",color:"secondary",children:"#".concat(e)})}):Object(x.jsx)(b.Ac,{}),Object(x.jsx)(b.Ac,{children:Object(x.jsx)(Ot,{user:n})}),Object(x.jsx)(b.Ac,{children:Object(x.jsx)(G,{amount:n.netBNB,textPrefix:n.netBNB>0?"+":"",textColor:n.netBNB>0?"success":"failure"})}),Object(x.jsx)(b.Ac,{textAlign:"center",children:"".concat(n.winRate.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),"%")}),Object(x.jsx)(b.Ac,{textAlign:"center",children:Object(x.jsx)("strong",{children:n.totalBetsClaimed.toLocaleString()})}),Object(x.jsx)(b.Ac,{textAlign:"center",children:n.totalBets.toLocaleString()})]}))},ht=function(t){var e=t.results,n=Object(a.b)().t;return Object(x.jsx)(F.a,{mb:"24px",children:Object(x.jsx)(b.z,{children:Object(x.jsxs)(b.yc,{children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)(b.Ec,{width:"60px",children:"\xa0"}),Object(x.jsx)(b.Ec,{textAlign:"left",children:n("User")}),Object(x.jsx)(b.Ec,{textAlign:"right",children:n("Net Winnings (BNB)")}),Object(x.jsx)(b.Ec,{children:n("Win Rate")}),Object(x.jsx)(b.Ec,{children:n("Rounds Won")}),Object(x.jsx)(b.Ec,{children:n("Rounds Played")})]})}),Object(x.jsx)("tbody",{children:e.map((function(t,e){return Object(x.jsx)(ft,{rank:e+4,user:t},t.id)}))})]})})})},pt=Object(I.e)(b.p)(A||(A=Object(E.a)(["\n  background-color: ",";\n  border-bottom: 1px solid ",";\n\n  &:first-child {\n    border-top: 1px solid ",";\n  }\n"])),(function(t){return t.theme.card.background}),(function(t){return t.theme.colors.cardBorder}),(function(t){return t.theme.colors.cardBorder})),mt=function(t){var e=t.rank,n=t.user,c=Object(a.b)().t;return Object(x.jsxs)(pt,{p:"16px",children:[Object(x.jsxs)(Y,{mb:"16px",children:[e?Object(x.jsx)(b.Cc,{fontWeight:"bold",color:"secondary",children:"#".concat(e)}):Object(x.jsx)("div",{}),Object(x.jsx)(Ot,{user:n})]}),Object(x.jsxs)(Y,{mb:"4px",children:[Object(x.jsx)(b.Cc,{fontSize:"12px",color:"textSubtle",children:c("Win Rate")}),Object(x.jsx)(b.Cc,{fontWeight:"bold",children:"".concat(n.winRate.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),"%")})]}),Object(x.jsx)(J,{amount:n.netBNB}),Object(x.jsxs)(Y,{children:[Object(x.jsx)(b.Cc,{fontSize:"12px",color:"textSubtle",children:c("Rounds Won")}),Object(x.jsx)(b.Cc,{fontWeight:"bold",children:"".concat(n.totalBetsClaimed.toLocaleString(),"/").concat(n.totalBets.toLocaleString())})]})]})},gt=function(t){var e=t.results;return Object(x.jsx)(b.p,{mb:"24px",children:e.map((function(t,e){return Object(x.jsx)(mt,{rank:e+4,user:t},t.id)}))})},vt=Object(I.e)(b.pb)(k||(k=Object(E.a)(["\n  transform: rotate(30deg);\n"]))),Ct=Object(I.e)(b.qb)(N||(N=Object(E.a)(["\n  transform: rotate(-30deg);\n"]))),Bt=function(t){var e,n,c=t.rank,r=t.user,i=Object(a.b)().t,o=function(t){return 3===t?"bronze":2===t?"silver":"gold"}(c),s=Object(V.c)(r.id),l=Object(b.fd)(Object(x.jsx)(jt,{account:r.id})),u=Object(T.a)(l,1)[0];return Object(x.jsx)(b.z,{ribbon:Object(x.jsx)(b.D,{variantColor:o,text:"#".concat(c),ribbonPosition:"left"}),children:Object(x.jsxs)(b.A,{p:"24px",children:[Object(x.jsx)(b.db,{alignItems:"center",justifyContent:"center",flexDirection:"column",mb:"24px",children:Object(x.jsxs)(b.pc,{component:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(b.db,{mb:"4px",children:[Object(x.jsx)(vt,{color:o,width:"32px"}),Object(x.jsx)(b.p,{width:["40px",null,null,"64px"],height:["40px",null,null,"64px"],children:Object(x.jsx)(b.Yb,{src:null===(e=s.nft)||void 0===e||null===(n=e.image)||void 0===n?void 0:n.thumbnail,height:64,width:64})}),Object(x.jsx)(Ct,{color:o,width:"32px"})]}),Object(x.jsx)(b.Cc,{color:"primary",fontWeight:"bold",textAlign:"center",children:s.username||Object(q.a)(r.id)})]}),options:{placement:"bottom"},children:[Object(x.jsx)(b.qc,{onClick:u,children:i("View Stats")}),Object(x.jsx)(b.qc,{as:b.rb,href:Object(P.e)(r.id,"address"),bold:!1,color:"text",external:!0,children:i("View on BscScan")})]})}),Object(x.jsxs)(Y,{mb:"4px",children:[Object(x.jsx)(b.Cc,{fontSize:"12px",color:"textSubtle",children:i("Win Rate")}),Object(x.jsx)(b.Cc,{fontWeight:"bold",children:"".concat(r.winRate.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),"%")})]}),Object(x.jsx)(J,{amount:r.netBNB}),Object(x.jsxs)(Y,{children:[Object(x.jsx)(b.Cc,{fontSize:"12px",color:"textSubtle",children:i("Rounds Won")}),Object(x.jsx)(b.Cc,{fontWeight:"bold",children:"".concat(r.totalBetsClaimed.toLocaleString(),"/").concat(r.totalBets.toLocaleString())})]})]})})},wt=function(){var t,e=Object(b.ed)().isDesktop,n=Object(a.b)().t,c=Object(o.q)(),r=(t=c,Object(p.a)(t)||Object(m.a)(t)||Object(g.a)(t)||Object(v.a)()),u=r[0],j=r[1],d=r[2],O=r.slice(3),f=Object(o.p)()===s.d.LOADING,h=Object(o.r)(),C=Object(o.o)(),B=Object(i.b)();return Object(x.jsxs)(b.p,{children:[Object(x.jsx)(F.a,{mb:"16px",children:Object(x.jsxs)(b.eb,{gridGap:["16px",null,null,null,null,"24px"],gridTemplateColumns:["1fr",null,null,null,null,"repeat(3, 1fr)"],children:[Object(x.jsx)(Bt,{rank:1,user:u}),Object(x.jsx)(Bt,{rank:2,user:j}),Object(x.jsx)(Bt,{rank:3,user:d})]})}),e?Object(x.jsx)(ht,{results:O}):Object(x.jsx)(gt,{results:O}),Object(x.jsx)(b.db,{mb:"40px",justifyContent:"center",children:C&&Object(x.jsx)(b.u,{variant:"secondary",isLoading:f,endIcon:f?Object(x.jsx)(b.i,{spin:!0,color:"currentColor"}):void 0,onClick:function(){B(Object(l.i)(h+L.a))},children:n(f?"Loading...":"View More")})})]})},yt=n(159),St=function(){var t=Object(r.c)().account,e=Object(a.b)().t,n=Object(i.b)(),s=Object(o.t)(t),u=Object(b.ed)().isDesktop;return Object(c.useEffect)((function(){t&&(n(Object(yt.d)(t)),n(Object(l.b)(t)))}),[t,n]),t&&s?Object(x.jsxs)(F.a,{mb:"48px",children:[Object(x.jsx)(b.fb,{as:"h2",scale:"md",color:"secondary",mb:"16px",children:e("My Rankings")}),u?Object(x.jsx)(b.z,{isActive:!0,children:Object(x.jsxs)(b.yc,{children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)(b.Ec,{width:"60px",children:"\xa0"}),Object(x.jsx)(b.Ec,{textAlign:"left",children:"\xa0"}),Object(x.jsx)(b.Ec,{textAlign:"right",children:e("Net Winnings (BNB)")}),Object(x.jsx)(b.Ec,{textAlign:"center",children:e("Win Rate")}),Object(x.jsx)(b.Ec,{children:e("Rounds Won")}),Object(x.jsx)(b.Ec,{children:e("Rounds Played")})]})}),Object(x.jsx)("tbody",{children:Object(x.jsx)(ft,{user:s})})]})}):Object(x.jsx)(b.z,{isActive:!0,children:Object(x.jsx)(mt,{user:s})})]}):null},At=n(481),kt=n(1e3),Nt=function(){var t=Object(i.b)(),e=Object(b.fd)(Object(x.jsx)(jt,{onBeforeDismiss:function(){t(Object(l.q)(null))}})),n=Object(T.a)(e,1)[0],r=Object(c.useCallback)(function(){var e=Object(X.a)($.a.mark((function e(n){var c,r;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(l.b)(n));case 2:return r=e.sent,e.abrupt("return",void 0!==(null===(c=r.payload)||void 0===c?void 0:c.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),o=function(){var e=Object(X.a)($.a.mark((function e(c){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(l.q)(c));case 2:n();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)(kt.a,{onAddressClick:o,onValidAddress:r})},Wt=Object(I.e)(b.p)(W||(W=Object(E.a)(["\n  margin-bottom: 8px;\n  order: 1;\n  width: 100%;\n\n  "," {\n    margin-bottom: 0;\n    order: 2;\n    width: 320px;\n  }\n"])),(function(t){return t.theme.mediaQueries.lg})),Dt=Object(I.e)(b.p)(D||(D=Object(E.a)(["\n  order: 2;\n  width: 100%;\n\n  "," {\n    order: 1;\n    width: auto;\n  }\n"])),(function(t){return t.theme.mediaQueries.lg})),Lt=function(){var t=Object(a.b)().t,e=Object(i.b)(),n=[{label:t("Net Winnings"),value:"netBNB"},{label:t("Total BNB"),value:"totalBNB"},{label:t("Rounds Played"),value:"totalBets"},{label:t("Win Rate"),value:"winRate"}];return Object(x.jsxs)(F.a,{py:"32px",children:[Object(x.jsx)(b.Cc,{textTransform:"uppercase",fontSize:"12px",color:"textSubtle",fontWeight:"bold",mb:"4px",children:t("Rank By")}),Object(x.jsxs)(b.db,{flexDirection:["column",null,null,null,null,"row"],alignItems:["start",null,null,null,null,"center"],justifyContent:["start",null,null,null,null,"space-between"],children:[Object(x.jsx)(Dt,{children:Object(x.jsx)(At.a,{options:n,onOptionChange:function(t){e(Object(l.p)({orderBy:t.value}))}})}),Object(x.jsx)(Wt,{children:Object(x.jsx)(Nt,{})})]})]})};e.default=function(){var t=Object(o.p)(),e=Object(o.n)(),n=Object(r.c)().account,b=Object(i.b)();return Object(c.useEffect)((function(){b(Object(l.h)({filters:e}))}),[n,e,b]),t===s.d.INITIAL?Object(x.jsx)(u.a,{}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(j.a,{}),Object(x.jsx)(h,{}),Object(x.jsx)(Lt,{}),Object(x.jsx)(St,{}),Object(x.jsx)(wt,{})]})}},972:function(t,e,n){"use strict";n.d(e,"w",(function(){return O})),n.d(e,"a",(function(){return x})),n.d(e,"k",(function(){return f})),n.d(e,"f",(function(){return h})),n.d(e,"y",(function(){return p})),n.d(e,"x",(function(){return m})),n.d(e,"c",(function(){return g})),n.d(e,"j",(function(){return v})),n.d(e,"u",(function(){return C})),n.d(e,"i",(function(){return B})),n.d(e,"g",(function(){return w})),n.d(e,"d",(function(){return y})),n.d(e,"s",(function(){return S})),n.d(e,"b",(function(){return A})),n.d(e,"l",(function(){return k})),n.d(e,"h",(function(){return N})),n.d(e,"m",(function(){return W})),n.d(e,"e",(function(){return D})),n.d(e,"p",(function(){return L})),n.d(e,"q",(function(){return F})),n.d(e,"n",(function(){return R})),n.d(e,"r",(function(){return z})),n.d(e,"o",(function(){return T})),n.d(e,"t",(function(){return E})),n.d(e,"v",(function(){return I}));var c=n(15),r=n(5),i=n(0),o=n(25),s=n(63),l=n(115),u=n(38),j=n(79),b=n(76),a=n(466),d=function(){var t=Object(o.c)((function(t){return t.predictions.rounds}));return Object.keys(t).reduce((function(e,n){return Object(r.a)(Object(r.a)({},e),{},Object(c.a)({},n,Object(b.r)(t[n])))}),{})},O=function(){var t=d();return Object(l.orderBy)(Object.values(t),["epoch"],["asc"])},x=function(t,e){var n=Object(o.c)((function(t){return t.predictions.ledgers}));return n[t]&&n[t][e]?Object(b.r)(n[t][e]):null},f=function(t){return Object(o.c)((function(t){return t.predictions.claimableStatuses}))[t]||!1},h=function(){return Object(o.c)((function(t){var e=Object(l.minBy)(Object.values(t.predictions.rounds),"epoch");return null===e||void 0===e?void 0:e.epoch}))},p=function(){return Object(o.c)((function(t){return t.predictions.isHistoryPaneOpen}))},m=function(){return Object(o.c)((function(t){return t.predictions.isChartPaneOpen}))},g=function(){return Object(o.c)((function(t){return t.predictions.currentEpoch}))},v=function(){return Object(o.c)((function(t){return t.predictions.intervalSeconds}))},C=function(){return Object(o.c)((function(t){return t.predictions.status}))},B=function(){return Object(o.c)((function(t){return t.predictions.historyFilter}))},w=function(){return Object(o.c)((function(t){return t.predictions.hasHistoryLoaded}))},y=function(){return Object(o.c)((function(t){return t.predictions.currentHistoryPage}))},S=function(){var t=Object(o.c)((function(t){return t.predictions.minBetAmount}));return Object(i.useMemo)((function(){return s.a.BigNumber.from(t)}),[t])},A=function(){return Object(o.c)((function(t){return t.predictions.bufferSeconds}))},k=function(){return Object(o.c)((function(t){return t.predictions.isFetchingHistory}))},N=function(){return Object(o.c)((function(t){return t.predictions.history}))},W=function(){var t=Object(o.c)((function(t){return t.predictions.lastOraclePrice}));return Object(i.useMemo)((function(){return s.a.BigNumber.from(t)}),[t])},D=function(){var t=function(){var t=g();return d()[t]}(),e=v();return t.lockTimestamp?t.lockTimestamp:t.startTimestamp+e},L=function(){return Object(o.c)((function(t){return t.predictions.leaderboard.loadingState}))},F=function(){return Object(o.c)((function(t){return t.predictions.leaderboard.results}))},R=function(){return Object(o.c)((function(t){return t.predictions.leaderboard.filters}))},z=function(){return Object(o.c)((function(t){return t.predictions.leaderboard.skip}))},T=function(){return Object(o.c)((function(t){return t.predictions.leaderboard.hasMoreResults}))},E=function(t){var e=function(t){return Object(o.c)((function(e){return e.predictions.leaderboard.addressResults[t]}))}(t),n=Object(j.b)();return Object(i.useEffect)((function(){var c=Object(u.j)(t);!e&&null!==e&&c&&n(Object(a.b)(t))}),[n,t,e]),e},I=function(){return Object(o.c)((function(t){return t.predictions.leaderboard.selectedAddress}))}}}]);
//# sourceMappingURL=28.25c01820.chunk.js.map