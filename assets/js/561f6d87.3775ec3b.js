"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5037],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1009:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),i=a(4174);const o={title:"Resources",template:"basepage",hide_table_of_contents:!0,description:"Data lineage is the foundation for a new generation of powerful, context-aware data tools and best practices. OpenLineage enables consistent collection of lineage metadata, creating a deeper understanding of how data is produced and used."},l=void 0,s={type:"mdx",permalink:"/resources/",source:"@site/src/pages/resources/index.mdx",title:"Resources",description:"Data lineage is the foundation for a new generation of powerful, context-aware data tools and best practices. OpenLineage enables consistent collection of lineage metadata, creating a deeper understanding of how data is produced and used.",frontMatter:{title:"Resources",template:"basepage",hide_table_of_contents:!0,description:"Data lineage is the foundation for a new generation of powerful, context-aware data tools and best practices. OpenLineage enables consistent collection of lineage metadata, creating a deeper understanding of how data is produced and used."}},c=[{value:"Docs",id:"docs",level:2},{value:"Conference Talks",id:"conference-talks",level:2},{value:"Blog Posts",id:"blog-posts",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{id:"post-content"},(0,r.kt)("div",{className:"title px-4 py-12 text-center lg:py-14 lg:px-0"},(0,r.kt)("h2",{className:"text-5xl text-color-1"},"Resources")),(0,r.kt)("p",null,"These resources have been gathered to help new users learn about OpenLineage, or to enable experienced users to teach others."),(0,r.kt)("h2",{id:"docs"},"Docs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/apidocs/openapi"},"OpenAPI specification")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/apidocs/javadoc"},"Java client documentation"))),(0,r.kt)("h2",{id:"conference-talks"},"Conference Talks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=pLBVGIPuwEo"},"Cross-platform Data Lineage with OpenLineage")," - Julien Le Dem @ Berlin Buzzwords (2022)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mattturck.com/datakin/"},"Data Observability and Pipelines: OpenLineage and Marquez")," - Matt Turck @ Data Driven NYC (2021)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bigdatatechwarsaw.eu/edition-2021/"},"Data Lineage and Observability with Marquez and OpenLineage")," - Julien Le Dem @ Big Data Technology Warsaw Summit (2021)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://airflowsummit.org/sessions/2021/data-lineage-with-apache-airflow-using-openlineage/"},"Data Lineage with Apache Airflow using OpenLineage")," - Julien Le Dem & Willy Lulciuc @ Airflow Summit (2021)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://2021.berlinbuzzwords.de/session/observability-data-pipelines-openlineage"},"Observability for data pipelines with OpenLineage")," - Julien Le Dem @ Berlin Buzzwords (2021)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=MoW-YGjHLgI"},"Data Observability and Pipelines: OpenLineage and Marquez")," - Julien Le Dem @ Data Driven NYC (2021)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=anlV5Er_BpM"},"OpenLineage Lightning Talk")," - Julien Le Dem @ MetaSpeak Metadata Day (2020)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.coss.community/coss/ocs-2020-breakout-julien-le-dem-3eh4"},"Observability for Data Pipelines: OpenLineage Project Launch")," - Julien Le Dem @ Open Core Summit (2020)")),(0,r.kt)("h2",{id:"blog-posts"},"Blog Posts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://datakin.com/introducing-openlineage/"},"Introducing OpenLineage")," - from Julien Le Dem of Datakin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hightouch.io/blog/exploring-data-lineage-with-open-lineage/"},"Exploring Data Lineage with OpenLineage")," - from Pedram Navid of Hightough")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"If you would like your blog post, video, or resource to be included on this list, please email ",(0,r.kt)("a",{parentName:"p",href:"mailto:community@openlineage.io"},"community@openlineage.io"),"."),(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)(i.Z,{mdxType:"Footer"}))}u.isMDXComponent=!0},4174:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(2263);function i(){const{siteConfig:e}=(0,r.Z)(),t=e.customFields.links.map(((e,t)=>n.createElement(o,{data:e,key:`footer-n-l-${t}`}))),a=e.customFields.linksSocial.map(((e,t)=>n.createElement(o,{data:e,key:`footer-n-l-${t}`})));return n.createElement("footer",{className:"footer bg-bgalt py-12"},n.createElement("div",{className:"container mx-auto text-center"},n.createElement("div",{className:"flex justify-center my-3 mb-4"},n.createElement("a",{href:"/",title:e?.title},n.createElement("img",{src:"/"+e.themeConfig.navbar.logo.src,alt:`${e.themeConfig.navbar.logo.alt} - logo`,style:{height:"45px"}}))),n.createElement("div",{className:"text-color-2 my-3 footer-links animated-link-parent"},n.createElement("ul",null,t)),n.createElement("div",{className:"text-color-2 my-3 footer-links animated-link-parent"},n.createElement("ul",null,a)),n.createElement("p",{className:"text-color-default text-lg"},"Copyright \xa9 ",(new Date).getFullYear()," The Linux Foundation\xae. All rights reserved.")))}const o=e=>{let{data:t}=e;return n.createElement("li",{className:"inline-block mx-3 animated-link-parent"},n.createElement("a",{href:t.to?t.to:t.href,title:t.label},n.createElement("span",null,t.label)))}}}]);