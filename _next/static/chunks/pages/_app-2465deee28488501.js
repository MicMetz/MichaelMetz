(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4178)}])},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,r=n(7273).Z,l=o(n(7294)),u=n(4532),s=n(3353),i=n(1410),a=n(9064),c=n(370),f=n(9955),d=n(4224),p=n(508),h=n(1516),v=n(4266);let y=new Set;function b(e,t,n,o,r){if(r||s.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let r=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+r;if(y.has(l))return;y.add(l)}Promise.resolve(e.prefetch(t,n,o)).catch(e=>{})}}function g(e){return"string"==typeof e?e:i.formatUrl(e)}let j=l.default.forwardRef(function(e,t){let n,o;let{href:i,as:y,children:j,prefetch:m,passHref:_,replace:M,shallow:x,scroll:k,locale:C,onClick:E,onMouseEnter:P,onTouchStart:O,legacyBehavior:w=!1}=e,K=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=j,w&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let N=!1!==m,R=l.default.useContext(f.RouterContext),I=l.default.useContext(d.AppRouterContext),L=null!=R?R:I,T=!R,{href:S,as:A}=l.default.useMemo(()=>{if(!R){let e=g(i);return{href:e,as:y?g(y):e}}let[e,t]=u.resolveHref(R,i,!0);return{href:e,as:y?u.resolveHref(R,y):t||e}},[R,i,y]),U=l.default.useRef(S),D=l.default.useRef(A);w&&(o=l.default.Children.only(n));let F=w?o&&"object"==typeof o&&o.ref:t,[X,z,G]=p.useIntersection({rootMargin:"200px"}),Q=l.default.useCallback(e=>{(D.current!==A||U.current!==S)&&(G(),D.current=A,U.current=S),X(e),F&&("function"==typeof F?F(e):"object"==typeof F&&(F.current=e))},[A,F,S,G,X]);l.default.useEffect(()=>{L&&z&&N&&b(L,S,A,{locale:C},T)},[A,S,z,C,N,null==R?void 0:R.locale,L,T]);let q={ref:Q,onClick(e){w||"function"!=typeof E||E(e),w&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,n,o,r,u,i,a,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!s.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:u,locale:a,scroll:i}):t[r?"replace":"push"](o||n,{forceOptimisticNavigation:!f})};c?l.default.startTransition(h):h()}(e,L,S,A,M,x,k,C,T,N)},onMouseEnter(e){w||"function"!=typeof P||P(e),w&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),L&&(N||!T)&&b(L,S,A,{locale:C,priority:!0,bypassPrefetchedCheck:!0},T)},onTouchStart(e){w||"function"!=typeof O||O(e),w&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),L&&(N||!T)&&b(L,S,A,{locale:C,priority:!0,bypassPrefetchedCheck:!0},T)}};if(a.isAbsoluteUrl(A))q.href=A;else if(!w||_||"a"===o.type&&!("href"in o.props)){let e=void 0!==C?C:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&h.getDomainLocale(A,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);q.href=t||v.addBasePath(c.addLocale(A,e,null==R?void 0:R.defaultLocale))}return w?l.default.cloneElement(o,q):l.default.createElement("a",Object.assign({},K,q),n)});t.default=j,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:i}=e,a=i||!l,[c,f]=o.useState(!1),d=o.useRef(null),p=o.useCallback(e=>{d.current=e},[]);o.useEffect(()=>{if(l){if(a||c)return;let e=d.current;if(e&&e.tagName){let o=function(e,t,n){let{id:o,observer:r,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=s.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=u.get(o)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:r},s.push(n),u.set(n,t),t}(n);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),u.delete(o);let e=s.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return o}}else if(!c){let e=r.requestIdleCallback(()=>f(!0));return()=>r.cancelIdleCallback(e)}},[a,n,t,c,d.current]);let h=o.useCallback(()=>{f(!1)},[]);return[p,c,h]};var o=n(7294),r=n(29);let l="function"==typeof IntersectionObserver,u=new Map,s=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4178:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var o=n(5893);n(7294),n(5707),n(3814),n(4494);var r=n(9008),l=n.n(r),u=n(1664),s=n.n(u),i=n(4298),a=n.n(i);function c(e){let{Component:t,pageProps:n}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(l(),{children:[(0,o.jsx)("title",{children:"Michael Metzger"}),(0,o.jsx)("meta",{name:"description",content:"Michael Metzger's personal website"}),(0,o.jsx)(s(),{rel:"icon",href:"/favicon.ico"}),(0,o.jsx)(s(),{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"}),(0,o.jsx)(a(),{src:"https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"}),(0,o.jsx)(a(),{src:"https://code.jquery.com/jquery-3.2.1.slim.min.js",integrity:"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN",crossOrigin:"anonymous"}),(0,o.jsx)(a(),{src:"https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js",integrity:"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q",crossOrigin:"anonymous"})]}),(0,o.jsx)(t,{...n})]})}},4494:function(){},5707:function(){},3814:function(){},9008:function(e,t,n){e.exports=n(2636)},1664:function(e,t,n){e.exports=n(5569)},4298:function(e,t,n){e.exports=n(5442)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);