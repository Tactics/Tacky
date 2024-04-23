import { s, b as b$1, c, d, g, f, e, h, i, j as j$1, k, l, m, n as n$1, o, p, q as q$1, a as a$1 } from './chunk-QD2QVT2G.mjs';
export { r as ThemeCtx, s as useTheme, t as useThemeColor, u as useThemeFonts } from './chunk-QD2QVT2G.mjs';
import { a } from './chunk-2FBDSVPX.mjs';
import { createGlobalStyle } from 'styled-components';
import { createContext } from 'react';

var W=createGlobalStyle`
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
`;var Q=createGlobalStyle`
      ${t=>t.resources?.map(function(e){return e})}
    `;var ee=createGlobalStyle`
    
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
`;var O=({base:t,config:e})=>e||t;var E=({base:t,config:e})=>e||t;var j=({base:t,config:e$1})=>{let l$1=a(e$1,b$1,["family","primary"]),a$2=a(e$1,a(e$1,c,["family","primary"]),["family","accent"]),i$1=a(e$1,a(e$1,d,["family","primary"]),["family","supporting"]),s=a(e$1,g,["scale","md"]),m$1=a(e$1,f,["scale","sm"]),p$1=a(e$1,e,["scale","xs"]),f$1=a(e$1,h,["scale","lg"]),c$1=a(e$1,i,["scale","xl"]),y=a(e$1,j$1,["scale","2xl"]),d$1=a(e$1,k,["scale","3xl"]),u=a(e$1,l,["scale","4xl"]),h$1=a(e$1,m,["scale","5xl"]),x=a(e$1,n$1,["scale","6xl"]),T=a(e$1,o,["scale","7xl"]),g$1=a(e$1,p,["scale","8xl"]),C=a(e$1,q$1,["scale","9xl"]);return {primary:{xs:a$1({family:l$1,scale:p$1}),sm:a$1({family:l$1,scale:m$1}),md:a$1({family:l$1,scale:s}),lg:a$1({family:l$1,scale:f$1}),xl:a$1({family:l$1,scale:c$1}),"2xl":a$1({family:l$1,scale:y}),"3xl":a$1({family:l$1,scale:d$1}),"4xl":a$1({family:l$1,scale:u}),"5xl":a$1({family:l$1,scale:h$1}),"6xl":a$1({family:l$1,scale:x}),"7xl":a$1({family:l$1,scale:T}),"8xl":a$1({family:l$1,scale:g$1}),"9xl":a$1({family:l$1,scale:C})},accent:{xs:a$1({family:a$2,scale:p$1}),sm:a$1({family:a$2,scale:m$1}),md:a$1({family:a$2,scale:s}),lg:a$1({family:a$2,scale:f$1}),xl:a$1({family:a$2,scale:c$1}),"2xl":a$1({family:a$2,scale:y}),"3xl":a$1({family:a$2,scale:d$1}),"4xl":a$1({family:a$2,scale:u}),"5xl":a$1({family:a$2,scale:h$1}),"6xl":a$1({family:a$2,scale:x}),"7xl":a$1({family:a$2,scale:T}),"8xl":a$1({family:a$2,scale:g$1}),"9xl":a$1({family:a$2,scale:C})},supporting:{xs:a$1({family:i$1,scale:p$1}),sm:a$1({family:i$1,scale:m$1}),md:a$1({family:i$1,scale:s}),lg:a$1({family:i$1,scale:f$1}),xl:a$1({family:i$1,scale:c$1}),"2xl":a$1({family:i$1,scale:y}),"3xl":a$1({family:i$1,scale:d$1}),"4xl":a$1({family:i$1,scale:u}),"5xl":a$1({family:i$1,scale:h$1}),"6xl":a$1({family:i$1,scale:x}),"7xl":a$1({family:i$1,scale:T}),"8xl":a$1({family:i$1,scale:g$1}),"9xl":a$1({family:i$1,scale:C})}}};var G=({base:t,config:e})=>({resources:e?.resources?E({base:t.resources,config:e?.resources??[]}):t.resources,fonts:e?.fonts?j({base:t.fonts,config:e?.fonts?e.fonts:{}}):t.fonts});var n=({base:t,config:e})=>{let l=a(e,t.tint_500,["tint_500"]),a$1=t.tint_500!=l,i=a(e,a$1?l:t.tint_400,["tint_400"]),s=a(e,a$1?i:t.tint_300,["tint_300"]),m=a(e,a$1?s:t.tint_200,["tint_200"]),p=a(e,a$1?m:t.tint_100,["tint_100"]),f=a(e,a$1?p:t.tint_50,["tint_50"]),c=a(e,a$1?l:t.tint_600,["tint_600"]),y=a(e,a$1?c:t.tint_700,["tint_700"]),d=a(e,a$1?y:t.tint_800,["tint_800"]),u=a(e,a$1?d:t.tint_900,["tint_900"]),h=a(e,a$1?u:t.tint_950,["tint_950"]);return {tint_50:f,tint_100:p,tint_200:m,tint_300:s,tint_400:i,tint_500:l,tint_600:c,tint_700:y,tint_800:d,tint_900:u,tint_950:h}};var K=({base:t,config:e})=>e||t;var q=({base:t,config:e})=>({danger:n({base:t.danger,config:e.danger?e.danger:{}}),warning:n({base:t.warning,config:e.warning?e.warning:{}}),success:n({base:t.success,config:e.success?e.success:{}}),info:n({base:t.info,config:e.info?e.info:{}}),neutrals:n({base:t.neutrals,config:e.neutrals?e.neutrals:{}}),primary:n({base:t.primary,config:e.primary?e.primary:{}}),accent:n({base:t.accent,config:e.accent?e.accent:{}}),supporting:n({base:t.supporting,config:e.supporting?e.supporting:{}}),additional:K({base:t.additional,config:e?.additional?e.additional:[]})});var L=({base:t,config:e})=>({none:t.none,xs:e?e.xs:t.xs,sm:e?e.sm:t.sm,md:e?e.md:t.md,lg:e?e.lg:t.lg,xl:e?e.xl:t.xl,"2xl":e?e["2xl"]:t["2xl"],"3xl":e?e["3xl"]:t["3xl"],full:"9999px"});var te=({base:t,config:e})=>({alternate:O({base:t.alternate,config:e?.alternate?e.alternate:[]}),typography:e?.typography?G({base:t.typography,config:{resources:e.typography?.resources?e.typography.resources:[],fonts:e.typography?.fonts?e.typography.fonts:{}}}):t.typography,colors:e?.colors?q({base:t.colors,config:e.colors?e.colors:{}}):t.colors,utility:t.utility,radius:L({base:t.radius,config:e.radius})});var b=(a=>(a.STANDARD="STANDARD",a.INVERTED="INVERTED",a.CONTRAST="CONTRAST",a))(b||{});var oe=createContext("STANDARD");var ae=()=>s().alternate;

export { W as StyleProviderAnimation, Q as StyleProviderFontFace, ee as StyleProviderPreFlight, te as ThemeBuilder, b as ThemeMode, oe as ThemeModeCtx, ae as useThemeAlternate };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map