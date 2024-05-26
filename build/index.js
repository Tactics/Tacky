'use strict';

var chunkWHPTVSOM_js = require('./chunk-WHPTVSOM.js');
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
`;var E=({base:t,config:e})=>e||t;var U=({base:t,config:e})=>e||t;var j=({base:t,config:e})=>{let l=chunkLC4A3LMM_js.a(e,chunkWHPTVSOM_js.b,["family","primary"]),a=chunkLC4A3LMM_js.a(e,chunkLC4A3LMM_js.a(e,chunkWHPTVSOM_js.c,["family","primary"]),["family","accent"]),i=chunkLC4A3LMM_js.a(e,chunkLC4A3LMM_js.a(e,chunkWHPTVSOM_js.d,["family","primary"]),["family","supporting"]),p=chunkLC4A3LMM_js.a(e,chunkWHPTVSOM_js.g,["scale","md"]),c=chunkLC4A3LMM_js.a(e,chunkWHPTVSOM_js.f,["scale","sm"]),y=chunkLC4A3LMM_js.a(e,chunkWHPTVSOM_js.e,["scale","xs"]),x=chunkLC4A3LMM_js.a(e,chunkWHPTVSOM_js.h,["scale","lg"]),d=chunkLC4A3LMM_js.a(e,chunkWHPTVSOM_js.i,["scale","xl"]),u=chunkLC4A3LMM_js.a(e,chunkWHPTVSOM_js.j,["scale","2xl"]),h=chunkLC4A3LMM_js.a(e,chunkWHPTVSOM_js.k,["scale","3xl"]),f=chunkLC4A3LMM_js.a(e,chunkWHPTVSOM_js.l,["scale","4xl"]),T=chunkLC4A3LMM_js.a(e,chunkWHPTVSOM_js.m,["scale","5xl"]),g=chunkLC4A3LMM_js.a(e,chunkWHPTVSOM_js.n,["scale","6xl"]),C=chunkLC4A3LMM_js.a(e,chunkWHPTVSOM_js.o,["scale","7xl"]),b=chunkLC4A3LMM_js.a(e,chunkWHPTVSOM_js.p,["scale","8xl"]),S=chunkLC4A3LMM_js.a(e,chunkWHPTVSOM_js.q,["scale","9xl"]);return {primary:{xs:chunkWHPTVSOM_js.a({family:l,scale:y}),sm:chunkWHPTVSOM_js.a({family:l,scale:c}),md:chunkWHPTVSOM_js.a({family:l,scale:p}),lg:chunkWHPTVSOM_js.a({family:l,scale:x}),xl:chunkWHPTVSOM_js.a({family:l,scale:d}),"2xl":chunkWHPTVSOM_js.a({family:l,scale:u}),"3xl":chunkWHPTVSOM_js.a({family:l,scale:h}),"4xl":chunkWHPTVSOM_js.a({family:l,scale:f}),"5xl":chunkWHPTVSOM_js.a({family:l,scale:T}),"6xl":chunkWHPTVSOM_js.a({family:l,scale:g}),"7xl":chunkWHPTVSOM_js.a({family:l,scale:C}),"8xl":chunkWHPTVSOM_js.a({family:l,scale:b}),"9xl":chunkWHPTVSOM_js.a({family:l,scale:S})},accent:{xs:chunkWHPTVSOM_js.a({family:a,scale:y}),sm:chunkWHPTVSOM_js.a({family:a,scale:c}),md:chunkWHPTVSOM_js.a({family:a,scale:p}),lg:chunkWHPTVSOM_js.a({family:a,scale:x}),xl:chunkWHPTVSOM_js.a({family:a,scale:d}),"2xl":chunkWHPTVSOM_js.a({family:a,scale:u}),"3xl":chunkWHPTVSOM_js.a({family:a,scale:h}),"4xl":chunkWHPTVSOM_js.a({family:a,scale:f}),"5xl":chunkWHPTVSOM_js.a({family:a,scale:T}),"6xl":chunkWHPTVSOM_js.a({family:a,scale:g}),"7xl":chunkWHPTVSOM_js.a({family:a,scale:C}),"8xl":chunkWHPTVSOM_js.a({family:a,scale:b}),"9xl":chunkWHPTVSOM_js.a({family:a,scale:S})},supporting:{xs:chunkWHPTVSOM_js.a({family:i,scale:y}),sm:chunkWHPTVSOM_js.a({family:i,scale:c}),md:chunkWHPTVSOM_js.a({family:i,scale:p}),lg:chunkWHPTVSOM_js.a({family:i,scale:x}),xl:chunkWHPTVSOM_js.a({family:i,scale:d}),"2xl":chunkWHPTVSOM_js.a({family:i,scale:u}),"3xl":chunkWHPTVSOM_js.a({family:i,scale:h}),"4xl":chunkWHPTVSOM_js.a({family:i,scale:f}),"5xl":chunkWHPTVSOM_js.a({family:i,scale:T}),"6xl":chunkWHPTVSOM_js.a({family:i,scale:g}),"7xl":chunkWHPTVSOM_js.a({family:i,scale:C}),"8xl":chunkWHPTVSOM_js.a({family:i,scale:b}),"9xl":chunkWHPTVSOM_js.a({family:i,scale:S})}}};var G=({base:t,config:e})=>({resources:e?.resources?U({base:t.resources,config:e?.resources??[]}):t.resources,fonts:e?.fonts?j({base:t.fonts,config:e?.fonts?e.fonts:{}}):t.fonts});var s=({base:t,config:e})=>{let l=chunkLC4A3LMM_js.a(e,t.tint_500,["tint_500"]),a=t.tint_500!=l,i=chunkLC4A3LMM_js.a(e,a?l:t.tint_400,["tint_400"]),p=chunkLC4A3LMM_js.a(e,a?i:t.tint_300,["tint_300"]),c=chunkLC4A3LMM_js.a(e,a?p:t.tint_200,["tint_200"]),y=chunkLC4A3LMM_js.a(e,a?c:t.tint_100,["tint_100"]),x=chunkLC4A3LMM_js.a(e,a?y:t.tint_50,["tint_50"]),d=chunkLC4A3LMM_js.a(e,a?l:t.tint_600,["tint_600"]),u=chunkLC4A3LMM_js.a(e,a?d:t.tint_700,["tint_700"]),h=chunkLC4A3LMM_js.a(e,a?u:t.tint_800,["tint_800"]),f=chunkLC4A3LMM_js.a(e,a?h:t.tint_900,["tint_900"]),T=chunkLC4A3LMM_js.a(e,a?f:t.tint_950,["tint_950"]);return {tint_50:x,tint_100:y,tint_200:c,tint_300:p,tint_400:i,tint_500:l,tint_600:d,tint_700:u,tint_800:h,tint_900:f,tint_950:T}};var K=({base:t,config:e})=>e||t;var q=({base:t,config:e})=>({danger:s({base:t.danger,config:e.danger?e.danger:{}}),warning:s({base:t.warning,config:e.warning?e.warning:{}}),success:s({base:t.success,config:e.success?e.success:{}}),info:s({base:t.info,config:e.info?e.info:{}}),neutrals:s({base:t.neutrals,config:e.neutrals?e.neutrals:{}}),primary:s({base:t.primary,config:e.primary?e.primary:{}}),accent:s({base:t.accent,config:e.accent?e.accent:{}}),supporting:s({base:t.supporting,config:e.supporting?e.supporting:{}}),additional:K({base:t.additional,config:e?.additional?e.additional:[]})});var L=({base:t,config:e})=>({none:t.none,xs:e?e.xs:t.xs,sm:e?e.sm:t.sm,md:e?e.md:t.md,lg:e?e.lg:t.lg,xl:e?e.xl:t.xl,"2xl":e?e["2xl"]:t["2xl"],"3xl":e?e["3xl"]:t["3xl"],full:"9999px"});var re=({config:t})=>({alternate:E({base:chunkWHPTVSOM_js.r.alternate,config:t?.alternate?t.alternate:[]}),typography:t?.typography?G({base:chunkWHPTVSOM_js.r.typography,config:{resources:t.typography?.resources?t.typography.resources:[],fonts:t.typography?.fonts?t.typography.fonts:{}}}):chunkWHPTVSOM_js.r.typography,colors:t?.colors?q({base:chunkWHPTVSOM_js.r.colors,config:t.colors?t.colors:{}}):chunkWHPTVSOM_js.r.colors,utility:chunkWHPTVSOM_js.r.utility,radius:L({base:chunkWHPTVSOM_js.r.radius,config:t.radius})});var I=(a=>(a.STANDARD="STANDARD",a.INVERTED="INVERTED",a.CONTRAST="CONTRAST",a))(I||{});var ae=react.createContext("STANDARD");var le=()=>chunkWHPTVSOM_js.t().alternate;var ie=()=>chunkWHPTVSOM_js.t().radius;var se=()=>chunkWHPTVSOM_js.t().utility;

Object.defineProperty(exports, "ThemeCtx", {
    enumerable: true,
    get: function () { return chunkWHPTVSOM_js.s; }
});
Object.defineProperty(exports, "useTheme", {
    enumerable: true,
    get: function () { return chunkWHPTVSOM_js.t; }
});
Object.defineProperty(exports, "useThemeColor", {
    enumerable: true,
    get: function () { return chunkWHPTVSOM_js.u; }
});
Object.defineProperty(exports, "useThemeFonts", {
    enumerable: true,
    get: function () { return chunkWHPTVSOM_js.v; }
});
exports.StyleProviderAnimation = J;
exports.StyleProviderFontFace = Z;
exports.StyleProviderPreFlight = te;
exports.ThemeBuilder = re;
exports.ThemeMode = I;
exports.ThemeModeCtx = ae;
exports.useThemeAlternate = le;
exports.useThemeRadius = ie;
exports.useThemeUtility = se;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map