'use strict';

var chunkMNG6MWOW_js = require('./chunk-MNG6MWOW.js');
var chunkLC4A3LMM_js = require('./chunk-LC4A3LMM.js');
var styledComponents = require('styled-components');
var react = require('react');

var Se=styledComponents.createGlobalStyle`
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
`;var _e=styledComponents.createGlobalStyle`
      ${t=>t.resources?.map(function(e){return e})}
    `;var We=styledComponents.createGlobalStyle`
    
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
`;var ce=({base:t,config:e})=>e||t;var ge=({base:t,config:e})=>e||t;var ye=({base:t,config:e})=>{let l=chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.b,["family","primary"]),i=chunkLC4A3LMM_js.a(e,chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.c,["family","primary"]),["family","accent"]),a=chunkLC4A3LMM_js.a(e,chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.d,["family","primary"]),["family","supporting"]),h=chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.g,["scale","md"]),p=chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.f,["scale","sm"]),c=chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.e,["scale","xs"]),x=chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.h,["scale","lg"]),g=chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.i,["scale","xl"]),y=chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.j,["scale","2xl"]),d=chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.k,["scale","3xl"]),u=chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.l,["scale","4xl"]),f=chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.m,["scale","5xl"]),T=chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.n,["scale","6xl"]),C=chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.o,["scale","7xl"]),w=chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.p,["scale","8xl"]),b=chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.q,["scale","9xl"]),S=chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.t,["weight","md"]),I=chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.s,["weight","sm"]),_=chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.r,["weight","xs"]),A=chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.u,["weight","lg"]),W=chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.v,["weight","xl"]),R=chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.w,["weight","2xl"]),B=chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.x,["weight","3xl"]),F=chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.y,["weight","4xl"]),v=chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.z,["weight","5xl"]),X=chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.A,["weight","6xl"]),z=chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.B,["weight","7xl"]),D=chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.C,["weight","8xl"]),M=chunkLC4A3LMM_js.a(e,chunkMNG6MWOW_js.D,["weight","9xl"]);return {primary:{xs:chunkMNG6MWOW_js.a({family:l,scale:c,weight:_}),sm:chunkMNG6MWOW_js.a({family:l,scale:p,weight:I}),md:chunkMNG6MWOW_js.a({family:l,scale:h,weight:S}),lg:chunkMNG6MWOW_js.a({family:l,scale:x,weight:A}),xl:chunkMNG6MWOW_js.a({family:l,scale:g,weight:W}),"2xl":chunkMNG6MWOW_js.a({family:l,scale:y,weight:R}),"3xl":chunkMNG6MWOW_js.a({family:l,scale:d,weight:B}),"4xl":chunkMNG6MWOW_js.a({family:l,scale:u,weight:F}),"5xl":chunkMNG6MWOW_js.a({family:l,scale:f,weight:v}),"6xl":chunkMNG6MWOW_js.a({family:l,scale:T,weight:X}),"7xl":chunkMNG6MWOW_js.a({family:l,scale:C,weight:z}),"8xl":chunkMNG6MWOW_js.a({family:l,scale:w,weight:D}),"9xl":chunkMNG6MWOW_js.a({family:l,scale:b,weight:M})},accent:{xs:chunkMNG6MWOW_js.a({family:i,scale:c,weight:_}),sm:chunkMNG6MWOW_js.a({family:i,scale:p,weight:I}),md:chunkMNG6MWOW_js.a({family:i,scale:h,weight:S}),lg:chunkMNG6MWOW_js.a({family:i,scale:x,weight:A}),xl:chunkMNG6MWOW_js.a({family:i,scale:g,weight:W}),"2xl":chunkMNG6MWOW_js.a({family:i,scale:y,weight:R}),"3xl":chunkMNG6MWOW_js.a({family:i,scale:d,weight:B}),"4xl":chunkMNG6MWOW_js.a({family:i,scale:u,weight:F}),"5xl":chunkMNG6MWOW_js.a({family:i,scale:f,weight:v}),"6xl":chunkMNG6MWOW_js.a({family:i,scale:T,weight:X}),"7xl":chunkMNG6MWOW_js.a({family:i,scale:C,weight:z}),"8xl":chunkMNG6MWOW_js.a({family:i,scale:w,weight:D}),"9xl":chunkMNG6MWOW_js.a({family:i,scale:b,weight:M})},supporting:{xs:chunkMNG6MWOW_js.a({family:a,scale:c,weight:_}),sm:chunkMNG6MWOW_js.a({family:a,scale:p,weight:I}),md:chunkMNG6MWOW_js.a({family:a,scale:h,weight:S}),lg:chunkMNG6MWOW_js.a({family:a,scale:x,weight:A}),xl:chunkMNG6MWOW_js.a({family:a,scale:g,weight:W}),"2xl":chunkMNG6MWOW_js.a({family:a,scale:y,weight:R}),"3xl":chunkMNG6MWOW_js.a({family:a,scale:d,weight:B}),"4xl":chunkMNG6MWOW_js.a({family:a,scale:u,weight:F}),"5xl":chunkMNG6MWOW_js.a({family:a,scale:f,weight:v}),"6xl":chunkMNG6MWOW_js.a({family:a,scale:T,weight:X}),"7xl":chunkMNG6MWOW_js.a({family:a,scale:C,weight:z}),"8xl":chunkMNG6MWOW_js.a({family:a,scale:w,weight:D}),"9xl":chunkMNG6MWOW_js.a({family:a,scale:b,weight:M})}}};var de=({base:t,config:e})=>({resources:e?.resources?ge({base:t.resources,config:e?.resources??[]}):t.resources,fonts:e?.fonts?ye({base:t.fonts,config:e?.fonts?e.fonts:{}}):t.fonts});var s=({base:t,config:e})=>{let l=chunkLC4A3LMM_js.a(e,t.tint_500,["tint_500"]),i=t.tint_500!=l,a=chunkLC4A3LMM_js.a(e,i?l:t.tint_400,["tint_400"]),h=chunkLC4A3LMM_js.a(e,i?a:t.tint_300,["tint_300"]),p=chunkLC4A3LMM_js.a(e,i?h:t.tint_200,["tint_200"]),c=chunkLC4A3LMM_js.a(e,i?p:t.tint_100,["tint_100"]),x=chunkLC4A3LMM_js.a(e,i?c:t.tint_50,["tint_50"]),g=chunkLC4A3LMM_js.a(e,i?l:t.tint_600,["tint_600"]),y=chunkLC4A3LMM_js.a(e,i?g:t.tint_700,["tint_700"]),d=chunkLC4A3LMM_js.a(e,i?y:t.tint_800,["tint_800"]),u=chunkLC4A3LMM_js.a(e,i?d:t.tint_900,["tint_900"]),f=chunkLC4A3LMM_js.a(e,i?u:t.tint_950,["tint_950"]);return {tint_50:x,tint_100:c,tint_200:p,tint_300:h,tint_400:a,tint_500:l,tint_600:g,tint_700:y,tint_800:d,tint_900:u,tint_950:f}};var ue=({base:t,config:e})=>e||t;var xe=({base:t,config:e})=>({danger:s({base:t.danger,config:e.danger?e.danger:{}}),warning:s({base:t.warning,config:e.warning?e.warning:{}}),success:s({base:t.success,config:e.success?e.success:{}}),info:s({base:t.info,config:e.info?e.info:{}}),neutrals:s({base:t.neutrals,config:e.neutrals?e.neutrals:{}}),surfaces:s({base:t.surfaces,config:e.surfaces?e.surfaces:{}}),primary:s({base:t.primary,config:e.primary?e.primary:{}}),accent:s({base:t.accent,config:e.accent?e.accent:{}}),supporting:s({base:t.supporting,config:e.supporting?e.supporting:{}}),additional:ue({base:t.additional,config:e?.additional?e.additional:[]})});var fe=({base:t,config:e})=>({none:t.none,xs:e?e.xs:t.xs,sm:e?e.sm:t.sm,md:e?e.md:t.md,lg:e?e.lg:t.lg,xl:e?e.xl:t.xl,"2xl":e?e["2xl"]:t["2xl"],"3xl":e?e["3xl"]:t["3xl"],full:"9999px"});var Re=({config:t})=>({alternate:ce({base:chunkMNG6MWOW_js.E.alternate,config:t?.alternate?t.alternate:[]}),typography:t?.typography?de({base:chunkMNG6MWOW_js.E.typography,config:{resources:t.typography?.resources?t.typography.resources:[],fonts:t.typography?.fonts?t.typography.fonts:{}}}):chunkMNG6MWOW_js.E.typography,colors:t?.colors?xe({base:chunkMNG6MWOW_js.E.colors,config:t.colors?t.colors:{}}):chunkMNG6MWOW_js.E.colors,utility:chunkMNG6MWOW_js.E.utility,radius:fe({base:chunkMNG6MWOW_js.E.radius,config:t.radius})});var k=(i=>(i.STANDARD="STANDARD",i.INVERTED="INVERTED",i.CONTRAST="CONTRAST",i))(k||{});var Fe=react.createContext("STANDARD");var ve=()=>chunkMNG6MWOW_js.G().alternate;var Xe=()=>chunkMNG6MWOW_js.G().radius;var ze=()=>chunkMNG6MWOW_js.G().utility;

Object.defineProperty(exports, "ThemeCtx", {
    enumerable: true,
    get: function () { return chunkMNG6MWOW_js.F; }
});
Object.defineProperty(exports, "useTheme", {
    enumerable: true,
    get: function () { return chunkMNG6MWOW_js.G; }
});
Object.defineProperty(exports, "useThemeColor", {
    enumerable: true,
    get: function () { return chunkMNG6MWOW_js.H; }
});
Object.defineProperty(exports, "useThemeFonts", {
    enumerable: true,
    get: function () { return chunkMNG6MWOW_js.I; }
});
exports.StyleProviderAnimation = Se;
exports.StyleProviderFontFace = _e;
exports.StyleProviderPreFlight = We;
exports.ThemeBuilder = Re;
exports.ThemeMode = k;
exports.ThemeModeCtx = Fe;
exports.useThemeAlternate = ve;
exports.useThemeRadius = Xe;
exports.useThemeUtility = ze;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map