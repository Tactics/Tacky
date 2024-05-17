import { v as v$1, u as u$1 } from './chunk-2YXYRUJM.mjs';
import r from 'react';
import m from 'styled-components';

var y=m.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,k=m.div`
  flex-grow: 1;
  min-width: 80px;
`,S=m.div`
  background: ${o=>o.color};
  width: 100%;
  height: 2.5rem;
  margin-bottom: 0.5rem;
`,U=m.div``,d=m.div`
  font: ${o=>o.font};
  color: ${o=>o.color};
`,C=m.div`
  margin-top: 0.25rem;
  font: ${o=>o.font};
  color: ${o=>o.color};
`;var t=({title:o,color:i})=>{let s=v$1(),e=u$1();return r.createElement(k,null,r.createElement(S,{color:i}),r.createElement(U,null,r.createElement(d,{font:s.primary.sm,color:e.neutrals.tint_800},o),r.createElement(C,{font:s.primary.xs,color:e.neutrals.tint_800},i)))};var I=({colors:o})=>r.createElement(y,null,o.map(function(i){return r.createElement(t,{color:i.color,title:i.name})}));var T=({colors:o})=>r.createElement(y,null,r.createElement(t,{color:o.tint_50,title:"50"}),r.createElement(t,{color:o.tint_100,title:"100"}),r.createElement(t,{color:o.tint_200,title:"200"}),r.createElement(t,{color:o.tint_300,title:"300"}),r.createElement(t,{color:o.tint_400,title:"400"}),r.createElement(t,{color:o.tint_500,title:"500"}),r.createElement(t,{color:o.tint_600,title:"600"}),r.createElement(t,{color:o.tint_700,title:"700"}),r.createElement(t,{color:o.tint_800,title:"800"}),r.createElement(t,{color:o.tint_900,title:"900"}),r.createElement(t,{color:o.tint_950,title:"950"}));var c=m.div`
  display: flex;
  flex-direction: column;
`,x=m.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${o=>o.color};
  padding-bottom: 1.5rem;
`,v=m.div`
  font: ${o=>o.font};
  color: ${o=>o.color};
`,w=m.div`
  margin-bottom: 5rem;
`;var D=({title:o,children:i})=>{let s=v$1(),e=u$1();return r.createElement(c,null,r.createElement(x,{color:e.neutrals.tint_500},r.createElement(v,{font:s.primary.xl,color:e.neutrals.tint_950},o)),r.createElement(w,null,i))};var u=m.div`
  display: flex;
  flex-direction: column;
`,P=m.div`
  margin-bottom: 1rem;
`;var L=({caption:o,children:i})=>{v$1();u$1();return r.createElement(u,null,r.createElement(P,null,i))};var _=m.div`
  font: ${o=>o.font};
`;var H=({text:o,font:i})=>r.createElement(_,{font:i},o);

export { I as StorybookUiAdditionalColorList, t as StorybookUiColor, D as StorybookUiElement, H as StorybookUiFont, L as StorybookUiItem, T as StorybookUiThemeColorList };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=storybook.mjs.map