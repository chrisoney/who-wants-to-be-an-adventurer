var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function a(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t){return null==t?"":t}function o(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function g(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let v;function $(t){v=t}const w=[],x=[],y=[],b=[],_=Promise.resolve();let T=!1;function k(t){y.push(t)}let q=!1;const E=new Set;function A(){if(!q){q=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];$(e),C(e.$$)}for(w.length=0;x.length;)x.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];E.has(e)||(E.add(e),e())}y.length=0}while(w.length);for(;b.length;)b.pop()();T=!1,q=!1,E.clear()}}function C(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const B=new Set;let L;function N(t,e){t&&t.i&&(B.delete(t),t.i(e))}function S(t,e,n,s){if(t&&t.o){if(B.has(t))return;B.add(t),L.c.push(()=>{B.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function O(t){t&&t.c()}function I(t,n,r){const{fragment:l,on_mount:o,on_destroy:c,after_update:i}=t.$$;l&&l.m(n,r),k(()=>{const n=o.map(e).filter(a);c?c.push(...n):s(n),t.$$.on_mount=[]}),i.forEach(k)}function K(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function j(t,e){-1===t.$$.dirty[0]&&(w.push(t),T||(T=!0,_.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(e,a,r,l,o,c,u=[-1]){const f=v;$(e);const d=a.props||{},m=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:o,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let g=!1;if(m.ctx=r?r(e,d,(t,n,...s)=>{const a=s.length?s[0]:n;return m.ctx&&o(m.ctx[t],m.ctx[t]=a)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](a),g&&j(e,t)),n}):[],m.update(),g=!0,s(m.before_update),m.fragment=!!l&&l(m.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);m.fragment&&m.fragment.l(t),t.forEach(i)}else m.fragment&&m.fragment.c();a.intro&&N(e.$$.fragment),I(e,a.target,a.anchor),A()}$(f)}class P{$destroy(){K(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function W(e){let n,s;return{c(){n=f("div"),s=d(e[0]),p(n,"class","question svelte-1dg4i2e")},m(t,e){c(t,n,e),o(n,s)},p(t,[e]){1&e&&h(s,t[0])},i:t,o:t,d(t){t&&i(n)}}}function H(t,e,n){let{questionText:s}=e;return t.$$set=t=>{"questionText"in t&&n(0,s=t.questionText)},[s]}class z extends P{constructor(t){super(),D(this,t,H,W,r,{questionText:0})}}function G(e){let n,s,a,r,l,u,g,v,$,w=e[2][e[1]]+"";return{c(){n=f("div"),s=f("span"),s.textContent="♦",a=m(),r=f("span"),l=d(w),u=d(":"),g=m(),v=f("div"),$=d(e[0]),p(s,"class","diam svelte-1ai1f4m"),p(r,"class","answer-letter svelte-1ai1f4m"),p(v,"class","answer-text svelte-1ai1f4m"),p(n,"class","answer-container svelte-1ai1f4m")},m(t,e){c(t,n,e),o(n,s),o(n,a),o(n,r),o(r,l),o(r,u),o(n,g),o(n,v),o(v,$)},p(t,[e]){6&e&&w!==(w=t[2][t[1]]+"")&&h(l,w),1&e&&h($,t[0])},i:t,o:t,d(t){t&&i(n)}}}function M(t,e,n){let{answerText:s}=e,{idx:a}=e,{answerKeys:r=["A","B","C","D"]}=e;return t.$$set=t=>{"answerText"in t&&n(0,s=t.answerText),"idx"in t&&n(1,a=t.idx),"answerKeys"in t&&n(2,r=t.answerKeys)},[s,a,r]}class R extends P{constructor(t){super(),D(this,t,M,G,r,{answerText:0,idx:1,answerKeys:2})}}function X(t,e,n){const s=t.slice();return s[7]=e[n],s[9]=n,s}function F(t,e,n){const s=t.slice();return s[10]=e[n],s[12]=n,s}function J(t){let e,n,s,a,r=t[10].name+"";return{c(){e=f("div"),n=f("div"),s=d(r),p(n,"class",a=l(t[10].class)+" svelte-vwna7i"),p(e,"class","tag-contain svelte-vwna7i")},m(t,a){c(t,e,a),o(e,n),o(n,s)},p(t,e){1&e&&r!==(r=t[10].name+"")&&h(s,r),1&e&&a!==(a=l(t[10].class)+" svelte-vwna7i")&&p(n,"class",a)},d(t){t&&i(e)}}}function Q(t){let e,n,s,a,r=t[10].name+"";return{c(){e=f("div"),n=f("div"),s=d(r),p(n,"class",a=l(t[10].class+" curr-font")+" svelte-vwna7i"),p(e,"class","tag-contain curr svelte-vwna7i")},m(t,a){c(t,e,a),o(e,n),o(n,s)},p(t,e){1&e&&r!==(r=t[10].name+"")&&h(s,r),1&e&&a!==(a=l(t[10].class+" curr-font")+" svelte-vwna7i")&&p(n,"class",a)},d(t){t&&i(e)}}}function U(t){let e,n;function s(t,e){return t[12]===t[1]?Q:J}let a=s(t),r=a(t);return{c(){e=f("div"),r.c(),n=m(),p(e,"class","tag-area svelte-vwna7i")},m(t,s){c(t,e,s),r.m(e,null),o(e,n)},p(t,l){a===(a=s(t))&&r?r.p(t,l):(r.d(1),r=a(t),r&&(r.c(),r.m(e,n)))},d(t){t&&i(e),r.d()}}}function V(t){let e,n,r,u,d,h,v,$;return n=new R({props:{class:"ans",answerText:t[7],idx:t[9]}}),{c(){e=f("button"),O(n.$$.fragment),r=m(),p(e,"class",u=l(t[7]+" answer")+" svelte-vwna7i"),p(e,"id",d=t[9])},m(s,l){c(s,e,l),I(n,e,null),o(e,r),h=!0,v||($=[g(e,"click",t[5]),g(e,"click",(function(){a(t[4](t[7],t[9]))&&t[4](t[7],t[9]).apply(this,arguments)}))],v=!0)},p(s,a){t=s;const r={};12&a&&(r.answerText=t[7]),n.$set(r),(!h||12&a&&u!==(u=l(t[7]+" answer")+" svelte-vwna7i"))&&p(e,"class",u)},i(t){h||(N(n.$$.fragment,t),h=!0)},o(t){S(n.$$.fragment,t),h=!1},d(t){t&&i(e),K(n),v=!1,s($)}}}function Y(t){let e,n,a,r,l,d,g,h,v,$,w,x,y=t[0],b=[];for(let e=0;e<y.length;e+=1)b[e]=U(F(t,y,e));v=new z({props:{questionText:t[3][t[2]].question}});let _=t[3][t[2]].answers,T=[];for(let e=0;e<_.length;e+=1)T[e]=V(X(t,_,e));const k=t=>S(T[t],1,1,()=>{T[t]=null});return{c(){e=f("main"),n=f("div"),a=f("img"),l=m(),d=f("div");for(let t=0;t<b.length;t+=1)b[t].c();g=m(),h=f("div"),O(v.$$.fragment),$=m(),w=f("div");for(let t=0;t<T.length;t+=1)T[t].c();p(a,"class","title svelte-vwna7i"),a.src!==(r="images/title-1.png")&&p(a,"src","images/title-1.png"),p(a,"alt","title"),p(d,"class","board svelte-vwna7i"),p(n,"class","top svelte-vwna7i"),p(w,"class","answers svelte-vwna7i"),p(h,"class","bottom svelte-vwna7i"),p(e,"class","svelte-vwna7i")},m(t,s){c(t,e,s),o(e,n),o(n,a),o(n,l),o(n,d);for(let t=0;t<b.length;t+=1)b[t].m(d,null);o(e,g),o(e,h),I(v,h,null),o(h,$),o(h,w);for(let t=0;t<T.length;t+=1)T[t].m(w,null);x=!0},p(t,[e]){if(3&e){let n;for(y=t[0],n=0;n<y.length;n+=1){const s=F(t,y,n);b[n]?b[n].p(s,e):(b[n]=U(s),b[n].c(),b[n].m(d,null))}for(;n<b.length;n+=1)b[n].d(1);b.length=y.length}const n={};if(12&e&&(n.questionText=t[3][t[2]].question),v.$set(n),28&e){let n;for(_=t[3][t[2]].answers,n=0;n<_.length;n+=1){const s=X(t,_,n);T[n]?(T[n].p(s,e),N(T[n],1)):(T[n]=V(s),T[n].c(),N(T[n],1),T[n].m(w,null))}for(L={r:0,c:[],p:L},n=_.length;n<T.length;n+=1)k(n);L.r||s(L.c),L=L.p}},i(t){if(!x){N(v.$$.fragment,t);for(let t=0;t<_.length;t+=1)N(T[t]);x=!0}},o(t){S(v.$$.fragment,t),T=T.filter(Boolean);for(let t=0;t<T.length;t+=1)S(T[t]);x=!1},d(t){t&&i(e),u(b,t),K(v),u(T,t)}}}function Z(t,e,n){let s=0,{ranks:a=[{name:"Porcelain",class:"tag small"},{name:"Obsidian",class:"tag small"},{name:"Steel",class:"tag small"},{name:"Sapphire",class:"tag small"},{name:"Emerald",class:"tag small"},{name:"Ruby",class:"tag small"},{name:"Bronze",class:"tag small"},{name:"Silver",class:"tag small"},{name:"Gold",class:"tag small"},{name:"Platinum",class:"tag large"}]}=e,r=0;document.getElementsByClassName("tag");const l=[{question:"What is the standard abbreviation for your Charisma score?",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]},{question:"This is question 2",correctAnswer:1,answers:["A","B","C","D"]}];return t.$$set=t=>{"ranks"in t&&n(0,a=t.ranks)},[a,s,r,l,function(t,e){if(t===l[r].correctAnswer)document.getElementById(e).classList.add("green"),n(1,s+=1),n(3,l[r].question="Correct!",l),setTimeout(()=>{document.getElementById(e).classList.remove("green"),n(2,r+=1)},2e3);else{n(3,l[r].question="Wrong!",l),document.getElementById(e).classList.add("red");let t=document.getElementsByClassName("answer");for(let e=0;e<t.length;e++)t[e].classList.contains(l[r].correctAnswer)&&t[e].classList.add("green");console.log(t)}},function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}(t,e)}]}return new class extends P{constructor(t){super(),D(this,t,Z,Y,r,{ranks:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
