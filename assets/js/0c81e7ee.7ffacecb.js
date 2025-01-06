"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[191],{8422:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>c,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"reference/at-eik-sink","title":"@eik/sink reference","description":"The @eik/sink module specifies the public API for all Eik storage backends. The existing sinks are good examples to look at when implementing a custom sink.","source":"@site/docs/reference/at-eik-sink.md","sourceDirName":"reference","slug":"/reference/at-eik-sink","permalink":"/docs/reference/at-eik-sink","draft":false,"unlisted":false,"editUrl":"https://github.com/eik-lib/eik-lib.github.io/tree/source/docs/reference/at-eik-sink.md","tags":[],"version":"current","frontMatter":{"title":"@eik/sink reference","sidebar_label":"@eik/sink"},"sidebar":"sidebar","previous":{"title":"@eik/service","permalink":"/docs/reference/at-eik-service"},"next":{"title":"eik.json","permalink":"/docs/reference/eik-json"}}');var i=r(4848),s=r(8453);const c={title:"@eik/sink reference",sidebar_label:"@eik/sink"},l=void 0,d={},o=[{value:"Constructor",id:"constructor",level:2},{value:"API",id:"api",level:2},{value:"write(filePath, contentType)",id:"writefilepath-contenttype",level:3},{value:"read(filePath)",id:"readfilepath",level:3},{value:"delete(filePath)",id:"deletefilepath",level:3},{value:"exist(filePath)",id:"existfilepath",level:3},{value:"Properties",id:"properties",level:2},{value:".metrics",id:"metrics",level:3},{value:"Validation",id:"validation",level:2},{value:"Security",id:"security",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The ",(0,i.jsxs)(t.a,{href:"https://github.com/eik-lib/sink",children:[(0,i.jsx)(t.code,{children:"@eik/sink"})," module"]})," specifies the public API for all ",(0,i.jsx)(t.a,{href:"/docs/server/storage/",children:"Eik storage backends"}),". The ",(0,i.jsx)(t.a,{href:"https://github.com/topics/eik-sink",children:"existing sinks"})," are good examples to look at when implementing a custom sink."]}),"\n",(0,i.jsx)(t.h2,{id:"constructor",children:"Constructor"}),"\n",(0,i.jsxs)(t.p,{children:["A sink must be a ",(0,i.jsx)(t.code,{children:"class"})," which extends the Eik sink interface."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'import Sink from "@eik/sink";\n\nclass SinkCustom extends Sink {\n\tconstructor() {\n\t\tsuper();\n\t}\n\twrite() {}\n\tread() {}\n\tdelete() {}\n\texist() {}\n\tget metrics() {}\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,i.jsx)(t.p,{children:"A sink must implement the following API:"}),"\n",(0,i.jsx)(t.h3,{id:"writefilepath-contenttype",children:"write(filePath, contentType)"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"argument"}),(0,i.jsx)(t.th,{children:"default"}),(0,i.jsx)(t.th,{children:"type"}),(0,i.jsx)(t.th,{children:"required"}),(0,i.jsx)(t.th,{children:"details"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"filePath"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"null"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"true"})}),(0,i.jsxs)(t.td,{children:["Pathname of the file relative to ",(0,i.jsx)(t.code,{children:"root"})," in the ",(0,i.jsx)(t.a,{href:"/docs/server/storage#internal-storage-structure",children:"file structure"})," in Eik"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"contentType"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"null"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"true"})}),(0,i.jsx)(t.td,{children:"Content type of the file"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["This method is called when a file is to be written to storage. The method must return a ",(0,i.jsx)(t.code,{children:"Promise"})," and resolve with a ",(0,i.jsx)(t.code,{children:"WritableStream"})," when the storage is ready to be written too. The server will pipe the byte stream of the file to this stream. Upon any errors, the promise should reject with an ",(0,i.jsx)(t.code,{children:"Error"})," object"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"import { Writable } from 'node:stream';\nimport Sink from '@eik/sink';\n\nexport class SinkCustom extends Sink {\n    constructor() {\n        super();\n    }\n    write() {\n        return new Promise(resolve, reject) {\n            const to = new Writable();\n            resolve(to);\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"readfilepath",children:"read(filePath)"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"argument"}),(0,i.jsx)(t.th,{children:"default"}),(0,i.jsx)(t.th,{children:"type"}),(0,i.jsx)(t.th,{children:"required"}),(0,i.jsx)(t.th,{children:"details"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"filePath"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"null"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"true"})}),(0,i.jsxs)(t.td,{children:["Pathname of the file relative to ",(0,i.jsx)(t.code,{children:"root"})," in the ",(0,i.jsx)(t.a,{href:"/docs/server/storage#internal-storage-structure",children:"file structure"})," in Eik"]})]})})]}),"\n",(0,i.jsxs)(t.p,{children:["This method is called when a file is to be read from storage. The method must return a ",(0,i.jsx)(t.code,{children:"Promise"})," and resolve with a ",(0,i.jsx)(t.code,{children:"ReadableStream"})," when the storage is ready to be read from. Upon any errors, the promise should reject with an ",(0,i.jsx)(t.code,{children:"Error"})," object"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"import { Readable } from 'node:stream';\nimport Sink from '@eik/sink';\n\nexport class SinkCustom extends Sink {\n    constructor() {\n        super();\n    }\n    read() {\n        return new Promise(resolve, reject) {\n            const to = new Readable();\n            resolve(to);\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"deletefilepath",children:"delete(filePath)"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"argument"}),(0,i.jsx)(t.th,{children:"default"}),(0,i.jsx)(t.th,{children:"type"}),(0,i.jsx)(t.th,{children:"required"}),(0,i.jsx)(t.th,{children:"details"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"filePath"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"null"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"true"})}),(0,i.jsxs)(t.td,{children:["Pathname of the file relative to ",(0,i.jsx)(t.code,{children:"root"})," in the ",(0,i.jsx)(t.a,{href:"/docs/server/storage#internal-storage-structure",children:"file structure"})," in Eik"]})]})})]}),"\n",(0,i.jsxs)(t.p,{children:["This method is called when a file is to be deleted from storage. The method must return a ",(0,i.jsx)(t.code,{children:"Promise"})," and resolve with no value when the file is deleted from storage. If any errors occur, the promise should reject with an ",(0,i.jsx)(t.code,{children:"Error"})," object"]}),"\n",(0,i.jsx)(t.h3,{id:"existfilepath",children:"exist(filePath)"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"argument"}),(0,i.jsx)(t.th,{children:"default"}),(0,i.jsx)(t.th,{children:"type"}),(0,i.jsx)(t.th,{children:"required"}),(0,i.jsx)(t.th,{children:"details"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"filePath"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"null"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"true"})}),(0,i.jsxs)(t.td,{children:["Pathname of the file relative to ",(0,i.jsx)(t.code,{children:"root"})," in the ",(0,i.jsx)(t.a,{href:"/docs/server/storage#internal-storage-structure",children:"file structure"})," in Eik"]})]})})]}),"\n",(0,i.jsxs)(t.p,{children:["This method is called to check if a file exists in storage. The method must return a ",(0,i.jsx)(t.code,{children:"Promise"})," and resolve with no value if the file exists in storage. If the file does not exist the promise should reject with no error object. Upon any errors, the promise should reject with an ",(0,i.jsx)(t.code,{children:"Error"})," object."]}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(t.p,{children:"A sink must implement the following properties:"}),"\n",(0,i.jsx)(t.h3,{id:"metrics",children:".metrics"}),"\n",(0,i.jsxs)(t.p,{children:["A getter for a ",(0,i.jsx)(t.a,{href:"https://github.com/metrics-js/client",children:"metric stream"}),". The metric stream can be used to emit metrics from the sink into ",(0,i.jsx)(t.a,{href:"/docs/server/metrics",children:"the overall metric stream"})," in the server."]}),"\n",(0,i.jsx)(t.p,{children:"Example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"import Metrics from @metrics/client';\nimport Sink from @eik/sink';\n\nexport class SinkCustom extends Sink {\n    constructor() {\n        super();\n        this._metrics = new Metrics();\n        this._counter = this._metrics.counter({\n            name: 'eik_custom_sink',\n            description: 'Counter measuring access to the custom sink',\n        });\n    }\n    write(filePath, contentType) {\n        return new Promise(resolve, reject) {\n            this._counter.inc();\n\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"validation",children:"Validation"}),"\n",(0,i.jsxs)(t.p,{children:["We recommend you validate the arguments for all methods. The ",(0,i.jsx)(t.a,{href:"https://github.com/eik-lib/sink",children:"Eik sink interface"})," contain static methods to do so which can be used when implementing a sink:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"import Sink from @eik/sink';\n\nexport class SinkCustom extends Sink {\n    constructor() {\n        super();\n    }\n    write(filePath, contentType) {\n        return new Promise(resolve, reject) {\n            try {\n                super.constructor.validateFilePath(filePath);\n                super.constructor.validateContentType(contentType);\n            } catch (error) {\n                reject(error);\n                return;\n            }\n\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"security",children:"Security"}),"\n",(0,i.jsxs)(t.p,{children:["A sink should take care of protecting against ",(0,i.jsx)(t.a,{href:"https://owasp.org/www-community/attacks/Path_Traversal",children:"Path Traversal"}),". It should not be possible to access files outside the ",(0,i.jsx)(t.code,{children:"root"})," of the file structure in Eik by passing in a hostile pathname through the REST API of Eik. Each ",(0,i.jsx)(t.code,{children:"filePath"})," argument on each method should be checked for such."]}),"\n",(0,i.jsxs)(t.p,{children:["Please see OWASPs guide on preventing ",(0,i.jsx)(t.a,{href:"https://github.com/OWASP/wstg/blob/master/document/4-Web_Application_Security_Testing/05-Authorization_Testing/01-Testing_Directory_Traversal_File_Include.md",children:"Path Traversal"}),"."]})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>l});var n=r(6540);const i={},s=n.createContext(i);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);