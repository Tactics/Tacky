import { r, t, b, c, d, g, f, e, h, i, j, k, l, m, n, o, p, q, a as a$1 } from './chunk-XVUQBHGY.mjs';
export { s as ThemeCtx, t as useTheme, u as useThemeColor, v as useThemeFonts } from './chunk-XVUQBHGY.mjs';
import { a } from './chunk-2FBDSVPX.mjs';
import { createGlobalStyle } from 'styled-components';
import { createContext } from 'react';

var he=createGlobalStyle`
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
`;var ce=createGlobalStyle`
      ${t=>t.resources?.map(function(e){return e})}
    `;var ue=createGlobalStyle`
    
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
`;var Z=({base:t,config:e})=>e||t;var ee=({base:t,config:e})=>e||t;var te=({base:t,config:e$1})=>{let l$1=a(e$1,b,["family","primary"]),i$1=a(e$1,a(e$1,c,["family","primary"]),["family","accent"]),a$2=a(e$1,a(e$1,d,["family","primary"]),["family","supporting"]),h$1=a(e$1,g,["scale","md"]),p$1=a(e$1,f,["scale","sm"]),c$1=a(e$1,e,["scale","xs"]),g$1=a(e$1,h,["scale","lg"]),y=a(e$1,i,["scale","xl"]),u=a(e$1,j,["scale","2xl"]),d$1=a(e$1,k,["scale","3xl"]),x=a(e$1,l,["scale","4xl"]),f$1=a(e$1,m,["scale","5xl"]),T=a(e$1,n,["scale","6xl"]),w=a(e$1,o,["scale","7xl"]),C=a(e$1,p,["scale","8xl"]),b$1=a(e$1,q,["scale","9xl"]),S=a(e$1,g,["weight","md"]),I=a(e$1,f,["weight","sm"]),_=a(e$1,e,["weight","xs"]),A=a(e$1,h,["weight","lg"]),R=a(e$1,i,["weight","xl"]),B=a(e$1,j,["weight","2xl"]),F=a(e$1,k,["weight","3xl"]),v=a(e$1,l,["weight","4xl"]),z=a(e$1,m,["weight","5xl"]),D=a(e$1,n,["weight","6xl"]),W=a(e$1,o,["weight","7xl"]),M=a(e$1,p,["weight","8xl"]),k$1=a(e$1,q,["weight","9xl"]);return {primary:{xs:a$1({family:l$1,scale:c$1,weight:_}),sm:a$1({family:l$1,scale:p$1,weight:I}),md:a$1({family:l$1,scale:h$1,weight:S}),lg:a$1({family:l$1,scale:g$1,weight:A}),xl:a$1({family:l$1,scale:y,weight:R}),"2xl":a$1({family:l$1,scale:u,weight:B}),"3xl":a$1({family:l$1,scale:d$1,weight:F}),"4xl":a$1({family:l$1,scale:x,weight:v}),"5xl":a$1({family:l$1,scale:f$1,weight:z}),"6xl":a$1({family:l$1,scale:T,weight:D}),"7xl":a$1({family:l$1,scale:w,weight:W}),"8xl":a$1({family:l$1,scale:C,weight:M}),"9xl":a$1({family:l$1,scale:b$1,weight:k$1})},accent:{xs:a$1({family:i$1,scale:c$1,weight:_}),sm:a$1({family:i$1,scale:p$1,weight:I}),md:a$1({family:i$1,scale:h$1,weight:S}),lg:a$1({family:i$1,scale:g$1,weight:A}),xl:a$1({family:i$1,scale:y,weight:R}),"2xl":a$1({family:i$1,scale:u,weight:B}),"3xl":a$1({family:i$1,scale:d$1,weight:F}),"4xl":a$1({family:i$1,scale:x,weight:v}),"5xl":a$1({family:i$1,scale:f$1,weight:z}),"6xl":a$1({family:i$1,scale:T,weight:D}),"7xl":a$1({family:i$1,scale:w,weight:W}),"8xl":a$1({family:i$1,scale:C,weight:M}),"9xl":a$1({family:i$1,scale:b$1,weight:k$1})},supporting:{xs:a$1({family:a$2,scale:c$1,weight:_}),sm:a$1({family:a$2,scale:p$1,weight:I}),md:a$1({family:a$2,scale:h$1,weight:S}),lg:a$1({family:a$2,scale:g$1,weight:A}),xl:a$1({family:a$2,scale:y,weight:R}),"2xl":a$1({family:a$2,scale:u,weight:B}),"3xl":a$1({family:a$2,scale:d$1,weight:F}),"4xl":a$1({family:a$2,scale:x,weight:v}),"5xl":a$1({family:a$2,scale:f$1,weight:z}),"6xl":a$1({family:a$2,scale:T,weight:D}),"7xl":a$1({family:a$2,scale:w,weight:W}),"8xl":a$1({family:a$2,scale:C,weight:M}),"9xl":a$1({family:a$2,scale:b$1,weight:k$1})}}};var re=({base:t,config:e})=>({resources:e?.resources?ee({base:t.resources,config:e?.resources??[]}):t.resources,fonts:e?.fonts?te({base:t.fonts,config:e?.fonts?e.fonts:{}}):t.fonts});var s=({base:t,config:e})=>{let l=a(e,t.tint_500,["tint_500"]),i=t.tint_500!=l,a$1=a(e,i?l:t.tint_400,["tint_400"]),h=a(e,i?a$1:t.tint_300,["tint_300"]),p=a(e,i?h:t.tint_200,["tint_200"]),c=a(e,i?p:t.tint_100,["tint_100"]),g=a(e,i?c:t.tint_50,["tint_50"]),y=a(e,i?l:t.tint_600,["tint_600"]),u=a(e,i?y:t.tint_700,["tint_700"]),d=a(e,i?u:t.tint_800,["tint_800"]),x=a(e,i?d:t.tint_900,["tint_900"]),f=a(e,i?x:t.tint_950,["tint_950"]);return {tint_50:g,tint_100:c,tint_200:p,tint_300:h,tint_400:a$1,tint_500:l,tint_600:y,tint_700:u,tint_800:d,tint_900:x,tint_950:f}};var oe=({base:t,config:e})=>e||t;var ie=({base:t,config:e})=>({danger:s({base:t.danger,config:e.danger?e.danger:{}}),warning:s({base:t.warning,config:e.warning?e.warning:{}}),success:s({base:t.success,config:e.success?e.success:{}}),info:s({base:t.info,config:e.info?e.info:{}}),neutrals:s({base:t.neutrals,config:e.neutrals?e.neutrals:{}}),surfaces:s({base:t.surfaces,config:e.surfaces?e.surfaces:{}}),primary:s({base:t.primary,config:e.primary?e.primary:{}}),accent:s({base:t.accent,config:e.accent?e.accent:{}}),supporting:s({base:t.supporting,config:e.supporting?e.supporting:{}}),additional:oe({base:t.additional,config:e?.additional?e.additional:[]})});var le=({base:t,config:e})=>({none:t.none,xs:e?e.xs:t.xs,sm:e?e.sm:t.sm,md:e?e.md:t.md,lg:e?e.lg:t.lg,xl:e?e.xl:t.xl,"2xl":e?e["2xl"]:t["2xl"],"3xl":e?e["3xl"]:t["3xl"],full:"9999px"});var de=({config:t})=>({alternate:Z({base:r.alternate,config:t?.alternate?t.alternate:[]}),typography:t?.typography?re({base:r.typography,config:{resources:t.typography?.resources?t.typography.resources:[],fonts:t.typography?.fonts?t.typography.fonts:{}}}):r.typography,colors:t?.colors?ie({base:r.colors,config:t.colors?t.colors:{}}):r.colors,utility:r.utility,radius:le({base:r.radius,config:t.radius})});var $=(i=>(i.STANDARD="STANDARD",i.INVERTED="INVERTED",i.CONTRAST="CONTRAST",i))($||{});var ge=createContext("STANDARD");var fe=()=>t().alternate;var Te=()=>t().radius;var we=()=>t().utility;

export { he as StyleProviderAnimation, ce as StyleProviderFontFace, ue as StyleProviderPreFlight, de as ThemeBuilder, $ as ThemeMode, ge as ThemeModeCtx, fe as useThemeAlternate, Te as useThemeRadius, we as useThemeUtility };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map