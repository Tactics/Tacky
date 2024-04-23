'use strict';

var chunkX5ZRIAH6_js = require('./chunk-X5ZRIAH6.js');
var r = require('react');
var s = require('styled-components');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var r__default = /*#__PURE__*/_interopDefault(r);
var s__default = /*#__PURE__*/_interopDefault(s);

var y=s__default.default.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`,U=s__default.default.div`
  flex-grow: 1;
`,d=s__default.default.div`
  background: ${o=>o.color};
  box-shadow: rgba(39, 51, 68, 0.1) 0 4px 7px;
  border-radius: 8px;
  width: 100%;
  height: 2.5rem;
  margin-bottom: 0.5rem;
`,a=s__default.default.div``,c=s__default.default.div`
  font: ${o=>o.font};
  color: ${o=>o.color};
`,C=s__default.default.div`
  margin-top: 0.25rem;
  font: ${o=>o.font};
  color: ${o=>o.color};
`;var t=({title:o,color:i})=>{let n=chunkX5ZRIAH6_js.u(),e=chunkX5ZRIAH6_js.t();return r__default.default.createElement(U,null,r__default.default.createElement(d,{color:i}),r__default.default.createElement(a,null,r__default.default.createElement(c,{font:n.primary.sm,color:e.neutrals.tint_800},o),r__default.default.createElement(C,{font:n.primary.xs,color:e.neutrals.tint_800},i)))};var T=({colors:o})=>r__default.default.createElement(y,null,o.map(function(i){return r__default.default.createElement(t,{color:i.color,title:i.name})}));var D=({colors:o})=>r__default.default.createElement(y,null,r__default.default.createElement(t,{color:o.tint_50,title:"50"}),r__default.default.createElement(t,{color:o.tint_100,title:"100"}),r__default.default.createElement(t,{color:o.tint_200,title:"200"}),r__default.default.createElement(t,{color:o.tint_300,title:"300"}),r__default.default.createElement(t,{color:o.tint_400,title:"400"}),r__default.default.createElement(t,{color:o.tint_500,title:"500"}),r__default.default.createElement(t,{color:o.tint_600,title:"600"}),r__default.default.createElement(t,{color:o.tint_700,title:"700"}),r__default.default.createElement(t,{color:o.tint_800,title:"800"}),r__default.default.createElement(t,{color:o.tint_900,title:"900"}),r__default.default.createElement(t,{color:o.tint_950,title:"950"}));var v=s__default.default.div`
  display: flex;
  flex-direction: column;
`,g=s__default.default.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${o=>o.color};
  padding-bottom: 1.5rem;
`,w=s__default.default.div`
  font: ${o=>o.font};
  color: ${o=>o.color};
`,u=s__default.default.div`
  margin-bottom: 5rem;
`;var $=({title:o,children:i})=>{let n=chunkX5ZRIAH6_js.u(),e=chunkX5ZRIAH6_js.t();return r__default.default.createElement(v,null,r__default.default.createElement(g,{color:e.neutrals.tint_500},r__default.default.createElement(w,{font:n.primary.xl,color:e.neutrals.tint_950},o)),r__default.default.createElement(u,null,i))};var P=s__default.default.div`
  display: flex;
  flex-direction: column;
`,h=s__default.default.div`
  font: ${o=>o.font};
  margin-bottom: 1rem;
  color: ${o=>o.color};
`,I=s__default.default.div`
  margin-bottom: 1rem;
`;var L=({caption:o,children:i})=>{let n=chunkX5ZRIAH6_js.u(),e=chunkX5ZRIAH6_js.t();return r__default.default.createElement(P,null,r__default.default.createElement(h,{font:n.primary.sm,color:e.neutrals.tint_900},o),r__default.default.createElement(I,null,i))};var _=s__default.default.div`
  font: ${o=>o.font};
`;var A=({text:o,font:i})=>r__default.default.createElement(_,{font:i},o);

exports.StorybookUiAdditionalColorList = T;
exports.StorybookUiColor = t;
exports.StorybookUiElement = $;
exports.StorybookUiFont = A;
exports.StorybookUiItem = L;
exports.StorybookUiThemeColorList = D;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=storybook.js.map