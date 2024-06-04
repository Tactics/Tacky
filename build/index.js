'use strict';

var chunkYMS53ZVY_js = require('./chunk-YMS53ZVY.js');
var chunkLC4A3LMM_js = require('./chunk-LC4A3LMM.js');
var styledComponents = require('styled-components');
var react = require('react');

var J=styledComponents.createGlobalStyle`
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
`;var Z=styledComponents.createGlobalStyle`
      ${m=>m.resources?.map(function(t){return t})}
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
`;var ae=styledComponents.createGlobalStyle`
    
    /* Reset all default a-styling when using external routing to prevent leaking of external styles */
    a {
        all: unset;
    }
`;var O=({base:m,config:t})=>t||m;var E=({base:m,config:t})=>t||m;var U=({base:m,config:t})=>{let i=chunkLC4A3LMM_js.a(t,chunkYMS53ZVY_js.b,["family","primary"]),l=chunkLC4A3LMM_js.a(t,chunkLC4A3LMM_js.a(t,chunkYMS53ZVY_js.c,["family","primary"]),["family","accent"]),a=chunkLC4A3LMM_js.a(t,chunkLC4A3LMM_js.a(t,chunkYMS53ZVY_js.d,["family","primary"]),["family","supporting"]),h=chunkLC4A3LMM_js.a(t,chunkYMS53ZVY_js.g,["scale","md"]),o=chunkLC4A3LMM_js.a(t,chunkYMS53ZVY_js.f,["scale","sm"]),g=chunkLC4A3LMM_js.a(t,chunkYMS53ZVY_js.e,["scale","xs"]),n=chunkLC4A3LMM_js.a(t,chunkYMS53ZVY_js.h,["scale","lg"]),c=chunkLC4A3LMM_js.a(t,chunkYMS53ZVY_js.i,["scale","xl"]),r=chunkLC4A3LMM_js.a(t,chunkYMS53ZVY_js.j,["scale","2xl"]),y=chunkLC4A3LMM_js.a(t,chunkYMS53ZVY_js.k,["scale","3xl"]),f=chunkLC4A3LMM_js.a(t,chunkYMS53ZVY_js.l,["scale","4xl"]),w=chunkLC4A3LMM_js.a(t,chunkYMS53ZVY_js.m,["scale","5xl"]),u=chunkLC4A3LMM_js.a(t,chunkYMS53ZVY_js.n,["scale","6xl"]),d=chunkLC4A3LMM_js.a(t,chunkYMS53ZVY_js.o,["scale","7xl"]),b=chunkLC4A3LMM_js.a(t,chunkYMS53ZVY_js.p,["scale","8xl"]),x=chunkLC4A3LMM_js.a(t,chunkYMS53ZVY_js.q,["scale","9xl"]);return {primary:{xs:{thin:chunkYMS53ZVY_js.a({family:i,scale:g,weight:100}),xlight:chunkYMS53ZVY_js.a({family:i,scale:g,weight:200}),light:chunkYMS53ZVY_js.a({family:i,scale:g,weight:300}),normal:chunkYMS53ZVY_js.a({family:i,scale:g,weight:400}),medium:chunkYMS53ZVY_js.a({family:i,scale:g,weight:500}),semibold:chunkYMS53ZVY_js.a({family:i,scale:g,weight:600}),bold:chunkYMS53ZVY_js.a({family:i,scale:g,weight:700}),xbold:chunkYMS53ZVY_js.a({family:i,scale:g,weight:800}),black:chunkYMS53ZVY_js.a({family:i,scale:g,weight:900})},sm:{thin:chunkYMS53ZVY_js.a({family:i,scale:o,weight:100}),xlight:chunkYMS53ZVY_js.a({family:i,scale:o,weight:200}),light:chunkYMS53ZVY_js.a({family:i,scale:o,weight:300}),normal:chunkYMS53ZVY_js.a({family:i,scale:o,weight:400}),medium:chunkYMS53ZVY_js.a({family:i,scale:o,weight:500}),semibold:chunkYMS53ZVY_js.a({family:i,scale:o,weight:600}),bold:chunkYMS53ZVY_js.a({family:i,scale:o,weight:700}),xbold:chunkYMS53ZVY_js.a({family:i,scale:o,weight:800}),black:chunkYMS53ZVY_js.a({family:i,scale:o,weight:900})},md:{thin:chunkYMS53ZVY_js.a({family:i,scale:h,weight:100}),xlight:chunkYMS53ZVY_js.a({family:i,scale:h,weight:200}),light:chunkYMS53ZVY_js.a({family:i,scale:h,weight:300}),normal:chunkYMS53ZVY_js.a({family:i,scale:h,weight:400}),medium:chunkYMS53ZVY_js.a({family:i,scale:h,weight:500}),semibold:chunkYMS53ZVY_js.a({family:i,scale:h,weight:600}),bold:chunkYMS53ZVY_js.a({family:i,scale:h,weight:700}),xbold:chunkYMS53ZVY_js.a({family:i,scale:h,weight:800}),black:chunkYMS53ZVY_js.a({family:i,scale:h,weight:900})},lg:{thin:chunkYMS53ZVY_js.a({family:i,scale:n,weight:100}),xlight:chunkYMS53ZVY_js.a({family:i,scale:n,weight:200}),light:chunkYMS53ZVY_js.a({family:i,scale:n,weight:300}),normal:chunkYMS53ZVY_js.a({family:i,scale:n,weight:400}),medium:chunkYMS53ZVY_js.a({family:i,scale:n,weight:500}),semibold:chunkYMS53ZVY_js.a({family:i,scale:n,weight:600}),bold:chunkYMS53ZVY_js.a({family:i,scale:n,weight:700}),xbold:chunkYMS53ZVY_js.a({family:i,scale:n,weight:800}),black:chunkYMS53ZVY_js.a({family:i,scale:n,weight:900})},xl:{thin:chunkYMS53ZVY_js.a({family:i,scale:c,weight:100}),xlight:chunkYMS53ZVY_js.a({family:i,scale:c,weight:200}),light:chunkYMS53ZVY_js.a({family:i,scale:c,weight:300}),normal:chunkYMS53ZVY_js.a({family:i,scale:c,weight:400}),medium:chunkYMS53ZVY_js.a({family:i,scale:c,weight:500}),semibold:chunkYMS53ZVY_js.a({family:i,scale:c,weight:600}),bold:chunkYMS53ZVY_js.a({family:i,scale:c,weight:700}),xbold:chunkYMS53ZVY_js.a({family:i,scale:c,weight:800}),black:chunkYMS53ZVY_js.a({family:i,scale:c,weight:900})},"2xl":{thin:chunkYMS53ZVY_js.a({family:i,scale:r,weight:100}),xlight:chunkYMS53ZVY_js.a({family:i,scale:r,weight:200}),light:chunkYMS53ZVY_js.a({family:i,scale:r,weight:300}),normal:chunkYMS53ZVY_js.a({family:i,scale:r,weight:400}),medium:chunkYMS53ZVY_js.a({family:i,scale:r,weight:500}),semibold:chunkYMS53ZVY_js.a({family:i,scale:r,weight:600}),bold:chunkYMS53ZVY_js.a({family:i,scale:r,weight:700}),xbold:chunkYMS53ZVY_js.a({family:i,scale:r,weight:800}),black:chunkYMS53ZVY_js.a({family:i,scale:r,weight:900})},"3xl":{thin:chunkYMS53ZVY_js.a({family:i,scale:y,weight:100}),xlight:chunkYMS53ZVY_js.a({family:i,scale:y,weight:200}),light:chunkYMS53ZVY_js.a({family:i,scale:y,weight:300}),normal:chunkYMS53ZVY_js.a({family:i,scale:y,weight:400}),medium:chunkYMS53ZVY_js.a({family:i,scale:y,weight:500}),semibold:chunkYMS53ZVY_js.a({family:i,scale:y,weight:600}),bold:chunkYMS53ZVY_js.a({family:i,scale:y,weight:700}),xbold:chunkYMS53ZVY_js.a({family:i,scale:y,weight:800}),black:chunkYMS53ZVY_js.a({family:i,scale:y,weight:900})},"4xl":{thin:chunkYMS53ZVY_js.a({family:i,scale:f,weight:100}),xlight:chunkYMS53ZVY_js.a({family:i,scale:f,weight:200}),light:chunkYMS53ZVY_js.a({family:i,scale:f,weight:300}),normal:chunkYMS53ZVY_js.a({family:i,scale:f,weight:400}),medium:chunkYMS53ZVY_js.a({family:i,scale:f,weight:500}),semibold:chunkYMS53ZVY_js.a({family:i,scale:f,weight:600}),bold:chunkYMS53ZVY_js.a({family:i,scale:f,weight:700}),xbold:chunkYMS53ZVY_js.a({family:i,scale:f,weight:800}),black:chunkYMS53ZVY_js.a({family:i,scale:f,weight:900})},"5xl":{thin:chunkYMS53ZVY_js.a({family:i,scale:w,weight:100}),xlight:chunkYMS53ZVY_js.a({family:i,scale:w,weight:200}),light:chunkYMS53ZVY_js.a({family:i,scale:w,weight:300}),normal:chunkYMS53ZVY_js.a({family:i,scale:w,weight:400}),medium:chunkYMS53ZVY_js.a({family:i,scale:w,weight:500}),semibold:chunkYMS53ZVY_js.a({family:i,scale:w,weight:600}),bold:chunkYMS53ZVY_js.a({family:i,scale:w,weight:700}),xbold:chunkYMS53ZVY_js.a({family:i,scale:w,weight:800}),black:chunkYMS53ZVY_js.a({family:i,scale:w,weight:900})},"6xl":{thin:chunkYMS53ZVY_js.a({family:i,scale:u,weight:100}),xlight:chunkYMS53ZVY_js.a({family:i,scale:u,weight:200}),light:chunkYMS53ZVY_js.a({family:i,scale:u,weight:300}),normal:chunkYMS53ZVY_js.a({family:i,scale:u,weight:400}),medium:chunkYMS53ZVY_js.a({family:i,scale:u,weight:500}),semibold:chunkYMS53ZVY_js.a({family:i,scale:u,weight:600}),bold:chunkYMS53ZVY_js.a({family:i,scale:u,weight:700}),xbold:chunkYMS53ZVY_js.a({family:i,scale:u,weight:800}),black:chunkYMS53ZVY_js.a({family:i,scale:u,weight:900})},"7xl":{thin:chunkYMS53ZVY_js.a({family:i,scale:d,weight:100}),xlight:chunkYMS53ZVY_js.a({family:i,scale:d,weight:200}),light:chunkYMS53ZVY_js.a({family:i,scale:d,weight:300}),normal:chunkYMS53ZVY_js.a({family:i,scale:d,weight:400}),medium:chunkYMS53ZVY_js.a({family:i,scale:d,weight:500}),semibold:chunkYMS53ZVY_js.a({family:i,scale:d,weight:600}),bold:chunkYMS53ZVY_js.a({family:i,scale:d,weight:700}),xbold:chunkYMS53ZVY_js.a({family:i,scale:d,weight:800}),black:chunkYMS53ZVY_js.a({family:i,scale:d,weight:900})},"8xl":{thin:chunkYMS53ZVY_js.a({family:i,scale:b,weight:100}),xlight:chunkYMS53ZVY_js.a({family:i,scale:b,weight:200}),light:chunkYMS53ZVY_js.a({family:i,scale:b,weight:300}),normal:chunkYMS53ZVY_js.a({family:i,scale:b,weight:400}),medium:chunkYMS53ZVY_js.a({family:i,scale:b,weight:500}),semibold:chunkYMS53ZVY_js.a({family:i,scale:b,weight:600}),bold:chunkYMS53ZVY_js.a({family:i,scale:b,weight:700}),xbold:chunkYMS53ZVY_js.a({family:i,scale:b,weight:800}),black:chunkYMS53ZVY_js.a({family:i,scale:b,weight:900})},"9xl":{thin:chunkYMS53ZVY_js.a({family:i,scale:x,weight:100}),xlight:chunkYMS53ZVY_js.a({family:i,scale:x,weight:200}),light:chunkYMS53ZVY_js.a({family:i,scale:x,weight:300}),normal:chunkYMS53ZVY_js.a({family:i,scale:x,weight:400}),medium:chunkYMS53ZVY_js.a({family:i,scale:x,weight:500}),semibold:chunkYMS53ZVY_js.a({family:i,scale:x,weight:600}),bold:chunkYMS53ZVY_js.a({family:i,scale:x,weight:700}),xbold:chunkYMS53ZVY_js.a({family:i,scale:x,weight:800}),black:chunkYMS53ZVY_js.a({family:i,scale:x,weight:900})}},supporting:{xs:{thin:chunkYMS53ZVY_js.a({family:a,scale:g,weight:100}),xlight:chunkYMS53ZVY_js.a({family:a,scale:g,weight:200}),light:chunkYMS53ZVY_js.a({family:a,scale:g,weight:300}),normal:chunkYMS53ZVY_js.a({family:a,scale:g,weight:400}),medium:chunkYMS53ZVY_js.a({family:a,scale:g,weight:500}),semibold:chunkYMS53ZVY_js.a({family:a,scale:g,weight:600}),bold:chunkYMS53ZVY_js.a({family:a,scale:g,weight:700}),xbold:chunkYMS53ZVY_js.a({family:a,scale:g,weight:800}),black:chunkYMS53ZVY_js.a({family:a,scale:g,weight:900})},sm:{thin:chunkYMS53ZVY_js.a({family:a,scale:o,weight:100}),xlight:chunkYMS53ZVY_js.a({family:a,scale:o,weight:200}),light:chunkYMS53ZVY_js.a({family:a,scale:o,weight:300}),normal:chunkYMS53ZVY_js.a({family:a,scale:o,weight:400}),medium:chunkYMS53ZVY_js.a({family:a,scale:o,weight:500}),semibold:chunkYMS53ZVY_js.a({family:a,scale:o,weight:600}),bold:chunkYMS53ZVY_js.a({family:a,scale:o,weight:700}),xbold:chunkYMS53ZVY_js.a({family:a,scale:o,weight:800}),black:chunkYMS53ZVY_js.a({family:a,scale:o,weight:900})},md:{thin:chunkYMS53ZVY_js.a({family:a,scale:h,weight:100}),xlight:chunkYMS53ZVY_js.a({family:a,scale:h,weight:200}),light:chunkYMS53ZVY_js.a({family:a,scale:h,weight:300}),normal:chunkYMS53ZVY_js.a({family:a,scale:h,weight:400}),medium:chunkYMS53ZVY_js.a({family:a,scale:h,weight:500}),semibold:chunkYMS53ZVY_js.a({family:a,scale:h,weight:600}),bold:chunkYMS53ZVY_js.a({family:a,scale:h,weight:700}),xbold:chunkYMS53ZVY_js.a({family:a,scale:h,weight:800}),black:chunkYMS53ZVY_js.a({family:a,scale:h,weight:900})},lg:{thin:chunkYMS53ZVY_js.a({family:a,scale:n,weight:100}),xlight:chunkYMS53ZVY_js.a({family:a,scale:n,weight:200}),light:chunkYMS53ZVY_js.a({family:a,scale:n,weight:300}),normal:chunkYMS53ZVY_js.a({family:a,scale:n,weight:400}),medium:chunkYMS53ZVY_js.a({family:a,scale:n,weight:500}),semibold:chunkYMS53ZVY_js.a({family:a,scale:n,weight:600}),bold:chunkYMS53ZVY_js.a({family:a,scale:n,weight:700}),xbold:chunkYMS53ZVY_js.a({family:a,scale:n,weight:800}),black:chunkYMS53ZVY_js.a({family:a,scale:n,weight:900})},xl:{thin:chunkYMS53ZVY_js.a({family:a,scale:c,weight:100}),xlight:chunkYMS53ZVY_js.a({family:a,scale:c,weight:200}),light:chunkYMS53ZVY_js.a({family:a,scale:c,weight:300}),normal:chunkYMS53ZVY_js.a({family:a,scale:c,weight:400}),medium:chunkYMS53ZVY_js.a({family:a,scale:c,weight:500}),semibold:chunkYMS53ZVY_js.a({family:a,scale:c,weight:600}),bold:chunkYMS53ZVY_js.a({family:a,scale:c,weight:700}),xbold:chunkYMS53ZVY_js.a({family:a,scale:c,weight:800}),black:chunkYMS53ZVY_js.a({family:a,scale:c,weight:900})},"2xl":{thin:chunkYMS53ZVY_js.a({family:a,scale:r,weight:100}),xlight:chunkYMS53ZVY_js.a({family:a,scale:r,weight:200}),light:chunkYMS53ZVY_js.a({family:a,scale:r,weight:300}),normal:chunkYMS53ZVY_js.a({family:a,scale:r,weight:400}),medium:chunkYMS53ZVY_js.a({family:a,scale:r,weight:500}),semibold:chunkYMS53ZVY_js.a({family:a,scale:r,weight:600}),bold:chunkYMS53ZVY_js.a({family:a,scale:r,weight:700}),xbold:chunkYMS53ZVY_js.a({family:a,scale:r,weight:800}),black:chunkYMS53ZVY_js.a({family:a,scale:r,weight:900})},"3xl":{thin:chunkYMS53ZVY_js.a({family:a,scale:y,weight:100}),xlight:chunkYMS53ZVY_js.a({family:a,scale:y,weight:200}),light:chunkYMS53ZVY_js.a({family:a,scale:y,weight:300}),normal:chunkYMS53ZVY_js.a({family:a,scale:y,weight:400}),medium:chunkYMS53ZVY_js.a({family:a,scale:y,weight:500}),semibold:chunkYMS53ZVY_js.a({family:a,scale:y,weight:600}),bold:chunkYMS53ZVY_js.a({family:a,scale:y,weight:700}),xbold:chunkYMS53ZVY_js.a({family:a,scale:y,weight:800}),black:chunkYMS53ZVY_js.a({family:a,scale:y,weight:900})},"4xl":{thin:chunkYMS53ZVY_js.a({family:a,scale:f,weight:100}),xlight:chunkYMS53ZVY_js.a({family:a,scale:f,weight:200}),light:chunkYMS53ZVY_js.a({family:a,scale:f,weight:300}),normal:chunkYMS53ZVY_js.a({family:a,scale:f,weight:400}),medium:chunkYMS53ZVY_js.a({family:a,scale:f,weight:500}),semibold:chunkYMS53ZVY_js.a({family:a,scale:f,weight:600}),bold:chunkYMS53ZVY_js.a({family:a,scale:f,weight:700}),xbold:chunkYMS53ZVY_js.a({family:a,scale:f,weight:800}),black:chunkYMS53ZVY_js.a({family:a,scale:f,weight:900})},"5xl":{thin:chunkYMS53ZVY_js.a({family:a,scale:w,weight:100}),xlight:chunkYMS53ZVY_js.a({family:a,scale:w,weight:200}),light:chunkYMS53ZVY_js.a({family:a,scale:w,weight:300}),normal:chunkYMS53ZVY_js.a({family:a,scale:w,weight:400}),medium:chunkYMS53ZVY_js.a({family:a,scale:w,weight:500}),semibold:chunkYMS53ZVY_js.a({family:a,scale:w,weight:600}),bold:chunkYMS53ZVY_js.a({family:a,scale:w,weight:700}),xbold:chunkYMS53ZVY_js.a({family:a,scale:w,weight:800}),black:chunkYMS53ZVY_js.a({family:a,scale:w,weight:900})},"6xl":{thin:chunkYMS53ZVY_js.a({family:a,scale:u,weight:100}),xlight:chunkYMS53ZVY_js.a({family:a,scale:u,weight:200}),light:chunkYMS53ZVY_js.a({family:a,scale:u,weight:300}),normal:chunkYMS53ZVY_js.a({family:a,scale:u,weight:400}),medium:chunkYMS53ZVY_js.a({family:a,scale:u,weight:500}),semibold:chunkYMS53ZVY_js.a({family:a,scale:u,weight:600}),bold:chunkYMS53ZVY_js.a({family:a,scale:u,weight:700}),xbold:chunkYMS53ZVY_js.a({family:a,scale:u,weight:800}),black:chunkYMS53ZVY_js.a({family:a,scale:u,weight:900})},"7xl":{thin:chunkYMS53ZVY_js.a({family:a,scale:d,weight:100}),xlight:chunkYMS53ZVY_js.a({family:a,scale:d,weight:200}),light:chunkYMS53ZVY_js.a({family:a,scale:d,weight:300}),normal:chunkYMS53ZVY_js.a({family:a,scale:d,weight:400}),medium:chunkYMS53ZVY_js.a({family:a,scale:d,weight:500}),semibold:chunkYMS53ZVY_js.a({family:a,scale:d,weight:600}),bold:chunkYMS53ZVY_js.a({family:a,scale:d,weight:700}),xbold:chunkYMS53ZVY_js.a({family:a,scale:d,weight:800}),black:chunkYMS53ZVY_js.a({family:a,scale:d,weight:900})},"8xl":{thin:chunkYMS53ZVY_js.a({family:a,scale:b,weight:100}),xlight:chunkYMS53ZVY_js.a({family:a,scale:b,weight:200}),light:chunkYMS53ZVY_js.a({family:a,scale:b,weight:300}),normal:chunkYMS53ZVY_js.a({family:a,scale:b,weight:400}),medium:chunkYMS53ZVY_js.a({family:a,scale:b,weight:500}),semibold:chunkYMS53ZVY_js.a({family:a,scale:b,weight:600}),bold:chunkYMS53ZVY_js.a({family:a,scale:b,weight:700}),xbold:chunkYMS53ZVY_js.a({family:a,scale:b,weight:800}),black:chunkYMS53ZVY_js.a({family:a,scale:b,weight:900})},"9xl":{thin:chunkYMS53ZVY_js.a({family:a,scale:x,weight:100}),xlight:chunkYMS53ZVY_js.a({family:a,scale:x,weight:200}),light:chunkYMS53ZVY_js.a({family:a,scale:x,weight:300}),normal:chunkYMS53ZVY_js.a({family:a,scale:x,weight:400}),medium:chunkYMS53ZVY_js.a({family:a,scale:x,weight:500}),semibold:chunkYMS53ZVY_js.a({family:a,scale:x,weight:600}),bold:chunkYMS53ZVY_js.a({family:a,scale:x,weight:700}),xbold:chunkYMS53ZVY_js.a({family:a,scale:x,weight:800}),black:chunkYMS53ZVY_js.a({family:a,scale:x,weight:900})}},accent:{xs:{thin:chunkYMS53ZVY_js.a({family:l,scale:g,weight:100}),xlight:chunkYMS53ZVY_js.a({family:l,scale:g,weight:200}),light:chunkYMS53ZVY_js.a({family:l,scale:g,weight:300}),normal:chunkYMS53ZVY_js.a({family:l,scale:g,weight:400}),medium:chunkYMS53ZVY_js.a({family:l,scale:g,weight:500}),semibold:chunkYMS53ZVY_js.a({family:l,scale:g,weight:600}),bold:chunkYMS53ZVY_js.a({family:l,scale:g,weight:700}),xbold:chunkYMS53ZVY_js.a({family:l,scale:g,weight:800}),black:chunkYMS53ZVY_js.a({family:l,scale:g,weight:900})},sm:{thin:chunkYMS53ZVY_js.a({family:l,scale:o,weight:100}),xlight:chunkYMS53ZVY_js.a({family:l,scale:o,weight:200}),light:chunkYMS53ZVY_js.a({family:l,scale:o,weight:300}),normal:chunkYMS53ZVY_js.a({family:l,scale:o,weight:400}),medium:chunkYMS53ZVY_js.a({family:l,scale:o,weight:500}),semibold:chunkYMS53ZVY_js.a({family:l,scale:o,weight:600}),bold:chunkYMS53ZVY_js.a({family:l,scale:o,weight:700}),xbold:chunkYMS53ZVY_js.a({family:l,scale:o,weight:800}),black:chunkYMS53ZVY_js.a({family:l,scale:o,weight:900})},md:{thin:chunkYMS53ZVY_js.a({family:l,scale:h,weight:100}),xlight:chunkYMS53ZVY_js.a({family:l,scale:h,weight:200}),light:chunkYMS53ZVY_js.a({family:l,scale:h,weight:300}),normal:chunkYMS53ZVY_js.a({family:l,scale:h,weight:400}),medium:chunkYMS53ZVY_js.a({family:l,scale:h,weight:500}),semibold:chunkYMS53ZVY_js.a({family:l,scale:h,weight:600}),bold:chunkYMS53ZVY_js.a({family:l,scale:h,weight:700}),xbold:chunkYMS53ZVY_js.a({family:l,scale:h,weight:800}),black:chunkYMS53ZVY_js.a({family:l,scale:h,weight:900})},lg:{thin:chunkYMS53ZVY_js.a({family:l,scale:n,weight:100}),xlight:chunkYMS53ZVY_js.a({family:l,scale:n,weight:200}),light:chunkYMS53ZVY_js.a({family:l,scale:n,weight:300}),normal:chunkYMS53ZVY_js.a({family:l,scale:n,weight:400}),medium:chunkYMS53ZVY_js.a({family:l,scale:n,weight:500}),semibold:chunkYMS53ZVY_js.a({family:l,scale:n,weight:600}),bold:chunkYMS53ZVY_js.a({family:l,scale:n,weight:700}),xbold:chunkYMS53ZVY_js.a({family:l,scale:n,weight:800}),black:chunkYMS53ZVY_js.a({family:l,scale:n,weight:900})},xl:{thin:chunkYMS53ZVY_js.a({family:l,scale:c,weight:100}),xlight:chunkYMS53ZVY_js.a({family:l,scale:c,weight:200}),light:chunkYMS53ZVY_js.a({family:l,scale:c,weight:300}),normal:chunkYMS53ZVY_js.a({family:l,scale:c,weight:400}),medium:chunkYMS53ZVY_js.a({family:l,scale:c,weight:500}),semibold:chunkYMS53ZVY_js.a({family:l,scale:c,weight:600}),bold:chunkYMS53ZVY_js.a({family:l,scale:c,weight:700}),xbold:chunkYMS53ZVY_js.a({family:l,scale:c,weight:800}),black:chunkYMS53ZVY_js.a({family:l,scale:c,weight:900})},"2xl":{thin:chunkYMS53ZVY_js.a({family:l,scale:r,weight:100}),xlight:chunkYMS53ZVY_js.a({family:l,scale:r,weight:200}),light:chunkYMS53ZVY_js.a({family:l,scale:r,weight:300}),normal:chunkYMS53ZVY_js.a({family:l,scale:r,weight:400}),medium:chunkYMS53ZVY_js.a({family:l,scale:r,weight:500}),semibold:chunkYMS53ZVY_js.a({family:l,scale:r,weight:600}),bold:chunkYMS53ZVY_js.a({family:l,scale:r,weight:700}),xbold:chunkYMS53ZVY_js.a({family:l,scale:r,weight:800}),black:chunkYMS53ZVY_js.a({family:l,scale:r,weight:900})},"3xl":{thin:chunkYMS53ZVY_js.a({family:l,scale:y,weight:100}),xlight:chunkYMS53ZVY_js.a({family:l,scale:y,weight:200}),light:chunkYMS53ZVY_js.a({family:l,scale:y,weight:300}),normal:chunkYMS53ZVY_js.a({family:l,scale:y,weight:400}),medium:chunkYMS53ZVY_js.a({family:l,scale:y,weight:500}),semibold:chunkYMS53ZVY_js.a({family:l,scale:y,weight:600}),bold:chunkYMS53ZVY_js.a({family:l,scale:y,weight:700}),xbold:chunkYMS53ZVY_js.a({family:l,scale:y,weight:800}),black:chunkYMS53ZVY_js.a({family:l,scale:y,weight:900})},"4xl":{thin:chunkYMS53ZVY_js.a({family:l,scale:f,weight:100}),xlight:chunkYMS53ZVY_js.a({family:l,scale:f,weight:200}),light:chunkYMS53ZVY_js.a({family:l,scale:f,weight:300}),normal:chunkYMS53ZVY_js.a({family:l,scale:f,weight:400}),medium:chunkYMS53ZVY_js.a({family:l,scale:f,weight:500}),semibold:chunkYMS53ZVY_js.a({family:l,scale:f,weight:600}),bold:chunkYMS53ZVY_js.a({family:l,scale:f,weight:700}),xbold:chunkYMS53ZVY_js.a({family:l,scale:f,weight:800}),black:chunkYMS53ZVY_js.a({family:l,scale:f,weight:900})},"5xl":{thin:chunkYMS53ZVY_js.a({family:l,scale:w,weight:100}),xlight:chunkYMS53ZVY_js.a({family:l,scale:w,weight:200}),light:chunkYMS53ZVY_js.a({family:l,scale:w,weight:300}),normal:chunkYMS53ZVY_js.a({family:l,scale:w,weight:400}),medium:chunkYMS53ZVY_js.a({family:l,scale:w,weight:500}),semibold:chunkYMS53ZVY_js.a({family:l,scale:w,weight:600}),bold:chunkYMS53ZVY_js.a({family:l,scale:w,weight:700}),xbold:chunkYMS53ZVY_js.a({family:l,scale:w,weight:800}),black:chunkYMS53ZVY_js.a({family:l,scale:w,weight:900})},"6xl":{thin:chunkYMS53ZVY_js.a({family:l,scale:u,weight:100}),xlight:chunkYMS53ZVY_js.a({family:l,scale:u,weight:200}),light:chunkYMS53ZVY_js.a({family:i,scale:l,weight:300}),normal:chunkYMS53ZVY_js.a({family:l,scale:u,weight:400}),medium:chunkYMS53ZVY_js.a({family:l,scale:u,weight:500}),semibold:chunkYMS53ZVY_js.a({family:l,scale:u,weight:600}),bold:chunkYMS53ZVY_js.a({family:l,scale:u,weight:700}),xbold:chunkYMS53ZVY_js.a({family:l,scale:u,weight:800}),black:chunkYMS53ZVY_js.a({family:l,scale:u,weight:900})},"7xl":{thin:chunkYMS53ZVY_js.a({family:l,scale:d,weight:100}),xlight:chunkYMS53ZVY_js.a({family:l,scale:d,weight:200}),light:chunkYMS53ZVY_js.a({family:l,scale:d,weight:300}),normal:chunkYMS53ZVY_js.a({family:l,scale:d,weight:400}),medium:chunkYMS53ZVY_js.a({family:l,scale:d,weight:500}),semibold:chunkYMS53ZVY_js.a({family:l,scale:d,weight:600}),bold:chunkYMS53ZVY_js.a({family:l,scale:d,weight:700}),xbold:chunkYMS53ZVY_js.a({family:l,scale:d,weight:800}),black:chunkYMS53ZVY_js.a({family:l,scale:d,weight:900})},"8xl":{thin:chunkYMS53ZVY_js.a({family:l,scale:b,weight:100}),xlight:chunkYMS53ZVY_js.a({family:l,scale:b,weight:200}),light:chunkYMS53ZVY_js.a({family:l,scale:b,weight:300}),normal:chunkYMS53ZVY_js.a({family:l,scale:b,weight:400}),medium:chunkYMS53ZVY_js.a({family:l,scale:b,weight:500}),semibold:chunkYMS53ZVY_js.a({family:l,scale:b,weight:600}),bold:chunkYMS53ZVY_js.a({family:l,scale:b,weight:700}),xbold:chunkYMS53ZVY_js.a({family:l,scale:b,weight:800}),black:chunkYMS53ZVY_js.a({family:l,scale:b,weight:900})},"9xl":{thin:chunkYMS53ZVY_js.a({family:l,scale:x,weight:100}),xlight:chunkYMS53ZVY_js.a({family:l,scale:x,weight:200}),light:chunkYMS53ZVY_js.a({family:l,scale:x,weight:300}),normal:chunkYMS53ZVY_js.a({family:l,scale:x,weight:400}),medium:chunkYMS53ZVY_js.a({family:l,scale:x,weight:500}),semibold:chunkYMS53ZVY_js.a({family:l,scale:x,weight:600}),bold:chunkYMS53ZVY_js.a({family:l,scale:x,weight:700}),xbold:chunkYMS53ZVY_js.a({family:l,scale:x,weight:800}),black:chunkYMS53ZVY_js.a({family:l,scale:x,weight:900})}}}};var j=({base:m,config:t})=>({resources:t?.resources?E({base:m.resources,config:t?.resources??[]}):m.resources,fonts:t?.fonts?U({base:m.fonts,config:t?.fonts?t.fonts:{}}):m.fonts});var p=({base:m,config:t})=>{let i=chunkLC4A3LMM_js.a(t,m.tint_500,["tint_500"]),l=m.tint_500!=i,a=chunkLC4A3LMM_js.a(t,l?i:m.tint_400,["tint_400"]),h=chunkLC4A3LMM_js.a(t,l?a:m.tint_300,["tint_300"]),o=chunkLC4A3LMM_js.a(t,l?h:m.tint_200,["tint_200"]),g=chunkLC4A3LMM_js.a(t,l?o:m.tint_100,["tint_100"]),n=chunkLC4A3LMM_js.a(t,l?g:m.tint_50,["tint_50"]),c=chunkLC4A3LMM_js.a(t,l?i:m.tint_600,["tint_600"]),r=chunkLC4A3LMM_js.a(t,l?c:m.tint_700,["tint_700"]),y=chunkLC4A3LMM_js.a(t,l?r:m.tint_800,["tint_800"]),f=chunkLC4A3LMM_js.a(t,l?y:m.tint_900,["tint_900"]),w=chunkLC4A3LMM_js.a(t,l?f:m.tint_950,["tint_950"]);return {tint_50:n,tint_100:g,tint_200:o,tint_300:h,tint_400:a,tint_500:i,tint_600:c,tint_700:r,tint_800:y,tint_900:f,tint_950:w}};var G=({base:m,config:t})=>t||m;var K=({base:m,config:t})=>({danger:p({base:m.danger,config:t.danger?t.danger:{}}),warning:p({base:m.warning,config:t.warning?t.warning:{}}),success:p({base:m.success,config:t.success?t.success:{}}),info:p({base:m.info,config:t.info?t.info:{}}),neutrals:p({base:m.neutrals,config:t.neutrals?t.neutrals:{}}),surfaces:p({base:m.surfaces,config:t.surfaces?t.surfaces:{}}),primary:p({base:m.primary,config:t.primary?t.primary:{}}),accent:p({base:m.accent,config:t.accent?t.accent:{}}),supporting:p({base:m.supporting,config:t.supporting?t.supporting:{}}),additional:G({base:m.additional,config:t?.additional?t.additional:[]})});var L=({base:m,config:t})=>({none:m.none,xs:t?t.xs:m.xs,sm:t?t.sm:m.sm,md:t?t.md:m.md,lg:t?t.lg:m.lg,xl:t?t.xl:m.xl,"2xl":t?t["2xl"]:m["2xl"],"3xl":t?t["3xl"]:m["3xl"],full:"9999px"});var te=({config:m})=>({alternate:O({base:chunkYMS53ZVY_js.r.alternate,config:m?.alternate?m.alternate:[]}),typography:m?.typography?j({base:chunkYMS53ZVY_js.r.typography,config:{resources:m.typography?.resources?m.typography.resources:[],fonts:m.typography?.fonts?m.typography.fonts:{}}}):chunkYMS53ZVY_js.r.typography,colors:m?.colors?K({base:chunkYMS53ZVY_js.r.colors,config:m.colors?m.colors:{}}):chunkYMS53ZVY_js.r.colors,utility:chunkYMS53ZVY_js.r.utility,radius:L({base:chunkYMS53ZVY_js.r.radius,config:m.radius})});var S=(l=>(l.STANDARD="STANDARD",l.INVERTED="INVERTED",l.CONTRAST="CONTRAST",l))(S||{});var se=react.createContext("STANDARD");var he=()=>chunkYMS53ZVY_js.t().alternate;var oe=()=>chunkYMS53ZVY_js.t().radius;var ge=()=>chunkYMS53ZVY_js.t().utility;

Object.defineProperty(exports, "ThemeCtx", {
    enumerable: true,
    get: function () { return chunkYMS53ZVY_js.s; }
});
Object.defineProperty(exports, "useTheme", {
    enumerable: true,
    get: function () { return chunkYMS53ZVY_js.t; }
});
Object.defineProperty(exports, "useThemeColor", {
    enumerable: true,
    get: function () { return chunkYMS53ZVY_js.u; }
});
Object.defineProperty(exports, "useThemeFonts", {
    enumerable: true,
    get: function () { return chunkYMS53ZVY_js.v; }
});
exports.StyleProviderAnimation = J;
exports.StyleProviderFontFace = Z;
exports.StyleProviderPreFlight = le;
exports.StyleProviderRouter = ae;
exports.ThemeBuilder = te;
exports.ThemeMode = S;
exports.ThemeModeCtx = se;
exports.useThemeAlternate = he;
exports.useThemeRadius = oe;
exports.useThemeUtility = ge;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map