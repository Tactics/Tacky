'use strict';

var chunkRTDJ4NEV_js = require('./chunk-RTDJ4NEV.js');
var styledComponents = require('styled-components');
var I = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var I__default = /*#__PURE__*/_interopDefault(I);

var Z=styledComponents.createGlobalStyle`
      ${r=>r.animations?.map(function(t){return t})}

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
    
    /* Reset all default a-styling when using external routing to prevent leaking of external styles */
    a {
        all: unset;
    }
`;var j=({base:r,config:t})=>t||r;var H=({base:r,config:t})=>t||r;function m(r,t,a){let l=r;for(let i of a)if(l=l?.[i]??t,l==null)break;return l}var U=({base:r,config:t})=>{let a=m(t,chunkRTDJ4NEV_js.b,["family","primary"]),l=m(t,m(t,chunkRTDJ4NEV_js.c,["family","primary"]),["family","accent"]),i=m(t,m(t,chunkRTDJ4NEV_js.d,["family","primary"]),["family","supporting"]),s=m(t,chunkRTDJ4NEV_js.g,["scale","md"]),o=m(t,chunkRTDJ4NEV_js.f,["scale","sm"]),h=m(t,chunkRTDJ4NEV_js.e,["scale","xs"]),g=m(t,chunkRTDJ4NEV_js.h,["scale","lg"]),c=m(t,chunkRTDJ4NEV_js.i,["scale","xl"]),n=m(t,chunkRTDJ4NEV_js.j,["scale","2xl"]),y=m(t,chunkRTDJ4NEV_js.k,["scale","3xl"]),f=m(t,chunkRTDJ4NEV_js.l,["scale","4xl"]),d=m(t,chunkRTDJ4NEV_js.m,["scale","5xl"]),x=m(t,chunkRTDJ4NEV_js.n,["scale","6xl"]),w=m(t,chunkRTDJ4NEV_js.o,["scale","7xl"]),p=m(t,chunkRTDJ4NEV_js.p,["scale","8xl"]),u=m(t,chunkRTDJ4NEV_js.q,["scale","9xl"]);return {primary:{xs:{thin:chunkRTDJ4NEV_js.a({family:a,scale:h,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:a,scale:h,weight:200}),light:chunkRTDJ4NEV_js.a({family:a,scale:h,weight:300}),normal:chunkRTDJ4NEV_js.a({family:a,scale:h,weight:400}),medium:chunkRTDJ4NEV_js.a({family:a,scale:h,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:a,scale:h,weight:600}),bold:chunkRTDJ4NEV_js.a({family:a,scale:h,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:a,scale:h,weight:800}),black:chunkRTDJ4NEV_js.a({family:a,scale:h,weight:900})},sm:{thin:chunkRTDJ4NEV_js.a({family:a,scale:o,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:a,scale:o,weight:200}),light:chunkRTDJ4NEV_js.a({family:a,scale:o,weight:300}),normal:chunkRTDJ4NEV_js.a({family:a,scale:o,weight:400}),medium:chunkRTDJ4NEV_js.a({family:a,scale:o,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:a,scale:o,weight:600}),bold:chunkRTDJ4NEV_js.a({family:a,scale:o,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:a,scale:o,weight:800}),black:chunkRTDJ4NEV_js.a({family:a,scale:o,weight:900})},md:{thin:chunkRTDJ4NEV_js.a({family:a,scale:s,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:a,scale:s,weight:200}),light:chunkRTDJ4NEV_js.a({family:a,scale:s,weight:300}),normal:chunkRTDJ4NEV_js.a({family:a,scale:s,weight:400}),medium:chunkRTDJ4NEV_js.a({family:a,scale:s,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:a,scale:s,weight:600}),bold:chunkRTDJ4NEV_js.a({family:a,scale:s,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:a,scale:s,weight:800}),black:chunkRTDJ4NEV_js.a({family:a,scale:s,weight:900})},lg:{thin:chunkRTDJ4NEV_js.a({family:a,scale:g,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:a,scale:g,weight:200}),light:chunkRTDJ4NEV_js.a({family:a,scale:g,weight:300}),normal:chunkRTDJ4NEV_js.a({family:a,scale:g,weight:400}),medium:chunkRTDJ4NEV_js.a({family:a,scale:g,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:a,scale:g,weight:600}),bold:chunkRTDJ4NEV_js.a({family:a,scale:g,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:a,scale:g,weight:800}),black:chunkRTDJ4NEV_js.a({family:a,scale:g,weight:900})},xl:{thin:chunkRTDJ4NEV_js.a({family:a,scale:c,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:a,scale:c,weight:200}),light:chunkRTDJ4NEV_js.a({family:a,scale:c,weight:300}),normal:chunkRTDJ4NEV_js.a({family:a,scale:c,weight:400}),medium:chunkRTDJ4NEV_js.a({family:a,scale:c,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:a,scale:c,weight:600}),bold:chunkRTDJ4NEV_js.a({family:a,scale:c,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:a,scale:c,weight:800}),black:chunkRTDJ4NEV_js.a({family:a,scale:c,weight:900})},"2xl":{thin:chunkRTDJ4NEV_js.a({family:a,scale:n,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:a,scale:n,weight:200}),light:chunkRTDJ4NEV_js.a({family:a,scale:n,weight:300}),normal:chunkRTDJ4NEV_js.a({family:a,scale:n,weight:400}),medium:chunkRTDJ4NEV_js.a({family:a,scale:n,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:a,scale:n,weight:600}),bold:chunkRTDJ4NEV_js.a({family:a,scale:n,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:a,scale:n,weight:800}),black:chunkRTDJ4NEV_js.a({family:a,scale:n,weight:900})},"3xl":{thin:chunkRTDJ4NEV_js.a({family:a,scale:y,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:a,scale:y,weight:200}),light:chunkRTDJ4NEV_js.a({family:a,scale:y,weight:300}),normal:chunkRTDJ4NEV_js.a({family:a,scale:y,weight:400}),medium:chunkRTDJ4NEV_js.a({family:a,scale:y,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:a,scale:y,weight:600}),bold:chunkRTDJ4NEV_js.a({family:a,scale:y,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:a,scale:y,weight:800}),black:chunkRTDJ4NEV_js.a({family:a,scale:y,weight:900})},"4xl":{thin:chunkRTDJ4NEV_js.a({family:a,scale:f,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:a,scale:f,weight:200}),light:chunkRTDJ4NEV_js.a({family:a,scale:f,weight:300}),normal:chunkRTDJ4NEV_js.a({family:a,scale:f,weight:400}),medium:chunkRTDJ4NEV_js.a({family:a,scale:f,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:a,scale:f,weight:600}),bold:chunkRTDJ4NEV_js.a({family:a,scale:f,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:a,scale:f,weight:800}),black:chunkRTDJ4NEV_js.a({family:a,scale:f,weight:900})},"5xl":{thin:chunkRTDJ4NEV_js.a({family:a,scale:d,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:a,scale:d,weight:200}),light:chunkRTDJ4NEV_js.a({family:a,scale:d,weight:300}),normal:chunkRTDJ4NEV_js.a({family:a,scale:d,weight:400}),medium:chunkRTDJ4NEV_js.a({family:a,scale:d,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:a,scale:d,weight:600}),bold:chunkRTDJ4NEV_js.a({family:a,scale:d,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:a,scale:d,weight:800}),black:chunkRTDJ4NEV_js.a({family:a,scale:d,weight:900})},"6xl":{thin:chunkRTDJ4NEV_js.a({family:a,scale:x,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:a,scale:x,weight:200}),light:chunkRTDJ4NEV_js.a({family:a,scale:x,weight:300}),normal:chunkRTDJ4NEV_js.a({family:a,scale:x,weight:400}),medium:chunkRTDJ4NEV_js.a({family:a,scale:x,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:a,scale:x,weight:600}),bold:chunkRTDJ4NEV_js.a({family:a,scale:x,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:a,scale:x,weight:800}),black:chunkRTDJ4NEV_js.a({family:a,scale:x,weight:900})},"7xl":{thin:chunkRTDJ4NEV_js.a({family:a,scale:w,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:a,scale:w,weight:200}),light:chunkRTDJ4NEV_js.a({family:a,scale:w,weight:300}),normal:chunkRTDJ4NEV_js.a({family:a,scale:w,weight:400}),medium:chunkRTDJ4NEV_js.a({family:a,scale:w,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:a,scale:w,weight:600}),bold:chunkRTDJ4NEV_js.a({family:a,scale:w,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:a,scale:w,weight:800}),black:chunkRTDJ4NEV_js.a({family:a,scale:w,weight:900})},"8xl":{thin:chunkRTDJ4NEV_js.a({family:a,scale:p,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:a,scale:p,weight:200}),light:chunkRTDJ4NEV_js.a({family:a,scale:p,weight:300}),normal:chunkRTDJ4NEV_js.a({family:a,scale:p,weight:400}),medium:chunkRTDJ4NEV_js.a({family:a,scale:p,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:a,scale:p,weight:600}),bold:chunkRTDJ4NEV_js.a({family:a,scale:p,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:a,scale:p,weight:800}),black:chunkRTDJ4NEV_js.a({family:a,scale:p,weight:900})},"9xl":{thin:chunkRTDJ4NEV_js.a({family:a,scale:u,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:a,scale:u,weight:200}),light:chunkRTDJ4NEV_js.a({family:a,scale:u,weight:300}),normal:chunkRTDJ4NEV_js.a({family:a,scale:u,weight:400}),medium:chunkRTDJ4NEV_js.a({family:a,scale:u,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:a,scale:u,weight:600}),bold:chunkRTDJ4NEV_js.a({family:a,scale:u,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:a,scale:u,weight:800}),black:chunkRTDJ4NEV_js.a({family:a,scale:u,weight:900})}},supporting:{xs:{thin:chunkRTDJ4NEV_js.a({family:i,scale:h,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:i,scale:h,weight:200}),light:chunkRTDJ4NEV_js.a({family:i,scale:h,weight:300}),normal:chunkRTDJ4NEV_js.a({family:i,scale:h,weight:400}),medium:chunkRTDJ4NEV_js.a({family:i,scale:h,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:i,scale:h,weight:600}),bold:chunkRTDJ4NEV_js.a({family:i,scale:h,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:i,scale:h,weight:800}),black:chunkRTDJ4NEV_js.a({family:i,scale:h,weight:900})},sm:{thin:chunkRTDJ4NEV_js.a({family:i,scale:o,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:i,scale:o,weight:200}),light:chunkRTDJ4NEV_js.a({family:i,scale:o,weight:300}),normal:chunkRTDJ4NEV_js.a({family:i,scale:o,weight:400}),medium:chunkRTDJ4NEV_js.a({family:i,scale:o,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:i,scale:o,weight:600}),bold:chunkRTDJ4NEV_js.a({family:i,scale:o,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:i,scale:o,weight:800}),black:chunkRTDJ4NEV_js.a({family:i,scale:o,weight:900})},md:{thin:chunkRTDJ4NEV_js.a({family:i,scale:s,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:i,scale:s,weight:200}),light:chunkRTDJ4NEV_js.a({family:i,scale:s,weight:300}),normal:chunkRTDJ4NEV_js.a({family:i,scale:s,weight:400}),medium:chunkRTDJ4NEV_js.a({family:i,scale:s,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:i,scale:s,weight:600}),bold:chunkRTDJ4NEV_js.a({family:i,scale:s,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:i,scale:s,weight:800}),black:chunkRTDJ4NEV_js.a({family:i,scale:s,weight:900})},lg:{thin:chunkRTDJ4NEV_js.a({family:i,scale:g,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:i,scale:g,weight:200}),light:chunkRTDJ4NEV_js.a({family:i,scale:g,weight:300}),normal:chunkRTDJ4NEV_js.a({family:i,scale:g,weight:400}),medium:chunkRTDJ4NEV_js.a({family:i,scale:g,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:i,scale:g,weight:600}),bold:chunkRTDJ4NEV_js.a({family:i,scale:g,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:i,scale:g,weight:800}),black:chunkRTDJ4NEV_js.a({family:i,scale:g,weight:900})},xl:{thin:chunkRTDJ4NEV_js.a({family:i,scale:c,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:i,scale:c,weight:200}),light:chunkRTDJ4NEV_js.a({family:i,scale:c,weight:300}),normal:chunkRTDJ4NEV_js.a({family:i,scale:c,weight:400}),medium:chunkRTDJ4NEV_js.a({family:i,scale:c,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:i,scale:c,weight:600}),bold:chunkRTDJ4NEV_js.a({family:i,scale:c,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:i,scale:c,weight:800}),black:chunkRTDJ4NEV_js.a({family:i,scale:c,weight:900})},"2xl":{thin:chunkRTDJ4NEV_js.a({family:i,scale:n,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:i,scale:n,weight:200}),light:chunkRTDJ4NEV_js.a({family:i,scale:n,weight:300}),normal:chunkRTDJ4NEV_js.a({family:i,scale:n,weight:400}),medium:chunkRTDJ4NEV_js.a({family:i,scale:n,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:i,scale:n,weight:600}),bold:chunkRTDJ4NEV_js.a({family:i,scale:n,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:i,scale:n,weight:800}),black:chunkRTDJ4NEV_js.a({family:i,scale:n,weight:900})},"3xl":{thin:chunkRTDJ4NEV_js.a({family:i,scale:y,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:i,scale:y,weight:200}),light:chunkRTDJ4NEV_js.a({family:i,scale:y,weight:300}),normal:chunkRTDJ4NEV_js.a({family:i,scale:y,weight:400}),medium:chunkRTDJ4NEV_js.a({family:i,scale:y,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:i,scale:y,weight:600}),bold:chunkRTDJ4NEV_js.a({family:i,scale:y,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:i,scale:y,weight:800}),black:chunkRTDJ4NEV_js.a({family:i,scale:y,weight:900})},"4xl":{thin:chunkRTDJ4NEV_js.a({family:i,scale:f,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:i,scale:f,weight:200}),light:chunkRTDJ4NEV_js.a({family:i,scale:f,weight:300}),normal:chunkRTDJ4NEV_js.a({family:i,scale:f,weight:400}),medium:chunkRTDJ4NEV_js.a({family:i,scale:f,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:i,scale:f,weight:600}),bold:chunkRTDJ4NEV_js.a({family:i,scale:f,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:i,scale:f,weight:800}),black:chunkRTDJ4NEV_js.a({family:i,scale:f,weight:900})},"5xl":{thin:chunkRTDJ4NEV_js.a({family:i,scale:d,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:i,scale:d,weight:200}),light:chunkRTDJ4NEV_js.a({family:i,scale:d,weight:300}),normal:chunkRTDJ4NEV_js.a({family:i,scale:d,weight:400}),medium:chunkRTDJ4NEV_js.a({family:i,scale:d,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:i,scale:d,weight:600}),bold:chunkRTDJ4NEV_js.a({family:i,scale:d,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:i,scale:d,weight:800}),black:chunkRTDJ4NEV_js.a({family:i,scale:d,weight:900})},"6xl":{thin:chunkRTDJ4NEV_js.a({family:i,scale:x,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:i,scale:x,weight:200}),light:chunkRTDJ4NEV_js.a({family:i,scale:x,weight:300}),normal:chunkRTDJ4NEV_js.a({family:i,scale:x,weight:400}),medium:chunkRTDJ4NEV_js.a({family:i,scale:x,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:i,scale:x,weight:600}),bold:chunkRTDJ4NEV_js.a({family:i,scale:x,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:i,scale:x,weight:800}),black:chunkRTDJ4NEV_js.a({family:i,scale:x,weight:900})},"7xl":{thin:chunkRTDJ4NEV_js.a({family:i,scale:w,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:i,scale:w,weight:200}),light:chunkRTDJ4NEV_js.a({family:i,scale:w,weight:300}),normal:chunkRTDJ4NEV_js.a({family:i,scale:w,weight:400}),medium:chunkRTDJ4NEV_js.a({family:i,scale:w,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:i,scale:w,weight:600}),bold:chunkRTDJ4NEV_js.a({family:i,scale:w,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:i,scale:w,weight:800}),black:chunkRTDJ4NEV_js.a({family:i,scale:w,weight:900})},"8xl":{thin:chunkRTDJ4NEV_js.a({family:i,scale:p,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:i,scale:p,weight:200}),light:chunkRTDJ4NEV_js.a({family:i,scale:p,weight:300}),normal:chunkRTDJ4NEV_js.a({family:i,scale:p,weight:400}),medium:chunkRTDJ4NEV_js.a({family:i,scale:p,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:i,scale:p,weight:600}),bold:chunkRTDJ4NEV_js.a({family:i,scale:p,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:i,scale:p,weight:800}),black:chunkRTDJ4NEV_js.a({family:i,scale:p,weight:900})},"9xl":{thin:chunkRTDJ4NEV_js.a({family:i,scale:u,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:i,scale:u,weight:200}),light:chunkRTDJ4NEV_js.a({family:i,scale:u,weight:300}),normal:chunkRTDJ4NEV_js.a({family:i,scale:u,weight:400}),medium:chunkRTDJ4NEV_js.a({family:i,scale:u,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:i,scale:u,weight:600}),bold:chunkRTDJ4NEV_js.a({family:i,scale:u,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:i,scale:u,weight:800}),black:chunkRTDJ4NEV_js.a({family:i,scale:u,weight:900})}},accent:{xs:{thin:chunkRTDJ4NEV_js.a({family:l,scale:h,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:l,scale:h,weight:200}),light:chunkRTDJ4NEV_js.a({family:l,scale:h,weight:300}),normal:chunkRTDJ4NEV_js.a({family:l,scale:h,weight:400}),medium:chunkRTDJ4NEV_js.a({family:l,scale:h,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:l,scale:h,weight:600}),bold:chunkRTDJ4NEV_js.a({family:l,scale:h,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:l,scale:h,weight:800}),black:chunkRTDJ4NEV_js.a({family:l,scale:h,weight:900})},sm:{thin:chunkRTDJ4NEV_js.a({family:l,scale:o,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:l,scale:o,weight:200}),light:chunkRTDJ4NEV_js.a({family:l,scale:o,weight:300}),normal:chunkRTDJ4NEV_js.a({family:l,scale:o,weight:400}),medium:chunkRTDJ4NEV_js.a({family:l,scale:o,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:l,scale:o,weight:600}),bold:chunkRTDJ4NEV_js.a({family:l,scale:o,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:l,scale:o,weight:800}),black:chunkRTDJ4NEV_js.a({family:l,scale:o,weight:900})},md:{thin:chunkRTDJ4NEV_js.a({family:l,scale:s,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:l,scale:s,weight:200}),light:chunkRTDJ4NEV_js.a({family:l,scale:s,weight:300}),normal:chunkRTDJ4NEV_js.a({family:l,scale:s,weight:400}),medium:chunkRTDJ4NEV_js.a({family:l,scale:s,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:l,scale:s,weight:600}),bold:chunkRTDJ4NEV_js.a({family:l,scale:s,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:l,scale:s,weight:800}),black:chunkRTDJ4NEV_js.a({family:l,scale:s,weight:900})},lg:{thin:chunkRTDJ4NEV_js.a({family:l,scale:g,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:l,scale:g,weight:200}),light:chunkRTDJ4NEV_js.a({family:l,scale:g,weight:300}),normal:chunkRTDJ4NEV_js.a({family:l,scale:g,weight:400}),medium:chunkRTDJ4NEV_js.a({family:l,scale:g,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:l,scale:g,weight:600}),bold:chunkRTDJ4NEV_js.a({family:l,scale:g,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:l,scale:g,weight:800}),black:chunkRTDJ4NEV_js.a({family:l,scale:g,weight:900})},xl:{thin:chunkRTDJ4NEV_js.a({family:l,scale:c,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:l,scale:c,weight:200}),light:chunkRTDJ4NEV_js.a({family:l,scale:c,weight:300}),normal:chunkRTDJ4NEV_js.a({family:l,scale:c,weight:400}),medium:chunkRTDJ4NEV_js.a({family:l,scale:c,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:l,scale:c,weight:600}),bold:chunkRTDJ4NEV_js.a({family:l,scale:c,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:l,scale:c,weight:800}),black:chunkRTDJ4NEV_js.a({family:l,scale:c,weight:900})},"2xl":{thin:chunkRTDJ4NEV_js.a({family:l,scale:n,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:l,scale:n,weight:200}),light:chunkRTDJ4NEV_js.a({family:l,scale:n,weight:300}),normal:chunkRTDJ4NEV_js.a({family:l,scale:n,weight:400}),medium:chunkRTDJ4NEV_js.a({family:l,scale:n,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:l,scale:n,weight:600}),bold:chunkRTDJ4NEV_js.a({family:l,scale:n,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:l,scale:n,weight:800}),black:chunkRTDJ4NEV_js.a({family:l,scale:n,weight:900})},"3xl":{thin:chunkRTDJ4NEV_js.a({family:l,scale:y,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:l,scale:y,weight:200}),light:chunkRTDJ4NEV_js.a({family:l,scale:y,weight:300}),normal:chunkRTDJ4NEV_js.a({family:l,scale:y,weight:400}),medium:chunkRTDJ4NEV_js.a({family:l,scale:y,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:l,scale:y,weight:600}),bold:chunkRTDJ4NEV_js.a({family:l,scale:y,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:l,scale:y,weight:800}),black:chunkRTDJ4NEV_js.a({family:l,scale:y,weight:900})},"4xl":{thin:chunkRTDJ4NEV_js.a({family:l,scale:f,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:l,scale:f,weight:200}),light:chunkRTDJ4NEV_js.a({family:l,scale:f,weight:300}),normal:chunkRTDJ4NEV_js.a({family:l,scale:f,weight:400}),medium:chunkRTDJ4NEV_js.a({family:l,scale:f,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:l,scale:f,weight:600}),bold:chunkRTDJ4NEV_js.a({family:l,scale:f,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:l,scale:f,weight:800}),black:chunkRTDJ4NEV_js.a({family:l,scale:f,weight:900})},"5xl":{thin:chunkRTDJ4NEV_js.a({family:l,scale:d,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:l,scale:d,weight:200}),light:chunkRTDJ4NEV_js.a({family:l,scale:d,weight:300}),normal:chunkRTDJ4NEV_js.a({family:l,scale:d,weight:400}),medium:chunkRTDJ4NEV_js.a({family:l,scale:d,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:l,scale:d,weight:600}),bold:chunkRTDJ4NEV_js.a({family:l,scale:d,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:l,scale:d,weight:800}),black:chunkRTDJ4NEV_js.a({family:l,scale:d,weight:900})},"6xl":{thin:chunkRTDJ4NEV_js.a({family:l,scale:x,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:l,scale:x,weight:200}),light:chunkRTDJ4NEV_js.a({family:a,scale:l,weight:300}),normal:chunkRTDJ4NEV_js.a({family:l,scale:x,weight:400}),medium:chunkRTDJ4NEV_js.a({family:l,scale:x,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:l,scale:x,weight:600}),bold:chunkRTDJ4NEV_js.a({family:l,scale:x,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:l,scale:x,weight:800}),black:chunkRTDJ4NEV_js.a({family:l,scale:x,weight:900})},"7xl":{thin:chunkRTDJ4NEV_js.a({family:l,scale:w,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:l,scale:w,weight:200}),light:chunkRTDJ4NEV_js.a({family:l,scale:w,weight:300}),normal:chunkRTDJ4NEV_js.a({family:l,scale:w,weight:400}),medium:chunkRTDJ4NEV_js.a({family:l,scale:w,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:l,scale:w,weight:600}),bold:chunkRTDJ4NEV_js.a({family:l,scale:w,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:l,scale:w,weight:800}),black:chunkRTDJ4NEV_js.a({family:l,scale:w,weight:900})},"8xl":{thin:chunkRTDJ4NEV_js.a({family:l,scale:p,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:l,scale:p,weight:200}),light:chunkRTDJ4NEV_js.a({family:l,scale:p,weight:300}),normal:chunkRTDJ4NEV_js.a({family:l,scale:p,weight:400}),medium:chunkRTDJ4NEV_js.a({family:l,scale:p,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:l,scale:p,weight:600}),bold:chunkRTDJ4NEV_js.a({family:l,scale:p,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:l,scale:p,weight:800}),black:chunkRTDJ4NEV_js.a({family:l,scale:p,weight:900})},"9xl":{thin:chunkRTDJ4NEV_js.a({family:l,scale:u,weight:100}),xlight:chunkRTDJ4NEV_js.a({family:l,scale:u,weight:200}),light:chunkRTDJ4NEV_js.a({family:l,scale:u,weight:300}),normal:chunkRTDJ4NEV_js.a({family:l,scale:u,weight:400}),medium:chunkRTDJ4NEV_js.a({family:l,scale:u,weight:500}),semibold:chunkRTDJ4NEV_js.a({family:l,scale:u,weight:600}),bold:chunkRTDJ4NEV_js.a({family:l,scale:u,weight:700}),xbold:chunkRTDJ4NEV_js.a({family:l,scale:u,weight:800}),black:chunkRTDJ4NEV_js.a({family:l,scale:u,weight:900})}}}};var G=({base:r,config:t})=>({external_resources:t?.external_resources?H({base:r.external_resources,config:t?.external_resources??[]}):r.external_resources,fonts:t?.fonts?U({base:r.fonts,config:t?.fonts?t.fonts:{}}):r.fonts});var b=({base:r,config:t})=>{let a=m(t,r.tint_500,["tint_500"]),l=r.tint_500!=a,i=m(t,l?a:r.tint_400,["tint_400"]),s=m(t,l?i:r.tint_300,["tint_300"]),o=m(t,l?s:r.tint_200,["tint_200"]),h=m(t,l?o:r.tint_100,["tint_100"]),g=m(t,l?h:r.tint_50,["tint_50"]),c=m(t,l?a:r.tint_600,["tint_600"]),n=m(t,l?c:r.tint_700,["tint_700"]),y=m(t,l?n:r.tint_800,["tint_800"]),f=m(t,l?y:r.tint_900,["tint_900"]),d=m(t,l?f:r.tint_950,["tint_950"]);return {tint_50:g,tint_100:h,tint_200:o,tint_300:s,tint_400:i,tint_500:a,tint_600:c,tint_700:n,tint_800:y,tint_900:f,tint_950:d}};var K=({base:r,config:t})=>t||r;var W=({base:r,config:t})=>({danger:b({base:r.danger,config:t.danger?t.danger:{}}),warning:b({base:r.warning,config:t.warning?t.warning:{}}),success:b({base:r.success,config:t.success?t.success:{}}),info:b({base:r.info,config:t.info?t.info:{}}),neutrals:b({base:r.neutrals,config:t.neutrals?t.neutrals:{}}),surfaces:b({base:r.surfaces,config:t.surfaces?t.surfaces:{}}),primary:b({base:r.primary,config:t.primary?t.primary:{}}),accent:b({base:r.accent,config:t.accent?t.accent:{}}),supporting:b({base:r.supporting,config:t.supporting?t.supporting:{}}),map:{label:{all:t.map?.label?.all?t.map.label.all:r.map.label.all,water:t.map?.label?.water?t.map.label.water:r.map.label.water,highway:t.map?.label?.highway?t.map.label.highway:r.map.label.highway,road:t.map?.label?.road?t.map.label.road:r.map.label.road},border:{country:t.map?.border?.country?t.map.border.country:r.map.border.country,highway:t.map?.border?.highway?t.map.border.highway:r.map.border.highway,road:t.map?.border?.road?t.map.border.road:r.map.border.road},landscape:{all:t.map?.landscape?.all?t.map.landscape.all:r.map.landscape.all,artificial:t.map?.landscape?.artificial?t.map.landscape.artificial:r.map.landscape.artificial,terrain:t.map?.landscape?.terrain?t.map.landscape.terrain:r.map.landscape.terrain,park:t.map?.landscape?.park?t.map.landscape.park:r.map.landscape.park,poi:t.map?.landscape?.poi?t.map.landscape.poi:r.map.landscape.poi,water:t.map?.landscape?.water?t.map.landscape.water:r.map.landscape.water,transit:t.map?.landscape?.transit?t.map.landscape.transit:r.map.landscape.transit,highway:t.map?.landscape?.highway?t.map.landscape.highway:r.map.landscape.highway,road:t.map?.landscape?.road?t.map.landscape.road:r.map.landscape.road}},additional:K({base:r.additional,config:t?.additional?t.additional:[]})});var q=({base:r,config:t})=>({none:r.none,xs:t?t.xs:r.xs,sm:t?t.sm:r.sm,md:t?t.md:r.md,lg:t?t.lg:r.lg,xl:t?t.xl:r.xl,"2xl":t?t["2xl"]:r["2xl"],"3xl":t?t["3xl"]:r["3xl"],full:"9999px"});var te=({config:r})=>({alternate:j({base:chunkRTDJ4NEV_js.r.alternate,config:r?.alternate?r.alternate:[]}),typography:r?.typography?G({base:chunkRTDJ4NEV_js.r.typography,config:{external_resources:r.typography?.external_resources?r.typography.external_resources:[],fonts:r.typography?.fonts?r.typography.fonts:{}}}):chunkRTDJ4NEV_js.r.typography,colors:r?.colors?W({base:chunkRTDJ4NEV_js.r.colors,config:r.colors?r.colors:{}}):chunkRTDJ4NEV_js.r.colors,utility:chunkRTDJ4NEV_js.r.utility,radius:q({base:chunkRTDJ4NEV_js.r.radius,config:r.radius})});exports.ThemeMode=(l=>(l.STANDARD="STANDARD",l.INVERTED="INVERTED",l.CONTRAST="CONTRAST",l))(exports.ThemeMode||{});(a=>{function r(l,i){return Object.values(a).includes(l)?l:i}a.from=r;function t(l){return Object.values(a).includes(l)?l:null}a.tryFrom=t;})(exports.ThemeMode||={});var se=I.createContext("STANDARD");var me=()=>chunkRTDJ4NEV_js.t().alternate;var oe=()=>chunkRTDJ4NEV_js.t().radius;var he=()=>chunkRTDJ4NEV_js.t().utility;var S=class{constructor(t,a,l,i,s){this.prefersReducedMotion=t,this.prefersContrast=a,this.prefersReducedTransparency=l,this.prefersColorSchema=i,this.invertedColors=s;}prefersDarkMode(){return this.prefersColorSchema==="dark"}prefersHighContrast(){return this.prefersContrast==="more"}prefersLowContrast(){return this.prefersContrast==="less"}},ce=()=>{let r=matchMedia("(prefers-reduced-motion: reduce)").matches?"reduce":"no-preference",t=matchMedia("(prefers-contrast: more)").matches?"more":matchMedia("(prefers-contrast: less)").matches?"less":matchMedia("(prefers-contrast: custom)").matches?"custom":"no-preference",a=matchMedia("(prefers-reduced-transparency: reduce)").matches?"reduce":"no-preference",l=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",i=matchMedia("(inverted-colors: inverted)").matches?"inverted":"none";return new S(r,t,a,l,i)};var ne=r=>{let t=({children:a})=>I__default.default.createElement(I__default.default.Fragment,null," ",a," ");return r.reduce((a,[l,i={}])=>({children:s})=>I__default.default.createElement(a,null,I__default.default.createElement(l,{...i},s)),t)};var fe=r=>{let{children:t,sheets:a}=r;return I.useEffect(()=>{a.map(function(l){let i=document.createElement("link");i.rel="stylesheet",i.href=l,document.head.appendChild(i);});},[a]),t??null};var ge=({name:r,alternates:t})=>t.find(a=>a.name===r);var de=({name:r,colors:t,fallback:a})=>{let l=t.find(i=>i.name===r);return l?l.color:a};

Object.defineProperty(exports, "ThemeCtx", {
    enumerable: true,
    get: function () { return chunkRTDJ4NEV_js.s; }
});
Object.defineProperty(exports, "useTheme", {
    enumerable: true,
    get: function () { return chunkRTDJ4NEV_js.t; }
});
Object.defineProperty(exports, "useThemeColor", {
    enumerable: true,
    get: function () { return chunkRTDJ4NEV_js.u; }
});
Object.defineProperty(exports, "useThemeFonts", {
    enumerable: true,
    get: function () { return chunkRTDJ4NEV_js.v; }
});
exports.BrowserAccessibilityPreferences = S;
exports.BuildProvidersTree = ne;
exports.ExternalStylesheetLoader = fe;
exports.LookupAdditionalColor = de;
exports.LookupAlternate = ge;
exports.StyleProviderAnimation = Z;
exports.StyleProviderPreFlight = le;
exports.StyleProviderRouter = ie;
exports.ThemeBuilder = te;
exports.ThemeModeCtx = se;
exports.orDefault = m;
exports.useBrowserAccessibilityPreferences = ce;
exports.useThemeAlternate = me;
exports.useThemeRadius = oe;
exports.useThemeUtility = he;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map