import { u as u$1, t as t$1 } from './chunk-QD2QVT2G.mjs';
import r from 'react';
import s from 'styled-components';

var y=s.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`,U=s.div`
  flex-grow: 1;
`,d=s.div`
  background: ${o=>o.color};
  box-shadow: rgba(39, 51, 68, 0.1) 0 4px 7px;
  border-radius: 8px;
  width: 100%;
  height: 2.5rem;
  margin-bottom: 0.5rem;
`,a=s.div``,c=s.div`
  font: ${o=>o.font};
  color: ${o=>o.color};
`,C=s.div`
  margin-top: 0.25rem;
  font: ${o=>o.font};
  color: ${o=>o.color};
`;var t=({title:o,color:i})=>{let n=u$1(),e=t$1();return r.createElement(U,null,r.createElement(d,{color:i}),r.createElement(a,null,r.createElement(c,{font:n.primary.sm,color:e.neutrals.tint_800},o),r.createElement(C,{font:n.primary.xs,color:e.neutrals.tint_800},i)))};var T=({colors:o})=>r.createElement(y,null,o.map(function(i){return r.createElement(t,{color:i.color,title:i.name})}));var D=({colors:o})=>r.createElement(y,null,r.createElement(t,{color:o.tint_50,title:"50"}),r.createElement(t,{color:o.tint_100,title:"100"}),r.createElement(t,{color:o.tint_200,title:"200"}),r.createElement(t,{color:o.tint_300,title:"300"}),r.createElement(t,{color:o.tint_400,title:"400"}),r.createElement(t,{color:o.tint_500,title:"500"}),r.createElement(t,{color:o.tint_600,title:"600"}),r.createElement(t,{color:o.tint_700,title:"700"}),r.createElement(t,{color:o.tint_800,title:"800"}),r.createElement(t,{color:o.tint_900,title:"900"}),r.createElement(t,{color:o.tint_950,title:"950"}));var v=s.div`
  display: flex;
  flex-direction: column;
`,g=s.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${o=>o.color};
  padding-bottom: 1.5rem;
`,w=s.div`
  font: ${o=>o.font};
  color: ${o=>o.color};
`,u=s.div`
  margin-bottom: 5rem;
`;var $=({title:o,children:i})=>{let n=u$1(),e=t$1();return r.createElement(v,null,r.createElement(g,{color:e.neutrals.tint_500},r.createElement(w,{font:n.primary.xl,color:e.neutrals.tint_950},o)),r.createElement(u,null,i))};var P=s.div`
  display: flex;
  flex-direction: column;
`,h=s.div`
  font: ${o=>o.font};
  margin-bottom: 1rem;
  color: ${o=>o.color};
`,I=s.div`
  margin-bottom: 1rem;
`;var L=({caption:o,children:i})=>{let n=u$1(),e=t$1();return r.createElement(P,null,r.createElement(h,{font:n.primary.sm,color:e.neutrals.tint_900},o),r.createElement(I,null,i))};var _=s.div`
  font: ${o=>o.font};
`;var A=({text:o,font:i})=>r.createElement(_,{font:i},o);

export { T as StorybookUiAdditionalColorList, t as StorybookUiColor, $ as StorybookUiElement, A as StorybookUiFont, L as StorybookUiItem, D as StorybookUiThemeColorList };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=storybook.mjs.map