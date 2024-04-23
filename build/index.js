'use strict';

var chunkX5ZRIAH6_js = require('./chunk-X5ZRIAH6.js');
var chunkLC4A3LMM_js = require('./chunk-LC4A3LMM.js');
var styledComponents = require('styled-components');
var react = require('react');

var W=styledComponents.createGlobalStyle`
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
`;var Q=styledComponents.createGlobalStyle`
      ${t=>t.resources?.map(function(e){return e})}
    `;var ee=styledComponents.createGlobalStyle`
    
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
`;var O=({base:t,config:e})=>e||t;var E=({base:t,config:e})=>e||t;var j=({base:t,config:e})=>{let l=chunkLC4A3LMM_js.a(e,chunkX5ZRIAH6_js.b,["family","primary"]),a=chunkLC4A3LMM_js.a(e,chunkLC4A3LMM_js.a(e,chunkX5ZRIAH6_js.c,["family","primary"]),["family","accent"]),i=chunkLC4A3LMM_js.a(e,chunkLC4A3LMM_js.a(e,chunkX5ZRIAH6_js.d,["family","primary"]),["family","supporting"]),s=chunkLC4A3LMM_js.a(e,chunkX5ZRIAH6_js.g,["scale","md"]),m=chunkLC4A3LMM_js.a(e,chunkX5ZRIAH6_js.f,["scale","sm"]),p=chunkLC4A3LMM_js.a(e,chunkX5ZRIAH6_js.e,["scale","xs"]),f=chunkLC4A3LMM_js.a(e,chunkX5ZRIAH6_js.h,["scale","lg"]),c=chunkLC4A3LMM_js.a(e,chunkX5ZRIAH6_js.i,["scale","xl"]),y=chunkLC4A3LMM_js.a(e,chunkX5ZRIAH6_js.j,["scale","2xl"]),d=chunkLC4A3LMM_js.a(e,chunkX5ZRIAH6_js.k,["scale","3xl"]),u=chunkLC4A3LMM_js.a(e,chunkX5ZRIAH6_js.l,["scale","4xl"]),h=chunkLC4A3LMM_js.a(e,chunkX5ZRIAH6_js.m,["scale","5xl"]),x=chunkLC4A3LMM_js.a(e,chunkX5ZRIAH6_js.n,["scale","6xl"]),T=chunkLC4A3LMM_js.a(e,chunkX5ZRIAH6_js.o,["scale","7xl"]),g=chunkLC4A3LMM_js.a(e,chunkX5ZRIAH6_js.p,["scale","8xl"]),C=chunkLC4A3LMM_js.a(e,chunkX5ZRIAH6_js.q,["scale","9xl"]);return {primary:{xs:chunkX5ZRIAH6_js.a({family:l,scale:p}),sm:chunkX5ZRIAH6_js.a({family:l,scale:m}),md:chunkX5ZRIAH6_js.a({family:l,scale:s}),lg:chunkX5ZRIAH6_js.a({family:l,scale:f}),xl:chunkX5ZRIAH6_js.a({family:l,scale:c}),"2xl":chunkX5ZRIAH6_js.a({family:l,scale:y}),"3xl":chunkX5ZRIAH6_js.a({family:l,scale:d}),"4xl":chunkX5ZRIAH6_js.a({family:l,scale:u}),"5xl":chunkX5ZRIAH6_js.a({family:l,scale:h}),"6xl":chunkX5ZRIAH6_js.a({family:l,scale:x}),"7xl":chunkX5ZRIAH6_js.a({family:l,scale:T}),"8xl":chunkX5ZRIAH6_js.a({family:l,scale:g}),"9xl":chunkX5ZRIAH6_js.a({family:l,scale:C})},accent:{xs:chunkX5ZRIAH6_js.a({family:a,scale:p}),sm:chunkX5ZRIAH6_js.a({family:a,scale:m}),md:chunkX5ZRIAH6_js.a({family:a,scale:s}),lg:chunkX5ZRIAH6_js.a({family:a,scale:f}),xl:chunkX5ZRIAH6_js.a({family:a,scale:c}),"2xl":chunkX5ZRIAH6_js.a({family:a,scale:y}),"3xl":chunkX5ZRIAH6_js.a({family:a,scale:d}),"4xl":chunkX5ZRIAH6_js.a({family:a,scale:u}),"5xl":chunkX5ZRIAH6_js.a({family:a,scale:h}),"6xl":chunkX5ZRIAH6_js.a({family:a,scale:x}),"7xl":chunkX5ZRIAH6_js.a({family:a,scale:T}),"8xl":chunkX5ZRIAH6_js.a({family:a,scale:g}),"9xl":chunkX5ZRIAH6_js.a({family:a,scale:C})},supporting:{xs:chunkX5ZRIAH6_js.a({family:i,scale:p}),sm:chunkX5ZRIAH6_js.a({family:i,scale:m}),md:chunkX5ZRIAH6_js.a({family:i,scale:s}),lg:chunkX5ZRIAH6_js.a({family:i,scale:f}),xl:chunkX5ZRIAH6_js.a({family:i,scale:c}),"2xl":chunkX5ZRIAH6_js.a({family:i,scale:y}),"3xl":chunkX5ZRIAH6_js.a({family:i,scale:d}),"4xl":chunkX5ZRIAH6_js.a({family:i,scale:u}),"5xl":chunkX5ZRIAH6_js.a({family:i,scale:h}),"6xl":chunkX5ZRIAH6_js.a({family:i,scale:x}),"7xl":chunkX5ZRIAH6_js.a({family:i,scale:T}),"8xl":chunkX5ZRIAH6_js.a({family:i,scale:g}),"9xl":chunkX5ZRIAH6_js.a({family:i,scale:C})}}};var G=({base:t,config:e})=>({resources:e?.resources?E({base:t.resources,config:e?.resources??[]}):t.resources,fonts:e?.fonts?j({base:t.fonts,config:e?.fonts?e.fonts:{}}):t.fonts});var n=({base:t,config:e})=>{let l=chunkLC4A3LMM_js.a(e,t.tint_500,["tint_500"]),a=t.tint_500!=l,i=chunkLC4A3LMM_js.a(e,a?l:t.tint_400,["tint_400"]),s=chunkLC4A3LMM_js.a(e,a?i:t.tint_300,["tint_300"]),m=chunkLC4A3LMM_js.a(e,a?s:t.tint_200,["tint_200"]),p=chunkLC4A3LMM_js.a(e,a?m:t.tint_100,["tint_100"]),f=chunkLC4A3LMM_js.a(e,a?p:t.tint_50,["tint_50"]),c=chunkLC4A3LMM_js.a(e,a?l:t.tint_600,["tint_600"]),y=chunkLC4A3LMM_js.a(e,a?c:t.tint_700,["tint_700"]),d=chunkLC4A3LMM_js.a(e,a?y:t.tint_800,["tint_800"]),u=chunkLC4A3LMM_js.a(e,a?d:t.tint_900,["tint_900"]),h=chunkLC4A3LMM_js.a(e,a?u:t.tint_950,["tint_950"]);return {tint_50:f,tint_100:p,tint_200:m,tint_300:s,tint_400:i,tint_500:l,tint_600:c,tint_700:y,tint_800:d,tint_900:u,tint_950:h}};var K=({base:t,config:e})=>e||t;var q=({base:t,config:e})=>({danger:n({base:t.danger,config:e.danger?e.danger:{}}),warning:n({base:t.warning,config:e.warning?e.warning:{}}),success:n({base:t.success,config:e.success?e.success:{}}),info:n({base:t.info,config:e.info?e.info:{}}),neutrals:n({base:t.neutrals,config:e.neutrals?e.neutrals:{}}),primary:n({base:t.primary,config:e.primary?e.primary:{}}),accent:n({base:t.accent,config:e.accent?e.accent:{}}),supporting:n({base:t.supporting,config:e.supporting?e.supporting:{}}),additional:K({base:t.additional,config:e?.additional?e.additional:[]})});var L=({base:t,config:e})=>({none:t.none,xs:e?e.xs:t.xs,sm:e?e.sm:t.sm,md:e?e.md:t.md,lg:e?e.lg:t.lg,xl:e?e.xl:t.xl,"2xl":e?e["2xl"]:t["2xl"],"3xl":e?e["3xl"]:t["3xl"],full:"9999px"});var te=({base:t,config:e})=>({alternate:O({base:t.alternate,config:e?.alternate?e.alternate:[]}),typography:e?.typography?G({base:t.typography,config:{resources:e.typography?.resources?e.typography.resources:[],fonts:e.typography?.fonts?e.typography.fonts:{}}}):t.typography,colors:e?.colors?q({base:t.colors,config:e.colors?e.colors:{}}):t.colors,utility:t.utility,radius:L({base:t.radius,config:e.radius})});var b=(a=>(a.STANDARD="STANDARD",a.INVERTED="INVERTED",a.CONTRAST="CONTRAST",a))(b||{});var oe=react.createContext("STANDARD");var ae=()=>chunkX5ZRIAH6_js.s().alternate;

Object.defineProperty(exports, "ThemeCtx", {
    enumerable: true,
    get: function () { return chunkX5ZRIAH6_js.r; }
});
Object.defineProperty(exports, "useTheme", {
    enumerable: true,
    get: function () { return chunkX5ZRIAH6_js.s; }
});
Object.defineProperty(exports, "useThemeColor", {
    enumerable: true,
    get: function () { return chunkX5ZRIAH6_js.t; }
});
Object.defineProperty(exports, "useThemeFonts", {
    enumerable: true,
    get: function () { return chunkX5ZRIAH6_js.u; }
});
exports.StyleProviderAnimation = W;
exports.StyleProviderFontFace = Q;
exports.StyleProviderPreFlight = ee;
exports.ThemeBuilder = te;
exports.ThemeMode = b;
exports.ThemeModeCtx = oe;
exports.useThemeAlternate = ae;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map