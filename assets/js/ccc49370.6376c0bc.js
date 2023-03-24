"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6103],{6170:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ue});var n=a(7294),l=a(6010),r=a(1944),o=a(5281),s=a(902);const i=n.createContext(null);function c(e){let{children:t,content:a,isBlogPostPage:l=!1}=e;const r=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:l});return n.createElement(i.Provider,{value:r},t)}function m(){const e=(0,n.useContext)(i);if(null===e)throw new s.i6("BlogPostProvider");return e}var u=a(4194),g=a(7524),d=a(9960),p=a(5999);const h="sidebar_re4s",E="sidebarItemTitle_pO2u",b="sidebarItemList_Yudw",f="sidebarItem__DBe",v="sidebarItemLink_mo7H",_="sidebarItemLinkActive_I1ZP";function N(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(h,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(E,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(b,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:f},n.createElement(d.Z,{isNavLink:!0,to:e.permalink,className:v,activeClassName:_},e.title)))))))}var P=a(3102);function Z(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(d.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function k(e){return n.createElement(P.Zo,{component:Z,props:e})}function w(e){let{sidebar:t}=e;const a=(0,g.i)();return t?.items.length?"mobile"===a?n.createElement(k,{sidebar:t}):n.createElement(N,{sidebar:t}):null}function T(e){const{sidebar:t,toc:a,children:r,...o}=e,s=t&&t.items.length>0;return n.createElement(u.Z,o,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(w,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},r),a&&n.createElement("div",{className:"col col--2"},a))))}var y=a(4996);function I(e){let{children:t,className:a}=e;const{frontMatter:l,assets:r}=m(),{withBaseUrl:o}=(0,y.C)(),s=r.image??l.image;return n.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},s&&n.createElement("meta",{itemProp:"image",content:o(s,{absolute:!0})}),t)}const x="title_f1Hy";function B(e){let{className:t}=e;const{metadata:a,isBlogPostPage:r}=m(),{permalink:o,title:s}=a,i=r?"h1":"h2";return n.createElement(i,{className:(0,l.Z)(x,t),itemProp:"headline"},r?s:n.createElement(d.Z,{itemProp:"url",to:o},s))}var L=a(2263);const F=["zero","one","two","few","many","other"];function M(e){return F.filter((t=>e.includes(t)))}const C={locale:"en",pluralForms:M(["one","other"]),select:e=>1===e?"one":"other"};function R(){const{i18n:{currentLocale:e}}=(0,L.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:M(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),C}}),[e])}function A(){const e=R();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const l=a.select(t),r=a.pluralForms.indexOf(l);return n[Math.min(r,n.length-1)]}(a,t,e)}}const U="container_mt6G";function O(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=A();return t=>{const a=Math.ceil(t);return e(a,(0,p.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return n.createElement(n.Fragment,null,a(t))}function $(e){let{date:t,formattedDate:a}=e;return n.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function D(){return n.createElement(n.Fragment,null," \xb7 ")}function H(e){let{className:t}=e;const{metadata:a}=m(),{date:r,formattedDate:o,readingTime:s}=a;return n.createElement("div",{className:(0,l.Z)(U,"margin-vert--md",t)},n.createElement($,{date:r,formattedDate:o}),void 0!==s&&n.createElement(n.Fragment,null,n.createElement(D,null),n.createElement(O,{readingTime:s})))}function j(e){return e.href?n.createElement(d.Z,e):n.createElement(n.Fragment,null,e.children)}function z(e){let{author:t,className:a}=e;const{name:r,title:o,url:s,imageURL:i,email:c}=t,m=s||c&&`mailto:${c}`||void 0;return n.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",a)},i&&n.createElement(j,{href:m,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:i,alt:r})),r&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(j,{href:m,itemProp:"url"},n.createElement("span",{itemProp:"name"},r))),o&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const G="authorCol_Hf19",S="imageOnlyAuthorRow_pa_O",V="imageOnlyAuthorCol_G86a";function q(e){let{className:t}=e;const{metadata:{authors:a},assets:r}=m();if(0===a.length)return null;const o=a.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",o?S:"row",t)},a.map(((e,t)=>n.createElement("div",{className:(0,l.Z)(!o&&"col col--6",o?V:G),key:t},n.createElement(z,{author:{...e,imageURL:r.authorsImageUrls[t]??e.imageURL}})))))}function Q(){return n.createElement("header",null,n.createElement(B,null),n.createElement(H,null),n.createElement(q,null))}var W=a(8780),X=a(210);function Y(e){let{children:t,className:a}=e;const{isBlogPostPage:r}=m();return n.createElement("div",{id:r?W.blogPostContainerID:void 0,className:(0,l.Z)("markdown",a),itemProp:"articleBody"},n.createElement(X.Z,null,t))}var J=a(4881),K=a(6233),ee=a(7462);function te(){return n.createElement("b",null,n.createElement(p.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function ae(e){const{blogPostTitle:t,...a}=e;return n.createElement(d.Z,(0,ee.Z)({"aria-label":(0,p.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),n.createElement(te,null))}const ne="blogPostFooterDetailsFull_mRVl";function le(){const{metadata:e,isBlogPostPage:t}=m(),{tags:a,title:r,editUrl:o,hasTruncateMarker:s}=e,i=!t&&s,c=a.length>0;return c||i||o?n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",t&&ne)},c&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":i})},n.createElement(K.Z,{tags:a})),t&&o&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(J.Z,{editUrl:o})),i&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":c})},n.createElement(ae,{blogPostTitle:r,to:e.permalink}))):null}function re(e){let{children:t,className:a}=e;const r=function(){const{isBlogPostPage:e}=m();return e?void 0:"margin-bottom--xl"}();return n.createElement(I,{className:(0,l.Z)(r,a)},n.createElement(Q,null),n.createElement(Y,null,t),n.createElement(le,null))}var oe=a(2244);function se(e){const{nextItem:t,prevItem:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,p.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},a&&n.createElement(oe.Z,(0,ee.Z)({},a,{subLabel:n.createElement(p.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&n.createElement(oe.Z,(0,ee.Z)({},t,{subLabel:n.createElement(p.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function ie(){const{assets:e,metadata:t}=m(),{title:a,description:l,date:o,tags:s,authors:i,frontMatter:c}=t,{keywords:u}=c,g=e.image??c.image;return n.createElement(r.d,{title:a,description:l,keywords:u,image:g},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:o}),i.some((e=>e.url))&&n.createElement("meta",{property:"article:author",content:i.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&n.createElement("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")}))}var ce=a(9407);function me(e){let{sidebar:t,children:a}=e;const{metadata:l,toc:r}=m(),{nextItem:o,prevItem:s,frontMatter:i}=l,{hide_table_of_contents:c,toc_min_heading_level:u,toc_max_heading_level:g}=i;return n.createElement(T,{sidebar:t,toc:!c&&r.length>0?n.createElement(ce.Z,{toc:r,minHeadingLevel:u,maxHeadingLevel:g}):void 0},n.createElement(re,null,a),(o||s)&&n.createElement(se,{nextItem:o,prevItem:s}))}function ue(e){const t=e.content;return n.createElement(c,{content:e.content,isBlogPostPage:!0},n.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},n.createElement(ie,null),n.createElement(me,{sidebar:e.sidebar},n.createElement(t,null))))}},4881:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7294),l=a(5999),r=a(5281),o=a(7462),s=a(6010);const i="iconEdit_Z9Sw";function c(e){let{className:t,...a}=e;return n.createElement("svg",(0,o.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(i,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},n.createElement(c,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2244:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010),r=a(9960);function o(e){const{permalink:t,title:a,subLabel:o,isNext:s}=e;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&n.createElement("div",{className:"pagination-nav__sublabel"},o),n.createElement("div",{className:"pagination-nav__label"},a))}},6233:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7294),l=a(6010),r=a(5999),o=a(9960);const s="tag_zVej",i="tagRegular_sFm0",c="tagWithCount_h2kH";function m(e){let{permalink:t,label:a,count:r}=e;return n.createElement(o.Z,{href:t,className:(0,l.Z)(s,r?c:i)},a,r&&n.createElement("span",null,r))}const u="tags_jXut",g="tag_QGVx";function d(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(u,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:g},n.createElement(m,{label:t,permalink:a}))}))))}}}]);