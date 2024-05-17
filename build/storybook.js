'use strict';

var chunkX3P3LASA_js = require('./chunk-X3P3LASA.js');
var e = require('react');
var n = require('styled-components');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var e__default = /*#__PURE__*/_interopDefault(e);
var n__default = /*#__PURE__*/_interopDefault(n);

var a=n__default.default.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,d=n__default.default.div`
  flex-grow: 1;
  min-width: 80px;
`,f=n__default.default.div`
  background: ${o=>o.color};
  width: 100%;
  height: 2.5rem;
  margin-bottom: 0.5rem;
`,S=n__default.default.div``,b=n__default.default.div`
  font: ${o=>o.font};
  color: ${o=>o.color};
`,U=n__default.default.div`
  margin-top: 0.25rem;
  font: ${o=>o.font};
  color: ${o=>o.color};
`;var r=({title:o,color:t})=>{let s=chunkX3P3LASA_js.v(),c=chunkX3P3LASA_js.u();return e__default.default.createElement(d,null,e__default.default.createElement(f,{color:t}),e__default.default.createElement(S,null,e__default.default.createElement(b,{font:s.primary.sm,color:c.neutrals.tint_800},o),e__default.default.createElement(U,{font:s.primary.xs,color:c.neutrals.tint_800},t)))};var T=({colors:o})=>e__default.default.createElement(a,null,o.map(function(t){return e__default.default.createElement(r,{color:t.color,title:t.name})}));var $=({colors:o})=>e__default.default.createElement(a,null,e__default.default.createElement(r,{color:o.tint_50,title:"50"}),e__default.default.createElement(r,{color:o.tint_100,title:"100"}),e__default.default.createElement(r,{color:o.tint_200,title:"200"}),e__default.default.createElement(r,{color:o.tint_300,title:"300"}),e__default.default.createElement(r,{color:o.tint_400,title:"400"}),e__default.default.createElement(r,{color:o.tint_500,title:"500"}),e__default.default.createElement(r,{color:o.tint_600,title:"600"}),e__default.default.createElement(r,{color:o.tint_700,title:"700"}),e__default.default.createElement(r,{color:o.tint_800,title:"800"}),e__default.default.createElement(r,{color:o.tint_900,title:"900"}),e__default.default.createElement(r,{color:o.tint_950,title:"950"}));var C=n__default.default.div`
  display: flex;
  flex-direction: column;
`,I=n__default.default.div`
  margin-bottom: 5rem;
`;var A=({title:o,children:t})=>{chunkX3P3LASA_js.v();chunkX3P3LASA_js.u();return e__default.default.createElement(C,null,e__default.default.createElement(I,null,t))};var g=n__default.default.div`
  display: flex;
  flex-direction: column;
`,u=n__default.default.div`
  margin-bottom: 1rem;
`;var N=({caption:o,children:t})=>{chunkX3P3LASA_js.v();chunkX3P3LASA_js.u();return e__default.default.createElement(g,null,e__default.default.createElement(u,null,t))};var h=n__default.default.div`
  font: ${o=>o.font};
`;var j=({text:o,font:t})=>e__default.default.createElement(h,{font:t},o);var G=n__default.default.div`
  display: flex;
  flex-flow: row wrap;
`,L=n__default.default.div`
  display: flex;
  flex-flow: row wrap;
`,_=n__default.default.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 calc(20% - 10px);
  min-width: 300px;
  margin: 0 10px 30px 0;
`,D=n__default.default.div`
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
`,F=n__default.default.div`
  margin-left: 10px;
  line-height: 1.2;
  text-transform: lowercase;
  color: #2e3438;
`;var q=({children:o,...t})=>e__default.default.createElement(G,null,e__default.default.createElement(L,{...t,className:"docblock-icongallery sb-unstyled"},o)),z=({name:o,children:t})=>e__default.default.createElement(_,null,e__default.default.createElement(D,null,t),e__default.default.createElement(F,null,o));

exports.StorybookUiAdditionalColorList = T;
exports.StorybookUiColor = r;
exports.StorybookUiElement = A;
exports.StorybookUiFont = j;
exports.StorybookUiIconGallery = q;
exports.StorybookUiIconGalleryItem = z;
exports.StorybookUiItem = N;
exports.StorybookUiThemeColorList = $;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=storybook.js.map