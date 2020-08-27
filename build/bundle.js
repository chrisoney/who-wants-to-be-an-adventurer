var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t){return null==t?"":t}function a(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function i(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let h;function $(t){h=t}const x=[],v=[],y=[],w=[],b=Promise.resolve();let _=!1;function T(t){y.push(t)}let k=!1;const q=new Set;function A(){if(!k){k=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];$(e),E(e.$$)}for(x.length=0;v.length;)v.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];q.has(e)||(q.add(e),e())}y.length=0}while(x.length);for(;w.length;)w.pop()();_=!1,k=!1,q.clear()}}function E(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const C=new Set;let B;function S(t,e){t&&t.i&&(C.delete(t),t.i(e))}function N(t,e,n,s){if(t&&t.o){if(C.has(t))return;C.add(t),B.c.push(()=>{C.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function O(t){t&&t.c()}function j(t,n,o){const{fragment:l,on_mount:a,on_destroy:c,after_update:u}=t.$$;l&&l.m(n,o),T(()=>{const n=a.map(e).filter(r);c?c.push(...n):s(n),t.$$.on_mount=[]}),u.forEach(T)}function K(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(t,e){-1===t.$$.dirty[0]&&(x.push(t),_||(_=!0,b.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(e,r,o,l,a,c,i=[-1]){const f=h;$(e);const d=r.props||{},m=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:i,skip_bound:!1};let g=!1;if(m.ctx=o?o(e,d,(t,n,...s)=>{const r=s.length?s[0]:n;return m.ctx&&a(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),g&&D(e,t)),n}):[],m.update(),g=!0,s(m.before_update),m.fragment=!!l&&l(m.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);m.fragment&&m.fragment.l(t),t.forEach(u)}else m.fragment&&m.fragment.c();r.intro&&S(e.$$.fragment),j(e,r.target,r.anchor),A()}$(f)}class W{$destroy(){K(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function H(e){let n,s;return{c(){n=f("div"),s=d(e[0]),g(n,"class","question svelte-11spnfj")},m(t,e){c(t,n,e),a(n,s)},p(t,[e]){1&e&&p(s,t[0])},i:t,o:t,d(t){t&&u(n)}}}function L(t,e,n){let{questionText:s}=e;return t.$$set=t=>{"questionText"in t&&n(0,s=t.questionText)},[s]}class z extends W{constructor(t){super(),P(this,t,L,H,o,{questionText:0})}}function G(e){let n,s,r,o,l,i,h,$,x,v=e[2][e[1]]+"";return{c(){n=f("button"),s=f("div"),r=f("span"),o=d(v),l=m(),i=f("div"),h=d(e[0]),g(r,"class","answer-letter svelte-11d3yt2"),g(i,"class","answer-text svelte-11d3yt2"),g(s,"class","answer-container svelte-11d3yt2"),g(n,"class","answer svelte-11d3yt2")},m(t,u){var f,d,m,g;c(t,n,u),a(n,s),a(s,r),a(r,o),a(s,l),a(s,i),a(i,h),$||(f=n,d="click",m=e[3],f.addEventListener(d,m,g),x=()=>f.removeEventListener(d,m,g),$=!0)},p(t,[e]){6&e&&v!==(v=t[2][t[1]]+"")&&p(o,v),1&e&&p(h,t[0])},i:t,o:t,d(t){t&&u(n),$=!1,x()}}}function I(t,e,n){let{answerText:s}=e,{idx:r}=e,{answerKeys:o=["A","B","C","D"]}=e;return t.$$set=t=>{"answerText"in t&&n(0,s=t.answerText),"idx"in t&&n(1,r=t.idx),"answerKeys"in t&&n(2,o=t.answerKeys)},[s,r,o,function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}(t,e)}]}class M extends W{constructor(t){super(),P(this,t,I,G,o,{answerText:0,idx:1,answerKeys:2})}}function R(t,e,n){const s=t.slice();return s[6]=e[n],s[8]=n,s}function X(t,e,n){const s=t.slice();return s[9]=e[n],s[11]=n,s}function F(t){let e,n,s,r,o=t[9].name+"";return{c(){e=f("div"),n=f("div"),s=d(o),g(n,"class",r=l(t[9].class)+" svelte-ex9sus"),g(e,"class","tag-contain svelte-ex9sus")},m(t,r){c(t,e,r),a(e,n),a(n,s)},p(t,e){1&e&&o!==(o=t[9].name+"")&&p(s,o),1&e&&r!==(r=l(t[9].class)+" svelte-ex9sus")&&g(n,"class",r)},d(t){t&&u(e)}}}function J(t){let e,n,s,r,o=t[9].name+"";return{c(){e=f("div"),n=f("div"),s=d(o),g(n,"class",r=l(t[9].class+" curr-font")+" svelte-ex9sus"),g(e,"class","tag-contain curr svelte-ex9sus")},m(t,r){c(t,e,r),a(e,n),a(n,s)},p(t,e){1&e&&o!==(o=t[9].name+"")&&p(s,o),1&e&&r!==(r=l(t[9].class+" curr-font")+" svelte-ex9sus")&&g(n,"class",r)},d(t){t&&u(e)}}}function Q(t){let e,n;function s(t,e){return t[11]===t[1]?J:F}let r=s(t),o=r(t);return{c(){e=f("div"),o.c(),n=m(),g(e,"class","tag-area svelte-ex9sus")},m(t,s){c(t,e,s),o.m(e,null),a(e,n)},p(t,l){r===(r=s(t))&&o?o.p(t,l):(o.d(1),o=r(t),o&&(o.c(),o.m(e,n)))},d(t){t&&u(e),o.d()}}}function U(t){let e,n;return e=new M({props:{answerText:t[6],idx:t[8]}}),e.$on("click",(function(){r(t[4](t[6]))&&t[4](t[6]).apply(this,arguments)})),{c(){O(e.$$.fragment)},m(t,s){j(e,t,s),n=!0},p(n,s){t=n;const r={};12&s&&(r.answerText=t[6]),e.$set(r)},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function V(t){let e,n,r,o,l,d,p,h=t[0],$=[];for(let e=0;e<h.length;e+=1)$[e]=Q(X(t,h,e));o=new z({props:{questionText:t[3][t[2]].question}});let x=t[3][t[2]].answers,v=[];for(let e=0;e<x.length;e+=1)v[e]=U(R(t,x,e));const y=t=>N(v[t],1,1,()=>{v[t]=null});return{c(){e=f("main"),n=f("div");for(let t=0;t<$.length;t+=1)$[t].c();r=m(),O(o.$$.fragment),l=m(),d=f("div");for(let t=0;t<v.length;t+=1)v[t].c();g(n,"class","board svelte-ex9sus"),g(d,"class","answers svelte-ex9sus"),g(e,"class","svelte-ex9sus")},m(t,s){c(t,e,s),a(e,n);for(let t=0;t<$.length;t+=1)$[t].m(n,null);a(e,r),j(o,e,null),a(e,l),a(e,d);for(let t=0;t<v.length;t+=1)v[t].m(d,null);p=!0},p(t,[e]){if(3&e){let s;for(h=t[0],s=0;s<h.length;s+=1){const r=X(t,h,s);$[s]?$[s].p(r,e):($[s]=Q(r),$[s].c(),$[s].m(n,null))}for(;s<$.length;s+=1)$[s].d(1);$.length=h.length}const r={};if(12&e&&(r.questionText=t[3][t[2]].question),o.$set(r),28&e){let n;for(x=t[3][t[2]].answers,n=0;n<x.length;n+=1){const s=R(t,x,n);v[n]?(v[n].p(s,e),S(v[n],1)):(v[n]=U(s),v[n].c(),S(v[n],1),v[n].m(d,null))}for(B={r:0,c:[],p:B},n=x.length;n<v.length;n+=1)y(n);B.r||s(B.c),B=B.p}},i(t){if(!p){S(o.$$.fragment,t);for(let t=0;t<x.length;t+=1)S(v[t]);p=!0}},o(t){N(o.$$.fragment,t),v=v.filter(Boolean);for(let t=0;t<v.length;t+=1)N(v[t]);p=!1},d(t){t&&u(e),i($,t),K(o),i(v,t)}}}function Y(t,e,n){let s=0,{ranks:r=[{name:"Porcelain",class:"tag small"},{name:"Obsidian",class:"tag small"},{name:"Steel",class:"tag small"},{name:"Sapphire",class:"tag small"},{name:"Emerald",class:"tag small"},{name:"Ruby",class:"tag small"},{name:"Bronze",class:"tag small"},{name:"Silver",class:"tag small"},{name:"Gold",class:"tag small"},{name:"Platinum",class:"tag large"}]}=e,o=0;document.getElementsByClassName("tag");const l=[{question:"What is the standard abbreviation for your Charisma score?",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]},{question:"This is question 2",correctAnswer:1,answers:["A","B","C","D"]}];return t.$$set=t=>{"ranks"in t&&n(0,r=t.ranks)},[r,s,o,l,function(t){t===l[o].correctAnswer?(n(1,s+=1),n(3,l[o].question="Correct!",l),setTimeout(()=>{n(2,o+=1)},2e3)):n(3,l[o].question="Wrong!",l)}]}return new class extends W{constructor(t){super(),P(this,t,Y,V,o,{ranks:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
