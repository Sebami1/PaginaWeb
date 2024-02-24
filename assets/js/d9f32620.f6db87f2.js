"use strict";(self.webpackChunkproyecto_02=self.webpackChunkproyecto_02||[]).push([[557],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),b=o,m=p["".concat(i,".").concat(b)]||p[b]||g[b]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=b;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:o,l[1]=u;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},6460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var r=n(8168),o=(n(6540),n(5680));const a={slug:"welcome",title:"Welcome",authors:["slorber","yangshun"],tags:["facebook","hello","docusaurus"]},l=void 0,u={permalink:"/PaginaWeb/blog/welcome",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-08-26-welcome/index.md",source:"@site/blog/2021-08-26-welcome/index.md",title:"Welcome",description:"Docusaurus blogging features are powered by the blog plugin.",date:"2021-08-26T00:00:00.000Z",formattedDate:"August 26, 2021",tags:[{label:"facebook",permalink:"/PaginaWeb/blog/tags/facebook"},{label:"hello",permalink:"/PaginaWeb/blog/tags/hello"},{label:"docusaurus",permalink:"/PaginaWeb/blog/tags/docusaurus"}],readingTime:.405,truncated:!1,authors:[{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer",url:"https://sebastienlorber.com",imageURL:"https://github.com/slorber.png",key:"slorber"},{name:"Yangshun Tay",title:"Front End Engineer @ Facebook",url:"https://github.com/yangshun",imageURL:"https://github.com/yangshun.png",key:"yangshun"}],nextItem:{title:"MDX Blog Post",permalink:"/PaginaWeb/blog/mdx-blog-post"}},i={authorsImageUrls:[void 0,void 0]},s=[],c={toc:s},p="wrapper";function g(e){let{components:t,...a}=e;return(0,o.yg)(p,(0,r.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://docusaurus.io/docs/blog"},"Docusaurus blogging features")," are powered by the ",(0,o.yg)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog"},"blog plugin"),"."),(0,o.yg)("p",null,"Simply add Markdown files (or folders) to the ",(0,o.yg)("inlineCode",{parentName:"p"},"blog")," directory."),(0,o.yg)("p",null,"Regular blog authors can be added to ",(0,o.yg)("inlineCode",{parentName:"p"},"authors.yml"),"."),(0,o.yg)("p",null,"The blog post date can be extracted from filenames, such as:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"2019-05-30-welcome.md")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"2019-05-30-welcome/index.md"))),(0,o.yg)("p",null,"A blog post folder can be convenient to co-locate blog post images:"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Docusaurus Plushie",src:n(9864).A})),(0,o.yg)("p",null,"The blog supports tags as well!"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"And if you don't want a blog"),": just delete this directory, and use ",(0,o.yg)("inlineCode",{parentName:"p"},"blog: false")," in your Docusaurus config."))}g.isMDXComponent=!0},9864:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/docusaurus-plushie-banner-a60f7593abca1e3eef26a9afa244e4fb.jpeg"}}]);