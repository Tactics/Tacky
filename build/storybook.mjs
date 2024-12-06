import {v as v$1,u as u$1}from'./chunk-IJRHB6A6.mjs';import i from'styled-components';import {jsxs,jsx,Fragment}from'react/jsx-runtime';var d=i.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,f=i.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`,S=i.div`
  flex-grow: 1;
  min-width: 80px;
`,b=i.div`
  background: ${o=>o.color};
  width: 100%;
  height: 2.5rem;
  margin-bottom: 0.5rem;
`,U=i.div``,k=i.div`
  font: ${o=>o.font};
  color: ${o=>o.color};
`,x=i.div`
  margin-top: 0.25rem;
  font: ${o=>o.font};
  color: ${o=>o.color};
`;var r=({title:o,color:t})=>{let y=v$1(),a=u$1();return jsxs(S,{children:[jsx(b,{color:t}),jsxs(U,{children:[jsx(k,{font:y.primary.sm.normal,color:a.neutrals.tint_800,children:o}),jsx(x,{font:y.primary.xs.normal,color:a.neutrals.tint_800,children:t})]})]})};var A=({colors:o})=>jsx(Fragment,{children:o.map(function(t){return jsx(f,{children:jsx(r,{color:t.color,title:t.name})})})});var N=({colors:o})=>jsxs(d,{children:[jsx(r,{color:o.tint_50,title:"50"}),jsx(r,{color:o.tint_100,title:"100"}),jsx(r,{color:o.tint_200,title:"200"}),jsx(r,{color:o.tint_300,title:"300"}),jsx(r,{color:o.tint_400,title:"400"}),jsx(r,{color:o.tint_500,title:"500"}),jsx(r,{color:o.tint_600,title:"600"}),jsx(r,{color:o.tint_700,title:"700"}),jsx(r,{color:o.tint_800,title:"800"}),jsx(r,{color:o.tint_900,title:"900"}),jsx(r,{color:o.tint_950,title:"950"})]});var w=i.div`
  display: flex;
  flex-direction: column;
`,v=i.div`
  margin-bottom: 5rem;
`;var E=({title:o,children:t})=>{v$1();u$1();return jsx(w,{children:jsx(v,{children:t})})};var h=i.div`
  display: flex;
  flex-direction: column;
`,u=i.div`
  margin-bottom: 1rem;
`;var q=({caption:o,children:t})=>{v$1();u$1();return jsx(h,{children:jsx(u,{children:t})})};var L=i.div`
  font: ${o=>o.font};
`;var B=({text:o,font:t})=>jsx(L,{font:t,children:o});var R=i.div`
  display: flex;
  flex-flow: row wrap;
`,_=i.div`
  display: flex;
  flex-flow: row wrap;
`,D=i.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 calc(20% - 10px);
  min-width: 300px;
  margin: 0 10px 30px 0;
`,F=i.div`
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
`,T=i.div`
  margin-left: 10px;
  line-height: 1.2;
  text-transform: lowercase;
  color: #2e3438;
`;var J=({children:o,...t})=>jsx(R,{children:jsx(_,{...t,className:"docblock-icongallery sb-unstyled",children:o})}),K=({name:o,children:t})=>jsxs(D,{children:[jsx(F,{children:t}),jsx(T,{children:o})]});export{A as StorybookUiAdditionalColorList,r as StorybookUiColor,E as StorybookUiElement,B as StorybookUiFont,J as StorybookUiIconGallery,K as StorybookUiIconGalleryItem,q as StorybookUiItem,N as StorybookUiThemeColorList};//# sourceMappingURL=storybook.mjs.map
//# sourceMappingURL=storybook.mjs.map