(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[32],{1080:function(e,t,n){"use strict";var i,c=n(9),a=n(110),r=n(6),o=Object(r.e)(a.a)(i||(i=Object(c.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.a=o},1607:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return K}));var i=n(32),c=n(3),a=n.n(c),r=n(10),o=n(15),l=n(8),s=n(9),d=n(0),u=n(6),b=n(7),j=n(4),O=n(2),v=n(72),x=n(13),m=n(39),p=n(231),C=n(267),h=n(484),f=n(291),y=n(29),R=n(122),I=n(142),E=n(67),g=n(44),T=n(22),U=n(69),w=n(52),Y=n(354),N=n(132),_=n(1080),k=n(38),S=n(209);var B=n(73),A=n(87),P=n(290),D=n(25),L=n(133),q=n(299),Q=n(126),V=n(129),z=n(424);function M(){return Object(D.c)((function(e){return e.burn}))}var F,H=n(51),W=n(327),G=n(1),J=u.e.div(F||(F=Object(s.a)(["\n  border: solid 1px ",";\n  border-radius: 16px;\n  padding: 16px;\n"])),(function(e){return e.theme.colors.cardBorder}));function K(e){var t,n,c,s,u,F,K,X,Z,$,ee,te,ne,ie,ce,ae,re,oe,le,se,de,ue=e.history,be=e.match.params,je=be.currencyIdA,Oe=be.currencyIdB,ve=null!==(t=Object(U.c)(je))&&void 0!==t?t:void 0,xe=null!==(n=Object(U.c)(Oe))&&void 0!==n?n:void 0,me=Object(T.a)(),pe=me.account,Ce=me.chainId,he=me.library,fe=Object(d.useMemo)((function(){return[Object(B.b)(ve,Ce),Object(B.b)(xe,Ce)]}),[ve,xe,Ce]),ye=Object(l.a)(fe,2),Re=ye[0],Ie=ye[1],Ee=Object(x.b)().t,ge=Object(H.f)(),Te=M(),Ue=Te.independentField,we=Te.typedValue,Ye=function(e,t){var n,i,c,a,r,s=Object(T.a)(),d=s.account,u=s.chainId,b=M(),O=b.independentField,v=b.typedValue,m=Object(x.b)().t,p=Object(L.b)(e,t),C=Object(l.a)(p,2)[1],h=Object(V.e)(null!==d&&void 0!==d?d:void 0,[null===C||void 0===C?void 0:C.liquidityToken]),f=null===h||void 0===h?void 0:h[null!==(n=null===C||void 0===C||null===(i=C.liquidityToken)||void 0===i?void 0:i.address)&&void 0!==n?n:""],y=[Object(B.b)(e,u),Object(B.b)(t,u)],R=y[0],I=y[1],E=(c={},Object(o.a)(c,z.a.CURRENCY_A,R),Object(o.a)(c,z.a.CURRENCY_B,I),Object(o.a)(c,z.a.LIQUIDITY,null===C||void 0===C?void 0:C.liquidityToken),c),g=Object(q.a)(null===C||void 0===C?void 0:C.liquidityToken),U=C&&g&&f&&R&&j.e.greaterThanOrEqual(g.raw,f.raw)?new j.k(R,C.getLiquidityValue(R,g,f,!1).raw):void 0,w=C&&g&&f&&I&&j.e.greaterThanOrEqual(g.raw,f.raw)?new j.k(I,C.getLiquidityValue(I,g,f,!1).raw):void 0,Y=(a={},Object(o.a)(a,z.a.CURRENCY_A,U),Object(o.a)(a,z.a.CURRENCY_B,w),a),N=new j.g("0","100");if(O===z.a.LIQUIDITY_PERCENT)N=new j.g(v,"100");else if(O===z.a.LIQUIDITY){if(null===C||void 0===C?void 0:C.liquidityToken){var _=Object(Q.a)(v,C.liquidityToken);_&&f&&!_.greaterThan(f)&&(N=new j.g(_.raw,f.raw))}}else if(E[O]){var k=Object(Q.a)(v,E[O]),S=Y[O];k&&S&&!k.greaterThan(S)&&(N=new j.g(k.raw,S.raw))}var A,P,D=(r={},Object(o.a)(r,z.a.LIQUIDITY_PERCENT,N),Object(o.a)(r,z.a.LIQUIDITY,f&&N&&N.greaterThan("0")?new j.k(f.token,N.multiply(f.raw).quotient):void 0),Object(o.a)(r,z.a.CURRENCY_A,R&&N&&N.greaterThan("0")&&U?new j.k(R,N.multiply(U.raw).quotient):void 0),Object(o.a)(r,z.a.CURRENCY_B,I&&N&&N.greaterThan("0")&&w?new j.k(I,N.multiply(w.raw).quotient):void 0),r);return d||(A=m("Connect Wallet")),D[z.a.LIQUIDITY]&&D[z.a.CURRENCY_A]&&D[z.a.CURRENCY_B]||(A=null!==(P=A)&&void 0!==P?P:m("Enter an amount")),{pair:C,parsedAmounts:D,error:A}}(null!==ve&&void 0!==ve?ve:void 0,null!==xe&&void 0!==xe?xe:void 0),Ne=Ye.pair,_e=Ye.parsedAmounts,ke=Ye.error,Se=function(){var e=Object(D.b)();return{onUserInput:Object(d.useCallback)((function(t,n){e(Object(z.b)({field:t,typedValue:n}))}),[e])}}().onUserInput,Be=!ke,Ae=Object(d.useState)(!1),Pe=Object(l.a)(Ae,2),De=Pe[0],Le=Pe[1],qe=Object(d.useState)(!1),Qe=Object(l.a)(qe,2),Ve=Qe[0],ze=Qe[1],Me=Object(d.useState)(""),Fe=Object(l.a)(Me,2),He=Fe[0],We=Fe[1],Ge=Object(Y.a)(),Je=Object(H.v)(),Ke=Object(l.a)(Je,1)[0],Xe=(Z={},Object(o.a)(Z,z.a.LIQUIDITY_PERCENT,_e[z.a.LIQUIDITY_PERCENT].equalTo("0")?"0":_e[z.a.LIQUIDITY_PERCENT].lessThan(new j.g("1","100"))?"<1":_e[z.a.LIQUIDITY_PERCENT].toFixed(0)),Object(o.a)(Z,z.a.LIQUIDITY,Ue===z.a.LIQUIDITY?we:null!==(c=null===(s=_e[z.a.LIQUIDITY])||void 0===s?void 0:s.toSignificant(6))&&void 0!==c?c:""),Object(o.a)(Z,z.a.CURRENCY_A,Ue===z.a.CURRENCY_A?we:null!==(u=null===(F=_e[z.a.CURRENCY_A])||void 0===F?void 0:F.toSignificant(6))&&void 0!==u?u:""),Object(o.a)(Z,z.a.CURRENCY_B,Ue===z.a.CURRENCY_B?we:null!==(K=null===(X=_e[z.a.CURRENCY_B])||void 0===X?void 0:X.toSignificant(6))&&void 0!==K?K:""),Z),Ze=null===($=_e[z.a.LIQUIDITY_PERCENT])||void 0===$?void 0:$.equalTo(new j.g("1")),$e=Object(w.r)(null===Ne||void 0===Ne||null===(ee=Ne.liquidityToken)||void 0===ee?void 0:ee.address),et=Object(d.useState)(null),tt=Object(l.a)(et,2),nt=tt[0],it=tt[1],ct=Object(A.b)(_e[z.a.LIQUIDITY],g.t),at=Object(l.a)(ct,2),rt=at[0],ot=at[1];function lt(){return(lt=Object(r.a)(a.a.mark((function e(){var t,n,i,c,r,o,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if($e&&Ne&&he&&Ge){e.next=2;break}throw new Error("missing dependencies");case 2:if(t=_e[z.a.LIQUIDITY]){e.next=5;break}throw new Error("missing liquidity amount");case 5:return e.next=7,$e.nonces(pe);case 7:n=e.sent,i=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],c={name:"Pancake LPs",version:"1",chainId:Ce,verifyingContract:Ne.liquidityToken.address},r=[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}],o={owner:pe,spender:g.t,value:t.raw.toString(),nonce:n.toHexString(),deadline:Ge.toNumber()},l=JSON.stringify({types:{EIP712Domain:i,Permit:r},domain:c,primaryType:"Permit",message:o}),he.send("eth_signTypedData_v4",[pe,l]).then(b.splitSignature).then((function(e){it({v:e.v,r:e.r,s:e.s,deadline:Ge.toNumber()})})).catch((function(e){4001!==(null===e||void 0===e?void 0:e.code)&&ot()}));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var st=Object(d.useCallback)((function(e,t){return it(null),Se(e,t)}),[Se]),dt=Object(d.useCallback)((function(e){return st(z.a.LIQUIDITY,e)}),[st]),ut=Object(d.useCallback)((function(e){return st(z.a.CURRENCY_A,e)}),[st]),bt=Object(d.useCallback)((function(e){return st(z.a.CURRENCY_B,e)}),[st]),jt=Object(N.d)();function Ot(){return vt.apply(this,arguments)}function vt(){return(vt=Object(r.a)(a.a.mark((function e(){var t,n,c,r,l,s,d,u,b,O,x,m,p,C;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Ce&&he&&pe&&Ge){e.next=2;break}throw new Error("missing dependencies");case 2:if(n=_e[z.a.CURRENCY_A],c=_e[z.a.CURRENCY_B],n&&c){e.next=5;break}throw new Error("missing currency amounts");case 5:if(r=Object(k.i)(Ce,he,pe),t={},Object(o.a)(t,z.a.CURRENCY_A,Object(k.c)(n,Ke)[0]),Object(o.a)(t,z.a.CURRENCY_B,Object(k.c)(c,Ke)[0]),l=t,ve&&xe){e.next=9;break}throw new Error("missing tokens");case 9:if(s=_e[z.a.LIQUIDITY]){e.next=12;break}throw new Error("missing liquidity amount");case 12:if(d=xe===j.d,u=ve===j.d||d,Re&&Ie){e.next=16;break}throw new Error("could not wrap");case 16:if(rt!==A.a.APPROVED){e.next=20;break}u?(b=["removeLiquidityETH","removeLiquidityETHSupportingFeeOnTransferTokens"],O=[d?Re.address:Ie.address,s.raw.toString(),l[d?z.a.CURRENCY_A:z.a.CURRENCY_B].toString(),l[d?z.a.CURRENCY_B:z.a.CURRENCY_A].toString(),pe,Ge.toHexString()]):(b=["removeLiquidity"],O=[Re.address,Ie.address,s.raw.toString(),l[z.a.CURRENCY_A].toString(),l[z.a.CURRENCY_B].toString(),pe,Ge.toHexString()]),e.next=25;break;case 20:if(null===nt){e.next=24;break}u?(b=["removeLiquidityETHWithPermit","removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"],O=[d?Re.address:Ie.address,s.raw.toString(),l[d?z.a.CURRENCY_A:z.a.CURRENCY_B].toString(),l[d?z.a.CURRENCY_B:z.a.CURRENCY_A].toString(),pe,nt.deadline,!1,nt.v,nt.r,nt.s]):(b=["removeLiquidityWithPermit"],O=[Re.address,Ie.address,s.raw.toString(),l[z.a.CURRENCY_A].toString(),l[z.a.CURRENCY_B].toString(),pe,nt.deadline,!1,nt.v,nt.r,nt.s]),e.next=25;break;case 24:throw new Error("Attempting to confirm without approval or a signature. Please contact support.");case 25:return e.next=27,Promise.all(b.map((function(e){var t;return(t=r.estimateGas)[e].apply(t,Object(i.a)(O)).then(k.b).catch((function(t){console.error("estimateGas failed",e,O,t)}))})));case 27:if(x=e.sent,-1!==(m=x.findIndex((function(e){return v.a.isBigNumber(e)})))){e.next=33;break}console.error("This transaction would fail. Please contact support."),e.next=38;break;case 33:return p=b[m],C=x[m],ze(!0),e.next=38,r[p].apply(r,Object(i.a)(O).concat([{gasLimit:C,gasPrice:ge}])).then((function(e){var t,n;ze(!1),jt(e,{summary:"Remove ".concat(null===(t=_e[z.a.CURRENCY_A])||void 0===t?void 0:t.toSignificant(3)," ").concat(null===ve||void 0===ve?void 0:ve.symbol," and ").concat(null===(n=_e[z.a.CURRENCY_B])||void 0===n?void 0:n.toSignificant(3)," ").concat(null===xe||void 0===xe?void 0:xe.symbol)}),We(e.hash)})).catch((function(e){ze(!1),console.error(e)}));case 38:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function xt(){var e,t;return Object(G.jsxs)(m.a,{gap:"md",children:[Object(G.jsxs)(y.b,{align:"flex-end",children:[Object(G.jsx)(O.Cc,{fontSize:"24px",children:null===(e=_e[z.a.CURRENCY_A])||void 0===e?void 0:e.toSignificant(6)}),Object(G.jsxs)(y.c,{gap:"4px",children:[Object(G.jsx)(E.a,{currency:ve,size:"24px"}),Object(G.jsx)(O.Cc,{fontSize:"24px",ml:"10px",children:null===ve||void 0===ve?void 0:ve.symbol})]})]}),Object(G.jsx)(y.c,{children:Object(G.jsx)(O.a,{width:"16px"})}),Object(G.jsxs)(y.b,{align:"flex-end",children:[Object(G.jsx)(O.Cc,{fontSize:"24px",children:null===(t=_e[z.a.CURRENCY_B])||void 0===t?void 0:t.toSignificant(6)}),Object(G.jsxs)(y.c,{gap:"4px",children:[Object(G.jsx)(E.a,{currency:xe,size:"24px"}),Object(G.jsx)(O.Cc,{fontSize:"24px",ml:"10px",children:null===xe||void 0===xe?void 0:xe.symbol})]})]}),Object(G.jsx)(O.Cc,{small:!0,textAlign:"left",pt:"12px",children:Ee("Output is estimated. If the price changes by more than %slippage%% your transaction will revert.",{slippage:Ke/100})})]})}function mt(){var e,t,n;return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(y.b,{children:[Object(G.jsx)(O.Cc,{children:Ee("%assetA%/%assetB% Burned",{assetA:null!==(e=null===ve||void 0===ve?void 0:ve.symbol)&&void 0!==e?e:"",assetB:null!==(t=null===xe||void 0===xe?void 0:xe.symbol)&&void 0!==t?t:""})}),Object(G.jsxs)(y.c,{children:[Object(G.jsx)(E.b,{currency0:ve,currency1:xe,margin:!0}),Object(G.jsx)(O.Cc,{children:null===(n=_e[z.a.LIQUIDITY])||void 0===n?void 0:n.toSignificant(6)})]})]}),Ne&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(y.b,{children:[Object(G.jsx)(O.Cc,{children:Ee("Price")}),Object(G.jsxs)(O.Cc,{children:["1 ",null===ve||void 0===ve?void 0:ve.symbol," = ",Re?Ne.priceOf(Re).toSignificant(6):"-"," ",null===xe||void 0===xe?void 0:xe.symbol]})]}),Object(G.jsxs)(y.b,{children:[Object(G.jsx)("div",{}),Object(G.jsxs)(O.Cc,{children:["1 ",null===xe||void 0===xe?void 0:xe.symbol," = ",Ie?Ne.priceOf(Ie).toSignificant(6):"-"," ",null===ve||void 0===ve?void 0:ve.symbol]})]})]}),Object(G.jsx)(O.u,{disabled:!(rt===A.a.APPROVED||null!==nt),onClick:Ot,children:Ee("Confirm")})]})}var pt=Ee("Removing %amountA% %symbolA% and %amountB% %symbolB%",{amountA:null!==(te=null===(ne=_e[z.a.CURRENCY_A])||void 0===ne?void 0:ne.toSignificant(6))&&void 0!==te?te:"",symbolA:null!==(ie=null===ve||void 0===ve?void 0:ve.symbol)&&void 0!==ie?ie:"",amountB:null!==(ce=null===(ae=_e[z.a.CURRENCY_B])||void 0===ae?void 0:ae.toSignificant(6))&&void 0!==ce?ce:"",symbolB:null!==(re=null===xe||void 0===xe?void 0:xe.symbol)&&void 0!==re?re:""}),Ct=Object(d.useCallback)((function(e){st(z.a.LIQUIDITY_PERCENT,e.toString())}),[st]),ht=ve===j.d||xe===j.d,ft=Boolean(Ce&&(ve&&Object(j.o)(j.n[Ce],ve)||xe&&Object(j.o)(j.n[Ce],xe))),yt=Object(d.useCallback)((function(e){Oe&&Object(S.a)(e)===Oe?ue.push("/remove/".concat(Object(S.a)(e),"/").concat(je)):ue.push("/remove/".concat(Object(S.a)(e),"/").concat(Oe))}),[je,Oe,ue]),Rt=Object(d.useCallback)((function(e){je&&Object(S.a)(e)===je?ue.push("/remove/".concat(Oe,"/").concat(Object(S.a)(e))):ue.push("/remove/".concat(je,"/").concat(Object(S.a)(e)))}),[je,Oe,ue]),It=Object(d.useCallback)((function(){it(null),He&&st(z.a.LIQUIDITY_PERCENT,"0"),We("")}),[st,He]),Et=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,i=Object(d.useState)((function(){return e})),c=Object(l.a)(i,2),a=c[0],r=c[1],o=Object(d.useRef)(),s=Object(d.useCallback)((function(e){r(e),o.current&&clearTimeout(o.current),o.current=setTimeout((function(){t(e),o.current=void 0}),n)}),[n,t]);return Object(d.useEffect)((function(){o.current&&(clearTimeout(o.current),o.current=void 0),r(e)}),[e]),[a,s]}(Number.parseInt(_e[z.a.LIQUIDITY_PERCENT].toFixed(0)),Ct),gt=Object(l.a)(Et,2),Tt=gt[0],Ut=gt[1],wt=Object(O.fd)(Object(G.jsx)(p.c,{title:Ee("You will receive"),customOnDismiss:It,attemptingTxn:Ve,hash:He||"",content:function(){return Object(G.jsx)(p.a,{topContent:xt,bottomContent:mt})},pendingText:pt}),!0,!0,"removeLiquidityModal"),Yt=Object(l.a)(wt,1)[0];return Object(G.jsxs)(W.a,{children:[Object(G.jsxs)(f.a,{children:[Object(G.jsx)(f.b,{backTo:"/pool",title:Ee("Remove %assetA%-%assetB% liquidity",{assetA:null!==(oe=null===ve||void 0===ve?void 0:ve.symbol)&&void 0!==oe?oe:"",assetB:null!==(le=null===xe||void 0===xe?void 0:xe.symbol)&&void 0!==le?le:""}),subtitle:Ee("To receive %assetA% and %assetB%",{assetA:null!==(se=null===ve||void 0===ve?void 0:ve.symbol)&&void 0!==se?se:"",assetB:null!==(de=null===xe||void 0===xe?void 0:xe.symbol)&&void 0!==de?de:""}),noConfig:!0}),Object(G.jsxs)(O.A,{children:[Object(G.jsxs)(m.a,{gap:"20px",children:[Object(G.jsxs)(y.b,{children:[Object(G.jsx)(O.Cc,{children:Ee("Amount")}),Object(G.jsx)(O.u,{variant:"text",scale:"sm",onClick:function(){return Le(!De)},children:Ee(De?"Simple":"Detailed")})]}),!De&&Object(G.jsxs)(J,{children:[Object(G.jsxs)(O.Cc,{fontSize:"40px",bold:!0,mb:"16px",style:{lineHeight:1},children:[Xe[z.a.LIQUIDITY_PERCENT],"%"]}),Object(G.jsx)(O.ic,{name:"lp-amount",min:0,max:100,value:Tt,onValueChanged:function(e){return Ut(Math.ceil(e))},mb:"16px"}),Object(G.jsxs)(O.db,{flexWrap:"wrap",justifyContent:"space-evenly",children:[Object(G.jsx)(O.u,{variant:"tertiary",scale:"sm",onClick:function(){return st(z.a.LIQUIDITY_PERCENT,"25")},children:"25%"}),Object(G.jsx)(O.u,{variant:"tertiary",scale:"sm",onClick:function(){return st(z.a.LIQUIDITY_PERCENT,"50")},children:"50%"}),Object(G.jsx)(O.u,{variant:"tertiary",scale:"sm",onClick:function(){return st(z.a.LIQUIDITY_PERCENT,"75")},children:"75%"}),Object(G.jsx)(O.u,{variant:"tertiary",scale:"sm",onClick:function(){return st(z.a.LIQUIDITY_PERCENT,"100")},children:"Max"})]})]})]}),!De&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(m.b,{children:Object(G.jsx)(O.d,{color:"textSubtle",width:"24px",my:"16px"})}),Object(G.jsxs)(m.a,{gap:"10px",children:[Object(G.jsx)(O.Cc,{bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:Ee("You will receive")}),Object(G.jsxs)(I.c,{children:[Object(G.jsxs)(O.db,{justifyContent:"space-between",mb:"8px",children:[Object(G.jsxs)(O.db,{children:[Object(G.jsx)(E.a,{currency:ve}),Object(G.jsx)(O.Cc,{small:!0,color:"textSubtle",id:"remove-liquidity-tokena-symbol",ml:"4px",children:null===ve||void 0===ve?void 0:ve.symbol})]}),Object(G.jsx)(O.Cc,{small:!0,children:Xe[z.a.CURRENCY_A]||"-"})]}),Object(G.jsxs)(O.db,{justifyContent:"space-between",children:[Object(G.jsxs)(O.db,{children:[Object(G.jsx)(E.a,{currency:xe}),Object(G.jsx)(O.Cc,{small:!0,color:"textSubtle",id:"remove-liquidity-tokenb-symbol",ml:"4px",children:null===xe||void 0===xe?void 0:xe.symbol})]}),Object(G.jsx)(O.Cc,{small:!0,children:Xe[z.a.CURRENCY_B]||"-"})]}),Ce&&(ft||ht)?Object(G.jsx)(y.b,{style:{justifyContent:"flex-end",fontSize:"14px"},children:ht?Object(G.jsx)(_.a,{to:"/remove/".concat(ve===j.d?j.n[Ce].address:je,"/").concat(xe===j.d?j.n[Ce].address:Oe),children:Ee("Receive WBNB")}):ft?Object(G.jsx)(_.a,{to:"/remove/".concat(ve&&Object(j.o)(ve,j.n[Ce])?"BNB":je,"/").concat(xe&&Object(j.o)(xe,j.n[Ce])?"BNB":Oe),children:Ee("Receive BNB")}):null}):null]})]})]}),De&&Object(G.jsxs)(O.p,{my:"16px",children:[Object(G.jsx)(C.a,{value:Xe[z.a.LIQUIDITY],onUserInput:dt,onMax:function(){st(z.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Ze,disableCurrencySelect:!0,currency:null===Ne||void 0===Ne?void 0:Ne.liquidityToken,pair:Ne,id:"liquidity-amount",onCurrencySelect:function(){return null}}),Object(G.jsx)(m.b,{children:Object(G.jsx)(O.d,{width:"24px",my:"16px"})}),Object(G.jsx)(C.a,{hideBalance:!0,value:Xe[z.a.CURRENCY_A],onUserInput:ut,onMax:function(){return st(z.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Ze,currency:ve,label:Ee("Output"),onCurrencySelect:yt,id:"remove-liquidity-tokena"}),Object(G.jsx)(m.b,{children:Object(G.jsx)(O.a,{width:"24px",my:"16px"})}),Object(G.jsx)(C.a,{hideBalance:!0,value:Xe[z.a.CURRENCY_B],onUserInput:bt,onMax:function(){return st(z.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Ze,currency:xe,label:Ee("Output"),onCurrencySelect:Rt,id:"remove-liquidity-tokenb"})]}),Ne&&Object(G.jsxs)(m.a,{gap:"10px",style:{marginTop:"16px"},children:[Object(G.jsx)(O.Cc,{bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:Ee("Prices")}),Object(G.jsxs)(I.c,{children:[Object(G.jsxs)(O.db,{justifyContent:"space-between",children:[Object(G.jsxs)(O.Cc,{small:!0,color:"textSubtle",children:["1 ",null===ve||void 0===ve?void 0:ve.symbol," ="]}),Object(G.jsxs)(O.Cc,{small:!0,children:[Re?Ne.priceOf(Re).toSignificant(6):"-"," ",null===xe||void 0===xe?void 0:xe.symbol]})]}),Object(G.jsxs)(O.db,{justifyContent:"space-between",children:[Object(G.jsxs)(O.Cc,{small:!0,color:"textSubtle",children:["1 ",null===xe||void 0===xe?void 0:xe.symbol," ="]}),Object(G.jsxs)(O.Cc,{small:!0,children:[Ie?Ne.priceOf(Ie).toSignificant(6):"-"," ",null===ve||void 0===ve?void 0:ve.symbol]})]})]})]}),Object(G.jsx)(O.p,{position:"relative",mt:"16px",children:pe?Object(G.jsxs)(y.b,{children:[Object(G.jsx)(O.u,{variant:rt===A.a.APPROVED||null!==nt?"success":"primary",onClick:function(){return lt.apply(this,arguments)},disabled:rt!==A.a.NOT_APPROVED||null!==nt,width:"100%",mr:"0.5rem",children:rt===A.a.PENDING?Object(G.jsx)(P.a,{children:Ee("Enabling")}):rt===A.a.APPROVED||null!==nt?Ee("Enabled"):Ee("Enable")}),Object(G.jsx)(O.u,{variant:!Be&&_e[z.a.CURRENCY_A]&&_e[z.a.CURRENCY_B]?"danger":"primary",onClick:function(){Yt()},width:"100%",disabled:!Be||null===nt&&rt!==A.a.APPROVED,children:ke||Ee("Remove")})]}):Object(G.jsx)(R.a,{})})]})]}),Ne?Object(G.jsx)(m.a,{style:{minWidth:"20rem",width:"100%",maxWidth:"400px",marginTop:"1rem"},children:Object(G.jsx)(h.a,{showUnwrapped:ft,pair:Ne})}):null]})}}}]);
//# sourceMappingURL=32.d5bdafc5.chunk.js.map