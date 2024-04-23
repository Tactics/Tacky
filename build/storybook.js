'use strict';

var chunkJOKTYZAV_js = require('./chunk-JOKTYZAV.js');
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
  gap: 1rem;
`,d=m__default.default.div`
  flex-grow: 1;
`,C=m__default.default.div`
  background: ${o=>o.color};
  box-shadow: rgba(39, 51, 68, 0.1) 0 4px 7px;
  border-radius: 8px;
  width: 100%;
  height: 2.5rem;
  margin-bottom: 0.5rem;
`,x=m__default.default.div``,u=m__default.default.div`
  font: ${o=>o.font};
  color: ${o=>o.color};
`,v=m__default.default.div`
  margin-top: 0.25rem;
  font: ${o=>o.font};
  color: ${o=>o.color};
`;var f=()=>{try{return r.useContext(chunkJOKTYZAV_js.s)}catch{return chunkJOKTYZAV_js.r}};var l=()=>f().typography.fonts;var s=()=>f().colors;var t=({title:o,color:i})=>{let n=l(),e=s();return r__default.default.createElement(d,null,r__default.default.createElement(C,{color:i}),r__default.default.createElement(x,null,r__default.default.createElement(u,{font:n.primary.sm,color:e.neutrals.tint_800},o),r__default.default.createElement(v,{font:n.primary.xs,color:e.neutrals.tint_800},i)))};var L=({colors:o})=>r__default.default.createElement(y,null,o.map(function(i){return r__default.default.createElement(t,{color:i.color,title:i.name})}));var H=({colors:o})=>r__default.default.createElement(y,null,r__default.default.createElement(t,{color:o.tint_50,title:"50"}),r__default.default.createElement(t,{color:o.tint_100,title:"100"}),r__default.default.createElement(t,{color:o.tint_200,title:"200"}),r__default.default.createElement(t,{color:o.tint_300,title:"300"}),r__default.default.createElement(t,{color:o.tint_400,title:"400"}),r__default.default.createElement(t,{color:o.tint_500,title:"500"}),r__default.default.createElement(t,{color:o.tint_600,title:"600"}),r__default.default.createElement(t,{color:o.tint_700,title:"700"}),r__default.default.createElement(t,{color:o.tint_800,title:"800"}),r__default.default.createElement(t,{color:o.tint_900,title:"900"}),r__default.default.createElement(t,{color:o.tint_950,title:"950"}));var h=m__default.default.div`
  display: flex;
  flex-direction: column;
`,w=m__default.default.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${o=>o.color};
  padding-bottom: 1.5rem;
`,T=m__default.default.div`
  font: ${o=>o.font};
  color: ${o=>o.color};
`,P=m__default.default.div`
  margin-bottom: 5rem;
`;var A=({title:o,children:i})=>{let n=l(),e=s();return r__default.default.createElement(h,null,r__default.default.createElement(w,{color:e.neutrals.tint_500},r__default.default.createElement(T,{font:n.primary.xl,color:e.neutrals.tint_950},o)),r__default.default.createElement(P,null,i))};var I=m__default.default.div`
  display: flex;
  flex-direction: column;
`,_=m__default.default.div`
  font: ${o=>o.font};
  margin-bottom: 1rem;
  color: ${o=>o.color};
`,D=m__default.default.div`
  margin-bottom: 1rem;
`;var V=({caption:o,children:i})=>{let n=l(),e=s();return r__default.default.createElement(I,null,r__default.default.createElement(_,{font:n.primary.sm,color:e.neutrals.tint_900},o),r__default.default.createElement(D,null,i))};var F=m__default.default.div`
  font: ${o=>o.font};
`;var B=({text:o,font:i})=>r__default.default.createElement(F,{font:i},o);

exports.StorybookUiAdditionalColorList = L;
exports.StorybookUiColor = t;
exports.StorybookUiElement = A;
exports.StorybookUiFont = B;
exports.StorybookUiItem = V;
exports.StorybookUiThemeColorList = H;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=storybook.js.map