(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[40],{1568:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var i,c,o=n(8),r=n(7),l=n(0),u=n(5),d=n(2),a=n(94),s=n(13),b=n(21),j=n(412),O=n(109),x=n(113),h=n(45),f=n(238),p=n(239),m=n(413),v=n(1),k=Object(u.e)(d.z)(i||(i=Object(r.a)(["\n  background-color: ",";\n"])),(function(e){return e.theme.colors.dropdownDeep})),g=u.e.div(c||(c=Object(r.a)(["\n  // background: url('/images/background.png');\n  background-size: cover;\n"])));function y(){var e=Object(b.a)().account,t=Object(s.b)().t,n=Object(h.m)(),i=Object(l.useMemo)((function(){return n.map((function(e){return{liquidityToken:Object(h.a)(e),tokens:e}}))}),[n]),c=Object(l.useMemo)((function(){return i.map((function(e){return e.liquidityToken}))}),[i]),r=Object(O.f)(null!==e&&void 0!==e?e:void 0,c),u=Object(o.a)(r,2),y=u[0],w=u[1],q=Object(l.useMemo)((function(){return i.filter((function(e){var t,n=e.liquidityToken;return null===(t=y[n.address])||void 0===t?void 0:t.greaterThan("0")}))}),[i,y]),A=Object(x.c)(q.map((function(e){return e.tokens}))),T=w||(null===A||void 0===A?void 0:A.length)<q.length||(null===A||void 0===A?void 0:A.some((function(e){return!e}))),L=A.map((function(e){return Object(o.a)(e,2)[1]})).filter((function(e){return Boolean(e)}));return Object(v.jsx)(g,{children:Object(v.jsx)(m.a,{children:Object(v.jsxs)(p.a,{children:[Object(v.jsx)(p.b,{title:t("Your Liquidity"),subtitle:t("Remove liquidity to receive tokens back")}),Object(v.jsxs)(k,{children:[e?T?Object(v.jsx)(d.wc,{color:"textSubtle",textAlign:"center",children:Object(v.jsx)(f.a,{children:t("Loading")})}):(null===L||void 0===L?void 0:L.length)>0?L.map((function(e,t){return Object(v.jsx)(j.b,{pair:e,mb:t<L.length-1?"16px":0},e.liquidityToken.address)})):Object(v.jsx)(d.wc,{color:"textSubtle",textAlign:"center",children:t("No liquidity found.")}):Object(v.jsx)(d.wc,{color:"textSubtle",textAlign:"center",children:t("Connect to a wallet to view your liquidity.")}),e&&!T&&Object(v.jsxs)(d.ab,{flexDirection:"column",alignItems:"center",mt:"24px",children:[Object(v.jsx)(d.wc,{color:"textSubtle",mb:"8px",children:t("Don't see a pool you joined?")}),Object(v.jsx)(d.t,{id:"import-pool-link",variant:"secondary",scale:"sm",as:a.a,to:"/find",children:t("Find other LP tokens")})]})]}),Object(v.jsx)(d.A,{style:{textAlign:"center"},children:Object(v.jsx)(d.t,{id:"join-pool-button",as:a.a,to:"/add",width:"100%",startIcon:Object(v.jsx)(d.a,{color:"white"}),children:t("Add Liquidity")})})]})})})}}}]);
//# sourceMappingURL=40.ff9016e0.chunk.js.map