(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{LF8A:function(t,e,n){var r=n("cqny"),i=n("vjlx")((function(t,e){return null==t?{}:r(t,e)}));t.exports=i},SGY3:function(t,e,n){"use strict";n.d(e,"c",(function(){return y})),n.d(e,"d",(function(){return w})),n.d(e,"e",(function(){return h})),n.d(e,"a",(function(){return E})),n.d(e,"f",(function(){return D})),n.d(e,"b",(function(){return S}));var r=n("RHl7"),i=n("EGhD"),a=n("dTrz"),c=n("Z0Z0"),o=n("RNUX"),u=n("1twF"),d=n.n(u),s=n("+KM7"),f=n.n(s),b=n("06hQ"),l=n.n(b),p=n("LF8A"),O=n.n(p),v=n("V7cP"),j=n("pFuD");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){Object(i.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t){return"".concat("lps","_").concat(t)}function w(t){var e=t.id,n="updatedAt"in t?t.updatedAt:null,r=n?new Date(n).getTime():0,i=o.a.getParsedItem(y(e),null);return!i||i.updatedAt>r?i?m(m({},i),O()(t,j.a)):i:i?(E(e),null):void 0}function h(t,e){var n=!function(t){return o.a.hasItem(y(t))}(t),r=y(t),i=(new Date).getTime();if(o.a.setItem(r,JSON.stringify(m(m({},e),{},{updatedAt:i}))),n){var a=Object.keys(o.a._storage).filter((function(t){return t.includes("".concat("lps","_"))}));if(a.length>10){var c=a.map((function(t){return{key:t,data:JSON.parse(o.a._storage[t])}})).sort((function(t,e){return t.data.updatedAt-e.data.updatedAt}));o.a.removeItem(c[0].key)}}}function E(t){o.a.removeItem(y(t))}function D(t,e){var n=1e3*(e||0),r=y(t),i=o.a.getParsedItem(r,null);if(i){var a=JSON.stringify(m(m({},i),{},{updatedAt:new Date(Date.now()+n).getTime()}));o.a.setItem(r,a)}}function S(t,e,n){var i=t.graphicsData,o=t.guestSettings,u=t.page,s=e.graphicsData,b=e.guestSettings,p=e.page,O=function(t,e,n){return t||!d()(e,n,(function(t,e,n){return"artifactDuration"===n||"artifactUrl"===n||"compositeUrl"===n||void 0}))}(n,i,s),j=function(t,e){var n=e.eventType,r=e.id,i=Object(v.f)(r,n);return!d()(t,e,(function(t,e,n){return"xCorePackageId"===n||"blocks"===n||"artifacts"===n||"previewImageUrl"===n||"questions"===n||"stagedQuestions"===n&&0===e.length||("event"!==n||f()(t,e)?void 0:!!e.isSaved||f()(e,i))}))}(u,p),g=function(t,e){var n=Object(c.b)(t,a.a),i=Object(c.b)(e,a.a);return!(null===n||void 0===n||!n.data)&&Object.entries(i.data).some((function(t){var e,i,a,c=Object(r.a)(t,2),o=c[0],u=c[1];return u.isEdited?l()(u.data)?!f()(u.data,null===(i=n.data[o])||void 0===i?void 0:i.data):u.data!==(null===(a=n.data[o])||void 0===a?void 0:a.data):!u.isInitialSync&&u.isEnabled!==(null===(e=n.data[o])||void 0===e?void 0:e.isEnabled)}))}(u.blocks,p.blocks),m=function(t,e){var n=Object(c.b)(t,a.d),r=Object(c.b)(e,a.d);return!!n&&!f()(n.data,r.data)}(u.blocks,p.blocks),y=function(t){var e=t.blocks,n=t.event,r=t.eventType,i=t.id,o=t.stagedQuestions,u=Object(v.f)(i,r),d=Object(c.b)(e,a.a);return!(null!==n&&void 0!==n&&n.id)&&(Object.values(d.data).some((function(t){return t.isEdited}))||!!o.length||!!n&&!f()(n,u))}(p),w=!f()(b,Object(v.e)(p.id,p.eventType))&&!f()(o,b),h=p.blocks.some((function(t,e){var n;return!(null!==(n=u.blocks[e].id)&&void 0!==n&&n.includes(a.b))&&t.id!==u.blocks[e].id}));return{isEdited:j||g||m||y||O||w||h,isGraphicsUpdated:O}}},cqny:function(t,e,n){var r=n("d7eO"),i=n("QlLD");t.exports=function(t,e){return r(t,e,(function(e,n){return i(t,n)}))}},d7eO:function(t,e,n){var r=n("+Bmy"),i=n("x0rR"),a=n("+ERu");t.exports=function(t,e,n){for(var c=-1,o=e.length,u={};++c<o;){var d=e[c],s=r(t,d);n(s,d)&&i(u,a(d,t),s)}return u}},pFuD:function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return E}));var r=n("EGhD"),i=n("Mx+G"),a=n.n(i),c=n("ivGQ"),o=n("CoHH"),u=n("SGY3"),d=n("dTrz"),s=n("DgoM"),f=n("Z0Z0"),b=n("RTE+");function l(t){t.preventDefault(),t.returnValue=""}var p=n("RjO1"),O=n.n(p),v=n("ERHq"),j=n("KUsB");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y=Object(b.a)().isIos,w=a()((function(t,e){var n=function(t){var e=t.graphicsData,n=t.guestSettings,r=t.page;return Object(f.b)(r.blocks,d.h).data=e,m(m({},r),{},{guestSettings:n})}(e);Object(u.e)(t,n)}),250),h=["purchasedBundles","features","ownerId"];function E(t,e,n,r,i){var a=Object(v.b)((function(t){var e=t.page.page;return O()(e,h)}),o.d),d=Object(v.b)((function(t){return t.mediaEditor.graphicsData})),f=Object(v.b)((function(t){return t.mediaEditor.setupIsCompleted})),b=Object(v.b)((function(t){return t.mediaEditor.hasEditedMedia})),p=Object(v.b)((function(t){return t.guestList.settings})),g=Object(v.b)((function(t){return t.editorStates.editorState})),m=Object(v.b)((function(t){return t.editorStates.isInitialStateSetupFinished})),E=Object(o.e)(),D=Object(c.useRef)(null),S=Object(c.useRef)(!1),P=function(){var t=Object(c.useState)(!1),e=t[0],n=t[1],r=Object(c.useCallback)((function(){e||(window.addEventListener("beforeunload",l),n(!0))}),[e]),i=Object(c.useCallback)((function(){window.removeEventListener("beforeunload",l),n(!1)}),[n]);return{confirmUnloadIsEnabled:e,enableConfirmUnload:r,disableConfirmUnload:i}}(),k=P.disableConfirmUnload,I=P.enableConfirmUnload;Object(c.useEffect)((function(){if(m&&f&&!e){var c={page:a,graphicsData:d,guestSettings:p};if(n)w(a.id,c),t||(D.current=c);else if(D.current){if(!S.current){var o=Object(u.b)(D.current,c,b),l=o.isEdited,O=o.isGraphicsUpdated;l?(!i&&r(!0),!b&&O&&E(Object(s.Pb)(!0))):(w.cancel(),Object(u.a)(a.id))}}else D.current=c}}),[E,d,p,b,f,e,m,t,n,a,r,i]),Object(c.useEffect)((function(){n&&j.db.includes(g)?(r(!1),S.current=!0):S.current&&!j.db.includes(g)&&(r(!0),S.current=!1)}),[g,n,r]),Object(c.useEffect)((function(){function t(){y||Object(u.a)(a.id)}return n?(I(),window.addEventListener("unload",t)):k(),function(){window.removeEventListener("unload",t)}}),[I,k,n,a.id])}},x0rR:function(t,e,n){var r=n("D8Vt"),i=n("+ERu"),a=n("9yx8"),c=n("06hQ"),o=n("Iv0v");t.exports=function(t,e,n,u){if(!c(t))return t;for(var d=-1,s=(e=i(e,t)).length,f=s-1,b=t;null!=b&&++d<s;){var l=o(e[d]),p=n;if("__proto__"===l||"constructor"===l||"prototype"===l)return t;if(d!=f){var O=b[l];void 0===(p=u?u(O,l,b):void 0)&&(p=c(O)?O:a(e[d+1])?[]:{})}r(b,l,p),b=b[l]}return t}}}]);