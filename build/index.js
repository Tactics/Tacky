'use strict';

var chunkDGWAZXSI_js = require('./chunk-DGWAZXSI.js');
var styledComponents = require('styled-components');
var I = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var I__default = /*#__PURE__*/_interopDefault(I);

var ee=styledComponents.createGlobalStyle`
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
`;var H=({base:m,config:a})=>a||m;var j=({base:m,config:a})=>a||m;function n(m,a,i){let l=m;for(let t of i)if(l=l?.[t]??a,l==null)break;return l}var U=({base:m,config:a})=>{let i=n(a,chunkDGWAZXSI_js.b,["family","primary"]),l=n(a,n(a,chunkDGWAZXSI_js.c,["family","primary"]),["family","accent"]),t=n(a,n(a,chunkDGWAZXSI_js.d,["family","primary"]),["family","supporting"]),o=n(a,chunkDGWAZXSI_js.g,["scale","md"]),h=n(a,chunkDGWAZXSI_js.f,["scale","sm"]),c=n(a,chunkDGWAZXSI_js.e,["scale","xs"]),g=n(a,chunkDGWAZXSI_js.h,["scale","lg"]),s=n(a,chunkDGWAZXSI_js.i,["scale","xl"]),r=n(a,chunkDGWAZXSI_js.j,["scale","2xl"]),y=n(a,chunkDGWAZXSI_js.k,["scale","3xl"]),f=n(a,chunkDGWAZXSI_js.l,["scale","4xl"]),w=n(a,chunkDGWAZXSI_js.m,["scale","5xl"]),p=n(a,chunkDGWAZXSI_js.n,["scale","6xl"]),d=n(a,chunkDGWAZXSI_js.o,["scale","7xl"]),x=n(a,chunkDGWAZXSI_js.p,["scale","8xl"]),u=n(a,chunkDGWAZXSI_js.q,["scale","9xl"]);return {primary:{xs:{thin:chunkDGWAZXSI_js.a({family:i,scale:c,weight:100}),xlight:chunkDGWAZXSI_js.a({family:i,scale:c,weight:200}),light:chunkDGWAZXSI_js.a({family:i,scale:c,weight:300}),normal:chunkDGWAZXSI_js.a({family:i,scale:c,weight:400}),medium:chunkDGWAZXSI_js.a({family:i,scale:c,weight:500}),semibold:chunkDGWAZXSI_js.a({family:i,scale:c,weight:600}),bold:chunkDGWAZXSI_js.a({family:i,scale:c,weight:700}),xbold:chunkDGWAZXSI_js.a({family:i,scale:c,weight:800}),black:chunkDGWAZXSI_js.a({family:i,scale:c,weight:900})},sm:{thin:chunkDGWAZXSI_js.a({family:i,scale:h,weight:100}),xlight:chunkDGWAZXSI_js.a({family:i,scale:h,weight:200}),light:chunkDGWAZXSI_js.a({family:i,scale:h,weight:300}),normal:chunkDGWAZXSI_js.a({family:i,scale:h,weight:400}),medium:chunkDGWAZXSI_js.a({family:i,scale:h,weight:500}),semibold:chunkDGWAZXSI_js.a({family:i,scale:h,weight:600}),bold:chunkDGWAZXSI_js.a({family:i,scale:h,weight:700}),xbold:chunkDGWAZXSI_js.a({family:i,scale:h,weight:800}),black:chunkDGWAZXSI_js.a({family:i,scale:h,weight:900})},md:{thin:chunkDGWAZXSI_js.a({family:i,scale:o,weight:100}),xlight:chunkDGWAZXSI_js.a({family:i,scale:o,weight:200}),light:chunkDGWAZXSI_js.a({family:i,scale:o,weight:300}),normal:chunkDGWAZXSI_js.a({family:i,scale:o,weight:400}),medium:chunkDGWAZXSI_js.a({family:i,scale:o,weight:500}),semibold:chunkDGWAZXSI_js.a({family:i,scale:o,weight:600}),bold:chunkDGWAZXSI_js.a({family:i,scale:o,weight:700}),xbold:chunkDGWAZXSI_js.a({family:i,scale:o,weight:800}),black:chunkDGWAZXSI_js.a({family:i,scale:o,weight:900})},lg:{thin:chunkDGWAZXSI_js.a({family:i,scale:g,weight:100}),xlight:chunkDGWAZXSI_js.a({family:i,scale:g,weight:200}),light:chunkDGWAZXSI_js.a({family:i,scale:g,weight:300}),normal:chunkDGWAZXSI_js.a({family:i,scale:g,weight:400}),medium:chunkDGWAZXSI_js.a({family:i,scale:g,weight:500}),semibold:chunkDGWAZXSI_js.a({family:i,scale:g,weight:600}),bold:chunkDGWAZXSI_js.a({family:i,scale:g,weight:700}),xbold:chunkDGWAZXSI_js.a({family:i,scale:g,weight:800}),black:chunkDGWAZXSI_js.a({family:i,scale:g,weight:900})},xl:{thin:chunkDGWAZXSI_js.a({family:i,scale:s,weight:100}),xlight:chunkDGWAZXSI_js.a({family:i,scale:s,weight:200}),light:chunkDGWAZXSI_js.a({family:i,scale:s,weight:300}),normal:chunkDGWAZXSI_js.a({family:i,scale:s,weight:400}),medium:chunkDGWAZXSI_js.a({family:i,scale:s,weight:500}),semibold:chunkDGWAZXSI_js.a({family:i,scale:s,weight:600}),bold:chunkDGWAZXSI_js.a({family:i,scale:s,weight:700}),xbold:chunkDGWAZXSI_js.a({family:i,scale:s,weight:800}),black:chunkDGWAZXSI_js.a({family:i,scale:s,weight:900})},"2xl":{thin:chunkDGWAZXSI_js.a({family:i,scale:r,weight:100}),xlight:chunkDGWAZXSI_js.a({family:i,scale:r,weight:200}),light:chunkDGWAZXSI_js.a({family:i,scale:r,weight:300}),normal:chunkDGWAZXSI_js.a({family:i,scale:r,weight:400}),medium:chunkDGWAZXSI_js.a({family:i,scale:r,weight:500}),semibold:chunkDGWAZXSI_js.a({family:i,scale:r,weight:600}),bold:chunkDGWAZXSI_js.a({family:i,scale:r,weight:700}),xbold:chunkDGWAZXSI_js.a({family:i,scale:r,weight:800}),black:chunkDGWAZXSI_js.a({family:i,scale:r,weight:900})},"3xl":{thin:chunkDGWAZXSI_js.a({family:i,scale:y,weight:100}),xlight:chunkDGWAZXSI_js.a({family:i,scale:y,weight:200}),light:chunkDGWAZXSI_js.a({family:i,scale:y,weight:300}),normal:chunkDGWAZXSI_js.a({family:i,scale:y,weight:400}),medium:chunkDGWAZXSI_js.a({family:i,scale:y,weight:500}),semibold:chunkDGWAZXSI_js.a({family:i,scale:y,weight:600}),bold:chunkDGWAZXSI_js.a({family:i,scale:y,weight:700}),xbold:chunkDGWAZXSI_js.a({family:i,scale:y,weight:800}),black:chunkDGWAZXSI_js.a({family:i,scale:y,weight:900})},"4xl":{thin:chunkDGWAZXSI_js.a({family:i,scale:f,weight:100}),xlight:chunkDGWAZXSI_js.a({family:i,scale:f,weight:200}),light:chunkDGWAZXSI_js.a({family:i,scale:f,weight:300}),normal:chunkDGWAZXSI_js.a({family:i,scale:f,weight:400}),medium:chunkDGWAZXSI_js.a({family:i,scale:f,weight:500}),semibold:chunkDGWAZXSI_js.a({family:i,scale:f,weight:600}),bold:chunkDGWAZXSI_js.a({family:i,scale:f,weight:700}),xbold:chunkDGWAZXSI_js.a({family:i,scale:f,weight:800}),black:chunkDGWAZXSI_js.a({family:i,scale:f,weight:900})},"5xl":{thin:chunkDGWAZXSI_js.a({family:i,scale:w,weight:100}),xlight:chunkDGWAZXSI_js.a({family:i,scale:w,weight:200}),light:chunkDGWAZXSI_js.a({family:i,scale:w,weight:300}),normal:chunkDGWAZXSI_js.a({family:i,scale:w,weight:400}),medium:chunkDGWAZXSI_js.a({family:i,scale:w,weight:500}),semibold:chunkDGWAZXSI_js.a({family:i,scale:w,weight:600}),bold:chunkDGWAZXSI_js.a({family:i,scale:w,weight:700}),xbold:chunkDGWAZXSI_js.a({family:i,scale:w,weight:800}),black:chunkDGWAZXSI_js.a({family:i,scale:w,weight:900})},"6xl":{thin:chunkDGWAZXSI_js.a({family:i,scale:p,weight:100}),xlight:chunkDGWAZXSI_js.a({family:i,scale:p,weight:200}),light:chunkDGWAZXSI_js.a({family:i,scale:p,weight:300}),normal:chunkDGWAZXSI_js.a({family:i,scale:p,weight:400}),medium:chunkDGWAZXSI_js.a({family:i,scale:p,weight:500}),semibold:chunkDGWAZXSI_js.a({family:i,scale:p,weight:600}),bold:chunkDGWAZXSI_js.a({family:i,scale:p,weight:700}),xbold:chunkDGWAZXSI_js.a({family:i,scale:p,weight:800}),black:chunkDGWAZXSI_js.a({family:i,scale:p,weight:900})},"7xl":{thin:chunkDGWAZXSI_js.a({family:i,scale:d,weight:100}),xlight:chunkDGWAZXSI_js.a({family:i,scale:d,weight:200}),light:chunkDGWAZXSI_js.a({family:i,scale:d,weight:300}),normal:chunkDGWAZXSI_js.a({family:i,scale:d,weight:400}),medium:chunkDGWAZXSI_js.a({family:i,scale:d,weight:500}),semibold:chunkDGWAZXSI_js.a({family:i,scale:d,weight:600}),bold:chunkDGWAZXSI_js.a({family:i,scale:d,weight:700}),xbold:chunkDGWAZXSI_js.a({family:i,scale:d,weight:800}),black:chunkDGWAZXSI_js.a({family:i,scale:d,weight:900})},"8xl":{thin:chunkDGWAZXSI_js.a({family:i,scale:x,weight:100}),xlight:chunkDGWAZXSI_js.a({family:i,scale:x,weight:200}),light:chunkDGWAZXSI_js.a({family:i,scale:x,weight:300}),normal:chunkDGWAZXSI_js.a({family:i,scale:x,weight:400}),medium:chunkDGWAZXSI_js.a({family:i,scale:x,weight:500}),semibold:chunkDGWAZXSI_js.a({family:i,scale:x,weight:600}),bold:chunkDGWAZXSI_js.a({family:i,scale:x,weight:700}),xbold:chunkDGWAZXSI_js.a({family:i,scale:x,weight:800}),black:chunkDGWAZXSI_js.a({family:i,scale:x,weight:900})},"9xl":{thin:chunkDGWAZXSI_js.a({family:i,scale:u,weight:100}),xlight:chunkDGWAZXSI_js.a({family:i,scale:u,weight:200}),light:chunkDGWAZXSI_js.a({family:i,scale:u,weight:300}),normal:chunkDGWAZXSI_js.a({family:i,scale:u,weight:400}),medium:chunkDGWAZXSI_js.a({family:i,scale:u,weight:500}),semibold:chunkDGWAZXSI_js.a({family:i,scale:u,weight:600}),bold:chunkDGWAZXSI_js.a({family:i,scale:u,weight:700}),xbold:chunkDGWAZXSI_js.a({family:i,scale:u,weight:800}),black:chunkDGWAZXSI_js.a({family:i,scale:u,weight:900})}},supporting:{xs:{thin:chunkDGWAZXSI_js.a({family:t,scale:c,weight:100}),xlight:chunkDGWAZXSI_js.a({family:t,scale:c,weight:200}),light:chunkDGWAZXSI_js.a({family:t,scale:c,weight:300}),normal:chunkDGWAZXSI_js.a({family:t,scale:c,weight:400}),medium:chunkDGWAZXSI_js.a({family:t,scale:c,weight:500}),semibold:chunkDGWAZXSI_js.a({family:t,scale:c,weight:600}),bold:chunkDGWAZXSI_js.a({family:t,scale:c,weight:700}),xbold:chunkDGWAZXSI_js.a({family:t,scale:c,weight:800}),black:chunkDGWAZXSI_js.a({family:t,scale:c,weight:900})},sm:{thin:chunkDGWAZXSI_js.a({family:t,scale:h,weight:100}),xlight:chunkDGWAZXSI_js.a({family:t,scale:h,weight:200}),light:chunkDGWAZXSI_js.a({family:t,scale:h,weight:300}),normal:chunkDGWAZXSI_js.a({family:t,scale:h,weight:400}),medium:chunkDGWAZXSI_js.a({family:t,scale:h,weight:500}),semibold:chunkDGWAZXSI_js.a({family:t,scale:h,weight:600}),bold:chunkDGWAZXSI_js.a({family:t,scale:h,weight:700}),xbold:chunkDGWAZXSI_js.a({family:t,scale:h,weight:800}),black:chunkDGWAZXSI_js.a({family:t,scale:h,weight:900})},md:{thin:chunkDGWAZXSI_js.a({family:t,scale:o,weight:100}),xlight:chunkDGWAZXSI_js.a({family:t,scale:o,weight:200}),light:chunkDGWAZXSI_js.a({family:t,scale:o,weight:300}),normal:chunkDGWAZXSI_js.a({family:t,scale:o,weight:400}),medium:chunkDGWAZXSI_js.a({family:t,scale:o,weight:500}),semibold:chunkDGWAZXSI_js.a({family:t,scale:o,weight:600}),bold:chunkDGWAZXSI_js.a({family:t,scale:o,weight:700}),xbold:chunkDGWAZXSI_js.a({family:t,scale:o,weight:800}),black:chunkDGWAZXSI_js.a({family:t,scale:o,weight:900})},lg:{thin:chunkDGWAZXSI_js.a({family:t,scale:g,weight:100}),xlight:chunkDGWAZXSI_js.a({family:t,scale:g,weight:200}),light:chunkDGWAZXSI_js.a({family:t,scale:g,weight:300}),normal:chunkDGWAZXSI_js.a({family:t,scale:g,weight:400}),medium:chunkDGWAZXSI_js.a({family:t,scale:g,weight:500}),semibold:chunkDGWAZXSI_js.a({family:t,scale:g,weight:600}),bold:chunkDGWAZXSI_js.a({family:t,scale:g,weight:700}),xbold:chunkDGWAZXSI_js.a({family:t,scale:g,weight:800}),black:chunkDGWAZXSI_js.a({family:t,scale:g,weight:900})},xl:{thin:chunkDGWAZXSI_js.a({family:t,scale:s,weight:100}),xlight:chunkDGWAZXSI_js.a({family:t,scale:s,weight:200}),light:chunkDGWAZXSI_js.a({family:t,scale:s,weight:300}),normal:chunkDGWAZXSI_js.a({family:t,scale:s,weight:400}),medium:chunkDGWAZXSI_js.a({family:t,scale:s,weight:500}),semibold:chunkDGWAZXSI_js.a({family:t,scale:s,weight:600}),bold:chunkDGWAZXSI_js.a({family:t,scale:s,weight:700}),xbold:chunkDGWAZXSI_js.a({family:t,scale:s,weight:800}),black:chunkDGWAZXSI_js.a({family:t,scale:s,weight:900})},"2xl":{thin:chunkDGWAZXSI_js.a({family:t,scale:r,weight:100}),xlight:chunkDGWAZXSI_js.a({family:t,scale:r,weight:200}),light:chunkDGWAZXSI_js.a({family:t,scale:r,weight:300}),normal:chunkDGWAZXSI_js.a({family:t,scale:r,weight:400}),medium:chunkDGWAZXSI_js.a({family:t,scale:r,weight:500}),semibold:chunkDGWAZXSI_js.a({family:t,scale:r,weight:600}),bold:chunkDGWAZXSI_js.a({family:t,scale:r,weight:700}),xbold:chunkDGWAZXSI_js.a({family:t,scale:r,weight:800}),black:chunkDGWAZXSI_js.a({family:t,scale:r,weight:900})},"3xl":{thin:chunkDGWAZXSI_js.a({family:t,scale:y,weight:100}),xlight:chunkDGWAZXSI_js.a({family:t,scale:y,weight:200}),light:chunkDGWAZXSI_js.a({family:t,scale:y,weight:300}),normal:chunkDGWAZXSI_js.a({family:t,scale:y,weight:400}),medium:chunkDGWAZXSI_js.a({family:t,scale:y,weight:500}),semibold:chunkDGWAZXSI_js.a({family:t,scale:y,weight:600}),bold:chunkDGWAZXSI_js.a({family:t,scale:y,weight:700}),xbold:chunkDGWAZXSI_js.a({family:t,scale:y,weight:800}),black:chunkDGWAZXSI_js.a({family:t,scale:y,weight:900})},"4xl":{thin:chunkDGWAZXSI_js.a({family:t,scale:f,weight:100}),xlight:chunkDGWAZXSI_js.a({family:t,scale:f,weight:200}),light:chunkDGWAZXSI_js.a({family:t,scale:f,weight:300}),normal:chunkDGWAZXSI_js.a({family:t,scale:f,weight:400}),medium:chunkDGWAZXSI_js.a({family:t,scale:f,weight:500}),semibold:chunkDGWAZXSI_js.a({family:t,scale:f,weight:600}),bold:chunkDGWAZXSI_js.a({family:t,scale:f,weight:700}),xbold:chunkDGWAZXSI_js.a({family:t,scale:f,weight:800}),black:chunkDGWAZXSI_js.a({family:t,scale:f,weight:900})},"5xl":{thin:chunkDGWAZXSI_js.a({family:t,scale:w,weight:100}),xlight:chunkDGWAZXSI_js.a({family:t,scale:w,weight:200}),light:chunkDGWAZXSI_js.a({family:t,scale:w,weight:300}),normal:chunkDGWAZXSI_js.a({family:t,scale:w,weight:400}),medium:chunkDGWAZXSI_js.a({family:t,scale:w,weight:500}),semibold:chunkDGWAZXSI_js.a({family:t,scale:w,weight:600}),bold:chunkDGWAZXSI_js.a({family:t,scale:w,weight:700}),xbold:chunkDGWAZXSI_js.a({family:t,scale:w,weight:800}),black:chunkDGWAZXSI_js.a({family:t,scale:w,weight:900})},"6xl":{thin:chunkDGWAZXSI_js.a({family:t,scale:p,weight:100}),xlight:chunkDGWAZXSI_js.a({family:t,scale:p,weight:200}),light:chunkDGWAZXSI_js.a({family:t,scale:p,weight:300}),normal:chunkDGWAZXSI_js.a({family:t,scale:p,weight:400}),medium:chunkDGWAZXSI_js.a({family:t,scale:p,weight:500}),semibold:chunkDGWAZXSI_js.a({family:t,scale:p,weight:600}),bold:chunkDGWAZXSI_js.a({family:t,scale:p,weight:700}),xbold:chunkDGWAZXSI_js.a({family:t,scale:p,weight:800}),black:chunkDGWAZXSI_js.a({family:t,scale:p,weight:900})},"7xl":{thin:chunkDGWAZXSI_js.a({family:t,scale:d,weight:100}),xlight:chunkDGWAZXSI_js.a({family:t,scale:d,weight:200}),light:chunkDGWAZXSI_js.a({family:t,scale:d,weight:300}),normal:chunkDGWAZXSI_js.a({family:t,scale:d,weight:400}),medium:chunkDGWAZXSI_js.a({family:t,scale:d,weight:500}),semibold:chunkDGWAZXSI_js.a({family:t,scale:d,weight:600}),bold:chunkDGWAZXSI_js.a({family:t,scale:d,weight:700}),xbold:chunkDGWAZXSI_js.a({family:t,scale:d,weight:800}),black:chunkDGWAZXSI_js.a({family:t,scale:d,weight:900})},"8xl":{thin:chunkDGWAZXSI_js.a({family:t,scale:x,weight:100}),xlight:chunkDGWAZXSI_js.a({family:t,scale:x,weight:200}),light:chunkDGWAZXSI_js.a({family:t,scale:x,weight:300}),normal:chunkDGWAZXSI_js.a({family:t,scale:x,weight:400}),medium:chunkDGWAZXSI_js.a({family:t,scale:x,weight:500}),semibold:chunkDGWAZXSI_js.a({family:t,scale:x,weight:600}),bold:chunkDGWAZXSI_js.a({family:t,scale:x,weight:700}),xbold:chunkDGWAZXSI_js.a({family:t,scale:x,weight:800}),black:chunkDGWAZXSI_js.a({family:t,scale:x,weight:900})},"9xl":{thin:chunkDGWAZXSI_js.a({family:t,scale:u,weight:100}),xlight:chunkDGWAZXSI_js.a({family:t,scale:u,weight:200}),light:chunkDGWAZXSI_js.a({family:t,scale:u,weight:300}),normal:chunkDGWAZXSI_js.a({family:t,scale:u,weight:400}),medium:chunkDGWAZXSI_js.a({family:t,scale:u,weight:500}),semibold:chunkDGWAZXSI_js.a({family:t,scale:u,weight:600}),bold:chunkDGWAZXSI_js.a({family:t,scale:u,weight:700}),xbold:chunkDGWAZXSI_js.a({family:t,scale:u,weight:800}),black:chunkDGWAZXSI_js.a({family:t,scale:u,weight:900})}},accent:{xs:{thin:chunkDGWAZXSI_js.a({family:l,scale:c,weight:100}),xlight:chunkDGWAZXSI_js.a({family:l,scale:c,weight:200}),light:chunkDGWAZXSI_js.a({family:l,scale:c,weight:300}),normal:chunkDGWAZXSI_js.a({family:l,scale:c,weight:400}),medium:chunkDGWAZXSI_js.a({family:l,scale:c,weight:500}),semibold:chunkDGWAZXSI_js.a({family:l,scale:c,weight:600}),bold:chunkDGWAZXSI_js.a({family:l,scale:c,weight:700}),xbold:chunkDGWAZXSI_js.a({family:l,scale:c,weight:800}),black:chunkDGWAZXSI_js.a({family:l,scale:c,weight:900})},sm:{thin:chunkDGWAZXSI_js.a({family:l,scale:h,weight:100}),xlight:chunkDGWAZXSI_js.a({family:l,scale:h,weight:200}),light:chunkDGWAZXSI_js.a({family:l,scale:h,weight:300}),normal:chunkDGWAZXSI_js.a({family:l,scale:h,weight:400}),medium:chunkDGWAZXSI_js.a({family:l,scale:h,weight:500}),semibold:chunkDGWAZXSI_js.a({family:l,scale:h,weight:600}),bold:chunkDGWAZXSI_js.a({family:l,scale:h,weight:700}),xbold:chunkDGWAZXSI_js.a({family:l,scale:h,weight:800}),black:chunkDGWAZXSI_js.a({family:l,scale:h,weight:900})},md:{thin:chunkDGWAZXSI_js.a({family:l,scale:o,weight:100}),xlight:chunkDGWAZXSI_js.a({family:l,scale:o,weight:200}),light:chunkDGWAZXSI_js.a({family:l,scale:o,weight:300}),normal:chunkDGWAZXSI_js.a({family:l,scale:o,weight:400}),medium:chunkDGWAZXSI_js.a({family:l,scale:o,weight:500}),semibold:chunkDGWAZXSI_js.a({family:l,scale:o,weight:600}),bold:chunkDGWAZXSI_js.a({family:l,scale:o,weight:700}),xbold:chunkDGWAZXSI_js.a({family:l,scale:o,weight:800}),black:chunkDGWAZXSI_js.a({family:l,scale:o,weight:900})},lg:{thin:chunkDGWAZXSI_js.a({family:l,scale:g,weight:100}),xlight:chunkDGWAZXSI_js.a({family:l,scale:g,weight:200}),light:chunkDGWAZXSI_js.a({family:l,scale:g,weight:300}),normal:chunkDGWAZXSI_js.a({family:l,scale:g,weight:400}),medium:chunkDGWAZXSI_js.a({family:l,scale:g,weight:500}),semibold:chunkDGWAZXSI_js.a({family:l,scale:g,weight:600}),bold:chunkDGWAZXSI_js.a({family:l,scale:g,weight:700}),xbold:chunkDGWAZXSI_js.a({family:l,scale:g,weight:800}),black:chunkDGWAZXSI_js.a({family:l,scale:g,weight:900})},xl:{thin:chunkDGWAZXSI_js.a({family:l,scale:s,weight:100}),xlight:chunkDGWAZXSI_js.a({family:l,scale:s,weight:200}),light:chunkDGWAZXSI_js.a({family:l,scale:s,weight:300}),normal:chunkDGWAZXSI_js.a({family:l,scale:s,weight:400}),medium:chunkDGWAZXSI_js.a({family:l,scale:s,weight:500}),semibold:chunkDGWAZXSI_js.a({family:l,scale:s,weight:600}),bold:chunkDGWAZXSI_js.a({family:l,scale:s,weight:700}),xbold:chunkDGWAZXSI_js.a({family:l,scale:s,weight:800}),black:chunkDGWAZXSI_js.a({family:l,scale:s,weight:900})},"2xl":{thin:chunkDGWAZXSI_js.a({family:l,scale:r,weight:100}),xlight:chunkDGWAZXSI_js.a({family:l,scale:r,weight:200}),light:chunkDGWAZXSI_js.a({family:l,scale:r,weight:300}),normal:chunkDGWAZXSI_js.a({family:l,scale:r,weight:400}),medium:chunkDGWAZXSI_js.a({family:l,scale:r,weight:500}),semibold:chunkDGWAZXSI_js.a({family:l,scale:r,weight:600}),bold:chunkDGWAZXSI_js.a({family:l,scale:r,weight:700}),xbold:chunkDGWAZXSI_js.a({family:l,scale:r,weight:800}),black:chunkDGWAZXSI_js.a({family:l,scale:r,weight:900})},"3xl":{thin:chunkDGWAZXSI_js.a({family:l,scale:y,weight:100}),xlight:chunkDGWAZXSI_js.a({family:l,scale:y,weight:200}),light:chunkDGWAZXSI_js.a({family:l,scale:y,weight:300}),normal:chunkDGWAZXSI_js.a({family:l,scale:y,weight:400}),medium:chunkDGWAZXSI_js.a({family:l,scale:y,weight:500}),semibold:chunkDGWAZXSI_js.a({family:l,scale:y,weight:600}),bold:chunkDGWAZXSI_js.a({family:l,scale:y,weight:700}),xbold:chunkDGWAZXSI_js.a({family:l,scale:y,weight:800}),black:chunkDGWAZXSI_js.a({family:l,scale:y,weight:900})},"4xl":{thin:chunkDGWAZXSI_js.a({family:l,scale:f,weight:100}),xlight:chunkDGWAZXSI_js.a({family:l,scale:f,weight:200}),light:chunkDGWAZXSI_js.a({family:l,scale:f,weight:300}),normal:chunkDGWAZXSI_js.a({family:l,scale:f,weight:400}),medium:chunkDGWAZXSI_js.a({family:l,scale:f,weight:500}),semibold:chunkDGWAZXSI_js.a({family:l,scale:f,weight:600}),bold:chunkDGWAZXSI_js.a({family:l,scale:f,weight:700}),xbold:chunkDGWAZXSI_js.a({family:l,scale:f,weight:800}),black:chunkDGWAZXSI_js.a({family:l,scale:f,weight:900})},"5xl":{thin:chunkDGWAZXSI_js.a({family:l,scale:w,weight:100}),xlight:chunkDGWAZXSI_js.a({family:l,scale:w,weight:200}),light:chunkDGWAZXSI_js.a({family:l,scale:w,weight:300}),normal:chunkDGWAZXSI_js.a({family:l,scale:w,weight:400}),medium:chunkDGWAZXSI_js.a({family:l,scale:w,weight:500}),semibold:chunkDGWAZXSI_js.a({family:l,scale:w,weight:600}),bold:chunkDGWAZXSI_js.a({family:l,scale:w,weight:700}),xbold:chunkDGWAZXSI_js.a({family:l,scale:w,weight:800}),black:chunkDGWAZXSI_js.a({family:l,scale:w,weight:900})},"6xl":{thin:chunkDGWAZXSI_js.a({family:l,scale:p,weight:100}),xlight:chunkDGWAZXSI_js.a({family:l,scale:p,weight:200}),light:chunkDGWAZXSI_js.a({family:i,scale:l,weight:300}),normal:chunkDGWAZXSI_js.a({family:l,scale:p,weight:400}),medium:chunkDGWAZXSI_js.a({family:l,scale:p,weight:500}),semibold:chunkDGWAZXSI_js.a({family:l,scale:p,weight:600}),bold:chunkDGWAZXSI_js.a({family:l,scale:p,weight:700}),xbold:chunkDGWAZXSI_js.a({family:l,scale:p,weight:800}),black:chunkDGWAZXSI_js.a({family:l,scale:p,weight:900})},"7xl":{thin:chunkDGWAZXSI_js.a({family:l,scale:d,weight:100}),xlight:chunkDGWAZXSI_js.a({family:l,scale:d,weight:200}),light:chunkDGWAZXSI_js.a({family:l,scale:d,weight:300}),normal:chunkDGWAZXSI_js.a({family:l,scale:d,weight:400}),medium:chunkDGWAZXSI_js.a({family:l,scale:d,weight:500}),semibold:chunkDGWAZXSI_js.a({family:l,scale:d,weight:600}),bold:chunkDGWAZXSI_js.a({family:l,scale:d,weight:700}),xbold:chunkDGWAZXSI_js.a({family:l,scale:d,weight:800}),black:chunkDGWAZXSI_js.a({family:l,scale:d,weight:900})},"8xl":{thin:chunkDGWAZXSI_js.a({family:l,scale:x,weight:100}),xlight:chunkDGWAZXSI_js.a({family:l,scale:x,weight:200}),light:chunkDGWAZXSI_js.a({family:l,scale:x,weight:300}),normal:chunkDGWAZXSI_js.a({family:l,scale:x,weight:400}),medium:chunkDGWAZXSI_js.a({family:l,scale:x,weight:500}),semibold:chunkDGWAZXSI_js.a({family:l,scale:x,weight:600}),bold:chunkDGWAZXSI_js.a({family:l,scale:x,weight:700}),xbold:chunkDGWAZXSI_js.a({family:l,scale:x,weight:800}),black:chunkDGWAZXSI_js.a({family:l,scale:x,weight:900})},"9xl":{thin:chunkDGWAZXSI_js.a({family:l,scale:u,weight:100}),xlight:chunkDGWAZXSI_js.a({family:l,scale:u,weight:200}),light:chunkDGWAZXSI_js.a({family:l,scale:u,weight:300}),normal:chunkDGWAZXSI_js.a({family:l,scale:u,weight:400}),medium:chunkDGWAZXSI_js.a({family:l,scale:u,weight:500}),semibold:chunkDGWAZXSI_js.a({family:l,scale:u,weight:600}),bold:chunkDGWAZXSI_js.a({family:l,scale:u,weight:700}),xbold:chunkDGWAZXSI_js.a({family:l,scale:u,weight:800}),black:chunkDGWAZXSI_js.a({family:l,scale:u,weight:900})}}}};var K=({base:m,config:a})=>({external_resources:a?.external_resources?j({base:m.external_resources,config:a?.external_resources?a.external_resources:[]}):m.external_resources,fonts:a?.fonts?U({base:m.fonts,config:a?.fonts?a.fonts:{}}):m.fonts});var b=({base:m,config:a})=>{let i=n(a,m.tint_500,["tint_500"]),l=m.tint_500!=i,t=n(a,l?i:m.tint_400,["tint_400"]),o=n(a,l?t:m.tint_300,["tint_300"]),h=n(a,l?o:m.tint_200,["tint_200"]),c=n(a,l?h:m.tint_100,["tint_100"]),g=n(a,l?c:m.tint_50,["tint_50"]),s=n(a,l?i:m.tint_600,["tint_600"]),r=n(a,l?s:m.tint_700,["tint_700"]),y=n(a,l?r:m.tint_800,["tint_800"]),f=n(a,l?y:m.tint_900,["tint_900"]),w=n(a,l?f:m.tint_950,["tint_950"]);return {tint_50:g,tint_100:c,tint_200:h,tint_300:o,tint_400:t,tint_500:i,tint_600:s,tint_700:r,tint_800:y,tint_900:f,tint_950:w}};var W=({base:m,config:a})=>a||m;var q=({base:m,config:a})=>({danger:b({base:m.danger,config:a.danger?a.danger:{}}),warning:b({base:m.warning,config:a.warning?a.warning:{}}),success:b({base:m.success,config:a.success?a.success:{}}),info:b({base:m.info,config:a.info?a.info:{}}),neutrals:b({base:m.neutrals,config:a.neutrals?a.neutrals:{}}),surfaces:b({base:m.surfaces,config:a.surfaces?a.surfaces:{}}),skeletons:b({base:m.skeletons,config:a.skeletons?a.skeletons:{}}),primary:b({base:m.primary,config:a.primary?a.primary:{}}),accent:b({base:m.accent,config:a.accent?a.accent:{}}),accent2:b({base:m.accent2,config:a.accent2?a.accent2:a.accent?a.accent:{}}),accent3:b({base:m.accent3,config:a.accent3?a.accent3:a.accent?a.accent:{}}),accent4:b({base:m.accent4,config:a.accent4?a.accent4:a.accent?a.accent:{}}),accent5:b({base:m.accent5,config:a.accent5?a.accent5:a.accent?a.accent:{}}),supporting:b({base:m.supporting,config:a.supporting?a.supporting:{}}),additional:W({base:m.additional,config:a?.additional?a.additional:[]})});var G=({base:m,config:a})=>({none:m.none,xs:a?a.xs:m.xs,sm:a?a.sm:m.sm,md:a?a.md:m.md,lg:a?a.lg:m.lg,xl:a?a.xl:m.xl,"2xl":a?a["2xl"]:m["2xl"],"3xl":a?a["3xl"]:m["3xl"],full:"9999px"});var Y=({base:m,config:a})=>({none:"0 0 #0000",xs:a?a.xs:m.xs,sm:a?a.sm:m.sm,md:a?a.md:m.md,lg:a?a.lg:m.lg,xl:a?a.xl:m.xl,"2xl":a?a["2xl"]:m["2xl"]});var ae=({config:m})=>({alternate:H({base:chunkDGWAZXSI_js.r.alternate,config:m?.alternate?m.alternate:[]}),typography:m?.typography?K({base:chunkDGWAZXSI_js.r.typography,config:m.typography?m.typography:{}}):chunkDGWAZXSI_js.r.typography,colors:m?.colors?q({base:chunkDGWAZXSI_js.r.colors,config:m.colors?m.colors:{}}):chunkDGWAZXSI_js.r.colors,utility:chunkDGWAZXSI_js.r.utility,radius:G({base:chunkDGWAZXSI_js.r.radius,config:m.radius}),shadow:Y({base:chunkDGWAZXSI_js.r.shadow,config:m.shadow})});exports.ThemeMode=(l=>(l.STANDARD="STANDARD",l.INVERTED="INVERTED",l.CONTRAST="CONTRAST",l))(exports.ThemeMode||{});(i=>{function m(l,t){return Object.values(i).includes(l)?l:t}i.from=m;function a(l){return Object.values(i).includes(l)?l:null}i.tryFrom=a;})(exports.ThemeMode||={});var me=I.createContext("STANDARD");var S=({name:m,alternates:a})=>{let i=a.find(l=>l.name===m);return i&&i.theme};var oe=({component:m,default:a})=>{let i=chunkDGWAZXSI_js.t(),l=S({name:m,alternates:i.alternate}),t={Color:"inherit",BackgroundColor:"transparent",BorderColor:"transparent"},o=(s,r)=>({Color:r?.Color||s?.Color||t.Color,BackgroundColor:r?.BackgroundColor||s?.BackgroundColor||t.BackgroundColor,BorderColor:r?.BorderColor||s?.BorderColor||t.BorderColor}),h=o(a?.Init,l?.Init),c=o(a?.Hover===void 0&&a?.Init?a?.Init:a?.Hover,l?.Hover),g=o(a?.Loading===void 0&&a?.Init?a?.Init:a?.Loading,l?.Loading);return {Init:h,Hover:c,Loading:g}};var se=()=>chunkDGWAZXSI_js.t().radius;var re=()=>chunkDGWAZXSI_js.t().utility;var he=()=>chunkDGWAZXSI_js.t().shadow;var ce=m=>{let a=({children:i})=>I__default.default.createElement(I__default.default.Fragment,null," ",i," ");return m.reduce((i,[l,t={}])=>({children:o})=>I__default.default.createElement(i,null,I__default.default.createElement(l,{...t},o)),a)};var ge=m=>{let{children:a,sheets:i}=m;return I.useEffect(()=>{i.map(function(l){let t=document.createElement("link");t.rel="stylesheet",t.href=l,document.head.appendChild(t);});},[i]),a??null};var ye=({name:m,colors:a,fallback:i})=>{let l=a.find(t=>t.name===m);return l?l.color:i};

Object.defineProperty(exports, "ThemeCtx", {
    enumerable: true,
    get: function () { return chunkDGWAZXSI_js.s; }
});
Object.defineProperty(exports, "useTheme", {
    enumerable: true,
    get: function () { return chunkDGWAZXSI_js.t; }
});
Object.defineProperty(exports, "useThemeColor", {
    enumerable: true,
    get: function () { return chunkDGWAZXSI_js.u; }
});
Object.defineProperty(exports, "useThemeFonts", {
    enumerable: true,
    get: function () { return chunkDGWAZXSI_js.v; }
});
exports.BuildProvidersTree = ce;
exports.ExternalStylesheetLoader = ge;
exports.LookupAdditionalColor = ye;
exports.LookupAlternateTheme = S;
exports.StyleProviderAnimation = ee;
exports.StyleProviderPreFlight = ie;
exports.ThemeBuilder = ae;
exports.ThemeModeCtx = me;
exports.orDefault = n;
exports.useAlternateTheme = oe;
exports.useThemeRadius = se;
exports.useThemeShadow = he;
exports.useThemeUtility = re;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map