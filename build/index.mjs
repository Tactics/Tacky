import { E, G, b, c, d, g, f, e, h, i, j, k as k$1, l, m, n, o, p, q, t, s as s$1, r, u, v, w, x, y, z, A, B, C, D, a as a$1 } from './chunk-S7QSZTCD.mjs';
export { F as ThemeCtx, G as useTheme, H as useThemeColor, I as useThemeFonts } from './chunk-S7QSZTCD.mjs';
import { a } from './chunk-2FBDSVPX.mjs';
import { createGlobalStyle } from 'styled-components';
import { createContext } from 'react';

var Se=createGlobalStyle`
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
`;var _e=createGlobalStyle`
      ${t=>t.resources?.map(function(e){return e})}
    `;var Re=createGlobalStyle`
    
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
`;var ve=createGlobalStyle`
    
    /* Reset all default a-styling when using external routing to prevent leaking of external styles */
    a {
        all: unset;
    }
`;var ce=({base:t,config:e})=>e||t;var ye=({base:t,config:e})=>e||t;var ge=({base:t$1,config:e$1})=>{let l$1=a(e$1,b,["family","primary"]),i$1=a(e$1,a(e$1,c,["family","primary"]),["family","accent"]),a$2=a(e$1,a(e$1,d,["family","primary"]),["family","supporting"]),h$1=a(e$1,g,["scale","md"]),p$1=a(e$1,f,["scale","sm"]),c$1=a(e$1,e,["scale","xs"]),x$1=a(e$1,h,["scale","lg"]),y$1=a(e$1,i,["scale","xl"]),g$1=a(e$1,j,["scale","2xl"]),u$1=a(e$1,k$1,["scale","3xl"]),d$1=a(e$1,l,["scale","4xl"]),f$1=a(e$1,m,["scale","5xl"]),T=a(e$1,n,["scale","6xl"]),C$1=a(e$1,o,["scale","7xl"]),w$1=a(e$1,p,["scale","8xl"]),b$1=a(e$1,q,["scale","9xl"]),S=a(e$1,t,["weight","md"]),I=a(e$1,s$1,["weight","sm"]),_=a(e$1,r,["weight","xs"]),A$1=a(e$1,u,["weight","lg"]),R=a(e$1,v,["weight","xl"]),W=a(e$1,w,["weight","2xl"]),v$1=a(e$1,x,["weight","3xl"]),B$1=a(e$1,y,["weight","4xl"]),F=a(e$1,z,["weight","5xl"]),X=a(e$1,A,["weight","6xl"]),z$1=a(e$1,B,["weight","7xl"]),D$1=a(e$1,C,["weight","8xl"]),M=a(e$1,D,["weight","9xl"]);return {primary:{xs:a$1({family:l$1,scale:c$1,weight:_}),sm:a$1({family:l$1,scale:p$1,weight:I}),md:a$1({family:l$1,scale:h$1,weight:S}),lg:a$1({family:l$1,scale:x$1,weight:A$1}),xl:a$1({family:l$1,scale:y$1,weight:R}),"2xl":a$1({family:l$1,scale:g$1,weight:W}),"3xl":a$1({family:l$1,scale:u$1,weight:v$1}),"4xl":a$1({family:l$1,scale:d$1,weight:B$1}),"5xl":a$1({family:l$1,scale:f$1,weight:F}),"6xl":a$1({family:l$1,scale:T,weight:X}),"7xl":a$1({family:l$1,scale:C$1,weight:z$1}),"8xl":a$1({family:l$1,scale:w$1,weight:D$1}),"9xl":a$1({family:l$1,scale:b$1,weight:M})},accent:{xs:a$1({family:i$1,scale:c$1,weight:_}),sm:a$1({family:i$1,scale:p$1,weight:I}),md:a$1({family:i$1,scale:h$1,weight:S}),lg:a$1({family:i$1,scale:x$1,weight:A$1}),xl:a$1({family:i$1,scale:y$1,weight:R}),"2xl":a$1({family:i$1,scale:g$1,weight:W}),"3xl":a$1({family:i$1,scale:u$1,weight:v$1}),"4xl":a$1({family:i$1,scale:d$1,weight:B$1}),"5xl":a$1({family:i$1,scale:f$1,weight:F}),"6xl":a$1({family:i$1,scale:T,weight:X}),"7xl":a$1({family:i$1,scale:C$1,weight:z$1}),"8xl":a$1({family:i$1,scale:w$1,weight:D$1}),"9xl":a$1({family:i$1,scale:b$1,weight:M})},supporting:{xs:a$1({family:a$2,scale:c$1,weight:_}),sm:a$1({family:a$2,scale:p$1,weight:I}),md:a$1({family:a$2,scale:h$1,weight:S}),lg:a$1({family:a$2,scale:x$1,weight:A$1}),xl:a$1({family:a$2,scale:y$1,weight:R}),"2xl":a$1({family:a$2,scale:g$1,weight:W}),"3xl":a$1({family:a$2,scale:u$1,weight:v$1}),"4xl":a$1({family:a$2,scale:d$1,weight:B$1}),"5xl":a$1({family:a$2,scale:f$1,weight:F}),"6xl":a$1({family:a$2,scale:T,weight:X}),"7xl":a$1({family:a$2,scale:C$1,weight:z$1}),"8xl":a$1({family:a$2,scale:w$1,weight:D$1}),"9xl":a$1({family:a$2,scale:b$1,weight:M})}}};var ue=({base:t,config:e})=>({resources:e?.resources?ye({base:t.resources,config:e?.resources??[]}):t.resources,fonts:e?.fonts?ge({base:t.fonts,config:e?.fonts?e.fonts:{}}):t.fonts});var s=({base:t,config:e})=>{let l=a(e,t.tint_500,["tint_500"]),i=t.tint_500!=l,a$1=a(e,i?l:t.tint_400,["tint_400"]),h=a(e,i?a$1:t.tint_300,["tint_300"]),p=a(e,i?h:t.tint_200,["tint_200"]),c=a(e,i?p:t.tint_100,["tint_100"]),x=a(e,i?c:t.tint_50,["tint_50"]),y=a(e,i?l:t.tint_600,["tint_600"]),g=a(e,i?y:t.tint_700,["tint_700"]),u=a(e,i?g:t.tint_800,["tint_800"]),d=a(e,i?u:t.tint_900,["tint_900"]),f=a(e,i?d:t.tint_950,["tint_950"]);return {tint_50:x,tint_100:c,tint_200:p,tint_300:h,tint_400:a$1,tint_500:l,tint_600:y,tint_700:g,tint_800:u,tint_900:d,tint_950:f}};var de=({base:t,config:e})=>e||t;var xe=({base:t,config:e})=>({danger:s({base:t.danger,config:e.danger?e.danger:{}}),warning:s({base:t.warning,config:e.warning?e.warning:{}}),success:s({base:t.success,config:e.success?e.success:{}}),info:s({base:t.info,config:e.info?e.info:{}}),neutrals:s({base:t.neutrals,config:e.neutrals?e.neutrals:{}}),surfaces:s({base:t.surfaces,config:e.surfaces?e.surfaces:{}}),primary:s({base:t.primary,config:e.primary?e.primary:{}}),accent:s({base:t.accent,config:e.accent?e.accent:{}}),supporting:s({base:t.supporting,config:e.supporting?e.supporting:{}}),additional:de({base:t.additional,config:e?.additional?e.additional:[]})});var fe=({base:t,config:e})=>({none:t.none,xs:e?e.xs:t.xs,sm:e?e.sm:t.sm,md:e?e.md:t.md,lg:e?e.lg:t.lg,xl:e?e.xl:t.xl,"2xl":e?e["2xl"]:t["2xl"],"3xl":e?e["3xl"]:t["3xl"],full:"9999px"});var Be=({config:t})=>({alternate:ce({base:E.alternate,config:t?.alternate?t.alternate:[]}),typography:t?.typography?ue({base:E.typography,config:{resources:t.typography?.resources?t.typography.resources:[],fonts:t.typography?.fonts?t.typography.fonts:{}}}):E.typography,colors:t?.colors?xe({base:E.colors,config:t.colors?t.colors:{}}):E.colors,utility:E.utility,radius:fe({base:E.radius,config:t.radius})});var k=(i=>(i.STANDARD="STANDARD",i.INVERTED="INVERTED",i.CONTRAST="CONTRAST",i))(k||{});var Xe=createContext("STANDARD");var ze=()=>G().alternate;var De=()=>G().radius;var Me=()=>G().utility;

export { Se as StyleProviderAnimation, _e as StyleProviderFontFace, Re as StyleProviderPreFlight, ve as StyleProviderRouter, Be as ThemeBuilder, k as ThemeMode, Xe as ThemeModeCtx, ze as useThemeAlternate, De as useThemeRadius, Me as useThemeUtility };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map