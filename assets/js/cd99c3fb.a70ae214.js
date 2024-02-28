"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[18],{5680:(e,a,n)=>{n.d(a,{xA:()=>g,yg:()=>m});var i=n(6540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,i,l=function(e,a){if(null==e)return{};var n,i,l={},t=Object.keys(e);for(i=0;i<t.length;i++)n=t[i],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)n=t[i],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=i.createContext({}),o=function(e){var a=i.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},g=function(e){var a=o(e.components);return i.createElement(p.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},d=i.forwardRef((function(e,a){var n=e.components,l=e.mdxType,t=e.originalType,p=e.parentName,g=r(e,["components","mdxType","originalType","parentName"]),u=o(n),d=l,m=u["".concat(p,".").concat(d)]||u[d]||c[d]||t;return n?i.createElement(m,s(s({ref:a},g),{},{components:n})):i.createElement(m,s({ref:a},g))}));function m(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var t=n.length,s=new Array(t);s[0]=d;var r={};for(var p in a)hasOwnProperty.call(a,p)&&(r[p]=a[p]);r.originalType=e,r[u]="string"==typeof e?e:l,s[1]=r;for(var o=2;o<t;o++)s[o]=n[o];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8460:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>t,metadata:()=>r,toc:()=>o});var i=n(8168),l=(n(6540),n(5680));const t={id:"client_aliases",title:"Aliases",sidebar_label:"Aliases"},s=void 0,r={unversionedId:"client_aliases",id:"client_aliases",title:"Aliases",description:"Aliases are general package versions that point to exact package versions.",source:"@site/docs/client_aliases.md",sourceDirName:".",slug:"/client_aliases",permalink:"/docs/client_aliases",draft:!1,tags:[],version:"current",frontMatter:{id:"client_aliases",title:"Aliases",sidebar_label:"Aliases"},sidebar:"mainSidebar",previous:{title:"Import Maps",permalink:"/docs/client_import_maps"},next:{title:"Putting It All Together",permalink:"/docs/client_putting_it_all_together"}},p={},o=[{value:"Application aliases",id:"application-aliases",level:2},{value:"Using an aliased version",id:"using-an-aliased-version",level:3},{value:"Publishing an alias",id:"publishing-an-alias",level:3},{value:"Updating an alias",id:"updating-an-alias",level:3},{value:"NPM aliases",id:"npm-aliases",level:2},{value:"Using an aliased version",id:"using-an-aliased-version-1",level:3},{value:"Publishing an alias",id:"publishing-an-alias-1",level:3},{value:"Updating an alias",id:"updating-an-alias-1",level:3},{value:"Import map aliases",id:"import-map-aliases",level:2},{value:"Using an aliased version",id:"using-an-aliased-version-2",level:3},{value:"Publishing an alias",id:"publishing-an-alias-2",level:3},{value:"Updating an alias",id:"updating-an-alias-2",level:3}],g={toc:o},u="wrapper";function c(e){let{components:a,...n}=e;return(0,l.yg)(u,(0,i.A)({},g,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Aliases are general package versions that point to exact package versions."),(0,l.yg)("p",null,"The need to redeploy your application every time you update a client side bundle can be avoided by using aliasing."),(0,l.yg)("p",null,"In an application, we can reference an alias instead of a specific version and whenever we need to, we can update our alias and our application will automatically be updated."),(0,l.yg)("p",null,"For example, an alias by the name ",(0,l.yg)("inlineCode",{parentName:"p"},"v1")," might be set up to point to the exact package version ",(0,l.yg)("inlineCode",{parentName:"p"},"1.0.0"),". The alias itself is independent of the version and since it is just an HTTP redirect, can be easily updated to point at a new version. "),(0,l.yg)("h2",{id:"application-aliases"},"Application aliases"),(0,l.yg)("h3",{id:"using-an-aliased-version"},"Using an aliased version"),(0,l.yg)("p",null,"Creating aliases allows you to include the alias script tags in your application with no need to update the script tag every time you publish a new bundle version."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'<script type="module" defer src="https://myeikserver.com/pkg/my-app/v1/index.js">\n')),(0,l.yg)("h3",{id:"publishing-an-alias"},"Publishing an alias"),(0,l.yg)("p",null,"You can create an alias by running the package-alias command"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"eik package-alias <app name> <version> <alias>\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sh"},"eik package-alias my-app 1.0.0 1\n")),(0,l.yg)("h3",{id:"updating-an-alias"},"Updating an alias"),(0,l.yg)("p",null,"After publishing a new version of a package ",(0,l.yg)("inlineCode",{parentName:"p"},"1.0.1")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sh"},"eik version patch\neik publish\n")),(0,l.yg)("p",null,"The alias can then be updated with the same alias command as before giving it the newly published version"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sh"},"eik package-alias my-app 1.0.1 1\n")),(0,l.yg)("p",null,"And now ",(0,l.yg)("inlineCode",{parentName:"p"},"v1")," will point to ",(0,l.yg)("inlineCode",{parentName:"p"},"1.0.1")," instead of ",(0,l.yg)("inlineCode",{parentName:"p"},"1.0.0")),(0,l.yg)("h2",{id:"npm-aliases"},"NPM aliases"),(0,l.yg)("h3",{id:"using-an-aliased-version-1"},"Using an aliased version"),(0,l.yg)("p",null,"Creating aliases for NPM packages that have an Eik mirror allows you to include the alias script tags in your application without needing to update the script tag every time you publish a new bundle version."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'<script type="module" defer src="https://myeikserver.com/npm/lodash/v4/index.js">\n')),(0,l.yg)("h3",{id:"publishing-an-alias-1"},"Publishing an alias"),(0,l.yg)("p",null,"You can create an alias by running the npm-alias command"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"eik npm-alias <npm package name> <version> <alias>\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sh"},"eik npm-alias lodash 4.17.18 4\n")),(0,l.yg)("h3",{id:"updating-an-alias-1"},"Updating an alias"),(0,l.yg)("p",null,"After publishing a new version of the NPM package the alias can then be updated with the same alias command as before giving it the newly published version"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sh"},"eik npm-alias lodash 4.17.19 4\n")),(0,l.yg)("p",null,"And now ",(0,l.yg)("inlineCode",{parentName:"p"},"v4")," will point to ",(0,l.yg)("inlineCode",{parentName:"p"},"4.17.19")," instead of ",(0,l.yg)("inlineCode",{parentName:"p"},"4.17.18")),(0,l.yg)("h2",{id:"import-map-aliases"},"Import map aliases"),(0,l.yg)("h3",{id:"using-an-aliased-version-2"},"Using an aliased version"),(0,l.yg)("p",null,"Creating import map aliases allows you to include the import map alias in your application's Eik config without the need to update it every time you publish a new version of the import map."),(0,l.yg)("h3",{id:"publishing-an-alias-2"},"Publishing an alias"),(0,l.yg)("p",null,"You can create an alias by running the map-alias command"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"eik map-alias <map name> <version> <alias>\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sh"},"eik map-alias my-map 1.0.0 1\n")),(0,l.yg)("h3",{id:"updating-an-alias-2"},"Updating an alias"),(0,l.yg)("p",null,"After publishing a new version of an import map"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sh"},"eik map my-map 1.0.1 ./import-map.json\n")),(0,l.yg)("p",null,"The alias can then be updated with the same alias command as before giving it the newly published version"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sh"},"eik map-alias my-map 1.0.1 1\n")),(0,l.yg)("p",null,"And now ",(0,l.yg)("inlineCode",{parentName:"p"},"v1")," will point to ",(0,l.yg)("inlineCode",{parentName:"p"},"1.0.1")," instead of ",(0,l.yg)("inlineCode",{parentName:"p"},"1.0.0")))}c.isMDXComponent=!0}}]);