"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95235],{32738:(e,n,s)=>{s.d(n,{A:()=>i});var t=s(62540);s(63696);var o=s(46733);function i({toc:e,minHeadingLevel:n,maxHeadingLevel:s}){return(0,t.jsx)("div",{className:"tableOfContentsInline_2sru",children:(0,t.jsx)(o.A,{toc:e,minHeadingLevel:n,maxHeadingLevel:s,className:"table-of-contents",linkClassName:null})})}},46733:(e,n,s)=>{s.d(n,{A:()=>d});var t=s(62540),o=s(63696),i=s(25436);function r(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},t=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),t.forEach(function(n){var t;t=s[n],n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t})}return e}function c(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s.push.apply(s,t)}return s})(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}),e}function a(e){let n=e.getBoundingClientRect();return n.top===n.bottom?a(e.parentNode):n}var l=s(36372);let u=o.memo(function e({toc:n,className:s,linkClassName:o,isChild:i}){return n.length?(0,t.jsx)("ul",{className:i?void 0:s,children:n.map(n=>(0,t.jsxs)("li",{children:[(0,t.jsx)(l.A,{to:`#${n.id}`,className:null!=o?o:void 0,dangerouslySetInnerHTML:{__html:n.value}}),(0,t.jsx)(e,{isChild:!0,toc:n.children,className:s,linkClassName:o})]},n.id))}):null});function d(e){var{toc:n,className:s="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:d,minHeadingLevel:h,maxHeadingLevel:g}=e,f=function(e,n){if(null==e)return{};var s,t,o=function(e,n){if(null==e)return{};var s,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)s=i[t],n.indexOf(s)>=0||(o[s]=e[s]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)s=i[t],!(n.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}(e,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);let p=(0,i.p)(),m=null!=h?h:p.tableOfContents.minHeadingLevel,j=null!=g?g:p.tableOfContents.maxHeadingLevel,x=function({toc:e,minHeadingLevel:n,maxHeadingLevel:s}){return(0,o.useMemo)(()=>(function e({toc:n,minHeadingLevel:s,maxHeadingLevel:t}){return n.flatMap(n=>{let o=e({toc:n.children,minHeadingLevel:s,maxHeadingLevel:t});return n.level>=s&&n.level<=t?[c(r({},n),{children:o})]:o})})({toc:function(e){let n=e.map(e=>c(r({},e),{parentIndex:-1,children:[]})),s=Array(7).fill(-1);n.forEach((e,n)=>{let t=s.slice(2,e.level);e.parentIndex=Math.max(...t),s[e.level]=n});let t=[];return n.forEach(e=>{let{parentIndex:s}=e,o=function(e,n){if(null==e)return{};var s,t,o=function(e,n){if(null==e)return{};var s,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)s=i[t],n.indexOf(s)>=0||(o[s]=e[s]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)s=i[t],!(n.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}(e,["parentIndex"]);s>=0?n[s].children.push(o):t.push(o)}),t}(e),minHeadingLevel:n,maxHeadingLevel:s}),[e,n,s])}({toc:n,minHeadingLevel:m,maxHeadingLevel:j});return!function(e){let n=(0,o.useRef)(void 0),s=function(){let e=(0,o.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.p)();return(0,o.useEffect)(()=>{e.current=n?0:document.querySelector(".navbar").clientHeight},[n]),e}();(0,o.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:t,linkActiveClassName:o,minHeadingLevel:i,maxHeadingLevel:r}=e;function c(){let e=Array.from(document.getElementsByClassName(t)),c=function(e,{anchorTopOffset:n}){var s,t,o;let i=e.find(e=>a(e).top>=n);return i?(o=a(i)).top>0&&o.bottom<window.innerHeight/2?i:null!==(s=e[e.indexOf(i)-1])&&void 0!==s?s:null:null!==(t=e[e.length-1])&&void 0!==t?t:null}(function({minHeadingLevel:e,maxHeadingLevel:n}){let s=[];for(let t=e;t<=n;t+=1)s.push(`h${t}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:r}),{anchorTopOffset:s.current}),l=e.find(e=>c&&c.id===decodeURIComponent(e.href.substring(e.href.indexOf("#")+1)));e.forEach(e=>{e===l?(n.current&&n.current!==e&&n.current.classList.remove(o),e.classList.add(o),n.current=e):e.classList.remove(o)})}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}},[e,s])}((0,o.useMemo)(()=>{if(l&&d)return{linkClassName:l,linkActiveClassName:d,minHeadingLevel:m,maxHeadingLevel:j}},[l,d,m,j])),(0,t.jsx)(u,function(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},t=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),t.forEach(function(n){var t;t=s[n],n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t})}return e}({toc:x,className:s,linkClassName:l},f))}},64785:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>u});let t=JSON.parse('{"id":"configuration","title":"Configuration","description":"Configuring your site\'s behavior through docusaurus.config.js and more.","source":"@site/docs/configuration.mdx","sourceDirName":".","slug":"/configuration","permalink":"/docs/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/configuration.mdx","tags":[],"version":"current","lastUpdatedBy":"Guruh46","lastUpdatedAt":1728088187000,"frontMatter":{"description":"Configuring your site\'s behavior through docusaurus.config.js and more."},"sidebar":"docs","previous":{"title":"Installation","permalink":"/docs/installation"},"next":{"title":"Playground","permalink":"/docs/playground"}}');var o=s(62540),i=s(43023),r=s(32738);let c={description:"Configuring your site's behavior through docusaurus.config.js and more."},a="Configuration",l={},u=[{value:"Syntax to declare <code>docusaurus.config.js</code>",id:"syntax-to-declare-docusaurus-config",level:2},{value:"What goes into a <code>docusaurus.config.js</code>?",id:"what-goes-into-a-docusaurusconfigjs",level:2},{value:"Site metadata",id:"site-metadata",level:3},{value:"Deployment configurations",id:"deployment-configurations",level:3},{value:"Theme, plugin, and preset configurations",id:"theme-plugin-and-preset-configurations",level:3},{value:"Custom configurations",id:"custom-configurations",level:3},{value:"Accessing configuration from components",id:"accessing-configuration-from-components",level:2},{value:"Customizing Babel Configuration",id:"customizing-babel-configuration",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"configuration",children:"Configuration"})}),"\n","\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Check the ",(0,o.jsx)(n.a,{href:"/docs/api/docusaurus-config",children:(0,o.jsxs)(n.strong,{children:[(0,o.jsx)(n.code,{children:"docusaurus.config.js"})," API reference"]})})," for an exhaustive list of options."]})}),"\n",(0,o.jsx)(n.p,{children:"Docusaurus has a unique take on configurations. We encourage you to congregate information about your site into one place. We guard the fields of this file and facilitate making this data object accessible across your site."}),"\n",(0,o.jsxs)(n.p,{children:["Keeping a well-maintained ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"})," helps you, your collaborators, and your open source contributors to be able to focus on documentation while still being able to customize the site."]}),"\n",(0,o.jsxs)(n.h2,{id:"syntax-to-declare-docusaurus-config",children:["Syntax to declare ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"})]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"})," file is run in Node.js and should export either:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["a ",(0,o.jsx)(n.strong,{children:"config object"})]}),"\n",(0,o.jsxs)(n.li,{children:["a ",(0,o.jsx)(n.strong,{children:"function"})," that creates the config object"]}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"})," file supports:"]}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://flaviocopes.com/es-modules/",children:(0,o.jsx)(n.strong,{children:"ES Modules"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://flaviocopes.com/commonjs/",children:(0,o.jsx)(n.strong,{children:"CommonJS"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/typescript-support#typing-config",children:(0,o.jsx)(n.strong,{children:"TypeScript"})})}),"\n"]}),(0,o.jsx)(n.p,{children:"Constraints:"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Required:"})," use ",(0,o.jsx)(n.code,{children:"export default /* your config*/"})," (or ",(0,o.jsx)(n.code,{children:"module.exports"})," to export your Docusaurus config"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Optional:"})," use ",(0,o.jsx)(n.code,{children:"import Lib from 'lib'"})," (or ",(0,o.jsx)(n.code,{children:"require('lib')"}),") to import Node.js packages"]}),"\n"]})]}),"\n",(0,o.jsxs)(n.p,{children:["Docusaurus gives us the ability to declare its configuration in various ",(0,o.jsx)(n.strong,{children:"equivalent ways"}),", and all the following config examples lead to the exact same result:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  title: 'Docusaurus',\n  url: 'https://docusaurus.io',\n  // your site config ...\n};\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  title: 'Docusaurus',\n  url: 'https://docusaurus.io',\n  // your site config ...\n};\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="docusaurus.config.ts"',children:"import type {Config} from '@docusaurus/types';\n\nexport default {\n  title: 'Docusaurus',\n  url: 'https://docusaurus.io',\n  // your site config ...\n} satisfies Config;\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"const config = {\n  title: 'Docusaurus',\n  url: 'https://docusaurus.io',\n  // your site config ...\n};\n\nexport default config;\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default function configCreator() {\n  return {\n    title: 'Docusaurus',\n    url: 'https://docusaurus.io',\n    // your site config ...\n  };\n}\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default async function createConfigAsync() {\n  return {\n    title: 'Docusaurus',\n    url: 'https://docusaurus.io',\n    // your site config ...\n  };\n}\n"})}),"\n",(0,o.jsxs)(n.admonition,{title:"Using ESM-only packages",type:"tip",children:[(0,o.jsx)(n.p,{children:"Using an async config creator can be useful to import ESM-only modules (notably most Remark plugins). It is possible to import such modules thanks to dynamic imports:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default async function createConfigAsync() {\n  // Use a dynamic import instead of require('esm-lib')\n  // highlight-next-line\n  const lib = await import('lib');\n\n  return {\n    title: 'Docusaurus',\n    url: 'https://docusaurus.io',\n    // rest of your site config...\n  };\n}\n"})})]}),"\n",(0,o.jsxs)(n.h2,{id:"what-goes-into-a-docusaurusconfigjs",children:["What goes into a ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"}),"?"]}),"\n",(0,o.jsxs)(n.p,{children:["You should not have to write your ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"})," from scratch even if you are developing your site. All templates come with a ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"})," that includes defaults for the common options."]}),"\n",(0,o.jsx)(n.p,{children:"However, it can be helpful if you have a high-level understanding of how the configurations are designed and implemented."}),"\n",(0,o.jsx)(n.p,{children:"The high-level overview of Docusaurus configuration can be categorized into:"}),"\n",(0,o.jsx)(r.A,{toc:u,minHeadingLevel:3,maxHeadingLevel:3}),"\n",(0,o.jsx)(n.h3,{id:"site-metadata",children:"Site metadata"}),"\n",(0,o.jsxs)(n.p,{children:["Site metadata contains the essential global metadata such as ",(0,o.jsx)(n.code,{children:"title"}),", ",(0,o.jsx)(n.code,{children:"url"}),", ",(0,o.jsx)(n.code,{children:"baseUrl"}),", and ",(0,o.jsx)(n.code,{children:"favicon"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"They are used in several places such as your site's title and headings, browser tab icon, social sharing (Facebook, Twitter) information or even to generate the correct path to serve your static files."}),"\n",(0,o.jsx)(n.h3,{id:"deployment-configurations",children:"Deployment configurations"}),"\n",(0,o.jsxs)(n.p,{children:["Deployment configurations such as ",(0,o.jsx)(n.code,{children:"projectName"}),", ",(0,o.jsx)(n.code,{children:"organizationName"}),", and optionally ",(0,o.jsx)(n.code,{children:"deploymentBranch"})," are used when you deploy your site with the ",(0,o.jsx)(n.code,{children:"deploy"})," command."]}),"\n",(0,o.jsxs)(n.p,{children:["It is recommended to check the ",(0,o.jsx)(n.a,{href:"/docs/deployment",children:"deployment docs"})," for more information."]}),"\n",(0,o.jsx)(n.h3,{id:"theme-plugin-and-preset-configurations",children:"Theme, plugin, and preset configurations"}),"\n",(0,o.jsxs)(n.p,{children:["List the ",(0,o.jsx)(n.a,{href:"/docs/using-plugins#using-themes",children:"themes"}),", ",(0,o.jsx)(n.a,{href:"/docs/using-plugins",children:"plugins"}),", and ",(0,o.jsx)(n.a,{href:"/docs/using-plugins#using-presets",children:"presets"})," for your site in the ",(0,o.jsx)(n.code,{children:"themes"}),", ",(0,o.jsx)(n.code,{children:"plugins"}),", and ",(0,o.jsx)(n.code,{children:"presets"})," fields, respectively. These are typically npm packages:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  plugins: [\n    '@docusaurus/plugin-content-blog',\n    '@docusaurus/plugin-content-pages',\n  ],\n  themes: ['@docusaurus/theme-classic'],\n};\n"})}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsxs)(n.p,{children:["Docusaurus supports ",(0,o.jsx)(n.a,{href:"/docs/using-plugins#module-shorthands",children:(0,o.jsx)(n.strong,{children:"module shorthands"})}),", allowing you to simplify the above configuration as:"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  plugins: ['content-blog', 'content-pages'],\n  themes: ['classic'],\n};\n"})})]}),"\n",(0,o.jsx)(n.p,{children:"They can also be loaded from local directories:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"import path from 'path';\n\nexport default {\n  // ...\n  themes: [path.resolve(__dirname, '/path/to/docusaurus-local-theme')],\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"To specify options for a plugin or theme, replace the name of the plugin or theme in the config file with an array containing the name and an options object:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  plugins: [\n    [\n      'content-blog',\n      {\n        path: 'blog',\n        routeBasePath: 'blog',\n        include: ['*.md', '*.mdx'],\n        // ...\n      },\n    ],\n    'content-pages',\n  ],\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["To specify options for a plugin or theme that is bundled in a preset, pass the options through the ",(0,o.jsx)(n.code,{children:"presets"})," field. In this example, ",(0,o.jsx)(n.code,{children:"docs"})," refers to ",(0,o.jsx)(n.code,{children:"@docusaurus/plugin-content-docs"})," and ",(0,o.jsx)(n.code,{children:"theme"})," refers to ",(0,o.jsx)(n.code,{children:"@docusaurus/theme-classic"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          sidebarPath: './sidebars.js',\n        },\n        theme: {\n          customCss: ['./src/css/custom.css'],\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"presets: [['classic', {...}]]"})," shorthand works as well."]})}),"\n",(0,o.jsxs)(n.p,{children:["For further help configuring themes, plugins, and presets, see ",(0,o.jsx)(n.a,{href:"/docs/using-plugins",children:"Using Plugins"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"custom-configurations",children:"Custom configurations"}),"\n",(0,o.jsxs)(n.p,{children:["Docusaurus guards ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"})," from unknown fields. To add custom fields, define them in ",(0,o.jsx)(n.code,{children:"customFields"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  // highlight-start\n  customFields: {\n    image: '',\n    keywords: [],\n  },\n  // highlight-end\n  // ...\n};\n"})}),"\n",(0,o.jsx)(n.h2,{id:"accessing-configuration-from-components",children:"Accessing configuration from components"}),"\n",(0,o.jsxs)(n.p,{children:["Your configuration object will be made available to all the components of your site. And you may access them via React context as ",(0,o.jsx)(n.code,{children:"siteConfig"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Basic example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\n// highlight-next-line\nimport useDocusaurusContext from '@docusaurus/useDocusaurusContext';\n\nconst Hello = () => {\n  // highlight-start\n  const {siteConfig} = useDocusaurusContext();\n  // highlight-end\n  const {title, tagline} = siteConfig;\n\n  return <div>{`${title} \xb7 ${tagline}`}</div>;\n};\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["If you just want to use those fields on the client side, you could create your own JS files and import them as ES6 modules, there is no need to put them in ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"customizing-babel-configuration",children:"Customizing Babel Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["For new Docusaurus projects, we automatically generated a ",(0,o.jsx)(n.code,{children:"babel.config.js"})," in the project root."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="babel.config.js"',children:"export default {\n  presets: ['@docusaurus/core/lib/babel/preset'],\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"Most of the time, this configuration will work just fine. If you want to customize your Babel configuration (e.g. to add support for Flow), you can directly edit this file. For your changes to take effect, you need to restart the Docusaurus dev server."})]})}function h(e={}){let{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(63696);let o={},i=t.createContext(o);function r(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);