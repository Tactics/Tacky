'use strict';

var chunkC4C6YNHY_js = require('./chunk-C4C6YNHY.js');
var i = require('react');
var e = require('styled-components');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var i__default = /*#__PURE__*/_interopDefault(i);
var e__default = /*#__PURE__*/_interopDefault(e);

var a=e__default.default.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,f=e__default.default.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`,S=e__default.default.div`
  flex-grow: 1;
  min-width: 80px;
`,b=e__default.default.div`
  background: ${o=>o.color};
  width: 100%;
  height: 2.5rem;
  margin-bottom: 0.5rem;
`,U=e__default.default.div``,x=e__default.default.div`
  font: ${o=>o.font};
  color: ${o=>o.color};
`,k=e__default.default.div`
  margin-top: 0.25rem;
  font: ${o=>o.font};
  color: ${o=>o.color};
`;var r=({title:o,color:t})=>{let s=chunkC4C6YNHY_js.v(),c=chunkC4C6YNHY_js.u();return i__default.default.createElement(S,null,i__default.default.createElement(b,{color:t}),i__default.default.createElement(U,null,i__default.default.createElement(x,{font:s.primary.sm,color:c.neutrals.tint_800},o),i__default.default.createElement(k,{font:s.primary.xs,color:c.neutrals.tint_800},t)))};var A=({colors:o})=>i__default.default.createElement(i__default.default.Fragment,null,o.map(function(t){return i__default.default.createElement(f,null,i__default.default.createElement(r,{color:t.color,title:t.name}))}));var $=({colors:o})=>i__default.default.createElement(a,null,i__default.default.createElement(r,{color:o.tint_50,title:"50"}),i__default.default.createElement(r,{color:o.tint_100,title:"100"}),i__default.default.createElement(r,{color:o.tint_200,title:"200"}),i__default.default.createElement(r,{color:o.tint_300,title:"300"}),i__default.default.createElement(r,{color:o.tint_400,title:"400"}),i__default.default.createElement(r,{color:o.tint_500,title:"500"}),i__default.default.createElement(r,{color:o.tint_600,title:"600"}),i__default.default.createElement(r,{color:o.tint_700,title:"700"}),i__default.default.createElement(r,{color:o.tint_800,title:"800"}),i__default.default.createElement(r,{color:o.tint_900,title:"900"}),i__default.default.createElement(r,{color:o.tint_950,title:"950"}));var I=e__default.default.div`
  display: flex;
  flex-direction: column;
`,w=e__default.default.div`
  margin-bottom: 5rem;
`;var N=({title:o,children:t})=>{chunkC4C6YNHY_js.v();chunkC4C6YNHY_js.u();return i__default.default.createElement(I,null,i__default.default.createElement(w,null,t))};var u=e__default.default.div`
  display: flex;
  flex-direction: column;
`,P=e__default.default.div`
  margin-bottom: 1rem;
`;var V=({caption:o,children:t})=>{chunkC4C6YNHY_js.v();chunkC4C6YNHY_js.u();return i__default.default.createElement(u,null,i__default.default.createElement(P,null,t))};var G=e__default.default.div`
  font: ${o=>o.font};
`;var q=({text:o,font:t})=>i__default.default.createElement(G,{font:t},o);var L=e__default.default.div`
  display: flex;
  flex-flow: row wrap;
`,_=e__default.default.div`
  display: flex;
  flex-flow: row wrap;
`,D=e__default.default.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 calc(20% - 10px);
  min-width: 300px;
  margin: 0 10px 30px 0;
`,F=e__default.default.div`
  border-radius: 4px;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;
  border: 1px solid hsla(203, 50%, 30%, 0.15);
  overflow: hidden;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
`,T=e__default.default.div`
  margin-left: 10px;
  line-height: 1.2;
  text-transform: lowercase;
  color: #2e3438;
`;var z=({children:o,...t})=>i__default.default.createElement(L,null,i__default.default.createElement(_,{...t,className:"docblock-icongallery sb-unstyled"},o)),B=({name:o,children:t})=>i__default.default.createElement(D,null,i__default.default.createElement(F,null,t),i__default.default.createElement(T,null,o));

exports.StorybookUiAdditionalColorList = A;
exports.StorybookUiColor = r;
exports.StorybookUiElement = N;
exports.StorybookUiFont = q;
exports.StorybookUiIconGallery = z;
exports.StorybookUiIconGalleryItem = B;
exports.StorybookUiItem = V;
exports.StorybookUiThemeColorList = $;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=storybook.js.map