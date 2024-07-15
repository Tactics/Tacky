import { r, t, b as b$1, c, d, g, f, e, h, i, j as j$1, k as k$1, l, m, n, o as o$1, p, q, a } from './chunk-MWMDD3N3.mjs';
export { s as ThemeCtx, t as useTheme, u as useThemeColor, v as useThemeFonts } from './chunk-MWMDD3N3.mjs';
import { createGlobalStyle } from 'styled-components';
import I, { createContext, useEffect } from 'react';

var Q=createGlobalStyle`
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
`;var ae=createGlobalStyle`
    
    /* Reset all default a-styling when using external routing to prevent leaking of external styles */
    a {
        all: unset;
    }
`;var X=({base:m,config:t})=>t||m;var j=({base:m,config:t})=>t||m;function o(m,t,a){let l=m;for(let i of a)if(l=l?.[i]??t,l==null)break;return l}var U=({base:m$1,config:t})=>{let a$1=o(t,b$1,["family","primary"]),l$1=o(t,o(t,c,["family","primary"]),["family","accent"]),i$1=o(t,o(t,d,["family","primary"]),["family","supporting"]),s=o(t,g,["scale","md"]),r=o(t,f,["scale","sm"]),h$1=o(t,e,["scale","xs"]),f$1=o(t,h,["scale","lg"]),c$1=o(t,i,["scale","xl"]),y=o(t,j$1,["scale","2xl"]),n$1=o(t,k$1,["scale","3xl"]),g$1=o(t,l,["scale","4xl"]),d$1=o(t,m,["scale","5xl"]),x=o(t,n,["scale","6xl"]),w=o(t,o$1,["scale","7xl"]),p$1=o(t,p,["scale","8xl"]),u=o(t,q,["scale","9xl"]);return {primary:{xs:{thin:a({family:a$1,scale:h$1,weight:100}),xlight:a({family:a$1,scale:h$1,weight:200}),light:a({family:a$1,scale:h$1,weight:300}),normal:a({family:a$1,scale:h$1,weight:400}),medium:a({family:a$1,scale:h$1,weight:500}),semibold:a({family:a$1,scale:h$1,weight:600}),bold:a({family:a$1,scale:h$1,weight:700}),xbold:a({family:a$1,scale:h$1,weight:800}),black:a({family:a$1,scale:h$1,weight:900})},sm:{thin:a({family:a$1,scale:r,weight:100}),xlight:a({family:a$1,scale:r,weight:200}),light:a({family:a$1,scale:r,weight:300}),normal:a({family:a$1,scale:r,weight:400}),medium:a({family:a$1,scale:r,weight:500}),semibold:a({family:a$1,scale:r,weight:600}),bold:a({family:a$1,scale:r,weight:700}),xbold:a({family:a$1,scale:r,weight:800}),black:a({family:a$1,scale:r,weight:900})},md:{thin:a({family:a$1,scale:s,weight:100}),xlight:a({family:a$1,scale:s,weight:200}),light:a({family:a$1,scale:s,weight:300}),normal:a({family:a$1,scale:s,weight:400}),medium:a({family:a$1,scale:s,weight:500}),semibold:a({family:a$1,scale:s,weight:600}),bold:a({family:a$1,scale:s,weight:700}),xbold:a({family:a$1,scale:s,weight:800}),black:a({family:a$1,scale:s,weight:900})},lg:{thin:a({family:a$1,scale:f$1,weight:100}),xlight:a({family:a$1,scale:f$1,weight:200}),light:a({family:a$1,scale:f$1,weight:300}),normal:a({family:a$1,scale:f$1,weight:400}),medium:a({family:a$1,scale:f$1,weight:500}),semibold:a({family:a$1,scale:f$1,weight:600}),bold:a({family:a$1,scale:f$1,weight:700}),xbold:a({family:a$1,scale:f$1,weight:800}),black:a({family:a$1,scale:f$1,weight:900})},xl:{thin:a({family:a$1,scale:c$1,weight:100}),xlight:a({family:a$1,scale:c$1,weight:200}),light:a({family:a$1,scale:c$1,weight:300}),normal:a({family:a$1,scale:c$1,weight:400}),medium:a({family:a$1,scale:c$1,weight:500}),semibold:a({family:a$1,scale:c$1,weight:600}),bold:a({family:a$1,scale:c$1,weight:700}),xbold:a({family:a$1,scale:c$1,weight:800}),black:a({family:a$1,scale:c$1,weight:900})},"2xl":{thin:a({family:a$1,scale:y,weight:100}),xlight:a({family:a$1,scale:y,weight:200}),light:a({family:a$1,scale:y,weight:300}),normal:a({family:a$1,scale:y,weight:400}),medium:a({family:a$1,scale:y,weight:500}),semibold:a({family:a$1,scale:y,weight:600}),bold:a({family:a$1,scale:y,weight:700}),xbold:a({family:a$1,scale:y,weight:800}),black:a({family:a$1,scale:y,weight:900})},"3xl":{thin:a({family:a$1,scale:n$1,weight:100}),xlight:a({family:a$1,scale:n$1,weight:200}),light:a({family:a$1,scale:n$1,weight:300}),normal:a({family:a$1,scale:n$1,weight:400}),medium:a({family:a$1,scale:n$1,weight:500}),semibold:a({family:a$1,scale:n$1,weight:600}),bold:a({family:a$1,scale:n$1,weight:700}),xbold:a({family:a$1,scale:n$1,weight:800}),black:a({family:a$1,scale:n$1,weight:900})},"4xl":{thin:a({family:a$1,scale:g$1,weight:100}),xlight:a({family:a$1,scale:g$1,weight:200}),light:a({family:a$1,scale:g$1,weight:300}),normal:a({family:a$1,scale:g$1,weight:400}),medium:a({family:a$1,scale:g$1,weight:500}),semibold:a({family:a$1,scale:g$1,weight:600}),bold:a({family:a$1,scale:g$1,weight:700}),xbold:a({family:a$1,scale:g$1,weight:800}),black:a({family:a$1,scale:g$1,weight:900})},"5xl":{thin:a({family:a$1,scale:d$1,weight:100}),xlight:a({family:a$1,scale:d$1,weight:200}),light:a({family:a$1,scale:d$1,weight:300}),normal:a({family:a$1,scale:d$1,weight:400}),medium:a({family:a$1,scale:d$1,weight:500}),semibold:a({family:a$1,scale:d$1,weight:600}),bold:a({family:a$1,scale:d$1,weight:700}),xbold:a({family:a$1,scale:d$1,weight:800}),black:a({family:a$1,scale:d$1,weight:900})},"6xl":{thin:a({family:a$1,scale:x,weight:100}),xlight:a({family:a$1,scale:x,weight:200}),light:a({family:a$1,scale:x,weight:300}),normal:a({family:a$1,scale:x,weight:400}),medium:a({family:a$1,scale:x,weight:500}),semibold:a({family:a$1,scale:x,weight:600}),bold:a({family:a$1,scale:x,weight:700}),xbold:a({family:a$1,scale:x,weight:800}),black:a({family:a$1,scale:x,weight:900})},"7xl":{thin:a({family:a$1,scale:w,weight:100}),xlight:a({family:a$1,scale:w,weight:200}),light:a({family:a$1,scale:w,weight:300}),normal:a({family:a$1,scale:w,weight:400}),medium:a({family:a$1,scale:w,weight:500}),semibold:a({family:a$1,scale:w,weight:600}),bold:a({family:a$1,scale:w,weight:700}),xbold:a({family:a$1,scale:w,weight:800}),black:a({family:a$1,scale:w,weight:900})},"8xl":{thin:a({family:a$1,scale:p$1,weight:100}),xlight:a({family:a$1,scale:p$1,weight:200}),light:a({family:a$1,scale:p$1,weight:300}),normal:a({family:a$1,scale:p$1,weight:400}),medium:a({family:a$1,scale:p$1,weight:500}),semibold:a({family:a$1,scale:p$1,weight:600}),bold:a({family:a$1,scale:p$1,weight:700}),xbold:a({family:a$1,scale:p$1,weight:800}),black:a({family:a$1,scale:p$1,weight:900})},"9xl":{thin:a({family:a$1,scale:u,weight:100}),xlight:a({family:a$1,scale:u,weight:200}),light:a({family:a$1,scale:u,weight:300}),normal:a({family:a$1,scale:u,weight:400}),medium:a({family:a$1,scale:u,weight:500}),semibold:a({family:a$1,scale:u,weight:600}),bold:a({family:a$1,scale:u,weight:700}),xbold:a({family:a$1,scale:u,weight:800}),black:a({family:a$1,scale:u,weight:900})}},supporting:{xs:{thin:a({family:i$1,scale:h$1,weight:100}),xlight:a({family:i$1,scale:h$1,weight:200}),light:a({family:i$1,scale:h$1,weight:300}),normal:a({family:i$1,scale:h$1,weight:400}),medium:a({family:i$1,scale:h$1,weight:500}),semibold:a({family:i$1,scale:h$1,weight:600}),bold:a({family:i$1,scale:h$1,weight:700}),xbold:a({family:i$1,scale:h$1,weight:800}),black:a({family:i$1,scale:h$1,weight:900})},sm:{thin:a({family:i$1,scale:r,weight:100}),xlight:a({family:i$1,scale:r,weight:200}),light:a({family:i$1,scale:r,weight:300}),normal:a({family:i$1,scale:r,weight:400}),medium:a({family:i$1,scale:r,weight:500}),semibold:a({family:i$1,scale:r,weight:600}),bold:a({family:i$1,scale:r,weight:700}),xbold:a({family:i$1,scale:r,weight:800}),black:a({family:i$1,scale:r,weight:900})},md:{thin:a({family:i$1,scale:s,weight:100}),xlight:a({family:i$1,scale:s,weight:200}),light:a({family:i$1,scale:s,weight:300}),normal:a({family:i$1,scale:s,weight:400}),medium:a({family:i$1,scale:s,weight:500}),semibold:a({family:i$1,scale:s,weight:600}),bold:a({family:i$1,scale:s,weight:700}),xbold:a({family:i$1,scale:s,weight:800}),black:a({family:i$1,scale:s,weight:900})},lg:{thin:a({family:i$1,scale:f$1,weight:100}),xlight:a({family:i$1,scale:f$1,weight:200}),light:a({family:i$1,scale:f$1,weight:300}),normal:a({family:i$1,scale:f$1,weight:400}),medium:a({family:i$1,scale:f$1,weight:500}),semibold:a({family:i$1,scale:f$1,weight:600}),bold:a({family:i$1,scale:f$1,weight:700}),xbold:a({family:i$1,scale:f$1,weight:800}),black:a({family:i$1,scale:f$1,weight:900})},xl:{thin:a({family:i$1,scale:c$1,weight:100}),xlight:a({family:i$1,scale:c$1,weight:200}),light:a({family:i$1,scale:c$1,weight:300}),normal:a({family:i$1,scale:c$1,weight:400}),medium:a({family:i$1,scale:c$1,weight:500}),semibold:a({family:i$1,scale:c$1,weight:600}),bold:a({family:i$1,scale:c$1,weight:700}),xbold:a({family:i$1,scale:c$1,weight:800}),black:a({family:i$1,scale:c$1,weight:900})},"2xl":{thin:a({family:i$1,scale:y,weight:100}),xlight:a({family:i$1,scale:y,weight:200}),light:a({family:i$1,scale:y,weight:300}),normal:a({family:i$1,scale:y,weight:400}),medium:a({family:i$1,scale:y,weight:500}),semibold:a({family:i$1,scale:y,weight:600}),bold:a({family:i$1,scale:y,weight:700}),xbold:a({family:i$1,scale:y,weight:800}),black:a({family:i$1,scale:y,weight:900})},"3xl":{thin:a({family:i$1,scale:n$1,weight:100}),xlight:a({family:i$1,scale:n$1,weight:200}),light:a({family:i$1,scale:n$1,weight:300}),normal:a({family:i$1,scale:n$1,weight:400}),medium:a({family:i$1,scale:n$1,weight:500}),semibold:a({family:i$1,scale:n$1,weight:600}),bold:a({family:i$1,scale:n$1,weight:700}),xbold:a({family:i$1,scale:n$1,weight:800}),black:a({family:i$1,scale:n$1,weight:900})},"4xl":{thin:a({family:i$1,scale:g$1,weight:100}),xlight:a({family:i$1,scale:g$1,weight:200}),light:a({family:i$1,scale:g$1,weight:300}),normal:a({family:i$1,scale:g$1,weight:400}),medium:a({family:i$1,scale:g$1,weight:500}),semibold:a({family:i$1,scale:g$1,weight:600}),bold:a({family:i$1,scale:g$1,weight:700}),xbold:a({family:i$1,scale:g$1,weight:800}),black:a({family:i$1,scale:g$1,weight:900})},"5xl":{thin:a({family:i$1,scale:d$1,weight:100}),xlight:a({family:i$1,scale:d$1,weight:200}),light:a({family:i$1,scale:d$1,weight:300}),normal:a({family:i$1,scale:d$1,weight:400}),medium:a({family:i$1,scale:d$1,weight:500}),semibold:a({family:i$1,scale:d$1,weight:600}),bold:a({family:i$1,scale:d$1,weight:700}),xbold:a({family:i$1,scale:d$1,weight:800}),black:a({family:i$1,scale:d$1,weight:900})},"6xl":{thin:a({family:i$1,scale:x,weight:100}),xlight:a({family:i$1,scale:x,weight:200}),light:a({family:i$1,scale:x,weight:300}),normal:a({family:i$1,scale:x,weight:400}),medium:a({family:i$1,scale:x,weight:500}),semibold:a({family:i$1,scale:x,weight:600}),bold:a({family:i$1,scale:x,weight:700}),xbold:a({family:i$1,scale:x,weight:800}),black:a({family:i$1,scale:x,weight:900})},"7xl":{thin:a({family:i$1,scale:w,weight:100}),xlight:a({family:i$1,scale:w,weight:200}),light:a({family:i$1,scale:w,weight:300}),normal:a({family:i$1,scale:w,weight:400}),medium:a({family:i$1,scale:w,weight:500}),semibold:a({family:i$1,scale:w,weight:600}),bold:a({family:i$1,scale:w,weight:700}),xbold:a({family:i$1,scale:w,weight:800}),black:a({family:i$1,scale:w,weight:900})},"8xl":{thin:a({family:i$1,scale:p$1,weight:100}),xlight:a({family:i$1,scale:p$1,weight:200}),light:a({family:i$1,scale:p$1,weight:300}),normal:a({family:i$1,scale:p$1,weight:400}),medium:a({family:i$1,scale:p$1,weight:500}),semibold:a({family:i$1,scale:p$1,weight:600}),bold:a({family:i$1,scale:p$1,weight:700}),xbold:a({family:i$1,scale:p$1,weight:800}),black:a({family:i$1,scale:p$1,weight:900})},"9xl":{thin:a({family:i$1,scale:u,weight:100}),xlight:a({family:i$1,scale:u,weight:200}),light:a({family:i$1,scale:u,weight:300}),normal:a({family:i$1,scale:u,weight:400}),medium:a({family:i$1,scale:u,weight:500}),semibold:a({family:i$1,scale:u,weight:600}),bold:a({family:i$1,scale:u,weight:700}),xbold:a({family:i$1,scale:u,weight:800}),black:a({family:i$1,scale:u,weight:900})}},accent:{xs:{thin:a({family:l$1,scale:h$1,weight:100}),xlight:a({family:l$1,scale:h$1,weight:200}),light:a({family:l$1,scale:h$1,weight:300}),normal:a({family:l$1,scale:h$1,weight:400}),medium:a({family:l$1,scale:h$1,weight:500}),semibold:a({family:l$1,scale:h$1,weight:600}),bold:a({family:l$1,scale:h$1,weight:700}),xbold:a({family:l$1,scale:h$1,weight:800}),black:a({family:l$1,scale:h$1,weight:900})},sm:{thin:a({family:l$1,scale:r,weight:100}),xlight:a({family:l$1,scale:r,weight:200}),light:a({family:l$1,scale:r,weight:300}),normal:a({family:l$1,scale:r,weight:400}),medium:a({family:l$1,scale:r,weight:500}),semibold:a({family:l$1,scale:r,weight:600}),bold:a({family:l$1,scale:r,weight:700}),xbold:a({family:l$1,scale:r,weight:800}),black:a({family:l$1,scale:r,weight:900})},md:{thin:a({family:l$1,scale:s,weight:100}),xlight:a({family:l$1,scale:s,weight:200}),light:a({family:l$1,scale:s,weight:300}),normal:a({family:l$1,scale:s,weight:400}),medium:a({family:l$1,scale:s,weight:500}),semibold:a({family:l$1,scale:s,weight:600}),bold:a({family:l$1,scale:s,weight:700}),xbold:a({family:l$1,scale:s,weight:800}),black:a({family:l$1,scale:s,weight:900})},lg:{thin:a({family:l$1,scale:f$1,weight:100}),xlight:a({family:l$1,scale:f$1,weight:200}),light:a({family:l$1,scale:f$1,weight:300}),normal:a({family:l$1,scale:f$1,weight:400}),medium:a({family:l$1,scale:f$1,weight:500}),semibold:a({family:l$1,scale:f$1,weight:600}),bold:a({family:l$1,scale:f$1,weight:700}),xbold:a({family:l$1,scale:f$1,weight:800}),black:a({family:l$1,scale:f$1,weight:900})},xl:{thin:a({family:l$1,scale:c$1,weight:100}),xlight:a({family:l$1,scale:c$1,weight:200}),light:a({family:l$1,scale:c$1,weight:300}),normal:a({family:l$1,scale:c$1,weight:400}),medium:a({family:l$1,scale:c$1,weight:500}),semibold:a({family:l$1,scale:c$1,weight:600}),bold:a({family:l$1,scale:c$1,weight:700}),xbold:a({family:l$1,scale:c$1,weight:800}),black:a({family:l$1,scale:c$1,weight:900})},"2xl":{thin:a({family:l$1,scale:y,weight:100}),xlight:a({family:l$1,scale:y,weight:200}),light:a({family:l$1,scale:y,weight:300}),normal:a({family:l$1,scale:y,weight:400}),medium:a({family:l$1,scale:y,weight:500}),semibold:a({family:l$1,scale:y,weight:600}),bold:a({family:l$1,scale:y,weight:700}),xbold:a({family:l$1,scale:y,weight:800}),black:a({family:l$1,scale:y,weight:900})},"3xl":{thin:a({family:l$1,scale:n$1,weight:100}),xlight:a({family:l$1,scale:n$1,weight:200}),light:a({family:l$1,scale:n$1,weight:300}),normal:a({family:l$1,scale:n$1,weight:400}),medium:a({family:l$1,scale:n$1,weight:500}),semibold:a({family:l$1,scale:n$1,weight:600}),bold:a({family:l$1,scale:n$1,weight:700}),xbold:a({family:l$1,scale:n$1,weight:800}),black:a({family:l$1,scale:n$1,weight:900})},"4xl":{thin:a({family:l$1,scale:g$1,weight:100}),xlight:a({family:l$1,scale:g$1,weight:200}),light:a({family:l$1,scale:g$1,weight:300}),normal:a({family:l$1,scale:g$1,weight:400}),medium:a({family:l$1,scale:g$1,weight:500}),semibold:a({family:l$1,scale:g$1,weight:600}),bold:a({family:l$1,scale:g$1,weight:700}),xbold:a({family:l$1,scale:g$1,weight:800}),black:a({family:l$1,scale:g$1,weight:900})},"5xl":{thin:a({family:l$1,scale:d$1,weight:100}),xlight:a({family:l$1,scale:d$1,weight:200}),light:a({family:l$1,scale:d$1,weight:300}),normal:a({family:l$1,scale:d$1,weight:400}),medium:a({family:l$1,scale:d$1,weight:500}),semibold:a({family:l$1,scale:d$1,weight:600}),bold:a({family:l$1,scale:d$1,weight:700}),xbold:a({family:l$1,scale:d$1,weight:800}),black:a({family:l$1,scale:d$1,weight:900})},"6xl":{thin:a({family:l$1,scale:x,weight:100}),xlight:a({family:l$1,scale:x,weight:200}),light:a({family:a$1,scale:l$1,weight:300}),normal:a({family:l$1,scale:x,weight:400}),medium:a({family:l$1,scale:x,weight:500}),semibold:a({family:l$1,scale:x,weight:600}),bold:a({family:l$1,scale:x,weight:700}),xbold:a({family:l$1,scale:x,weight:800}),black:a({family:l$1,scale:x,weight:900})},"7xl":{thin:a({family:l$1,scale:w,weight:100}),xlight:a({family:l$1,scale:w,weight:200}),light:a({family:l$1,scale:w,weight:300}),normal:a({family:l$1,scale:w,weight:400}),medium:a({family:l$1,scale:w,weight:500}),semibold:a({family:l$1,scale:w,weight:600}),bold:a({family:l$1,scale:w,weight:700}),xbold:a({family:l$1,scale:w,weight:800}),black:a({family:l$1,scale:w,weight:900})},"8xl":{thin:a({family:l$1,scale:p$1,weight:100}),xlight:a({family:l$1,scale:p$1,weight:200}),light:a({family:l$1,scale:p$1,weight:300}),normal:a({family:l$1,scale:p$1,weight:400}),medium:a({family:l$1,scale:p$1,weight:500}),semibold:a({family:l$1,scale:p$1,weight:600}),bold:a({family:l$1,scale:p$1,weight:700}),xbold:a({family:l$1,scale:p$1,weight:800}),black:a({family:l$1,scale:p$1,weight:900})},"9xl":{thin:a({family:l$1,scale:u,weight:100}),xlight:a({family:l$1,scale:u,weight:200}),light:a({family:l$1,scale:u,weight:300}),normal:a({family:l$1,scale:u,weight:400}),medium:a({family:l$1,scale:u,weight:500}),semibold:a({family:l$1,scale:u,weight:600}),bold:a({family:l$1,scale:u,weight:700}),xbold:a({family:l$1,scale:u,weight:800}),black:a({family:l$1,scale:u,weight:900})}}}};var H=({base:m,config:t})=>({external_resources:t?.external_resources?j({base:m.external_resources,config:t?.external_resources??[]}):m.external_resources,fonts:t?.fonts?U({base:m.fonts,config:t?.fonts?t.fonts:{}}):m.fonts});var b=({base:m,config:t})=>{let a=o(t,m.tint_500,["tint_500"]),l=m.tint_500!=a,i=o(t,l?a:m.tint_400,["tint_400"]),s=o(t,l?i:m.tint_300,["tint_300"]),r=o(t,l?s:m.tint_200,["tint_200"]),h=o(t,l?r:m.tint_100,["tint_100"]),f=o(t,l?h:m.tint_50,["tint_50"]),c=o(t,l?a:m.tint_600,["tint_600"]),y=o(t,l?c:m.tint_700,["tint_700"]),n=o(t,l?y:m.tint_800,["tint_800"]),g=o(t,l?n:m.tint_900,["tint_900"]),d=o(t,l?g:m.tint_950,["tint_950"]);return {tint_50:f,tint_100:h,tint_200:r,tint_300:s,tint_400:i,tint_500:a,tint_600:c,tint_700:y,tint_800:n,tint_900:g,tint_950:d}};var G=({base:m,config:t})=>t||m;var K=({base:m,config:t})=>({danger:b({base:m.danger,config:t.danger?t.danger:{}}),warning:b({base:m.warning,config:t.warning?t.warning:{}}),success:b({base:m.success,config:t.success?t.success:{}}),info:b({base:m.info,config:t.info?t.info:{}}),neutrals:b({base:m.neutrals,config:t.neutrals?t.neutrals:{}}),surfaces:b({base:m.surfaces,config:t.surfaces?t.surfaces:{}}),primary:b({base:m.primary,config:t.primary?t.primary:{}}),accent:b({base:m.accent,config:t.accent?t.accent:{}}),supporting:b({base:m.supporting,config:t.supporting?t.supporting:{}}),map:{label:{all:t.map?.label?.all?t.map.label.all:m.map.label.all,water:t.map?.label?.water?t.map.label.water:m.map.label.water,highway:t.map?.label?.highway?t.map.label.highway:m.map.label.highway,road:t.map?.label?.road?t.map.label.road:m.map.label.road},border:{country:t.map?.border?.country?t.map.border.country:m.map.border.country,highway:t.map?.border?.highway?t.map.border.highway:m.map.border.highway,road:t.map?.border?.road?t.map.border.road:m.map.border.road},landscape:{all:t.map?.landscape?.all?t.map.landscape.all:m.map.landscape.all,artificial:t.map?.landscape?.artificial?t.map.landscape.artificial:m.map.landscape.artificial,terrain:t.map?.landscape?.terrain?t.map.landscape.terrain:m.map.landscape.terrain,park:t.map?.landscape?.park?t.map.landscape.park:m.map.landscape.park,poi:t.map?.landscape?.poi?t.map.landscape.poi:m.map.landscape.poi,water:t.map?.landscape?.water?t.map.landscape.water:m.map.landscape.water,transit:t.map?.landscape?.transit?t.map.landscape.transit:m.map.landscape.transit,highway:t.map?.landscape?.highway?t.map.landscape.highway:m.map.landscape.highway,road:t.map?.landscape?.road?t.map.landscape.road:m.map.landscape.road}},additional:G({base:m.additional,config:t?.additional?t.additional:[]})});var W=({base:m,config:t})=>({none:m.none,xs:t?t.xs:m.xs,sm:t?t.sm:m.sm,md:t?t.md:m.md,lg:t?t.lg:m.lg,xl:t?t.xl:m.xl,"2xl":t?t["2xl"]:m["2xl"],"3xl":t?t["3xl"]:m["3xl"],full:"9999px"});var ie=({config:m})=>({alternate:X({base:r.alternate,config:m?.alternate?m.alternate:[]}),typography:m?.typography?H({base:r.typography,config:{external_resources:m.typography?.external_resources?m.typography.external_resources:[],fonts:m.typography?.fonts?m.typography.fonts:{}}}):r.typography,colors:m?.colors?K({base:r.colors,config:m.colors?m.colors:{}}):r.colors,utility:r.utility,radius:W({base:r.radius,config:m.radius})});var k=(l=>(l.STANDARD="STANDARD",l.INVERTED="INVERTED",l.CONTRAST="CONTRAST",l))(k||{});(a=>{function m(l,i){return Object.values(a).includes(l)?l:i}a.from=m;function t(l){return Object.values(a).includes(l)?l:null}a.tryFrom=t;})(k||={});var me=createContext("STANDARD");var se=()=>t().alternate;var oe=()=>t().radius;var re=()=>t().utility;var he=m=>{let t=({children:a})=>I.createElement(I.Fragment,null," ",a," ");return m.reduce((a,[l,i={}])=>({children:s})=>I.createElement(a,null,I.createElement(l,{...i},s)),t)};var ye=m=>{let{children:t,sheets:a}=m;return useEffect(()=>{a.map(function(l){let i=document.createElement("link");i.rel="stylesheet",i.href=l,document.head.appendChild(i);});},[a]),t??null};var ne=({name:m,alternates:t})=>t.find(a=>a.name===m);var ge=({name:m,colors:t,fallback:a})=>{let l=t.find(i=>i.name===m);return l?l.color:a};

export { he as BuildProvidersTree, ye as ExternalStylesheetLoader, ge as LookupAdditionalColor, ne as LookupAlternate, Q as StyleProviderAnimation, ee as StyleProviderPreFlight, ae as StyleProviderRouter, ie as ThemeBuilder, k as ThemeMode, me as ThemeModeCtx, o as orDefault, se as useThemeAlternate, oe as useThemeRadius, re as useThemeUtility };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map