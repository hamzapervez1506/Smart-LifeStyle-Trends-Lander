(()=>{var e={2505:(e,t,n)=>{e.exports=n(8015)},5592:(e,t,n)=>{"use strict";var r=n(9516),o=n(7522),a=n(3948),i=n(9106),s=n(9615),c=n(2012),u=n(4202),l=n(7763);e.exports=function(e){return new Promise((function(t,n){var d=e.data,f=e.headers,p=e.responseType;r.isFormData(d)&&delete f["Content-Type"];var h=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",g=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";f.Authorization="Basic "+btoa(m+":"+g)}var v=s(e.baseURL,e.url);function y(){if(h){var r="getAllResponseHeaders"in h?c(h.getAllResponseHeaders()):null,a={data:p&&"text"!==p&&"json"!==p?h.response:h.responseText,status:h.status,statusText:h.statusText,headers:r,config:e,request:h};o(t,n,a),h=null}}if(h.open(e.method.toUpperCase(),i(v,e.params,e.paramsSerializer),!0),h.timeout=e.timeout,"onloadend"in h?h.onloadend=y:h.onreadystatechange=function(){h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))&&setTimeout(y)},h.onabort=function(){h&&(n(l("Request aborted",e,"ECONNABORTED",h)),h=null)},h.onerror=function(){n(l("Network Error",e,null,h)),h=null},h.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(l(t,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",h)),h=null},r.isStandardBrowserEnv()){var b=(e.withCredentials||u(v))&&e.xsrfCookieName?a.read(e.xsrfCookieName):void 0;b&&(f[e.xsrfHeaderName]=b)}"setRequestHeader"in h&&r.forEach(f,(function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete f[t]:h.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(h.withCredentials=!!e.withCredentials),p&&"json"!==p&&(h.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&h.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){h&&(h.abort(),n(e),h=null)})),d||(d=null),h.send(d)}))}},8015:(e,t,n)=>{"use strict";var r=n(9516),o=n(9012),a=n(5155),i=n(5343);function s(e){var t=new a(e),n=o(a.prototype.request,t);return r.extend(n,a.prototype,t),r.extend(n,t),n}var c=s(n(6987));c.Axios=a,c.create=function(e){return s(i(c.defaults,e))},c.Cancel=n(1928),c.CancelToken=n(3191),c.isCancel=n(3864),c.all=function(e){return Promise.all(e)},c.spread=n(7980),c.isAxiosError=n(5019),e.exports=c,e.exports.default=c},1928:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},3191:(e,t,n)=>{"use strict";var r=n(1928);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},3864:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},5155:(e,t,n)=>{"use strict";var r=n(9516),o=n(9106),a=n(3471),i=n(4490),s=n(5343),c=n(4841),u=c.validators;function l(e){this.defaults=e,this.interceptors={request:new a,response:new a}}l.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&c.assertOptions(t,{silentJSONParsing:u.transitional(u.boolean,"1.0.0"),forcedJSONParsing:u.transitional(u.boolean,"1.0.0"),clarifyTimeoutError:u.transitional(u.boolean,"1.0.0")},!1);var n=[],r=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(r=r&&t.synchronous,n.unshift(t.fulfilled,t.rejected))}));var o,a=[];if(this.interceptors.response.forEach((function(e){a.push(e.fulfilled,e.rejected)})),!r){var l=[i,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(a),o=Promise.resolve(e);l.length;)o=o.then(l.shift(),l.shift());return o}for(var d=e;n.length;){var f=n.shift(),p=n.shift();try{d=f(d)}catch(e){p(e);break}}try{o=i(d)}catch(e){return Promise.reject(e)}for(;a.length;)o=o.then(a.shift(),a.shift());return o},l.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){l.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){l.prototype[e]=function(t,n,r){return this.request(s(r||{},{method:e,url:t,data:n}))}})),e.exports=l},3471:(e,t,n)=>{"use strict";var r=n(9516);function o(){this.handlers=[]}o.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},9615:(e,t,n)=>{"use strict";var r=n(9137),o=n(4680);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},7763:(e,t,n)=>{"use strict";var r=n(5449);e.exports=function(e,t,n,o,a){var i=new Error(e);return r(i,t,n,o,a)}},4490:(e,t,n)=>{"use strict";var r=n(9516),o=n(2881),a=n(3864),i=n(6987);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return s(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return a(t)||(s(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},5449:e=>{"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},5343:(e,t,n)=>{"use strict";var r=n(9516);e.exports=function(e,t){t=t||{};var n={},o=["url","method","data"],a=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function u(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(e[o],t[o])}r.forEach(o,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(a,u),r.forEach(i,(function(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(void 0,t[o])})),r.forEach(s,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var l=o.concat(a).concat(i).concat(s),d=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return r.forEach(d,u),n}},7522:(e,t,n)=>{"use strict";var r=n(7763);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},2881:(e,t,n)=>{"use strict";var r=n(9516),o=n(6987);e.exports=function(e,t,n){var a=this||o;return r.forEach(n,(function(n){e=n.call(a,e,t)})),e}},6987:(e,t,n)=>{"use strict";var r=n(9516),o=n(7018),a=n(5449),i={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var c,u={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(c=n(5592)),c),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)||t&&"application/json"===t["Content-Type"]?(s(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(0,JSON.parse)(e),r.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional,n=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,i=!n&&"json"===this.responseType;if(i||o&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(i){if("SyntaxError"===e.name)throw a(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){u.headers[e]=r.merge(i)})),e.exports=u},9012:e=>{"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},9106:(e,t,n)=>{"use strict";var r=n(9516);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(r.isURLSearchParams(t))a=t.toString();else{var i=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),a=i.join("&")}if(a){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},4680:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},3948:(e,t,n)=>{"use strict";var r=n(9516);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,a,i){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},9137:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},5019:e=>{"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},4202:(e,t,n)=>{"use strict";var r=n(9516);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},7018:(e,t,n)=>{"use strict";var r=n(9516);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},2012:(e,t,n)=>{"use strict";var r=n(9516),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,i={};return e?(r.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),n=r.trim(e.substr(a+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}})),i):i}},7980:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},4841:(e,t,n)=>{"use strict";var r=n(4198),o={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){o[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var a={},i=r.version.split(".");function s(e,t){for(var n=t?t.split("."):i,r=e.split("."),o=0;o<3;o++){if(n[o]>r[o])return!0;if(n[o]<r[o])return!1}return!1}o.transitional=function(e,t,n){var o=t&&s(t);function i(e,t){return"[Axios v"+r.version+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,s){if(!1===e)throw new Error(i(r," has been removed in "+t));return o&&!a[r]&&(a[r]=!0,console.warn(i(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,s)}},e.exports={isOlderVersion:s,assertOptions:function(e,t,n){if("object"!=typeof e)throw new TypeError("options must be an object");for(var r=Object.keys(e),o=r.length;o-->0;){var a=r[o],i=t[a];if(i){var s=e[a],c=void 0===s||i(s,a,e);if(!0!==c)throw new TypeError("option "+a+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+a)}},validators:o}},9516:(e,t,n)=>{"use strict";var r=n(9012),o=Object.prototype.toString;function a(e){return"[object Array]"===o.call(e)}function i(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===o.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isPlainObject:c,isUndefined:i,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:u,isStream:function(e){return s(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:l,merge:function e(){var t={};function n(n,r){c(t[r])&&c(n)?t[r]=e(t[r],n):c(n)?t[r]=e({},n):a(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)l(arguments[r],n);return t},extend:function(e,t,n){return l(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},7147:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#".concat(vidaPagesHandle,"-global-js-after"));e&&e.innerText.includes('CE2.converted("6f671e24-74e9-4fe0-b347-083d9e80ed3b")')||document.querySelectorAll('a[href*="https://tracking.smartestlifestyletrends.com/click"]').forEach((function(e){e.addEventListener("click",(function(){e.target="_blank",(window.CE_API||(window.CE_API=[])).push((function(){CE2.converted("6f671e24-74e9-4fe0-b347-083d9e80ed3b")}))}))}))}))},1091:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=new URLSearchParams(window.location.search),t="click_index";if(e.has(t)){var n=document.querySelectorAll("a[href*='tracking.smartestlifestyletrends.com']"),r=e.get(t);n.forEach((function(e){e.href=e.href.replace(/\/click(\/)?/gm,"/click/".concat(r))}))}}))},738:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=new URLSearchParams(window.location.search),t="disclaimer";if(e.has(t)){var n=e.get(t);"no"!=n&&n||(document.querySelector(".advertorial-disclaimer").style.display="none")}}))},862:()=>{document.addEventListener("DOMContentLoaded",(function(){var e;if("undefined"!=typeof dynamicDate){var t=document.querySelectorAll(".post-date"),n=new Date,r=["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()],o=(e=n.getDate())+(e%10==1&&11!=e?"st":e%10==2&&12!=e?"nd":e%10==3&&13!=e?"rd":"th"),a=n.getFullYear();t.forEach((function(e){return e.innerText="".concat(r," ").concat(o,", ").concat(a)}))}}))},2752:()=>{document.addEventListener("DOMContentLoaded",(function(e){var t,n=new URLSearchParams(window.location.search);n.has("push")&&function(e){var t=document.createElement("link");t.rel="manifest",t.href="/manifest.json",document.getElementsByTagName("head")[0].appendChild(t);var n=document.createElement("script");n.type="text/javascript",n.src="https://api.pushnami.com/scripts/v1/pushnami-adv/5bdb7890ec8f593eef35b7dc",n.async=!0,n.onload=function(){Pushnami.update({source:location.pathname,vertical:e}).prompt()},document.getElementsByTagName("head")[0].appendChild(n)}(n.get("push")),n.has("push_ios")&&((t=document.createElement("script")).type="text/javascript",t.src="https://cdn.pushnami.com/scripts/cal/tw1-63765e7ac444b1ace8605816.js",t.async=!0,document.getElementsByTagName("head")[0].appendChild(t))}))},7807:()=>{document.addEventListener("DOMContentLoaded",(function(e){var t=new URLSearchParams(window.location.search);if(t.has("o")){var n=document.querySelector(".posts__loop"),r=n.querySelectorAll(".wp-block-group"),o=r.item(0).previousSibling;t.get("o").split("-").reverse().forEach((function(e){var t=r.item(parseInt(--e));n.insertBefore(t,o.nextSibling)}))}document.querySelectorAll(".attrakt--listicle-item").forEach((function(e,t){var n=e.querySelector("h1,h2,h3,h4,h5,h6");console.log(n),n.prepend("".concat(t+1,". "))}))}))},5227:()=>{var e,t,n,r,o,a,i;e=window,t=document,n="script",e[r="uetq"]=e[r]||[],o=function(){var t={ti:"21002014",enableAutoSpaTracking:!0};t.q=e[r],e[r]=new UET(t),e[r].push("pageLoad")},(a=t.createElement(n)).src="//bat.bing.com/bat.js",a.async=1,a.onload=a.onreadystatechange=function(){var e=this.readyState;e&&"loaded"!==e&&"complete"!==e||(o(),a.onload=a.onreadystatechange=null)},(i=t.getElementsByTagName(n)[0]).parentNode.insertBefore(a,i),function(e,t,n,r,o){var a,i,s;e[o]=e[o]||[],a=function(){var t={ti:"21002009",enableAutoSpaTracking:!0};t.q=e[o],e[o]=new UET(t),e[o].push("pageLoad")},(i=t.createElement(n)).src="//bat.bing.com/bat.js",i.async=1,i.onload=i.onreadystatechange=function(){var e=this.readyState;e&&"loaded"!==e&&"complete"!==e||(a(),i.onload=i.onreadystatechange=null)},(s=t.getElementsByTagName(n)[0]).parentNode.insertBefore(i,s)}(window,document,"script",0,"uetq"),function(e,t,n,r,o){var a,i,s;e[o]=e[o]||[],a=function(){var t={ti:"21005740",enableAutoSpaTracking:!0};t.q=e[o],e[o]=new UET(t),e[o].push("pageLoad")},(i=t.createElement(n)).src="//bat.bing.com/bat.js",i.async=1,i.onload=i.onreadystatechange=function(){var e=this.readyState;e&&"loaded"!==e&&"complete"!==e||(a(),i.onload=i.onreadystatechange=null)},(s=t.getElementsByTagName(n)[0]).parentNode.insertBefore(i,s)}(window,document,"script",0,"uetq"),function(e,t,n,r,o){var a,i,s;e[o]=e[o]||[],a=function(){var t={ti:"5738517",enableAutoSpaTracking:!0};t.q=e[o],e[o]=new UET(t),e[o].push("pageLoad")},(i=t.createElement(n)).src="//bat.bing.com/bat.js",i.async=1,i.onload=i.onreadystatechange=function(){var e=this.readyState;e&&"loaded"!==e&&"complete"!==e||(a(),i.onload=i.onreadystatechange=null)},(s=t.getElementsByTagName(n)[0]).parentNode.insertBefore(i,s)}(window,document,"script",0,"uetq"),function(e,t,n,r,o){var a,i,s;e[o]=e[o]||[],a=function(){var t={ti:"5738200",enableAutoSpaTracking:!0};t.q=e[o],e[o]=new UET(t),e[o].push("pageLoad")},(i=t.createElement(n)).src="//bat.bing.com/bat.js",i.async=1,i.onload=i.onreadystatechange=function(){var e=this.readyState;e&&"loaded"!==e&&"complete"!==e||(a(),i.onload=i.onreadystatechange=null)},(s=t.getElementsByTagName(n)[0]).parentNode.insertBefore(i,s)}(window,document,"script",0,"uetq"),function(e,t,n,r,o){var a,i,s;e[o]=e[o]||[],a=function(){var t={ti:"16019076",enableAutoSpaTracking:!0};t.q=e[o],e[o]=new UET(t),e[o].push("pageLoad")},(i=t.createElement(n)).src="//bat.bing.com/bat.js",i.async=1,i.onload=i.onreadystatechange=function(){var e=this.readyState;e&&"loaded"!==e&&"complete"!==e||(a(),i.onload=i.onreadystatechange=null)},(s=t.getElementsByTagName(n)[0]).parentNode.insertBefore(i,s)}(window,document,"script",0,"uetq"),function(e,t,n,r,o){var a,i,s;e[o]=e[o]||[],a=function(){var t={ti:"5063306",enableAutoSpaTracking:!0};t.q=e[o],e[o]=new UET(t),e[o].push("pageLoad")},(i=t.createElement(n)).src="//bat.bing.com/bat.js",i.async=1,i.onload=i.onreadystatechange=function(){var e=this.readyState;e&&"loaded"!==e&&"complete"!==e||(a(),i.onload=i.onreadystatechange=null)},(s=t.getElementsByTagName(n)[0]).parentNode.insertBefore(i,s)}(window,document,"script",0,"uetq")},6206:()=>{try{!function(e,t,n,r,o,a,i,s,c,u,l,d,f,p,h,m,g,v,y,b){function w(){for(var e=t.querySelectorAll(".dtpcnt"),n=0,r=e.length;n<r;n++)e[n][i]=e[n][i].replace(/(^|\s+)dtpcnt($|\s+)/g,"")}b="https:"===e.location.protocol?"secure; ":"",e[c]||(e[c]=function(){(e[c].q=e[c].q||[]).push(arguments)},h=t[r],t[r]=function(){if(h&&h.apply(this,arguments),e[c]&&!e[c].hasOwnProperty("params")&&/loaded|interactive|complete/.test(t.readyState))for(;f=t[o][u++];)/\/?click\/?($|(\/[0-9]+)?$)/.test(f.pathname)&&(f[a]="javascrip"+e.postMessage.toString().slice(4,5)+":"+c+'.l="'+f[a]+'",void 0')},setTimeout((function(){(g=/[?&]cpid(=([^&#]*)|&|#|$)/.exec(e.location.href))&&g[2]&&(m=g[2],v=t.cookie.match(new RegExp("(^| )vl-"+m+"=([^;]+)")));var r=t.cookie.match(/(^| )vl-cep=([^;]+)/),i=location[a];if(r&&(!m||void 0===m)&&0>i.indexOf("cep=")){var s=-1<i.indexOf("?")?"&":"?";i+=s+r.pop()}f=t.createElement("script"),p=t.scripts[0],f.defer=1,f.src=l+(-1===l.indexOf("?")?"?":"&")+"lpref="+n(t.referrer)+"&lpurl="+n(i)+"&lpt="+n(t.title)+"&vtm="+(new Date).getTime()+(v?"&uw=no":""),f.onerror=function(){for(u=0;f=t[o][u++];)/dtpCallback\.l/.test(f[a])&&(f[a]=decodeURIComponent(f[a]).match(/dtpCallback\.l="([^"]+)/)[1]);w()},p.parentNode.insertBefore(f,p),m&&((y=new Date).setTime(y.getTime()+864e5),t.cookie="vl-"+m+"=1; "+b+"samesite=Strict; expires="+y.toGMTString()+"; path=/")}),0),setTimeout(w,7e3))}(window,document,encodeURIComponent,"onreadystatechange","links","href","className",0,"dtpCallback",0,"https://tracking.smartestlifestyletrends.com/d/.js")}catch(e){console.log(e)}},4198:e=>{"use strict";e.exports=JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e){new MutationObserver((function(t){t.forEach((function(t){"childList"===t.type&&t.addedNodes.forEach((function(t){t.nodeType===Node.ELEMENT_NODE&&e(t)}))}))})).observe(document.body,{childList:!0})}"undefined"!=typeof googleAnalytics&&document.addEventListener("DOMContentLoaded",(function(e){var t,n,r;t=googleAnalytics,n="\n\t\twindow.dataLayer = window.dataLayer || [];\n\t\tfunction gtag() {\n\t\t\tdataLayer.push( arguments ); };\n\t\tgtag( 'js', new Date() );\n\t\tgtag( 'config', '".concat(t,"' );"),(r=document.createElement("script")).setAttribute("type","text/javascript"),r.appendChild(document.createTextNode(n)),document.head.appendChild(r),function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=document.createElement("script");r.type="text/javascript",r.async=t,r.defer=n,r.src=e,document.head.appendChild(r)}("https://www.googletagmanager.com/gtag/js?id=".concat(googleAnalytics),!0)})),n(7147),n(6206),n(5227),function(){function t(e){return new URLSearchParams(window.location.search).get(e)}function n(e){new Image(1,1).src=e}function r(e,t){n("https://prod.perf-serving.com/pixel_s2s?id=".concat(e,"&pp=").concat(t)),console.log("IW clickout")}function o(e,t,n){e.forEach((function(e,o){e.addEventListener("click",(function(e){r(t,n)}))}))}document.addEventListener("DOMContentLoaded",(function(a){var i=document.querySelectorAll("a[href*='//tracking.smartestlifestyletrends.com'],a[href*='//tracking.smartlifestyletrends.com']"),s=t("landing_id"),c=t("clickout_id"),u=t("pp");[s,c,u].reduce((function(e,t){return e&&!!t}),!0)&&(console.log("IW Fired"),function(e,t){n("https://prod.perf-serving.com/pixel_s2s?id=".concat(e,"&pp=").concat(t)),console.log("IW page view")}(s,u),o(i,c,u),e((function(e){"a"===e.tagName.toLowerCase()?e.addEventListener("click",(function(){r(c,u)})):o(e.querySelectorAll("a[href*='//tracking.smartestlifestyletrends.com'],a[href*='//tracking.smartlifestyletrends.com']"),c,u)})))}))}();var t=n(2505),r=n.n(t);function o(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}!function(){var e=document.querySelectorAll(".user_region"),t=document.querySelectorAll(":not(.attrakt--state-image) > .user_region_image"),n=document.querySelectorAll(".user_city"),a=[].concat(o(e),o(t),o(n));document.addEventListener("DOMContentLoaded",(function(){if(a.length)try{var e=JSON.parse(sessionStorage.getItem("geoip"));null===e?(t="https://pro.ip-api.com/json/?key=".concat("AALFHg4itGi6hsM"),r().get(t).then((function(e){sessionStorage.setItem("geoip",JSON.stringify(e.data)),i(e.data)})).catch((function(e){console.error(e)}))):i(e)}catch(e){console.log(e)}var t}));var i=function(r){var o=r.regionName,a=r.city;o&&(e.forEach((function(e){e.textContent=o})),t.forEach((function(e){e.src="".concat("/wp-content/plugins/vida-pages/public/images/states/").concat(o,".jpeg")}))),a&&n.forEach((function(e){e.textContent=a})),"function"==typeof pageGeoIP&&pageGeoIP(r)}}(),n(738),n(862),n(7807),n(1091),n(2752),function(){document.addEventListener("DOMContentLoaded",(function(r){t(),e((function(e){"a"===e.tagName.toLowerCase()&&e.href.includes("tracking.smartestlifestyletrends.com")?e.addEventListener("click",n):t(e)}))}));var t=function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document).querySelectorAll("a[href*='tracking.smartestlifestyletrends.com']").forEach((function(e,t){e.setAttribute("target","_blank"),e.addEventListener("click",n)}))},n=function(){var e=new URLSearchParams(window.location.search);if(e.has("query")){var t=e.get("query");setTimeout((function(){window.location.href="/clickwall/?query=".concat(t)}),500)}}}(),function(){var t=new URLSearchParams(window.location.search);document.addEventListener("DOMContentLoaded",(function(){t.has("insure-cw")&&(console.log("Insure.com Clickwall Queued"),t.delete("insure-cw"),n(),e((function(e){"a"===e.tagName.toLowerCase()&&(e.href.includes("tracking.smartestlifestyletrends.com")||e.classList.contains("insure-redirect"))?e.addEventListener("click",r):n(e)})))}));var n=function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document).querySelectorAll("a[href*='tracking.smartestlifestyletrends.com']:not(.insure-redirect),.insure-redirect").forEach((function(e){e.setAttribute("target","_blank"),e.addEventListener("click",r)}))},r=function(){setTimeout((function(){var e="/insure-clickwall/?".concat(t.toString());window.location.href=e}),500)}}()})()})();