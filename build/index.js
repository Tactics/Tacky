'use strict';

var chunkO5OKUNTJ_js = require('./chunk-O5OKUNTJ.js');
var chunkLC4A3LMM_js = require('./chunk-LC4A3LMM.js');
var styledComponents = require('styled-components');
var react = require('react');

var Q=styledComponents.createGlobalStyle`
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
`;var ee=styledComponents.createGlobalStyle`
      ${s=>s.resources?.map(function(t){return t})}
    `;var ae=styledComponents.createGlobalStyle`
    
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
`;var te=styledComponents.createGlobalStyle`
    
    /* Reset all default a-styling when using external routing to prevent leaking of external styles */
    a {
        all: unset;
    }
`;var j=({base:s,config:t})=>t||s;var E=({base:s,config:t})=>t||s;var U=({base:s,config:t})=>{let a=chunkLC4A3LMM_js.a(t,chunkO5OKUNTJ_js.b,["family","primary"]),l=chunkLC4A3LMM_js.a(t,chunkLC4A3LMM_js.a(t,chunkO5OKUNTJ_js.c,["family","primary"]),["family","accent"]),i=chunkLC4A3LMM_js.a(t,chunkLC4A3LMM_js.a(t,chunkO5OKUNTJ_js.d,["family","primary"]),["family","supporting"]),m=chunkLC4A3LMM_js.a(t,chunkO5OKUNTJ_js.g,["scale","md"]),o=chunkLC4A3LMM_js.a(t,chunkO5OKUNTJ_js.f,["scale","sm"]),h=chunkLC4A3LMM_js.a(t,chunkO5OKUNTJ_js.e,["scale","xs"]),f=chunkLC4A3LMM_js.a(t,chunkO5OKUNTJ_js.h,["scale","lg"]),c=chunkLC4A3LMM_js.a(t,chunkO5OKUNTJ_js.i,["scale","xl"]),g=chunkLC4A3LMM_js.a(t,chunkO5OKUNTJ_js.j,["scale","2xl"]),n=chunkLC4A3LMM_js.a(t,chunkO5OKUNTJ_js.k,["scale","3xl"]),y=chunkLC4A3LMM_js.a(t,chunkO5OKUNTJ_js.l,["scale","4xl"]),d=chunkLC4A3LMM_js.a(t,chunkO5OKUNTJ_js.m,["scale","5xl"]),u=chunkLC4A3LMM_js.a(t,chunkO5OKUNTJ_js.n,["scale","6xl"]),w=chunkLC4A3LMM_js.a(t,chunkO5OKUNTJ_js.o,["scale","7xl"]),p=chunkLC4A3LMM_js.a(t,chunkO5OKUNTJ_js.p,["scale","8xl"]),b=chunkLC4A3LMM_js.a(t,chunkO5OKUNTJ_js.q,["scale","9xl"]);return {primary:{xs:{thin:chunkO5OKUNTJ_js.a({family:a,scale:h,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:a,scale:h,weight:200}),light:chunkO5OKUNTJ_js.a({family:a,scale:h,weight:300}),normal:chunkO5OKUNTJ_js.a({family:a,scale:h,weight:400}),medium:chunkO5OKUNTJ_js.a({family:a,scale:h,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:a,scale:h,weight:600}),bold:chunkO5OKUNTJ_js.a({family:a,scale:h,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:a,scale:h,weight:800}),black:chunkO5OKUNTJ_js.a({family:a,scale:h,weight:900})},sm:{thin:chunkO5OKUNTJ_js.a({family:a,scale:o,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:a,scale:o,weight:200}),light:chunkO5OKUNTJ_js.a({family:a,scale:o,weight:300}),normal:chunkO5OKUNTJ_js.a({family:a,scale:o,weight:400}),medium:chunkO5OKUNTJ_js.a({family:a,scale:o,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:a,scale:o,weight:600}),bold:chunkO5OKUNTJ_js.a({family:a,scale:o,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:a,scale:o,weight:800}),black:chunkO5OKUNTJ_js.a({family:a,scale:o,weight:900})},md:{thin:chunkO5OKUNTJ_js.a({family:a,scale:m,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:a,scale:m,weight:200}),light:chunkO5OKUNTJ_js.a({family:a,scale:m,weight:300}),normal:chunkO5OKUNTJ_js.a({family:a,scale:m,weight:400}),medium:chunkO5OKUNTJ_js.a({family:a,scale:m,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:a,scale:m,weight:600}),bold:chunkO5OKUNTJ_js.a({family:a,scale:m,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:a,scale:m,weight:800}),black:chunkO5OKUNTJ_js.a({family:a,scale:m,weight:900})},lg:{thin:chunkO5OKUNTJ_js.a({family:a,scale:f,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:a,scale:f,weight:200}),light:chunkO5OKUNTJ_js.a({family:a,scale:f,weight:300}),normal:chunkO5OKUNTJ_js.a({family:a,scale:f,weight:400}),medium:chunkO5OKUNTJ_js.a({family:a,scale:f,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:a,scale:f,weight:600}),bold:chunkO5OKUNTJ_js.a({family:a,scale:f,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:a,scale:f,weight:800}),black:chunkO5OKUNTJ_js.a({family:a,scale:f,weight:900})},xl:{thin:chunkO5OKUNTJ_js.a({family:a,scale:c,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:a,scale:c,weight:200}),light:chunkO5OKUNTJ_js.a({family:a,scale:c,weight:300}),normal:chunkO5OKUNTJ_js.a({family:a,scale:c,weight:400}),medium:chunkO5OKUNTJ_js.a({family:a,scale:c,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:a,scale:c,weight:600}),bold:chunkO5OKUNTJ_js.a({family:a,scale:c,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:a,scale:c,weight:800}),black:chunkO5OKUNTJ_js.a({family:a,scale:c,weight:900})},"2xl":{thin:chunkO5OKUNTJ_js.a({family:a,scale:g,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:a,scale:g,weight:200}),light:chunkO5OKUNTJ_js.a({family:a,scale:g,weight:300}),normal:chunkO5OKUNTJ_js.a({family:a,scale:g,weight:400}),medium:chunkO5OKUNTJ_js.a({family:a,scale:g,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:a,scale:g,weight:600}),bold:chunkO5OKUNTJ_js.a({family:a,scale:g,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:a,scale:g,weight:800}),black:chunkO5OKUNTJ_js.a({family:a,scale:g,weight:900})},"3xl":{thin:chunkO5OKUNTJ_js.a({family:a,scale:n,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:a,scale:n,weight:200}),light:chunkO5OKUNTJ_js.a({family:a,scale:n,weight:300}),normal:chunkO5OKUNTJ_js.a({family:a,scale:n,weight:400}),medium:chunkO5OKUNTJ_js.a({family:a,scale:n,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:a,scale:n,weight:600}),bold:chunkO5OKUNTJ_js.a({family:a,scale:n,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:a,scale:n,weight:800}),black:chunkO5OKUNTJ_js.a({family:a,scale:n,weight:900})},"4xl":{thin:chunkO5OKUNTJ_js.a({family:a,scale:y,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:a,scale:y,weight:200}),light:chunkO5OKUNTJ_js.a({family:a,scale:y,weight:300}),normal:chunkO5OKUNTJ_js.a({family:a,scale:y,weight:400}),medium:chunkO5OKUNTJ_js.a({family:a,scale:y,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:a,scale:y,weight:600}),bold:chunkO5OKUNTJ_js.a({family:a,scale:y,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:a,scale:y,weight:800}),black:chunkO5OKUNTJ_js.a({family:a,scale:y,weight:900})},"5xl":{thin:chunkO5OKUNTJ_js.a({family:a,scale:d,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:a,scale:d,weight:200}),light:chunkO5OKUNTJ_js.a({family:a,scale:d,weight:300}),normal:chunkO5OKUNTJ_js.a({family:a,scale:d,weight:400}),medium:chunkO5OKUNTJ_js.a({family:a,scale:d,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:a,scale:d,weight:600}),bold:chunkO5OKUNTJ_js.a({family:a,scale:d,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:a,scale:d,weight:800}),black:chunkO5OKUNTJ_js.a({family:a,scale:d,weight:900})},"6xl":{thin:chunkO5OKUNTJ_js.a({family:a,scale:u,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:a,scale:u,weight:200}),light:chunkO5OKUNTJ_js.a({family:a,scale:u,weight:300}),normal:chunkO5OKUNTJ_js.a({family:a,scale:u,weight:400}),medium:chunkO5OKUNTJ_js.a({family:a,scale:u,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:a,scale:u,weight:600}),bold:chunkO5OKUNTJ_js.a({family:a,scale:u,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:a,scale:u,weight:800}),black:chunkO5OKUNTJ_js.a({family:a,scale:u,weight:900})},"7xl":{thin:chunkO5OKUNTJ_js.a({family:a,scale:w,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:a,scale:w,weight:200}),light:chunkO5OKUNTJ_js.a({family:a,scale:w,weight:300}),normal:chunkO5OKUNTJ_js.a({family:a,scale:w,weight:400}),medium:chunkO5OKUNTJ_js.a({family:a,scale:w,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:a,scale:w,weight:600}),bold:chunkO5OKUNTJ_js.a({family:a,scale:w,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:a,scale:w,weight:800}),black:chunkO5OKUNTJ_js.a({family:a,scale:w,weight:900})},"8xl":{thin:chunkO5OKUNTJ_js.a({family:a,scale:p,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:a,scale:p,weight:200}),light:chunkO5OKUNTJ_js.a({family:a,scale:p,weight:300}),normal:chunkO5OKUNTJ_js.a({family:a,scale:p,weight:400}),medium:chunkO5OKUNTJ_js.a({family:a,scale:p,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:a,scale:p,weight:600}),bold:chunkO5OKUNTJ_js.a({family:a,scale:p,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:a,scale:p,weight:800}),black:chunkO5OKUNTJ_js.a({family:a,scale:p,weight:900})},"9xl":{thin:chunkO5OKUNTJ_js.a({family:a,scale:b,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:a,scale:b,weight:200}),light:chunkO5OKUNTJ_js.a({family:a,scale:b,weight:300}),normal:chunkO5OKUNTJ_js.a({family:a,scale:b,weight:400}),medium:chunkO5OKUNTJ_js.a({family:a,scale:b,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:a,scale:b,weight:600}),bold:chunkO5OKUNTJ_js.a({family:a,scale:b,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:a,scale:b,weight:800}),black:chunkO5OKUNTJ_js.a({family:a,scale:b,weight:900})}},supporting:{xs:{thin:chunkO5OKUNTJ_js.a({family:i,scale:h,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:i,scale:h,weight:200}),light:chunkO5OKUNTJ_js.a({family:i,scale:h,weight:300}),normal:chunkO5OKUNTJ_js.a({family:i,scale:h,weight:400}),medium:chunkO5OKUNTJ_js.a({family:i,scale:h,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:i,scale:h,weight:600}),bold:chunkO5OKUNTJ_js.a({family:i,scale:h,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:i,scale:h,weight:800}),black:chunkO5OKUNTJ_js.a({family:i,scale:h,weight:900})},sm:{thin:chunkO5OKUNTJ_js.a({family:i,scale:o,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:i,scale:o,weight:200}),light:chunkO5OKUNTJ_js.a({family:i,scale:o,weight:300}),normal:chunkO5OKUNTJ_js.a({family:i,scale:o,weight:400}),medium:chunkO5OKUNTJ_js.a({family:i,scale:o,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:i,scale:o,weight:600}),bold:chunkO5OKUNTJ_js.a({family:i,scale:o,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:i,scale:o,weight:800}),black:chunkO5OKUNTJ_js.a({family:i,scale:o,weight:900})},md:{thin:chunkO5OKUNTJ_js.a({family:i,scale:m,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:i,scale:m,weight:200}),light:chunkO5OKUNTJ_js.a({family:i,scale:m,weight:300}),normal:chunkO5OKUNTJ_js.a({family:i,scale:m,weight:400}),medium:chunkO5OKUNTJ_js.a({family:i,scale:m,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:i,scale:m,weight:600}),bold:chunkO5OKUNTJ_js.a({family:i,scale:m,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:i,scale:m,weight:800}),black:chunkO5OKUNTJ_js.a({family:i,scale:m,weight:900})},lg:{thin:chunkO5OKUNTJ_js.a({family:i,scale:f,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:i,scale:f,weight:200}),light:chunkO5OKUNTJ_js.a({family:i,scale:f,weight:300}),normal:chunkO5OKUNTJ_js.a({family:i,scale:f,weight:400}),medium:chunkO5OKUNTJ_js.a({family:i,scale:f,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:i,scale:f,weight:600}),bold:chunkO5OKUNTJ_js.a({family:i,scale:f,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:i,scale:f,weight:800}),black:chunkO5OKUNTJ_js.a({family:i,scale:f,weight:900})},xl:{thin:chunkO5OKUNTJ_js.a({family:i,scale:c,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:i,scale:c,weight:200}),light:chunkO5OKUNTJ_js.a({family:i,scale:c,weight:300}),normal:chunkO5OKUNTJ_js.a({family:i,scale:c,weight:400}),medium:chunkO5OKUNTJ_js.a({family:i,scale:c,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:i,scale:c,weight:600}),bold:chunkO5OKUNTJ_js.a({family:i,scale:c,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:i,scale:c,weight:800}),black:chunkO5OKUNTJ_js.a({family:i,scale:c,weight:900})},"2xl":{thin:chunkO5OKUNTJ_js.a({family:i,scale:g,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:i,scale:g,weight:200}),light:chunkO5OKUNTJ_js.a({family:i,scale:g,weight:300}),normal:chunkO5OKUNTJ_js.a({family:i,scale:g,weight:400}),medium:chunkO5OKUNTJ_js.a({family:i,scale:g,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:i,scale:g,weight:600}),bold:chunkO5OKUNTJ_js.a({family:i,scale:g,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:i,scale:g,weight:800}),black:chunkO5OKUNTJ_js.a({family:i,scale:g,weight:900})},"3xl":{thin:chunkO5OKUNTJ_js.a({family:i,scale:n,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:i,scale:n,weight:200}),light:chunkO5OKUNTJ_js.a({family:i,scale:n,weight:300}),normal:chunkO5OKUNTJ_js.a({family:i,scale:n,weight:400}),medium:chunkO5OKUNTJ_js.a({family:i,scale:n,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:i,scale:n,weight:600}),bold:chunkO5OKUNTJ_js.a({family:i,scale:n,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:i,scale:n,weight:800}),black:chunkO5OKUNTJ_js.a({family:i,scale:n,weight:900})},"4xl":{thin:chunkO5OKUNTJ_js.a({family:i,scale:y,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:i,scale:y,weight:200}),light:chunkO5OKUNTJ_js.a({family:i,scale:y,weight:300}),normal:chunkO5OKUNTJ_js.a({family:i,scale:y,weight:400}),medium:chunkO5OKUNTJ_js.a({family:i,scale:y,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:i,scale:y,weight:600}),bold:chunkO5OKUNTJ_js.a({family:i,scale:y,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:i,scale:y,weight:800}),black:chunkO5OKUNTJ_js.a({family:i,scale:y,weight:900})},"5xl":{thin:chunkO5OKUNTJ_js.a({family:i,scale:d,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:i,scale:d,weight:200}),light:chunkO5OKUNTJ_js.a({family:i,scale:d,weight:300}),normal:chunkO5OKUNTJ_js.a({family:i,scale:d,weight:400}),medium:chunkO5OKUNTJ_js.a({family:i,scale:d,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:i,scale:d,weight:600}),bold:chunkO5OKUNTJ_js.a({family:i,scale:d,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:i,scale:d,weight:800}),black:chunkO5OKUNTJ_js.a({family:i,scale:d,weight:900})},"6xl":{thin:chunkO5OKUNTJ_js.a({family:i,scale:u,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:i,scale:u,weight:200}),light:chunkO5OKUNTJ_js.a({family:i,scale:u,weight:300}),normal:chunkO5OKUNTJ_js.a({family:i,scale:u,weight:400}),medium:chunkO5OKUNTJ_js.a({family:i,scale:u,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:i,scale:u,weight:600}),bold:chunkO5OKUNTJ_js.a({family:i,scale:u,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:i,scale:u,weight:800}),black:chunkO5OKUNTJ_js.a({family:i,scale:u,weight:900})},"7xl":{thin:chunkO5OKUNTJ_js.a({family:i,scale:w,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:i,scale:w,weight:200}),light:chunkO5OKUNTJ_js.a({family:i,scale:w,weight:300}),normal:chunkO5OKUNTJ_js.a({family:i,scale:w,weight:400}),medium:chunkO5OKUNTJ_js.a({family:i,scale:w,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:i,scale:w,weight:600}),bold:chunkO5OKUNTJ_js.a({family:i,scale:w,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:i,scale:w,weight:800}),black:chunkO5OKUNTJ_js.a({family:i,scale:w,weight:900})},"8xl":{thin:chunkO5OKUNTJ_js.a({family:i,scale:p,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:i,scale:p,weight:200}),light:chunkO5OKUNTJ_js.a({family:i,scale:p,weight:300}),normal:chunkO5OKUNTJ_js.a({family:i,scale:p,weight:400}),medium:chunkO5OKUNTJ_js.a({family:i,scale:p,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:i,scale:p,weight:600}),bold:chunkO5OKUNTJ_js.a({family:i,scale:p,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:i,scale:p,weight:800}),black:chunkO5OKUNTJ_js.a({family:i,scale:p,weight:900})},"9xl":{thin:chunkO5OKUNTJ_js.a({family:i,scale:b,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:i,scale:b,weight:200}),light:chunkO5OKUNTJ_js.a({family:i,scale:b,weight:300}),normal:chunkO5OKUNTJ_js.a({family:i,scale:b,weight:400}),medium:chunkO5OKUNTJ_js.a({family:i,scale:b,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:i,scale:b,weight:600}),bold:chunkO5OKUNTJ_js.a({family:i,scale:b,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:i,scale:b,weight:800}),black:chunkO5OKUNTJ_js.a({family:i,scale:b,weight:900})}},accent:{xs:{thin:chunkO5OKUNTJ_js.a({family:l,scale:h,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:l,scale:h,weight:200}),light:chunkO5OKUNTJ_js.a({family:l,scale:h,weight:300}),normal:chunkO5OKUNTJ_js.a({family:l,scale:h,weight:400}),medium:chunkO5OKUNTJ_js.a({family:l,scale:h,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:l,scale:h,weight:600}),bold:chunkO5OKUNTJ_js.a({family:l,scale:h,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:l,scale:h,weight:800}),black:chunkO5OKUNTJ_js.a({family:l,scale:h,weight:900})},sm:{thin:chunkO5OKUNTJ_js.a({family:l,scale:o,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:l,scale:o,weight:200}),light:chunkO5OKUNTJ_js.a({family:l,scale:o,weight:300}),normal:chunkO5OKUNTJ_js.a({family:l,scale:o,weight:400}),medium:chunkO5OKUNTJ_js.a({family:l,scale:o,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:l,scale:o,weight:600}),bold:chunkO5OKUNTJ_js.a({family:l,scale:o,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:l,scale:o,weight:800}),black:chunkO5OKUNTJ_js.a({family:l,scale:o,weight:900})},md:{thin:chunkO5OKUNTJ_js.a({family:l,scale:m,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:l,scale:m,weight:200}),light:chunkO5OKUNTJ_js.a({family:l,scale:m,weight:300}),normal:chunkO5OKUNTJ_js.a({family:l,scale:m,weight:400}),medium:chunkO5OKUNTJ_js.a({family:l,scale:m,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:l,scale:m,weight:600}),bold:chunkO5OKUNTJ_js.a({family:l,scale:m,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:l,scale:m,weight:800}),black:chunkO5OKUNTJ_js.a({family:l,scale:m,weight:900})},lg:{thin:chunkO5OKUNTJ_js.a({family:l,scale:f,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:l,scale:f,weight:200}),light:chunkO5OKUNTJ_js.a({family:l,scale:f,weight:300}),normal:chunkO5OKUNTJ_js.a({family:l,scale:f,weight:400}),medium:chunkO5OKUNTJ_js.a({family:l,scale:f,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:l,scale:f,weight:600}),bold:chunkO5OKUNTJ_js.a({family:l,scale:f,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:l,scale:f,weight:800}),black:chunkO5OKUNTJ_js.a({family:l,scale:f,weight:900})},xl:{thin:chunkO5OKUNTJ_js.a({family:l,scale:c,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:l,scale:c,weight:200}),light:chunkO5OKUNTJ_js.a({family:l,scale:c,weight:300}),normal:chunkO5OKUNTJ_js.a({family:l,scale:c,weight:400}),medium:chunkO5OKUNTJ_js.a({family:l,scale:c,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:l,scale:c,weight:600}),bold:chunkO5OKUNTJ_js.a({family:l,scale:c,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:l,scale:c,weight:800}),black:chunkO5OKUNTJ_js.a({family:l,scale:c,weight:900})},"2xl":{thin:chunkO5OKUNTJ_js.a({family:l,scale:g,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:l,scale:g,weight:200}),light:chunkO5OKUNTJ_js.a({family:l,scale:g,weight:300}),normal:chunkO5OKUNTJ_js.a({family:l,scale:g,weight:400}),medium:chunkO5OKUNTJ_js.a({family:l,scale:g,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:l,scale:g,weight:600}),bold:chunkO5OKUNTJ_js.a({family:l,scale:g,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:l,scale:g,weight:800}),black:chunkO5OKUNTJ_js.a({family:l,scale:g,weight:900})},"3xl":{thin:chunkO5OKUNTJ_js.a({family:l,scale:n,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:l,scale:n,weight:200}),light:chunkO5OKUNTJ_js.a({family:l,scale:n,weight:300}),normal:chunkO5OKUNTJ_js.a({family:l,scale:n,weight:400}),medium:chunkO5OKUNTJ_js.a({family:l,scale:n,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:l,scale:n,weight:600}),bold:chunkO5OKUNTJ_js.a({family:l,scale:n,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:l,scale:n,weight:800}),black:chunkO5OKUNTJ_js.a({family:l,scale:n,weight:900})},"4xl":{thin:chunkO5OKUNTJ_js.a({family:l,scale:y,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:l,scale:y,weight:200}),light:chunkO5OKUNTJ_js.a({family:l,scale:y,weight:300}),normal:chunkO5OKUNTJ_js.a({family:l,scale:y,weight:400}),medium:chunkO5OKUNTJ_js.a({family:l,scale:y,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:l,scale:y,weight:600}),bold:chunkO5OKUNTJ_js.a({family:l,scale:y,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:l,scale:y,weight:800}),black:chunkO5OKUNTJ_js.a({family:l,scale:y,weight:900})},"5xl":{thin:chunkO5OKUNTJ_js.a({family:l,scale:d,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:l,scale:d,weight:200}),light:chunkO5OKUNTJ_js.a({family:l,scale:d,weight:300}),normal:chunkO5OKUNTJ_js.a({family:l,scale:d,weight:400}),medium:chunkO5OKUNTJ_js.a({family:l,scale:d,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:l,scale:d,weight:600}),bold:chunkO5OKUNTJ_js.a({family:l,scale:d,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:l,scale:d,weight:800}),black:chunkO5OKUNTJ_js.a({family:l,scale:d,weight:900})},"6xl":{thin:chunkO5OKUNTJ_js.a({family:l,scale:u,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:l,scale:u,weight:200}),light:chunkO5OKUNTJ_js.a({family:a,scale:l,weight:300}),normal:chunkO5OKUNTJ_js.a({family:l,scale:u,weight:400}),medium:chunkO5OKUNTJ_js.a({family:l,scale:u,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:l,scale:u,weight:600}),bold:chunkO5OKUNTJ_js.a({family:l,scale:u,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:l,scale:u,weight:800}),black:chunkO5OKUNTJ_js.a({family:l,scale:u,weight:900})},"7xl":{thin:chunkO5OKUNTJ_js.a({family:l,scale:w,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:l,scale:w,weight:200}),light:chunkO5OKUNTJ_js.a({family:l,scale:w,weight:300}),normal:chunkO5OKUNTJ_js.a({family:l,scale:w,weight:400}),medium:chunkO5OKUNTJ_js.a({family:l,scale:w,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:l,scale:w,weight:600}),bold:chunkO5OKUNTJ_js.a({family:l,scale:w,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:l,scale:w,weight:800}),black:chunkO5OKUNTJ_js.a({family:l,scale:w,weight:900})},"8xl":{thin:chunkO5OKUNTJ_js.a({family:l,scale:p,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:l,scale:p,weight:200}),light:chunkO5OKUNTJ_js.a({family:l,scale:p,weight:300}),normal:chunkO5OKUNTJ_js.a({family:l,scale:p,weight:400}),medium:chunkO5OKUNTJ_js.a({family:l,scale:p,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:l,scale:p,weight:600}),bold:chunkO5OKUNTJ_js.a({family:l,scale:p,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:l,scale:p,weight:800}),black:chunkO5OKUNTJ_js.a({family:l,scale:p,weight:900})},"9xl":{thin:chunkO5OKUNTJ_js.a({family:l,scale:b,weight:100}),xlight:chunkO5OKUNTJ_js.a({family:l,scale:b,weight:200}),light:chunkO5OKUNTJ_js.a({family:l,scale:b,weight:300}),normal:chunkO5OKUNTJ_js.a({family:l,scale:b,weight:400}),medium:chunkO5OKUNTJ_js.a({family:l,scale:b,weight:500}),semibold:chunkO5OKUNTJ_js.a({family:l,scale:b,weight:600}),bold:chunkO5OKUNTJ_js.a({family:l,scale:b,weight:700}),xbold:chunkO5OKUNTJ_js.a({family:l,scale:b,weight:800}),black:chunkO5OKUNTJ_js.a({family:l,scale:b,weight:900})}}}};var G=({base:s,config:t})=>({resources:t?.resources?E({base:s.resources,config:t?.resources??[]}):s.resources,fonts:t?.fonts?U({base:s.fonts,config:t?.fonts?t.fonts:{}}):s.fonts});var x=({base:s,config:t})=>{let a=chunkLC4A3LMM_js.a(t,s.tint_500,["tint_500"]),l=s.tint_500!=a,i=chunkLC4A3LMM_js.a(t,l?a:s.tint_400,["tint_400"]),m=chunkLC4A3LMM_js.a(t,l?i:s.tint_300,["tint_300"]),o=chunkLC4A3LMM_js.a(t,l?m:s.tint_200,["tint_200"]),h=chunkLC4A3LMM_js.a(t,l?o:s.tint_100,["tint_100"]),f=chunkLC4A3LMM_js.a(t,l?h:s.tint_50,["tint_50"]),c=chunkLC4A3LMM_js.a(t,l?a:s.tint_600,["tint_600"]),g=chunkLC4A3LMM_js.a(t,l?c:s.tint_700,["tint_700"]),n=chunkLC4A3LMM_js.a(t,l?g:s.tint_800,["tint_800"]),y=chunkLC4A3LMM_js.a(t,l?n:s.tint_900,["tint_900"]),d=chunkLC4A3LMM_js.a(t,l?y:s.tint_950,["tint_950"]);return {tint_50:f,tint_100:h,tint_200:o,tint_300:m,tint_400:i,tint_500:a,tint_600:c,tint_700:g,tint_800:n,tint_900:y,tint_950:d}};var L=({base:s,config:t})=>t||s;var K=({base:s,config:t})=>({danger:x({base:s.danger,config:t.danger?t.danger:{}}),warning:x({base:s.warning,config:t.warning?t.warning:{}}),success:x({base:s.success,config:t.success?t.success:{}}),info:x({base:s.info,config:t.info?t.info:{}}),neutrals:x({base:s.neutrals,config:t.neutrals?t.neutrals:{}}),surfaces:x({base:s.surfaces,config:t.surfaces?t.surfaces:{}}),primary:x({base:s.primary,config:t.primary?t.primary:{}}),accent:x({base:s.accent,config:t.accent?t.accent:{}}),supporting:x({base:s.supporting,config:t.supporting?t.supporting:{}}),map:{label:{all:t.map?.label?.all?t.map.label.all:s.map.label.all,water:t.map?.label?.water?t.map.label.water:s.map.label.water,highway:t.map?.label?.highway?t.map.label.highway:s.map.label.highway,road:t.map?.label?.road?t.map.label.road:s.map.label.road},border:{country:t.map?.border?.country?t.map.border.country:s.map.border.country,highway:t.map?.border?.highway?t.map.border.highway:s.map.border.highway,road:t.map?.border?.road?t.map.border.road:s.map.border.road},landscape:{all:t.map?.landscape?.all?t.map.landscape.all:s.map.landscape.all,artificial:t.map?.landscape?.artificial?t.map.landscape.artificial:s.map.landscape.artificial,terrain:t.map?.landscape?.terrain?t.map.landscape.terrain:s.map.landscape.terrain,park:t.map?.landscape?.park?t.map.landscape.park:s.map.landscape.park,poi:t.map?.landscape?.poi?t.map.landscape.poi:s.map.landscape.poi,water:t.map?.landscape?.water?t.map.landscape.water:s.map.landscape.water,transit:t.map?.landscape?.transit?t.map.landscape.transit:s.map.landscape.transit,highway:t.map?.landscape?.highway?t.map.landscape.highway:s.map.landscape.highway,road:t.map?.landscape?.road?t.map.landscape.road:s.map.landscape.road}},additional:L({base:s.additional,config:t?.additional?t.additional:[]})});var q=({base:s,config:t})=>({none:s.none,xs:t?t.xs:s.xs,sm:t?t.sm:s.sm,md:t?t.md:s.md,lg:t?t.lg:s.lg,xl:t?t.xl:s.xl,"2xl":t?t["2xl"]:s["2xl"],"3xl":t?t["3xl"]:s["3xl"],full:"9999px"});var se=({config:s})=>({alternate:j({base:chunkO5OKUNTJ_js.r.alternate,config:s?.alternate?s.alternate:[]}),typography:s?.typography?G({base:chunkO5OKUNTJ_js.r.typography,config:{resources:s.typography?.resources?s.typography.resources:[],fonts:s.typography?.fonts?s.typography.fonts:{}}}):chunkO5OKUNTJ_js.r.typography,colors:s?.colors?K({base:chunkO5OKUNTJ_js.r.colors,config:s.colors?s.colors:{}}):chunkO5OKUNTJ_js.r.colors,utility:chunkO5OKUNTJ_js.r.utility,radius:q({base:chunkO5OKUNTJ_js.r.radius,config:s.radius})});exports.ThemeMode=(l=>(l.STANDARD="STANDARD",l.INVERTED="INVERTED",l.CONTRAST="CONTRAST",l))(exports.ThemeMode||{});(a=>{function s(l,i){return Object.values(a).includes(l)?l:i}a.from=s;function t(l){return Object.values(a).includes(l)?l:null}a.tryFrom=t;})(exports.ThemeMode||={});var re=react.createContext("STANDARD");var oe=()=>chunkO5OKUNTJ_js.t().alternate;var he=()=>chunkO5OKUNTJ_js.t().radius;var ce=()=>chunkO5OKUNTJ_js.t().utility;var k=class{constructor(t,a,l,i,m){this.prefersReducedMotion=t,this.prefersContrast=a,this.prefersReducedTransparency=l,this.prefersColorSchema=i,this.invertedColors=m;}prefersDarkMode(){return this.prefersColorSchema==="dark"}prefersHighContrast(){return this.prefersContrast==="more"}prefersLowContrast(){return this.prefersContrast==="less"}},ge=()=>{let s=matchMedia("(prefers-reduced-motion: reduce)").matches?"reduce":"no-preference",t=matchMedia("(prefers-contrast: more)").matches?"more":matchMedia("(prefers-contrast: less)").matches?"less":matchMedia("(prefers-contrast: custom)").matches?"custom":"no-preference",a=matchMedia("(prefers-reduced-transparency: reduce)").matches?"reduce":"no-preference",l=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",i=matchMedia("(inverted-colors: inverted)").matches?"inverted":"none";return new k(s,t,a,l,i)};

Object.defineProperty(exports, "ThemeCtx", {
    enumerable: true,
    get: function () { return chunkO5OKUNTJ_js.s; }
});
Object.defineProperty(exports, "useTheme", {
    enumerable: true,
    get: function () { return chunkO5OKUNTJ_js.t; }
});
Object.defineProperty(exports, "useThemeColor", {
    enumerable: true,
    get: function () { return chunkO5OKUNTJ_js.u; }
});
Object.defineProperty(exports, "useThemeFonts", {
    enumerable: true,
    get: function () { return chunkO5OKUNTJ_js.v; }
});
exports.BrowserAccessibilityPreferences = k;
exports.StyleProviderAnimation = Q;
exports.StyleProviderFontFace = ee;
exports.StyleProviderPreFlight = ae;
exports.StyleProviderRouter = te;
exports.ThemeBuilder = se;
exports.ThemeModeCtx = re;
exports.useBrowserAccessibilityPreferences = ge;
exports.useThemeAlternate = oe;
exports.useThemeRadius = he;
exports.useThemeUtility = ce;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map