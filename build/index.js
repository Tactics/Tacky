'use strict';var chunk3L3JUG34_js=require('./chunk-3L3JUG34.js'),styledComponents=require('styled-components'),react=require('react'),jsxRuntime=require('react/jsx-runtime');var Z=styledComponents.createGlobalStyle`
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
`;var le=styledComponents.createGlobalStyle`
    
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
`;var ie=styledComponents.createGlobalStyle`
    
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
`;var N=({base:m,config:i})=>i||m;var X=({base:m,config:i})=>i||m;function f(m,i,t){let l=m;for(let a of t)if(l=l?.[a]??i,l==null)break;return l}var H=({base:m,config:i})=>{let t=f(i,chunk3L3JUG34_js.b,["family","primary"]),l=f(i,f(i,chunk3L3JUG34_js.c,["family","primary"]),["family","accent"]),a=f(i,f(i,chunk3L3JUG34_js.d,["family","primary"]),["family","supporting"]),s=f(i,chunk3L3JUG34_js.g,["scale","md"]),h=f(i,chunk3L3JUG34_js.f,["scale","sm"]),c=f(i,chunk3L3JUG34_js.e,["scale","xs"]),g=f(i,chunk3L3JUG34_js.h,["scale","lg"]),n=f(i,chunk3L3JUG34_js.i,["scale","xl"]),o=f(i,chunk3L3JUG34_js.j,["scale","2xl"]),r=f(i,chunk3L3JUG34_js.k,["scale","3xl"]),y=f(i,chunk3L3JUG34_js.l,["scale","4xl"]),w=f(i,chunk3L3JUG34_js.m,["scale","5xl"]),b=f(i,chunk3L3JUG34_js.n,["scale","6xl"]),d=f(i,chunk3L3JUG34_js.o,["scale","7xl"]),u=f(i,chunk3L3JUG34_js.p,["scale","8xl"]),x=f(i,chunk3L3JUG34_js.q,["scale","9xl"]);return {primary:{xs:{thin:chunk3L3JUG34_js.a({family:t,scale:c,weight:100}),xlight:chunk3L3JUG34_js.a({family:t,scale:c,weight:200}),light:chunk3L3JUG34_js.a({family:t,scale:c,weight:300}),normal:chunk3L3JUG34_js.a({family:t,scale:c,weight:400}),medium:chunk3L3JUG34_js.a({family:t,scale:c,weight:500}),semibold:chunk3L3JUG34_js.a({family:t,scale:c,weight:600}),bold:chunk3L3JUG34_js.a({family:t,scale:c,weight:700}),xbold:chunk3L3JUG34_js.a({family:t,scale:c,weight:800}),black:chunk3L3JUG34_js.a({family:t,scale:c,weight:900})},sm:{thin:chunk3L3JUG34_js.a({family:t,scale:h,weight:100}),xlight:chunk3L3JUG34_js.a({family:t,scale:h,weight:200}),light:chunk3L3JUG34_js.a({family:t,scale:h,weight:300}),normal:chunk3L3JUG34_js.a({family:t,scale:h,weight:400}),medium:chunk3L3JUG34_js.a({family:t,scale:h,weight:500}),semibold:chunk3L3JUG34_js.a({family:t,scale:h,weight:600}),bold:chunk3L3JUG34_js.a({family:t,scale:h,weight:700}),xbold:chunk3L3JUG34_js.a({family:t,scale:h,weight:800}),black:chunk3L3JUG34_js.a({family:t,scale:h,weight:900})},md:{thin:chunk3L3JUG34_js.a({family:t,scale:s,weight:100}),xlight:chunk3L3JUG34_js.a({family:t,scale:s,weight:200}),light:chunk3L3JUG34_js.a({family:t,scale:s,weight:300}),normal:chunk3L3JUG34_js.a({family:t,scale:s,weight:400}),medium:chunk3L3JUG34_js.a({family:t,scale:s,weight:500}),semibold:chunk3L3JUG34_js.a({family:t,scale:s,weight:600}),bold:chunk3L3JUG34_js.a({family:t,scale:s,weight:700}),xbold:chunk3L3JUG34_js.a({family:t,scale:s,weight:800}),black:chunk3L3JUG34_js.a({family:t,scale:s,weight:900})},lg:{thin:chunk3L3JUG34_js.a({family:t,scale:g,weight:100}),xlight:chunk3L3JUG34_js.a({family:t,scale:g,weight:200}),light:chunk3L3JUG34_js.a({family:t,scale:g,weight:300}),normal:chunk3L3JUG34_js.a({family:t,scale:g,weight:400}),medium:chunk3L3JUG34_js.a({family:t,scale:g,weight:500}),semibold:chunk3L3JUG34_js.a({family:t,scale:g,weight:600}),bold:chunk3L3JUG34_js.a({family:t,scale:g,weight:700}),xbold:chunk3L3JUG34_js.a({family:t,scale:g,weight:800}),black:chunk3L3JUG34_js.a({family:t,scale:g,weight:900})},xl:{thin:chunk3L3JUG34_js.a({family:t,scale:n,weight:100}),xlight:chunk3L3JUG34_js.a({family:t,scale:n,weight:200}),light:chunk3L3JUG34_js.a({family:t,scale:n,weight:300}),normal:chunk3L3JUG34_js.a({family:t,scale:n,weight:400}),medium:chunk3L3JUG34_js.a({family:t,scale:n,weight:500}),semibold:chunk3L3JUG34_js.a({family:t,scale:n,weight:600}),bold:chunk3L3JUG34_js.a({family:t,scale:n,weight:700}),xbold:chunk3L3JUG34_js.a({family:t,scale:n,weight:800}),black:chunk3L3JUG34_js.a({family:t,scale:n,weight:900})},"2xl":{thin:chunk3L3JUG34_js.a({family:t,scale:o,weight:100}),xlight:chunk3L3JUG34_js.a({family:t,scale:o,weight:200}),light:chunk3L3JUG34_js.a({family:t,scale:o,weight:300}),normal:chunk3L3JUG34_js.a({family:t,scale:o,weight:400}),medium:chunk3L3JUG34_js.a({family:t,scale:o,weight:500}),semibold:chunk3L3JUG34_js.a({family:t,scale:o,weight:600}),bold:chunk3L3JUG34_js.a({family:t,scale:o,weight:700}),xbold:chunk3L3JUG34_js.a({family:t,scale:o,weight:800}),black:chunk3L3JUG34_js.a({family:t,scale:o,weight:900})},"3xl":{thin:chunk3L3JUG34_js.a({family:t,scale:r,weight:100}),xlight:chunk3L3JUG34_js.a({family:t,scale:r,weight:200}),light:chunk3L3JUG34_js.a({family:t,scale:r,weight:300}),normal:chunk3L3JUG34_js.a({family:t,scale:r,weight:400}),medium:chunk3L3JUG34_js.a({family:t,scale:r,weight:500}),semibold:chunk3L3JUG34_js.a({family:t,scale:r,weight:600}),bold:chunk3L3JUG34_js.a({family:t,scale:r,weight:700}),xbold:chunk3L3JUG34_js.a({family:t,scale:r,weight:800}),black:chunk3L3JUG34_js.a({family:t,scale:r,weight:900})},"4xl":{thin:chunk3L3JUG34_js.a({family:t,scale:y,weight:100}),xlight:chunk3L3JUG34_js.a({family:t,scale:y,weight:200}),light:chunk3L3JUG34_js.a({family:t,scale:y,weight:300}),normal:chunk3L3JUG34_js.a({family:t,scale:y,weight:400}),medium:chunk3L3JUG34_js.a({family:t,scale:y,weight:500}),semibold:chunk3L3JUG34_js.a({family:t,scale:y,weight:600}),bold:chunk3L3JUG34_js.a({family:t,scale:y,weight:700}),xbold:chunk3L3JUG34_js.a({family:t,scale:y,weight:800}),black:chunk3L3JUG34_js.a({family:t,scale:y,weight:900})},"5xl":{thin:chunk3L3JUG34_js.a({family:t,scale:w,weight:100}),xlight:chunk3L3JUG34_js.a({family:t,scale:w,weight:200}),light:chunk3L3JUG34_js.a({family:t,scale:w,weight:300}),normal:chunk3L3JUG34_js.a({family:t,scale:w,weight:400}),medium:chunk3L3JUG34_js.a({family:t,scale:w,weight:500}),semibold:chunk3L3JUG34_js.a({family:t,scale:w,weight:600}),bold:chunk3L3JUG34_js.a({family:t,scale:w,weight:700}),xbold:chunk3L3JUG34_js.a({family:t,scale:w,weight:800}),black:chunk3L3JUG34_js.a({family:t,scale:w,weight:900})},"6xl":{thin:chunk3L3JUG34_js.a({family:t,scale:b,weight:100}),xlight:chunk3L3JUG34_js.a({family:t,scale:b,weight:200}),light:chunk3L3JUG34_js.a({family:t,scale:b,weight:300}),normal:chunk3L3JUG34_js.a({family:t,scale:b,weight:400}),medium:chunk3L3JUG34_js.a({family:t,scale:b,weight:500}),semibold:chunk3L3JUG34_js.a({family:t,scale:b,weight:600}),bold:chunk3L3JUG34_js.a({family:t,scale:b,weight:700}),xbold:chunk3L3JUG34_js.a({family:t,scale:b,weight:800}),black:chunk3L3JUG34_js.a({family:t,scale:b,weight:900})},"7xl":{thin:chunk3L3JUG34_js.a({family:t,scale:d,weight:100}),xlight:chunk3L3JUG34_js.a({family:t,scale:d,weight:200}),light:chunk3L3JUG34_js.a({family:t,scale:d,weight:300}),normal:chunk3L3JUG34_js.a({family:t,scale:d,weight:400}),medium:chunk3L3JUG34_js.a({family:t,scale:d,weight:500}),semibold:chunk3L3JUG34_js.a({family:t,scale:d,weight:600}),bold:chunk3L3JUG34_js.a({family:t,scale:d,weight:700}),xbold:chunk3L3JUG34_js.a({family:t,scale:d,weight:800}),black:chunk3L3JUG34_js.a({family:t,scale:d,weight:900})},"8xl":{thin:chunk3L3JUG34_js.a({family:t,scale:u,weight:100}),xlight:chunk3L3JUG34_js.a({family:t,scale:u,weight:200}),light:chunk3L3JUG34_js.a({family:t,scale:u,weight:300}),normal:chunk3L3JUG34_js.a({family:t,scale:u,weight:400}),medium:chunk3L3JUG34_js.a({family:t,scale:u,weight:500}),semibold:chunk3L3JUG34_js.a({family:t,scale:u,weight:600}),bold:chunk3L3JUG34_js.a({family:t,scale:u,weight:700}),xbold:chunk3L3JUG34_js.a({family:t,scale:u,weight:800}),black:chunk3L3JUG34_js.a({family:t,scale:u,weight:900})},"9xl":{thin:chunk3L3JUG34_js.a({family:t,scale:x,weight:100}),xlight:chunk3L3JUG34_js.a({family:t,scale:x,weight:200}),light:chunk3L3JUG34_js.a({family:t,scale:x,weight:300}),normal:chunk3L3JUG34_js.a({family:t,scale:x,weight:400}),medium:chunk3L3JUG34_js.a({family:t,scale:x,weight:500}),semibold:chunk3L3JUG34_js.a({family:t,scale:x,weight:600}),bold:chunk3L3JUG34_js.a({family:t,scale:x,weight:700}),xbold:chunk3L3JUG34_js.a({family:t,scale:x,weight:800}),black:chunk3L3JUG34_js.a({family:t,scale:x,weight:900})}},supporting:{xs:{thin:chunk3L3JUG34_js.a({family:a,scale:c,weight:100}),xlight:chunk3L3JUG34_js.a({family:a,scale:c,weight:200}),light:chunk3L3JUG34_js.a({family:a,scale:c,weight:300}),normal:chunk3L3JUG34_js.a({family:a,scale:c,weight:400}),medium:chunk3L3JUG34_js.a({family:a,scale:c,weight:500}),semibold:chunk3L3JUG34_js.a({family:a,scale:c,weight:600}),bold:chunk3L3JUG34_js.a({family:a,scale:c,weight:700}),xbold:chunk3L3JUG34_js.a({family:a,scale:c,weight:800}),black:chunk3L3JUG34_js.a({family:a,scale:c,weight:900})},sm:{thin:chunk3L3JUG34_js.a({family:a,scale:h,weight:100}),xlight:chunk3L3JUG34_js.a({family:a,scale:h,weight:200}),light:chunk3L3JUG34_js.a({family:a,scale:h,weight:300}),normal:chunk3L3JUG34_js.a({family:a,scale:h,weight:400}),medium:chunk3L3JUG34_js.a({family:a,scale:h,weight:500}),semibold:chunk3L3JUG34_js.a({family:a,scale:h,weight:600}),bold:chunk3L3JUG34_js.a({family:a,scale:h,weight:700}),xbold:chunk3L3JUG34_js.a({family:a,scale:h,weight:800}),black:chunk3L3JUG34_js.a({family:a,scale:h,weight:900})},md:{thin:chunk3L3JUG34_js.a({family:a,scale:s,weight:100}),xlight:chunk3L3JUG34_js.a({family:a,scale:s,weight:200}),light:chunk3L3JUG34_js.a({family:a,scale:s,weight:300}),normal:chunk3L3JUG34_js.a({family:a,scale:s,weight:400}),medium:chunk3L3JUG34_js.a({family:a,scale:s,weight:500}),semibold:chunk3L3JUG34_js.a({family:a,scale:s,weight:600}),bold:chunk3L3JUG34_js.a({family:a,scale:s,weight:700}),xbold:chunk3L3JUG34_js.a({family:a,scale:s,weight:800}),black:chunk3L3JUG34_js.a({family:a,scale:s,weight:900})},lg:{thin:chunk3L3JUG34_js.a({family:a,scale:g,weight:100}),xlight:chunk3L3JUG34_js.a({family:a,scale:g,weight:200}),light:chunk3L3JUG34_js.a({family:a,scale:g,weight:300}),normal:chunk3L3JUG34_js.a({family:a,scale:g,weight:400}),medium:chunk3L3JUG34_js.a({family:a,scale:g,weight:500}),semibold:chunk3L3JUG34_js.a({family:a,scale:g,weight:600}),bold:chunk3L3JUG34_js.a({family:a,scale:g,weight:700}),xbold:chunk3L3JUG34_js.a({family:a,scale:g,weight:800}),black:chunk3L3JUG34_js.a({family:a,scale:g,weight:900})},xl:{thin:chunk3L3JUG34_js.a({family:a,scale:n,weight:100}),xlight:chunk3L3JUG34_js.a({family:a,scale:n,weight:200}),light:chunk3L3JUG34_js.a({family:a,scale:n,weight:300}),normal:chunk3L3JUG34_js.a({family:a,scale:n,weight:400}),medium:chunk3L3JUG34_js.a({family:a,scale:n,weight:500}),semibold:chunk3L3JUG34_js.a({family:a,scale:n,weight:600}),bold:chunk3L3JUG34_js.a({family:a,scale:n,weight:700}),xbold:chunk3L3JUG34_js.a({family:a,scale:n,weight:800}),black:chunk3L3JUG34_js.a({family:a,scale:n,weight:900})},"2xl":{thin:chunk3L3JUG34_js.a({family:a,scale:o,weight:100}),xlight:chunk3L3JUG34_js.a({family:a,scale:o,weight:200}),light:chunk3L3JUG34_js.a({family:a,scale:o,weight:300}),normal:chunk3L3JUG34_js.a({family:a,scale:o,weight:400}),medium:chunk3L3JUG34_js.a({family:a,scale:o,weight:500}),semibold:chunk3L3JUG34_js.a({family:a,scale:o,weight:600}),bold:chunk3L3JUG34_js.a({family:a,scale:o,weight:700}),xbold:chunk3L3JUG34_js.a({family:a,scale:o,weight:800}),black:chunk3L3JUG34_js.a({family:a,scale:o,weight:900})},"3xl":{thin:chunk3L3JUG34_js.a({family:a,scale:r,weight:100}),xlight:chunk3L3JUG34_js.a({family:a,scale:r,weight:200}),light:chunk3L3JUG34_js.a({family:a,scale:r,weight:300}),normal:chunk3L3JUG34_js.a({family:a,scale:r,weight:400}),medium:chunk3L3JUG34_js.a({family:a,scale:r,weight:500}),semibold:chunk3L3JUG34_js.a({family:a,scale:r,weight:600}),bold:chunk3L3JUG34_js.a({family:a,scale:r,weight:700}),xbold:chunk3L3JUG34_js.a({family:a,scale:r,weight:800}),black:chunk3L3JUG34_js.a({family:a,scale:r,weight:900})},"4xl":{thin:chunk3L3JUG34_js.a({family:a,scale:y,weight:100}),xlight:chunk3L3JUG34_js.a({family:a,scale:y,weight:200}),light:chunk3L3JUG34_js.a({family:a,scale:y,weight:300}),normal:chunk3L3JUG34_js.a({family:a,scale:y,weight:400}),medium:chunk3L3JUG34_js.a({family:a,scale:y,weight:500}),semibold:chunk3L3JUG34_js.a({family:a,scale:y,weight:600}),bold:chunk3L3JUG34_js.a({family:a,scale:y,weight:700}),xbold:chunk3L3JUG34_js.a({family:a,scale:y,weight:800}),black:chunk3L3JUG34_js.a({family:a,scale:y,weight:900})},"5xl":{thin:chunk3L3JUG34_js.a({family:a,scale:w,weight:100}),xlight:chunk3L3JUG34_js.a({family:a,scale:w,weight:200}),light:chunk3L3JUG34_js.a({family:a,scale:w,weight:300}),normal:chunk3L3JUG34_js.a({family:a,scale:w,weight:400}),medium:chunk3L3JUG34_js.a({family:a,scale:w,weight:500}),semibold:chunk3L3JUG34_js.a({family:a,scale:w,weight:600}),bold:chunk3L3JUG34_js.a({family:a,scale:w,weight:700}),xbold:chunk3L3JUG34_js.a({family:a,scale:w,weight:800}),black:chunk3L3JUG34_js.a({family:a,scale:w,weight:900})},"6xl":{thin:chunk3L3JUG34_js.a({family:a,scale:b,weight:100}),xlight:chunk3L3JUG34_js.a({family:a,scale:b,weight:200}),light:chunk3L3JUG34_js.a({family:a,scale:b,weight:300}),normal:chunk3L3JUG34_js.a({family:a,scale:b,weight:400}),medium:chunk3L3JUG34_js.a({family:a,scale:b,weight:500}),semibold:chunk3L3JUG34_js.a({family:a,scale:b,weight:600}),bold:chunk3L3JUG34_js.a({family:a,scale:b,weight:700}),xbold:chunk3L3JUG34_js.a({family:a,scale:b,weight:800}),black:chunk3L3JUG34_js.a({family:a,scale:b,weight:900})},"7xl":{thin:chunk3L3JUG34_js.a({family:a,scale:d,weight:100}),xlight:chunk3L3JUG34_js.a({family:a,scale:d,weight:200}),light:chunk3L3JUG34_js.a({family:a,scale:d,weight:300}),normal:chunk3L3JUG34_js.a({family:a,scale:d,weight:400}),medium:chunk3L3JUG34_js.a({family:a,scale:d,weight:500}),semibold:chunk3L3JUG34_js.a({family:a,scale:d,weight:600}),bold:chunk3L3JUG34_js.a({family:a,scale:d,weight:700}),xbold:chunk3L3JUG34_js.a({family:a,scale:d,weight:800}),black:chunk3L3JUG34_js.a({family:a,scale:d,weight:900})},"8xl":{thin:chunk3L3JUG34_js.a({family:a,scale:u,weight:100}),xlight:chunk3L3JUG34_js.a({family:a,scale:u,weight:200}),light:chunk3L3JUG34_js.a({family:a,scale:u,weight:300}),normal:chunk3L3JUG34_js.a({family:a,scale:u,weight:400}),medium:chunk3L3JUG34_js.a({family:a,scale:u,weight:500}),semibold:chunk3L3JUG34_js.a({family:a,scale:u,weight:600}),bold:chunk3L3JUG34_js.a({family:a,scale:u,weight:700}),xbold:chunk3L3JUG34_js.a({family:a,scale:u,weight:800}),black:chunk3L3JUG34_js.a({family:a,scale:u,weight:900})},"9xl":{thin:chunk3L3JUG34_js.a({family:a,scale:x,weight:100}),xlight:chunk3L3JUG34_js.a({family:a,scale:x,weight:200}),light:chunk3L3JUG34_js.a({family:a,scale:x,weight:300}),normal:chunk3L3JUG34_js.a({family:a,scale:x,weight:400}),medium:chunk3L3JUG34_js.a({family:a,scale:x,weight:500}),semibold:chunk3L3JUG34_js.a({family:a,scale:x,weight:600}),bold:chunk3L3JUG34_js.a({family:a,scale:x,weight:700}),xbold:chunk3L3JUG34_js.a({family:a,scale:x,weight:800}),black:chunk3L3JUG34_js.a({family:a,scale:x,weight:900})}},accent:{xs:{thin:chunk3L3JUG34_js.a({family:l,scale:c,weight:100}),xlight:chunk3L3JUG34_js.a({family:l,scale:c,weight:200}),light:chunk3L3JUG34_js.a({family:l,scale:c,weight:300}),normal:chunk3L3JUG34_js.a({family:l,scale:c,weight:400}),medium:chunk3L3JUG34_js.a({family:l,scale:c,weight:500}),semibold:chunk3L3JUG34_js.a({family:l,scale:c,weight:600}),bold:chunk3L3JUG34_js.a({family:l,scale:c,weight:700}),xbold:chunk3L3JUG34_js.a({family:l,scale:c,weight:800}),black:chunk3L3JUG34_js.a({family:l,scale:c,weight:900})},sm:{thin:chunk3L3JUG34_js.a({family:l,scale:h,weight:100}),xlight:chunk3L3JUG34_js.a({family:l,scale:h,weight:200}),light:chunk3L3JUG34_js.a({family:l,scale:h,weight:300}),normal:chunk3L3JUG34_js.a({family:l,scale:h,weight:400}),medium:chunk3L3JUG34_js.a({family:l,scale:h,weight:500}),semibold:chunk3L3JUG34_js.a({family:l,scale:h,weight:600}),bold:chunk3L3JUG34_js.a({family:l,scale:h,weight:700}),xbold:chunk3L3JUG34_js.a({family:l,scale:h,weight:800}),black:chunk3L3JUG34_js.a({family:l,scale:h,weight:900})},md:{thin:chunk3L3JUG34_js.a({family:l,scale:s,weight:100}),xlight:chunk3L3JUG34_js.a({family:l,scale:s,weight:200}),light:chunk3L3JUG34_js.a({family:l,scale:s,weight:300}),normal:chunk3L3JUG34_js.a({family:l,scale:s,weight:400}),medium:chunk3L3JUG34_js.a({family:l,scale:s,weight:500}),semibold:chunk3L3JUG34_js.a({family:l,scale:s,weight:600}),bold:chunk3L3JUG34_js.a({family:l,scale:s,weight:700}),xbold:chunk3L3JUG34_js.a({family:l,scale:s,weight:800}),black:chunk3L3JUG34_js.a({family:l,scale:s,weight:900})},lg:{thin:chunk3L3JUG34_js.a({family:l,scale:g,weight:100}),xlight:chunk3L3JUG34_js.a({family:l,scale:g,weight:200}),light:chunk3L3JUG34_js.a({family:l,scale:g,weight:300}),normal:chunk3L3JUG34_js.a({family:l,scale:g,weight:400}),medium:chunk3L3JUG34_js.a({family:l,scale:g,weight:500}),semibold:chunk3L3JUG34_js.a({family:l,scale:g,weight:600}),bold:chunk3L3JUG34_js.a({family:l,scale:g,weight:700}),xbold:chunk3L3JUG34_js.a({family:l,scale:g,weight:800}),black:chunk3L3JUG34_js.a({family:l,scale:g,weight:900})},xl:{thin:chunk3L3JUG34_js.a({family:l,scale:n,weight:100}),xlight:chunk3L3JUG34_js.a({family:l,scale:n,weight:200}),light:chunk3L3JUG34_js.a({family:l,scale:n,weight:300}),normal:chunk3L3JUG34_js.a({family:l,scale:n,weight:400}),medium:chunk3L3JUG34_js.a({family:l,scale:n,weight:500}),semibold:chunk3L3JUG34_js.a({family:l,scale:n,weight:600}),bold:chunk3L3JUG34_js.a({family:l,scale:n,weight:700}),xbold:chunk3L3JUG34_js.a({family:l,scale:n,weight:800}),black:chunk3L3JUG34_js.a({family:l,scale:n,weight:900})},"2xl":{thin:chunk3L3JUG34_js.a({family:l,scale:o,weight:100}),xlight:chunk3L3JUG34_js.a({family:l,scale:o,weight:200}),light:chunk3L3JUG34_js.a({family:l,scale:o,weight:300}),normal:chunk3L3JUG34_js.a({family:l,scale:o,weight:400}),medium:chunk3L3JUG34_js.a({family:l,scale:o,weight:500}),semibold:chunk3L3JUG34_js.a({family:l,scale:o,weight:600}),bold:chunk3L3JUG34_js.a({family:l,scale:o,weight:700}),xbold:chunk3L3JUG34_js.a({family:l,scale:o,weight:800}),black:chunk3L3JUG34_js.a({family:l,scale:o,weight:900})},"3xl":{thin:chunk3L3JUG34_js.a({family:l,scale:r,weight:100}),xlight:chunk3L3JUG34_js.a({family:l,scale:r,weight:200}),light:chunk3L3JUG34_js.a({family:l,scale:r,weight:300}),normal:chunk3L3JUG34_js.a({family:l,scale:r,weight:400}),medium:chunk3L3JUG34_js.a({family:l,scale:r,weight:500}),semibold:chunk3L3JUG34_js.a({family:l,scale:r,weight:600}),bold:chunk3L3JUG34_js.a({family:l,scale:r,weight:700}),xbold:chunk3L3JUG34_js.a({family:l,scale:r,weight:800}),black:chunk3L3JUG34_js.a({family:l,scale:r,weight:900})},"4xl":{thin:chunk3L3JUG34_js.a({family:l,scale:y,weight:100}),xlight:chunk3L3JUG34_js.a({family:l,scale:y,weight:200}),light:chunk3L3JUG34_js.a({family:l,scale:y,weight:300}),normal:chunk3L3JUG34_js.a({family:l,scale:y,weight:400}),medium:chunk3L3JUG34_js.a({family:l,scale:y,weight:500}),semibold:chunk3L3JUG34_js.a({family:l,scale:y,weight:600}),bold:chunk3L3JUG34_js.a({family:l,scale:y,weight:700}),xbold:chunk3L3JUG34_js.a({family:l,scale:y,weight:800}),black:chunk3L3JUG34_js.a({family:l,scale:y,weight:900})},"5xl":{thin:chunk3L3JUG34_js.a({family:l,scale:w,weight:100}),xlight:chunk3L3JUG34_js.a({family:l,scale:w,weight:200}),light:chunk3L3JUG34_js.a({family:l,scale:w,weight:300}),normal:chunk3L3JUG34_js.a({family:l,scale:w,weight:400}),medium:chunk3L3JUG34_js.a({family:l,scale:w,weight:500}),semibold:chunk3L3JUG34_js.a({family:l,scale:w,weight:600}),bold:chunk3L3JUG34_js.a({family:l,scale:w,weight:700}),xbold:chunk3L3JUG34_js.a({family:l,scale:w,weight:800}),black:chunk3L3JUG34_js.a({family:l,scale:w,weight:900})},"6xl":{thin:chunk3L3JUG34_js.a({family:l,scale:b,weight:100}),xlight:chunk3L3JUG34_js.a({family:l,scale:b,weight:200}),light:chunk3L3JUG34_js.a({family:t,scale:l,weight:300}),normal:chunk3L3JUG34_js.a({family:l,scale:b,weight:400}),medium:chunk3L3JUG34_js.a({family:l,scale:b,weight:500}),semibold:chunk3L3JUG34_js.a({family:l,scale:b,weight:600}),bold:chunk3L3JUG34_js.a({family:l,scale:b,weight:700}),xbold:chunk3L3JUG34_js.a({family:l,scale:b,weight:800}),black:chunk3L3JUG34_js.a({family:l,scale:b,weight:900})},"7xl":{thin:chunk3L3JUG34_js.a({family:l,scale:d,weight:100}),xlight:chunk3L3JUG34_js.a({family:l,scale:d,weight:200}),light:chunk3L3JUG34_js.a({family:l,scale:d,weight:300}),normal:chunk3L3JUG34_js.a({family:l,scale:d,weight:400}),medium:chunk3L3JUG34_js.a({family:l,scale:d,weight:500}),semibold:chunk3L3JUG34_js.a({family:l,scale:d,weight:600}),bold:chunk3L3JUG34_js.a({family:l,scale:d,weight:700}),xbold:chunk3L3JUG34_js.a({family:l,scale:d,weight:800}),black:chunk3L3JUG34_js.a({family:l,scale:d,weight:900})},"8xl":{thin:chunk3L3JUG34_js.a({family:l,scale:u,weight:100}),xlight:chunk3L3JUG34_js.a({family:l,scale:u,weight:200}),light:chunk3L3JUG34_js.a({family:l,scale:u,weight:300}),normal:chunk3L3JUG34_js.a({family:l,scale:u,weight:400}),medium:chunk3L3JUG34_js.a({family:l,scale:u,weight:500}),semibold:chunk3L3JUG34_js.a({family:l,scale:u,weight:600}),bold:chunk3L3JUG34_js.a({family:l,scale:u,weight:700}),xbold:chunk3L3JUG34_js.a({family:l,scale:u,weight:800}),black:chunk3L3JUG34_js.a({family:l,scale:u,weight:900})},"9xl":{thin:chunk3L3JUG34_js.a({family:l,scale:x,weight:100}),xlight:chunk3L3JUG34_js.a({family:l,scale:x,weight:200}),light:chunk3L3JUG34_js.a({family:l,scale:x,weight:300}),normal:chunk3L3JUG34_js.a({family:l,scale:x,weight:400}),medium:chunk3L3JUG34_js.a({family:l,scale:x,weight:500}),semibold:chunk3L3JUG34_js.a({family:l,scale:x,weight:600}),bold:chunk3L3JUG34_js.a({family:l,scale:x,weight:700}),xbold:chunk3L3JUG34_js.a({family:l,scale:x,weight:800}),black:chunk3L3JUG34_js.a({family:l,scale:x,weight:900})}}}};var G=({base:m,config:i})=>({external_resources:i?.external_resources?X({base:m.external_resources,config:i?.external_resources?i.external_resources:[]}):m.external_resources,fonts:i?.fonts?H({base:m.fonts,config:i?.fonts?i.fonts:{}}):m.fonts});var p=({base:m,config:i})=>{let t=f(i,m.tint_500,["tint_500"]),l=m.tint_500!=t,a=f(i,l?t:m.tint_400,["tint_400"]),s=f(i,l?a:m.tint_300,["tint_300"]),h=f(i,l?s:m.tint_200,["tint_200"]),c=f(i,l?h:m.tint_100,["tint_100"]),g=f(i,l?c:m.tint_50,["tint_50"]),n=f(i,l?t:m.tint_600,["tint_600"]),o=f(i,l?n:m.tint_700,["tint_700"]),r=f(i,l?o:m.tint_800,["tint_800"]),y=f(i,l?r:m.tint_900,["tint_900"]),w=f(i,l?y:m.tint_950,["tint_950"]);return {tint_50:g,tint_100:c,tint_200:h,tint_300:s,tint_400:a,tint_500:t,tint_600:n,tint_700:o,tint_800:r,tint_900:y,tint_950:w}};var U=({base:m,config:i})=>({danger:p({base:m.danger,config:i.danger?i.danger:{}}),warning:p({base:m.warning,config:i.warning?i.warning:{}}),success:p({base:m.success,config:i.success?i.success:{}}),info:p({base:m.info,config:i.info?i.info:{}}),neutrals:p({base:m.neutrals,config:i.neutrals?i.neutrals:{}}),border:p({base:m.surfaces,config:i.border?i.border:{}}),text:p({base:m.neutrals,config:i.text?i.text:{}}),surfaces:p({base:m.surfaces,config:i.surfaces?i.surfaces:{}}),skeletons:p({base:m.skeletons,config:i.skeletons?i.skeletons:{}}),primary:p({base:m.primary,config:i.primary?i.primary:{}}),accent:p({base:m.accent,config:i.accent?i.accent:{}}),accent2:p({base:m.accent2,config:i.accent2?i.accent2:i.accent?i.accent:{}}),accent3:p({base:m.accent3,config:i.accent3?i.accent3:i.accent?i.accent:{}}),accent4:p({base:m.accent4,config:i.accent4?i.accent4:i.accent?i.accent:{}}),accent5:p({base:m.accent5,config:i.accent5?i.accent5:i.accent?i.accent:{}}),supporting:p({base:m.supporting,config:i.supporting?i.supporting:{}})});var K=({base:m,config:i})=>({none:m.none,xs:i?i.xs:m.xs,sm:i?i.sm:m.sm,md:i?i.md:m.md,lg:i?i.lg:m.lg,xl:i?i.xl:m.xl,"2xl":i?i["2xl"]:m["2xl"],"3xl":i?i["3xl"]:m["3xl"],full:"9999px"});var $=({base:m,config:i})=>({none:"0 0 #0000",xs:i?i.xs:m.xs,sm:i?i.sm:m.sm,md:i?i.md:m.md,lg:i?i.lg:m.lg,xl:i?i.xl:m.xl,"2xl":i?i["2xl"]:m["2xl"]});var ae=({config:m})=>({settings:m?.settings?m.settings:chunk3L3JUG34_js.r.settings,alternate:N({base:chunk3L3JUG34_js.r.alternate,config:m?.alternate?m.alternate:[]}),typography:m?.typography?G({base:chunk3L3JUG34_js.r.typography,config:m.typography?m.typography:{}}):chunk3L3JUG34_js.r.typography,colors:m?.colors?U({base:chunk3L3JUG34_js.r.colors,config:m.colors?m.colors:{}}):chunk3L3JUG34_js.r.colors,utility:chunk3L3JUG34_js.r.utility,radius:K({base:chunk3L3JUG34_js.r.radius,config:m.radius}),shadow:$({base:chunk3L3JUG34_js.r.shadow,config:m.shadow})});exports.ThemeMode=(l=>(l.STANDARD="STANDARD",l.INVERTED="INVERTED",l.CONTRAST="CONTRAST",l))(exports.ThemeMode||{});(t=>{function m(l,a){return Object.values(t).includes(l)?l:a}t.from=m;function i(l){return Object.values(t).includes(l)?l:null}t.tryFrom=i;})(exports.ThemeMode||={});var se=react.createContext("STANDARD");var I=({name:m,alternates:i})=>{let t=i.find(l=>l.name===m);return t&&t.theme};var oe=({component:m,font:i,default:t})=>{let l=chunk3L3JUG34_js.t(),a=I({name:m,alternates:l.alternate}),s={Color:"inherit",BackgroundColor:"transparent",Border:{Color:"transparent",Width:0,Style:"solid"},FontWeightAdjustment:0},h=(o,r)=>({Color:r?.Color||o?.Color||s.Color,BackgroundColor:r?.BackgroundColor||o?.BackgroundColor||s.BackgroundColor,Border:re(r?.Border?.Width||o?.Border?.Width||s.Border.Width,r?.Border?.Color||o?.Border?.Color||s.Border.Color,r?.Border?.Style||o?.Border?.Style||s.Border.Style),BorderRaw:{Width:r?.Border?.Width||o?.Border?.Width||s.Border.Width,Style:r?.Border?.Style||o?.Border?.Style||s.Border.Style,Color:r?.Border?.Color||o?.Border?.Color||s.Border.Color},Font:he(i,r?.FontWeightAdjustment||o?.FontWeightAdjustment||s.FontWeightAdjustment)}),c=h(t?.Init,a?.Init),g=h(t?.Hover===void 0&&t?.Init?t?.Init:t?.Hover,a?.Hover),n=h(t?.Active===void 0&&t?.Init?t?.Init:t?.Active,a?.Active);return {Init:c,Hover:g,Active:n}},re=(m,i,t)=>{let l=t||"solid";return m+"px "+l+" "+i},he=(m,i)=>{let t=[100,200,300,400,500,600,700,800,900],l=m.match(/(\d+)/);if(!l)return m;let a=parseInt(l[0],10),s=t.indexOf(a);if(s===-1)return m;let h=s+i/100;h=Math.max(0,Math.min(t.length-1,h));let c=t[h];return m.replace(/(\d+)/,String(c))};var ne=m=>{try{return react.useContext(chunk3L3JUG34_js.s).settings[m]??null}catch{return null}};var ge=()=>chunk3L3JUG34_js.t().radius;var ye=()=>chunk3L3JUG34_js.t().utility;var fe=()=>chunk3L3JUG34_js.t().shadow;var we=m=>{let i=({children:t})=>jsxRuntime.jsxs(jsxRuntime.Fragment,{children:[" ",t," "]});return m.reduce((t,[l,a={}])=>({children:s})=>jsxRuntime.jsx(t,{children:jsxRuntime.jsx(l,{...a,children:s})}),i)};var be=m=>{let{children:i,sheets:t}=m;return react.useEffect(()=>{t.map(function(l){let a=document.createElement("link");a.rel="stylesheet",a.href=l,document.head.appendChild(a);});},[t]),i??null};function pe(m,i,t={r:255,g:255,b:255}){m=m.replace(/^#/,""),m.length===3&&(m=m.split("").map(y=>y+y).join(""));let l=parseInt(m.slice(0,2),16),a=parseInt(m.slice(2,4),16),s=parseInt(m.slice(4,6),16),{r:h,g:c,b:g}=t,n=Math.round(l*i+h*(1-i)),o=Math.round(a*i+c*(1-i)),r=Math.round(s*i+g*(1-i));return `rgb(${n}, ${o}, ${r})`}Object.defineProperty(exports,"ThemeCtx",{enumerable:true,get:function(){return chunk3L3JUG34_js.s}});Object.defineProperty(exports,"useTheme",{enumerable:true,get:function(){return chunk3L3JUG34_js.t}});Object.defineProperty(exports,"useThemeColor",{enumerable:true,get:function(){return chunk3L3JUG34_js.u}});Object.defineProperty(exports,"useThemeFonts",{enumerable:true,get:function(){return chunk3L3JUG34_js.v}});exports.BuildProvidersTree=we;exports.ExternalStylesheetLoader=be;exports.LookupAlternateTheme=I;exports.Opacity=pe;exports.StyleProviderAnimation=Z;exports.StyleProviderPreFlight=le;exports.StyleProviderScrollbar=ie;exports.ThemeBuilder=ae;exports.ThemeModeCtx=se;exports.orDefault=f;exports.useAlternateTheme=oe;exports.useThemeRadius=ge;exports.useThemeSetting=ne;exports.useThemeShadow=fe;exports.useThemeUtility=ye;//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map