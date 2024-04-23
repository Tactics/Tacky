'use strict';

var chunkX3P3LASA_js = require('./chunk-X3P3LASA.js');
var chunkLC4A3LMM_js = require('./chunk-LC4A3LMM.js');
var styledComponents = require('styled-components');
var react = require('react');

var J=styledComponents.createGlobalStyle`
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
`;var Z=styledComponents.createGlobalStyle`
      ${t=>t.resources?.map(function(e){return e})}
    `;var te=styledComponents.createGlobalStyle`
    
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
`;var E=({base:t,config:e})=>e||t;var j=({base:t,config:e})=>e||t;var G=({base:t,config:e})=>{let l=chunkLC4A3LMM_js.a(e,chunkX3P3LASA_js.b,["family","primary"]),a=chunkLC4A3LMM_js.a(e,chunkLC4A3LMM_js.a(e,chunkX3P3LASA_js.c,["family","primary"]),["family","accent"]),i=chunkLC4A3LMM_js.a(e,chunkLC4A3LMM_js.a(e,chunkX3P3LASA_js.d,["family","primary"]),["family","supporting"]),m=chunkLC4A3LMM_js.a(e,chunkX3P3LASA_js.g,["scale","md"]),p=chunkLC4A3LMM_js.a(e,chunkX3P3LASA_js.f,["scale","sm"]),c=chunkLC4A3LMM_js.a(e,chunkX3P3LASA_js.e,["scale","xs"]),h=chunkLC4A3LMM_js.a(e,chunkX3P3LASA_js.h,["scale","lg"]),y=chunkLC4A3LMM_js.a(e,chunkX3P3LASA_js.i,["scale","xl"]),d=chunkLC4A3LMM_js.a(e,chunkX3P3LASA_js.j,["scale","2xl"]),u=chunkLC4A3LMM_js.a(e,chunkX3P3LASA_js.k,["scale","3xl"]),f=chunkLC4A3LMM_js.a(e,chunkX3P3LASA_js.l,["scale","4xl"]),x=chunkLC4A3LMM_js.a(e,chunkX3P3LASA_js.m,["scale","5xl"]),T=chunkLC4A3LMM_js.a(e,chunkX3P3LASA_js.n,["scale","6xl"]),g=chunkLC4A3LMM_js.a(e,chunkX3P3LASA_js.o,["scale","7xl"]),C=chunkLC4A3LMM_js.a(e,chunkX3P3LASA_js.p,["scale","8xl"]),b=chunkLC4A3LMM_js.a(e,chunkX3P3LASA_js.q,["scale","9xl"]);return {primary:{xs:chunkX3P3LASA_js.a({family:l,scale:c}),sm:chunkX3P3LASA_js.a({family:l,scale:p}),md:chunkX3P3LASA_js.a({family:l,scale:m}),lg:chunkX3P3LASA_js.a({family:l,scale:h}),xl:chunkX3P3LASA_js.a({family:l,scale:y}),"2xl":chunkX3P3LASA_js.a({family:l,scale:d}),"3xl":chunkX3P3LASA_js.a({family:l,scale:u}),"4xl":chunkX3P3LASA_js.a({family:l,scale:f}),"5xl":chunkX3P3LASA_js.a({family:l,scale:x}),"6xl":chunkX3P3LASA_js.a({family:l,scale:T}),"7xl":chunkX3P3LASA_js.a({family:l,scale:g}),"8xl":chunkX3P3LASA_js.a({family:l,scale:C}),"9xl":chunkX3P3LASA_js.a({family:l,scale:b})},accent:{xs:chunkX3P3LASA_js.a({family:a,scale:c}),sm:chunkX3P3LASA_js.a({family:a,scale:p}),md:chunkX3P3LASA_js.a({family:a,scale:m}),lg:chunkX3P3LASA_js.a({family:a,scale:h}),xl:chunkX3P3LASA_js.a({family:a,scale:y}),"2xl":chunkX3P3LASA_js.a({family:a,scale:d}),"3xl":chunkX3P3LASA_js.a({family:a,scale:u}),"4xl":chunkX3P3LASA_js.a({family:a,scale:f}),"5xl":chunkX3P3LASA_js.a({family:a,scale:x}),"6xl":chunkX3P3LASA_js.a({family:a,scale:T}),"7xl":chunkX3P3LASA_js.a({family:a,scale:g}),"8xl":chunkX3P3LASA_js.a({family:a,scale:C}),"9xl":chunkX3P3LASA_js.a({family:a,scale:b})},supporting:{xs:chunkX3P3LASA_js.a({family:i,scale:c}),sm:chunkX3P3LASA_js.a({family:i,scale:p}),md:chunkX3P3LASA_js.a({family:i,scale:m}),lg:chunkX3P3LASA_js.a({family:i,scale:h}),xl:chunkX3P3LASA_js.a({family:i,scale:y}),"2xl":chunkX3P3LASA_js.a({family:i,scale:d}),"3xl":chunkX3P3LASA_js.a({family:i,scale:u}),"4xl":chunkX3P3LASA_js.a({family:i,scale:f}),"5xl":chunkX3P3LASA_js.a({family:i,scale:x}),"6xl":chunkX3P3LASA_js.a({family:i,scale:T}),"7xl":chunkX3P3LASA_js.a({family:i,scale:g}),"8xl":chunkX3P3LASA_js.a({family:i,scale:C}),"9xl":chunkX3P3LASA_js.a({family:i,scale:b})}}};var K=({base:t,config:e})=>({resources:e?.resources?j({base:t.resources,config:e?.resources??[]}):t.resources,fonts:e?.fonts?G({base:t.fonts,config:e?.fonts?e.fonts:{}}):t.fonts});var s=({base:t,config:e})=>{let l=chunkLC4A3LMM_js.a(e,t.tint_500,["tint_500"]),a=t.tint_500!=l,i=chunkLC4A3LMM_js.a(e,a?l:t.tint_400,["tint_400"]),m=chunkLC4A3LMM_js.a(e,a?i:t.tint_300,["tint_300"]),p=chunkLC4A3LMM_js.a(e,a?m:t.tint_200,["tint_200"]),c=chunkLC4A3LMM_js.a(e,a?p:t.tint_100,["tint_100"]),h=chunkLC4A3LMM_js.a(e,a?c:t.tint_50,["tint_50"]),y=chunkLC4A3LMM_js.a(e,a?l:t.tint_600,["tint_600"]),d=chunkLC4A3LMM_js.a(e,a?y:t.tint_700,["tint_700"]),u=chunkLC4A3LMM_js.a(e,a?d:t.tint_800,["tint_800"]),f=chunkLC4A3LMM_js.a(e,a?u:t.tint_900,["tint_900"]),x=chunkLC4A3LMM_js.a(e,a?f:t.tint_950,["tint_950"]);return {tint_50:h,tint_100:c,tint_200:p,tint_300:m,tint_400:i,tint_500:l,tint_600:y,tint_700:d,tint_800:u,tint_900:f,tint_950:x}};var q=({base:t,config:e})=>e||t;var L=({base:t,config:e})=>({danger:s({base:t.danger,config:e.danger?e.danger:{}}),warning:s({base:t.warning,config:e.warning?e.warning:{}}),success:s({base:t.success,config:e.success?e.success:{}}),info:s({base:t.info,config:e.info?e.info:{}}),neutrals:s({base:t.neutrals,config:e.neutrals?e.neutrals:{}}),primary:s({base:t.primary,config:e.primary?e.primary:{}}),accent:s({base:t.accent,config:e.accent?e.accent:{}}),supporting:s({base:t.supporting,config:e.supporting?e.supporting:{}}),additional:q({base:t.additional,config:e?.additional?e.additional:[]})});var Y=({base:t,config:e})=>({none:t.none,xs:e?e.xs:t.xs,sm:e?e.sm:t.sm,md:e?e.md:t.md,lg:e?e.lg:t.lg,xl:e?e.xl:t.xl,"2xl":e?e["2xl"]:t["2xl"],"3xl":e?e["3xl"]:t["3xl"],full:"9999px"});var re=({config:t})=>({alternate:E({base:chunkX3P3LASA_js.r.alternate,config:t?.alternate?t.alternate:[]}),typography:t?.typography?K({base:chunkX3P3LASA_js.r.typography,config:{resources:t.typography?.resources?t.typography.resources:[],fonts:t.typography?.fonts?t.typography.fonts:{}}}):chunkX3P3LASA_js.r.typography,colors:t?.colors?L({base:chunkX3P3LASA_js.r.colors,config:t.colors?t.colors:{}}):chunkX3P3LASA_js.r.colors,utility:chunkX3P3LASA_js.r.utility,radius:Y({base:chunkX3P3LASA_js.r.radius,config:t.radius})});var I=(a=>(a.STANDARD="STANDARD",a.INVERTED="INVERTED",a.CONTRAST="CONTRAST",a))(I||{});var ae=react.createContext("STANDARD");var le=()=>chunkX3P3LASA_js.t().alternate;

Object.defineProperty(exports, "ThemeCtx", {
    enumerable: true,
    get: function () { return chunkX3P3LASA_js.s; }
});
Object.defineProperty(exports, "useTheme", {
    enumerable: true,
    get: function () { return chunkX3P3LASA_js.t; }
});
Object.defineProperty(exports, "useThemeColor", {
    enumerable: true,
    get: function () { return chunkX3P3LASA_js.u; }
});
Object.defineProperty(exports, "useThemeFonts", {
    enumerable: true,
    get: function () { return chunkX3P3LASA_js.v; }
});
exports.StyleProviderAnimation = J;
exports.StyleProviderFontFace = Z;
exports.StyleProviderPreFlight = te;
exports.ThemeBuilder = re;
exports.ThemeMode = I;
exports.ThemeModeCtx = ae;
exports.useThemeAlternate = le;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map