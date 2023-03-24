"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2667],{3905:(I,M,i)=>{i.d(M,{Zo:()=>m,kt:()=>z});var N=i(7294);function j(I,M,i){return M in I?Object.defineProperty(I,M,{value:i,enumerable:!0,configurable:!0,writable:!0}):I[M]=i,I}function T(I,M){var i=Object.keys(I);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(I);M&&(N=N.filter((function(M){return Object.getOwnPropertyDescriptor(I,M).enumerable}))),i.push.apply(i,N)}return i}function g(I){for(var M=1;M<arguments.length;M++){var i=null!=arguments[M]?arguments[M]:{};M%2?T(Object(i),!0).forEach((function(M){j(I,M,i[M])})):Object.getOwnPropertyDescriptors?Object.defineProperties(I,Object.getOwnPropertyDescriptors(i)):T(Object(i)).forEach((function(M){Object.defineProperty(I,M,Object.getOwnPropertyDescriptor(i,M))}))}return I}function D(I,M){if(null==I)return{};var i,N,j=function(I,M){if(null==I)return{};var i,N,j={},T=Object.keys(I);for(N=0;N<T.length;N++)i=T[N],M.indexOf(i)>=0||(j[i]=I[i]);return j}(I,M);if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(I);for(N=0;N<T.length;N++)i=T[N],M.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(I,i)&&(j[i]=I[i])}return j}var b=N.createContext({}),c=function(I){var M=N.useContext(b),i=M;return I&&(i="function"==typeof I?I(M):g(g({},M),I)),i},m=function(I){var M=c(I.components);return N.createElement(b.Provider,{value:M},I.children)},u={inlineCode:"code",wrapper:function(I){var M=I.children;return N.createElement(N.Fragment,{},M)}},y=N.forwardRef((function(I,M){var i=I.components,j=I.mdxType,T=I.originalType,b=I.parentName,m=D(I,["components","mdxType","originalType","parentName"]),y=c(i),z=j,e=y["".concat(b,".").concat(z)]||y[z]||u[z]||T;return i?N.createElement(e,g(g({ref:M},m),{},{components:i})):N.createElement(e,g({ref:M},m))}));function z(I,M){var i=arguments,j=M&&M.mdxType;if("string"==typeof I||j){var T=i.length,g=new Array(T);g[0]=y;var D={};for(var b in M)hasOwnProperty.call(M,b)&&(D[b]=M[b]);D.originalType=I,D.mdxType="string"==typeof I?I:j,g[1]=D;for(var c=2;c<T;c++)g[c]=i[c];return N.createElement.apply(null,g)}return N.createElement.apply(null,i)}y.displayName="MDXCreateElement"},5843:(I,M,i)=>{i.r(M),i.d(M,{assets:()=>b,contentTitle:()=>g,default:()=>u,frontMatter:()=>T,metadata:()=>D,toc:()=>c});var N=i(7462),j=(i(7294),i(3905));const T={title:"Exploring Lineage History via the Marquez API",date:new Date("2021-07-08T00:00:00.000Z"),author:"Michael Collado",image:"./image.svg",banner:"./banner.svg",description:"Taking advantage of recent changes to the Marquez API, this post shows how to diagnose job failures and explore the impact of code changes on downstream dependents."},g=void 0,D={permalink:"/blog/explore-lineage-api",source:"@site/blog/explore-lineage-api/index.mdx",title:"Exploring Lineage History via the Marquez API",description:"Taking advantage of recent changes to the Marquez API, this post shows how to diagnose job failures and explore the impact of code changes on downstream dependents.",date:"2021-07-08T00:00:00.000Z",formattedDate:"July 8, 2021",tags:[],readingTime:13.69,hasTruncateMarker:!0,authors:[{name:"Michael Collado"}],frontMatter:{title:"Exploring Lineage History via the Marquez API",date:"2021-07-08T00:00:00.000Z",author:"Michael Collado",image:"./image.svg",banner:"./banner.svg",description:"Taking advantage of recent changes to the Marquez API, this post shows how to diagnose job failures and explore the impact of code changes on downstream dependents."},prevItem:{title:"OpenLineage joins the LF AI & Data Foundation",permalink:"/blog/joining-lfai"},nextItem:{title:"Backfilling Airflow DAGs using Marquez",permalink:"/blog/backfilling-airflow-dags-using-marquez"}},b={image:i(6844).Z,authorsImageUrls:[void 0]},c=[],m={toc:c};function u(I){let{components:M,...T}=I;return(0,j.kt)("wrapper",(0,N.Z)({},m,T,{components:M,mdxType:"MDXLayout"}),(0,j.kt)("p",null,"Taking advantage of recent changes to the Marquez API, this post shows how to diagnose job failures and explore the impact of code changes on downstream dependents."),(0,j.kt)("p",null,(0,j.kt)("img",{src:i(8002).Z+"#full-width",width:"773",height:"163"})))}u.isMDXComponent=!0},8002:(I,M,i)=>{i.d(M,{Z:()=>N});const N="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjwhLS0gQ3JlYXRlZCB3aXRoIFZlY3Rvcm5hdG9yIChodHRwOi8vdmVjdG9ybmF0b3IuaW8vKSAtLT4KPHN2ZyBoZWlnaHQ9IjEwMCUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc3Mi41IDE2My40MSIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6dmVjdG9ybmF0b3I9Imh0dHA6Ly92ZWN0b3JuYXRvci5pbyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8ZGVmcy8+CjxjbGlwUGF0aCBpZD0iQXJ0Ym9hcmRGcmFtZSI+CjxyZWN0IGhlaWdodD0iMTYzLjQxIiB3aWR0aD0iNzcyLjUiIHg9IjAiIHk9IjAiLz4KPC9jbGlwUGF0aD4KPGcgY2xpcC1wYXRoPSJ1cmwoI0FydGJvYXJkRnJhbWUpIiBpZD0iVW50aXRsZWQiIHZlY3Rvcm5hdG9yOmxheWVyTmFtZT0iVW50aXRsZWQiPgo8cGF0aCBkPSJNMCAwTDc3Mi41IDBMNzcyLjUgMEw3NzIuNSAxNjMuNDFMNzcyLjUgMTYzLjQxTDAgMTYzLjQxTDAgMTYzLjQxTDAgMEwwIDBaIiBmaWxsPSIjODE3NDEyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDE3LjE1IDYxLjhMNDExLjM2IDYzMy40NUw3NjguNjQgNjM1LjM4TDc3NC40MyA2My43M0w0MTcuMTUgNjEuOFoiIGZpbGw9IiMzOTQxMWMiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zMjQuNDUgNDAuNTZMLTMuODYgOTQuNjNMNzcuMjUgNTczLjYzTDQwNS41NiA1MTkuNTZMMzI0LjQ1IDQwLjU2WiIgZmlsbD0iIzNlNDMxYyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTMyNC4zOTMgMy44NDgxOEwzNDkuNjM5LTMxNC43OTNMMzQ5LjYzOS0zMTQuNzkzTDkzNC44MDUtMjY4LjQzMUw5MzQuODA1LTI2OC40MzFMOTA5LjU1OSA1MC4yMUw5MDkuNTU5IDUwLjIxTDMyNC4zOTMgMy44NDgxOEwzMjQuMzkzIDMuODQ4MThaIiBmaWxsPSIjY2ZhMzAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNOS42NiAxNDIuOTFMMjguOTcgMzM5LjlMNDk2LjMzIDI4OS42OUw0NzcuMDIgOTIuN0w5LjY2IDE0Mi45MVoiIGZpbGw9IiM4Nzg4MWYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yNzAuMzggNjUuNjZMMjYyLjY1IDEwNC4yOUw0MTEuMzYgMTI3LjQ2TDQxOS4wOCA4OC44NEwyNzAuMzggNjUuNjZaIiBmaWxsPSIjMmUyZjE5IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTcwIDYxLjhMMzk0IDkwLjhMNDUwLTMzOEwyMjYtMzY3TDE3MCA2MS44WiIgZmlsbD0iIzg5NzAwNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTEwMi4zNiA1NkwtMy44NiAxMDAuNDJMMTUuNDUgMTQ0Ljg0TDEyMS42NyAxMDAuNDJMMTAyLjM2IDU2WiIgZmlsbD0iIzIyMjAwZiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTM2MS4xNCA4MS4xMUw0ODYuNjggOTIuN0w1MzEuMDktMzQxLjgzTDQwNS41Ni0zNTMuNDJMMzYxLjE0IDgxLjExWiIgZmlsbD0iIzliODEwOCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTEzNy4xMiAxMTIuMDFMLTM0Ljc2IDE1Mi41N0w0Mi40OSA0NjUuNDNMMjE0LjM3IDQyNC44OEwxMzcuMTIgMTEyLjAxWiIgZmlsbD0iI2EwOTgxNiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTY0MS4xNyAxNTAuNjRMOTIxLjE3IDMxOC42NEw5OTIuNjYgMTk3TDcxMi42NiAyOUw2NDEuMTcgMTUwLjY0WiIgZmlsbD0iIzQ2NDQxMCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE2MC4yOSA3Ny4yNUwtODMgMTE1Ljg3TC03NS4yOCAxNTQuNUwxNjYuMTMgMTE1Ljg3TDE2MC4yOSA3Ny4yNVoiIGZpbGw9IiMxYjFjMTYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik01ODcuMSA0Ni4zNUw2OTMuMzIgNzcuMjVMNzU1LjEyLTEzNy4xMkw2NDguOS0xNjguMDJMNTg3LjEgNDYuMzVaIiBmaWxsPSIjYjc5NzA2IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNzQ5LjMzIDg4Ljg0TDg2Ny4xMyA3OS4xOEw4MzguMTYtMzQ5LjU2TDcyMC4zNi0zMzkuOUw3NDkuMzMgODguODRaIiBmaWxsPSIjZDBhYjA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzQ5LjU2IDEyMS42N0wzNDUuNjkgMTYyLjIyTDc4OS44OCAxOTMuMTNMNzkzLjc0IDE1Mi41N0wzNDkuNTYgMTIxLjY3WiIgZmlsbD0iIzcwNzIyMCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTM5Mi4wNCAxMDguMTVMMzkyLjA0IDExNS44OEw2NzkuOCA3NS4zMkw2NzkuOCA2Ny41OUwzOTIuMDQgMTA4LjE1WiIgZmlsbD0iIzM0MzUyNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTMwMy4yMSA2Ny41OUwxMjUuNTMgOTAuNzdMMTI5LjM5IDEyOS4zOUwzMDcuMDcgMTA2LjIyTDMwMy4yMSA2Ny41OVoiIGZpbGw9IiMxZjIyMWYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yMy4xNyA4MS4xMUwzODIuMzkgODNMMzg0LjMyLTI1NUwyNS4xMS0yNTYuODZMMjMuMTcgODEuMTFaIiBmaWxsPSIjN2M2OTA5IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTgxLjU0IDczLjM5TC0zMTAuOTMgMTEyLjAxTC0zMDcuMDcgMTQwLjk4TDE4My40NyAxMDIuMzZMMTgxLjU0IDczLjM5WiIgZmlsbD0iIzI2MjYxOSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTEuOTMgNDAuNTZMMTg3LjMzIDUyLjE0TDIwMi43OC0xOTdMMTcuMzgtMjA4LjU3TDEuOTMgNDAuNTZaIiBmaWxsPSIjNjU1MjA4IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzc0LjY2IDEwMi4zNkwzNzQuNjYgMjY0LjU4TDU1MC40MSAyNjIuNjVMNTUwLjQxIDEwMC40MkwzNzQuNjYgMTAyLjM2WiIgZmlsbD0iIzcxNzAxYSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI1NC45MyA3Ny4yNUwyNTQuOTMgMTEzLjk0TDQ0MC4zMiAxMDguMTVMNDQwLjMyIDcxLjQ2TDI1NC45MyA3Ny4yNVoiIGZpbGw9IiMzNDM2MWIiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik02MzcuMzEgNzkuMThMNjM3LjMxIDEzNy4xMkw4ODguMzggMTMzLjI2TDg4OC4zOCA3NS4zMkw2MzcuMzEgNzkuMThaIiBmaWxsPSIjNDU0MjEwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDI2LjgxIDcxLjQ2TDQyNC44NyA4M0w0ODIuODEgOTAuNzNMNDg0Ljc0IDc5LjE0TDQyNi44MSA3MS40NloiIGZpbGw9IiNjNWFmMGMiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zMTIuODYgMTEyLjAxTDMyOC4zMSAzNjUuMDFMNTEzLjcxIDM1My40Mkw0OTguMjYgMTAwLjQyTDMxMi44NiAxMTIuMDFaIiBmaWxsPSIjNzU3MzFiIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMy44NiAxMzUuMTlMLTIzLjE0IDM2MS4xOUwxMzcuMTUgMzgwLjUxTDE2NC4xNSAxNTQuNTFMMy44NiAxMzUuMTlaIiBmaWxsPSIjYTE5YjFiIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzkyIDQ2LjM1TDYzMy40NSA2Ny41OUw2NDEuMTctMzguNjJMMzk5Ljc3LTU5Ljg3TDM5MiA0Ni4zNVoiIGZpbGw9IiM5NTdjMDgiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zMzYgMzguNjJMMy44NiA1Ny45NEw1Ljc5IDg2Ljk0TDMzOCA2Ny41OUwzMzYgMzguNjJaIiBmaWxsPSIjOWE4NzBjIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNOTQuNjMgMTMuNTJMNDc1LjA5IDQyLjUyTDUxNS42NC00NzUuMDZMMTM1LjE5LTUwNC4wNkw5NC42MyAxMy41MloiIGZpbGw9IiM4YjcyMGIiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xMjcuNDYgNTQuMDdMMzM2IDU0LjA3TDMzNi00MTEuMzZMMTI3LjQ2LTQxMS4zNkwxMjcuNDYgNTQuMDdaIiBmaWxsPSIjNzM2MTBiIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjkxLjYyIDY5LjUyTDM5MiA5NC42M0w0NDIuMjYtOTQuNjNMMzQxLjgzLTExOS43NEwyOTEuNjIgNjkuNTJaIiBmaWxsPSIjOGU3YTBjIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDYxLjU3IDQ0LjQyTDQ1OS42NCA1MC4yMUw2MTkuOTMgOTYuNTZMNjIxLjg2IDkwLjc3TDQ2MS41NyA0NC40MloiIGZpbGw9IiM0MTNjMTYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yOTEuNjIgMTQ0Ljg0TDE1Mi42MiA0NzUuMDlMNzI0LjIyIDcxNC41Nkw4NjMuMjIgMzg0LjMyTDI5MS42MiAxNDQuODRaIiBmaWxsPSIjM2Y0MjFiIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjAwLjg1IDE1Mi41N0wxNTQuNSA0NDYuMTJMNzI0LjIyIDUzM0w3NzAuNTcgMjM5LjQ1TDIwMC44NSAxNTIuNTdaIiBmaWxsPSIjMzUzODE5IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDgwLjg4IDBMNTM2Ljg4IDc5LjE4TDYzMy40NSA3LjcyTDU3Ny40NS02OS41Mkw0ODAuODggMFoiIGZpbGw9IiNhMzg5MGEiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjwvZz4KPC9zdmc+Cg=="},6844:(I,M,i)=>{i.d(M,{Z:()=>N});const N="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjwhLS0gQ3JlYXRlZCB3aXRoIFZlY3Rvcm5hdG9yIChodHRwOi8vdmVjdG9ybmF0b3IuaW8vKSAtLT4KPHN2ZyBoZWlnaHQ9IjEwMCUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc3Mi41IDUyNS4yNiIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6dmVjdG9ybmF0b3I9Imh0dHA6Ly92ZWN0b3JuYXRvci5pbyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8ZGVmcy8+CjxjbGlwUGF0aCBpZD0iQXJ0Ym9hcmRGcmFtZSI+CjxyZWN0IGhlaWdodD0iNTI1LjI2IiB3aWR0aD0iNzcyLjUiIHg9IjAiIHk9IjAiLz4KPC9jbGlwUGF0aD4KPGcgY2xpcC1wYXRoPSJ1cmwoI0FydGJvYXJkRnJhbWUpIiBpZD0iVW50aXRsZWQiIHZlY3Rvcm5hdG9yOmxheWVyTmFtZT0iVW50aXRsZWQiPgo8cGF0aCBkPSJNMCAwTDc3Mi41IDBMNzcyLjUgMEw3NzIuNSA1MjUuMjZMNzcyLjUgNTI1LjI2TDAgNTI1LjI2TDAgNTI1LjI2TDAgMEwwIDBaIiBmaWxsPSIjNjc2NzM2IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTI3LjQ2IDgzTDMwNS4xNCA0NDQuMTlMNzYwLjkxIDIxOC4xOUw1ODMuMjQtMTQxTDEyNy40NiA4M1oiIGZpbGw9IiM5Yzg3MTgiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zMzQuMTEgMjUxLjA2TDMxMi44NiA1NzcuNDRMNzY2LjcxIDYwMi41NUw3ODggMjc2LjE3TDMzNC4xMSAyNTEuMDZaIiBmaWxsPSIjMzk0MTAzIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTA0LjI5IDkyLjdMOTAzLjgyIDQyLjQ5TDg4Mi41OC0yNzAuMzdMODMtMjIwLjE2TDEwNC4yOSA5Mi43WiIgZmlsbD0iIzliYTQ5MiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTM0MS44MyA5LjY2TC0xMDYuMTcgOTQuNjZMLTM0LjcxIDQ1My44N0w0MTEuNDEgMzY4Ljg3TDM0MS44MyA5LjY2WiIgZmlsbD0iIzg3NzEwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTQzOC4zOSA0NTUuNzdMLTEwNi4yMiA0NTcuNzFMLTEwMi4zNiA3MzMuODdMNDQwLjMyIDczMS45NEw0MzguMzkgNDU1Ljc3WiIgZmlsbD0iIzA1MTcwYSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTIxOC4yMyAyMjAuMTZMMTAyNy40MiAzMTAuOTNMMTAzOSAxOTdMMjI5LjgyIDEwNi4yMkwyMTguMjMgMjIwLjE2WiIgZmlsbD0iI2I4OTIwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTM0Ny42MiAyMy4xN0wzMzAuMjQgODYuOTFMNzY2LjcxIDE5OC45MUw3ODQuMDkgMTM1LjE4TDM0Ny42MiAyMy4xN1oiIGZpbGw9IiMzZjRjNTciIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0wIDUwLjIxTC03LjcyIDkyLjdMODM4LjE2IDI1NC45Mkw4NDUuODkgMjEyLjQ0TDAgNTAuMjFaIiBmaWxsPSIjZTBiMjAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNTQ2LjU0IDQ1Ny43MUw1MzguODIgNjc3Ljg3TDkxMS41NSA2ODcuNTJMOTE5LjI3IDQ2Ny4zNkw1NDYuNTQgNDU3LjcxWiIgZmlsbD0iIzBhMTcxNCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE0NC44NCAxMjcuNDZMOTguNDkgNDM0LjUzTDUwOS44NSA0OTIuNDdMNTU2LjIgMTg1LjRMMTQ0Ljg0IDEyNy40NloiIGZpbGw9IiM2ZDY5MTYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0wIDQwLjU2TDg2My4yNyAzMC45TDg2MS4zNC0xMjcuNDZMMC0xMTcuODFMMCA0MC41NloiIGZpbGw9IiNiN2I2N2UiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xMDQuMjkgMjMxLjc1TDg2LjkxIDMyMC41OUw4MDkuMTkgNDU3LjcxTDgyNi41NyAzNjguODdMMTA0LjI5IDIzMS43NVoiIGZpbGw9IiM2MTYyMWMiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik00Mi40OSAyMTAuNTFMMzguNjIgMzE4LjY2TDMxNC43OSAzMjQuNDVMMzE4LjY2IDIxNi4zTDQyLjQ5IDIxMC41MVoiIGZpbGw9IiM1NDQ2MGEiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xNzMuODEgNjUuNjZMLTUwOS44NSAxMjUuNTNMLTUwMi4xMiAxOTYuOTlMMTc5LjYxIDEzNy4xMkwxNzMuODEgNjUuNjZaIiBmaWxsPSIjYjc4YzAyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTA2LjIyIDQ4Ni42N0wxMDYuMjIgNTMzTDU1Ni4yMiA1MjcuMjFMNTU2LjIyIDQ4MC44OEwxMDYuMjIgNDg2LjY3WiIgZmlsbD0iIzFjMjgxOSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTczMCAyMTAuNTFMNjY2LjI3IDI4Ny43Nkw5MzAuODUgNTA0LjA2TDk5NC41OCA0MjYuODFMNzMwIDIxMC41MVoiIGZpbGw9IiM0ZjQ3MDkiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yNDcuMiAyMjZMMjQzLjM0IDI3MC40MUw0ODQuNzQgMjg3LjhMNDg4LjYxIDI0My4zOEwyNDcuMiAyMjZaIiBmaWxsPSIjYTI4NzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDk2LjMzIDUyLjE0TDc2NC43NyAxMzcuMTRMNzc2LjM2IDk4LjUxTDUwNy45MiAxMy41MUw0OTYuMzMgNTIuMTRaIiBmaWxsPSIjNWM2NjYxIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjEyLjQ0IDI3TDIwMi43OCA5Mi43TDY5My4zMiAxNTAuNjRMNzAzIDg1TDIxMi40NCAyN1oiIGZpbGw9IiM1NjVlNTIiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xNzMuODEgMTU2LjQzTC0xMjkuMzkgMTk3TC0xMTMuOTQgMzA3LjA4TDE4Ny4zMyAyNjYuNTJMMTczLjgxIDE1Ni40M1oiIGZpbGw9IiM4YTcwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik03NTUuMTIgMjcyLjMxTDk5Mi42NiAyMTAuNTFMOTcxLjQyIDEzMy4yNkw3MzMuODcgMTk1LjA2TDc1NS4xMiAyNzIuMzFaIiBmaWxsPSIjZDZiMTAxIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzg4LjE4IDMzOS45TDI4MCA0MzIuNkwzMzkuODcgNTAwLjE5TDQ0OC4wMiA0MDcuNDlMMzg4LjE4IDMzOS45WiIgZmlsbD0iIzY0NmYyYyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTEzNS4xOSAyOTcuNDFMMTM1LjE5IDMxNC43OUw2NDEuMTkgMjkzLjU1TDY0MS4xOSAyNzYuMTdMMTM1LjE5IDI5Ny40MVoiIGZpbGw9IiMxZDIxMjQiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik00NjEuNTcgMzMwLjI0TDQ1NS43NyAzOTUuOTFMNzA4Ljc3IDQxMS4zNkw3MTQuNTYgMzQ1LjY5TDQ2MS41NyAzMzAuMjRaIiBmaWxsPSIjN2I3YzFmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTU0LjUgMjc4LjFMMTUyLjU3IDMxMi44NkwzMzQuMTEgMzE0Ljc5TDMzNiAyODBMMTU0LjUgMjc4LjFaIiBmaWxsPSIjMWMyMTIwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzg0LjMyIDQ2OS4yOUwzODguMTggNTEzLjcxTDc3NC40MyA0NzMuMTZMNzcwLjU3IDQyOC43NEwzODQuMzIgNDY5LjI5WiIgZmlsbD0iIzM3NDExZCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTkwLjc3IDI0MS40MUw0OTAuNTQgMjk3LjQxTDUwNiAxNzcuNjdMMTA2LjIzIDEyMS42N0w5MC43NyAyNDEuNDFaIiBmaWxsPSIjOGY3MzA2IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNzUuMzIgMzcwLjhMMjY2LjUxIDQ0NC4xOUwyODUuODIgMzkyTDk0LjYzIDMxOC42Nkw3NS4zMiAzNzAuOFoiIGZpbGw9IiM5MTk4MjciIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik01NjAuMDYgNDIyLjk0TDU1Ni4yIDQzMC42N0wxMjMyLjE0IDcwM0wxMjM2IDY5NS4yOEw1NjAuMDYgNDIyLjk0WiIgZmlsbD0iIzAwMDAwZiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE3MS44OCA0MTkuMDhMNzcuMjUgODQ5Ljc1TDE3Ny42NyA4NzFMMjcyLjMxIDQ0MC4zM0wxNzEuODggNDE5LjA4WiIgZmlsbD0iIzM2NDIxYyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTY5NS4yNSAyNjIuNjVMNzE4LjQyIDI4My44OUw3NDcuNDIgMjUxLjA2TDcyNC4yNSAyMjkuODJMNjk1LjI1IDI2Mi42NVoiIGZpbGw9IiMxNDFjMWEiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik02OS41MiA0NjMuNUw2MS44IDU0Ni41TDg3Ni44IDYwNC40NEw4ODQuNTIgNTIxLjQ0TDY5LjUyIDQ2My41WiIgZmlsbD0iIzI3MzExOSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTEzLjUyIDE2OEwyMTAuNTIgMjkzLjUzTDIzOS41MiAyNDcuMThMNDIuNTIgMTIxLjY1TDEzLjUyIDE2OFoiIGZpbGw9IiM3ZDY5MDgiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zNDcuNjIgNTcuOTRMNTY5LjcyIDc5LjE4TDU4MS4zMS00Mi40OUwzNTkuMjEtNjMuNzNMMzQ3LjYyIDU3Ljk0WiIgZmlsbD0iIzhiOTE2OCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPC9nPgo8L3N2Zz4K"}}]);