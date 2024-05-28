'use strict';

var react = require('react');

var e=({family:r,scale:L,weight:D})=>L+" "+r+" "+D;var t='ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',i='ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',n='ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',o="0.75rem/1rem",a="0.875rem/1.25rem",l="1rem/1.5rem",f="1.125rem/1.75rem",c="1.25rem/1.75rem",g="1.5rem/2rem",h="1.875rem/2.25rem",_="2.25rem/2.5rem",x="3rem/1",p="3.75rem/1",b="4.5rem/1",C="6rem/1",T="8rem/1",y=500,u=500,d=500,w=500,E=500,F=500,X=500,B=500,S=500,W=500,I=500,A=500,R=500,j="0.125rem",N="0.25rem",G="0.375rem",P="0.5rem",U="0.75rem",k="1rem",q="1.5rem",m={alternate:[],typography:{resources:[],fonts:{primary:{xs:e({scale:o,family:t,weight:y}),sm:e({scale:a,family:t,weight:u}),md:e({scale:l,family:t,weight:d}),lg:e({scale:f,family:t,weight:w}),xl:e({scale:c,family:t,weight:E}),"2xl":e({scale:g,family:t,weight:F}),"3xl":e({scale:h,family:t,weight:X}),"4xl":e({scale:_,family:t,weight:B}),"5xl":e({scale:x,family:t,weight:S}),"6xl":e({scale:p,family:t,weight:W}),"7xl":e({scale:b,family:t,weight:I}),"8xl":e({scale:C,family:t,weight:A}),"9xl":e({scale:T,family:t,weight:R})},accent:{xs:e({scale:o,family:i,weight:y}),sm:e({scale:a,family:i,weight:u}),md:e({scale:l,family:i,weight:d}),lg:e({scale:f,family:i,weight:w}),xl:e({scale:c,family:i,weight:E}),"2xl":e({scale:g,family:i,weight:F}),"3xl":e({scale:h,family:i,weight:X}),"4xl":e({scale:_,family:i,weight:B}),"5xl":e({scale:x,family:i,weight:S}),"6xl":e({scale:p,family:i,weight:W}),"7xl":e({scale:b,family:i,weight:I}),"8xl":e({scale:C,family:i,weight:A}),"9xl":e({scale:T,family:i,weight:R})},supporting:{xs:e({scale:o,family:n,weight:y}),sm:e({scale:a,family:n,weight:u}),md:e({scale:l,family:n,weight:d}),lg:e({scale:f,family:n,weight:w}),xl:e({scale:c,family:n,weight:E}),"2xl":e({scale:g,family:n,weight:F}),"3xl":e({scale:h,family:n,weight:X}),"4xl":e({scale:_,family:n,weight:B}),"5xl":e({scale:x,family:n,weight:S}),"6xl":e({scale:p,family:n,weight:W}),"7xl":e({scale:b,family:n,weight:I}),"8xl":e({scale:C,family:n,weight:A}),"9xl":e({scale:T,family:n,weight:R})}}},colors:{danger:{tint_50:"#fef2f2",tint_100:"#fee2e2",tint_200:"#fecaca",tint_300:"#fca5a5",tint_400:"#f87171",tint_500:"#ef4444",tint_600:"#dc2626",tint_700:"#b91c1c",tint_800:"#991b1b",tint_900:"#7f1d1d",tint_950:"#450a0a"},warning:{tint_50:"#fffbeb",tint_100:"#fef3c7",tint_200:"#fde68a",tint_300:"#fcd34d",tint_400:"#fbbf24",tint_500:"#f59e0b",tint_600:"#d97706",tint_700:"#b45309",tint_800:"#92400e",tint_900:"#78350f",tint_950:"#451a03"},success:{tint_50:"#f7fee7",tint_100:"#ecfccb",tint_200:"#d9f99d",tint_300:"#bef264",tint_400:"#a3e635",tint_500:"#84cc16",tint_600:"#65a30d",tint_700:"#4d7c0f",tint_800:"#3f6212",tint_900:"#365314",tint_950:"#1a2e05"},info:{tint_50:"#f0f9ff",tint_100:"#e0f2fe",tint_200:"#bae6fd",tint_300:"#7dd3fc",tint_400:"#38bdf8",tint_500:"#0ea5e9",tint_600:"#0284c7",tint_700:"#0369a1",tint_800:"#075985",tint_900:"#0c4a6e",tint_950:"#082f49"},neutrals:{tint_50:"#FFFFFF",tint_100:"#f8fafb",tint_200:"#F5F7FA",tint_300:"#E5E8EB",tint_400:"#E5E8EB",tint_500:"#E5E8EB",tint_600:"#E5E8EB",tint_700:"#E5E8EB",tint_800:"#9AA5B1",tint_900:"#515F6C",tint_950:"#343d45"},surfaces:{tint_50:"#FFFFFF",tint_100:"#f8fafb",tint_200:"#F5F7FA",tint_300:"#E5E8EB",tint_400:"#E5E8EB",tint_500:"#E5E8EB",tint_600:"#E5E8EB",tint_700:"#E5E8EB",tint_800:"#9AA5B1",tint_900:"#515F6C",tint_950:"#343d45"},primary:{tint_50:"#E0FCFF",tint_100:"#E0FCFF",tint_200:"#BEF8FD",tint_300:"#87EAF2",tint_400:"#54D1DB",tint_500:"#38BEC9",tint_600:"#2CB1BC",tint_700:"#14919B",tint_800:"#0E7C86",tint_900:"#0A6C74",tint_950:"#044E54"},accent:{tint_50:"#fdf3f5",tint_100:"#ffe3ec",tint_200:"#ffb8d2",tint_300:"#ff8cba",tint_400:"#f364a2",tint_500:"#e8368f",tint_600:"#da127d",tint_700:"#bc0a6f",tint_800:"#a30664",tint_900:"#870557",tint_950:"#620042"},supporting:{tint_50:"#f1f4fb",tint_100:"#e0e8f9",tint_200:"#bed0f7",tint_300:"#98aeeb",tint_400:"#7b93db",tint_500:"#647acb",tint_600:"#4c63b6",tint_700:"#4055a8",tint_800:"#35469c",tint_900:"#2d3a8c",tint_950:"#19216c"},additional:[]},utility:{spacing:{0:"0px",px:"1px",.5:"0.125rem",1:"0.25rem",1.5:"0.375rem",2:"0.5rem",2.5:"0.625rem",3:"0.75rem",3.5:"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",11:"2.75rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"}},radius:{none:"0px",xs:j,sm:N,md:G,lg:P,xl:U,"2xl":k,"3xl":q,full:"9999px"}};var M=react.createContext(m);var s=()=>{try{return react.useContext(M)}catch{return m}};var ie=()=>s().colors;var me=()=>s().typography.fonts;

exports.a = e;
exports.b = t;
exports.c = i;
exports.d = n;
exports.e = o;
exports.f = a;
exports.g = l;
exports.h = f;
exports.i = c;
exports.j = g;
exports.k = h;
exports.l = _;
exports.m = x;
exports.n = p;
exports.o = b;
exports.p = C;
exports.q = T;
exports.r = m;
exports.s = M;
exports.t = s;
exports.u = ie;
exports.v = me;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-AWEEIRRH.js.map