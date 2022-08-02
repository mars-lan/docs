"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="About OpenLineage",s={unversionedId:"index",id:"index",title:"About OpenLineage",description:"This page has not yet been written! You're welcome to contribute using the Edit link at the bottom.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/docs/getting-started"}},l={},c=[{value:"Design",id:"design",level:3},{value:"How OpenLineage Benefits the Ecosystem",id:"how-openlineage-benefits-the-ecosystem",level:3},{value:"BEFORE:",id:"before",level:4},{value:"WITH OPENLINEAGE:",id:"with-openlineage",level:4}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"about-openlineage"},"About OpenLineage"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This page has not yet been written! You're welcome to contribute using the Edit link at the bottom.")),(0,r.kt)("p",null,"OpenLineage is an open framework for data lineage collection and analysis. At its core is an extensible specification that systems can use to interoperate with lineage metadata."),(0,r.kt)("h3",{id:"design"},"Design"),(0,r.kt)("p",null,"OpenLineage is an ",(0,r.kt)("em",{parentName:"p"},"Open Standard")," for lineage metadata collection designed to record metadata for a ",(0,r.kt)("em",{parentName:"p"},"job")," in execution."),(0,r.kt)("p",null,"The standard defines a generic model of ",(0,r.kt)("em",{parentName:"p"},"dataset"),", ",(0,r.kt)("em",{parentName:"p"},"job"),", and ",(0,r.kt)("em",{parentName:"p"},"run")," entities uniquely identified using consistent naming strategies. The core model is highly extensible via facets. A ",(0,r.kt)("strong",{parentName:"p"},"facet")," is user-defined metadata and enables entity enrichment. We encourage you to familiarize yourself with the core model below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(7816).Z,width:"516",height:"140"})),(0,r.kt)("h3",{id:"how-openlineage-benefits-the-ecosystem"},"How OpenLineage Benefits the Ecosystem"),(0,r.kt)("p",null,"Below, we illustrate the challenges of collecting lineage metadata from multiple sources, schedulers and/or data processing frameworks. We then outline the design benefits of defining an ",(0,r.kt)("em",{parentName:"p"},"Open Standard")," for lineage metadata collection."),(0,r.kt)("h4",{id:"before"},"BEFORE:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(5429).Z,width:"891",height:"425"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each project has to instrument it's own custom metadata collection integration, therefore duplicating efforts."),(0,r.kt)("li",{parentName:"ul"},"Integrations are external and can break with new versions of the underlying scheduler and/or data processing framework, requiring projects to ensure ",(0,r.kt)("em",{parentName:"li"},"backwards")," compatibility.")),(0,r.kt)("h4",{id:"with-openlineage"},"WITH OPENLINEAGE:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(2769).Z,width:"811",height:"418"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Integration efforts are shared ",(0,r.kt)("em",{parentName:"li"},"across")," projects."),(0,r.kt)("li",{parentName:"ul"},"Integrations can be ",(0,r.kt)("em",{parentName:"li"},"pushed")," to the underlying scheduler and/or data processing framework; no need to play catch up and ensure compatibility!")))}d.isMDXComponent=!0},5429:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/before-ol-66bced130b7917da3e28f441c04f8ba9.svg"},7816:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/model-a6a03d737a81fc07e1af16e1ccb695c7.svg"},2769:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/with-ol-ddff6a87da85a40c132be0b911b497e2.svg"}}]);