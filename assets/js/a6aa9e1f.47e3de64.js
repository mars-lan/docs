"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3089],{4174:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(7294),n=a(2263);function r(){const{siteConfig:e}=(0,n.Z)(),t=e.customFields.links.map(((e,t)=>l.createElement(o,{data:e,key:`footer-n-l-${t}`}))),a=e.customFields.linksSocial.map(((e,t)=>l.createElement(o,{data:e,key:`footer-n-l-${t}`})));return l.createElement("footer",{className:"footer bg-bgalt py-12"},l.createElement("div",{className:"container mx-auto text-center"},l.createElement("div",{className:"flex justify-center my-3 mb-4"},l.createElement("a",{href:"/",title:e?.title},l.createElement("img",{src:"/"+e.themeConfig.navbar.logo.src,alt:`${e.themeConfig.navbar.logo.alt} - logo`,style:{height:"45px"}}))),l.createElement("div",{className:"text-color-2 my-3 footer-links animated-link-parent"},l.createElement("ul",null,t)),l.createElement("div",{className:"text-color-2 my-3 footer-links animated-link-parent"},l.createElement("ul",null,a)),l.createElement("p",{className:"text-color-default text-lg"},"Copyright \xa9 ",(new Date).getFullYear()," The Linux Foundation\xae. All rights reserved.")))}const o=e=>{let{data:t}=e;return l.createElement("li",{className:"inline-block mx-3 animated-link-parent"},l.createElement("a",{href:t.to?t.to:t.href,title:t.label},l.createElement("span",null,t.label)))}},273:(e,t,a)=>{a.d(t,{Z:()=>u});var l=a(7294),n=a(3727),r=a(5697),o=a.n(r);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=(0,l.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,r=e.size,o=void 0===r?24:r,c=i(e,["color","size"]);return l.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),l.createElement("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),l.createElement("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),l.createElement("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),l.createElement("line",{x1:"3",y1:"10",x2:"21",y2:"10"}))}));c.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},c.displayName="Calendar";const m=c;var d=a(8709);const u=e=>{let{data:t}=e;const[a,r]=(0,l.useState)(!1);return l.createElement("div",{className:"blog-item w-full md:w-1/2 lg:w-1/3 p-4"},l.createElement("div",{className:`transition-all duration-300 hover:shadow-2xl shadow ${a&&"focused"}`},l.createElement(n.rU,{to:t.metadata.permalink,title:t.metadata.title,onFocus:()=>r(!0),onBlur:()=>r(!1),style:{textDecoration:"none"}},l.createElement("div",{className:"image"},t.assets.image?l.createElement("img",{src:t.assets.image,alt:"",className:"w-full"}):l.createElement("img",{src:t.frontMatter.image,alt:"",className:"w-full"})),l.createElement("div",{className:"p-4 py-3"},l.createElement("h4",{className:"text-3xl pt-1"},t.frontMatter.title),l.createElement("div",{className:"flex items-center text-color-default"},l.createElement(m,{className:"stroke-current"}),l.createElement("small",{className:"pl-2 font-sans"},(0,d._3)(t.metadata.date)," by ",t.frontMatter.author)),l.createElement("p",{className:"pt-3 text-color-default"},t.frontMatter.description)))))}},8709:(e,t,a)=>{a.d(t,{_3:()=>r,rU:()=>n});var l=a(7294);const n=e=>e.to?l.createElement("a",{href:e.to,className:"btn btn-primary mx-5"},e.children):l.createElement("button",e),r=e=>new Date(e).toLocaleDateString()},2239:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var l=a(7294),n=a(4194),r=a(273),o=a(4174);function s(e){const{metadata:t,items:a}=e,s=a.map(((e,t)=>l.createElement(r.Z,{data:e.content,key:`b-item-index-${t}`})));return l.createElement(n.Z,{title:"Blog",description:"Data lineage is the foundation for a new generation of powerful, context-aware data tools and best practices. OpenLineage enables consistent collection of lineage metadata, creating a deeper understanding of how data is produced and used."},l.createElement("div",{className:"container mx-auto px-0 pb-40"},l.createElement("div",{className:"px-4 py-12 text-center lg:py-14 lg:px-0"},l.createElement("h2",{className:"text-color-1 text-5xl lg:text-6xl"},"Blog")),l.createElement("div",{className:"flex flex-wrap"},s),l.createElement("div",{className:"pagination pt-8"},l.createElement("ul",{className:"text-center"},t?.previousPage&&l.createElement("li",{className:"inline-block align-middle"},l.createElement("a",{title:"Next Page",className:"rounded-full bg-bgalt flex items-center justify-center w-12 text-center h-12 m-3 transition-all duration-300 hover:shadow-2xl focus:shadow-2xl ",href:t?.previousPage},l.createElement("span",null,l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l.createElement("polyline",{points:"15 18 9 12 15 6"}))))),[...Array(t.totalPages)].map(((e,a)=>l.createElement("li",{className:"inline-block align-middle",key:a},l.createElement("a",{title:"Blog - Page 1",className:a+1!==t.page?"rounded-full bg-bgalt flex items-center justify-center w-12 text-center h-12 m-3 transition-all duration-300":"rounded-full bg-bgalt flex items-center justify-center w-12 text-center h-12 m-3 transition-all duration-300 hover:shadow-2xl focus:shadow-2xl bg-gradient-primary text-white shadow-2xl",href:0===a?"/blog/":"/blog/page/"+(a+1)},l.createElement("span",null,a+1))))),t?.nextPage&&l.createElement("li",{className:"inline-block align-middle"},l.createElement("a",{title:"Next Page",className:"rounded-full bg-bgalt flex items-center justify-center w-12 text-center h-12 m-3 transition-all duration-300 hover:shadow-2xl focus:shadow-2xl ",href:t?.nextPage},l.createElement("span",null,l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l.createElement("polyline",{points:"9 18 15 12 9 6"})))))))),l.createElement(o.Z,null))}}}]);