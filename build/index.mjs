import {r,t,s,b,c,d,g as g$1,f,e,h,i,j as j$1,k as k$1,l,m,n,o,p as p$1,q as q$1,a}from'./chunk-IJRHB6A6.mjs';export{s as ThemeCtx,t as useTheme,u as useThemeColor,v as useThemeFonts}from'./chunk-IJRHB6A6.mjs';import {createGlobalStyle}from'styled-components';import {createContext,useContext,useEffect}from'react';import {jsx,jsxs,Fragment}from'react/jsx-runtime';var ee=createGlobalStyle`
      ${o=>o.animations?.map(function(t){return t})}

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
`;var ae=createGlobalStyle`
    
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
`;var N=({base:o,config:t})=>t||o;var X=({base:o,config:t})=>t||o;function g(o,t,i){let l=o;for(let a of i)if(l=l?.[a]??t,l==null)break;return l}var j=({base:o$1,config:t})=>{let i$1=g(t,b,["family","primary"]),l$1=g(t,g(t,c,["family","primary"]),["family","accent"]),a$1=g(t,g(t,d,["family","primary"]),["family","supporting"]),m$1=g(t,g$1,["scale","md"]),h$1=g(t,f,["scale","sm"]),c$1=g(t,e,["scale","xs"]),y=g(t,h,["scale","lg"]),n$1=g(t,i,["scale","xl"]),s=g(t,j$1,["scale","2xl"]),r=g(t,k$1,["scale","3xl"]),f$1=g(t,l,["scale","4xl"]),d$1=g(t,m,["scale","5xl"]),b$1=g(t,n,["scale","6xl"]),w=g(t,o,["scale","7xl"]),x=g(t,p$1,["scale","8xl"]),u=g(t,q$1,["scale","9xl"]);return {primary:{xs:{thin:a({family:i$1,scale:c$1,weight:100}),xlight:a({family:i$1,scale:c$1,weight:200}),light:a({family:i$1,scale:c$1,weight:300}),normal:a({family:i$1,scale:c$1,weight:400}),medium:a({family:i$1,scale:c$1,weight:500}),semibold:a({family:i$1,scale:c$1,weight:600}),bold:a({family:i$1,scale:c$1,weight:700}),xbold:a({family:i$1,scale:c$1,weight:800}),black:a({family:i$1,scale:c$1,weight:900})},sm:{thin:a({family:i$1,scale:h$1,weight:100}),xlight:a({family:i$1,scale:h$1,weight:200}),light:a({family:i$1,scale:h$1,weight:300}),normal:a({family:i$1,scale:h$1,weight:400}),medium:a({family:i$1,scale:h$1,weight:500}),semibold:a({family:i$1,scale:h$1,weight:600}),bold:a({family:i$1,scale:h$1,weight:700}),xbold:a({family:i$1,scale:h$1,weight:800}),black:a({family:i$1,scale:h$1,weight:900})},md:{thin:a({family:i$1,scale:m$1,weight:100}),xlight:a({family:i$1,scale:m$1,weight:200}),light:a({family:i$1,scale:m$1,weight:300}),normal:a({family:i$1,scale:m$1,weight:400}),medium:a({family:i$1,scale:m$1,weight:500}),semibold:a({family:i$1,scale:m$1,weight:600}),bold:a({family:i$1,scale:m$1,weight:700}),xbold:a({family:i$1,scale:m$1,weight:800}),black:a({family:i$1,scale:m$1,weight:900})},lg:{thin:a({family:i$1,scale:y,weight:100}),xlight:a({family:i$1,scale:y,weight:200}),light:a({family:i$1,scale:y,weight:300}),normal:a({family:i$1,scale:y,weight:400}),medium:a({family:i$1,scale:y,weight:500}),semibold:a({family:i$1,scale:y,weight:600}),bold:a({family:i$1,scale:y,weight:700}),xbold:a({family:i$1,scale:y,weight:800}),black:a({family:i$1,scale:y,weight:900})},xl:{thin:a({family:i$1,scale:n$1,weight:100}),xlight:a({family:i$1,scale:n$1,weight:200}),light:a({family:i$1,scale:n$1,weight:300}),normal:a({family:i$1,scale:n$1,weight:400}),medium:a({family:i$1,scale:n$1,weight:500}),semibold:a({family:i$1,scale:n$1,weight:600}),bold:a({family:i$1,scale:n$1,weight:700}),xbold:a({family:i$1,scale:n$1,weight:800}),black:a({family:i$1,scale:n$1,weight:900})},"2xl":{thin:a({family:i$1,scale:s,weight:100}),xlight:a({family:i$1,scale:s,weight:200}),light:a({family:i$1,scale:s,weight:300}),normal:a({family:i$1,scale:s,weight:400}),medium:a({family:i$1,scale:s,weight:500}),semibold:a({family:i$1,scale:s,weight:600}),bold:a({family:i$1,scale:s,weight:700}),xbold:a({family:i$1,scale:s,weight:800}),black:a({family:i$1,scale:s,weight:900})},"3xl":{thin:a({family:i$1,scale:r,weight:100}),xlight:a({family:i$1,scale:r,weight:200}),light:a({family:i$1,scale:r,weight:300}),normal:a({family:i$1,scale:r,weight:400}),medium:a({family:i$1,scale:r,weight:500}),semibold:a({family:i$1,scale:r,weight:600}),bold:a({family:i$1,scale:r,weight:700}),xbold:a({family:i$1,scale:r,weight:800}),black:a({family:i$1,scale:r,weight:900})},"4xl":{thin:a({family:i$1,scale:f$1,weight:100}),xlight:a({family:i$1,scale:f$1,weight:200}),light:a({family:i$1,scale:f$1,weight:300}),normal:a({family:i$1,scale:f$1,weight:400}),medium:a({family:i$1,scale:f$1,weight:500}),semibold:a({family:i$1,scale:f$1,weight:600}),bold:a({family:i$1,scale:f$1,weight:700}),xbold:a({family:i$1,scale:f$1,weight:800}),black:a({family:i$1,scale:f$1,weight:900})},"5xl":{thin:a({family:i$1,scale:d$1,weight:100}),xlight:a({family:i$1,scale:d$1,weight:200}),light:a({family:i$1,scale:d$1,weight:300}),normal:a({family:i$1,scale:d$1,weight:400}),medium:a({family:i$1,scale:d$1,weight:500}),semibold:a({family:i$1,scale:d$1,weight:600}),bold:a({family:i$1,scale:d$1,weight:700}),xbold:a({family:i$1,scale:d$1,weight:800}),black:a({family:i$1,scale:d$1,weight:900})},"6xl":{thin:a({family:i$1,scale:b$1,weight:100}),xlight:a({family:i$1,scale:b$1,weight:200}),light:a({family:i$1,scale:b$1,weight:300}),normal:a({family:i$1,scale:b$1,weight:400}),medium:a({family:i$1,scale:b$1,weight:500}),semibold:a({family:i$1,scale:b$1,weight:600}),bold:a({family:i$1,scale:b$1,weight:700}),xbold:a({family:i$1,scale:b$1,weight:800}),black:a({family:i$1,scale:b$1,weight:900})},"7xl":{thin:a({family:i$1,scale:w,weight:100}),xlight:a({family:i$1,scale:w,weight:200}),light:a({family:i$1,scale:w,weight:300}),normal:a({family:i$1,scale:w,weight:400}),medium:a({family:i$1,scale:w,weight:500}),semibold:a({family:i$1,scale:w,weight:600}),bold:a({family:i$1,scale:w,weight:700}),xbold:a({family:i$1,scale:w,weight:800}),black:a({family:i$1,scale:w,weight:900})},"8xl":{thin:a({family:i$1,scale:x,weight:100}),xlight:a({family:i$1,scale:x,weight:200}),light:a({family:i$1,scale:x,weight:300}),normal:a({family:i$1,scale:x,weight:400}),medium:a({family:i$1,scale:x,weight:500}),semibold:a({family:i$1,scale:x,weight:600}),bold:a({family:i$1,scale:x,weight:700}),xbold:a({family:i$1,scale:x,weight:800}),black:a({family:i$1,scale:x,weight:900})},"9xl":{thin:a({family:i$1,scale:u,weight:100}),xlight:a({family:i$1,scale:u,weight:200}),light:a({family:i$1,scale:u,weight:300}),normal:a({family:i$1,scale:u,weight:400}),medium:a({family:i$1,scale:u,weight:500}),semibold:a({family:i$1,scale:u,weight:600}),bold:a({family:i$1,scale:u,weight:700}),xbold:a({family:i$1,scale:u,weight:800}),black:a({family:i$1,scale:u,weight:900})}},supporting:{xs:{thin:a({family:a$1,scale:c$1,weight:100}),xlight:a({family:a$1,scale:c$1,weight:200}),light:a({family:a$1,scale:c$1,weight:300}),normal:a({family:a$1,scale:c$1,weight:400}),medium:a({family:a$1,scale:c$1,weight:500}),semibold:a({family:a$1,scale:c$1,weight:600}),bold:a({family:a$1,scale:c$1,weight:700}),xbold:a({family:a$1,scale:c$1,weight:800}),black:a({family:a$1,scale:c$1,weight:900})},sm:{thin:a({family:a$1,scale:h$1,weight:100}),xlight:a({family:a$1,scale:h$1,weight:200}),light:a({family:a$1,scale:h$1,weight:300}),normal:a({family:a$1,scale:h$1,weight:400}),medium:a({family:a$1,scale:h$1,weight:500}),semibold:a({family:a$1,scale:h$1,weight:600}),bold:a({family:a$1,scale:h$1,weight:700}),xbold:a({family:a$1,scale:h$1,weight:800}),black:a({family:a$1,scale:h$1,weight:900})},md:{thin:a({family:a$1,scale:m$1,weight:100}),xlight:a({family:a$1,scale:m$1,weight:200}),light:a({family:a$1,scale:m$1,weight:300}),normal:a({family:a$1,scale:m$1,weight:400}),medium:a({family:a$1,scale:m$1,weight:500}),semibold:a({family:a$1,scale:m$1,weight:600}),bold:a({family:a$1,scale:m$1,weight:700}),xbold:a({family:a$1,scale:m$1,weight:800}),black:a({family:a$1,scale:m$1,weight:900})},lg:{thin:a({family:a$1,scale:y,weight:100}),xlight:a({family:a$1,scale:y,weight:200}),light:a({family:a$1,scale:y,weight:300}),normal:a({family:a$1,scale:y,weight:400}),medium:a({family:a$1,scale:y,weight:500}),semibold:a({family:a$1,scale:y,weight:600}),bold:a({family:a$1,scale:y,weight:700}),xbold:a({family:a$1,scale:y,weight:800}),black:a({family:a$1,scale:y,weight:900})},xl:{thin:a({family:a$1,scale:n$1,weight:100}),xlight:a({family:a$1,scale:n$1,weight:200}),light:a({family:a$1,scale:n$1,weight:300}),normal:a({family:a$1,scale:n$1,weight:400}),medium:a({family:a$1,scale:n$1,weight:500}),semibold:a({family:a$1,scale:n$1,weight:600}),bold:a({family:a$1,scale:n$1,weight:700}),xbold:a({family:a$1,scale:n$1,weight:800}),black:a({family:a$1,scale:n$1,weight:900})},"2xl":{thin:a({family:a$1,scale:s,weight:100}),xlight:a({family:a$1,scale:s,weight:200}),light:a({family:a$1,scale:s,weight:300}),normal:a({family:a$1,scale:s,weight:400}),medium:a({family:a$1,scale:s,weight:500}),semibold:a({family:a$1,scale:s,weight:600}),bold:a({family:a$1,scale:s,weight:700}),xbold:a({family:a$1,scale:s,weight:800}),black:a({family:a$1,scale:s,weight:900})},"3xl":{thin:a({family:a$1,scale:r,weight:100}),xlight:a({family:a$1,scale:r,weight:200}),light:a({family:a$1,scale:r,weight:300}),normal:a({family:a$1,scale:r,weight:400}),medium:a({family:a$1,scale:r,weight:500}),semibold:a({family:a$1,scale:r,weight:600}),bold:a({family:a$1,scale:r,weight:700}),xbold:a({family:a$1,scale:r,weight:800}),black:a({family:a$1,scale:r,weight:900})},"4xl":{thin:a({family:a$1,scale:f$1,weight:100}),xlight:a({family:a$1,scale:f$1,weight:200}),light:a({family:a$1,scale:f$1,weight:300}),normal:a({family:a$1,scale:f$1,weight:400}),medium:a({family:a$1,scale:f$1,weight:500}),semibold:a({family:a$1,scale:f$1,weight:600}),bold:a({family:a$1,scale:f$1,weight:700}),xbold:a({family:a$1,scale:f$1,weight:800}),black:a({family:a$1,scale:f$1,weight:900})},"5xl":{thin:a({family:a$1,scale:d$1,weight:100}),xlight:a({family:a$1,scale:d$1,weight:200}),light:a({family:a$1,scale:d$1,weight:300}),normal:a({family:a$1,scale:d$1,weight:400}),medium:a({family:a$1,scale:d$1,weight:500}),semibold:a({family:a$1,scale:d$1,weight:600}),bold:a({family:a$1,scale:d$1,weight:700}),xbold:a({family:a$1,scale:d$1,weight:800}),black:a({family:a$1,scale:d$1,weight:900})},"6xl":{thin:a({family:a$1,scale:b$1,weight:100}),xlight:a({family:a$1,scale:b$1,weight:200}),light:a({family:a$1,scale:b$1,weight:300}),normal:a({family:a$1,scale:b$1,weight:400}),medium:a({family:a$1,scale:b$1,weight:500}),semibold:a({family:a$1,scale:b$1,weight:600}),bold:a({family:a$1,scale:b$1,weight:700}),xbold:a({family:a$1,scale:b$1,weight:800}),black:a({family:a$1,scale:b$1,weight:900})},"7xl":{thin:a({family:a$1,scale:w,weight:100}),xlight:a({family:a$1,scale:w,weight:200}),light:a({family:a$1,scale:w,weight:300}),normal:a({family:a$1,scale:w,weight:400}),medium:a({family:a$1,scale:w,weight:500}),semibold:a({family:a$1,scale:w,weight:600}),bold:a({family:a$1,scale:w,weight:700}),xbold:a({family:a$1,scale:w,weight:800}),black:a({family:a$1,scale:w,weight:900})},"8xl":{thin:a({family:a$1,scale:x,weight:100}),xlight:a({family:a$1,scale:x,weight:200}),light:a({family:a$1,scale:x,weight:300}),normal:a({family:a$1,scale:x,weight:400}),medium:a({family:a$1,scale:x,weight:500}),semibold:a({family:a$1,scale:x,weight:600}),bold:a({family:a$1,scale:x,weight:700}),xbold:a({family:a$1,scale:x,weight:800}),black:a({family:a$1,scale:x,weight:900})},"9xl":{thin:a({family:a$1,scale:u,weight:100}),xlight:a({family:a$1,scale:u,weight:200}),light:a({family:a$1,scale:u,weight:300}),normal:a({family:a$1,scale:u,weight:400}),medium:a({family:a$1,scale:u,weight:500}),semibold:a({family:a$1,scale:u,weight:600}),bold:a({family:a$1,scale:u,weight:700}),xbold:a({family:a$1,scale:u,weight:800}),black:a({family:a$1,scale:u,weight:900})}},accent:{xs:{thin:a({family:l$1,scale:c$1,weight:100}),xlight:a({family:l$1,scale:c$1,weight:200}),light:a({family:l$1,scale:c$1,weight:300}),normal:a({family:l$1,scale:c$1,weight:400}),medium:a({family:l$1,scale:c$1,weight:500}),semibold:a({family:l$1,scale:c$1,weight:600}),bold:a({family:l$1,scale:c$1,weight:700}),xbold:a({family:l$1,scale:c$1,weight:800}),black:a({family:l$1,scale:c$1,weight:900})},sm:{thin:a({family:l$1,scale:h$1,weight:100}),xlight:a({family:l$1,scale:h$1,weight:200}),light:a({family:l$1,scale:h$1,weight:300}),normal:a({family:l$1,scale:h$1,weight:400}),medium:a({family:l$1,scale:h$1,weight:500}),semibold:a({family:l$1,scale:h$1,weight:600}),bold:a({family:l$1,scale:h$1,weight:700}),xbold:a({family:l$1,scale:h$1,weight:800}),black:a({family:l$1,scale:h$1,weight:900})},md:{thin:a({family:l$1,scale:m$1,weight:100}),xlight:a({family:l$1,scale:m$1,weight:200}),light:a({family:l$1,scale:m$1,weight:300}),normal:a({family:l$1,scale:m$1,weight:400}),medium:a({family:l$1,scale:m$1,weight:500}),semibold:a({family:l$1,scale:m$1,weight:600}),bold:a({family:l$1,scale:m$1,weight:700}),xbold:a({family:l$1,scale:m$1,weight:800}),black:a({family:l$1,scale:m$1,weight:900})},lg:{thin:a({family:l$1,scale:y,weight:100}),xlight:a({family:l$1,scale:y,weight:200}),light:a({family:l$1,scale:y,weight:300}),normal:a({family:l$1,scale:y,weight:400}),medium:a({family:l$1,scale:y,weight:500}),semibold:a({family:l$1,scale:y,weight:600}),bold:a({family:l$1,scale:y,weight:700}),xbold:a({family:l$1,scale:y,weight:800}),black:a({family:l$1,scale:y,weight:900})},xl:{thin:a({family:l$1,scale:n$1,weight:100}),xlight:a({family:l$1,scale:n$1,weight:200}),light:a({family:l$1,scale:n$1,weight:300}),normal:a({family:l$1,scale:n$1,weight:400}),medium:a({family:l$1,scale:n$1,weight:500}),semibold:a({family:l$1,scale:n$1,weight:600}),bold:a({family:l$1,scale:n$1,weight:700}),xbold:a({family:l$1,scale:n$1,weight:800}),black:a({family:l$1,scale:n$1,weight:900})},"2xl":{thin:a({family:l$1,scale:s,weight:100}),xlight:a({family:l$1,scale:s,weight:200}),light:a({family:l$1,scale:s,weight:300}),normal:a({family:l$1,scale:s,weight:400}),medium:a({family:l$1,scale:s,weight:500}),semibold:a({family:l$1,scale:s,weight:600}),bold:a({family:l$1,scale:s,weight:700}),xbold:a({family:l$1,scale:s,weight:800}),black:a({family:l$1,scale:s,weight:900})},"3xl":{thin:a({family:l$1,scale:r,weight:100}),xlight:a({family:l$1,scale:r,weight:200}),light:a({family:l$1,scale:r,weight:300}),normal:a({family:l$1,scale:r,weight:400}),medium:a({family:l$1,scale:r,weight:500}),semibold:a({family:l$1,scale:r,weight:600}),bold:a({family:l$1,scale:r,weight:700}),xbold:a({family:l$1,scale:r,weight:800}),black:a({family:l$1,scale:r,weight:900})},"4xl":{thin:a({family:l$1,scale:f$1,weight:100}),xlight:a({family:l$1,scale:f$1,weight:200}),light:a({family:l$1,scale:f$1,weight:300}),normal:a({family:l$1,scale:f$1,weight:400}),medium:a({family:l$1,scale:f$1,weight:500}),semibold:a({family:l$1,scale:f$1,weight:600}),bold:a({family:l$1,scale:f$1,weight:700}),xbold:a({family:l$1,scale:f$1,weight:800}),black:a({family:l$1,scale:f$1,weight:900})},"5xl":{thin:a({family:l$1,scale:d$1,weight:100}),xlight:a({family:l$1,scale:d$1,weight:200}),light:a({family:l$1,scale:d$1,weight:300}),normal:a({family:l$1,scale:d$1,weight:400}),medium:a({family:l$1,scale:d$1,weight:500}),semibold:a({family:l$1,scale:d$1,weight:600}),bold:a({family:l$1,scale:d$1,weight:700}),xbold:a({family:l$1,scale:d$1,weight:800}),black:a({family:l$1,scale:d$1,weight:900})},"6xl":{thin:a({family:l$1,scale:b$1,weight:100}),xlight:a({family:l$1,scale:b$1,weight:200}),light:a({family:i$1,scale:l$1,weight:300}),normal:a({family:l$1,scale:b$1,weight:400}),medium:a({family:l$1,scale:b$1,weight:500}),semibold:a({family:l$1,scale:b$1,weight:600}),bold:a({family:l$1,scale:b$1,weight:700}),xbold:a({family:l$1,scale:b$1,weight:800}),black:a({family:l$1,scale:b$1,weight:900})},"7xl":{thin:a({family:l$1,scale:w,weight:100}),xlight:a({family:l$1,scale:w,weight:200}),light:a({family:l$1,scale:w,weight:300}),normal:a({family:l$1,scale:w,weight:400}),medium:a({family:l$1,scale:w,weight:500}),semibold:a({family:l$1,scale:w,weight:600}),bold:a({family:l$1,scale:w,weight:700}),xbold:a({family:l$1,scale:w,weight:800}),black:a({family:l$1,scale:w,weight:900})},"8xl":{thin:a({family:l$1,scale:x,weight:100}),xlight:a({family:l$1,scale:x,weight:200}),light:a({family:l$1,scale:x,weight:300}),normal:a({family:l$1,scale:x,weight:400}),medium:a({family:l$1,scale:x,weight:500}),semibold:a({family:l$1,scale:x,weight:600}),bold:a({family:l$1,scale:x,weight:700}),xbold:a({family:l$1,scale:x,weight:800}),black:a({family:l$1,scale:x,weight:900})},"9xl":{thin:a({family:l$1,scale:u,weight:100}),xlight:a({family:l$1,scale:u,weight:200}),light:a({family:l$1,scale:u,weight:300}),normal:a({family:l$1,scale:u,weight:400}),medium:a({family:l$1,scale:u,weight:500}),semibold:a({family:l$1,scale:u,weight:600}),bold:a({family:l$1,scale:u,weight:700}),xbold:a({family:l$1,scale:u,weight:800}),black:a({family:l$1,scale:u,weight:900})}}}};var U=({base:o,config:t})=>({external_resources:t?.external_resources?X({base:o.external_resources,config:t?.external_resources?t.external_resources:[]}):o.external_resources,fonts:t?.fonts?j({base:o.fonts,config:t?.fonts?t.fonts:{}}):o.fonts});var p=({base:o,config:t})=>{let i=g(t,o.tint_500,["tint_500"]),l=o.tint_500!=i,a=g(t,l?i:o.tint_400,["tint_400"]),m=g(t,l?a:o.tint_300,["tint_300"]),h=g(t,l?m:o.tint_200,["tint_200"]),c=g(t,l?h:o.tint_100,["tint_100"]),y=g(t,l?c:o.tint_50,["tint_50"]),n=g(t,l?i:o.tint_600,["tint_600"]),s=g(t,l?n:o.tint_700,["tint_700"]),r=g(t,l?s:o.tint_800,["tint_800"]),f=g(t,l?r:o.tint_900,["tint_900"]),d=g(t,l?f:o.tint_950,["tint_950"]);return {tint_50:y,tint_100:c,tint_200:h,tint_300:m,tint_400:a,tint_500:i,tint_600:n,tint_700:s,tint_800:r,tint_900:f,tint_950:d}};var G=({base:o,config:t})=>t||o;var K=({base:o,config:t})=>({danger:p({base:o.danger,config:t.danger?t.danger:{}}),warning:p({base:o.warning,config:t.warning?t.warning:{}}),success:p({base:o.success,config:t.success?t.success:{}}),info:p({base:o.info,config:t.info?t.info:{}}),neutrals:p({base:o.neutrals,config:t.neutrals?t.neutrals:{}}),border:p({base:o.neutrals,config:t.border?t.border:{}}),text:p({base:o.neutrals,config:t.text?t.text:{}}),surfaces:p({base:o.surfaces,config:t.surfaces?t.surfaces:{}}),skeletons:p({base:o.skeletons,config:t.skeletons?t.skeletons:{}}),primary:p({base:o.primary,config:t.primary?t.primary:{}}),accent:p({base:o.accent,config:t.accent?t.accent:{}}),accent2:p({base:o.accent2,config:t.accent2?t.accent2:t.accent?t.accent:{}}),accent3:p({base:o.accent3,config:t.accent3?t.accent3:t.accent?t.accent:{}}),accent4:p({base:o.accent4,config:t.accent4?t.accent4:t.accent?t.accent:{}}),accent5:p({base:o.accent5,config:t.accent5?t.accent5:t.accent?t.accent:{}}),supporting:p({base:o.supporting,config:t.supporting?t.supporting:{}}),additional:G({base:o.additional,config:t?.additional?t.additional:[]})});var q=({base:o,config:t})=>({none:o.none,xs:t?t.xs:o.xs,sm:t?t.sm:o.sm,md:t?t.md:o.md,lg:t?t.lg:o.lg,xl:t?t.xl:o.xl,"2xl":t?t["2xl"]:o["2xl"],"3xl":t?t["3xl"]:o["3xl"],full:"9999px"});var Y=({base:o,config:t})=>({none:"0 0 #0000",xs:t?t.xs:o.xs,sm:t?t.sm:o.sm,md:t?t.md:o.md,lg:t?t.lg:o.lg,xl:t?t.xl:o.xl,"2xl":t?t["2xl"]:o["2xl"]});var oe=({config:o})=>({settings:o?.settings?o.settings:r.settings,alternate:N({base:r.alternate,config:o?.alternate?o.alternate:[]}),typography:o?.typography?U({base:r.typography,config:o.typography?o.typography:{}}):r.typography,colors:o?.colors?K({base:r.colors,config:o.colors?o.colors:{}}):r.colors,utility:r.utility,radius:q({base:r.radius,config:o.radius}),shadow:Y({base:r.shadow,config:o.shadow})});var k=(l=>(l.STANDARD="STANDARD",l.INVERTED="INVERTED",l.CONTRAST="CONTRAST",l))(k||{});(i=>{function o(l,a){return Object.values(i).includes(l)?l:a}i.from=o;function t(l){return Object.values(i).includes(l)?l:null}i.tryFrom=t;})(k||={});var se=createContext("STANDARD");var S=({name:o,alternates:t})=>{let i=t.find(l=>l.name===o);return i&&i.theme};var re=({component:o,font:t$1,default:i})=>{let l=t(),a=S({name:o,alternates:l.alternate}),m={Color:"inherit",BackgroundColor:"transparent",Border:{Color:"transparent",Width:0,Style:"solid"},FontWeightAdjustment:0},h=(s,r)=>({Color:r?.Color||s?.Color||m.Color,BackgroundColor:r?.BackgroundColor||s?.BackgroundColor||m.BackgroundColor,Border:he(r?.Border?.Width||s?.Border?.Width||m.Border.Width,r?.Border?.Color||s?.Border?.Color||m.Border.Color,r?.Border?.Style||s?.Border?.Style||m.Border.Style),BorderRaw:{Width:r?.Border?.Width||s?.Border?.Width||m.Border.Width,Style:r?.Border?.Style||s?.Border?.Style||m.Border.Style,Color:r?.Border?.Color||s?.Border?.Color||m.Border.Color},Font:ce(t$1,r?.FontWeightAdjustment||s?.FontWeightAdjustment||m.FontWeightAdjustment)}),c=h(i?.Init,a?.Init),y=h(i?.Hover===void 0&&i?.Init?i?.Init:i?.Hover,a?.Hover),n=h(i?.Active===void 0&&i?.Init?i?.Init:i?.Active,a?.Active);return {Init:c,Hover:y,Active:n}},he=(o,t,i)=>{let l=i||"solid";return o+"px "+l+" "+t},ce=(o,t)=>{let i=[100,200,300,400,500,600,700,800,900],l=o.match(/(\d+)/);if(!l)return o;let a=parseInt(l[0],10),m=i.indexOf(a);if(m===-1)return o;let h=m+t/100;h=Math.max(0,Math.min(i.length-1,h));let c=i[h];return o.replace(/(\d+)/,String(c))};var ge=o=>{try{return useContext(s).settings[o]??null}catch{return null}};var ye=()=>t().radius;var fe=()=>t().utility;var de=()=>t().shadow;var we=o=>{let t=({children:i})=>jsxs(Fragment,{children:[" ",i," "]});return o.reduce((i,[l,a={}])=>({children:m})=>jsx(i,{children:jsx(l,{...a,children:m})}),t)};var pe=o=>{let{children:t,sheets:i}=o;return useEffect(()=>{i.map(function(l){let a=document.createElement("link");a.rel="stylesheet",a.href=l,document.head.appendChild(a);});},[i]),t??null};var Ce=({name:o,colors:t,fallback:i})=>{let l=t.find(a=>a.name===o);return l?l.color:i};export{we as BuildProvidersTree,pe as ExternalStylesheetLoader,Ce as LookupAdditionalColor,S as LookupAlternateTheme,ee as StyleProviderAnimation,ie as StyleProviderPreFlight,ae as StyleProviderScrollbar,oe as ThemeBuilder,k as ThemeMode,se as ThemeModeCtx,g as orDefault,re as useAlternateTheme,ye as useThemeRadius,ge as useThemeSetting,de as useThemeShadow,fe as useThemeUtility};//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map