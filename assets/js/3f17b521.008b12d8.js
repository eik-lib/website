"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[664],{74:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"dependencies/images","title":"Publishing to the image namespace","description":"The purpose of the image namespace is three-fold:","source":"@site/docs/dependencies/images.md","sourceDirName":"dependencies","slug":"/dependencies/images","permalink":"/docs/dependencies/images","draft":false,"unlisted":false,"editUrl":"https://github.com/eik-lib/eik-lib.github.io/tree/source/docs/dependencies/images.md","tags":[],"version":"current","frontMatter":{"title":"Publishing to the image namespace","sidebar_label":"image packages"},"sidebar":"sidebar","previous":{"title":"npm packages","permalink":"/docs/dependencies/npm"},"next":{"title":"Package aliases","permalink":"/docs/dependencies/aliases"}}');var a=n(4848),o=n(8453);const t={title:"Publishing to the image namespace",sidebar_label:"image packages"},l=void 0,c={},r=[{value:"Preparing images for Eik",id:"preparing-images-for-eik",level:2},{value:"Configure the image package",id:"configure-the-image-package",level:2},{value:"Change the existing <code>eik.json</code>",id:"change-the-existing-eikjson",level:3},{value:"Update Eik client",id:"update-eik-client",level:2},{value:"Publish the images",id:"publish-the-images",level:2},{value:"Get information about a published package",id:"get-information-about-a-published-package",level:2},{value:"Updating a published package",id:"updating-a-published-package",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.p,{children:"The purpose of the image namespace is three-fold:"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsx)(i.li,{children:"Files that change infrequently (images and other media) can be uploaded and versioned separately from files that change often (JavaScript and CSS)."}),"\n",(0,a.jsxs)(i.li,{children:["A service such as Fastly's ",(0,a.jsx)(i.a,{href:"https://www.fastly.com/products/image-optimization",children:"image optimization"})," can be placed in front of this namespace."]}),"\n",(0,a.jsx)(i.li,{children:"Your Eik server can allow larger package sizes on the image namespace."}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"In this document you'll learn how to:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"publish images to your Eik server"}),"\n",(0,a.jsx)(i.li,{children:"how to update existing images"}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"preparing-images-for-eik",children:"Preparing images for Eik"}),"\n",(0,a.jsxs)(i.p,{children:["The ",(0,a.jsx)(i.code,{children:"image"})," namespace on Eik works the same way as for application code. You will need:"]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"some images to upload"}),"\n",(0,a.jsx)(i.li,{children:"an Eik configuration for images separate from application code"}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"configure-the-image-package",children:"Configure the image package"}),"\n",(0,a.jsxs)(i.p,{children:["We'll assume you ",(0,a.jsxs)(i.a,{href:"/docs/introduction/workflow",children:["already have an ",(0,a.jsx)(i.code,{children:"eik.json"})," for application code"]}),"."]}),"\n",(0,a.jsxs)(i.p,{children:["The first step then is to create an ",(0,a.jsx)(i.code,{children:"eik-image.json"})," file. Open ",(0,a.jsx)(i.code,{children:"eik-image.json"})," and fill out the required fields."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-json",children:'{\n\t"name": "my-images",\n\t"type": "image",\n\t"version": "1.0.0",\n\t"server": "https://eik.store.com",\n\t"files": "./public/images"\n}\n'})}),"\n",(0,a.jsxs)(i.p,{children:["The ",(0,a.jsx)(i.code,{children:"files"})," key should be set to a directory containing image files to publish."]}),"\n",(0,a.jsx)(i.p,{children:"Eik does not discriminate file types so if you wish to upload videos and other types of media, this will also work."}),"\n",(0,a.jsxs)(i.h3,{id:"change-the-existing-eikjson",children:["Change the existing ",(0,a.jsx)(i.code,{children:"eik.json"})]}),"\n",(0,a.jsxs)(i.p,{children:["Change the files field of your original ",(0,a.jsx)(i.code,{children:"eik.json"})," so it only includes the application code, not the images."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-json",children:'{\n\t"name": "my-project",\n\t"type": "package",\n\t"version": "1.0.0",\n\t"server": "https://eik.store.com",\n\t"files": "./public/package"\n}\n'})}),"\n",(0,a.jsx)(i.h2,{id:"update-eik-client",children:"Update Eik client"}),"\n",(0,a.jsxs)(i.p,{children:["In your server you are likely already using the ",(0,a.jsx)(i.a,{href:"/docs/reference/at-eik-node-client",children:"Eik node client"}),". You have to adjust it to point at the new location for your application code, as well as create a new instance to handle your images."]}),"\n",(0,a.jsx)(i.p,{children:"Your existing usage may look something like this."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:'const eik = new Eik({ base: "/public", development });\nawait eik.load();\n'})}),"\n",(0,a.jsx)(i.p,{children:"Change the path to reflect the changes we made earlier."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:'const eik = new Eik({ base: "/public/package", development });\nawait eik.load();\n'})}),"\n",(0,a.jsx)(i.p,{children:"Create a new instance to handle your images."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:'import { join } from "node:path";\n\nconst eikImage = new Eik({\n\tbase: "/public/image",\n\tdevelopment,\n\tpath: join(process.cwd(), "./eik-image.json"),\n});\n\nawait eikImage.load();\n'})}),"\n",(0,a.jsxs)(i.p,{children:["You can now reference your static assets in your server using ",(0,a.jsx)(i.code,{children:"eikImage"}),"."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-js",children:'const markup = `<img src="${eikImage.file("/image1.png").value}" alt="..." />`;\n'})}),"\n",(0,a.jsxs)(i.p,{children:["This will result in the ",(0,a.jsx)(i.code,{children:"src"})," path pointing to your local development setup when you are running locally in development mode, and pointing to the Eik server when running in dev or prod."]}),"\n",(0,a.jsx)(i.h2,{id:"publish-the-images",children:"Publish the images"}),"\n",(0,a.jsxs)(i.p,{children:["Say you've made an ",(0,a.jsx)(i.code,{children:"eik-image.json"})," like above and you want to publish the images from its ",(0,a.jsx)(i.code,{children:"files"})," configuration."]}),"\n",(0,a.jsxs)(i.p,{children:["To do so, log in to the Eik server and publish. This works the same as when publishing an application, except you should pass the ",(0,a.jsx)(i.code,{children:"--config"})," option."]}),"\n",(0,a.jsxs)(i.p,{children:["You can also ",(0,a.jsx)(i.a,{href:"/docs/guides/github-actions-images/",children:"automate the publish process"}),"."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-sh",children:"eik login --key <token>\neik publish --config eik-image.json\n"})}),"\n",(0,a.jsxs)(i.p,{children:["At this point your images should be available on the path ",(0,a.jsx)(i.code,{children:"https://eik.store.com/img/my-images/1.0.0"}),"."]}),"\n",(0,a.jsx)(i.h2,{id:"get-information-about-a-published-package",children:"Get information about a published package"}),"\n",(0,a.jsxs)(i.p,{children:["To view publish information, you can use the ",(0,a.jsx)(i.code,{children:"eik meta"})," command."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-sh",children:"eik meta my-images\n"})}),"\n",(0,a.jsx)(i.h2,{id:"updating-a-published-package",children:"Updating a published package"}),"\n",(0,a.jsxs)(i.p,{children:["Whether you choose to ",(0,a.jsx)(i.a,{href:"/docs/guides/github-actions-images/",children:"automate"})," or have a manual process, these are the steps to update a module."]}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsx)(i.li,{children:"Add, remove or update images in your images directory"}),"\n",(0,a.jsxs)(i.li,{children:["Update the version number in ",(0,a.jsx)(i.code,{children:"eik-image.json"}),", manually or with ",(0,a.jsx)(i.code,{children:"eik version --config eik-image.json"})]}),"\n",(0,a.jsxs)(i.li,{children:["Publish with ",(0,a.jsx)(i.code,{children:"eik publish --config eik-image.json"})]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>t,x:()=>l});var s=n(6540);const a={},o=s.createContext(a);function t(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);