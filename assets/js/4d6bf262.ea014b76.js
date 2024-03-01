"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[659],{9501:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>n,metadata:()=>a,toc:()=>o});var t=s(4848),i=s(8453);const n={id:"server_metrics",title:"Eik server - Metrics",sidebar_label:"Metrics"},c=void 0,a={id:"server_metrics",title:"Eik server - Metrics",description:"The Eik server exposes a metric stream which emits internal metrics",source:"@site/docs/server_metrics.md",sourceDirName:".",slug:"/server_metrics",permalink:"/docs/server_metrics",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"server_metrics",title:"Eik server - Metrics",sidebar_label:"Metrics"},sidebar:"mainSidebar",previous:{title:"File structure",permalink:"/docs/server_file_structure"},next:{title:"Overview",permalink:"/docs/ci"}},d={},o=[{value:"Usage",id:"usage",level:2},{value:"Metrics",id:"metrics",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["The Eik server exposes a ",(0,t.jsx)(r.a,{href:"https://github.com/metrics-js/client",children:"metric stream"})," which emits internal metrics\non the server. These metrics are intended to give numbers on how the server as an application is behaving and\nperforming and is an important tool in the toolbox for monitoring the servers health status. These metrics do\nnot provide statistics on assets uploaded to the asset server."]}),"\n",(0,t.jsx)(r.p,{children:"The metrics the server provides are not bound to any particular metric system so it's possible to provide the metrics to\nany monitoring system as preferred. The metric stream emits a set of generic metric objects that can be altered and\npiped as desired."}),"\n",(0,t.jsxs)(r.p,{children:["Please see ",(0,t.jsx)(r.a,{href:"https://github.com/metrics-js/client",children:"@metrics/client"})," for examples of how to consume these metrics in\nyour preferred monitoring system."]}),"\n",(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"@eik/service"})," module exposes a ",(0,t.jsx)(r.code,{children:".metric"})," property. This property holds a plain Node.js object stream which\nemits the metrics as objects on the stream."]}),"\n",(0,t.jsx)(r.p,{children:"This stream can be piped into a metrics consumer or any other Node.js writable / transform stream for further\nprocessing."}),"\n",(0,t.jsx)(r.p,{children:"Example of metrics being piped into a prometheus consumer:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"const MetricsConsumer = require('@metrics/prometheus-consumer');\nconst prometheus = require('prom-client');\nconst Service = require('@eik/service');\nconst fastify = require('fastify');\n\nconst service = new Service();\n\nconst metricsConsumer = new MetricsConsumer({\n    client: prometheus,\n});\n\nservice.metrics.pipe(metricsConsumer);\n\nconst app = fastify();\napp.register(service.api());\n\napp.get('/_/metrics', (request, reply) => {\n    reply.type(metricsConsumer.registry.contentType);\n    reply.send(metricsConsumer.registry.metrics());\n});\n\nconst run = async () => {\n    await app.listen(8080, '0.0.0.0');\n}\nrun();\n"})}),"\n",(0,t.jsx)(r.h2,{id:"metrics",children:"Metrics"}),"\n",(0,t.jsxs)(r.p,{children:["Each metric provided by the server has a unique ",(0,t.jsx)(r.code,{children:"name"})," and a ",(0,t.jsx)(r.code,{children:"type"})," defining what type (counter, histogram, etc) of\nmetric it is."]}),"\n",(0,t.jsx)(r.p,{children:"The server exposes these metrics:"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"eik_core_auth_post_handler"}),(0,t.jsx)(r.td,{children:"histogram"}),(0,t.jsxs)(r.td,{children:["Time taken in a ",(0,t.jsx)(r.a,{href:"/docs/server_rest_api#login",children:"login"})," method"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"eik_core_pkg_get_handler"}),(0,t.jsx)(r.td,{children:"histogram"}),(0,t.jsxs)(r.td,{children:["Time taken in a ",(0,t.jsx)(r.a,{href:"/docs/server_rest_api#public-package-url",children:"public package"})," method"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"eik_core_pkg_log_handler"}),(0,t.jsx)(r.td,{children:"histogram"}),(0,t.jsxs)(r.td,{children:["Time taken in a ",(0,t.jsx)(r.a,{href:"/docs/server_rest_api#package-version-overview",children:"package version overview"})," method"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"eik_core_pkg_put_handler"}),(0,t.jsx)(r.td,{children:"histogram"}),(0,t.jsxs)(r.td,{children:["Time taken in a ",(0,t.jsx)(r.a,{href:"/docs/server_rest_api#upload-a-package",children:"upload package"})," method"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"eik_core_versions_get_handler"}),(0,t.jsx)(r.td,{children:"histogram"}),(0,t.jsxs)(r.td,{children:["Time taken in a ",(0,t.jsx)(r.a,{href:"/docs/server_rest_api#latest-package-versions",children:"latest package versions"})," method"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"eik_core_alias_get_handler"}),(0,t.jsx)(r.td,{children:"histogram"}),(0,t.jsxs)(r.td,{children:["Time taken in a ",(0,t.jsx)(r.a,{href:"/docs/server_rest_api#public-alias-url",children:"public alias"})," method"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"eik_core_alias_put_handler"}),(0,t.jsx)(r.td,{children:"histogram"}),(0,t.jsxs)(r.td,{children:["Time taken in a ",(0,t.jsx)(r.a,{href:"/docs/server_rest_api#create-alias",children:"create alias"})," method"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"eik_core_alias_post_handler"}),(0,t.jsx)(r.td,{children:"histogram"}),(0,t.jsxs)(r.td,{children:["Time taken in a ",(0,t.jsx)(r.a,{href:"/docs/server_rest_api#update-alias",children:"update alias"})," method"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"eik_core_alias_del_handler"}),(0,t.jsx)(r.td,{children:"histogram"}),(0,t.jsxs)(r.td,{children:["Time taken in a ",(0,t.jsx)(r.a,{href:"/docs/server_rest_api#delete-alias",children:"delete alias"})," method"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"eik_core_map_get_handler"}),(0,t.jsx)(r.td,{children:"histogram"}),(0,t.jsxs)(r.td,{children:["Time taken in a ",(0,t.jsx)(r.a,{href:"/docs/server_rest_api#public-import-maps-url",children:"public import maps"})," method"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"eik_core_map_put_handler"}),(0,t.jsx)(r.td,{children:"histogram"}),(0,t.jsxs)(r.td,{children:["Time taken in a ",(0,t.jsx)(r.a,{href:"/docs/server_rest_api#upload-an-import-map",children:"upload import maps"})," method"]})]})]})]})]})}function l(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>c,x:()=>a});var t=s(6540);const i={},n=t.createContext(i);function c(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);