'use strict';

var chunkVBSQLTIP_js = require('./chunk-VBSQLTIP.js');
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
`;var ie=styledComponents.createGlobalStyle`
    
    /* Reset all default a-styling when using external routing to prevent leaking of external styles */
    a {
        all: unset;
    }
`;var O=({base:m,config:t})=>t||m;var E=({base:m,config:t})=>t||m;var U=({base:m,config:t})=>{let a=chunkLC4A3LMM_js.a(t,chunkVBSQLTIP_js.b,["family","primary"]),l=chunkLC4A3LMM_js.a(t,chunkLC4A3LMM_js.a(t,chunkVBSQLTIP_js.c,["family","primary"]),["family","accent"]),i=chunkLC4A3LMM_js.a(t,chunkLC4A3LMM_js.a(t,chunkVBSQLTIP_js.d,["family","primary"]),["family","supporting"]),h=chunkLC4A3LMM_js.a(t,chunkVBSQLTIP_js.g,["scale","md"]),o=chunkLC4A3LMM_js.a(t,chunkVBSQLTIP_js.f,["scale","sm"]),r=chunkLC4A3LMM_js.a(t,chunkVBSQLTIP_js.e,["scale","xs"]),n=chunkLC4A3LMM_js.a(t,chunkVBSQLTIP_js.h,["scale","lg"]),c=chunkLC4A3LMM_js.a(t,chunkVBSQLTIP_js.i,["scale","xl"]),g=chunkLC4A3LMM_js.a(t,chunkVBSQLTIP_js.j,["scale","2xl"]),y=chunkLC4A3LMM_js.a(t,chunkVBSQLTIP_js.k,["scale","3xl"]),f=chunkLC4A3LMM_js.a(t,chunkVBSQLTIP_js.l,["scale","4xl"]),w=chunkLC4A3LMM_js.a(t,chunkVBSQLTIP_js.m,["scale","5xl"]),x=chunkLC4A3LMM_js.a(t,chunkVBSQLTIP_js.n,["scale","6xl"]),d=chunkLC4A3LMM_js.a(t,chunkVBSQLTIP_js.o,["scale","7xl"]),p=chunkLC4A3LMM_js.a(t,chunkVBSQLTIP_js.p,["scale","8xl"]),b=chunkLC4A3LMM_js.a(t,chunkVBSQLTIP_js.q,["scale","9xl"]);return {primary:{xs:{thin:chunkVBSQLTIP_js.a({family:a,scale:r,weight:100}),xlight:chunkVBSQLTIP_js.a({family:a,scale:r,weight:200}),light:chunkVBSQLTIP_js.a({family:a,scale:r,weight:300}),normal:chunkVBSQLTIP_js.a({family:a,scale:r,weight:400}),medium:chunkVBSQLTIP_js.a({family:a,scale:r,weight:500}),semibold:chunkVBSQLTIP_js.a({family:a,scale:r,weight:600}),bold:chunkVBSQLTIP_js.a({family:a,scale:r,weight:700}),xbold:chunkVBSQLTIP_js.a({family:a,scale:r,weight:800}),black:chunkVBSQLTIP_js.a({family:a,scale:r,weight:900})},sm:{thin:chunkVBSQLTIP_js.a({family:a,scale:o,weight:100}),xlight:chunkVBSQLTIP_js.a({family:a,scale:o,weight:200}),light:chunkVBSQLTIP_js.a({family:a,scale:o,weight:300}),normal:chunkVBSQLTIP_js.a({family:a,scale:o,weight:400}),medium:chunkVBSQLTIP_js.a({family:a,scale:o,weight:500}),semibold:chunkVBSQLTIP_js.a({family:a,scale:o,weight:600}),bold:chunkVBSQLTIP_js.a({family:a,scale:o,weight:700}),xbold:chunkVBSQLTIP_js.a({family:a,scale:o,weight:800}),black:chunkVBSQLTIP_js.a({family:a,scale:o,weight:900})},md:{thin:chunkVBSQLTIP_js.a({family:a,scale:h,weight:100}),xlight:chunkVBSQLTIP_js.a({family:a,scale:h,weight:200}),light:chunkVBSQLTIP_js.a({family:a,scale:h,weight:300}),normal:chunkVBSQLTIP_js.a({family:a,scale:h,weight:400}),medium:chunkVBSQLTIP_js.a({family:a,scale:h,weight:500}),semibold:chunkVBSQLTIP_js.a({family:a,scale:h,weight:600}),bold:chunkVBSQLTIP_js.a({family:a,scale:h,weight:700}),xbold:chunkVBSQLTIP_js.a({family:a,scale:h,weight:800}),black:chunkVBSQLTIP_js.a({family:a,scale:h,weight:900})},lg:{thin:chunkVBSQLTIP_js.a({family:a,scale:n,weight:100}),xlight:chunkVBSQLTIP_js.a({family:a,scale:n,weight:200}),light:chunkVBSQLTIP_js.a({family:a,scale:n,weight:300}),normal:chunkVBSQLTIP_js.a({family:a,scale:n,weight:400}),medium:chunkVBSQLTIP_js.a({family:a,scale:n,weight:500}),semibold:chunkVBSQLTIP_js.a({family:a,scale:n,weight:600}),bold:chunkVBSQLTIP_js.a({family:a,scale:n,weight:700}),xbold:chunkVBSQLTIP_js.a({family:a,scale:n,weight:800}),black:chunkVBSQLTIP_js.a({family:a,scale:n,weight:900})},xl:{thin:chunkVBSQLTIP_js.a({family:a,scale:c,weight:100}),xlight:chunkVBSQLTIP_js.a({family:a,scale:c,weight:200}),light:chunkVBSQLTIP_js.a({family:a,scale:c,weight:300}),normal:chunkVBSQLTIP_js.a({family:a,scale:c,weight:400}),medium:chunkVBSQLTIP_js.a({family:a,scale:c,weight:500}),semibold:chunkVBSQLTIP_js.a({family:a,scale:c,weight:600}),bold:chunkVBSQLTIP_js.a({family:a,scale:c,weight:700}),xbold:chunkVBSQLTIP_js.a({family:a,scale:c,weight:800}),black:chunkVBSQLTIP_js.a({family:a,scale:c,weight:900})},"2xl":{thin:chunkVBSQLTIP_js.a({family:a,scale:g,weight:100}),xlight:chunkVBSQLTIP_js.a({family:a,scale:g,weight:200}),light:chunkVBSQLTIP_js.a({family:a,scale:g,weight:300}),normal:chunkVBSQLTIP_js.a({family:a,scale:g,weight:400}),medium:chunkVBSQLTIP_js.a({family:a,scale:g,weight:500}),semibold:chunkVBSQLTIP_js.a({family:a,scale:g,weight:600}),bold:chunkVBSQLTIP_js.a({family:a,scale:g,weight:700}),xbold:chunkVBSQLTIP_js.a({family:a,scale:g,weight:800}),black:chunkVBSQLTIP_js.a({family:a,scale:g,weight:900})},"3xl":{thin:chunkVBSQLTIP_js.a({family:a,scale:y,weight:100}),xlight:chunkVBSQLTIP_js.a({family:a,scale:y,weight:200}),light:chunkVBSQLTIP_js.a({family:a,scale:y,weight:300}),normal:chunkVBSQLTIP_js.a({family:a,scale:y,weight:400}),medium:chunkVBSQLTIP_js.a({family:a,scale:y,weight:500}),semibold:chunkVBSQLTIP_js.a({family:a,scale:y,weight:600}),bold:chunkVBSQLTIP_js.a({family:a,scale:y,weight:700}),xbold:chunkVBSQLTIP_js.a({family:a,scale:y,weight:800}),black:chunkVBSQLTIP_js.a({family:a,scale:y,weight:900})},"4xl":{thin:chunkVBSQLTIP_js.a({family:a,scale:f,weight:100}),xlight:chunkVBSQLTIP_js.a({family:a,scale:f,weight:200}),light:chunkVBSQLTIP_js.a({family:a,scale:f,weight:300}),normal:chunkVBSQLTIP_js.a({family:a,scale:f,weight:400}),medium:chunkVBSQLTIP_js.a({family:a,scale:f,weight:500}),semibold:chunkVBSQLTIP_js.a({family:a,scale:f,weight:600}),bold:chunkVBSQLTIP_js.a({family:a,scale:f,weight:700}),xbold:chunkVBSQLTIP_js.a({family:a,scale:f,weight:800}),black:chunkVBSQLTIP_js.a({family:a,scale:f,weight:900})},"5xl":{thin:chunkVBSQLTIP_js.a({family:a,scale:w,weight:100}),xlight:chunkVBSQLTIP_js.a({family:a,scale:w,weight:200}),light:chunkVBSQLTIP_js.a({family:a,scale:w,weight:300}),normal:chunkVBSQLTIP_js.a({family:a,scale:w,weight:400}),medium:chunkVBSQLTIP_js.a({family:a,scale:w,weight:500}),semibold:chunkVBSQLTIP_js.a({family:a,scale:w,weight:600}),bold:chunkVBSQLTIP_js.a({family:a,scale:w,weight:700}),xbold:chunkVBSQLTIP_js.a({family:a,scale:w,weight:800}),black:chunkVBSQLTIP_js.a({family:a,scale:w,weight:900})},"6xl":{thin:chunkVBSQLTIP_js.a({family:a,scale:x,weight:100}),xlight:chunkVBSQLTIP_js.a({family:a,scale:x,weight:200}),light:chunkVBSQLTIP_js.a({family:a,scale:x,weight:300}),normal:chunkVBSQLTIP_js.a({family:a,scale:x,weight:400}),medium:chunkVBSQLTIP_js.a({family:a,scale:x,weight:500}),semibold:chunkVBSQLTIP_js.a({family:a,scale:x,weight:600}),bold:chunkVBSQLTIP_js.a({family:a,scale:x,weight:700}),xbold:chunkVBSQLTIP_js.a({family:a,scale:x,weight:800}),black:chunkVBSQLTIP_js.a({family:a,scale:x,weight:900})},"7xl":{thin:chunkVBSQLTIP_js.a({family:a,scale:d,weight:100}),xlight:chunkVBSQLTIP_js.a({family:a,scale:d,weight:200}),light:chunkVBSQLTIP_js.a({family:a,scale:d,weight:300}),normal:chunkVBSQLTIP_js.a({family:a,scale:d,weight:400}),medium:chunkVBSQLTIP_js.a({family:a,scale:d,weight:500}),semibold:chunkVBSQLTIP_js.a({family:a,scale:d,weight:600}),bold:chunkVBSQLTIP_js.a({family:a,scale:d,weight:700}),xbold:chunkVBSQLTIP_js.a({family:a,scale:d,weight:800}),black:chunkVBSQLTIP_js.a({family:a,scale:d,weight:900})},"8xl":{thin:chunkVBSQLTIP_js.a({family:a,scale:p,weight:100}),xlight:chunkVBSQLTIP_js.a({family:a,scale:p,weight:200}),light:chunkVBSQLTIP_js.a({family:a,scale:p,weight:300}),normal:chunkVBSQLTIP_js.a({family:a,scale:p,weight:400}),medium:chunkVBSQLTIP_js.a({family:a,scale:p,weight:500}),semibold:chunkVBSQLTIP_js.a({family:a,scale:p,weight:600}),bold:chunkVBSQLTIP_js.a({family:a,scale:p,weight:700}),xbold:chunkVBSQLTIP_js.a({family:a,scale:p,weight:800}),black:chunkVBSQLTIP_js.a({family:a,scale:p,weight:900})},"9xl":{thin:chunkVBSQLTIP_js.a({family:a,scale:b,weight:100}),xlight:chunkVBSQLTIP_js.a({family:a,scale:b,weight:200}),light:chunkVBSQLTIP_js.a({family:a,scale:b,weight:300}),normal:chunkVBSQLTIP_js.a({family:a,scale:b,weight:400}),medium:chunkVBSQLTIP_js.a({family:a,scale:b,weight:500}),semibold:chunkVBSQLTIP_js.a({family:a,scale:b,weight:600}),bold:chunkVBSQLTIP_js.a({family:a,scale:b,weight:700}),xbold:chunkVBSQLTIP_js.a({family:a,scale:b,weight:800}),black:chunkVBSQLTIP_js.a({family:a,scale:b,weight:900})}},supporting:{xs:{thin:chunkVBSQLTIP_js.a({family:i,scale:r,weight:100}),xlight:chunkVBSQLTIP_js.a({family:i,scale:r,weight:200}),light:chunkVBSQLTIP_js.a({family:i,scale:r,weight:300}),normal:chunkVBSQLTIP_js.a({family:i,scale:r,weight:400}),medium:chunkVBSQLTIP_js.a({family:i,scale:r,weight:500}),semibold:chunkVBSQLTIP_js.a({family:i,scale:r,weight:600}),bold:chunkVBSQLTIP_js.a({family:i,scale:r,weight:700}),xbold:chunkVBSQLTIP_js.a({family:i,scale:r,weight:800}),black:chunkVBSQLTIP_js.a({family:i,scale:r,weight:900})},sm:{thin:chunkVBSQLTIP_js.a({family:i,scale:o,weight:100}),xlight:chunkVBSQLTIP_js.a({family:i,scale:o,weight:200}),light:chunkVBSQLTIP_js.a({family:i,scale:o,weight:300}),normal:chunkVBSQLTIP_js.a({family:i,scale:o,weight:400}),medium:chunkVBSQLTIP_js.a({family:i,scale:o,weight:500}),semibold:chunkVBSQLTIP_js.a({family:i,scale:o,weight:600}),bold:chunkVBSQLTIP_js.a({family:i,scale:o,weight:700}),xbold:chunkVBSQLTIP_js.a({family:i,scale:o,weight:800}),black:chunkVBSQLTIP_js.a({family:i,scale:o,weight:900})},md:{thin:chunkVBSQLTIP_js.a({family:i,scale:h,weight:100}),xlight:chunkVBSQLTIP_js.a({family:i,scale:h,weight:200}),light:chunkVBSQLTIP_js.a({family:i,scale:h,weight:300}),normal:chunkVBSQLTIP_js.a({family:i,scale:h,weight:400}),medium:chunkVBSQLTIP_js.a({family:i,scale:h,weight:500}),semibold:chunkVBSQLTIP_js.a({family:i,scale:h,weight:600}),bold:chunkVBSQLTIP_js.a({family:i,scale:h,weight:700}),xbold:chunkVBSQLTIP_js.a({family:i,scale:h,weight:800}),black:chunkVBSQLTIP_js.a({family:i,scale:h,weight:900})},lg:{thin:chunkVBSQLTIP_js.a({family:i,scale:n,weight:100}),xlight:chunkVBSQLTIP_js.a({family:i,scale:n,weight:200}),light:chunkVBSQLTIP_js.a({family:i,scale:n,weight:300}),normal:chunkVBSQLTIP_js.a({family:i,scale:n,weight:400}),medium:chunkVBSQLTIP_js.a({family:i,scale:n,weight:500}),semibold:chunkVBSQLTIP_js.a({family:i,scale:n,weight:600}),bold:chunkVBSQLTIP_js.a({family:i,scale:n,weight:700}),xbold:chunkVBSQLTIP_js.a({family:i,scale:n,weight:800}),black:chunkVBSQLTIP_js.a({family:i,scale:n,weight:900})},xl:{thin:chunkVBSQLTIP_js.a({family:i,scale:c,weight:100}),xlight:chunkVBSQLTIP_js.a({family:i,scale:c,weight:200}),light:chunkVBSQLTIP_js.a({family:i,scale:c,weight:300}),normal:chunkVBSQLTIP_js.a({family:i,scale:c,weight:400}),medium:chunkVBSQLTIP_js.a({family:i,scale:c,weight:500}),semibold:chunkVBSQLTIP_js.a({family:i,scale:c,weight:600}),bold:chunkVBSQLTIP_js.a({family:i,scale:c,weight:700}),xbold:chunkVBSQLTIP_js.a({family:i,scale:c,weight:800}),black:chunkVBSQLTIP_js.a({family:i,scale:c,weight:900})},"2xl":{thin:chunkVBSQLTIP_js.a({family:i,scale:g,weight:100}),xlight:chunkVBSQLTIP_js.a({family:i,scale:g,weight:200}),light:chunkVBSQLTIP_js.a({family:i,scale:g,weight:300}),normal:chunkVBSQLTIP_js.a({family:i,scale:g,weight:400}),medium:chunkVBSQLTIP_js.a({family:i,scale:g,weight:500}),semibold:chunkVBSQLTIP_js.a({family:i,scale:g,weight:600}),bold:chunkVBSQLTIP_js.a({family:i,scale:g,weight:700}),xbold:chunkVBSQLTIP_js.a({family:i,scale:g,weight:800}),black:chunkVBSQLTIP_js.a({family:i,scale:g,weight:900})},"3xl":{thin:chunkVBSQLTIP_js.a({family:i,scale:y,weight:100}),xlight:chunkVBSQLTIP_js.a({family:i,scale:y,weight:200}),light:chunkVBSQLTIP_js.a({family:i,scale:y,weight:300}),normal:chunkVBSQLTIP_js.a({family:i,scale:y,weight:400}),medium:chunkVBSQLTIP_js.a({family:i,scale:y,weight:500}),semibold:chunkVBSQLTIP_js.a({family:i,scale:y,weight:600}),bold:chunkVBSQLTIP_js.a({family:i,scale:y,weight:700}),xbold:chunkVBSQLTIP_js.a({family:i,scale:y,weight:800}),black:chunkVBSQLTIP_js.a({family:i,scale:y,weight:900})},"4xl":{thin:chunkVBSQLTIP_js.a({family:i,scale:f,weight:100}),xlight:chunkVBSQLTIP_js.a({family:i,scale:f,weight:200}),light:chunkVBSQLTIP_js.a({family:i,scale:f,weight:300}),normal:chunkVBSQLTIP_js.a({family:i,scale:f,weight:400}),medium:chunkVBSQLTIP_js.a({family:i,scale:f,weight:500}),semibold:chunkVBSQLTIP_js.a({family:i,scale:f,weight:600}),bold:chunkVBSQLTIP_js.a({family:i,scale:f,weight:700}),xbold:chunkVBSQLTIP_js.a({family:i,scale:f,weight:800}),black:chunkVBSQLTIP_js.a({family:i,scale:f,weight:900})},"5xl":{thin:chunkVBSQLTIP_js.a({family:i,scale:w,weight:100}),xlight:chunkVBSQLTIP_js.a({family:i,scale:w,weight:200}),light:chunkVBSQLTIP_js.a({family:i,scale:w,weight:300}),normal:chunkVBSQLTIP_js.a({family:i,scale:w,weight:400}),medium:chunkVBSQLTIP_js.a({family:i,scale:w,weight:500}),semibold:chunkVBSQLTIP_js.a({family:i,scale:w,weight:600}),bold:chunkVBSQLTIP_js.a({family:i,scale:w,weight:700}),xbold:chunkVBSQLTIP_js.a({family:i,scale:w,weight:800}),black:chunkVBSQLTIP_js.a({family:i,scale:w,weight:900})},"6xl":{thin:chunkVBSQLTIP_js.a({family:i,scale:x,weight:100}),xlight:chunkVBSQLTIP_js.a({family:i,scale:x,weight:200}),light:chunkVBSQLTIP_js.a({family:i,scale:x,weight:300}),normal:chunkVBSQLTIP_js.a({family:i,scale:x,weight:400}),medium:chunkVBSQLTIP_js.a({family:i,scale:x,weight:500}),semibold:chunkVBSQLTIP_js.a({family:i,scale:x,weight:600}),bold:chunkVBSQLTIP_js.a({family:i,scale:x,weight:700}),xbold:chunkVBSQLTIP_js.a({family:i,scale:x,weight:800}),black:chunkVBSQLTIP_js.a({family:i,scale:x,weight:900})},"7xl":{thin:chunkVBSQLTIP_js.a({family:i,scale:d,weight:100}),xlight:chunkVBSQLTIP_js.a({family:i,scale:d,weight:200}),light:chunkVBSQLTIP_js.a({family:i,scale:d,weight:300}),normal:chunkVBSQLTIP_js.a({family:i,scale:d,weight:400}),medium:chunkVBSQLTIP_js.a({family:i,scale:d,weight:500}),semibold:chunkVBSQLTIP_js.a({family:i,scale:d,weight:600}),bold:chunkVBSQLTIP_js.a({family:i,scale:d,weight:700}),xbold:chunkVBSQLTIP_js.a({family:i,scale:d,weight:800}),black:chunkVBSQLTIP_js.a({family:i,scale:d,weight:900})},"8xl":{thin:chunkVBSQLTIP_js.a({family:i,scale:p,weight:100}),xlight:chunkVBSQLTIP_js.a({family:i,scale:p,weight:200}),light:chunkVBSQLTIP_js.a({family:i,scale:p,weight:300}),normal:chunkVBSQLTIP_js.a({family:i,scale:p,weight:400}),medium:chunkVBSQLTIP_js.a({family:i,scale:p,weight:500}),semibold:chunkVBSQLTIP_js.a({family:i,scale:p,weight:600}),bold:chunkVBSQLTIP_js.a({family:i,scale:p,weight:700}),xbold:chunkVBSQLTIP_js.a({family:i,scale:p,weight:800}),black:chunkVBSQLTIP_js.a({family:i,scale:p,weight:900})},"9xl":{thin:chunkVBSQLTIP_js.a({family:i,scale:b,weight:100}),xlight:chunkVBSQLTIP_js.a({family:i,scale:b,weight:200}),light:chunkVBSQLTIP_js.a({family:i,scale:b,weight:300}),normal:chunkVBSQLTIP_js.a({family:i,scale:b,weight:400}),medium:chunkVBSQLTIP_js.a({family:i,scale:b,weight:500}),semibold:chunkVBSQLTIP_js.a({family:i,scale:b,weight:600}),bold:chunkVBSQLTIP_js.a({family:i,scale:b,weight:700}),xbold:chunkVBSQLTIP_js.a({family:i,scale:b,weight:800}),black:chunkVBSQLTIP_js.a({family:i,scale:b,weight:900})}},accent:{xs:{thin:chunkVBSQLTIP_js.a({family:l,scale:r,weight:100}),xlight:chunkVBSQLTIP_js.a({family:l,scale:r,weight:200}),light:chunkVBSQLTIP_js.a({family:l,scale:r,weight:300}),normal:chunkVBSQLTIP_js.a({family:l,scale:r,weight:400}),medium:chunkVBSQLTIP_js.a({family:l,scale:r,weight:500}),semibold:chunkVBSQLTIP_js.a({family:l,scale:r,weight:600}),bold:chunkVBSQLTIP_js.a({family:l,scale:r,weight:700}),xbold:chunkVBSQLTIP_js.a({family:l,scale:r,weight:800}),black:chunkVBSQLTIP_js.a({family:l,scale:r,weight:900})},sm:{thin:chunkVBSQLTIP_js.a({family:l,scale:o,weight:100}),xlight:chunkVBSQLTIP_js.a({family:l,scale:o,weight:200}),light:chunkVBSQLTIP_js.a({family:l,scale:o,weight:300}),normal:chunkVBSQLTIP_js.a({family:l,scale:o,weight:400}),medium:chunkVBSQLTIP_js.a({family:l,scale:o,weight:500}),semibold:chunkVBSQLTIP_js.a({family:l,scale:o,weight:600}),bold:chunkVBSQLTIP_js.a({family:l,scale:o,weight:700}),xbold:chunkVBSQLTIP_js.a({family:l,scale:o,weight:800}),black:chunkVBSQLTIP_js.a({family:l,scale:o,weight:900})},md:{thin:chunkVBSQLTIP_js.a({family:l,scale:h,weight:100}),xlight:chunkVBSQLTIP_js.a({family:l,scale:h,weight:200}),light:chunkVBSQLTIP_js.a({family:l,scale:h,weight:300}),normal:chunkVBSQLTIP_js.a({family:l,scale:h,weight:400}),medium:chunkVBSQLTIP_js.a({family:l,scale:h,weight:500}),semibold:chunkVBSQLTIP_js.a({family:l,scale:h,weight:600}),bold:chunkVBSQLTIP_js.a({family:l,scale:h,weight:700}),xbold:chunkVBSQLTIP_js.a({family:l,scale:h,weight:800}),black:chunkVBSQLTIP_js.a({family:l,scale:h,weight:900})},lg:{thin:chunkVBSQLTIP_js.a({family:l,scale:n,weight:100}),xlight:chunkVBSQLTIP_js.a({family:l,scale:n,weight:200}),light:chunkVBSQLTIP_js.a({family:l,scale:n,weight:300}),normal:chunkVBSQLTIP_js.a({family:l,scale:n,weight:400}),medium:chunkVBSQLTIP_js.a({family:l,scale:n,weight:500}),semibold:chunkVBSQLTIP_js.a({family:l,scale:n,weight:600}),bold:chunkVBSQLTIP_js.a({family:l,scale:n,weight:700}),xbold:chunkVBSQLTIP_js.a({family:l,scale:n,weight:800}),black:chunkVBSQLTIP_js.a({family:l,scale:n,weight:900})},xl:{thin:chunkVBSQLTIP_js.a({family:l,scale:c,weight:100}),xlight:chunkVBSQLTIP_js.a({family:l,scale:c,weight:200}),light:chunkVBSQLTIP_js.a({family:l,scale:c,weight:300}),normal:chunkVBSQLTIP_js.a({family:l,scale:c,weight:400}),medium:chunkVBSQLTIP_js.a({family:l,scale:c,weight:500}),semibold:chunkVBSQLTIP_js.a({family:l,scale:c,weight:600}),bold:chunkVBSQLTIP_js.a({family:l,scale:c,weight:700}),xbold:chunkVBSQLTIP_js.a({family:l,scale:c,weight:800}),black:chunkVBSQLTIP_js.a({family:l,scale:c,weight:900})},"2xl":{thin:chunkVBSQLTIP_js.a({family:l,scale:g,weight:100}),xlight:chunkVBSQLTIP_js.a({family:l,scale:g,weight:200}),light:chunkVBSQLTIP_js.a({family:l,scale:g,weight:300}),normal:chunkVBSQLTIP_js.a({family:l,scale:g,weight:400}),medium:chunkVBSQLTIP_js.a({family:l,scale:g,weight:500}),semibold:chunkVBSQLTIP_js.a({family:l,scale:g,weight:600}),bold:chunkVBSQLTIP_js.a({family:l,scale:g,weight:700}),xbold:chunkVBSQLTIP_js.a({family:l,scale:g,weight:800}),black:chunkVBSQLTIP_js.a({family:l,scale:g,weight:900})},"3xl":{thin:chunkVBSQLTIP_js.a({family:l,scale:y,weight:100}),xlight:chunkVBSQLTIP_js.a({family:l,scale:y,weight:200}),light:chunkVBSQLTIP_js.a({family:l,scale:y,weight:300}),normal:chunkVBSQLTIP_js.a({family:l,scale:y,weight:400}),medium:chunkVBSQLTIP_js.a({family:l,scale:y,weight:500}),semibold:chunkVBSQLTIP_js.a({family:l,scale:y,weight:600}),bold:chunkVBSQLTIP_js.a({family:l,scale:y,weight:700}),xbold:chunkVBSQLTIP_js.a({family:l,scale:y,weight:800}),black:chunkVBSQLTIP_js.a({family:l,scale:y,weight:900})},"4xl":{thin:chunkVBSQLTIP_js.a({family:l,scale:f,weight:100}),xlight:chunkVBSQLTIP_js.a({family:l,scale:f,weight:200}),light:chunkVBSQLTIP_js.a({family:l,scale:f,weight:300}),normal:chunkVBSQLTIP_js.a({family:l,scale:f,weight:400}),medium:chunkVBSQLTIP_js.a({family:l,scale:f,weight:500}),semibold:chunkVBSQLTIP_js.a({family:l,scale:f,weight:600}),bold:chunkVBSQLTIP_js.a({family:l,scale:f,weight:700}),xbold:chunkVBSQLTIP_js.a({family:l,scale:f,weight:800}),black:chunkVBSQLTIP_js.a({family:l,scale:f,weight:900})},"5xl":{thin:chunkVBSQLTIP_js.a({family:l,scale:w,weight:100}),xlight:chunkVBSQLTIP_js.a({family:l,scale:w,weight:200}),light:chunkVBSQLTIP_js.a({family:l,scale:w,weight:300}),normal:chunkVBSQLTIP_js.a({family:l,scale:w,weight:400}),medium:chunkVBSQLTIP_js.a({family:l,scale:w,weight:500}),semibold:chunkVBSQLTIP_js.a({family:l,scale:w,weight:600}),bold:chunkVBSQLTIP_js.a({family:l,scale:w,weight:700}),xbold:chunkVBSQLTIP_js.a({family:l,scale:w,weight:800}),black:chunkVBSQLTIP_js.a({family:l,scale:w,weight:900})},"6xl":{thin:chunkVBSQLTIP_js.a({family:l,scale:x,weight:100}),xlight:chunkVBSQLTIP_js.a({family:l,scale:x,weight:200}),light:chunkVBSQLTIP_js.a({family:a,scale:l,weight:300}),normal:chunkVBSQLTIP_js.a({family:l,scale:x,weight:400}),medium:chunkVBSQLTIP_js.a({family:l,scale:x,weight:500}),semibold:chunkVBSQLTIP_js.a({family:l,scale:x,weight:600}),bold:chunkVBSQLTIP_js.a({family:l,scale:x,weight:700}),xbold:chunkVBSQLTIP_js.a({family:l,scale:x,weight:800}),black:chunkVBSQLTIP_js.a({family:l,scale:x,weight:900})},"7xl":{thin:chunkVBSQLTIP_js.a({family:l,scale:d,weight:100}),xlight:chunkVBSQLTIP_js.a({family:l,scale:d,weight:200}),light:chunkVBSQLTIP_js.a({family:l,scale:d,weight:300}),normal:chunkVBSQLTIP_js.a({family:l,scale:d,weight:400}),medium:chunkVBSQLTIP_js.a({family:l,scale:d,weight:500}),semibold:chunkVBSQLTIP_js.a({family:l,scale:d,weight:600}),bold:chunkVBSQLTIP_js.a({family:l,scale:d,weight:700}),xbold:chunkVBSQLTIP_js.a({family:l,scale:d,weight:800}),black:chunkVBSQLTIP_js.a({family:l,scale:d,weight:900})},"8xl":{thin:chunkVBSQLTIP_js.a({family:l,scale:p,weight:100}),xlight:chunkVBSQLTIP_js.a({family:l,scale:p,weight:200}),light:chunkVBSQLTIP_js.a({family:l,scale:p,weight:300}),normal:chunkVBSQLTIP_js.a({family:l,scale:p,weight:400}),medium:chunkVBSQLTIP_js.a({family:l,scale:p,weight:500}),semibold:chunkVBSQLTIP_js.a({family:l,scale:p,weight:600}),bold:chunkVBSQLTIP_js.a({family:l,scale:p,weight:700}),xbold:chunkVBSQLTIP_js.a({family:l,scale:p,weight:800}),black:chunkVBSQLTIP_js.a({family:l,scale:p,weight:900})},"9xl":{thin:chunkVBSQLTIP_js.a({family:l,scale:b,weight:100}),xlight:chunkVBSQLTIP_js.a({family:l,scale:b,weight:200}),light:chunkVBSQLTIP_js.a({family:l,scale:b,weight:300}),normal:chunkVBSQLTIP_js.a({family:l,scale:b,weight:400}),medium:chunkVBSQLTIP_js.a({family:l,scale:b,weight:500}),semibold:chunkVBSQLTIP_js.a({family:l,scale:b,weight:600}),bold:chunkVBSQLTIP_js.a({family:l,scale:b,weight:700}),xbold:chunkVBSQLTIP_js.a({family:l,scale:b,weight:800}),black:chunkVBSQLTIP_js.a({family:l,scale:b,weight:900})}}}};var j=({base:m,config:t})=>({resources:t?.resources?E({base:m.resources,config:t?.resources??[]}):m.resources,fonts:t?.fonts?U({base:m.fonts,config:t?.fonts?t.fonts:{}}):m.fonts});var u=({base:m,config:t})=>{let a=chunkLC4A3LMM_js.a(t,m.tint_500,["tint_500"]),l=m.tint_500!=a,i=chunkLC4A3LMM_js.a(t,l?a:m.tint_400,["tint_400"]),h=chunkLC4A3LMM_js.a(t,l?i:m.tint_300,["tint_300"]),o=chunkLC4A3LMM_js.a(t,l?h:m.tint_200,["tint_200"]),r=chunkLC4A3LMM_js.a(t,l?o:m.tint_100,["tint_100"]),n=chunkLC4A3LMM_js.a(t,l?r:m.tint_50,["tint_50"]),c=chunkLC4A3LMM_js.a(t,l?a:m.tint_600,["tint_600"]),g=chunkLC4A3LMM_js.a(t,l?c:m.tint_700,["tint_700"]),y=chunkLC4A3LMM_js.a(t,l?g:m.tint_800,["tint_800"]),f=chunkLC4A3LMM_js.a(t,l?y:m.tint_900,["tint_900"]),w=chunkLC4A3LMM_js.a(t,l?f:m.tint_950,["tint_950"]);return {tint_50:n,tint_100:r,tint_200:o,tint_300:h,tint_400:i,tint_500:a,tint_600:c,tint_700:g,tint_800:y,tint_900:f,tint_950:w}};var G=({base:m,config:t})=>t||m;var K=({base:m,config:t})=>({danger:u({base:m.danger,config:t.danger?t.danger:{}}),warning:u({base:m.warning,config:t.warning?t.warning:{}}),success:u({base:m.success,config:t.success?t.success:{}}),info:u({base:m.info,config:t.info?t.info:{}}),neutrals:u({base:m.neutrals,config:t.neutrals?t.neutrals:{}}),surfaces:u({base:m.surfaces,config:t.surfaces?t.surfaces:{}}),primary:u({base:m.primary,config:t.primary?t.primary:{}}),accent:u({base:m.accent,config:t.accent?t.accent:{}}),supporting:u({base:m.supporting,config:t.supporting?t.supporting:{}}),map:{label:{all:t.map?.label?.all?t.map.label.all:m.map.label.all,water:t.map?.label?.water?t.map.label.water:m.map.label.water,highway:t.map?.label?.highway?t.map.label.highway:m.map.label.highway,road:t.map?.label?.road?t.map.label.road:m.map.label.road},border:{country:t.map?.border?.country?t.map.border.country:m.map.border.country,highway:t.map?.border?.highway?t.map.border.highway:m.map.border.highway,road:t.map?.border?.road?t.map.border.road:m.map.border.road},landscape:{all:t.map?.landscape?.all?t.map.landscape.all:m.map.landscape.all,artificial:t.map?.landscape?.artificial?t.map.landscape.artificial:m.map.landscape.artificial,terrain:t.map?.landscape?.terrain?t.map.landscape.terrain:m.map.landscape.terrain,park:t.map?.landscape?.park?t.map.landscape.park:m.map.landscape.park,poi:t.map?.landscape?.poi?t.map.landscape.poi:m.map.landscape.poi,water:t.map?.landscape?.water?t.map.landscape.water:m.map.landscape.water,transit:t.map?.landscape?.transit?t.map.landscape.transit:m.map.landscape.transit,highway:t.map?.landscape?.highway?t.map.landscape.highway:m.map.landscape.highway,road:t.map?.landscape?.road?t.map.landscape.road:m.map.landscape.road}},additional:G({base:m.additional,config:t?.additional?t.additional:[]})});var L=({base:m,config:t})=>({none:m.none,xs:t?t.xs:m.xs,sm:t?t.sm:m.sm,md:t?t.md:m.md,lg:t?t.lg:m.lg,xl:t?t.xl:m.xl,"2xl":t?t["2xl"]:m["2xl"],"3xl":t?t["3xl"]:m["3xl"],full:"9999px"});var te=({config:m})=>({alternate:O({base:chunkVBSQLTIP_js.r.alternate,config:m?.alternate?m.alternate:[]}),typography:m?.typography?j({base:chunkVBSQLTIP_js.r.typography,config:{resources:m.typography?.resources?m.typography.resources:[],fonts:m.typography?.fonts?m.typography.fonts:{}}}):chunkVBSQLTIP_js.r.typography,colors:m?.colors?K({base:chunkVBSQLTIP_js.r.colors,config:m.colors?m.colors:{}}):chunkVBSQLTIP_js.r.colors,utility:chunkVBSQLTIP_js.r.utility,radius:L({base:chunkVBSQLTIP_js.r.radius,config:m.radius})});var k=(l=>(l.STANDARD="STANDARD",l.INVERTED="INVERTED",l.CONTRAST="CONTRAST",l))(k||{});var se=react.createContext("STANDARD");var he=()=>chunkVBSQLTIP_js.t().alternate;var oe=()=>chunkVBSQLTIP_js.t().radius;var re=()=>chunkVBSQLTIP_js.t().utility;

Object.defineProperty(exports, "ThemeCtx", {
    enumerable: true,
    get: function () { return chunkVBSQLTIP_js.s; }
});
Object.defineProperty(exports, "useTheme", {
    enumerable: true,
    get: function () { return chunkVBSQLTIP_js.t; }
});
Object.defineProperty(exports, "useThemeColor", {
    enumerable: true,
    get: function () { return chunkVBSQLTIP_js.u; }
});
Object.defineProperty(exports, "useThemeFonts", {
    enumerable: true,
    get: function () { return chunkVBSQLTIP_js.v; }
});
exports.StyleProviderAnimation = J;
exports.StyleProviderFontFace = Z;
exports.StyleProviderPreFlight = le;
exports.StyleProviderRouter = ie;
exports.ThemeBuilder = te;
exports.ThemeMode = k;
exports.ThemeModeCtx = se;
exports.useThemeAlternate = he;
exports.useThemeRadius = oe;
exports.useThemeUtility = re;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map