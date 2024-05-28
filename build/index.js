'use strict';

var chunkAWEEIRRH_js = require('./chunk-AWEEIRRH.js');
var chunkLC4A3LMM_js = require('./chunk-LC4A3LMM.js');
var styledComponents = require('styled-components');
var react = require('react');

var he=styledComponents.createGlobalStyle`
      ${t=>t.animations?.map(function(e){return e})}

      @keyframes spin {
          from {
              transform: rotate(0deg);
          }
          to {
              transform: rotate(360deg);
          }
      }

      @keyframes ping {
          75%, 100% {
              transform: scale(2);
              opacity: 0;
          }
      }

      @keyframes pulse {
          0%, 100% {
              opacity: 1;
          }
          50% {
              opacity: .5;
          }
      }

      @keyframes bounce {
          0%, 100% {
              transform: translateY(-25%);
              animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
              transform: translateY(0);
              animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
      }
`;var ce=styledComponents.createGlobalStyle`
      ${t=>t.resources?.map(function(e){return e})}
    `;var ue=styledComponents.createGlobalStyle`
    
    /* Default margins are removed */
    blockquote,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    figure,
    p,
    pre {
        margin: 0;
    }

    /* Headings are unstyled */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: inherit;
        font-weight: inherit;
    }

    /* Lists are unstyled */
    ol,
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    
    /* Images are block-level */
    img,
    svg,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object {
        display: block;
        vertical-align: middle;
    }

    /* Images are constrained to the parent width */
    img,
    video {
        max-width: 100%;
        height: auto;
    }
    
    /* Border styles are reset globally */
    *,
    ::before,
    ::after {
        border-width: 0;
        border-style: solid;
        border-color: currentColor;
    }

    /*
        Set default box-sizing to border-box, since as default most elements will prefer this sizing. 
        info : https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
    */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* Prevent font size inflation on mobile devices */
    html {
        -moz-text-size-adjust: none;
        -webkit-text-size-adjust: none;
        text-size-adjust: none;
    }

    /* Remove default margin in favour of better control in authored CSS */
    body, h1, h2, h3, h4, p,
    figure, blockquote, dl, dd {
        margin-block-end: 0;
    }

    /* Set core body defaults */
    body {
        min-height: 100vh;
    }

    /* Inherit fonts for inputs and buttons */
    input, button,
    textarea, select {
        font-family: inherit;
        font-size: inherit;
    }

    /* Make sure textareas without a rows attribute are not tiny */
    textarea:not([rows]) {
        min-height: 10em;
    }

    /* Anything that has been anchored to should have extra scroll margin */
    :target {
        scroll-margin-block: 5ex;
    }
`;var Z=({base:t,config:e})=>e||t;var ee=({base:t,config:e})=>e||t;var te=({base:t,config:e})=>{let l=chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.b,["family","primary"]),i=chunkLC4A3LMM_js.a(e,chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.c,["family","primary"]),["family","accent"]),a=chunkLC4A3LMM_js.a(e,chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.d,["family","primary"]),["family","supporting"]),h=chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.g,["scale","md"]),p=chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.f,["scale","sm"]),c=chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.e,["scale","xs"]),g=chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.h,["scale","lg"]),y=chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.i,["scale","xl"]),u=chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.j,["scale","2xl"]),d=chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.k,["scale","3xl"]),x=chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.l,["scale","4xl"]),f=chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.m,["scale","5xl"]),T=chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.n,["scale","6xl"]),w=chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.o,["scale","7xl"]),C=chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.p,["scale","8xl"]),b=chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.q,["scale","9xl"]),S=chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.g,["weight","md"]),I=chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.f,["weight","sm"]),_=chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.e,["weight","xs"]),A=chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.h,["weight","lg"]),R=chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.i,["weight","xl"]),B=chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.j,["weight","2xl"]),F=chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.k,["weight","3xl"]),v=chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.l,["weight","4xl"]),z=chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.m,["weight","5xl"]),D=chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.n,["weight","6xl"]),W=chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.o,["weight","7xl"]),M=chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.p,["weight","8xl"]),k=chunkLC4A3LMM_js.a(e,chunkAWEEIRRH_js.q,["weight","9xl"]);return {primary:{xs:chunkAWEEIRRH_js.a({family:l,scale:c,weight:_}),sm:chunkAWEEIRRH_js.a({family:l,scale:p,weight:I}),md:chunkAWEEIRRH_js.a({family:l,scale:h,weight:S}),lg:chunkAWEEIRRH_js.a({family:l,scale:g,weight:A}),xl:chunkAWEEIRRH_js.a({family:l,scale:y,weight:R}),"2xl":chunkAWEEIRRH_js.a({family:l,scale:u,weight:B}),"3xl":chunkAWEEIRRH_js.a({family:l,scale:d,weight:F}),"4xl":chunkAWEEIRRH_js.a({family:l,scale:x,weight:v}),"5xl":chunkAWEEIRRH_js.a({family:l,scale:f,weight:z}),"6xl":chunkAWEEIRRH_js.a({family:l,scale:T,weight:D}),"7xl":chunkAWEEIRRH_js.a({family:l,scale:w,weight:W}),"8xl":chunkAWEEIRRH_js.a({family:l,scale:C,weight:M}),"9xl":chunkAWEEIRRH_js.a({family:l,scale:b,weight:k})},accent:{xs:chunkAWEEIRRH_js.a({family:i,scale:c,weight:_}),sm:chunkAWEEIRRH_js.a({family:i,scale:p,weight:I}),md:chunkAWEEIRRH_js.a({family:i,scale:h,weight:S}),lg:chunkAWEEIRRH_js.a({family:i,scale:g,weight:A}),xl:chunkAWEEIRRH_js.a({family:i,scale:y,weight:R}),"2xl":chunkAWEEIRRH_js.a({family:i,scale:u,weight:B}),"3xl":chunkAWEEIRRH_js.a({family:i,scale:d,weight:F}),"4xl":chunkAWEEIRRH_js.a({family:i,scale:x,weight:v}),"5xl":chunkAWEEIRRH_js.a({family:i,scale:f,weight:z}),"6xl":chunkAWEEIRRH_js.a({family:i,scale:T,weight:D}),"7xl":chunkAWEEIRRH_js.a({family:i,scale:w,weight:W}),"8xl":chunkAWEEIRRH_js.a({family:i,scale:C,weight:M}),"9xl":chunkAWEEIRRH_js.a({family:i,scale:b,weight:k})},supporting:{xs:chunkAWEEIRRH_js.a({family:a,scale:c,weight:_}),sm:chunkAWEEIRRH_js.a({family:a,scale:p,weight:I}),md:chunkAWEEIRRH_js.a({family:a,scale:h,weight:S}),lg:chunkAWEEIRRH_js.a({family:a,scale:g,weight:A}),xl:chunkAWEEIRRH_js.a({family:a,scale:y,weight:R}),"2xl":chunkAWEEIRRH_js.a({family:a,scale:u,weight:B}),"3xl":chunkAWEEIRRH_js.a({family:a,scale:d,weight:F}),"4xl":chunkAWEEIRRH_js.a({family:a,scale:x,weight:v}),"5xl":chunkAWEEIRRH_js.a({family:a,scale:f,weight:z}),"6xl":chunkAWEEIRRH_js.a({family:a,scale:T,weight:D}),"7xl":chunkAWEEIRRH_js.a({family:a,scale:w,weight:W}),"8xl":chunkAWEEIRRH_js.a({family:a,scale:C,weight:M}),"9xl":chunkAWEEIRRH_js.a({family:a,scale:b,weight:k})}}};var re=({base:t,config:e})=>({resources:e?.resources?ee({base:t.resources,config:e?.resources??[]}):t.resources,fonts:e?.fonts?te({base:t.fonts,config:e?.fonts?e.fonts:{}}):t.fonts});var s=({base:t,config:e})=>{let l=chunkLC4A3LMM_js.a(e,t.tint_500,["tint_500"]),i=t.tint_500!=l,a=chunkLC4A3LMM_js.a(e,i?l:t.tint_400,["tint_400"]),h=chunkLC4A3LMM_js.a(e,i?a:t.tint_300,["tint_300"]),p=chunkLC4A3LMM_js.a(e,i?h:t.tint_200,["tint_200"]),c=chunkLC4A3LMM_js.a(e,i?p:t.tint_100,["tint_100"]),g=chunkLC4A3LMM_js.a(e,i?c:t.tint_50,["tint_50"]),y=chunkLC4A3LMM_js.a(e,i?l:t.tint_600,["tint_600"]),u=chunkLC4A3LMM_js.a(e,i?y:t.tint_700,["tint_700"]),d=chunkLC4A3LMM_js.a(e,i?u:t.tint_800,["tint_800"]),x=chunkLC4A3LMM_js.a(e,i?d:t.tint_900,["tint_900"]),f=chunkLC4A3LMM_js.a(e,i?x:t.tint_950,["tint_950"]);return {tint_50:g,tint_100:c,tint_200:p,tint_300:h,tint_400:a,tint_500:l,tint_600:y,tint_700:u,tint_800:d,tint_900:x,tint_950:f}};var oe=({base:t,config:e})=>e||t;var ie=({base:t,config:e})=>({danger:s({base:t.danger,config:e.danger?e.danger:{}}),warning:s({base:t.warning,config:e.warning?e.warning:{}}),success:s({base:t.success,config:e.success?e.success:{}}),info:s({base:t.info,config:e.info?e.info:{}}),neutrals:s({base:t.neutrals,config:e.neutrals?e.neutrals:{}}),surfaces:s({base:t.surfaces,config:e.surfaces?e.surfaces:{}}),primary:s({base:t.primary,config:e.primary?e.primary:{}}),accent:s({base:t.accent,config:e.accent?e.accent:{}}),supporting:s({base:t.supporting,config:e.supporting?e.supporting:{}}),additional:oe({base:t.additional,config:e?.additional?e.additional:[]})});var le=({base:t,config:e})=>({none:t.none,xs:e?e.xs:t.xs,sm:e?e.sm:t.sm,md:e?e.md:t.md,lg:e?e.lg:t.lg,xl:e?e.xl:t.xl,"2xl":e?e["2xl"]:t["2xl"],"3xl":e?e["3xl"]:t["3xl"],full:"9999px"});var de=({config:t})=>({alternate:Z({base:chunkAWEEIRRH_js.r.alternate,config:t?.alternate?t.alternate:[]}),typography:t?.typography?re({base:chunkAWEEIRRH_js.r.typography,config:{resources:t.typography?.resources?t.typography.resources:[],fonts:t.typography?.fonts?t.typography.fonts:{}}}):chunkAWEEIRRH_js.r.typography,colors:t?.colors?ie({base:chunkAWEEIRRH_js.r.colors,config:t.colors?t.colors:{}}):chunkAWEEIRRH_js.r.colors,utility:chunkAWEEIRRH_js.r.utility,radius:le({base:chunkAWEEIRRH_js.r.radius,config:t.radius})});var $=(i=>(i.STANDARD="STANDARD",i.INVERTED="INVERTED",i.CONTRAST="CONTRAST",i))($||{});var ge=react.createContext("STANDARD");var fe=()=>chunkAWEEIRRH_js.t().alternate;var Te=()=>chunkAWEEIRRH_js.t().radius;var we=()=>chunkAWEEIRRH_js.t().utility;

Object.defineProperty(exports, "ThemeCtx", {
    enumerable: true,
    get: function () { return chunkAWEEIRRH_js.s; }
});
Object.defineProperty(exports, "useTheme", {
    enumerable: true,
    get: function () { return chunkAWEEIRRH_js.t; }
});
Object.defineProperty(exports, "useThemeColor", {
    enumerable: true,
    get: function () { return chunkAWEEIRRH_js.u; }
});
Object.defineProperty(exports, "useThemeFonts", {
    enumerable: true,
    get: function () { return chunkAWEEIRRH_js.v; }
});
exports.StyleProviderAnimation = he;
exports.StyleProviderFontFace = ce;
exports.StyleProviderPreFlight = ue;
exports.ThemeBuilder = de;
exports.ThemeMode = $;
exports.ThemeModeCtx = ge;
exports.useThemeAlternate = fe;
exports.useThemeRadius = Te;
exports.useThemeUtility = we;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map