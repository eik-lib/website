"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[338],{5680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>f});var o=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(r),d=n,f=c["".concat(l,".").concat(d)]||c[d]||u[d]||a;return r?o.createElement(f,p(p({ref:t},m),{},{components:r})):o.createElement(f,p({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,p[1]=i;for(var s=2;s<a;s++)p[s]=r[s];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3271:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=r(8168),n=(r(6540),r(5680));const a={id:"mapping_import_map",title:"Import Map",sidebar_label:"Import Map"},p=void 0,i={unversionedId:"mapping_import_map",id:"mapping_import_map",title:"Import Map",description:"A key concept in Eik is to align the dependents of a module to the same version. A part of this concept is Import Maps which makes it possible to map import statements in modules.",source:"@site/docs/mapping_import_map.md",sourceDirName:".",slug:"/mapping_import_map",permalink:"/docs/mapping_import_map",draft:!1,tags:[],version:"current",frontMatter:{id:"mapping_import_map",title:"Import Map",sidebar_label:"Import Map"},sidebar:"mainSidebar",previous:{title:"Caching",permalink:"/docs/overview_caching"},next:{title:"Browser Support",permalink:"/docs/mapping_browser"}},l={},s=[],m={toc:s},c="wrapper";function u(e){let{components:t,...r}=e;return(0,n.yg)(c,(0,o.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"A key concept in Eik is to align the dependents of a module to the same version. A part of this concept is ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/WICG/import-maps"},"Import Maps")," which makes it possible to map import statements in modules."),(0,n.yg)("p",null,"Import Maps are a fairly new concept and will hopefully be supported in browsers in the close future. Import Maps allow ",(0,n.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"},"ECMA Script Modules (ESM)"),' "bare" import specifiers, such as ',(0,n.yg)("inlineCode",{parentName:"p"},"import {html, render} from 'lit-html'")," which will throw when used in a browser, to work by being mapped to a relative or absolute URLs the browser can use to load the module."),(0,n.yg)("p",null,"In other words; in an ESM we can import a module like so:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"import {html, render} from 'lit-html';\n")),(0,n.yg)("p",null,"Then an Import Map can be loaded as following in the browser:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-html"},'<script type="importmap">\n{\n  "imports": {\n    "lit-html": "https://cdn.eik-server.com/npm/lit-html/v1/lit-html.js",\n  }\n}\n<\/script>\n')),(0,n.yg)("p",null,"When the Import Map is applied, our code will act as we have written:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"import * as lit from 'https://cdn.eik-server.com/npm/lit-html/v1/lit-html.js'\n")),(0,n.yg)("p",null,"Browser support for Import Maps is currently (October 2020) limited. There are polyfills available for Import Maps but its fully possible to apply Import Map to modules ahead of time through build tools. "),(0,n.yg)("p",null,"Eik does not dictate which strategy, a polyfill or ahead of time, is used for import mapping modules but we recommend that an organization aligns itself with the same strategy across its teams."),(0,n.yg)("p",null,"It is also worth keeping in mind that one is not locked to one strategy forever. An Import Map used to apply mapping ahead of time will work as intended in browsers the day there is full browser support for Import Maps."))}u.isMDXComponent=!0}}]);