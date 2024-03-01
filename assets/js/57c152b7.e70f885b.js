"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[671],{1973:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var t=n(4848),s=n(8453);const r={id:"travis",title:"Travis",sidebar_label:"Travis"},a=void 0,o={id:"travis",title:"Travis",description:"Publishing to an Eik server from a Travis CI build can be achieved with a few commands.",source:"@site/docs/travis.md",sourceDirName:".",slug:"/travis",permalink:"/docs/travis",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"travis",title:"Travis",sidebar_label:"Travis"},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/docs/ci"}},c={},h=[{value:"Setup secrets in Travis",id:"setup-secrets-in-travis",level:2},{value:"Set up versioning and publishing in .travis.yml",id:"set-up-versioning-and-publishing-in-travisyml",level:2},{value:"Create a commit script",id:"create-a-commit-script",level:2},{value:"Run the commit script from .travis.yml",id:"run-the-commit-script-from-travisyml",level:2}];function l(e){const i={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Publishing to an Eik server from a Travis CI build can be achieved with a few commands."}),"\n",(0,t.jsx)(i.h2,{id:"setup-secrets-in-travis",children:"Setup secrets in Travis"}),"\n",(0,t.jsx)(i.p,{children:"Two secrets will need to be available in order to publish to your Eik server and commit to your git repository. Travis provides a settings page where you can set secret environment variables and we recommend that you use this to do so."}),"\n",(0,t.jsxs)(i.p,{children:["The Eik server key will need to be obtained from your Eik server provider, a Github personal access token can be created by visiting ",(0,t.jsx)(i.a,{href:"https://github.com/settings/tokens",children:"this page"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{src:n(6858).A+"",width:"2440",height:"704"}),"\n",(0,t.jsx)(i.img,{src:n(1792).A+"",width:"2428",height:"518"})]}),"\n",(0,t.jsx)(i.h2,{id:"set-up-versioning-and-publishing-in-travisyml",children:"Set up versioning and publishing in .travis.yml"}),"\n",(0,t.jsxs)(i.p,{children:["The following gives an example of how to run version and publish commands from ",(0,t.jsx)(i.code,{children:".travis.yml"}),". The login command uses the ",(0,t.jsx)(i.code,{children:"EIK_SERVER_KEY"})," that was setup in the previous step."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yml",children:"language: node_js\nnode_js:\n  - 14\nbefore_script:\n  - npm i -g @eik/cli\nscript:\n  - eik login -k $EIK_SERVER_KEY\n  - eik version\n  - eik package\n"})}),"\n",(0,t.jsxs)(i.p,{children:["If you have a build step that you need to run before publish, you could just insert that into the ",(0,t.jsx)(i.code,{children:"script"})," section as shown."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yml",children:"script:\n  - <build command here>\n  - eik login -k $EIK_SERVER_KEY\n  - eik version\n  - eik package\n"})}),"\n",(0,t.jsx)(i.h2,{id:"create-a-commit-script",children:"Create a commit script"}),"\n",(0,t.jsxs)(i.p,{children:["The most challenging part of publishing from CI is committing back to your git repository. The following is an example of a script that commits changes to ",(0,t.jsx)(i.code,{children:"eik.json"})," and pushes that commit back to github. It uses the ",(0,t.jsx)(i.code,{children:"GH_TOKEN"})," script defined in the first step."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"commit.sh"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sh",children:'#!/usr/bin/env bash\n\n# Set the repo name from the github url\n# For git@github.schibsted.io:finn/min-finn.git, the repo name would be min-finn\nREPO="<repo name>"\n\n# Travis doesn\'t make it easy to get the current branch so... this...\nBRANCH=$(if [ "$TRAVIS_PULL_REQUEST" == "false" ]; then echo $TRAVIS_BRANCH; else echo $TRAVIS_PULL_REQUEST_BRANCH; fi)\n\n# Set the user email and name for the commit, set these to whatever you prefer\ngit config --global user.email "travis@travis-ci.org"\ngit config --global user.name "Travis CI"\n\n# Travis checks out a commit hash rather than a branch so we need to add the branch, fetch it and check it out\ngit remote set-branches --add origin $BRANCH\ngit fetch origin\ngit branch $BRANCH origin/$BRANCH\ngit checkout $BRANCH\n\n# Push the changes to the remote\ngit push origin $BRANCH\n'})}),"\n",(0,t.jsx)(i.h2,{id:"run-the-commit-script-from-travisyml",children:"Run the commit script from .travis.yml"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yml",children:"script:\n  - eik login -k $EIK_SERVER_KEY\n  - eik version\n  - eik package\n  - ./commit.sh\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Once setup, when you push changes to Github, if any of the files to be published have changed, you should automatically get a new published version of your assets on your Eik server and your ",(0,t.jsx)(i.code,{children:"eik.json"})," file will have been updated with the new semver version number."]})]})}function d(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1792:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/travis-settings-page-a682846298f0ba573b5b83514f828486.png"},6858:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/travis-settings-d9c37b8b46cf2efb182632b5e92200e2.png"},8453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>o});var t=n(6540);const s={},r=t.createContext(s);function a(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);