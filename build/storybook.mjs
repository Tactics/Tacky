import { v, u as u$1 } from './chunk-2YXYRUJM.mjs';
import e from 'react';
import n from 'styled-components';

var a=n.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,f=n.div`
  flex-grow: 1;
  min-width: 80px;
`,S=n.div`
  background: ${o=>o.color};
  width: 100%;
  height: 2.5rem;
  margin-bottom: 0.5rem;
`,b=n.div``,U=n.div`
  font: ${o=>o.font};
  color: ${o=>o.color};
`,x=n.div`
  margin-top: 0.25rem;
  font: ${o=>o.font};
  color: ${o=>o.color};
`;var r=({title:o,color:t})=>{let s=v(),c=u$1();return e.createElement(f,null,e.createElement(S,{color:t}),e.createElement(b,null,e.createElement(U,{font:s.primary.sm,color:c.neutrals.tint_800},o),e.createElement(x,{font:s.primary.xs,color:c.neutrals.tint_800},t)))};var T=({colors:o})=>e.createElement(e.Fragment,null,o.map(function(t){return e.createElement(a,null,e.createElement(r,{color:t.color,title:t.name}))}));var $=({colors:o})=>e.createElement(a,null,e.createElement(r,{color:o.tint_50,title:"50"}),e.createElement(r,{color:o.tint_100,title:"100"}),e.createElement(r,{color:o.tint_200,title:"200"}),e.createElement(r,{color:o.tint_300,title:"300"}),e.createElement(r,{color:o.tint_400,title:"400"}),e.createElement(r,{color:o.tint_500,title:"500"}),e.createElement(r,{color:o.tint_600,title:"600"}),e.createElement(r,{color:o.tint_700,title:"700"}),e.createElement(r,{color:o.tint_800,title:"800"}),e.createElement(r,{color:o.tint_900,title:"900"}),e.createElement(r,{color:o.tint_950,title:"950"}));var C=n.div`
  display: flex;
  flex-direction: column;
`,I=n.div`
  margin-bottom: 5rem;
`;var A=({title:o,children:t})=>{v();u$1();return e.createElement(C,null,e.createElement(I,null,t))};var g=n.div`
  display: flex;
  flex-direction: column;
`,u=n.div`
  margin-bottom: 1rem;
`;var N=({caption:o,children:t})=>{v();u$1();return e.createElement(g,null,e.createElement(u,null,t))};var h=n.div`
  font: ${o=>o.font};
`;var j=({text:o,font:t})=>e.createElement(h,{font:t},o);var G=n.div`
  display: flex;
  flex-flow: row wrap;
`,L=n.div`
  display: flex;
  flex-flow: row wrap;
`,_=n.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 calc(20% - 10px);
  min-width: 300px;
  margin: 0 10px 30px 0;
`,D=n.div`
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
`,F=n.div`
  margin-left: 10px;
  line-height: 1.2;
  text-transform: lowercase;
  color: #2e3438;
`;var q=({children:o,...t})=>e.createElement(G,null,e.createElement(L,{...t,className:"docblock-icongallery sb-unstyled"},o)),z=({name:o,children:t})=>e.createElement(_,null,e.createElement(D,null,t),e.createElement(F,null,o));

export { T as StorybookUiAdditionalColorList, r as StorybookUiColor, A as StorybookUiElement, j as StorybookUiFont, q as StorybookUiIconGallery, z as StorybookUiIconGalleryItem, N as StorybookUiItem, $ as StorybookUiThemeColorList };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=storybook.mjs.map