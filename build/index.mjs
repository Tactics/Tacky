import {r,t,s,b as b$1,c,d,g as g$1,f,e,h,i,j as j$1,k as k$1,l,m,n,o,p,q as q$1,a}from'./chunk-IJRHB6A6.mjs';export{s as ThemeCtx,t as useTheme,u as useThemeColor,v as useThemeFonts}from'./chunk-IJRHB6A6.mjs';import {createGlobalStyle}from'styled-components';import {createContext,useContext,useEffect}from'react';import {jsx,jsxs,Fragment}from'react/jsx-runtime';var ee=createGlobalStyle`
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
`;var N=({base:m,config:a})=>a||m;var X=({base:m,config:a})=>a||m;function g(m,a,i){let l=m;for(let t of i)if(l=l?.[t]??a,l==null)break;return l}var j=({base:m$1,config:a$1})=>{let i$1=g(a$1,b$1,["family","primary"]),l$1=g(a$1,g(a$1,c,["family","primary"]),["family","accent"]),t=g(a$1,g(a$1,d,["family","primary"]),["family","supporting"]),o$1=g(a$1,g$1,["scale","md"]),s=g(a$1,f,["scale","sm"]),c$1=g(a$1,e,["scale","xs"]),y=g(a$1,h,["scale","lg"]),n$1=g(a$1,i,["scale","xl"]),r=g(a$1,j$1,["scale","2xl"]),h$1=g(a$1,k$1,["scale","3xl"]),f$1=g(a$1,l,["scale","4xl"]),d$1=g(a$1,m,["scale","5xl"]),p$1=g(a$1,n,["scale","6xl"]),w=g(a$1,o,["scale","7xl"]),u=g(a$1,p,["scale","8xl"]),x=g(a$1,q$1,["scale","9xl"]);return {primary:{xs:{thin:a({family:i$1,scale:c$1,weight:100}),xlight:a({family:i$1,scale:c$1,weight:200}),light:a({family:i$1,scale:c$1,weight:300}),normal:a({family:i$1,scale:c$1,weight:400}),medium:a({family:i$1,scale:c$1,weight:500}),semibold:a({family:i$1,scale:c$1,weight:600}),bold:a({family:i$1,scale:c$1,weight:700}),xbold:a({family:i$1,scale:c$1,weight:800}),black:a({family:i$1,scale:c$1,weight:900})},sm:{thin:a({family:i$1,scale:s,weight:100}),xlight:a({family:i$1,scale:s,weight:200}),light:a({family:i$1,scale:s,weight:300}),normal:a({family:i$1,scale:s,weight:400}),medium:a({family:i$1,scale:s,weight:500}),semibold:a({family:i$1,scale:s,weight:600}),bold:a({family:i$1,scale:s,weight:700}),xbold:a({family:i$1,scale:s,weight:800}),black:a({family:i$1,scale:s,weight:900})},md:{thin:a({family:i$1,scale:o$1,weight:100}),xlight:a({family:i$1,scale:o$1,weight:200}),light:a({family:i$1,scale:o$1,weight:300}),normal:a({family:i$1,scale:o$1,weight:400}),medium:a({family:i$1,scale:o$1,weight:500}),semibold:a({family:i$1,scale:o$1,weight:600}),bold:a({family:i$1,scale:o$1,weight:700}),xbold:a({family:i$1,scale:o$1,weight:800}),black:a({family:i$1,scale:o$1,weight:900})},lg:{thin:a({family:i$1,scale:y,weight:100}),xlight:a({family:i$1,scale:y,weight:200}),light:a({family:i$1,scale:y,weight:300}),normal:a({family:i$1,scale:y,weight:400}),medium:a({family:i$1,scale:y,weight:500}),semibold:a({family:i$1,scale:y,weight:600}),bold:a({family:i$1,scale:y,weight:700}),xbold:a({family:i$1,scale:y,weight:800}),black:a({family:i$1,scale:y,weight:900})},xl:{thin:a({family:i$1,scale:n$1,weight:100}),xlight:a({family:i$1,scale:n$1,weight:200}),light:a({family:i$1,scale:n$1,weight:300}),normal:a({family:i$1,scale:n$1,weight:400}),medium:a({family:i$1,scale:n$1,weight:500}),semibold:a({family:i$1,scale:n$1,weight:600}),bold:a({family:i$1,scale:n$1,weight:700}),xbold:a({family:i$1,scale:n$1,weight:800}),black:a({family:i$1,scale:n$1,weight:900})},"2xl":{thin:a({family:i$1,scale:r,weight:100}),xlight:a({family:i$1,scale:r,weight:200}),light:a({family:i$1,scale:r,weight:300}),normal:a({family:i$1,scale:r,weight:400}),medium:a({family:i$1,scale:r,weight:500}),semibold:a({family:i$1,scale:r,weight:600}),bold:a({family:i$1,scale:r,weight:700}),xbold:a({family:i$1,scale:r,weight:800}),black:a({family:i$1,scale:r,weight:900})},"3xl":{thin:a({family:i$1,scale:h$1,weight:100}),xlight:a({family:i$1,scale:h$1,weight:200}),light:a({family:i$1,scale:h$1,weight:300}),normal:a({family:i$1,scale:h$1,weight:400}),medium:a({family:i$1,scale:h$1,weight:500}),semibold:a({family:i$1,scale:h$1,weight:600}),bold:a({family:i$1,scale:h$1,weight:700}),xbold:a({family:i$1,scale:h$1,weight:800}),black:a({family:i$1,scale:h$1,weight:900})},"4xl":{thin:a({family:i$1,scale:f$1,weight:100}),xlight:a({family:i$1,scale:f$1,weight:200}),light:a({family:i$1,scale:f$1,weight:300}),normal:a({family:i$1,scale:f$1,weight:400}),medium:a({family:i$1,scale:f$1,weight:500}),semibold:a({family:i$1,scale:f$1,weight:600}),bold:a({family:i$1,scale:f$1,weight:700}),xbold:a({family:i$1,scale:f$1,weight:800}),black:a({family:i$1,scale:f$1,weight:900})},"5xl":{thin:a({family:i$1,scale:d$1,weight:100}),xlight:a({family:i$1,scale:d$1,weight:200}),light:a({family:i$1,scale:d$1,weight:300}),normal:a({family:i$1,scale:d$1,weight:400}),medium:a({family:i$1,scale:d$1,weight:500}),semibold:a({family:i$1,scale:d$1,weight:600}),bold:a({family:i$1,scale:d$1,weight:700}),xbold:a({family:i$1,scale:d$1,weight:800}),black:a({family:i$1,scale:d$1,weight:900})},"6xl":{thin:a({family:i$1,scale:p$1,weight:100}),xlight:a({family:i$1,scale:p$1,weight:200}),light:a({family:i$1,scale:p$1,weight:300}),normal:a({family:i$1,scale:p$1,weight:400}),medium:a({family:i$1,scale:p$1,weight:500}),semibold:a({family:i$1,scale:p$1,weight:600}),bold:a({family:i$1,scale:p$1,weight:700}),xbold:a({family:i$1,scale:p$1,weight:800}),black:a({family:i$1,scale:p$1,weight:900})},"7xl":{thin:a({family:i$1,scale:w,weight:100}),xlight:a({family:i$1,scale:w,weight:200}),light:a({family:i$1,scale:w,weight:300}),normal:a({family:i$1,scale:w,weight:400}),medium:a({family:i$1,scale:w,weight:500}),semibold:a({family:i$1,scale:w,weight:600}),bold:a({family:i$1,scale:w,weight:700}),xbold:a({family:i$1,scale:w,weight:800}),black:a({family:i$1,scale:w,weight:900})},"8xl":{thin:a({family:i$1,scale:u,weight:100}),xlight:a({family:i$1,scale:u,weight:200}),light:a({family:i$1,scale:u,weight:300}),normal:a({family:i$1,scale:u,weight:400}),medium:a({family:i$1,scale:u,weight:500}),semibold:a({family:i$1,scale:u,weight:600}),bold:a({family:i$1,scale:u,weight:700}),xbold:a({family:i$1,scale:u,weight:800}),black:a({family:i$1,scale:u,weight:900})},"9xl":{thin:a({family:i$1,scale:x,weight:100}),xlight:a({family:i$1,scale:x,weight:200}),light:a({family:i$1,scale:x,weight:300}),normal:a({family:i$1,scale:x,weight:400}),medium:a({family:i$1,scale:x,weight:500}),semibold:a({family:i$1,scale:x,weight:600}),bold:a({family:i$1,scale:x,weight:700}),xbold:a({family:i$1,scale:x,weight:800}),black:a({family:i$1,scale:x,weight:900})}},supporting:{xs:{thin:a({family:t,scale:c$1,weight:100}),xlight:a({family:t,scale:c$1,weight:200}),light:a({family:t,scale:c$1,weight:300}),normal:a({family:t,scale:c$1,weight:400}),medium:a({family:t,scale:c$1,weight:500}),semibold:a({family:t,scale:c$1,weight:600}),bold:a({family:t,scale:c$1,weight:700}),xbold:a({family:t,scale:c$1,weight:800}),black:a({family:t,scale:c$1,weight:900})},sm:{thin:a({family:t,scale:s,weight:100}),xlight:a({family:t,scale:s,weight:200}),light:a({family:t,scale:s,weight:300}),normal:a({family:t,scale:s,weight:400}),medium:a({family:t,scale:s,weight:500}),semibold:a({family:t,scale:s,weight:600}),bold:a({family:t,scale:s,weight:700}),xbold:a({family:t,scale:s,weight:800}),black:a({family:t,scale:s,weight:900})},md:{thin:a({family:t,scale:o$1,weight:100}),xlight:a({family:t,scale:o$1,weight:200}),light:a({family:t,scale:o$1,weight:300}),normal:a({family:t,scale:o$1,weight:400}),medium:a({family:t,scale:o$1,weight:500}),semibold:a({family:t,scale:o$1,weight:600}),bold:a({family:t,scale:o$1,weight:700}),xbold:a({family:t,scale:o$1,weight:800}),black:a({family:t,scale:o$1,weight:900})},lg:{thin:a({family:t,scale:y,weight:100}),xlight:a({family:t,scale:y,weight:200}),light:a({family:t,scale:y,weight:300}),normal:a({family:t,scale:y,weight:400}),medium:a({family:t,scale:y,weight:500}),semibold:a({family:t,scale:y,weight:600}),bold:a({family:t,scale:y,weight:700}),xbold:a({family:t,scale:y,weight:800}),black:a({family:t,scale:y,weight:900})},xl:{thin:a({family:t,scale:n$1,weight:100}),xlight:a({family:t,scale:n$1,weight:200}),light:a({family:t,scale:n$1,weight:300}),normal:a({family:t,scale:n$1,weight:400}),medium:a({family:t,scale:n$1,weight:500}),semibold:a({family:t,scale:n$1,weight:600}),bold:a({family:t,scale:n$1,weight:700}),xbold:a({family:t,scale:n$1,weight:800}),black:a({family:t,scale:n$1,weight:900})},"2xl":{thin:a({family:t,scale:r,weight:100}),xlight:a({family:t,scale:r,weight:200}),light:a({family:t,scale:r,weight:300}),normal:a({family:t,scale:r,weight:400}),medium:a({family:t,scale:r,weight:500}),semibold:a({family:t,scale:r,weight:600}),bold:a({family:t,scale:r,weight:700}),xbold:a({family:t,scale:r,weight:800}),black:a({family:t,scale:r,weight:900})},"3xl":{thin:a({family:t,scale:h$1,weight:100}),xlight:a({family:t,scale:h$1,weight:200}),light:a({family:t,scale:h$1,weight:300}),normal:a({family:t,scale:h$1,weight:400}),medium:a({family:t,scale:h$1,weight:500}),semibold:a({family:t,scale:h$1,weight:600}),bold:a({family:t,scale:h$1,weight:700}),xbold:a({family:t,scale:h$1,weight:800}),black:a({family:t,scale:h$1,weight:900})},"4xl":{thin:a({family:t,scale:f$1,weight:100}),xlight:a({family:t,scale:f$1,weight:200}),light:a({family:t,scale:f$1,weight:300}),normal:a({family:t,scale:f$1,weight:400}),medium:a({family:t,scale:f$1,weight:500}),semibold:a({family:t,scale:f$1,weight:600}),bold:a({family:t,scale:f$1,weight:700}),xbold:a({family:t,scale:f$1,weight:800}),black:a({family:t,scale:f$1,weight:900})},"5xl":{thin:a({family:t,scale:d$1,weight:100}),xlight:a({family:t,scale:d$1,weight:200}),light:a({family:t,scale:d$1,weight:300}),normal:a({family:t,scale:d$1,weight:400}),medium:a({family:t,scale:d$1,weight:500}),semibold:a({family:t,scale:d$1,weight:600}),bold:a({family:t,scale:d$1,weight:700}),xbold:a({family:t,scale:d$1,weight:800}),black:a({family:t,scale:d$1,weight:900})},"6xl":{thin:a({family:t,scale:p$1,weight:100}),xlight:a({family:t,scale:p$1,weight:200}),light:a({family:t,scale:p$1,weight:300}),normal:a({family:t,scale:p$1,weight:400}),medium:a({family:t,scale:p$1,weight:500}),semibold:a({family:t,scale:p$1,weight:600}),bold:a({family:t,scale:p$1,weight:700}),xbold:a({family:t,scale:p$1,weight:800}),black:a({family:t,scale:p$1,weight:900})},"7xl":{thin:a({family:t,scale:w,weight:100}),xlight:a({family:t,scale:w,weight:200}),light:a({family:t,scale:w,weight:300}),normal:a({family:t,scale:w,weight:400}),medium:a({family:t,scale:w,weight:500}),semibold:a({family:t,scale:w,weight:600}),bold:a({family:t,scale:w,weight:700}),xbold:a({family:t,scale:w,weight:800}),black:a({family:t,scale:w,weight:900})},"8xl":{thin:a({family:t,scale:u,weight:100}),xlight:a({family:t,scale:u,weight:200}),light:a({family:t,scale:u,weight:300}),normal:a({family:t,scale:u,weight:400}),medium:a({family:t,scale:u,weight:500}),semibold:a({family:t,scale:u,weight:600}),bold:a({family:t,scale:u,weight:700}),xbold:a({family:t,scale:u,weight:800}),black:a({family:t,scale:u,weight:900})},"9xl":{thin:a({family:t,scale:x,weight:100}),xlight:a({family:t,scale:x,weight:200}),light:a({family:t,scale:x,weight:300}),normal:a({family:t,scale:x,weight:400}),medium:a({family:t,scale:x,weight:500}),semibold:a({family:t,scale:x,weight:600}),bold:a({family:t,scale:x,weight:700}),xbold:a({family:t,scale:x,weight:800}),black:a({family:t,scale:x,weight:900})}},accent:{xs:{thin:a({family:l$1,scale:c$1,weight:100}),xlight:a({family:l$1,scale:c$1,weight:200}),light:a({family:l$1,scale:c$1,weight:300}),normal:a({family:l$1,scale:c$1,weight:400}),medium:a({family:l$1,scale:c$1,weight:500}),semibold:a({family:l$1,scale:c$1,weight:600}),bold:a({family:l$1,scale:c$1,weight:700}),xbold:a({family:l$1,scale:c$1,weight:800}),black:a({family:l$1,scale:c$1,weight:900})},sm:{thin:a({family:l$1,scale:s,weight:100}),xlight:a({family:l$1,scale:s,weight:200}),light:a({family:l$1,scale:s,weight:300}),normal:a({family:l$1,scale:s,weight:400}),medium:a({family:l$1,scale:s,weight:500}),semibold:a({family:l$1,scale:s,weight:600}),bold:a({family:l$1,scale:s,weight:700}),xbold:a({family:l$1,scale:s,weight:800}),black:a({family:l$1,scale:s,weight:900})},md:{thin:a({family:l$1,scale:o$1,weight:100}),xlight:a({family:l$1,scale:o$1,weight:200}),light:a({family:l$1,scale:o$1,weight:300}),normal:a({family:l$1,scale:o$1,weight:400}),medium:a({family:l$1,scale:o$1,weight:500}),semibold:a({family:l$1,scale:o$1,weight:600}),bold:a({family:l$1,scale:o$1,weight:700}),xbold:a({family:l$1,scale:o$1,weight:800}),black:a({family:l$1,scale:o$1,weight:900})},lg:{thin:a({family:l$1,scale:y,weight:100}),xlight:a({family:l$1,scale:y,weight:200}),light:a({family:l$1,scale:y,weight:300}),normal:a({family:l$1,scale:y,weight:400}),medium:a({family:l$1,scale:y,weight:500}),semibold:a({family:l$1,scale:y,weight:600}),bold:a({family:l$1,scale:y,weight:700}),xbold:a({family:l$1,scale:y,weight:800}),black:a({family:l$1,scale:y,weight:900})},xl:{thin:a({family:l$1,scale:n$1,weight:100}),xlight:a({family:l$1,scale:n$1,weight:200}),light:a({family:l$1,scale:n$1,weight:300}),normal:a({family:l$1,scale:n$1,weight:400}),medium:a({family:l$1,scale:n$1,weight:500}),semibold:a({family:l$1,scale:n$1,weight:600}),bold:a({family:l$1,scale:n$1,weight:700}),xbold:a({family:l$1,scale:n$1,weight:800}),black:a({family:l$1,scale:n$1,weight:900})},"2xl":{thin:a({family:l$1,scale:r,weight:100}),xlight:a({family:l$1,scale:r,weight:200}),light:a({family:l$1,scale:r,weight:300}),normal:a({family:l$1,scale:r,weight:400}),medium:a({family:l$1,scale:r,weight:500}),semibold:a({family:l$1,scale:r,weight:600}),bold:a({family:l$1,scale:r,weight:700}),xbold:a({family:l$1,scale:r,weight:800}),black:a({family:l$1,scale:r,weight:900})},"3xl":{thin:a({family:l$1,scale:h$1,weight:100}),xlight:a({family:l$1,scale:h$1,weight:200}),light:a({family:l$1,scale:h$1,weight:300}),normal:a({family:l$1,scale:h$1,weight:400}),medium:a({family:l$1,scale:h$1,weight:500}),semibold:a({family:l$1,scale:h$1,weight:600}),bold:a({family:l$1,scale:h$1,weight:700}),xbold:a({family:l$1,scale:h$1,weight:800}),black:a({family:l$1,scale:h$1,weight:900})},"4xl":{thin:a({family:l$1,scale:f$1,weight:100}),xlight:a({family:l$1,scale:f$1,weight:200}),light:a({family:l$1,scale:f$1,weight:300}),normal:a({family:l$1,scale:f$1,weight:400}),medium:a({family:l$1,scale:f$1,weight:500}),semibold:a({family:l$1,scale:f$1,weight:600}),bold:a({family:l$1,scale:f$1,weight:700}),xbold:a({family:l$1,scale:f$1,weight:800}),black:a({family:l$1,scale:f$1,weight:900})},"5xl":{thin:a({family:l$1,scale:d$1,weight:100}),xlight:a({family:l$1,scale:d$1,weight:200}),light:a({family:l$1,scale:d$1,weight:300}),normal:a({family:l$1,scale:d$1,weight:400}),medium:a({family:l$1,scale:d$1,weight:500}),semibold:a({family:l$1,scale:d$1,weight:600}),bold:a({family:l$1,scale:d$1,weight:700}),xbold:a({family:l$1,scale:d$1,weight:800}),black:a({family:l$1,scale:d$1,weight:900})},"6xl":{thin:a({family:l$1,scale:p$1,weight:100}),xlight:a({family:l$1,scale:p$1,weight:200}),light:a({family:i$1,scale:l$1,weight:300}),normal:a({family:l$1,scale:p$1,weight:400}),medium:a({family:l$1,scale:p$1,weight:500}),semibold:a({family:l$1,scale:p$1,weight:600}),bold:a({family:l$1,scale:p$1,weight:700}),xbold:a({family:l$1,scale:p$1,weight:800}),black:a({family:l$1,scale:p$1,weight:900})},"7xl":{thin:a({family:l$1,scale:w,weight:100}),xlight:a({family:l$1,scale:w,weight:200}),light:a({family:l$1,scale:w,weight:300}),normal:a({family:l$1,scale:w,weight:400}),medium:a({family:l$1,scale:w,weight:500}),semibold:a({family:l$1,scale:w,weight:600}),bold:a({family:l$1,scale:w,weight:700}),xbold:a({family:l$1,scale:w,weight:800}),black:a({family:l$1,scale:w,weight:900})},"8xl":{thin:a({family:l$1,scale:u,weight:100}),xlight:a({family:l$1,scale:u,weight:200}),light:a({family:l$1,scale:u,weight:300}),normal:a({family:l$1,scale:u,weight:400}),medium:a({family:l$1,scale:u,weight:500}),semibold:a({family:l$1,scale:u,weight:600}),bold:a({family:l$1,scale:u,weight:700}),xbold:a({family:l$1,scale:u,weight:800}),black:a({family:l$1,scale:u,weight:900})},"9xl":{thin:a({family:l$1,scale:x,weight:100}),xlight:a({family:l$1,scale:x,weight:200}),light:a({family:l$1,scale:x,weight:300}),normal:a({family:l$1,scale:x,weight:400}),medium:a({family:l$1,scale:x,weight:500}),semibold:a({family:l$1,scale:x,weight:600}),bold:a({family:l$1,scale:x,weight:700}),xbold:a({family:l$1,scale:x,weight:800}),black:a({family:l$1,scale:x,weight:900})}}}};var U=({base:m,config:a})=>({external_resources:a?.external_resources?X({base:m.external_resources,config:a?.external_resources?a.external_resources:[]}):m.external_resources,fonts:a?.fonts?j({base:m.fonts,config:a?.fonts?a.fonts:{}}):m.fonts});var b=({base:m,config:a})=>{let i=g(a,m.tint_500,["tint_500"]),l=m.tint_500!=i,t=g(a,l?i:m.tint_400,["tint_400"]),o=g(a,l?t:m.tint_300,["tint_300"]),s=g(a,l?o:m.tint_200,["tint_200"]),c=g(a,l?s:m.tint_100,["tint_100"]),y=g(a,l?c:m.tint_50,["tint_50"]),n=g(a,l?i:m.tint_600,["tint_600"]),r=g(a,l?n:m.tint_700,["tint_700"]),h=g(a,l?r:m.tint_800,["tint_800"]),f=g(a,l?h:m.tint_900,["tint_900"]),d=g(a,l?f:m.tint_950,["tint_950"]);return {tint_50:y,tint_100:c,tint_200:s,tint_300:o,tint_400:t,tint_500:i,tint_600:n,tint_700:r,tint_800:h,tint_900:f,tint_950:d}};var K=({base:m,config:a})=>a||m;var G=({base:m,config:a})=>({danger:b({base:m.danger,config:a.danger?a.danger:{}}),warning:b({base:m.warning,config:a.warning?a.warning:{}}),success:b({base:m.success,config:a.success?a.success:{}}),info:b({base:m.info,config:a.info?a.info:{}}),neutrals:b({base:m.neutrals,config:a.neutrals?a.neutrals:{}}),surfaces:b({base:m.surfaces,config:a.surfaces?a.surfaces:{}}),skeletons:b({base:m.skeletons,config:a.skeletons?a.skeletons:{}}),primary:b({base:m.primary,config:a.primary?a.primary:{}}),accent:b({base:m.accent,config:a.accent?a.accent:{}}),accent2:b({base:m.accent2,config:a.accent2?a.accent2:a.accent?a.accent:{}}),accent3:b({base:m.accent3,config:a.accent3?a.accent3:a.accent?a.accent:{}}),accent4:b({base:m.accent4,config:a.accent4?a.accent4:a.accent?a.accent:{}}),accent5:b({base:m.accent5,config:a.accent5?a.accent5:a.accent?a.accent:{}}),supporting:b({base:m.supporting,config:a.supporting?a.supporting:{}}),additional:K({base:m.additional,config:a?.additional?a.additional:[]})});var q=({base:m,config:a})=>({none:m.none,xs:a?a.xs:m.xs,sm:a?a.sm:m.sm,md:a?a.md:m.md,lg:a?a.lg:m.lg,xl:a?a.xl:m.xl,"2xl":a?a["2xl"]:m["2xl"],"3xl":a?a["3xl"]:m["3xl"],full:"9999px"});var Y=({base:m,config:a})=>({none:"0 0 #0000",xs:a?a.xs:m.xs,sm:a?a.sm:m.sm,md:a?a.md:m.md,lg:a?a.lg:m.lg,xl:a?a.xl:m.xl,"2xl":a?a["2xl"]:m["2xl"]});var te=({config:m})=>({settings:m?.settings?m.settings:r.settings,alternate:N({base:r.alternate,config:m?.alternate?m.alternate:[]}),typography:m?.typography?U({base:r.typography,config:m.typography?m.typography:{}}):r.typography,colors:m?.colors?G({base:r.colors,config:m.colors?m.colors:{}}):r.colors,utility:r.utility,radius:q({base:r.radius,config:m.radius}),shadow:Y({base:r.shadow,config:m.shadow})});var k=(l=>(l.STANDARD="STANDARD",l.INVERTED="INVERTED",l.CONTRAST="CONTRAST",l))(k||{});(i=>{function m(l,t){return Object.values(i).includes(l)?l:t}i.from=m;function a(l){return Object.values(i).includes(l)?l:null}i.tryFrom=a;})(k||={});var me=createContext("STANDARD");var S=({name:m,alternates:a})=>{let i=a.find(l=>l.name===m);return i&&i.theme};var oe=({component:m,font:a,default:i})=>{let l=t(),t$1=S({name:m,alternates:l.alternate}),o={Color:"inherit",BackgroundColor:"transparent",Border:{Color:"transparent",Width:0,Style:"solid"},FontWeightAdjustment:0},s=(r,h)=>({Color:h?.Color||r?.Color||o.Color,BackgroundColor:h?.BackgroundColor||r?.BackgroundColor||o.BackgroundColor,Border:se(h?.Border?.Width||r?.Border?.Width||o.Border.Width,h?.Border?.Color||r?.Border?.Color||o.Border.Color,h?.Border?.Style||r?.Border?.Style||o.Border.Style),Font:re(a,h?.FontWeightAdjustment||r?.FontWeightAdjustment||o.FontWeightAdjustment)}),c=s(i?.Init,t$1?.Init),y=s(i?.Hover===void 0&&i?.Init?i?.Init:i?.Hover,t$1?.Hover),n=s(i?.Active===void 0&&i?.Init?i?.Init:i?.Active,t$1?.Active);return {Init:c,Hover:y,Active:n}},se=(m,a,i)=>{let l=i||"solid";return m+"px "+l+" "+a},re=(m,a)=>{let i=[100,200,300,400,500,600,700,800,900],l=m.match(/(\d+)/);if(!l)return m;let t=parseInt(l[0],10),o=i.indexOf(t);if(o===-1)return m;let s=o+a/100;s=Math.max(0,Math.min(i.length-1,s));let c=i[s];return m.replace(/(\d+)/,String(c))};var ce=m=>{try{return useContext(s).settings[m]??null}catch{return null}};var ne=()=>t().radius;var ge=()=>t().utility;var ye=()=>t().shadow;var fe=m=>{let a=({children:i})=>jsxs(Fragment,{children:[" ",i," "]});return m.reduce((i,[l,t={}])=>({children:o})=>jsx(i,{children:jsx(l,{...t,children:o})}),a)};var xe=m=>{let{children:a,sheets:i}=m;return useEffect(()=>{i.map(function(l){let t=document.createElement("link");t.rel="stylesheet",t.href=l,document.head.appendChild(t);});},[i]),a??null};var pe=({name:m,colors:a,fallback:i})=>{let l=a.find(t=>t.name===m);return l?l.color:i};export{fe as BuildProvidersTree,xe as ExternalStylesheetLoader,pe as LookupAdditionalColor,S as LookupAlternateTheme,ee as StyleProviderAnimation,ie as StyleProviderPreFlight,te as ThemeBuilder,k as ThemeMode,me as ThemeModeCtx,g as orDefault,oe as useAlternateTheme,ne as useThemeRadius,ce as useThemeSetting,ye as useThemeShadow,ge as useThemeUtility};//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map