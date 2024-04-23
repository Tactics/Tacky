'use strict';

var chunkLC4A3LMM_js = require('./chunk-LC4A3LMM.js');
var n = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var n__default = /*#__PURE__*/_interopDefault(n);

var a=r=>{let e=({children:o})=>n__default.default.createElement(n__default.default.Fragment,null," ",o," ");return r.reduce((o,[t,l={}])=>({children:i})=>n__default.default.createElement(o,null,n__default.default.createElement(t,{...l},i)),e)};var d=({name:r,alternates:e})=>e.find(o=>o.name===r);var p=({name:r,colors:e,fallback:o})=>{let t=e.find(l=>l.name===r);return t?t.color:o};

Object.defineProperty(exports, "orDefault", {
	enumerable: true,
	get: function () { return chunkLC4A3LMM_js.a; }
});
exports.BuildProvidersTree = a;
exports.LookupAdditionalColor = p;
exports.LookupAlternate = d;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=tool.js.map