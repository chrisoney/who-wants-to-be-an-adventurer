var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t){return null==t?"":t}function a(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function p(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let $;function v(t){$=t}const y=[],x=[],w=[],b=[],_=Promise.resolve();let k=!1;function T(t){w.push(t)}let q=!1;const A=new Set;function E(){if(!q){q=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];v(e),C(e.$$)}for(y.length=0;x.length;)x.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];A.has(e)||(A.add(e),e())}w.length=0}while(y.length);for(;b.length;)b.pop()();k=!1,q=!1,A.clear()}}function C(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const B=new Set;let S;function N(t,e){t&&t.i&&(B.delete(t),t.i(e))}function O(t,e,n,s){if(t&&t.o){if(B.has(t))return;B.add(t),S.c.push(()=>{B.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function W(t){t&&t.c()}function K(t,n,o){const{fragment:l,on_mount:a,on_destroy:c,after_update:i}=t.$$;l&&l.m(n,o),T(()=>{const n=a.map(e).filter(r);c?c.push(...n):s(n),t.$$.on_mount=[]}),i.forEach(T)}function L(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function P(t,e){-1===t.$$.dirty[0]&&(y.push(t),k||(k=!0,_.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(e,r,o,l,a,c,u=[-1]){const f=$;v(e);const d=r.props||{},m=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let p=!1;if(m.ctx=o?o(e,d,(t,n,...s)=>{const r=s.length?s[0]:n;return m.ctx&&a(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),p&&P(e,t)),n}):[],m.update(),p=!0,s(m.before_update),m.fragment=!!l&&l(m.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);m.fragment&&m.fragment.l(t),t.forEach(i)}else m.fragment&&m.fragment.c();r.intro&&N(e.$$.fragment),K(e,r.target,r.anchor),E()}v(f)}class D{$destroy(){L(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function I(e){let n,s,r,o;return{c(){n=f("link"),s=m(),r=f("div"),o=d(e[0]),g(n,"href","https://fonts.googleapis.com/css2?family=Balthazar&display=swap"),g(n,"rel","stylesheet"),g(r,"class","question svelte-tfosrn")},m(t,e){a(document.head,n),c(t,s,e),c(t,r,e),a(r,o)},p(t,[e]){1&e&&h(o,t[0])},i:t,o:t,d(t){i(n),t&&i(s),t&&i(r)}}}function z(t,e,n){let{questionText:s}=e;return t.$$set=t=>{"questionText"in t&&n(0,s=t.questionText)},[s]}class H extends D{constructor(t){super(),j(this,t,z,I,o,{questionText:0})}}function R(e){let n,s,r,o,l,u,p,$,v,y=e[2][e[1]]+"";return{c(){n=f("div"),s=f("span"),s.textContent="♦",r=m(),o=f("span"),l=d(y),u=d(":"),p=m(),$=f("div"),v=d(e[0]),g(s,"class","diam svelte-1ov2e3x"),g(o,"class","answer-letter svelte-1ov2e3x"),g($,"class","answer-text svelte-1ov2e3x"),g(n,"class","answer-container svelte-1ov2e3x")},m(t,e){c(t,n,e),a(n,s),a(n,r),a(n,o),a(o,l),a(o,u),a(n,p),a(n,$),a($,v)},p(t,[e]){6&e&&y!==(y=t[2][t[1]]+"")&&h(l,y),1&e&&h(v,t[0])},i:t,o:t,d(t){t&&i(n)}}}function G(t,e,n){let{answerText:s}=e,{idx:r}=e,{answerKeys:o=["A","B","C","D"]}=e;return t.$$set=t=>{"answerText"in t&&n(0,s=t.answerText),"idx"in t&&n(1,r=t.idx),"answerKeys"in t&&n(2,o=t.answerKeys)},[s,r,o]}class M extends D{constructor(t){super(),j(this,t,G,R,o,{answerText:0,idx:1,answerKeys:2})}}function X(t,e,n){const s=t.slice();return s[7]=e[n],s[9]=n,s}function F(t,e,n){const s=t.slice();return s[10]=e[n],s[12]=n,s}function J(t){let e,n,s,r,o=t[10].name+"";return{c(){e=f("div"),n=f("div"),s=d(o),g(n,"class",r=l(t[10].class)+" svelte-ytrp61"),g(e,"class","tag-contain svelte-ytrp61")},m(t,r){c(t,e,r),a(e,n),a(n,s)},p(t,e){1&e&&o!==(o=t[10].name+"")&&h(s,o),1&e&&r!==(r=l(t[10].class)+" svelte-ytrp61")&&g(n,"class",r)},d(t){t&&i(e)}}}function Q(t){let e,n,s,r,o=t[10].name+"";return{c(){e=f("div"),n=f("div"),s=d(o),g(n,"class",r=l(t[10].class+" curr-font")+" svelte-ytrp61"),g(e,"class","tag-contain curr svelte-ytrp61")},m(t,r){c(t,e,r),a(e,n),a(n,s)},p(t,e){1&e&&o!==(o=t[10].name+"")&&h(s,o),1&e&&r!==(r=l(t[10].class+" curr-font")+" svelte-ytrp61")&&g(n,"class",r)},d(t){t&&i(e)}}}function U(t){let e,n;function s(t,e){return t[12]===t[1]?Q:J}let r=s(t),o=r(t);return{c(){e=f("div"),o.c(),n=m(),g(e,"class","tag-area svelte-ytrp61")},m(t,s){c(t,e,s),o.m(e,null),a(e,n)},p(t,l){r===(r=s(t))&&o?o.p(t,l):(o.d(1),o=r(t),o&&(o.c(),o.m(e,n)))},d(t){t&&i(e),o.d()}}}function V(t){let e,n,o,l,u,d,h;return n=new M({props:{answerText:t[7],idx:t[9]}}),{c(){e=f("button"),W(n.$$.fragment),o=m(),g(e,"class","answer svelte-ytrp61"),g(e,"id",l=t[9])},m(s,l){c(s,e,l),K(n,e,null),a(e,o),u=!0,d||(h=[p(e,"click",t[5]),p(e,"click",(function(){r(t[4](t[7],t[9]))&&t[4](t[7],t[9]).apply(this,arguments)}))],d=!0)},p(e,s){t=e;const r={};12&s&&(r.answerText=t[7]),n.$set(r)},i(t){u||(N(n.$$.fragment,t),u=!0)},o(t){O(n.$$.fragment,t),u=!1},d(t){t&&i(e),L(n),d=!1,s(h)}}}function Y(t){let e,n,r,o,l,d,p,h,$,v,y=t[0],x=[];for(let e=0;e<y.length;e+=1)x[e]=U(F(t,y,e));p=new H({props:{questionText:t[3][t[2]].question}});let w=t[3][t[2]].answers,b=[];for(let e=0;e<w.length;e+=1)b[e]=V(X(t,w,e));const _=t=>O(b[t],1,1,()=>{b[t]=null});return{c(){e=f("main"),n=f("div"),r=f("div"),r.textContent="Who Wants To Be A Platinum-Rank Adventurer?",o=m(),l=f("div");for(let t=0;t<x.length;t+=1)x[t].c();d=m(),W(p.$$.fragment),h=m(),$=f("div");for(let t=0;t<b.length;t+=1)b[t].c();g(r,"class","title svelte-ytrp61"),g(l,"class","board svelte-ytrp61"),g(n,"class","top svelte-ytrp61"),g($,"class","answers svelte-ytrp61"),g(e,"class","svelte-ytrp61")},m(t,s){c(t,e,s),a(e,n),a(n,r),a(n,o),a(n,l);for(let t=0;t<x.length;t+=1)x[t].m(l,null);a(e,d),K(p,e,null),a(e,h),a(e,$);for(let t=0;t<b.length;t+=1)b[t].m($,null);v=!0},p(t,[e]){if(3&e){let n;for(y=t[0],n=0;n<y.length;n+=1){const s=F(t,y,n);x[n]?x[n].p(s,e):(x[n]=U(s),x[n].c(),x[n].m(l,null))}for(;n<x.length;n+=1)x[n].d(1);x.length=y.length}const n={};if(12&e&&(n.questionText=t[3][t[2]].question),p.$set(n),28&e){let n;for(w=t[3][t[2]].answers,n=0;n<w.length;n+=1){const s=X(t,w,n);b[n]?(b[n].p(s,e),N(b[n],1)):(b[n]=V(s),b[n].c(),N(b[n],1),b[n].m($,null))}for(S={r:0,c:[],p:S},n=w.length;n<b.length;n+=1)_(n);S.r||s(S.c),S=S.p}},i(t){if(!v){N(p.$$.fragment,t);for(let t=0;t<w.length;t+=1)N(b[t]);v=!0}},o(t){O(p.$$.fragment,t),b=b.filter(Boolean);for(let t=0;t<b.length;t+=1)O(b[t]);v=!1},d(t){t&&i(e),u(x,t),L(p),u(b,t)}}}function Z(t,e,n){let s=0,{ranks:r=[{name:"Porcelain",class:"tag small"},{name:"Obsidian",class:"tag small"},{name:"Steel",class:"tag small"},{name:"Sapphire",class:"tag small"},{name:"Emerald",class:"tag small"},{name:"Ruby",class:"tag small"},{name:"Bronze",class:"tag small"},{name:"Silver",class:"tag small"},{name:"Gold",class:"tag small"},{name:"Platinum",class:"tag large"}]}=e,o=0;document.getElementsByClassName("tag");const l=[{question:"What is the standard abbreviation for your Charisma score?",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]},{question:"This is question 2",correctAnswer:1,answers:["A","B","C","D"]}];return t.$$set=t=>{"ranks"in t&&n(0,r=t.ranks)},[r,s,o,l,function(t,e){t===l[o].correctAnswer?(document.getElementById(e).classList.add("green"),n(1,s+=1),n(3,l[o].question="Correct!",l),setTimeout(()=>{document.getElementById(e).classList.remove("green"),n(2,o+=1)},2e3)):n(3,l[o].question="Wrong!",l)},function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}(t,e)}]}return new class extends D{constructor(t){super(),j(this,t,Z,Y,o,{ranks:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
