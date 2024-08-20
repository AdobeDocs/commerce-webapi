(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[4916],{17494:function(e,t,n){var r=n(65606),o=n(34579),i=n(6221),s=n(61837),a=n(41132);e.exports=function(){var e={295:function(e,t,n){"use strict";var r=n(15),o=n.n(r),i=n(645),s=n.n(i)()(o());s.push([e.id,".ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;height:15px;bottom:0;position:absolute}.ps__rail-y{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;width:15px;right:0;position:absolute}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{display:block;background-color:transparent}.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y,.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y{opacity:.6}.ps .ps__rail-x:hover,.ps .ps__rail-y:hover,.ps .ps__rail-x:focus,.ps .ps__rail-y:focus,.ps .ps__rail-x.ps--clicking,.ps .ps__rail-y.ps--clicking{background-color:#eee;opacity:.9}.ps__thumb-x{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px;position:absolute}.ps__thumb-y{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px;position:absolute}.ps__rail-x:hover>.ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x.ps--clicking .ps__thumb-x{background-color:#999;height:11px}.ps__rail-y:hover>.ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y.ps--clicking .ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style: none){.ps{overflow:auto!important}}@media screen and (-ms-high-contrast: active),(-ms-high-contrast: none){.ps{overflow:auto!important}}\n","",{version:3,sources:["webpack://./node_modules/perfect-scrollbar/css/perfect-scrollbar.css"],names:[],mappings:"AAGA,IACE,yBAAA,CACA,oBAAA,CACA,uBAAA,CACA,iBAAA,CACA,qBAAA,CAMF,YACE,YAAA,CACA,SAAA,CACA,yDAAA,CACA,iEAAA,CACA,WAAA,CAEA,QAAA,CAEA,iBAAA,CAGF,YACE,YAAA,CACA,SAAA,CACA,yDAAA,CACA,iEAAA,CACA,UAAA,CAEA,OAAA,CAEA,iBAAA,CAGF,oDAEE,aAAA,CACA,4BAAA,CAGF,oJAME,UAAA,CAGF,kJAME,qBAAA,CACA,UAAA,CAMF,aACE,qBAAA,CAnEF,iBAAA,CAqEE,6DAAA,CACA,qEAAA,CACA,UAAA,CAEA,UAAA,CAEA,iBAAA,CAGF,aACE,qBAAA,CA/EF,iBAAA,CAiFE,4DAAA,CACA,oEAAA,CACA,SAAA,CAEA,SAAA,CAEA,iBAAA,CAGF,oGAGE,qBAAA,CACA,WAAA,CAGF,oGAGE,qBAAA,CACA,UAAA,CAIF,qCACE,IACE,uBAAA,CAAA,CAIJ,wEACE,IACE,uBAAA,CAAA",sourcesContent:["/*\n * Container style\n */\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent;\n}\n\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6;\n}\n\n.ps .ps__rail-x:hover,\n.ps .ps__rail-y:hover,\n.ps .ps__rail-x:focus,\n.ps .ps__rail-y:focus,\n.ps .ps__rail-x.ps--clicking,\n.ps .ps__rail-y.ps--clicking {\n  background-color: #eee;\n  opacity: 0.9;\n}\n\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x,\n.ps__rail-x.ps--clicking .ps__thumb-x {\n  background-color: #999;\n  height: 11px;\n}\n\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y,\n.ps__rail-y.ps--clicking .ps__thumb-y {\n  background-color: #999;\n  width: 11px;\n}\n\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n"],sourceRoot:""}]),t.Z=s},645:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},15:function(e){"use strict";function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n,r,o=(r=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,i=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);s=!0);}catch(e){a=!0,o=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw o}}return i}}(n,r)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[1],s=o[3];if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),c="/*# ".concat(l," */"),p=s.sources.map((function(e){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(e," */")}));return[i].concat(p).concat([c]).join("\n")}return[i].join("\n")}},45:function(e){e.exports={}},657:function(e,t,r){"use strict";r.d(t,{ZP:function(){return c}});var o=n(58291),i=(e,t,n)=>new Promise(((r,o)=>{var i=e=>{try{a(n.next(e))}catch(e){o(e)}},s=e=>{try{a(n.throw(e))}catch(e){o(e)}},a=e=>e.done?r(e.value):Promise.resolve(e.value).then(i,s);a((n=n.apply(e,t)).next())}));let s,a,l,c=function(){this.add=d,this.done=h,this.search=b,this.toJS=m,this.load=y,this.dispose=g,this.fromExternalJS=f},p=[];function u(){s=new o.Builder,s.field("title"),s.field("description"),s.ref("ref"),s.pipeline.add(o.trimmer,o.stopWordFilter,o.stemmer),l=new Promise((e=>{a=e}))}function d(e,t,n){const r=p.push(n)-1,o={title:e.toLowerCase(),description:t.toLowerCase(),ref:r};s.add(o)}function h(){return i(this,null,(function*(){a(s.build())}))}function m(){return i(this,null,(function*(){return{store:p,index:(yield l).toJSON()}}))}function f(e,t){return i(this,null,(function*(){try{if(importScripts(e),!self[t])throw new Error("Broken index file format");y(self[t])}catch(e){console.error("Failed to load search index: "+e.message)}}))}function y(e){return i(this,null,(function*(){p=e.store,a(o.Index.load(e.index))}))}function g(){return i(this,null,(function*(){p=[],u()}))}function b(e,t){return void 0===t&&(t=0),i(this,null,(function*(){if(0===e.trim().length)return[];let n=(yield l).query((t=>{e.trim().toLowerCase().split(/\s+/).forEach((e=>{if(1===e.length)return;const n=(e=>{const t=o.trimmer(new o.Token(e,{}));return"*"+o.stemmer(t)+"*"})(e);t.term(n,{})}))}));return t>0&&(n=n.slice(0,t)),n.map((e=>({meta:p[e.ref],score:e.score})))}))}o.tokenizer.separator=/\s+/,u()},342:function(e,t,n){"use strict";const r=n(376),o={}.NODE_DISABLE_COLORS?{red:"",yellow:"",green:"",normal:""}:{red:"[31m",yellow:"[33;1m",green:"[32m",normal:"[0m"};function i(e,t){function n(e,t){return r.stringify(e)===r.stringify(Object.assign({},e,t))}return n(e,t)&&n(t,e)}function s(e){let t=(e=e.replace("[]","Array")).split("/");return t[0]=t[0].replace(/[^A-Za-z0-9_\-\.]+|\s+/gm,"_"),t.join("/")}String.prototype.toCamelCase=function(){return this.toLowerCase().replace(/[-_ \/\.](.)/g,(function(e,t){return t.toUpperCase()}))},e.exports={colour:o,uniqueOnly:function(e,t,n){return n.indexOf(e)===t},hasDuplicates:function(e){return new Set(e).size!==e.length},allSame:function(e){return new Set(e).size<=1},distinctArray:function(e){return e.length===function(e){let t=[];for(let n of e)t.find((function(e,t,r){return i(e,n)}))||t.push(n);return t}(e).length},firstDupe:function(e){return e.find((function(t,n,r){return e.indexOf(t)<n}))},hash:function(e){let t,n=0;if(0===e.length)return n;for(let r=0;r<e.length;r++)t=e.charCodeAt(r),n=(n<<5)-n+t,n|=0;return n},parameterTypeProperties:["format","minimum","maximum","exclusiveMinimum","exclusiveMaximum","minLength","maxLength","multipleOf","minItems","maxItems","uniqueItems","minProperties","maxProperties","additionalProperties","pattern","enum","default"],arrayProperties:["items","minItems","maxItems","uniqueItems"],httpMethods:["get","post","put","delete","patch","head","options","trace"],sanitise:s,sanitiseAll:function(e){return s(e.split("/").join("_"))}}},856:function(e,t,n){"use strict";const r=n(45),o=n(470),i=n(416),s=n(416),l=n(66),c=n(53).jptr,p=n(401).recurse,u=n(683).clone,d=n(593).dereference,h=n(592).isRef,m=n(342);function f(e,t,n,r,o,s){let a=s.externalRefs[n+r].paths[0],l=i.parse(o),d={},f=1;for(;f;)f=0,p(e,{identityDetection:!0},(function(e,n,r){if(h(e,n))if(e[n].startsWith("#"))if(d[e[n]]||e.$fixed){if(!e.$fixed){let t=(a+"/"+d[e[n]]).split("/#/").join("/");r.parent[r.pkey]={$ref:t,"x-miro":e[n],$fixed:!0},s.verbose>1&&console.warn("Replacing with",t),f++}}else{let o=u(c(t,e[n]));if(s.verbose>1&&console.warn((!1===o?m.colour.red:m.colour.green)+"Fragment resolution",e[n],m.colour.normal),!1===o){if(r.parent[r.pkey]={},s.fatal){let t=new Error("Fragment $ref resolution failed "+e[n]);if(!s.promise)throw t;s.promise.reject(t)}}else f++,r.parent[r.pkey]=o,d[e[n]]=r.path.replace("/%24ref","")}else if(l.protocol){let t=i.resolve(o,e[n]).toString();s.verbose>1&&console.warn(m.colour.yellow+"Rewriting external url ref",e[n],"as",t,m.colour.normal),e["x-miro"]=e[n],s.externalRefs[e[n]]&&(s.externalRefs[t]||(s.externalRefs[t]=s.externalRefs[e[n]]),s.externalRefs[t].failed=s.externalRefs[e[n]].failed),e[n]=t}else if(!e["x-miro"]){let t=i.resolve(o,e[n]).toString(),r=!1;s.externalRefs[e[n]]&&(r=s.externalRefs[e[n]].failed),r||(s.verbose>1&&console.warn(m.colour.yellow+"Rewriting external ref",e[n],"as",t,m.colour.normal),e["x-miro"]=e[n],e[n]=t)}}));return p(e,{},(function(e,t,n){h(e,t)&&void 0!==e.$fixed&&delete e.$fixed})),s.verbose>1&&console.warn("Finished fragment resolution"),e}function y(e,t){if(!t.filters||!t.filters.length)return e;for(let n of t.filters)e=n(e,t);return e}function g(e,t,n,s){var a=i.parse(n.source),p=n.source.split("\\").join("/").split("/");p.pop()||p.pop();let d="",h=t.split("#");h.length>1&&(d="#"+h[1],t=h[0]),p=p.join("/");let m=(g=i.parse(t).protocol,b=a.protocol,g&&g.length>2?g:b&&b.length>2?b:"file:");var g,b;let x;if(x="file:"===m?o.resolve(p?p+"/":"",t):i.resolve(p?p+"/":"",t),n.cache[x]){n.verbose&&console.warn("CACHED",x,d);let e=u(n.cache[x]),r=n.externalRef=e;if(d&&(r=c(r,d),!1===r&&(r={},n.fatal))){let e=new Error("Cached $ref resolution failed "+x+d);if(!n.promise)throw e;n.promise.reject(e)}return r=f(r,e,t,d,x,n),r=y(r,n),s(u(r),x,n),Promise.resolve(r)}if(n.verbose&&console.warn("GET",x,d),n.handlers&&n.handlers[m])return n.handlers[m](p,t,d,n).then((function(e){return n.externalRef=e,e=y(e,n),n.cache[x]=e,s(e,x,n),e})).catch((function(e){throw n.verbose&&console.warn(e),e}));if(m&&m.startsWith("http")){const e=Object.assign({},n.fetchOptions,{agent:n.agent});return n.fetch(x,e).then((function(e){if(200!==e.status){if(n.ignoreIOErrors)return n.verbose&&console.warn("FAILED",t),n.externalRefs[t].failed=!0,'{"$ref":"'+t+'"}';throw new Error(`Received status code ${e.status}: ${x}`)}return e.text()})).then((function(e){try{let r=l.parse(e,{schema:"core",prettyErrors:!0});if(e=n.externalRef=r,n.cache[x]=u(e),d&&!1===(e=c(e,d))&&(e={},n.fatal)){let e=new Error("Remote $ref resolution failed "+x+d);if(!n.promise)throw e;n.promise.reject(e)}e=y(e=f(e,r,t,d,x,n),n)}catch(e){if(n.verbose&&console.warn(e),!n.promise||!n.fatal)throw e;n.promise.reject(e)}return s(e,x,n),e})).catch((function(e){if(n.verbose&&console.warn(e),n.cache[x]={},!n.promise||!n.fatal)throw e;n.promise.reject(e)}))}{const e='{"$ref":"'+t+'"}';return function(e,t,n,o,i){return new Promise((function(s,a){r.readFile(e,t,(function(e,t){e?n.ignoreIOErrors&&i?(n.verbose&&console.warn("FAILED",o),n.externalRefs[o].failed=!0,s(i)):a(e):s(t)}))}))}(x,n.encoding||"utf8",n,t,e).then((function(e){try{let r=l.parse(e,{schema:"core",prettyErrors:!0});if(e=n.externalRef=r,n.cache[x]=u(e),d&&!1===(e=c(e,d))&&(e={},n.fatal)){let e=new Error("File $ref resolution failed "+x+d);if(!n.promise)throw e;n.promise.reject(e)}e=y(e=f(e,r,t,d,x,n),n)}catch(e){if(n.verbose&&console.warn(e),!n.promise||!n.fatal)throw e;n.promise.reject(e)}return s(e,x,n),e})).catch((function(e){if(n.verbose&&console.warn(e),!n.promise||!n.fatal)throw e;n.promise.reject(e)}))}}function b(e){return new Promise((function(t,n){(function(e){return new Promise((function(t,n){function r(t,n,r){if(t[n]&&h(t[n],"$ref")){let i=t[n].$ref;if(!i.startsWith("#")){let s="";if(!o[i]){let t=Object.keys(o).find((function(e,t,n){return i.startsWith(e+"/")}));t&&(e.verbose&&console.warn("Found potential subschema at",t),s="/"+(i.split("#")[1]||"").replace(t.split("#")[1]||""),s=s.split("/undefined").join(""),i=t)}if(o[i]||(o[i]={resolved:!1,paths:[],extras:{},description:t[n].description}),o[i].resolved)if(o[i].failed);else if(e.rewriteRefs){let r=o[i].resolvedAt;e.verbose>1&&console.warn("Rewriting ref",i,r),t[n]["x-miro"]=i,t[n].$ref=r+s}else t[n]=u(o[i].data);else o[i].paths.push(r.path),o[i].extras[r.path]=s}}}let o=e.externalRefs;if(e.resolver.depth>0&&e.source===e.resolver.base)return t(o);p(e.openapi.definitions,{identityDetection:!0,path:"#/definitions"},r),p(e.openapi.components,{identityDetection:!0,path:"#/components"},r),p(e.openapi,{identityDetection:!0},r),t(o)}))})(e).then((function(t){for(let n in t)if(!t[n].resolved){let r=e.resolver.depth;r>0&&r++,e.resolver.actions[r].push((function(){return g(e.openapi,n,e,(function(e,r,o){if(!t[n].resolved){let i={};i.context=t[n],i.$ref=n,i.original=u(e),i.updated=e,i.source=r,o.externals.push(i),t[n].resolved=!0}let i=Object.assign({},o,{source:"",resolver:{actions:o.resolver.actions,depth:o.resolver.actions.length-1,base:o.resolver.base}});o.patch&&t[n].description&&!e.description&&"object"==typeof e&&(e.description=t[n].description),t[n].data=e;let s=(l=t[n].paths,a(new Set(l)));var l;s=s.sort((function(e,t){const n=e.startsWith("#/components/")||e.startsWith("#/definitions/"),r=t.startsWith("#/components/")||t.startsWith("#/definitions/");return n&&!r?-1:r&&!n?1:0}));for(let a of s)if(t[n].resolvedAt&&a!==t[n].resolvedAt&&a.indexOf("x-ms-examples/")<0)o.verbose>1&&console.warn("Creating pointer to data at",a),c(o.openapi,a,{$ref:t[n].resolvedAt+t[n].extras[a],"x-miro":n+t[n].extras[a]});else{t[n].resolvedAt?o.verbose>1&&console.warn("Avoiding circular reference"):(t[n].resolvedAt=a,o.verbose>1&&console.warn("Creating initial clone of data at",a));let r=u(e);c(o.openapi,a,r)}0===o.resolver.actions[i.resolver.depth].length&&o.resolver.actions[i.resolver.depth].push((function(){return b(i)}))}))}))}})).catch((function(t){e.verbose&&console.warn(t),n(t)}));let r={options:e};r.actions=e.resolver.actions[e.resolver.depth],t(r)}))}function x(e,t,n){e.resolver.actions.push([]),b(e).then((function(r){var o;(o=r.actions,o.reduce(((e,t)=>e.then((e=>t().then(Array.prototype.concat.bind(e))))),Promise.resolve([]))).then((function(){if(e.resolver.depth>=e.resolver.actions.length)return console.warn("Ran off the end of resolver actions"),t(!0);e.resolver.depth++,e.resolver.actions[e.resolver.depth].length?setTimeout((function(){x(r.options,t,n)}),0):(e.verbose>1&&console.warn(m.colour.yellow+"Finished external resolution!",m.colour.normal),e.resolveInternal&&(e.verbose>1&&console.warn(m.colour.yellow+"Starting internal resolution!",m.colour.normal),e.openapi=d(e.openapi,e.original,{verbose:e.verbose-1}),e.verbose>1&&console.warn(m.colour.yellow+"Finished internal resolution!",m.colour.normal)),p(e.openapi,{},(function(t,n,r){h(t,n)&&(e.preserveMiro||delete t["x-miro"])})),t(e))})).catch((function(t){e.verbose&&console.warn(t),n(t)}))})).catch((function(t){e.verbose&&console.warn(t),n(t)}))}function v(e){if(e.cache||(e.cache={}),e.fetch||(e.fetch=s),e.source){let t=i.parse(e.source);(!t.protocol||t.protocol.length<=2)&&(e.source=o.resolve(e.source))}e.externals=[],e.externalRefs={},e.rewriteRefs=!0,e.resolver={},e.resolver.depth=0,e.resolver.base=e.source,e.resolver.actions=[[]]}e.exports={optionalResolve:function(e){return v(e),new Promise((function(t,n){e.resolve?x(e,t,n):t(e)}))},resolve:function(e,t,n){return n||(n={}),n.openapi=e,n.source=t,n.resolve=!0,v(n),new Promise((function(e,t){x(n,e,t)}))}}},804:function(e){"use strict";function t(){return{depth:0,seen:new WeakMap,top:!0,combine:!1,allowRefSiblings:!1}}e.exports={getDefaultState:t,walkSchema:function e(n,r,o,i){if(void 0===o.depth&&(o=t()),null==n)return n;if(void 0!==n.$ref){let e={$ref:n.$ref};return o.allowRefSiblings&&n.description&&(e.description=n.description),i(e,r,o),e}if(o.combine&&(n.allOf&&Array.isArray(n.allOf)&&1===n.allOf.length&&delete(n=Object.assign({},n.allOf[0],n)).allOf,n.anyOf&&Array.isArray(n.anyOf)&&1===n.anyOf.length&&delete(n=Object.assign({},n.anyOf[0],n)).anyOf,n.oneOf&&Array.isArray(n.oneOf)&&1===n.oneOf.length&&delete(n=Object.assign({},n.oneOf[0],n)).oneOf),i(n,r,o),o.seen.has(n))return n;if("object"==typeof n&&null!==n&&o.seen.set(n,!0),o.top=!1,o.depth++,void 0!==n.items&&(o.property="items",e(n.items,n,o,i)),n.additionalItems&&"object"==typeof n.additionalItems&&(o.property="additionalItems",e(n.additionalItems,n,o,i)),n.additionalProperties&&"object"==typeof n.additionalProperties&&(o.property="additionalProperties",e(n.additionalProperties,n,o,i)),n.properties)for(let t in n.properties){let r=n.properties[t];o.property="properties/"+t,e(r,n,o,i)}if(n.patternProperties)for(let t in n.patternProperties){let r=n.patternProperties[t];o.property="patternProperties/"+t,e(r,n,o,i)}if(n.allOf)for(let t in n.allOf){let r=n.allOf[t];o.property="allOf/"+t,e(r,n,o,i)}if(n.anyOf)for(let t in n.anyOf){let r=n.anyOf[t];o.property="anyOf/"+t,e(r,n,o,i)}if(n.oneOf)for(let t in n.oneOf){let r=n.oneOf[t];o.property="oneOf/"+t,e(r,n,o,i)}return n.not&&(o.property="not",e(n.not,n,o,i)),o.depth--,n}}},470:function(e){"use strict";function t(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function n(e,t){for(var n,r="",o=0,i=-1,s=0,a=0;a<=e.length;++a){if(a<e.length)n=e.charCodeAt(a);else{if(47===n)break;n=47}if(47===n){if(i===a-1||1===s);else if(i!==a-1&&2===s){if(r.length<2||2!==o||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var l=r.lastIndexOf("/");if(l!==r.length-1){-1===l?(r="",o=0):o=(r=r.slice(0,l)).length-1-r.lastIndexOf("/"),i=a,s=0;continue}}else if(2===r.length||1===r.length){r="",o=0,i=a,s=0;continue}t&&(r.length>0?r+="/..":r="..",o=2)}else r.length>0?r+="/"+e.slice(i+1,a):r=e.slice(i+1,a),o=a-i-1;i=a,s=0}else 46===n&&-1!==s?++s:s=-1}return r}var o={resolve:function(){for(var e,o="",i=!1,s=arguments.length-1;s>=-1&&!i;s--){var a;s>=0?a=arguments[s]:(void 0===e&&(e=r.cwd()),a=e),t(a),0!==a.length&&(o=a+"/"+o,i=47===a.charCodeAt(0))}return o=n(o,!i),i?o.length>0?"/"+o:"/":o.length>0?o:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),o=47===e.charCodeAt(e.length-1);return 0!==(e=n(e,!r)).length||r||(e="."),e.length>0&&o&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,n=0;n<arguments.length;++n){var r=arguments[n];t(r),r.length>0&&(void 0===e?e=r:e+="/"+r)}return void 0===e?".":o.normalize(e)},relative:function(e,n){if(t(e),t(n),e===n)return"";if((e=o.resolve(e))===(n=o.resolve(n)))return"";for(var r=1;r<e.length&&47===e.charCodeAt(r);++r);for(var i=e.length,s=i-r,a=1;a<n.length&&47===n.charCodeAt(a);++a);for(var l=n.length-a,c=s<l?s:l,p=-1,u=0;u<=c;++u){if(u===c){if(l>c){if(47===n.charCodeAt(a+u))return n.slice(a+u+1);if(0===u)return n.slice(a+u)}else s>c&&(47===e.charCodeAt(r+u)?p=u:0===u&&(p=0));break}var d=e.charCodeAt(r+u);if(d!==n.charCodeAt(a+u))break;47===d&&(p=u)}var h="";for(u=r+p+1;u<=i;++u)u!==i&&47!==e.charCodeAt(u)||(0===h.length?h+="..":h+="/..");return h.length>0?h+n.slice(a+p):(a+=p,47===n.charCodeAt(a)&&++a,n.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var n=e.charCodeAt(0),r=47===n,o=-1,i=!0,s=e.length-1;s>=1;--s)if(47===(n=e.charCodeAt(s))){if(!i){o=s;break}}else i=!1;return-1===o?r?"/":".":r&&1===o?"//":e.slice(0,o)},basename:function(e,n){if(void 0!==n&&"string"!=typeof n)throw new TypeError('"ext" argument must be a string');t(e);var r,o=0,i=-1,s=!0;if(void 0!==n&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var a=n.length-1,l=-1;for(r=e.length-1;r>=0;--r){var c=e.charCodeAt(r);if(47===c){if(!s){o=r+1;break}}else-1===l&&(s=!1,l=r+1),a>=0&&(c===n.charCodeAt(a)?-1==--a&&(i=r):(a=-1,i=l))}return o===i?i=l:-1===i&&(i=e.length),e.slice(o,i)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!s){o=r+1;break}}else-1===i&&(s=!1,i=r+1);return-1===i?"":e.slice(o,i)},extname:function(e){t(e);for(var n=-1,r=0,o=-1,i=!0,s=0,a=e.length-1;a>=0;--a){var l=e.charCodeAt(a);if(47!==l)-1===o&&(i=!1,o=a+1),46===l?-1===n?n=a:1!==s&&(s=1):-1!==n&&(s=-1);else if(!i){r=a+1;break}}return-1===n||-1===o||0===s||1===s&&n===o-1&&n===r+1?"":e.slice(n,o)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var n=t.dir||t.root,r=t.base||(t.name||"")+(t.ext||"");return n?n===t.root?n+r:n+"/"+r:r}(0,e)},parse:function(e){t(e);var n={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return n;var r,o=e.charCodeAt(0),i=47===o;i?(n.root="/",r=1):r=0;for(var s=-1,a=0,l=-1,c=!0,p=e.length-1,u=0;p>=r;--p)if(47!==(o=e.charCodeAt(p)))-1===l&&(c=!1,l=p+1),46===o?-1===s?s=p:1!==u&&(u=1):-1!==s&&(u=-1);else if(!c){a=p+1;break}return-1===s||-1===l||0===u||1===u&&s===l-1&&s===a+1?-1!==l&&(n.base=n.name=0===a&&i?e.slice(1,l):e.slice(a,l)):(0===a&&i?(n.name=e.slice(1,s),n.base=e.slice(1,l)):(n.name=e.slice(a,s),n.base=e.slice(a,l)),n.ext=e.slice(s,l)),a>0?n.dir=e.slice(0,a-1):i&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};o.posix=o,e.exports=o},683:function(e){"use strict";e.exports={nop:function(e){return e},clone:function(e){return JSON.parse(JSON.stringify(e))},shallowClone:function(e){let t={};for(let n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},deepClone:function e(t){let n=Array.isArray(t)?[]:{};for(let r in t)(t.hasOwnProperty(r)||Array.isArray(t))&&(n[r]="object"==typeof t[r]?e(t[r]):t[r]);return n},fastClone:function(e){return Object.assign({},e)},circularClone:function e(t,n){if(n||(n=new WeakMap),Object(t)!==t||t instanceof Function)return t;if(n.has(t))return n.get(t);try{var r=new t.constructor}catch(e){r=Object.create(Object.getPrototypeOf(t))}return n.set(t,r),Object.assign.apply(Object,[r].concat(a(Object.keys(t).map((r=>({[r]:e(t[r],n)}))))))}}},593:function(e,t,n){"use strict";const r=n(401).recurse,o=n(683).shallowClone,i=n(53).jptr,s=n(592).isRef;e.exports={dereference:function e(t,n,a){a||(a={}),a.cache||(a.cache={}),a.state||(a.state={}),a.state.identityDetection=!0,a.depth=a.depth?a.depth+1:1;let l=a.depth>1?t:o(t),c={data:l},p=a.depth>1?n:o(n);a.master||(a.master=l);let u=function(e){return e&&e.verbose?{warn:function(){var e=Array.prototype.slice.call(arguments);console.warn.apply(console,e)}}:{warn:function(){}}}(a),d=1;for(;d>0;)d=0,r(c,a.state,(function(t,n,r){if(s(t,n)){let o=t[n];if(d++,a.cache[o]){let e=a.cache[o];if(e.resolved)u.warn("Patching %s for %s",o,e.path),r.parent[r.pkey]=e.data,a.$ref&&"object"==typeof r.parent[r.pkey]&&(r.parent[r.pkey][a.$ref]=o);else{if(o===e.path)throw new Error(`Tight circle at ${e.path}`);u.warn("Unresolved ref"),r.parent[r.pkey]=i(e.source,e.path),!1===r.parent[r.pkey]&&(r.parent[r.pkey]=i(e.source,e.key)),a.$ref&&"object"==typeof r.parent[r.pkey]&&(r.parent[a.$ref]=o)}}else{let t={};t.path=r.path.split("/$ref")[0],t.key=o,u.warn("Dereffing %s at %s",o,t.path),t.source=p,t.data=i(t.source,t.key),!1===t.data&&(t.data=i(a.master,t.key),t.source=a.master),!1===t.data&&u.warn("Missing $ref target",t.key),a.cache[o]=t,t.data=r.parent[r.pkey]=e(i(t.source,t.key),t.source,a),a.$ref&&"object"==typeof r.parent[r.pkey]&&(r.parent[r.pkey][a.$ref]=o),t.resolved=!0}}}));return c.data}}},592:function(e){"use strict";e.exports={isRef:function(e,t){return"$ref"===t&&!!e&&"string"==typeof e[t]}}},53:function(e){"use strict";function t(e){return e.replace(/\~1/g,"/").replace(/~0/g,"~")}e.exports={jptr:function(e,n,r){if(void 0===e)return!1;if(!n||"string"!=typeof n||"#"===n)return void 0!==r?r:e;if(n.indexOf("#")>=0){let e=n.split("#");if(e[0])return!1;n=e[1],n=decodeURIComponent(n.slice(1).split("+").join(" "))}n.startsWith("/")&&(n=n.slice(1));let o=n.split("/");for(let i=0;i<o.length;i++){o[i]=t(o[i]);let n=void 0!==r&&i==o.length-1,s=parseInt(o[i],10);if(!Array.isArray(e)||isNaN(s)||s.toString()!==o[i]?s=Array.isArray(e)&&"-"===o[i]?-2:-1:o[i]=i>0?o[i-1]:"",-1!=s||e&&e.hasOwnProperty(o[i]))if(s>=0)n&&(e[s]=r),e=e[s];else{if(-2===s)return n?(Array.isArray(e)&&e.push(r),r):void 0;n&&(e[o[i]]=r),e=e[o[i]]}else{if(void 0===r||"object"!=typeof e||Array.isArray(e))return!1;e[o[i]]=n?r:"0"===o[i+1]||"-"===o[i+1]?[]:{},e=e[o[i]]}}return e},jpescape:function(e){return e.replace(/\~/g,"~0").replace(/\//g,"~1")},jpunescape:t}},401:function(e,t,n){"use strict";const r=n(53).jpescape;e.exports={recurse:function e(t,n,o){if(n||(n={depth:0}),n.depth||(n=Object.assign({},{path:"#",depth:0,pkey:"",parent:{},payload:{},seen:new WeakMap,identity:!1,identityDetection:!1},n)),"object"!=typeof t)return;let i=n.path;for(let s in t){if(n.key=s,n.path=n.path+"/"+encodeURIComponent(r(s)),n.identityPath=n.seen.get(t[s]),n.identity=void 0!==n.identityPath,t.hasOwnProperty(s)&&o(t,s,n),"object"==typeof t[s]&&!n.identity){n.identityDetection&&!Array.isArray(t[s])&&null!==t[s]&&n.seen.set(t[s],n.path);let r={};r.parent=t,r.path=n.path,r.depth=n.depth?n.depth+1:1,r.pkey=s,r.payload=n.payload,r.seen=n.seen,r.identity=!1,r.identityDetection=n.identityDetection,e(t[s],r,o)}n.path=i}}}},433:function(e,t,n){"use strict";n.r(t);var r=n(379),o=n.n(r),i=n(795),s=n.n(i),a=n(569),l=n.n(a),c=n(565),p=n.n(c),u=n(216),d=n.n(u),h=n(589),m=n.n(h),f=n(295),y={};y.styleTagTransform=m(),y.setAttributes=p(),y.insert=l().bind(null,"head"),y.domAPI=s(),y.insertStyleElement=d(),o()(f.Z,y),t.default=f.Z&&f.Z.locals?f.Z.locals:void 0},379:function(e){"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},s=[],a=0;a<e.length;a++){var l=e[a],c=r.base?l[0]+r.base:l[0],p=i[c]||0,u="".concat(c," ").concat(p);i[c]=p+1;var d=n(u),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)t[d].references++,t[d].updater(h);else{var m=o(h,r);r.byIndex=a,t.splice(a,0,{identifier:u,updater:m,references:1})}s.push(u)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=n(i[s]);t[a].references--}for(var l=r(e,o),c=0;c<i.length;c++){var p=n(i[c]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}i=l}}},569:function(e){"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:function(e){"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:function(e,t,n){"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:function(e){"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},925:function(e,t,n){"use strict";const r=n(45),o=n(416),a=(n(470),n(766)),l=n(416),c=n(66),p=n(53),u=p.jptr,d=n(592).isRef,h=n(683).clone,m=n(683).circularClone,f=n(401).recurse,y=n(856),g=n(804),b=n(342),x=n(711).statusCodes,v=n(109).i8,w="3.0.0";let k,O=function(e){function t(t){var n;return(n=e.call(this,t)||this).name="S2OError",n}return i(t,e),t}(s(Error));function E(e,t){let n=new O(e);if(n.options=t,!t.promise)throw n;t.promise.reject(n)}function S(e,t,n){n.warnOnly?t[n.warnProperty||"x-s2o-warning"]=e:E(e,n)}function $(e,t){g.walkSchema(e,{},{},(function(e,n,r){!function(e,t){if(e["x-required"]&&Array.isArray(e["x-required"])&&(e.required||(e.required=[]),e.required=e.required.concat(e["x-required"]),delete e["x-required"]),e["x-anyOf"]&&(e.anyOf=e["x-anyOf"],delete e["x-anyOf"]),e["x-oneOf"]&&(e.oneOf=e["x-oneOf"],delete e["x-oneOf"]),e["x-not"]&&(e.not=e["x-not"],delete e["x-not"]),"boolean"==typeof e["x-nullable"]&&(e.nullable=e["x-nullable"],delete e["x-nullable"]),"object"==typeof e["x-discriminator"]&&"string"==typeof e["x-discriminator"].propertyName){e.discriminator=e["x-discriminator"],delete e["x-discriminator"];for(let t in e.discriminator.mapping){let n=e.discriminator.mapping[t];n.startsWith("#/definitions/")&&(e.discriminator.mapping[t]=n.replace("#/definitions/","#/components/schemas/"))}}}(e),function(e,t,n){if(e.nullable&&n.patches++,e.discriminator&&"string"==typeof e.discriminator&&(e.discriminator={propertyName:e.discriminator}),e.items&&Array.isArray(e.items)&&(0===e.items.length?e.items={}:1===e.items.length?e.items=e.items[0]:e.items={anyOf:e.items}),e.type&&Array.isArray(e.type))if(n.patch){if(n.patches++,0===e.type.length)delete e.type;else{e.oneOf||(e.oneOf=[]);for(let t of e.type){let n={};if("null"===t)e.nullable=!0;else{n.type=t;for(let t of b.arrayProperties)void 0!==e.prop&&(n[t]=e[t],delete e[t])}n.type&&e.oneOf.push(n)}delete e.type,0===e.oneOf.length?delete e.oneOf:e.oneOf.length<2&&(e.type=e.oneOf[0].type,Object.keys(e.oneOf[0]).length>1&&S("Lost properties from oneOf",e,n),delete e.oneOf)}e.type&&Array.isArray(e.type)&&1===e.type.length&&(e.type=e.type[0])}else E("(Patchable) schema type must not be an array",n);e.type&&"null"===e.type&&(delete e.type,e.nullable=!0),"array"!==e.type||e.items||(e.items={}),"file"===e.type&&(e.type="string",e.format="binary"),"boolean"==typeof e.required&&(e.required&&e.name&&(void 0===t.required&&(t.required=[]),Array.isArray(t.required)&&t.required.push(e.name)),delete e.required),e.xml&&"string"==typeof e.xml.namespace&&(e.xml.namespace||delete e.xml.namespace),void 0!==e.allowEmptyValue&&(n.patches++,delete e.allowEmptyValue)}(e,n,t)}))}function R(e,t,n){let r=n.payload.options;if(d(e,t)){if(e[t].startsWith("#/components/"));else if("#/consumes"===e[t])delete e[t],n.parent[n.pkey]=h(r.openapi.consumes);else if("#/produces"===e[t])delete e[t],n.parent[n.pkey]=h(r.openapi.produces);else if(e[t].startsWith("#/definitions/")){let n=e[t].replace("#/definitions/","").split("/");const o=p.jpunescape(n[0]);let i=k.schemas[decodeURIComponent(o)];i?n[0]=i:S("Could not resolve reference "+e[t],e,r),e[t]="#/components/schemas/"+n.join("/")}else if(e[t].startsWith("#/parameters/"))e[t]="#/components/parameters/"+b.sanitise(e[t].replace("#/parameters/",""));else if(e[t].startsWith("#/responses/"))e[t]="#/components/responses/"+b.sanitise(e[t].replace("#/responses/",""));else if(e[t].startsWith("#")){let n=h(p.jptr(r.openapi,e[t]));if(!1===n)S("direct $ref not found "+e[t],e,r);else if(r.refmap[e[t]])e[t]=r.refmap[e[t]];else{let i=e[t];i=i.replace("/properties/headers/",""),i=i.replace("/properties/responses/",""),i=i.replace("/properties/parameters/",""),i=i.replace("/properties/schemas/","");let s="schemas",a=i.lastIndexOf("/schema");if(s=i.indexOf("/headers/")>a?"headers":i.indexOf("/responses/")>a?"responses":i.indexOf("/example")>a?"examples":i.indexOf("/x-")>a?"extensions":i.indexOf("/parameters/")>a?"parameters":"schemas","schemas"===s&&$(n,r),"responses"!==s&&"extensions"!==s){let i=s.substr(0,s.length-1);"parameter"===i&&n.name&&n.name===b.sanitise(n.name)&&(i=encodeURIComponent(n.name));let a=1;for(e["x-miro"]&&(o=(o=e["x-miro"]).indexOf("#")>=0?o.split("#")[1].split("/").pop():o.split("/").pop().split(".")[0],i=encodeURIComponent(b.sanitise(o)),a="");p.jptr(r.openapi,"#/components/"+s+"/"+i+a);)a=""===a?2:++a;let l="#/components/"+s+"/"+i+a,c="";"examples"===s&&(n={value:n},c="/value"),p.jptr(r.openapi,l,n),r.refmap[e[t]]=l+c,e[t]=l+c}}}if(delete e["x-miro"],Object.keys(e).length>1){const o=e[t],i=n.path.indexOf("/schema")>=0;"preserve"===r.refSiblings||(i&&"allOf"===r.refSiblings?(delete e.$ref,n.parent[n.pkey]={allOf:[{$ref:o},e]}):n.parent[n.pkey]={$ref:o})}}var o;if("x-ms-odata"===t&&"string"==typeof e[t]&&e[t].startsWith("#/")){let n=e[t].replace("#/definitions/","").replace("#/components/schemas/","").split("/"),o=k.schemas[decodeURIComponent(n[0])];o?n[0]=o:S("Could not resolve reference "+e[t],e,r),e[t]="#/components/schemas/"+n.join("/")}}function C(e){for(let t in e)for(let n in e[t]){let r=b.sanitise(n);n!==r&&(e[t][r]=e[t][n],delete e[t][n])}}function A(e,t){if("basic"===e.type&&(e.type="http",e.scheme="basic"),"oauth2"===e.type){let n={},r=e.flow;"application"===e.flow&&(r="clientCredentials"),"accessCode"===e.flow&&(r="authorizationCode"),void 0!==e.authorizationUrl&&(n.authorizationUrl=e.authorizationUrl.split("?")[0].trim()||"/"),"string"==typeof e.tokenUrl&&(n.tokenUrl=e.tokenUrl.split("?")[0].trim()||"/"),n.scopes=e.scopes||{},e.flows={},e.flows[r]=n,delete e.flow,delete e.authorizationUrl,delete e.tokenUrl,delete e.scopes,void 0!==e.name&&(t.patch?(t.patches++,delete e.name):E("(Patchable) oauth2 securitySchemes should not have name property",t))}}function P(e){return e&&!e["x-s2o-delete"]}function j(e,t){if(e.$ref)e.$ref=e.$ref.replace("#/responses/","#/components/responses/");else{e.type&&!e.schema&&(e.schema={}),e.type&&(e.schema.type=e.type),e.items&&"array"!==e.items.type&&(e.items.collectionFormat!==e.collectionFormat&&S("Nested collectionFormats are not supported",e,t),delete e.items.collectionFormat),"array"===e.type?("ssv"===e.collectionFormat?S("collectionFormat:ssv is no longer supported for headers",e,t):"pipes"===e.collectionFormat?S("collectionFormat:pipes is no longer supported for headers",e,t):"multi"===e.collectionFormat?e.explode=!0:"tsv"===e.collectionFormat?(S("collectionFormat:tsv is no longer supported",e,t),e["x-collectionFormat"]="tsv"):e.style="simple",delete e.collectionFormat):e.collectionFormat&&(t.patch?(t.patches++,delete e.collectionFormat):E("(Patchable) collectionFormat is only applicable to header.type array",t)),delete e.type;for(let t of b.parameterTypeProperties)void 0!==e[t]&&(e.schema[t]=e[t],delete e[t]);for(let t of b.arrayProperties)void 0!==e[t]&&(e.schema[t]=e[t],delete e[t])}}function I(e,t){if(e.$ref.indexOf("#/parameters/")>=0){let t=e.$ref.split("#/parameters/");e.$ref=t[0]+"#/components/parameters/"+b.sanitise(t[1])}e.$ref.indexOf("#/definitions/")>=0&&S("Definition used as parameter",e,t)}function T(e,t,n,r,o,i,s){let a,l={},c=!0;if(t&&t.consumes&&"string"==typeof t.consumes){if(!s.patch)return E("(Patchable) operation.consumes must be an array",s);s.patches++,t.consumes=[t.consumes]}Array.isArray(i.consumes)||delete i.consumes;let p=((t?t.consumes:null)||i.consumes||[]).filter(b.uniqueOnly);if(e&&e.$ref&&"string"==typeof e.$ref){I(e,s);let t=decodeURIComponent(e.$ref.replace("#/components/parameters/","")),n=!1,r=i.components.parameters[t];if(r&&!r["x-s2o-delete"]||!e.$ref.startsWith("#/")||(e["x-s2o-delete"]=!0,n=!0),n){let t=e.$ref,n=u(i,e.$ref);!n&&t.startsWith("#/")?S("Could not resolve reference "+t,e,s):n&&(e=n)}}if(e&&(e.name||e.in)){"boolean"==typeof e["x-deprecated"]&&(e.deprecated=e["x-deprecated"],delete e["x-deprecated"]),void 0!==e["x-example"]&&(e.example=e["x-example"],delete e["x-example"]),"body"===e.in||e.type||(s.patch?(s.patches++,e.type="string"):E("(Patchable) parameter.type is mandatory for non-body parameters",s)),e.type&&"object"==typeof e.type&&e.type.$ref&&(e.type=u(i,e.type.$ref)),"file"===e.type&&(e["x-s2o-originalType"]=e.type,a=e.type),e.description&&"object"==typeof e.description&&e.description.$ref&&(e.description=u(i,e.description.$ref)),null===e.description&&delete e.description;let t=e.collectionFormat;if("array"!==e.type||t||(t="csv"),t&&("array"!==e.type&&(s.patch?(s.patches++,delete e.collectionFormat):E("(Patchable) collectionFormat is only applicable to param.type array",s)),"csv"!==t||"query"!==e.in&&"cookie"!==e.in||(e.style="form",e.explode=!1),"csv"!==t||"path"!==e.in&&"header"!==e.in||(e.style="simple"),"ssv"===t&&("query"===e.in?e.style="spaceDelimited":S("collectionFormat:ssv is no longer supported except for in:query parameters",e,s)),"pipes"===t&&("query"===e.in?e.style="pipeDelimited":S("collectionFormat:pipes is no longer supported except for in:query parameters",e,s)),"multi"===t&&(e.explode=!0),"tsv"===t&&(S("collectionFormat:tsv is no longer supported",e,s),e["x-collectionFormat"]="tsv"),delete e.collectionFormat),e.type&&"body"!==e.type&&"formData"!==e.in)if(e.items&&e.schema)S("parameter has array,items and schema",e,s);else{e.schema&&s.patches++,e.schema&&"object"==typeof e.schema||(e.schema={}),e.schema.type=e.type,e.items&&(e.schema.items=e.items,delete e.items,f(e.schema.items,null,(function(n,r,o){"collectionFormat"===r&&"string"==typeof n[r]&&(t&&n[r]!==t&&S("Nested collectionFormats are not supported",e,s),delete n[r])})));for(let t of b.parameterTypeProperties)void 0!==e[t]&&(e.schema[t]=e[t]),delete e[t]}e.schema&&$(e.schema,s),e["x-ms-skip-url-encoding"]&&"query"===e.in&&(e.allowReserved=!0,delete e["x-ms-skip-url-encoding"])}if(e&&"formData"===e.in){c=!1,l.content={};let t="application/x-www-form-urlencoded";if(p.length&&p.indexOf("multipart/form-data")>=0&&(t="multipart/form-data"),l.content[t]={},e.schema)l.content[t].schema=e.schema,e.schema.$ref&&(l["x-s2o-name"]=decodeURIComponent(e.schema.$ref.replace("#/components/schemas/","")));else{l.content[t].schema={},l.content[t].schema.type="object",l.content[t].schema.properties={},l.content[t].schema.properties[e.name]={};let n=l.content[t].schema,r=l.content[t].schema.properties[e.name];e.description&&(r.description=e.description),e.example&&(r.example=e.example),e.type&&(r.type=e.type);for(let t of b.parameterTypeProperties)void 0!==e[t]&&(r[t]=e[t]);!0===e.required&&(n.required||(n.required=[]),n.required.push(e.name),l.required=!0),void 0!==e.default&&(r.default=e.default),r.properties&&(r.properties=e.properties),e.allOf&&(r.allOf=e.allOf),"array"===e.type&&e.items&&(r.items=e.items,r.items.collectionFormat&&delete r.items.collectionFormat),"file"!==a&&"file"!==e["x-s2o-originalType"]||(r.type="string",r.format="binary"),_(e,r)}}else e&&"file"===e.type&&(e.required&&(l.required=e.required),l.content={},l.content["application/octet-stream"]={},l.content["application/octet-stream"].schema={},l.content["application/octet-stream"].schema.type="string",l.content["application/octet-stream"].schema.format="binary",_(e,l));if(e&&"body"===e.in){l.content={},e.name&&(l["x-s2o-name"]=(t&&t.operationId?b.sanitiseAll(t.operationId):"")+("_"+e.name).toCamelCase()),e.description&&(l.description=e.description),e.required&&(l.required=e.required),t&&s.rbname&&e.name&&(t[s.rbname]=e.name),e.schema&&e.schema.$ref?l["x-s2o-name"]=decodeURIComponent(e.schema.$ref.replace("#/components/schemas/","")):e.schema&&"array"===e.schema.type&&e.schema.items&&e.schema.items.$ref&&(l["x-s2o-name"]=decodeURIComponent(e.schema.items.$ref.replace("#/components/schemas/",""))+"Array"),p.length||p.push("application/json");for(let t of p)l.content[t]={},l.content[t].schema=h(e.schema||{}),$(l.content[t].schema,s);_(e,l)}if(Object.keys(l).length>0&&(e["x-s2o-delete"]=!0,t)&&(t.requestBody&&c?(t.requestBody["x-s2o-overloaded"]=!0,S("Operation "+(t.operationId||o)+" has multiple requestBodies",t,s)):(t.requestBody||(t=n[r]=function(e,t){let n={};for(let r of Object.keys(e))n[r]=e[r],"parameters"===r&&(n.requestBody={},t.rbname&&(n[t.rbname]=""));return n.requestBody={},n}(t,s)),t.requestBody.content&&t.requestBody.content["multipart/form-data"]&&t.requestBody.content["multipart/form-data"].schema&&t.requestBody.content["multipart/form-data"].schema.properties&&l.content["multipart/form-data"]&&l.content["multipart/form-data"].schema&&l.content["multipart/form-data"].schema.properties?(t.requestBody.content["multipart/form-data"].schema.properties=Object.assign(t.requestBody.content["multipart/form-data"].schema.properties,l.content["multipart/form-data"].schema.properties),t.requestBody.content["multipart/form-data"].schema.required=(t.requestBody.content["multipart/form-data"].schema.required||[]).concat(l.content["multipart/form-data"].schema.required||[]),t.requestBody.content["multipart/form-data"].schema.required.length||delete t.requestBody.content["multipart/form-data"].schema.required):t.requestBody.content&&t.requestBody.content["application/x-www-form-urlencoded"]&&t.requestBody.content["application/x-www-form-urlencoded"].schema&&t.requestBody.content["application/x-www-form-urlencoded"].schema.properties&&l.content["application/x-www-form-urlencoded"]&&l.content["application/x-www-form-urlencoded"].schema&&l.content["application/x-www-form-urlencoded"].schema.properties?(t.requestBody.content["application/x-www-form-urlencoded"].schema.properties=Object.assign(t.requestBody.content["application/x-www-form-urlencoded"].schema.properties,l.content["application/x-www-form-urlencoded"].schema.properties),t.requestBody.content["application/x-www-form-urlencoded"].schema.required=(t.requestBody.content["application/x-www-form-urlencoded"].schema.required||[]).concat(l.content["application/x-www-form-urlencoded"].schema.required||[]),t.requestBody.content["application/x-www-form-urlencoded"].schema.required.length||delete t.requestBody.content["application/x-www-form-urlencoded"].schema.required):(t.requestBody=Object.assign(t.requestBody,l),t.requestBody["x-s2o-name"]||(t.requestBody.schema&&t.requestBody.schema.$ref?t.requestBody["x-s2o-name"]=decodeURIComponent(t.requestBody.schema.$ref.replace("#/components/schemas/","")).split("/").join(""):t.operationId&&(t.requestBody["x-s2o-name"]=b.sanitiseAll(t.operationId)))))),e&&!e["x-s2o-delete"]){delete e.type;for(let t of b.parameterTypeProperties)delete e[t];"path"!==e.in||void 0!==e.required&&!0===e.required||(s.patch?(s.patches++,e.required=!0):E("(Patchable) path parameters must be required:true ["+e.name+" in "+o+"]",s))}return t}function _(e,t){for(let n in e)n.startsWith("x-")&&!n.startsWith("x-s2o")&&(t[n]=e[n])}function L(e,t,n,r,o){if(!e)return!1;if(e.$ref&&"string"==typeof e.$ref)e.$ref.indexOf("#/definitions/")>=0?S("definition used as response: "+e.$ref,e,o):e.$ref.startsWith("#/responses/")&&(e.$ref="#/components/responses/"+b.sanitise(decodeURIComponent(e.$ref.replace("#/responses/",""))));else{if((void 0===e.description||null===e.description||""===e.description&&o.patch)&&(o.patch?"object"!=typeof e||Array.isArray(e)||(o.patches++,e.description=x[e]||""):E("(Patchable) response.description is mandatory",o)),void 0!==e.schema){if($(e.schema,o),e.schema.$ref&&"string"==typeof e.schema.$ref&&e.schema.$ref.startsWith("#/responses/")&&(e.schema.$ref="#/components/responses/"+b.sanitise(decodeURIComponent(e.schema.$ref.replace("#/responses/","")))),n&&n.produces&&"string"==typeof n.produces){if(!o.patch)return E("(Patchable) operation.produces must be an array",o);o.patches++,n.produces=[n.produces]}r.produces&&!Array.isArray(r.produces)&&delete r.produces;let t=((n?n.produces:null)||r.produces||[]).filter(b.uniqueOnly);t.length||t.push("*/*"),e.content={};for(let n of t){if(e.content[n]={},e.content[n].schema=h(e.schema),e.examples&&e.examples[n]){let t={};t.value=e.examples[n],e.content[n].examples={},e.content[n].examples.response=t,delete e.examples[n]}"file"===e.content[n].schema.type&&(e.content[n].schema={type:"string",format:"binary"})}delete e.schema}for(let t in e.examples)e.content||(e.content={}),e.content[t]||(e.content[t]={}),e.content[t].examples={},e.content[t].examples.response={},e.content[t].examples.response.value=e.examples[t];if(delete e.examples,e.headers)for(let t in e.headers)"status code"===t.toLowerCase()?o.patch?(o.patches++,delete e.headers[t]):E('(Patchable) "Status Code" is not a valid header',o):j(e.headers[t],o)}}function D(e,t,n,r,i){for(let s in e){let a=e[s];a&&a["x-trace"]&&"object"==typeof a["x-trace"]&&(a.trace=a["x-trace"],delete a["x-trace"]),a&&a["x-summary"]&&"string"==typeof a["x-summary"]&&(a.summary=a["x-summary"],delete a["x-summary"]),a&&a["x-description"]&&"string"==typeof a["x-description"]&&(a.description=a["x-description"],delete a["x-description"]),a&&a["x-servers"]&&Array.isArray(a["x-servers"])&&(a.servers=a["x-servers"],delete a["x-servers"]);for(let e in a)if(b.httpMethods.indexOf(e)>=0||"x-amazon-apigateway-any-method"===e){let l=a[e];if(l&&l.parameters&&Array.isArray(l.parameters)){if(a.parameters)for(let t of a.parameters)"string"==typeof t.$ref&&(I(t,n),t=u(i,t.$ref)),l.parameters.find((function(e,n,r){return e.name===t.name&&e.in===t.in}))||"formData"!==t.in&&"body"!==t.in&&"file"!==t.type||(l=T(t,l,a,e,s,i,n),n.rbname&&""===l[n.rbname]&&delete l[n.rbname]);for(let t of l.parameters)l=T(t,l,a,e,e+":"+s,i,n);n.rbname&&""===l[n.rbname]&&delete l[n.rbname],n.debug||l.parameters&&(l.parameters=l.parameters.filter(P))}if(l&&l.security&&C(l.security),"object"==typeof l){if(!l.responses){let e={description:"Default response"};l.responses={default:e}}for(let e in l.responses)L(l.responses[e],0,l,i,n)}if(l&&l["x-servers"]&&Array.isArray(l["x-servers"]))l.servers=l["x-servers"],delete l["x-servers"];else if(l&&l.schemes&&l.schemes.length)for(let e of l.schemes)if((!i.schemes||i.schemes.indexOf(e)<0)&&(l.servers||(l.servers=[]),Array.isArray(i.servers)))for(let t of i.servers){let n=h(t),r=o.parse(n.url);r.protocol=e,n.url=r.format(),l.servers.push(n)}if(n.debug&&(l["x-s2o-consumes"]=l.consumes||[],l["x-s2o-produces"]=l.produces||[]),l){if(delete l.consumes,delete l.produces,delete l.schemes,l["x-ms-examples"]){for(let e in l["x-ms-examples"]){let t=l["x-ms-examples"][e],n=b.sanitiseAll(e);if(t.parameters)for(let r in t.parameters){let n=t.parameters[r];for(let t of(l.parameters||[]).concat(a.parameters||[]))t.$ref&&(t=p.jptr(i,t.$ref)),t.name!==r||t.example||(t.examples||(t.examples={}),t.examples[e]={value:n})}if(t.responses)for(let r in t.responses){if(t.responses[r].headers)for(let e in t.responses[r].headers){let n=t.responses[r].headers[e];for(let t in l.responses[r].headers)t===e&&(l.responses[r].headers[t].example=n)}if(t.responses[r].body&&(i.components.examples[n]={value:h(t.responses[r].body)},l.responses[r]&&l.responses[r].content))for(let t in l.responses[r].content){let o=l.responses[r].content[t];o.examples||(o.examples={}),o.examples[e]={$ref:"#/components/examples/"+n}}}}delete l["x-ms-examples"]}if(l.parameters&&0===l.parameters.length&&delete l.parameters,l.requestBody){let n=l.operationId?b.sanitiseAll(l.operationId):b.sanitiseAll(e+s).toCamelCase(),o=b.sanitise(l.requestBody["x-s2o-name"]||n||"");delete l.requestBody["x-s2o-name"];let i=JSON.stringify(l.requestBody),a=b.hash(i);if(!r[a]){let e={};e.name=o,e.body=l.requestBody,e.refs=[],r[a]=e}let c="#/"+t+"/"+encodeURIComponent(p.jpescape(s))+"/"+e+"/requestBody";r[a].refs.push(c)}}}if(a&&a.parameters){for(let e in a.parameters)T(a.parameters[e],null,a,null,s,i,n);!n.debug&&Array.isArray(a.parameters)&&(a.parameters=a.parameters.filter(P))}}}function z(e){return e&&e.url&&"string"==typeof e.url?(e.url=e.url.split("{{").join("{"),e.url=e.url.split("}}").join("}"),e.url.replace(/\{(.+?)\}/g,(function(t,n){e.variables||(e.variables={}),e.variables[n]={default:"unknown"}})),e):e}function M(e,t,n){if(void 0===e.info||null===e.info){if(!t.patch)return n(new O("(Patchable) info object is mandatory"));t.patches++,e.info={version:"",title:""}}if("object"!=typeof e.info||Array.isArray(e.info))return n(new O("info must be an object"));if(void 0===e.info.title||null===e.info.title){if(!t.patch)return n(new O("(Patchable) info.title cannot be null"));t.patches++,e.info.title=""}if(void 0===e.info.version||null===e.info.version){if(!t.patch)return n(new O("(Patchable) info.version cannot be null"));t.patches++,e.info.version=""}if("string"!=typeof e.info.version){if(!t.patch)return n(new O("(Patchable) info.version must be a string"));t.patches++,e.info.version=e.info.version.toString()}if(void 0!==e.info.logo){if(!t.patch)return n(new O("(Patchable) info should not have logo property"));t.patches++,e.info["x-logo"]=e.info.logo,delete e.info.logo}if(void 0!==e.info.termsOfService){if(null===e.info.termsOfService){if(!t.patch)return n(new O("(Patchable) info.termsOfService cannot be null"));t.patches++,e.info.termsOfService=""}try{new URL(e.info.termsOfService)}catch(r){if(!t.patch)return n(new O("(Patchable) info.termsOfService must be a URL"));t.patches++,delete e.info.termsOfService}}}function N(e,t,n){if(void 0===e.paths){if(!t.patch)return n(new O("(Patchable) paths object is mandatory"));t.patches++,e.paths={}}}function F(e,t,n){return a(n,new Promise((function(n,r){if(e||(e={}),t.original=e,t.text||(t.text=c.stringify(e)),t.externals=[],t.externalRefs={},t.rewriteRefs=!0,t.preserveMiro=!0,t.promise={},t.promise.resolve=n,t.promise.reject=r,t.patches=0,t.cache||(t.cache={}),t.source&&(t.cache[t.source]=t.original),function(e,t){const n=new WeakSet;f(e,{identityDetection:!0},(function(e,r,o){"object"==typeof e[r]&&null!==e[r]&&(n.has(e[r])?t.anchors?e[r]=h(e[r]):E("YAML anchor or merge key at "+o.path,t):n.add(e[r]))}))}(e,t),e.openapi&&"string"==typeof e.openapi&&e.openapi.startsWith("3."))return t.openapi=m(e),M(t.openapi,t,r),N(t.openapi,t,r),void y.optionalResolve(t).then((function(){return t.direct?n(t.openapi):n(t)})).catch((function(e){console.warn(e),r(e)}));if(!e.swagger||"2.0"!=e.swagger)return r(new O("Unsupported swagger/OpenAPI version: "+(e.openapi?e.openapi:e.swagger)));let o=t.openapi={};if(o.openapi="string"==typeof t.targetVersion&&t.targetVersion.startsWith("3.")?t.targetVersion:w,t.origin){o["x-origin"]||(o["x-origin"]=[]);let n={};n.url=t.source||t.origin,n.format="swagger",n.version=e.swagger,n.converter={},n.converter.url="https://github.com/mermade/oas-kit",n.converter.version=v,o["x-origin"].push(n)}if(o=Object.assign(o,m(e)),delete o.swagger,f(o,{},(function(e,t,n){null===e[t]&&!t.startsWith("x-")&&"default"!==t&&n.path.indexOf("/example")<0&&delete e[t]})),e.host)for(let t of Array.isArray(e.schemes)?e.schemes:[""]){let n={},r=(e.basePath||"").replace(/\/$/,"");n.url=(t?t+":":"")+"//"+e.host+r,z(n),o.servers||(o.servers=[]),o.servers.push(n)}else if(e.basePath){let t={};t.url=e.basePath,z(t),o.servers||(o.servers=[]),o.servers.push(t)}if(delete o.host,delete o.basePath,o["x-servers"]&&Array.isArray(o["x-servers"])&&(o.servers=o["x-servers"],delete o["x-servers"]),e["x-ms-parameterized-host"]){let t=e["x-ms-parameterized-host"],n={};n.url=t.hostTemplate+(e.basePath?e.basePath:""),n.variables={};const r=n.url.match(/\{\w+\}/g);for(let e in t.parameters){let i=t.parameters[e];i.$ref&&(i=h(u(o,i.$ref))),e.startsWith("x-")||(delete i.required,delete i.type,delete i.in,void 0===i.default&&(i.enum?i.default=i.enum[0]:i.default="none"),i.name||(i.name=r[e].replace("{","").replace("}","")),n.variables[i.name]=i,delete i.name)}o.servers||(o.servers=[]),!1===t.useSchemePrefix?o.servers.push(n):e.schemes.forEach((e=>{o.servers.push(Object.assign({},n,{url:e+"://"+n.url}))})),delete o["x-ms-parameterized-host"]}M(o,t,r),N(o,t,r),"string"==typeof o.consumes&&(o.consumes=[o.consumes]),"string"==typeof o.produces&&(o.produces=[o.produces]),o.components={},o["x-callbacks"]&&(o.components.callbacks=o["x-callbacks"],delete o["x-callbacks"]),o.components.examples={},o.components.headers={},o["x-links"]&&(o.components.links=o["x-links"],delete o["x-links"]),o.components.parameters=o.parameters||{},o.components.responses=o.responses||{},o.components.requestBodies={},o.components.securitySchemes=o.securityDefinitions||{},o.components.schemas=o.definitions||{},delete o.definitions,delete o.responses,delete o.parameters,delete o.securityDefinitions,y.optionalResolve(t).then((function(){(function(e,t){let n={};k={schemas:{}},e.security&&C(e.security);for(let o in e.components.securitySchemes){let n=b.sanitise(o);o!==n&&(e.components.securitySchemes[n]&&E("Duplicate sanitised securityScheme name "+n,t),e.components.securitySchemes[n]=e.components.securitySchemes[o],delete e.components.securitySchemes[o]),A(e.components.securitySchemes[n],t)}for(let o in e.components.schemas){let n=b.sanitiseAll(o),r="";if(o!==n){for(;e.components.schemas[n+r];)r=r?++r:2;e.components.schemas[n+r]=e.components.schemas[o],delete e.components.schemas[o]}k.schemas[o]=n+r,$(e.components.schemas[n+r],t)}t.refmap={},f(e,{payload:{options:t}},R),function(e,t){for(let n in t.refmap)p.jptr(e,n,{$ref:t.refmap[n]})}(e,t);for(let o in e.components.parameters){let n=b.sanitise(o);o!==n&&(e.components.parameters[n]&&E("Duplicate sanitised parameter name "+n,t),e.components.parameters[n]=e.components.parameters[o],delete e.components.parameters[o]),T(e.components.parameters[n],null,null,null,n,e,t)}for(let o in e.components.responses){let n=b.sanitise(o);o!==n&&(e.components.responses[n]&&E("Duplicate sanitised response name "+n,t),e.components.responses[n]=e.components.responses[o],delete e.components.responses[o]);let r=e.components.responses[n];if(L(r,0,null,e,t),r.headers)for(let e in r.headers)"status code"===e.toLowerCase()?t.patch?(t.patches++,delete r.headers[e]):E('(Patchable) "Status Code" is not a valid header',t):j(r.headers[e],t)}for(let o in e.components.requestBodies){let t=e.components.requestBodies[o],r=JSON.stringify(t),i=b.hash(r),s={};s.name=o,s.body=t,s.refs=[],n[i]=s}if(D(e.paths,"paths",t,n,e),e["x-ms-paths"]&&D(e["x-ms-paths"],"x-ms-paths",t,n,e),!t.debug)for(let o in e.components.parameters)e.components.parameters[o]["x-s2o-delete"]&&delete e.components.parameters[o];t.debug&&(e["x-s2o-consumes"]=e.consumes||[],e["x-s2o-produces"]=e.produces||[]),delete e.consumes,delete e.produces,delete e.schemes;let r=[];if(e.components.requestBodies={},!t.resolveInternal){let t=1;for(let o in n){let i=n[o];if(i.refs.length>1){let n="";for(i.name||(i.name="requestBody",n=t++);r.indexOf(i.name+n)>=0;)n=n?++n:2;i.name=i.name+n,r.push(i.name),e.components.requestBodies[i.name]=h(i.body);for(let t in i.refs){let n={};n.$ref="#/components/requestBodies/"+i.name,p.jptr(e,i.refs[t],n)}}}}e.components.responses&&0===Object.keys(e.components.responses).length&&delete e.components.responses,e.components.parameters&&0===Object.keys(e.components.parameters).length&&delete e.components.parameters,e.components.examples&&0===Object.keys(e.components.examples).length&&delete e.components.examples,e.components.requestBodies&&0===Object.keys(e.components.requestBodies).length&&delete e.components.requestBodies,e.components.securitySchemes&&0===Object.keys(e.components.securitySchemes).length&&delete e.components.securitySchemes,e.components.headers&&0===Object.keys(e.components.headers).length&&delete e.components.headers,e.components.schemas&&0===Object.keys(e.components.schemas).length&&delete e.components.schemas,e.components&&0===Object.keys(e.components).length&&delete e.components})(t.openapi,t),t.direct?n(t.openapi):n(t)})).catch((function(e){console.warn(e),r(e)}))})))}function B(e,t,n){return a(n,new Promise((function(n,r){let o=null,i=null;try{o=JSON.parse(e),t.text=JSON.stringify(o,null,2)}catch(n){i=n;try{o=c.parse(e,{schema:"core",prettyErrors:!0}),t.sourceYaml=!0,t.text=e}catch(e){i=e}}o?F(o,t).then((e=>n(e))).catch((e=>r(e))):r(new O(i?i.message:"Could not parse string"))})))}e.exports={S2OError:O,targetVersion:w,convert:F,convertObj:F,convertUrl:function(e,t,n){return a(n,new Promise((function(n,r){t.origin=!0,t.source||(t.source=e),t.verbose&&console.warn("GET "+e),t.fetch||(t.fetch=l);const o=Object.assign({},t.fetchOptions,{agent:t.agent});t.fetch(e,o).then((function(t){if(200!==t.status)throw new O(`Received status code ${t.status}: ${e}`);return t.text()})).then((function(e){B(e,t).then((e=>n(e))).catch((e=>r(e)))})).catch((function(e){r(e)}))})))},convertStr:B,convertFile:function(e,t,n){return a(n,new Promise((function(n,o){r.readFile(e,t.encoding||"utf8",(function(r,i){r?o(r):(t.sourceFile=e,B(i,t).then((e=>n(e))).catch((e=>o(e))))}))})))},convertStream:function(e,t,n){return a(n,new Promise((function(n,r){let o="";e.on("data",(function(e){o+=e})).on("end",(function(){B(o,t).then((e=>n(e))).catch((e=>r(e)))}))})))}}},711:function(e,t,n){"use strict";const r=n(177);e.exports={statusCodes:Object.assign({},{default:"Default response","1XX":"Informational",103:"Early hints","2XX":"Successful","3XX":"Redirection","4XX":"Client Error","5XX":"Server Error","7XX":"Developer Error"},r.STATUS_CODES)}},980:function(e,t,n){var r=n(314),o=["add","done","toJS","fromExternalJS","load","dispose","search","Worker"];e.exports=function(){var e=new Worker(URL.createObjectURL(new Blob(['/*! For license information please see 0a6ad30060afff00cb34.worker.js.LICENSE.txt */\n!function(){var e={336:function(e,t,r){var n,i;!function(){var s,o,a,u,l,c,h,d,f,p,y,m,g,x,v,w,Q,k,S,E,L,P,b,T,O,I,R=function(e){var t=new R.Builder;return t.pipeline.add(R.trimmer,R.stopWordFilter,R.stemmer),t.searchPipeline.add(R.stemmer),e.call(t,t),t.build()};R.version="2.3.9",R.utils={},R.utils.warn=(s=this,function(e){s.console&&console.warn&&console.warn(e)}),R.utils.asString=function(e){return null==e?"":e.toString()},R.utils.clone=function(e){if(null==e)return e;for(var t=Object.create(null),r=Object.keys(e),n=0;n<r.length;n++){var i=r[n],s=e[i];if(Array.isArray(s))t[i]=s.slice();else{if("string"!=typeof s&&"number"!=typeof s&&"boolean"!=typeof s)throw new TypeError("clone is not deep and does not support nested objects");t[i]=s}}return t},R.FieldRef=function(e,t,r){this.docRef=e,this.fieldName=t,this._stringValue=r},R.FieldRef.joiner="/",R.FieldRef.fromString=function(e){var t=e.indexOf(R.FieldRef.joiner);if(-1===t)throw"malformed field ref string";var r=e.slice(0,t),n=e.slice(t+1);return new R.FieldRef(n,r,e)},R.FieldRef.prototype.toString=function(){return null==this._stringValue&&(this._stringValue=this.fieldName+R.FieldRef.joiner+this.docRef),this._stringValue},R.Set=function(e){if(this.elements=Object.create(null),e){this.length=e.length;for(var t=0;t<this.length;t++)this.elements[e[t]]=!0}else this.length=0},R.Set.complete={intersect:function(e){return e},union:function(){return this},contains:function(){return!0}},R.Set.empty={intersect:function(){return this},union:function(e){return e},contains:function(){return!1}},R.Set.prototype.contains=function(e){return!!this.elements[e]},R.Set.prototype.intersect=function(e){var t,r,n,i=[];if(e===R.Set.complete)return this;if(e===R.Set.empty)return e;this.length<e.length?(t=this,r=e):(t=e,r=this),n=Object.keys(t.elements);for(var s=0;s<n.length;s++){var o=n[s];o in r.elements&&i.push(o)}return new R.Set(i)},R.Set.prototype.union=function(e){return e===R.Set.complete?R.Set.complete:e===R.Set.empty?this:new R.Set(Object.keys(this.elements).concat(Object.keys(e.elements)))},R.idf=function(e,t){var r=0;for(var n in e)"_index"!=n&&(r+=Object.keys(e[n]).length);var i=(t-r+.5)/(r+.5);return Math.log(1+Math.abs(i))},R.Token=function(e,t){this.str=e||"",this.metadata=t||{}},R.Token.prototype.toString=function(){return this.str},R.Token.prototype.update=function(e){return this.str=e(this.str,this.metadata),this},R.Token.prototype.clone=function(e){return e=e||function(e){return e},new R.Token(e(this.str,this.metadata),this.metadata)},R.tokenizer=function(e,t){if(null==e||null==e)return[];if(Array.isArray(e))return e.map((function(e){return new R.Token(R.utils.asString(e).toLowerCase(),R.utils.clone(t))}));for(var r=e.toString().toLowerCase(),n=r.length,i=[],s=0,o=0;s<=n;s++){var a=s-o;if(r.charAt(s).match(R.tokenizer.separator)||s==n){if(a>0){var u=R.utils.clone(t)||{};u.position=[o,a],u.index=i.length,i.push(new R.Token(r.slice(o,s),u))}o=s+1}}return i},R.tokenizer.separator=/[\\s\\-]+/,R.Pipeline=function(){this._stack=[]},R.Pipeline.registeredFunctions=Object.create(null),R.Pipeline.registerFunction=function(e,t){t in this.registeredFunctions&&R.utils.warn("Overwriting existing registered function: "+t),e.label=t,R.Pipeline.registeredFunctions[e.label]=e},R.Pipeline.warnIfFunctionNotRegistered=function(e){e.label&&e.label in this.registeredFunctions||R.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\\n",e)},R.Pipeline.load=function(e){var t=new R.Pipeline;return e.forEach((function(e){var r=R.Pipeline.registeredFunctions[e];if(!r)throw new Error("Cannot load unregistered function: "+e);t.add(r)})),t},R.Pipeline.prototype.add=function(){var e=Array.prototype.slice.call(arguments);e.forEach((function(e){R.Pipeline.warnIfFunctionNotRegistered(e),this._stack.push(e)}),this)},R.Pipeline.prototype.after=function(e,t){R.Pipeline.warnIfFunctionNotRegistered(t);var r=this._stack.indexOf(e);if(-1==r)throw new Error("Cannot find existingFn");r+=1,this._stack.splice(r,0,t)},R.Pipeline.prototype.before=function(e,t){R.Pipeline.warnIfFunctionNotRegistered(t);var r=this._stack.indexOf(e);if(-1==r)throw new Error("Cannot find existingFn");this._stack.splice(r,0,t)},R.Pipeline.prototype.remove=function(e){var t=this._stack.indexOf(e);-1!=t&&this._stack.splice(t,1)},R.Pipeline.prototype.run=function(e){for(var t=this._stack.length,r=0;r<t;r++){for(var n=this._stack[r],i=[],s=0;s<e.length;s++){var o=n(e[s],s,e);if(null!=o&&""!==o)if(Array.isArray(o))for(var a=0;a<o.length;a++)i.push(o[a]);else i.push(o)}e=i}return e},R.Pipeline.prototype.runString=function(e,t){var r=new R.Token(e,t);return this.run([r]).map((function(e){return e.toString()}))},R.Pipeline.prototype.reset=function(){this._stack=[]},R.Pipeline.prototype.toJSON=function(){return this._stack.map((function(e){return R.Pipeline.warnIfFunctionNotRegistered(e),e.label}))},R.Vector=function(e){this._magnitude=0,this.elements=e||[]},R.Vector.prototype.positionForIndex=function(e){if(0==this.elements.length)return 0;for(var t=0,r=this.elements.length/2,n=r-t,i=Math.floor(n/2),s=this.elements[2*i];n>1&&(s<e&&(t=i),s>e&&(r=i),s!=e);)n=r-t,i=t+Math.floor(n/2),s=this.elements[2*i];return s==e||s>e?2*i:s<e?2*(i+1):void 0},R.Vector.prototype.insert=function(e,t){this.upsert(e,t,(function(){throw"duplicate index"}))},R.Vector.prototype.upsert=function(e,t,r){this._magnitude=0;var n=this.positionForIndex(e);this.elements[n]==e?this.elements[n+1]=r(this.elements[n+1],t):this.elements.splice(n,0,e,t)},R.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var e=0,t=this.elements.length,r=1;r<t;r+=2){var n=this.elements[r];e+=n*n}return this._magnitude=Math.sqrt(e)},R.Vector.prototype.dot=function(e){for(var t=0,r=this.elements,n=e.elements,i=r.length,s=n.length,o=0,a=0,u=0,l=0;u<i&&l<s;)(o=r[u])<(a=n[l])?u+=2:o>a?l+=2:o==a&&(t+=r[u+1]*n[l+1],u+=2,l+=2);return t},R.Vector.prototype.similarity=function(e){return this.dot(e)/this.magnitude()||0},R.Vector.prototype.toArray=function(){for(var e=new Array(this.elements.length/2),t=1,r=0;t<this.elements.length;t+=2,r++)e[r]=this.elements[t];return e},R.Vector.prototype.toJSON=function(){return this.elements},R.stemmer=(o={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},a={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},u="[aeiouy]",l="[^aeiou][^aeiouy]*",c=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),h=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),d=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),f=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),p=/^(.+?)(ss|i)es$/,y=/^(.+?)([^s])s$/,m=/^(.+?)eed$/,g=/^(.+?)(ed|ing)$/,x=/.$/,v=/(at|bl|iz)$/,w=new RegExp("([^aeiouylsz])\\\\1$"),Q=new RegExp("^"+l+u+"[^aeiouwxy]$"),k=/^(.+?[^aeiou])y$/,S=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,E=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,L=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,P=/^(.+?)(s|t)(ion)$/,b=/^(.+?)e$/,T=/ll$/,O=new RegExp("^"+l+u+"[^aeiouwxy]$"),I=function(e){var t,r,n,i,s,u,l;if(e.length<3)return e;if("y"==(n=e.substr(0,1))&&(e=n.toUpperCase()+e.substr(1)),s=y,(i=p).test(e)?e=e.replace(i,"$1$2"):s.test(e)&&(e=e.replace(s,"$1$2")),s=g,(i=m).test(e)){var I=i.exec(e);(i=c).test(I[1])&&(i=x,e=e.replace(i,""))}else s.test(e)&&(t=(I=s.exec(e))[1],(s=f).test(t)&&(u=w,l=Q,(s=v).test(e=t)?e+="e":u.test(e)?(i=x,e=e.replace(i,"")):l.test(e)&&(e+="e")));return(i=k).test(e)&&(e=(t=(I=i.exec(e))[1])+"i"),(i=S).test(e)&&(t=(I=i.exec(e))[1],r=I[2],(i=c).test(t)&&(e=t+o[r])),(i=E).test(e)&&(t=(I=i.exec(e))[1],r=I[2],(i=c).test(t)&&(e=t+a[r])),s=P,(i=L).test(e)?(t=(I=i.exec(e))[1],(i=h).test(t)&&(e=t)):s.test(e)&&(t=(I=s.exec(e))[1]+I[2],(s=h).test(t)&&(e=t)),(i=b).test(e)&&(t=(I=i.exec(e))[1],s=d,u=O,((i=h).test(t)||s.test(t)&&!u.test(t))&&(e=t)),s=h,(i=T).test(e)&&s.test(e)&&(i=x,e=e.replace(i,"")),"y"==n&&(e=n.toLowerCase()+e.substr(1)),e},function(e){return e.update(I)}),R.Pipeline.registerFunction(R.stemmer,"stemmer"),R.generateStopWordFilter=function(e){var t=e.reduce((function(e,t){return e[t]=t,e}),{});return function(e){if(e&&t[e.toString()]!==e.toString())return e}},R.stopWordFilter=R.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),R.Pipeline.registerFunction(R.stopWordFilter,"stopWordFilter"),R.trimmer=function(e){return e.update((function(e){return e.replace(/^\\W+/,"").replace(/\\W+$/,"")}))},R.Pipeline.registerFunction(R.trimmer,"trimmer"),R.TokenSet=function(){this.final=!1,this.edges={},this.id=R.TokenSet._nextId,R.TokenSet._nextId+=1},R.TokenSet._nextId=1,R.TokenSet.fromArray=function(e){for(var t=new R.TokenSet.Builder,r=0,n=e.length;r<n;r++)t.insert(e[r]);return t.finish(),t.root},R.TokenSet.fromClause=function(e){return"editDistance"in e?R.TokenSet.fromFuzzyString(e.term,e.editDistance):R.TokenSet.fromString(e.term)},R.TokenSet.fromFuzzyString=function(e,t){for(var r=new R.TokenSet,n=[{node:r,editsRemaining:t,str:e}];n.length;){var i=n.pop();if(i.str.length>0){var s,o=i.str.charAt(0);o in i.node.edges?s=i.node.edges[o]:(s=new R.TokenSet,i.node.edges[o]=s),1==i.str.length&&(s.final=!0),n.push({node:s,editsRemaining:i.editsRemaining,str:i.str.slice(1)})}if(0!=i.editsRemaining){if("*"in i.node.edges)var a=i.node.edges["*"];else a=new R.TokenSet,i.node.edges["*"]=a;if(0==i.str.length&&(a.final=!0),n.push({node:a,editsRemaining:i.editsRemaining-1,str:i.str}),i.str.length>1&&n.push({node:i.node,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)}),1==i.str.length&&(i.node.final=!0),i.str.length>=1){if("*"in i.node.edges)var u=i.node.edges["*"];else u=new R.TokenSet,i.node.edges["*"]=u;1==i.str.length&&(u.final=!0),n.push({node:u,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)})}if(i.str.length>1){var l,c=i.str.charAt(0),h=i.str.charAt(1);h in i.node.edges?l=i.node.edges[h]:(l=new R.TokenSet,i.node.edges[h]=l),1==i.str.length&&(l.final=!0),n.push({node:l,editsRemaining:i.editsRemaining-1,str:c+i.str.slice(2)})}}}return r},R.TokenSet.fromString=function(e){for(var t=new R.TokenSet,r=t,n=0,i=e.length;n<i;n++){var s=e[n],o=n==i-1;if("*"==s)t.edges[s]=t,t.final=o;else{var a=new R.TokenSet;a.final=o,t.edges[s]=a,t=a}}return r},R.TokenSet.prototype.toArray=function(){for(var e=[],t=[{prefix:"",node:this}];t.length;){var r=t.pop(),n=Object.keys(r.node.edges),i=n.length;r.node.final&&(r.prefix.charAt(0),e.push(r.prefix));for(var s=0;s<i;s++){var o=n[s];t.push({prefix:r.prefix.concat(o),node:r.node.edges[o]})}}return e},R.TokenSet.prototype.toString=function(){if(this._str)return this._str;for(var e=this.final?"1":"0",t=Object.keys(this.edges).sort(),r=t.length,n=0;n<r;n++){var i=t[n];e=e+i+this.edges[i].id}return e},R.TokenSet.prototype.intersect=function(e){for(var t=new R.TokenSet,r=void 0,n=[{qNode:e,output:t,node:this}];n.length;){r=n.pop();for(var i=Object.keys(r.qNode.edges),s=i.length,o=Object.keys(r.node.edges),a=o.length,u=0;u<s;u++)for(var l=i[u],c=0;c<a;c++){var h=o[c];if(h==l||"*"==l){var d=r.node.edges[h],f=r.qNode.edges[l],p=d.final&&f.final,y=void 0;h in r.output.edges?(y=r.output.edges[h]).final=y.final||p:((y=new R.TokenSet).final=p,r.output.edges[h]=y),n.push({qNode:f,output:y,node:d})}}}return t},R.TokenSet.Builder=function(){this.previousWord="",this.root=new R.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},R.TokenSet.Builder.prototype.insert=function(e){var t,r=0;if(e<this.previousWord)throw new Error("Out of order word insertion");for(var n=0;n<e.length&&n<this.previousWord.length&&e[n]==this.previousWord[n];n++)r++;for(this.minimize(r),t=0==this.uncheckedNodes.length?this.root:this.uncheckedNodes[this.uncheckedNodes.length-1].child,n=r;n<e.length;n++){var i=new R.TokenSet,s=e[n];t.edges[s]=i,this.uncheckedNodes.push({parent:t,char:s,child:i}),t=i}t.final=!0,this.previousWord=e},R.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},R.TokenSet.Builder.prototype.minimize=function(e){for(var t=this.uncheckedNodes.length-1;t>=e;t--){var r=this.uncheckedNodes[t],n=r.child.toString();n in this.minimizedNodes?r.parent.edges[r.char]=this.minimizedNodes[n]:(r.child._str=n,this.minimizedNodes[n]=r.child),this.uncheckedNodes.pop()}},R.Index=function(e){this.invertedIndex=e.invertedIndex,this.fieldVectors=e.fieldVectors,this.tokenSet=e.tokenSet,this.fields=e.fields,this.pipeline=e.pipeline},R.Index.prototype.search=function(e){return this.query((function(t){new R.QueryParser(e,t).parse()}))},R.Index.prototype.query=function(e){for(var t=new R.Query(this.fields),r=Object.create(null),n=Object.create(null),i=Object.create(null),s=Object.create(null),o=Object.create(null),a=0;a<this.fields.length;a++)n[this.fields[a]]=new R.Vector;for(e.call(t,t),a=0;a<t.clauses.length;a++){var u,l=t.clauses[a],c=R.Set.empty;u=l.usePipeline?this.pipeline.runString(l.term,{fields:l.fields}):[l.term];for(var h=0;h<u.length;h++){var d=u[h];l.term=d;var f=R.TokenSet.fromClause(l),p=this.tokenSet.intersect(f).toArray();if(0===p.length&&l.presence===R.Query.presence.REQUIRED){for(var y=0;y<l.fields.length;y++)s[F=l.fields[y]]=R.Set.empty;break}for(var m=0;m<p.length;m++){var g=p[m],x=this.invertedIndex[g],v=x._index;for(y=0;y<l.fields.length;y++){var w=x[F=l.fields[y]],Q=Object.keys(w),k=g+"/"+F,S=new R.Set(Q);if(l.presence==R.Query.presence.REQUIRED&&(c=c.union(S),void 0===s[F]&&(s[F]=R.Set.complete)),l.presence!=R.Query.presence.PROHIBITED){if(n[F].upsert(v,l.boost,(function(e,t){return e+t})),!i[k]){for(var E=0;E<Q.length;E++){var L,P=Q[E],b=new R.FieldRef(P,F),T=w[P];void 0===(L=r[b])?r[b]=new R.MatchData(g,F,T):L.add(g,F,T)}i[k]=!0}}else void 0===o[F]&&(o[F]=R.Set.empty),o[F]=o[F].union(S)}}}if(l.presence===R.Query.presence.REQUIRED)for(y=0;y<l.fields.length;y++)s[F=l.fields[y]]=s[F].intersect(c)}var O=R.Set.complete,I=R.Set.empty;for(a=0;a<this.fields.length;a++){var F;s[F=this.fields[a]]&&(O=O.intersect(s[F])),o[F]&&(I=I.union(o[F]))}var C=Object.keys(r),N=[],j=Object.create(null);if(t.isNegated())for(C=Object.keys(this.fieldVectors),a=0;a<C.length;a++){b=C[a];var _=R.FieldRef.fromString(b);r[b]=new R.MatchData}for(a=0;a<C.length;a++){var D=(_=R.FieldRef.fromString(C[a])).docRef;if(O.contains(D)&&!I.contains(D)){var A,B=this.fieldVectors[_],z=n[_.fieldName].similarity(B);if(void 0!==(A=j[D]))A.score+=z,A.matchData.combine(r[_]);else{var V={ref:D,score:z,matchData:r[_]};j[D]=V,N.push(V)}}}return N.sort((function(e,t){return t.score-e.score}))},R.Index.prototype.toJSON=function(){var e=Object.keys(this.invertedIndex).sort().map((function(e){return[e,this.invertedIndex[e]]}),this),t=Object.keys(this.fieldVectors).map((function(e){return[e,this.fieldVectors[e].toJSON()]}),this);return{version:R.version,fields:this.fields,fieldVectors:t,invertedIndex:e,pipeline:this.pipeline.toJSON()}},R.Index.load=function(e){var t={},r={},n=e.fieldVectors,i=Object.create(null),s=e.invertedIndex,o=new R.TokenSet.Builder,a=R.Pipeline.load(e.pipeline);e.version!=R.version&&R.utils.warn("Version mismatch when loading serialised index. Current version of lunr \'"+R.version+"\' does not match serialized index \'"+e.version+"\'");for(var u=0;u<n.length;u++){var l=(h=n[u])[0],c=h[1];r[l]=new R.Vector(c)}for(u=0;u<s.length;u++){var h,d=(h=s[u])[0],f=h[1];o.insert(d),i[d]=f}return o.finish(),t.fields=e.fields,t.fieldVectors=r,t.invertedIndex=i,t.tokenSet=o.root,t.pipeline=a,new R.Index(t)},R.Builder=function(){this._ref="id",this._fields=Object.create(null),this._documents=Object.create(null),this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=R.tokenizer,this.pipeline=new R.Pipeline,this.searchPipeline=new R.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]},R.Builder.prototype.ref=function(e){this._ref=e},R.Builder.prototype.field=function(e,t){if(/\\//.test(e))throw new RangeError("Field \'"+e+"\' contains illegal character \'/\'");this._fields[e]=t||{}},R.Builder.prototype.b=function(e){this._b=e<0?0:e>1?1:e},R.Builder.prototype.k1=function(e){this._k1=e},R.Builder.prototype.add=function(e,t){var r=e[this._ref],n=Object.keys(this._fields);this._documents[r]=t||{},this.documentCount+=1;for(var i=0;i<n.length;i++){var s=n[i],o=this._fields[s].extractor,a=o?o(e):e[s],u=this.tokenizer(a,{fields:[s]}),l=this.pipeline.run(u),c=new R.FieldRef(r,s),h=Object.create(null);this.fieldTermFrequencies[c]=h,this.fieldLengths[c]=0,this.fieldLengths[c]+=l.length;for(var d=0;d<l.length;d++){var f=l[d];if(null==h[f]&&(h[f]=0),h[f]+=1,null==this.invertedIndex[f]){var p=Object.create(null);p._index=this.termIndex,this.termIndex+=1;for(var y=0;y<n.length;y++)p[n[y]]=Object.create(null);this.invertedIndex[f]=p}null==this.invertedIndex[f][s][r]&&(this.invertedIndex[f][s][r]=Object.create(null));for(var m=0;m<this.metadataWhitelist.length;m++){var g=this.metadataWhitelist[m],x=f.metadata[g];null==this.invertedIndex[f][s][r][g]&&(this.invertedIndex[f][s][r][g]=[]),this.invertedIndex[f][s][r][g].push(x)}}}},R.Builder.prototype.calculateAverageFieldLengths=function(){for(var e=Object.keys(this.fieldLengths),t=e.length,r={},n={},i=0;i<t;i++){var s=R.FieldRef.fromString(e[i]),o=s.fieldName;n[o]||(n[o]=0),n[o]+=1,r[o]||(r[o]=0),r[o]+=this.fieldLengths[s]}var a=Object.keys(this._fields);for(i=0;i<a.length;i++){var u=a[i];r[u]=r[u]/n[u]}this.averageFieldLength=r},R.Builder.prototype.createFieldVectors=function(){for(var e={},t=Object.keys(this.fieldTermFrequencies),r=t.length,n=Object.create(null),i=0;i<r;i++){for(var s=R.FieldRef.fromString(t[i]),o=s.fieldName,a=this.fieldLengths[s],u=new R.Vector,l=this.fieldTermFrequencies[s],c=Object.keys(l),h=c.length,d=this._fields[o].boost||1,f=this._documents[s.docRef].boost||1,p=0;p<h;p++){var y,m,g,x=c[p],v=l[x],w=this.invertedIndex[x]._index;void 0===n[x]?(y=R.idf(this.invertedIndex[x],this.documentCount),n[x]=y):y=n[x],m=y*((this._k1+1)*v)/(this._k1*(1-this._b+this._b*(a/this.averageFieldLength[o]))+v),m*=d,m*=f,g=Math.round(1e3*m)/1e3,u.insert(w,g)}e[s]=u}this.fieldVectors=e},R.Builder.prototype.createTokenSet=function(){this.tokenSet=R.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},R.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new R.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:Object.keys(this._fields),pipeline:this.searchPipeline})},R.Builder.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1);t.unshift(this),e.apply(this,t)},R.MatchData=function(e,t,r){for(var n=Object.create(null),i=Object.keys(r||{}),s=0;s<i.length;s++){var o=i[s];n[o]=r[o].slice()}this.metadata=Object.create(null),void 0!==e&&(this.metadata[e]=Object.create(null),this.metadata[e][t]=n)},R.MatchData.prototype.combine=function(e){for(var t=Object.keys(e.metadata),r=0;r<t.length;r++){var n=t[r],i=Object.keys(e.metadata[n]);null==this.metadata[n]&&(this.metadata[n]=Object.create(null));for(var s=0;s<i.length;s++){var o=i[s],a=Object.keys(e.metadata[n][o]);null==this.metadata[n][o]&&(this.metadata[n][o]=Object.create(null));for(var u=0;u<a.length;u++){var l=a[u];null==this.metadata[n][o][l]?this.metadata[n][o][l]=e.metadata[n][o][l]:this.metadata[n][o][l]=this.metadata[n][o][l].concat(e.metadata[n][o][l])}}}},R.MatchData.prototype.add=function(e,t,r){if(!(e in this.metadata))return this.metadata[e]=Object.create(null),void(this.metadata[e][t]=r);if(t in this.metadata[e])for(var n=Object.keys(r),i=0;i<n.length;i++){var s=n[i];s in this.metadata[e][t]?this.metadata[e][t][s]=this.metadata[e][t][s].concat(r[s]):this.metadata[e][t][s]=r[s]}else this.metadata[e][t]=r},R.Query=function(e){this.clauses=[],this.allFields=e},R.Query.wildcard=new String("*"),R.Query.wildcard.NONE=0,R.Query.wildcard.LEADING=1,R.Query.wildcard.TRAILING=2,R.Query.presence={OPTIONAL:1,REQUIRED:2,PROHIBITED:3},R.Query.prototype.clause=function(e){return"fields"in e||(e.fields=this.allFields),"boost"in e||(e.boost=1),"usePipeline"in e||(e.usePipeline=!0),"wildcard"in e||(e.wildcard=R.Query.wildcard.NONE),e.wildcard&R.Query.wildcard.LEADING&&e.term.charAt(0)!=R.Query.wildcard&&(e.term="*"+e.term),e.wildcard&R.Query.wildcard.TRAILING&&e.term.slice(-1)!=R.Query.wildcard&&(e.term=e.term+"*"),"presence"in e||(e.presence=R.Query.presence.OPTIONAL),this.clauses.push(e),this},R.Query.prototype.isNegated=function(){for(var e=0;e<this.clauses.length;e++)if(this.clauses[e].presence!=R.Query.presence.PROHIBITED)return!1;return!0},R.Query.prototype.term=function(e,t){if(Array.isArray(e))return e.forEach((function(e){this.term(e,R.utils.clone(t))}),this),this;var r=t||{};return r.term=e.toString(),this.clause(r),this},R.QueryParseError=function(e,t,r){this.name="QueryParseError",this.message=e,this.start=t,this.end=r},R.QueryParseError.prototype=new Error,R.QueryLexer=function(e){this.lexemes=[],this.str=e,this.length=e.length,this.pos=0,this.start=0,this.escapeCharPositions=[]},R.QueryLexer.prototype.run=function(){for(var e=R.QueryLexer.lexText;e;)e=e(this)},R.QueryLexer.prototype.sliceString=function(){for(var e=[],t=this.start,r=this.pos,n=0;n<this.escapeCharPositions.length;n++)r=this.escapeCharPositions[n],e.push(this.str.slice(t,r)),t=r+1;return e.push(this.str.slice(t,this.pos)),this.escapeCharPositions.length=0,e.join("")},R.QueryLexer.prototype.emit=function(e){this.lexemes.push({type:e,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},R.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},R.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return R.QueryLexer.EOS;var e=this.str.charAt(this.pos);return this.pos+=1,e},R.QueryLexer.prototype.width=function(){return this.pos-this.start},R.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},R.QueryLexer.prototype.backup=function(){this.pos-=1},R.QueryLexer.prototype.acceptDigitRun=function(){var e,t;do{t=(e=this.next()).charCodeAt(0)}while(t>47&&t<58);e!=R.QueryLexer.EOS&&this.backup()},R.QueryLexer.prototype.more=function(){return this.pos<this.length},R.QueryLexer.EOS="EOS",R.QueryLexer.FIELD="FIELD",R.QueryLexer.TERM="TERM",R.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",R.QueryLexer.BOOST="BOOST",R.QueryLexer.PRESENCE="PRESENCE",R.QueryLexer.lexField=function(e){return e.backup(),e.emit(R.QueryLexer.FIELD),e.ignore(),R.QueryLexer.lexText},R.QueryLexer.lexTerm=function(e){if(e.width()>1&&(e.backup(),e.emit(R.QueryLexer.TERM)),e.ignore(),e.more())return R.QueryLexer.lexText},R.QueryLexer.lexEditDistance=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(R.QueryLexer.EDIT_DISTANCE),R.QueryLexer.lexText},R.QueryLexer.lexBoost=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(R.QueryLexer.BOOST),R.QueryLexer.lexText},R.QueryLexer.lexEOS=function(e){e.width()>0&&e.emit(R.QueryLexer.TERM)},R.QueryLexer.termSeparator=R.tokenizer.separator,R.QueryLexer.lexText=function(e){for(;;){var t=e.next();if(t==R.QueryLexer.EOS)return R.QueryLexer.lexEOS;if(92!=t.charCodeAt(0)){if(":"==t)return R.QueryLexer.lexField;if("~"==t)return e.backup(),e.width()>0&&e.emit(R.QueryLexer.TERM),R.QueryLexer.lexEditDistance;if("^"==t)return e.backup(),e.width()>0&&e.emit(R.QueryLexer.TERM),R.QueryLexer.lexBoost;if("+"==t&&1===e.width())return e.emit(R.QueryLexer.PRESENCE),R.QueryLexer.lexText;if("-"==t&&1===e.width())return e.emit(R.QueryLexer.PRESENCE),R.QueryLexer.lexText;if(t.match(R.QueryLexer.termSeparator))return R.QueryLexer.lexTerm}else e.escapeCharacter()}},R.QueryParser=function(e,t){this.lexer=new R.QueryLexer(e),this.query=t,this.currentClause={},this.lexemeIdx=0},R.QueryParser.prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes;for(var e=R.QueryParser.parseClause;e;)e=e(this);return this.query},R.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},R.QueryParser.prototype.consumeLexeme=function(){var e=this.peekLexeme();return this.lexemeIdx+=1,e},R.QueryParser.prototype.nextClause=function(){var e=this.currentClause;this.query.clause(e),this.currentClause={}},R.QueryParser.parseClause=function(e){var t=e.peekLexeme();if(null!=t)switch(t.type){case R.QueryLexer.PRESENCE:return R.QueryParser.parsePresence;case R.QueryLexer.FIELD:return R.QueryParser.parseField;case R.QueryLexer.TERM:return R.QueryParser.parseTerm;default:var r="expected either a field or a term, found "+t.type;throw t.str.length>=1&&(r+=" with value \'"+t.str+"\'"),new R.QueryParseError(r,t.start,t.end)}},R.QueryParser.parsePresence=function(e){var t=e.consumeLexeme();if(null!=t){switch(t.str){case"-":e.currentClause.presence=R.Query.presence.PROHIBITED;break;case"+":e.currentClause.presence=R.Query.presence.REQUIRED;break;default:var r="unrecognised presence operator\'"+t.str+"\'";throw new R.QueryParseError(r,t.start,t.end)}var n=e.peekLexeme();if(null==n)throw r="expecting term or field, found nothing",new R.QueryParseError(r,t.start,t.end);switch(n.type){case R.QueryLexer.FIELD:return R.QueryParser.parseField;case R.QueryLexer.TERM:return R.QueryParser.parseTerm;default:throw r="expecting term or field, found \'"+n.type+"\'",new R.QueryParseError(r,n.start,n.end)}}},R.QueryParser.parseField=function(e){var t=e.consumeLexeme();if(null!=t){if(-1==e.query.allFields.indexOf(t.str)){var r=e.query.allFields.map((function(e){return"\'"+e+"\'"})).join(", "),n="unrecognised field \'"+t.str+"\', possible fields: "+r;throw new R.QueryParseError(n,t.start,t.end)}e.currentClause.fields=[t.str];var i=e.peekLexeme();if(null==i)throw n="expecting term, found nothing",new R.QueryParseError(n,t.start,t.end);if(i.type===R.QueryLexer.TERM)return R.QueryParser.parseTerm;throw n="expecting term, found \'"+i.type+"\'",new R.QueryParseError(n,i.start,i.end)}},R.QueryParser.parseTerm=function(e){var t=e.consumeLexeme();if(null!=t){e.currentClause.term=t.str.toLowerCase(),-1!=t.str.indexOf("*")&&(e.currentClause.usePipeline=!1);var r=e.peekLexeme();if(null!=r)switch(r.type){case R.QueryLexer.TERM:return e.nextClause(),R.QueryParser.parseTerm;case R.QueryLexer.FIELD:return e.nextClause(),R.QueryParser.parseField;case R.QueryLexer.EDIT_DISTANCE:return R.QueryParser.parseEditDistance;case R.QueryLexer.BOOST:return R.QueryParser.parseBoost;case R.QueryLexer.PRESENCE:return e.nextClause(),R.QueryParser.parsePresence;default:var n="Unexpected lexeme type \'"+r.type+"\'";throw new R.QueryParseError(n,r.start,r.end)}else e.nextClause()}},R.QueryParser.parseEditDistance=function(e){var t=e.consumeLexeme();if(null!=t){var r=parseInt(t.str,10);if(isNaN(r)){var n="edit distance must be numeric";throw new R.QueryParseError(n,t.start,t.end)}e.currentClause.editDistance=r;var i=e.peekLexeme();if(null!=i)switch(i.type){case R.QueryLexer.TERM:return e.nextClause(),R.QueryParser.parseTerm;case R.QueryLexer.FIELD:return e.nextClause(),R.QueryParser.parseField;case R.QueryLexer.EDIT_DISTANCE:return R.QueryParser.parseEditDistance;case R.QueryLexer.BOOST:return R.QueryParser.parseBoost;case R.QueryLexer.PRESENCE:return e.nextClause(),R.QueryParser.parsePresence;default:throw n="Unexpected lexeme type \'"+i.type+"\'",new R.QueryParseError(n,i.start,i.end)}else e.nextClause()}},R.QueryParser.parseBoost=function(e){var t=e.consumeLexeme();if(null!=t){var r=parseInt(t.str,10);if(isNaN(r)){var n="boost must be numeric";throw new R.QueryParseError(n,t.start,t.end)}e.currentClause.boost=r;var i=e.peekLexeme();if(null!=i)switch(i.type){case R.QueryLexer.TERM:return e.nextClause(),R.QueryParser.parseTerm;case R.QueryLexer.FIELD:return e.nextClause(),R.QueryParser.parseField;case R.QueryLexer.EDIT_DISTANCE:return R.QueryParser.parseEditDistance;case R.QueryLexer.BOOST:return R.QueryParser.parseBoost;case R.QueryLexer.PRESENCE:return e.nextClause(),R.QueryParser.parsePresence;default:throw n="Unexpected lexeme type \'"+i.type+"\'",new R.QueryParseError(n,i.start,i.end)}else e.nextClause()}},void 0===(i="function"==typeof(n=function(){return R})?n.call(t,r,t,e):n)||(e.exports=i)}()}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var n={};!function(){"use strict";r.d(n,{add:function(){return l},dispose:function(){return p},done:function(){return c},fromExternalJS:function(){return d},load:function(){return f},search:function(){return y},toJS:function(){return h}});var e=r(336),t=(e,t,r)=>new Promise(((n,i)=>{var s=e=>{try{a(r.next(e))}catch(e){i(e)}},o=e=>{try{a(r.throw(e))}catch(e){i(e)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(s,o);a((r=r.apply(e,t)).next())}));let i,s,o,a=[];function u(){i=new e.Builder,i.field("title"),i.field("description"),i.ref("ref"),i.pipeline.add(e.trimmer,e.stopWordFilter,e.stemmer),o=new Promise((e=>{s=e}))}function l(e,t,r){const n=a.push(r)-1,s={title:e.toLowerCase(),description:t.toLowerCase(),ref:n};i.add(s)}function c(){return t(this,null,(function*(){s(i.build())}))}function h(){return t(this,null,(function*(){return{store:a,index:(yield o).toJSON()}}))}function d(e,r){return t(this,null,(function*(){try{if(importScripts(e),!self[r])throw new Error("Broken index file format");f(self[r])}catch(e){console.error("Failed to load search index: "+e.message)}}))}function f(r){return t(this,null,(function*(){a=r.store,s(e.Index.load(r.index))}))}function p(){return t(this,null,(function*(){a=[],u()}))}function y(r,n=0){return t(this,null,(function*(){if(0===r.trim().length)return[];let t=(yield o).query((t=>{r.trim().toLowerCase().split(/\\s+/).forEach((r=>{if(1===r.length)return;const n=(t=>{const r=e.trimmer(new e.Token(t,{}));return"*"+e.stemmer(r)+"*"})(r);t.term(n,{})}))}));return n>0&&(t=t.slice(0,n)),t.map((e=>({meta:a[e.ref],score:e.score})))}))}e.tokenizer.separator=/\\s+/,u(),addEventListener("message",(function(e){var t,r=e.data,i=r.type,s=r.method,o=r.id,a=r.params;"RPC"===i&&s&&((t=n[s])?Promise.resolve().then((function(){return t.apply(n,a)})):Promise.reject("No such method")).then((function(e){postMessage({type:"RPC",id:o,result:e})})).catch((function(e){var t={message:e};e.stack&&(t.message=e.message,t.stack=e.stack,t.name=e.name),postMessage({type:"RPC",id:o,error:t})}))})),postMessage({type:"RPC",method:"ready"})}()}();\n//# sourceMappingURL=0a6ad30060afff00cb34.worker.js.map'])),{name:"[fullhash].worker.js"});return r(e,o),e}},314:function(e){e.exports=function(e,t){var n=0,r={};e.addEventListener("message",(function(t){var n=t.data;if("RPC"===n.type)if(n.id){var o=r[n.id];o&&(delete r[n.id],n.error?o[1](Object.assign(Error(n.error.message),n.error)):o[0](n.result))}else{var i=document.createEvent("Event");i.initEvent(n.method,!1,!1),i.data=n.params,e.dispatchEvent(i)}})),t.forEach((function(t){e[t]=function(){var o=arguments;return new Promise((function(i,s){var a=++n;r[a]=[i,s],e.postMessage({type:"RPC",id:a,method:t,params:[].slice.call(o)})}))}}))}},766:function(e){"use strict";e.exports=n(13998)},376:function(e){"use strict";e.exports=n(78463)},322:function(e){"use strict";e.exports=n(227)},66:function(e){"use strict";e.exports=n(46670)},416:function(e){"use strict";e.exports=void 0},177:function(){},109:function(e){"use strict";e.exports={i8:"7.0.6"}}},t={};function l(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,l),o.exports}l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,{a:t}),t},l.d=function(e,t){for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.nc=void 0;var c={};return function(){"use strict";l.r(c),l.d(c,{AUTH_TYPES:function(){return rc},ApiContentWrap:function(){return Hu},ApiInfo:function(){return mc},ApiInfoModel:function(){return Zn},ApiLogo:function(){return bc},AppStore:function(){return ac},ArraySchema:function(){return pl},BackgroundStub:function(){return Ju},BodyContent:function(){return sp},COMPONENT_REGEXP:function(){return Vn},CallbackModel:function(){return fr},ClipboardService:function(){return Fs},ContentItem:function(){return gu},ContentItems:function(){return yu},DiscriminatorDropdown:function(){return Xa},Dropdown:function(){return hs},DropdownLabel:function(){return oa},DropdownOrLabel:function(){return ws},DropdownWrapper:function(){return ia},ErrorBoundary:function(){return le},Example:function(){return ta},ExampleModel:function(){return Wr},ExternalExample:function(){return na},FieldModel:function(){return Zr},GROUP_DEPTH:function(){return Xo},GroupModel:function(){return qo},HistoryService:function(){return Ht},IS_BROWSER:function(){return u},InvertedSimpleDropdown:function(){return sa},JsonPointer:function(){return Re},JsonViewer:function(){return Gs},LEGACY_REGEXP:function(){return Un},Loading:function(){return de},MDX_COMPONENT_REGEXP:function(){return Wn},Markdown:function(){return Is},MarkdownRenderer:function(){return Jn},MarkerService:function(){return Zt},MediaContentModel:function(){return no},MediaTypeModel:function(){return Xr},MediaTypesSwitch:function(){return Gc},MenuBuilder:function(){return Ko},MenuItem:function(){return Cu},MenuItemLabel:function(){return Tc},MenuItemLi:function(){return jc},MenuItemTitle:function(){return _c},MenuItemUl:function(){return Pc},MenuItems:function(){return Lu},MenuStore:function(){return oi},MiddlePanel:function(){return pi},MimeLabel:function(){return ra},NoSampleLabel:function(){return aa},OLD_SECURITY_DEFINITIONS_JSX_NAME:function(){return gt},ObjectSchema:function(){return Ka},OneOfButton:function(){return vl},OneOfSchema:function(){return wl},OpenAPIParser:function(){return Cr},Operation:function(){return lu},OperationBadge:function(){return Cc},OperationItem:function(){return vu},OperationMenuItemContent:function(){return Au},OperationModel:function(){return vo},OptionsConsumer:function(){return ye},OptionsContext:function(){return me},OptionsProvider:function(){return fe},Parameters:function(){return op},PayloadSamples:function(){return Fp},Redoc:function(){return rd},RedocAttribution:function(){return Lc},RedocNormalizedOptions:function(){return Z},RedocStandalone:function(){return od},RedocWrap:function(){return Vu},RequestBodyModel:function(){return ro},ResponseDetails:function(){return bp},ResponseHeaders:function(){return dp},ResponseModel:function(){return mo},ResponseSamples:function(){return Kp},ResponseTitle:function(){return ap},ResponseView:function(){return xp},ResponsesList:function(){return wp},RightPanel:function(){return di},Row:function(){return mi},SCHEMA_DEFINITION_JSX_NAME:function(){return bt},SECTION_ATTR:function(){return ri},SECURITY_DEFINITIONS_JSX_NAME:function(){return yt},SECURITY_SCHEMES_SECTION_PREFIX:function(){return xt},Schema:function(){return Il},SchemaDefinition:function(){return Fl},SchemaModel:function(){return Br},ScrollService:function(){return li},SearchBox:function(){return nd},SearchStore:function(){return ci},Section:function(){return ui},SectionItem:function(){return xu},SecurityDefs:function(){return oc},SecuritySchemeModel:function(){return Po},SecuritySchemesModel:function(){return jo},SideMenu:function(){return zu},SideNavStyleEnum:function(){return N},SimpleDropdown:function(){return ms},SourceCode:function(){return Xs},SourceCodeWithCopy:function(){return Ks},SpecStore:function(){return Mo},StickyResponsiveSidebar:function(){return Wu},StoreBuilder:function(){return Ei},StoreConsumer:function(){return Oi},StoreContext:function(){return wi},StoreProvider:function(){return ki},StyledMarkdownBlock:function(){return Es},ThemeProvider:function(){return re},Throttle:function(){return At},alphabeticallyByProp:function(){return Qt},appendToMdHeading:function(){return k},argValueToBoolean:function(){return J},buildComponentComment:function(){return Hn},concatRefStacks:function(){return Rr},convertSwagger2OpenAPI:function(){return ke},createGlobalStyle:function(){return te},createStore:function(){return sc},css:function(){return ee},debugTime:function(){return Pt},debugTimeEnd:function(){return jt},detectType:function(){return Ve},escapeHTMLAttrChars:function(){return T},expandDefaultServerVariables:function(){return mt},extensionsHook:function(){return se},extractExtensions:function(){return Ot},flattenByProp:function(){return x},getBasePath:function(){return A},getContentWithLegacyExamples:function(){return St},getDefinitionName:function(){return st},getOperationSummary:function(){return Ue},getSerializedValue:function(){return nt},getStatusCodeType:function(){return Be},highlight:function(){return Ct},history:function(){return Jt},html2Str:function(){return h},humanizeConstraints:function(){return ct},humanizeNumberRange:function(){return lt},isAbsoluteUrl:function(){return R},isArray:function(){return L},isBoolean:function(){return D},isFormUrlEncoded:function(){return Ye},isJsonLike:function(){return Je},isNamedDefinition:function(){return it},isNumeric:function(){return w},isObject:function(){return E},isOperationName:function(){return Qe},isPayloadSample:function(){return bo},isPrimitiveType:function(){return He},isRedocExtension:function(){return kt},isStatusCode:function(){return Fe},keyframes:function(){return ne},langFromMime:function(){return rt},loadAndBundleSpec:function(){return we},mapLang:function(){return Rt},mapValues:function(){return b},mapWithLast:function(){return g},media:function(){return oe},memoize:function(){return qt},menuItemDepth:function(){return Ic},mergeObjects:function(){return O},mergeParams:function(){return dt},mergeSimilarMediaTypes:function(){return ht},normalizeServers:function(){return ft},pluralizeType:function(){return Et},pushRef:function(){return $r},querySelector:function(){return d},removeQueryStringAndHash:function(){return j},resolveUrl:function(){return C},safeSlugify:function(){return $},scrollIntoViewIfNeeded:function(){return m},serializeParameterValue:function(){return tt},serializeParameterValueWithMime:function(){return et},setSecuritySchemePrefix:function(){return vt},shortenHTTPVerb:function(){return wt},sortByField:function(){return ut},sortByRequired:function(){return pt},stripTrailingSlash:function(){return v},styled:function(){return ie},titleize:function(){return P},unescapeHTMLChars:function(){return _},urlFormEncodePayload:function(){return Ke},useStore:function(){return Si}});var e=n(88763),t=n(68046);const s={spacing:{unit:5,sectionHorizontal:e=>{let{spacing:t}=e;return 8*t.unit},sectionVertical:e=>{let{spacing:t}=e;return 8*t.unit}},breakpoints:{small:"50rem",medium:"75rem",large:"105rem"},colors:{tonalOffset:.2,primary:{main:"#32329f",light:e=>{let{colors:n}=e;return(0,t.lighten)(n.tonalOffset,n.primary.main)},dark:e=>{let{colors:n}=e;return(0,t.darken)(n.tonalOffset,n.primary.main)},contrastText:e=>{let{colors:n}=e;return(0,t.readableColor)(n.primary.main)}},success:{main:"#1d8127",light:e=>{let{colors:n}=e;return(0,t.lighten)(2*n.tonalOffset,n.success.main)},dark:e=>{let{colors:n}=e;return(0,t.darken)(n.tonalOffset,n.success.main)},contrastText:e=>{let{colors:n}=e;return(0,t.readableColor)(n.success.main)}},warning:{main:"#ffa500",light:e=>{let{colors:n}=e;return(0,t.lighten)(n.tonalOffset,n.warning.main)},dark:e=>{let{colors:n}=e;return(0,t.darken)(n.tonalOffset,n.warning.main)},contrastText:"#ffffff"},error:{main:"#d41f1c",light:e=>{let{colors:n}=e;return(0,t.lighten)(n.tonalOffset,n.error.main)},dark:e=>{let{colors:n}=e;return(0,t.darken)(n.tonalOffset,n.error.main)},contrastText:e=>{let{colors:n}=e;return(0,t.readableColor)(n.error.main)}},gray:{50:"#FAFAFA",100:"#F5F5F5"},text:{primary:"#333333",secondary:e=>{let{colors:n}=e;return(0,t.lighten)(n.tonalOffset,n.text.primary)}},border:{dark:"rgba(0,0,0, 0.1)",light:"#ffffff"},responses:{success:{color:e=>{let{colors:t}=e;return t.success.main},backgroundColor:e=>{let{colors:n}=e;return(0,t.transparentize)(.93,n.success.main)},tabTextColor:e=>{let{colors:t}=e;return t.responses.success.color}},error:{color:e=>{let{colors:t}=e;return t.error.main},backgroundColor:e=>{let{colors:n}=e;return(0,t.transparentize)(.93,n.error.main)},tabTextColor:e=>{let{colors:t}=e;return t.responses.error.color}},redirect:{color:e=>{let{colors:t}=e;return t.warning.main},backgroundColor:e=>{let{colors:n}=e;return(0,t.transparentize)(.9,n.responses.redirect.color)},tabTextColor:e=>{let{colors:t}=e;return t.responses.redirect.color}},info:{color:"#87ceeb",backgroundColor:e=>{let{colors:n}=e;return(0,t.transparentize)(.9,n.responses.info.color)},tabTextColor:e=>{let{colors:t}=e;return t.responses.info.color}}},http:{get:"#2F8132",post:"#186FAF",put:"#95507c",options:"#947014",patch:"#bf581d",delete:"#cc3333",basic:"#707070",link:"#07818F",head:"#A23DAD"}},schema:{linesColor:e=>(0,t.lighten)(e.colors.tonalOffset,(0,t.desaturate)(e.colors.tonalOffset,e.colors.primary.main)),defaultDetailsWidth:"75%",typeNameColor:e=>e.colors.text.secondary,typeTitleColor:e=>e.schema.typeNameColor,requireLabelColor:e=>e.colors.error.main,labelsTextSize:"0.9em",nestingSpacing:"1em",nestedBackground:"#fafafa",arrow:{size:"1.1em",color:e=>e.colors.text.secondary}},typography:{fontSize:"14px",lineHeight:"1.5em",fontWeightRegular:"400",fontWeightBold:"600",fontWeightLight:"300",fontFamily:"Roboto, sans-serif",smoothing:"antialiased",optimizeSpeed:!0,headings:{fontFamily:"Montserrat, sans-serif",fontWeight:"400",lineHeight:"1.6em"},code:{fontSize:"13px",fontFamily:"Courier, monospace",lineHeight:e=>{let{typography:t}=e;return t.lineHeight},fontWeight:e=>{let{typography:t}=e;return t.fontWeightRegular},color:"#e53935",backgroundColor:"rgba(38, 50, 56, 0.05)",wrap:!1},links:{color:e=>{let{colors:t}=e;return t.primary.main},visited:e=>{let{typography:t}=e;return t.links.color},hover:e=>{let{typography:n}=e;return(0,t.lighten)(.2,n.links.color)},textDecoration:"auto",hoverTextDecoration:"auto"}},sidebar:{width:"260px",backgroundColor:"#fafafa",textColor:"#333333",activeTextColor:e=>e.sidebar.textColor!==s.sidebar.textColor?e.sidebar.textColor:e.colors.primary.main,groupItems:{activeBackgroundColor:e=>(0,t.darken)(.1,e.sidebar.backgroundColor),activeTextColor:e=>e.sidebar.activeTextColor,textTransform:"uppercase"},level1Items:{activeBackgroundColor:e=>(0,t.darken)(.05,e.sidebar.backgroundColor),activeTextColor:e=>e.sidebar.activeTextColor,textTransform:"none"},arrow:{size:"1.5em",color:e=>e.sidebar.textColor}},logo:{maxHeight:e=>{let{sidebar:t}=e;return t.width},maxWidth:e=>{let{sidebar:t}=e;return t.width},gutter:"2px"},rightPanel:{backgroundColor:"#263238",width:"40%",textColor:"#ffffff",servers:{overlay:{backgroundColor:"#fafafa",textColor:"#263238"},url:{backgroundColor:"#fff"}}},codeBlock:{backgroundColor:e=>{let{rightPanel:n}=e;return(0,t.darken)(.1,n.backgroundColor)}},fab:{backgroundColor:"#f2f2f2",color:"#0065FB"}};var p=s;const u="undefined"!=typeof window&&"HTMLElement"in window;function d(e){return"undefined"!=typeof document?document.querySelector(e):null}function h(e){return e.split(/<[^>]+>/).map((e=>e.trim())).filter((e=>e.length>0)).join(" ")}function m(e,t){void 0===t&&(t=!0);const n=e.parentNode;if(!n)return;const r=window.getComputedStyle(n,void 0),o=parseInt(r.getPropertyValue("border-top-width"),10),i=parseInt(r.getPropertyValue("border-left-width"),10),s=e.offsetTop-n.offsetTop<n.scrollTop,a=e.offsetTop-n.offsetTop+e.clientHeight-o>n.scrollTop+n.clientHeight,l=e.offsetLeft-n.offsetLeft<n.scrollLeft,c=e.offsetLeft-n.offsetLeft+e.clientWidth-i>n.scrollLeft+n.clientWidth,p=s&&!a;(s||a)&&t&&(n.scrollTop=e.offsetTop-n.offsetTop-n.clientHeight/2-o+e.clientHeight/2),(l||c)&&t&&(n.scrollLeft=e.offsetLeft-n.offsetLeft-n.clientWidth/2-i+e.clientWidth/2),(s||a||l||c)&&!t&&e.scrollIntoView(p)}var f=n(12495),y=l.n(f);function g(e,t){const n=[];for(let r=0;r<e.length-1;r++)n.push(t(e[r],!1));return 0!==e.length&&n.push(t(e[e.length-1],!0)),n}function b(e,t){const n={};for(const r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r],r,e));return n}function x(e,t){const n=[],r=e=>{for(const o of e)n.push(o),o[t]&&r(o[t])};return r(e),n}function v(e){return e.endsWith("/")?e.substring(0,e.length-1):e}function w(e){return!isNaN(parseFloat(e))&&isFinite(e)}function k(e,t,n){const r=new RegExp(`(^|\\n)#\\s?${t}\\s*\\n`,"i"),o=new RegExp(`((\\n|^)#\\s*${t}\\s*(\\n|$)(?:.|\\n)*?)(\\n#|$)`,"i");if(r.test(e))return e.replace(o,`$1\n\n${n}\n$4`);{const r=""===e||e.endsWith("\n\n")?"":e.endsWith("\n")?"\n":"\n\n";return`${e}${r}# ${t}\n\n${n}`}}const O=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(!n.length)return e;const o=n.shift();return void 0===o?e:(S(e)&&S(o)&&Object.keys(o).forEach((t=>{S(o[t])?(e[t]||(e[t]={}),O(e[t],o[t])):e[t]=o[t]})),O.apply(void 0,[e].concat(n)))},E=e=>null!==e&&"object"==typeof e,S=e=>E(e)&&!L(e);function $(e){return y()(e)||e.toString().toLowerCase().replace(/\s+/g,"-").replace(/&/g,"-and-").replace(/\--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}function R(e){return/(?:^[a-z][a-z0-9+.-]*:|\/\/)/i.test(e)}function C(e,t){let n;if(t.startsWith("//"))try{n=`${new URL(e).protocol||"https:"}${t}`}catch(e){n=`https:${t}`}else if(R(t))n=t;else if(t.startsWith("/"))try{const r=new URL(e);r.pathname=t,n=r.href}catch(e){n=t}else n=v(e)+"/"+t;return v(n)}function A(e){try{return I(e).pathname}catch(t){return e}}function P(e){return e.charAt(0).toUpperCase()+e.slice(1)}function j(e){try{const t=I(e);return t.search="",t.hash="",t.toString()}catch(t){return e}}function I(e){return"undefined"==typeof URL?new(l(416).URL)(e):new URL(e)}function T(e){return e.replace(/["\\]/g,"\\$&")}function _(e){return e.replace(/&#(\d+);/g,((e,t)=>String.fromCharCode(parseInt(t,10)))).replace(/&amp;/g,"&").replace(/&quot;/g,'"')}function L(e){return Array.isArray(e)}function D(e){return"boolean"==typeof e}const z={enum:"Enum",enumSingleValue:"Value",enumArray:"Items",default:"Default",deprecated:"Deprecated",example:"Example",examples:"Examples",recursive:"Recursive",arrayOf:"Array of ",webhook:"Event",const:"Value",noResultsFound:"No results found",download:"Download",downloadSpecification:"Download OpenAPI specification",responses:"Responses",callbackResponses:"Callback responses",requestSamples:"Request samples",responseSamples:"Response samples"};function M(e,t){const n=z[e];return void 0!==t?n[t]:n}var N=(e=>(e.SummaryOnly="summary-only",e.PathOnly="path-only",e.IdOnly="id-only",e))(N||{}),F=Object.defineProperty,B=Object.defineProperties,q=Object.getOwnPropertyDescriptors,Q=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,V=(e,t,n)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,H=(e,t)=>{for(var n in t||(t={}))U.call(t,n)&&V(e,n,t[n]);if(Q)for(var n of Q(t))W.call(t,n)&&V(e,n,t[n]);return e};function J(e,t){return void 0===e?t||!1:"string"==typeof e?"false"!==e:e}function Y(e){return"string"==typeof e?parseInt(e,10):"number"==typeof e?e:void 0}let Z=function(){function e(t,n){var r,o,i,s,a;void 0===n&&(n={});const l=(t=H(H({},n),t)).theme&&t.theme.extensionsHook;var c,u;(null==(r=t.theme)?void 0:r.menu)&&!(null==(o=t.theme)?void 0:o.sidebar)&&(console.warn('Theme setting "menu" is deprecated. Rename to "sidebar"'),t.theme.sidebar=t.theme.menu),(null==(i=t.theme)?void 0:i.codeSample)&&!(null==(s=t.theme)?void 0:s.codeBlock)&&(console.warn('Theme setting "codeSample" is deprecated. Rename to "codeBlock"'),t.theme.codeBlock=t.theme.codeSample),this.theme=function(e){const t={};let n=0;const r=(o,i)=>{Object.keys(o).forEach((s=>{const a=(i?i+".":"")+s,l=o[s];"function"==typeof l?Object.defineProperty(o,s,{get(){if(!t[a]){if(n++,n>1e3)throw new Error(`Theme probably contains circular dependency at ${a}: ${l.toString()}`);t[a]=l(e)}return t[a]},enumerable:!0}):"object"==typeof l&&r(l,a)}))};return r(e,""),JSON.parse(JSON.stringify(e))}(O({},p,(c=H({},t.theme),B(c,q({extensionsHook:void 0}))))),this.theme.extensionsHook=l,u=t.labels,Object.assign(z,u),this.scrollYOffset=e.normalizeScrollYOffset(t.scrollYOffset),this.hideHostname=e.normalizeHideHostname(t.hideHostname),this.expandResponses=e.normalizeExpandResponses(t.expandResponses),this.requiredPropsFirst=J(t.requiredPropsFirst),this.sortPropsAlphabetically=J(t.sortPropsAlphabetically),this.sortEnumValuesAlphabetically=J(t.sortEnumValuesAlphabetically),this.sortOperationsAlphabetically=J(t.sortOperationsAlphabetically),this.sortTagsAlphabetically=J(t.sortTagsAlphabetically),this.nativeScrollbars=J(t.nativeScrollbars),this.pathInMiddlePanel=J(t.pathInMiddlePanel),this.untrustedSpec=J(t.untrustedSpec),this.hideDownloadButton=J(t.hideDownloadButton),this.downloadFileName=t.downloadFileName,this.downloadDefinitionUrl=t.downloadDefinitionUrl,this.disableSearch=J(t.disableSearch),this.onlyRequiredInSamples=J(t.onlyRequiredInSamples),this.showExtensions=e.normalizeShowExtensions(t.showExtensions),this.sideNavStyle=e.normalizeSideNavStyle(t.sideNavStyle),this.hideSingleRequestSampleTab=J(t.hideSingleRequestSampleTab),this.menuToggle=J(t.menuToggle,!0),this.jsonSampleExpandLevel=e.normalizeJsonSampleExpandLevel(t.jsonSampleExpandLevel),this.enumSkipQuotes=J(t.enumSkipQuotes),this.hideSchemaTitles=J(t.hideSchemaTitles),this.simpleOneOfTypeLabel=J(t.simpleOneOfTypeLabel),this.payloadSampleIdx=e.normalizePayloadSampleIdx(t.payloadSampleIdx),this.expandSingleSchemaField=J(t.expandSingleSchemaField),this.schemaExpansionLevel=function(e,t){return void 0===t&&(t=0),"all"===e?1/0:Y(e)||t}(t.schemaExpansionLevel),this.showObjectSchemaExamples=J(t.showObjectSchemaExamples),this.showSecuritySchemeType=J(t.showSecuritySchemeType),this.hideSecuritySection=J(t.hideSecuritySection),this.unstable_ignoreMimeParameters=J(t.unstable_ignoreMimeParameters),this.allowedMdComponents=t.allowedMdComponents||{},this.expandDefaultServerVariables=J(t.expandDefaultServerVariables),this.maxDisplayedEnumValues=Y(t.maxDisplayedEnumValues);const d=L(t.ignoreNamedSchemas)?t.ignoreNamedSchemas:null==(a=t.ignoreNamedSchemas)?void 0:a.split(",").map((e=>e.trim()));this.ignoreNamedSchemas=new Set(d),this.hideSchemaPattern=J(t.hideSchemaPattern),this.generatedPayloadSamplesMaxDepth=e.normalizeGeneratedPayloadSamplesMaxDepth(t.generatedPayloadSamplesMaxDepth),this.nonce=t.nonce,this.hideFab=J(t.hideFab),this.minCharacterLengthToInitSearch=Y(t.minCharacterLengthToInitSearch)||3,this.showWebhookVerb=J(t.showWebhookVerb)}return e.normalizeExpandResponses=function(e){if("all"===e)return"all";if("string"==typeof e){const t={};return e.split(",").forEach((e=>{t[e.trim()]=!0})),t}return void 0!==e&&console.warn(`expandResponses must be a string but received value "${e}" of type ${typeof e}`),{}},e.normalizeHideHostname=function(e){return!!e},e.normalizeScrollYOffset=function(e){if("string"==typeof e&&!w(e)){const t=d(e);t||console.warn("scrollYOffset value is a selector to non-existing element. Using offset 0 by default");const n=t&&t.getBoundingClientRect().bottom||0;return()=>n}return"number"==typeof e||w(e)?()=>"number"==typeof e?e:parseFloat(e):"function"==typeof e?()=>{const t=e();return"number"!=typeof t&&console.warn(`scrollYOffset should return number but returned value "${t}" of type ${typeof t}`),t}:(void 0!==e&&console.warn("Wrong value for scrollYOffset ReDoc option: should be string, number or function"),()=>0)},e.normalizeShowExtensions=function(e){if(void 0===e)return!1;if(""===e)return!0;if("string"!=typeof e)return e;switch(e){case"true":return!0;case"false":return!1;default:return e.split(",").map((e=>e.trim()))}},e.normalizeSideNavStyle=function(e){const t=N.SummaryOnly;if("string"!=typeof e)return t;switch(e){case t:return e;case N.PathOnly:return N.PathOnly;case N.IdOnly:return N.IdOnly;default:return t}},e.normalizePayloadSampleIdx=function(e){return"number"==typeof e?Math.max(0,e):"string"==typeof e&&isFinite(e)?parseInt(e,10):0},e.normalizeJsonSampleExpandLevel=function(e){return"all"===e?1/0:isNaN(Number(e))?2:Math.ceil(Number(e))},e.normalizeGeneratedPayloadSamplesMaxDepth=function(e){return isNaN(Number(e))?10:Math.max(0,Number(e))},e}();var G=n(8711),X=l.n(G);const{default:K,css:ee,createGlobalStyle:te,keyframes:ne,ThemeProvider:re}=G,oe={lessThan:(e,t,n)=>function(){return ee`
      @media ${t?"print, ":""} screen and (max-width: ${t=>t.theme.breakpoints[e]}) ${n||""} {
        ${ee.apply(void 0,arguments)};
      }
    `},greaterThan:e=>function(){return ee`
      @media (min-width: ${t=>t.theme.breakpoints[e]}) {
        ${ee.apply(void 0,arguments)};
      }
    `},between:(e,t)=>function(){return ee`
      @media (min-width: ${t=>t.theme.breakpoints[e]}) and (max-width: ${e=>e.theme.breakpoints[t]}) {
        ${ee.apply(void 0,arguments)};
      }
    `}};var ie=K;function se(e){return t=>{if(t.theme.extensionsHook)return t.theme.extensionsHook(e,t)}}const ae=ie.div`
  padding: 20px;
  color: red;
`;let le=function(t){function n(e){var n;return(n=t.call(this,e)||this).state={error:void 0},n}i(n,t);var r=n.prototype;return r.componentDidCatch=function(e){return this.setState({error:e}),!1},r.render=function(){return this.state.error?e.createElement(ae,null,e.createElement("h1",null,"Something went wrong..."),e.createElement("small",null," ",this.state.error.message," "),e.createElement("p",null,e.createElement("details",null,e.createElement("summary",null,"Stack trace"),e.createElement("pre",null,this.state.error.stack))),e.createElement("small",null," ReDoc Version: ","2.0.0")," ",e.createElement("br",null),e.createElement("small",null," Commit: ","5fb4daa")):e.createElement(e.Fragment,null,e.Children.only(this.props.children))},n}(e.Component);const ce=ne`
  0% {
    transform: rotate(0deg); }
  100% {
    transform: rotate(360deg);
  }
`,pe=ie((t=>e.createElement("svg",{className:t.className,version:"1.1",width:"512",height:"512",viewBox:"0 0 512 512"},e.createElement("path",{d:"M275.682 147.999c0 10.864-8.837 19.661-19.682 19.661v0c-10.875 0-19.681-8.796-19.681-19.661v-96.635c0-10.885 8.806-19.661 19.681-19.661v0c10.844 0 19.682 8.776 19.682 19.661v96.635z"}),e.createElement("path",{d:"M275.682 460.615c0 10.865-8.837 19.682-19.682 19.682v0c-10.875 0-19.681-8.817-19.681-19.682v-96.604c0-10.885 8.806-19.681 19.681-19.681v0c10.844 0 19.682 8.796 19.682 19.682v96.604z"}),e.createElement("path",{d:"M147.978 236.339c10.885 0 19.681 8.755 19.681 19.641v0c0 10.885-8.796 19.702-19.681 19.702h-96.624c-10.864 0-19.661-8.817-19.661-19.702v0c0-10.885 8.796-19.641 19.661-19.641h96.624z"}),e.createElement("path",{d:"M460.615 236.339c10.865 0 19.682 8.755 19.682 19.641v0c0 10.885-8.817 19.702-19.682 19.702h-96.584c-10.885 0-19.722-8.817-19.722-19.702v0c0-10.885 8.837-19.641 19.722-19.641h96.584z"}),e.createElement("path",{d:"M193.546 165.703c7.69 7.66 7.68 20.142 0 27.822v0c-7.701 7.701-20.162 7.701-27.853 0.020l-68.311-68.322c-7.68-7.701-7.68-20.142 0-27.863v0c7.68-7.68 20.121-7.68 27.822 0l68.342 68.342z"}),e.createElement("path",{d:"M414.597 386.775c7.7 7.68 7.7 20.163 0.021 27.863v0c-7.7 7.659-20.142 7.659-27.843-0.062l-68.311-68.26c-7.68-7.7-7.68-20.204 0-27.863v0c7.68-7.7 20.163-7.7 27.842 0l68.291 68.322z"}),e.createElement("path",{d:"M165.694 318.464c7.69-7.7 20.153-7.7 27.853 0v0c7.68 7.659 7.69 20.163 0 27.863l-68.342 68.322c-7.67 7.659-20.142 7.659-27.822-0.062v0c-7.68-7.68-7.68-20.122 0-27.801l68.311-68.322z"}),e.createElement("path",{d:"M386.775 97.362c7.7-7.68 20.142-7.68 27.822 0v0c7.7 7.68 7.7 20.183 0.021 27.863l-68.322 68.311c-7.68 7.68-20.163 7.68-27.843-0.020v0c-7.68-7.68-7.68-20.162 0-27.822l68.322-68.332z"}))))`
  animation: 2s ${ce} linear infinite;
  width: 50px;
  height: 50px;
  content: '';
  display: inline-block;
  margin-left: -25px;

  path {
    fill: ${e=>e.color};
  }
`,ue=ie.div`
  font-family: helvetica, sans;
  width: 100%;
  text-align: center;
  font-size: 25px;
  margin: 30px 0 20px 0;
  color: ${e=>e.color};
`;let de=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),n.prototype.render=function(){return e.createElement("div",{style:{textAlign:"center"}},e.createElement(ue,{color:this.props.color},"Loading ..."),e.createElement(pe,{color:this.props.color}))},n}(e.PureComponent);var he=n(5556);const me=e.createContext(new Z({})),fe=me.Provider,ye=me.Consumer;var ge=n(27813),be=n(10854),xe=n(88921),ve=l(925);function we(e){return t=this,n=function*(){const t=new xe.Config({}),n={config:t,base:u?window.location.href:r.cwd()};u&&(t.resolve.http.customFetch=l.g.fetch),"object"==typeof e&&null!==e?n.doc={source:{absoluteRef:""},parsed:e}:n.ref=e;const{bundle:{parsed:o}}=yield(0,be.bundle)(n);return void 0!==o.swagger?ke(o):o},new Promise(((e,r)=>{var o=e=>{try{s(n.next(e))}catch(e){r(e)}},i=e=>{try{s(n.throw(e))}catch(e){r(e)}},s=t=>t.done?e(t.value):Promise.resolve(t.value).then(o,i);s((n=n.apply(t,null)).next())}));var t,n}function ke(e){return console.warn("[ReDoc Compatibility mode]: Converting OpenAPI 2.0 to OpenAPI 3.0"),new Promise(((t,n)=>(0,ve.convertObj)(e,{patch:!0,warnOnly:!0,text:"{}",anchors:!0},((e,r)=>{if(e)return n(e);t(r&&r.openapi)}))))}var Oe=n(55156),Ee=n(30228),Se=n(31095);const $e=Se.parse;let Re=function(){function e(){}return e.baseName=function(t,n){void 0===n&&(n=1);const r=e.parse(t);return r[r.length-n]},e.dirName=function(t,n){void 0===n&&(n=1);const r=e.parse(t);return Se.compile(r.slice(0,r.length-n))},e.relative=function(t,n){const r=e.parse(t);return e.parse(n).slice(r.length)},e.parse=function(e){let t=e;return"#"===t.charAt(0)&&(t=t.substring(1)),$e(t)},e.join=function(t,n){const r=e.parse(t).concat(n);return Se.compile(r)},e.get=function(e,t){return Se.get(e,t)},e.compile=function(e){return Se.compile(e)},e.escape=function(e){return Se.escape(e)},e}();Se.parse=Re.parse,Object.assign(Re,Se);var Ce=l(470),Ae=n(8769),Pe=Object.defineProperty,je=Object.defineProperties,Ie=Object.getOwnPropertyDescriptors,Te=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,De=(e,t,n)=>t in e?Pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ze=(e,t)=>{for(var n in t||(t={}))_e.call(t,n)&&De(e,n,t[n]);if(Te)for(var n of Te(t))Le.call(t,n)&&De(e,n,t[n]);return e},Me=(e,t)=>je(e,Ie(t));function Ne(e){return"string"==typeof e&&/\dxx/i.test(e)}function Fe(e){return"default"===e||w(e)||Ne(e)}function Be(e,t){if(void 0===t&&(t=!1),"default"===e)return t?"error":"success";let n="string"==typeof e?parseInt(e,10):e;if(Ne(e)&&(n*=100),n<100||n>599)throw new Error("invalid HTTP code");let r="success";return n>=300&&n<400?r="redirect":n>=400?r="error":n<200&&(r="info"),r}const qe={get:!0,post:!0,put:!0,head:!0,patch:!0,delete:!0,options:!0,$ref:!0};function Qe(e){return e in qe}function Ue(e){return e.summary||e.operationId||e.description&&e.description.substring(0,50)||e.pathName||"<no summary>"}const We={multipleOf:"number",maximum:"number",exclusiveMaximum:"number",minimum:"number",exclusiveMinimum:"number",maxLength:"string",minLength:"string",pattern:"string",contentEncoding:"string",contentMediaType:"string",items:"array",maxItems:"array",minItems:"array",uniqueItems:"array",maxProperties:"object",minProperties:"object",required:"object",additionalProperties:"object",unevaluatedProperties:"object",properties:"object",patternProperties:"object"};function Ve(e){if(void 0!==e.type&&!L(e.type))return e.type;const t=Object.keys(We);for(const n of t){const t=We[n];if(void 0!==e[n])return t}return"any"}function He(e,t){if(void 0===t&&(t=e.type),e["x-circular-ref"])return!0;if(void 0!==e.oneOf||void 0!==e.anyOf)return!1;if(e.if&&e.then||e.if&&e.else)return!1;let n=!0;const r=L(t);return("object"===t||r&&(null==t?void 0:t.includes("object")))&&(n=void 0!==e.properties?0===Object.keys(e.properties).length:void 0===e.additionalProperties&&void 0===e.unevaluatedProperties&&void 0===e.patternProperties),!L(e.items)&&!L(e.prefixItems)&&(void 0!==e.items&&!D(e.items)&&("array"===t||r&&(null==t?void 0:t.includes("array")))&&(n=He(e.items,e.items.type)),n)}function Je(e){return-1!==e.search(/json/i)}function Ye(e){return"application/x-www-form-urlencoded"===e}function Ze(e,t,n){return L(e)?e.map((e=>e.toString())).join(n):"object"==typeof e?Object.keys(e).map((t=>`${t}${n}${e[t]}`)).join(n):t+"="+e.toString()}function Ge(e,t){return L(e)?(console.warn("deepObject style cannot be used with array value:"+e.toString()),""):"object"==typeof e?Object.keys(e).map((n=>`${t}[${n}]=${e[n]}`)).join("&"):(console.warn("deepObject style cannot be used with non-object value:"+e.toString()),"")}function Xe(e,t,n){const r="__redoc_param_name__",o=t?"*":"";return Ae.parse(`{?${r}${o}}`).expand({[r]:n}).substring(1).replace(/__redoc_param_name__/g,e)}function Ke(e,t){if(void 0===t&&(t={}),L(e))throw new Error("Payload must have fields: "+e.toString());return Object.keys(e).map((n=>{const r=e[n],{style:o="form",explode:i=!0}=t[n]||{};switch(o){case"form":return Xe(n,i,r);case"spaceDelimited":return Ze(r,n,"%20");case"pipeDelimited":return Ze(r,n,"|");case"deepObject":return Ge(r,n);default:return console.warn("Incorrect or unsupported encoding style: "+o),""}})).join("&")}function et(e,t){return Je(t)?JSON.stringify(e):(console.warn(`Parameter serialization as ${t} is not supported`),"")}function tt(e,t){const{name:n,style:r,explode:o=!1,serializationMime:i}=e;if(i)switch(e.in){case"path":case"header":return et(t,i);case"cookie":case"query":return`${n}=${et(t,i)}`;default:return console.warn("Unexpected parameter location: "+e.in),""}if(!r)return console.warn(`Missing style attribute or content for parameter ${n}`),"";switch(e.in){case"path":return function(e,t,n,r){const o=n?"*":"";let i="";"label"===t?i=".":"matrix"===t&&(i=";");const s="__redoc_param_name__";return Ae.parse(`{${i}${s}${o}}`).expand({[s]:r}).replace(/__redoc_param_name__/g,e)}(n,r,o,t);case"query":return function(e,t,n,r){switch(t){case"form":return Xe(e,n,r);case"spaceDelimited":return L(r)?n?Xe(e,n,r):`${e}=${r.join("%20")}`:(console.warn("The style spaceDelimited is only applicable to arrays"),"");case"pipeDelimited":return L(r)?n?Xe(e,n,r):`${e}=${r.join("|")}`:(console.warn("The style pipeDelimited is only applicable to arrays"),"");case"deepObject":return!n||L(r)||"object"!=typeof r?(console.warn("The style deepObject is only applicable for objects with explode=true"),""):Ge(r,e);default:return console.warn("Unexpected style for query: "+t),""}}(n,r,o,t);case"header":return function(e,t,n){if("simple"===e){const e=t?"*":"",r="__redoc_param_name__",o=Ae.parse(`{${r}${e}}`);return decodeURIComponent(o.expand({[r]:n}))}return console.warn("Unexpected style for header: "+e),""}(r,o,t);case"cookie":return function(e,t,n,r){return"form"===t?Xe(e,n,r):(console.warn("Unexpected style for cookie: "+t),"")}(n,r,o,t);default:return console.warn("Unexpected parameter location: "+e.in),""}}function nt(e,t){return e.in?decodeURIComponent(tt(e,t)):t}function rt(e){return-1!==e.search(/xml/i)?"xml":-1!==e.search(/csv/i)?"csv":-1!==e.search(/plain/i)?"tex":"clike"}const ot=/^#\/components\/(schemas|pathItems)\/([^/]+)$/;function it(e){return ot.test(e||"")}function st(e){var t;const[n]=(null==(t=null==e?void 0:e.match(ot))?void 0:t.reverse())||[];return n}function at(e,t,n){let r;return void 0!==t&&void 0!==n?r=t===n?`= ${t} ${e}`:`[ ${t} .. ${n} ] ${e}`:void 0!==n?r=`<= ${n} ${e}`:void 0!==t&&(r=1===t?"non-empty":`>= ${t} ${e}`),r}function lt(e){var t,n;const r="number"==typeof e.exclusiveMinimum?Math.min(e.exclusiveMinimum,null!=(t=e.minimum)?t:1/0):e.minimum,o="number"==typeof e.exclusiveMaximum?Math.max(e.exclusiveMaximum,null!=(n=e.maximum)?n:-1/0):e.maximum,i="number"==typeof e.exclusiveMinimum||e.exclusiveMinimum,s="number"==typeof e.exclusiveMaximum||e.exclusiveMaximum;return void 0!==r&&void 0!==o?`${i?"( ":"[ "}${r} .. ${o}${s?" )":" ]"}`:void 0!==o?`${s?"< ":"<= "}${o}`:void 0!==r?`${i?"> ":">= "}${r}`:void 0}function ct(e){const t=[],n=at("characters",e.minLength,e.maxLength);void 0!==n&&t.push(n);const r=at("items",e.minItems,e.maxItems);void 0!==r&&t.push(r);const o=at("properties",e.minProperties,e.maxProperties);void 0!==o&&t.push(o);const i=function(e){if(void 0===e)return;const t=e.toString(10);return/^0\.0*1$/.test(t)?`decimal places <= ${t.split(".")[1].length}`:`multiple of ${t}`}(e.multipleOf);void 0!==i&&t.push(i);const s=lt(e);return void 0!==s&&t.push(s),e.uniqueItems&&t.push("unique"),t}function pt(e,t){void 0===t&&(t=[]);const n=[],r=[],o=[];return e.forEach((e=>{e.required?t.includes(e.name)?r.push(e):o.push(e):n.push(e)})),r.sort(((e,n)=>t.indexOf(e.name)-t.indexOf(n.name))),[].concat(r,o,n)}function ut(e,t){return a(e).sort(((e,n)=>e[t].localeCompare(n[t])))}function dt(e,t,n){void 0===t&&(t=[]),void 0===n&&(n=[]);const r={};return n.forEach((t=>{({resolved:t}=e.deref(t)),r[t.name+"_"+t.in]=!0})),(t=t.filter((t=>(({resolved:t}=e.deref(t)),!r[t.name+"_"+t.in])))).concat(n)}function ht(e){const t={};return Object.keys(e).forEach((n=>{const r=e[n],o=n.split(";")[0].trim();t[o]?t[o]=ze(ze({},t[o]),r):t[o]=r})),t}function mt(e,t){return void 0===t&&(t={}),e.replace(/(?:{)([\w-.]+)(?:})/g,((e,n)=>t[n]&&t[n].default||e))}function ft(e,t){const n=void 0===e?j((()=>{if(!u)return"";const e=window.location.href;return e.endsWith(".html")?(0,Ce.dirname)(e):e})()):(0,Ce.dirname)(e);return 0===t.length&&(t=[{url:"/"}]),t.map((e=>{return Me(ze({},e),{url:(t=e.url,C(n,t)),description:e.description||""});var t}))}const yt="SecurityDefinitions",gt="security-definitions",bt="SchemaDefinition";let xt="section/Authentication/";function vt(e){xt=e}const wt=e=>({delete:"del",options:"opts"}[e]||e);function kt(e){return e in{"x-circular-ref":!0,"x-parentRefs":!0,"x-refsStack":!0,"x-code-samples":!0,"x-codeSamples":!0,"x-displayName":!0,"x-examples":!0,"x-ignoredHeaderParameters":!0,"x-logo":!0,"x-nullable":!0,"x-servers":!0,"x-tagGroups":!0,"x-traitTag":!0,"x-additionalPropertiesName":!0,"x-explicitMappingOnly":!0}}function Ot(e,t){return Object.keys(e).filter((e=>!0===t?e.startsWith("x-")&&!kt(e):e.startsWith("x-")&&t.indexOf(e)>-1)).reduce(((t,n)=>(t[n]=e[n],t)),{})}function Et(e){return e.split(" or ").map((e=>e.replace(/^(string|object|number|integer|array|boolean)s?( ?.*)/,"$1s$2"))).join(" or ")}function St(e){let t=e.content;const n=e["x-examples"],r=e["x-example"];if(n){t=ze({},t);for(const e of Object.keys(n)){const r=n[e];t[e]=Me(ze({},t[e]),{examples:r})}}else if(r){t=ze({},t);for(const e of Object.keys(r)){const n=r[e];t[e]=Me(ze({},t[e]),{example:n})}}return t}var $t=n(28848);function Rt(e){return{json:"js","c++":"cpp","c#":"csharp","objective-c":"objectivec",shell:"bash",viml:"vim"}[e]||"clike"}function Ct(e,t){void 0===t&&(t="clike"),t=t.toLowerCase();let n=$t.languages[t];return n||(n=$t.languages[Rt(t)]),$t.highlight(e.toString(),n,t)}function At(e){return(t,n,r)=>{r.value=function(e,t){let n,r,o,i=null,s=0;const a=()=>{s=(new Date).getTime(),i=null,o=e.apply(n,r),i||(n=r=null)};return function(){const l=(new Date).getTime(),c=t-(l-s);return n=this,r=arguments,c<=0||c>t?(i&&(clearTimeout(i),i=null),s=l,o=e.apply(n,r),i||(n=r=null)):i||(i=setTimeout(a,c)),o}}(r.value,e)}}function Pt(e){}function jt(e){}n(57022),n(50271),n(75624),n(44511),n(72415),n(5651),n(86378),n(24784),n(96976),n(80064),n(19700),n(64312),n(20596),n(32821),n(43554),n(52342),n(84113),n(41648),n(64252),n(96966),n(54793),n(60083),n(62630),$t.languages.insertBefore("javascript","string",{"property string":{pattern:/([{,]\s*)"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,lookbehind:!0}},void 0),$t.languages.insertBefore("javascript","punctuation",{property:{pattern:/([{,]\s*)[a-z]\w*(?=\s*:)/i,lookbehind:!0}},void 0);var It=Object.defineProperty,Tt=Object.defineProperties,_t=Object.getOwnPropertyDescriptors,Lt=Object.getOwnPropertySymbols,Dt=Object.prototype.hasOwnProperty,zt=Object.prototype.propertyIsEnumerable,Mt=(e,t,n)=>t in e?It(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Nt=(e,t)=>{for(var n in t||(t={}))Dt.call(t,n)&&Mt(e,n,t[n]);if(Lt)for(var n of Lt(t))zt.call(t,n)&&Mt(e,n,t[n]);return e},Ft=(e,t)=>Tt(e,_t(t));const Bt={};function qt(e,t,n){if("function"==typeof n.value)return function(e,t,n){if(!n.value||n.value.length>0)throw new Error("@memoize decorator can only be applied to methods of zero arguments");const r=`_memoized_${t}`,o=n.value;return e[r]=Bt,Ft(Nt({},n),{value(){return this[r]===Bt&&(this[r]=o.call(this)),this[r]}})}(e,t,n);if("function"==typeof n.get)return function(e,t,n){const r=`_memoized_${t}`,o=n.get;return e[r]=Bt,Ft(Nt({},n),{get(){return this[r]===Bt&&(this[r]=o.call(this)),this[r]}})}(e,t,n);throw new Error("@memoize decorator can be applied to methods or getters, got "+String(n.value)+" instead")}function Qt(e){let t=1;return"-"===e[0]&&(t=-1,e=e.substr(1)),(n,r)=>-1==t?r[e].localeCompare(n[e]):n[e].localeCompare(r[e])}var Ut=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor;const Vt="hashchange";let Ht=function(){function e(){this.emit=()=>{this._emiter.emit(Vt,this.currentId)},this._emiter=new Ee.EventEmitter,this.bind()}var t=e.prototype;return t.linkForId=function(e){return e?"#"+e:""},t.subscribe=function(e){const t=this._emiter.addListener(Vt,e);return()=>t.removeListener(Vt,e)},t.bind=function(){u&&window.addEventListener("hashchange",this.emit,!1)},t.dispose=function(){u&&window.removeEventListener("hashchange",this.emit)},t.replace=function(e,t){void 0===t&&(t=!1),u&&null!=e&&e!==this.currentId&&(t?window.history.replaceState(null,"",window.location.href.split("#")[0]+this.linkForId(e)):(window.history.pushState(null,"",window.location.href.split("#")[0]+this.linkForId(e)),this.emit()))},o(e,[{key:"currentId",get:function(){return u?decodeURIComponent(window.location.hash.substring(1)):""}}]),e}();((e,t,n,r)=>{for(var o,i=Wt(t,n),s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(t,n,i)||i);i&&Ut(t,n,i)})([Oe.bind,Oe.debounce],Ht.prototype,"replace");const Jt=new Ht;var Yt=n(689);let Zt=function(){function e(){this.map=new Map,this.prevTerm=""}var t=e.prototype;return t.add=function(e){this.map.set(e,new Yt(e))},t.delete=function(e){this.map.delete(e)},t.addOnly=function(e){this.map.forEach(((t,n)=>{-1===e.indexOf(n)&&(t.unmark(),this.map.delete(n))}));for(const t of e)this.map.has(t)||this.map.set(t,new Yt(t))},t.clearAll=function(){this.unmark(),this.map.clear()},t.mark=function(e){(e||this.prevTerm)&&(this.map.forEach((t=>{t.unmark(),t.mark(e||this.prevTerm)})),this.prevTerm=e||this.prevTerm)},t.unmark=function(){this.map.forEach((e=>e.unmark())),this.prevTerm=""},e}(),Gt={baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const Xt=/[&<>"']/,Kt=/[&<>"']/g,en=/[<>"']|&(?!#?\w+;)/,tn=/[<>"']|&(?!#?\w+;)/g,nn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},rn=e=>nn[e];function on(e,t){if(t){if(Xt.test(e))return e.replace(Kt,rn)}else if(en.test(e))return e.replace(tn,rn);return e}const sn=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function an(e){return e.replace(sn,((e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const ln=/(^|[^\[])\^/g;function cn(e,t){e="string"==typeof e?e:e.source,t=t||"";const n={replace:(t,r)=>(r=(r=r.source||r).replace(ln,"$1"),e=e.replace(t,r),n),getRegex:()=>new RegExp(e,t)};return n}const pn=/[^\w:]/g,un=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function dn(e,t,n){if(e){let t;try{t=decodeURIComponent(an(n)).replace(pn,"").toLowerCase()}catch(e){return null}if(0===t.indexOf("javascript:")||0===t.indexOf("vbscript:")||0===t.indexOf("data:"))return null}t&&!un.test(n)&&(n=function(e,t){hn[" "+e]||(mn.test(e)?hn[" "+e]=e+"/":hn[" "+e]=vn(e,"/",!0));const n=-1===(e=hn[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(fn,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(yn,"$1")+t:e+t}(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n}const hn={},mn=/^[^:]+:\/*[^/]*$/,fn=/^([^:]+:)[\s\S]*$/,yn=/^([^:]+:\/*[^/]*)[\s\S]*$/,gn={exec:function(){}};function bn(e){let t,n,r=1;for(;r<arguments.length;r++)for(n in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function xn(e,t){const n=e.replace(/\|/g,((e,t,n)=>{let r=!1,o=t;for(;--o>=0&&"\\"===n[o];)r=!r;return r?"|":" |"})).split(/ \|/);let r=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n}function vn(e,t,n){const r=e.length;if(0===r)return"";let o=0;for(;o<r;){const i=e.charAt(r-o-1);if(i!==t||n){if(i===t||!n)break;o++}else o++}return e.slice(0,r-o)}function wn(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function kn(e,t){if(t<1)return"";let n="";for(;t>1;)1&t&&(n+=e),t>>=1,e+=e;return n+e}function On(e,t,n,r){const o=t.href,i=t.title?on(t.title):null,s=e[1].replace(/\\([\[\]])/g,"$1");if("!"!==e[0].charAt(0)){r.state.inLink=!0;const e={type:"link",raw:n,href:o,title:i,text:s,tokens:r.inlineTokens(s,[])};return r.state.inLink=!1,e}return{type:"image",raw:n,href:o,title:i,text:on(s)}}let En=function(){function e(e){this.options=e||Gt}var t=e.prototype;return t.space=function(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}},t.code=function(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:vn(e,"\n")}}},t.fences=function(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],n=function(e,t){const n=e.match(/^(\s+)(?:```)/);if(null===n)return t;const r=n[1];return t.split("\n").map((e=>{const t=e.match(/^\s+/);if(null===t)return e;const[n]=t;return n.length>=r.length?e.slice(r.length):e})).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim():t[2],text:n}}},t.heading=function(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){const t=vn(e,"#");this.options.pedantic?e=t.trim():t&&!/ $/.test(t)||(e=t.trim())}const n={type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:[]};return this.lexer.inline(n.text,n.tokens),n}},t.hr=function(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}},t.blockquote=function(e){const t=this.rules.block.blockquote.exec(e);if(t){const e=t[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(e,[]),text:e}}},t.list=function(e){let t=this.rules.block.list.exec(e);if(t){let n,r,o,i,s,a,l,c,p,u,d,h,m=t[1].trim();const f=m.length>1,y={type:"list",raw:"",ordered:f,start:f?+m.slice(0,-1):"",loose:!1,items:[]};m=f?`\\d{1,9}\\${m.slice(-1)}`:`\\${m}`,this.options.pedantic&&(m=f?m:"[*+-]");const g=new RegExp(`^( {0,3}${m})((?:[\t ][^\\n]*)?(?:\\n|$))`);for(;e&&(h=!1,t=g.exec(e))&&!this.rules.block.hr.test(e);){if(n=t[0],e=e.substring(n.length),c=t[2].split("\n",1)[0],p=e.split("\n",1)[0],this.options.pedantic?(i=2,d=c.trimLeft()):(i=t[2].search(/[^ ]/),i=i>4?1:i,d=c.slice(i),i+=t[1].length),a=!1,!c&&/^ *$/.test(p)&&(n+=p+"\n",e=e.substring(p.length+1),h=!0),!h){const t=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),r=new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);for(;e&&(u=e.split("\n",1)[0],c=u,this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!t.test(c))&&!r.test(e);){if(c.search(/[^ ]/)>=i||!c.trim())d+="\n"+c.slice(i);else{if(a)break;d+="\n"+c}a||c.trim()||(a=!0),n+=u+"\n",e=e.substring(u.length+1)}}y.loose||(l?y.loose=!0:/\n *\n *$/.test(n)&&(l=!0)),this.options.gfm&&(r=/^\[[ xX]\] /.exec(d),r&&(o="[ ] "!==r[0],d=d.replace(/^\[[ xX]\] +/,""))),y.items.push({type:"list_item",raw:n,task:!!r,checked:o,loose:!1,text:d}),y.raw+=n}y.items[y.items.length-1].raw=n.trimRight(),y.items[y.items.length-1].text=d.trimRight(),y.raw=y.raw.trimRight();const b=y.items.length;for(s=0;s<b;s++){this.lexer.state.top=!1,y.items[s].tokens=this.lexer.blockTokens(y.items[s].text,[]);const e=y.items[s].tokens.filter((e=>"space"===e.type)),t=e.every((e=>{const t=e.raw.split("");let n=0;for(const r of t)if("\n"===r&&(n+=1),n>1)return!0;return!1}));!y.loose&&e.length&&t&&(y.loose=!0,y.items[s].loose=!0)}return y}},t.html=function(e){const t=this.rules.block.html.exec(e);if(t){const e={type:"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:t[0]};return this.options.sanitize&&(e.type="paragraph",e.text=this.options.sanitizer?this.options.sanitizer(t[0]):on(t[0]),e.tokens=[],this.lexer.inline(e.text,e.tokens)),e}},t.def=function(e){const t=this.rules.block.def.exec(e);if(t)return t[3]&&(t[3]=t[3].substring(1,t[3].length-1)),{type:"def",tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}},t.table=function(e){const t=this.rules.block.table.exec(e);if(t){const e={type:"table",header:xn(t[1]).map((e=>({text:e}))),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let n,r,o,i,s=e.align.length;for(n=0;n<s;n++)/^ *-+: *$/.test(e.align[n])?e.align[n]="right":/^ *:-+: *$/.test(e.align[n])?e.align[n]="center":/^ *:-+ *$/.test(e.align[n])?e.align[n]="left":e.align[n]=null;for(s=e.rows.length,n=0;n<s;n++)e.rows[n]=xn(e.rows[n],e.header.length).map((e=>({text:e})));for(s=e.header.length,r=0;r<s;r++)e.header[r].tokens=[],this.lexer.inlineTokens(e.header[r].text,e.header[r].tokens);for(s=e.rows.length,r=0;r<s;r++)for(i=e.rows[r],o=0;o<i.length;o++)i[o].tokens=[],this.lexer.inlineTokens(i[o].text,i[o].tokens);return e}}},t.lheading=function(e){const t=this.rules.block.lheading.exec(e);if(t){const e={type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}},t.paragraph=function(e){const t=this.rules.block.paragraph.exec(e);if(t){const e={type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}},t.text=function(e){const t=this.rules.block.text.exec(e);if(t){const e={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}},t.escape=function(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:on(t[1])}},t.tag=function(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):on(t[0]):t[0]}},t.link=function(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const t=vn(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{const e=function(e,t){if(-1===e.indexOf(t[1]))return-1;const n=e.length;let r=0,o=0;for(;o<n;o++)if("\\"===e[o])o++;else if(e[o]===t[0])r++;else if(e[o]===t[1]&&(r--,r<0))return o;return-1}(t[2],"()");if(e>-1){const n=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=""}}let n=t[2],r="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):"";return n=n.trim(),/^</.test(n)&&(n=this.options.pedantic&&!/>$/.test(e)?n.slice(1):n.slice(1,-1)),On(t,{href:n?n.replace(this.rules.inline._escapes,"$1"):n,title:r?r.replace(this.rules.inline._escapes,"$1"):r},t[0],this.lexer)}},t.reflink=function(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=(n[2]||n[1]).replace(/\s+/g," ");if(e=t[e.toLowerCase()],!e||!e.href){const e=n[0].charAt(0);return{type:"text",raw:e,text:e}}return On(n,e,n[0],this.lexer)}},t.emStrong=function(e,t,n){void 0===n&&(n="");let r=this.rules.inline.emStrong.lDelim.exec(e);if(!r)return;if(r[3]&&n.match(/[\p{L}\p{N}]/u))return;const o=r[1]||r[2]||"";if(!o||o&&(""===n||this.rules.inline.punctuation.exec(n))){const n=r[0].length-1;let o,i,s=n,a=0;const l="*"===r[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(l.lastIndex=0,t=t.slice(-1*e.length+n);null!=(r=l.exec(t));){if(o=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!o)continue;if(i=o.length,r[3]||r[4]){s+=i;continue}if((r[5]||r[6])&&n%3&&!((n+i)%3)){a+=i;continue}if(s-=i,s>0)continue;if(i=Math.min(i,i+s+a),Math.min(n,i)%2){const t=e.slice(1,n+r.index+i);return{type:"em",raw:e.slice(0,n+r.index+i+1),text:t,tokens:this.lexer.inlineTokens(t,[])}}const t=e.slice(2,n+r.index+i-1);return{type:"strong",raw:e.slice(0,n+r.index+i+1),text:t,tokens:this.lexer.inlineTokens(t,[])}}}},t.codespan=function(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," ");const n=/[^ ]/.test(e),r=/^ /.test(e)&&/ $/.test(e);return n&&r&&(e=e.substring(1,e.length-1)),e=on(e,!0),{type:"codespan",raw:t[0],text:e}}},t.br=function(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}},t.del=function(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}},t.autolink=function(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let e,r;return"@"===n[2]?(e=on(this.options.mangle?t(n[1]):n[1]),r="mailto:"+e):(e=on(n[1]),r=e),{type:"link",raw:n[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}},t.url=function(e,t){let n;if(n=this.rules.inline.url.exec(e)){let e,r;if("@"===n[2])e=on(this.options.mangle?t(n[0]):n[0]),r="mailto:"+e;else{let t;do{t=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0]}while(t!==n[0]);e=on(n[0]),r="www."===n[1]?"http://"+e:e}return{type:"link",raw:n[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}},t.inlineText=function(e,t){const n=this.rules.inline.text.exec(e);if(n){let e;return e=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):on(n[0]):n[0]:on(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:e}}},e}();const Sn={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:gn,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};Sn.def=cn(Sn.def).replace("label",Sn._label).replace("title",Sn._title).getRegex(),Sn.bullet=/(?:[*+-]|\d{1,9}[.)])/,Sn.listItemStart=cn(/^( *)(bull) */).replace("bull",Sn.bullet).getRegex(),Sn.list=cn(Sn.list).replace(/bull/g,Sn.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+Sn.def.source+")").getRegex(),Sn._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Sn._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,Sn.html=cn(Sn.html,"i").replace("comment",Sn._comment).replace("tag",Sn._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Sn.paragraph=cn(Sn._paragraph).replace("hr",Sn.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Sn._tag).getRegex(),Sn.blockquote=cn(Sn.blockquote).replace("paragraph",Sn.paragraph).getRegex(),Sn.normal=bn({},Sn),Sn.gfm=bn({},Sn.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),Sn.gfm.table=cn(Sn.gfm.table).replace("hr",Sn.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Sn._tag).getRegex(),Sn.gfm.paragraph=cn(Sn._paragraph).replace("hr",Sn.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",Sn.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Sn._tag).getRegex(),Sn.pedantic=bn({},Sn.normal,{html:cn("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",Sn._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:gn,paragraph:cn(Sn.normal._paragraph).replace("hr",Sn.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",Sn.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const $n={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:gn,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:gn,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function Rn(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Cn(e){let t,n,r="";const o=e.length;for(t=0;t<o;t++)n=e.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),r+="&#"+n+";";return r}$n._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",$n.punctuation=cn($n.punctuation).replace(/punctuation/g,$n._punctuation).getRegex(),$n.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,$n.escapedEmSt=/\\\*|\\_/g,$n._comment=cn(Sn._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),$n.emStrong.lDelim=cn($n.emStrong.lDelim).replace(/punct/g,$n._punctuation).getRegex(),$n.emStrong.rDelimAst=cn($n.emStrong.rDelimAst,"g").replace(/punct/g,$n._punctuation).getRegex(),$n.emStrong.rDelimUnd=cn($n.emStrong.rDelimUnd,"g").replace(/punct/g,$n._punctuation).getRegex(),$n._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,$n._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,$n._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,$n.autolink=cn($n.autolink).replace("scheme",$n._scheme).replace("email",$n._email).getRegex(),$n._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,$n.tag=cn($n.tag).replace("comment",$n._comment).replace("attribute",$n._attribute).getRegex(),$n._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,$n._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,$n._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,$n.link=cn($n.link).replace("label",$n._label).replace("href",$n._href).replace("title",$n._title).getRegex(),$n.reflink=cn($n.reflink).replace("label",$n._label).replace("ref",Sn._label).getRegex(),$n.nolink=cn($n.nolink).replace("ref",Sn._label).getRegex(),$n.reflinkSearch=cn($n.reflinkSearch,"g").replace("reflink",$n.reflink).replace("nolink",$n.nolink).getRegex(),$n.normal=bn({},$n),$n.pedantic=bn({},$n.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:cn(/^!?\[(label)\]\((.*?)\)/).replace("label",$n._label).getRegex(),reflink:cn(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",$n._label).getRegex()}),$n.gfm=bn({},$n.normal,{escape:cn($n.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),$n.gfm.url=cn($n.gfm.url,"i").replace("email",$n.gfm._extended_email).getRegex(),$n.breaks=bn({},$n.gfm,{br:cn($n.br).replace("{2,}","*").getRegex(),text:cn($n.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});let An=function(){function e(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Gt,this.options.tokenizer=this.options.tokenizer||new En,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:Sn.normal,inline:$n.normal};this.options.pedantic?(t.block=Sn.pedantic,t.inline=$n.pedantic):this.options.gfm&&(t.block=Sn.gfm,this.options.breaks?t.inline=$n.breaks:t.inline=$n.gfm),this.tokenizer.rules=t}e.lex=function(t,n){return new e(n).lex(t)},e.lexInline=function(t,n){return new e(n).inlineTokens(t)};var t=e.prototype;return t.lex=function(e){let t;for(e=e.replace(/\r\n|\r/g,"\n"),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens},t.blockTokens=function(e,t){let n,r,o,i;for(void 0===t&&(t=[]),e=this.options.pedantic?e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e.replace(/^( *)(\t+)/gm,((e,t,n)=>t+"    ".repeat(n.length)));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((r=>!!(n=r.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))))if(n=this.tokenizer.space(e))e=e.substring(n.raw.length),1===n.raw.length&&t.length>0?t[t.length-1].raw+="\n":t.push(n);else if(n=this.tokenizer.code(e))e=e.substring(n.raw.length),r=t[t.length-1],!r||"paragraph"!==r.type&&"text"!==r.type?t.push(n):(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text);else if(n=this.tokenizer.fences(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.heading(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.hr(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.blockquote(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.list(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.html(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.def(e))e=e.substring(n.raw.length),r=t[t.length-1],!r||"paragraph"!==r.type&&"text"!==r.type?this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title}):(r.raw+="\n"+n.raw,r.text+="\n"+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text);else if(n=this.tokenizer.table(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.lheading(e))e=e.substring(n.raw.length),t.push(n);else{if(o=e,this.options.extensions&&this.options.extensions.startBlock){let t=1/0;const n=e.slice(1);let r;this.options.extensions.startBlock.forEach((function(e){r=e.call({lexer:this},n),"number"==typeof r&&r>=0&&(t=Math.min(t,r))})),t<1/0&&t>=0&&(o=e.substring(0,t+1))}if(this.state.top&&(n=this.tokenizer.paragraph(o)))r=t[t.length-1],i&&"paragraph"===r.type?(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n),i=o.length!==e.length,e=e.substring(n.raw.length);else if(n=this.tokenizer.text(e))e=e.substring(n.raw.length),r=t[t.length-1],r&&"text"===r.type?(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return this.state.top=!0,t},t.inline=function(e,t){this.inlineQueue.push({src:e,tokens:t})},t.inlineTokens=function(e,t){void 0===t&&(t=[]);let n,r,o,i,s,a,l=e;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(i=this.tokenizer.rules.inline.reflinkSearch.exec(l));)e.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,i.index)+"["+kn("a",i[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(i=this.tokenizer.rules.inline.blockSkip.exec(l));)l=l.slice(0,i.index)+"["+kn("a",i[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(i=this.tokenizer.rules.inline.escapedEmSt.exec(l));)l=l.slice(0,i.index)+"++"+l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(s||(a=""),s=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((r=>!!(n=r.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))))if(n=this.tokenizer.escape(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.tag(e))e=e.substring(n.raw.length),r=t[t.length-1],r&&"text"===n.type&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);else if(n=this.tokenizer.link(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(n.raw.length),r=t[t.length-1],r&&"text"===n.type&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);else if(n=this.tokenizer.emStrong(e,l,a))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.codespan(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.br(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.del(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.autolink(e,Cn))e=e.substring(n.raw.length),t.push(n);else if(this.state.inLink||!(n=this.tokenizer.url(e,Cn))){if(o=e,this.options.extensions&&this.options.extensions.startInline){let t=1/0;const n=e.slice(1);let r;this.options.extensions.startInline.forEach((function(e){r=e.call({lexer:this},n),"number"==typeof r&&r>=0&&(t=Math.min(t,r))})),t<1/0&&t>=0&&(o=e.substring(0,t+1))}if(n=this.tokenizer.inlineText(o,Rn))e=e.substring(n.raw.length),"_"!==n.raw.slice(-1)&&(a=n.raw.slice(-1)),s=!0,r=t[t.length-1],r&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}else e=e.substring(n.raw.length),t.push(n);return t},o(e,null,[{key:"rules",get:function(){return{block:Sn,inline:$n}}}]),e}(),Pn=function(){function e(e){this.options=e||Gt}var t=e.prototype;return t.code=function(e,t,n){const r=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,r);null!=t&&t!==e&&(n=!0,e=t)}return e=e.replace(/\n$/,"")+"\n",r?'<pre><code class="'+this.options.langPrefix+on(r,!0)+'">'+(n?e:on(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:on(e,!0))+"</code></pre>\n"},t.blockquote=function(e){return`<blockquote>\n${e}</blockquote>\n`},t.html=function(e){return e},t.heading=function(e,t,n,r){return this.options.headerIds?`<h${t} id="${this.options.headerPrefix+r.slug(n)}">${e}</h${t}>\n`:`<h${t}>${e}</h${t}>\n`},t.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},t.list=function(e,t,n){const r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"},t.listitem=function(e){return`<li>${e}</li>\n`},t.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},t.paragraph=function(e){return`<p>${e}</p>\n`},t.table=function(e,t){return t&&(t=`<tbody>${t}</tbody>`),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},t.tablerow=function(e){return`<tr>\n${e}</tr>\n`},t.tablecell=function(e,t){const n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>\n`},t.strong=function(e){return`<strong>${e}</strong>`},t.em=function(e){return`<em>${e}</em>`},t.codespan=function(e){return`<code>${e}</code>`},t.br=function(){return this.options.xhtml?"<br/>":"<br>"},t.del=function(e){return`<del>${e}</del>`},t.link=function(e,t,n){if(null===(e=dn(this.options.sanitize,this.options.baseUrl,e)))return n;let r='<a href="'+on(e)+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>",r},t.image=function(e,t,n){if(null===(e=dn(this.options.sanitize,this.options.baseUrl,e)))return n;let r=`<img src="${e}" alt="${n}"`;return t&&(r+=` title="${t}"`),r+=this.options.xhtml?"/>":">",r},t.text=function(e){return e},e}(),jn=function(){function e(){}var t=e.prototype;return t.strong=function(e){return e},t.em=function(e){return e},t.codespan=function(e){return e},t.del=function(e){return e},t.html=function(e){return e},t.text=function(e){return e},t.link=function(e,t,n){return""+n},t.image=function(e,t,n){return""+n},t.br=function(){return""},e}(),In=function(){function e(){this.seen={}}var t=e.prototype;return t.serialize=function(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")},t.getNextSafeSlug=function(e,t){let n=e,r=0;if(this.seen.hasOwnProperty(n)){r=this.seen[e];do{r++,n=e+"-"+r}while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=r,this.seen[n]=0),n},t.slug=function(e,t){void 0===t&&(t={});const n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)},e}(),Tn=function(){function e(e){this.options=e||Gt,this.options.renderer=this.options.renderer||new Pn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new jn,this.slugger=new In}e.parse=function(t,n){return new e(n).parse(t)},e.parseInline=function(t,n){return new e(n).parseInline(t)};var t=e.prototype;return t.parse=function(e,t){void 0===t&&(t=!0);let n,r,o,i,s,a,l,c,p,u,d,h,m,f,y,g,b,x,v,w="";const k=e.length;for(n=0;n<k;n++)if(u=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]&&(v=this.options.extensions.renderers[u.type].call({parser:this},u),!1!==v||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)))w+=v||"";else switch(u.type){case"space":continue;case"hr":w+=this.renderer.hr();continue;case"heading":w+=this.renderer.heading(this.parseInline(u.tokens),u.depth,an(this.parseInline(u.tokens,this.textRenderer)),this.slugger);continue;case"code":w+=this.renderer.code(u.text,u.lang,u.escaped);continue;case"table":for(c="",l="",i=u.header.length,r=0;r<i;r++)l+=this.renderer.tablecell(this.parseInline(u.header[r].tokens),{header:!0,align:u.align[r]});for(c+=this.renderer.tablerow(l),p="",i=u.rows.length,r=0;r<i;r++){for(a=u.rows[r],l="",s=a.length,o=0;o<s;o++)l+=this.renderer.tablecell(this.parseInline(a[o].tokens),{header:!1,align:u.align[o]});p+=this.renderer.tablerow(l)}w+=this.renderer.table(c,p);continue;case"blockquote":p=this.parse(u.tokens),w+=this.renderer.blockquote(p);continue;case"list":for(d=u.ordered,h=u.start,m=u.loose,i=u.items.length,p="",r=0;r<i;r++)y=u.items[r],g=y.checked,b=y.task,f="",y.task&&(x=this.renderer.checkbox(g),m?y.tokens.length>0&&"paragraph"===y.tokens[0].type?(y.tokens[0].text=x+" "+y.tokens[0].text,y.tokens[0].tokens&&y.tokens[0].tokens.length>0&&"text"===y.tokens[0].tokens[0].type&&(y.tokens[0].tokens[0].text=x+" "+y.tokens[0].tokens[0].text)):y.tokens.unshift({type:"text",text:x}):f+=x),f+=this.parse(y.tokens,m),p+=this.renderer.listitem(f,b,g);w+=this.renderer.list(p,d,h);continue;case"html":w+=this.renderer.html(u.text);continue;case"paragraph":w+=this.renderer.paragraph(this.parseInline(u.tokens));continue;case"text":for(p=u.tokens?this.parseInline(u.tokens):u.text;n+1<k&&"text"===e[n+1].type;)u=e[++n],p+="\n"+(u.tokens?this.parseInline(u.tokens):u.text);w+=t?this.renderer.paragraph(p):p;continue;default:{const e='Token with "'+u.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return w},t.parseInline=function(e,t){t=t||this.renderer;let n,r,o,i="";const s=e.length;for(n=0;n<s;n++)if(r=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]&&(o=this.options.extensions.renderers[r.type].call({parser:this},r),!1!==o||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)))i+=o||"";else switch(r.type){case"escape":case"text":i+=t.text(r.text);break;case"html":i+=t.html(r.text);break;case"link":i+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break;case"image":i+=t.image(r.href,r.title,r.text);break;case"strong":i+=t.strong(this.parseInline(r.tokens,t));break;case"em":i+=t.em(this.parseInline(r.tokens,t));break;case"codespan":i+=t.codespan(r.text);break;case"br":i+=t.br();break;case"del":i+=t.del(this.parseInline(r.tokens,t));break;default:{const e='Token with "'+r.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return i},e}();function _n(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(n=t,t=null),wn(t=bn({},_n.defaults,t||{})),n){const r=t.highlight;let o;try{o=An.lex(e,t)}catch(e){return n(e)}const i=function(e){let i;if(!e)try{t.walkTokens&&_n.walkTokens(o,t.walkTokens),i=Tn.parse(o,t)}catch(t){e=t}return t.highlight=r,e?n(e):n(null,i)};if(!r||r.length<3)return i();if(delete t.highlight,!o.length)return i();let s=0;return _n.walkTokens(o,(function(e){"code"===e.type&&(s++,setTimeout((()=>{r(e.text,e.lang,(function(t,n){if(t)return i(t);null!=n&&n!==e.text&&(e.text=n,e.escaped=!0),s--,0===s&&i()}))}),0))})),void(0===s&&i())}try{const n=An.lex(e,t);return t.walkTokens&&_n.walkTokens(n,t.walkTokens),Tn.parse(n,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+on(e.message+"",!0)+"</pre>";throw e}}_n.options=_n.setOptions=function(e){var t;return bn(_n.defaults,e),t=_n.defaults,Gt=t,_n},_n.getDefaults=function(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}},_n.defaults=Gt,_n.use=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const r=bn.apply(void 0,[{}].concat(t)),o=_n.defaults.extensions||{renderers:{},childTokens:{}};let i;t.forEach((e=>{if(e.extensions&&(i=!0,e.extensions.forEach((e=>{if(!e.name)throw new Error("extension name required");if(e.renderer){const t=o.renderers?o.renderers[e.name]:null;o.renderers[e.name]=t?function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];let i=e.renderer.apply(this,r);return!1===i&&(i=t.apply(this,r)),i}:e.renderer}if(e.tokenizer){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");o[e.level]?o[e.level].unshift(e.tokenizer):o[e.level]=[e.tokenizer],e.start&&("block"===e.level?o.startBlock?o.startBlock.push(e.start):o.startBlock=[e.start]:"inline"===e.level&&(o.startInline?o.startInline.push(e.start):o.startInline=[e.start]))}e.childTokens&&(o.childTokens[e.name]=e.childTokens)}))),e.renderer){const t=_n.defaults.renderer||new Pn;for(const n in e.renderer){const r=t[n];t[n]=function(){for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];let a=e.renderer[n].apply(t,i);return!1===a&&(a=r.apply(t,i)),a}}r.renderer=t}if(e.tokenizer){const t=_n.defaults.tokenizer||new En;for(const n in e.tokenizer){const r=t[n];t[n]=function(){for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];let a=e.tokenizer[n].apply(t,i);return!1===a&&(a=r.apply(t,i)),a}}r.tokenizer=t}if(e.walkTokens){const t=_n.defaults.walkTokens;r.walkTokens=function(n){e.walkTokens.call(this,n),t&&t.call(this,n)}}i&&(r.extensions=o),_n.setOptions(r)}))},_n.walkTokens=function(e,t){for(const n of e)switch(t.call(_n,n),n.type){case"table":for(const e of n.header)_n.walkTokens(e.tokens,t);for(const e of n.rows)for(const n of e)_n.walkTokens(n.tokens,t);break;case"list":_n.walkTokens(n.items,t);break;default:_n.defaults.extensions&&_n.defaults.extensions.childTokens&&_n.defaults.extensions.childTokens[n.type]?_n.defaults.extensions.childTokens[n.type].forEach((function(e){_n.walkTokens(n[e],t)})):n.tokens&&_n.walkTokens(n.tokens,t)}},_n.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");wn(t=bn({},_n.defaults,t||{}));try{const n=An.lexInline(e,t);return t.walkTokens&&_n.walkTokens(n,t.walkTokens),Tn.parseInline(n,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+on(e.message+"",!0)+"</pre>";throw e}},_n.Parser=Tn,_n.parser=Tn.parse,_n.Renderer=Pn,_n.TextRenderer=jn,_n.Lexer=An,_n.lexer=An.lex,_n.Tokenizer=En,_n.Slugger=In,_n.parse=_n,_n.options,_n.setOptions,_n.use,_n.walkTokens,_n.parseInline,Tn.parse,An.lex;var Ln=Object.defineProperty,Dn=Object.defineProperties,zn=Object.getOwnPropertyDescriptors,Mn=Object.getOwnPropertySymbols,Nn=Object.prototype.hasOwnProperty,Fn=Object.prototype.propertyIsEnumerable,Bn=(e,t,n)=>t in e?Ln(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,qn=(e,t)=>{for(var n in t||(t={}))Nn.call(t,n)&&Bn(e,n,t[n]);if(Mn)for(var n of Mn(t))Fn.call(t,n)&&Bn(e,n,t[n]);return e};const Qn=new _n.Renderer;_n.setOptions({renderer:Qn,highlight:(e,t)=>Ct(e,t)});const Un="^ {0,3}\x3c!-- ReDoc-Inject:\\s+?<({component}).*?/?>\\s+?--\x3e\\s*$",Wn="(?:^ {0,3}<({component})([\\s\\S]*?)>([\\s\\S]*?)</\\2>|^ {0,3}<({component})([\\s\\S]*?)(?:/>|\\n{2,}))",Vn="(?:"+Un+"|"+Wn+")";function Hn(e){return`\x3c!-- ReDoc-Inject: <${e}> --\x3e`}let Jn=function(){function e(e,t){this.options=e,this.parentId=t,this.headings=[],this.headingRule=(e,t,n,r)=>(1===t?this.currentTopHeading=this.saveHeading(e,t):2===t&&this.saveHeading(e,t,this.currentTopHeading&&this.currentTopHeading.items,this.currentTopHeading&&this.currentTopHeading.id),this.originalHeadingRule(e,t,n,r)),this.parentId=t,this.parser=new _n.Parser,this.headingEnhanceRenderer=new _n.Renderer,this.originalHeadingRule=this.headingEnhanceRenderer.heading.bind(this.headingEnhanceRenderer),this.headingEnhanceRenderer.heading=this.headingRule}e.containsComponent=function(e,t){return new RegExp(Vn.replace(/{component}/g,t),"gmi").test(e)},e.getTextBeforeHading=function(e,t){const n=e.search(new RegExp(`^##?\\s+${t}`,"m"));return n>-1?e.substring(0,n):e};var t=e.prototype;return t.saveHeading=function(e,t,n,r){void 0===n&&(n=this.headings),e=_(e);const o={id:r?`${r}/${$(e)}`:`${this.parentId||"section"}/${$(e)}`,name:e,level:t,items:[]};return n.push(o),o},t.flattenHeadings=function(e){if(void 0===e)return[];const t=[];for(const n of e)t.push(n),t.push.apply(t,a(this.flattenHeadings(n.items)));return t},t.attachHeadingsDescriptions=function(e){const t=e=>new RegExp(`##?\\s+${e.name.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}s*(\n|\r\n|$|s*)`),n=this.flattenHeadings(this.headings);if(n.length<1)return;let r=n[0],o=t(r),i=e.search(o);for(let s=1;s<n.length;s++){const a=n[s],l=t(a),c=e.substr(i+1).search(l)+i+1;r.description=e.substring(i,c).replace(o,"").trim(),r=a,o=l,i=c}r.description=e.substring(i).replace(o,"").trim()},t.renderMd=function(e,t){void 0===t&&(t=!1);const n=t?{renderer:this.headingEnhanceRenderer}:void 0;return _n(e.toString(),n)},t.extractHeadings=function(e){this.renderMd(e,!0),this.attachHeadingsDescriptions(e);const t=this.headings;return this.headings=[],t},t.renderMdWithComponents=function(e){const t=this.options&&this.options.allowedMdComponents;if(!t||0===Object.keys(t).length)return[this.renderMd(e)];const n=Object.keys(t).join("|"),r=new RegExp(Vn.replace(/{component}/g,n),"mig"),o=[],i=[];let s=r.exec(e),a=0;for(;s;){o.push(e.substring(a,s.index)),a=r.lastIndex;const n=t[s[1]||s[2]||s[5]],p=s[3]||s[6],u=s[4];n&&i.push({component:n.component,propsSelector:n.propsSelector,props:(l=qn(qn({},Yn(p)),n.props),c={children:u},Dn(l,zn(c)))}),s=r.exec(e)}var l,c;o.push(e.substring(a));const p=[];for(let u=0;u<o.length;u++){const e=o[u];e&&p.push(this.renderMd(e)),i[u]&&p.push(i[u])}return p},e}();function Yn(e){if(!e)return{};const t=/([\w-]+)\s*=\s*(?:{([^}]+?)}|"([^"]+?)")/gim,n={};let r;for(;null!==(r=t.exec(e));)if(r[3])n[r[1]]=r[3];else if(r[2]){let t;try{t=JSON.parse(r[2])}catch(e){}n[r[1]]=t}return n}let Zn=function(){function e(e,t){void 0===t&&(t=new Z({})),this.parser=e,this.options=t,Object.assign(this,e.spec.info),this.description=e.spec.info.description||"",this.summary=e.spec.info.summary||"";const n=this.description.search(/^\s*##?\s+/m);n>-1&&(this.description=this.description.substring(0,n)),this.downloadLink=this.getDownloadLink(),this.downloadFileName=this.getDownloadFileName()}var t=e.prototype;return t.getDownloadLink=function(){if(this.options.downloadDefinitionUrl)return this.options.downloadDefinitionUrl;if(this.parser.specUrl)return this.parser.specUrl;if(u&&window.Blob&&window.URL&&window.URL.createObjectURL){const e=new Blob([JSON.stringify(this.parser.spec,null,2)],{type:"application/json"});return window.URL.createObjectURL(e)}},t.getDownloadFileName=function(){return this.parser.specUrl||this.options.downloadDefinitionUrl?this.options.downloadFileName:this.options.downloadFileName||"openapi.json"},e}();var Gn=Object.defineProperty,Xn=Object.defineProperties,Kn=Object.getOwnPropertyDescriptors,er=Object.getOwnPropertySymbols,tr=Object.prototype.hasOwnProperty,nr=Object.prototype.propertyIsEnumerable,rr=(e,t,n)=>t in e?Gn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;let or=function(e,t){const n=t.spec.components&&t.spec.components.securitySchemes||{};this.schemes=Object.keys(e||{}).map((r=>{const{resolved:o}=t.deref(n[r]),i=e[r]||[];if(!o)return void console.warn(`Non existing security scheme referenced: ${r}. Skipping`);const s=o["x-displayName"]||r;return a=((e,t)=>{for(var n in t||(t={}))tr.call(t,n)&&rr(e,n,t[n]);if(er)for(var n of er(t))nr.call(t,n)&&rr(e,n,t[n]);return e})({},o),Xn(a,Kn({id:r,sectionId:r,displayName:s,scopes:i}));var a})).filter((e=>void 0!==e))};var ir=Object.defineProperty,sr=Object.defineProperties,ar=Object.getOwnPropertyDescriptor,lr=Object.getOwnPropertyDescriptors,cr=Object.getOwnPropertySymbols,pr=Object.prototype.hasOwnProperty,ur=Object.prototype.propertyIsEnumerable,dr=(e,t,n)=>t in e?ir(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,hr=(e,t)=>{for(var n in t||(t={}))pr.call(t,n)&&dr(e,n,t[n]);if(cr)for(var n of cr(t))ur.call(t,n)&&dr(e,n,t[n]);return e},mr=(e,t,n,r)=>{for(var o,i=r>1?void 0:r?ar(t,n):t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&ir(t,n,i),i};let fr=function(){function e(e,t,n,r,o){this.expanded=!1,this.operations=[],(0,ge.makeObservable)(this),this.name=t;const{resolved:i}=e.deref(n);for(const l of Object.keys(i)){const n=i[l],c=Object.keys(n).filter(Qe);for(const i of c){const c=n[i],p=new vo(e,(s=hr({},c),a={pathName:l,pointer:Re.compile([r,t,l,i]),httpVerb:i,pathParameters:n.parameters||[],pathServers:n.servers},sr(s,lr(a))),void 0,o,!0);this.operations.push(p)}}var s,a}return e.prototype.toggle=function(){this.expanded=!this.expanded},e}();mr([ge.observable],fr.prototype,"expanded",2),mr([ge.action],fr.prototype,"toggle",1);var yr=Object.defineProperty,gr=Object.defineProperties,br=Object.getOwnPropertyDescriptors,xr=Object.getOwnPropertySymbols,vr=Object.prototype.hasOwnProperty,wr=Object.prototype.propertyIsEnumerable,kr=(e,t,n)=>t in e?yr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Or=(e,t)=>{for(var n in t||(t={}))vr.call(t,n)&&kr(e,n,t[n]);if(xr)for(var n of xr(t))wr.call(t,n)&&kr(e,n,t[n]);return e},Er=(e,t)=>gr(e,br(t)),Sr=(e,t)=>{var n={};for(var r in e)vr.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&xr)for(var r of xr(e))t.indexOf(r)<0&&wr.call(e,r)&&(n[r]=e[r]);return n};function $r(e,t){return t&&e[e.length-1]!==t?[].concat(a(e),[t]):e}function Rr(e,t){return t?e.concat(t):e}let Cr=function(){function e(e,t,n){void 0===n&&(n=new Z({})),this.options=n,this.allowMergeRefs=!1,this.byRef=e=>{let t;if(this.spec){"#"!==e.charAt(0)&&(e="#"+e),e=decodeURIComponent(e);try{t=Re.get(this.spec,e)}catch(e){}return t||{}}},this.validate(e),this.spec=e,this.allowMergeRefs=e.openapi.startsWith("3.1");const r=u?window.location.href:"";"string"==typeof t&&(this.specUrl=r?new URL(t,r).href:t)}var t=e.prototype;return t.validate=function(e){if(void 0===e.openapi)throw new Error("Document must be valid OpenAPI 3.0.0 definition")},t.isRef=function(e){return!!e&&void 0!==e.$ref&&null!==e.$ref},t.deref=function(e,t,n){void 0===t&&(t=[]),void 0===n&&(n=!1);const r=null==e?void 0:e["x-refsStack"];if(t=Rr(t,r),this.isRef(e)){const r=st(e.$ref);if(r&&this.options.ignoreNamedSchemas.has(r))return{resolved:{type:"object",title:r},refsStack:t};let o=this.byRef(e.$ref);if(!o)throw new Error(`Failed to resolve $ref "${e.$ref}"`);let i=t;if(t.includes(e.$ref)||t.length>999)o=Object.assign({},o,{"x-circular-ref":!0});else if(this.isRef(o)){const e=this.deref(o,t,n);i=e.refsStack,o=e.resolved}return i=$r(t,e.$ref),o=this.allowMergeRefs?this.mergeRefs(e,o,n):o,{resolved:o,refsStack:i}}return{resolved:e,refsStack:Rr(t,r)}},t.mergeRefs=function(e,t,n){const r=e,{$ref:o}=r,i=Sr(r,["$ref"]),s=Object.keys(i);if(0===s.length)return t;if(n&&s.some((e=>!["description","title","externalDocs","x-refsStack","x-parentRefs","readOnly","writeOnly"].includes(e)))){const e=i,{description:n,title:r,readOnly:o,writeOnly:s}=e;return{allOf:[{description:n,title:r,readOnly:o,writeOnly:s},t,Sr(e,["description","title","readOnly","writeOnly"])]}}return Or(Or({},t),i)},t.mergeAllOf=function(e,t,n){var r;if(e["x-circular-ref"])return e;if(void 0===(e=this.hoistOneOfs(e,n)).allOf)return e;let o=Er(Or({},e),{"x-parentRefs":[],allOf:void 0,title:e.title||st(t)});void 0!==o.properties&&"object"==typeof o.properties&&(o.properties=Or({},o.properties)),void 0!==o.items&&"object"==typeof o.items&&(o.items=Or({},o.items));const i=function(e,t){const n=new Set;return e.filter((e=>{const t=e.$ref;return!t||t&&!n.has(t)&&n.add(t)}))}(e.allOf.map((e=>{var t,r;const{resolved:i,refsStack:s}=this.deref(e,n,!0),l=e.$ref||void 0,c=this.mergeAllOf(i,l,s);if(!c["x-circular-ref"]||!c.allOf)return l&&(null==(r=o["x-parentRefs"])||(t=r).push.apply(t,a(c["x-parentRefs"]||[]).concat([l]))),{$ref:l,refsStack:$r(s,l),schema:c}})).filter((e=>void 0!==e)));for(const{schema:s,refsStack:l}of i){const e=s,{type:n,enum:i,properties:c,items:p,required:u,title:d,description:h,readOnly:m,writeOnly:f,oneOf:y,anyOf:g,"x-circular-ref":b}=e,x=Sr(e,["type","enum","properties","items","required","title","description","readOnly","writeOnly","oneOf","anyOf","x-circular-ref"]);if(o.type!==n&&void 0!==o.type&&void 0!==n&&console.warn(`Incompatible types in allOf at "${t}": "${o.type}" and "${n}"`),void 0!==n&&(Array.isArray(n)&&Array.isArray(o.type)?o.type=[].concat(a(n),a(o.type)):o.type=n),void 0!==i&&(Array.isArray(i)&&Array.isArray(o.enum)?o.enum=Array.from(new Set([].concat(a(i),a(o.enum)))):o.enum=i),void 0!==c&&"object"==typeof c){o.properties=o.properties||{};for(const e in c){const n=Rr(l,null==(r=c[e])?void 0:r["x-refsStack"]);if(o.properties[e]){if(!b){const r=this.mergeAllOf({allOf:[o.properties[e],Er(Or({},c[e]),{"x-refsStack":n})],"x-refsStack":n},t+"/properties/"+e,n);o.properties[e]=r}}else o.properties[e]=Er(Or({},c[e]),{"x-refsStack":n})}}if(void 0!==p&&!b){const e="boolean"==typeof o.items?{}:Object.assign({},o.items),n="boolean"==typeof s.items?{}:Object.assign({},s.items);o.items=this.mergeAllOf({allOf:[e,n]},t+"/items",l)}void 0!==y&&(o.oneOf=y),void 0!==g&&(o.anyOf=g),void 0!==u&&(o.required=[].concat(a(o.required||[]),a(u))),o=Or(Er(Or({},o),{title:o.title||d,description:o.description||h,readOnly:void 0!==o.readOnly?o.readOnly:m,writeOnly:void 0!==o.writeOnly?o.writeOnly:f,"x-circular-ref":o["x-circular-ref"]||b}),x)}return o},t.findDerived=function(e){const t={},n=this.spec.components&&this.spec.components.schemas||{};for(const r in n){const{resolved:o}=this.deref(n[r]);void 0!==o.allOf&&o.allOf.find((t=>void 0!==t.$ref&&e.indexOf(t.$ref)>-1))&&(t["#/components/schemas/"+r]=[o["x-discriminator-value"]||r])}return t},t.hoistOneOfs=function(e,t){if(void 0===e.allOf)return e;const n=e.allOf;for(let r=0;r<n.length;r++){const e=n[r];if(Array.isArray(e.oneOf)){const o=n.slice(0,r),i=n.slice(r+1);return{oneOf:e.oneOf.map((e=>({allOf:[].concat(a(o),[e],a(i)),"x-refsStack":t})))}}}return e},e}();var Ar=Object.defineProperty,Pr=Object.defineProperties,jr=Object.getOwnPropertyDescriptor,Ir=Object.getOwnPropertyDescriptors,Tr=Object.getOwnPropertySymbols,_r=Object.prototype.hasOwnProperty,Lr=Object.prototype.propertyIsEnumerable,Dr=(e,t,n)=>t in e?Ar(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,zr=(e,t)=>{for(var n in t||(t={}))_r.call(t,n)&&Dr(e,n,t[n]);if(Tr)for(var n of Tr(t))Lr.call(t,n)&&Dr(e,n,t[n]);return e},Mr=(e,t)=>Pr(e,Ir(t)),Nr=(e,t,n,r)=>{for(var o,i=r>1?void 0:r?jr(t,n):t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Ar(t,n,i),i};const Fr=function(){function e(e,t,n,r,o,i){void 0===o&&(o=!1),void 0===i&&(i=[]),this.options=r,this.refsStack=i,this.typePrefix="",this.isCircular=!1,this.activeOneOf=0,(0,ge.makeObservable)(this),this.pointer=t.$ref||n||"";const{resolved:s,refsStack:a}=e.deref(t,i,!0);this.refsStack=$r(a,this.pointer),this.rawSchema=s,this.schema=e.mergeAllOf(this.rawSchema,this.pointer,this.refsStack),this.init(e,o),r.showExtensions&&(this.extensions=Ot(this.schema,r.showExtensions))}var t=e.prototype;return t.activateOneOf=function(e){this.activeOneOf=e},t.hasType=function(e){return this.type===e||L(this.type)&&this.type.includes(e)},t.init=function(t,n){var r,o,i,s,l,c,p,u;const d=this.schema;if(this.isCircular=!!d["x-circular-ref"],this.title=d.title||it(this.pointer)&&Re.baseName(this.pointer)||"",this.description=d.description||"",this.type=d.type||Ve(d),this.format=d.format,this.enum=d.enum||[],this.example=d.example,this.examples=d.examples,this.deprecated=!!d.deprecated,this.pattern=d.pattern,this.externalDocs=d.externalDocs,this.constraints=ct(d),this.displayFormat=this.format,this.isPrimitive=He(d,this.type),this.default=d.default,this.readOnly=!!d.readOnly,this.writeOnly=!!d.writeOnly,this.const=d.const||"",this.contentEncoding=d.contentEncoding,this.contentMediaType=d.contentMediaType,this.minItems=d.minItems,this.maxItems=d.maxItems,(d.nullable||d["x-nullable"])&&(L(this.type)&&!this.type.some((e=>null===e||"null"===e))?this.type=[].concat(a(this.type),["null"]):L(this.type)||null===this.type&&"null"===this.type||(this.type=[this.type,"null"])),this.displayType=L(this.type)?this.type.map((e=>null===e?"null":e)).join(" or "):this.type,!this.isCircular)if(d.if&&d.then||d.if&&d.else)this.initConditionalOperators(d,t);else if(n||void 0===Qr(d)){if(n&&L(d.oneOf)&&d.oneOf.find((e=>e.$ref===this.pointer))&&delete d.oneOf,void 0!==d.oneOf)return this.initOneOf(d.oneOf,t),this.oneOfType="One of",void(void 0!==d.anyOf&&console.warn(`oneOf and anyOf are not supported on the same level. Skipping anyOf at ${this.pointer}`));if(void 0!==d.anyOf)return this.initOneOf(d.anyOf,t),void(this.oneOfType="Any of");if(this.hasType("object"))this.fields=qr(t,d,this.pointer,this.options,this.refsStack);else if(this.hasType("array")&&(L(d.items)||L(d.prefixItems)?this.fields=qr(t,d,this.pointer,this.options,this.refsStack):d.items&&(this.items=new e(t,d.items,this.pointer+"/items",this.options,!1,this.refsStack)),this.displayType=d.prefixItems||L(d.items)?"items":Et((null==(r=this.items)?void 0:r.displayType)||this.displayType),this.displayFormat=(null==(o=this.items)?void 0:o.format)||"",this.typePrefix=(null==(i=this.items)?void 0:i.typePrefix)||""+M("arrayOf"),this.title=this.title||(null==(s=this.items)?void 0:s.title)||"",this.isPrimitive=void 0!==(null==(l=this.items)?void 0:l.isPrimitive)?null==(c=this.items)?void 0:c.isPrimitive:this.isPrimitive,void 0===this.example&&void 0!==(null==(p=this.items)?void 0:p.example)&&(this.example=[this.items.example]),(null==(u=this.items)?void 0:u.isPrimitive)&&(this.enum=this.items.enum),L(this.type))){const e=this.type.filter((e=>"array"!==e));e.length&&(this.displayType+=` or ${e.join(" or ")}`)}this.enum.length&&this.options.sortEnumValuesAlphabetically&&this.enum.sort()}else this.initDiscriminator(d,t)},t.initOneOf=function(t,n){if(this.oneOf=t.map(((t,r)=>{const{resolved:o,refsStack:i}=n.deref(t,this.refsStack,!0),s=n.mergeAllOf(o,this.pointer+"/oneOf/"+r,i),a=it(t.$ref)&&!s.title?Re.baseName(t.$ref):`${s.title||""}${s.const&&JSON.stringify(s.const)||""}`;return new e(n,Mr(zr({},s),{title:a,allOf:[Mr(zr({},this.schema),{oneOf:void 0,anyOf:void 0})],discriminator:o.allOf?void 0:s.discriminator}),t.$ref||this.pointer+"/oneOf/"+r,this.options,!1,i)})),this.options.simpleOneOfTypeLabel){const e=function(e){const t=new Set;return function e(n){for(const r of n.oneOf||[])r.oneOf?e(r):r.type&&t.add(r.type)}(e),Array.from(t.values())}(this);this.displayType=e.join(" or ")}else this.displayType=this.oneOf.map((e=>{let t=e.typePrefix+(e.title?`${e.title} (${e.displayType})`:e.displayType);return t.indexOf(" or ")>-1&&(t=`(${t})`),t})).join(" or ")},t.initDiscriminator=function(t,n){const r=Qr(t);this.discriminatorProp=r.propertyName;const o=n.findDerived([].concat(a(this.schema["x-parentRefs"]||[]),[this.pointer]));if(t.oneOf)for(const e of t.oneOf){if(void 0===e.$ref)continue;const t=Re.baseName(e.$ref);o[e.$ref]=t}const i=r.mapping||{};let s=r["x-explicitMappingOnly"]||!1;0===Object.keys(i).length&&(s=!1);const l={};for(const e in i){const t=i[e];L(l[t])?l[t].push(e):l[t]=[e]}const c=zr(s?{}:zr({},o),l);let p=[];for(const e of Object.keys(c)){const t=c[e];if(L(t))for(const n of t)p.push({$ref:e,name:n});else p.push({$ref:e,name:t})}const u=Object.keys(i);0!==u.length&&(p=p.sort(((e,t)=>{const n=u.indexOf(e.name),r=u.indexOf(t.name);return n<0&&r<0?e.name.localeCompare(t.name):n<0?1:r<0?-1:n-r}))),this.oneOf=p.map((t=>{let{$ref:r,name:o}=t;const i=new e(n,{$ref:r},r,this.options,!0,this.refsStack.slice(0,-1));return i.title=o,i}))},t.initConditionalOperators=function(t,n){const r=t,{if:o,else:i={},then:s={}}=r,a=((e,t)=>{var n={};for(var r in e)_r.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&Tr)for(var r of Tr(e))t.indexOf(r)<0&&Lr.call(e,r)&&(n[r]=e[r]);return n})(r,["if","else","then"]),l=[{allOf:[a,s,o],title:o&&o["x-displayName"]||(null==o?void 0:o.title)||"case 1"},{allOf:[a,i],title:i&&i["x-displayName"]||(null==i?void 0:i.title)||"case 2"}];this.oneOf=l.map(((t,r)=>new e(n,zr({},t),this.pointer+"/oneOf/"+r,this.options,!1,this.refsStack))),this.oneOfType="One of"},e}();let Br=Fr;function qr(e,t,n,r,o){var i,s;const l=t.properties||t.prefixItems||t.items||{},c=t.patternProperties||{},p=t.additionalProperties||t.unevaluatedProperties,u=t.prefixItems?t.items:t.additionalItems,d=t.default;let h=Object.keys(l||[]).map((i=>{let s=l[i];s||(console.warn(`Field "${i}" is invalid, skipping.\n Field must be an object but got ${typeof s} at "${n}"`),s={});const a=void 0!==t.required&&t.required.indexOf(i)>-1;return new Zr(e,{name:t.properties?i:`[${i}]`,required:a,schema:Mr(zr({},s),{default:void 0===s.default&&d?d[i]:s.default})},n+"/properties/"+i,r,o)}));return r.sortPropsAlphabetically&&(h=ut(h,"name")),r.requiredPropsFirst&&(h=pt(h,r.sortPropsAlphabetically?void 0:t.required)),(i=h).push.apply(i,a(Object.keys(c).map((t=>{let i=c[t];return i||(console.warn(`Field "${t}" is invalid, skipping.\n Field must be an object but got ${typeof i} at "${n}"`),i={}),new Zr(e,{name:t,required:!1,schema:i,kind:"patternProperties"},`${n}/patternProperties/${t}`,r,o)})))),"object"!=typeof p&&!0!==p||h.push(new Zr(e,{name:("object"==typeof p&&p["x-additionalPropertiesName"]||"property name").concat("*"),required:!1,schema:!0===p?{}:p,kind:"additionalProperties"},n+"/additionalProperties",r,o)),(s=h).push.apply(s,a(function(e){let{parser:t,schema:n=!1,fieldsCount:r,$ref:o,options:i,refsStack:s}=e;return D(n)?n?[new Zr(t,{name:`[${r}...]`,schema:{}},`${o}/additionalItems`,i,s)]:[]:L(n)?a(n.map(((e,n)=>new Zr(t,{name:`[${r+n}]`,schema:e},`${o}/additionalItems`,i,s)))):E(n)?[new Zr(t,{name:`[${r}...]`,schema:n},`${o}/additionalItems`,i,s)]:[]}({parser:e,schema:u,fieldsCount:h.length,$ref:n,options:r,refsStack:o}))),h}function Qr(e){return e.discriminator||e["x-discriminator"]}Nr([ge.observable],Br.prototype,"activeOneOf",2),Nr([ge.action],Br.prototype,"activateOneOf",1);const Ur={};let Wr=function(){function e(e,t,n,r){this.mime=n;const{resolved:o}=e.deref(t);this.value=o.value,this.summary=o.summary,this.description=o.description,o.externalValue&&(this.externalValueUrl=new URL(o.externalValue,e.specUrl).href),Ye(n)&&this.value&&"object"==typeof this.value&&(this.value=Ke(this.value,r))}return e.prototype.getExternalValue=function(e){return this.externalValueUrl?(this.externalValueUrl in Ur||(Ur[this.externalValueUrl]=fetch(this.externalValueUrl).then((t=>t.text().then((n=>{if(!t.ok)return Promise.reject(new Error(n));if(!Je(e))return n;try{return JSON.parse(n)}catch(e){return n}}))))),Ur[this.externalValueUrl]):Promise.resolve(void 0)},e}();var Vr=Object.defineProperty,Hr=Object.getOwnPropertyDescriptor,Jr=(e,t,n,r)=>{for(var o,i=r>1?void 0:r?Hr(t,n):t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Vr(t,n,i),i};const Yr={path:{style:"simple",explode:!1},query:{style:"form",explode:!0},header:{style:"simple",explode:!1},cookie:{style:"form",explode:!0}};let Zr=function(){function e(e,t,n,r,o){var i,s,a,l,c;this.expanded=void 0,(0,ge.makeObservable)(this);const{resolved:p}=e.deref(t);this.kind=t.kind||"field",this.name=t.name||p.name,this.in=p.in,this.required=!!p.required;let u=p.schema,d="";if(!u&&p.in&&p.content&&(d=Object.keys(p.content)[0],u=p.content[d]&&p.content[d].schema),this.schema=new Br(e,u||{},n,r,!1,o),this.description=void 0===p.description?this.schema.description||"":p.description,this.example=p.example||this.schema.example,void 0!==p.examples||void 0!==this.schema.examples){const t=p.examples||this.schema.examples;this.examples=L(t)?t:b(t,((t,n)=>new Wr(e,t,n,p.encoding)))}d?this.serializationMime=d:p.style?this.style=p.style:this.in&&(this.style=null!=(s=null==(i=Yr[this.in])?void 0:i.style)?s:"form"),void 0===p.explode&&this.in?this.explode=null==(l=null==(a=Yr[this.in])?void 0:a.explode)||l:this.explode=!!p.explode,this.deprecated=void 0===p.deprecated?!!this.schema.deprecated:p.deprecated,r.showExtensions&&(this.extensions=Ot(p,r.showExtensions)),this.const=(null==(c=this.schema)?void 0:c.const)||(null==p?void 0:p.const)||""}var t=e.prototype;return t.toggle=function(){this.expanded=!this.expanded},t.collapse=function(){this.expanded=!1},t.expand=function(){this.expanded=!0},e}();Jr([ge.observable],Zr.prototype,"expanded",2),Jr([ge.action],Zr.prototype,"toggle",1),Jr([ge.action],Zr.prototype,"collapse",1),Jr([ge.action],Zr.prototype,"expand",1);var Gr=n(54632);let Xr=function(){function e(e,t,n,r,o){this.name=t,this.isRequestType=n,this.schema=r.schema&&new Br(e,r.schema,"",o),this.onlyRequiredInSamples=o.onlyRequiredInSamples,this.generatedPayloadSamplesMaxDepth=o.generatedPayloadSamplesMaxDepth,void 0!==r.examples?this.examples=b(r.examples,(n=>new Wr(e,n,t,r.encoding))):void 0!==r.example?this.examples={default:new Wr(e,{value:e.deref(r.example).resolved},t,r.encoding)}:Je(t)&&this.generateExample(e,r)}return e.prototype.generateExample=function(e,t){const n={skipReadOnly:this.isRequestType,skipWriteOnly:!this.isRequestType,skipNonRequired:this.isRequestType&&this.onlyRequiredInSamples,maxSampleDepth:this.generatedPayloadSamplesMaxDepth};if(this.schema&&this.schema.oneOf){this.examples={};for(const r of this.schema.oneOf){const o=Gr.sample(r.rawSchema,n,e.spec);this.schema.discriminatorProp&&"object"==typeof o&&o&&(o[this.schema.discriminatorProp]=r.title),this.examples[r.title]=new Wr(e,{value:o},this.name,t.encoding)}}else this.schema&&(this.examples={default:new Wr(e,{value:Gr.sample(t.schema,n,e.spec)},this.name,t.encoding)})},e}();var Kr=Object.defineProperty,eo=Object.getOwnPropertyDescriptor,to=(e,t,n,r)=>{for(var o,i=r>1?void 0:r?eo(t,n):t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Kr(t,n,i),i};let no=function(){function e(e,t,n,r){this.isRequestType=n,this.activeMimeIdx=0,(0,ge.makeObservable)(this),r.unstable_ignoreMimeParameters&&(t=ht(t)),this.mediaTypes=Object.keys(t).map((o=>{const i=t[o];return new Xr(e,o,n,i,r)}))}return e.prototype.activate=function(e){this.activeMimeIdx=e},o(e,[{key:"active",get:function(){return this.mediaTypes[this.activeMimeIdx]}},{key:"hasSample",get:function(){return this.mediaTypes.filter((e=>!!e.examples)).length>0}}]),e}();to([ge.observable],no.prototype,"activeMimeIdx",2),to([ge.action],no.prototype,"activate",1),to([ge.computed],no.prototype,"active",1);let ro=function(e){let{parser:t,infoOrRef:n,options:r,isEvent:o}=e;const i=!o,{resolved:s}=t.deref(n);this.description=s.description||"",this.required=!!s.required;const a=St(s);void 0!==a&&(this.content=new no(t,a,i,r))};var oo=Object.defineProperty,io=Object.defineProperties,so=Object.getOwnPropertyDescriptor,ao=Object.getOwnPropertyDescriptors,lo=Object.getOwnPropertySymbols,co=Object.prototype.hasOwnProperty,po=Object.prototype.propertyIsEnumerable,uo=(e,t,n)=>t in e?oo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ho=(e,t,n,r)=>{for(var o,i=r>1?void 0:r?so(t,n):t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&oo(t,n,i),i};let mo=function(){function e(e){let{parser:t,code:n,defaultAsError:r,infoOrRef:o,options:i,isEvent:s}=e;this.expanded=!1,this.headers=[],(0,ge.makeObservable)(this),this.expanded="all"===i.expandResponses||i.expandResponses[n];const{resolved:a}=t.deref(o);this.code=n,void 0!==a.content&&(this.content=new no(t,a.content,s,i)),void 0!==a["x-summary"]?(this.summary=a["x-summary"],this.description=a.description||""):(this.summary=a.description||"",this.description=""),this.type=Be(n,r);const l=a.headers;void 0!==l&&(this.headers=Object.keys(l).map((e=>{const n=l[e];return new Zr(t,(r=((e,t)=>{for(var n in t||(t={}))co.call(t,n)&&uo(e,n,t[n]);if(lo)for(var n of lo(t))po.call(t,n)&&uo(e,n,t[n]);return e})({},n),io(r,ao({name:e}))),"",i);var r}))),i.showExtensions&&(this.extensions=Ot(a,i.showExtensions))}return e.prototype.toggle=function(){this.expanded=!this.expanded},e}();ho([ge.observable],mo.prototype,"expanded",2),ho([ge.action],mo.prototype,"toggle",1);var fo=Object.defineProperty,yo=Object.getOwnPropertyDescriptor,go=(e,t,n,r)=>{for(var o,i=r>1?void 0:r?yo(t,n):t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&fo(t,n,i),i};function bo(e){return"payload"===e.lang&&e.requestBodyContent}let xo=!1,vo=function(){function e(e,t,n,r,o){void 0===o&&(o=!1),this.parser=e,this.operationSpec=t,this.options=r,this.type="operation",this.items=[],this.ready=!0,this.active=!1,this.expanded=!1,(0,ge.makeObservable)(this),this.pointer=t.pointer,this.description=t.description,this.parent=n,this.externalDocs=t.externalDocs,this.deprecated=!!t.deprecated,this.httpVerb=t.httpVerb,this.deprecated=!!t.deprecated,this.operationId=t.operationId,this.path=t.pathName,this.isCallback=o,this.isWebhook=t.isWebhook,this.isEvent=this.isCallback||this.isWebhook,this.name=Ue(t),this.sidebarLabel=r.sideNavStyle===N.IdOnly?this.operationId||this.path:r.sideNavStyle===N.PathOnly?this.path:this.name,this.isCallback?(this.security=(t.security||[]).map((t=>new or(t,e))),this.servers=ft("",t.servers||t.pathServers||[])):(this.operationHash=t.operationId&&"operation/"+t.operationId,this.id=void 0!==t.operationId?(n?n.id+"/":"")+this.operationHash:void 0!==n?n.id+this.pointer:this.pointer,this.security=(t.security||e.spec.security||[]).map((t=>new or(t,e))),this.servers=ft(e.specUrl,t.servers||t.pathServers||e.spec.servers||[])),r.showExtensions&&(this.extensions=Ot(t,r.showExtensions))}var t=e.prototype;return t.activate=function(){this.active=!0},t.deactivate=function(){this.active=!1},t.toggle=function(){this.expanded=!this.expanded},t.expand=function(){this.parent&&this.parent.expand()},t.collapse=function(){},o(e,[{key:"requestBody",get:function(){return this.operationSpec.requestBody&&new ro({parser:this.parser,infoOrRef:this.operationSpec.requestBody,options:this.options,isEvent:this.isEvent})}},{key:"codeSamples",get:function(){let e=this.operationSpec["x-codeSamples"]||this.operationSpec["x-code-samples"]||[];this.operationSpec["x-code-samples"]&&!xo&&(xo=!0,console.warn('"x-code-samples" is deprecated. Use "x-codeSamples" instead'));const t=this.requestBody&&this.requestBody.content;if(t&&t.hasSample){const n=Math.min(e.length,this.options.payloadSampleIdx);e=[].concat(a(e.slice(0,n)),[{lang:"payload",label:"Payload",source:"",requestBodyContent:t}],a(e.slice(n)))}return e}},{key:"parameters",get:function(){const e=dt(this.parser,this.operationSpec.pathParameters,this.operationSpec.parameters).map((e=>new Zr(this.parser,e,this.pointer,this.options)));return this.options.sortPropsAlphabetically?ut(e,"name"):this.options.requiredPropsFirst?pt(e):e}},{key:"responses",get:function(){let e=!1;return Object.keys(this.operationSpec.responses||[]).filter((t=>"default"===t||("success"===Be(t)&&(e=!0),Fe(t)))).map((t=>new mo({parser:this.parser,code:t,defaultAsError:e,infoOrRef:this.operationSpec.responses[t],options:this.options,isEvent:this.isEvent})))}},{key:"callbacks",get:function(){return Object.keys(this.operationSpec.callbacks||[]).map((e=>new fr(this.parser,e,this.operationSpec.callbacks[e],this.pointer,this.options)))}}]),e}();go([ge.observable],vo.prototype,"ready",2),go([ge.observable],vo.prototype,"active",2),go([ge.observable],vo.prototype,"expanded",2),go([ge.action],vo.prototype,"activate",1),go([ge.action],vo.prototype,"deactivate",1),go([ge.action],vo.prototype,"toggle",1),go([qt],vo.prototype,"requestBody",1),go([qt],vo.prototype,"codeSamples",1),go([qt],vo.prototype,"parameters",1),go([qt],vo.prototype,"responses",1),go([qt],vo.prototype,"callbacks",1);var wo=Object.defineProperty,ko=Object.defineProperties,Oo=Object.getOwnPropertyDescriptors,Eo=Object.getOwnPropertySymbols,So=Object.prototype.hasOwnProperty,$o=Object.prototype.propertyIsEnumerable,Ro=(e,t,n)=>t in e?wo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Co=(e,t)=>{for(var n in t||(t={}))So.call(t,n)&&Ro(e,n,t[n]);if(Eo)for(var n of Eo(t))$o.call(t,n)&&Ro(e,n,t[n]);return e};let Ao=function(){function e(e,t,n){this.operations=[];const{resolved:r}=e.deref(n||{});this.initWebhooks(e,r,t)}return e.prototype.initWebhooks=function(e,t,n){for(const o of Object.keys(t)){const i=t[o],s=Object.keys(i).filter(Qe);for(const t of s){const o=i[t];if(i.$ref){const r=e.deref(i||{});this.initWebhooks(e,{[t]:r},n)}if(!o)continue;const s=new vo(e,(r=Co({},o),ko(r,Oo({httpVerb:t}))),void 0,n,!1);this.operations.push(s)}}var r},e}(),Po=function(e,t,n){const{resolved:r}=e.deref(n);this.id=t,this.sectionId=xt+t,this.type=r.type,this.displayName=r["x-displayName"]||t,this.description=r.description||"","apiKey"===r.type&&(this.apiKey={name:r.name,in:r.in}),"http"===r.type&&(this.http={scheme:r.scheme,bearerFormat:r.bearerFormat}),"openIdConnect"===r.type&&(this.openId={connectUrl:r.openIdConnectUrl}),"oauth2"===r.type&&r.flows&&(this.flows=r.flows)},jo=function(e){const t=e.spec.components&&e.spec.components.securitySchemes||{};this.schemes=Object.keys(t).map((n=>new Po(e,n,t[n])))};var Io=Object.defineProperty,To=Object.getOwnPropertySymbols,_o=Object.prototype.hasOwnProperty,Lo=Object.prototype.propertyIsEnumerable,Do=(e,t,n)=>t in e?Io(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,zo=(e,t)=>{for(var n in t||(t={}))_o.call(t,n)&&Do(e,n,t[n]);if(To)for(var n of To(t))Lo.call(t,n)&&Do(e,n,t[n]);return e};let Mo=function(e,t,n){var r,o,i;this.options=n,this.parser=new Cr(e,t,n),this.info=new Zn(this.parser,this.options),this.externalDocs=this.parser.spec.externalDocs,this.contentItems=Ko.buildStructure(this.parser,this.options),this.securitySchemes=new jo(this.parser);const s=zo(zo({},null==(o=null==(r=this.parser)?void 0:r.spec)?void 0:o["x-webhooks"]),null==(i=this.parser)?void 0:i.spec.webhooks);this.webhooks=new Ao(this.parser,n,s)};var No=Object.defineProperty,Fo=Object.getOwnPropertyDescriptor,Bo=(e,t,n,r)=>{for(var o,i=r>1?void 0:r?Fo(t,n):t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&No(t,n,i),i};let qo=function(){function e(e,t,n){this.items=[],this.active=!1,this.expanded=!1,(0,ge.makeObservable)(this),this.id=t.id||e+"/"+$(t.name),this.type=e,this.name=t["x-displayName"]||t.name,this.level=t.level||1,this.sidebarLabel=this.name,this.description=t.description||"";const r=t.items;r&&r.length&&(this.description=Jn.getTextBeforeHading(this.description,r[0].name)),this.parent=n,this.externalDocs=t.externalDocs,"group"===this.type&&(this.expanded=!0)}var t=e.prototype;return t.activate=function(){this.active=!0},t.expand=function(){this.parent&&this.parent.expand(),this.expanded=!0},t.collapse=function(){"group"!==this.type&&(this.expanded=!1)},t.deactivate=function(){this.active=!1},e}();Bo([ge.observable],qo.prototype,"active",2),Bo([ge.observable],qo.prototype,"expanded",2),Bo([ge.action],qo.prototype,"activate",1),Bo([ge.action],qo.prototype,"expand",1),Bo([ge.action],qo.prototype,"collapse",1),Bo([ge.action],qo.prototype,"deactivate",1);var Qo=Object.defineProperty,Uo=Object.defineProperties,Wo=Object.getOwnPropertyDescriptors,Vo=Object.getOwnPropertySymbols,Ho=Object.prototype.hasOwnProperty,Jo=Object.prototype.propertyIsEnumerable,Yo=(e,t,n)=>t in e?Qo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Zo=(e,t)=>{for(var n in t||(t={}))Ho.call(t,n)&&Yo(e,n,t[n]);if(Vo)for(var n of Vo(t))Jo.call(t,n)&&Yo(e,n,t[n]);return e},Go=(e,t)=>Uo(e,Wo(t));const Xo=0;let Ko=function(){function e(){}return e.buildStructure=function(t,n){const r=t.spec,o=[],i=e.getTagsWithOperations(t,r);return o.push.apply(o,a(e.addMarkdownItems(r.info.description||"",void 0,1,n))),r["x-tagGroups"]&&r["x-tagGroups"].length>0?o.push.apply(o,a(e.getTagGroupsItems(t,void 0,r["x-tagGroups"],i,n))):o.push.apply(o,a(e.getTagsItems(t,i,void 0,void 0,n))),o},e.addMarkdownItems=function(e,t,n,r){const o=new Jn(r,null==t?void 0:t.id).extractHeadings(e||"");o.length&&t&&t.description&&(t.description=Jn.getTextBeforeHading(t.description,o[0].name));const i=function(e,t,n){return void 0===n&&(n=1),t.map((t=>{const r=new qo("section",t,e);return r.depth=n,t.items&&(r.items=i(r,t.items,n+1)),r}))};return i(t,o,n)},e.getTagGroupsItems=function(t,n,r,o,i){const s=[];for(const a of r){const r=new qo("group",a,n);r.depth=Xo,r.items=e.getTagsItems(t,o,r,a,i),s.push(r)}return s},e.getTagsItems=function(t,n,r,o,i){let s;s=void 0===o?Object.keys(n):o.tags;const l=s.map((e=>n[e]?(n[e].used=!0,n[e]):(console.warn(`Non-existing tag "${e}" is added to the group "${o.name}"`),null))),c=[];for(const p of l){if(!p)continue;const n=new qo("tag",p,r);if(n.depth=Xo+1,""!==p.name)n.items=[].concat(a(e.addMarkdownItems(p.description||"",n,n.depth+1,i)),a(this.getOperationsItems(t,n,p,n.depth+1,i))),c.push(n);else{const r=[].concat(a(e.addMarkdownItems(p.description||"",n,n.depth+1,i)),a(this.getOperationsItems(t,void 0,p,n.depth+1,i)));c.push.apply(c,a(r))}}return i.sortTagsAlphabetically&&c.sort(Qt("name")),c},e.getOperationsItems=function(e,t,n,r,o){if(0===n.operations.length)return[];const i=[];for(const s of n.operations){const n=new vo(e,s,t,o);n.depth=r,i.push(n)}return o.sortOperationsAlphabetically&&i.sort(Qt("name")),i},e.getTagsWithOperations=function(e,t){const n={},r=t["x-webhooks"]||t.webhooks;for(const i of t.tags||[])n[i.name]=Go(Zo({},i),{operations:[]});function o(e,t,r){for(const i of Object.keys(t)){const s=t[i],a=Object.keys(s).filter(Qe);for(const t of a){const a=s[t];if(s.$ref){const{resolved:t}=e.deref(s);o(e,{[i]:t},r);continue}let l=null==a?void 0:a.tags;l&&l.length||(l=[""]);for(const e of l){let o=n[e];void 0===o&&(o={name:e,operations:[]},n[e]=o),o["x-traitTag"]||o.operations.push(Go(Zo({},a),{pathName:i,pointer:Re.compile(["paths",i,t]),httpVerb:t,pathParameters:s.parameters||[],pathServers:s.servers,isWebhook:!!r}))}}}}return r&&o(e,r,!0),t.paths&&o(e,t.paths),n},e}();var ei=Object.defineProperty,ti=Object.getOwnPropertyDescriptor,ni=(e,t,n,r)=>{for(var o,i=r>1?void 0:r?ti(t,n):t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&ei(t,n,i),i};const ri="data-section-id";let oi=function(){function e(e,t,n){var r=this;this.scroll=t,this.history=n,this.activeItemIdx=-1,this.sideBarOpened=!1,this.updateOnScroll=e=>{const t=e?1:-1;let n=this.activeItemIdx;for(;(-1!==n||e)&&!(n>=this.flatItems.length-1&&e);){if(e){const e=this.getElementAtOrFirstChild(n+1);if(this.scroll.isElementBellow(e))break}else{const e=this.getElementAt(n);if(this.scroll.isElementAbove(e))break}n+=t}this.activate(this.flatItems[n],!0,!0)},this.updateOnHistory=function(e){if(void 0===e&&(e=r.history.currentId),!e)return;let t;t=r.flatItems.find((t=>t.id===e)),t?r.activateAndScroll(t,!1):(e.startsWith(xt)&&(t=r.flatItems.find((e=>xt.startsWith(e.id))),r.activateAndScroll(t,!1)),r.scroll.scrollIntoViewBySelector(`[${ri}="${T(e)}"]`))},this.getItemById=e=>this.flatItems.find((t=>t.id===e)),(0,ge.makeObservable)(this),this.items=e.contentItems,this.flatItems=x(this.items||[],"items"),this.flatItems.forEach(((e,t)=>e.absoluteIdx=t)),this.subscribe()}e.updateOnHistory=function(e,t){void 0===e&&(e=Jt.currentId),e&&t.scrollIntoViewBySelector(`[${ri}="${T(e)}"]`)};var t=e.prototype;return t.subscribe=function(){this._unsubscribe=this.scroll.subscribe(this.updateOnScroll),this._hashUnsubscribe=this.history.subscribe(this.updateOnHistory)},t.toggleSidebar=function(){this.sideBarOpened=!this.sideBarOpened},t.closeSidebar=function(){this.sideBarOpened=!1},t.getElementAt=function(e){const t=this.flatItems[e];return t&&d(`[${ri}="${T(t.id)}"]`)||null},t.getElementAtOrFirstChild=function(e){let t=this.flatItems[e];return t&&"group"===t.type&&(t=t.items[0]),t&&d(`[${ri}="${T(t.id)}"]`)||null},t.activate=function(e,t,n){if(void 0===t&&(t=!0),void 0===n&&(n=!1),(this.activeItem&&this.activeItem.id)!==(e&&e.id)&&(!e||"group"!==e.type)){if(this.deactivate(this.activeItem),!e)return this.activeItemIdx=-1,void this.history.replace("",n);e.depth<=Xo||(this.activeItemIdx=e.absoluteIdx,t&&this.history.replace(encodeURI(e.id),n),e.activate(),e.expand())}},t.deactivate=function(e){if(void 0!==e)for(e.deactivate();void 0!==e;)e.collapse(),e=e.parent},t.activateAndScroll=function(e,t,n){const r=e&&this.getItemById(e.id)||e;this.activate(r,t,n),this.scrollToActive(),r&&r.items.length||this.closeSidebar()},t.scrollToActive=function(){this.scroll.scrollIntoView(this.getElementAt(this.activeItemIdx))},t.dispose=function(){this._unsubscribe(),this._hashUnsubscribe()},o(e,[{key:"activeItem",get:function(){return this.flatItems[this.activeItemIdx]||void 0}}]),e}();ni([ge.observable],oi.prototype,"activeItemIdx",2),ni([ge.observable],oi.prototype,"sideBarOpened",2),ni([ge.action],oi.prototype,"toggleSidebar",1),ni([ge.action],oi.prototype,"closeSidebar",1),ni([ge.action],oi.prototype,"activate",1),ni([ge.action.bound],oi.prototype,"activateAndScroll",1);var ii=Object.defineProperty,si=Object.getOwnPropertyDescriptor;const ai="scroll";let li=function(){function e(e){this.options=e,this._prevOffsetY=0,this._scrollParent=u?window:void 0,this._emiter=new Ee,this.bind()}var t=e.prototype;return t.bind=function(){this._prevOffsetY=this.scrollY(),this._scrollParent&&this._scrollParent.addEventListener("scroll",this.handleScroll)},t.dispose=function(){this._scrollParent&&this._scrollParent.removeEventListener("scroll",this.handleScroll),this._emiter.removeAllListeners(ai)},t.scrollY=function(){return"undefined"!=typeof HTMLElement&&this._scrollParent instanceof HTMLElement?this._scrollParent.scrollTop:void 0!==this._scrollParent?this._scrollParent.pageYOffset:0},t.isElementBellow=function(e){if(null!==e)return e.getBoundingClientRect().top>this.options.scrollYOffset()},t.isElementAbove=function(e){if(null===e)return;const t=e.getBoundingClientRect().top;return(t>0?Math.floor(t):Math.ceil(t))<=this.options.scrollYOffset()},t.subscribe=function(e){const t=this._emiter.addListener(ai,e);return()=>t.removeListener(ai,e)},t.scrollIntoView=function(e){null!==e&&(e.scrollIntoView(),this._scrollParent&&this._scrollParent.scrollBy&&this._scrollParent.scrollBy(0,1-this.options.scrollYOffset()))},t.scrollIntoViewBySelector=function(e){const t=d(e);this.scrollIntoView(t)},t.handleScroll=function(){const e=this.scrollY()-this._prevOffsetY>0;this._prevOffsetY=this.scrollY(),this._emiter.emit(ai,e)},e}();((e,t,n,r)=>{for(var o,i=si(t,n),s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(t,n,i)||i);i&&ii(t,n,i)})([Oe.bind,At(100)],li.prototype,"handleScroll");let ci=function(){function e(){this.searchWorker=function(){let e;if(u)try{e=l(980)}catch(t){e=l(657).ZP}else e=l(657).ZP;return new e}()}var n=e.prototype;return n.indexItems=function(e){const t=e=>{e.forEach((e=>{"group"!==e.type&&this.add(e.name,(e.description||"").concat(" ",e.path||""),e.id),t(e.items)}))};t(e),this.searchWorker.done()},n.add=function(e,t,n){this.searchWorker.add(e,t,n)},n.dispose=function(){this.searchWorker.terminate(),this.searchWorker.dispose()},n.search=function(e){return this.searchWorker.search(e)},n.toJS=function(){return e=this,t=function*(){return this.searchWorker.toJS()},new Promise(((n,r)=>{var o=e=>{try{s(t.next(e))}catch(e){r(e)}},i=e=>{try{s(t.throw(e))}catch(e){r(e)}},s=e=>e.done?n(e.value):Promise.resolve(e.value).then(o,i);s((t=t.apply(e,null)).next())}));var e,t},n.load=function(e){this.searchWorker.load(e)},n.fromExternalJS=function(e,t){e&&t&&this.searchWorker.fromExternalJS(e,t)},e}();const pi=ie.div`
  width: calc(100% - ${e=>e.theme.rightPanel.width});
  padding: 0 ${e=>e.theme.spacing.sectionHorizontal}px;

  ${e=>{let{compact:t,theme:n}=e;return oe.lessThan("medium",!0)`
    width: 100%;
    padding: ${`${t?0:n.spacing.sectionVertical}px ${n.spacing.sectionHorizontal}px`};
  `}};
`,ui=ie.div.attrs((e=>({[ri]:e.id})))`
  padding: ${e=>e.theme.spacing.sectionVertical}px 0;

  &:last-child {
    min-height: calc(100vh + 1px);
  }

  & > &:last-child {
    min-height: initial;
  }

  ${oe.lessThan("medium",!0)`
    padding: 0;
  `}
  ${e=>e.underlined?"\n    position: relative;\n\n    &:not(:last-of-type):after {\n      position: absolute;\n      bottom: 0;\n      width: 100%;\n      display: block;\n      content: '';\n      border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n    }\n  ":""}
`,di=ie.div`
  width: ${e=>e.theme.rightPanel.width};
  color: ${e=>{let{theme:t}=e;return t.rightPanel.textColor}};
  background-color: ${e=>e.theme.rightPanel.backgroundColor};
  padding: 0 ${e=>e.theme.spacing.sectionHorizontal}px;

  ${oe.lessThan("medium",!0)`
    width: 100%;
    padding: ${e=>`${e.theme.spacing.sectionVertical}px ${e.theme.spacing.sectionHorizontal}px`};
  `};
`,hi=ie(di)`
  background-color: ${e=>e.theme.rightPanel.backgroundColor};
`,mi=ie.div`
  display: flex;
  width: 100%;
  padding: 0;

  ${oe.lessThan("medium",!0)`
    flex-direction: column;
  `};
`,fi={1:"1.85714em",2:"1.57143em",3:"1.27em"},yi=e=>ee`
  font-family: ${e=>{let{theme:t}=e;return t.typography.headings.fontFamily}};
  font-weight: ${e=>{let{theme:t}=e;return t.typography.headings.fontWeight}};
  font-size: ${fi[e]};
  line-height: ${e=>{let{theme:t}=e;return t.typography.headings.lineHeight}};
`,gi=ie.h1`
  ${yi(1)};
  color: ${e=>{let{theme:t}=e;return t.colors.text.primary}};

  ${se("H1")};
`,bi=ie.h2`
  ${yi(2)};
  color: ${e=>{let{theme:t}=e;return t.colors.text.primary}};
  margin: 0 0 20px;

  ${se("H2")};
`,xi=(ie.h2`
  ${yi(3)};
  color: ${e=>{let{theme:t}=e;return t.colors.text.primary}};

  ${se("H3")};
`,ie.h3`
  color: ${e=>{let{theme:t}=e;return t.rightPanel.textColor}};

  ${se("RightPanelHeader")};
`),vi=ie.h5`
  border-bottom: 1px solid rgba(38, 50, 56, 0.3);
  margin: 1em 0 1em 0;
  color: rgba(38, 50, 56, 0.5);
  font-weight: normal;
  text-transform: uppercase;
  font-size: 0.929em;
  line-height: 20px;

  ${se("UnderlinedHeader")};
`,wi=(0,e.createContext)(void 0),{Provider:ki,Consumer:Oi}=wi;function Ei(t){const{spec:n,specUrl:r,options:o,onLoaded:i,children:s}=t,[a,l]=e.useState(null),[c,p]=e.useState(null);if(c)throw c;e.useEffect((()=>{!function(){return e=this,t=function*(){if(n||r){l(null);try{const e=yield we(n||r);l(e)}catch(e){throw p(e),e}}},new Promise(((n,r)=>{var o=e=>{try{s(t.next(e))}catch(e){r(e)}},i=e=>{try{s(t.throw(e))}catch(e){r(e)}},s=e=>e.done?n(e.value):Promise.resolve(e.value).then(o,i);s((t=t.apply(e,null)).next())}));var e,t}()}),[n,r]);const u=e.useMemo((()=>{if(!a)return null;try{return new ac(a,r,o)}catch(e){throw i&&i(e),e}}),[a,r,o]);return e.useEffect((()=>{u&&i&&i()}),[u,i]),s({loading:!u,store:u})}function Si(){return(0,e.useContext)(wi)}const $i=e=>ee`
  ${e} {
    cursor: pointer;
    margin-left: -20px;
    padding: 0;
    line-height: 1;
    width: 20px;
    display: inline-block;
    outline: 0;
  }
  ${e}:before {
    content: '';
    width: 15px;
    height: 15px;
    background-size: contain;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjMDEwMTAxIiBkPSJNNDU5LjcgMjMzLjRsLTkwLjUgOTAuNWMtNTAgNTAtMTMxIDUwLTE4MSAwIC03LjktNy44LTE0LTE2LjctMTkuNC0yNS44bDQyLjEtNDIuMWMyLTIgNC41LTMuMiA2LjgtNC41IDIuOSA5LjkgOCAxOS4zIDE1LjggMjcuMiAyNSAyNSA2NS42IDI0LjkgOTAuNSAwbDkwLjUtOTAuNWMyNS0yNSAyNS02NS42IDAtOTAuNSAtMjQuOS0yNS02NS41LTI1LTkwLjUgMGwtMzIuMiAzMi4yYy0yNi4xLTEwLjItNTQuMi0xMi45LTgxLjYtOC45bDY4LjYtNjguNmM1MC01MCAxMzEtNTAgMTgxIDBDNTA5LjYgMTAyLjMgNTA5LjYgMTgzLjQgNDU5LjcgMjMzLjR6TTIyMC4zIDM4Mi4ybC0zMi4yIDMyLjJjLTI1IDI0LjktNjUuNiAyNC45LTkwLjUgMCAtMjUtMjUtMjUtNjUuNiAwLTkwLjVsOTAuNS05MC41YzI1LTI1IDY1LjUtMjUgOTAuNSAwIDcuOCA3LjggMTIuOSAxNy4yIDE1LjggMjcuMSAyLjQtMS40IDQuOC0yLjUgNi44LTQuNWw0Mi4xLTQyYy01LjQtOS4yLTExLjYtMTgtMTkuNC0yNS44IC01MC01MC0xMzEtNTAtMTgxIDBsLTkwLjUgOTAuNWMtNTAgNTAtNTAgMTMxIDAgMTgxIDUwIDUwIDEzMSA1MCAxODEgMGw2OC42LTY4LjZDMjc0LjYgMzk1LjEgMjQ2LjQgMzkyLjMgMjIwLjMgMzgyLjJ6Ii8+PC9zdmc+Cg==');
    opacity: 0.5;
    visibility: hidden;
    display: inline-block;
    vertical-align: middle;
  }

  h1:hover > ${e}::before, h2:hover > ${e}::before, ${e}:hover::before {
    visibility: visible;
  }
`,Ri=ie((function(t){const n=e.useContext(wi),r=e.useCallback((e=>{n&&function(e,t,n){t.defaultPrevented||0!==t.button||(e=>!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey))(t)||(t.preventDefault(),e.replace(encodeURI(n)))}(n.menu.history,e,t.to)}),[n,t.to]);return n?e.createElement("a",{className:t.className,href:n.menu.history.linkForId(t.to),onClick:r,"aria-label":t.to},t.children):null}))`
  ${$i("&")};
`;function Ci(t){return e.createElement(Ri,{to:t.to})}const Ai={left:"90deg",right:"-90deg",up:"-180deg",down:"0"},Pi=ie((t=>e.createElement("svg",{className:t.className,style:t.style,version:"1.1",viewBox:"0 0 24 24",x:"0",xmlns:"http://www.w3.org/2000/svg",y:"0","aria-hidden":"true"},e.createElement("polygon",{points:"17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "}))))`
  height: ${e=>e.size||"18px"};
  width: ${e=>e.size||"18px"};
  min-width: ${e=>e.size||"18px"};
  vertical-align: middle;
  float: ${e=>e.float||""};
  transition: transform 0.2s ease-out;
  transform: rotateZ(${e=>Ai[e.direction||"down"]});

  polygon {
    fill: ${e=>{let{color:t,theme:n}=e;return t&&n.colors.responses[t]&&n.colors.responses[t].color||t}};
  }
`,ji=ie.span`
  display: inline-block;
  padding: 2px 8px;
  margin: 0;
  background-color: ${e=>e.theme.colors[e.type].main};
  color: ${e=>e.theme.colors[e.type].contrastText};
  font-size: ${e=>e.theme.typography.code.fontSize};
  vertical-align: middle;
  line-height: 1.6;
  border-radius: 4px;
  font-weight: ${e=>{let{theme:t}=e;return t.typography.fontWeightBold}};
  font-size: 12px;
  + span[type] {
    margin-left: 4px;
  }
`,Ii=ee`
  text-decoration: line-through;
  color: #707070;
`,Ti=ie.caption`
  text-align: right;
  font-size: 0.9em;
  font-weight: normal;
  color: ${e=>e.theme.colors.text.secondary};
`,_i=ie.td`
  border-left: 1px solid ${e=>e.theme.schema.linesColor};
  box-sizing: border-box;
  position: relative;
  padding: 10px 10px 10px 0;

  ${oe.lessThan("small")`
    display: block;
    overflow: hidden;
  `}

  tr:first-of-type > &,
  tr.last > & {
    border-left-width: 0;
    background-position: top left;
    background-repeat: no-repeat;
    background-size: 1px 100%;
  }

  tr:first-of-type > & {
    background-image: linear-gradient(
      to bottom,
      transparent 0%,
      transparent 22px,
      ${e=>e.theme.schema.linesColor} 22px,
      ${e=>e.theme.schema.linesColor} 100%
    );
  }

  tr.last > & {
    background-image: linear-gradient(
      to bottom,
      ${e=>e.theme.schema.linesColor} 0%,
      ${e=>e.theme.schema.linesColor} 22px,
      transparent 22px,
      transparent 100%
    );
  }

  tr.last + tr > & {
    border-left-color: transparent;
  }

  tr.last:first-child > & {
    background: none;
    border-left-color: transparent;
  }
`,Li=ie(_i)`
  padding: 0;
`,Di=ie(_i)`
  vertical-align: top;
  line-height: 20px;
  white-space: nowrap;
  font-size: 13px;
  font-family: ${e=>e.theme.typography.code.fontFamily};

  &.deprecated {
    ${Ii};
  }

  ${e=>{let{kind:t}=e;return"patternProperties"===t&&ee`
      > span.property-name {
        display: inline-table;
        white-space: break-spaces;
        margin-right: 20px;

        ::before,
        ::after {
          content: '/';
          filter: opacity(0.2);
        }
      }
    `}}

  ${e=>{let{kind:t=""}=e;return["field","additionalProperties","patternProperties"].includes(t)?"":"font-style: italic"}};

  ${se("PropertyNameCell")};
`,zi=ie.td`
  border-bottom: 1px solid #9fb4be;
  padding: 10px 0;
  width: ${e=>e.theme.schema.defaultDetailsWidth};
  box-sizing: border-box;

  tr.expanded & {
    border-bottom: none;
  }

  ${oe.lessThan("small")`
    padding: 0 20px;
    border-bottom: none;
    border-left: 1px solid ${e=>e.theme.schema.linesColor};

    tr.last > & {
      border-left: none;
    }
  `}

  ${se("PropertyDetailsCell")};
`,Mi=ie.span`
  color: ${e=>e.theme.schema.linesColor};
  font-family: ${e=>e.theme.typography.code.fontFamily};
  margin-right: 10px;

  &::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 10px;
    height: 1px;
    background: ${e=>e.theme.schema.linesColor};
  }

  &::after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 1px;
    background: ${e=>e.theme.schema.linesColor};
    height: 7px;
  }
`,Ni=ie.div`
  padding: ${e=>{let{theme:t}=e;return t.schema.nestingSpacing}};
`,Fi=ie.table`
  border-collapse: separate;
  border-radius: 3px;
  font-size: ${e=>e.theme.typography.fontSize};

  border-spacing: 0;
  width: 100%;

  > tr {
    vertical-align: middle;
  }

  ${oe.lessThan("small")`
    display: block;
    > tr, > tbody > tr {
      display: block;
    }
  `}

  ${oe.lessThan("small",!1," and (-ms-high-contrast:none)")`
    td {
      float: left;
      width: 100%;
    }
  `}

  &
    ${Ni},
    &
    ${Ni}
    ${Ni}
    ${Ni},
    &
    ${Ni}
    ${Ni}
    ${Ni}
    ${Ni}
    ${Ni} {
    margin: ${e=>{let{theme:t}=e;return t.schema.nestingSpacing}};
    margin-right: 0;
    background: ${e=>{let{theme:t}=e;return t.schema.nestedBackground}};
  }

  &
    ${Ni}
    ${Ni},
    &
    ${Ni}
    ${Ni}
    ${Ni}
    ${Ni},
    &
    ${Ni}
    ${Ni}
    ${Ni}
    ${Ni}
    ${Ni}
    ${Ni} {
    background: #ffffff;
  }
`,Bi=ie.div`
  margin: 0 0 3px 0;
  display: inline-block;
`,qi=ie.span`
  font-size: 0.9em;
  margin-right: 10px;
  color: ${e=>e.theme.colors.primary.main};
  font-family: ${e=>e.theme.typography.headings.fontFamily};
}
`,Qi=ie.button`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 5px;
  font-size: 0.8em;
  cursor: pointer;
  border: 1px solid ${e=>e.theme.colors.primary.main};
  padding: 2px 10px;
  line-height: 1.5em;
  outline: none;
  &:focus {
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.primary.main};
  }

  ${e=>{let{deprecated:t}=e;return t&&Ii||""}};

  ${e=>e.active?`\n      color: white;\n      background-color: ${e.theme.colors.primary.main};\n      &:focus {\n        box-shadow: none;\n        background-color: ${(0,t.darken)(.15,e.theme.colors.primary.main)};\n      }\n      `:`\n        color: ${e.theme.colors.primary.main};\n        background-color: white;\n      `}
`,Ui=ie.div`
  font-size: 0.9em;
  font-family: ${e=>e.theme.typography.code.fontFamily};
  &::after {
    content: ' [';
  }
`,Wi=ie.div`
  font-size: 0.9em;
  font-family: ${e=>e.theme.typography.code.fontFamily};
  &::after {
    content: ']';
  }
`;var Vi=n(53806);const Hi=ie(Vi.Tabs)`
  > ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin: 0 -5px;

    > li {
      padding: 5px 10px;
      display: inline-block;

      background-color: ${e=>{let{theme:t}=e;return t.codeBlock.backgroundColor}};
      border-bottom: 1px solid rgba(0, 0, 0, 0.5);
      cursor: pointer;
      text-align: center;
      outline: none;
      color: ${e=>{let{theme:n}=e;return(0,t.darken)(n.colors.tonalOffset,n.rightPanel.textColor)}};
      margin: 0
        ${e=>{let{theme:t}=e;return`${t.spacing.unit}px ${t.spacing.unit}px ${t.spacing.unit}px`}};
      border: 1px solid ${e=>{let{theme:n}=e;return(0,t.darken)(.05,n.codeBlock.backgroundColor)}};
      border-radius: 5px;
      min-width: 60px;
      font-size: 0.9em;
      font-weight: bold;

      &.react-tabs__tab--selected {
        color: ${e=>e.theme.colors.text.primary};
        background: ${e=>{let{theme:t}=e;return t.rightPanel.textColor}};
        &:focus {
          outline: auto;
        }
      }

      &:only-child {
        flex: none;
        min-width: 100px;
      }

      &.tab-success {
        color: ${e=>e.theme.colors.responses.success.tabTextColor};
      }

      &.tab-redirect {
        color: ${e=>e.theme.colors.responses.redirect.tabTextColor};
      }

      &.tab-info {
        color: ${e=>e.theme.colors.responses.info.tabTextColor};
      }

      &.tab-error {
        color: ${e=>e.theme.colors.responses.error.tabTextColor};
      }
    }
  }
  > .react-tabs__tab-panel {
    background: ${e=>{let{theme:t}=e;return t.codeBlock.backgroundColor}};
    & > div,
    & > pre {
      padding: ${e=>4*e.theme.spacing.unit}px;
      margin: 0;
    }

    & > div > pre {
      padding: 0;
    }
  }
`,Ji=(ie(Hi)`
  > ul {
    display: block;
    > li {
      padding: 2px 5px;
      min-width: auto;
      margin: 0 15px 0 0;
      font-size: 13px;
      font-weight: normal;
      border-bottom: 1px dashed;
      color: ${e=>{let{theme:n}=e;return(0,t.darken)(n.colors.tonalOffset,n.rightPanel.textColor)}};
      border-radius: 0;
      background: none;

      &:last-child {
        margin-right: 0;
      }

      &.react-tabs__tab--selected {
        color: ${e=>{let{theme:t}=e;return t.rightPanel.textColor}};
        background: none;
      }
    }
  }
  > .react-tabs__tab-panel {
    & > div,
    & > pre {
      padding: ${e=>2*e.theme.spacing.unit}px 0;
    }
  }
`,ie.div`
  /**
  * Based on prism-dark.css
  */

  code[class*='language-'],
  pre[class*='language-'] {
    /* color: white;
    background: none; */
    text-shadow: 0 -0.1em 0.2em black;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  @media print {
    code[class*='language-'],
    pre[class*='language-'] {
      text-shadow: none;
    }
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: hsl(30, 20%, 50%);
  }

  .token.punctuation {
    opacity: 0.7;
  }

  .namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.number,
  .token.constant,
  .token.symbol {
    color: #4a8bb3;
  }

  .token.boolean {
    color: #e64441;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #a0fbaa;
    & + a,
    & + a:visited {
      color: #4ed2ba;
      text-decoration: underline;
    }
  }

  .token.property.string {
    color: white;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .token.variable {
    color: hsl(40, 90%, 60%);
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: hsl(350, 40%, 70%);
  }

  .token.regex,
  .token.important {
    color: #e90;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.deleted {
    color: red;
  }

  ${se("Prism")};
`),Yi=ie.div`
  opacity: 0.7;
  transition: opacity 0.3s ease;
  text-align: right;
  &:focus-within {
    opacity: 1;
  }
  > button {
    background-color: transparent;
    border: 0;
    color: inherit;
    padding: 2px 10px;
    font-family: ${e=>{let{theme:t}=e;return t.typography.fontFamily}};
    font-size: ${e=>{let{theme:t}=e;return t.typography.fontSize}};
    line-height: ${e=>{let{theme:t}=e;return t.typography.lineHeight}};
    cursor: pointer;
    outline: 0;

    :hover,
    :focus {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`,Zi=ie.div`
  &:hover ${Yi} {
    opacity: 1;
  }
`,Gi=ie(Ji.withComponent("pre",{target:"e1hwgo3d0"}))`
  font-family: ${e=>e.theme.typography.code.fontFamily};
  font-size: ${e=>e.theme.typography.code.fontSize};
  overflow-x: auto;
  margin: 0;

  white-space: ${e=>{let{theme:t}=e;return t.typography.code.wrap?"pre-wrap":"pre"}};
`;var Xi=n(49205),Ki=l.n(Xi),es=Object.defineProperty,ts=Object.getOwnPropertySymbols,ns=Object.prototype.hasOwnProperty,rs=Object.prototype.propertyIsEnumerable,os=(e,t,n)=>t in e?es(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const is=Ki()||Xi;let ss="";u&&(ss=l(433),ss="function"==typeof ss.toString&&ss.toString()||"",ss="[object Object]"===ss?"":ss);const as=te`${ss}`,ls=ie.div`
  position: relative;
`;let cs=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).handleRef=t=>{e._container=t},e}i(n,t);var r=n.prototype;return r.componentDidMount=function(){const e=this._container.parentElement&&this._container.parentElement.scrollTop||0;this.inst=new is(this._container,this.props.options||{}),this._container.scrollTo&&this._container.scrollTo(0,e)},r.componentDidUpdate=function(){this.inst.update()},r.componentWillUnmount=function(){this.inst.destroy()},r.render=function(){const{children:t,className:n,updateFn:r}=this.props;return r&&r(this.componentDidUpdate.bind(this)),e.createElement(e.Fragment,null,ss&&e.createElement(as,null),e.createElement(ls,{className:`scrollbar-container ${n}`,ref:this.handleRef},t))},n}(e.Component);function ps(t){return e.createElement(me.Consumer,null,(n=>n.nativeScrollbars?e.createElement("div",{style:{overflow:"auto",overscrollBehavior:"contain",msOverflowStyle:"-ms-autohiding-scrollbar"}},t.children):e.createElement(cs,((e,t)=>{for(var n in t||(t={}))ns.call(t,n)&&os(e,n,t[n]);if(ts)for(var n of ts(t))rs.call(t,n)&&os(e,n,t[n]);return e})({},t),t.children)))}const us=ie((t=>{let{className:n,style:r}=t;return e.createElement("svg",{className:n,style:r,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("polyline",{points:"6 9 12 15 18 9"}))}))`
  position: absolute;
  pointer-events: none;
  z-index: 1;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 8px;
  margin: auto;
  text-align: center;
  polyline {
    color: ${e=>"dark"===e.variant&&"white"};
  }
`,ds=e.memo((t=>{const{options:n,onChange:r,placeholder:o,value:i="",variant:s,className:a}=t;return e.createElement("div",{className:a},e.createElement(us,{variant:s}),e.createElement("select",{onChange:e=>{const{selectedIndex:t}=e.target;r(n[o?t-1:t])},value:i,className:"dropdown-select"},o&&e.createElement("option",{disabled:!0,hidden:!0,value:o},o),n.map(((t,n)=>{let{idx:r,value:o,title:i}=t;return e.createElement("option",{key:r||o+n,value:o},i||o)}))),e.createElement("label",null,i))})),hs=X()(ds)`
  label {
    box-sizing: border-box;
    min-width: 100px;
    outline: none;
    display: inline-block;
    font-family: ${e=>e.theme.typography.headings.fontFamily};
    color: ${e=>{let{theme:t}=e;return t.colors.text.primary}};
    vertical-align: bottom;
    width: ${e=>{let{fullWidth:t}=e;return t?"100%":"auto"}};
    text-transform: none;
    padding: 0 22px 0 4px;

    font-size: 0.929em;
    line-height: 1.5em;
    font-family: inherit;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .dropdown-select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    border: none;
    appearance: none;
    cursor: pointer;

    color: ${e=>{let{theme:t}=e;return t.colors.text.primary}};
    line-height: inherit;
    font-family: inherit;
  }
  box-sizing: border-box;
  min-width: 100px;
  outline: none;
  display: inline-block;
  border-radius: 2px;
  border: 1px solid rgba(38, 50, 56, 0.5);
  vertical-align: bottom;
  padding: 2px 0px 2px 6px;
  position: relative;
  width: auto;
  background: white;
  color: #263238;
  font-family: ${e=>e.theme.typography.headings.fontFamily};
  font-size: 0.929em;
  line-height: 1.5em;
  cursor: pointer;
  transition: border 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;

  &:hover,
  &:focus-within {
    border: 1px solid ${e=>e.theme.colors.primary.main};
    color: ${e=>e.theme.colors.primary.main};
    box-shadow: 0px 0px 0px 1px ${e=>e.theme.colors.primary.main};
  }
`,ms=X()(hs)`
  margin-left: 10px;
  text-transform: none;
  font-size: 0.969em;

  font-size: 1em;
  border: none;
  padding: 0 1.2em 0 0;
  background: transparent;

  &:hover,
  &:focus-within {
    border: none;
    box-shadow: none;
    label {
      color: ${e=>e.theme.colors.primary.main};
      text-shadow: 0px 0px 0px ${e=>e.theme.colors.primary.main};
    }
  }
`,fs=X().span`
  margin-left: 10px;
  text-transform: none;
  font-size: 0.929em;
  color: black;
`;var ys=Object.defineProperty,gs=Object.getOwnPropertySymbols,bs=Object.prototype.hasOwnProperty,xs=Object.prototype.propertyIsEnumerable,vs=(e,t,n)=>t in e?ys(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function ws(t){const{Label:n=fs,Dropdown:r=ms}=t;return 1===t.options.length?e.createElement(n,null,t.options[0].value):e.createElement(r,((e,t)=>{for(var n in t||(t={}))bs.call(t,n)&&vs(e,n,t[n]);if(gs)for(var n of gs(t))xs.call(t,n)&&vs(e,n,t[n]);return e})({},t))}var ks=n(42838);const Os=ee`
  a {
    text-decoration: ${e=>e.theme.typography.links.textDecoration};
    color: ${e=>e.theme.typography.links.color};

    &:visited {
      color: ${e=>e.theme.typography.links.visited};
    }

    &:hover {
      color: ${e=>e.theme.typography.links.hover};
      text-decoration: ${e=>e.theme.typography.links.hoverTextDecoration};
    }
  }
`,Es=ie(Ji)`
  font-family: ${e=>e.theme.typography.fontFamily};
  font-weight: ${e=>e.theme.typography.fontWeightRegular};
  line-height: ${e=>e.theme.typography.lineHeight};

  p {
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${e=>{let{compact:t}=e;return t&&"\n    p:first-child {\n      margin-top: 0;\n    }\n    p:last-child {\n      margin-bottom: 0;\n    }\n  "}}

  ${e=>{let{inline:t}=e;return t&&" p {\n    display: inline-block;\n  }"}}

  h1 {
    ${yi(1)};
    color: ${e=>e.theme.colors.primary.main};
    margin-top: 0;
  }

  h2 {
    ${yi(2)};
    color: ${e=>e.theme.colors.text.primary};
  }

  code {
    color: ${e=>{let{theme:t}=e;return t.typography.code.color}};
    background-color: ${e=>{let{theme:t}=e;return t.typography.code.backgroundColor}};

    font-family: ${e=>e.theme.typography.code.fontFamily};
    border-radius: 2px;
    border: 1px solid rgba(38, 50, 56, 0.1);
    padding: 0 ${e=>{let{theme:t}=e;return t.spacing.unit}}px;
    font-size: ${e=>e.theme.typography.code.fontSize};
    font-weight: ${e=>{let{theme:t}=e;return t.typography.code.fontWeight}};

    word-break: break-word;
  }

  pre {
    font-family: ${e=>e.theme.typography.code.fontFamily};
    white-space: ${e=>{let{theme:t}=e;return t.typography.code.wrap?"pre-wrap":"pre"}};
    background-color: ${e=>{let{theme:t}=e;return t.codeBlock.backgroundColor}};
    color: white;
    padding: ${e=>4*e.theme.spacing.unit}px;
    overflow-x: auto;
    line-height: normal;
    border-radius: 0px;
    border: 1px solid rgba(38, 50, 56, 0.1);

    code {
      background-color: transparent;
      color: white;
      padding: 0;

      &:before,
      &:after {
        content: none;
      }
    }
  }

  blockquote {
    margin: 0;
    margin-bottom: 1em;
    padding: 0 15px;
    color: #777;
    border-left: 4px solid #ddd;
  }

  img {
    max-width: 100%;
    box-sizing: content-box;
  }

  ul,
  ol {
    padding-left: 2em;
    margin: 0;
    margin-bottom: 1em;

    ul,
    ol {
      margin-bottom: 0;
      margin-top: 0;
    }
  }

  table {
    display: block;
    width: 100%;
    overflow: auto;
    word-break: normal;
    word-break: keep-all;
    border-collapse: collapse;
    border-spacing: 0;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
  }

  table tr {
    background-color: #fff;
    border-top: 1px solid #ccc;

    &:nth-child(2n) {
      background-color: ${e=>{let{theme:t}=e;return t.schema.nestedBackground}};
    }
  }

  table th,
  table td {
    padding: 6px 13px;
    border: 1px solid #ddd;
  }

  table th {
    text-align: left;
    font-weight: bold;
  }

  ${$i(".share-link")};

  ${Os}

  ${se("Markdown")};
`;var Ss=Object.defineProperty,$s=Object.getOwnPropertySymbols,Rs=Object.prototype.hasOwnProperty,Cs=Object.prototype.propertyIsEnumerable,As=(e,t,n)=>t in e?Ss(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const Ps=Es.withComponent("span",{target:"e1hwgo3d1"});function js(t){const n=t.inline?Ps:Es;return e.createElement(ye,null,(r=>{return e.createElement(n,((e,t)=>{for(var n in t||(t={}))Rs.call(t,n)&&As(e,n,t[n]);if($s)for(var n of $s(t))Cs.call(t,n)&&As(e,n,t[n]);return e})({className:"redoc-markdown "+(t.className||""),dangerouslySetInnerHTML:{__html:(o=r.untrustedSpec,i=t.html,o?ks.sanitize(i):i)},"data-role":t["data-role"]},t));var o,i}))}let Is=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),n.prototype.render=function(){const{source:t,inline:n,compact:r,className:o,"data-role":i}=this.props,s=new Jn;return e.createElement(js,{html:s.renderMd(t),inline:n,compact:r,className:o,"data-role":i})},n}(e.Component);const Ts=ie.div`
  position: relative;
`,_s=ie.div`
  position: absolute;
  min-width: 80px;
  max-width: 500px;
  background: #fff;
  bottom: 100%;
  left: 50%;
  margin-bottom: 10px;
  transform: translateX(-50%);

  border-radius: 4px;
  padding: 0.3em 0.6em;
  text-align: center;
  box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 1);
`,Ls=ie.div`
  background: #fff;
  color: #000;
  display: inline;
  font-size: 0.85em;
  white-space: nowrap;
`,Ds=ie.div`
  position: absolute;
  width: 0;
  height: 0;
  bottom: -5px;
  left: 50%;
  margin-left: -5px;
  border-left: solid transparent 5px;
  border-right: solid transparent 5px;
  border-top: solid #fff 5px;
`,zs=ie.div`
  position: absolute;
  width: 100%;
  height: 20px;
  bottom: -20px;
`;let Ms=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),n.prototype.render=function(){const{open:t,title:n,children:r}=this.props;return e.createElement(Ts,null,r,t&&e.createElement(_s,null,e.createElement(Ls,null,n),e.createElement(Ds,null),e.createElement(zs,null)))},n}(e.Component);const Ns="undefined"!=typeof document&&document.queryCommandSupported&&document.queryCommandSupported("copy");let Fs=function(){function e(){}return e.isSupported=function(){return Ns},e.selectElement=function(e){let t,n;document.body.createTextRange?(t=document.body.createTextRange(),t.moveToElementText(e),t.select()):document.createRange&&window.getSelection&&(n=window.getSelection(),t=document.createRange(),t.selectNodeContents(e),n.removeAllRanges(),n.addRange(t))},e.deselect=function(){if(document.selection)document.selection.empty();else if(window.getSelection){const e=window.getSelection();e&&e.removeAllRanges()}},e.copySelected=function(){let e;try{e=document.execCommand("copy")}catch(t){e=!1}return e},e.copyElement=function(t){e.selectElement(t);const n=e.copySelected();return n&&e.deselect(),n},e.copyCustom=function(t){const n=document.createElement("textarea");n.style.position="fixed",n.style.top="0",n.style.left="0",n.style.width="2em",n.style.height="2em",n.style.padding="0",n.style.border="none",n.style.outline="none",n.style.boxShadow="none",n.style.background="transparent",n.value=t,document.body.appendChild(n),n.select();const r=e.copySelected();return document.body.removeChild(n),r},e}();const Bs=t=>{const[n,r]=e.useState(!1),o=()=>{const e="string"==typeof t.data?t.data:JSON.stringify(t.data,null,2);Fs.copyCustom(e),i()},i=()=>{r(!0),setTimeout((()=>{r(!1)}),1500)};return t.children({renderCopyButton:()=>e.createElement("button",{onClick:o},e.createElement(Ms,{title:Fs.isSupported()?"Copied":"Not supported in your browser",open:n},"Copy"))})};let qs=1;function Qs(e,t){qs=1;let n="";return n+='<div class="redoc-json">',n+="<code>",n+=Js(e,t),n+="</code>",n+="</div>",n}function Us(e){return void 0!==e?e.toString().replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function Ws(e){return JSON.stringify(e).slice(1,-1)}function Vs(e,t){return'<span class="'+t+'">'+Us(e)+"</span>"}function Hs(e){return'<span class="token punctuation">'+e+"</span>"}function Js(e,t){const n=typeof e;let r="";return null==e?r+=Vs("null","token keyword"):e&&e.constructor===Array?(qs++,r+=function(e,t){const n=qs>t?"collapsed":"";let r=`<button class="collapser" aria-label="${qs>t+1?"expand":"collapse"}"></button>${Hs("[")}<span class="ellipsis"></span><ul class="array collapsible">`,o=!1;const i=e.length;for(let s=0;s<i;s++)o=!0,r+='<li><div class="hoverable '+n+'">',r+=Js(e[s],t),s<i-1&&(r+=","),r+="</div></li>";return r+=`</ul>${Hs("]")}`,o||(r=Hs("[ ]")),r}(e,t),qs--):e&&e.constructor===Date?r+=Vs('"'+e.toISOString()+'"',"token string"):"object"===n?(qs++,r+=function(e,t){const n=qs>t?"collapsed":"",r=Object.keys(e),o=r.length;let i=`<button class="collapser" aria-label="${qs>t+1?"expand":"collapse"}"></button>${Hs("{")}<span class="ellipsis"></span><ul class="obj collapsible">`,s=!1;for(let a=0;a<o;a++){const l=r[a];s=!0,i+='<li><div class="hoverable '+n+'">',i+='<span class="property token string">"'+Us(l)+'"</span>: ',i+=Js(e[l],t),a<o-1&&(i+=Hs(",")),i+="</div></li>"}return i+=`</ul>${Hs("}")}`,s||(i=Hs("{ }")),i}(e,t),qs--):"number"===n?r+=Vs(e,"token number"):"string"===n?/^(http|https):\/\/[^\s]+$/.test(e)?r+=Vs('"',"token string")+'<a href="'+encodeURI(e)+'">'+Us(Ws(e))+"</a>"+Vs('"',"token string"):r+=Vs('"'+Ws(e)+'"',"token string"):"boolean"===n&&(r+=Vs(e,"token boolean")),r}const Ys=ee`
  .redoc-json code > .collapser {
    display: none;
    pointer-events: none;
  }

  font-family: ${e=>e.theme.typography.code.fontFamily};
  font-size: ${e=>e.theme.typography.code.fontSize};

  white-space: ${e=>{let{theme:t}=e;return t.typography.code.wrap?"pre-wrap":"pre"}};
  contain: content;
  overflow-x: auto;

  .callback-function {
    color: gray;
  }

  .collapser:after {
    content: '-';
    cursor: pointer;
  }

  .collapsed > .collapser:after {
    content: '+';
    cursor: pointer;
  }

  .ellipsis:after {
    content: ' … ';
  }

  .collapsible {
    margin-left: 2em;
  }

  .hoverable {
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 2px;
    padding-right: 2px;
    border-radius: 2px;
  }

  .hovered {
    background-color: rgba(235, 238, 249, 1);
  }

  .collapser {
    background-color: transparent;
    border: 0;
    color: #fff;
    font-family: ${e=>e.theme.typography.code.fontFamily};
    font-size: ${e=>e.theme.typography.code.fontSize};
    padding-right: 6px;
    padding-left: 6px;
    padding-top: 0;
    padding-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 4px;
    left: -1.5em;
    cursor: default;
    user-select: none;
    -webkit-user-select: none;
    padding: 2px;
    &:focus {
      outline-color: #fff;
      outline-style: dotted;
      outline-width: 1px;
    }
  }

  ul {
    list-style-type: none;
    padding: 0px;
    margin: 0px 0px 0px 26px;
  }

  li {
    position: relative;
    display: block;
  }

  .hoverable {
    display: inline-block;
  }

  .selected {
    outline-style: solid;
    outline-width: 1px;
    outline-style: dotted;
  }

  .collapsed > .collapsible {
    display: none;
  }

  .ellipsis {
    display: none;
  }

  .collapsed > .ellipsis {
    display: inherit;
  }
`,Zs=ie.div`
  &:hover > ${Yi} {
    opacity: 1;
  }
`,Gs=ie((t=>{const[n,r]=e.useState(),o=n=>{let{renderCopyButton:o}=n;const a=t.data&&Object.values(t.data).some((e=>"object"==typeof e&&null!==e));return e.createElement(Zs,null,e.createElement(Yi,null,o(),a&&e.createElement(e.Fragment,null,e.createElement("button",{onClick:i}," Expand all "),e.createElement("button",{onClick:s}," Collapse all "))),e.createElement(me.Consumer,null,(n=>e.createElement(Ji,{className:t.className,ref:e=>r(e),dangerouslySetInnerHTML:{__html:Qs(t.data,n.jsonSampleExpandLevel)}}))))},i=()=>{const e=null==n?void 0:n.getElementsByClassName("collapsible");for(const t of Array.prototype.slice.call(e)){const e=t.parentNode;e.classList.remove("collapsed"),e.querySelector(".collapser").setAttribute("aria-label","collapse")}},s=()=>{const e=null==n?void 0:n.getElementsByClassName("collapsible"),t=Array.prototype.slice.call(e,1);for(const n of t){const e=n.parentNode;e.classList.add("collapsed"),e.querySelector(".collapser").setAttribute("aria-label","expand")}},a=e=>{let t;"collapser"===e.className&&(t=e.parentElement.getElementsByClassName("collapsible")[0],t.parentElement.classList.contains("collapsed")?(t.parentElement.classList.remove("collapsed"),e.setAttribute("aria-label","collapse")):(t.parentElement.classList.add("collapsed"),e.setAttribute("aria-label","expand")))},l=e.useCallback((e=>{a(e.target)}),[]),c=e.useCallback((e=>{"Enter"===e.key&&a(e.target)}),[]);return e.useEffect((()=>(null==n||n.addEventListener("click",l),null==n||n.addEventListener("focus",c),()=>{null==n||n.removeEventListener("click",l),null==n||n.removeEventListener("focus",c)})),[l,c,n]),e.createElement(Bs,{data:t.data},o)}))`
  ${Ys};
`,Xs=t=>{const{source:n,lang:r}=t;return e.createElement(Gi,{dangerouslySetInnerHTML:{__html:Ct(n,r)}})},Ks=t=>{const{source:n,lang:r}=t;return e.createElement(Bs,{data:n},(t=>{let{renderCopyButton:o}=t;return e.createElement(Zi,null,e.createElement(Yi,null,o()),e.createElement(Xs,{lang:r,source:n}))}))};function ea(t){let{value:n,mimeType:r}=t;return Je(r)?e.createElement(Gs,{data:n}):("object"==typeof n&&(n=JSON.stringify(n,null,2)),e.createElement(Ks,{lang:rt(r),source:n}))}function ta(t){let{example:n,mimeType:r}=t;return void 0===n.value&&n.externalValueUrl?e.createElement(na,{example:n,mimeType:r}):e.createElement(ea,{value:n.value,mimeType:r})}function na(t){let{example:n,mimeType:r}=t;const o=function(t,n){const[,r]=(0,e.useState)(!0),o=(0,e.useRef)(void 0),i=(0,e.useRef)(void 0);return i.current!==t&&(o.current=void 0),i.current=t,(0,e.useEffect)((()=>{(()=>{return e=this,i=function*(){r(!0);try{o.current=yield t.getExternalValue(n)}catch(e){o.current=e}r(!1)},new Promise(((t,n)=>{var r=e=>{try{s(i.next(e))}catch(e){n(e)}},o=e=>{try{s(i.throw(e))}catch(e){n(e)}},s=e=>e.done?t(e.value):Promise.resolve(e.value).then(r,o);s((i=i.apply(e,null)).next())}));var e,i})()}),[t,n]),o.current}(n,r);return void 0===o?e.createElement("span",null,"Loading..."):o instanceof Error?e.createElement(Gi,null,"Error loading external example: ",e.createElement("br",null),e.createElement("a",{className:"token string",href:n.externalValueUrl,target:"_blank",rel:"noopener noreferrer"},n.externalValueUrl)):e.createElement(ea,{value:o,mimeType:r})}const ra=ie.div`
  padding: 0.9em;
  background-color: ${e=>{let{theme:n}=e;return(0,t.transparentize)(.6,n.rightPanel.backgroundColor)}};
  margin: 0 0 10px 0;
  display: block;
  font-family: ${e=>{let{theme:t}=e;return t.typography.headings.fontFamily}};
  font-size: 0.929em;
  line-height: 1.5em;
`,oa=ie.span`
  font-family: ${e=>{let{theme:t}=e;return t.typography.headings.fontFamily}};
  font-size: 12px;
  position: absolute;
  z-index: 1;
  top: -11px;
  left: 12px;
  font-weight: ${e=>{let{theme:t}=e;return t.typography.fontWeightBold}};
  color: ${e=>{let{theme:n}=e;return(0,t.transparentize)(.3,n.rightPanel.textColor)}};
`,ia=ie.div`
  position: relative;
`,sa=ie(hs)`
  label {
    color: ${e=>{let{theme:t}=e;return t.rightPanel.textColor}};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 1em;
    text-transform: none;
    border: none;
  }
  margin: 0 0 10px 0;
  display: block;
  background-color: ${e=>{let{theme:n}=e;return(0,t.transparentize)(.6,n.rightPanel.backgroundColor)}};
  border: none;
  padding: 0.9em 1.6em 0.9em 0.9em;
  box-shadow: none;
  &:hover,
  &:focus-within {
    border: none;
    box-shadow: none;
    background-color: ${e=>{let{theme:n}=e;return(0,t.transparentize)(.3,n.rightPanel.backgroundColor)}};
  }
`,aa=ie.div`
  font-family: ${e=>e.theme.typography.code.fontFamily};
  font-size: 12px;
  color: #ee807f;
`;let la=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).state={activeIdx:0},e.switchMedia=t=>{let{idx:n}=t;void 0!==n&&e.setState({activeIdx:n})},e}return i(n,t),n.prototype.render=function(){const{activeIdx:t}=this.state,n=this.props.mediaType.examples||{},r=this.props.mediaType.name,o=e.createElement(aa,null,"No sample"),i=Object.keys(n);if(0===i.length)return o;if(i.length>1){const o=i.map(((e,t)=>({value:n[e].summary||e,idx:t}))),s=n[i[t]],a=s.description;return e.createElement(ca,null,e.createElement(ia,null,e.createElement(oa,null,"Example"),this.props.renderDropdown({value:o[t].value,options:o,onChange:this.switchMedia,ariaLabel:"Example"})),e.createElement("div",null,a&&e.createElement(Is,{source:a}),e.createElement(ta,{example:s,mimeType:r})))}{const t=n[i[0]];return e.createElement(ca,null,t.description&&e.createElement(Is,{source:t.description}),e.createElement(ta,{example:t,mimeType:r}))}},n}(e.Component);const ca=ie.div`
  margin-top: 15px;
`;var pa=n(21195);const ua=ie(Di)`
  button {
    background-color: transparent;
    border: 0;
    outline: 0;
    font-size: 13px;
    font-family: ${e=>e.theme.typography.code.fontFamily};
    cursor: pointer;
    padding: 0;
    color: ${e=>e.theme.colors.text.primary};
    &:focus {
      font-weight: ${e=>{let{theme:t}=e;return t.typography.fontWeightBold}};
    }
    ${e=>{let{kind:t}=e;return"patternProperties"===t&&ee`
        display: inline-flex;
        margin-right: 20px;

        > span.property-name {
          white-space: break-spaces;
          text-align: left;

          ::before,
          ::after {
            content: '/';
            filter: opacity(0.2);
          }
        }

        > svg {
          align-self: center;
        }
      `}}
  }
  ${Pi} {
    height: ${e=>{let{theme:t}=e;return t.schema.arrow.size}};
    width: ${e=>{let{theme:t}=e;return t.schema.arrow.size}};
    polygon {
      fill: ${e=>{let{theme:t}=e;return t.schema.arrow.color}};
    }
  }
`,da=ie.span`
  vertical-align: middle;
  font-size: ${e=>{let{theme:t}=e;return t.typography.code.fontSize}};
  line-height: 20px;
`,ha=ie(da)`
  color: ${e=>(0,t.transparentize)(.1,e.theme.schema.typeNameColor)};
`,ma=ie(da)`
  color: ${e=>e.theme.schema.typeNameColor};
`,fa=ie(da)`
  color: ${e=>e.theme.schema.typeTitleColor};
  word-break: break-word;
`,ya=ma,ga=ie(da.withComponent("div",{target:"e1hwgo3d2"}))`
  color: ${e=>e.theme.schema.requireLabelColor};
  font-size: ${e=>e.theme.schema.labelsTextSize};
  font-weight: normal;
  margin-left: 20px;
  line-height: 1;
`,ba=ie(ga)`
  color: ${e=>e.theme.colors.primary.light};
`,xa=ie(da)`
  color: ${e=>{let{theme:t}=e;return t.colors.warning.main}};
  font-size: 13px;
`,va=ie(da)`
  color: #0e7c86;
  &::before,
  &::after {
    font-weight: bold;
  }
`,wa=ie(da)`
  border-radius: 2px;
  word-break: break-word;
  ${e=>{let{theme:n}=e;return`\n    background-color: ${(0,t.transparentize)(.95,n.colors.text.primary)};\n    color: ${(0,t.transparentize)(.1,n.colors.text.primary)};\n\n    padding: 0 ${n.spacing.unit}px;\n    border: 1px solid ${(0,t.transparentize)(.9,n.colors.text.primary)};\n    font-family: ${n.typography.code.fontFamily};\n}`}};
  & + & {
    margin-left: 0;
  }
  ${se("ExampleValue")};
`,ka=ie(wa)``,Oa=ie(da)`
  border-radius: 2px;
  ${e=>{let{theme:n}=e;return`\n    background-color: ${(0,t.transparentize)(.95,n.colors.primary.light)};\n    color: ${(0,t.transparentize)(.1,n.colors.primary.main)};\n\n    margin: 0 ${n.spacing.unit}px;\n    padding: 0 ${n.spacing.unit}px;\n    border: 1px solid ${(0,t.transparentize)(.9,n.colors.primary.main)};\n}`}};
  & + & {
    margin-left: 0;
  }
  ${se("ConstraintItem")};
`,Ea=ie.button`
  background-color: transparent;
  border: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text.secondary}};
  margin-left: ${e=>{let{theme:t}=e;return t.spacing.unit}}px;
  border-radius: 2px;
  cursor: pointer;
  outline-color: ${e=>{let{theme:t}=e;return t.colors.text.secondary}};
  font-size: 12px;
`;Object.defineProperty,Object.getOwnPropertyDescriptor;const Sa=ie.div`
  ${Os};
  ${e=>{let{compact:t}=e;return t?"":"margin: 1em 0"}}
`;let $a=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),n.prototype.render=function(){const{externalDocs:t}=this.props;return t&&t.url?e.createElement(Sa,{compact:this.props.compact},e.createElement("a",{href:t.url},t.description||t.url)):null},n}(e.Component);$a=((e,t,n,r)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([pa.observer],$a);let Ra=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).state={collapsed:!0},e}i(n,t);var r=n.prototype;return r.toggle=function(){this.setState({collapsed:!this.state.collapsed})},r.render=function(){const{values:t,isArrayType:n}=this.props,{collapsed:r}=this.state,{enumSkipQuotes:o,maxDisplayedEnumValues:i}=this.context;if(!t.length)return null;const s=this.state.collapsed&&i?t.slice(0,i):t,a=!!i&&t.length>i,l=i?r?`… ${t.length-i} more`:"Hide":"";return e.createElement("div",null,e.createElement(da,null,n?M("enumArray"):""," ",1===t.length?M("enumSingleValue"):M("enum"),":")," ",s.map(((t,n)=>{const r=o?String(t):JSON.stringify(t);return e.createElement(e.Fragment,{key:n},e.createElement(wa,null,r)," ")})),a?e.createElement(Ca,{onClick:()=>{this.toggle()}},l):null)},n}(e.PureComponent);Ra.contextType=me;const Ca=ie.span`
  color: ${e=>e.theme.colors.primary.main};
  vertical-align: middle;
  font-size: 13px;
  line-height: 20px;
  padding: 0 5px;
  cursor: pointer;
`,Aa=ie(Es)`
  margin: 2px 0;
`;let Pa=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),n.prototype.render=function(){const t=this.props.extensions;return e.createElement(me.Consumer,null,(n=>e.createElement(e.Fragment,null,n.showExtensions&&Object.keys(t).map((n=>e.createElement(Aa,{key:n},e.createElement(da,null," ",n.substring(2),": ")," ",e.createElement(ka,null,"string"==typeof t[n]?t[n]:JSON.stringify(t[n]))))))))},n}(e.PureComponent);function ja(t){let{field:n}=t;return n.examples?e.createElement(e.Fragment,null,e.createElement(da,null," ",M("examples"),": "),L(n.examples)?n.examples.map(((t,r)=>{const o=nt(n,t),i=n.in?String(o):JSON.stringify(o);return e.createElement(e.Fragment,{key:r},e.createElement(wa,null,i)," ")})):e.createElement(Ia,null,Object.values(n.examples).map(((t,r)=>e.createElement("li",{key:r+t.value},e.createElement(wa,null,nt(n,t.value))," -"," ",t.summary||t.description))))):null}const Ia=ie.ul`
  margin-top: 1em;
  list-style-position: outside;
`;let Ta=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),n.prototype.render=function(){return 0===this.props.constraints.length?null:e.createElement("span",null," ",this.props.constraints.map((t=>e.createElement(Oa,{key:t}," ",t," "))))},n}(e.PureComponent);const _a=e.memo((function(t){let{value:n,label:r,raw:o}=t;if(void 0===n)return null;const i=o?String(n):JSON.stringify(n);return e.createElement("div",null,e.createElement(da,null," ",r," ")," ",e.createElement(wa,null,i))}));function La(t){const n=t.schema.pattern,{hideSchemaPattern:r}=e.useContext(me),[o,i]=e.useState(!1),s=e.useCallback((()=>i(!o)),[o]);return!n||r?null:e.createElement(e.Fragment,null,e.createElement(va,null,o||n.length<45?n:`${n.substr(0,45)}...`),n.length>45&&e.createElement(Ea,{onClick:s},o?"Hide pattern":"Show pattern"))}function Da(t){let{schema:n}=t;const{hideSchemaPattern:r}=e.useContext(me);return n&&("string"!==n.type||n.constraints.length)&&((null==n?void 0:n.pattern)&&!r||n.items||n.displayFormat||n.constraints.length)?e.createElement(za,null,"[ items",n.displayFormat&&e.createElement(ya,null," <",n.displayFormat," >"),e.createElement(Ta,{constraints:n.constraints}),e.createElement(La,{schema:n}),n.items&&e.createElement(Da,{schema:n.items})," ]"):null}const za=ie(ha)`
  margin: 0 5px;
  vertical-align: text-top;
`;var Ma=Object.defineProperty,Na=Object.getOwnPropertySymbols,Fa=Object.prototype.hasOwnProperty,Ba=Object.prototype.propertyIsEnumerable,qa=(e,t,n)=>t in e?Ma(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Qa=(e,t)=>{for(var n in t||(t={}))Fa.call(t,n)&&qa(e,n,t[n]);if(Na)for(var n of Na(t))Ba.call(t,n)&&qa(e,n,t[n]);return e};const Ua=(0,pa.observer)((t=>{const{enumSkipQuotes:n,hideSchemaTitles:r}=e.useContext(me),{showExamples:o,field:i,renderDiscriminatorSwitch:s}=t,{schema:a,description:l,deprecated:c,extensions:p,in:u,const:d}=i,h="array"===a.type,m=n||"header"===u,f=e.useMemo((()=>!o||void 0===i.example&&void 0===i.examples?null:void 0!==i.examples?e.createElement(ja,{field:i}):e.createElement(_a,{label:M("example")+":",value:nt(i,i.example),raw:Boolean(i.in)})),[i,o]);return e.createElement("div",null,e.createElement("div",null,e.createElement(ha,null,a.typePrefix),e.createElement(ma,null,a.displayType),a.displayFormat&&e.createElement(ya,null," ","<",a.displayFormat,">"," "),a.contentEncoding&&e.createElement(ya,null," ","<",a.contentEncoding,">"," "),a.contentMediaType&&e.createElement(ya,null," ","<",a.contentMediaType,">"," "),a.title&&!r&&e.createElement(fa,null," (",a.title,") "),e.createElement(Ta,{constraints:a.constraints}),e.createElement(La,{schema:a}),a.isCircular&&e.createElement(xa,null," ",M("recursive")," "),h&&a.items&&e.createElement(Da,{schema:a.items})),c&&e.createElement("div",null,e.createElement(ji,{type:"warning"}," ",M("deprecated")," ")),e.createElement(_a,{raw:m,label:M("default")+":",value:a.default}),!s&&e.createElement(Ra,{isArrayType:h,values:a.enum})," ",f,e.createElement(Pa,{extensions:Qa(Qa({},p),a.extensions)}),e.createElement("div",null,e.createElement(Is,{compact:!0,source:l})),a.externalDocs&&e.createElement($a,{externalDocs:a.externalDocs,compact:!0}),s&&s(t)||null,d&&e.createElement(_a,{label:M("const")+":",value:d})||null)})),Wa=e.memo(Ua);var Va=Object.defineProperty,Ha=(Object.getOwnPropertyDescriptor,Object.getOwnPropertySymbols),Ja=Object.prototype.hasOwnProperty,Ya=Object.prototype.propertyIsEnumerable,Za=(e,t,n)=>t in e?Va(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;let Ga=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).toggle=()=>{void 0===e.props.field.expanded&&e.props.expandByDefault?e.props.field.collapse():e.props.field.toggle()},e.handleKeyPress=t=>{"Enter"===t.key&&(t.preventDefault(),e.toggle())},e}return i(n,t),n.prototype.render=function(){const{className:t="",field:n,isLast:r,expandByDefault:o}=this.props,{name:i,deprecated:s,required:a,kind:l}=n,c=!n.schema.isPrimitive&&!n.schema.isCircular,p=void 0===n.expanded?o:n.expanded,u=e.createElement(e.Fragment,null,"additionalProperties"===l&&e.createElement(ba,null,"additional property"),"patternProperties"===l&&e.createElement(ba,null,"pattern property"),a&&e.createElement(ga,null,"required")),d=c?e.createElement(ua,{className:s?"deprecated":"",kind:l,title:i},e.createElement(Mi,null),e.createElement("button",{onClick:this.toggle,onKeyPress:this.handleKeyPress,"aria-label":"expand properties"},e.createElement("span",{className:"property-name"},i),e.createElement(Pi,{direction:p?"down":"right"})),u):e.createElement(Di,{className:s?"deprecated":void 0,kind:l,title:i},e.createElement(Mi,null),e.createElement("span",{className:"property-name"},i),u);return e.createElement(e.Fragment,null,e.createElement("tr",{className:r?"last "+t:t},d,e.createElement(zi,null,e.createElement(Wa,((e,t)=>{for(var n in t||(t={}))Ja.call(t,n)&&Za(e,n,t[n]);if(Ha)for(var n of Ha(t))Ya.call(t,n)&&Za(e,n,t[n]);return e})({},this.props)))),p&&c&&e.createElement("tr",{key:n.name+"inner"},e.createElement(Li,{colSpan:2},e.createElement(Ni,null,e.createElement(Il,{schema:n.schema,skipReadOnly:this.props.skipReadOnly,skipWriteOnly:this.props.skipWriteOnly,showTitle:this.props.showTitle,level:this.props.level})))))},n}(e.Component);Ga=((e,t,n,r)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([pa.observer],Ga),Object.defineProperty,Object.getOwnPropertyDescriptor;let Xa=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).changeActiveChild=t=>{void 0!==t.idx&&e.props.parent.activateOneOf(t.idx)},e}i(n,t);var r=n.prototype;return r.sortOptions=function(e,t){if(0===t.length)return;const n={};t.forEach(((e,t)=>{n[e]=t})),e.sort(((e,t)=>n[e.value]>n[t.value]?1:-1))},r.render=function(){const{parent:t,enumValues:n}=this.props;if(void 0===t.oneOf)return null;const r=t.oneOf.map(((e,t)=>({value:e.title,idx:t}))),o=r[t.activeOneOf].value;return this.sortOptions(r,n),e.createElement(hs,{value:o,options:r,onChange:this.changeActiveChild,ariaLabel:"Example"})},n}(e.Component);Xa=((e,t,n,r)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([pa.observer],Xa);const Ka=(0,pa.observer)((t=>{let{schema:{fields:n=[],title:r},showTitle:o,discriminator:i,skipReadOnly:s,skipWriteOnly:a,level:l}=t;const{expandSingleSchemaField:c,showObjectSchemaExamples:p,schemaExpansionLevel:u}=e.useContext(me),d=e.useMemo((()=>s||a?n.filter((e=>!(s&&e.schema.readOnly||a&&e.schema.writeOnly))):n),[s,a,n]),h=c&&1===d.length||u>=l;return e.createElement(Fi,null,o&&e.createElement(Ti,null,r),e.createElement("tbody",null,g(d,((t,n)=>e.createElement(Ga,{key:t.name,isLast:n,field:t,expandByDefault:h,renderDiscriminatorSwitch:(null==i?void 0:i.fieldName)===t.name?()=>e.createElement(Xa,{parent:i.parentSchema,enumValues:t.schema.enum}):void 0,className:t.expanded?"expanded":void 0,showExamples:p,skipReadOnly:s,skipWriteOnly:a,showTitle:o,level:l})))))}));var el=Object.defineProperty,tl=Object.defineProperties,nl=Object.getOwnPropertyDescriptors,rl=Object.getOwnPropertySymbols,ol=Object.prototype.hasOwnProperty,il=Object.prototype.propertyIsEnumerable,sl=(e,t,n)=>t in e?el(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,al=(e,t)=>{for(var n in t||(t={}))ol.call(t,n)&&sl(e,n,t[n]);if(rl)for(var n of rl(t))il.call(t,n)&&sl(e,n,t[n]);return e},ll=(e,t)=>tl(e,nl(t));const cl=ie.div`
  padding-left: ${e=>{let{theme:t}=e;return 2*t.spacing.unit}}px;
`;let pl=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),n.prototype.render=function(){const t=this.props.schema,n=t.items,r=void 0===t.minItems&&void 0===t.maxItems?"":`(${ct(t)})`;return t.fields?e.createElement(Ka,ll(al({},this.props),{level:this.props.level})):!t.displayType||n||r.length?e.createElement("div",null,e.createElement(Ui,null," Array ",r),e.createElement(cl,null,e.createElement(Il,ll(al({},this.props),{schema:n}))),e.createElement(Wi,null)):e.createElement("div",null,e.createElement(ma,null,t.displayType))},n}(e.PureComponent);var ul=Object.defineProperty,dl=Object.defineProperties,hl=Object.getOwnPropertyDescriptor,ml=Object.getOwnPropertyDescriptors,fl=Object.getOwnPropertySymbols,yl=Object.prototype.hasOwnProperty,gl=Object.prototype.propertyIsEnumerable,bl=(e,t,n)=>t in e?ul(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xl=(e,t,n,r)=>{for(var o,i=r>1?void 0:r?hl(t,n):t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&ul(t,n,i),i};let vl=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).activateOneOf=()=>{e.props.schema.activateOneOf(e.props.idx)},e}return i(n,t),n.prototype.render=function(){const{idx:t,schema:n,subSchema:r}=this.props;return e.createElement(Qi,{deprecated:r.deprecated,active:t===n.activeOneOf,onClick:this.activateOneOf},r.title||r.typePrefix+r.displayType)},n}(e.Component);vl=xl([pa.observer],vl);let wl=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),n.prototype.render=function(){const{schema:{oneOf:t},schema:n}=this.props;if(void 0===t)return null;const r=t[n.activeOneOf];return e.createElement("div",null,e.createElement(qi,null," ",n.oneOfType," "),e.createElement(Bi,null,t.map(((t,r)=>e.createElement(vl,{key:t.pointer,schema:n,subSchema:t,idx:r})))),e.createElement("div",null,t[n.activeOneOf].deprecated&&e.createElement(ji,{type:"warning"},"Deprecated")),e.createElement(Ta,{constraints:r.constraints}),e.createElement(Il,(o=((e,t)=>{for(var n in t||(t={}))yl.call(t,n)&&bl(e,n,t[n]);if(fl)for(var n of fl(t))gl.call(t,n)&&bl(e,n,t[n]);return e})({},this.props),dl(o,ml({schema:r})))));var o},n}(e.Component);wl=xl([pa.observer],wl);const kl=(0,pa.observer)((t=>{let{schema:n}=t;return e.createElement("div",null,e.createElement(ma,null,n.displayType),n.title&&e.createElement(fa,null," ",n.title," "),e.createElement(xa,null," ",M("recursive")," "))}));var Ol=Object.defineProperty,El=Object.defineProperties,Sl=(Object.getOwnPropertyDescriptor,Object.getOwnPropertyDescriptors),$l=Object.getOwnPropertySymbols,Rl=Object.prototype.hasOwnProperty,Cl=Object.prototype.propertyIsEnumerable,Al=(e,t,n)=>t in e?Ol(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Pl=(e,t)=>{for(var n in t||(t={}))Rl.call(t,n)&&Al(e,n,t[n]);if($l)for(var n of $l(t))Cl.call(t,n)&&Al(e,n,t[n]);return e},jl=(e,t)=>El(e,Sl(t));let Il=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),n.prototype.render=function(){var t;const n=this.props,{schema:r}=n,o=((e,t)=>{var n={};for(var r in e)Rl.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&$l)for(var r of $l(e))t.indexOf(r)<0&&Cl.call(e,r)&&(n[r]=e[r]);return n})(n,["schema"]),i=(o.level||0)+1;if(!r)return e.createElement("em",null," Schema not provided ");const{type:s,oneOf:a,discriminatorProp:l,isCircular:c}=r;if(c)return e.createElement(kl,{schema:r});if(void 0!==l){if(!a||!a.length)return console.warn(`Looks like you are using discriminator wrong: you don't have any definition inherited from the ${r.title}`),null;const t=a[r.activeOneOf];return t.isCircular?e.createElement(kl,{schema:t}):e.createElement(Ka,jl(Pl({},o),{level:i,schema:t,discriminator:{fieldName:l,parentSchema:r}}))}if(void 0!==a)return e.createElement(wl,Pl({schema:r},o));const p=L(s)?s:[s];if(p.includes("object")){if(null==(t=r.fields)?void 0:t.length)return e.createElement(Ka,jl(Pl({},this.props),{level:i}))}else if(p.includes("array"))return e.createElement(pl,jl(Pl({},this.props),{level:i}));const u={schema:r,name:"",required:!1,description:r.description,externalDocs:r.externalDocs,deprecated:!1,toggle:()=>null,expanded:!1};return e.createElement("div",null,e.createElement(Wa,{field:u}))},n}(e.Component);Il=((e,t,n,r)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([pa.observer],Il);var Tl=Object.defineProperty,_l=Object.defineProperties,Ll=Object.getOwnPropertyDescriptors,Dl=Object.getOwnPropertySymbols,zl=Object.prototype.hasOwnProperty,Ml=Object.prototype.propertyIsEnumerable,Nl=(e,t,n)=>t in e?Tl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;let Fl=function(t){function n(){var n;return(n=t.apply(this,arguments)||this).renderDropdown=t=>{return e.createElement(ws,(n=((e,t)=>{for(var n in t||(t={}))zl.call(t,n)&&Nl(e,n,t[n]);if(Dl)for(var n of Dl(t))Ml.call(t,n)&&Nl(e,n,t[n]);return e})({Label:fs,Dropdown:sa},t),_l(n,Ll({variant:"dark"}))));var n},n}return i(n,t),n.getMediaType=function(e,t){if(!e)return{};const n={schema:{$ref:e}};return t&&(n.examples={example:{$ref:t}}),n},n.prototype.render=function(){const{showReadOnly:t=!0,showWriteOnly:n=!1}=this.props;return e.createElement(ui,null,e.createElement(mi,null,e.createElement(pi,null,e.createElement(Il,{skipWriteOnly:!n,skipReadOnly:!t,schema:this.mediaModel.schema})),e.createElement(hi,null,e.createElement(Bl,null,e.createElement(la,{renderDropdown:this.renderDropdown,mediaType:this.mediaModel})))))},o(n,[{key:"mediaModel",get:function(){const{parser:e,schemaRef:t,exampleRef:r,options:o}=this.props;return this._mediaModel||(this._mediaModel=new Xr(e,"json",!1,n.getMediaType(t,r),o)),this._mediaModel}}]),n}(e.PureComponent);const Bl=ie.div`
  background: ${e=>{let{theme:t}=e;return t.codeBlock.backgroundColor}};
  & > div,
  & > pre {
    padding: ${e=>4*e.theme.spacing.unit}px;
    margin: 0;
  }

  & > div > pre {
    padding: 0;
  }
`,ql=(X().div`
  background-color: #e4e7eb;
`,X().ul`
  display: inline;
  list-style: none;
  padding: 0;

  li {
    display: inherit;

    &:after {
      content: ',';
    }
    &:last-child:after {
      content: none;
    }
  }
`,X().code`
  font-size: ${e=>e.theme.typography.code.fontSize};
  font-family: ${e=>e.theme.typography.code.fontFamily};
  margin: 0 3px;
  padding: 0.2em;
  display: inline-block;
  line-height: 1;

  &:after {
    content: ',';
    font-weight: normal;
  }

  &:last-child:after {
    content: none;
  }
`),Ql=X().span`
  &:after {
    content: ' and ';
    font-weight: normal;
  }

  &:last-child:after {
    content: none;
  }

  ${Os};
`,Ul=X().span`
  ${e=>!e.expanded&&"white-space: nowrap;"}
  &:after {
    content: ' or ';
    ${e=>e.expanded&&"content: ' or \\a';"}
    white-space: pre;
  }

  &:last-child:after,
  &:only-child:after {
    content: none;
  }

  ${Os};
`,Wl=X().div`
  flex: 1 1 auto;
  cursor: pointer;
`,Vl=X().div`
  width: ${e=>e.theme.schema.defaultDetailsWidth};
  text-overflow: ellipsis;
  border-radius: 4px;
  overflow: hidden;
  ${e=>e.expanded&&`background: ${e.theme.colors.gray[100]};\n     padding: 8px 9.6px;\n     margin: 20px 0;\n     width: 100%;\n    `};
  ${oe.lessThan("small")`
    margin-top: 10px;
  `}
`,Hl=X()(vi)`
  display: inline-block;
  margin: 0;
`,Jl=X().div`
  width: 100%;
  display: flex;
  margin: 1em 0;
  flex-direction: ${e=>e.expanded?"column":"row"};
  ${oe.lessThan("small")`
    flex-direction: column;
  `}
`,Yl=X().div`
  margin: 0.5em 0;
`,Zl=X().div`
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.border.dark}};
  margin-bottom: 1.5em;
  padding-bottom: 0.7em;

  h5 {
    line-height: 1em;
    margin: 0 0 0.6em;
    font-size: ${e=>{let{theme:t}=e;return t.typography.fontSize}};
  }

  .redoc-markdown p:first-child {
    display: inline;
  }
`;function Gl(t){let{children:n,height:r}=t;const o=e.createRef(),[i,s]=e.useState(!1),[a,l]=e.useState(!1);return e.useEffect((()=>{o.current&&o.current.clientHeight+20<o.current.scrollHeight&&l(!0)}),[o]),e.createElement(e.Fragment,null,e.createElement(Xl,{ref:o,className:i?"":"container",style:{height:i?"auto":r}},n),e.createElement(Kl,{dimmed:!i},a&&e.createElement(ec,{onClick:()=>{s(!i)}},i?"See less":"See more")))}const Xl=X().div`
  overflow-y: hidden;
`,Kl=X().div`
  text-align: center;
  line-height: 1.5em;
  ${e=>{let{dimmed:t}=e;return t&&"background-image: linear-gradient(to bottom, transparent,rgb(255 255 255));\n     position: relative;\n     top: -0.5em;\n     padding-top: 0.5em;\n     background-position-y: -1em;\n    "}}
`,ec=X().a`
  cursor: pointer;
`,tc=e.memo((function(t){const{type:n,flow:r,RequiredScopes:o}=t,i=Object.keys((null==r?void 0:r.scopes)||{});return e.createElement(e.Fragment,null,e.createElement(Yl,null,e.createElement("b",null,"Flow type: "),e.createElement("code",null,n," ")),("implicit"===n||"authorizationCode"===n)&&e.createElement(Yl,null,e.createElement("strong",null," Authorization URL: "),e.createElement("code",null,e.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:r.authorizationUrl},r.authorizationUrl))),("password"===n||"clientCredentials"===n||"authorizationCode"===n)&&e.createElement(Yl,null,e.createElement("b",null," Token URL: "),e.createElement("code",null,r.tokenUrl)),r.refreshUrl&&e.createElement(Yl,null,e.createElement("strong",null," Refresh URL: "),r.refreshUrl),!!i.length&&e.createElement(e.Fragment,null,o||null,e.createElement(Yl,null,e.createElement("b",null," Scopes: ")),e.createElement(Gl,{height:"4em"},e.createElement("ul",null,i.map((t=>e.createElement("li",{key:t},e.createElement("code",null,t)," -"," ",e.createElement(Is,{className:"redoc-markdown",inline:!0,source:r.scopes[t]||""}))))))))}));function nc(t){const{RequiredScopes:n,scheme:r}=t;return e.createElement(Es,null,r.apiKey?e.createElement(e.Fragment,null,e.createElement(Yl,null,e.createElement("b",null,P(r.apiKey.in||"")," parameter name: "),e.createElement("code",null,r.apiKey.name)),n):r.http?e.createElement(e.Fragment,null,e.createElement(Yl,null,e.createElement("b",null,"HTTP Authorization Scheme: "),e.createElement("code",null,r.http.scheme)),e.createElement(Yl,null,"bearer"===r.http.scheme&&r.http.bearerFormat&&e.createElement(e.Fragment,null,e.createElement("b",null,"Bearer format: "),e.createElement("code",null,r.http.bearerFormat))),n):r.openId?e.createElement(e.Fragment,null,e.createElement(Yl,null,e.createElement("b",null,"Connect URL: "),e.createElement("code",null,e.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:r.openId.connectUrl},r.openId.connectUrl))),n):r.flows?Object.keys(r.flows).map((t=>e.createElement(tc,{key:t,type:t,RequiredScopes:n,flow:r.flows[t]}))):null)}const rc={oauth2:"OAuth2",apiKey:"API Key",http:"HTTP",openIdConnect:"OpenID Connect"};let oc=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),n.prototype.render=function(){return this.props.securitySchemes.schemes.map((t=>e.createElement(ui,{id:t.sectionId,key:t.id},e.createElement(mi,null,e.createElement(pi,null,e.createElement(bi,null,e.createElement(Ci,{to:t.sectionId}),t.displayName),e.createElement(Is,{source:t.description||""}),e.createElement(Zl,null,e.createElement(Yl,null,e.createElement("b",null,"Security Scheme Type: "),e.createElement("span",null,rc[t.type]||t.type)),e.createElement(nc,{scheme:t})))))))},n}(e.PureComponent);var ic=(e,t,n)=>new Promise(((r,o)=>{var i=e=>{try{a(n.next(e))}catch(e){o(e)}},s=e=>{try{a(n.throw(e))}catch(e){o(e)}},a=e=>e.done?r(e.value):Promise.resolve(e.value).then(i,s);a((n=n.apply(e,t)).next())}));function sc(e,t){return ic(this,arguments,(function(e,t,n){return void 0===n&&(n={}),function*(){const r=yield we(e||t);return new ac(r,t,n)}()}))}let ac=function(){function e(e,t,n,r){void 0===n&&(n={}),void 0===r&&(r=!0),this.marker=new Zt,this.disposer=null,this.rawOptions=n,this.options=new Z(n,lc),this.scroll=new li(this.options),oi.updateOnHistory(Jt.currentId,this.scroll),this.spec=new Mo(e,t,this.options),this.menu=new oi(this.spec,this.scroll,Jt),this.options.disableSearch||(this.search=new ci,r&&this.search.indexItems(this.menu.items),this.disposer=(0,ge.observe)(this.menu,"activeItemIdx",(e=>{this.updateMarkOnMenu(e.newValue)})))}e.fromJS=function(t){const n=new e(t.spec.data,t.spec.url,t.options,!1);return n.menu.activeItemIdx=t.menu.activeItemIdx||0,n.menu.activate(n.menu.flatItems[n.menu.activeItemIdx]),n.options.disableSearch||n.search.load(t.searchIndex),n};var t=e.prototype;return t.onDidMount=function(){this.menu.updateOnHistory(),this.updateMarkOnMenu(this.menu.activeItemIdx)},t.dispose=function(){this.scroll.dispose(),this.menu.dispose(),this.search&&this.search.dispose(),null!=this.disposer&&this.disposer()},t.toJS=function(){return ic(this,null,(function*(){return{menu:{activeItemIdx:this.menu.activeItemIdx},spec:{url:this.spec.parser.specUrl,data:this.spec.parser.spec},searchIndex:this.search?yield this.search.toJS():void 0,options:this.rawOptions}}))},t.updateMarkOnMenu=function(e){const t=Math.max(0,e),n=Math.min(this.menu.flatItems.length,t+5),r=[];for(let o=t;o<n;o++){const e=this.menu.getElementAt(o);e&&r.push(e)}if(-1===e&&u){const e=document.querySelector('[data-role="redoc-description"]'),t=document.querySelector('[data-role="redoc-summary"]');e&&r.push(e),t&&r.push(t)}this.marker.addOnly(r),this.marker.mark()},e}();const lc={allowedMdComponents:{[yt]:{component:oc,propsSelector:e=>({securitySchemes:e.spec.securitySchemes})},[gt]:{component:oc,propsSelector:e=>({securitySchemes:e.spec.securitySchemes})},[bt]:{component:Fl,propsSelector:e=>({parser:e.spec.parser,options:e.options})}}},cc=ie(gi)`
  margin-top: 0;
  margin-bottom: 0.5em;

  ${se("ApiHeader")};
`,pc=ie.a`
  border: 1px solid ${e=>e.theme.colors.primary.main};
  color: ${e=>e.theme.colors.primary.main};
  font-weight: normal;
  margin-left: 0.5em;
  padding: 4px 8px 4px;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;

  ${se("DownloadButton")};
`,uc=ie.span`
  &::before {
    content: '|';
    display: inline-block;
    opacity: 0.5;
    width: ${15}px;
    text-align: center;
  }

  &:last-child::after {
    display: none;
  }
`,dc=ie.div`
  overflow: hidden;
`,hc=ie.div`
  display: flex;
  flex-wrap: wrap;
  // hide separator on new lines: idea from https://stackoverflow.com/a/31732902/1749888
  margin-left: -${15}px;
`;Object.defineProperty,Object.getOwnPropertyDescriptor;let mc=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).handleDownloadClick=t=>{t.target.href||(t.target.href=e.props.store.spec.info.downloadLink)},e}return i(n,t),n.prototype.render=function(){const{store:t}=this.props,{info:n,externalDocs:r}=t.spec,o=t.options.hideDownloadButton,i=n.downloadFileName,s=n.downloadLink,a=n.license&&e.createElement(uc,null,"License:"," ",n.license.identifier?n.license.identifier:e.createElement("a",{href:n.license.url},n.license.name))||null,l=n.contact&&n.contact.url&&e.createElement(uc,null,"URL: ",e.createElement("a",{href:n.contact.url},n.contact.url))||null,c=n.contact&&n.contact.email&&e.createElement(uc,null,n.contact.name||"E-mail",":"," ",e.createElement("a",{href:"mailto:"+n.contact.email},n.contact.email))||null,p=n.termsOfService&&e.createElement(uc,null,e.createElement("a",{href:n.termsOfService},"Terms of Service"))||null,u=n.version&&e.createElement("span",null,"(",n.version,")")||null;return e.createElement(ui,null,e.createElement(mi,null,e.createElement(pi,{className:"api-info"},e.createElement(cc,null,n.title," ",u),!o&&e.createElement("p",null,M("downloadSpecification"),":",e.createElement(pc,{download:i||!0,target:"_blank",href:s,onClick:this.handleDownloadClick},M("download"))),e.createElement(Es,null,(n.license||n.contact||n.termsOfService)&&e.createElement(dc,null,e.createElement(hc,null,c," ",l," ",a," ",p))||null),e.createElement(Is,{source:t.spec.info.summary,"data-role":"redoc-summary"}),e.createElement(Is,{source:t.spec.info.description,"data-role":"redoc-description"}),r&&e.createElement($a,{externalDocs:r}))))},n}(e.Component);mc=((e,t,n,r)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([pa.observer],mc);const fc=ie.img`
  max-height: ${e=>e.theme.logo.maxHeight};
  max-width: ${e=>e.theme.logo.maxWidth};
  padding: ${e=>e.theme.logo.gutter};
  width: 100%;
  display: block;
`,yc=ie.div`
  text-align: center;
`,gc=ie.a`
  display: inline-block;
`;Object.defineProperty,Object.getOwnPropertyDescriptor;let bc=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),n.prototype.render=function(){const{info:t}=this.props,n=t["x-logo"];if(!n||!n.url)return null;const r=n.href||t.contact&&t.contact.url,o=n.altText?n.altText:"logo",i=e.createElement(fc,{src:n.url,alt:o});return e.createElement(yc,{style:{backgroundColor:n.backgroundColor}},r?(s=r,t=>e.createElement(gc,{href:s},t))(i):i);var s},n}(e.Component);bc=((e,t,n,r)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([pa.observer],bc);var xc=Object.defineProperty,vc=Object.getOwnPropertySymbols,wc=Object.prototype.hasOwnProperty,kc=Object.prototype.propertyIsEnumerable,Oc=(e,t,n)=>t in e?xc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ec=(e,t)=>{for(var n in t||(t={}))wc.call(t,n)&&Oc(e,n,t[n]);if(vc)for(var n of vc(t))kc.call(t,n)&&Oc(e,n,t[n]);return e};let Sc=function(t){function n(){return t.apply(this,arguments)||this}i(n,t);var r=n.prototype;return r.render=function(){return e.createElement(ye,null,(t=>e.createElement(Oi,null,(e=>this.renderWithOptionsAndStore(t,e)))))},r.renderWithOptionsAndStore=function(t,n){const{source:r,htmlWrap:o=(e=>e)}=this.props;if(!n)throw new Error("When using components in markdown, store prop must be provided");const i=new Jn(t,this.props.parentId).renderMdWithComponents(r);return i.length?i.map(((t,r)=>{if("string"==typeof t)return e.cloneElement(o(e.createElement(js,{html:t,inline:!1,compact:!1})),{key:r});const i=t.component;return e.createElement(i,Ec({key:r},Ec(Ec({},t.props),t.propsSelector(n))))})):null},n}(e.Component);var $c=n(32485),Rc=l.n($c);const Cc=ie.span.attrs((e=>({className:`operation-type ${e.type}`})))`
  width: 9ex;
  display: inline-block;
  height: ${e=>e.theme.typography.code.fontSize};
  line-height: ${e=>e.theme.typography.code.fontSize};
  background-color: #333;
  border-radius: 3px;
  background-repeat: no-repeat;
  background-position: 6px 4px;
  font-size: 7px;
  font-family: Verdana, sans-serif; // web-safe
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  vertical-align: middle;
  margin-right: 6px;
  margin-top: 2px;

  &.get {
    background-color: ${e=>e.theme.colors.http.get};
  }

  &.post {
    background-color: ${e=>e.theme.colors.http.post};
  }

  &.put {
    background-color: ${e=>e.theme.colors.http.put};
  }

  &.options {
    background-color: ${e=>e.theme.colors.http.options};
  }

  &.patch {
    background-color: ${e=>e.theme.colors.http.patch};
  }

  &.delete {
    background-color: ${e=>e.theme.colors.http.delete};
  }

  &.basic {
    background-color: ${e=>e.theme.colors.http.basic};
  }

  &.link {
    background-color: ${e=>e.theme.colors.http.link};
  }

  &.head {
    background-color: ${e=>e.theme.colors.http.head};
  }

  &.hook {
    background-color: ${e=>e.theme.colors.primary.main};
  }
`;function Ac(e,t,n){let{theme:r}=t;return e>1?r.sidebar.level1Items[n]:1===e?r.sidebar.groupItems[n]:""}const Pc=ie.ul`
  margin: 0;
  padding: 0;

  &:first-child {
    padding-bottom: 32px;
  }

  & & {
    font-size: 0.929em;
  }

  ${e=>e.expanded?"":"display: none;"};
`,jc=ie.li`
  list-style: none inside none;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0;
  ${e=>0===e.depth?"margin-top: 15px":""};
`,Ic={0:ee`
    opacity: 0.7;
    text-transform: ${e=>{let{theme:t}=e;return t.sidebar.groupItems.textTransform}};
    font-size: 0.8em;
    padding-bottom: 0;
    cursor: default;
  `,1:ee`
    font-size: 0.929em;
    text-transform: ${e=>{let{theme:t}=e;return t.sidebar.level1Items.textTransform}};
  `},Tc=ie.label.attrs((e=>({role:"menuitem",className:Rc()("-depth"+e.depth,{active:e.active})})))`
  cursor: pointer;
  color: ${e=>e.active?Ac(e.depth,e,"activeTextColor"):e.theme.sidebar.textColor};
  margin: 0;
  padding: 12.5px ${e=>4*e.theme.spacing.unit}px;
  ${e=>{let{depth:t,type:n,theme:r}=e;return"section"===n&&t>1&&"padding-left: "+8*r.spacing.unit+"px;"||""}}
  display: flex;
  justify-content: space-between;
  font-family: ${e=>e.theme.typography.headings.fontFamily};
  ${e=>Ic[e.depth]};
  background-color: ${e=>e.active?Ac(e.depth,e,"activeBackgroundColor"):e.theme.sidebar.backgroundColor};

  ${e=>e.deprecated&&Ii||""};

  &:hover {
    color: ${e=>Ac(e.depth,e,"activeTextColor")};
    background-color: ${e=>Ac(e.depth,e,"activeBackgroundColor")};
  }

  ${Pi} {
    height: ${e=>{let{theme:t}=e;return t.sidebar.arrow.size}};
    width: ${e=>{let{theme:t}=e;return t.sidebar.arrow.size}};
    polygon {
      fill: ${e=>{let{theme:t}=e;return t.sidebar.arrow.color}};
    }
  }
`,_c=ie.span`
  display: inline-block;
  vertical-align: middle;
  width: ${e=>e.width?e.width:"auto"};
  overflow: hidden;
  text-overflow: ellipsis;
`,Lc=ie.div`
  ${e=>{let{theme:n}=e;return ee`
    font-size: 0.8em;
    margin-top: ${2*n.spacing.unit}px;
    text-align: center;
    position: fixed;
    width: ${n.sidebar.width};
    bottom: 0;
    background: ${n.sidebar.backgroundColor};

    a,
    a:visited,
    a:hover {
      color: ${n.sidebar.textColor} !important;
      padding: ${n.spacing.unit}px 0;
      border-top: 1px solid ${(0,t.darken)(.1,n.sidebar.backgroundColor)};
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}};
  img {
    width: 15px;
    margin-right: 5px;
  }

  ${oe.lessThan("small")`
    width: 100%;
  `};
`,Dc=ie.button`
  border: 0;
  width: 100%;
  text-align: left;
  & > * {
    vertical-align: middle;
  }

  ${Pi} {
    polygon {
      fill: ${e=>{let{theme:n}=e;return(0,t.darken)(n.colors.tonalOffset,n.colors.gray[100])}};
    }
  }
`,zc=ie.span`
  text-decoration: ${e=>e.deprecated?"line-through":"none"};
  margin-right: 8px;
`,Mc=ie(Cc)`
  margin: 0 5px 0 0;
`,Nc=ie((t=>{const{name:n,opened:r,className:o,onClick:i,httpVerb:s,deprecated:a}=t;return e.createElement(Dc,{className:o,onClick:i||void 0},e.createElement(Mc,{type:s},wt(s)),e.createElement(Pi,{size:"1.5em",direction:r?"down":"right",float:"left"}),e.createElement(zc,{deprecated:a},n),a?e.createElement(ji,{type:"warning"}," ",M("deprecated")," "):null)}))`
  padding: 10px;
  border-radius: 2px;
  margin-bottom: 4px;
  line-height: 1.5em;
  background-color: ${e=>{let{theme:t}=e;return t.colors.gray[100]}};
  cursor: pointer;
  outline-color: ${e=>{let{theme:n}=e;return(0,t.darken)(n.colors.tonalOffset,n.colors.gray[100])}};
`,Fc=ie.div`
  padding: 10px 25px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.gray[50]}};
  margin-bottom: 5px;
  margin-top: 5px;
`;let Bc=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).selectElement=()=>{Fs.selectElement(e.child)},e}return i(n,t),n.prototype.render=function(){const{children:t}=this.props;return e.createElement("div",{ref:e=>this.child=e,onClick:this.selectElement,onFocus:this.selectElement,tabIndex:0,role:"button"},t)},n}(e.PureComponent);const qc=ie.div`
  cursor: pointer;
  position: relative;
  margin-bottom: 5px;
`,Qc=ie.span`
  font-family: ${e=>e.theme.typography.code.fontFamily};
  margin-left: 10px;
  flex: 1;
  overflow-x: hidden;
  text-overflow: ellipsis;
`,Uc=ie.button`
  outline: 0;
  color: inherit;
  width: 100%;
  text-align: left;
  cursor: pointer;
  padding: 10px 30px 10px ${e=>e.inverted?"10px":"20px"};
  border-radius: ${e=>e.inverted?"0":"4px 4px 0 0"};
  background-color: ${e=>e.inverted?"transparent":e.theme.codeBlock.backgroundColor};
  display: flex;
  white-space: nowrap;
  align-items: center;
  border: ${e=>e.inverted?"0":"1px solid transparent"};
  border-bottom: ${e=>e.inverted?"1px solid #ccc":"0"};
  transition: border-color 0.25s ease;

  ${e=>e.expanded&&!e.inverted&&`border-color: ${e.theme.colors.border.dark};`||""}

  .${Qc} {
    color: ${e=>e.inverted?e.theme.colors.text.primary:"#ffffff"};
  }
  &:focus {
    box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.45), 0 2px 0 rgba(128, 128, 128, 0.25);
  }
`,Wc=ie.span.attrs((e=>({className:`http-verb ${e.type}`})))`
  font-size: ${e=>e.compact?"0.8em":"0.929em"};
  line-height: ${e=>e.compact?"18px":"20px"};
  background-color: ${e=>e.theme.colors.http[e.type]||"#999999"};
  color: #ffffff;
  padding: ${e=>e.compact?"2px 8px":"3px 10px"};
  text-transform: uppercase;
  font-family: ${e=>e.theme.typography.headings.fontFamily};
  margin: 0;
`,Vc=ie.div`
  position: absolute;
  width: 100%;
  z-index: 100;
  background: ${e=>e.theme.rightPanel.servers.overlay.backgroundColor};
  color: ${e=>e.theme.rightPanel.servers.overlay.textColor};
  box-sizing: border-box;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.33);
  overflow: hidden;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  transition: all 0.25s ease;
  visibility: hidden;
  ${e=>e.expanded?"visibility: visible;":"transform: translateY(-50%) scaleY(0);"}
`,Hc=ie.div`
  padding: 10px;
`,Jc=ie.div`
  padding: 5px;
  border: 1px solid #ccc;
  background: ${e=>e.theme.rightPanel.servers.url.backgroundColor};
  word-break: break-all;
  color: ${e=>e.theme.colors.primary.main};
  > span {
    color: ${e=>e.theme.colors.text.primary};
  }
`;let Yc=function(t){function n(e){var n;return(n=t.call(this,e)||this).toggle=()=>{n.setState({expanded:!n.state.expanded})},n.state={expanded:!1},n}return i(n,t),n.prototype.render=function(){const{operation:t,inverted:n,hideHostname:r}=this.props,{expanded:o}=this.state;return e.createElement(me.Consumer,null,(i=>e.createElement(qc,null,e.createElement(Uc,{onClick:this.toggle,expanded:o,inverted:n},e.createElement(Wc,{type:t.httpVerb,compact:this.props.compact},t.httpVerb),e.createElement(Qc,null,t.path),e.createElement(Pi,{float:"right",color:n?"black":"white",size:"20px",direction:o?"up":"down",style:{marginRight:"-25px"}})),e.createElement(Vc,{expanded:o,"aria-hidden":!o},t.servers.map((n=>{const o=i.expandDefaultServerVariables?mt(n.url,n.variables):n.url,s=A(o);return e.createElement(Hc,{key:o},e.createElement(Is,{source:n.description||"",compact:!0}),e.createElement(Bc,null,e.createElement(Jc,null,e.createElement("span",null,r||i.hideHostname?"/"===s?"":s:o),t.path)))}))))))},n}(e.Component),Zc=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),n.prototype.render=function(){const{place:t,parameters:n}=this.props;return n&&n.length?e.createElement("div",{key:t},e.createElement(vi,null,t," Parameters"),e.createElement(Fi,null,e.createElement("tbody",null,g(n,((t,n)=>e.createElement(Ga,{key:t.name,isLast:n,field:t,showExamples:!0})))))):null},n}(e.PureComponent);Object.defineProperty,Object.getOwnPropertyDescriptor;let Gc=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).switchMedia=t=>{let{idx:n}=t;e.props.content&&void 0!==n&&e.props.content.activate(n)},e}return i(n,t),n.prototype.render=function(){const{content:t}=this.props;if(!t||!t.mediaTypes||!t.mediaTypes.length)return null;const n=t.activeMimeIdx,r=t.mediaTypes.map(((e,t)=>({value:e.name,idx:t}))),o=t=>{let{children:n}=t;return this.props.withLabel?e.createElement(ia,null,e.createElement(oa,null,"Content type"),n):n};return e.createElement(e.Fragment,null,e.createElement(o,null,this.props.renderDropdown({value:r[n].value,options:r,onChange:this.switchMedia,ariaLabel:"Content type"})),this.props.children(t.active))},n}(e.Component);Gc=((e,t,n,r)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([pa.observer],Gc);var Xc=Object.defineProperty,Kc=Object.getOwnPropertySymbols,ep=Object.prototype.hasOwnProperty,tp=Object.prototype.propertyIsEnumerable,np=(e,t,n)=>t in e?Xc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const rp=["path","query","cookie","header"];let op=function(t){function n(){return t.apply(this,arguments)||this}i(n,t);var r=n.prototype;return r.orderParams=function(e){const t={};return e.forEach((e=>{var n,r,o;o=e,(n=t)[r=e.in]||(n[r]=[]),n[r].push(o)})),t},r.render=function(){const{body:t,parameters:n=[]}=this.props;if(void 0===t&&void 0===n)return null;const r=this.orderParams(n),o=n.length>0?rp:[],i=t&&t.content,s=t&&t.description;return e.createElement(e.Fragment,null,o.map((t=>e.createElement(Zc,{key:t,place:t,parameters:r[t]}))),i&&e.createElement(sp,{content:i,description:s}))},n}(e.PureComponent);function ip(t){return e.createElement(vi,{key:"header"},"Request Body schema: ",e.createElement(ws,((e,t)=>{for(var n in t||(t={}))ep.call(t,n)&&np(e,n,t[n]);if(Kc)for(var n of Kc(t))tp.call(t,n)&&np(e,n,t[n]);return e})({},t)))}function sp(t){const{content:n,description:r}=t,{isRequestType:o}=n;return e.createElement(Gc,{content:n,renderDropdown:ip},(t=>{let{schema:n}=t;return e.createElement(e.Fragment,null,void 0!==r&&e.createElement(Is,{source:r}),"object"===(null==n?void 0:n.type)&&e.createElement(Ta,{constraints:(null==n?void 0:n.constraints)||[]}),e.createElement(Il,{skipReadOnly:o,skipWriteOnly:!o,key:"schema",schema:n}))}))}const ap=e.memo((function(t){let{title:n,type:r,empty:o,code:i,opened:s,className:a,onClick:l}=t;return e.createElement("button",{className:a,onClick:!o&&l||void 0,"aria-expanded":s,disabled:o},!o&&e.createElement(Pi,{size:"1.5em",color:r,direction:s?"down":"right",float:"left"}),e.createElement(up,null,i," "),e.createElement(Is,{compact:!0,inline:!0,source:n}))})),lp=ie(ap)`
  display: block;
  border: 0;
  width: 100%;
  text-align: left;
  padding: 10px;
  border-radius: 2px;
  margin-bottom: 4px;
  line-height: 1.5em;
  cursor: pointer;

  color: ${e=>e.theme.colors.responses[e.type].color};
  background-color: ${e=>e.theme.colors.responses[e.type].backgroundColor};
  &:focus {
    outline: auto ${e=>e.theme.colors.responses[e.type].color};
  }
  ${e=>e.empty?'\ncursor: default;\n&::before {\n  content: "—";\n  font-weight: bold;\n  width: 1.5em;\n  text-align: center;\n  display: inline-block;\n  vertical-align: top;\n}\n&:focus {\n  outline: 0;\n}\n':""};
`,cp=ie.div`
  padding: 10px;
`,pp=ie(vi.withComponent("caption",{target:"e1hwgo3d3"}))`
  text-align: left;
  margin-top: 1em;
  caption-side: top;
`,up=ie.strong`
  vertical-align: top;
`;let dp=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),n.prototype.render=function(){const{headers:t}=this.props;return void 0===t||0===t.length?null:e.createElement(Fi,null,e.createElement(pp,null," Response Headers "),e.createElement("tbody",null,g(t,((t,n)=>e.createElement(Ga,{isLast:n,key:t.name,field:t,showExamples:!0})))))},n}(e.PureComponent);var hp=Object.defineProperty,mp=Object.getOwnPropertySymbols,fp=Object.prototype.hasOwnProperty,yp=Object.prototype.propertyIsEnumerable,gp=(e,t,n)=>t in e?hp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;let bp=function(t){function n(){var n;return(n=t.apply(this,arguments)||this).renderDropdown=t=>e.createElement(vi,{key:"header"},"Response Schema: ",e.createElement(ws,((e,t)=>{for(var n in t||(t={}))fp.call(t,n)&&gp(e,n,t[n]);if(mp)for(var n of mp(t))yp.call(t,n)&&gp(e,n,t[n]);return e})({},t))),n}return i(n,t),n.prototype.render=function(){const{description:t,extensions:n,headers:r,content:o}=this.props.response;return e.createElement(e.Fragment,null,t&&e.createElement(Is,{source:t}),e.createElement(Pa,{extensions:n}),e.createElement(dp,{headers:r}),e.createElement(Gc,{content:o,renderDropdown:this.renderDropdown},(t=>{let{schema:n}=t;return e.createElement(e.Fragment,null,"object"===(null==n?void 0:n.type)&&e.createElement(Ta,{constraints:(null==n?void 0:n.constraints)||[]}),e.createElement(Il,{skipWriteOnly:!0,key:"schema",schema:n}))})))},n}(e.PureComponent);const xp=(0,pa.observer)((t=>{let{response:n}=t;const{extensions:r,headers:o,type:i,summary:s,description:a,code:l,expanded:c,content:p}=n,u=e.useMemo((()=>void 0===p?[]:p.mediaTypes.filter((e=>void 0!==e.schema))),[p]),d=e.useMemo((()=>!(r&&0!==Object.keys(r).length||0!==o.length||0!==u.length||a)),[r,o,u,a]);return e.createElement("div",null,e.createElement(lp,{onClick:()=>n.toggle(),type:i,empty:d,title:s||"",code:l,opened:c}),c&&!d&&e.createElement(cp,null,e.createElement(bp,{response:n})))})),vp=ie.h3`
  font-size: 1.3em;
  padding: 0.2em 0;
  margin: 3em 0 1.1em;
  color: ${e=>{let{theme:t}=e;return t.colors.text.primary}};
  font-weight: normal;
`;let wp=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),n.prototype.render=function(){const{responses:t,isCallback:n}=this.props;return t&&0!==t.length?e.createElement("div",null,e.createElement(vp,null,M(n?"callbackResponses":"responses")),t.map((t=>e.createElement(xp,{key:t.code,response:t})))):null},n}(e.PureComponent);function kp(t){const{security:n,showSecuritySchemeType:r,expanded:o}=t,i=n.schemes.length>1;return 0===n.schemes.length?e.createElement(Ul,{expanded:o},"None"):e.createElement(Ul,{expanded:o},i&&"(",n.schemes.map((t=>e.createElement(Ql,{key:t.id},r&&`${rc[t.type]||t.type}: `,e.createElement("i",null,t.displayName),o&&t.scopes.length?[" (",t.scopes.map((t=>e.createElement(ql,{key:t},t))),") "]:null))),i&&") ")}const Op=t=>{let{scopes:n}=t;return n.length?e.createElement("div",null,e.createElement("b",null,"Required scopes: "),n.map(((t,n)=>e.createElement(e.Fragment,{key:n},e.createElement("code",null,t)," ")))):null};function Ep(t){const n=Si(),r=null==n?void 0:n.options.showSecuritySchemeType,[o,i]=(0,e.useState)(!1),{securities:s}=t;if(!(null==s?void 0:s.length)||(null==n?void 0:n.options.hideSecuritySection))return null;const a=null==n?void 0:n.spec.securitySchemes.schemes.filter((e=>{let{id:t}=e;return s.find((e=>e.schemes.find((e=>e.id===t))))}));return e.createElement(e.Fragment,null,e.createElement(Jl,{expanded:o},e.createElement(Wl,{onClick:()=>i(!o)},e.createElement(Hl,null,"Authorizations:"),e.createElement(Pi,{size:"1.3em",direction:o?"down":"right"})),e.createElement(Vl,{expanded:o},s.map(((t,n)=>e.createElement(kp,{key:n,expanded:o,showSecuritySchemeType:r,security:t}))))),o&&(null==a?void 0:a.length)&&a.map(((t,n)=>e.createElement(Zl,{key:n},e.createElement("h5",null,e.createElement(Sp,null)," ",rc[t.type]||t.type,": ",t.id),e.createElement(Is,{source:t.description||""}),e.createElement(nc,{key:t.id,scheme:t,RequiredScopes:e.createElement(Op,{scopes:$p(t.id,s)})})))))}const Sp=()=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"11",height:"11"},e.createElement("path",{fill:"currentColor",d:"M18 10V6A6 6 0 0 0 6 6v4H3v14h18V10h-3zM8 6c0-2.206 1.794-4 4-4s4 1.794 4 4v4H8V6zm11 16H5V12h14v10z"}));function $p(e,t){const n=[];let r=t.length;for(;r--;){const o=t[r];let i=o.schemes.length;for(;i--;){const t=o.schemes[i];t.id===e&&Array.isArray(t.scopes)&&n.push.apply(n,a(t.scopes))}}return Array.from(new Set(n))}Object.defineProperty,Object.getOwnPropertyDescriptor;let Rp=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),n.prototype.render=function(){const{operation:t}=this.props,{description:n,externalDocs:r}=t,o=!(!n&&!r);return e.createElement(Fc,null,o&&e.createElement(Cp,null,void 0!==n&&e.createElement(Is,{source:n}),r&&e.createElement($a,{externalDocs:r})),e.createElement(Yc,{operation:this.props.operation,inverted:!0,compact:!0}),e.createElement(Pa,{extensions:t.extensions}),e.createElement(Ep,{securities:t.security}),e.createElement(op,{parameters:t.parameters,body:t.requestBody}),e.createElement(wp,{responses:t.responses,isCallback:t.isCallback}))},n}(e.Component);Rp=((e,t,n,r)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([pa.observer],Rp);const Cp=ie.div`
  margin-bottom: ${e=>{let{theme:t}=e;return 3*t.spacing.unit}}px;
`;Object.defineProperty,Object.getOwnPropertyDescriptor;let Ap=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).toggle=()=>{e.props.callbackOperation.toggle()},e}return i(n,t),n.prototype.render=function(){const{name:t,expanded:n,httpVerb:r,deprecated:o}=this.props.callbackOperation;return e.createElement(e.Fragment,null,e.createElement(Nc,{onClick:this.toggle,name:t,opened:n,httpVerb:r,deprecated:o}),n&&e.createElement(Rp,{operation:this.props.callbackOperation}))},n}(e.Component);Ap=((e,t,n,r)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([pa.observer],Ap);let Pp=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),n.prototype.render=function(){const{callbacks:t}=this.props;return t&&0!==t.length?e.createElement("div",null,e.createElement(jp,null," Callbacks "),t.map((t=>t.operations.map(((n,r)=>e.createElement(Ap,{key:`${t.name}_${r}`,callbackOperation:n})))))):null},n}(e.PureComponent);const jp=ie.h3`
  font-size: 1.3em;
  padding: 0.2em 0;
  margin: 3em 0 1.1em;
  color: ${e=>{let{theme:t}=e;return t.colors.text.primary}};
  font-weight: normal;
`;Object.defineProperty,Object.getOwnPropertyDescriptor;let Ip=function(t){function n(e){var n;return(n=t.call(this,e)||this).switchItem=e=>{let{idx:t}=e;n.props.items&&void 0!==t&&n.setState({activeItemIdx:t})},n.state={activeItemIdx:0},n}return i(n,t),n.prototype.render=function(){const{items:t}=this.props;if(!t||!t.length)return null;const n=t=>{let{children:n}=t;return this.props.label?e.createElement(ia,null,e.createElement(oa,null,this.props.label),n):n};return e.createElement(e.Fragment,null,e.createElement(n,null,this.props.renderDropdown({value:this.props.options[this.state.activeItemIdx].value,options:this.props.options,onChange:this.switchItem,ariaLabel:this.props.label||"Callback"})),this.props.children(t[this.state.activeItemIdx]))},n}(e.Component);Ip=((e,t,n,r)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([pa.observer],Ip);var Tp=Object.defineProperty,_p=Object.defineProperties,Lp=(Object.getOwnPropertyDescriptor,Object.getOwnPropertyDescriptors),Dp=Object.getOwnPropertySymbols,zp=Object.prototype.hasOwnProperty,Mp=Object.prototype.propertyIsEnumerable,Np=(e,t,n)=>t in e?Tp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;let Fp=function(t){function n(){var n;return(n=t.apply(this,arguments)||this).renderDropdown=t=>{return e.createElement(ws,(n=((e,t)=>{for(var n in t||(t={}))zp.call(t,n)&&Np(e,n,t[n]);if(Dp)for(var n of Dp(t))Mp.call(t,n)&&Np(e,n,t[n]);return e})({Label:ra,Dropdown:sa},t),_p(n,Lp({variant:"dark"}))));var n},n}return i(n,t),n.prototype.render=function(){const t=this.props.content;return void 0===t?null:e.createElement(Gc,{content:t,renderDropdown:this.renderDropdown,withLabel:!0},(t=>e.createElement(la,{key:"samples",mediaType:t,renderDropdown:this.renderDropdown})))},n}(e.Component);Fp=((e,t,n,r)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([pa.observer],Fp);let Bp=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),n.prototype.render=function(){const t=this.props.callback.codeSamples.find((e=>bo(e)));return t?e.createElement(qp,null,e.createElement(Fp,{content:t.requestBodyContent})):null},n}(e.Component);const qp=ie.div`
  margin-top: 15px;
`;var Qp=Object.defineProperty,Up=Object.defineProperties,Wp=(Object.getOwnPropertyDescriptor,Object.getOwnPropertyDescriptors),Vp=Object.getOwnPropertySymbols,Hp=Object.prototype.hasOwnProperty,Jp=Object.prototype.propertyIsEnumerable,Yp=(e,t,n)=>t in e?Qp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;let Zp=function(t){function n(){var n;return(n=t.apply(this,arguments)||this).renderDropdown=t=>{return e.createElement(ws,(n=((e,t)=>{for(var n in t||(t={}))Hp.call(t,n)&&Yp(e,n,t[n]);if(Vp)for(var n of Vp(t))Jp.call(t,n)&&Yp(e,n,t[n]);return e})({Label:ra,Dropdown:sa},t),Up(n,Wp({variant:"dark"}))));var n},n}return i(n,t),n.prototype.render=function(){const{callbacks:t}=this.props;if(!t||0===t.length)return null;const n=t.map((e=>e.operations.map((e=>e)))).reduce(((e,t)=>e.concat(t)),[]);if(!n.some((e=>e.codeSamples.length>0)))return null;const r=n.map(((e,t)=>({value:`${e.httpVerb.toUpperCase()}: ${e.name}`,idx:t})));return e.createElement("div",null,e.createElement(xi,null," Callback payload samples "),e.createElement(Gp,null,e.createElement(Ip,{items:n,renderDropdown:this.renderDropdown,label:"Callback",options:r},(t=>e.createElement(Bp,{key:"callbackPayloadSample",callback:t,renderDropdown:this.renderDropdown})))))},n}(e.Component);Zp.contextType=me,Zp=((e,t,n,r)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([pa.observer],Zp);const Gp=ie.div`
  background: ${e=>{let{theme:t}=e;return t.codeBlock.backgroundColor}};
  padding: ${e=>4*e.theme.spacing.unit}px;
`;Object.defineProperty,Object.getOwnPropertyDescriptor;let Xp=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),n.prototype.render=function(){const{operation:t}=this.props,n=t.codeSamples,r=n.length>0,o=1===n.length&&this.context.hideSingleRequestSampleTab;return r&&e.createElement("div",null,e.createElement(xi,null," ",M("requestSamples")," "),e.createElement(Hi,{defaultIndex:0},e.createElement(Vi.TabList,{hidden:o},n.map((t=>e.createElement(Vi.Tab,{key:t.lang+"_"+(t.label||"")},void 0!==t.label?t.label:t.lang)))),n.map((t=>e.createElement(Vi.TabPanel,{key:t.lang+"_"+(t.label||"")},bo(t)?e.createElement("div",null,e.createElement(Fp,{content:t.requestBodyContent})):e.createElement(Ks,{lang:t.lang,source:t.source}))))))||null},n}(e.Component);Xp.contextType=me,Xp=((e,t,n,r)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([pa.observer],Xp),Object.defineProperty,Object.getOwnPropertyDescriptor;let Kp=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),n.prototype.render=function(){const{operation:t}=this.props,n=t.responses.filter((e=>e.content&&e.content.hasSample));return n.length>0&&e.createElement("div",null,e.createElement(xi,null," ",M("responseSamples")," "),e.createElement(Hi,{defaultIndex:0},e.createElement(Vi.TabList,null,n.map((t=>e.createElement(Vi.Tab,{className:"tab-"+t.type,key:t.code},t.code)))),n.map((t=>e.createElement(Vi.TabPanel,{key:t.code},e.createElement("div",null,e.createElement(Fp,{content:t.content})))))))||null},n}(e.Component);Kp=((e,t,n,r)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([pa.observer],Kp);var eu=Object.defineProperty,tu=Object.defineProperties,nu=Object.getOwnPropertyDescriptors,ru=Object.getOwnPropertySymbols,ou=Object.prototype.hasOwnProperty,iu=Object.prototype.propertyIsEnumerable,su=(e,t,n)=>t in e?eu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const au=ie.div`
  margin-bottom: ${e=>{let{theme:t}=e;return 6*t.spacing.unit}}px;
`,lu=(0,pa.observer)((t=>{let{operation:n}=t;const{name:r,description:o,deprecated:i,externalDocs:s,isWebhook:a,httpVerb:l}=n,c=!(!o&&!s),{showWebhookVerb:p}=e.useContext(me);return e.createElement(me.Consumer,null,(t=>{return e.createElement(mi,(u=((e,t)=>{for(var n in t||(t={}))ou.call(t,n)&&su(e,n,t[n]);if(ru)for(var n of ru(t))iu.call(t,n)&&su(e,n,t[n]);return e})({},{[ri]:n.operationHash}),d={id:n.operationHash},tu(u,nu(d))),e.createElement(pi,null,e.createElement(bi,null,e.createElement(Ci,{to:n.id}),r," ",i&&e.createElement(ji,{type:"warning"}," Deprecated "),a&&e.createElement(ji,{type:"primary"}," ","Webhook ",p&&l&&"| "+l.toUpperCase())),t.pathInMiddlePanel&&!a&&e.createElement(Yc,{operation:n,inverted:!0}),c&&e.createElement(au,null,void 0!==o&&e.createElement(Is,{source:o}),s&&e.createElement($a,{externalDocs:s})),e.createElement(Pa,{extensions:n.extensions}),e.createElement(Ep,{securities:n.security}),e.createElement(op,{parameters:n.parameters,body:n.requestBody}),e.createElement(wp,{responses:n.responses}),e.createElement(Pp,{callbacks:n.callbacks})),e.createElement(hi,null,!t.pathInMiddlePanel&&!a&&e.createElement(Yc,{operation:n}),e.createElement(Xp,{operation:n}),e.createElement(Kp,{operation:n}),e.createElement(Zp,{callbacks:n.callbacks})));var u,d}))}));var cu=Object.defineProperty,pu=Object.getOwnPropertyDescriptor,uu=Object.getOwnPropertySymbols,du=Object.prototype.hasOwnProperty,hu=Object.prototype.propertyIsEnumerable,mu=(e,t,n)=>t in e?cu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fu=(e,t,n,r)=>{for(var o,i=r>1?void 0:r?pu(t,n):t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&cu(t,n,i),i};let yu=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),n.prototype.render=function(){const t=this.props.items;return 0===t.length?null:t.map((t=>e.createElement(gu,{key:t.id,item:t})))},n}(e.Component);yu=fu([pa.observer],yu);let gu=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),n.prototype.render=function(){const t=this.props.item;let n;const{type:r}=t;switch(r){case"group":n=null;break;case"tag":case"section":default:n=e.createElement(xu,((e,t)=>{for(var n in t||(t={}))du.call(t,n)&&mu(e,n,t[n]);if(uu)for(var n of uu(t))hu.call(t,n)&&mu(e,n,t[n]);return e})({},this.props));break;case"operation":n=e.createElement(vu,{item:t})}return e.createElement(e.Fragment,null,n&&e.createElement(ui,{id:t.id,underlined:"operation"===t.type},n),t.items&&e.createElement(yu,{items:t.items}))},n}(e.Component);gu=fu([pa.observer],gu);const bu=t=>e.createElement(pi,{compact:!0},t);let xu=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),n.prototype.render=function(){const{name:t,description:n,externalDocs:r,level:o}=this.props.item,i=2===o?bi:gi;return e.createElement(e.Fragment,null,e.createElement(mi,null,e.createElement(pi,{compact:!1},e.createElement(i,null,e.createElement(Ci,{to:this.props.item.id}),t))),e.createElement(Sc,{parentId:this.props.item.id,source:n||"",htmlWrap:bu}),r&&e.createElement(mi,null,e.createElement(pi,null,e.createElement($a,{externalDocs:r}))))},n}(e.Component);xu=fu([pa.observer],xu);let vu=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),n.prototype.render=function(){return e.createElement(lu,{operation:this.props.item})},n}(e.Component);vu=fu([pa.observer],vu);var wu=Object.defineProperty,ku=Object.defineProperties,Ou=(Object.getOwnPropertyDescriptor,Object.getOwnPropertyDescriptors),Eu=Object.getOwnPropertySymbols,Su=Object.prototype.hasOwnProperty,$u=Object.prototype.propertyIsEnumerable,Ru=(e,t,n)=>t in e?wu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;let Cu=function(t){function n(){var n;return(n=t.apply(this,arguments)||this).ref=e.createRef(),n.activate=e=>{n.props.onActivate(n.props.item),e.stopPropagation()},n}i(n,t);var r=n.prototype;return r.componentDidMount=function(){this.scrollIntoViewIfActive()},r.componentDidUpdate=function(){this.scrollIntoViewIfActive()},r.scrollIntoViewIfActive=function(){this.props.item.active&&this.ref.current&&m(this.ref.current)},r.render=function(){const{item:t,withoutChildren:n}=this.props;return e.createElement(jc,{onClick:this.activate,depth:t.depth,"data-item-id":t.id},"operation"===t.type?e.createElement(Au,(r=((e,t)=>{for(var n in t||(t={}))Su.call(t,n)&&Ru(e,n,t[n]);if(Eu)for(var n of Eu(t))$u.call(t,n)&&Ru(e,n,t[n]);return e})({},this.props),ku(r,Ou({item:t})))):e.createElement(Tc,{depth:t.depth,active:t.active,type:t.type,ref:this.ref},e.createElement(_c,{title:t.sidebarLabel},t.sidebarLabel,this.props.children),t.depth>0&&t.items.length>0&&e.createElement(Pi,{float:"right",direction:t.expanded?"down":"right"})||null),!n&&t.items&&t.items.length>0&&e.createElement(Lu,{expanded:t.expanded,items:t.items,onActivate:this.props.onActivate}));var r},n}(e.Component);Cu=((e,t,n,r)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([pa.observer],Cu);const Au=(0,pa.observer)((t=>{const{item:n}=t,r=e.createRef(),{showWebhookVerb:o}=e.useContext(me);return e.useEffect((()=>{t.item.active&&r.current&&m(r.current)}),[t.item.active,r]),e.createElement(Tc,{depth:n.depth,active:n.active,deprecated:n.deprecated,ref:r},n.isWebhook?e.createElement(Cc,{type:"hook"},o?n.httpVerb:M("webhook")):e.createElement(Cc,{type:n.httpVerb},wt(n.httpVerb)),e.createElement(_c,{width:"calc(100% - 38px)"},n.sidebarLabel,t.children))}));var Pu=Object.defineProperty,ju=(Object.getOwnPropertyDescriptor,Object.getOwnPropertySymbols),Iu=Object.prototype.hasOwnProperty,Tu=Object.prototype.propertyIsEnumerable,_u=(e,t,n)=>t in e?Pu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;let Lu=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),n.prototype.render=function(){const{items:t,root:n,className:r}=this.props,o=null==this.props.expanded||this.props.expanded;return e.createElement(Pc,((e,t)=>{for(var n in t||(t={}))Iu.call(t,n)&&_u(e,n,t[n]);if(ju)for(var n of ju(t))Tu.call(t,n)&&_u(e,n,t[n]);return e})({className:r,style:this.props.style,expanded:o},n?{role:"menu"}:{}),t.map(((t,n)=>e.createElement(Cu,{key:n,item:t,onActivate:this.props.onActivate}))))},n}(e.Component);function Du(){const[t,n]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{n(!0)}),[]),t?e.createElement("img",{alt:"redocly logo",onError:()=>n(!1),src:"https://cdn.redoc.ly/redoc/logo-mini.svg"}):null}Lu=((e,t,n,r)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([pa.observer],Lu),Object.defineProperty,Object.getOwnPropertyDescriptor;let zu=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).activate=t=>{if(t&&t.active&&e.context.menuToggle)return t.expanded?t.collapse():t.expand();e.props.menu.activateAndScroll(t,!0),setTimeout((()=>{e._updateScroll&&e._updateScroll()}))},e.saveScrollUpdate=t=>{e._updateScroll=t},e}return i(n,t),n.prototype.render=function(){const t=this.props.menu;return e.createElement(ps,{updateFn:this.saveScrollUpdate,className:this.props.className,options:{wheelPropagation:!1}},e.createElement(Lu,{items:t.items,onActivate:this.activate,root:!0}),e.createElement(Lc,null,e.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://redocly.com/redoc/"},e.createElement(Du,null),"API docs by Redocly")))},n}(e.Component);zu.contextType=me,zu=((e,t,n,r)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([pa.observer],zu);const Mu=t=>{let{open:n}=t;const r=n?8:-4;return e.createElement(Fu,null,e.createElement(Nu,{size:15,style:{transform:`translate(2px, ${r}px) rotate(180deg)`,transition:"transform 0.2s ease"}}),e.createElement(Nu,{size:15,style:{transform:`translate(2px, ${0-r}px)`,transition:"transform 0.2s ease"}}))},Nu=t=>{let{size:n=10,className:r="",style:o}=t;return e.createElement("svg",{className:r,style:o||{},viewBox:"0 0 926.23699 573.74994",version:"1.1",x:"0px",y:"0px",width:n,height:n},e.createElement("g",{transform:"translate(904.92214,-879.1482)"},e.createElement("path",{d:"\n          m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,\n          -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,\n          0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,\n          -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,\n          -174.68583 0.6895,0 26.281,25.03215 56.8701,\n          55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864\n          -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,\n          -104.0616 -231.873,-231.248 z\n        ",fill:"currentColor"})))},Fu=ie.div`
  user-select: none;
  width: 20px;
  height: 20px;
  align-self: center;
  display: flex;
  flex-direction: column;
  color: ${e=>e.theme.colors.primary.main};
`;let Bu;Object.defineProperty,Object.getOwnPropertyDescriptor,u&&(Bu=l(322));const qu=Bu&&Bu(),Qu=ie.div`
  width: ${e=>e.theme.sidebar.width};
  background-color: ${e=>e.theme.sidebar.backgroundColor};
  overflow: hidden;
  display: flex;
  flex-direction: column;

  backface-visibility: hidden;
  /* contain: strict; TODO: breaks layout since Chrome 80*/

  height: 100vh;
  position: sticky;
  position: -webkit-sticky;
  top: 0;

  ${oe.lessThan("small")`
    position: fixed;
    z-index: 20;
    width: 100%;
    background: ${e=>{let{theme:t}=e;return t.sidebar.backgroundColor}};
    display: ${e=>e.open?"flex":"none"};
  `};

  @media print {
    display: none;
  }
`,Uu=ie.div`
  outline: none;
  user-select: none;
  background-color: ${e=>{let{theme:t}=e;return t.fab.backgroundColor}};
  color: ${e=>e.theme.colors.primary.main};
  display: none;
  cursor: pointer;
  position: fixed;
  right: 20px;
  z-index: 100;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  ${oe.lessThan("small")`
    display: flex;
  `};

  bottom: 44px;

  width: 60px;
  height: 60px;
  padding: 0 20px;
  svg {
    color: ${e=>{let{theme:t}=e;return t.fab.color}};
  }

  @media print {
    display: none;
  }
`;let Wu=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).state={offsetTop:"0px"},e.toggleNavMenu=()=>{e.props.menu.toggleSidebar()},e}i(n,t);var r=n.prototype;return r.componentDidMount=function(){qu&&qu.add(this.stickyElement),this.setState({offsetTop:this.getScrollYOffset(this.context)})},r.componentWillUnmount=function(){qu&&qu.remove(this.stickyElement)},r.getScrollYOffset=function(e){let t;return t=void 0!==this.props.scrollYOffset?Z.normalizeScrollYOffset(this.props.scrollYOffset)():e.scrollYOffset(),t+"px"},r.render=function(){const t=this.props.menu.sideBarOpened,n=this.state.offsetTop;return e.createElement(e.Fragment,null,e.createElement(Qu,{open:t,className:this.props.className,style:{top:n,height:`calc(100vh - ${n})`},ref:e=>{this.stickyElement=e}},this.props.children),!this.context.hideFab&&e.createElement(Uu,{onClick:this.toggleNavMenu},e.createElement(Mu,{open:t})))},n}(e.Component);Wu.contextType=me,Wu=((e,t,n,r)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([pa.observer],Wu);const Vu=ie.div`
  ${e=>{let{theme:t}=e;return`\n  font-family: ${t.typography.fontFamily};\n  font-size: ${t.typography.fontSize};\n  font-weight: ${t.typography.fontWeightRegular};\n  line-height: ${t.typography.lineHeight};\n  color: ${t.colors.text.primary};\n  display: flex;\n  position: relative;\n  text-align: left;\n\n  -webkit-font-smoothing: ${t.typography.smoothing};\n  font-smoothing: ${t.typography.smoothing};\n  ${t.typography.optimizeSpeed?"text-rendering: optimizeSpeed !important":""};\n\n  tap-highlight-color: rgba(0, 0, 0, 0);\n  text-size-adjust: 100%;\n\n  * {\n    box-sizing: border-box;\n    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n  }\n`}};
`,Hu=ie.div`
  z-index: 1;
  position: relative;
  overflow: hidden;
  width: calc(100% - ${e=>e.theme.sidebar.width});
  ${oe.lessThan("small",!0)`
    width: 100%;
  `};

  contain: layout;
`,Ju=ie.div`
  background: ${e=>{let{theme:t}=e;return t.rightPanel.backgroundColor}};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: ${e=>{let{theme:t}=e;if(t.rightPanel.width.endsWith("%")){const e=parseInt(t.rightPanel.width,10);return`calc((100% - ${t.sidebar.width}) * ${e/100})`}return t.rightPanel.width}};
  ${oe.lessThan("medium",!0)`
    display: none;
  `};
`,Yu=ie.div`
  padding: 5px 0;
`,Zu=ie.input.attrs((()=>({className:"search-input"})))`
  width: calc(100% - ${e=>8*e.theme.spacing.unit}px);
  box-sizing: border-box;
  margin: 0 ${e=>4*e.theme.spacing.unit}px;
  padding: 5px ${e=>2*e.theme.spacing.unit}px 5px
    ${e=>4*e.theme.spacing.unit}px;
  border: 0;
  border-bottom: 1px solid
    ${e=>{let{theme:n}=e;return((0,t.getLuminance)(n.sidebar.backgroundColor)>.5?t.darken:t.lighten)(.1,n.sidebar.backgroundColor)}};
  font-family: ${e=>{let{theme:t}=e;return t.typography.fontFamily}};
  font-weight: bold;
  font-size: 13px;
  color: ${e=>e.theme.sidebar.textColor};
  background-color: transparent;
  outline: none;
`,Gu=ie((t=>e.createElement("svg",{className:t.className,version:"1.1",viewBox:"0 0 1000 1000",x:"0px",xmlns:"http://www.w3.org/2000/svg",y:"0px"},e.createElement("path",{d:"M968.2,849.4L667.3,549c83.9-136.5,66.7-317.4-51.7-435.6C477.1-25,252.5-25,113.9,113.4c-138.5,138.3-138.5,362.6,0,501C219.2,730.1,413.2,743,547.6,666.5l301.9,301.4c43.6,43.6,76.9,14.9,104.2-12.4C981,928.3,1011.8,893,968.2,849.4z M524.5,522c-88.9,88.7-233,88.7-321.8,0c-88.9-88.7-88.9-232.6,0-321.3c88.9-88.7,233-88.7,321.8,0C613.4,289.4,613.4,433.3,524.5,522z"})))).attrs({className:"search-icon"})`
  position: absolute;
  left: ${e=>4*e.theme.spacing.unit}px;
  height: 1.8em;
  width: 0.9em;

  path {
    fill: ${e=>e.theme.sidebar.textColor};
  }
`,Xu=ie.div`
  padding: ${e=>e.theme.spacing.unit}px 0;
  background-color: ${e=>{let{theme:n}=e;return(0,t.darken)(.05,n.sidebar.backgroundColor)}}};
  color: ${e=>e.theme.sidebar.textColor};
  min-height: 150px;
  max-height: 250px;
  border-top: ${e=>{let{theme:n}=e;return(0,t.darken)(.1,n.sidebar.backgroundColor)}}};
  border-bottom: ${e=>{let{theme:n}=e;return(0,t.darken)(.1,n.sidebar.backgroundColor)}}};
  margin-top: 10px;
  line-height: 1.4;
  font-size: 0.9em;
  
  li {
    background-color: inherit;
  }

  ${Tc} {
    padding-top: 6px;
    padding-bottom: 6px;

    &:hover,
    &.active {
      background-color: ${e=>{let{theme:n}=e;return(0,t.darken)(.1,n.sidebar.backgroundColor)}};
    }

    > svg {
      display: none;
    }
  }
`,Ku=ie.i`
  position: absolute;
  display: inline-block;
  width: ${e=>2*e.theme.spacing.unit}px;
  text-align: center;
  right: ${e=>4*e.theme.spacing.unit}px;
  line-height: 2em;
  vertical-align: middle;
  margin-right: 2px;
  cursor: pointer;
  font-style: normal;
  color: '#666';
`;var ed=Object.defineProperty,td=Object.getOwnPropertyDescriptor;let nd=function(t){function n(e){var n;return(n=t.call(this,e)||this).activeItemRef=null,n.clear=()=>{n.setState({results:[],noResults:!1,term:"",activeItemIdx:-1}),n.props.marker.unmark()},n.handleKeyDown=e=>{if(27===e.keyCode&&n.clear(),40===e.keyCode&&(n.setState({activeItemIdx:Math.min(n.state.activeItemIdx+1,n.state.results.length-1)}),e.preventDefault()),38===e.keyCode&&(n.setState({activeItemIdx:Math.max(0,n.state.activeItemIdx-1)}),e.preventDefault()),13===e.keyCode){const e=n.state.results[n.state.activeItemIdx];if(e){const t=n.props.getItemById(e.meta);t&&n.props.onActivate(t)}}},n.search=e=>{const{minCharacterLengthToInitSearch:t}=n.context,r=e.target.value;r.length<t?n.clearResults(r):n.setState({term:r},(()=>n.searchCallback(n.state.term)))},n.state={results:[],noResults:!1,term:"",activeItemIdx:-1},n}i(n,t);var r=n.prototype;return r.clearResults=function(e){this.setState({results:[],noResults:!1,term:e}),this.props.marker.unmark()},r.setResults=function(e,t){this.setState({results:e,noResults:0===e.length}),this.props.marker.mark(t)},r.searchCallback=function(e){this.props.search.search(e).then((t=>{this.setResults(t,e)}))},r.render=function(){const{activeItemIdx:t}=this.state,n=this.state.results.filter((e=>this.props.getItemById(e.meta))).map((e=>({item:this.props.getItemById(e.meta),score:e.score}))).sort(((e,t)=>t.score-e.score));return e.createElement(Yu,{role:"search"},this.state.term&&e.createElement(Ku,{onClick:this.clear},"×"),e.createElement(Gu,null),e.createElement(Zu,{value:this.state.term,onKeyDown:this.handleKeyDown,placeholder:"Search...","aria-label":"Search",type:"text",onChange:this.search}),n.length>0&&e.createElement(ps,{options:{wheelPropagation:!1}},e.createElement(Xu,{"data-role":"search:results"},n.map(((n,r)=>e.createElement(Cu,{item:Object.create(n.item,{active:{value:r===t}}),onActivate:this.props.onActivate,withoutChildren:!0,key:n.item.id,"data-role":"search:result"}))))),this.state.term&&this.state.noResults?e.createElement(Xu,{"data-role":"search:results"},M("noResultsFound")):null)},n}(e.PureComponent);nd.contextType=me,((e,t,n,r)=>{for(var o,i=td(t,n),s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(t,n,i)||i);i&&ed(t,n,i)})([Oe.bind,(0,Oe.debounce)(400)],nd.prototype,"searchCallback");let rd=function(t){function n(){return t.apply(this,arguments)||this}i(n,t);var r=n.prototype;return r.componentDidMount=function(){this.props.store.onDidMount()},r.componentWillUnmount=function(){this.props.store.dispose()},r.render=function(){const{store:{spec:t,menu:n,options:r,search:o,marker:i}}=this.props,s=this.props.store;return e.createElement(re,{theme:r.theme},e.createElement(ki,{value:s},e.createElement(fe,{value:r},e.createElement(Vu,{className:"redoc-wrap"},e.createElement(Wu,{menu:n,className:"menu-content"},e.createElement(bc,{info:t.info}),!r.disableSearch&&e.createElement(nd,{search:o,marker:i,getItemById:n.getItemById,onActivate:n.activateAndScroll})||null,e.createElement(zu,{menu:n})),e.createElement(Hu,{className:"api-content"},e.createElement(mc,{store:s}),e.createElement(yu,{items:n.items})),e.createElement(Ju,null)))))},n}(e.Component);rd.propTypes={store:he.instanceOf(ac).isRequired};const od=function(t){const{spec:n,specUrl:r,options:o={},onLoaded:i}=t,s=J(o.hideLoading,!1),a=new Z(o);if(void 0!==a.nonce)try{l.nc=a.nonce}catch(e){}return e.createElement(le,null,e.createElement(Ei,{spec:n,specUrl:r,options:o,onLoaded:i},(t=>{let{loading:n,store:r}=t;return n?s?null:e.createElement(de,{color:a.theme.colors.primary.main}):e.createElement(rd,{store:r})})))}}(),c}()}}]);
//# sourceMappingURL=e97051c3-3f050d9144c749b265ca.js.map