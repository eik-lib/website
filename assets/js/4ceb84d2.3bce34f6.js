"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[815],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,m=c["".concat(p,".").concat(d)]||c[d]||f[d]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[c]="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5155:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return c}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],a={id:"mapping_plugins",title:"Build Tool Plugins",sidebar_label:"Build Tool Plugins"},p=void 0,u={unversionedId:"mapping_plugins",id:"mapping_plugins",title:"Build Tool Plugins",description:"Eik provides a set of build tool plugins that cater for applying Import Maps ahead of time.",source:"@site/docs/mapping_plugins.md",sourceDirName:".",slug:"/mapping_plugins",permalink:"/docs/mapping_plugins",draft:!1,tags:[],version:"current",frontMatter:{id:"mapping_plugins",title:"Build Tool Plugins",sidebar_label:"Build Tool Plugins"},sidebar:"mainSidebar",previous:{title:"Browser Support",permalink:"/docs/mapping_browser"},next:{title:"Bundling",permalink:"/docs/mapping_bundling"}},s={},c=[{value:"Available plugins",id:"available-plugins",level:2}],f={toc:c},d="wrapper";function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)(d,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Eik provides a set of build tool plugins that cater for applying Import Maps ahead of time. "),(0,o.kt)("p",null,"The common functionallity of these plugins is that they will, if found, load the ",(0,o.kt)("inlineCode",{parentName:"p"},"eik.json")," in a project and fetch the defined Import Maps and then apply these to the code the build tool is processing."),(0,o.kt)("p",null,"When using a build tool to apply an Import Map ahead of time, the build process should be run before a module is published to an Eik server."),(0,o.kt)("h2",{id:"available-plugins"},"Available plugins"),(0,o.kt)("p",null,"The following build tool plugins are available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/eik-lib/import-map-rollup-plugin"},"Rollup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/eik-lib/import-map-postcss-plugin"},"PostCSS"))))}m.isMDXComponent=!0}}]);