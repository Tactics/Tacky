'use strict';var chunkPCBJXKGN_cjs=require('./chunk-PCBJXKGN.cjs'),styledComponents=require('styled-components'),react=require('react'),jsxRuntime=require('react/jsx-runtime');var le=styledComponents.createGlobalStyle`
      ${s=>s.animations?.map(function(l){return l})}

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
`;var ie=styledComponents.createGlobalStyle`
    
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
`;var se=styledComponents.createGlobalStyle`
    
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
`;var N=({base:s,config:l})=>l||s;var X=({base:s,config:l})=>l||s;function d(s,l,i){let t=s;for(let a of i)if(t=t?.[a]??l,t==null)break;return t}var H=({base:s,config:l})=>{let i=d(l,chunkPCBJXKGN_cjs.b,["family","primary"]),t=d(l,d(l,chunkPCBJXKGN_cjs.c,["family","primary"]),["family","accent"]),a=d(l,d(l,chunkPCBJXKGN_cjs.d,["family","primary"]),["family","supporting"]),m=d(l,chunkPCBJXKGN_cjs.g,["scale","md"]),o=d(l,chunkPCBJXKGN_cjs.f,["scale","sm"]),n=d(l,chunkPCBJXKGN_cjs.e,["scale","xs"]),r=d(l,chunkPCBJXKGN_cjs.h,["scale","lg"]),g=d(l,chunkPCBJXKGN_cjs.i,["scale","xl"]),c=d(l,chunkPCBJXKGN_cjs.j,["scale","2xl"]),h=d(l,chunkPCBJXKGN_cjs.k,["scale","3xl"]),y=d(l,chunkPCBJXKGN_cjs.l,["scale","4xl"]),w=d(l,chunkPCBJXKGN_cjs.m,["scale","5xl"]),b=d(l,chunkPCBJXKGN_cjs.n,["scale","6xl"]),u=d(l,chunkPCBJXKGN_cjs.o,["scale","7xl"]),x=d(l,chunkPCBJXKGN_cjs.p,["scale","8xl"]),p=d(l,chunkPCBJXKGN_cjs.q,["scale","9xl"]);return {primary:{xs:{thin:chunkPCBJXKGN_cjs.a({family:i,scale:n,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:i,scale:n,weight:200}),light:chunkPCBJXKGN_cjs.a({family:i,scale:n,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:i,scale:n,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:i,scale:n,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:i,scale:n,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:i,scale:n,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:i,scale:n,weight:800}),black:chunkPCBJXKGN_cjs.a({family:i,scale:n,weight:900})},sm:{thin:chunkPCBJXKGN_cjs.a({family:i,scale:o,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:i,scale:o,weight:200}),light:chunkPCBJXKGN_cjs.a({family:i,scale:o,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:i,scale:o,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:i,scale:o,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:i,scale:o,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:i,scale:o,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:i,scale:o,weight:800}),black:chunkPCBJXKGN_cjs.a({family:i,scale:o,weight:900})},md:{thin:chunkPCBJXKGN_cjs.a({family:i,scale:m,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:i,scale:m,weight:200}),light:chunkPCBJXKGN_cjs.a({family:i,scale:m,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:i,scale:m,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:i,scale:m,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:i,scale:m,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:i,scale:m,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:i,scale:m,weight:800}),black:chunkPCBJXKGN_cjs.a({family:i,scale:m,weight:900})},lg:{thin:chunkPCBJXKGN_cjs.a({family:i,scale:r,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:i,scale:r,weight:200}),light:chunkPCBJXKGN_cjs.a({family:i,scale:r,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:i,scale:r,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:i,scale:r,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:i,scale:r,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:i,scale:r,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:i,scale:r,weight:800}),black:chunkPCBJXKGN_cjs.a({family:i,scale:r,weight:900})},xl:{thin:chunkPCBJXKGN_cjs.a({family:i,scale:g,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:i,scale:g,weight:200}),light:chunkPCBJXKGN_cjs.a({family:i,scale:g,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:i,scale:g,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:i,scale:g,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:i,scale:g,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:i,scale:g,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:i,scale:g,weight:800}),black:chunkPCBJXKGN_cjs.a({family:i,scale:g,weight:900})},"2xl":{thin:chunkPCBJXKGN_cjs.a({family:i,scale:c,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:i,scale:c,weight:200}),light:chunkPCBJXKGN_cjs.a({family:i,scale:c,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:i,scale:c,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:i,scale:c,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:i,scale:c,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:i,scale:c,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:i,scale:c,weight:800}),black:chunkPCBJXKGN_cjs.a({family:i,scale:c,weight:900})},"3xl":{thin:chunkPCBJXKGN_cjs.a({family:i,scale:h,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:i,scale:h,weight:200}),light:chunkPCBJXKGN_cjs.a({family:i,scale:h,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:i,scale:h,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:i,scale:h,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:i,scale:h,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:i,scale:h,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:i,scale:h,weight:800}),black:chunkPCBJXKGN_cjs.a({family:i,scale:h,weight:900})},"4xl":{thin:chunkPCBJXKGN_cjs.a({family:i,scale:y,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:i,scale:y,weight:200}),light:chunkPCBJXKGN_cjs.a({family:i,scale:y,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:i,scale:y,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:i,scale:y,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:i,scale:y,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:i,scale:y,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:i,scale:y,weight:800}),black:chunkPCBJXKGN_cjs.a({family:i,scale:y,weight:900})},"5xl":{thin:chunkPCBJXKGN_cjs.a({family:i,scale:w,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:i,scale:w,weight:200}),light:chunkPCBJXKGN_cjs.a({family:i,scale:w,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:i,scale:w,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:i,scale:w,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:i,scale:w,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:i,scale:w,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:i,scale:w,weight:800}),black:chunkPCBJXKGN_cjs.a({family:i,scale:w,weight:900})},"6xl":{thin:chunkPCBJXKGN_cjs.a({family:i,scale:b,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:i,scale:b,weight:200}),light:chunkPCBJXKGN_cjs.a({family:i,scale:b,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:i,scale:b,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:i,scale:b,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:i,scale:b,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:i,scale:b,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:i,scale:b,weight:800}),black:chunkPCBJXKGN_cjs.a({family:i,scale:b,weight:900})},"7xl":{thin:chunkPCBJXKGN_cjs.a({family:i,scale:u,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:i,scale:u,weight:200}),light:chunkPCBJXKGN_cjs.a({family:i,scale:u,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:i,scale:u,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:i,scale:u,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:i,scale:u,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:i,scale:u,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:i,scale:u,weight:800}),black:chunkPCBJXKGN_cjs.a({family:i,scale:u,weight:900})},"8xl":{thin:chunkPCBJXKGN_cjs.a({family:i,scale:x,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:i,scale:x,weight:200}),light:chunkPCBJXKGN_cjs.a({family:i,scale:x,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:i,scale:x,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:i,scale:x,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:i,scale:x,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:i,scale:x,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:i,scale:x,weight:800}),black:chunkPCBJXKGN_cjs.a({family:i,scale:x,weight:900})},"9xl":{thin:chunkPCBJXKGN_cjs.a({family:i,scale:p,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:i,scale:p,weight:200}),light:chunkPCBJXKGN_cjs.a({family:i,scale:p,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:i,scale:p,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:i,scale:p,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:i,scale:p,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:i,scale:p,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:i,scale:p,weight:800}),black:chunkPCBJXKGN_cjs.a({family:i,scale:p,weight:900})}},supporting:{xs:{thin:chunkPCBJXKGN_cjs.a({family:a,scale:n,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:a,scale:n,weight:200}),light:chunkPCBJXKGN_cjs.a({family:a,scale:n,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:a,scale:n,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:a,scale:n,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:a,scale:n,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:a,scale:n,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:a,scale:n,weight:800}),black:chunkPCBJXKGN_cjs.a({family:a,scale:n,weight:900})},sm:{thin:chunkPCBJXKGN_cjs.a({family:a,scale:o,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:a,scale:o,weight:200}),light:chunkPCBJXKGN_cjs.a({family:a,scale:o,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:a,scale:o,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:a,scale:o,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:a,scale:o,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:a,scale:o,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:a,scale:o,weight:800}),black:chunkPCBJXKGN_cjs.a({family:a,scale:o,weight:900})},md:{thin:chunkPCBJXKGN_cjs.a({family:a,scale:m,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:a,scale:m,weight:200}),light:chunkPCBJXKGN_cjs.a({family:a,scale:m,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:a,scale:m,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:a,scale:m,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:a,scale:m,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:a,scale:m,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:a,scale:m,weight:800}),black:chunkPCBJXKGN_cjs.a({family:a,scale:m,weight:900})},lg:{thin:chunkPCBJXKGN_cjs.a({family:a,scale:r,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:a,scale:r,weight:200}),light:chunkPCBJXKGN_cjs.a({family:a,scale:r,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:a,scale:r,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:a,scale:r,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:a,scale:r,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:a,scale:r,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:a,scale:r,weight:800}),black:chunkPCBJXKGN_cjs.a({family:a,scale:r,weight:900})},xl:{thin:chunkPCBJXKGN_cjs.a({family:a,scale:g,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:a,scale:g,weight:200}),light:chunkPCBJXKGN_cjs.a({family:a,scale:g,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:a,scale:g,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:a,scale:g,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:a,scale:g,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:a,scale:g,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:a,scale:g,weight:800}),black:chunkPCBJXKGN_cjs.a({family:a,scale:g,weight:900})},"2xl":{thin:chunkPCBJXKGN_cjs.a({family:a,scale:c,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:a,scale:c,weight:200}),light:chunkPCBJXKGN_cjs.a({family:a,scale:c,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:a,scale:c,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:a,scale:c,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:a,scale:c,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:a,scale:c,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:a,scale:c,weight:800}),black:chunkPCBJXKGN_cjs.a({family:a,scale:c,weight:900})},"3xl":{thin:chunkPCBJXKGN_cjs.a({family:a,scale:h,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:a,scale:h,weight:200}),light:chunkPCBJXKGN_cjs.a({family:a,scale:h,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:a,scale:h,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:a,scale:h,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:a,scale:h,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:a,scale:h,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:a,scale:h,weight:800}),black:chunkPCBJXKGN_cjs.a({family:a,scale:h,weight:900})},"4xl":{thin:chunkPCBJXKGN_cjs.a({family:a,scale:y,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:a,scale:y,weight:200}),light:chunkPCBJXKGN_cjs.a({family:a,scale:y,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:a,scale:y,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:a,scale:y,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:a,scale:y,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:a,scale:y,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:a,scale:y,weight:800}),black:chunkPCBJXKGN_cjs.a({family:a,scale:y,weight:900})},"5xl":{thin:chunkPCBJXKGN_cjs.a({family:a,scale:w,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:a,scale:w,weight:200}),light:chunkPCBJXKGN_cjs.a({family:a,scale:w,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:a,scale:w,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:a,scale:w,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:a,scale:w,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:a,scale:w,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:a,scale:w,weight:800}),black:chunkPCBJXKGN_cjs.a({family:a,scale:w,weight:900})},"6xl":{thin:chunkPCBJXKGN_cjs.a({family:a,scale:b,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:a,scale:b,weight:200}),light:chunkPCBJXKGN_cjs.a({family:a,scale:b,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:a,scale:b,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:a,scale:b,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:a,scale:b,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:a,scale:b,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:a,scale:b,weight:800}),black:chunkPCBJXKGN_cjs.a({family:a,scale:b,weight:900})},"7xl":{thin:chunkPCBJXKGN_cjs.a({family:a,scale:u,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:a,scale:u,weight:200}),light:chunkPCBJXKGN_cjs.a({family:a,scale:u,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:a,scale:u,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:a,scale:u,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:a,scale:u,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:a,scale:u,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:a,scale:u,weight:800}),black:chunkPCBJXKGN_cjs.a({family:a,scale:u,weight:900})},"8xl":{thin:chunkPCBJXKGN_cjs.a({family:a,scale:x,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:a,scale:x,weight:200}),light:chunkPCBJXKGN_cjs.a({family:a,scale:x,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:a,scale:x,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:a,scale:x,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:a,scale:x,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:a,scale:x,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:a,scale:x,weight:800}),black:chunkPCBJXKGN_cjs.a({family:a,scale:x,weight:900})},"9xl":{thin:chunkPCBJXKGN_cjs.a({family:a,scale:p,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:a,scale:p,weight:200}),light:chunkPCBJXKGN_cjs.a({family:a,scale:p,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:a,scale:p,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:a,scale:p,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:a,scale:p,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:a,scale:p,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:a,scale:p,weight:800}),black:chunkPCBJXKGN_cjs.a({family:a,scale:p,weight:900})}},accent:{xs:{thin:chunkPCBJXKGN_cjs.a({family:t,scale:n,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:t,scale:n,weight:200}),light:chunkPCBJXKGN_cjs.a({family:t,scale:n,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:t,scale:n,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:t,scale:n,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:t,scale:n,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:t,scale:n,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:t,scale:n,weight:800}),black:chunkPCBJXKGN_cjs.a({family:t,scale:n,weight:900})},sm:{thin:chunkPCBJXKGN_cjs.a({family:t,scale:o,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:t,scale:o,weight:200}),light:chunkPCBJXKGN_cjs.a({family:t,scale:o,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:t,scale:o,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:t,scale:o,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:t,scale:o,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:t,scale:o,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:t,scale:o,weight:800}),black:chunkPCBJXKGN_cjs.a({family:t,scale:o,weight:900})},md:{thin:chunkPCBJXKGN_cjs.a({family:t,scale:m,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:t,scale:m,weight:200}),light:chunkPCBJXKGN_cjs.a({family:t,scale:m,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:t,scale:m,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:t,scale:m,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:t,scale:m,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:t,scale:m,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:t,scale:m,weight:800}),black:chunkPCBJXKGN_cjs.a({family:t,scale:m,weight:900})},lg:{thin:chunkPCBJXKGN_cjs.a({family:t,scale:r,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:t,scale:r,weight:200}),light:chunkPCBJXKGN_cjs.a({family:t,scale:r,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:t,scale:r,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:t,scale:r,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:t,scale:r,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:t,scale:r,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:t,scale:r,weight:800}),black:chunkPCBJXKGN_cjs.a({family:t,scale:r,weight:900})},xl:{thin:chunkPCBJXKGN_cjs.a({family:t,scale:g,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:t,scale:g,weight:200}),light:chunkPCBJXKGN_cjs.a({family:t,scale:g,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:t,scale:g,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:t,scale:g,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:t,scale:g,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:t,scale:g,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:t,scale:g,weight:800}),black:chunkPCBJXKGN_cjs.a({family:t,scale:g,weight:900})},"2xl":{thin:chunkPCBJXKGN_cjs.a({family:t,scale:c,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:t,scale:c,weight:200}),light:chunkPCBJXKGN_cjs.a({family:t,scale:c,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:t,scale:c,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:t,scale:c,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:t,scale:c,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:t,scale:c,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:t,scale:c,weight:800}),black:chunkPCBJXKGN_cjs.a({family:t,scale:c,weight:900})},"3xl":{thin:chunkPCBJXKGN_cjs.a({family:t,scale:h,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:t,scale:h,weight:200}),light:chunkPCBJXKGN_cjs.a({family:t,scale:h,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:t,scale:h,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:t,scale:h,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:t,scale:h,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:t,scale:h,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:t,scale:h,weight:800}),black:chunkPCBJXKGN_cjs.a({family:t,scale:h,weight:900})},"4xl":{thin:chunkPCBJXKGN_cjs.a({family:t,scale:y,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:t,scale:y,weight:200}),light:chunkPCBJXKGN_cjs.a({family:t,scale:y,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:t,scale:y,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:t,scale:y,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:t,scale:y,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:t,scale:y,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:t,scale:y,weight:800}),black:chunkPCBJXKGN_cjs.a({family:t,scale:y,weight:900})},"5xl":{thin:chunkPCBJXKGN_cjs.a({family:t,scale:w,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:t,scale:w,weight:200}),light:chunkPCBJXKGN_cjs.a({family:t,scale:w,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:t,scale:w,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:t,scale:w,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:t,scale:w,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:t,scale:w,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:t,scale:w,weight:800}),black:chunkPCBJXKGN_cjs.a({family:t,scale:w,weight:900})},"6xl":{thin:chunkPCBJXKGN_cjs.a({family:t,scale:b,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:t,scale:b,weight:200}),light:chunkPCBJXKGN_cjs.a({family:i,scale:t,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:t,scale:b,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:t,scale:b,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:t,scale:b,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:t,scale:b,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:t,scale:b,weight:800}),black:chunkPCBJXKGN_cjs.a({family:t,scale:b,weight:900})},"7xl":{thin:chunkPCBJXKGN_cjs.a({family:t,scale:u,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:t,scale:u,weight:200}),light:chunkPCBJXKGN_cjs.a({family:t,scale:u,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:t,scale:u,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:t,scale:u,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:t,scale:u,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:t,scale:u,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:t,scale:u,weight:800}),black:chunkPCBJXKGN_cjs.a({family:t,scale:u,weight:900})},"8xl":{thin:chunkPCBJXKGN_cjs.a({family:t,scale:x,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:t,scale:x,weight:200}),light:chunkPCBJXKGN_cjs.a({family:t,scale:x,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:t,scale:x,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:t,scale:x,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:t,scale:x,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:t,scale:x,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:t,scale:x,weight:800}),black:chunkPCBJXKGN_cjs.a({family:t,scale:x,weight:900})},"9xl":{thin:chunkPCBJXKGN_cjs.a({family:t,scale:p,weight:100}),xlight:chunkPCBJXKGN_cjs.a({family:t,scale:p,weight:200}),light:chunkPCBJXKGN_cjs.a({family:t,scale:p,weight:300}),normal:chunkPCBJXKGN_cjs.a({family:t,scale:p,weight:400}),medium:chunkPCBJXKGN_cjs.a({family:t,scale:p,weight:500}),semibold:chunkPCBJXKGN_cjs.a({family:t,scale:p,weight:600}),bold:chunkPCBJXKGN_cjs.a({family:t,scale:p,weight:700}),xbold:chunkPCBJXKGN_cjs.a({family:t,scale:p,weight:800}),black:chunkPCBJXKGN_cjs.a({family:t,scale:p,weight:900})}}}};var G=({base:s,config:l})=>({external_resources:l?.external_resources?X({base:s.external_resources,config:l?.external_resources?l.external_resources:[]}):s.external_resources,fonts:l?.fonts?H({base:s.fonts,config:l?.fonts?l.fonts:{}}):s.fonts});var f=({base:s,config:l})=>{let i=d(l,s.tint_500,["tint_500"]),t=s.tint_500!=i,a=d(l,t?i:s.tint_400,["tint_400"]),m=d(l,t?a:s.tint_300,["tint_300"]),o=d(l,t?m:s.tint_200,["tint_200"]),n=d(l,t?o:s.tint_100,["tint_100"]),r=d(l,t?n:s.tint_50,["tint_50"]),g=d(l,t?i:s.tint_600,["tint_600"]),c=d(l,t?g:s.tint_700,["tint_700"]),h=d(l,t?c:s.tint_800,["tint_800"]),y=d(l,t?h:s.tint_900,["tint_900"]),w=d(l,t?y:s.tint_950,["tint_950"]);return {tint_50:r,tint_100:n,tint_200:o,tint_300:m,tint_400:a,tint_500:i,tint_600:g,tint_700:c,tint_800:h,tint_900:y,tint_950:w}};var U=({base:s,config:l})=>{let i=l.scoped??{},t={danger:f({base:s.danger,config:l.danger?l.danger:{}}),warning:f({base:s.warning,config:l.warning?l.warning:{}}),success:f({base:s.success,config:l.success?l.success:{}}),info:f({base:s.info,config:l.info?l.info:{}})},a={neutrals:f({base:s.neutrals,config:l.neutrals?l.neutrals:{}})},m=Object.entries(i).reduce((o,[n,r])=>(o[n]={danger:f({base:s.danger,config:l.danger?l.danger:{}}),warning:f({base:s.warning,config:l.warning?l.warning:{}}),success:f({base:s.success,config:l.success?l.success:{}}),info:f({base:s.info,config:l.info?l.info:{}}),neutrals:f({base:s.neutrals,config:l.neutrals?l.neutrals:{}}),border:f({base:s.border??s.surfaces,config:r.border??(l.border?l.border:{})}),text:f({base:s.text??s.neutrals,config:r.text??(l.text?l.text:{})}),surfaces:f({base:s.surfaces,config:r.surfaces??(l.surfaces?l.surfaces:{})}),skeletons:f({base:s.skeletons,config:r.skeletons??(l.skeletons?l.skeletons:{})}),primary:f({base:s.primary,config:r.primary??(l.primary?l.primary:{})}),accent:f({base:s.accent,config:r.accent??(l.accent?l.accent:{})}),accent2:f({base:s.accent2,config:r.accent2??r.accent??(l.accent2?l.accent2:l.accent?l.accent:{})}),accent3:f({base:s.accent3,config:r.accent3??r.accent??(l.accent3?l.accent3:l.accent?l.accent:{})}),accent4:f({base:s.accent4,config:r.accent4??r.accent??(l.accent4?l.accent4:l.accent?l.accent:{})}),accent5:f({base:s.accent5,config:r.accent5??r.accent??(l.accent5?l.accent5:l.accent?l.accent:{})}),supporting:f({base:s.supporting,config:r.supporting??(l.supporting?l.supporting:{})})},o),{});return {...t,...a,border:f({base:s.surfaces,config:l.border?l.border:{}}),text:f({base:s.neutrals,config:l.text?l.text:{}}),surfaces:f({base:s.surfaces,config:l.surfaces?l.surfaces:{}}),skeletons:f({base:s.skeletons,config:l.skeletons?l.skeletons:{}}),primary:f({base:s.primary,config:l.primary?l.primary:{}}),accent:f({base:s.accent,config:l.accent?l.accent:{}}),accent2:f({base:s.accent2,config:l.accent2?l.accent2:l.accent?l.accent:{}}),accent3:f({base:s.accent3,config:l.accent3?l.accent3:l.accent?l.accent:{}}),accent4:f({base:s.accent4,config:l.accent4?l.accent4:l.accent?l.accent:{}}),accent5:f({base:s.accent5,config:l.accent5?l.accent5:l.accent?l.accent:{}}),supporting:f({base:s.supporting,config:l.supporting?l.supporting:{}}),scoped:m}};var K=({base:s,config:l})=>({none:s.none,xs:l?l.xs:s.xs,sm:l?l.sm:s.sm,md:l?l.md:s.md,lg:l?l.lg:s.lg,xl:l?l.xl:s.xl,"2xl":l?l["2xl"]:s["2xl"],"3xl":l?l["3xl"]:s["3xl"],full:"9999px"});var $=({base:s,config:l})=>({none:"0 0 #0000",xs:l?l.xs:s.xs,sm:l?l.sm:s.sm,md:l?l.md:s.md,lg:l?l.lg:s.lg,xl:l?l.xl:s.xl,"2xl":l?l["2xl"]:s["2xl"]});var me=({config:s})=>({settings:s?.settings?s.settings:chunkPCBJXKGN_cjs.r.settings,alternate:N({base:chunkPCBJXKGN_cjs.r.alternate,config:s?.alternate?s.alternate:[]}),typography:s?.typography?G({base:chunkPCBJXKGN_cjs.r.typography,config:s.typography?s.typography:{}}):chunkPCBJXKGN_cjs.r.typography,colors:s?.colors?U({base:chunkPCBJXKGN_cjs.r.colors,config:s.colors?s.colors:{}}):chunkPCBJXKGN_cjs.r.colors,utility:chunkPCBJXKGN_cjs.r.utility,radius:K({base:chunkPCBJXKGN_cjs.r.radius,config:s.radius}),shadow:$({base:chunkPCBJXKGN_cjs.r.shadow,config:s.shadow})});exports.ThemeMode=(t=>(t.STANDARD="STANDARD",t.INVERTED="INVERTED",t.CONTRAST="CONTRAST",t))(exports.ThemeMode||{});(i=>{function s(t,a){return Object.values(i).includes(t)?t:a}i.from=s;function l(t){return Object.values(i).includes(t)?t:null}i.tryFrom=l;})(exports.ThemeMode||={});var oe=react.createContext("STANDARD");var I=({name:s,alternates:l})=>{let i=l.find(t=>t.name===s);return i&&i.theme};var ce=({component:s,font:l,default:i})=>{let t=chunkPCBJXKGN_cjs.t(),a=I({name:s,alternates:t.alternate}),m={Color:"inherit",BackgroundColor:"transparent",Border:{Color:"transparent",Width:0,Style:"solid"},FontWeightAdjustment:0},o=(c,h)=>({Color:h?.Color||c?.Color||m.Color,BackgroundColor:h?.BackgroundColor||c?.BackgroundColor||m.BackgroundColor,Border:he(h?.Border?.Width||c?.Border?.Width||m.Border.Width,h?.Border?.Color||c?.Border?.Color||m.Border.Color,h?.Border?.Style||c?.Border?.Style||m.Border.Style),BorderRaw:{Width:h?.Border?.Width||c?.Border?.Width||m.Border.Width,Style:h?.Border?.Style||c?.Border?.Style||m.Border.Style,Color:h?.Border?.Color||c?.Border?.Color||m.Border.Color},Font:ne(l,h?.FontWeightAdjustment||c?.FontWeightAdjustment||m.FontWeightAdjustment)}),n=o(i?.Init,a?.Init),r=o(i?.Hover===void 0&&i?.Init?i?.Init:i?.Hover,a?.Hover),g=o(i?.Active===void 0&&i?.Init?i?.Init:i?.Active,a?.Active);return {Init:n,Hover:r,Active:g}},he=(s,l,i)=>{let t=i||"solid";return s+"px "+t+" "+l},ne=(s,l)=>{let i=[100,200,300,400,500,600,700,800,900],t=s.match(/(\d+)/);if(!t)return s;let a=parseInt(t[0],10),m=i.indexOf(a);if(m===-1)return s;let o=m+l/100;o=Math.max(0,Math.min(i.length-1,o));let n=i[o];return s.replace(/(\d+)/,String(n))};var ye=s=>{try{return react.useContext(chunkPCBJXKGN_cjs.s).settings[s]??null}catch{return null}};var fe=()=>chunkPCBJXKGN_cjs.t().radius;var de=()=>chunkPCBJXKGN_cjs.t().utility;var we=()=>chunkPCBJXKGN_cjs.t().shadow;var ue=s=>{let l=({children:i})=>jsxRuntime.jsxs(jsxRuntime.Fragment,{children:[" ",i," "]});return s.reduce((i,[t,a={}])=>({children:m})=>jsxRuntime.jsx(i,{children:jsxRuntime.jsx(t,{...a,children:m})}),l)};var Te=s=>{let{children:l,sheets:i}=s;return react.useEffect(()=>{i.map(function(t){let a=document.createElement("link");a.rel="stylesheet",a.href=t,document.head.appendChild(a);});},[i]),l??null};function Ce(s,l,i={r:255,g:255,b:255}){s=s.replace(/^#/,""),s.length===3&&(s=s.split("").map(y=>y+y).join(""));let t=parseInt(s.slice(0,2),16),a=parseInt(s.slice(2,4),16),m=parseInt(s.slice(4,6),16),{r:o,g:n,b:r}=i,g=Math.round(t*l+o*(1-l)),c=Math.round(a*l+n*(1-l)),h=Math.round(m*l+r*(1-l));return `rgb(${g}, ${c}, ${h})`}Object.defineProperty(exports,"ContextProviderThemeScope",{enumerable:true,get:function(){return chunkPCBJXKGN_cjs.v}});Object.defineProperty(exports,"RootScope",{enumerable:true,get:function(){return chunkPCBJXKGN_cjs.u}});Object.defineProperty(exports,"ThemeCtx",{enumerable:true,get:function(){return chunkPCBJXKGN_cjs.s}});Object.defineProperty(exports,"useTheme",{enumerable:true,get:function(){return chunkPCBJXKGN_cjs.t}});Object.defineProperty(exports,"useThemeColor",{enumerable:true,get:function(){return chunkPCBJXKGN_cjs.w}});Object.defineProperty(exports,"useThemeFonts",{enumerable:true,get:function(){return chunkPCBJXKGN_cjs.x}});exports.BuildProvidersTree=ue;exports.ExternalStylesheetLoader=Te;exports.LookupAlternateTheme=I;exports.Opacity=Ce;exports.StyleProviderAnimation=le;exports.StyleProviderPreFlight=ie;exports.StyleProviderScrollbar=se;exports.ThemeBuilder=me;exports.ThemeModeCtx=oe;exports.orDefault=d;exports.useAlternateTheme=ce;exports.useThemeRadius=fe;exports.useThemeSetting=ye;exports.useThemeShadow=we;exports.useThemeUtility=de;//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map