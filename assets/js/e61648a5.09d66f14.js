"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[737],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),f=r,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},253:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1},o="Apache Airflow",l={unversionedId:"integrations/airflow/airflow",id:"integrations/airflow/airflow",title:"Apache Airflow",description:"Airflow is a widely-used workflow automation and scheduling platform that can be used to author and manage data pipelines. Airflow uses workflows made of directed acyclic graphs (DAGs) of tasks. To learn more about Airflow, check out the Airflow documentation.",source:"@site/docs/integrations/airflow/airflow.md",sourceDirName:"integrations/airflow",slug:"/integrations/airflow/",permalink:"/docs/integrations/airflow/",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/integrations/airflow/airflow.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Column Level Lineage",permalink:"/docs/integrations/spark/spark_column_lineage"},next:{title:"Manually annotated lineage",permalink:"/docs/integrations/airflow/manual"}},s={},c=[{value:"How does Airflow work with OpenLineage?",id:"how-does-airflow-work-with-openlineage",level:2},{value:"How can I use this integration?",id:"how-can-i-use-this-integration",level:2},{value:"PREREQUISITES",id:"prerequisites",level:4},{value:"INSTALLATION",id:"installation",level:4},{value:"CONFIGURATION",id:"configuration",level:4},{value:"USAGE",id:"usage",level:4},{value:"Where can I learn more?",id:"where-can-i-learn-more",level:2},{value:"Feedback",id:"feedback",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"apache-airflow"},"Apache Airflow"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Airflow")," is a widely-used workflow automation and scheduling platform that can be used to author and manage data pipelines. Airflow uses workflows made of directed acyclic graphs (DAGs) of tasks. To learn more about Airflow, check out the Airflow ",(0,r.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/stable/index.html"},"documentation"),"."),(0,r.kt)("h2",{id:"how-does-airflow-work-with-openlineage"},"How does Airflow work with OpenLineage?"),(0,r.kt)("p",null,"Understanding complex inter-DAG dependencies and providing up-to-date runtime visibility into DAG execution can be challenging. OpenLineage integrates with Airflow to collect DAG lineage metadata so that inter-DAG dependencies are easily maintained and viewable via a lineage graph, while also keeping a catalog of historical runs of DAGs."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(8775).Z,width:"734",height:"436"})),(0,r.kt)("p",null,"The DAG metadata collected can answer questions like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Why has a DAG failed?"),(0,r.kt)("li",{parentName:"ul"},"Why has the DAG runtime increased after a code change?"),(0,r.kt)("li",{parentName:"ul"},"What are the upstream dependencies of a DAG?")),(0,r.kt)("h2",{id:"how-can-i-use-this-integration"},"How can I use this integration?"),(0,r.kt)("h4",{id:"prerequisites"},"PREREQUISITES"),(0,r.kt)("p",null,"To use the OpenLineage Airflow integration, you'll need a running Airflow instance. You'll also need an OpenLineage compatible ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage#scope"},"backend"),"."),(0,r.kt)("h4",{id:"installation"},"INSTALLATION"),(0,r.kt)("p",null,"To download and install the latest ",(0,r.kt)("inlineCode",{parentName:"p"},"openlineage-airflow")," library, update the ",(0,r.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file of your running Airflow instance with: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"openlineage-airflow\n")),(0,r.kt)("h4",{id:"configuration"},"CONFIGURATION"),(0,r.kt)("p",null,"Next, we'll need to specify where we want OpenLineage to send events. There are a few options.\nSimplest one is to use ",(0,r.kt)("inlineCode",{parentName:"p"},"OPENLINEAGE_URL")," environment variable.\nFor example, to send OpenLineage events to a local instance of Marquez, use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OPENLINEAGE_AIRFLOW=http://localhost:5000\n")),(0,r.kt)("p",null,"To set up additional configuration, or send events to other targets than HTTP server (like Kafka topic) take a look at ",(0,r.kt)("a",{parentName:"p",href:"/docs/client/python"},"client configuration.")),(0,r.kt)("p",null,"If you use older version of Airflow than 2.3.0, ",(0,r.kt)("a",{parentName:"p",href:"/docs/integrations/airflow/older"},"additional configuration is required"),"."),(0,r.kt)("h4",{id:"usage"},"USAGE"),(0,r.kt)("p",null,"When enabled, the integration will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On TaskInstance ",(0,r.kt)("strong",{parentName:"li"},"start"),", collect metadata for each task"),(0,r.kt)("li",{parentName:"ul"},"Collect task input / output metadata (source, schema, etc)"),(0,r.kt)("li",{parentName:"ul"},"Collect task run-level metadata (execution time, state, parameters, etc)"),(0,r.kt)("li",{parentName:"ul"},"On TaskInstance ",(0,r.kt)("strong",{parentName:"li"},"complete"),", also mark the task as complete in Marquez")),(0,r.kt)("h2",{id:"where-can-i-learn-more"},"Where can I learn more?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Take a look at Marquez's Airflow ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/MarquezProject/marquez/tree/main/examples/airflow"},"example")," to learn how to enable OpenLineage metadata collection for Airflow DAGs and troubleshoot failing DAGs using Marquez."),(0,r.kt)("li",{parentName:"ul"},"Watch ",(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=2s013GQy1Sw"},"Data Lineage with OpenLineage and Airflow"))),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)("p",null,"You can reach out to us on ",(0,r.kt)("a",{parentName:"p",href:"http://bit.ly/OpenLineageSlack"},"slack")," and leave us feedback!"))}u.isMDXComponent=!0},8775:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/af-schematic-258f04ca7f857ac06a964e1eae73fc03.svg"}}]);