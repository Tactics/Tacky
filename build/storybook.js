'use strict';

var chunkX3P3LASA_js = require('./chunk-X3P3LASA.js');
var r = require('react');
var m = require('styled-components');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var r__default = /*#__PURE__*/_interopDefault(r);
var m__default = /*#__PURE__*/_interopDefault(m);

var y=m__default.default.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,k=m__default.default.div`
  flex-grow: 1;
  min-width: 80px;
`,S=m__default.default.div`
  background: ${o=>o.color};
  width: 100%;
  height: 2.5rem;
  margin-bottom: 0.5rem;
`,U=m__default.default.div``,d=m__default.default.div`
  font: ${o=>o.font};
  color: ${o=>o.color};
`,C=m__default.default.div`
  margin-top: 0.25rem;
  font: ${o=>o.font};
  color: ${o=>o.color};
`;var t=({title:o,color:i})=>{let s=chunkX3P3LASA_js.v(),e=chunkX3P3LASA_js.u();return r__default.default.createElement(k,null,r__default.default.createElement(S,{color:i}),r__default.default.createElement(U,null,r__default.default.createElement(d,{font:s.primary.sm,color:e.neutrals.tint_800},o),r__default.default.createElement(C,{font:s.primary.xs,color:e.neutrals.tint_800},i)))};var I=({colors:o})=>r__default.default.createElement(y,null,o.map(function(i){return r__default.default.createElement(t,{color:i.color,title:i.name})}));var T=({colors:o})=>r__default.default.createElement(y,null,r__default.default.createElement(t,{color:o.tint_50,title:"50"}),r__default.default.createElement(t,{color:o.tint_100,title:"100"}),r__default.default.createElement(t,{color:o.tint_200,title:"200"}),r__default.default.createElement(t,{color:o.tint_300,title:"300"}),r__default.default.createElement(t,{color:o.tint_400,title:"400"}),r__default.default.createElement(t,{color:o.tint_500,title:"500"}),r__default.default.createElement(t,{color:o.tint_600,title:"600"}),r__default.default.createElement(t,{color:o.tint_700,title:"700"}),r__default.default.createElement(t,{color:o.tint_800,title:"800"}),r__default.default.createElement(t,{color:o.tint_900,title:"900"}),r__default.default.createElement(t,{color:o.tint_950,title:"950"}));var c=m__default.default.div`
  display: flex;
  flex-direction: column;
`,x=m__default.default.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${o=>o.color};
  padding-bottom: 1.5rem;
`,v=m__default.default.div`
  font: ${o=>o.font};
  color: ${o=>o.color};
`,w=m__default.default.div`
  margin-bottom: 5rem;
`;var D=({title:o,children:i})=>{let s=chunkX3P3LASA_js.v(),e=chunkX3P3LASA_js.u();return r__default.default.createElement(c,null,r__default.default.createElement(x,{color:e.neutrals.tint_500},r__default.default.createElement(v,{font:s.primary.xl,color:e.neutrals.tint_950},o)),r__default.default.createElement(w,null,i))};var u=m__default.default.div`
  display: flex;
  flex-direction: column;
`,P=m__default.default.div`
  margin-bottom: 1rem;
`;var L=({caption:o,children:i})=>{chunkX3P3LASA_js.v();chunkX3P3LASA_js.u();return r__default.default.createElement(u,null,r__default.default.createElement(P,null,i))};var _=m__default.default.div`
  font: ${o=>o.font};
`;var H=({text:o,font:i})=>r__default.default.createElement(_,{font:i},o);

exports.StorybookUiAdditionalColorList = I;
exports.StorybookUiColor = t;
exports.StorybookUiElement = D;
exports.StorybookUiFont = H;
exports.StorybookUiItem = L;
exports.StorybookUiThemeColorList = T;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=storybook.js.map