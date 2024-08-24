'use strict';

var chunkFCUG4YN5_js = require('./chunk-FCUG4YN5.js');
var styledComponents = require('styled-components');
var S = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var S__default = /*#__PURE__*/_interopDefault(S);

var ee=styledComponents.createGlobalStyle`
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
`;var H=({base:m,config:t})=>t||m;var j=({base:m,config:t})=>t||m;function r(m,t,i){let l=m;for(let a of i)if(l=l?.[a]??t,l==null)break;return l}var U=({base:m,config:t})=>{let i=r(t,chunkFCUG4YN5_js.b,["family","primary"]),l=r(t,r(t,chunkFCUG4YN5_js.c,["family","primary"]),["family","accent"]),a=r(t,r(t,chunkFCUG4YN5_js.d,["family","primary"]),["family","supporting"]),o=r(t,chunkFCUG4YN5_js.g,["scale","md"]),s=r(t,chunkFCUG4YN5_js.f,["scale","sm"]),h=r(t,chunkFCUG4YN5_js.e,["scale","xs"]),f=r(t,chunkFCUG4YN5_js.h,["scale","lg"]),c=r(t,chunkFCUG4YN5_js.i,["scale","xl"]),n=r(t,chunkFCUG4YN5_js.j,["scale","2xl"]),g=r(t,chunkFCUG4YN5_js.k,["scale","3xl"]),y=r(t,chunkFCUG4YN5_js.l,["scale","4xl"]),w=r(t,chunkFCUG4YN5_js.m,["scale","5xl"]),b=r(t,chunkFCUG4YN5_js.n,["scale","6xl"]),d=r(t,chunkFCUG4YN5_js.o,["scale","7xl"]),x=r(t,chunkFCUG4YN5_js.p,["scale","8xl"]),u=r(t,chunkFCUG4YN5_js.q,["scale","9xl"]);return {primary:{xs:{thin:chunkFCUG4YN5_js.a({family:i,scale:h,weight:100}),xlight:chunkFCUG4YN5_js.a({family:i,scale:h,weight:200}),light:chunkFCUG4YN5_js.a({family:i,scale:h,weight:300}),normal:chunkFCUG4YN5_js.a({family:i,scale:h,weight:400}),medium:chunkFCUG4YN5_js.a({family:i,scale:h,weight:500}),semibold:chunkFCUG4YN5_js.a({family:i,scale:h,weight:600}),bold:chunkFCUG4YN5_js.a({family:i,scale:h,weight:700}),xbold:chunkFCUG4YN5_js.a({family:i,scale:h,weight:800}),black:chunkFCUG4YN5_js.a({family:i,scale:h,weight:900})},sm:{thin:chunkFCUG4YN5_js.a({family:i,scale:s,weight:100}),xlight:chunkFCUG4YN5_js.a({family:i,scale:s,weight:200}),light:chunkFCUG4YN5_js.a({family:i,scale:s,weight:300}),normal:chunkFCUG4YN5_js.a({family:i,scale:s,weight:400}),medium:chunkFCUG4YN5_js.a({family:i,scale:s,weight:500}),semibold:chunkFCUG4YN5_js.a({family:i,scale:s,weight:600}),bold:chunkFCUG4YN5_js.a({family:i,scale:s,weight:700}),xbold:chunkFCUG4YN5_js.a({family:i,scale:s,weight:800}),black:chunkFCUG4YN5_js.a({family:i,scale:s,weight:900})},md:{thin:chunkFCUG4YN5_js.a({family:i,scale:o,weight:100}),xlight:chunkFCUG4YN5_js.a({family:i,scale:o,weight:200}),light:chunkFCUG4YN5_js.a({family:i,scale:o,weight:300}),normal:chunkFCUG4YN5_js.a({family:i,scale:o,weight:400}),medium:chunkFCUG4YN5_js.a({family:i,scale:o,weight:500}),semibold:chunkFCUG4YN5_js.a({family:i,scale:o,weight:600}),bold:chunkFCUG4YN5_js.a({family:i,scale:o,weight:700}),xbold:chunkFCUG4YN5_js.a({family:i,scale:o,weight:800}),black:chunkFCUG4YN5_js.a({family:i,scale:o,weight:900})},lg:{thin:chunkFCUG4YN5_js.a({family:i,scale:f,weight:100}),xlight:chunkFCUG4YN5_js.a({family:i,scale:f,weight:200}),light:chunkFCUG4YN5_js.a({family:i,scale:f,weight:300}),normal:chunkFCUG4YN5_js.a({family:i,scale:f,weight:400}),medium:chunkFCUG4YN5_js.a({family:i,scale:f,weight:500}),semibold:chunkFCUG4YN5_js.a({family:i,scale:f,weight:600}),bold:chunkFCUG4YN5_js.a({family:i,scale:f,weight:700}),xbold:chunkFCUG4YN5_js.a({family:i,scale:f,weight:800}),black:chunkFCUG4YN5_js.a({family:i,scale:f,weight:900})},xl:{thin:chunkFCUG4YN5_js.a({family:i,scale:c,weight:100}),xlight:chunkFCUG4YN5_js.a({family:i,scale:c,weight:200}),light:chunkFCUG4YN5_js.a({family:i,scale:c,weight:300}),normal:chunkFCUG4YN5_js.a({family:i,scale:c,weight:400}),medium:chunkFCUG4YN5_js.a({family:i,scale:c,weight:500}),semibold:chunkFCUG4YN5_js.a({family:i,scale:c,weight:600}),bold:chunkFCUG4YN5_js.a({family:i,scale:c,weight:700}),xbold:chunkFCUG4YN5_js.a({family:i,scale:c,weight:800}),black:chunkFCUG4YN5_js.a({family:i,scale:c,weight:900})},"2xl":{thin:chunkFCUG4YN5_js.a({family:i,scale:n,weight:100}),xlight:chunkFCUG4YN5_js.a({family:i,scale:n,weight:200}),light:chunkFCUG4YN5_js.a({family:i,scale:n,weight:300}),normal:chunkFCUG4YN5_js.a({family:i,scale:n,weight:400}),medium:chunkFCUG4YN5_js.a({family:i,scale:n,weight:500}),semibold:chunkFCUG4YN5_js.a({family:i,scale:n,weight:600}),bold:chunkFCUG4YN5_js.a({family:i,scale:n,weight:700}),xbold:chunkFCUG4YN5_js.a({family:i,scale:n,weight:800}),black:chunkFCUG4YN5_js.a({family:i,scale:n,weight:900})},"3xl":{thin:chunkFCUG4YN5_js.a({family:i,scale:g,weight:100}),xlight:chunkFCUG4YN5_js.a({family:i,scale:g,weight:200}),light:chunkFCUG4YN5_js.a({family:i,scale:g,weight:300}),normal:chunkFCUG4YN5_js.a({family:i,scale:g,weight:400}),medium:chunkFCUG4YN5_js.a({family:i,scale:g,weight:500}),semibold:chunkFCUG4YN5_js.a({family:i,scale:g,weight:600}),bold:chunkFCUG4YN5_js.a({family:i,scale:g,weight:700}),xbold:chunkFCUG4YN5_js.a({family:i,scale:g,weight:800}),black:chunkFCUG4YN5_js.a({family:i,scale:g,weight:900})},"4xl":{thin:chunkFCUG4YN5_js.a({family:i,scale:y,weight:100}),xlight:chunkFCUG4YN5_js.a({family:i,scale:y,weight:200}),light:chunkFCUG4YN5_js.a({family:i,scale:y,weight:300}),normal:chunkFCUG4YN5_js.a({family:i,scale:y,weight:400}),medium:chunkFCUG4YN5_js.a({family:i,scale:y,weight:500}),semibold:chunkFCUG4YN5_js.a({family:i,scale:y,weight:600}),bold:chunkFCUG4YN5_js.a({family:i,scale:y,weight:700}),xbold:chunkFCUG4YN5_js.a({family:i,scale:y,weight:800}),black:chunkFCUG4YN5_js.a({family:i,scale:y,weight:900})},"5xl":{thin:chunkFCUG4YN5_js.a({family:i,scale:w,weight:100}),xlight:chunkFCUG4YN5_js.a({family:i,scale:w,weight:200}),light:chunkFCUG4YN5_js.a({family:i,scale:w,weight:300}),normal:chunkFCUG4YN5_js.a({family:i,scale:w,weight:400}),medium:chunkFCUG4YN5_js.a({family:i,scale:w,weight:500}),semibold:chunkFCUG4YN5_js.a({family:i,scale:w,weight:600}),bold:chunkFCUG4YN5_js.a({family:i,scale:w,weight:700}),xbold:chunkFCUG4YN5_js.a({family:i,scale:w,weight:800}),black:chunkFCUG4YN5_js.a({family:i,scale:w,weight:900})},"6xl":{thin:chunkFCUG4YN5_js.a({family:i,scale:b,weight:100}),xlight:chunkFCUG4YN5_js.a({family:i,scale:b,weight:200}),light:chunkFCUG4YN5_js.a({family:i,scale:b,weight:300}),normal:chunkFCUG4YN5_js.a({family:i,scale:b,weight:400}),medium:chunkFCUG4YN5_js.a({family:i,scale:b,weight:500}),semibold:chunkFCUG4YN5_js.a({family:i,scale:b,weight:600}),bold:chunkFCUG4YN5_js.a({family:i,scale:b,weight:700}),xbold:chunkFCUG4YN5_js.a({family:i,scale:b,weight:800}),black:chunkFCUG4YN5_js.a({family:i,scale:b,weight:900})},"7xl":{thin:chunkFCUG4YN5_js.a({family:i,scale:d,weight:100}),xlight:chunkFCUG4YN5_js.a({family:i,scale:d,weight:200}),light:chunkFCUG4YN5_js.a({family:i,scale:d,weight:300}),normal:chunkFCUG4YN5_js.a({family:i,scale:d,weight:400}),medium:chunkFCUG4YN5_js.a({family:i,scale:d,weight:500}),semibold:chunkFCUG4YN5_js.a({family:i,scale:d,weight:600}),bold:chunkFCUG4YN5_js.a({family:i,scale:d,weight:700}),xbold:chunkFCUG4YN5_js.a({family:i,scale:d,weight:800}),black:chunkFCUG4YN5_js.a({family:i,scale:d,weight:900})},"8xl":{thin:chunkFCUG4YN5_js.a({family:i,scale:x,weight:100}),xlight:chunkFCUG4YN5_js.a({family:i,scale:x,weight:200}),light:chunkFCUG4YN5_js.a({family:i,scale:x,weight:300}),normal:chunkFCUG4YN5_js.a({family:i,scale:x,weight:400}),medium:chunkFCUG4YN5_js.a({family:i,scale:x,weight:500}),semibold:chunkFCUG4YN5_js.a({family:i,scale:x,weight:600}),bold:chunkFCUG4YN5_js.a({family:i,scale:x,weight:700}),xbold:chunkFCUG4YN5_js.a({family:i,scale:x,weight:800}),black:chunkFCUG4YN5_js.a({family:i,scale:x,weight:900})},"9xl":{thin:chunkFCUG4YN5_js.a({family:i,scale:u,weight:100}),xlight:chunkFCUG4YN5_js.a({family:i,scale:u,weight:200}),light:chunkFCUG4YN5_js.a({family:i,scale:u,weight:300}),normal:chunkFCUG4YN5_js.a({family:i,scale:u,weight:400}),medium:chunkFCUG4YN5_js.a({family:i,scale:u,weight:500}),semibold:chunkFCUG4YN5_js.a({family:i,scale:u,weight:600}),bold:chunkFCUG4YN5_js.a({family:i,scale:u,weight:700}),xbold:chunkFCUG4YN5_js.a({family:i,scale:u,weight:800}),black:chunkFCUG4YN5_js.a({family:i,scale:u,weight:900})}},supporting:{xs:{thin:chunkFCUG4YN5_js.a({family:a,scale:h,weight:100}),xlight:chunkFCUG4YN5_js.a({family:a,scale:h,weight:200}),light:chunkFCUG4YN5_js.a({family:a,scale:h,weight:300}),normal:chunkFCUG4YN5_js.a({family:a,scale:h,weight:400}),medium:chunkFCUG4YN5_js.a({family:a,scale:h,weight:500}),semibold:chunkFCUG4YN5_js.a({family:a,scale:h,weight:600}),bold:chunkFCUG4YN5_js.a({family:a,scale:h,weight:700}),xbold:chunkFCUG4YN5_js.a({family:a,scale:h,weight:800}),black:chunkFCUG4YN5_js.a({family:a,scale:h,weight:900})},sm:{thin:chunkFCUG4YN5_js.a({family:a,scale:s,weight:100}),xlight:chunkFCUG4YN5_js.a({family:a,scale:s,weight:200}),light:chunkFCUG4YN5_js.a({family:a,scale:s,weight:300}),normal:chunkFCUG4YN5_js.a({family:a,scale:s,weight:400}),medium:chunkFCUG4YN5_js.a({family:a,scale:s,weight:500}),semibold:chunkFCUG4YN5_js.a({family:a,scale:s,weight:600}),bold:chunkFCUG4YN5_js.a({family:a,scale:s,weight:700}),xbold:chunkFCUG4YN5_js.a({family:a,scale:s,weight:800}),black:chunkFCUG4YN5_js.a({family:a,scale:s,weight:900})},md:{thin:chunkFCUG4YN5_js.a({family:a,scale:o,weight:100}),xlight:chunkFCUG4YN5_js.a({family:a,scale:o,weight:200}),light:chunkFCUG4YN5_js.a({family:a,scale:o,weight:300}),normal:chunkFCUG4YN5_js.a({family:a,scale:o,weight:400}),medium:chunkFCUG4YN5_js.a({family:a,scale:o,weight:500}),semibold:chunkFCUG4YN5_js.a({family:a,scale:o,weight:600}),bold:chunkFCUG4YN5_js.a({family:a,scale:o,weight:700}),xbold:chunkFCUG4YN5_js.a({family:a,scale:o,weight:800}),black:chunkFCUG4YN5_js.a({family:a,scale:o,weight:900})},lg:{thin:chunkFCUG4YN5_js.a({family:a,scale:f,weight:100}),xlight:chunkFCUG4YN5_js.a({family:a,scale:f,weight:200}),light:chunkFCUG4YN5_js.a({family:a,scale:f,weight:300}),normal:chunkFCUG4YN5_js.a({family:a,scale:f,weight:400}),medium:chunkFCUG4YN5_js.a({family:a,scale:f,weight:500}),semibold:chunkFCUG4YN5_js.a({family:a,scale:f,weight:600}),bold:chunkFCUG4YN5_js.a({family:a,scale:f,weight:700}),xbold:chunkFCUG4YN5_js.a({family:a,scale:f,weight:800}),black:chunkFCUG4YN5_js.a({family:a,scale:f,weight:900})},xl:{thin:chunkFCUG4YN5_js.a({family:a,scale:c,weight:100}),xlight:chunkFCUG4YN5_js.a({family:a,scale:c,weight:200}),light:chunkFCUG4YN5_js.a({family:a,scale:c,weight:300}),normal:chunkFCUG4YN5_js.a({family:a,scale:c,weight:400}),medium:chunkFCUG4YN5_js.a({family:a,scale:c,weight:500}),semibold:chunkFCUG4YN5_js.a({family:a,scale:c,weight:600}),bold:chunkFCUG4YN5_js.a({family:a,scale:c,weight:700}),xbold:chunkFCUG4YN5_js.a({family:a,scale:c,weight:800}),black:chunkFCUG4YN5_js.a({family:a,scale:c,weight:900})},"2xl":{thin:chunkFCUG4YN5_js.a({family:a,scale:n,weight:100}),xlight:chunkFCUG4YN5_js.a({family:a,scale:n,weight:200}),light:chunkFCUG4YN5_js.a({family:a,scale:n,weight:300}),normal:chunkFCUG4YN5_js.a({family:a,scale:n,weight:400}),medium:chunkFCUG4YN5_js.a({family:a,scale:n,weight:500}),semibold:chunkFCUG4YN5_js.a({family:a,scale:n,weight:600}),bold:chunkFCUG4YN5_js.a({family:a,scale:n,weight:700}),xbold:chunkFCUG4YN5_js.a({family:a,scale:n,weight:800}),black:chunkFCUG4YN5_js.a({family:a,scale:n,weight:900})},"3xl":{thin:chunkFCUG4YN5_js.a({family:a,scale:g,weight:100}),xlight:chunkFCUG4YN5_js.a({family:a,scale:g,weight:200}),light:chunkFCUG4YN5_js.a({family:a,scale:g,weight:300}),normal:chunkFCUG4YN5_js.a({family:a,scale:g,weight:400}),medium:chunkFCUG4YN5_js.a({family:a,scale:g,weight:500}),semibold:chunkFCUG4YN5_js.a({family:a,scale:g,weight:600}),bold:chunkFCUG4YN5_js.a({family:a,scale:g,weight:700}),xbold:chunkFCUG4YN5_js.a({family:a,scale:g,weight:800}),black:chunkFCUG4YN5_js.a({family:a,scale:g,weight:900})},"4xl":{thin:chunkFCUG4YN5_js.a({family:a,scale:y,weight:100}),xlight:chunkFCUG4YN5_js.a({family:a,scale:y,weight:200}),light:chunkFCUG4YN5_js.a({family:a,scale:y,weight:300}),normal:chunkFCUG4YN5_js.a({family:a,scale:y,weight:400}),medium:chunkFCUG4YN5_js.a({family:a,scale:y,weight:500}),semibold:chunkFCUG4YN5_js.a({family:a,scale:y,weight:600}),bold:chunkFCUG4YN5_js.a({family:a,scale:y,weight:700}),xbold:chunkFCUG4YN5_js.a({family:a,scale:y,weight:800}),black:chunkFCUG4YN5_js.a({family:a,scale:y,weight:900})},"5xl":{thin:chunkFCUG4YN5_js.a({family:a,scale:w,weight:100}),xlight:chunkFCUG4YN5_js.a({family:a,scale:w,weight:200}),light:chunkFCUG4YN5_js.a({family:a,scale:w,weight:300}),normal:chunkFCUG4YN5_js.a({family:a,scale:w,weight:400}),medium:chunkFCUG4YN5_js.a({family:a,scale:w,weight:500}),semibold:chunkFCUG4YN5_js.a({family:a,scale:w,weight:600}),bold:chunkFCUG4YN5_js.a({family:a,scale:w,weight:700}),xbold:chunkFCUG4YN5_js.a({family:a,scale:w,weight:800}),black:chunkFCUG4YN5_js.a({family:a,scale:w,weight:900})},"6xl":{thin:chunkFCUG4YN5_js.a({family:a,scale:b,weight:100}),xlight:chunkFCUG4YN5_js.a({family:a,scale:b,weight:200}),light:chunkFCUG4YN5_js.a({family:a,scale:b,weight:300}),normal:chunkFCUG4YN5_js.a({family:a,scale:b,weight:400}),medium:chunkFCUG4YN5_js.a({family:a,scale:b,weight:500}),semibold:chunkFCUG4YN5_js.a({family:a,scale:b,weight:600}),bold:chunkFCUG4YN5_js.a({family:a,scale:b,weight:700}),xbold:chunkFCUG4YN5_js.a({family:a,scale:b,weight:800}),black:chunkFCUG4YN5_js.a({family:a,scale:b,weight:900})},"7xl":{thin:chunkFCUG4YN5_js.a({family:a,scale:d,weight:100}),xlight:chunkFCUG4YN5_js.a({family:a,scale:d,weight:200}),light:chunkFCUG4YN5_js.a({family:a,scale:d,weight:300}),normal:chunkFCUG4YN5_js.a({family:a,scale:d,weight:400}),medium:chunkFCUG4YN5_js.a({family:a,scale:d,weight:500}),semibold:chunkFCUG4YN5_js.a({family:a,scale:d,weight:600}),bold:chunkFCUG4YN5_js.a({family:a,scale:d,weight:700}),xbold:chunkFCUG4YN5_js.a({family:a,scale:d,weight:800}),black:chunkFCUG4YN5_js.a({family:a,scale:d,weight:900})},"8xl":{thin:chunkFCUG4YN5_js.a({family:a,scale:x,weight:100}),xlight:chunkFCUG4YN5_js.a({family:a,scale:x,weight:200}),light:chunkFCUG4YN5_js.a({family:a,scale:x,weight:300}),normal:chunkFCUG4YN5_js.a({family:a,scale:x,weight:400}),medium:chunkFCUG4YN5_js.a({family:a,scale:x,weight:500}),semibold:chunkFCUG4YN5_js.a({family:a,scale:x,weight:600}),bold:chunkFCUG4YN5_js.a({family:a,scale:x,weight:700}),xbold:chunkFCUG4YN5_js.a({family:a,scale:x,weight:800}),black:chunkFCUG4YN5_js.a({family:a,scale:x,weight:900})},"9xl":{thin:chunkFCUG4YN5_js.a({family:a,scale:u,weight:100}),xlight:chunkFCUG4YN5_js.a({family:a,scale:u,weight:200}),light:chunkFCUG4YN5_js.a({family:a,scale:u,weight:300}),normal:chunkFCUG4YN5_js.a({family:a,scale:u,weight:400}),medium:chunkFCUG4YN5_js.a({family:a,scale:u,weight:500}),semibold:chunkFCUG4YN5_js.a({family:a,scale:u,weight:600}),bold:chunkFCUG4YN5_js.a({family:a,scale:u,weight:700}),xbold:chunkFCUG4YN5_js.a({family:a,scale:u,weight:800}),black:chunkFCUG4YN5_js.a({family:a,scale:u,weight:900})}},accent:{xs:{thin:chunkFCUG4YN5_js.a({family:l,scale:h,weight:100}),xlight:chunkFCUG4YN5_js.a({family:l,scale:h,weight:200}),light:chunkFCUG4YN5_js.a({family:l,scale:h,weight:300}),normal:chunkFCUG4YN5_js.a({family:l,scale:h,weight:400}),medium:chunkFCUG4YN5_js.a({family:l,scale:h,weight:500}),semibold:chunkFCUG4YN5_js.a({family:l,scale:h,weight:600}),bold:chunkFCUG4YN5_js.a({family:l,scale:h,weight:700}),xbold:chunkFCUG4YN5_js.a({family:l,scale:h,weight:800}),black:chunkFCUG4YN5_js.a({family:l,scale:h,weight:900})},sm:{thin:chunkFCUG4YN5_js.a({family:l,scale:s,weight:100}),xlight:chunkFCUG4YN5_js.a({family:l,scale:s,weight:200}),light:chunkFCUG4YN5_js.a({family:l,scale:s,weight:300}),normal:chunkFCUG4YN5_js.a({family:l,scale:s,weight:400}),medium:chunkFCUG4YN5_js.a({family:l,scale:s,weight:500}),semibold:chunkFCUG4YN5_js.a({family:l,scale:s,weight:600}),bold:chunkFCUG4YN5_js.a({family:l,scale:s,weight:700}),xbold:chunkFCUG4YN5_js.a({family:l,scale:s,weight:800}),black:chunkFCUG4YN5_js.a({family:l,scale:s,weight:900})},md:{thin:chunkFCUG4YN5_js.a({family:l,scale:o,weight:100}),xlight:chunkFCUG4YN5_js.a({family:l,scale:o,weight:200}),light:chunkFCUG4YN5_js.a({family:l,scale:o,weight:300}),normal:chunkFCUG4YN5_js.a({family:l,scale:o,weight:400}),medium:chunkFCUG4YN5_js.a({family:l,scale:o,weight:500}),semibold:chunkFCUG4YN5_js.a({family:l,scale:o,weight:600}),bold:chunkFCUG4YN5_js.a({family:l,scale:o,weight:700}),xbold:chunkFCUG4YN5_js.a({family:l,scale:o,weight:800}),black:chunkFCUG4YN5_js.a({family:l,scale:o,weight:900})},lg:{thin:chunkFCUG4YN5_js.a({family:l,scale:f,weight:100}),xlight:chunkFCUG4YN5_js.a({family:l,scale:f,weight:200}),light:chunkFCUG4YN5_js.a({family:l,scale:f,weight:300}),normal:chunkFCUG4YN5_js.a({family:l,scale:f,weight:400}),medium:chunkFCUG4YN5_js.a({family:l,scale:f,weight:500}),semibold:chunkFCUG4YN5_js.a({family:l,scale:f,weight:600}),bold:chunkFCUG4YN5_js.a({family:l,scale:f,weight:700}),xbold:chunkFCUG4YN5_js.a({family:l,scale:f,weight:800}),black:chunkFCUG4YN5_js.a({family:l,scale:f,weight:900})},xl:{thin:chunkFCUG4YN5_js.a({family:l,scale:c,weight:100}),xlight:chunkFCUG4YN5_js.a({family:l,scale:c,weight:200}),light:chunkFCUG4YN5_js.a({family:l,scale:c,weight:300}),normal:chunkFCUG4YN5_js.a({family:l,scale:c,weight:400}),medium:chunkFCUG4YN5_js.a({family:l,scale:c,weight:500}),semibold:chunkFCUG4YN5_js.a({family:l,scale:c,weight:600}),bold:chunkFCUG4YN5_js.a({family:l,scale:c,weight:700}),xbold:chunkFCUG4YN5_js.a({family:l,scale:c,weight:800}),black:chunkFCUG4YN5_js.a({family:l,scale:c,weight:900})},"2xl":{thin:chunkFCUG4YN5_js.a({family:l,scale:n,weight:100}),xlight:chunkFCUG4YN5_js.a({family:l,scale:n,weight:200}),light:chunkFCUG4YN5_js.a({family:l,scale:n,weight:300}),normal:chunkFCUG4YN5_js.a({family:l,scale:n,weight:400}),medium:chunkFCUG4YN5_js.a({family:l,scale:n,weight:500}),semibold:chunkFCUG4YN5_js.a({family:l,scale:n,weight:600}),bold:chunkFCUG4YN5_js.a({family:l,scale:n,weight:700}),xbold:chunkFCUG4YN5_js.a({family:l,scale:n,weight:800}),black:chunkFCUG4YN5_js.a({family:l,scale:n,weight:900})},"3xl":{thin:chunkFCUG4YN5_js.a({family:l,scale:g,weight:100}),xlight:chunkFCUG4YN5_js.a({family:l,scale:g,weight:200}),light:chunkFCUG4YN5_js.a({family:l,scale:g,weight:300}),normal:chunkFCUG4YN5_js.a({family:l,scale:g,weight:400}),medium:chunkFCUG4YN5_js.a({family:l,scale:g,weight:500}),semibold:chunkFCUG4YN5_js.a({family:l,scale:g,weight:600}),bold:chunkFCUG4YN5_js.a({family:l,scale:g,weight:700}),xbold:chunkFCUG4YN5_js.a({family:l,scale:g,weight:800}),black:chunkFCUG4YN5_js.a({family:l,scale:g,weight:900})},"4xl":{thin:chunkFCUG4YN5_js.a({family:l,scale:y,weight:100}),xlight:chunkFCUG4YN5_js.a({family:l,scale:y,weight:200}),light:chunkFCUG4YN5_js.a({family:l,scale:y,weight:300}),normal:chunkFCUG4YN5_js.a({family:l,scale:y,weight:400}),medium:chunkFCUG4YN5_js.a({family:l,scale:y,weight:500}),semibold:chunkFCUG4YN5_js.a({family:l,scale:y,weight:600}),bold:chunkFCUG4YN5_js.a({family:l,scale:y,weight:700}),xbold:chunkFCUG4YN5_js.a({family:l,scale:y,weight:800}),black:chunkFCUG4YN5_js.a({family:l,scale:y,weight:900})},"5xl":{thin:chunkFCUG4YN5_js.a({family:l,scale:w,weight:100}),xlight:chunkFCUG4YN5_js.a({family:l,scale:w,weight:200}),light:chunkFCUG4YN5_js.a({family:l,scale:w,weight:300}),normal:chunkFCUG4YN5_js.a({family:l,scale:w,weight:400}),medium:chunkFCUG4YN5_js.a({family:l,scale:w,weight:500}),semibold:chunkFCUG4YN5_js.a({family:l,scale:w,weight:600}),bold:chunkFCUG4YN5_js.a({family:l,scale:w,weight:700}),xbold:chunkFCUG4YN5_js.a({family:l,scale:w,weight:800}),black:chunkFCUG4YN5_js.a({family:l,scale:w,weight:900})},"6xl":{thin:chunkFCUG4YN5_js.a({family:l,scale:b,weight:100}),xlight:chunkFCUG4YN5_js.a({family:l,scale:b,weight:200}),light:chunkFCUG4YN5_js.a({family:i,scale:l,weight:300}),normal:chunkFCUG4YN5_js.a({family:l,scale:b,weight:400}),medium:chunkFCUG4YN5_js.a({family:l,scale:b,weight:500}),semibold:chunkFCUG4YN5_js.a({family:l,scale:b,weight:600}),bold:chunkFCUG4YN5_js.a({family:l,scale:b,weight:700}),xbold:chunkFCUG4YN5_js.a({family:l,scale:b,weight:800}),black:chunkFCUG4YN5_js.a({family:l,scale:b,weight:900})},"7xl":{thin:chunkFCUG4YN5_js.a({family:l,scale:d,weight:100}),xlight:chunkFCUG4YN5_js.a({family:l,scale:d,weight:200}),light:chunkFCUG4YN5_js.a({family:l,scale:d,weight:300}),normal:chunkFCUG4YN5_js.a({family:l,scale:d,weight:400}),medium:chunkFCUG4YN5_js.a({family:l,scale:d,weight:500}),semibold:chunkFCUG4YN5_js.a({family:l,scale:d,weight:600}),bold:chunkFCUG4YN5_js.a({family:l,scale:d,weight:700}),xbold:chunkFCUG4YN5_js.a({family:l,scale:d,weight:800}),black:chunkFCUG4YN5_js.a({family:l,scale:d,weight:900})},"8xl":{thin:chunkFCUG4YN5_js.a({family:l,scale:x,weight:100}),xlight:chunkFCUG4YN5_js.a({family:l,scale:x,weight:200}),light:chunkFCUG4YN5_js.a({family:l,scale:x,weight:300}),normal:chunkFCUG4YN5_js.a({family:l,scale:x,weight:400}),medium:chunkFCUG4YN5_js.a({family:l,scale:x,weight:500}),semibold:chunkFCUG4YN5_js.a({family:l,scale:x,weight:600}),bold:chunkFCUG4YN5_js.a({family:l,scale:x,weight:700}),xbold:chunkFCUG4YN5_js.a({family:l,scale:x,weight:800}),black:chunkFCUG4YN5_js.a({family:l,scale:x,weight:900})},"9xl":{thin:chunkFCUG4YN5_js.a({family:l,scale:u,weight:100}),xlight:chunkFCUG4YN5_js.a({family:l,scale:u,weight:200}),light:chunkFCUG4YN5_js.a({family:l,scale:u,weight:300}),normal:chunkFCUG4YN5_js.a({family:l,scale:u,weight:400}),medium:chunkFCUG4YN5_js.a({family:l,scale:u,weight:500}),semibold:chunkFCUG4YN5_js.a({family:l,scale:u,weight:600}),bold:chunkFCUG4YN5_js.a({family:l,scale:u,weight:700}),xbold:chunkFCUG4YN5_js.a({family:l,scale:u,weight:800}),black:chunkFCUG4YN5_js.a({family:l,scale:u,weight:900})}}}};var K=({base:m,config:t})=>({external_resources:t?.external_resources?j({base:m.external_resources,config:t?.external_resources?t.external_resources:[]}):m.external_resources,fonts:t?.fonts?U({base:m.fonts,config:t?.fonts?t.fonts:{}}):m.fonts});var p=({base:m,config:t})=>{let i=r(t,m.tint_500,["tint_500"]),l=m.tint_500!=i,a=r(t,l?i:m.tint_400,["tint_400"]),o=r(t,l?a:m.tint_300,["tint_300"]),s=r(t,l?o:m.tint_200,["tint_200"]),h=r(t,l?s:m.tint_100,["tint_100"]),f=r(t,l?h:m.tint_50,["tint_50"]),c=r(t,l?i:m.tint_600,["tint_600"]),n=r(t,l?c:m.tint_700,["tint_700"]),g=r(t,l?n:m.tint_800,["tint_800"]),y=r(t,l?g:m.tint_900,["tint_900"]),w=r(t,l?y:m.tint_950,["tint_950"]);return {tint_50:f,tint_100:h,tint_200:s,tint_300:o,tint_400:a,tint_500:i,tint_600:c,tint_700:n,tint_800:g,tint_900:y,tint_950:w}};var W=({base:m,config:t})=>t||m;var q=({base:m,config:t})=>({danger:p({base:m.danger,config:t.danger?t.danger:{}}),warning:p({base:m.warning,config:t.warning?t.warning:{}}),success:p({base:m.success,config:t.success?t.success:{}}),info:p({base:m.info,config:t.info?t.info:{}}),neutrals:p({base:m.neutrals,config:t.neutrals?t.neutrals:{}}),surfaces:p({base:m.surfaces,config:t.surfaces?t.surfaces:{}}),primary:p({base:m.primary,config:t.primary?t.primary:{}}),accent:p({base:m.accent,config:t.accent?t.accent:{}}),accent2:p({base:m.accent2,config:t.accent2?t.accent2:t.accent?t.accent:{}}),accent3:p({base:m.accent3,config:t.accent3?t.accent3:t.accent?t.accent:{}}),accent4:p({base:m.accent4,config:t.accent4?t.accent4:t.accent?t.accent:{}}),accent5:p({base:m.accent5,config:t.accent5?t.accent5:t.accent?t.accent:{}}),supporting:p({base:m.supporting,config:t.supporting?t.supporting:{}}),additional:W({base:m.additional,config:t?.additional?t.additional:[]})});var G=({base:m,config:t})=>({none:m.none,xs:t?t.xs:m.xs,sm:t?t.sm:m.sm,md:t?t.md:m.md,lg:t?t.lg:m.lg,xl:t?t.xl:m.xl,"2xl":t?t["2xl"]:m["2xl"],"3xl":t?t["3xl"]:m["3xl"],full:"9999px"});var Y=({base:m,config:t})=>({none:"0 0 #0000",xs:t?t.xs:m.xs,sm:t?t.sm:m.sm,md:t?t.md:m.md,lg:t?t.lg:m.lg,xl:t?t.xl:m.xl,"2xl":t?t["2xl"]:m["2xl"]});var ae=({config:m})=>({alternate:H({base:chunkFCUG4YN5_js.r.alternate,config:m?.alternate?m.alternate:[]}),typography:m?.typography?K({base:chunkFCUG4YN5_js.r.typography,config:m.typography?m.typography:{}}):chunkFCUG4YN5_js.r.typography,colors:m?.colors?q({base:chunkFCUG4YN5_js.r.colors,config:m.colors?m.colors:{}}):chunkFCUG4YN5_js.r.colors,utility:chunkFCUG4YN5_js.r.utility,radius:G({base:chunkFCUG4YN5_js.r.radius,config:m.radius}),shadow:Y({base:chunkFCUG4YN5_js.r.shadow,config:m.shadow})});exports.ThemeMode=(l=>(l.STANDARD="STANDARD",l.INVERTED="INVERTED",l.CONTRAST="CONTRAST",l))(exports.ThemeMode||{});(i=>{function m(l,a){return Object.values(i).includes(l)?l:a}i.from=m;function t(l){return Object.values(i).includes(l)?l:null}i.tryFrom=t;})(exports.ThemeMode||={});var me=S.createContext("STANDARD");var I=({name:m,alternates:t})=>{let i=t.find(l=>l.name===m);return i&&i.theme};var oe=({component:m,default:t})=>{let i=chunkFCUG4YN5_js.t(),l=I({name:m,alternates:i.alternate}),a={Color:"inherit",BackgroundColor:"transparent",BorderColor:"transparent"},o=(s,h)=>({Color:h?.Color||s?.Color||a.Color,BackgroundColor:h?.BackgroundColor||s?.BackgroundColor||a.BackgroundColor,BorderColor:h?.BorderColor||s?.BorderColor||a.BorderColor});return {Init:o(t?.Init,l?.Init),Hover:o(t?.Hover,l?.Hover),Skeleton:o(t?.Skeleton,l?.Skeleton)}};var se=()=>chunkFCUG4YN5_js.t().radius;var he=()=>chunkFCUG4YN5_js.t().utility;var re=()=>chunkFCUG4YN5_js.t().shadow;var ce=m=>{let t=({children:i})=>S__default.default.createElement(S__default.default.Fragment,null," ",i," ");return m.reduce((i,[l,a={}])=>({children:o})=>S__default.default.createElement(i,null,S__default.default.createElement(l,{...a},o)),t)};var ge=m=>{let{children:t,sheets:i}=m;return S.useEffect(()=>{i.map(function(l){let a=document.createElement("link");a.rel="stylesheet",a.href=l,document.head.appendChild(a);});},[i]),t??null};var ye=({name:m,colors:t,fallback:i})=>{let l=t.find(a=>a.name===m);return l?l.color:i};

Object.defineProperty(exports, "ThemeCtx", {
    enumerable: true,
    get: function () { return chunkFCUG4YN5_js.s; }
});
Object.defineProperty(exports, "useTheme", {
    enumerable: true,
    get: function () { return chunkFCUG4YN5_js.t; }
});
Object.defineProperty(exports, "useThemeColor", {
    enumerable: true,
    get: function () { return chunkFCUG4YN5_js.u; }
});
Object.defineProperty(exports, "useThemeFonts", {
    enumerable: true,
    get: function () { return chunkFCUG4YN5_js.v; }
});
exports.BuildProvidersTree = ce;
exports.ExternalStylesheetLoader = ge;
exports.LookupAdditionalColor = ye;
exports.LookupAlternateTheme = I;
exports.StyleProviderAnimation = ee;
exports.StyleProviderPreFlight = ie;
exports.ThemeBuilder = ae;
exports.ThemeModeCtx = me;
exports.orDefault = r;
exports.useAlternateTheme = oe;
exports.useThemeRadius = se;
exports.useThemeShadow = re;
exports.useThemeUtility = he;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map