var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function r(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(t){return null==t?"":t}function a(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function i(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let p;function $(t){p=t}const v=[],y=[],x=[],b=[],w=Promise.resolve();let _=!1;function T(t){x.push(t)}let k=!1;const q=new Set;function A(){if(!k){k=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];$(e),C(e.$$)}for(v.length=0;y.length;)y.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];q.has(e)||(q.add(e),e())}x.length=0}while(v.length);for(;b.length;)b.pop()();_=!1,k=!1,q.clear()}}function C(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const E=new Set;let z;function B(t,e){t&&t.i&&(E.delete(t),t.i(e))}function S(t,e,n,s){if(t&&t.o){if(E.has(t))return;E.add(t),z.c.push(()=>{E.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function N(t){t&&t.c()}function O(t,n,l){const{fragment:o,on_mount:a,on_destroy:c,after_update:u}=t.$$;o&&o.m(n,l),T(()=>{const n=a.map(e).filter(r);c?c.push(...n):s(n),t.$$.on_mount=[]}),u.forEach(T)}function K(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function j(t,e){-1===t.$$.dirty[0]&&(v.push(t),_||(_=!0,w.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(e,r,l,o,a,c,i=[-1]){const f=p;$(e);const d=r.props||{},m=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:i,skip_bound:!1};let g=!1;if(m.ctx=l?l(e,d,(t,n,...s)=>{const r=s.length?s[0]:n;return m.ctx&&a(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),g&&j(e,t)),n}):[],m.update(),g=!0,s(m.before_update),m.fragment=!!o&&o(m.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);m.fragment&&m.fragment.l(t),t.forEach(u)}else m.fragment&&m.fragment.c();r.intro&&B(e.$$.fragment),O(e,r.target,r.anchor),A()}$(f)}class P{$destroy(){K(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function W(e){let n,s;return{c(){n=f("div"),s=d(e[0]),g(n,"class","question svelte-1hst1w6")},m(t,e){c(t,n,e),a(n,s)},p(t,[e]){1&e&&h(s,t[0])},i:t,o:t,d(t){t&&u(n)}}}function H(t,e,n){let{questionText:s}=e;return t.$$set=t=>{"questionText"in t&&n(0,s=t.questionText)},[s]}class L extends P{constructor(t){super(),D(this,t,H,W,l,{questionText:0})}}function G(e){let n,s,r,l,o,i,p,$,v,y,x=e[2][e[1]]+"";return{c(){n=f("button"),s=f("div"),r=f("span"),l=f("span"),l.textContent="♦",o=d(x),i=m(),p=f("div"),$=d(e[0]),g(l,"class","diam svelte-dhbfzv"),g(r,"class","answer-letter svelte-dhbfzv"),g(p,"class","answer-text svelte-dhbfzv"),g(s,"class","answer-container svelte-dhbfzv"),g(n,"class","answer svelte-dhbfzv")},m(t,u){var f,d,m,g;c(t,n,u),a(n,s),a(s,r),a(r,l),a(r,o),a(s,i),a(s,p),a(p,$),v||(f=n,d="click",m=e[3],f.addEventListener(d,m,g),y=()=>f.removeEventListener(d,m,g),v=!0)},p(t,[e]){6&e&&x!==(x=t[2][t[1]]+"")&&h(o,x),1&e&&h($,t[0])},i:t,o:t,d(t){t&&u(n),v=!1,y()}}}function I(t,e,n){let{answerText:s}=e,{idx:r}=e,{answerKeys:l=["A","B","C","D"]}=e;return t.$$set=t=>{"answerText"in t&&n(0,s=t.answerText),"idx"in t&&n(1,r=t.idx),"answerKeys"in t&&n(2,l=t.answerKeys)},[s,r,l,function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}(t,e)}]}class M extends P{constructor(t){super(),D(this,t,I,G,l,{answerText:0,idx:1,answerKeys:2})}}function R(t,e,n){const s=t.slice();return s[6]=e[n],s[8]=n,s}function X(t,e,n){const s=t.slice();return s[9]=e[n],s[11]=n,s}function F(t){let e,n,s,r,l=t[9].name+"";return{c(){e=f("div"),n=f("div"),s=d(l),g(n,"class",r=o(t[9].class)+" svelte-msudly"),g(e,"class","tag-contain svelte-msudly")},m(t,r){c(t,e,r),a(e,n),a(n,s)},p(t,e){1&e&&l!==(l=t[9].name+"")&&h(s,l),1&e&&r!==(r=o(t[9].class)+" svelte-msudly")&&g(n,"class",r)},d(t){t&&u(e)}}}function J(t){let e,n,s,r,l=t[9].name+"";return{c(){e=f("div"),n=f("div"),s=d(l),g(n,"class",r=o(t[9].class+" curr-font")+" svelte-msudly"),g(e,"class","tag-contain curr svelte-msudly")},m(t,r){c(t,e,r),a(e,n),a(n,s)},p(t,e){1&e&&l!==(l=t[9].name+"")&&h(s,l),1&e&&r!==(r=o(t[9].class+" curr-font")+" svelte-msudly")&&g(n,"class",r)},d(t){t&&u(e)}}}function Q(t){let e,n;function s(t,e){return t[11]===t[1]?J:F}let r=s(t),l=r(t);return{c(){e=f("div"),l.c(),n=m(),g(e,"class","tag-area svelte-msudly")},m(t,s){c(t,e,s),l.m(e,null),a(e,n)},p(t,o){r===(r=s(t))&&l?l.p(t,o):(l.d(1),l=r(t),l&&(l.c(),l.m(e,n)))},d(t){t&&u(e),l.d()}}}function U(t){let e,n;return e=new M({props:{answerText:t[6],idx:t[8]}}),e.$on("click",(function(){r(t[4](t[6]))&&t[4](t[6]).apply(this,arguments)})),{c(){N(e.$$.fragment)},m(t,s){O(e,t,s),n=!0},p(n,s){t=n;const r={};12&s&&(r.answerText=t[6]),e.$set(r)},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function V(t){let e,n,r,l,o,d,h,p=t[0],$=[];for(let e=0;e<p.length;e+=1)$[e]=Q(X(t,p,e));l=new L({props:{questionText:t[3][t[2]].question}});let v=t[3][t[2]].answers,y=[];for(let e=0;e<v.length;e+=1)y[e]=U(R(t,v,e));const x=t=>S(y[t],1,1,()=>{y[t]=null});return{c(){e=f("main"),n=f("div");for(let t=0;t<$.length;t+=1)$[t].c();r=m(),N(l.$$.fragment),o=m(),d=f("div");for(let t=0;t<y.length;t+=1)y[t].c();g(n,"class","board svelte-msudly"),g(d,"class","answers svelte-msudly"),g(e,"class","svelte-msudly")},m(t,s){c(t,e,s),a(e,n);for(let t=0;t<$.length;t+=1)$[t].m(n,null);a(e,r),O(l,e,null),a(e,o),a(e,d);for(let t=0;t<y.length;t+=1)y[t].m(d,null);h=!0},p(t,[e]){if(3&e){let s;for(p=t[0],s=0;s<p.length;s+=1){const r=X(t,p,s);$[s]?$[s].p(r,e):($[s]=Q(r),$[s].c(),$[s].m(n,null))}for(;s<$.length;s+=1)$[s].d(1);$.length=p.length}const r={};if(12&e&&(r.questionText=t[3][t[2]].question),l.$set(r),28&e){let n;for(v=t[3][t[2]].answers,n=0;n<v.length;n+=1){const s=R(t,v,n);y[n]?(y[n].p(s,e),B(y[n],1)):(y[n]=U(s),y[n].c(),B(y[n],1),y[n].m(d,null))}for(z={r:0,c:[],p:z},n=v.length;n<y.length;n+=1)x(n);z.r||s(z.c),z=z.p}},i(t){if(!h){B(l.$$.fragment,t);for(let t=0;t<v.length;t+=1)B(y[t]);h=!0}},o(t){S(l.$$.fragment,t),y=y.filter(Boolean);for(let t=0;t<y.length;t+=1)S(y[t]);h=!1},d(t){t&&u(e),i($,t),K(l),i(y,t)}}}function Y(t,e,n){let s=0,{ranks:r=[{name:"Porcelain",class:"tag small"},{name:"Obsidian",class:"tag small"},{name:"Steel",class:"tag small"},{name:"Sapphire",class:"tag small"},{name:"Emerald",class:"tag small"},{name:"Ruby",class:"tag small"},{name:"Bronze",class:"tag small"},{name:"Silver",class:"tag small"},{name:"Gold",class:"tag small"},{name:"Platinum",class:"tag large"}]}=e,l=0;document.getElementsByClassName("tag");const o=[{question:"What is the standard abbreviation for your Charisma score?",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]},{question:"This is question 2",correctAnswer:1,answers:["A","B","C","D"]}];return t.$$set=t=>{"ranks"in t&&n(0,r=t.ranks)},[r,s,l,o,function(t){t===o[l].correctAnswer?(n(1,s+=1),n(3,o[l].question="Correct!",o),setTimeout(()=>{n(2,l+=1)},2e3)):n(3,o[l].question="Wrong!",o)}]}return new class extends P{constructor(t){super(),D(this,t,Y,V,l,{ranks:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
