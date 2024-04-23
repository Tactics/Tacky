'use strict';

var react = require('react');

var e=({family:d,scale:C})=>C+" "+d;var t='ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',i='ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',n='ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',a="0.75rem/1rem",m="0.875rem/1.25rem",s="1rem/1.5rem",r="1.125rem/1.75rem",l="1.25rem/1.75rem",f="1.5rem/2rem",o="1.875rem/2.25rem",c="2.25rem/2.5rem",_="3rem/1",x="3.75rem/1",g="4.5rem/1",p="6rem/1",b="8rem/1",T="0.125rem",h="0.25rem",u="0.375rem",F="0.5rem",E="0.75rem",S="1rem",B="1.5rem",y={alternate:[],typography:{resources:[],fonts:{primary:{xs:e({scale:a,family:t}),sm:e({scale:m,family:t}),md:e({scale:s,family:t}),lg:e({scale:r,family:t}),xl:e({scale:l,family:t}),"2xl":e({scale:f,family:t}),"3xl":e({scale:o,family:t}),"4xl":e({scale:c,family:t}),"5xl":e({scale:_,family:t}),"6xl":e({scale:x,family:t}),"7xl":e({scale:g,family:t}),"8xl":e({scale:p,family:t}),"9xl":e({scale:b,family:t})},accent:{xs:e({scale:a,family:i}),sm:e({scale:m,family:i}),md:e({scale:s,family:i}),lg:e({scale:r,family:i}),xl:e({scale:l,family:i}),"2xl":e({scale:f,family:i}),"3xl":e({scale:o,family:i}),"4xl":e({scale:c,family:i}),"5xl":e({scale:_,family:i}),"6xl":e({scale:x,family:i}),"7xl":e({scale:g,family:i}),"8xl":e({scale:p,family:i}),"9xl":e({scale:b,family:i})},supporting:{xs:e({scale:a,family:n}),sm:e({scale:m,family:n}),md:e({scale:s,family:n}),lg:e({scale:r,family:n}),xl:e({scale:l,family:n}),"2xl":e({scale:f,family:n}),"3xl":e({scale:o,family:n}),"4xl":e({scale:c,family:n}),"5xl":e({scale:_,family:n}),"6xl":e({scale:x,family:n}),"7xl":e({scale:g,family:n}),"8xl":e({scale:p,family:n}),"9xl":e({scale:b,family:n})}}},colors:{danger:{tint_50:"#fef2f2",tint_100:"#fee2e2",tint_200:"#fecaca",tint_300:"#fca5a5",tint_400:"#f87171",tint_500:"#ef4444",tint_600:"#dc2626",tint_700:"#b91c1c",tint_800:"#991b1b",tint_900:"#7f1d1d",tint_950:"#450a0a"},warning:{tint_50:"#fffbeb",tint_100:"#fef3c7",tint_200:"#fde68a",tint_300:"#fcd34d",tint_400:"#fbbf24",tint_500:"#f59e0b",tint_600:"#d97706",tint_700:"#b45309",tint_800:"#92400e",tint_900:"#78350f",tint_950:"#451a03"},success:{tint_50:"#f7fee7",tint_100:"#ecfccb",tint_200:"#d9f99d",tint_300:"#bef264",tint_400:"#a3e635",tint_500:"#84cc16",tint_600:"#65a30d",tint_700:"#4d7c0f",tint_800:"#3f6212",tint_900:"#365314",tint_950:"#1a2e05"},info:{tint_50:"#f0f9ff",tint_100:"#e0f2fe",tint_200:"#bae6fd",tint_300:"#7dd3fc",tint_400:"#38bdf8",tint_500:"#0ea5e9",tint_600:"#0284c7",tint_700:"#0369a1",tint_800:"#075985",tint_900:"#0c4a6e",tint_950:"#082f49"},neutrals:{tint_50:"#FFFFFF",tint_100:"#f8fafb",tint_200:"#F5F7FA",tint_300:"#E5E8EB",tint_400:"#E5E8EB",tint_500:"#E5E8EB",tint_600:"#E5E8EB",tint_700:"#E5E8EB",tint_800:"#9AA5B1",tint_900:"#515F6C",tint_950:"#343d45"},primary:{tint_50:"#E0FCFF",tint_100:"#E0FCFF",tint_200:"#BEF8FD",tint_300:"#87EAF2",tint_400:"#54D1DB",tint_500:"#38BEC9",tint_600:"#2CB1BC",tint_700:"#14919B",tint_800:"#0E7C86",tint_900:"#0A6C74",tint_950:"#044E54"},accent:{tint_50:"#fdf3f5",tint_100:"#ffe3ec",tint_200:"#ffb8d2",tint_300:"#ff8cba",tint_400:"#f364a2",tint_500:"#e8368f",tint_600:"#da127d",tint_700:"#bc0a6f",tint_800:"#a30664",tint_900:"#870557",tint_950:"#620042"},supporting:{tint_50:"#f1f4fb",tint_100:"#e0e8f9",tint_200:"#bed0f7",tint_300:"#98aeeb",tint_400:"#7b93db",tint_500:"#647acb",tint_600:"#4c63b6",tint_700:"#4055a8",tint_800:"#35469c",tint_900:"#2d3a8c",tint_950:"#19216c"},additional:[]},utility:{spacing:{0:"0px",px:"1px",.5:"0.125rem",1:"0.25rem",1.5:"0.375rem",2:"0.5rem",2.5:"0.625rem",3:"0.75rem",3.5:"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",11:"2.75rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"}},radius:{none:"0px",xs:T,sm:h,md:u,lg:F,xl:E,"2xl":S,"3xl":B,full:"9999px"}};var D=react.createContext(y);

exports.a = e;
exports.b = t;
exports.c = i;
exports.d = n;
exports.e = a;
exports.f = m;
exports.g = s;
exports.h = r;
exports.i = l;
exports.j = f;
exports.k = o;
exports.l = c;
exports.m = _;
exports.n = x;
exports.o = g;
exports.p = p;
exports.q = b;
exports.r = y;
exports.s = D;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-JOKTYZAV.js.map