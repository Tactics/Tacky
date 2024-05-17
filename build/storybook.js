'use strict';

var chunkX3P3LASA_js = require('./chunk-X3P3LASA.js');
var r = require('react');
var l = require('styled-components');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var r__default = /*#__PURE__*/_interopDefault(r);
var l__default = /*#__PURE__*/_interopDefault(l);

var y=l__default.default.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,f=l__default.default.div`
  flex-grow: 1;
  min-width: 80px;
`,b=l__default.default.div`
  background: ${o=>o.color};
  width: 100%;
  height: 2.5rem;
  margin-bottom: 0.5rem;
`,k=l__default.default.div``,S=l__default.default.div`
  font: ${o=>o.font};
  color: ${o=>o.color};
`,U=l__default.default.div`
  margin-top: 0.25rem;
  font: ${o=>o.font};
  color: ${o=>o.color};
`;var t=({title:o,color:i})=>{let p=chunkX3P3LASA_js.v(),s=chunkX3P3LASA_js.u();return r__default.default.createElement(f,null,r__default.default.createElement(b,{color:i}),r__default.default.createElement(k,null,r__default.default.createElement(S,{font:p.primary.sm,color:s.neutrals.tint_800},o),r__default.default.createElement(U,{font:p.primary.xs,color:s.neutrals.tint_800},i)))};var h=({colors:o})=>r__default.default.createElement(y,null,o.map(function(i){return r__default.default.createElement(t,{color:i.color,title:i.name})}));var I=({colors:o})=>r__default.default.createElement(y,null,r__default.default.createElement(t,{color:o.tint_50,title:"50"}),r__default.default.createElement(t,{color:o.tint_100,title:"100"}),r__default.default.createElement(t,{color:o.tint_200,title:"200"}),r__default.default.createElement(t,{color:o.tint_300,title:"300"}),r__default.default.createElement(t,{color:o.tint_400,title:"400"}),r__default.default.createElement(t,{color:o.tint_500,title:"500"}),r__default.default.createElement(t,{color:o.tint_600,title:"600"}),r__default.default.createElement(t,{color:o.tint_700,title:"700"}),r__default.default.createElement(t,{color:o.tint_800,title:"800"}),r__default.default.createElement(t,{color:o.tint_900,title:"900"}),r__default.default.createElement(t,{color:o.tint_950,title:"950"}));var d=l__default.default.div`
  display: flex;
  flex-direction: column;
`,a=l__default.default.div`
  margin-bottom: 5rem;
`;var _=({title:o,children:i})=>{chunkX3P3LASA_js.v();chunkX3P3LASA_js.u();return r__default.default.createElement(d,null,r__default.default.createElement(a,null,i))};var w=l__default.default.div`
  display: flex;
  flex-direction: column;
`,P=l__default.default.div`
  margin-bottom: 1rem;
`;var D=({caption:o,children:i})=>{chunkX3P3LASA_js.v();chunkX3P3LASA_js.u();return r__default.default.createElement(w,null,r__default.default.createElement(P,null,i))};var u=l__default.default.div`
  font: ${o=>o.font};
`;var F=({text:o,font:i})=>r__default.default.createElement(u,{font:i},o);

exports.StorybookUiAdditionalColorList = h;
exports.StorybookUiColor = t;
exports.StorybookUiElement = _;
exports.StorybookUiFont = F;
exports.StorybookUiItem = D;
exports.StorybookUiThemeColorList = I;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=storybook.js.map