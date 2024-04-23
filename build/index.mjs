import { r, t, b, c, d, g, f, e, h, i, j as j$1, k, l, m, n, o, p, q as q$1, a as a$1 } from './chunk-2YXYRUJM.mjs';
export { s as ThemeCtx, t as useTheme, u as useThemeColor, v as useThemeFonts } from './chunk-2YXYRUJM.mjs';
import { a } from './chunk-2FBDSVPX.mjs';
import { createGlobalStyle } from 'styled-components';
import { createContext } from 'react';

var J=createGlobalStyle`
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
`;var Z=createGlobalStyle`
      ${t=>t.resources?.map(function(e){return e})}
    `;var te=createGlobalStyle`
    
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
`;var E=({base:t,config:e})=>e||t;var j=({base:t,config:e})=>e||t;var G=({base:t,config:e$1})=>{let l$1=a(e$1,b,["family","primary"]),a$2=a(e$1,a(e$1,c,["family","primary"]),["family","accent"]),i$1=a(e$1,a(e$1,d,["family","primary"]),["family","supporting"]),m$1=a(e$1,g,["scale","md"]),p$1=a(e$1,f,["scale","sm"]),c$1=a(e$1,e,["scale","xs"]),h$1=a(e$1,h,["scale","lg"]),y=a(e$1,i,["scale","xl"]),d$1=a(e$1,j$1,["scale","2xl"]),u=a(e$1,k,["scale","3xl"]),f$1=a(e$1,l,["scale","4xl"]),x=a(e$1,m,["scale","5xl"]),T=a(e$1,n,["scale","6xl"]),g$1=a(e$1,o,["scale","7xl"]),C=a(e$1,p,["scale","8xl"]),b$1=a(e$1,q$1,["scale","9xl"]);return {primary:{xs:a$1({family:l$1,scale:c$1}),sm:a$1({family:l$1,scale:p$1}),md:a$1({family:l$1,scale:m$1}),lg:a$1({family:l$1,scale:h$1}),xl:a$1({family:l$1,scale:y}),"2xl":a$1({family:l$1,scale:d$1}),"3xl":a$1({family:l$1,scale:u}),"4xl":a$1({family:l$1,scale:f$1}),"5xl":a$1({family:l$1,scale:x}),"6xl":a$1({family:l$1,scale:T}),"7xl":a$1({family:l$1,scale:g$1}),"8xl":a$1({family:l$1,scale:C}),"9xl":a$1({family:l$1,scale:b$1})},accent:{xs:a$1({family:a$2,scale:c$1}),sm:a$1({family:a$2,scale:p$1}),md:a$1({family:a$2,scale:m$1}),lg:a$1({family:a$2,scale:h$1}),xl:a$1({family:a$2,scale:y}),"2xl":a$1({family:a$2,scale:d$1}),"3xl":a$1({family:a$2,scale:u}),"4xl":a$1({family:a$2,scale:f$1}),"5xl":a$1({family:a$2,scale:x}),"6xl":a$1({family:a$2,scale:T}),"7xl":a$1({family:a$2,scale:g$1}),"8xl":a$1({family:a$2,scale:C}),"9xl":a$1({family:a$2,scale:b$1})},supporting:{xs:a$1({family:i$1,scale:c$1}),sm:a$1({family:i$1,scale:p$1}),md:a$1({family:i$1,scale:m$1}),lg:a$1({family:i$1,scale:h$1}),xl:a$1({family:i$1,scale:y}),"2xl":a$1({family:i$1,scale:d$1}),"3xl":a$1({family:i$1,scale:u}),"4xl":a$1({family:i$1,scale:f$1}),"5xl":a$1({family:i$1,scale:x}),"6xl":a$1({family:i$1,scale:T}),"7xl":a$1({family:i$1,scale:g$1}),"8xl":a$1({family:i$1,scale:C}),"9xl":a$1({family:i$1,scale:b$1})}}};var K=({base:t,config:e})=>({resources:e?.resources?j({base:t.resources,config:e?.resources??[]}):t.resources,fonts:e?.fonts?G({base:t.fonts,config:e?.fonts?e.fonts:{}}):t.fonts});var s=({base:t,config:e})=>{let l=a(e,t.tint_500,["tint_500"]),a$1=t.tint_500!=l,i=a(e,a$1?l:t.tint_400,["tint_400"]),m=a(e,a$1?i:t.tint_300,["tint_300"]),p=a(e,a$1?m:t.tint_200,["tint_200"]),c=a(e,a$1?p:t.tint_100,["tint_100"]),h=a(e,a$1?c:t.tint_50,["tint_50"]),y=a(e,a$1?l:t.tint_600,["tint_600"]),d=a(e,a$1?y:t.tint_700,["tint_700"]),u=a(e,a$1?d:t.tint_800,["tint_800"]),f=a(e,a$1?u:t.tint_900,["tint_900"]),x=a(e,a$1?f:t.tint_950,["tint_950"]);return {tint_50:h,tint_100:c,tint_200:p,tint_300:m,tint_400:i,tint_500:l,tint_600:y,tint_700:d,tint_800:u,tint_900:f,tint_950:x}};var q=({base:t,config:e})=>e||t;var L=({base:t,config:e})=>({danger:s({base:t.danger,config:e.danger?e.danger:{}}),warning:s({base:t.warning,config:e.warning?e.warning:{}}),success:s({base:t.success,config:e.success?e.success:{}}),info:s({base:t.info,config:e.info?e.info:{}}),neutrals:s({base:t.neutrals,config:e.neutrals?e.neutrals:{}}),primary:s({base:t.primary,config:e.primary?e.primary:{}}),accent:s({base:t.accent,config:e.accent?e.accent:{}}),supporting:s({base:t.supporting,config:e.supporting?e.supporting:{}}),additional:q({base:t.additional,config:e?.additional?e.additional:[]})});var Y=({base:t,config:e})=>({none:t.none,xs:e?e.xs:t.xs,sm:e?e.sm:t.sm,md:e?e.md:t.md,lg:e?e.lg:t.lg,xl:e?e.xl:t.xl,"2xl":e?e["2xl"]:t["2xl"],"3xl":e?e["3xl"]:t["3xl"],full:"9999px"});var re=({config:t})=>({alternate:E({base:r.alternate,config:t?.alternate?t.alternate:[]}),typography:t?.typography?K({base:r.typography,config:{resources:t.typography?.resources?t.typography.resources:[],fonts:t.typography?.fonts?t.typography.fonts:{}}}):r.typography,colors:t?.colors?L({base:r.colors,config:t.colors?t.colors:{}}):r.colors,utility:r.utility,radius:Y({base:r.radius,config:t.radius})});var I=(a=>(a.STANDARD="STANDARD",a.INVERTED="INVERTED",a.CONTRAST="CONTRAST",a))(I||{});var ae=createContext("STANDARD");var le=()=>t().alternate;

export { J as StyleProviderAnimation, Z as StyleProviderFontFace, te as StyleProviderPreFlight, re as ThemeBuilder, I as ThemeMode, ae as ThemeModeCtx, le as useThemeAlternate };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map