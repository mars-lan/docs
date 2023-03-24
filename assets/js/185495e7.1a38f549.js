"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9895],{3905:(e,i,n)=>{n.d(i,{Zo:()=>g,kt:()=>M});var a=n(7294);function t(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function l(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?l(Object(n),!0).forEach((function(i){t(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function s(e,i){if(null==e)return{};var n,a,t=function(e,i){if(null==e)return{};var n,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],i.indexOf(n)>=0||(t[n]=e[n]);return t}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var r=a.createContext({}),I=function(e){var i=a.useContext(r),n=i;return e&&(n="function"==typeof e?e(i):o(o({},i),e)),n},g=function(e){var i=I(e.components);return a.createElement(r.Provider,{value:i},e.children)},c={inlineCode:"code",wrapper:function(e){var i=e.children;return a.createElement(a.Fragment,{},i)}},u=a.forwardRef((function(e,i){var n=e.components,t=e.mdxType,l=e.originalType,r=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=I(n),M=t,p=u["".concat(r,".").concat(M)]||u[M]||c[M]||l;return n?a.createElement(p,o(o({ref:i},g),{},{components:n})):a.createElement(p,o({ref:i},g))}));function M(e,i){var n=arguments,t=i&&i.mdxType;if("string"==typeof e||t){var l=n.length,o=new Array(l);o[0]=u;var s={};for(var r in i)hasOwnProperty.call(i,r)&&(s[r]=i[r]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var I=2;I<l;I++)o[I]=n[I];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8822:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>I});var a=n(7462),t=(n(7294),n(3905));const l={title:"Data Lineage with Snowflake",date:new Date("2022-04-27T00:00:00.000Z"),author:"Michael Robinson",image:"./image.svg",banner:"./banner.svg",description:"The OpenLineage Adapter offers Snowflake's enterprise users a powerful tool for analyzing their pipelines."},o=void 0,s={permalink:"/blog/openlineage-snowflake",source:"@site/blog/openlineage-snowflake/index.mdx",title:"Data Lineage with Snowflake",description:"The OpenLineage Adapter offers Snowflake's enterprise users a powerful tool for analyzing their pipelines.",date:"2022-04-27T00:00:00.000Z",formattedDate:"April 27, 2022",tags:[],readingTime:8.065,hasTruncateMarker:!0,authors:[{name:"Michael Robinson"}],frontMatter:{title:"Data Lineage with Snowflake",date:"2022-04-27T00:00:00.000Z",author:"Michael Robinson",image:"./image.svg",banner:"./banner.svg",description:"The OpenLineage Adapter offers Snowflake's enterprise users a powerful tool for analyzing their pipelines."},prevItem:{title:"Microsoft Purview Accelerates Lineage Extraction from Azure Databricks",permalink:"/blog/openlineage-microsoft-purview"},nextItem:{title:"OpenLineage Support in Egeria",permalink:"/blog/openlineage-egeria"}},r={image:n(6530).Z,authorsImageUrls:[void 0]},I=[{value:"Introduction",id:"introduction",level:2},{value:"Background",id:"background",level:2},{value:"Approach",id:"approach",level:2},{value:"A DAG-based Solution",id:"a-dag-based-solution",level:2},{value:"Getting Started with an Example",id:"getting-started-with-an-example",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installing Marquez",id:"installing-marquez",level:4},{value:"Preparing Snowflake",id:"preparing-snowflake",level:4},{value:"Preparing the Environment",id:"preparing-the-environment",level:3},{value:"Preparing Airflow",id:"preparing-airflow",level:3},{value:"Running the Example",id:"running-the-example",level:3},{value:"Result",id:"result",level:3},{value:"Potential Improvements",id:"potential-improvements",level:2},{value:"Conclusion",id:"conclusion",level:2}],g={toc:I};function c(e){let{components:i,...l}=e;return(0,t.kt)("wrapper",(0,a.Z)({},g,l,{components:i,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"The OpenLineage Adapter offers Snowflake's enterprise users a powerful tool for analyzing their pipelines."),(0,t.kt)("p",null,(0,t.kt)("img",{src:n(971).Z+"#full-width",width:"400",height:"80"})),(0,t.kt)("h2",{id:"introduction"},"Introduction"),(0,t.kt)("p",null,"We are excited to reveal a new way to gather lineage metadata directly from Snowflake: the OpenLineage Adapter. This integration offers Snowflake\u2019s enterprise users a powerful tool for analyzing and diagnosing issues with their data pipelines."),(0,t.kt)("p",null,"This new integration will add new diagnostic capability to one of the world\u2019s largest data platforms. Snowflake\u2019s Data Cloud currently empowers more than 5,900 companies, including 241 of the Fortune 500 as of January 2022, to unite siloed data, securely share data, and execute diverse analytic workloads across their organizations. Legacy platforms struggled to provide a single, secure, and universally accessible platform for organizations to warehouse and analyze their data, but Snowflake\u2019s Data Cloud provides a global ecosystem where customers, providers, and partners can finally break down data silos and derive value from rapidly growing data sets in secure, compliant, and governed ways."),(0,t.kt)("h2",{id:"background"},"Background"),(0,t.kt)("p",null,"An open source ",(0,t.kt)("a",{parentName:"p",href:"https://lfaidata.foundation/projects/openlineage"},"LF AI & Data Foundation")," sandbox project, OpenLineage provides an open standard for metadata and lineage collection that instruments jobs as they are running. OpenLineage not only automates the process of generating lineage and metadata about datasets, jobs, and runs in a data flow, but also does this in real time behind the scenes. With OpenLineage\u2019s open standard and extensible backend, users can easily identify the root causes of slow or failing jobs and issues with data quality in their ecosystems without parsing queries. The magic of OpenLineage is its standard API for capturing lineage events. Any number of tools \u2013 from schedulers to SQL engines \u2013 can send metadata from this endpoint to a compatible tool such as ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/MarquezProject/marquez"},"Marquez")," for visualization and further analysis of a pipeline."),(0,t.kt)("p",null,"Historically, the process of producing lineage and collecting metadata has been laborious and error-prone. Extracting data from query logs via parsing, for example, required one to reimplement database parsing logic, which added complexity and introduced opportunities for user error. In addition, the lineage collected was incomplete. One could learn about the view that was queried but not about the underlying tables in the pipeline, much less about the upstream and downstream dependencies of the datasets. OpenLineage, by contrast, exploits what the database already knows and does to maintain an up-to-date, end-to-end graph of a pipeline \u2013 and makes the graph available via an API.     "),(0,t.kt)("p",null,"OpenLineage and Snowflake play nicely because the latter is unusual among cloud data platforms for offering lineage information out of the box in a view (",(0,t.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/sql-reference/account-usage/access_history.html"},"ACCESS_HISTORY"),"). The integration of OpenLineage builds on this foundation to offer automated generation of lineage and metadata."),(0,t.kt)("p",null,"The value proposition of Snowflake + OpenLineage lies in the combination of an open standard tool, which supports multiple data systems to provide lineage in a single format, to Snowflake\u2019s existing production of lineage information on an enterprise scale. The integration gives customers the ability to consume enterprise-wide table lineage and process lineage together in a consolidated OpenLineage format. "),(0,t.kt)("h2",{id:"approach"},"Approach"),(0,t.kt)("p",null,"The process of integrating OpenLineage benefited from an existing query logging tool already available to Snowflake enterprise customers: the ",(0,t.kt)("inlineCode",{parentName:"p"},"ACCESS_HISTORY")," view. As its name suggests, this feature, designed initially for governance use cases, offers users a detailed view of read operations conducted on Snowflake objects (e.g., tables, views, and columns) on an on-demand basis in response to SQL queries. (Write operations are viewable as a preview feature.)"),(0,t.kt)("p",null,"As developed primarily by former Snowflake intern Aly Hirani with support from Datakin Senior Engineer Minkyu Park, the OpenLineage integration makes Access History the basis of automated production of lineage and metadata. But rather than produce a view for querying, OpenLineage produces a holistic lineage graph. To create the graph, the integration takes the data used to populate the Access History view and sends it to the OpenLineage backend as a standard OpenLineage event. Events in OpenLineage are JSON objects that employ a consistent naming strategy for database entities and enrich those entities with facets:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'{\n    "eventType": "COMPLETE",\n    "eventTime": "2020-12-28T20:52:00.001+10:00",\n    "run": {\n        "runId": "d46e465b-d358-4d32-83d4-df660ff614dd"\n    },\n    "job": {\n        "namespace": "my-namespace",\n        "name": "my-job"\n    },\n    "outputs": [{\n        "namespace": "my-namespace",\n        "name": "my-output",\n        "facets": {\n        "schema": {\n            "_producer": "https://github.com/OpenLineage/OpenLineage/blob/v1-0-0/client",\n            "_schemaURL": "https://github.com/OpenLineage/OpenLineage/blob/v1-0-0/spec/OpenLineage.json#/definitions/SchemaDatasetFacet",\n            "fields": [\n            { "name": "a", "type": "VARCHAR"},\n            { "name": "b", "type": "VARCHAR"}\n            ]\n        }\n        }\n    }],    \n    "producer": "https://github.com/OpenLineage/OpenLineage/blob/v1-0-0/client"\n}\n')),(0,t.kt)("h2",{id:"a-dag-based-solution"},"A DAG-based Solution"),(0,t.kt)("p",null,"Automating lineage production from the Access History view required a two-DAG solution. Minkyu had initially planned to use one DAG to scan the view and produce the lineage graph, but the timing of the logs used for the view precluded the production of lineage data with a single DAG. The solution Minkyu found was a separate DAG with a schedule for scanning the Access History view on a regular interval."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"def send_ol_events():\n   client = OpenLineageClient.from_environment()\n\n   with connect(user=SNOWFLAKE_USER,\n                password=SNOWFLAKE_PASSWORD,\n                account=SNOWFLAKE_ACCOUNT,\n                database='OPENLINEAGE',\n                schema='PUBLIC') as conn:\n       with conn.cursor() as cursor:\n           ol_view = 'OPENLINEAGE_ACCESS_HISTORY'\n           ol_event_time_tag = 'OL_LATEST_EVENT_TIME'\n\n           var_query = f'''\n               set current_organization='{SNOWFLAKE_ACCOUNT}';\n           '''\n\n           cursor.execute(var_query)\n\n           ol_query = f'''\n               SELECT * FROM {ol_view}\n               WHERE EVENT:eventTime > system$get_tag('{ol_event_time_tag}', '{ol_view}', 'table')\n               ORDER BY EVENT:eventTime ASC;\n           '''\n\n           cursor.execute(ol_query)\n           ol_events = [json.loads(ol_event[0]) for ol_event in cursor.fetchall()]\n\n           for ol_event in ol_events:\n               client.emit(ol_event)\n\n           if len(ol_events) > 0:\n               latest_event_time = ol_events[-1]['eventTime']\n               cursor.execute(f'''\n                   ALTER VIEW {ol_view} SET TAG {ol_event_time_tag} = '{latest_event_time}';\n               ''')\n\ndefault_args = {\n   'owner': 'openlineage',\n   'depends_on_past': False,\n   'start_date': days_ago(1),\n   'email_on_failure': False,\n   'email_on_retry': False,\n   'email': ['demo@openlineage.io'],\n   'snowflake_conn_id': 'openlineage_snowflake'\n}\n\nwith DAG('etl_openlineage',\n    schedule_interval='@hourly',\n    catchup=False,\n    default_args=default_args,\n    description='Send OL events every minutes',\n    tags=[\"extract\"]) as dag:\n        t1 = PythonOperator(task_id='ol_event', python_callable=send_ol_events)\n")),(0,t.kt)("h2",{id:"getting-started-with-an-example"},"Getting Started with an Example"),(0,t.kt)("p",null,"This example uses Airflow to run a collection of Snowflake queries for a fictional food delivery service. Lineage data for these queries will be recorded within Snowflake ",(0,t.kt)("inlineCode",{parentName:"p"},"ACCESS_HISTORY")," and, using the OpenLineage Access History View, emitted to an OpenLineage backend."),(0,t.kt)("p",null,"This is done using a series of DAGs in ",(0,t.kt)("inlineCode",{parentName:"p"},"dags/etl")," that each use SnowflakeOperator to run queries, along with a DAG in ",(0,t.kt)("inlineCode",{parentName:"p"},"dags/lineage")," that uses PythonOperator to send generated OpenLineage events to the configured backend."),(0,t.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,t.kt)("h4",{id:"installing-marquez"},"Installing Marquez"),(0,t.kt)("p",null,"First, checkout the Marquez repository:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"% git clone https://github.com/MarquezProject/marquez.git\n% cd marquez\n")),(0,t.kt)("p",null,"Then, run Marquez in detached mode:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"% docker/up.sh -d\n%\n")),(0,t.kt)("h4",{id:"preparing-snowflake"},"Preparing Snowflake"),(0,t.kt)("p",null,"First, check out the OpenLineage Access History View repository:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"% git clone https://github.com/Snowflake-Labs/OpenLineage-AccessHistory-Setup.git\n% cd OpenLineage-AccessHistory-Setup\n")),(0,t.kt)("p",null,"The ",(0,t.kt)("inlineCode",{parentName:"p"},"OPENLINEAGE")," database and ",(0,t.kt)("inlineCode",{parentName:"p"},"FOOD_DELIVERY")," schema in Snowflake need to be created. This can be done using the SnowSQL command-line tool, or by pasting the queries into a new Snowflake Worksheet. This example uses SnowSQL."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"% snowsql -u <snowflake-user> -a <snowflake-account>\nSnowSQL> CREATE DATABASE OPENLINEAGE;\nSnowSQL> CREATE SCHEMA OPENLINEAGE.FOOD_DELIVERY;\n")),(0,t.kt)("p",null,"The view defined in ",(0,t.kt)("inlineCode",{parentName:"p"},"open_lineage_access_history.sql")," also needs to be created. This view represents the entries in ",(0,t.kt)("inlineCode",{parentName:"p"},"ACCESS_HISTORY")," as specially-constructed JSON objects containing RunEvents that can be emitted to an OpenLineage backend. To create it, use SnowSQL to set the current_organization session variable and execute the SQL file."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"SnowSQL> SET current_organization='<snowflake-organization>';\nSnowSQL> USE SCHEMA OPENLINEAGE.PUBLIC;\nSnowSQL> !source open_lineage_access_history.sql\n")),(0,t.kt)("p",null,"Finally, our lineage extraction DAG relies upon a tag on the view to keep track of which lineage events have been processed. This tag needs to be initialized:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"SnowSQL> CREATE TAG OL_LATEST_EVENT_TIME;\nSnowSQL> ALTER VIEW OPENLINEAGE.PUBLIC.OPENLINEAGE_ACCESS_HISTORY SET TAG OL_LATEST_EVENT_TIME = '1970-01-01T00:00:00.000';\nSnowSQL> !quit\n%\n")),(0,t.kt)("h3",{id:"preparing-the-environment"},"Preparing the Environment"),(0,t.kt)("p",null,"The following environment variables need to be set in order for the query DAGs to connect to Snowflake, and so that the extraction DAG can send lineage events to your OpenLineage backend:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"SNOWFLAKE_USER"),(0,t.kt)("li",{parentName:"ul"},"SNOWFLAKE_PASSWORD"),(0,t.kt)("li",{parentName:"ul"},"SNOWFLAKE_ACCOUNT"),(0,t.kt)("li",{parentName:"ul"},"OPENLINEAGE_URL"),(0,t.kt)("li",{parentName:"ul"},"AIRFLOW_CONN_OPENLINEAGE_SNOWFLAKE")),(0,t.kt)("p",null,"To do this, copy the ",(0,t.kt)("inlineCode",{parentName:"p"},".env-example")," file to ",(0,t.kt)("inlineCode",{parentName:"p"},".env"),", and edit it to provide the appropriate values for your environment. The variables in this file will be set for each service in the Airflow deployment."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"% cd examples/airflow\n% cp .env-example .env\n% vi .env\n")),(0,t.kt)("h3",{id:"preparing-airflow"},"Preparing Airflow"),(0,t.kt)("p",null,"Once the environment is prepared, initialize Airflow with docker-compose:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"% docker-compose up airflow-init\n")),(0,t.kt)("p",null,"This will take several minutes. When it has finished, bring up the Airflow services:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"% docker-compose up\n")),(0,t.kt)("p",null,"This will also take several minutes. Eventually, the webserver will be up at ",(0,t.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080"),". Log in using the default credentials (airflow/airflow) and navigate to the DAGs page. When you see 12 DAGs in the list, you can be confident that Airflow has completed its initialization of the example."),(0,t.kt)("h3",{id:"running-the-example"},"Running the Example"),(0,t.kt)("p",null,"Each of the DAGs is paused by default. Enable each one, skipping the ",(0,t.kt)("inlineCode",{parentName:"p"},"etl_openlineage")," DAG for now. They may not all run successfully on the first try, since they have interdependencies that this example leaves unmanaged."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Airflow DAG list",src:n(1201).Z,width:"2674",height:"1404"})),(0,t.kt)("p",null,"After each DAG has completed at least one successful run, enable ",(0,t.kt)("inlineCode",{parentName:"p"},"etl_openlineage"),". Wait for it to complete its run."),(0,t.kt)("h3",{id:"result"},"Result"),(0,t.kt)("p",null,"Navigate to your Marquez deployment and view the resulting lineage graph:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Lineage graph",src:n(9942).Z,width:"1328",height:"682"})),(0,t.kt)("h2",{id:"potential-improvements"},"Potential Improvements"),(0,t.kt)("p",null,"This new integration paves the way for an exciting set of potential future capabilities. These include support for ",(0,t.kt)("inlineCode",{parentName:"p"},"Object_Dependencies")," and the addition of Granular Lineage (column-level lineage). We are interested in feedback from users, which will help the team at Snowflake and the members of the OpenLineage community prioritize future work."),(0,t.kt)("h2",{id:"conclusion"},"Conclusion"),(0,t.kt)("p",null,"Snowflake\u2019s integration of the OpenLineage standard promises to dramatically improve enterprise users\u2019 ability to diagnose issues with quality and performance in their pipelines. This project is cause for optimism about future collaboration with OpenLineage. The fit between Snowflake\u2019s enterprise product and OpenLineage is already fairly seamless. Further collaboration would likely yield additional features and, by extension, more value for Snowflake\u2019s customers. Also, the fact that OpenLineage is an open standard offers opportunities for fruitful integrations with other partners. Supporters of OpenLineage already include Spark, Airflow, and dbt, and the list is growing. For more information or to contribute to OpenLineage, reach out on ",(0,t.kt)("a",{parentName:"p",href:"https://twitter.com/OpenLineage/"},"twitter")," or ",(0,t.kt)("a",{parentName:"p",href:"https://join.slack.com/t/openlineage/shared_invite/zt-oko79982-4bHHhxTUDQ9KXgQWXyWVxg"},"Slack"),", and check out the repositories on ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/"},"Github"),"."))}c.isMDXComponent=!0},971:(e,i,n)=>{n.d(i,{Z:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjwhLS0gQ3JlYXRlZCB3aXRoIFZlY3Rvcm5hdG9yIChodHRwOi8vdmVjdG9ybmF0b3IuaW8vKSAtLT4KPHN2ZyBoZWlnaHQ9IjEwMCUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQwMCA4MCIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6dmVjdG9ybmF0b3I9Imh0dHA6Ly92ZWN0b3JuYXRvci5pbyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8ZGVmcy8+CjxjbGlwUGF0aCBpZD0iQXJ0Ym9hcmRGcmFtZSI+CjxyZWN0IGhlaWdodD0iODAiIHdpZHRoPSI0MDAiIHg9IjAiIHk9IjAiLz4KPC9jbGlwUGF0aD4KPGcgY2xpcC1wYXRoPSJ1cmwoI0FydGJvYXJkRnJhbWUpIiBpZD0iVW50aXRsZWQiIHZlY3Rvcm5hdG9yOmxheWVyTmFtZT0iVW50aXRsZWQiPgo8cGF0aCBkPSJNMCAwTDQwMCAwTDQwMCAwTDQwMCA4MEw0MDAgODBMMCA4MEwwIDgwTDAgMEwwIDBaIiBmaWxsPSIjNzk3MDViIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjAyIDI4TDIyMCAxNDZMMzUyIDEyNEwzMzQgNkwyMDIgMjhaIiBmaWxsPSIjZTZiYzZlIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTIyOCAyOUw1MyA0OUw2NyAxNzZMMjQyIDE1NkwyMjggMjlaIiBmaWxsPSIjYzE5MTQwIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI3NiA3NEwzMDMgMTEzTDU5OS04OEw1NzItMTI3TDI3NiA3NFoiIGZpbGw9IiM3OTVkMjkiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTAgMTBMMjIgNjJMMjU0IDhMMjQyLTQzTDEwIDEwWiIgZmlsbD0iIzQ4M2UyYSIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xNzQgNzdMMTgzIDIxMkw0MTMgMTk0TDQwNCA1OUwxNzQgNzdaIiBmaWxsPSIjOTQ4ZTgyIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTEyMCA2OEwxMTQgMTQ5TDIyNyAxNTVMMjMzIDc0TDEyMCA2OFoiIGZpbGw9IiNiN2FkYTQiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTI3IDYxTDE5NCA2OUwxOTkgMjVMMTMyIDE3TDEyNyA2MVoiIGZpbGw9IiM3ZTU5MjAiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTI4IDY3TDAgNzNMNCAxNDdMMTMyIDE0MUwxMjggNjdaIiBmaWxsPSIjYTM5NTg1IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE4OSAzMkwxOTEgNTFMMzQ2IDMwTDM0NCAxMUwxODkgMzJaIiBmaWxsPSIjZTljZDkwIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE0NiA0OEwzMDYgNTVMMzA2IDQ2TDE0NiAzOUwxNDYgNDhaIiBmaWxsPSIjZjBjNjcyIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE5OSA2MUwyMDYgMjE0TDM0NSAyMDdMMzM4IDU0TDE5OSA2MVoiIGZpbGw9IiM4MTY4M2YiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjk3IDcxTDg0IDc1TDg0IDEwNUwyOTcgMTAxTDI5NyA3MVoiIGZpbGw9IiNhOTlkODkiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzczIDUxTDQ1OSAxMDlMNTY1LTQ3TDQ3OS0xMDVMMzczIDUxWiIgZmlsbD0iIzVkNGIyOCIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yMiAyNkwtMTczIDM1TC0xNzEgNjVMMjMgNTZMMjIgMjZaIiBmaWxsPSIjMzUzMjI3IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTY4IDUxTC0zNSA2NUwtMzIgNzlMNzAgNjVMNjggNTFaIiBmaWxsPSIjOWM3MjI0IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTMzMyA1TDQ3MCA2NUw1MDUtMTZMMzY4LTc2TDMzMyA1WiIgZmlsbD0iIzZhNmQ1OCIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yMTMgMTFMMTg0IDQ0TDIwMSA1OEwyMzAgMjVMMjEzIDExWiIgZmlsbD0iI2MyOTk0ZCIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik04MiA1MEw4NCA2MUwxNDcgNDRMMTQ1IDMzTDgyIDUwWiIgZmlsbD0iI2Q5YWIzNyIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zMCAyNkwxMDcgNDNMMTcwLTIzOEw5My0yNTVMMzAgMjZaIiBmaWxsPSIjNmQ2NDRmIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTMyMSAyNUwyNzYgNTBMMjgxIDU5TDMyNiAzNEwzMjEgMjVaIiBmaWxsPSIjY2RjNWI0IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTExNyAxM0wxNDIgNDBMMTY3IDE2TDE0Mi0xMEwxMTcgMTNaIiBmaWxsPSIjNGM0NzQxIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTM1NyA0NEw1NTMgOTJMNTU1IDgwTDM1OSAzMkwzNTcgNDRaIiBmaWxsPSIjNzg1MzBkIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTMzOCA3M0wxMDMgNjRMOTYgMjQzTDMzMSAyNTJMMzM4IDczWiIgZmlsbD0iI2EyOTQ3OCIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik05MSA5TDMwNCAyMUwzMTEtMTE5TDk4LTEzMUw5MSA5WiIgZmlsbD0iIzY5NWU0NiIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjwvZz4KPC9zdmc+Cg=="},6530:(e,i,n)=>{n.d(i,{Z:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjwhLS0gQ3JlYXRlZCB3aXRoIFZlY3Rvcm5hdG9yIChodHRwOi8vdmVjdG9ybmF0b3IuaW8vKSAtLT4KPHN2ZyBoZWlnaHQ9IjEwMCUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDYwMCA0MzUiIHdpZHRoPSIxMDAlIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnZlY3Rvcm5hdG9yPSJodHRwOi8vdmVjdG9ybmF0b3IuaW8iIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPGRlZnMvPgo8Y2xpcFBhdGggaWQ9IkFydGJvYXJkRnJhbWUiPgo8cmVjdCBoZWlnaHQ9IjQzNSIgd2lkdGg9IjYwMCIgeD0iMCIgeT0iMCIvPgo8L2NsaXBQYXRoPgo8ZyBjbGlwLXBhdGg9InVybCgjQXJ0Ym9hcmRGcmFtZSkiIGlkPSJVbnRpdGxlZCIgdmVjdG9ybmF0b3I6bGF5ZXJOYW1lPSJVbnRpdGxlZCI+CjxwYXRoIGQ9Ik0tMTMuNDU5MS02LjYyMTYzTDU5OC42ODUtNi42MjE2M0w1OTguNjg1LTYuNjIxNjNMNTk4LjY4NSA0MzkuNzMzTDU5OC42ODUgNDM5LjczM0wtMTMuNDU5MSA0MzkuNzMzTC0xMy40NTkxIDQzOS43MzNMLTEzLjQ1OTEtNi42MjE2M0wtMTMuNDU5MS02LjYyMTYzWiIgZmlsbD0iIzczNmI1NSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTIxNC41NjUgMjAxLjUwN0w0MTYuNTcyIDUxNi43NjFMNjg3LjQ0NiAzNDAuNzdMNDg1LjQzOCAyNS41MTU5TDIxNC41NjUgMjAxLjUwN1oiIGZpbGw9IiNkN2FjNWUiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDY4LjYwNCAyMDkuMTU5TDUxOS4xMDYgMzc0LjQzOEw2NjcuNTUxIDMyNi45OTdMNjE3LjA0OSAxNjEuNzE4TDQ2OC42MDQgMjA5LjE1OVoiIGZpbGw9IiM0ZDM2MGQiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTU2LjQxMSAxODMuMTQzTDIxLjczOTIgNDQxLjc3NEwyNzEuMTg4IDU2OC43OTRMNDA1Ljg2IDMxMC4xNjNMMTU2LjQxMSAxODMuMTQzWiIgZmlsbD0iI2MwOTI0NyIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik00OTkuMjExIDkxLjMyMTRMMjk1LjY3NCA5NS45MTI1TDMwMC4yNjUgMzA1LjU3Mkw1MDMuODAzIDMwMC45ODFMNDk5LjIxMSA5MS4zMjE0WiIgZmlsbD0iI2U2Yzk4ZSIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xODAuODk3IDQuMDkwODlMMTE4LjE1MiAxNjcuODM5TDI1Mi44MjQgMjE4LjM0MUwzMTUuNTY4IDU0LjU5MjhMMTgwLjg5NyA0LjA5MDg5WiIgZmlsbD0iIzQwMzMyMyIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yMjguMzM4IDI0Mi44MjdMMTgyLjQyNyAyOTEuNzk5TDMwNC44NTYgMzk4LjkyNEwzNTAuNzY3IDM0OS45NTJMMjI4LjMzOCAyNDIuODI3WiIgZmlsbD0iIzU2MzEwMiIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xMDcuNDM5IDMzMS41ODhMODIuOTUzNiA0MzcuMTgzTDQ0Ny4xNzkgNTE1LjIzMUw0NzEuNjY1IDQwOS42MzZMMTA3LjQzOSAzMzEuNTg4WiIgZmlsbD0iI2E4OWQ4ZCIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik02MS41Mjg1IDMxLjYzNzRMLTE5NS41NzIgNjAuNzE0MkwtMTYxLjkwNCAzMzEuNTg4TDkzLjY2NjEgMzAyLjUxMUw2MS41Mjg1IDMxLjYzNzRaIiBmaWxsPSIjNDUzZTJiIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTU0Ni42NTMgMTE4Ljg2OEw0MTAuNDUxIDM1OS4xMzRMNDcxLjY2NSAzOTIuODAyTDYwNy44NjcgMTUyLjUzNkw1NDYuNjUzIDExOC44NjhaIiBmaWxsPSIjNzQ1NDE4IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTQxOS42MzMgNDIxLjg3OUw1NTcuMzY1IDU4MS4wMzdMNzE0Ljk5MiA0NDMuMzA0TDU3Ny4yNiAyODQuMTQ3TDQxOS42MzMgNDIxLjg3OVoiIGZpbGw9IiM3YTc4NmYiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNTQ5LjcxMyAyNzguMDI1TDMxNC4wMzggMzYzLjcyNUwzMjQuNzUgMzkyLjgwMkw1NjAuNDI2IDMwNy4xMDJMNTQ5LjcxMyAyNzguMDI1WiIgZmlsbD0iIzZjNTIyOSIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xMi41NTcgMzQuNjk4MUw0OS4yODU2IDE2Ny44MzlMNDAxLjI2OCA2Ni44MzU2TDM2NC41NC02NC43NzUzTDEyLjU1NyAzNC42OTgxWiIgZmlsbD0iIzU5NTIzZiIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xMDguOTcgMjY4Ljg0M0wtMjIuNjQxMyAzMzEuNTg4TDE1LjYxNzcgNDEyLjY5N0wxNDcuMjI5IDM0OS45NTJMMTA4Ljk3IDI2OC44NDNaIiBmaWxsPSIjYTI3NjI2IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTM5OS43MzggNjguMzY2TDQ5LjI4NTYgMzEzLjIyNEw3NS4zMDE4IDM1MS40ODNMNDI1Ljc1NCAxMDYuNjI1TDM5OS43MzggNjguMzY2WiIgZmlsbD0iI2JiOTU0MSIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik04Ny41NDQ2IDM3Ljc1ODhMLTEzMS4yOTcgMTQ2LjQxNEwtNDEuMDA1NiAzMjUuNDY2TDE3Ni4zMDYgMjE2LjgxMUw4Ny41NDQ2IDM3Ljc1ODhaIiBmaWxsPSIjNWI1NTQyIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTU5Ljk5ODIgMzc3LjQ5OUwtNTQuNzc4OCA0MTcuMjg4TDExMC41IDg3Ny45MjZMMjI1LjI3NyA4MzguMTM3TDU5Ljk5ODIgMzc3LjQ5OVoiIGZpbGw9IiM5NDhjODUiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTEzLjU2MSAzOTQuMzMzTDExMy41NjEgNTMwLjUzNUwzMzUuNDYzIDUyOS4wMDRMMzM1LjQ2MyAzOTIuODAyTDExMy41NjEgMzk0LjMzM1oiIGZpbGw9IiNiMmE0OTIiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzIxLjY5IDE2My4yNDhMMzE4LjYyOSAyMDkuMTU5TDM3Mi4xOTIgMjEwLjY4OUwzNzUuMjUyIDE2NC43NzlMMzIxLjY5IDE2My4yNDhaIiBmaWxsPSIjZmZmZGQ3IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI0Mi4xMTEgMzEuNjM3NEw0MDIuNzk5IDEyNC45ODlMNDc3Ljc4Ni02LjYyMTYzTDMxNy4wOTktOTguNDQzMkwyNDIuMTExIDMxLjYzNzRaIiBmaWxsPSIjNjY1YzQyIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTUwMi4yNzIgNTEuNTMyTDQ1MS43NyA1Ni4xMjMxTDQ2NC4wMTMgMTczLjk2MUw1MTQuNTE1IDE2OS4zN0w1MDIuMjcyIDUxLjUzMloiIGZpbGw9IiNkY2NjYTUiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDEwLjQ1MSAxMDUuMDk1TDMyNi4yODEgMTI5LjU4TDM0MS41ODQgMTgxLjYxM0w0MjUuNzU0IDE1Ny4xMjdMNDEwLjQ1MSAxMDUuMDk1WiIgZmlsbD0iI2ViZDA5MSIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xMjQuMjczIDE5Mi4zMjVMMjY4LjEyNyAyMjQuNDYzTDI5MS4wODMgMTE1LjgwN0wxNDcuMjI5IDgzLjY2OTZMMTI0LjI3MyAxOTIuMzI1WiIgZmlsbD0iIzY0NTIzYSIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zNzYuNzgzIDExMS4yMTZMNDM5LjUyNyAxMzUuNzAyTDQ3OS4zMTcgMzMuMTY3N0w0MTYuNTcyIDguNjgxOTdMMzc2Ljc4MyAxMTEuMjE2WiIgZmlsbD0iIzk0ODA1OSIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zMy45ODIgMzU2LjA3NEwzMC45MjEzIDM3Ny40OTlMNDQ1LjY0OSA0MDguMTA2TDQ0OC43MSAzODYuNjgxTDMzLjk4MiAzNTYuMDc0WiIgZmlsbD0iIzk5N2U0NSIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjwvZz4KPC9zdmc+Cg=="},1201:(e,i,n)=>{n.d(i,{Z:()=>a});const a=n.p+"assets/images/snowflake-airflow-example-e7bd5af6f0f7db54096dd1c996e06a67.png"},9942:(e,i,n)=>{n.d(i,{Z:()=>a});const a=n.p+"assets/images/snowflake-openlineage-example-8802743d7b8dd89e7d0b711e64308bb9.png"}}]);