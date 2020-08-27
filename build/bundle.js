var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t){return null==t?"":t}function a(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let h;function $(t){h=t}const v=[],x=[],y=[],w=[],b=Promise.resolve();let _=!1;function q(t){y.push(t)}let T=!1;const k=new Set;function z(){if(!T){T=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];$(e),A(e.$$)}for(v.length=0;x.length;)x.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];k.has(e)||(k.add(e),e())}y.length=0}while(v.length);for(;w.length;)w.pop()();_=!1,T=!1,k.clear()}}function A(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const E=new Set;let C;function B(t,e){t&&t.i&&(E.delete(t),t.i(e))}function S(t,e,n,s){if(t&&t.o){if(E.has(t))return;E.add(t),C.c.push(()=>{E.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function N(t){t&&t.c()}function O(t,n,o){const{fragment:l,on_mount:a,on_destroy:c,after_update:i}=t.$$;l&&l.m(n,o),q(()=>{const n=a.map(e).filter(r);c?c.push(...n):s(n),t.$$.on_mount=[]}),i.forEach(q)}function K(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function j(t,e){-1===t.$$.dirty[0]&&(v.push(t),_||(_=!0,b.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(e,r,o,l,a,c,u=[-1]){const f=h;$(e);const d=r.props||{},m=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let g=!1;if(m.ctx=o?o(e,d,(t,n,...s)=>{const r=s.length?s[0]:n;return m.ctx&&a(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),g&&j(e,t)),n}):[],m.update(),g=!0,s(m.before_update),m.fragment=!!l&&l(m.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);m.fragment&&m.fragment.l(t),t.forEach(i)}else m.fragment&&m.fragment.c();r.intro&&B(e.$$.fragment),O(e,r.target,r.anchor),z()}$(f)}class P{$destroy(){K(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function W(e){let n,s;return{c(){n=f("div"),s=d(e[0]),g(n,"class","question svelte-c56qz7")},m(t,e){c(t,n,e),a(n,s)},p(t,[e]){1&e&&p(s,t[0])},i:t,o:t,d(t){t&&i(n)}}}function H(t,e,n){let{questionText:s}=e;return t.$$set=t=>{"questionText"in t&&n(0,s=t.questionText)},[s]}class L extends P{constructor(t){super(),D(this,t,H,W,o,{questionText:0})}}function G(e){let n,s,r,o,l,u,h,$,v,x=e[2][e[1]]+"";return{c(){n=f("button"),s=f("div"),r=f("span"),o=d(x),l=m(),u=f("div"),h=d(e[0]),g(r,"class","answer-letter svelte-11d3yt2"),g(u,"class","answer-text svelte-11d3yt2"),g(s,"class","answer-container svelte-11d3yt2"),g(n,"class","answer svelte-11d3yt2")},m(t,i){var f,d,m,g;c(t,n,i),a(n,s),a(s,r),a(r,o),a(s,l),a(s,u),a(u,h),$||(f=n,d="click",m=e[3],f.addEventListener(d,m,g),v=()=>f.removeEventListener(d,m,g),$=!0)},p(t,[e]){6&e&&x!==(x=t[2][t[1]]+"")&&p(o,x),1&e&&p(h,t[0])},i:t,o:t,d(t){t&&i(n),$=!1,v()}}}function I(t,e,n){let{answerText:s}=e,{idx:r}=e,{answerKeys:o=["A","B","C","D"]}=e;return t.$$set=t=>{"answerText"in t&&n(0,s=t.answerText),"idx"in t&&n(1,r=t.idx),"answerKeys"in t&&n(2,o=t.answerKeys)},[s,r,o,function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}(t,e)}]}class M extends P{constructor(t){super(),D(this,t,I,G,o,{answerText:0,idx:1,answerKeys:2})}}function R(t,e,n){const s=t.slice();return s[6]=e[n],s[8]=n,s}function X(t,e,n){const s=t.slice();return s[9]=e[n],s[11]=n,s}function F(t){let e,n,s,r,o=t[9].name+"";return{c(){e=f("div"),n=f("div"),s=d(o),g(n,"class",r=l(t[9].class)+" svelte-vz3ort"),g(e,"class","tag-contain svelte-vz3ort")},m(t,r){c(t,e,r),a(e,n),a(n,s)},p(t,e){1&e&&o!==(o=t[9].name+"")&&p(s,o),1&e&&r!==(r=l(t[9].class)+" svelte-vz3ort")&&g(n,"class",r)},d(t){t&&i(e)}}}function J(t){let e,n,s,r,o=t[9].name+"";return{c(){e=f("div"),n=f("div"),s=d(o),g(n,"class",r=l(t[9].class+" curr-font")+" svelte-vz3ort"),g(e,"class","tag-contain curr svelte-vz3ort")},m(t,r){c(t,e,r),a(e,n),a(n,s)},p(t,e){1&e&&o!==(o=t[9].name+"")&&p(s,o),1&e&&r!==(r=l(t[9].class+" curr-font")+" svelte-vz3ort")&&g(n,"class",r)},d(t){t&&i(e)}}}function Q(t){let e,n,s,r,o,l;function u(t,e){return t[11]===t[1]?J:F}let d=u(t),p=d(t);return{c(){e=f("div"),n=f("div"),s=m(),p.c(),r=m(),o=f("div"),l=m(),g(n,"class","bar svelte-vz3ort"),g(o,"class","bar svelte-vz3ort"),g(e,"class","tag-area svelte-vz3ort")},m(t,i){c(t,e,i),a(e,n),a(e,s),p.m(e,null),a(e,r),a(e,o),a(e,l)},p(t,n){d===(d=u(t))&&p?p.p(t,n):(p.d(1),p=d(t),p&&(p.c(),p.m(e,r)))},d(t){t&&i(e),p.d()}}}function U(t){let e,n;return e=new M({props:{answerText:t[6],idx:t[8]}}),e.$on("click",(function(){r(t[4](t[6]))&&t[4](t[6]).apply(this,arguments)})),{c(){N(e.$$.fragment)},m(t,s){O(e,t,s),n=!0},p(n,s){t=n;const r={};12&s&&(r.answerText=t[6]),e.$set(r)},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function V(t){let e,n,r,o,l,d,p,h=t[0],$=[];for(let e=0;e<h.length;e+=1)$[e]=Q(X(t,h,e));o=new L({props:{questionText:t[3][t[2]].question}});let v=t[3][t[2]].answers,x=[];for(let e=0;e<v.length;e+=1)x[e]=U(R(t,v,e));const y=t=>S(x[t],1,1,()=>{x[t]=null});return{c(){e=f("main"),n=f("div");for(let t=0;t<$.length;t+=1)$[t].c();r=m(),N(o.$$.fragment),l=m(),d=f("div");for(let t=0;t<x.length;t+=1)x[t].c();g(n,"class","board svelte-vz3ort"),g(d,"class","answers svelte-vz3ort"),g(e,"class","svelte-vz3ort")},m(t,s){c(t,e,s),a(e,n);for(let t=0;t<$.length;t+=1)$[t].m(n,null);a(e,r),O(o,e,null),a(e,l),a(e,d);for(let t=0;t<x.length;t+=1)x[t].m(d,null);p=!0},p(t,[e]){if(3&e){let s;for(h=t[0],s=0;s<h.length;s+=1){const r=X(t,h,s);$[s]?$[s].p(r,e):($[s]=Q(r),$[s].c(),$[s].m(n,null))}for(;s<$.length;s+=1)$[s].d(1);$.length=h.length}const r={};if(12&e&&(r.questionText=t[3][t[2]].question),o.$set(r),28&e){let n;for(v=t[3][t[2]].answers,n=0;n<v.length;n+=1){const s=R(t,v,n);x[n]?(x[n].p(s,e),B(x[n],1)):(x[n]=U(s),x[n].c(),B(x[n],1),x[n].m(d,null))}for(C={r:0,c:[],p:C},n=v.length;n<x.length;n+=1)y(n);C.r||s(C.c),C=C.p}},i(t){if(!p){B(o.$$.fragment,t);for(let t=0;t<v.length;t+=1)B(x[t]);p=!0}},o(t){S(o.$$.fragment,t),x=x.filter(Boolean);for(let t=0;t<x.length;t+=1)S(x[t]);p=!1},d(t){t&&i(e),u($,t),K(o),u(x,t)}}}function Y(t,e,n){let s=0,{ranks:r=[{name:"Porcelain",class:"tag small"},{name:"Obsidian",class:"tag small"},{name:"Steel",class:"tag small"},{name:"Sapphire",class:"tag small"},{name:"Emerald",class:"tag small"},{name:"Ruby",class:"tag small"},{name:"Bronze",class:"tag small"},{name:"Silver",class:"tag small"},{name:"Gold",class:"tag small"},{name:"Platinum",class:"tag large"}]}=e,o=0;document.getElementsByClassName("tag");const l=[{question:"What is the standard abbreviation for your Charisma score?",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]},{question:"This is question 2",correctAnswer:1,answers:["A","B","C","D"]}];return t.$$set=t=>{"ranks"in t&&n(0,r=t.ranks)},[r,s,o,l,function(t){t===l[o].correctAnswer?(n(1,s+=1),n(3,l[o].question="Correct!",l),setTimeout(()=>{n(2,o+=1)},2e3)):n(3,l[o].question="Wrong!",l)}]}return new class extends P{constructor(t){super(),D(this,t,Y,V,o,{ranks:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
