'use strict';

var chunkLC4A3LMM_js = require('./chunk-LC4A3LMM.js');
var n = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var n__default = /*#__PURE__*/_interopDefault(n);

var p=r=>{let t=({children:o})=>n__default.default.createElement(n__default.default.Fragment,null," ",o," ");return r.reduce((o,[e,l={}])=>({children:a})=>n__default.default.createElement(o,null,n__default.default.createElement(e,{...l},a)),t)};var d=({name:r,alternates:t})=>t.find(o=>o.name===r);var m=({name:r,colors:t,fallback:o})=>{let e=t.find(l=>l.name===r);return e?e.color:o};

Object.defineProperty(exports, "orDefault", {
	enumerable: true,
	get: function () { return chunkLC4A3LMM_js.a; }
});
exports.BuildProvidersTree = p;
exports.LookupAdditionalColor = m;
exports.LookupAlternate = d;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=tool.js.map