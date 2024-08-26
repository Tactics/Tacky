import { r, t, b as b$1, c, d, g, f, e, h, i, j as j$1, k as k$1, l, m, n as n$1, o, p, q as q$1, a } from './chunk-UUPQHQJN.mjs';
export { s as ThemeCtx, t as useTheme, u as useThemeColor, v as useThemeFonts } from './chunk-UUPQHQJN.mjs';
import { createGlobalStyle } from 'styled-components';
import I, { createContext, useEffect } from 'react';

var ee=createGlobalStyle`
      ${m=>m.animations?.map(function(a){return a})}

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
`;var H=({base:m,config:a})=>a||m;var j=({base:m,config:a})=>a||m;function n(m,a,i){let l=m;for(let t of i)if(l=l?.[t]??a,l==null)break;return l}var U=({base:m$1,config:a$1})=>{let i$1=n(a$1,b$1,["family","primary"]),l$1=n(a$1,n(a$1,c,["family","primary"]),["family","accent"]),t=n(a$1,n(a$1,d,["family","primary"]),["family","supporting"]),o$1=n(a$1,g,["scale","md"]),h$1=n(a$1,f,["scale","sm"]),c$1=n(a$1,e,["scale","xs"]),g$1=n(a$1,h,["scale","lg"]),s=n(a$1,i,["scale","xl"]),r=n(a$1,j$1,["scale","2xl"]),y=n(a$1,k$1,["scale","3xl"]),f$1=n(a$1,l,["scale","4xl"]),w=n(a$1,m,["scale","5xl"]),p$1=n(a$1,n$1,["scale","6xl"]),d$1=n(a$1,o,["scale","7xl"]),x=n(a$1,p,["scale","8xl"]),u=n(a$1,q$1,["scale","9xl"]);return {primary:{xs:{thin:a({family:i$1,scale:c$1,weight:100}),xlight:a({family:i$1,scale:c$1,weight:200}),light:a({family:i$1,scale:c$1,weight:300}),normal:a({family:i$1,scale:c$1,weight:400}),medium:a({family:i$1,scale:c$1,weight:500}),semibold:a({family:i$1,scale:c$1,weight:600}),bold:a({family:i$1,scale:c$1,weight:700}),xbold:a({family:i$1,scale:c$1,weight:800}),black:a({family:i$1,scale:c$1,weight:900})},sm:{thin:a({family:i$1,scale:h$1,weight:100}),xlight:a({family:i$1,scale:h$1,weight:200}),light:a({family:i$1,scale:h$1,weight:300}),normal:a({family:i$1,scale:h$1,weight:400}),medium:a({family:i$1,scale:h$1,weight:500}),semibold:a({family:i$1,scale:h$1,weight:600}),bold:a({family:i$1,scale:h$1,weight:700}),xbold:a({family:i$1,scale:h$1,weight:800}),black:a({family:i$1,scale:h$1,weight:900})},md:{thin:a({family:i$1,scale:o$1,weight:100}),xlight:a({family:i$1,scale:o$1,weight:200}),light:a({family:i$1,scale:o$1,weight:300}),normal:a({family:i$1,scale:o$1,weight:400}),medium:a({family:i$1,scale:o$1,weight:500}),semibold:a({family:i$1,scale:o$1,weight:600}),bold:a({family:i$1,scale:o$1,weight:700}),xbold:a({family:i$1,scale:o$1,weight:800}),black:a({family:i$1,scale:o$1,weight:900})},lg:{thin:a({family:i$1,scale:g$1,weight:100}),xlight:a({family:i$1,scale:g$1,weight:200}),light:a({family:i$1,scale:g$1,weight:300}),normal:a({family:i$1,scale:g$1,weight:400}),medium:a({family:i$1,scale:g$1,weight:500}),semibold:a({family:i$1,scale:g$1,weight:600}),bold:a({family:i$1,scale:g$1,weight:700}),xbold:a({family:i$1,scale:g$1,weight:800}),black:a({family:i$1,scale:g$1,weight:900})},xl:{thin:a({family:i$1,scale:s,weight:100}),xlight:a({family:i$1,scale:s,weight:200}),light:a({family:i$1,scale:s,weight:300}),normal:a({family:i$1,scale:s,weight:400}),medium:a({family:i$1,scale:s,weight:500}),semibold:a({family:i$1,scale:s,weight:600}),bold:a({family:i$1,scale:s,weight:700}),xbold:a({family:i$1,scale:s,weight:800}),black:a({family:i$1,scale:s,weight:900})},"2xl":{thin:a({family:i$1,scale:r,weight:100}),xlight:a({family:i$1,scale:r,weight:200}),light:a({family:i$1,scale:r,weight:300}),normal:a({family:i$1,scale:r,weight:400}),medium:a({family:i$1,scale:r,weight:500}),semibold:a({family:i$1,scale:r,weight:600}),bold:a({family:i$1,scale:r,weight:700}),xbold:a({family:i$1,scale:r,weight:800}),black:a({family:i$1,scale:r,weight:900})},"3xl":{thin:a({family:i$1,scale:y,weight:100}),xlight:a({family:i$1,scale:y,weight:200}),light:a({family:i$1,scale:y,weight:300}),normal:a({family:i$1,scale:y,weight:400}),medium:a({family:i$1,scale:y,weight:500}),semibold:a({family:i$1,scale:y,weight:600}),bold:a({family:i$1,scale:y,weight:700}),xbold:a({family:i$1,scale:y,weight:800}),black:a({family:i$1,scale:y,weight:900})},"4xl":{thin:a({family:i$1,scale:f$1,weight:100}),xlight:a({family:i$1,scale:f$1,weight:200}),light:a({family:i$1,scale:f$1,weight:300}),normal:a({family:i$1,scale:f$1,weight:400}),medium:a({family:i$1,scale:f$1,weight:500}),semibold:a({family:i$1,scale:f$1,weight:600}),bold:a({family:i$1,scale:f$1,weight:700}),xbold:a({family:i$1,scale:f$1,weight:800}),black:a({family:i$1,scale:f$1,weight:900})},"5xl":{thin:a({family:i$1,scale:w,weight:100}),xlight:a({family:i$1,scale:w,weight:200}),light:a({family:i$1,scale:w,weight:300}),normal:a({family:i$1,scale:w,weight:400}),medium:a({family:i$1,scale:w,weight:500}),semibold:a({family:i$1,scale:w,weight:600}),bold:a({family:i$1,scale:w,weight:700}),xbold:a({family:i$1,scale:w,weight:800}),black:a({family:i$1,scale:w,weight:900})},"6xl":{thin:a({family:i$1,scale:p$1,weight:100}),xlight:a({family:i$1,scale:p$1,weight:200}),light:a({family:i$1,scale:p$1,weight:300}),normal:a({family:i$1,scale:p$1,weight:400}),medium:a({family:i$1,scale:p$1,weight:500}),semibold:a({family:i$1,scale:p$1,weight:600}),bold:a({family:i$1,scale:p$1,weight:700}),xbold:a({family:i$1,scale:p$1,weight:800}),black:a({family:i$1,scale:p$1,weight:900})},"7xl":{thin:a({family:i$1,scale:d$1,weight:100}),xlight:a({family:i$1,scale:d$1,weight:200}),light:a({family:i$1,scale:d$1,weight:300}),normal:a({family:i$1,scale:d$1,weight:400}),medium:a({family:i$1,scale:d$1,weight:500}),semibold:a({family:i$1,scale:d$1,weight:600}),bold:a({family:i$1,scale:d$1,weight:700}),xbold:a({family:i$1,scale:d$1,weight:800}),black:a({family:i$1,scale:d$1,weight:900})},"8xl":{thin:a({family:i$1,scale:x,weight:100}),xlight:a({family:i$1,scale:x,weight:200}),light:a({family:i$1,scale:x,weight:300}),normal:a({family:i$1,scale:x,weight:400}),medium:a({family:i$1,scale:x,weight:500}),semibold:a({family:i$1,scale:x,weight:600}),bold:a({family:i$1,scale:x,weight:700}),xbold:a({family:i$1,scale:x,weight:800}),black:a({family:i$1,scale:x,weight:900})},"9xl":{thin:a({family:i$1,scale:u,weight:100}),xlight:a({family:i$1,scale:u,weight:200}),light:a({family:i$1,scale:u,weight:300}),normal:a({family:i$1,scale:u,weight:400}),medium:a({family:i$1,scale:u,weight:500}),semibold:a({family:i$1,scale:u,weight:600}),bold:a({family:i$1,scale:u,weight:700}),xbold:a({family:i$1,scale:u,weight:800}),black:a({family:i$1,scale:u,weight:900})}},supporting:{xs:{thin:a({family:t,scale:c$1,weight:100}),xlight:a({family:t,scale:c$1,weight:200}),light:a({family:t,scale:c$1,weight:300}),normal:a({family:t,scale:c$1,weight:400}),medium:a({family:t,scale:c$1,weight:500}),semibold:a({family:t,scale:c$1,weight:600}),bold:a({family:t,scale:c$1,weight:700}),xbold:a({family:t,scale:c$1,weight:800}),black:a({family:t,scale:c$1,weight:900})},sm:{thin:a({family:t,scale:h$1,weight:100}),xlight:a({family:t,scale:h$1,weight:200}),light:a({family:t,scale:h$1,weight:300}),normal:a({family:t,scale:h$1,weight:400}),medium:a({family:t,scale:h$1,weight:500}),semibold:a({family:t,scale:h$1,weight:600}),bold:a({family:t,scale:h$1,weight:700}),xbold:a({family:t,scale:h$1,weight:800}),black:a({family:t,scale:h$1,weight:900})},md:{thin:a({family:t,scale:o$1,weight:100}),xlight:a({family:t,scale:o$1,weight:200}),light:a({family:t,scale:o$1,weight:300}),normal:a({family:t,scale:o$1,weight:400}),medium:a({family:t,scale:o$1,weight:500}),semibold:a({family:t,scale:o$1,weight:600}),bold:a({family:t,scale:o$1,weight:700}),xbold:a({family:t,scale:o$1,weight:800}),black:a({family:t,scale:o$1,weight:900})},lg:{thin:a({family:t,scale:g$1,weight:100}),xlight:a({family:t,scale:g$1,weight:200}),light:a({family:t,scale:g$1,weight:300}),normal:a({family:t,scale:g$1,weight:400}),medium:a({family:t,scale:g$1,weight:500}),semibold:a({family:t,scale:g$1,weight:600}),bold:a({family:t,scale:g$1,weight:700}),xbold:a({family:t,scale:g$1,weight:800}),black:a({family:t,scale:g$1,weight:900})},xl:{thin:a({family:t,scale:s,weight:100}),xlight:a({family:t,scale:s,weight:200}),light:a({family:t,scale:s,weight:300}),normal:a({family:t,scale:s,weight:400}),medium:a({family:t,scale:s,weight:500}),semibold:a({family:t,scale:s,weight:600}),bold:a({family:t,scale:s,weight:700}),xbold:a({family:t,scale:s,weight:800}),black:a({family:t,scale:s,weight:900})},"2xl":{thin:a({family:t,scale:r,weight:100}),xlight:a({family:t,scale:r,weight:200}),light:a({family:t,scale:r,weight:300}),normal:a({family:t,scale:r,weight:400}),medium:a({family:t,scale:r,weight:500}),semibold:a({family:t,scale:r,weight:600}),bold:a({family:t,scale:r,weight:700}),xbold:a({family:t,scale:r,weight:800}),black:a({family:t,scale:r,weight:900})},"3xl":{thin:a({family:t,scale:y,weight:100}),xlight:a({family:t,scale:y,weight:200}),light:a({family:t,scale:y,weight:300}),normal:a({family:t,scale:y,weight:400}),medium:a({family:t,scale:y,weight:500}),semibold:a({family:t,scale:y,weight:600}),bold:a({family:t,scale:y,weight:700}),xbold:a({family:t,scale:y,weight:800}),black:a({family:t,scale:y,weight:900})},"4xl":{thin:a({family:t,scale:f$1,weight:100}),xlight:a({family:t,scale:f$1,weight:200}),light:a({family:t,scale:f$1,weight:300}),normal:a({family:t,scale:f$1,weight:400}),medium:a({family:t,scale:f$1,weight:500}),semibold:a({family:t,scale:f$1,weight:600}),bold:a({family:t,scale:f$1,weight:700}),xbold:a({family:t,scale:f$1,weight:800}),black:a({family:t,scale:f$1,weight:900})},"5xl":{thin:a({family:t,scale:w,weight:100}),xlight:a({family:t,scale:w,weight:200}),light:a({family:t,scale:w,weight:300}),normal:a({family:t,scale:w,weight:400}),medium:a({family:t,scale:w,weight:500}),semibold:a({family:t,scale:w,weight:600}),bold:a({family:t,scale:w,weight:700}),xbold:a({family:t,scale:w,weight:800}),black:a({family:t,scale:w,weight:900})},"6xl":{thin:a({family:t,scale:p$1,weight:100}),xlight:a({family:t,scale:p$1,weight:200}),light:a({family:t,scale:p$1,weight:300}),normal:a({family:t,scale:p$1,weight:400}),medium:a({family:t,scale:p$1,weight:500}),semibold:a({family:t,scale:p$1,weight:600}),bold:a({family:t,scale:p$1,weight:700}),xbold:a({family:t,scale:p$1,weight:800}),black:a({family:t,scale:p$1,weight:900})},"7xl":{thin:a({family:t,scale:d$1,weight:100}),xlight:a({family:t,scale:d$1,weight:200}),light:a({family:t,scale:d$1,weight:300}),normal:a({family:t,scale:d$1,weight:400}),medium:a({family:t,scale:d$1,weight:500}),semibold:a({family:t,scale:d$1,weight:600}),bold:a({family:t,scale:d$1,weight:700}),xbold:a({family:t,scale:d$1,weight:800}),black:a({family:t,scale:d$1,weight:900})},"8xl":{thin:a({family:t,scale:x,weight:100}),xlight:a({family:t,scale:x,weight:200}),light:a({family:t,scale:x,weight:300}),normal:a({family:t,scale:x,weight:400}),medium:a({family:t,scale:x,weight:500}),semibold:a({family:t,scale:x,weight:600}),bold:a({family:t,scale:x,weight:700}),xbold:a({family:t,scale:x,weight:800}),black:a({family:t,scale:x,weight:900})},"9xl":{thin:a({family:t,scale:u,weight:100}),xlight:a({family:t,scale:u,weight:200}),light:a({family:t,scale:u,weight:300}),normal:a({family:t,scale:u,weight:400}),medium:a({family:t,scale:u,weight:500}),semibold:a({family:t,scale:u,weight:600}),bold:a({family:t,scale:u,weight:700}),xbold:a({family:t,scale:u,weight:800}),black:a({family:t,scale:u,weight:900})}},accent:{xs:{thin:a({family:l$1,scale:c$1,weight:100}),xlight:a({family:l$1,scale:c$1,weight:200}),light:a({family:l$1,scale:c$1,weight:300}),normal:a({family:l$1,scale:c$1,weight:400}),medium:a({family:l$1,scale:c$1,weight:500}),semibold:a({family:l$1,scale:c$1,weight:600}),bold:a({family:l$1,scale:c$1,weight:700}),xbold:a({family:l$1,scale:c$1,weight:800}),black:a({family:l$1,scale:c$1,weight:900})},sm:{thin:a({family:l$1,scale:h$1,weight:100}),xlight:a({family:l$1,scale:h$1,weight:200}),light:a({family:l$1,scale:h$1,weight:300}),normal:a({family:l$1,scale:h$1,weight:400}),medium:a({family:l$1,scale:h$1,weight:500}),semibold:a({family:l$1,scale:h$1,weight:600}),bold:a({family:l$1,scale:h$1,weight:700}),xbold:a({family:l$1,scale:h$1,weight:800}),black:a({family:l$1,scale:h$1,weight:900})},md:{thin:a({family:l$1,scale:o$1,weight:100}),xlight:a({family:l$1,scale:o$1,weight:200}),light:a({family:l$1,scale:o$1,weight:300}),normal:a({family:l$1,scale:o$1,weight:400}),medium:a({family:l$1,scale:o$1,weight:500}),semibold:a({family:l$1,scale:o$1,weight:600}),bold:a({family:l$1,scale:o$1,weight:700}),xbold:a({family:l$1,scale:o$1,weight:800}),black:a({family:l$1,scale:o$1,weight:900})},lg:{thin:a({family:l$1,scale:g$1,weight:100}),xlight:a({family:l$1,scale:g$1,weight:200}),light:a({family:l$1,scale:g$1,weight:300}),normal:a({family:l$1,scale:g$1,weight:400}),medium:a({family:l$1,scale:g$1,weight:500}),semibold:a({family:l$1,scale:g$1,weight:600}),bold:a({family:l$1,scale:g$1,weight:700}),xbold:a({family:l$1,scale:g$1,weight:800}),black:a({family:l$1,scale:g$1,weight:900})},xl:{thin:a({family:l$1,scale:s,weight:100}),xlight:a({family:l$1,scale:s,weight:200}),light:a({family:l$1,scale:s,weight:300}),normal:a({family:l$1,scale:s,weight:400}),medium:a({family:l$1,scale:s,weight:500}),semibold:a({family:l$1,scale:s,weight:600}),bold:a({family:l$1,scale:s,weight:700}),xbold:a({family:l$1,scale:s,weight:800}),black:a({family:l$1,scale:s,weight:900})},"2xl":{thin:a({family:l$1,scale:r,weight:100}),xlight:a({family:l$1,scale:r,weight:200}),light:a({family:l$1,scale:r,weight:300}),normal:a({family:l$1,scale:r,weight:400}),medium:a({family:l$1,scale:r,weight:500}),semibold:a({family:l$1,scale:r,weight:600}),bold:a({family:l$1,scale:r,weight:700}),xbold:a({family:l$1,scale:r,weight:800}),black:a({family:l$1,scale:r,weight:900})},"3xl":{thin:a({family:l$1,scale:y,weight:100}),xlight:a({family:l$1,scale:y,weight:200}),light:a({family:l$1,scale:y,weight:300}),normal:a({family:l$1,scale:y,weight:400}),medium:a({family:l$1,scale:y,weight:500}),semibold:a({family:l$1,scale:y,weight:600}),bold:a({family:l$1,scale:y,weight:700}),xbold:a({family:l$1,scale:y,weight:800}),black:a({family:l$1,scale:y,weight:900})},"4xl":{thin:a({family:l$1,scale:f$1,weight:100}),xlight:a({family:l$1,scale:f$1,weight:200}),light:a({family:l$1,scale:f$1,weight:300}),normal:a({family:l$1,scale:f$1,weight:400}),medium:a({family:l$1,scale:f$1,weight:500}),semibold:a({family:l$1,scale:f$1,weight:600}),bold:a({family:l$1,scale:f$1,weight:700}),xbold:a({family:l$1,scale:f$1,weight:800}),black:a({family:l$1,scale:f$1,weight:900})},"5xl":{thin:a({family:l$1,scale:w,weight:100}),xlight:a({family:l$1,scale:w,weight:200}),light:a({family:l$1,scale:w,weight:300}),normal:a({family:l$1,scale:w,weight:400}),medium:a({family:l$1,scale:w,weight:500}),semibold:a({family:l$1,scale:w,weight:600}),bold:a({family:l$1,scale:w,weight:700}),xbold:a({family:l$1,scale:w,weight:800}),black:a({family:l$1,scale:w,weight:900})},"6xl":{thin:a({family:l$1,scale:p$1,weight:100}),xlight:a({family:l$1,scale:p$1,weight:200}),light:a({family:i$1,scale:l$1,weight:300}),normal:a({family:l$1,scale:p$1,weight:400}),medium:a({family:l$1,scale:p$1,weight:500}),semibold:a({family:l$1,scale:p$1,weight:600}),bold:a({family:l$1,scale:p$1,weight:700}),xbold:a({family:l$1,scale:p$1,weight:800}),black:a({family:l$1,scale:p$1,weight:900})},"7xl":{thin:a({family:l$1,scale:d$1,weight:100}),xlight:a({family:l$1,scale:d$1,weight:200}),light:a({family:l$1,scale:d$1,weight:300}),normal:a({family:l$1,scale:d$1,weight:400}),medium:a({family:l$1,scale:d$1,weight:500}),semibold:a({family:l$1,scale:d$1,weight:600}),bold:a({family:l$1,scale:d$1,weight:700}),xbold:a({family:l$1,scale:d$1,weight:800}),black:a({family:l$1,scale:d$1,weight:900})},"8xl":{thin:a({family:l$1,scale:x,weight:100}),xlight:a({family:l$1,scale:x,weight:200}),light:a({family:l$1,scale:x,weight:300}),normal:a({family:l$1,scale:x,weight:400}),medium:a({family:l$1,scale:x,weight:500}),semibold:a({family:l$1,scale:x,weight:600}),bold:a({family:l$1,scale:x,weight:700}),xbold:a({family:l$1,scale:x,weight:800}),black:a({family:l$1,scale:x,weight:900})},"9xl":{thin:a({family:l$1,scale:u,weight:100}),xlight:a({family:l$1,scale:u,weight:200}),light:a({family:l$1,scale:u,weight:300}),normal:a({family:l$1,scale:u,weight:400}),medium:a({family:l$1,scale:u,weight:500}),semibold:a({family:l$1,scale:u,weight:600}),bold:a({family:l$1,scale:u,weight:700}),xbold:a({family:l$1,scale:u,weight:800}),black:a({family:l$1,scale:u,weight:900})}}}};var K=({base:m,config:a})=>({external_resources:a?.external_resources?j({base:m.external_resources,config:a?.external_resources?a.external_resources:[]}):m.external_resources,fonts:a?.fonts?U({base:m.fonts,config:a?.fonts?a.fonts:{}}):m.fonts});var b=({base:m,config:a})=>{let i=n(a,m.tint_500,["tint_500"]),l=m.tint_500!=i,t=n(a,l?i:m.tint_400,["tint_400"]),o=n(a,l?t:m.tint_300,["tint_300"]),h=n(a,l?o:m.tint_200,["tint_200"]),c=n(a,l?h:m.tint_100,["tint_100"]),g=n(a,l?c:m.tint_50,["tint_50"]),s=n(a,l?i:m.tint_600,["tint_600"]),r=n(a,l?s:m.tint_700,["tint_700"]),y=n(a,l?r:m.tint_800,["tint_800"]),f=n(a,l?y:m.tint_900,["tint_900"]),w=n(a,l?f:m.tint_950,["tint_950"]);return {tint_50:g,tint_100:c,tint_200:h,tint_300:o,tint_400:t,tint_500:i,tint_600:s,tint_700:r,tint_800:y,tint_900:f,tint_950:w}};var W=({base:m,config:a})=>a||m;var q=({base:m,config:a})=>({danger:b({base:m.danger,config:a.danger?a.danger:{}}),warning:b({base:m.warning,config:a.warning?a.warning:{}}),success:b({base:m.success,config:a.success?a.success:{}}),info:b({base:m.info,config:a.info?a.info:{}}),neutrals:b({base:m.neutrals,config:a.neutrals?a.neutrals:{}}),surfaces:b({base:m.surfaces,config:a.surfaces?a.surfaces:{}}),skeletons:b({base:m.skeletons,config:a.skeletons?a.skeletons:{}}),primary:b({base:m.primary,config:a.primary?a.primary:{}}),accent:b({base:m.accent,config:a.accent?a.accent:{}}),accent2:b({base:m.accent2,config:a.accent2?a.accent2:a.accent?a.accent:{}}),accent3:b({base:m.accent3,config:a.accent3?a.accent3:a.accent?a.accent:{}}),accent4:b({base:m.accent4,config:a.accent4?a.accent4:a.accent?a.accent:{}}),accent5:b({base:m.accent5,config:a.accent5?a.accent5:a.accent?a.accent:{}}),supporting:b({base:m.supporting,config:a.supporting?a.supporting:{}}),additional:W({base:m.additional,config:a?.additional?a.additional:[]})});var G=({base:m,config:a})=>({none:m.none,xs:a?a.xs:m.xs,sm:a?a.sm:m.sm,md:a?a.md:m.md,lg:a?a.lg:m.lg,xl:a?a.xl:m.xl,"2xl":a?a["2xl"]:m["2xl"],"3xl":a?a["3xl"]:m["3xl"],full:"9999px"});var Y=({base:m,config:a})=>({none:"0 0 #0000",xs:a?a.xs:m.xs,sm:a?a.sm:m.sm,md:a?a.md:m.md,lg:a?a.lg:m.lg,xl:a?a.xl:m.xl,"2xl":a?a["2xl"]:m["2xl"]});var ae=({config:m})=>({alternate:H({base:r.alternate,config:m?.alternate?m.alternate:[]}),typography:m?.typography?K({base:r.typography,config:m.typography?m.typography:{}}):r.typography,colors:m?.colors?q({base:r.colors,config:m.colors?m.colors:{}}):r.colors,utility:r.utility,radius:G({base:r.radius,config:m.radius}),shadow:Y({base:r.shadow,config:m.shadow})});var k=(l=>(l.STANDARD="STANDARD",l.INVERTED="INVERTED",l.CONTRAST="CONTRAST",l))(k||{});(i=>{function m(l,t){return Object.values(i).includes(l)?l:t}i.from=m;function a(l){return Object.values(i).includes(l)?l:null}i.tryFrom=a;})(k||={});var me=createContext("STANDARD");var S=({name:m,alternates:a})=>{let i=a.find(l=>l.name===m);return i&&i.theme};var oe=({component:m,default:a})=>{let i=t(),l=S({name:m,alternates:i.alternate}),t$1={Color:"inherit",BackgroundColor:"transparent",BorderColor:"transparent"},o=(s,r)=>({Color:r?.Color||s?.Color||t$1.Color,BackgroundColor:r?.BackgroundColor||s?.BackgroundColor||t$1.BackgroundColor,BorderColor:r?.BorderColor||s?.BorderColor||t$1.BorderColor}),h=o(a?.Init,l?.Init),c=o(a?.Hover===void 0&&a?.Init?a?.Init:a?.Hover,l?.Hover),g=o(a?.Loading===void 0&&a?.Init?a?.Init:a?.Loading,l?.Loading);return {Init:h,Hover:c,Loading:g}};var se=()=>t().radius;var re=()=>t().utility;var he=()=>t().shadow;var ce=m=>{let a=({children:i})=>I.createElement(I.Fragment,null," ",i," ");return m.reduce((i,[l,t={}])=>({children:o})=>I.createElement(i,null,I.createElement(l,{...t},o)),a)};var ge=m=>{let{children:a,sheets:i}=m;return useEffect(()=>{i.map(function(l){let t=document.createElement("link");t.rel="stylesheet",t.href=l,document.head.appendChild(t);});},[i]),a??null};var ye=({name:m,colors:a,fallback:i})=>{let l=a.find(t=>t.name===m);return l?l.color:i};

export { ce as BuildProvidersTree, ge as ExternalStylesheetLoader, ye as LookupAdditionalColor, S as LookupAlternateTheme, ee as StyleProviderAnimation, ie as StyleProviderPreFlight, ae as ThemeBuilder, k as ThemeMode, me as ThemeModeCtx, n as orDefault, oe as useAlternateTheme, se as useThemeRadius, he as useThemeShadow, re as useThemeUtility };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map