(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[23],{1025:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return i}));var r=n(25),c=function(){var e=Object(r.c)((function(e){return e.voting.proposals}));return Object.values(e)},o=function(e){return Object(r.c)((function(t){return t.voting.proposals[e]}))},a=function(e){var t=Object(r.c)((function(t){return t.voting.votes[e]}));return t?t.filter((function(e){return!0!==e._inValid})):[]},s=function(){return Object(r.c)((function(e){return e.voting.voteLoadingStatus}))},i=function(){return Object(r.c)((function(e){return e.voting.proposalLoadingStatus}))}},1048:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j}));var r=n(5),c=n(60),o=(n(0),n(246)),a=n(40),s=n(1),i=["proposalState"],u=["isCoreProposal"],b=function(e){var t=e.proposalState,n=Object(c.a)(e,i);return t===a.g.ACTIVE?Object(s.jsx)(o.h,Object(r.a)({},n)):t===a.g.PENDING?Object(s.jsx)(o.g,Object(r.a)({},n)):Object(s.jsx)(o.a,Object(r.a)({},n))},j=function(e){var t=e.isCoreProposal,n=Object(c.a)(e,u);return t?Object(s.jsx)(o.d,Object(r.a)({},n)):Object(s.jsx)(o.b,Object(r.a)({},n))}},1602:function(e,t,n){"use strict";n.r(t);var r,c,o,a,s,i,u,b,j,d,l,p=n(9),f=n(0),O=n(2),x=n(6),h=n(237),g=n(110),m=n(13),v=n(318),y=Object(x.e)(O.jb)(r||(r=Object(p.a)(["\n  display: none;\n\n  "," {\n    display: block;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),C=n(1),w=Object(x.e)(O.p)(c||(c=Object(p.a)(["\n  background: ",";\n  padding-bottom: 32px;\n  padding-top: 32px;\n"])),(function(e){return e.theme.colors.gradients.bubblegum})),k=function(){var e=Object(m.b)().t;return Object(C.jsx)(w,{children:Object(C.jsx)(v.a,{children:Object(C.jsxs)(O.db,{alignItems:"center",justifyContent:"space-between",children:[Object(C.jsxs)(O.p,{pr:"32px",children:[Object(C.jsx)(O.fb,{as:"h1",scale:"xxl",color:"secondary",mb:"16px",children:e("Voting")}),Object(C.jsx)(O.fb,{as:"h3",scale:"lg",mb:"16px",children:e("Have your say in the future of the PancakeSwap Ecosystem")}),Object(C.jsx)(O.u,{startIcon:Object(C.jsx)(O.ac,{color:"currentColor",width:"24px"}),as:g.a,to:"/voting/proposal/create",children:e("Make a Proposal")})]}),Object(C.jsx)(y,{src:"/images/voting/voting-presents.png",width:361,height:214})]})})})},I=Object(x.e)(O.p)(o||(o=Object(p.a)(["\n  background: ",";\n  padding-bottom: 32px;\n  padding-top: 32px;\n"])),(function(e){return e.theme.colors.gradients.bubblegum})),S=function(){var e=Object(m.b)().t;return Object(C.jsx)(I,{children:Object(C.jsx)(v.a,{children:Object(C.jsxs)(O.db,{alignItems:"center",justifyContent:"space-between",children:[Object(C.jsxs)(O.p,{pr:"32px",children:[Object(C.jsx)(O.fb,{as:"h2",scale:"lg",mb:"16px",children:e("Got a suggestion?")}),Object(C.jsx)(O.Cc,{as:"p",children:e("Community proposals are a great way to see how the community feels about your ideas.")}),Object(C.jsx)(O.Cc,{as:"p",mb:"16px",children:e("They won't necessarily be implemented if the community votes successful, but suggestions with a lot of community support may be made into Core proposals.")}),Object(C.jsx)(O.u,{startIcon:Object(C.jsx)(O.ac,{color:"currentColor",width:"24px"}),as:g.a,to:"/voting/proposal/create",children:e("Make a Proposal")})]}),Object(C.jsx)(y,{src:"/images/voting/voting-bunny.png",width:173,height:234})]})})})},E=n(5),T=n(8),L=n(79),N=n(486),D=n(1025),A=n(40),M=n(987),P=n(470),B=n.n(P),V=n(991),F=Object(x.e)(O.db)(a||(a=Object(p.a)(["\n  border-bottom: 1px solid ",";\n"])),(function(e){return e.theme.colors.cardBorder})),G=x.e.div(s||(s=Object(p.a)(["\n  ",":last-child {\n    border-bottom: 0;\n  }\n"])),F),H=function(){return Object(C.jsx)(G,{children:B()(V.d).map((function(e){return Object(C.jsxs)(F,{alignItems:"center",justifyContent:"space-between",py:"16px",px:"24px",children:[Object(C.jsxs)(O.p,{style:{flex:1},children:[Object(C.jsx)(O.hc,{height:"21px",width:"70%",mb:"4px"}),Object(C.jsx)(O.hc,{height:"21px",width:"30%",mb:"4px"}),Object(C.jsx)(O.hc,{height:"21px",width:"40%"})]}),Object(C.jsx)(O.hc,{height:"32px",width:"32px"})]},e)}))})},J=x.e.div(i||(i=Object(p.a)(["\n  background-color: ",";\n  padding-top: 16px;\n"])),(function(e){return e.theme.colors.input})),R=function(e){switch(e){case A.h.COMMUNITY:return 1;case A.h.ALL:return 2;case A.h.CORE:default:return 0}},U=function(e){var t=e.proposalType,n=e.onTypeChange,r=Object(m.b)().t;return Object(C.jsx)(J,{children:Object(C.jsxs)(O.xc,{activeIndex:R(t),onItemClick:function(e){n(function(e){switch(e){case 1:return A.h.COMMUNITY;case 2:return A.h.ALL;default:return A.h.CORE}}(e))},children:[Object(C.jsx)(O.wc,{children:Object(C.jsxs)(O.db,{alignItems:"center",children:[Object(C.jsx)(O.Sc,{color:"currentColor",mr:"4px"}),r("Core")]})}),Object(C.jsxs)(O.wc,{children:[" ",Object(C.jsxs)(O.db,{alignItems:"center",children:[Object(C.jsx)(O.S,{color:"currentColor",mr:"4px"}),r("Community")]})]}),Object(C.jsx)(O.wc,{children:"All"})]})})},Y=n(21),z=n(949),_=function(e){var t=Object(Y.default)(1e3*e);return Object(z.default)(t,"MMM do, yyyy HH:mm")},q=function(e){var t=e.startDate,n=e.endDate,r=e.proposalState,c=Object(m.b)().t,o={fontSize:"16px",color:"textSubtle",ml:"8px"};return r===A.g.CLOSED?Object(C.jsx)(O.Cc,Object(E.a)(Object(E.a)({},o),{},{children:c("Ended %date%",{date:_(n)})})):r===A.g.PENDING?Object(C.jsx)(O.Cc,Object(E.a)(Object(E.a)({},o),{},{children:c("Starts %date%",{date:_(t)})})):Object(C.jsx)(O.Cc,Object(E.a)(Object(E.a)({},o),{},{children:c("Ends %date%",{date:_(n)})}))},K=n(1048),Q=Object(x.e)(g.a)(u||(u=Object(p.a)(["\n  align-items: center;\n  border-bottom: 1px solid ",";\n  display: flex;\n  padding: 16px 24px;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.colors.dropdown})),W=function(e){var t=e.proposal,n="/voting/proposal/".concat(t.id);return Object(C.jsxs)(Q,{to:n,children:[Object(C.jsxs)(O.p,{as:"span",style:{flex:1},children:[Object(C.jsx)(O.Cc,{bold:!0,mb:"8px",children:t.title}),Object(C.jsx)(O.db,{alignItems:"center",mb:"8px",children:Object(C.jsx)(q,{startDate:t.start,endDate:t.end,proposalState:t.state})}),Object(C.jsxs)(O.db,{alignItems:"center",children:[Object(C.jsx)(K.a,{proposalState:t.state}),Object(C.jsx)(K.b,{isCoreProposal:Object(M.h)(t),ml:"8px"})]})]}),Object(C.jsx)(O.ib,{variant:"text",children:Object(C.jsx)(O.f,{width:"24px"})})]})},X=Object(x.e)(O.db).attrs({alignItems:"center"})(b||(b=Object(p.a)(["\n  border-bottom: 1px solid ",";\n  padding: 16px 24px;\n"])),(function(e){return e.theme.colors.cardBorder})),Z=x.e.label(j||(j=Object(p.a)(["\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  margin-right: 16px;\n"]))),$=[{value:A.g.ACTIVE,label:"Vote Now"},{value:A.g.PENDING,label:"Soon"},{value:A.g.CLOSED,label:"Closed"}],ee=function(e){var t=e.filterState,n=e.onFilterChange,r=e.isLoading,c=Object(m.b)().t;return Object(C.jsx)(X,{children:$.map((function(e){var o=e.value,a=e.label;return Object(C.jsxs)(Z,{children:[Object(C.jsx)(O.bc,{scale:"sm",value:o,checked:t===o,onChange:function(e){var t=e.currentTarget.value;n(t)},disabled:r}),Object(C.jsx)(O.Cc,{ml:"8px",children:c(a)})]},a)}))})},te=function(){var e=Object(m.b)().t,t=Object(f.useState)({proposalType:A.h.CORE,filterState:A.g.ACTIVE}),n=Object(T.a)(t,2),r=n[0],c=n[1],o=Object(D.b)(),a=Object(D.c)(),s=Object(L.b)(),i=r.proposalType,u=r.filterState,b=o===A.j.LOADING,j=o===A.j.IDLE;Object(f.useEffect)((function(){s(Object(N.c)({first:1e3,state:u}))}),[u,s]);var d=Object(M.b)(Object(M.c)(a,i),u);return Object(C.jsxs)(v.a,{py:"40px",children:[Object(C.jsx)(O.p,{mb:"48px",children:Object(C.jsxs)(O.q,{children:[Object(C.jsx)(g.a,{to:"/",children:e("Home")}),Object(C.jsx)(O.Cc,{children:e("Voting")})]})}),Object(C.jsx)(O.fb,{as:"h2",scale:"xl",mb:"32px",id:"voting-proposals",children:e("Proposals")}),Object(C.jsxs)(O.z,{children:[Object(C.jsx)(U,{proposalType:i,onTypeChange:function(e){c((function(t){return Object(E.a)(Object(E.a)({},t),{},{proposalType:e})}))}}),Object(C.jsx)(ee,{filterState:u,onFilterChange:function(e){c((function(t){return Object(E.a)(Object(E.a)({},t),{},{filterState:e})}))},isLoading:b}),b&&Object(C.jsx)(H,{}),j&&d.length>0&&d.map((function(e){return Object(C.jsx)(W,{proposal:e},e.id)})),j&&0===d.length&&Object(C.jsx)(O.db,{alignItems:"center",justifyContent:"center",p:"32px",children:Object(C.jsx)(O.fb,{as:"h5",children:e("No proposals found")})})]})]})},ne=x.e.div(d||(d=Object(p.a)(["\n  flex: none;\n"]))),re=x.e.div(l||(l=Object(p.a)(["\n  flex: 1;\n  height: 100%;\n"])));t.default=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(h.a,{}),Object(C.jsxs)(O.db,{flexDirection:"column",minHeight:"calc(100vh - 64px)",children:[Object(C.jsx)(ne,{children:Object(C.jsx)(k,{})}),Object(C.jsx)(re,{children:Object(C.jsx)(te,{})}),Object(C.jsx)(ne,{children:Object(C.jsx)(S,{})})]})]})}},987:function(e,t,n){"use strict";n.d(t,"h",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return O})),n.d(t,"d",(function(){return x})),n.d(t,"e",(function(){return h})),n.d(t,"i",(function(){return g})),n.d(t,"g",(function(){return m})),n.d(t,"a",(function(){return v})),n.d(t,"f",(function(){return y}));var r=n(15),c=n(32),o=n(5),a=n(3),s=n.n(a),i=n(10),u=n(58),b=n(35),j=n(40),d=n(119),l=n(991),p=function(e){return l.a.includes(e.author.toLowerCase())},f=function(e,t){switch(t){case j.h.COMMUNITY:return e.filter((function(e){return!p(e)}));case j.h.CORE:return e.filter((function(e){return p(e)}));case j.h.ALL:default:return e}},O=function(e,t){return e.filter((function(e){return e.state===t}))},x=function(){return{plugins:{},network:56,strategies:[{name:"cake",params:{symbol:"CAKE",address:b.a.cake.address,decimals:18}}]}},h=function(){return{version:l.e,timestamp:(Date.now()/1e3).toFixed(),space:l.c}},g=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u.k,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if((n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:throw r=e.sent,new Error(null===r||void 0===r?void 0:r.error_description);case 8:return e.next=10,n.json();case 10:return c=e.sent,e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(s.a.mark((function e(t,n,r){var c,o,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r,e.t0){e.next=5;break}return e.next=4,d.a.getBlockNumber();case 4:e.t0=e.sent;case 5:return c=e.t0,e.next=8,fetch("".concat(u.l,"/power"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:t,block:c,poolAddresses:n})});case 8:return o=e.sent,e.next=11,o.json();case 11:return a=e.sent,e.abrupt("return",a.data);case 13:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),v=function(e){return e.reduce((function(e,t){var n=t.proposal.choices[t.choice-1];return Object(o.a)(Object(o.a)({},e),{},Object(r.a)({},n,e[n]?[].concat(Object(c.a)(e[n]),[t]):[t]))}),{})},y=function(e){return e.reduce((function(e,t){var n,r=parseFloat(null===(n=t.metadata)||void 0===n?void 0:n.votingPower);return r||(r=0),e+r}),0)}},991:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return i}));var r=10,c=["0x842B508681eE336E74600974B4623B709477d29D","0x977e0c1005dff8749f8cac22f4df0bd5f013d1a7","0x6eaf1b33b8672c5dc40ab8f4ba3a0111723126c7"].map((function(e){return e.toLowerCase()})),o="https://gateway.ipfs.io/ipfs",a="0.1.3",s="cake.eth",i=10}}]);
//# sourceMappingURL=23.716f6c4d.chunk.js.map