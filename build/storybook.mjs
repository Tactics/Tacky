import { s as s$1, r as r$1 } from './chunk-3JSS3KQZ.mjs';
import r, { useContext } from 'react';
import m from 'styled-components';

var y=m.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`,d=m.div`
  flex-grow: 1;
`,C=m.div`
  background: ${o=>o.color};
  box-shadow: rgba(39, 51, 68, 0.1) 0 4px 7px;
  border-radius: 8px;
  width: 100%;
  height: 2.5rem;
  margin-bottom: 0.5rem;
`,x=m.div``,u=m.div`
  font: ${o=>o.font};
  color: ${o=>o.color};
`,v=m.div`
  margin-top: 0.25rem;
  font: ${o=>o.font};
  color: ${o=>o.color};
`;var f=()=>{try{return useContext(s$1)}catch{return r$1}};var l=()=>f().typography.fonts;var s=()=>f().colors;var t=({title:o,color:i})=>{let n=l(),e=s();return r.createElement(d,null,r.createElement(C,{color:i}),r.createElement(x,null,r.createElement(u,{font:n.primary.sm,color:e.neutrals.tint_800},o),r.createElement(v,{font:n.primary.xs,color:e.neutrals.tint_800},i)))};var L=({colors:o})=>r.createElement(y,null,o.map(function(i){return r.createElement(t,{color:i.color,title:i.name})}));var H=({colors:o})=>r.createElement(y,null,r.createElement(t,{color:o.tint_50,title:"50"}),r.createElement(t,{color:o.tint_100,title:"100"}),r.createElement(t,{color:o.tint_200,title:"200"}),r.createElement(t,{color:o.tint_300,title:"300"}),r.createElement(t,{color:o.tint_400,title:"400"}),r.createElement(t,{color:o.tint_500,title:"500"}),r.createElement(t,{color:o.tint_600,title:"600"}),r.createElement(t,{color:o.tint_700,title:"700"}),r.createElement(t,{color:o.tint_800,title:"800"}),r.createElement(t,{color:o.tint_900,title:"900"}),r.createElement(t,{color:o.tint_950,title:"950"}));var h=m.div`
  display: flex;
  flex-direction: column;
`,w=m.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${o=>o.color};
  padding-bottom: 1.5rem;
`,T=m.div`
  font: ${o=>o.font};
  color: ${o=>o.color};
`,P=m.div`
  margin-bottom: 5rem;
`;var A=({title:o,children:i})=>{let n=l(),e=s();return r.createElement(h,null,r.createElement(w,{color:e.neutrals.tint_500},r.createElement(T,{font:n.primary.xl,color:e.neutrals.tint_950},o)),r.createElement(P,null,i))};var I=m.div`
  display: flex;
  flex-direction: column;
`,_=m.div`
  font: ${o=>o.font};
  margin-bottom: 1rem;
  color: ${o=>o.color};
`,D=m.div`
  margin-bottom: 1rem;
`;var V=({caption:o,children:i})=>{let n=l(),e=s();return r.createElement(I,null,r.createElement(_,{font:n.primary.sm,color:e.neutrals.tint_900},o),r.createElement(D,null,i))};var F=m.div`
  font: ${o=>o.font};
`;var B=({text:o,font:i})=>r.createElement(F,{font:i},o);

export { L as StorybookUiAdditionalColorList, t as StorybookUiColor, A as StorybookUiElement, B as StorybookUiFont, V as StorybookUiItem, H as StorybookUiThemeColorList };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=storybook.mjs.map