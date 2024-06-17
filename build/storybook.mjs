import { v, u as u$1 } from './chunk-HKAAOGQK.mjs';
import i from 'react';
import e from 'styled-components';

var d=e.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,f=e.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`,S=e.div`
  flex-grow: 1;
  min-width: 80px;
`,b=e.div`
  background: ${o=>o.color};
  width: 100%;
  height: 2.5rem;
  margin-bottom: 0.5rem;
`,U=e.div``,x=e.div`
  font: ${o=>o.font};
  color: ${o=>o.color};
`,k=e.div`
  margin-top: 0.25rem;
  font: ${o=>o.font};
  color: ${o=>o.color};
`;var r=({title:o,color:t})=>{let s=v(),a=u$1();return i.createElement(S,null,i.createElement(b,{color:t}),i.createElement(U,null,i.createElement(x,{font:s.primary.sm.normal,color:a.neutrals.tint_800},o),i.createElement(k,{font:s.primary.xs.normal,color:a.neutrals.tint_800},t)))};var A=({colors:o})=>i.createElement(i.Fragment,null,o.map(function(t){return i.createElement(f,null,i.createElement(r,{color:t.color,title:t.name}))}));var $=({colors:o})=>i.createElement(d,null,i.createElement(r,{color:o.tint_50,title:"50"}),i.createElement(r,{color:o.tint_100,title:"100"}),i.createElement(r,{color:o.tint_200,title:"200"}),i.createElement(r,{color:o.tint_300,title:"300"}),i.createElement(r,{color:o.tint_400,title:"400"}),i.createElement(r,{color:o.tint_500,title:"500"}),i.createElement(r,{color:o.tint_600,title:"600"}),i.createElement(r,{color:o.tint_700,title:"700"}),i.createElement(r,{color:o.tint_800,title:"800"}),i.createElement(r,{color:o.tint_900,title:"900"}),i.createElement(r,{color:o.tint_950,title:"950"}));var I=e.div`
  display: flex;
  flex-direction: column;
`,w=e.div`
  margin-bottom: 5rem;
`;var N=({title:o,children:t})=>{v();u$1();return i.createElement(I,null,i.createElement(w,null,t))};var u=e.div`
  display: flex;
  flex-direction: column;
`,P=e.div`
  margin-bottom: 1rem;
`;var V=({caption:o,children:t})=>{v();u$1();return i.createElement(u,null,i.createElement(P,null,t))};var G=e.div`
  font: ${o=>o.font};
`;var q=({text:o,font:t})=>i.createElement(G,{font:t},o);var L=e.div`
  display: flex;
  flex-flow: row wrap;
`,_=e.div`
  display: flex;
  flex-flow: row wrap;
`,D=e.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 calc(20% - 10px);
  min-width: 300px;
  margin: 0 10px 30px 0;
`,F=e.div`
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
`,T=e.div`
  margin-left: 10px;
  line-height: 1.2;
  text-transform: lowercase;
  color: #2e3438;
`;var z=({children:o,...t})=>i.createElement(L,null,i.createElement(_,{...t,className:"docblock-icongallery sb-unstyled"},o)),B=({name:o,children:t})=>i.createElement(D,null,i.createElement(F,null,t),i.createElement(T,null,o));

export { A as StorybookUiAdditionalColorList, r as StorybookUiColor, N as StorybookUiElement, q as StorybookUiFont, z as StorybookUiIconGallery, B as StorybookUiIconGalleryItem, V as StorybookUiItem, $ as StorybookUiThemeColorList };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=storybook.mjs.map