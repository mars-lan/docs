"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[749],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:5},o="Python",l={unversionedId:"client/python",id:"client/python",title:"Python",description:"Overview",source:"@site/docs/client/python.md",sourceDirName:"client",slug:"/client/python",permalink:"/docs/client/python",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/client/python.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/docs/client/java"},next:{title:"Integrating With OpenLineage",permalink:"/docs/integrations/about"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Built-in Transport Types",id:"built-in-transport-types",level:3},{value:"HTTP",id:"http",level:5},{value:"Kafka",id:"kafka",level:5},{value:"Custom Transport Type",id:"custom-transport-type",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Install OpenLineage and Marquez",id:"install-openlineage-and-marquez",level:3},{value:"Install the Python client",id:"install-the-python-client",level:3},{value:"Start Docker and Marquez",id:"start-docker-and-marquez",level:3}],u={toc:s};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"python"},"Python"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Python client is the basis of existing OpenLineage integrations such as Airflow and dbt."),(0,r.kt)("p",null,"The client enables the creation of lineage metadata events with Python code. The core data structures currently offered by the client are the ",(0,r.kt)("inlineCode",{parentName:"p"},"RunEvent"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"RunState"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Run"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Job"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Dataset"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Transport")," classes. These either configure or collect data for the emission of lineage events."),(0,r.kt)("p",null,"You can use the client to create your own custom integrations."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Download the package using ",(0,r.kt)("inlineCode",{parentName:"p"},"pip")," with "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pip install openlineage-python\n")),(0,r.kt)("p",null,"To install the package from source, use "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"python setup.py install\n")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"We recommend configuring the client with an ",(0,r.kt)("inlineCode",{parentName:"p"},"openlineage.yml")," file that tells the client how to connect to an OpenLineage backend."),(0,r.kt)("p",null,"You can make this file available to the client three ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Set an environment variable to a file path: ",(0,r.kt)("inlineCode",{parentName:"li"},"OPENLINEAGE_CONFIG=path/to/openlineage.yml"),"."),(0,r.kt)("li",{parentName:"ol"},"Put the file in the working directory."),(0,r.kt)("li",{parentName:"ol"},"Put the file in ",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/.openlineage"),".")),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"openlineage.yml"),", use a standard transport interface to specify the transport type (",(0,r.kt)("inlineCode",{parentName:"p"},"http"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"console"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kafka"),", or custom) and authorization parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'transport:\n  type: "http"\n  url: "https://backend:5000"\n  auth:\n    type: "api_key"\n    api_key: "f048521b-dfe8-47cd-9c65-0cb07d57591e"\n')),(0,r.kt)("p",null,"The type property (required) is a fully qualified class name that can be imported."),(0,r.kt)("h3",{id:"built-in-transport-types"},"Built-in Transport Types"),(0,r.kt)("h5",{id:"http"},"HTTP"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type - string (required)"),(0,r.kt)("li",{parentName:"ul"},"url - string (required)"),(0,r.kt)("li",{parentName:"ul"},"timeout - float specifying a timeout value when sending an event. Default: 5 seconds. (optional)"),(0,r.kt)("li",{parentName:"ul"},"verify - boolean specifying whether or not the client should verify TLS certificates from the backend. Default: true. (optional)"),(0,r.kt)("li",{parentName:"ul"},"auth - dictionary specifying authentication options. Requires the type property. (optional)"),(0,r.kt)("li",{parentName:"ul"},'type - string specifying the "api_key" or the fully qualified class name of your TokenProvider. (required if ',(0,r.kt)("inlineCode",{parentName:"li"},"auth")," is provided)"),(0,r.kt)("li",{parentName:"ul"},"api_key - string setting the Authentication HTTP header as the Bearer. (required if ",(0,r.kt)("inlineCode",{parentName:"li"},"api_key")," is set)")),(0,r.kt)("h5",{id:"kafka"},"Kafka"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type - string (required)"),(0,r.kt)("li",{parentName:"ul"},"config - string containing a Kafka producer config (required)"),(0,r.kt)("li",{parentName:"ul"},"topic - string specifying the topic (required)"),(0,r.kt)("li",{parentName:"ul"},"flush - boolean specifying whether or not Kafka should flush after each event. Default: true. (optional)")),(0,r.kt)("h3",{id:"custom-transport-type"},"Custom Transport Type"),(0,r.kt)("p",null,"To implement a custom transport, follow the instructions in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/blob/main/client/python/openlineage/client/transport/transport.py"},(0,r.kt)("inlineCode",{parentName:"a"},"transport.py")),"."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"To try out the client, follow the steps below to install and explore OpenLineage, Marquez (the reference implementation of OpenLineage), and the client itself. Then, the instructions will show you how to use these tools to add a run event and datasets to an existing namespace."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Docker 17.05+"),(0,r.kt)("li",{parentName:"ul"},"Docker Compose 1.29.1+"),(0,r.kt)("li",{parentName:"ul"},"Git (preinstalled on most versions of MacOS; verify your version with ",(0,r.kt)("inlineCode",{parentName:"li"},"git version"),")"),(0,r.kt)("li",{parentName:"ul"},"4 GB of available memory (the minimum for Docker \u2014 more is strongly recommended)")),(0,r.kt)("h3",{id:"install-openlineage-and-marquez"},"Install OpenLineage and Marquez"),(0,r.kt)("p",null,"Clone the Marqez Github repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/MarquezProject/marquez.git\n")),(0,r.kt)("h3",{id:"install-the-python-client"},"Install the Python client"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pip install openlineage-python\n")),(0,r.kt)("h3",{id:"start-docker-and-marquez"},"Start Docker and Marquez"),(0,r.kt)("p",null,"Start Docker Desktop\nRun Marquez with preloaded data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd marquez\n./docker/up.sh --seed\n")),(0,r.kt)("p",null,"Marquez should be up and running at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),"."),(0,r.kt)("p",null,"Take a moment to explore Marquez to get a sense of how metadata is displayed in the UI. Namespaces \u2013 the global contexts for runs and datasets \u2013 can be found in the top right corner, and icons for jobs and runs can be found in a tray along the left side."),(0,r.kt)("p",null,"Next, configure OpenLineage and add a script to your project that will generate a new job and new datasets within an existing namespace (here we\u2019re using the ",(0,r.kt)("inlineCode",{parentName:"p"},"food_delivery")," namespace that got passed to Marquez with the ",(0,r.kt)("inlineCode",{parentName:"p"},"\u2013seed")," argument we used earlier)."),(0,r.kt)("p",null,"Create a directory for your script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"..\nmkdir python_scripts && cd python_scripts\n")),(0,r.kt)("p",null,"In the python_scripts directory, create a Python script (we used the name ",(0,r.kt)("inlineCode",{parentName:"p"},"generate_events.py")," for ours) and an ",(0,r.kt)("inlineCode",{parentName:"p"},"openlineage.yml")," file."),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"openlineage.yml"),", define a transport type and URL to tell OpenLineage where and how to send metadata:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Transport:\n    Type: \u201chttp\u201d\n    Url: \u201chttp://localhost:5000\u201d\n")),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"generate_events.py"),", import the Python client and the methods needed to create a job and datasets. Also required (to create a run): the ",(0,r.kt)("inlineCode",{parentName:"p"},"datetime")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"uuid")," packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"from openlineage.client.run import RunEvent, RunState, Run, Job, Dataset\nfrom openlineage.client import OpenLineageClient\nfrom datetime import datetime\nfrom uuid import uuid4\n")),(0,r.kt)("p",null,"Then, in the same file, initialize the Python client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"client = OpenLineageClient.from_environment()\n")),(0,r.kt)("p",null,"Specify the producer of the new lineage metadata with a string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"producer = \u201cOpenLineage.io/website/blog\u201d\n")),(0,r.kt)("p",null,"Now you can create some basic dataset objects. These require a namespace and name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"inventory = Dataset(namespace=\u201cfood_delivery\u201d, name=\u201cpublic.inventory\u201d)\nmenus = Dataset(namespace=\u201cfood_delivery\u201d, name=\u201cpublic.menus_1\u201d)\norders = Dataset(namespace=\u201cfood_delivery\u201d, name=\u201cpublic.orders_1\u201d)\n")),(0,r.kt)("p",null,"You can also create a job object (we\u2019ve borrowed this one from the existing ",(0,r.kt)("inlineCode",{parentName:"p"},"food_delivery")," namespace):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"job = Job(namespace=\u201cfood_delivery\u201d, name=\u201cexample.order_data\u201d)\n")),(0,r.kt)("p",null,"To create a run object you\u2019ll need to specify a unique ID:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"run = Run(str(uuid4()))\n")),(0,r.kt)("p",null,"a START run event:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"client.emit(\n    RunEvent(\n        RunState.START,\n        datetime.now().isoformat(),\n        run, job, producer\n    )\n)\n")),(0,r.kt)("p",null,"and, finally, a COMPLETE run event:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"client.emit(\n    RunEvent(\n        RunState.COMPLETE,\n        datetime.now().isoformat(),\n        run, job, producer,\n        inputs=[inventory],\n        outputs=[menus, orders],\n    )\n)\n")),(0,r.kt)("p",null,"Now you have a complete script for creating datasets and a run event! Execute it in the terminal to send the metadata to Marquez:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"python3 generate_scripts.py\n")),(0,r.kt)("p",null,"Marquez will update itself automatically, so the new job and datasets should now be visible in the UI. Clicking on the jobs icon (the icon with the three interlocking gears), will make the ",(0,r.kt)("inlineCode",{parentName:"p"},"example.order_data")," job appear in the list of jobs:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"the Marquez jobs list",src:n(2763).Z,width:"1909",height:"849"})),(0,r.kt)("p",null,"When you click on the job, you will see a new map displaying the job, input and outputs we created with our script:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"the Marquez graph",src:n(2388).Z,width:"1909",height:"849"})))}d.isMDXComponent=!0},2388:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mqz_graph-8048abda4ecb6c1abee90c15d06904a8.png"},2763:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mqz_jobs-5f06571e8de1b089c5af43efa55d5a41.png"}}]);