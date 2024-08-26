import { r, t, b, c, d, g, f, e, h, i, j as j$1, k as k$1, l, m, n as n$1, o, p as p$1, q as q$1, a } from './chunk-UUPQHQJN.mjs';
export { s as ThemeCtx, t as useTheme, u as useThemeColor, v as useThemeFonts } from './chunk-UUPQHQJN.mjs';
import { createGlobalStyle } from 'styled-components';
import I, { createContext, useEffect } from 'react';

var ee=createGlobalStyle`
      ${m=>m.animations?.map(function(t){return t})}

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
`;var ie=createGlobalStyle`
    
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
        margin: 0;
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
`;var H=({base:m,config:t})=>t||m;var j=({base:m,config:t})=>t||m;function n(m,t,i){let l=m;for(let a of i)if(l=l?.[a]??t,l==null)break;return l}var U=({base:m$1,config:t})=>{let i$1=n(t,b,["family","primary"]),l$1=n(t,n(t,c,["family","primary"]),["family","accent"]),a$1=n(t,n(t,d,["family","primary"]),["family","supporting"]),o$1=n(t,g,["scale","md"]),h$1=n(t,f,["scale","sm"]),c$1=n(t,e,["scale","xs"]),r=n(t,h,["scale","lg"]),s=n(t,i,["scale","xl"]),g$1=n(t,j$1,["scale","2xl"]),y=n(t,k$1,["scale","3xl"]),f$1=n(t,l,["scale","4xl"]),w=n(t,m,["scale","5xl"]),b$1=n(t,n$1,["scale","6xl"]),d$1=n(t,o,["scale","7xl"]),x=n(t,p$1,["scale","8xl"]),u=n(t,q$1,["scale","9xl"]);return {primary:{xs:{thin:a({family:i$1,scale:c$1,weight:100}),xlight:a({family:i$1,scale:c$1,weight:200}),light:a({family:i$1,scale:c$1,weight:300}),normal:a({family:i$1,scale:c$1,weight:400}),medium:a({family:i$1,scale:c$1,weight:500}),semibold:a({family:i$1,scale:c$1,weight:600}),bold:a({family:i$1,scale:c$1,weight:700}),xbold:a({family:i$1,scale:c$1,weight:800}),black:a({family:i$1,scale:c$1,weight:900})},sm:{thin:a({family:i$1,scale:h$1,weight:100}),xlight:a({family:i$1,scale:h$1,weight:200}),light:a({family:i$1,scale:h$1,weight:300}),normal:a({family:i$1,scale:h$1,weight:400}),medium:a({family:i$1,scale:h$1,weight:500}),semibold:a({family:i$1,scale:h$1,weight:600}),bold:a({family:i$1,scale:h$1,weight:700}),xbold:a({family:i$1,scale:h$1,weight:800}),black:a({family:i$1,scale:h$1,weight:900})},md:{thin:a({family:i$1,scale:o$1,weight:100}),xlight:a({family:i$1,scale:o$1,weight:200}),light:a({family:i$1,scale:o$1,weight:300}),normal:a({family:i$1,scale:o$1,weight:400}),medium:a({family:i$1,scale:o$1,weight:500}),semibold:a({family:i$1,scale:o$1,weight:600}),bold:a({family:i$1,scale:o$1,weight:700}),xbold:a({family:i$1,scale:o$1,weight:800}),black:a({family:i$1,scale:o$1,weight:900})},lg:{thin:a({family:i$1,scale:r,weight:100}),xlight:a({family:i$1,scale:r,weight:200}),light:a({family:i$1,scale:r,weight:300}),normal:a({family:i$1,scale:r,weight:400}),medium:a({family:i$1,scale:r,weight:500}),semibold:a({family:i$1,scale:r,weight:600}),bold:a({family:i$1,scale:r,weight:700}),xbold:a({family:i$1,scale:r,weight:800}),black:a({family:i$1,scale:r,weight:900})},xl:{thin:a({family:i$1,scale:s,weight:100}),xlight:a({family:i$1,scale:s,weight:200}),light:a({family:i$1,scale:s,weight:300}),normal:a({family:i$1,scale:s,weight:400}),medium:a({family:i$1,scale:s,weight:500}),semibold:a({family:i$1,scale:s,weight:600}),bold:a({family:i$1,scale:s,weight:700}),xbold:a({family:i$1,scale:s,weight:800}),black:a({family:i$1,scale:s,weight:900})},"2xl":{thin:a({family:i$1,scale:g$1,weight:100}),xlight:a({family:i$1,scale:g$1,weight:200}),light:a({family:i$1,scale:g$1,weight:300}),normal:a({family:i$1,scale:g$1,weight:400}),medium:a({family:i$1,scale:g$1,weight:500}),semibold:a({family:i$1,scale:g$1,weight:600}),bold:a({family:i$1,scale:g$1,weight:700}),xbold:a({family:i$1,scale:g$1,weight:800}),black:a({family:i$1,scale:g$1,weight:900})},"3xl":{thin:a({family:i$1,scale:y,weight:100}),xlight:a({family:i$1,scale:y,weight:200}),light:a({family:i$1,scale:y,weight:300}),normal:a({family:i$1,scale:y,weight:400}),medium:a({family:i$1,scale:y,weight:500}),semibold:a({family:i$1,scale:y,weight:600}),bold:a({family:i$1,scale:y,weight:700}),xbold:a({family:i$1,scale:y,weight:800}),black:a({family:i$1,scale:y,weight:900})},"4xl":{thin:a({family:i$1,scale:f$1,weight:100}),xlight:a({family:i$1,scale:f$1,weight:200}),light:a({family:i$1,scale:f$1,weight:300}),normal:a({family:i$1,scale:f$1,weight:400}),medium:a({family:i$1,scale:f$1,weight:500}),semibold:a({family:i$1,scale:f$1,weight:600}),bold:a({family:i$1,scale:f$1,weight:700}),xbold:a({family:i$1,scale:f$1,weight:800}),black:a({family:i$1,scale:f$1,weight:900})},"5xl":{thin:a({family:i$1,scale:w,weight:100}),xlight:a({family:i$1,scale:w,weight:200}),light:a({family:i$1,scale:w,weight:300}),normal:a({family:i$1,scale:w,weight:400}),medium:a({family:i$1,scale:w,weight:500}),semibold:a({family:i$1,scale:w,weight:600}),bold:a({family:i$1,scale:w,weight:700}),xbold:a({family:i$1,scale:w,weight:800}),black:a({family:i$1,scale:w,weight:900})},"6xl":{thin:a({family:i$1,scale:b$1,weight:100}),xlight:a({family:i$1,scale:b$1,weight:200}),light:a({family:i$1,scale:b$1,weight:300}),normal:a({family:i$1,scale:b$1,weight:400}),medium:a({family:i$1,scale:b$1,weight:500}),semibold:a({family:i$1,scale:b$1,weight:600}),bold:a({family:i$1,scale:b$1,weight:700}),xbold:a({family:i$1,scale:b$1,weight:800}),black:a({family:i$1,scale:b$1,weight:900})},"7xl":{thin:a({family:i$1,scale:d$1,weight:100}),xlight:a({family:i$1,scale:d$1,weight:200}),light:a({family:i$1,scale:d$1,weight:300}),normal:a({family:i$1,scale:d$1,weight:400}),medium:a({family:i$1,scale:d$1,weight:500}),semibold:a({family:i$1,scale:d$1,weight:600}),bold:a({family:i$1,scale:d$1,weight:700}),xbold:a({family:i$1,scale:d$1,weight:800}),black:a({family:i$1,scale:d$1,weight:900})},"8xl":{thin:a({family:i$1,scale:x,weight:100}),xlight:a({family:i$1,scale:x,weight:200}),light:a({family:i$1,scale:x,weight:300}),normal:a({family:i$1,scale:x,weight:400}),medium:a({family:i$1,scale:x,weight:500}),semibold:a({family:i$1,scale:x,weight:600}),bold:a({family:i$1,scale:x,weight:700}),xbold:a({family:i$1,scale:x,weight:800}),black:a({family:i$1,scale:x,weight:900})},"9xl":{thin:a({family:i$1,scale:u,weight:100}),xlight:a({family:i$1,scale:u,weight:200}),light:a({family:i$1,scale:u,weight:300}),normal:a({family:i$1,scale:u,weight:400}),medium:a({family:i$1,scale:u,weight:500}),semibold:a({family:i$1,scale:u,weight:600}),bold:a({family:i$1,scale:u,weight:700}),xbold:a({family:i$1,scale:u,weight:800}),black:a({family:i$1,scale:u,weight:900})}},supporting:{xs:{thin:a({family:a$1,scale:c$1,weight:100}),xlight:a({family:a$1,scale:c$1,weight:200}),light:a({family:a$1,scale:c$1,weight:300}),normal:a({family:a$1,scale:c$1,weight:400}),medium:a({family:a$1,scale:c$1,weight:500}),semibold:a({family:a$1,scale:c$1,weight:600}),bold:a({family:a$1,scale:c$1,weight:700}),xbold:a({family:a$1,scale:c$1,weight:800}),black:a({family:a$1,scale:c$1,weight:900})},sm:{thin:a({family:a$1,scale:h$1,weight:100}),xlight:a({family:a$1,scale:h$1,weight:200}),light:a({family:a$1,scale:h$1,weight:300}),normal:a({family:a$1,scale:h$1,weight:400}),medium:a({family:a$1,scale:h$1,weight:500}),semibold:a({family:a$1,scale:h$1,weight:600}),bold:a({family:a$1,scale:h$1,weight:700}),xbold:a({family:a$1,scale:h$1,weight:800}),black:a({family:a$1,scale:h$1,weight:900})},md:{thin:a({family:a$1,scale:o$1,weight:100}),xlight:a({family:a$1,scale:o$1,weight:200}),light:a({family:a$1,scale:o$1,weight:300}),normal:a({family:a$1,scale:o$1,weight:400}),medium:a({family:a$1,scale:o$1,weight:500}),semibold:a({family:a$1,scale:o$1,weight:600}),bold:a({family:a$1,scale:o$1,weight:700}),xbold:a({family:a$1,scale:o$1,weight:800}),black:a({family:a$1,scale:o$1,weight:900})},lg:{thin:a({family:a$1,scale:r,weight:100}),xlight:a({family:a$1,scale:r,weight:200}),light:a({family:a$1,scale:r,weight:300}),normal:a({family:a$1,scale:r,weight:400}),medium:a({family:a$1,scale:r,weight:500}),semibold:a({family:a$1,scale:r,weight:600}),bold:a({family:a$1,scale:r,weight:700}),xbold:a({family:a$1,scale:r,weight:800}),black:a({family:a$1,scale:r,weight:900})},xl:{thin:a({family:a$1,scale:s,weight:100}),xlight:a({family:a$1,scale:s,weight:200}),light:a({family:a$1,scale:s,weight:300}),normal:a({family:a$1,scale:s,weight:400}),medium:a({family:a$1,scale:s,weight:500}),semibold:a({family:a$1,scale:s,weight:600}),bold:a({family:a$1,scale:s,weight:700}),xbold:a({family:a$1,scale:s,weight:800}),black:a({family:a$1,scale:s,weight:900})},"2xl":{thin:a({family:a$1,scale:g$1,weight:100}),xlight:a({family:a$1,scale:g$1,weight:200}),light:a({family:a$1,scale:g$1,weight:300}),normal:a({family:a$1,scale:g$1,weight:400}),medium:a({family:a$1,scale:g$1,weight:500}),semibold:a({family:a$1,scale:g$1,weight:600}),bold:a({family:a$1,scale:g$1,weight:700}),xbold:a({family:a$1,scale:g$1,weight:800}),black:a({family:a$1,scale:g$1,weight:900})},"3xl":{thin:a({family:a$1,scale:y,weight:100}),xlight:a({family:a$1,scale:y,weight:200}),light:a({family:a$1,scale:y,weight:300}),normal:a({family:a$1,scale:y,weight:400}),medium:a({family:a$1,scale:y,weight:500}),semibold:a({family:a$1,scale:y,weight:600}),bold:a({family:a$1,scale:y,weight:700}),xbold:a({family:a$1,scale:y,weight:800}),black:a({family:a$1,scale:y,weight:900})},"4xl":{thin:a({family:a$1,scale:f$1,weight:100}),xlight:a({family:a$1,scale:f$1,weight:200}),light:a({family:a$1,scale:f$1,weight:300}),normal:a({family:a$1,scale:f$1,weight:400}),medium:a({family:a$1,scale:f$1,weight:500}),semibold:a({family:a$1,scale:f$1,weight:600}),bold:a({family:a$1,scale:f$1,weight:700}),xbold:a({family:a$1,scale:f$1,weight:800}),black:a({family:a$1,scale:f$1,weight:900})},"5xl":{thin:a({family:a$1,scale:w,weight:100}),xlight:a({family:a$1,scale:w,weight:200}),light:a({family:a$1,scale:w,weight:300}),normal:a({family:a$1,scale:w,weight:400}),medium:a({family:a$1,scale:w,weight:500}),semibold:a({family:a$1,scale:w,weight:600}),bold:a({family:a$1,scale:w,weight:700}),xbold:a({family:a$1,scale:w,weight:800}),black:a({family:a$1,scale:w,weight:900})},"6xl":{thin:a({family:a$1,scale:b$1,weight:100}),xlight:a({family:a$1,scale:b$1,weight:200}),light:a({family:a$1,scale:b$1,weight:300}),normal:a({family:a$1,scale:b$1,weight:400}),medium:a({family:a$1,scale:b$1,weight:500}),semibold:a({family:a$1,scale:b$1,weight:600}),bold:a({family:a$1,scale:b$1,weight:700}),xbold:a({family:a$1,scale:b$1,weight:800}),black:a({family:a$1,scale:b$1,weight:900})},"7xl":{thin:a({family:a$1,scale:d$1,weight:100}),xlight:a({family:a$1,scale:d$1,weight:200}),light:a({family:a$1,scale:d$1,weight:300}),normal:a({family:a$1,scale:d$1,weight:400}),medium:a({family:a$1,scale:d$1,weight:500}),semibold:a({family:a$1,scale:d$1,weight:600}),bold:a({family:a$1,scale:d$1,weight:700}),xbold:a({family:a$1,scale:d$1,weight:800}),black:a({family:a$1,scale:d$1,weight:900})},"8xl":{thin:a({family:a$1,scale:x,weight:100}),xlight:a({family:a$1,scale:x,weight:200}),light:a({family:a$1,scale:x,weight:300}),normal:a({family:a$1,scale:x,weight:400}),medium:a({family:a$1,scale:x,weight:500}),semibold:a({family:a$1,scale:x,weight:600}),bold:a({family:a$1,scale:x,weight:700}),xbold:a({family:a$1,scale:x,weight:800}),black:a({family:a$1,scale:x,weight:900})},"9xl":{thin:a({family:a$1,scale:u,weight:100}),xlight:a({family:a$1,scale:u,weight:200}),light:a({family:a$1,scale:u,weight:300}),normal:a({family:a$1,scale:u,weight:400}),medium:a({family:a$1,scale:u,weight:500}),semibold:a({family:a$1,scale:u,weight:600}),bold:a({family:a$1,scale:u,weight:700}),xbold:a({family:a$1,scale:u,weight:800}),black:a({family:a$1,scale:u,weight:900})}},accent:{xs:{thin:a({family:l$1,scale:c$1,weight:100}),xlight:a({family:l$1,scale:c$1,weight:200}),light:a({family:l$1,scale:c$1,weight:300}),normal:a({family:l$1,scale:c$1,weight:400}),medium:a({family:l$1,scale:c$1,weight:500}),semibold:a({family:l$1,scale:c$1,weight:600}),bold:a({family:l$1,scale:c$1,weight:700}),xbold:a({family:l$1,scale:c$1,weight:800}),black:a({family:l$1,scale:c$1,weight:900})},sm:{thin:a({family:l$1,scale:h$1,weight:100}),xlight:a({family:l$1,scale:h$1,weight:200}),light:a({family:l$1,scale:h$1,weight:300}),normal:a({family:l$1,scale:h$1,weight:400}),medium:a({family:l$1,scale:h$1,weight:500}),semibold:a({family:l$1,scale:h$1,weight:600}),bold:a({family:l$1,scale:h$1,weight:700}),xbold:a({family:l$1,scale:h$1,weight:800}),black:a({family:l$1,scale:h$1,weight:900})},md:{thin:a({family:l$1,scale:o$1,weight:100}),xlight:a({family:l$1,scale:o$1,weight:200}),light:a({family:l$1,scale:o$1,weight:300}),normal:a({family:l$1,scale:o$1,weight:400}),medium:a({family:l$1,scale:o$1,weight:500}),semibold:a({family:l$1,scale:o$1,weight:600}),bold:a({family:l$1,scale:o$1,weight:700}),xbold:a({family:l$1,scale:o$1,weight:800}),black:a({family:l$1,scale:o$1,weight:900})},lg:{thin:a({family:l$1,scale:r,weight:100}),xlight:a({family:l$1,scale:r,weight:200}),light:a({family:l$1,scale:r,weight:300}),normal:a({family:l$1,scale:r,weight:400}),medium:a({family:l$1,scale:r,weight:500}),semibold:a({family:l$1,scale:r,weight:600}),bold:a({family:l$1,scale:r,weight:700}),xbold:a({family:l$1,scale:r,weight:800}),black:a({family:l$1,scale:r,weight:900})},xl:{thin:a({family:l$1,scale:s,weight:100}),xlight:a({family:l$1,scale:s,weight:200}),light:a({family:l$1,scale:s,weight:300}),normal:a({family:l$1,scale:s,weight:400}),medium:a({family:l$1,scale:s,weight:500}),semibold:a({family:l$1,scale:s,weight:600}),bold:a({family:l$1,scale:s,weight:700}),xbold:a({family:l$1,scale:s,weight:800}),black:a({family:l$1,scale:s,weight:900})},"2xl":{thin:a({family:l$1,scale:g$1,weight:100}),xlight:a({family:l$1,scale:g$1,weight:200}),light:a({family:l$1,scale:g$1,weight:300}),normal:a({family:l$1,scale:g$1,weight:400}),medium:a({family:l$1,scale:g$1,weight:500}),semibold:a({family:l$1,scale:g$1,weight:600}),bold:a({family:l$1,scale:g$1,weight:700}),xbold:a({family:l$1,scale:g$1,weight:800}),black:a({family:l$1,scale:g$1,weight:900})},"3xl":{thin:a({family:l$1,scale:y,weight:100}),xlight:a({family:l$1,scale:y,weight:200}),light:a({family:l$1,scale:y,weight:300}),normal:a({family:l$1,scale:y,weight:400}),medium:a({family:l$1,scale:y,weight:500}),semibold:a({family:l$1,scale:y,weight:600}),bold:a({family:l$1,scale:y,weight:700}),xbold:a({family:l$1,scale:y,weight:800}),black:a({family:l$1,scale:y,weight:900})},"4xl":{thin:a({family:l$1,scale:f$1,weight:100}),xlight:a({family:l$1,scale:f$1,weight:200}),light:a({family:l$1,scale:f$1,weight:300}),normal:a({family:l$1,scale:f$1,weight:400}),medium:a({family:l$1,scale:f$1,weight:500}),semibold:a({family:l$1,scale:f$1,weight:600}),bold:a({family:l$1,scale:f$1,weight:700}),xbold:a({family:l$1,scale:f$1,weight:800}),black:a({family:l$1,scale:f$1,weight:900})},"5xl":{thin:a({family:l$1,scale:w,weight:100}),xlight:a({family:l$1,scale:w,weight:200}),light:a({family:l$1,scale:w,weight:300}),normal:a({family:l$1,scale:w,weight:400}),medium:a({family:l$1,scale:w,weight:500}),semibold:a({family:l$1,scale:w,weight:600}),bold:a({family:l$1,scale:w,weight:700}),xbold:a({family:l$1,scale:w,weight:800}),black:a({family:l$1,scale:w,weight:900})},"6xl":{thin:a({family:l$1,scale:b$1,weight:100}),xlight:a({family:l$1,scale:b$1,weight:200}),light:a({family:i$1,scale:l$1,weight:300}),normal:a({family:l$1,scale:b$1,weight:400}),medium:a({family:l$1,scale:b$1,weight:500}),semibold:a({family:l$1,scale:b$1,weight:600}),bold:a({family:l$1,scale:b$1,weight:700}),xbold:a({family:l$1,scale:b$1,weight:800}),black:a({family:l$1,scale:b$1,weight:900})},"7xl":{thin:a({family:l$1,scale:d$1,weight:100}),xlight:a({family:l$1,scale:d$1,weight:200}),light:a({family:l$1,scale:d$1,weight:300}),normal:a({family:l$1,scale:d$1,weight:400}),medium:a({family:l$1,scale:d$1,weight:500}),semibold:a({family:l$1,scale:d$1,weight:600}),bold:a({family:l$1,scale:d$1,weight:700}),xbold:a({family:l$1,scale:d$1,weight:800}),black:a({family:l$1,scale:d$1,weight:900})},"8xl":{thin:a({family:l$1,scale:x,weight:100}),xlight:a({family:l$1,scale:x,weight:200}),light:a({family:l$1,scale:x,weight:300}),normal:a({family:l$1,scale:x,weight:400}),medium:a({family:l$1,scale:x,weight:500}),semibold:a({family:l$1,scale:x,weight:600}),bold:a({family:l$1,scale:x,weight:700}),xbold:a({family:l$1,scale:x,weight:800}),black:a({family:l$1,scale:x,weight:900})},"9xl":{thin:a({family:l$1,scale:u,weight:100}),xlight:a({family:l$1,scale:u,weight:200}),light:a({family:l$1,scale:u,weight:300}),normal:a({family:l$1,scale:u,weight:400}),medium:a({family:l$1,scale:u,weight:500}),semibold:a({family:l$1,scale:u,weight:600}),bold:a({family:l$1,scale:u,weight:700}),xbold:a({family:l$1,scale:u,weight:800}),black:a({family:l$1,scale:u,weight:900})}}}};var K=({base:m,config:t})=>({external_resources:t?.external_resources?j({base:m.external_resources,config:t?.external_resources?t.external_resources:[]}):m.external_resources,fonts:t?.fonts?U({base:m.fonts,config:t?.fonts?t.fonts:{}}):m.fonts});var p=({base:m,config:t})=>{let i=n(t,m.tint_500,["tint_500"]),l=m.tint_500!=i,a=n(t,l?i:m.tint_400,["tint_400"]),o=n(t,l?a:m.tint_300,["tint_300"]),h=n(t,l?o:m.tint_200,["tint_200"]),c=n(t,l?h:m.tint_100,["tint_100"]),r=n(t,l?c:m.tint_50,["tint_50"]),s=n(t,l?i:m.tint_600,["tint_600"]),g=n(t,l?s:m.tint_700,["tint_700"]),y=n(t,l?g:m.tint_800,["tint_800"]),f=n(t,l?y:m.tint_900,["tint_900"]),w=n(t,l?f:m.tint_950,["tint_950"]);return {tint_50:r,tint_100:c,tint_200:h,tint_300:o,tint_400:a,tint_500:i,tint_600:s,tint_700:g,tint_800:y,tint_900:f,tint_950:w}};var W=({base:m,config:t})=>t||m;var q=({base:m,config:t})=>({danger:p({base:m.danger,config:t.danger?t.danger:{}}),warning:p({base:m.warning,config:t.warning?t.warning:{}}),success:p({base:m.success,config:t.success?t.success:{}}),info:p({base:m.info,config:t.info?t.info:{}}),neutrals:p({base:m.neutrals,config:t.neutrals?t.neutrals:{}}),surfaces:p({base:m.surfaces,config:t.surfaces?t.surfaces:{}}),skeletons:p({base:m.skeletons,config:t.skeletons?t.skeletons:{}}),primary:p({base:m.primary,config:t.primary?t.primary:{}}),accent:p({base:m.accent,config:t.accent?t.accent:{}}),accent2:p({base:m.accent2,config:t.accent2?t.accent2:t.accent?t.accent:{}}),accent3:p({base:m.accent3,config:t.accent3?t.accent3:t.accent?t.accent:{}}),accent4:p({base:m.accent4,config:t.accent4?t.accent4:t.accent?t.accent:{}}),accent5:p({base:m.accent5,config:t.accent5?t.accent5:t.accent?t.accent:{}}),supporting:p({base:m.supporting,config:t.supporting?t.supporting:{}}),additional:W({base:m.additional,config:t?.additional?t.additional:[]})});var G=({base:m,config:t})=>({none:m.none,xs:t?t.xs:m.xs,sm:t?t.sm:m.sm,md:t?t.md:m.md,lg:t?t.lg:m.lg,xl:t?t.xl:m.xl,"2xl":t?t["2xl"]:m["2xl"],"3xl":t?t["3xl"]:m["3xl"],full:"9999px"});var Y=({base:m,config:t})=>({none:"0 0 #0000",xs:t?t.xs:m.xs,sm:t?t.sm:m.sm,md:t?t.md:m.md,lg:t?t.lg:m.lg,xl:t?t.xl:m.xl,"2xl":t?t["2xl"]:m["2xl"]});var ae=({config:m})=>({alternate:H({base:r.alternate,config:m?.alternate?m.alternate:[]}),typography:m?.typography?K({base:r.typography,config:m.typography?m.typography:{}}):r.typography,colors:m?.colors?q({base:r.colors,config:m.colors?m.colors:{}}):r.colors,utility:r.utility,radius:G({base:r.radius,config:m.radius}),shadow:Y({base:r.shadow,config:m.shadow})});var k=(l=>(l.STANDARD="STANDARD",l.INVERTED="INVERTED",l.CONTRAST="CONTRAST",l))(k||{});(i=>{function m(l,a){return Object.values(i).includes(l)?l:a}i.from=m;function t(l){return Object.values(i).includes(l)?l:null}i.tryFrom=t;})(k||={});var me=createContext("STANDARD");var S=({name:m,alternates:t})=>{let i=t.find(l=>l.name===m);return i&&i.theme};var oe=({component:m,default:t$1})=>{let i=t(),l=S({name:m,alternates:i.alternate}),a={Color:"inherit",BackgroundColor:"transparent",BorderColor:"transparent"},o=(r,s)=>({Color:s?.Color||r?.Color||a.Color,BackgroundColor:s?.BackgroundColor||r?.BackgroundColor||a.BackgroundColor,BorderColor:s?.BorderColor||r?.BorderColor||a.BorderColor}),h=o(t$1?.Init,l?.Init),c=o(t$1?.Hover===void 0&&t$1?.Init?t$1?.Init:t$1?.Hover,l?.Hover);return {Init:h,Hover:c}};var se=()=>t().radius;var re=()=>t().utility;var he=()=>t().shadow;var ce=m=>{let t=({children:i})=>I.createElement(I.Fragment,null," ",i," ");return m.reduce((i,[l,a={}])=>({children:o})=>I.createElement(i,null,I.createElement(l,{...a},o)),t)};var ge=m=>{let{children:t,sheets:i}=m;return useEffect(()=>{i.map(function(l){let a=document.createElement("link");a.rel="stylesheet",a.href=l,document.head.appendChild(a);});},[i]),t??null};var ye=({name:m,colors:t,fallback:i})=>{let l=t.find(a=>a.name===m);return l?l.color:i};

export { ce as BuildProvidersTree, ge as ExternalStylesheetLoader, ye as LookupAdditionalColor, S as LookupAlternateTheme, ee as StyleProviderAnimation, ie as StyleProviderPreFlight, ae as ThemeBuilder, k as ThemeMode, me as ThemeModeCtx, n as orDefault, oe as useAlternateTheme, se as useThemeRadius, he as useThemeShadow, re as useThemeUtility };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map