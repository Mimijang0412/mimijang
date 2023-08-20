"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[102],{1102:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(7294)),c=o(n(8045)),u=n(6780);i(n(8045),t),t.default=e=>{var t;return a.default.createElement(c.default,Object.assign({},e,{loader:null!==(t=e.loader)&&void 0!==t?t:u.imageLoader.loader}))},e.exports=t.default},8045:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){i=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,o=e.unoptimized,l=void 0!==o&&o,d=e.priority,f=void 0!==d&&d,h=e.loading,v=e.lazyBoundary,w=void 0===v?"200px":v,A=e.className,O=e.quality,j=e.width,S=e.height,z=e.objectFit,E=e.objectPosition,I=e.onLoadingComplete,P=e.loader,M=void 0===P?x:P,R=e.placeholder,D=void 0===R?"empty":R,L=e.blurDataURL,q=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),C=n?"responsive":"intrinsic";"layout"in q&&(q.layout&&(C=q.layout),delete q.layout);var N="";if(function(e){return"object"===typeof e&&(b(e)||function(e){return void 0!==e.src}(e))}(t)){var B=b(t)?t.default:t;if(!B.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(B)));if(L=L||B.blurDataURL,N=B.src,(!C||"fill"!==C)&&(S=S||B.height,j=j||B.width,!B.height||!B.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(B)))}t="string"===typeof t?t:N;var W=_(j),T=_(S),U=_(O),H=!f&&("lazy"===h||"undefined"===typeof h);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,H=!1);m.has(t)&&(H=!1);0;var F,V=i(s.useIntersection({rootMargin:w,disabled:!H}),2),J=V[0],G=V[1],Q=!H||G,K={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},X={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Y=!1,Z={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:z,objectPosition:E},$="blur"===D?{filter:"blur(20px)",backgroundSize:z||"cover",backgroundImage:'url("'.concat(L,'")'),backgroundPosition:E||"0% 0%"}:{};if("fill"===C)K.display="block",K.position="absolute",K.top=0,K.left=0,K.bottom=0,K.right=0;else if("undefined"!==typeof W&&"undefined"!==typeof T){var ee=T/W,te=isNaN(ee)?"100%":"".concat(100*ee,"%");"responsive"===C?(K.display="block",K.position="relative",Y=!0,X.paddingTop=te):"intrinsic"===C?(K.display="inline-block",K.position="relative",K.maxWidth="100%",Y=!0,X.maxWidth="100%",F='<svg width="'.concat(W,'" height="').concat(T,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===C&&(K.display="inline-block",K.position="relative",K.width=W,K.height=T)}else 0;var ne={src:p,srcSet:void 0,sizes:void 0};Q&&(ne=k({src:t,unoptimized:l,layout:C,width:W,quality:U,sizes:n,loader:M}));var re=t;0;0;var ie=(r(y={},"imagesrcset",ne.srcSet),r(y,"imagesizes",ne.sizes),y);return a.default.createElement("span",{style:K},Y?a.default.createElement("span",{style:X},F?a.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(u.toBase64(F))}):null):null,a.default.createElement("img",Object.assign({},q,ne,{decoding:"async","data-nimg":C,className:A,ref:function(e){J(e),function(e,t,n,r,i){if(!e)return;var o=function(){e.src!==p&&("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===r&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),m.add(t),i){var n=e.naturalWidth,o=e.naturalHeight;i({naturalWidth:n,naturalHeight:o})}}))};e.complete?o():e.onload=o}(e,re,0,D,I)},style:g({},Z,$)})),a.default.createElement("noscript",null,a.default.createElement("img",Object.assign({},q,k({src:t,unoptimized:l,layout:C,width:W,quality:U,sizes:n,loader:M}),{decoding:"async","data-nimg":C,style:Z,className:A,loading:h||"lazy"}))),f?a.default.createElement(c.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+ne.src+ne.srcSet+ne.sizes,rel:"preload",as:"image",href:ne.srcSet?void 0:ne.src},ie))):null)};var a=f(n(7294)),c=f(n(5443)),u=n(6978),l=n(5809),s=n(7190);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return e&&e.__esModule?e:{default:e}}function g(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){d(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}var m=new Set,p=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var h=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t).concat(z(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(z(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(z(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function b(e){return void 0!==e.default}var y,v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||l.imageConfigDefault,w=v.deviceSizes,A=v.imageSizes,O=v.loader,j=v.path,S=(v.domains,o(w).concat(o(A)));function k(e){var t=e.src,n=e.unoptimized,r=e.layout,i=e.width,a=e.quality,c=e.sizes,u=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,i=/(^|\s)(1?\d?\d)vw/g,a=[];r=i.exec(n);r)a.push(parseInt(r[2]));if(a.length){var c,u=.01*(c=Math).min.apply(c,o(a));return{widths:S.filter((function(e){return e>=w[0]*u})),kind:"w"}}return{widths:S,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:w,kind:"w"}:{widths:o(new Set([e,2*e].map((function(e){return S.find((function(t){return t>=e}))||S[S.length-1]})))),kind:"x"}}(i,r,c),s=l.widths,d=l.kind,f=s.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:s.map((function(e,n){return"".concat(u({src:t,quality:a,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:u({src:t,quality:a,width:s[f]})}}function _(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function x(e){var t=h.get(O);if(t)return t(g({root:j},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(O))}function z(e){return"/"===e[0]?e.slice(1):e}w.sort((function(e,t){return e-t})),S.sort((function(e,t){return e-t}))},7190:function(e,t,n){function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){i=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,u=i.useRef(),l=r(i.useState(!1),2),s=l[0],d=l[1],f=i.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||s||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,s]);return i.useEffect((function(){if(!a&&!s){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[s]),[f,s]};var i=n(7294),o=n(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map},6978:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},5809:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}}}]);