"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4552],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,h=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3007:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={title:"0.19.2",sidebar_position:1},l="0.19.2 - 2023-1-4",o={unversionedId:"releases/0_19_2",id:"releases/0_19_2",title:"0.19.2",description:"Added",source:"@site/docs/releases/0_19_2.md",sourceDirName:"releases",slug:"/releases/0_19_2",permalink:"/docs/releases/0_19_2",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/releases/0_19_2.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"0.19.2",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"SQL parser",permalink:"/docs/development/sql"},next:{title:"0.18.0",permalink:"/docs/releases/0_18_0"}},p={},s=[{value:"Added",id:"added",level:3},{value:"Fixed",id:"fixed",level:3}],m={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0192---2023-1-4"},"0.19.2 - 2023-1-4"),(0,r.kt)("h3",{id:"added"},"Added"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Airflow: add Trino extractor ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1288"},(0,r.kt)("inlineCode",{parentName:"a"},"#1288"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/sekikn"},"@sekikn"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds a Trino extractor to the Airflow integration.")),(0,r.kt)("li",{parentName:"ul"},"Airflow: add ",(0,r.kt)("inlineCode",{parentName:"li"},"S3FileTransformOperator")," extractor ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1450"},(0,r.kt)("inlineCode",{parentName:"a"},"#1450"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/sekikn"},"@sekikn"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds an ",(0,r.kt)("inlineCode",{parentName:"em"},"S3FileTransformOperator")," extractor to the Airflow integration.")),(0,r.kt)("li",{parentName:"ul"},"Airflow: add standardized run facet ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1413"},(0,r.kt)("inlineCode",{parentName:"a"},"#1413"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/JDarDagran"},"@JDarDagran"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Creates one standardized run facet for the Airflow integration.")),(0,r.kt)("li",{parentName:"ul"},"Airflow: add ",(0,r.kt)("inlineCode",{parentName:"li"},"NominalTimeRunFacet")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"OwnershipJobFacet")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1410"},(0,r.kt)("inlineCode",{parentName:"a"},"#1410"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/JDarDagran"},"@JDarDagran"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds ",(0,r.kt)("inlineCode",{parentName:"em"},"nominalEndTime")," and ",(0,r.kt)("inlineCode",{parentName:"em"},"OwnershipJobFacet")," fields to the Airflow integration.")),(0,r.kt)("li",{parentName:"ul"},"dbt: add support for postgres datasources ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1417"},(0,r.kt)("inlineCode",{parentName:"a"},"#1417"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/julienledem"},"@julienledem"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds the previously unsupported postgres datasource type.")),(0,r.kt)("li",{parentName:"ul"},"Proxy: add client-side proxy (skeletal version) ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1439"},(0,r.kt)("inlineCode",{parentName:"a"},"#1439"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1420"},(0,r.kt)("inlineCode",{parentName:"a"},"#1420"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/fm100"},"@fm100"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Implements a skeletal version of a client-side proxy.")),(0,r.kt)("li",{parentName:"ul"},"Proxy: add CI job to publish Docker image ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1086"},(0,r.kt)("inlineCode",{parentName:"a"},"#1086"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wslulciuc"},"@wslulciuc"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Includes a script to build and tag the image plus jobs to verify the build on every CI run and publish to Docker Hub.")),(0,r.kt)("li",{parentName:"ul"},"SQL: add ",(0,r.kt)("inlineCode",{parentName:"li"},"ExtractionErrorRunFacet")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1442"},(0,r.kt)("inlineCode",{parentName:"a"},"#1442"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds a facet to the spec to reflect internal processing errors, especially failed or incomplete parsing of SQL jobs.")),(0,r.kt)("li",{parentName:"ul"},"SQL: add column-level lineage to SQL parser ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1432"},(0,r.kt)("inlineCode",{parentName:"a"},"#1432"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1461"},(0,r.kt)("inlineCode",{parentName:"a"},"#1461"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/StarostaGit"},"@StarostaGit"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds support for extracting column-level lineage from SQL statements in the parser, including adjustments to Rust-Python and Rust-Java interfaces and the Airflow integration's SQL extractor to make use of the feature. Also includes more tests, removal of the old parser, and removal of the common-build cache in CI (which was breaking the parser).")),(0,r.kt)("li",{parentName:"ul"},"Spark: pass config parameters to the OL client ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1383"},(0,r.kt)("inlineCode",{parentName:"a"},"#1383"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tnazarew"},"@tnazarew"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds a mechanism for making new lineage consumers transparent to the integration, easing the process of setting up new types of consumers."))),(0,r.kt)("h3",{id:"fixed"},"Fixed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Airflow: fix ",(0,r.kt)("inlineCode",{parentName:"li"},"collect_ignore"),", add flags to Pytest for cleaner output ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1437"},(0,r.kt)("inlineCode",{parentName:"a"},"#1437"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/JDarDagran"},"@JDarDagran"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Removes the ",(0,r.kt)("inlineCode",{parentName:"em"},"extractors")," directory from the ignored list, improving unit testing.")),(0,r.kt)("li",{parentName:"ul"},"Spark & Java client: fix README typos ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/versaurabh"},"@versaurabh"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Fixes typos in the SPDX license headers."))))}c.isMDXComponent=!0}}]);