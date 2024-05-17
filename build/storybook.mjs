import { v, u as u$1 } from './chunk-2YXYRUJM.mjs';
import r from 'react';
import l from 'styled-components';

var y=l.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,f=l.div`
  flex-grow: 1;
  min-width: 80px;
`,b=l.div`
  background: ${o=>o.color};
  width: 100%;
  height: 2.5rem;
  margin-bottom: 0.5rem;
`,k=l.div``,S=l.div`
  font: ${o=>o.font};
  color: ${o=>o.color};
`,U=l.div`
  margin-top: 0.25rem;
  font: ${o=>o.font};
  color: ${o=>o.color};
`;var t=({title:o,color:i})=>{let p=v(),s=u$1();return r.createElement(f,null,r.createElement(b,{color:i}),r.createElement(k,null,r.createElement(S,{font:p.primary.sm,color:s.neutrals.tint_800},o),r.createElement(U,{font:p.primary.xs,color:s.neutrals.tint_800},i)))};var h=({colors:o})=>r.createElement(y,null,o.map(function(i){return r.createElement(t,{color:i.color,title:i.name})}));var I=({colors:o})=>r.createElement(y,null,r.createElement(t,{color:o.tint_50,title:"50"}),r.createElement(t,{color:o.tint_100,title:"100"}),r.createElement(t,{color:o.tint_200,title:"200"}),r.createElement(t,{color:o.tint_300,title:"300"}),r.createElement(t,{color:o.tint_400,title:"400"}),r.createElement(t,{color:o.tint_500,title:"500"}),r.createElement(t,{color:o.tint_600,title:"600"}),r.createElement(t,{color:o.tint_700,title:"700"}),r.createElement(t,{color:o.tint_800,title:"800"}),r.createElement(t,{color:o.tint_900,title:"900"}),r.createElement(t,{color:o.tint_950,title:"950"}));var d=l.div`
  display: flex;
  flex-direction: column;
`,a=l.div`
  margin-bottom: 5rem;
`;var _=({title:o,children:i})=>{v();u$1();return r.createElement(d,null,r.createElement(a,null,i))};var w=l.div`
  display: flex;
  flex-direction: column;
`,P=l.div`
  margin-bottom: 1rem;
`;var D=({caption:o,children:i})=>{v();u$1();return r.createElement(w,null,r.createElement(P,null,i))};var u=l.div`
  font: ${o=>o.font};
`;var F=({text:o,font:i})=>r.createElement(u,{font:i},o);

export { h as StorybookUiAdditionalColorList, t as StorybookUiColor, _ as StorybookUiElement, F as StorybookUiFont, D as StorybookUiItem, I as StorybookUiThemeColorList };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=storybook.mjs.map