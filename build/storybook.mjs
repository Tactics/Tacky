import { v, u } from './chunk-2YXYRUJM.mjs';
import i from 'react';
import n from 'styled-components';

var a=n.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,d=n.div`
  flex-grow: 1;
  min-width: 80px;
`,f=n.div`
  background: ${o=>o.color};
  width: 100%;
  height: 2.5rem;
  margin-bottom: 0.5rem;
`,S=n.div``,b=n.div`
  font: ${o=>o.font};
  color: ${o=>o.color};
`,U=n.div`
  margin-top: 0.25rem;
  font: ${o=>o.font};
  color: ${o=>o.color};
`;var r=({title:o,color:t})=>{let s=v(),c=u();return i.createElement(d,null,i.createElement(f,{color:t}),i.createElement(S,null,i.createElement(b,{font:s.primary.sm,color:c.neutrals.tint_800},o),i.createElement(U,{font:s.primary.xs,color:c.neutrals.tint_800},t)))};var T=({colors:o})=>i.createElement(a,null,o.map(function(t){return i.createElement(r,{color:t.color,title:t.name})}));var $=({colors:o})=>i.createElement(a,null,i.createElement(r,{color:o.tint_50,title:"50"}),i.createElement(r,{color:o.tint_100,title:"100"}),i.createElement(r,{color:o.tint_200,title:"200"}),i.createElement(r,{color:o.tint_300,title:"300"}),i.createElement(r,{color:o.tint_400,title:"400"}),i.createElement(r,{color:o.tint_500,title:"500"}),i.createElement(r,{color:o.tint_600,title:"600"}),i.createElement(r,{color:o.tint_700,title:"700"}),i.createElement(r,{color:o.tint_800,title:"800"}),i.createElement(r,{color:o.tint_900,title:"900"}),i.createElement(r,{color:o.tint_950,title:"950"}));var C=n.div`
  display: flex;
  flex-direction: column;
`,I=n.div`
  margin-bottom: 5rem;
`;var A=({title:o,children:t})=>{v();u();return i.createElement(C,null,i.createElement(I,null,t))};var g=n.div`
  display: flex;
  flex-direction: column;
`,h=n.div`
  margin-bottom: 1rem;
`;var N=({caption:o,children:t})=>{v();u();return i.createElement(g,null,i.createElement(h,null,t))};var P=n.div`
  font: ${o=>o.font};
`;var j=({text:o,font:t})=>i.createElement(P,{font:t},o);var G=n.div`
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
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
`,F=n.div`
  margin-left: 10px;
  line-height: 1.2;
`;var q=({children:o,...t})=>i.createElement(G,null,i.createElement(L,{...t,className:"docblock-icongallery sb-unstyled"},o)),z=({name:o,children:t})=>i.createElement(_,null,i.createElement(D,null,t),i.createElement(F,null,o));

export { T as StorybookUiAdditionalColorList, r as StorybookUiColor, A as StorybookUiElement, j as StorybookUiFont, q as StorybookUiIconGallery, z as StorybookUiIconGalleryItem, N as StorybookUiItem, $ as StorybookUiThemeColorList };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=storybook.mjs.map