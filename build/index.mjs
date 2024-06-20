import { r, t, b, c, d, g, f, e, h, i, j as j$1, k as k$1, l, m, n, o, p, q as q$1, a as a$1 } from './chunk-HKAAOGQK.mjs';
export { s as ThemeCtx, t as useTheme, u as useThemeColor, v as useThemeFonts } from './chunk-HKAAOGQK.mjs';
import { a } from './chunk-2FBDSVPX.mjs';
import { createGlobalStyle } from 'styled-components';
import { createContext } from 'react';

var Q=createGlobalStyle`
      ${s=>s.animations?.map(function(t){return t})}

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
      ${s=>s.resources?.map(function(t){return t})}
    `;var ae=createGlobalStyle`
    
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
`;var te=createGlobalStyle`
    
    /* Reset all default a-styling when using external routing to prevent leaking of external styles */
    a {
        all: unset;
    }
`;var j=({base:s,config:t})=>t||s;var E=({base:s,config:t})=>t||s;var U=({base:s,config:t})=>{let a$2=a(t,b,["family","primary"]),l$1=a(t,a(t,c,["family","primary"]),["family","accent"]),i$1=a(t,a(t,d,["family","primary"]),["family","supporting"]),m$1=a(t,g,["scale","md"]),o$1=a(t,f,["scale","sm"]),h$1=a(t,e,["scale","xs"]),f$1=a(t,h,["scale","lg"]),c$1=a(t,i,["scale","xl"]),g$1=a(t,j$1,["scale","2xl"]),n$1=a(t,k$1,["scale","3xl"]),y=a(t,l,["scale","4xl"]),d$1=a(t,m,["scale","5xl"]),u=a(t,n,["scale","6xl"]),w=a(t,o,["scale","7xl"]),p$1=a(t,p,["scale","8xl"]),b$1=a(t,q$1,["scale","9xl"]);return {primary:{xs:{thin:a$1({family:a$2,scale:h$1,weight:100}),xlight:a$1({family:a$2,scale:h$1,weight:200}),light:a$1({family:a$2,scale:h$1,weight:300}),normal:a$1({family:a$2,scale:h$1,weight:400}),medium:a$1({family:a$2,scale:h$1,weight:500}),semibold:a$1({family:a$2,scale:h$1,weight:600}),bold:a$1({family:a$2,scale:h$1,weight:700}),xbold:a$1({family:a$2,scale:h$1,weight:800}),black:a$1({family:a$2,scale:h$1,weight:900})},sm:{thin:a$1({family:a$2,scale:o$1,weight:100}),xlight:a$1({family:a$2,scale:o$1,weight:200}),light:a$1({family:a$2,scale:o$1,weight:300}),normal:a$1({family:a$2,scale:o$1,weight:400}),medium:a$1({family:a$2,scale:o$1,weight:500}),semibold:a$1({family:a$2,scale:o$1,weight:600}),bold:a$1({family:a$2,scale:o$1,weight:700}),xbold:a$1({family:a$2,scale:o$1,weight:800}),black:a$1({family:a$2,scale:o$1,weight:900})},md:{thin:a$1({family:a$2,scale:m$1,weight:100}),xlight:a$1({family:a$2,scale:m$1,weight:200}),light:a$1({family:a$2,scale:m$1,weight:300}),normal:a$1({family:a$2,scale:m$1,weight:400}),medium:a$1({family:a$2,scale:m$1,weight:500}),semibold:a$1({family:a$2,scale:m$1,weight:600}),bold:a$1({family:a$2,scale:m$1,weight:700}),xbold:a$1({family:a$2,scale:m$1,weight:800}),black:a$1({family:a$2,scale:m$1,weight:900})},lg:{thin:a$1({family:a$2,scale:f$1,weight:100}),xlight:a$1({family:a$2,scale:f$1,weight:200}),light:a$1({family:a$2,scale:f$1,weight:300}),normal:a$1({family:a$2,scale:f$1,weight:400}),medium:a$1({family:a$2,scale:f$1,weight:500}),semibold:a$1({family:a$2,scale:f$1,weight:600}),bold:a$1({family:a$2,scale:f$1,weight:700}),xbold:a$1({family:a$2,scale:f$1,weight:800}),black:a$1({family:a$2,scale:f$1,weight:900})},xl:{thin:a$1({family:a$2,scale:c$1,weight:100}),xlight:a$1({family:a$2,scale:c$1,weight:200}),light:a$1({family:a$2,scale:c$1,weight:300}),normal:a$1({family:a$2,scale:c$1,weight:400}),medium:a$1({family:a$2,scale:c$1,weight:500}),semibold:a$1({family:a$2,scale:c$1,weight:600}),bold:a$1({family:a$2,scale:c$1,weight:700}),xbold:a$1({family:a$2,scale:c$1,weight:800}),black:a$1({family:a$2,scale:c$1,weight:900})},"2xl":{thin:a$1({family:a$2,scale:g$1,weight:100}),xlight:a$1({family:a$2,scale:g$1,weight:200}),light:a$1({family:a$2,scale:g$1,weight:300}),normal:a$1({family:a$2,scale:g$1,weight:400}),medium:a$1({family:a$2,scale:g$1,weight:500}),semibold:a$1({family:a$2,scale:g$1,weight:600}),bold:a$1({family:a$2,scale:g$1,weight:700}),xbold:a$1({family:a$2,scale:g$1,weight:800}),black:a$1({family:a$2,scale:g$1,weight:900})},"3xl":{thin:a$1({family:a$2,scale:n$1,weight:100}),xlight:a$1({family:a$2,scale:n$1,weight:200}),light:a$1({family:a$2,scale:n$1,weight:300}),normal:a$1({family:a$2,scale:n$1,weight:400}),medium:a$1({family:a$2,scale:n$1,weight:500}),semibold:a$1({family:a$2,scale:n$1,weight:600}),bold:a$1({family:a$2,scale:n$1,weight:700}),xbold:a$1({family:a$2,scale:n$1,weight:800}),black:a$1({family:a$2,scale:n$1,weight:900})},"4xl":{thin:a$1({family:a$2,scale:y,weight:100}),xlight:a$1({family:a$2,scale:y,weight:200}),light:a$1({family:a$2,scale:y,weight:300}),normal:a$1({family:a$2,scale:y,weight:400}),medium:a$1({family:a$2,scale:y,weight:500}),semibold:a$1({family:a$2,scale:y,weight:600}),bold:a$1({family:a$2,scale:y,weight:700}),xbold:a$1({family:a$2,scale:y,weight:800}),black:a$1({family:a$2,scale:y,weight:900})},"5xl":{thin:a$1({family:a$2,scale:d$1,weight:100}),xlight:a$1({family:a$2,scale:d$1,weight:200}),light:a$1({family:a$2,scale:d$1,weight:300}),normal:a$1({family:a$2,scale:d$1,weight:400}),medium:a$1({family:a$2,scale:d$1,weight:500}),semibold:a$1({family:a$2,scale:d$1,weight:600}),bold:a$1({family:a$2,scale:d$1,weight:700}),xbold:a$1({family:a$2,scale:d$1,weight:800}),black:a$1({family:a$2,scale:d$1,weight:900})},"6xl":{thin:a$1({family:a$2,scale:u,weight:100}),xlight:a$1({family:a$2,scale:u,weight:200}),light:a$1({family:a$2,scale:u,weight:300}),normal:a$1({family:a$2,scale:u,weight:400}),medium:a$1({family:a$2,scale:u,weight:500}),semibold:a$1({family:a$2,scale:u,weight:600}),bold:a$1({family:a$2,scale:u,weight:700}),xbold:a$1({family:a$2,scale:u,weight:800}),black:a$1({family:a$2,scale:u,weight:900})},"7xl":{thin:a$1({family:a$2,scale:w,weight:100}),xlight:a$1({family:a$2,scale:w,weight:200}),light:a$1({family:a$2,scale:w,weight:300}),normal:a$1({family:a$2,scale:w,weight:400}),medium:a$1({family:a$2,scale:w,weight:500}),semibold:a$1({family:a$2,scale:w,weight:600}),bold:a$1({family:a$2,scale:w,weight:700}),xbold:a$1({family:a$2,scale:w,weight:800}),black:a$1({family:a$2,scale:w,weight:900})},"8xl":{thin:a$1({family:a$2,scale:p$1,weight:100}),xlight:a$1({family:a$2,scale:p$1,weight:200}),light:a$1({family:a$2,scale:p$1,weight:300}),normal:a$1({family:a$2,scale:p$1,weight:400}),medium:a$1({family:a$2,scale:p$1,weight:500}),semibold:a$1({family:a$2,scale:p$1,weight:600}),bold:a$1({family:a$2,scale:p$1,weight:700}),xbold:a$1({family:a$2,scale:p$1,weight:800}),black:a$1({family:a$2,scale:p$1,weight:900})},"9xl":{thin:a$1({family:a$2,scale:b$1,weight:100}),xlight:a$1({family:a$2,scale:b$1,weight:200}),light:a$1({family:a$2,scale:b$1,weight:300}),normal:a$1({family:a$2,scale:b$1,weight:400}),medium:a$1({family:a$2,scale:b$1,weight:500}),semibold:a$1({family:a$2,scale:b$1,weight:600}),bold:a$1({family:a$2,scale:b$1,weight:700}),xbold:a$1({family:a$2,scale:b$1,weight:800}),black:a$1({family:a$2,scale:b$1,weight:900})}},supporting:{xs:{thin:a$1({family:i$1,scale:h$1,weight:100}),xlight:a$1({family:i$1,scale:h$1,weight:200}),light:a$1({family:i$1,scale:h$1,weight:300}),normal:a$1({family:i$1,scale:h$1,weight:400}),medium:a$1({family:i$1,scale:h$1,weight:500}),semibold:a$1({family:i$1,scale:h$1,weight:600}),bold:a$1({family:i$1,scale:h$1,weight:700}),xbold:a$1({family:i$1,scale:h$1,weight:800}),black:a$1({family:i$1,scale:h$1,weight:900})},sm:{thin:a$1({family:i$1,scale:o$1,weight:100}),xlight:a$1({family:i$1,scale:o$1,weight:200}),light:a$1({family:i$1,scale:o$1,weight:300}),normal:a$1({family:i$1,scale:o$1,weight:400}),medium:a$1({family:i$1,scale:o$1,weight:500}),semibold:a$1({family:i$1,scale:o$1,weight:600}),bold:a$1({family:i$1,scale:o$1,weight:700}),xbold:a$1({family:i$1,scale:o$1,weight:800}),black:a$1({family:i$1,scale:o$1,weight:900})},md:{thin:a$1({family:i$1,scale:m$1,weight:100}),xlight:a$1({family:i$1,scale:m$1,weight:200}),light:a$1({family:i$1,scale:m$1,weight:300}),normal:a$1({family:i$1,scale:m$1,weight:400}),medium:a$1({family:i$1,scale:m$1,weight:500}),semibold:a$1({family:i$1,scale:m$1,weight:600}),bold:a$1({family:i$1,scale:m$1,weight:700}),xbold:a$1({family:i$1,scale:m$1,weight:800}),black:a$1({family:i$1,scale:m$1,weight:900})},lg:{thin:a$1({family:i$1,scale:f$1,weight:100}),xlight:a$1({family:i$1,scale:f$1,weight:200}),light:a$1({family:i$1,scale:f$1,weight:300}),normal:a$1({family:i$1,scale:f$1,weight:400}),medium:a$1({family:i$1,scale:f$1,weight:500}),semibold:a$1({family:i$1,scale:f$1,weight:600}),bold:a$1({family:i$1,scale:f$1,weight:700}),xbold:a$1({family:i$1,scale:f$1,weight:800}),black:a$1({family:i$1,scale:f$1,weight:900})},xl:{thin:a$1({family:i$1,scale:c$1,weight:100}),xlight:a$1({family:i$1,scale:c$1,weight:200}),light:a$1({family:i$1,scale:c$1,weight:300}),normal:a$1({family:i$1,scale:c$1,weight:400}),medium:a$1({family:i$1,scale:c$1,weight:500}),semibold:a$1({family:i$1,scale:c$1,weight:600}),bold:a$1({family:i$1,scale:c$1,weight:700}),xbold:a$1({family:i$1,scale:c$1,weight:800}),black:a$1({family:i$1,scale:c$1,weight:900})},"2xl":{thin:a$1({family:i$1,scale:g$1,weight:100}),xlight:a$1({family:i$1,scale:g$1,weight:200}),light:a$1({family:i$1,scale:g$1,weight:300}),normal:a$1({family:i$1,scale:g$1,weight:400}),medium:a$1({family:i$1,scale:g$1,weight:500}),semibold:a$1({family:i$1,scale:g$1,weight:600}),bold:a$1({family:i$1,scale:g$1,weight:700}),xbold:a$1({family:i$1,scale:g$1,weight:800}),black:a$1({family:i$1,scale:g$1,weight:900})},"3xl":{thin:a$1({family:i$1,scale:n$1,weight:100}),xlight:a$1({family:i$1,scale:n$1,weight:200}),light:a$1({family:i$1,scale:n$1,weight:300}),normal:a$1({family:i$1,scale:n$1,weight:400}),medium:a$1({family:i$1,scale:n$1,weight:500}),semibold:a$1({family:i$1,scale:n$1,weight:600}),bold:a$1({family:i$1,scale:n$1,weight:700}),xbold:a$1({family:i$1,scale:n$1,weight:800}),black:a$1({family:i$1,scale:n$1,weight:900})},"4xl":{thin:a$1({family:i$1,scale:y,weight:100}),xlight:a$1({family:i$1,scale:y,weight:200}),light:a$1({family:i$1,scale:y,weight:300}),normal:a$1({family:i$1,scale:y,weight:400}),medium:a$1({family:i$1,scale:y,weight:500}),semibold:a$1({family:i$1,scale:y,weight:600}),bold:a$1({family:i$1,scale:y,weight:700}),xbold:a$1({family:i$1,scale:y,weight:800}),black:a$1({family:i$1,scale:y,weight:900})},"5xl":{thin:a$1({family:i$1,scale:d$1,weight:100}),xlight:a$1({family:i$1,scale:d$1,weight:200}),light:a$1({family:i$1,scale:d$1,weight:300}),normal:a$1({family:i$1,scale:d$1,weight:400}),medium:a$1({family:i$1,scale:d$1,weight:500}),semibold:a$1({family:i$1,scale:d$1,weight:600}),bold:a$1({family:i$1,scale:d$1,weight:700}),xbold:a$1({family:i$1,scale:d$1,weight:800}),black:a$1({family:i$1,scale:d$1,weight:900})},"6xl":{thin:a$1({family:i$1,scale:u,weight:100}),xlight:a$1({family:i$1,scale:u,weight:200}),light:a$1({family:i$1,scale:u,weight:300}),normal:a$1({family:i$1,scale:u,weight:400}),medium:a$1({family:i$1,scale:u,weight:500}),semibold:a$1({family:i$1,scale:u,weight:600}),bold:a$1({family:i$1,scale:u,weight:700}),xbold:a$1({family:i$1,scale:u,weight:800}),black:a$1({family:i$1,scale:u,weight:900})},"7xl":{thin:a$1({family:i$1,scale:w,weight:100}),xlight:a$1({family:i$1,scale:w,weight:200}),light:a$1({family:i$1,scale:w,weight:300}),normal:a$1({family:i$1,scale:w,weight:400}),medium:a$1({family:i$1,scale:w,weight:500}),semibold:a$1({family:i$1,scale:w,weight:600}),bold:a$1({family:i$1,scale:w,weight:700}),xbold:a$1({family:i$1,scale:w,weight:800}),black:a$1({family:i$1,scale:w,weight:900})},"8xl":{thin:a$1({family:i$1,scale:p$1,weight:100}),xlight:a$1({family:i$1,scale:p$1,weight:200}),light:a$1({family:i$1,scale:p$1,weight:300}),normal:a$1({family:i$1,scale:p$1,weight:400}),medium:a$1({family:i$1,scale:p$1,weight:500}),semibold:a$1({family:i$1,scale:p$1,weight:600}),bold:a$1({family:i$1,scale:p$1,weight:700}),xbold:a$1({family:i$1,scale:p$1,weight:800}),black:a$1({family:i$1,scale:p$1,weight:900})},"9xl":{thin:a$1({family:i$1,scale:b$1,weight:100}),xlight:a$1({family:i$1,scale:b$1,weight:200}),light:a$1({family:i$1,scale:b$1,weight:300}),normal:a$1({family:i$1,scale:b$1,weight:400}),medium:a$1({family:i$1,scale:b$1,weight:500}),semibold:a$1({family:i$1,scale:b$1,weight:600}),bold:a$1({family:i$1,scale:b$1,weight:700}),xbold:a$1({family:i$1,scale:b$1,weight:800}),black:a$1({family:i$1,scale:b$1,weight:900})}},accent:{xs:{thin:a$1({family:l$1,scale:h$1,weight:100}),xlight:a$1({family:l$1,scale:h$1,weight:200}),light:a$1({family:l$1,scale:h$1,weight:300}),normal:a$1({family:l$1,scale:h$1,weight:400}),medium:a$1({family:l$1,scale:h$1,weight:500}),semibold:a$1({family:l$1,scale:h$1,weight:600}),bold:a$1({family:l$1,scale:h$1,weight:700}),xbold:a$1({family:l$1,scale:h$1,weight:800}),black:a$1({family:l$1,scale:h$1,weight:900})},sm:{thin:a$1({family:l$1,scale:o$1,weight:100}),xlight:a$1({family:l$1,scale:o$1,weight:200}),light:a$1({family:l$1,scale:o$1,weight:300}),normal:a$1({family:l$1,scale:o$1,weight:400}),medium:a$1({family:l$1,scale:o$1,weight:500}),semibold:a$1({family:l$1,scale:o$1,weight:600}),bold:a$1({family:l$1,scale:o$1,weight:700}),xbold:a$1({family:l$1,scale:o$1,weight:800}),black:a$1({family:l$1,scale:o$1,weight:900})},md:{thin:a$1({family:l$1,scale:m$1,weight:100}),xlight:a$1({family:l$1,scale:m$1,weight:200}),light:a$1({family:l$1,scale:m$1,weight:300}),normal:a$1({family:l$1,scale:m$1,weight:400}),medium:a$1({family:l$1,scale:m$1,weight:500}),semibold:a$1({family:l$1,scale:m$1,weight:600}),bold:a$1({family:l$1,scale:m$1,weight:700}),xbold:a$1({family:l$1,scale:m$1,weight:800}),black:a$1({family:l$1,scale:m$1,weight:900})},lg:{thin:a$1({family:l$1,scale:f$1,weight:100}),xlight:a$1({family:l$1,scale:f$1,weight:200}),light:a$1({family:l$1,scale:f$1,weight:300}),normal:a$1({family:l$1,scale:f$1,weight:400}),medium:a$1({family:l$1,scale:f$1,weight:500}),semibold:a$1({family:l$1,scale:f$1,weight:600}),bold:a$1({family:l$1,scale:f$1,weight:700}),xbold:a$1({family:l$1,scale:f$1,weight:800}),black:a$1({family:l$1,scale:f$1,weight:900})},xl:{thin:a$1({family:l$1,scale:c$1,weight:100}),xlight:a$1({family:l$1,scale:c$1,weight:200}),light:a$1({family:l$1,scale:c$1,weight:300}),normal:a$1({family:l$1,scale:c$1,weight:400}),medium:a$1({family:l$1,scale:c$1,weight:500}),semibold:a$1({family:l$1,scale:c$1,weight:600}),bold:a$1({family:l$1,scale:c$1,weight:700}),xbold:a$1({family:l$1,scale:c$1,weight:800}),black:a$1({family:l$1,scale:c$1,weight:900})},"2xl":{thin:a$1({family:l$1,scale:g$1,weight:100}),xlight:a$1({family:l$1,scale:g$1,weight:200}),light:a$1({family:l$1,scale:g$1,weight:300}),normal:a$1({family:l$1,scale:g$1,weight:400}),medium:a$1({family:l$1,scale:g$1,weight:500}),semibold:a$1({family:l$1,scale:g$1,weight:600}),bold:a$1({family:l$1,scale:g$1,weight:700}),xbold:a$1({family:l$1,scale:g$1,weight:800}),black:a$1({family:l$1,scale:g$1,weight:900})},"3xl":{thin:a$1({family:l$1,scale:n$1,weight:100}),xlight:a$1({family:l$1,scale:n$1,weight:200}),light:a$1({family:l$1,scale:n$1,weight:300}),normal:a$1({family:l$1,scale:n$1,weight:400}),medium:a$1({family:l$1,scale:n$1,weight:500}),semibold:a$1({family:l$1,scale:n$1,weight:600}),bold:a$1({family:l$1,scale:n$1,weight:700}),xbold:a$1({family:l$1,scale:n$1,weight:800}),black:a$1({family:l$1,scale:n$1,weight:900})},"4xl":{thin:a$1({family:l$1,scale:y,weight:100}),xlight:a$1({family:l$1,scale:y,weight:200}),light:a$1({family:l$1,scale:y,weight:300}),normal:a$1({family:l$1,scale:y,weight:400}),medium:a$1({family:l$1,scale:y,weight:500}),semibold:a$1({family:l$1,scale:y,weight:600}),bold:a$1({family:l$1,scale:y,weight:700}),xbold:a$1({family:l$1,scale:y,weight:800}),black:a$1({family:l$1,scale:y,weight:900})},"5xl":{thin:a$1({family:l$1,scale:d$1,weight:100}),xlight:a$1({family:l$1,scale:d$1,weight:200}),light:a$1({family:l$1,scale:d$1,weight:300}),normal:a$1({family:l$1,scale:d$1,weight:400}),medium:a$1({family:l$1,scale:d$1,weight:500}),semibold:a$1({family:l$1,scale:d$1,weight:600}),bold:a$1({family:l$1,scale:d$1,weight:700}),xbold:a$1({family:l$1,scale:d$1,weight:800}),black:a$1({family:l$1,scale:d$1,weight:900})},"6xl":{thin:a$1({family:l$1,scale:u,weight:100}),xlight:a$1({family:l$1,scale:u,weight:200}),light:a$1({family:a$2,scale:l$1,weight:300}),normal:a$1({family:l$1,scale:u,weight:400}),medium:a$1({family:l$1,scale:u,weight:500}),semibold:a$1({family:l$1,scale:u,weight:600}),bold:a$1({family:l$1,scale:u,weight:700}),xbold:a$1({family:l$1,scale:u,weight:800}),black:a$1({family:l$1,scale:u,weight:900})},"7xl":{thin:a$1({family:l$1,scale:w,weight:100}),xlight:a$1({family:l$1,scale:w,weight:200}),light:a$1({family:l$1,scale:w,weight:300}),normal:a$1({family:l$1,scale:w,weight:400}),medium:a$1({family:l$1,scale:w,weight:500}),semibold:a$1({family:l$1,scale:w,weight:600}),bold:a$1({family:l$1,scale:w,weight:700}),xbold:a$1({family:l$1,scale:w,weight:800}),black:a$1({family:l$1,scale:w,weight:900})},"8xl":{thin:a$1({family:l$1,scale:p$1,weight:100}),xlight:a$1({family:l$1,scale:p$1,weight:200}),light:a$1({family:l$1,scale:p$1,weight:300}),normal:a$1({family:l$1,scale:p$1,weight:400}),medium:a$1({family:l$1,scale:p$1,weight:500}),semibold:a$1({family:l$1,scale:p$1,weight:600}),bold:a$1({family:l$1,scale:p$1,weight:700}),xbold:a$1({family:l$1,scale:p$1,weight:800}),black:a$1({family:l$1,scale:p$1,weight:900})},"9xl":{thin:a$1({family:l$1,scale:b$1,weight:100}),xlight:a$1({family:l$1,scale:b$1,weight:200}),light:a$1({family:l$1,scale:b$1,weight:300}),normal:a$1({family:l$1,scale:b$1,weight:400}),medium:a$1({family:l$1,scale:b$1,weight:500}),semibold:a$1({family:l$1,scale:b$1,weight:600}),bold:a$1({family:l$1,scale:b$1,weight:700}),xbold:a$1({family:l$1,scale:b$1,weight:800}),black:a$1({family:l$1,scale:b$1,weight:900})}}}};var G=({base:s,config:t})=>({resources:t?.resources?E({base:s.resources,config:t?.resources??[]}):s.resources,fonts:t?.fonts?U({base:s.fonts,config:t?.fonts?t.fonts:{}}):s.fonts});var x=({base:s,config:t})=>{let a$1=a(t,s.tint_500,["tint_500"]),l=s.tint_500!=a$1,i=a(t,l?a$1:s.tint_400,["tint_400"]),m=a(t,l?i:s.tint_300,["tint_300"]),o=a(t,l?m:s.tint_200,["tint_200"]),h=a(t,l?o:s.tint_100,["tint_100"]),f=a(t,l?h:s.tint_50,["tint_50"]),c=a(t,l?a$1:s.tint_600,["tint_600"]),g=a(t,l?c:s.tint_700,["tint_700"]),n=a(t,l?g:s.tint_800,["tint_800"]),y=a(t,l?n:s.tint_900,["tint_900"]),d=a(t,l?y:s.tint_950,["tint_950"]);return {tint_50:f,tint_100:h,tint_200:o,tint_300:m,tint_400:i,tint_500:a$1,tint_600:c,tint_700:g,tint_800:n,tint_900:y,tint_950:d}};var L=({base:s,config:t})=>t||s;var K=({base:s,config:t})=>({danger:x({base:s.danger,config:t.danger?t.danger:{}}),warning:x({base:s.warning,config:t.warning?t.warning:{}}),success:x({base:s.success,config:t.success?t.success:{}}),info:x({base:s.info,config:t.info?t.info:{}}),neutrals:x({base:s.neutrals,config:t.neutrals?t.neutrals:{}}),surfaces:x({base:s.surfaces,config:t.surfaces?t.surfaces:{}}),primary:x({base:s.primary,config:t.primary?t.primary:{}}),accent:x({base:s.accent,config:t.accent?t.accent:{}}),supporting:x({base:s.supporting,config:t.supporting?t.supporting:{}}),map:{label:{all:t.map?.label?.all?t.map.label.all:s.map.label.all,water:t.map?.label?.water?t.map.label.water:s.map.label.water,highway:t.map?.label?.highway?t.map.label.highway:s.map.label.highway,road:t.map?.label?.road?t.map.label.road:s.map.label.road},border:{country:t.map?.border?.country?t.map.border.country:s.map.border.country,highway:t.map?.border?.highway?t.map.border.highway:s.map.border.highway,road:t.map?.border?.road?t.map.border.road:s.map.border.road},landscape:{all:t.map?.landscape?.all?t.map.landscape.all:s.map.landscape.all,artificial:t.map?.landscape?.artificial?t.map.landscape.artificial:s.map.landscape.artificial,terrain:t.map?.landscape?.terrain?t.map.landscape.terrain:s.map.landscape.terrain,park:t.map?.landscape?.park?t.map.landscape.park:s.map.landscape.park,poi:t.map?.landscape?.poi?t.map.landscape.poi:s.map.landscape.poi,water:t.map?.landscape?.water?t.map.landscape.water:s.map.landscape.water,transit:t.map?.landscape?.transit?t.map.landscape.transit:s.map.landscape.transit,highway:t.map?.landscape?.highway?t.map.landscape.highway:s.map.landscape.highway,road:t.map?.landscape?.road?t.map.landscape.road:s.map.landscape.road}},additional:L({base:s.additional,config:t?.additional?t.additional:[]})});var q=({base:s,config:t})=>({none:s.none,xs:t?t.xs:s.xs,sm:t?t.sm:s.sm,md:t?t.md:s.md,lg:t?t.lg:s.lg,xl:t?t.xl:s.xl,"2xl":t?t["2xl"]:s["2xl"],"3xl":t?t["3xl"]:s["3xl"],full:"9999px"});var se=({config:s})=>({alternate:j({base:r.alternate,config:s?.alternate?s.alternate:[]}),typography:s?.typography?G({base:r.typography,config:{resources:s.typography?.resources?s.typography.resources:[],fonts:s.typography?.fonts?s.typography.fonts:{}}}):r.typography,colors:s?.colors?K({base:r.colors,config:s.colors?s.colors:{}}):r.colors,utility:r.utility,radius:q({base:r.radius,config:s.radius})});var S=(l=>(l.STANDARD="STANDARD",l.INVERTED="INVERTED",l.CONTRAST="CONTRAST",l))(S||{});(a=>{function s(l,i){return Object.values(a).includes(l)?l:i}a.from=s;function t(l){return Object.values(a).includes(l)?l:null}a.tryFrom=t;})(S||={});var re=createContext("STANDARD");var oe=()=>t().alternate;var he=()=>t().radius;var ce=()=>t().utility;var k=class{constructor(t,a,l,i,m){this.prefersReducedMotion=t,this.prefersContrast=a,this.prefersReducedTransparency=l,this.prefersColorSchema=i,this.invertedColors=m;}prefersDarkMode(){return this.prefersColorSchema==="dark"}prefersHighContrast(){return this.prefersContrast==="more"}prefersLowContrast(){return this.prefersContrast==="less"}},ge=()=>{let s=matchMedia("(prefers-reduced-motion: reduce)").matches?"reduce":"no-preference",t=matchMedia("(prefers-contrast: more)").matches?"more":matchMedia("(prefers-contrast: less)").matches?"less":matchMedia("(prefers-contrast: custom)").matches?"custom":"no-preference",a=matchMedia("(prefers-reduced-transparency: reduce)").matches?"reduce":"no-preference",l=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",i=matchMedia("(inverted-colors: inverted)").matches?"inverted":"none";return new k(s,t,a,l,i)};

export { k as BrowserAccessibilityPreferences, Q as StyleProviderAnimation, ee as StyleProviderFontFace, ae as StyleProviderPreFlight, te as StyleProviderRouter, se as ThemeBuilder, S as ThemeMode, re as ThemeModeCtx, ge as useBrowserAccessibilityPreferences, oe as useThemeAlternate, he as useThemeRadius, ce as useThemeUtility };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map