(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[398],{9999:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Contact",function(){return n(3471)}])},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var a,o=(a=n(7294))&&a.__esModule?a:{default:a},i=n(6273),l=n(387),c=n(7190);var u={};function s(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=l.useRouter(),f=o.default.useMemo((function(){var t=r(i.resolveHref(a,e.href,!0),2),n=t[0],o=t[1];return{href:n,as:e.as?i.resolveHref(a,e.as):o||n}}),[a,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,y=e.shallow,b=e.scroll,m=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var x=(t=o.default.Children.only(h))&&"object"===typeof t&&t.ref,g=r(c.useIntersection({rootMargin:"200px"}),2),w=g[0],k=g[1],E=o.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);o.default.useEffect((function(){var e=k&&n&&i.isLocalURL(d),t="undefined"!==typeof m?m:a&&a.locale,r=u[d+"%"+p+(t?"%"+t:"")];e&&!r&&s(a,d,p,{locale:t})}),[p,d,k,m,n,a]);var _={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,l,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),t[a?"replace":"push"](n,r,{shallow:o,locale:c,scroll:l}))}(e,a,d,p,v,y,b,m)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&s(a,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof m?m:a&&a.locale,j=a&&a.isLocaleDomain&&i.getDomainLocale(p,N,a&&a.locales,a&&a.domainLocales);_.href=j||i.addBasePath(i.addLocale(p,N,a&&a.defaultLocale))}return o.default.cloneElement(t,_)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=a.useRef(),u=r(a.useState(!1),2),s=u[0],f=u[1],d=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||s||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),l.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,s]);return a.useEffect((function(){if(!i&&!s){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[s]),[d,s]};var a=n(7294),o=n(9311),i="undefined"!==typeof IntersectionObserver;var l=new Map},3471:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=(n(7294),n(1664));t.default=function(){return(0,r.jsxs)("div",{id:"contact",className:"text-center bg-white dark:bg-transparent h-96 py-24",children:[(0,r.jsx)("h1",{className:"text-[50px] text-black dark:text-white mb-4",children:"Say Hello"}),(0,r.jsx)("h2",{className:"text-xl text-center text-black dark:text-white mb-4",children:"Have a question or want to work together?"}),(0,r.jsx)(a.default,{href:"mailto:mimijang0412@gmail.com",children:(0,r.jsxs)("button",{className:"inline-block relative w-[160px] h-[40px] bg-transparent hover:text-black hover:bg-gray-300 mx-10 transition-all ease-in-out duration-1000",children:[(0,r.jsxs)("svg",{className:"btn-svg border absolute left-0 top-0 stroke-black dark:stroke-white transition-all ease-in-out duration-1000",width:"160px",height:"40px",viewBox:"0 0 160 40",children:[(0,r.jsx)("polyline",{points:"159,1 159,39 1,39 1,1 159,1",className:"bg-line"}),(0,r.jsx)("polyline",{points:"159,1 159,39 1,39 1,1 159,1",className:"hl-line"})]}),(0,r.jsx)("span",{className:"text-black dark:text-white hover:text-black",children:"Send me an email"})]})})]})}},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=9999,e(e.s=t);var t}));var t=e.O();_N_E=t}]);