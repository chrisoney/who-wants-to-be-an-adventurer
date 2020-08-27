var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function r(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(t){return null==t?"":t}function a(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function g(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let $;function b(t){$=t}const v=[],x=[],w=[],y=[],_=Promise.resolve();let T=!1;function k(t){w.push(t)}let q=!1;const E=new Set;function A(){if(!q){q=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];b(e),C(e.$$)}for(v.length=0;x.length;)x.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];E.has(e)||(E.add(e),e())}w.length=0}while(v.length);for(;y.length;)y.pop()();T=!1,q=!1,E.clear()}}function C(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const B=new Set;let S;function N(t,e){t&&t.i&&(B.delete(t),t.i(e))}function O(t,e,n,s){if(t&&t.o){if(B.has(t))return;B.add(t),S.c.push(()=>{B.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function K(t){t&&t.c()}function L(t,n,l){const{fragment:o,on_mount:a,on_destroy:c,after_update:i}=t.$$;o&&o.m(n,l),k(()=>{const n=a.map(e).filter(r);c?c.push(...n):s(n),t.$$.on_mount=[]}),i.forEach(k)}function j(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(t,e){-1===t.$$.dirty[0]&&(v.push(t),T||(T=!0,_.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(e,r,l,o,a,c,u=[-1]){const f=$;b(e);const d=r.props||{},m=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let g=!1;if(m.ctx=l?l(e,d,(t,n,...s)=>{const r=s.length?s[0]:n;return m.ctx&&a(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),g&&D(e,t)),n}):[],m.update(),g=!0,s(m.before_update),m.fragment=!!o&&o(m.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);m.fragment&&m.fragment.l(t),t.forEach(i)}else m.fragment&&m.fragment.c();r.intro&&N(e.$$.fragment),L(e,r.target,r.anchor),A()}b(f)}class P{$destroy(){j(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function W(e){let n,s;return{c(){n=f("div"),s=d(e[0]),h(n,"class","question svelte-1dg4i2e")},m(t,e){c(t,n,e),a(n,s)},p(t,[e]){1&e&&p(s,t[0])},i:t,o:t,d(t){t&&i(n)}}}function H(t,e,n){let{questionText:s}=e;return t.$$set=t=>{"questionText"in t&&n(0,s=t.questionText)},[s]}class z extends P{constructor(t){super(),I(this,t,H,W,l,{questionText:0})}}function G(e){let n,s,r,l,o,u,g,$,b,v=e[2][e[1]]+"";return{c(){n=f("div"),s=f("span"),s.textContent="♦",r=m(),l=f("span"),o=d(v),u=d(":"),g=m(),$=f("div"),b=d(e[0]),h(s,"class","diam svelte-1ai1f4m"),h(l,"class","answer-letter svelte-1ai1f4m"),h($,"class","answer-text svelte-1ai1f4m"),h(n,"class","answer-container svelte-1ai1f4m")},m(t,e){c(t,n,e),a(n,s),a(n,r),a(n,l),a(l,o),a(l,u),a(n,g),a(n,$),a($,b)},p(t,[e]){6&e&&v!==(v=t[2][t[1]]+"")&&p(o,v),1&e&&p(b,t[0])},i:t,o:t,d(t){t&&i(n)}}}function M(t,e,n){let{answerText:s}=e,{idx:r}=e,{answerKeys:l=["A","B","C","D"]}=e;return t.$$set=t=>{"answerText"in t&&n(0,s=t.answerText),"idx"in t&&n(1,r=t.idx),"answerKeys"in t&&n(2,l=t.answerKeys)},[s,r,l]}class R extends P{constructor(t){super(),I(this,t,M,G,l,{answerText:0,idx:1,answerKeys:2})}}function X(t,e,n){const s=t.slice();return s[7]=e[n],s[9]=n,s}function F(t,e,n){const s=t.slice();return s[10]=e[n],s[12]=n,s}function J(t){let e,n,s,r,l=t[10].name+"";return{c(){e=f("div"),n=f("div"),s=d(l),h(n,"class",r=o(t[10].class)+" svelte-13hb05f"),h(e,"class","tag-contain svelte-13hb05f")},m(t,r){c(t,e,r),a(e,n),a(n,s)},p(t,e){1&e&&l!==(l=t[10].name+"")&&p(s,l),1&e&&r!==(r=o(t[10].class)+" svelte-13hb05f")&&h(n,"class",r)},d(t){t&&i(e)}}}function Q(t){let e,n,s,r,l=t[10].name+"";return{c(){e=f("div"),n=f("div"),s=d(l),h(n,"class",r=o(t[10].class+" curr-font")+" svelte-13hb05f"),h(e,"class","tag-contain curr svelte-13hb05f")},m(t,r){c(t,e,r),a(e,n),a(n,s)},p(t,e){1&e&&l!==(l=t[10].name+"")&&p(s,l),1&e&&r!==(r=o(t[10].class+" curr-font")+" svelte-13hb05f")&&h(n,"class",r)},d(t){t&&i(e)}}}function U(t){let e,n;function s(t,e){return t[12]===t[1]?Q:J}let r=s(t),l=r(t);return{c(){e=f("div"),l.c(),n=m(),h(e,"class","tag-area svelte-13hb05f")},m(t,s){c(t,e,s),l.m(e,null),a(e,n)},p(t,o){r===(r=s(t))&&l?l.p(t,o):(l.d(1),l=r(t),l&&(l.c(),l.m(e,n)))},d(t){t&&i(e),l.d()}}}function V(t){let e,n,l,o,u,d,p;return n=new R({props:{answerText:t[7],idx:t[9]}}),{c(){e=f("button"),K(n.$$.fragment),l=m(),h(e,"class","answer svelte-13hb05f"),h(e,"id",o=t[9])},m(s,o){c(s,e,o),L(n,e,null),a(e,l),u=!0,d||(p=[g(e,"click",t[5]),g(e,"click",(function(){r(t[4](t[7],t[9]))&&t[4](t[7],t[9]).apply(this,arguments)}))],d=!0)},p(e,s){t=e;const r={};12&s&&(r.answerText=t[7]),n.$set(r)},i(t){u||(N(n.$$.fragment,t),u=!0)},o(t){O(n.$$.fragment,t),u=!1},d(t){t&&i(e),j(n),d=!1,s(p)}}}function Y(t){let e,n,r,l,o,d,g,p,$,b,v,x,w=t[0],y=[];for(let e=0;e<w.length;e+=1)y[e]=U(F(t,w,e));$=new z({props:{questionText:t[3][t[2]].question}});let _=t[3][t[2]].answers,T=[];for(let e=0;e<_.length;e+=1)T[e]=V(X(t,_,e));const k=t=>O(T[t],1,1,()=>{T[t]=null});return{c(){e=f("main"),n=f("div"),r=f("img"),o=m(),d=f("div");for(let t=0;t<y.length;t+=1)y[t].c();g=m(),p=f("div"),K($.$$.fragment),b=m(),v=f("div");for(let t=0;t<T.length;t+=1)T[t].c();h(r,"class","title svelte-13hb05f"),r.src!==(l="images/title-1.png")&&h(r,"src","images/title-1.png"),h(r,"alt","title"),h(d,"class","board svelte-13hb05f"),h(n,"class","top svelte-13hb05f"),h(v,"class","answers svelte-13hb05f"),h(p,"class","bottom svelte-13hb05f"),h(e,"class","svelte-13hb05f")},m(t,s){c(t,e,s),a(e,n),a(n,r),a(n,o),a(n,d);for(let t=0;t<y.length;t+=1)y[t].m(d,null);a(e,g),a(e,p),L($,p,null),a(p,b),a(p,v);for(let t=0;t<T.length;t+=1)T[t].m(v,null);x=!0},p(t,[e]){if(3&e){let n;for(w=t[0],n=0;n<w.length;n+=1){const s=F(t,w,n);y[n]?y[n].p(s,e):(y[n]=U(s),y[n].c(),y[n].m(d,null))}for(;n<y.length;n+=1)y[n].d(1);y.length=w.length}const n={};if(12&e&&(n.questionText=t[3][t[2]].question),$.$set(n),28&e){let n;for(_=t[3][t[2]].answers,n=0;n<_.length;n+=1){const s=X(t,_,n);T[n]?(T[n].p(s,e),N(T[n],1)):(T[n]=V(s),T[n].c(),N(T[n],1),T[n].m(v,null))}for(S={r:0,c:[],p:S},n=_.length;n<T.length;n+=1)k(n);S.r||s(S.c),S=S.p}},i(t){if(!x){N($.$$.fragment,t);for(let t=0;t<_.length;t+=1)N(T[t]);x=!0}},o(t){O($.$$.fragment,t),T=T.filter(Boolean);for(let t=0;t<T.length;t+=1)O(T[t]);x=!1},d(t){t&&i(e),u(y,t),j($),u(T,t)}}}function Z(t,e,n){let s=0,{ranks:r=[{name:"Porcelain",class:"tag small"},{name:"Obsidian",class:"tag small"},{name:"Steel",class:"tag small"},{name:"Sapphire",class:"tag small"},{name:"Emerald",class:"tag small"},{name:"Ruby",class:"tag small"},{name:"Bronze",class:"tag small"},{name:"Silver",class:"tag small"},{name:"Gold",class:"tag small"},{name:"Platinum",class:"tag large"}]}=e,l=0;document.getElementsByClassName("tag");const o=[{question:"What is the standard abbreviation for your Charisma score?",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]},{question:"This is question 2",correctAnswer:1,answers:["A","B","C","D"]}];return t.$$set=t=>{"ranks"in t&&n(0,r=t.ranks)},[r,s,l,o,function(t,e){t===o[l].correctAnswer?(document.getElementById(e).classList.add("green"),n(1,s+=1),n(3,o[l].question="Correct!",o),setTimeout(()=>{document.getElementById(e).classList.remove("green"),n(2,l+=1)},2e3)):n(3,o[l].question="Wrong!",o)},function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}(t,e)}]}return new class extends P{constructor(t){super(),I(this,t,Z,Y,l,{ranks:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
