var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function r(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t){return null==t?"":t}function o(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function g(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let $;function v(t){$=t}const w=[],x=[],y=[],b=[],_=Promise.resolve();let T=!1;function k(t){y.push(t)}let q=!1;const E=new Set;function A(){if(!q){q=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];v(e),C(e.$$)}for(w.length=0;x.length;)x.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];E.has(e)||(E.add(e),e())}y.length=0}while(w.length);for(;b.length;)b.pop()();T=!1,q=!1,E.clear()}}function C(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const B=new Set;let S;function L(t,e){t&&t.i&&(B.delete(t),t.i(e))}function N(t,e,n,s){if(t&&t.o){if(B.has(t))return;B.add(t),S.c.push(()=>{B.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function O(t){t&&t.c()}function I(t,n,a){const{fragment:l,on_mount:o,on_destroy:c,after_update:i}=t.$$;l&&l.m(n,a),k(()=>{const n=o.map(e).filter(r);c?c.push(...n):s(n),t.$$.on_mount=[]}),i.forEach(k)}function K(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function j(t,e){-1===t.$$.dirty[0]&&(w.push(t),T||(T=!0,_.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(e,r,a,l,o,c,u=[-1]){const f=$;v(e);const d=r.props||{},m=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:o,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let g=!1;if(m.ctx=a?a(e,d,(t,n,...s)=>{const r=s.length?s[0]:n;return m.ctx&&o(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),g&&j(e,t)),n}):[],m.update(),g=!0,s(m.before_update),m.fragment=!!l&&l(m.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);m.fragment&&m.fragment.l(t),t.forEach(i)}else m.fragment&&m.fragment.c();r.intro&&L(e.$$.fragment),I(e,r.target,r.anchor),A()}v(f)}class P{$destroy(){K(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function W(e){let n,s;return{c(){n=f("div"),s=d(e[0]),p(n,"class","question svelte-1dg4i2e")},m(t,e){c(t,n,e),o(n,s)},p(t,[e]){1&e&&h(s,t[0])},i:t,o:t,d(t){t&&i(n)}}}function H(t,e,n){let{questionText:s}=e;return t.$$set=t=>{"questionText"in t&&n(0,s=t.questionText)},[s]}class z extends P{constructor(t){super(),D(this,t,H,W,a,{questionText:0})}}function G(e){let n,s,r,a,l,u,g,$,v,w=e[2][e[1]]+"";return{c(){n=f("div"),s=f("span"),s.textContent="♦",r=m(),a=f("span"),l=d(w),u=d(":"),g=m(),$=f("div"),v=d(e[0]),p(s,"class","diam svelte-1ai1f4m"),p(a,"class","answer-letter svelte-1ai1f4m"),p($,"class","answer-text svelte-1ai1f4m"),p(n,"class","answer-container svelte-1ai1f4m")},m(t,e){c(t,n,e),o(n,s),o(n,r),o(n,a),o(a,l),o(a,u),o(n,g),o(n,$),o($,v)},p(t,[e]){6&e&&w!==(w=t[2][t[1]]+"")&&h(l,w),1&e&&h(v,t[0])},i:t,o:t,d(t){t&&i(n)}}}function M(t,e,n){let{answerText:s}=e,{idx:r}=e,{answerKeys:a=["A","B","C","D"]}=e;return t.$$set=t=>{"answerText"in t&&n(0,s=t.answerText),"idx"in t&&n(1,r=t.idx),"answerKeys"in t&&n(2,a=t.answerKeys)},[s,r,a]}class R extends P{constructor(t){super(),D(this,t,M,G,a,{answerText:0,idx:1,answerKeys:2})}}function X(t,e,n){const s=t.slice();return s[7]=e[n],s[9]=n,s}function F(t,e,n){const s=t.slice();return s[10]=e[n],s[12]=n,s}function J(t){let e,n,s,r,a=t[10].name+"";return{c(){e=f("div"),n=f("div"),s=d(a),p(n,"class",r=l(t[10].class)+" svelte-vwna7i"),p(e,"class","tag-contain svelte-vwna7i")},m(t,r){c(t,e,r),o(e,n),o(n,s)},p(t,e){1&e&&a!==(a=t[10].name+"")&&h(s,a),1&e&&r!==(r=l(t[10].class)+" svelte-vwna7i")&&p(n,"class",r)},d(t){t&&i(e)}}}function Q(t){let e,n,s,r,a=t[10].name+"";return{c(){e=f("div"),n=f("div"),s=d(a),p(n,"class",r=l(t[10].class+" curr-font")+" svelte-vwna7i"),p(e,"class","tag-contain curr svelte-vwna7i")},m(t,r){c(t,e,r),o(e,n),o(n,s)},p(t,e){1&e&&a!==(a=t[10].name+"")&&h(s,a),1&e&&r!==(r=l(t[10].class+" curr-font")+" svelte-vwna7i")&&p(n,"class",r)},d(t){t&&i(e)}}}function U(t){let e,n;function s(t,e){return t[12]===t[1]?Q:J}let r=s(t),a=r(t);return{c(){e=f("div"),a.c(),n=m(),p(e,"class","tag-area svelte-vwna7i")},m(t,s){c(t,e,s),a.m(e,null),o(e,n)},p(t,l){r===(r=s(t))&&a?a.p(t,l):(a.d(1),a=r(t),a&&(a.c(),a.m(e,n)))},d(t){t&&i(e),a.d()}}}function V(t){let e,n,a,l,u,d,h;return n=new R({props:{answerText:t[7],idx:t[9]}}),{c(){e=f("button"),O(n.$$.fragment),a=m(),p(e,"class","answer svelte-vwna7i"),p(e,"id",l=t[9])},m(s,l){c(s,e,l),I(n,e,null),o(e,a),u=!0,d||(h=[g(e,"click",t[5]),g(e,"click",(function(){r(t[4](t[7],t[9]))&&t[4](t[7],t[9]).apply(this,arguments)}))],d=!0)},p(e,s){t=e;const r={};12&s&&(r.answerText=t[7]),n.$set(r)},i(t){u||(L(n.$$.fragment,t),u=!0)},o(t){N(n.$$.fragment,t),u=!1},d(t){t&&i(e),K(n),d=!1,s(h)}}}function Y(t){let e,n,r,a,l,d,g,h,$,v,w,x,y=t[0],b=[];for(let e=0;e<y.length;e+=1)b[e]=U(F(t,y,e));$=new z({props:{questionText:t[3][t[2]].question}});let _=t[3][t[2]].answers,T=[];for(let e=0;e<_.length;e+=1)T[e]=V(X(t,_,e));const k=t=>N(T[t],1,1,()=>{T[t]=null});return{c(){e=f("main"),n=f("div"),r=f("img"),l=m(),d=f("div");for(let t=0;t<b.length;t+=1)b[t].c();g=m(),h=f("div"),O($.$$.fragment),v=m(),w=f("div");for(let t=0;t<T.length;t+=1)T[t].c();p(r,"class","title svelte-vwna7i"),r.src!==(a="images/title-1.png")&&p(r,"src","images/title-1.png"),p(r,"alt","title"),p(d,"class","board svelte-vwna7i"),p(n,"class","top svelte-vwna7i"),p(w,"class","answers svelte-vwna7i"),p(h,"class","bottom svelte-vwna7i"),p(e,"class","svelte-vwna7i")},m(t,s){c(t,e,s),o(e,n),o(n,r),o(n,l),o(n,d);for(let t=0;t<b.length;t+=1)b[t].m(d,null);o(e,g),o(e,h),I($,h,null),o(h,v),o(h,w);for(let t=0;t<T.length;t+=1)T[t].m(w,null);x=!0},p(t,[e]){if(3&e){let n;for(y=t[0],n=0;n<y.length;n+=1){const s=F(t,y,n);b[n]?b[n].p(s,e):(b[n]=U(s),b[n].c(),b[n].m(d,null))}for(;n<b.length;n+=1)b[n].d(1);b.length=y.length}const n={};if(12&e&&(n.questionText=t[3][t[2]].question),$.$set(n),28&e){let n;for(_=t[3][t[2]].answers,n=0;n<_.length;n+=1){const s=X(t,_,n);T[n]?(T[n].p(s,e),L(T[n],1)):(T[n]=V(s),T[n].c(),L(T[n],1),T[n].m(w,null))}for(S={r:0,c:[],p:S},n=_.length;n<T.length;n+=1)k(n);S.r||s(S.c),S=S.p}},i(t){if(!x){L($.$$.fragment,t);for(let t=0;t<_.length;t+=1)L(T[t]);x=!0}},o(t){N($.$$.fragment,t),T=T.filter(Boolean);for(let t=0;t<T.length;t+=1)N(T[t]);x=!1},d(t){t&&i(e),u(b,t),K($),u(T,t)}}}function Z(t,e,n){let s=0,{ranks:r=[{name:"Porcelain",class:"tag small"},{name:"Obsidian",class:"tag small"},{name:"Steel",class:"tag small"},{name:"Sapphire",class:"tag small"},{name:"Emerald",class:"tag small"},{name:"Ruby",class:"tag small"},{name:"Bronze",class:"tag small"},{name:"Silver",class:"tag small"},{name:"Gold",class:"tag small"},{name:"Platinum",class:"tag large"}]}=e,a=0;document.getElementsByClassName("tag");const l=[{question:"What is the standard abbreviation for your Charisma score?",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]},{question:"This is question 2",correctAnswer:1,answers:["A","B","C","D"]}];return t.$$set=t=>{"ranks"in t&&n(0,r=t.ranks)},[r,s,a,l,function(t,e){t===l[a].correctAnswer?(document.getElementById(e).classList.add("green"),n(1,s+=1),n(3,l[a].question="Correct!",l),setTimeout(()=>{document.getElementById(e).classList.remove("green"),n(2,a+=1)},2e3)):(n(3,l[a].question="Wrong!",l),document.getElementById(e).classList.add("red"))},function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}(t,e)}]}return new class extends P{constructor(t){super(),D(this,t,Z,Y,a,{ranks:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
