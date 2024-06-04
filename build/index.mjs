import { r, t, b, c, d, g, f, e, h, i, j as j$1, k, l, m, n, o, p as p$1, q, a as a$1 } from './chunk-FTO5QCNT.mjs';
export { s as ThemeCtx, t as useTheme, u as useThemeColor, v as useThemeFonts } from './chunk-FTO5QCNT.mjs';
import { a } from './chunk-2FBDSVPX.mjs';
import { createGlobalStyle } from 'styled-components';
import { createContext } from 'react';

var J=createGlobalStyle`
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
`;var Z=createGlobalStyle`
      ${m=>m.resources?.map(function(t){return t})}
    `;var le=createGlobalStyle`
    
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
`;var ae=createGlobalStyle`
    
    /* Reset all default a-styling when using external routing to prevent leaking of external styles */
    a {
        all: unset;
    }
`;var O=({base:m,config:t})=>t||m;var E=({base:m,config:t})=>t||m;var U=({base:m$1,config:t})=>{let i$1=a(t,b,["family","primary"]),l$1=a(t,a(t,c,["family","primary"]),["family","accent"]),a$2=a(t,a(t,d,["family","primary"]),["family","supporting"]),h$1=a(t,g,["scale","md"]),o$1=a(t,f,["scale","sm"]),g$1=a(t,e,["scale","xs"]),n$1=a(t,h,["scale","lg"]),c$1=a(t,i,["scale","xl"]),r=a(t,j$1,["scale","2xl"]),y=a(t,k,["scale","3xl"]),f$1=a(t,l,["scale","4xl"]),w=a(t,m,["scale","5xl"]),u=a(t,n,["scale","6xl"]),d$1=a(t,o,["scale","7xl"]),b$1=a(t,p$1,["scale","8xl"]),x=a(t,q,["scale","9xl"]);return {primary:{xs:{thin:a$1({family:i$1,scale:g$1,weight:100}),xlight:a$1({family:i$1,scale:g$1,weight:200}),light:a$1({family:i$1,scale:g$1,weight:300}),normal:a$1({family:i$1,scale:g$1,weight:400}),medium:a$1({family:i$1,scale:g$1,weight:500}),semibold:a$1({family:i$1,scale:g$1,weight:600}),bold:a$1({family:i$1,scale:g$1,weight:700}),xbold:a$1({family:i$1,scale:g$1,weight:800}),black:a$1({family:i$1,scale:g$1,weight:900})},sm:{thin:a$1({family:i$1,scale:o$1,weight:100}),xlight:a$1({family:i$1,scale:o$1,weight:200}),light:a$1({family:i$1,scale:o$1,weight:300}),normal:a$1({family:i$1,scale:o$1,weight:400}),medium:a$1({family:i$1,scale:o$1,weight:500}),semibold:a$1({family:i$1,scale:o$1,weight:600}),bold:a$1({family:i$1,scale:o$1,weight:700}),xbold:a$1({family:i$1,scale:o$1,weight:800}),black:a$1({family:i$1,scale:o$1,weight:900})},md:{thin:a$1({family:i$1,scale:h$1,weight:100}),xlight:a$1({family:i$1,scale:h$1,weight:200}),light:a$1({family:i$1,scale:h$1,weight:300}),normal:a$1({family:i$1,scale:h$1,weight:400}),medium:a$1({family:i$1,scale:h$1,weight:500}),semibold:a$1({family:i$1,scale:h$1,weight:600}),bold:a$1({family:i$1,scale:h$1,weight:700}),xbold:a$1({family:i$1,scale:h$1,weight:800}),black:a$1({family:i$1,scale:h$1,weight:900})},lg:{thin:a$1({family:i$1,scale:n$1,weight:100}),xlight:a$1({family:i$1,scale:n$1,weight:200}),light:a$1({family:i$1,scale:n$1,weight:300}),normal:a$1({family:i$1,scale:n$1,weight:400}),medium:a$1({family:i$1,scale:n$1,weight:500}),semibold:a$1({family:i$1,scale:n$1,weight:600}),bold:a$1({family:i$1,scale:n$1,weight:700}),xbold:a$1({family:i$1,scale:n$1,weight:800}),black:a$1({family:i$1,scale:n$1,weight:900})},xl:{thin:a$1({family:i$1,scale:c$1,weight:100}),xlight:a$1({family:i$1,scale:c$1,weight:200}),light:a$1({family:i$1,scale:c$1,weight:300}),normal:a$1({family:i$1,scale:c$1,weight:400}),medium:a$1({family:i$1,scale:c$1,weight:500}),semibold:a$1({family:i$1,scale:c$1,weight:600}),bold:a$1({family:i$1,scale:c$1,weight:700}),xbold:a$1({family:i$1,scale:c$1,weight:800}),black:a$1({family:i$1,scale:c$1,weight:900})},"2xl":{thin:a$1({family:i$1,scale:r,weight:100}),xlight:a$1({family:i$1,scale:r,weight:200}),light:a$1({family:i$1,scale:r,weight:300}),normal:a$1({family:i$1,scale:r,weight:400}),medium:a$1({family:i$1,scale:r,weight:500}),semibold:a$1({family:i$1,scale:r,weight:600}),bold:a$1({family:i$1,scale:r,weight:700}),xbold:a$1({family:i$1,scale:r,weight:800}),black:a$1({family:i$1,scale:r,weight:900})},"3xl":{thin:a$1({family:i$1,scale:y,weight:100}),xlight:a$1({family:i$1,scale:y,weight:200}),light:a$1({family:i$1,scale:y,weight:300}),normal:a$1({family:i$1,scale:y,weight:400}),medium:a$1({family:i$1,scale:y,weight:500}),semibold:a$1({family:i$1,scale:y,weight:600}),bold:a$1({family:i$1,scale:y,weight:700}),xbold:a$1({family:i$1,scale:y,weight:800}),black:a$1({family:i$1,scale:y,weight:900})},"4xl":{thin:a$1({family:i$1,scale:f$1,weight:100}),xlight:a$1({family:i$1,scale:f$1,weight:200}),light:a$1({family:i$1,scale:f$1,weight:300}),normal:a$1({family:i$1,scale:f$1,weight:400}),medium:a$1({family:i$1,scale:f$1,weight:500}),semibold:a$1({family:i$1,scale:f$1,weight:600}),bold:a$1({family:i$1,scale:f$1,weight:700}),xbold:a$1({family:i$1,scale:f$1,weight:800}),black:a$1({family:i$1,scale:f$1,weight:900})},"5xl":{thin:a$1({family:i$1,scale:w,weight:100}),xlight:a$1({family:i$1,scale:w,weight:200}),light:a$1({family:i$1,scale:w,weight:300}),normal:a$1({family:i$1,scale:w,weight:400}),medium:a$1({family:i$1,scale:w,weight:500}),semibold:a$1({family:i$1,scale:w,weight:600}),bold:a$1({family:i$1,scale:w,weight:700}),xbold:a$1({family:i$1,scale:w,weight:800}),black:a$1({family:i$1,scale:w,weight:900})},"6xl":{thin:a$1({family:i$1,scale:u,weight:100}),xlight:a$1({family:i$1,scale:u,weight:200}),light:a$1({family:i$1,scale:u,weight:300}),normal:a$1({family:i$1,scale:u,weight:400}),medium:a$1({family:i$1,scale:u,weight:500}),semibold:a$1({family:i$1,scale:u,weight:600}),bold:a$1({family:i$1,scale:u,weight:700}),xbold:a$1({family:i$1,scale:u,weight:800}),black:a$1({family:i$1,scale:u,weight:900})},"7xl":{thin:a$1({family:i$1,scale:d$1,weight:100}),xlight:a$1({family:i$1,scale:d$1,weight:200}),light:a$1({family:i$1,scale:d$1,weight:300}),normal:a$1({family:i$1,scale:d$1,weight:400}),medium:a$1({family:i$1,scale:d$1,weight:500}),semibold:a$1({family:i$1,scale:d$1,weight:600}),bold:a$1({family:i$1,scale:d$1,weight:700}),xbold:a$1({family:i$1,scale:d$1,weight:800}),black:a$1({family:i$1,scale:d$1,weight:900})},"8xl":{thin:a$1({family:i$1,scale:b$1,weight:100}),xlight:a$1({family:i$1,scale:b$1,weight:200}),light:a$1({family:i$1,scale:b$1,weight:300}),normal:a$1({family:i$1,scale:b$1,weight:400}),medium:a$1({family:i$1,scale:b$1,weight:500}),semibold:a$1({family:i$1,scale:b$1,weight:600}),bold:a$1({family:i$1,scale:b$1,weight:700}),xbold:a$1({family:i$1,scale:b$1,weight:800}),black:a$1({family:i$1,scale:b$1,weight:900})},"9xl":{thin:a$1({family:i$1,scale:x,weight:100}),xlight:a$1({family:i$1,scale:x,weight:200}),light:a$1({family:i$1,scale:x,weight:300}),normal:a$1({family:i$1,scale:x,weight:400}),medium:a$1({family:i$1,scale:x,weight:500}),semibold:a$1({family:i$1,scale:x,weight:600}),bold:a$1({family:i$1,scale:x,weight:700}),xbold:a$1({family:i$1,scale:x,weight:800}),black:a$1({family:i$1,scale:x,weight:900})}},supporting:{xs:{thin:a$1({family:a$2,scale:g$1,weight:100}),xlight:a$1({family:a$2,scale:g$1,weight:200}),light:a$1({family:a$2,scale:g$1,weight:300}),normal:a$1({family:a$2,scale:g$1,weight:400}),medium:a$1({family:a$2,scale:g$1,weight:500}),semibold:a$1({family:a$2,scale:g$1,weight:600}),bold:a$1({family:a$2,scale:g$1,weight:700}),xbold:a$1({family:a$2,scale:g$1,weight:800}),black:a$1({family:a$2,scale:g$1,weight:900})},sm:{thin:a$1({family:a$2,scale:o$1,weight:100}),xlight:a$1({family:a$2,scale:o$1,weight:200}),light:a$1({family:a$2,scale:o$1,weight:300}),normal:a$1({family:a$2,scale:o$1,weight:400}),medium:a$1({family:a$2,scale:o$1,weight:500}),semibold:a$1({family:a$2,scale:o$1,weight:600}),bold:a$1({family:a$2,scale:o$1,weight:700}),xbold:a$1({family:a$2,scale:o$1,weight:800}),black:a$1({family:a$2,scale:o$1,weight:900})},md:{thin:a$1({family:a$2,scale:h$1,weight:100}),xlight:a$1({family:a$2,scale:h$1,weight:200}),light:a$1({family:a$2,scale:h$1,weight:300}),normal:a$1({family:a$2,scale:h$1,weight:400}),medium:a$1({family:a$2,scale:h$1,weight:500}),semibold:a$1({family:a$2,scale:h$1,weight:600}),bold:a$1({family:a$2,scale:h$1,weight:700}),xbold:a$1({family:a$2,scale:h$1,weight:800}),black:a$1({family:a$2,scale:h$1,weight:900})},lg:{thin:a$1({family:a$2,scale:n$1,weight:100}),xlight:a$1({family:a$2,scale:n$1,weight:200}),light:a$1({family:a$2,scale:n$1,weight:300}),normal:a$1({family:a$2,scale:n$1,weight:400}),medium:a$1({family:a$2,scale:n$1,weight:500}),semibold:a$1({family:a$2,scale:n$1,weight:600}),bold:a$1({family:a$2,scale:n$1,weight:700}),xbold:a$1({family:a$2,scale:n$1,weight:800}),black:a$1({family:a$2,scale:n$1,weight:900})},xl:{thin:a$1({family:a$2,scale:c$1,weight:100}),xlight:a$1({family:a$2,scale:c$1,weight:200}),light:a$1({family:a$2,scale:c$1,weight:300}),normal:a$1({family:a$2,scale:c$1,weight:400}),medium:a$1({family:a$2,scale:c$1,weight:500}),semibold:a$1({family:a$2,scale:c$1,weight:600}),bold:a$1({family:a$2,scale:c$1,weight:700}),xbold:a$1({family:a$2,scale:c$1,weight:800}),black:a$1({family:a$2,scale:c$1,weight:900})},"2xl":{thin:a$1({family:a$2,scale:r,weight:100}),xlight:a$1({family:a$2,scale:r,weight:200}),light:a$1({family:a$2,scale:r,weight:300}),normal:a$1({family:a$2,scale:r,weight:400}),medium:a$1({family:a$2,scale:r,weight:500}),semibold:a$1({family:a$2,scale:r,weight:600}),bold:a$1({family:a$2,scale:r,weight:700}),xbold:a$1({family:a$2,scale:r,weight:800}),black:a$1({family:a$2,scale:r,weight:900})},"3xl":{thin:a$1({family:a$2,scale:y,weight:100}),xlight:a$1({family:a$2,scale:y,weight:200}),light:a$1({family:a$2,scale:y,weight:300}),normal:a$1({family:a$2,scale:y,weight:400}),medium:a$1({family:a$2,scale:y,weight:500}),semibold:a$1({family:a$2,scale:y,weight:600}),bold:a$1({family:a$2,scale:y,weight:700}),xbold:a$1({family:a$2,scale:y,weight:800}),black:a$1({family:a$2,scale:y,weight:900})},"4xl":{thin:a$1({family:a$2,scale:f$1,weight:100}),xlight:a$1({family:a$2,scale:f$1,weight:200}),light:a$1({family:a$2,scale:f$1,weight:300}),normal:a$1({family:a$2,scale:f$1,weight:400}),medium:a$1({family:a$2,scale:f$1,weight:500}),semibold:a$1({family:a$2,scale:f$1,weight:600}),bold:a$1({family:a$2,scale:f$1,weight:700}),xbold:a$1({family:a$2,scale:f$1,weight:800}),black:a$1({family:a$2,scale:f$1,weight:900})},"5xl":{thin:a$1({family:a$2,scale:w,weight:100}),xlight:a$1({family:a$2,scale:w,weight:200}),light:a$1({family:a$2,scale:w,weight:300}),normal:a$1({family:a$2,scale:w,weight:400}),medium:a$1({family:a$2,scale:w,weight:500}),semibold:a$1({family:a$2,scale:w,weight:600}),bold:a$1({family:a$2,scale:w,weight:700}),xbold:a$1({family:a$2,scale:w,weight:800}),black:a$1({family:a$2,scale:w,weight:900})},"6xl":{thin:a$1({family:a$2,scale:u,weight:100}),xlight:a$1({family:a$2,scale:u,weight:200}),light:a$1({family:a$2,scale:u,weight:300}),normal:a$1({family:a$2,scale:u,weight:400}),medium:a$1({family:a$2,scale:u,weight:500}),semibold:a$1({family:a$2,scale:u,weight:600}),bold:a$1({family:a$2,scale:u,weight:700}),xbold:a$1({family:a$2,scale:u,weight:800}),black:a$1({family:a$2,scale:u,weight:900})},"7xl":{thin:a$1({family:a$2,scale:d$1,weight:100}),xlight:a$1({family:a$2,scale:d$1,weight:200}),light:a$1({family:a$2,scale:d$1,weight:300}),normal:a$1({family:a$2,scale:d$1,weight:400}),medium:a$1({family:a$2,scale:d$1,weight:500}),semibold:a$1({family:a$2,scale:d$1,weight:600}),bold:a$1({family:a$2,scale:d$1,weight:700}),xbold:a$1({family:a$2,scale:d$1,weight:800}),black:a$1({family:a$2,scale:d$1,weight:900})},"8xl":{thin:a$1({family:a$2,scale:b$1,weight:100}),xlight:a$1({family:a$2,scale:b$1,weight:200}),light:a$1({family:a$2,scale:b$1,weight:300}),normal:a$1({family:a$2,scale:b$1,weight:400}),medium:a$1({family:a$2,scale:b$1,weight:500}),semibold:a$1({family:a$2,scale:b$1,weight:600}),bold:a$1({family:a$2,scale:b$1,weight:700}),xbold:a$1({family:a$2,scale:b$1,weight:800}),black:a$1({family:a$2,scale:b$1,weight:900})},"9xl":{thin:a$1({family:a$2,scale:x,weight:100}),xlight:a$1({family:a$2,scale:x,weight:200}),light:a$1({family:a$2,scale:x,weight:300}),normal:a$1({family:a$2,scale:x,weight:400}),medium:a$1({family:a$2,scale:x,weight:500}),semibold:a$1({family:a$2,scale:x,weight:600}),bold:a$1({family:a$2,scale:x,weight:700}),xbold:a$1({family:a$2,scale:x,weight:800}),black:a$1({family:a$2,scale:x,weight:900})}},accent:{xs:{thin:a$1({family:l$1,scale:g$1,weight:100}),xlight:a$1({family:l$1,scale:g$1,weight:200}),light:a$1({family:l$1,scale:g$1,weight:300}),normal:a$1({family:l$1,scale:g$1,weight:400}),medium:a$1({family:l$1,scale:g$1,weight:500}),semibold:a$1({family:l$1,scale:g$1,weight:600}),bold:a$1({family:l$1,scale:g$1,weight:700}),xbold:a$1({family:l$1,scale:g$1,weight:800}),black:a$1({family:l$1,scale:g$1,weight:900})},sm:{thin:a$1({family:l$1,scale:o$1,weight:100}),xlight:a$1({family:l$1,scale:o$1,weight:200}),light:a$1({family:l$1,scale:o$1,weight:300}),normal:a$1({family:l$1,scale:o$1,weight:400}),medium:a$1({family:l$1,scale:o$1,weight:500}),semibold:a$1({family:l$1,scale:o$1,weight:600}),bold:a$1({family:l$1,scale:o$1,weight:700}),xbold:a$1({family:l$1,scale:o$1,weight:800}),black:a$1({family:l$1,scale:o$1,weight:900})},md:{thin:a$1({family:l$1,scale:h$1,weight:100}),xlight:a$1({family:l$1,scale:h$1,weight:200}),light:a$1({family:l$1,scale:h$1,weight:300}),normal:a$1({family:l$1,scale:h$1,weight:400}),medium:a$1({family:l$1,scale:h$1,weight:500}),semibold:a$1({family:l$1,scale:h$1,weight:600}),bold:a$1({family:l$1,scale:h$1,weight:700}),xbold:a$1({family:l$1,scale:h$1,weight:800}),black:a$1({family:l$1,scale:h$1,weight:900})},lg:{thin:a$1({family:l$1,scale:n$1,weight:100}),xlight:a$1({family:l$1,scale:n$1,weight:200}),light:a$1({family:l$1,scale:n$1,weight:300}),normal:a$1({family:l$1,scale:n$1,weight:400}),medium:a$1({family:l$1,scale:n$1,weight:500}),semibold:a$1({family:l$1,scale:n$1,weight:600}),bold:a$1({family:l$1,scale:n$1,weight:700}),xbold:a$1({family:l$1,scale:n$1,weight:800}),black:a$1({family:l$1,scale:n$1,weight:900})},xl:{thin:a$1({family:l$1,scale:c$1,weight:100}),xlight:a$1({family:l$1,scale:c$1,weight:200}),light:a$1({family:l$1,scale:c$1,weight:300}),normal:a$1({family:l$1,scale:c$1,weight:400}),medium:a$1({family:l$1,scale:c$1,weight:500}),semibold:a$1({family:l$1,scale:c$1,weight:600}),bold:a$1({family:l$1,scale:c$1,weight:700}),xbold:a$1({family:l$1,scale:c$1,weight:800}),black:a$1({family:l$1,scale:c$1,weight:900})},"2xl":{thin:a$1({family:l$1,scale:r,weight:100}),xlight:a$1({family:l$1,scale:r,weight:200}),light:a$1({family:l$1,scale:r,weight:300}),normal:a$1({family:l$1,scale:r,weight:400}),medium:a$1({family:l$1,scale:r,weight:500}),semibold:a$1({family:l$1,scale:r,weight:600}),bold:a$1({family:l$1,scale:r,weight:700}),xbold:a$1({family:l$1,scale:r,weight:800}),black:a$1({family:l$1,scale:r,weight:900})},"3xl":{thin:a$1({family:l$1,scale:y,weight:100}),xlight:a$1({family:l$1,scale:y,weight:200}),light:a$1({family:l$1,scale:y,weight:300}),normal:a$1({family:l$1,scale:y,weight:400}),medium:a$1({family:l$1,scale:y,weight:500}),semibold:a$1({family:l$1,scale:y,weight:600}),bold:a$1({family:l$1,scale:y,weight:700}),xbold:a$1({family:l$1,scale:y,weight:800}),black:a$1({family:l$1,scale:y,weight:900})},"4xl":{thin:a$1({family:l$1,scale:f$1,weight:100}),xlight:a$1({family:l$1,scale:f$1,weight:200}),light:a$1({family:l$1,scale:f$1,weight:300}),normal:a$1({family:l$1,scale:f$1,weight:400}),medium:a$1({family:l$1,scale:f$1,weight:500}),semibold:a$1({family:l$1,scale:f$1,weight:600}),bold:a$1({family:l$1,scale:f$1,weight:700}),xbold:a$1({family:l$1,scale:f$1,weight:800}),black:a$1({family:l$1,scale:f$1,weight:900})},"5xl":{thin:a$1({family:l$1,scale:w,weight:100}),xlight:a$1({family:l$1,scale:w,weight:200}),light:a$1({family:l$1,scale:w,weight:300}),normal:a$1({family:l$1,scale:w,weight:400}),medium:a$1({family:l$1,scale:w,weight:500}),semibold:a$1({family:l$1,scale:w,weight:600}),bold:a$1({family:l$1,scale:w,weight:700}),xbold:a$1({family:l$1,scale:w,weight:800}),black:a$1({family:l$1,scale:w,weight:900})},"6xl":{thin:a$1({family:l$1,scale:u,weight:100}),xlight:a$1({family:l$1,scale:u,weight:200}),light:a$1({family:i$1,scale:l$1,weight:300}),normal:a$1({family:l$1,scale:u,weight:400}),medium:a$1({family:l$1,scale:u,weight:500}),semibold:a$1({family:l$1,scale:u,weight:600}),bold:a$1({family:l$1,scale:u,weight:700}),xbold:a$1({family:l$1,scale:u,weight:800}),black:a$1({family:l$1,scale:u,weight:900})},"7xl":{thin:a$1({family:l$1,scale:d$1,weight:100}),xlight:a$1({family:l$1,scale:d$1,weight:200}),light:a$1({family:l$1,scale:d$1,weight:300}),normal:a$1({family:l$1,scale:d$1,weight:400}),medium:a$1({family:l$1,scale:d$1,weight:500}),semibold:a$1({family:l$1,scale:d$1,weight:600}),bold:a$1({family:l$1,scale:d$1,weight:700}),xbold:a$1({family:l$1,scale:d$1,weight:800}),black:a$1({family:l$1,scale:d$1,weight:900})},"8xl":{thin:a$1({family:l$1,scale:b$1,weight:100}),xlight:a$1({family:l$1,scale:b$1,weight:200}),light:a$1({family:l$1,scale:b$1,weight:300}),normal:a$1({family:l$1,scale:b$1,weight:400}),medium:a$1({family:l$1,scale:b$1,weight:500}),semibold:a$1({family:l$1,scale:b$1,weight:600}),bold:a$1({family:l$1,scale:b$1,weight:700}),xbold:a$1({family:l$1,scale:b$1,weight:800}),black:a$1({family:l$1,scale:b$1,weight:900})},"9xl":{thin:a$1({family:l$1,scale:x,weight:100}),xlight:a$1({family:l$1,scale:x,weight:200}),light:a$1({family:l$1,scale:x,weight:300}),normal:a$1({family:l$1,scale:x,weight:400}),medium:a$1({family:l$1,scale:x,weight:500}),semibold:a$1({family:l$1,scale:x,weight:600}),bold:a$1({family:l$1,scale:x,weight:700}),xbold:a$1({family:l$1,scale:x,weight:800}),black:a$1({family:l$1,scale:x,weight:900})}}}};var j=({base:m,config:t})=>({resources:t?.resources?E({base:m.resources,config:t?.resources??[]}):m.resources,fonts:t?.fonts?U({base:m.fonts,config:t?.fonts?t.fonts:{}}):m.fonts});var p=({base:m,config:t})=>{let i=a(t,m.tint_500,["tint_500"]),l=m.tint_500!=i,a$1=a(t,l?i:m.tint_400,["tint_400"]),h=a(t,l?a$1:m.tint_300,["tint_300"]),o=a(t,l?h:m.tint_200,["tint_200"]),g=a(t,l?o:m.tint_100,["tint_100"]),n=a(t,l?g:m.tint_50,["tint_50"]),c=a(t,l?i:m.tint_600,["tint_600"]),r=a(t,l?c:m.tint_700,["tint_700"]),y=a(t,l?r:m.tint_800,["tint_800"]),f=a(t,l?y:m.tint_900,["tint_900"]),w=a(t,l?f:m.tint_950,["tint_950"]);return {tint_50:n,tint_100:g,tint_200:o,tint_300:h,tint_400:a$1,tint_500:i,tint_600:c,tint_700:r,tint_800:y,tint_900:f,tint_950:w}};var G=({base:m,config:t})=>t||m;var K=({base:m,config:t})=>({danger:p({base:m.danger,config:t.danger?t.danger:{}}),warning:p({base:m.warning,config:t.warning?t.warning:{}}),success:p({base:m.success,config:t.success?t.success:{}}),info:p({base:m.info,config:t.info?t.info:{}}),neutrals:p({base:m.neutrals,config:t.neutrals?t.neutrals:{}}),surfaces:p({base:m.surfaces,config:t.surfaces?t.surfaces:{}}),primary:p({base:m.primary,config:t.primary?t.primary:{}}),accent:p({base:m.accent,config:t.accent?t.accent:{}}),supporting:p({base:m.supporting,config:t.supporting?t.supporting:{}}),additional:G({base:m.additional,config:t?.additional?t.additional:[]})});var L=({base:m,config:t})=>({none:m.none,xs:t?t.xs:m.xs,sm:t?t.sm:m.sm,md:t?t.md:m.md,lg:t?t.lg:m.lg,xl:t?t.xl:m.xl,"2xl":t?t["2xl"]:m["2xl"],"3xl":t?t["3xl"]:m["3xl"],full:"9999px"});var te=({config:m})=>({alternate:O({base:r.alternate,config:m?.alternate?m.alternate:[]}),typography:m?.typography?j({base:r.typography,config:{resources:m.typography?.resources?m.typography.resources:[],fonts:m.typography?.fonts?m.typography.fonts:{}}}):r.typography,colors:m?.colors?K({base:r.colors,config:m.colors?m.colors:{}}):r.colors,utility:r.utility,radius:L({base:r.radius,config:m.radius})});var S=(l=>(l.STANDARD="STANDARD",l.INVERTED="INVERTED",l.CONTRAST="CONTRAST",l))(S||{});var se=createContext("STANDARD");var he=()=>t().alternate;var oe=()=>t().radius;var ge=()=>t().utility;

export { J as StyleProviderAnimation, Z as StyleProviderFontFace, le as StyleProviderPreFlight, ae as StyleProviderRouter, te as ThemeBuilder, S as ThemeMode, se as ThemeModeCtx, he as useThemeAlternate, oe as useThemeRadius, ge as useThemeUtility };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map