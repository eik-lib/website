"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[418],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return h}});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),k=i,h=m["".concat(l,".").concat(k)]||m[k]||u[k]||r;return t?n.createElement(h,o(o({ref:a},c),{},{components:t})):n.createElement(h,o({ref:a},c))}));function h(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=k;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},9970:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],s={id:"overview_concepts",title:"Concepts",sidebar_label:"Concepts"},l=void 0,p={unversionedId:"overview_concepts",id:"overview_concepts",title:"Concepts",description:"Eik is for serving ESM and CSS but we use the term packages when we refer what is uploaded to an Eik server. A package can contain any set of files which are considered to be static assets on a web site. Despite being agnostic in its opinion about what a package can contain, Eik does have a package type definition which comes into play when organizing assets.",source:"@site/docs/overview_concepts.md",sourceDirName:".",slug:"/overview_concepts",permalink:"/docs/overview_concepts",draft:!1,tags:[],version:"current",frontMatter:{id:"overview_concepts",title:"Concepts",sidebar_label:"Concepts"},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/docs/overview"},next:{title:"Workflow",permalink:"/docs/overview_workflow"}},c={},m=[{value:"Package Types",id:"package-types",level:2},{value:"Eik Packages",id:"eik-packages",level:3},{value:"NPM Packages",id:"npm-packages",level:3},{value:"Import Maps",id:"import-maps",level:3},{value:"Naming and versioning",id:"naming-and-versioning",level:2},{value:"Aliasing",id:"aliasing",level:2},{value:"Aliasing and versioning",id:"aliasing-and-versioning",level:3}],u={toc:m},k="wrapper";function h(e){var a=e.components,t=(0,i.Z)(e,o);return(0,r.kt)(k,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Eik is for serving ESM and CSS but we use the term packages when we refer what is uploaded to an Eik server. A package can contain any set of files which are considered to be static assets on a web site. Despite being agnostic in its opinion about what a package can contain, Eik does have a package type definition which comes into play when organizing assets."),(0,r.kt)("h2",{id:"package-types"},"Package Types"),(0,r.kt)("p",null,"Eik differentiates between the types of packages it hosts. These are: Packages, NPM Packages and Import Maps. On the server, these different types live under separate URL namespaces to avoid conflicts with each other. "),(0,r.kt)("h3",{id:"eik-packages"},"Eik Packages"),(0,r.kt)("p",null,"Eik packages are normally produced by websites and web applications. Such a package typically consists of bundled application code which, most of the time, does not really make much sense to publish as a module to a public repository such as NPM."),(0,r.kt)("p",null,"Packages live under the ",(0,r.kt)("a",{parentName:"p",href:"/docs/server_rest_api#packages"},"/pkg/")," namespace on an Eik server."),(0,r.kt)("h3",{id:"npm-packages"},"NPM Packages"),(0,r.kt)("p",null,"NPM packages are modules replicated from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"NPM repository")," with the intention that they be loadable by browsers. This is similar to what ",(0,r.kt)("a",{parentName:"p",href:"https://unpkg.com/"},"unpkg")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.pika.dev/"},"pika")," do, with the exception that Eik does not proxy NPM modules as Unpkg and Pika do. Eik has taken a different approach and it is necessary to manually publish modules from NPM to Eik as well as do any transpiling from (for example) CommonJS to ESM as a manual process before publishing."),(0,r.kt)("p",null,"NPM Packages live under the ",(0,r.kt)("a",{parentName:"p",href:"/docs/server_rest_api#npm-packages"},"/npm/")," namespace on an Eik server."),(0,r.kt)("h3",{id:"import-maps"},"Import Maps"),(0,r.kt)("p",null,"Import Maps are handled as single JSON files in Eik and not treated as a package. It's only possible to upload a single file and not a group of files like it is when uploading packages."),(0,r.kt)("p",null,"Import Maps live under the ",(0,r.kt)("a",{parentName:"p",href:"/docs/server_rest_api#import-maps"},"/map/")," namespace on a Eik server."),(0,r.kt)("h2",{id:"naming-and-versioning"},"Naming and versioning"),(0,r.kt)("p",null,"A package intended to be published to an Eik server should follow the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/npm/validate-npm-package-name"},"NPM module naming convention"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"package name length should be greater than zero"),(0,r.kt)("li",{parentName:"ul"},"all characters in a package name must be lowercase i.e., no uppercase or mixed case names are allowed"),(0,r.kt)("li",{parentName:"ul"},"package name ",(0,r.kt)("em",{parentName:"li"},"can")," consist of hyphens"),(0,r.kt)("li",{parentName:"ul"},"package name ",(0,r.kt)("em",{parentName:"li"},"must not")," contain non-url-safe characters (since name ends up being part of a URL)"),(0,r.kt)("li",{parentName:"ul"},"package name ",(0,r.kt)("em",{parentName:"li"},"should not")," start with ",(0,r.kt)("inlineCode",{parentName:"li"},".")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"_")),(0,r.kt)("li",{parentName:"ul"},"package name ",(0,r.kt)("em",{parentName:"li"},"should not")," contain leading or trailing spaces"),(0,r.kt)("li",{parentName:"ul"},"package name ",(0,r.kt)("em",{parentName:"li"},"should not")," contain any of the following characters: ",(0,r.kt)("inlineCode",{parentName:"li"},"~)('!*")),(0,r.kt)("li",{parentName:"ul"},"package name ",(0,r.kt)("em",{parentName:"li"},"cannot")," be the same as a node.js/io.js core module nor a reserved/blacklisted name. For example, the following names are invalid:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"http"),(0,r.kt)("li",{parentName:"ul"},"stream"),(0,r.kt)("li",{parentName:"ul"},"node_modules"),(0,r.kt)("li",{parentName:"ul"},"favicon.ico"))),(0,r.kt)("li",{parentName:"ul"},"package name length cannot exceed 214")),(0,r.kt)("p",null,"All packages published to an Eik server is immutable and versioned with ",(0,r.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning"),". This makes it possible to differentiate between what are considered smaller changes to a package which should not break behaviour in a dependency from changes which can be breaking."),(0,r.kt)("p",null,"Since packages are immutable, the Eik server will set an infinite HTTP cache control header on all files belonging to a package to make use of browser caching."),(0,r.kt)("h2",{id:"aliasing"},"Aliasing"),(0,r.kt)("p",null,"Aliasing can be applied to all packages and is a way of having a static URL reference, which can change, to a version of a package. Aliases are mutable and can be set to point to different versions of a package. The alias URL will do a redirect to the full version that it is set to point to."),(0,r.kt)("p",null,"Lets say we publish ",(0,r.kt)("inlineCode",{parentName:"p"},"lit-html"),"  version ",(0,r.kt)("inlineCode",{parentName:"p"},"1.1.1"),"  as an NPM package to an Eik server. It will then live on the following URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"https://eik-server.com/npm/lit-html/1.1.1/\n")),(0,r.kt)("p",null,"If we then create an alias for this version it will live on the following URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"https://eik-server.com/npm/lit-html/v1/\n")),(0,r.kt)("p",null,"Any request to any file under this alias will be redirected to the same path under the package version it refers too."),(0,r.kt)("p",null,"A request to the following file under the alias:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"https://eik-server.com/npm/lit-html/v1/lit-html.js\n")),(0,r.kt)("p",null,"will redirect to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"https://eik-server.com/npm/lit-html/1.1.1/lit-html.js\n")),(0,r.kt)("p",null,"Aliasing is not automatic in Eik. Aliases must be created or updated manually when a version of a package is published to an Eik server."),(0,r.kt)("h3",{id:"aliasing-and-versioning"},"Aliasing and versioning"),(0,r.kt)("p",null,"Aliasing is tied to the semantic version of each package where the alias is the major version as a single digit pointing to a given full version of the same major version. That means that all 1.x versions of a package can have a ",(0,r.kt)("inlineCode",{parentName:"p"},"v1")," alias and all 2.x versions of the same package can have a ",(0,r.kt)("inlineCode",{parentName:"p"},"v2")," alias at the same time."),(0,r.kt)("p",null,"This is a feature to make sure there is a way to publish breaking changes in a package without breaking its dependencies. In semantic versioning ",(0,r.kt)("inlineCode",{parentName:"p"},"patch")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"minor")," versions are supposed to not contain breaking changes while a ",(0,r.kt)("inlineCode",{parentName:"p"},"major")," version can contain breaking changes so in a situation where a package introduces a breaking change it should, according to semantic versioning, be published as a new major version."),(0,r.kt)("p",null,"This breaks a bit with what Eik is trying to solve if we look at the challenge we outlined in our ",(0,r.kt)("a",{parentName:"p",href:"/docs/overview#introduction"},"introduction")," but the handling of breaking changes is probably the one place where it's acceptable not to align all dependencies of a package to the same version of it."))}h.isMDXComponent=!0}}]);