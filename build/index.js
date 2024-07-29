'use strict';

var chunkDA5SOCE4_js = require('./chunk-DA5SOCE4.js');
var styledComponents = require('styled-components');
var I = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var I__default = /*#__PURE__*/_interopDefault(I);

var Z=styledComponents.createGlobalStyle`
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
`;var X=({base:m,config:a})=>a||m;var j=({base:m,config:a})=>a||m;function o(m,a,i){let l=m;for(let t of i)if(l=l?.[t]??a,l==null)break;return l}var U=({base:m,config:a})=>{let i=o(a,chunkDA5SOCE4_js.b,["family","primary"]),l=o(a,o(a,chunkDA5SOCE4_js.c,["family","primary"]),["family","accent"]),t=o(a,o(a,chunkDA5SOCE4_js.d,["family","primary"]),["family","supporting"]),s=o(a,chunkDA5SOCE4_js.g,["scale","md"]),r=o(a,chunkDA5SOCE4_js.f,["scale","sm"]),h=o(a,chunkDA5SOCE4_js.e,["scale","xs"]),f=o(a,chunkDA5SOCE4_js.h,["scale","lg"]),c=o(a,chunkDA5SOCE4_js.i,["scale","xl"]),y=o(a,chunkDA5SOCE4_js.j,["scale","2xl"]),n=o(a,chunkDA5SOCE4_js.k,["scale","3xl"]),g=o(a,chunkDA5SOCE4_js.l,["scale","4xl"]),d=o(a,chunkDA5SOCE4_js.m,["scale","5xl"]),u=o(a,chunkDA5SOCE4_js.n,["scale","6xl"]),w=o(a,chunkDA5SOCE4_js.o,["scale","7xl"]),p=o(a,chunkDA5SOCE4_js.p,["scale","8xl"]),x=o(a,chunkDA5SOCE4_js.q,["scale","9xl"]);return {primary:{xs:{thin:chunkDA5SOCE4_js.a({family:i,scale:h,weight:100}),xlight:chunkDA5SOCE4_js.a({family:i,scale:h,weight:200}),light:chunkDA5SOCE4_js.a({family:i,scale:h,weight:300}),normal:chunkDA5SOCE4_js.a({family:i,scale:h,weight:400}),medium:chunkDA5SOCE4_js.a({family:i,scale:h,weight:500}),semibold:chunkDA5SOCE4_js.a({family:i,scale:h,weight:600}),bold:chunkDA5SOCE4_js.a({family:i,scale:h,weight:700}),xbold:chunkDA5SOCE4_js.a({family:i,scale:h,weight:800}),black:chunkDA5SOCE4_js.a({family:i,scale:h,weight:900})},sm:{thin:chunkDA5SOCE4_js.a({family:i,scale:r,weight:100}),xlight:chunkDA5SOCE4_js.a({family:i,scale:r,weight:200}),light:chunkDA5SOCE4_js.a({family:i,scale:r,weight:300}),normal:chunkDA5SOCE4_js.a({family:i,scale:r,weight:400}),medium:chunkDA5SOCE4_js.a({family:i,scale:r,weight:500}),semibold:chunkDA5SOCE4_js.a({family:i,scale:r,weight:600}),bold:chunkDA5SOCE4_js.a({family:i,scale:r,weight:700}),xbold:chunkDA5SOCE4_js.a({family:i,scale:r,weight:800}),black:chunkDA5SOCE4_js.a({family:i,scale:r,weight:900})},md:{thin:chunkDA5SOCE4_js.a({family:i,scale:s,weight:100}),xlight:chunkDA5SOCE4_js.a({family:i,scale:s,weight:200}),light:chunkDA5SOCE4_js.a({family:i,scale:s,weight:300}),normal:chunkDA5SOCE4_js.a({family:i,scale:s,weight:400}),medium:chunkDA5SOCE4_js.a({family:i,scale:s,weight:500}),semibold:chunkDA5SOCE4_js.a({family:i,scale:s,weight:600}),bold:chunkDA5SOCE4_js.a({family:i,scale:s,weight:700}),xbold:chunkDA5SOCE4_js.a({family:i,scale:s,weight:800}),black:chunkDA5SOCE4_js.a({family:i,scale:s,weight:900})},lg:{thin:chunkDA5SOCE4_js.a({family:i,scale:f,weight:100}),xlight:chunkDA5SOCE4_js.a({family:i,scale:f,weight:200}),light:chunkDA5SOCE4_js.a({family:i,scale:f,weight:300}),normal:chunkDA5SOCE4_js.a({family:i,scale:f,weight:400}),medium:chunkDA5SOCE4_js.a({family:i,scale:f,weight:500}),semibold:chunkDA5SOCE4_js.a({family:i,scale:f,weight:600}),bold:chunkDA5SOCE4_js.a({family:i,scale:f,weight:700}),xbold:chunkDA5SOCE4_js.a({family:i,scale:f,weight:800}),black:chunkDA5SOCE4_js.a({family:i,scale:f,weight:900})},xl:{thin:chunkDA5SOCE4_js.a({family:i,scale:c,weight:100}),xlight:chunkDA5SOCE4_js.a({family:i,scale:c,weight:200}),light:chunkDA5SOCE4_js.a({family:i,scale:c,weight:300}),normal:chunkDA5SOCE4_js.a({family:i,scale:c,weight:400}),medium:chunkDA5SOCE4_js.a({family:i,scale:c,weight:500}),semibold:chunkDA5SOCE4_js.a({family:i,scale:c,weight:600}),bold:chunkDA5SOCE4_js.a({family:i,scale:c,weight:700}),xbold:chunkDA5SOCE4_js.a({family:i,scale:c,weight:800}),black:chunkDA5SOCE4_js.a({family:i,scale:c,weight:900})},"2xl":{thin:chunkDA5SOCE4_js.a({family:i,scale:y,weight:100}),xlight:chunkDA5SOCE4_js.a({family:i,scale:y,weight:200}),light:chunkDA5SOCE4_js.a({family:i,scale:y,weight:300}),normal:chunkDA5SOCE4_js.a({family:i,scale:y,weight:400}),medium:chunkDA5SOCE4_js.a({family:i,scale:y,weight:500}),semibold:chunkDA5SOCE4_js.a({family:i,scale:y,weight:600}),bold:chunkDA5SOCE4_js.a({family:i,scale:y,weight:700}),xbold:chunkDA5SOCE4_js.a({family:i,scale:y,weight:800}),black:chunkDA5SOCE4_js.a({family:i,scale:y,weight:900})},"3xl":{thin:chunkDA5SOCE4_js.a({family:i,scale:n,weight:100}),xlight:chunkDA5SOCE4_js.a({family:i,scale:n,weight:200}),light:chunkDA5SOCE4_js.a({family:i,scale:n,weight:300}),normal:chunkDA5SOCE4_js.a({family:i,scale:n,weight:400}),medium:chunkDA5SOCE4_js.a({family:i,scale:n,weight:500}),semibold:chunkDA5SOCE4_js.a({family:i,scale:n,weight:600}),bold:chunkDA5SOCE4_js.a({family:i,scale:n,weight:700}),xbold:chunkDA5SOCE4_js.a({family:i,scale:n,weight:800}),black:chunkDA5SOCE4_js.a({family:i,scale:n,weight:900})},"4xl":{thin:chunkDA5SOCE4_js.a({family:i,scale:g,weight:100}),xlight:chunkDA5SOCE4_js.a({family:i,scale:g,weight:200}),light:chunkDA5SOCE4_js.a({family:i,scale:g,weight:300}),normal:chunkDA5SOCE4_js.a({family:i,scale:g,weight:400}),medium:chunkDA5SOCE4_js.a({family:i,scale:g,weight:500}),semibold:chunkDA5SOCE4_js.a({family:i,scale:g,weight:600}),bold:chunkDA5SOCE4_js.a({family:i,scale:g,weight:700}),xbold:chunkDA5SOCE4_js.a({family:i,scale:g,weight:800}),black:chunkDA5SOCE4_js.a({family:i,scale:g,weight:900})},"5xl":{thin:chunkDA5SOCE4_js.a({family:i,scale:d,weight:100}),xlight:chunkDA5SOCE4_js.a({family:i,scale:d,weight:200}),light:chunkDA5SOCE4_js.a({family:i,scale:d,weight:300}),normal:chunkDA5SOCE4_js.a({family:i,scale:d,weight:400}),medium:chunkDA5SOCE4_js.a({family:i,scale:d,weight:500}),semibold:chunkDA5SOCE4_js.a({family:i,scale:d,weight:600}),bold:chunkDA5SOCE4_js.a({family:i,scale:d,weight:700}),xbold:chunkDA5SOCE4_js.a({family:i,scale:d,weight:800}),black:chunkDA5SOCE4_js.a({family:i,scale:d,weight:900})},"6xl":{thin:chunkDA5SOCE4_js.a({family:i,scale:u,weight:100}),xlight:chunkDA5SOCE4_js.a({family:i,scale:u,weight:200}),light:chunkDA5SOCE4_js.a({family:i,scale:u,weight:300}),normal:chunkDA5SOCE4_js.a({family:i,scale:u,weight:400}),medium:chunkDA5SOCE4_js.a({family:i,scale:u,weight:500}),semibold:chunkDA5SOCE4_js.a({family:i,scale:u,weight:600}),bold:chunkDA5SOCE4_js.a({family:i,scale:u,weight:700}),xbold:chunkDA5SOCE4_js.a({family:i,scale:u,weight:800}),black:chunkDA5SOCE4_js.a({family:i,scale:u,weight:900})},"7xl":{thin:chunkDA5SOCE4_js.a({family:i,scale:w,weight:100}),xlight:chunkDA5SOCE4_js.a({family:i,scale:w,weight:200}),light:chunkDA5SOCE4_js.a({family:i,scale:w,weight:300}),normal:chunkDA5SOCE4_js.a({family:i,scale:w,weight:400}),medium:chunkDA5SOCE4_js.a({family:i,scale:w,weight:500}),semibold:chunkDA5SOCE4_js.a({family:i,scale:w,weight:600}),bold:chunkDA5SOCE4_js.a({family:i,scale:w,weight:700}),xbold:chunkDA5SOCE4_js.a({family:i,scale:w,weight:800}),black:chunkDA5SOCE4_js.a({family:i,scale:w,weight:900})},"8xl":{thin:chunkDA5SOCE4_js.a({family:i,scale:p,weight:100}),xlight:chunkDA5SOCE4_js.a({family:i,scale:p,weight:200}),light:chunkDA5SOCE4_js.a({family:i,scale:p,weight:300}),normal:chunkDA5SOCE4_js.a({family:i,scale:p,weight:400}),medium:chunkDA5SOCE4_js.a({family:i,scale:p,weight:500}),semibold:chunkDA5SOCE4_js.a({family:i,scale:p,weight:600}),bold:chunkDA5SOCE4_js.a({family:i,scale:p,weight:700}),xbold:chunkDA5SOCE4_js.a({family:i,scale:p,weight:800}),black:chunkDA5SOCE4_js.a({family:i,scale:p,weight:900})},"9xl":{thin:chunkDA5SOCE4_js.a({family:i,scale:x,weight:100}),xlight:chunkDA5SOCE4_js.a({family:i,scale:x,weight:200}),light:chunkDA5SOCE4_js.a({family:i,scale:x,weight:300}),normal:chunkDA5SOCE4_js.a({family:i,scale:x,weight:400}),medium:chunkDA5SOCE4_js.a({family:i,scale:x,weight:500}),semibold:chunkDA5SOCE4_js.a({family:i,scale:x,weight:600}),bold:chunkDA5SOCE4_js.a({family:i,scale:x,weight:700}),xbold:chunkDA5SOCE4_js.a({family:i,scale:x,weight:800}),black:chunkDA5SOCE4_js.a({family:i,scale:x,weight:900})}},supporting:{xs:{thin:chunkDA5SOCE4_js.a({family:t,scale:h,weight:100}),xlight:chunkDA5SOCE4_js.a({family:t,scale:h,weight:200}),light:chunkDA5SOCE4_js.a({family:t,scale:h,weight:300}),normal:chunkDA5SOCE4_js.a({family:t,scale:h,weight:400}),medium:chunkDA5SOCE4_js.a({family:t,scale:h,weight:500}),semibold:chunkDA5SOCE4_js.a({family:t,scale:h,weight:600}),bold:chunkDA5SOCE4_js.a({family:t,scale:h,weight:700}),xbold:chunkDA5SOCE4_js.a({family:t,scale:h,weight:800}),black:chunkDA5SOCE4_js.a({family:t,scale:h,weight:900})},sm:{thin:chunkDA5SOCE4_js.a({family:t,scale:r,weight:100}),xlight:chunkDA5SOCE4_js.a({family:t,scale:r,weight:200}),light:chunkDA5SOCE4_js.a({family:t,scale:r,weight:300}),normal:chunkDA5SOCE4_js.a({family:t,scale:r,weight:400}),medium:chunkDA5SOCE4_js.a({family:t,scale:r,weight:500}),semibold:chunkDA5SOCE4_js.a({family:t,scale:r,weight:600}),bold:chunkDA5SOCE4_js.a({family:t,scale:r,weight:700}),xbold:chunkDA5SOCE4_js.a({family:t,scale:r,weight:800}),black:chunkDA5SOCE4_js.a({family:t,scale:r,weight:900})},md:{thin:chunkDA5SOCE4_js.a({family:t,scale:s,weight:100}),xlight:chunkDA5SOCE4_js.a({family:t,scale:s,weight:200}),light:chunkDA5SOCE4_js.a({family:t,scale:s,weight:300}),normal:chunkDA5SOCE4_js.a({family:t,scale:s,weight:400}),medium:chunkDA5SOCE4_js.a({family:t,scale:s,weight:500}),semibold:chunkDA5SOCE4_js.a({family:t,scale:s,weight:600}),bold:chunkDA5SOCE4_js.a({family:t,scale:s,weight:700}),xbold:chunkDA5SOCE4_js.a({family:t,scale:s,weight:800}),black:chunkDA5SOCE4_js.a({family:t,scale:s,weight:900})},lg:{thin:chunkDA5SOCE4_js.a({family:t,scale:f,weight:100}),xlight:chunkDA5SOCE4_js.a({family:t,scale:f,weight:200}),light:chunkDA5SOCE4_js.a({family:t,scale:f,weight:300}),normal:chunkDA5SOCE4_js.a({family:t,scale:f,weight:400}),medium:chunkDA5SOCE4_js.a({family:t,scale:f,weight:500}),semibold:chunkDA5SOCE4_js.a({family:t,scale:f,weight:600}),bold:chunkDA5SOCE4_js.a({family:t,scale:f,weight:700}),xbold:chunkDA5SOCE4_js.a({family:t,scale:f,weight:800}),black:chunkDA5SOCE4_js.a({family:t,scale:f,weight:900})},xl:{thin:chunkDA5SOCE4_js.a({family:t,scale:c,weight:100}),xlight:chunkDA5SOCE4_js.a({family:t,scale:c,weight:200}),light:chunkDA5SOCE4_js.a({family:t,scale:c,weight:300}),normal:chunkDA5SOCE4_js.a({family:t,scale:c,weight:400}),medium:chunkDA5SOCE4_js.a({family:t,scale:c,weight:500}),semibold:chunkDA5SOCE4_js.a({family:t,scale:c,weight:600}),bold:chunkDA5SOCE4_js.a({family:t,scale:c,weight:700}),xbold:chunkDA5SOCE4_js.a({family:t,scale:c,weight:800}),black:chunkDA5SOCE4_js.a({family:t,scale:c,weight:900})},"2xl":{thin:chunkDA5SOCE4_js.a({family:t,scale:y,weight:100}),xlight:chunkDA5SOCE4_js.a({family:t,scale:y,weight:200}),light:chunkDA5SOCE4_js.a({family:t,scale:y,weight:300}),normal:chunkDA5SOCE4_js.a({family:t,scale:y,weight:400}),medium:chunkDA5SOCE4_js.a({family:t,scale:y,weight:500}),semibold:chunkDA5SOCE4_js.a({family:t,scale:y,weight:600}),bold:chunkDA5SOCE4_js.a({family:t,scale:y,weight:700}),xbold:chunkDA5SOCE4_js.a({family:t,scale:y,weight:800}),black:chunkDA5SOCE4_js.a({family:t,scale:y,weight:900})},"3xl":{thin:chunkDA5SOCE4_js.a({family:t,scale:n,weight:100}),xlight:chunkDA5SOCE4_js.a({family:t,scale:n,weight:200}),light:chunkDA5SOCE4_js.a({family:t,scale:n,weight:300}),normal:chunkDA5SOCE4_js.a({family:t,scale:n,weight:400}),medium:chunkDA5SOCE4_js.a({family:t,scale:n,weight:500}),semibold:chunkDA5SOCE4_js.a({family:t,scale:n,weight:600}),bold:chunkDA5SOCE4_js.a({family:t,scale:n,weight:700}),xbold:chunkDA5SOCE4_js.a({family:t,scale:n,weight:800}),black:chunkDA5SOCE4_js.a({family:t,scale:n,weight:900})},"4xl":{thin:chunkDA5SOCE4_js.a({family:t,scale:g,weight:100}),xlight:chunkDA5SOCE4_js.a({family:t,scale:g,weight:200}),light:chunkDA5SOCE4_js.a({family:t,scale:g,weight:300}),normal:chunkDA5SOCE4_js.a({family:t,scale:g,weight:400}),medium:chunkDA5SOCE4_js.a({family:t,scale:g,weight:500}),semibold:chunkDA5SOCE4_js.a({family:t,scale:g,weight:600}),bold:chunkDA5SOCE4_js.a({family:t,scale:g,weight:700}),xbold:chunkDA5SOCE4_js.a({family:t,scale:g,weight:800}),black:chunkDA5SOCE4_js.a({family:t,scale:g,weight:900})},"5xl":{thin:chunkDA5SOCE4_js.a({family:t,scale:d,weight:100}),xlight:chunkDA5SOCE4_js.a({family:t,scale:d,weight:200}),light:chunkDA5SOCE4_js.a({family:t,scale:d,weight:300}),normal:chunkDA5SOCE4_js.a({family:t,scale:d,weight:400}),medium:chunkDA5SOCE4_js.a({family:t,scale:d,weight:500}),semibold:chunkDA5SOCE4_js.a({family:t,scale:d,weight:600}),bold:chunkDA5SOCE4_js.a({family:t,scale:d,weight:700}),xbold:chunkDA5SOCE4_js.a({family:t,scale:d,weight:800}),black:chunkDA5SOCE4_js.a({family:t,scale:d,weight:900})},"6xl":{thin:chunkDA5SOCE4_js.a({family:t,scale:u,weight:100}),xlight:chunkDA5SOCE4_js.a({family:t,scale:u,weight:200}),light:chunkDA5SOCE4_js.a({family:t,scale:u,weight:300}),normal:chunkDA5SOCE4_js.a({family:t,scale:u,weight:400}),medium:chunkDA5SOCE4_js.a({family:t,scale:u,weight:500}),semibold:chunkDA5SOCE4_js.a({family:t,scale:u,weight:600}),bold:chunkDA5SOCE4_js.a({family:t,scale:u,weight:700}),xbold:chunkDA5SOCE4_js.a({family:t,scale:u,weight:800}),black:chunkDA5SOCE4_js.a({family:t,scale:u,weight:900})},"7xl":{thin:chunkDA5SOCE4_js.a({family:t,scale:w,weight:100}),xlight:chunkDA5SOCE4_js.a({family:t,scale:w,weight:200}),light:chunkDA5SOCE4_js.a({family:t,scale:w,weight:300}),normal:chunkDA5SOCE4_js.a({family:t,scale:w,weight:400}),medium:chunkDA5SOCE4_js.a({family:t,scale:w,weight:500}),semibold:chunkDA5SOCE4_js.a({family:t,scale:w,weight:600}),bold:chunkDA5SOCE4_js.a({family:t,scale:w,weight:700}),xbold:chunkDA5SOCE4_js.a({family:t,scale:w,weight:800}),black:chunkDA5SOCE4_js.a({family:t,scale:w,weight:900})},"8xl":{thin:chunkDA5SOCE4_js.a({family:t,scale:p,weight:100}),xlight:chunkDA5SOCE4_js.a({family:t,scale:p,weight:200}),light:chunkDA5SOCE4_js.a({family:t,scale:p,weight:300}),normal:chunkDA5SOCE4_js.a({family:t,scale:p,weight:400}),medium:chunkDA5SOCE4_js.a({family:t,scale:p,weight:500}),semibold:chunkDA5SOCE4_js.a({family:t,scale:p,weight:600}),bold:chunkDA5SOCE4_js.a({family:t,scale:p,weight:700}),xbold:chunkDA5SOCE4_js.a({family:t,scale:p,weight:800}),black:chunkDA5SOCE4_js.a({family:t,scale:p,weight:900})},"9xl":{thin:chunkDA5SOCE4_js.a({family:t,scale:x,weight:100}),xlight:chunkDA5SOCE4_js.a({family:t,scale:x,weight:200}),light:chunkDA5SOCE4_js.a({family:t,scale:x,weight:300}),normal:chunkDA5SOCE4_js.a({family:t,scale:x,weight:400}),medium:chunkDA5SOCE4_js.a({family:t,scale:x,weight:500}),semibold:chunkDA5SOCE4_js.a({family:t,scale:x,weight:600}),bold:chunkDA5SOCE4_js.a({family:t,scale:x,weight:700}),xbold:chunkDA5SOCE4_js.a({family:t,scale:x,weight:800}),black:chunkDA5SOCE4_js.a({family:t,scale:x,weight:900})}},accent:{xs:{thin:chunkDA5SOCE4_js.a({family:l,scale:h,weight:100}),xlight:chunkDA5SOCE4_js.a({family:l,scale:h,weight:200}),light:chunkDA5SOCE4_js.a({family:l,scale:h,weight:300}),normal:chunkDA5SOCE4_js.a({family:l,scale:h,weight:400}),medium:chunkDA5SOCE4_js.a({family:l,scale:h,weight:500}),semibold:chunkDA5SOCE4_js.a({family:l,scale:h,weight:600}),bold:chunkDA5SOCE4_js.a({family:l,scale:h,weight:700}),xbold:chunkDA5SOCE4_js.a({family:l,scale:h,weight:800}),black:chunkDA5SOCE4_js.a({family:l,scale:h,weight:900})},sm:{thin:chunkDA5SOCE4_js.a({family:l,scale:r,weight:100}),xlight:chunkDA5SOCE4_js.a({family:l,scale:r,weight:200}),light:chunkDA5SOCE4_js.a({family:l,scale:r,weight:300}),normal:chunkDA5SOCE4_js.a({family:l,scale:r,weight:400}),medium:chunkDA5SOCE4_js.a({family:l,scale:r,weight:500}),semibold:chunkDA5SOCE4_js.a({family:l,scale:r,weight:600}),bold:chunkDA5SOCE4_js.a({family:l,scale:r,weight:700}),xbold:chunkDA5SOCE4_js.a({family:l,scale:r,weight:800}),black:chunkDA5SOCE4_js.a({family:l,scale:r,weight:900})},md:{thin:chunkDA5SOCE4_js.a({family:l,scale:s,weight:100}),xlight:chunkDA5SOCE4_js.a({family:l,scale:s,weight:200}),light:chunkDA5SOCE4_js.a({family:l,scale:s,weight:300}),normal:chunkDA5SOCE4_js.a({family:l,scale:s,weight:400}),medium:chunkDA5SOCE4_js.a({family:l,scale:s,weight:500}),semibold:chunkDA5SOCE4_js.a({family:l,scale:s,weight:600}),bold:chunkDA5SOCE4_js.a({family:l,scale:s,weight:700}),xbold:chunkDA5SOCE4_js.a({family:l,scale:s,weight:800}),black:chunkDA5SOCE4_js.a({family:l,scale:s,weight:900})},lg:{thin:chunkDA5SOCE4_js.a({family:l,scale:f,weight:100}),xlight:chunkDA5SOCE4_js.a({family:l,scale:f,weight:200}),light:chunkDA5SOCE4_js.a({family:l,scale:f,weight:300}),normal:chunkDA5SOCE4_js.a({family:l,scale:f,weight:400}),medium:chunkDA5SOCE4_js.a({family:l,scale:f,weight:500}),semibold:chunkDA5SOCE4_js.a({family:l,scale:f,weight:600}),bold:chunkDA5SOCE4_js.a({family:l,scale:f,weight:700}),xbold:chunkDA5SOCE4_js.a({family:l,scale:f,weight:800}),black:chunkDA5SOCE4_js.a({family:l,scale:f,weight:900})},xl:{thin:chunkDA5SOCE4_js.a({family:l,scale:c,weight:100}),xlight:chunkDA5SOCE4_js.a({family:l,scale:c,weight:200}),light:chunkDA5SOCE4_js.a({family:l,scale:c,weight:300}),normal:chunkDA5SOCE4_js.a({family:l,scale:c,weight:400}),medium:chunkDA5SOCE4_js.a({family:l,scale:c,weight:500}),semibold:chunkDA5SOCE4_js.a({family:l,scale:c,weight:600}),bold:chunkDA5SOCE4_js.a({family:l,scale:c,weight:700}),xbold:chunkDA5SOCE4_js.a({family:l,scale:c,weight:800}),black:chunkDA5SOCE4_js.a({family:l,scale:c,weight:900})},"2xl":{thin:chunkDA5SOCE4_js.a({family:l,scale:y,weight:100}),xlight:chunkDA5SOCE4_js.a({family:l,scale:y,weight:200}),light:chunkDA5SOCE4_js.a({family:l,scale:y,weight:300}),normal:chunkDA5SOCE4_js.a({family:l,scale:y,weight:400}),medium:chunkDA5SOCE4_js.a({family:l,scale:y,weight:500}),semibold:chunkDA5SOCE4_js.a({family:l,scale:y,weight:600}),bold:chunkDA5SOCE4_js.a({family:l,scale:y,weight:700}),xbold:chunkDA5SOCE4_js.a({family:l,scale:y,weight:800}),black:chunkDA5SOCE4_js.a({family:l,scale:y,weight:900})},"3xl":{thin:chunkDA5SOCE4_js.a({family:l,scale:n,weight:100}),xlight:chunkDA5SOCE4_js.a({family:l,scale:n,weight:200}),light:chunkDA5SOCE4_js.a({family:l,scale:n,weight:300}),normal:chunkDA5SOCE4_js.a({family:l,scale:n,weight:400}),medium:chunkDA5SOCE4_js.a({family:l,scale:n,weight:500}),semibold:chunkDA5SOCE4_js.a({family:l,scale:n,weight:600}),bold:chunkDA5SOCE4_js.a({family:l,scale:n,weight:700}),xbold:chunkDA5SOCE4_js.a({family:l,scale:n,weight:800}),black:chunkDA5SOCE4_js.a({family:l,scale:n,weight:900})},"4xl":{thin:chunkDA5SOCE4_js.a({family:l,scale:g,weight:100}),xlight:chunkDA5SOCE4_js.a({family:l,scale:g,weight:200}),light:chunkDA5SOCE4_js.a({family:l,scale:g,weight:300}),normal:chunkDA5SOCE4_js.a({family:l,scale:g,weight:400}),medium:chunkDA5SOCE4_js.a({family:l,scale:g,weight:500}),semibold:chunkDA5SOCE4_js.a({family:l,scale:g,weight:600}),bold:chunkDA5SOCE4_js.a({family:l,scale:g,weight:700}),xbold:chunkDA5SOCE4_js.a({family:l,scale:g,weight:800}),black:chunkDA5SOCE4_js.a({family:l,scale:g,weight:900})},"5xl":{thin:chunkDA5SOCE4_js.a({family:l,scale:d,weight:100}),xlight:chunkDA5SOCE4_js.a({family:l,scale:d,weight:200}),light:chunkDA5SOCE4_js.a({family:l,scale:d,weight:300}),normal:chunkDA5SOCE4_js.a({family:l,scale:d,weight:400}),medium:chunkDA5SOCE4_js.a({family:l,scale:d,weight:500}),semibold:chunkDA5SOCE4_js.a({family:l,scale:d,weight:600}),bold:chunkDA5SOCE4_js.a({family:l,scale:d,weight:700}),xbold:chunkDA5SOCE4_js.a({family:l,scale:d,weight:800}),black:chunkDA5SOCE4_js.a({family:l,scale:d,weight:900})},"6xl":{thin:chunkDA5SOCE4_js.a({family:l,scale:u,weight:100}),xlight:chunkDA5SOCE4_js.a({family:l,scale:u,weight:200}),light:chunkDA5SOCE4_js.a({family:i,scale:l,weight:300}),normal:chunkDA5SOCE4_js.a({family:l,scale:u,weight:400}),medium:chunkDA5SOCE4_js.a({family:l,scale:u,weight:500}),semibold:chunkDA5SOCE4_js.a({family:l,scale:u,weight:600}),bold:chunkDA5SOCE4_js.a({family:l,scale:u,weight:700}),xbold:chunkDA5SOCE4_js.a({family:l,scale:u,weight:800}),black:chunkDA5SOCE4_js.a({family:l,scale:u,weight:900})},"7xl":{thin:chunkDA5SOCE4_js.a({family:l,scale:w,weight:100}),xlight:chunkDA5SOCE4_js.a({family:l,scale:w,weight:200}),light:chunkDA5SOCE4_js.a({family:l,scale:w,weight:300}),normal:chunkDA5SOCE4_js.a({family:l,scale:w,weight:400}),medium:chunkDA5SOCE4_js.a({family:l,scale:w,weight:500}),semibold:chunkDA5SOCE4_js.a({family:l,scale:w,weight:600}),bold:chunkDA5SOCE4_js.a({family:l,scale:w,weight:700}),xbold:chunkDA5SOCE4_js.a({family:l,scale:w,weight:800}),black:chunkDA5SOCE4_js.a({family:l,scale:w,weight:900})},"8xl":{thin:chunkDA5SOCE4_js.a({family:l,scale:p,weight:100}),xlight:chunkDA5SOCE4_js.a({family:l,scale:p,weight:200}),light:chunkDA5SOCE4_js.a({family:l,scale:p,weight:300}),normal:chunkDA5SOCE4_js.a({family:l,scale:p,weight:400}),medium:chunkDA5SOCE4_js.a({family:l,scale:p,weight:500}),semibold:chunkDA5SOCE4_js.a({family:l,scale:p,weight:600}),bold:chunkDA5SOCE4_js.a({family:l,scale:p,weight:700}),xbold:chunkDA5SOCE4_js.a({family:l,scale:p,weight:800}),black:chunkDA5SOCE4_js.a({family:l,scale:p,weight:900})},"9xl":{thin:chunkDA5SOCE4_js.a({family:l,scale:x,weight:100}),xlight:chunkDA5SOCE4_js.a({family:l,scale:x,weight:200}),light:chunkDA5SOCE4_js.a({family:l,scale:x,weight:300}),normal:chunkDA5SOCE4_js.a({family:l,scale:x,weight:400}),medium:chunkDA5SOCE4_js.a({family:l,scale:x,weight:500}),semibold:chunkDA5SOCE4_js.a({family:l,scale:x,weight:600}),bold:chunkDA5SOCE4_js.a({family:l,scale:x,weight:700}),xbold:chunkDA5SOCE4_js.a({family:l,scale:x,weight:800}),black:chunkDA5SOCE4_js.a({family:l,scale:x,weight:900})}}}};var H=({base:m,config:a})=>({external_resources:a?.external_resources?j({base:m.external_resources,config:a?.external_resources?a.external_resources:[]}):m.external_resources,fonts:a?.fonts?U({base:m.fonts,config:a?.fonts?a.fonts:{}}):m.fonts});var b=({base:m,config:a})=>{let i=o(a,m.tint_500,["tint_500"]),l=m.tint_500!=i,t=o(a,l?i:m.tint_400,["tint_400"]),s=o(a,l?t:m.tint_300,["tint_300"]),r=o(a,l?s:m.tint_200,["tint_200"]),h=o(a,l?r:m.tint_100,["tint_100"]),f=o(a,l?h:m.tint_50,["tint_50"]),c=o(a,l?i:m.tint_600,["tint_600"]),y=o(a,l?c:m.tint_700,["tint_700"]),n=o(a,l?y:m.tint_800,["tint_800"]),g=o(a,l?n:m.tint_900,["tint_900"]),d=o(a,l?g:m.tint_950,["tint_950"]);return {tint_50:f,tint_100:h,tint_200:r,tint_300:s,tint_400:t,tint_500:i,tint_600:c,tint_700:y,tint_800:n,tint_900:g,tint_950:d}};var K=({base:m,config:a})=>a||m;var W=({base:m,config:a})=>({danger:b({base:m.danger,config:a.danger?a.danger:{}}),warning:b({base:m.warning,config:a.warning?a.warning:{}}),success:b({base:m.success,config:a.success?a.success:{}}),info:b({base:m.info,config:a.info?a.info:{}}),neutrals:b({base:m.neutrals,config:a.neutrals?a.neutrals:{}}),surfaces:b({base:m.surfaces,config:a.surfaces?a.surfaces:{}}),primary:b({base:m.primary,config:a.primary?a.primary:{}}),accent:b({base:m.accent,config:a.accent?a.accent:{}}),supporting:b({base:m.supporting,config:a.supporting?a.supporting:{}}),map:{label:{all:a.map?.label?.all?a.map.label.all:m.map.label.all,water:a.map?.label?.water?a.map.label.water:m.map.label.water,highway:a.map?.label?.highway?a.map.label.highway:m.map.label.highway,road:a.map?.label?.road?a.map.label.road:m.map.label.road},border:{country:a.map?.border?.country?a.map.border.country:m.map.border.country,highway:a.map?.border?.highway?a.map.border.highway:m.map.border.highway,road:a.map?.border?.road?a.map.border.road:m.map.border.road},landscape:{all:a.map?.landscape?.all?a.map.landscape.all:m.map.landscape.all,artificial:a.map?.landscape?.artificial?a.map.landscape.artificial:m.map.landscape.artificial,terrain:a.map?.landscape?.terrain?a.map.landscape.terrain:m.map.landscape.terrain,park:a.map?.landscape?.park?a.map.landscape.park:m.map.landscape.park,poi:a.map?.landscape?.poi?a.map.landscape.poi:m.map.landscape.poi,water:a.map?.landscape?.water?a.map.landscape.water:m.map.landscape.water,transit:a.map?.landscape?.transit?a.map.landscape.transit:m.map.landscape.transit,highway:a.map?.landscape?.highway?a.map.landscape.highway:m.map.landscape.highway,road:a.map?.landscape?.road?a.map.landscape.road:m.map.landscape.road}},additional:K({base:m.additional,config:a?.additional?a.additional:[]})});var q=({base:m,config:a})=>({none:m.none,xs:a?a.xs:m.xs,sm:a?a.sm:m.sm,md:a?a.md:m.md,lg:a?a.lg:m.lg,xl:a?a.xl:m.xl,"2xl":a?a["2xl"]:m["2xl"],"3xl":a?a["3xl"]:m["3xl"],full:"9999px"});var G=({base:m,config:a})=>({none:"0 0 #0000",xs:a?a.xs:m.xs,sm:a?a.sm:m.sm,md:a?a.md:m.md,lg:a?a.lg:m.lg,xl:a?a.xl:m.xl,"2xl":a?a["2xl"]:m["2xl"]});var ae=({config:m})=>({alternate:X({base:chunkDA5SOCE4_js.r.alternate,config:m?.alternate?m.alternate:[]}),typography:m?.typography?H({base:chunkDA5SOCE4_js.r.typography,config:m.typography?m.typography:{}}):chunkDA5SOCE4_js.r.typography,colors:m?.colors?W({base:chunkDA5SOCE4_js.r.colors,config:m.colors?m.colors:{}}):chunkDA5SOCE4_js.r.colors,utility:chunkDA5SOCE4_js.r.utility,radius:q({base:chunkDA5SOCE4_js.r.radius,config:m.radius}),shadow:G({base:chunkDA5SOCE4_js.r.shadow,config:m.shadow})});exports.ThemeMode=(l=>(l.STANDARD="STANDARD",l.INVERTED="INVERTED",l.CONTRAST="CONTRAST",l))(exports.ThemeMode||{});(i=>{function m(l,t){return Object.values(i).includes(l)?l:t}i.from=m;function a(l){return Object.values(i).includes(l)?l:null}i.tryFrom=a;})(exports.ThemeMode||={});var te=I.createContext("STANDARD");var me=()=>chunkDA5SOCE4_js.t().alternate;var se=()=>chunkDA5SOCE4_js.t().radius;var oe=()=>chunkDA5SOCE4_js.t().utility;var re=()=>chunkDA5SOCE4_js.t().shadow;var he=m=>{let a=({children:i})=>I__default.default.createElement(I__default.default.Fragment,null," ",i," ");return m.reduce((i,[l,t={}])=>({children:s})=>I__default.default.createElement(i,null,I__default.default.createElement(l,{...t},s)),a)};var ye=m=>{let{children:a,sheets:i}=m;return I.useEffect(()=>{i.map(function(l){let t=document.createElement("link");t.rel="stylesheet",t.href=l,document.head.appendChild(t);});},[i]),a??null};var ne=({name:m,alternates:a})=>a.find(i=>i.name===m);var ge=({name:m,colors:a,fallback:i})=>{let l=a.find(t=>t.name===m);return l?l.color:i};

Object.defineProperty(exports, "ThemeCtx", {
    enumerable: true,
    get: function () { return chunkDA5SOCE4_js.s; }
});
Object.defineProperty(exports, "useTheme", {
    enumerable: true,
    get: function () { return chunkDA5SOCE4_js.t; }
});
Object.defineProperty(exports, "useThemeColor", {
    enumerable: true,
    get: function () { return chunkDA5SOCE4_js.u; }
});
Object.defineProperty(exports, "useThemeFonts", {
    enumerable: true,
    get: function () { return chunkDA5SOCE4_js.v; }
});
exports.BuildProvidersTree = he;
exports.ExternalStylesheetLoader = ye;
exports.LookupAdditionalColor = ge;
exports.LookupAlternate = ne;
exports.StyleProviderAnimation = Z;
exports.StyleProviderPreFlight = le;
exports.ThemeBuilder = ae;
exports.ThemeModeCtx = te;
exports.orDefault = o;
exports.useThemeAlternate = me;
exports.useThemeRadius = se;
exports.useThemeShadow = re;
exports.useThemeUtility = oe;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map