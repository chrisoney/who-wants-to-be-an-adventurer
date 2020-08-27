var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function r(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(t){return null==t?"":t}function a(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function d(){return m(" ")}function g(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let $;function w(t){$=t}const v=[],x=[],y=[],b=[],_=Promise.resolve();let j=!1;function T(t){y.push(t)}let k=!1;const q=new Set;function E(){if(!k){k=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];w(e),A(e.$$)}for(v.length=0;x.length;)x.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];q.has(e)||(q.add(e),e())}y.length=0}while(v.length);for(;b.length;)b.pop()();j=!1,k=!1,q.clear()}}function A(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const C=new Set;let B;function S(t,e){t&&t.i&&(C.delete(t),t.i(e))}function N(t,e,n,s){if(t&&t.o){if(C.has(t))return;C.add(t),B.c.push(()=>{C.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function O(t){t&&t.c()}function K(t,n,l){const{fragment:o,on_mount:a,on_destroy:c,after_update:i}=t.$$;o&&o.m(n,l),T(()=>{const n=a.map(e).filter(r);c?c.push(...n):s(n),t.$$.on_mount=[]}),i.forEach(T)}function L(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(t,e){-1===t.$$.dirty[0]&&(v.push(t),j||(j=!0,_.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(e,r,l,o,a,c,u=[-1]){const f=$;w(e);const m=r.props||{},d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let g=!1;if(d.ctx=l?l(e,m,(t,n,...s)=>{const r=s.length?s[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),g&&D(e,t)),n}):[],d.update(),g=!0,s(d.before_update),d.fragment=!!o&&o(d.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);d.fragment&&d.fragment.l(t),t.forEach(i)}else d.fragment&&d.fragment.c();r.intro&&S(e.$$.fragment),K(e,r.target,r.anchor),E()}w(f)}class P{$destroy(){L(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function W(e){let n,s;return{c(){n=f("div"),s=m(e[0]),p(n,"class","question svelte-1dg4i2e")},m(t,e){c(t,n,e),a(n,s)},p(t,[e]){1&e&&h(s,t[0])},i:t,o:t,d(t){t&&i(n)}}}function H(t,e,n){let{questionText:s}=e;return t.$$set=t=>{"questionText"in t&&n(0,s=t.questionText)},[s]}class z extends P{constructor(t){super(),I(this,t,H,W,l,{questionText:0})}}function G(e){let n,s,r,l,o,u,g,$,w,v=e[2][e[1]]+"";return{c(){n=f("div"),s=f("span"),s.textContent="♦",r=d(),l=f("span"),o=m(v),u=m(":"),g=d(),$=f("div"),w=m(e[0]),p(s,"class","diam svelte-1ai1f4m"),p(l,"class","answer-letter svelte-1ai1f4m"),p($,"class","answer-text svelte-1ai1f4m"),p(n,"class","answer-container svelte-1ai1f4m")},m(t,e){c(t,n,e),a(n,s),a(n,r),a(n,l),a(l,o),a(l,u),a(n,g),a(n,$),a($,w)},p(t,[e]){6&e&&v!==(v=t[2][t[1]]+"")&&h(o,v),1&e&&h(w,t[0])},i:t,o:t,d(t){t&&i(n)}}}function M(t,e,n){let{answerText:s}=e,{idx:r}=e,{answerKeys:l=["A","B","C","D"]}=e;return t.$$set=t=>{"answerText"in t&&n(0,s=t.answerText),"idx"in t&&n(1,r=t.idx),"answerKeys"in t&&n(2,l=t.answerKeys)},[s,r,l]}class R extends P{constructor(t){super(),I(this,t,M,G,l,{answerText:0,idx:1,answerKeys:2})}}function X(t,e,n){const s=t.slice();return s[7]=e[n],s[9]=n,s}function F(t,e,n){const s=t.slice();return s[10]=e[n],s[12]=n,s}function J(t){let e,n,s,r,l=t[10].name+"";return{c(){e=f("div"),n=f("div"),s=m(l),p(n,"class",r=o(t[10].class)+" svelte-1lm3wj8"),p(e,"class","tag-contain svelte-1lm3wj8")},m(t,r){c(t,e,r),a(e,n),a(n,s)},p(t,e){1&e&&l!==(l=t[10].name+"")&&h(s,l),1&e&&r!==(r=o(t[10].class)+" svelte-1lm3wj8")&&p(n,"class",r)},d(t){t&&i(e)}}}function Q(t){let e,n,s,r,l=t[10].name+"";return{c(){e=f("div"),n=f("div"),s=m(l),p(n,"class",r=o(t[10].class+" curr-font")+" svelte-1lm3wj8"),p(e,"class","tag-contain curr svelte-1lm3wj8")},m(t,r){c(t,e,r),a(e,n),a(n,s)},p(t,e){1&e&&l!==(l=t[10].name+"")&&h(s,l),1&e&&r!==(r=o(t[10].class+" curr-font")+" svelte-1lm3wj8")&&p(n,"class",r)},d(t){t&&i(e)}}}function U(t){let e,n;function s(t,e){return t[12]===t[1]?Q:J}let r=s(t),l=r(t);return{c(){e=f("div"),l.c(),n=d(),p(e,"class","tag-area svelte-1lm3wj8")},m(t,s){c(t,e,s),l.m(e,null),a(e,n)},p(t,o){r===(r=s(t))&&l?l.p(t,o):(l.d(1),l=r(t),l&&(l.c(),l.m(e,n)))},d(t){t&&i(e),l.d()}}}function V(t){let e,n,l,o,u,m,h;return n=new R({props:{answerText:t[7],idx:t[9]}}),{c(){e=f("button"),O(n.$$.fragment),l=d(),p(e,"class","answer svelte-1lm3wj8"),p(e,"id",o=t[9])},m(s,o){c(s,e,o),K(n,e,null),a(e,l),u=!0,m||(h=[g(e,"click",t[5]),g(e,"click",(function(){r(t[4](t[7],t[9]))&&t[4](t[7],t[9]).apply(this,arguments)}))],m=!0)},p(e,s){t=e;const r={};12&s&&(r.answerText=t[7]),n.$set(r)},i(t){u||(S(n.$$.fragment,t),u=!0)},o(t){N(n.$$.fragment,t),u=!1},d(t){t&&i(e),L(n),m=!1,s(h)}}}function Y(t){let e,n,r,l,o,m,g,h,$,w,v=t[0],x=[];for(let e=0;e<v.length;e+=1)x[e]=U(F(t,v,e));g=new z({props:{questionText:t[3][t[2]].question}});let y=t[3][t[2]].answers,b=[];for(let e=0;e<y.length;e+=1)b[e]=V(X(t,y,e));const _=t=>N(b[t],1,1,()=>{b[t]=null});return{c(){e=f("main"),n=f("div"),r=f("div"),l=d(),o=f("div");for(let t=0;t<x.length;t+=1)x[t].c();m=d(),O(g.$$.fragment),h=d(),$=f("div");for(let t=0;t<b.length;t+=1)b[t].c();p(r,"class","fire svelte-1lm3wj8"),p(o,"class","board svelte-1lm3wj8"),p(n,"class","top svelte-1lm3wj8"),p($,"class","answers svelte-1lm3wj8"),p(e,"class","svelte-1lm3wj8")},m(t,s){c(t,e,s),a(e,n),a(n,r),a(n,l),a(n,o);for(let t=0;t<x.length;t+=1)x[t].m(o,null);a(e,m),K(g,e,null),a(e,h),a(e,$);for(let t=0;t<b.length;t+=1)b[t].m($,null);w=!0},p(t,[e]){if(3&e){let n;for(v=t[0],n=0;n<v.length;n+=1){const s=F(t,v,n);x[n]?x[n].p(s,e):(x[n]=U(s),x[n].c(),x[n].m(o,null))}for(;n<x.length;n+=1)x[n].d(1);x.length=v.length}const n={};if(12&e&&(n.questionText=t[3][t[2]].question),g.$set(n),28&e){let n;for(y=t[3][t[2]].answers,n=0;n<y.length;n+=1){const s=X(t,y,n);b[n]?(b[n].p(s,e),S(b[n],1)):(b[n]=V(s),b[n].c(),S(b[n],1),b[n].m($,null))}for(B={r:0,c:[],p:B},n=y.length;n<b.length;n+=1)_(n);B.r||s(B.c),B=B.p}},i(t){if(!w){S(g.$$.fragment,t);for(let t=0;t<y.length;t+=1)S(b[t]);w=!0}},o(t){N(g.$$.fragment,t),b=b.filter(Boolean);for(let t=0;t<b.length;t+=1)N(b[t]);w=!1},d(t){t&&i(e),u(x,t),L(g),u(b,t)}}}function Z(t,e,n){let s=0,{ranks:r=[{name:"Porcelain",class:"tag small"},{name:"Obsidian",class:"tag small"},{name:"Steel",class:"tag small"},{name:"Sapphire",class:"tag small"},{name:"Emerald",class:"tag small"},{name:"Ruby",class:"tag small"},{name:"Bronze",class:"tag small"},{name:"Silver",class:"tag small"},{name:"Gold",class:"tag small"},{name:"Platinum",class:"tag large"}]}=e,l=0;document.getElementsByClassName("tag");const o=[{question:"What is the standard abbreviation for your Charisma score?",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]},{question:"This is question 2",correctAnswer:1,answers:["A","B","C","D"]}];return t.$$set=t=>{"ranks"in t&&n(0,r=t.ranks)},[r,s,l,o,function(t,e){t===o[l].correctAnswer?(document.getElementById(e).classList.add("green"),n(1,s+=1),n(3,o[l].question="Correct!",o),setTimeout(()=>{document.getElementById(e).classList.remove("green"),n(2,l+=1)},2e3)):n(3,o[l].question="Wrong!",o)},function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}(t,e)}]}return new class extends P{constructor(t){super(),I(this,t,Z,Y,l,{ranks:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
