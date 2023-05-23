"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8975],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"0.1.0",sidebar_position:37},o="0.1.0 - 2021-08-13",l={unversionedId:"releases/0_1_0",id:"releases/0_1_0",title:"0.1.0",description:"OpenLineage is an Open Standard for lineage metadata collection designed to record metadata for a job in execution. The initial public release includes:",source:"@site/docs/releases/0_1_0.md",sourceDirName:"releases",slug:"/releases/0_1_0",permalink:"/docs/releases/0_1_0",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/releases/0_1_0.md",tags:[],version:"current",sidebarPosition:37,frontMatter:{title:"0.1.0",sidebar_position:37},sidebar:"tutorialSidebar",previous:{title:"0.2.0",permalink:"/docs/releases/0_2_0"}},p={},c=[],s={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"010---2021-08-13"},"0.1.0 - 2021-08-13"),(0,r.kt)("p",null,"OpenLineage is an ",(0,r.kt)("em",{parentName:"p"},"Open Standard")," for lineage metadata collection designed to record metadata for a job in execution. The initial public release includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"An inital specification.")," The the inital version ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/blob/0.1.0/spec/OpenLineage.md"},(0,r.kt)("inlineCode",{parentName:"a"},"1-0-0"))," of the OpenLineage specification defines the core model and facets."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Integrations")," that collect lineage metadata as OpenLineage events:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/tree/main/integration/airflow"},(0,r.kt)("inlineCode",{parentName:"a"},"Apache Airflow"))," with support for BigQuery, Great Expectations, Postgres, Redshift, Snowflake"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/tree/main/integration/spark"},(0,r.kt)("inlineCode",{parentName:"a"},"Apache Spark"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/tree/main/integration/dbt"},(0,r.kt)("inlineCode",{parentName:"a"},"dbt"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Clients")," that send OpenLineage events to an HTTP backend. Both ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/tree/main/client/java"},(0,r.kt)("inlineCode",{parentName:"a"},"java"))," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/tree/main/client/python"},(0,r.kt)("inlineCode",{parentName:"a"},"python"))," are initially supported.")))}u.isMDXComponent=!0}}]);