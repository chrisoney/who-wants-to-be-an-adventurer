var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function o(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t){return null==t?"":t}function a(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function g(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let $;function v(t){$=t}const w=[],x=[],y=[],b=[],k=Promise.resolve();let _=!1;function T(t){y.push(t)}let q=!1;const A=new Set;function E(){if(!q){q=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];v(e),C(e.$$)}for(w.length=0;x.length;)x.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];A.has(e)||(A.add(e),e())}y.length=0}while(w.length);for(;b.length;)b.pop()();_=!1,q=!1,A.clear()}}function C(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const B=new Set;let S;function N(t,e){t&&t.i&&(B.delete(t),t.i(e))}function O(t,e,n,s){if(t&&t.o){if(B.has(t))return;B.add(t),S.c.push(()=>{B.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function W(t){t&&t.c()}function K(t,n,l){const{fragment:r,on_mount:a,on_destroy:c,after_update:i}=t.$$;r&&r.m(n,l),T(()=>{const n=a.map(e).filter(o);c?c.push(...n):s(n),t.$$.on_mount=[]}),i.forEach(T)}function L(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function P(t,e){-1===t.$$.dirty[0]&&(w.push(t),_||(_=!0,k.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(e,o,l,r,a,c,u=[-1]){const f=$;v(e);const d=o.props||{},m=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let g=!1;if(m.ctx=l?l(e,d,(t,n,...s)=>{const o=s.length?s[0]:n;return m.ctx&&a(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),g&&P(e,t)),n}):[],m.update(),g=!0,s(m.before_update),m.fragment=!!r&&r(m.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);m.fragment&&m.fragment.l(t),t.forEach(i)}else m.fragment&&m.fragment.c();o.intro&&N(e.$$.fragment),K(e,o.target,o.anchor),E()}v(f)}class D{$destroy(){L(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function I(e){let n,s;return{c(){n=f("div"),s=d(e[0]),p(n,"class","question svelte-1hst1w6")},m(t,e){c(t,n,e),a(n,s)},p(t,[e]){1&e&&h(s,t[0])},i:t,o:t,d(t){t&&i(n)}}}function H(t,e,n){let{questionText:s}=e;return t.$$set=t=>{"questionText"in t&&n(0,s=t.questionText)},[s]}class R extends D{constructor(t){super(),j(this,t,H,I,l,{questionText:0})}}function z(e){let n,s,o,l,r,u,g,$,v,w,x=e[2][e[1]]+"";return{c(){n=f("div"),s=f("div"),o=f("span"),o.textContent="♦",l=m(),r=f("span"),u=d(x),g=d(":"),$=m(),v=f("div"),w=d(e[0]),p(o,"class","diam svelte-ogi0xk"),p(r,"class","answer-letter svelte-ogi0xk"),p(v,"class","answer-text svelte-ogi0xk"),p(s,"class","answer-container svelte-ogi0xk"),p(n,"class","hexagon svelte-ogi0xk")},m(t,e){c(t,n,e),a(n,s),a(s,o),a(s,l),a(s,r),a(r,u),a(r,g),a(s,$),a(s,v),a(v,w)},p(t,[e]){6&e&&x!==(x=t[2][t[1]]+"")&&h(u,x),1&e&&h(w,t[0])},i:t,o:t,d(t){t&&i(n)}}}function G(t,e,n){let{answerText:s}=e,{idx:o}=e,{answerKeys:l=["A","B","C","D"]}=e;return t.$$set=t=>{"answerText"in t&&n(0,s=t.answerText),"idx"in t&&n(1,o=t.idx),"answerKeys"in t&&n(2,l=t.answerKeys)},[s,o,l]}class M extends D{constructor(t){super(),j(this,t,G,z,l,{answerText:0,idx:1,answerKeys:2})}}function X(t,e,n){const s=t.slice();return s[7]=e[n],s[9]=n,s}function F(t,e,n){const s=t.slice();return s[10]=e[n],s[12]=n,s}function J(t){let e,n,s,o,l=t[10].name+"";return{c(){e=f("div"),n=f("div"),s=d(l),p(n,"class",o=r(t[10].class)+" svelte-wsl2ov"),p(e,"class","tag-contain svelte-wsl2ov")},m(t,o){c(t,e,o),a(e,n),a(n,s)},p(t,e){1&e&&l!==(l=t[10].name+"")&&h(s,l),1&e&&o!==(o=r(t[10].class)+" svelte-wsl2ov")&&p(n,"class",o)},d(t){t&&i(e)}}}function Q(t){let e,n,s,o,l=t[10].name+"";return{c(){e=f("div"),n=f("div"),s=d(l),p(n,"class",o=r(t[10].class+" curr-font")+" svelte-wsl2ov"),p(e,"class","tag-contain curr svelte-wsl2ov")},m(t,o){c(t,e,o),a(e,n),a(n,s)},p(t,e){1&e&&l!==(l=t[10].name+"")&&h(s,l),1&e&&o!==(o=r(t[10].class+" curr-font")+" svelte-wsl2ov")&&p(n,"class",o)},d(t){t&&i(e)}}}function U(t){let e,n;function s(t,e){return t[12]===t[1]?Q:J}let o=s(t),l=o(t);return{c(){e=f("div"),l.c(),n=m(),p(e,"class","tag-area svelte-wsl2ov")},m(t,s){c(t,e,s),l.m(e,null),a(e,n)},p(t,r){o===(o=s(t))&&l?l.p(t,r):(l.d(1),l=o(t),l&&(l.c(),l.m(e,n)))},d(t){t&&i(e),l.d()}}}function V(t){let e,n,l,r,u,d,h;return n=new M({props:{answerText:t[7],idx:t[9]}}),{c(){e=f("button"),W(n.$$.fragment),l=m(),p(e,"class","answer svelte-wsl2ov"),p(e,"id",r=t[9])},m(s,r){c(s,e,r),K(n,e,null),a(e,l),u=!0,d||(h=[g(e,"click",t[5]),g(e,"click",(function(){o(t[4](t[7],t[9]))&&t[4](t[7],t[9]).apply(this,arguments)}))],d=!0)},p(e,s){t=e;const o={};12&s&&(o.answerText=t[7]),n.$set(o)},i(t){u||(N(n.$$.fragment,t),u=!0)},o(t){O(n.$$.fragment,t),u=!1},d(t){t&&i(e),L(n),d=!1,s(h)}}}function Y(t){let e,n,o,l,r,d,g,h,$,v,w=t[0],x=[];for(let e=0;e<w.length;e+=1)x[e]=U(F(t,w,e));g=new R({props:{questionText:t[3][t[2]].question}});let y=t[3][t[2]].answers,b=[];for(let e=0;e<y.length;e+=1)b[e]=V(X(t,y,e));const k=t=>O(b[t],1,1,()=>{b[t]=null});return{c(){e=f("main"),n=f("div"),o=f("div"),o.textContent="Who Wants To Be A Platinum-Rank Adventurer?",l=m(),r=f("div");for(let t=0;t<x.length;t+=1)x[t].c();d=m(),W(g.$$.fragment),h=m(),$=f("div");for(let t=0;t<b.length;t+=1)b[t].c();p(o,"class","title svelte-wsl2ov"),p(r,"class","board svelte-wsl2ov"),p(n,"class","top svelte-wsl2ov"),p($,"class","answers svelte-wsl2ov"),p(e,"class","svelte-wsl2ov")},m(t,s){c(t,e,s),a(e,n),a(n,o),a(n,l),a(n,r);for(let t=0;t<x.length;t+=1)x[t].m(r,null);a(e,d),K(g,e,null),a(e,h),a(e,$);for(let t=0;t<b.length;t+=1)b[t].m($,null);v=!0},p(t,[e]){if(3&e){let n;for(w=t[0],n=0;n<w.length;n+=1){const s=F(t,w,n);x[n]?x[n].p(s,e):(x[n]=U(s),x[n].c(),x[n].m(r,null))}for(;n<x.length;n+=1)x[n].d(1);x.length=w.length}const n={};if(12&e&&(n.questionText=t[3][t[2]].question),g.$set(n),28&e){let n;for(y=t[3][t[2]].answers,n=0;n<y.length;n+=1){const s=X(t,y,n);b[n]?(b[n].p(s,e),N(b[n],1)):(b[n]=V(s),b[n].c(),N(b[n],1),b[n].m($,null))}for(S={r:0,c:[],p:S},n=y.length;n<b.length;n+=1)k(n);S.r||s(S.c),S=S.p}},i(t){if(!v){N(g.$$.fragment,t);for(let t=0;t<y.length;t+=1)N(b[t]);v=!0}},o(t){O(g.$$.fragment,t),b=b.filter(Boolean);for(let t=0;t<b.length;t+=1)O(b[t]);v=!1},d(t){t&&i(e),u(x,t),L(g),u(b,t)}}}function Z(t,e,n){let s=0,{ranks:o=[{name:"Porcelain",class:"tag small"},{name:"Obsidian",class:"tag small"},{name:"Steel",class:"tag small"},{name:"Sapphire",class:"tag small"},{name:"Emerald",class:"tag small"},{name:"Ruby",class:"tag small"},{name:"Bronze",class:"tag small"},{name:"Silver",class:"tag small"},{name:"Gold",class:"tag small"},{name:"Platinum",class:"tag large"}]}=e,l=0;document.getElementsByClassName("tag");const r=[{question:"What is the standard abbreviation for your Charisma score?",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]},{question:"This is question 2",correctAnswer:1,answers:["A","B","C","D"]}];return t.$$set=t=>{"ranks"in t&&n(0,o=t.ranks)},[o,s,l,r,function(t,e){t===r[l].correctAnswer?(document.getElementById(e).classList.add("green"),n(1,s+=1),n(3,r[l].question="Correct!",r),setTimeout(()=>{document.getElementById(e).classList.remove("green"),n(2,l+=1)},2e3)):n(3,r[l].question="Wrong!",r)},function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}(t,e)}]}return new class extends D{constructor(t){super(),j(this,t,Z,Y,l,{ranks:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
