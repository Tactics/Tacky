import {r,t,s,b,c,d,g,f as f$1,e,h,i,j,k,l,m,n,o,p as p$1,q,a}from'./chunk-PSXHYEBW.mjs';export{s as ThemeCtx,t as useTheme,u as useThemeColor,v as useThemeFonts}from'./chunk-PSXHYEBW.mjs';import {createGlobalStyle}from'styled-components';import {createContext,useContext,useEffect}from'react';import {jsx,jsxs,Fragment}from'react/jsx-runtime';var Z=createGlobalStyle`
      ${m=>m.animations?.map(function(i){return i})}

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
`;var ie=createGlobalStyle`
    
    /* For WebKit-based browsers (Chrome, Edge, Safari) */
    ::-webkit-scrollbar {
        display: none;
    }

    /* For Firefox */
    * {
        scrollbar-width: none; /* Hides the scrollbar */
    }

    /* General reset (optional) */
    html, body {
        overflow: auto; /* Ensure scrolling still works */
    }
`;var N=({base:m,config:i})=>i||m;var X=({base:m,config:i})=>i||m;function f(m,i,t){let l=m;for(let a of t)if(l=l?.[a]??i,l==null)break;return l}var H=({base:m$1,config:i$1})=>{let t=f(i$1,b,["family","primary"]),l$1=f(i$1,f(i$1,c,["family","primary"]),["family","accent"]),a$1=f(i$1,f(i$1,d,["family","primary"]),["family","supporting"]),s=f(i$1,g,["scale","md"]),h$1=f(i$1,f$1,["scale","sm"]),c$1=f(i$1,e,["scale","xs"]),g$1=f(i$1,h,["scale","lg"]),n$1=f(i$1,i,["scale","xl"]),o$1=f(i$1,j,["scale","2xl"]),r=f(i$1,k,["scale","3xl"]),y=f(i$1,l,["scale","4xl"]),w=f(i$1,m,["scale","5xl"]),b$1=f(i$1,n,["scale","6xl"]),d$1=f(i$1,o,["scale","7xl"]),u=f(i$1,p$1,["scale","8xl"]),x=f(i$1,q,["scale","9xl"]);return {primary:{xs:{thin:a({family:t,scale:c$1,weight:100}),xlight:a({family:t,scale:c$1,weight:200}),light:a({family:t,scale:c$1,weight:300}),normal:a({family:t,scale:c$1,weight:400}),medium:a({family:t,scale:c$1,weight:500}),semibold:a({family:t,scale:c$1,weight:600}),bold:a({family:t,scale:c$1,weight:700}),xbold:a({family:t,scale:c$1,weight:800}),black:a({family:t,scale:c$1,weight:900})},sm:{thin:a({family:t,scale:h$1,weight:100}),xlight:a({family:t,scale:h$1,weight:200}),light:a({family:t,scale:h$1,weight:300}),normal:a({family:t,scale:h$1,weight:400}),medium:a({family:t,scale:h$1,weight:500}),semibold:a({family:t,scale:h$1,weight:600}),bold:a({family:t,scale:h$1,weight:700}),xbold:a({family:t,scale:h$1,weight:800}),black:a({family:t,scale:h$1,weight:900})},md:{thin:a({family:t,scale:s,weight:100}),xlight:a({family:t,scale:s,weight:200}),light:a({family:t,scale:s,weight:300}),normal:a({family:t,scale:s,weight:400}),medium:a({family:t,scale:s,weight:500}),semibold:a({family:t,scale:s,weight:600}),bold:a({family:t,scale:s,weight:700}),xbold:a({family:t,scale:s,weight:800}),black:a({family:t,scale:s,weight:900})},lg:{thin:a({family:t,scale:g$1,weight:100}),xlight:a({family:t,scale:g$1,weight:200}),light:a({family:t,scale:g$1,weight:300}),normal:a({family:t,scale:g$1,weight:400}),medium:a({family:t,scale:g$1,weight:500}),semibold:a({family:t,scale:g$1,weight:600}),bold:a({family:t,scale:g$1,weight:700}),xbold:a({family:t,scale:g$1,weight:800}),black:a({family:t,scale:g$1,weight:900})},xl:{thin:a({family:t,scale:n$1,weight:100}),xlight:a({family:t,scale:n$1,weight:200}),light:a({family:t,scale:n$1,weight:300}),normal:a({family:t,scale:n$1,weight:400}),medium:a({family:t,scale:n$1,weight:500}),semibold:a({family:t,scale:n$1,weight:600}),bold:a({family:t,scale:n$1,weight:700}),xbold:a({family:t,scale:n$1,weight:800}),black:a({family:t,scale:n$1,weight:900})},"2xl":{thin:a({family:t,scale:o$1,weight:100}),xlight:a({family:t,scale:o$1,weight:200}),light:a({family:t,scale:o$1,weight:300}),normal:a({family:t,scale:o$1,weight:400}),medium:a({family:t,scale:o$1,weight:500}),semibold:a({family:t,scale:o$1,weight:600}),bold:a({family:t,scale:o$1,weight:700}),xbold:a({family:t,scale:o$1,weight:800}),black:a({family:t,scale:o$1,weight:900})},"3xl":{thin:a({family:t,scale:r,weight:100}),xlight:a({family:t,scale:r,weight:200}),light:a({family:t,scale:r,weight:300}),normal:a({family:t,scale:r,weight:400}),medium:a({family:t,scale:r,weight:500}),semibold:a({family:t,scale:r,weight:600}),bold:a({family:t,scale:r,weight:700}),xbold:a({family:t,scale:r,weight:800}),black:a({family:t,scale:r,weight:900})},"4xl":{thin:a({family:t,scale:y,weight:100}),xlight:a({family:t,scale:y,weight:200}),light:a({family:t,scale:y,weight:300}),normal:a({family:t,scale:y,weight:400}),medium:a({family:t,scale:y,weight:500}),semibold:a({family:t,scale:y,weight:600}),bold:a({family:t,scale:y,weight:700}),xbold:a({family:t,scale:y,weight:800}),black:a({family:t,scale:y,weight:900})},"5xl":{thin:a({family:t,scale:w,weight:100}),xlight:a({family:t,scale:w,weight:200}),light:a({family:t,scale:w,weight:300}),normal:a({family:t,scale:w,weight:400}),medium:a({family:t,scale:w,weight:500}),semibold:a({family:t,scale:w,weight:600}),bold:a({family:t,scale:w,weight:700}),xbold:a({family:t,scale:w,weight:800}),black:a({family:t,scale:w,weight:900})},"6xl":{thin:a({family:t,scale:b$1,weight:100}),xlight:a({family:t,scale:b$1,weight:200}),light:a({family:t,scale:b$1,weight:300}),normal:a({family:t,scale:b$1,weight:400}),medium:a({family:t,scale:b$1,weight:500}),semibold:a({family:t,scale:b$1,weight:600}),bold:a({family:t,scale:b$1,weight:700}),xbold:a({family:t,scale:b$1,weight:800}),black:a({family:t,scale:b$1,weight:900})},"7xl":{thin:a({family:t,scale:d$1,weight:100}),xlight:a({family:t,scale:d$1,weight:200}),light:a({family:t,scale:d$1,weight:300}),normal:a({family:t,scale:d$1,weight:400}),medium:a({family:t,scale:d$1,weight:500}),semibold:a({family:t,scale:d$1,weight:600}),bold:a({family:t,scale:d$1,weight:700}),xbold:a({family:t,scale:d$1,weight:800}),black:a({family:t,scale:d$1,weight:900})},"8xl":{thin:a({family:t,scale:u,weight:100}),xlight:a({family:t,scale:u,weight:200}),light:a({family:t,scale:u,weight:300}),normal:a({family:t,scale:u,weight:400}),medium:a({family:t,scale:u,weight:500}),semibold:a({family:t,scale:u,weight:600}),bold:a({family:t,scale:u,weight:700}),xbold:a({family:t,scale:u,weight:800}),black:a({family:t,scale:u,weight:900})},"9xl":{thin:a({family:t,scale:x,weight:100}),xlight:a({family:t,scale:x,weight:200}),light:a({family:t,scale:x,weight:300}),normal:a({family:t,scale:x,weight:400}),medium:a({family:t,scale:x,weight:500}),semibold:a({family:t,scale:x,weight:600}),bold:a({family:t,scale:x,weight:700}),xbold:a({family:t,scale:x,weight:800}),black:a({family:t,scale:x,weight:900})}},supporting:{xs:{thin:a({family:a$1,scale:c$1,weight:100}),xlight:a({family:a$1,scale:c$1,weight:200}),light:a({family:a$1,scale:c$1,weight:300}),normal:a({family:a$1,scale:c$1,weight:400}),medium:a({family:a$1,scale:c$1,weight:500}),semibold:a({family:a$1,scale:c$1,weight:600}),bold:a({family:a$1,scale:c$1,weight:700}),xbold:a({family:a$1,scale:c$1,weight:800}),black:a({family:a$1,scale:c$1,weight:900})},sm:{thin:a({family:a$1,scale:h$1,weight:100}),xlight:a({family:a$1,scale:h$1,weight:200}),light:a({family:a$1,scale:h$1,weight:300}),normal:a({family:a$1,scale:h$1,weight:400}),medium:a({family:a$1,scale:h$1,weight:500}),semibold:a({family:a$1,scale:h$1,weight:600}),bold:a({family:a$1,scale:h$1,weight:700}),xbold:a({family:a$1,scale:h$1,weight:800}),black:a({family:a$1,scale:h$1,weight:900})},md:{thin:a({family:a$1,scale:s,weight:100}),xlight:a({family:a$1,scale:s,weight:200}),light:a({family:a$1,scale:s,weight:300}),normal:a({family:a$1,scale:s,weight:400}),medium:a({family:a$1,scale:s,weight:500}),semibold:a({family:a$1,scale:s,weight:600}),bold:a({family:a$1,scale:s,weight:700}),xbold:a({family:a$1,scale:s,weight:800}),black:a({family:a$1,scale:s,weight:900})},lg:{thin:a({family:a$1,scale:g$1,weight:100}),xlight:a({family:a$1,scale:g$1,weight:200}),light:a({family:a$1,scale:g$1,weight:300}),normal:a({family:a$1,scale:g$1,weight:400}),medium:a({family:a$1,scale:g$1,weight:500}),semibold:a({family:a$1,scale:g$1,weight:600}),bold:a({family:a$1,scale:g$1,weight:700}),xbold:a({family:a$1,scale:g$1,weight:800}),black:a({family:a$1,scale:g$1,weight:900})},xl:{thin:a({family:a$1,scale:n$1,weight:100}),xlight:a({family:a$1,scale:n$1,weight:200}),light:a({family:a$1,scale:n$1,weight:300}),normal:a({family:a$1,scale:n$1,weight:400}),medium:a({family:a$1,scale:n$1,weight:500}),semibold:a({family:a$1,scale:n$1,weight:600}),bold:a({family:a$1,scale:n$1,weight:700}),xbold:a({family:a$1,scale:n$1,weight:800}),black:a({family:a$1,scale:n$1,weight:900})},"2xl":{thin:a({family:a$1,scale:o$1,weight:100}),xlight:a({family:a$1,scale:o$1,weight:200}),light:a({family:a$1,scale:o$1,weight:300}),normal:a({family:a$1,scale:o$1,weight:400}),medium:a({family:a$1,scale:o$1,weight:500}),semibold:a({family:a$1,scale:o$1,weight:600}),bold:a({family:a$1,scale:o$1,weight:700}),xbold:a({family:a$1,scale:o$1,weight:800}),black:a({family:a$1,scale:o$1,weight:900})},"3xl":{thin:a({family:a$1,scale:r,weight:100}),xlight:a({family:a$1,scale:r,weight:200}),light:a({family:a$1,scale:r,weight:300}),normal:a({family:a$1,scale:r,weight:400}),medium:a({family:a$1,scale:r,weight:500}),semibold:a({family:a$1,scale:r,weight:600}),bold:a({family:a$1,scale:r,weight:700}),xbold:a({family:a$1,scale:r,weight:800}),black:a({family:a$1,scale:r,weight:900})},"4xl":{thin:a({family:a$1,scale:y,weight:100}),xlight:a({family:a$1,scale:y,weight:200}),light:a({family:a$1,scale:y,weight:300}),normal:a({family:a$1,scale:y,weight:400}),medium:a({family:a$1,scale:y,weight:500}),semibold:a({family:a$1,scale:y,weight:600}),bold:a({family:a$1,scale:y,weight:700}),xbold:a({family:a$1,scale:y,weight:800}),black:a({family:a$1,scale:y,weight:900})},"5xl":{thin:a({family:a$1,scale:w,weight:100}),xlight:a({family:a$1,scale:w,weight:200}),light:a({family:a$1,scale:w,weight:300}),normal:a({family:a$1,scale:w,weight:400}),medium:a({family:a$1,scale:w,weight:500}),semibold:a({family:a$1,scale:w,weight:600}),bold:a({family:a$1,scale:w,weight:700}),xbold:a({family:a$1,scale:w,weight:800}),black:a({family:a$1,scale:w,weight:900})},"6xl":{thin:a({family:a$1,scale:b$1,weight:100}),xlight:a({family:a$1,scale:b$1,weight:200}),light:a({family:a$1,scale:b$1,weight:300}),normal:a({family:a$1,scale:b$1,weight:400}),medium:a({family:a$1,scale:b$1,weight:500}),semibold:a({family:a$1,scale:b$1,weight:600}),bold:a({family:a$1,scale:b$1,weight:700}),xbold:a({family:a$1,scale:b$1,weight:800}),black:a({family:a$1,scale:b$1,weight:900})},"7xl":{thin:a({family:a$1,scale:d$1,weight:100}),xlight:a({family:a$1,scale:d$1,weight:200}),light:a({family:a$1,scale:d$1,weight:300}),normal:a({family:a$1,scale:d$1,weight:400}),medium:a({family:a$1,scale:d$1,weight:500}),semibold:a({family:a$1,scale:d$1,weight:600}),bold:a({family:a$1,scale:d$1,weight:700}),xbold:a({family:a$1,scale:d$1,weight:800}),black:a({family:a$1,scale:d$1,weight:900})},"8xl":{thin:a({family:a$1,scale:u,weight:100}),xlight:a({family:a$1,scale:u,weight:200}),light:a({family:a$1,scale:u,weight:300}),normal:a({family:a$1,scale:u,weight:400}),medium:a({family:a$1,scale:u,weight:500}),semibold:a({family:a$1,scale:u,weight:600}),bold:a({family:a$1,scale:u,weight:700}),xbold:a({family:a$1,scale:u,weight:800}),black:a({family:a$1,scale:u,weight:900})},"9xl":{thin:a({family:a$1,scale:x,weight:100}),xlight:a({family:a$1,scale:x,weight:200}),light:a({family:a$1,scale:x,weight:300}),normal:a({family:a$1,scale:x,weight:400}),medium:a({family:a$1,scale:x,weight:500}),semibold:a({family:a$1,scale:x,weight:600}),bold:a({family:a$1,scale:x,weight:700}),xbold:a({family:a$1,scale:x,weight:800}),black:a({family:a$1,scale:x,weight:900})}},accent:{xs:{thin:a({family:l$1,scale:c$1,weight:100}),xlight:a({family:l$1,scale:c$1,weight:200}),light:a({family:l$1,scale:c$1,weight:300}),normal:a({family:l$1,scale:c$1,weight:400}),medium:a({family:l$1,scale:c$1,weight:500}),semibold:a({family:l$1,scale:c$1,weight:600}),bold:a({family:l$1,scale:c$1,weight:700}),xbold:a({family:l$1,scale:c$1,weight:800}),black:a({family:l$1,scale:c$1,weight:900})},sm:{thin:a({family:l$1,scale:h$1,weight:100}),xlight:a({family:l$1,scale:h$1,weight:200}),light:a({family:l$1,scale:h$1,weight:300}),normal:a({family:l$1,scale:h$1,weight:400}),medium:a({family:l$1,scale:h$1,weight:500}),semibold:a({family:l$1,scale:h$1,weight:600}),bold:a({family:l$1,scale:h$1,weight:700}),xbold:a({family:l$1,scale:h$1,weight:800}),black:a({family:l$1,scale:h$1,weight:900})},md:{thin:a({family:l$1,scale:s,weight:100}),xlight:a({family:l$1,scale:s,weight:200}),light:a({family:l$1,scale:s,weight:300}),normal:a({family:l$1,scale:s,weight:400}),medium:a({family:l$1,scale:s,weight:500}),semibold:a({family:l$1,scale:s,weight:600}),bold:a({family:l$1,scale:s,weight:700}),xbold:a({family:l$1,scale:s,weight:800}),black:a({family:l$1,scale:s,weight:900})},lg:{thin:a({family:l$1,scale:g$1,weight:100}),xlight:a({family:l$1,scale:g$1,weight:200}),light:a({family:l$1,scale:g$1,weight:300}),normal:a({family:l$1,scale:g$1,weight:400}),medium:a({family:l$1,scale:g$1,weight:500}),semibold:a({family:l$1,scale:g$1,weight:600}),bold:a({family:l$1,scale:g$1,weight:700}),xbold:a({family:l$1,scale:g$1,weight:800}),black:a({family:l$1,scale:g$1,weight:900})},xl:{thin:a({family:l$1,scale:n$1,weight:100}),xlight:a({family:l$1,scale:n$1,weight:200}),light:a({family:l$1,scale:n$1,weight:300}),normal:a({family:l$1,scale:n$1,weight:400}),medium:a({family:l$1,scale:n$1,weight:500}),semibold:a({family:l$1,scale:n$1,weight:600}),bold:a({family:l$1,scale:n$1,weight:700}),xbold:a({family:l$1,scale:n$1,weight:800}),black:a({family:l$1,scale:n$1,weight:900})},"2xl":{thin:a({family:l$1,scale:o$1,weight:100}),xlight:a({family:l$1,scale:o$1,weight:200}),light:a({family:l$1,scale:o$1,weight:300}),normal:a({family:l$1,scale:o$1,weight:400}),medium:a({family:l$1,scale:o$1,weight:500}),semibold:a({family:l$1,scale:o$1,weight:600}),bold:a({family:l$1,scale:o$1,weight:700}),xbold:a({family:l$1,scale:o$1,weight:800}),black:a({family:l$1,scale:o$1,weight:900})},"3xl":{thin:a({family:l$1,scale:r,weight:100}),xlight:a({family:l$1,scale:r,weight:200}),light:a({family:l$1,scale:r,weight:300}),normal:a({family:l$1,scale:r,weight:400}),medium:a({family:l$1,scale:r,weight:500}),semibold:a({family:l$1,scale:r,weight:600}),bold:a({family:l$1,scale:r,weight:700}),xbold:a({family:l$1,scale:r,weight:800}),black:a({family:l$1,scale:r,weight:900})},"4xl":{thin:a({family:l$1,scale:y,weight:100}),xlight:a({family:l$1,scale:y,weight:200}),light:a({family:l$1,scale:y,weight:300}),normal:a({family:l$1,scale:y,weight:400}),medium:a({family:l$1,scale:y,weight:500}),semibold:a({family:l$1,scale:y,weight:600}),bold:a({family:l$1,scale:y,weight:700}),xbold:a({family:l$1,scale:y,weight:800}),black:a({family:l$1,scale:y,weight:900})},"5xl":{thin:a({family:l$1,scale:w,weight:100}),xlight:a({family:l$1,scale:w,weight:200}),light:a({family:l$1,scale:w,weight:300}),normal:a({family:l$1,scale:w,weight:400}),medium:a({family:l$1,scale:w,weight:500}),semibold:a({family:l$1,scale:w,weight:600}),bold:a({family:l$1,scale:w,weight:700}),xbold:a({family:l$1,scale:w,weight:800}),black:a({family:l$1,scale:w,weight:900})},"6xl":{thin:a({family:l$1,scale:b$1,weight:100}),xlight:a({family:l$1,scale:b$1,weight:200}),light:a({family:t,scale:l$1,weight:300}),normal:a({family:l$1,scale:b$1,weight:400}),medium:a({family:l$1,scale:b$1,weight:500}),semibold:a({family:l$1,scale:b$1,weight:600}),bold:a({family:l$1,scale:b$1,weight:700}),xbold:a({family:l$1,scale:b$1,weight:800}),black:a({family:l$1,scale:b$1,weight:900})},"7xl":{thin:a({family:l$1,scale:d$1,weight:100}),xlight:a({family:l$1,scale:d$1,weight:200}),light:a({family:l$1,scale:d$1,weight:300}),normal:a({family:l$1,scale:d$1,weight:400}),medium:a({family:l$1,scale:d$1,weight:500}),semibold:a({family:l$1,scale:d$1,weight:600}),bold:a({family:l$1,scale:d$1,weight:700}),xbold:a({family:l$1,scale:d$1,weight:800}),black:a({family:l$1,scale:d$1,weight:900})},"8xl":{thin:a({family:l$1,scale:u,weight:100}),xlight:a({family:l$1,scale:u,weight:200}),light:a({family:l$1,scale:u,weight:300}),normal:a({family:l$1,scale:u,weight:400}),medium:a({family:l$1,scale:u,weight:500}),semibold:a({family:l$1,scale:u,weight:600}),bold:a({family:l$1,scale:u,weight:700}),xbold:a({family:l$1,scale:u,weight:800}),black:a({family:l$1,scale:u,weight:900})},"9xl":{thin:a({family:l$1,scale:x,weight:100}),xlight:a({family:l$1,scale:x,weight:200}),light:a({family:l$1,scale:x,weight:300}),normal:a({family:l$1,scale:x,weight:400}),medium:a({family:l$1,scale:x,weight:500}),semibold:a({family:l$1,scale:x,weight:600}),bold:a({family:l$1,scale:x,weight:700}),xbold:a({family:l$1,scale:x,weight:800}),black:a({family:l$1,scale:x,weight:900})}}}};var G=({base:m,config:i})=>({external_resources:i?.external_resources?X({base:m.external_resources,config:i?.external_resources?i.external_resources:[]}):m.external_resources,fonts:i?.fonts?H({base:m.fonts,config:i?.fonts?i.fonts:{}}):m.fonts});var p=({base:m,config:i})=>{let t=f(i,m.tint_500,["tint_500"]),l=m.tint_500!=t,a=f(i,l?t:m.tint_400,["tint_400"]),s=f(i,l?a:m.tint_300,["tint_300"]),h=f(i,l?s:m.tint_200,["tint_200"]),c=f(i,l?h:m.tint_100,["tint_100"]),g=f(i,l?c:m.tint_50,["tint_50"]),n=f(i,l?t:m.tint_600,["tint_600"]),o=f(i,l?n:m.tint_700,["tint_700"]),r=f(i,l?o:m.tint_800,["tint_800"]),y=f(i,l?r:m.tint_900,["tint_900"]),w=f(i,l?y:m.tint_950,["tint_950"]);return {tint_50:g,tint_100:c,tint_200:h,tint_300:s,tint_400:a,tint_500:t,tint_600:n,tint_700:o,tint_800:r,tint_900:y,tint_950:w}};var U=({base:m,config:i})=>({danger:p({base:m.danger,config:i.danger?i.danger:{}}),warning:p({base:m.warning,config:i.warning?i.warning:{}}),success:p({base:m.success,config:i.success?i.success:{}}),info:p({base:m.info,config:i.info?i.info:{}}),neutrals:p({base:m.neutrals,config:i.neutrals?i.neutrals:{}}),border:p({base:m.surfaces,config:i.border?i.border:{}}),text:p({base:m.neutrals,config:i.text?i.text:{}}),surfaces:p({base:m.surfaces,config:i.surfaces?i.surfaces:{}}),skeletons:p({base:m.skeletons,config:i.skeletons?i.skeletons:{}}),primary:p({base:m.primary,config:i.primary?i.primary:{}}),accent:p({base:m.accent,config:i.accent?i.accent:{}}),accent2:p({base:m.accent2,config:i.accent2?i.accent2:i.accent?i.accent:{}}),accent3:p({base:m.accent3,config:i.accent3?i.accent3:i.accent?i.accent:{}}),accent4:p({base:m.accent4,config:i.accent4?i.accent4:i.accent?i.accent:{}}),accent5:p({base:m.accent5,config:i.accent5?i.accent5:i.accent?i.accent:{}}),supporting:p({base:m.supporting,config:i.supporting?i.supporting:{}})});var K=({base:m,config:i})=>({none:m.none,xs:i?i.xs:m.xs,sm:i?i.sm:m.sm,md:i?i.md:m.md,lg:i?i.lg:m.lg,xl:i?i.xl:m.xl,"2xl":i?i["2xl"]:m["2xl"],"3xl":i?i["3xl"]:m["3xl"],full:"9999px"});var $=({base:m,config:i})=>({none:"0 0 #0000",xs:i?i.xs:m.xs,sm:i?i.sm:m.sm,md:i?i.md:m.md,lg:i?i.lg:m.lg,xl:i?i.xl:m.xl,"2xl":i?i["2xl"]:m["2xl"]});var ae=({config:m})=>({settings:m?.settings?m.settings:r.settings,alternate:N({base:r.alternate,config:m?.alternate?m.alternate:[]}),typography:m?.typography?G({base:r.typography,config:m.typography?m.typography:{}}):r.typography,colors:m?.colors?U({base:r.colors,config:m.colors?m.colors:{}}):r.colors,utility:r.utility,radius:K({base:r.radius,config:m.radius}),shadow:$({base:r.shadow,config:m.shadow})});var S=(l=>(l.STANDARD="STANDARD",l.INVERTED="INVERTED",l.CONTRAST="CONTRAST",l))(S||{});(t=>{function m(l,a){return Object.values(t).includes(l)?l:a}t.from=m;function i(l){return Object.values(t).includes(l)?l:null}t.tryFrom=i;})(S||={});var se=createContext("STANDARD");var I=({name:m,alternates:i})=>{let t=i.find(l=>l.name===m);return t&&t.theme};var oe=({component:m,font:i,default:t$1})=>{let l=t(),a=I({name:m,alternates:l.alternate}),s={Color:"inherit",BackgroundColor:"transparent",Border:{Color:"transparent",Width:0,Style:"solid"},FontWeightAdjustment:0},h=(o,r)=>({Color:r?.Color||o?.Color||s.Color,BackgroundColor:r?.BackgroundColor||o?.BackgroundColor||s.BackgroundColor,Border:re(r?.Border?.Width||o?.Border?.Width||s.Border.Width,r?.Border?.Color||o?.Border?.Color||s.Border.Color,r?.Border?.Style||o?.Border?.Style||s.Border.Style),BorderRaw:{Width:r?.Border?.Width||o?.Border?.Width||s.Border.Width,Style:r?.Border?.Style||o?.Border?.Style||s.Border.Style,Color:r?.Border?.Color||o?.Border?.Color||s.Border.Color},Font:he(i,r?.FontWeightAdjustment||o?.FontWeightAdjustment||s.FontWeightAdjustment)}),c=h(t$1?.Init,a?.Init),g=h(t$1?.Hover===void 0&&t$1?.Init?t$1?.Init:t$1?.Hover,a?.Hover),n=h(t$1?.Active===void 0&&t$1?.Init?t$1?.Init:t$1?.Active,a?.Active);return {Init:c,Hover:g,Active:n}},re=(m,i,t)=>{let l=t||"solid";return m+"px "+l+" "+i},he=(m,i)=>{let t=[100,200,300,400,500,600,700,800,900],l=m.match(/(\d+)/);if(!l)return m;let a=parseInt(l[0],10),s=t.indexOf(a);if(s===-1)return m;let h=s+i/100;h=Math.max(0,Math.min(t.length-1,h));let c=t[h];return m.replace(/(\d+)/,String(c))};var ne=m=>{try{return useContext(s).settings[m]??null}catch{return null}};var ge=()=>t().radius;var ye=()=>t().utility;var fe=()=>t().shadow;var we=m=>{let i=({children:t})=>jsxs(Fragment,{children:[" ",t," "]});return m.reduce((t,[l,a={}])=>({children:s})=>jsx(t,{children:jsx(l,{...a,children:s})}),i)};var be=m=>{let{children:i,sheets:t}=m;return useEffect(()=>{t.map(function(l){let a=document.createElement("link");a.rel="stylesheet",a.href=l,document.head.appendChild(a);});},[t]),i??null};function pe(m,i,t={r:255,g:255,b:255}){m=m.replace(/^#/,""),m.length===3&&(m=m.split("").map(y=>y+y).join(""));let l=parseInt(m.slice(0,2),16),a=parseInt(m.slice(2,4),16),s=parseInt(m.slice(4,6),16),{r:h,g:c,b:g}=t,n=Math.round(l*i+h*(1-i)),o=Math.round(a*i+c*(1-i)),r=Math.round(s*i+g*(1-i));return `rgb(${n}, ${o}, ${r})`}export{we as BuildProvidersTree,be as ExternalStylesheetLoader,I as LookupAlternateTheme,pe as Opacity,Z as StyleProviderAnimation,le as StyleProviderPreFlight,ie as StyleProviderScrollbar,ae as ThemeBuilder,S as ThemeMode,se as ThemeModeCtx,f as orDefault,oe as useAlternateTheme,ge as useThemeRadius,ne as useThemeSetting,fe as useThemeShadow,ye as useThemeUtility};//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map