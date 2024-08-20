"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[664],{8925:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var s=n(4848),a=n(8453);const t={title:"Publishing to the images namespace",sidebar_label:"image packages"},o=void 0,r={id:"dependencies/images",title:"Publishing to the images namespace",description:"Eik's provides an image namespace for uploading images.",source:"@site/docs/dependencies/images.md",sourceDirName:"dependencies",slug:"/dependencies/images",permalink:"/docs/dependencies/images",draft:!1,unlisted:!1,editUrl:"https://github.com/eik-lib/eik-lib.github.io/tree/source/docs/dependencies/images.md",tags:[],version:"current",frontMatter:{title:"Publishing to the images namespace",sidebar_label:"image packages"},sidebar:"sidebar",previous:{title:"npm packages",permalink:"/docs/dependencies/npm"},next:{title:"Package aliases",permalink:"/docs/dependencies/aliases"}},l={},d=[{value:"Preparing images for Eik",id:"preparing-images-for-eik",level:2},{value:"Configure Eik",id:"configure-eik",level:3},{value:"Publish the images",id:"publish-the-images",level:3},{value:"Get information about a published package",id:"get-information-about-a-published-package",level:2},{value:"Updating a published package",id:"updating-a-published-package",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"Eik's provides an image namespace for uploading images.\nThe purpose of this namespace is three-fold."}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"By creating a separate namespace, files that change infrequently (images and other media) can be uploaded and versioned separately from files that change often (JavaScript and CSS)"}),"\n",(0,s.jsxs)(i.li,{children:["An image manipulation service such as Fastly's ",(0,s.jsx)(i.a,{href:"https://www.fastly.com/products/image-optimization",children:"image optimization"})," can be placed in front of this namespace."]}),"\n",(0,s.jsx)(i.li,{children:"Your Eik server can be configured to allow larger package sizes on the image namespace and smaller package sizes on other namespaces."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"In this document you'll learn how to:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"publish images to your Eik server"}),"\n",(0,s.jsx)(i.li,{children:"how to update existing images"}),"\n",(0,s.jsx)(i.li,{children:"create an alias that can be updated as you publish new patch or minor versions of your images"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"preparing-images-for-eik",children:"Preparing images for Eik"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"image"})," namespace on Eik works the same way as for application code. You will need:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"some images to upload"}),"\n",(0,s.jsxs)(i.li,{children:["an ",(0,s.jsx)(i.code,{children:"eik.json"})]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"configure-eik",children:"Configure Eik"}),"\n",(0,s.jsxs)(i.p,{children:["The first step is to create an ",(0,s.jsx)(i.code,{children:"eik.json"})," file."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"eik init\n"})}),"\n",(0,s.jsxs)(i.p,{children:["Open the newly created ",(0,s.jsx)(i.code,{children:"eik.json"})," and fill out the required fields."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'{\n\t"name": "my-images",\n\t"type": "image",\n\t"version": "1.0.0",\n\t"server": "https://eik.store.com",\n\t"files": "./path/to/images/folder"\n}\n'})}),"\n",(0,s.jsx)(i.admonition,{type:"tip",children:(0,s.jsxs)(i.p,{children:["If your organisation doesn't have a running Eik server yet, hop on over to ",(0,s.jsx)(i.a,{href:"/docs/server",children:"the server documentation"}),"."]})}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"files"})," key should be set to a directory containing image files to publish. Eik does not discriminate file types so if you wish to upload videos and other types of media, this will also work."]}),"\n",(0,s.jsx)(i.h3,{id:"publish-the-images",children:"Publish the images"}),"\n",(0,s.jsxs)(i.p,{children:["Let's update the ",(0,s.jsx)(i.code,{children:'"files"'})," field in ",(0,s.jsx)(i.code,{children:"eik.json"})," to include an images folder in our imaginary project."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'{\n\t"name": "my-images",\n\t"type": "image",\n\t"version": "1.0.0",\n\t"server": "https://eik.store.com",\n\t"files": "./images/"\n}\n'})}),"\n",(0,s.jsx)(i.p,{children:"Now you can log in to the Eik server and publish, same as when publishing an application."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"eik login --key YOUR_EIK_KEY\neik publish\n"})}),"\n",(0,s.jsxs)(i.p,{children:["At this point your images should be available on the path ",(0,s.jsx)(i.code,{children:"https://eik.store.com/img/my-images/1.0.0"}),"."]}),"\n",(0,s.jsx)(i.admonition,{type:"tip",children:(0,s.jsxs)(i.p,{children:["You should keep ",(0,s.jsx)(i.code,{children:"package.json"}),", ",(0,s.jsx)(i.code,{children:"eik.json"})," and the build script in version control so you don't have to recreate this setup when there are updates."]})}),"\n",(0,s.jsx)(i.h2,{id:"get-information-about-a-published-package",children:"Get information about a published package"}),"\n",(0,s.jsxs)(i.p,{children:["To view publish information, you can use the ",(0,s.jsx)(i.code,{children:"eik meta"})," command."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"eik meta my-images\n"})}),"\n",(0,s.jsx)(i.h2,{id:"updating-a-published-package",children:"Updating a published package"}),"\n",(0,s.jsx)(i.p,{children:"New versions of the image package need to be published to the Eik server, either manually or with automation like Renovate or Dependabot. Whether you choose to automate or have a manual process, these are the steps to update a module."}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Add, remove or update images in your images directory"}),"\n",(0,s.jsxs)(i.li,{children:["Update the version number in ",(0,s.jsx)(i.code,{children:"eik.json"})]}),"\n",(0,s.jsx)(i.li,{children:"Run the build script"}),"\n",(0,s.jsx)(i.li,{children:"Publish to the Eik server"}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>r});var s=n(6540);const a={},t=s.createContext(a);function o(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);