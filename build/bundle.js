var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function s(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t){return null==t?"":t}const l="undefined"!=typeof window;let c=l?()=>window.performance.now():()=>Date.now(),u=l?t=>requestAnimationFrame(t):t;const f=new Set;function d(t){f.forEach(e=>{e.c(t)||(f.delete(e),e.f())}),0!==f.size&&u(d)}function m(t){let e;return 0===f.size&&u(d),{promise:new Promise(n=>{f.add(e={c:t,f:n})}),abort(){f.delete(e)}}}function g(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function v(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function y(){return $(" ")}function b(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}const _=new Set;let z,q=0;function A(t,e,n,s,o,r,i,a=0){const l=16.666/s;let c="{\n";for(let t=0;t<=1;t+=l){const s=e+(n-e)*r(t);c+=100*t+`%{${i(s,1-s)}}\n`}const u=c+`100% {${i(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${a}`,d=t.ownerDocument;_.add(d);const m=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(w("style")).sheet),g=d.__svelte_rules||(d.__svelte_rules={});g[f]||(g[f]=!0,m.insertRule(`@keyframes ${f} ${u}`,m.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?p+", ":""}${f} ${s}ms linear ${o}ms 1 both`,q+=1,f}function k(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-s.length;o&&(t.style.animation=s.join(", "),q-=o,q||u(()=>{q||(_.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),_.clear())}))}function T(t){z=t}const B=[],E=[],D=[],L=[],S=Promise.resolve();let I=!1;function R(t){D.push(t)}let j=!1;const O=new Set;function N(){if(!j){j=!0;do{for(let t=0;t<B.length;t+=1){const e=B[t];T(e),P(e.$$)}for(B.length=0;E.length;)E.pop()();for(let t=0;t<D.length;t+=1){const e=D[t];O.has(e)||(O.add(e),e())}D.length=0}while(B.length);for(;L.length;)L.pop()();I=!1,j=!1,O.clear()}}function P(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(R)}}let W;function H(){return W||(W=Promise.resolve(),W.then(()=>{W=null})),W}function M(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const K=new Set;let X;function Y(){X={r:0,c:[],p:X}}function G(){X.r||o(X.c),X=X.p}function U(t,e){t&&t.i&&(K.delete(t),t.i(e))}function F(t,e,n,s){if(t&&t.o){if(K.has(t))return;K.add(t),X.c.push(()=>{K.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const J={duration:0};function Q(n,s,o){let i,a,l=s(n,o),u=!1,f=0;function d(){i&&k(n,i)}function g(){const{delay:s=0,duration:o=300,easing:r=e,tick:g=t,css:p}=l||J;p&&(i=A(n,0,1,o,s,r,p,f++)),g(0,1);const h=c()+s,v=h+o;a&&a.abort(),u=!0,R(()=>M(n,!0,"start")),a=m(t=>{if(u){if(t>=v)return g(1,0),M(n,!0,"end"),d(),u=!1;if(t>=h){const e=r((t-h)/o);g(e,1-e)}}return u})}let p=!1;return{start(){p||(k(n),r(l)?(l=l(),H().then(g)):g())},invalidate(){p=!1},end(){u&&(d(),u=!1)}}}function V(n,s,i,a){let l=s(n,i),u=a?0:1,f=null,d=null,g=null;function p(){g&&k(n,g)}function h(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function v(s){const{delay:r=0,duration:i=300,easing:a=e,tick:v=t,css:w}=l||J,$={start:c()+r,b:s};s||($.group=X,X.r+=1),f?d=$:(w&&(p(),g=A(n,u,s,i,r,a,w)),s&&v(0,1),f=h($,i),R(()=>M(n,s,"start")),m(t=>{if(d&&t>d.start&&(f=h(d,i),d=null,M(n,f.b,"start"),w&&(p(),g=A(n,u,f.b,f.duration,0,a,l.css))),f)if(t>=f.end)v(u=f.b,1-u),M(n,f.b,"end"),d||(f.b?p():--f.group.r||o(f.group.c)),f=null;else if(t>=f.start){const e=t-f.start;u=f.a+f.d*a(e/f.duration),v(u,1-u)}return!(!f&&!d)}))}return{run(t){r(l)?H().then(()=>{l=l(),v(t)}):v(t)},end(){p(),f=d=null}}}const Z="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function tt(t){t&&t.c()}function et(t,e,s){const{fragment:i,on_mount:a,on_destroy:l,after_update:c}=t.$$;i&&i.m(e,s),R(()=>{const e=a.map(n).filter(r);l?l.push(...e):o(e),t.$$.on_mount=[]}),c.forEach(R)}function nt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){-1===t.$$.dirty[0]&&(B.push(t),I||(I=!0,S.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ot(e,n,r,i,a,l,c=[-1]){const u=z;T(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:c,skip_bound:!1};let m=!1;if(d.ctx=r?r(e,f,(t,n,...s)=>{const o=s.length?s[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),m&&st(e,t)),n}):[],d.update(),m=!0,o(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(h)}else d.fragment&&d.fragment.c();n.intro&&U(e.$$.fragment),et(e,n.target,n.anchor),N()}T(u)}class rt{$destroy(){nt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function it(t){const e=t-1;return e*e*e+1}function at(t){return--t*t*t*t*t+1}function lt(e){let n,s;return{c(){n=w("div"),s=$(e[0]),x(n,"class","question svelte-1dg4i2e")},m(t,e){p(t,n,e),g(n,s)},p(t,[e]){1&e&&C(s,t[0])},i:t,o:t,d(t){t&&h(n)}}}function ct(t,e,n){let{questionText:s}=e;return t.$$set=t=>{"questionText"in t&&n(0,s=t.questionText)},[s]}class ut extends rt{constructor(t){super(),ot(this,t,ct,lt,i,{questionText:0})}}function ft(e){let n,s,o,r,i,a,l,c,u,f=e[2][e[1]]+"";return{c(){n=w("div"),s=w("span"),s.textContent="♦",o=y(),r=w("span"),i=$(f),a=$(":"),l=y(),c=w("div"),u=$(e[0]),x(s,"class","diam svelte-1f3aymc"),x(r,"class","answer-letter svelte-1f3aymc"),x(c,"class","answer-text svelte-1f3aymc"),x(n,"class","answer-container svelte-1f3aymc")},m(t,e){p(t,n,e),g(n,s),g(n,o),g(n,r),g(r,i),g(r,a),g(n,l),g(n,c),g(c,u)},p(t,[e]){6&e&&f!==(f=t[2][t[1]]+"")&&C(i,f),1&e&&C(u,t[0])},i:t,o:t,d(t){t&&h(n)}}}function dt(t,e,n){let{answerText:s}=e,{idx:o}=e,{answerKeys:r=["A","B","C","D"]}=e;return t.$$set=t=>{"answerText"in t&&n(0,s=t.answerText),"idx"in t&&n(1,o=t.idx),"answerKeys"in t&&n(2,r=t.answerKeys)},[s,o,r]}class mt extends rt{constructor(t){super(),ot(this,t,dt,ft,i,{answerText:0,idx:1,answerKeys:2})}}function gt(e){let n,s,o,r,i;return{c(){n=w("link"),s=y(),o=w("div"),r=w("span"),i=$(e[0]),x(n,"href","https://fonts.googleapis.com/css2?family=Balthazar&display=swap"),x(n,"rel","stylesheet"),x(r,"class","timer-num svelte-9nlqtm"),x(o,"class","timer-container svelte-9nlqtm")},m(t,e){g(document.head,n),p(t,s,e),p(t,o,e),g(o,r),g(r,i)},p(t,[e]){1&e&&C(i,t[0])},i:t,o:t,d(t){h(n),t&&h(s),t&&h(o)}}}function pt(t,e,n){let{timeLeft:s}=e;return t.$$set=t=>{"timeLeft"in t&&n(0,s=t.timeLeft)},[s]}class ht extends rt{constructor(t){super(),ot(this,t,pt,gt,i,{timeLeft:0})}}const vt={0:[{question:"What is the standard abbreviation for your Charisma score?",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]},{question:"What is the standard abbreviation for your Dexterity score?",correctAnswer:"DEX",answers:["CHA","DEX","WIS","CON"]}],1:[{question:"This is question 2",correctAnswer:"B",answers:["A","B","C","D"]},{question:"This is question 2.5",correctAnswer:"C",answers:["A","B","C","D"]}],2:[{question:"This is question 3",correctAnswer:"B",answers:["A","B","C","D"]}],3:[{question:"This is question 4",correctAnswer:"B",answers:["A","B","C","D"]}],4:[{question:"This is question 5",correctAnswer:"B",answers:["A","B","C","D"]}],5:[{question:"This is question 6",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]}],6:[{question:"This is question 7",correctAnswer:"B",answers:["A","B","C","D"]}],7:[{question:"This is question 8",correctAnswer:"B",answers:["A","B","C","D"]}],8:[{question:"This is question 9",correctAnswer:"B",answers:["A","B","C","D"]}],9:[{question:"This is question 10",correctAnswer:"B",answers:["A","B","C","D"]}]};function wt(t,{delay:e=0,duration:n=400,easing:s=it,x:o=0,y:r=0,opacity:i=0}){const a=getComputedStyle(t),l=+a.opacity,c="none"===a.transform?"":a.transform,u=l*(1-i);return{delay:e,duration:n,easing:s,css:(t,e)=>`\n\t\t\ttransform: ${c} translate(${(1-t)*o}px, ${(1-t)*r}px);\n\t\t\topacity: ${l-u*e}`}}const{document:$t}=Z;function yt(t,e,n){const s=t.slice();return s[31]=e[n],s[33]=n,s}function bt(t,e,n){const s=t.slice();return s[34]=e[n],s[36]=n,s}function xt(t){let e,n,s,o,r=t[34].name+"";return{c(){e=w("div"),n=w("div"),s=$(r),x(n,"class",o=a(t[34].class)+" svelte-150i7zg"),x(e,"class","tag-contain svelte-150i7zg")},m(t,o){p(t,e,o),g(e,n),g(n,s)},p(t,e){16&e[0]&&r!==(r=t[34].name+"")&&C(s,r),16&e[0]&&o!==(o=a(t[34].class)+" svelte-150i7zg")&&x(n,"class",o)},d(t){t&&h(e)}}}function Ct(t){let e,n,s,o,r=t[34].name+"";return{c(){e=w("div"),n=w("div"),s=$(r),x(n,"class",o=a(t[34].class+" curr-font")+" svelte-150i7zg"),x(e,"class","tag-contain curr svelte-150i7zg")},m(t,o){p(t,e,o),g(e,n),g(n,s)},p(t,e){16&e[0]&&r!==(r=t[34].name+"")&&C(s,r),16&e[0]&&o!==(o=a(t[34].class+" curr-font")+" svelte-150i7zg")&&x(n,"class",o)},d(t){t&&h(e)}}}function _t(t){let e,n;function s(t,e){return t[36]===t[5]?Ct:xt}let o=s(t),r=o(t);return{c(){e=w("div"),r.c(),n=y(),x(e,"class","tag-area svelte-150i7zg")},m(t,s){p(t,e,s),r.m(e,null),g(e,n)},p(t,i){o===(o=s(t))&&r?r.p(t,i):(r.d(1),r=o(t),r&&(r.c(),r.m(e,n)))},d(t){t&&h(e),r.d()}}}function zt(t){let e,n,s,o,r;const i=[Et,Bt],a=[];function l(t,e){return t[2]?0:1}e=l(t),n=a[e]=i[e](t);let c=t[1],u=[];for(let e=0;e<c.length;e+=1)u[e]=St(yt(t,c,e));const f=t=>F(u[t],1,1,()=>{u[t]=null});return{c(){n.c(),s=y(),o=w("div");for(let t=0;t<u.length;t+=1)u[t].c();x(o,"class","answers svelte-150i7zg")},m(t,n){a[e].m(t,n),p(t,s,n),p(t,o,n);for(let t=0;t<u.length;t+=1)u[t].m(o,null);r=!0},p(t,r){let d=e;if(e=l(t),e===d?a[e].p(t,r):(Y(),F(a[d],1,1,()=>{a[d]=null}),G(),n=a[e],n||(n=a[e]=i[e](t),n.c()),U(n,1),n.m(s.parentNode,s)),4098&r[0]){let e;for(c=t[1],e=0;e<c.length;e+=1){const n=yt(t,c,e);u[e]?(u[e].p(n,r),U(u[e],1)):(u[e]=St(n),u[e].c(),U(u[e],1),u[e].m(o,null))}for(Y(),e=c.length;e<u.length;e+=1)f(e);G()}},i(t){if(!r){U(n);for(let t=0;t<c.length;t+=1)U(u[t]);r=!0}},o(t){F(n),u=u.filter(Boolean);for(let t=0;t<u.length;t+=1)F(u[t]);r=!1},d(t){a[e].d(t),t&&h(s),t&&h(o),v(u,t)}}}function qt(e){let n,s,o,r,i,a,l;return{c(){n=w("div"),s=w("span"),s.textContent='Oops, you ran out of time! Click \n\t\t\t\t"Replay" to play again!',o=y(),r=w("button"),r.textContent="Replay",x(s,"class","loss-message"),x(r,"class","next svelte-150i7zg"),x(n,"class","message svelte-150i7zg")},m(t,i){p(t,n,i),g(n,s),g(n,o),g(n,r),a||(l=b(r,"click",e[20]),a=!0)},p:t,i(t){i||R(()=>{i=Q(n,e[10],{}),i.start()})},o:t,d(t){t&&h(n),a=!1,l()}}}function At(e){let n,s,o,r,i,a,l;return{c(){n=w("div"),s=w("span"),s.textContent='You made it to Porcelain Rank! You stand as a beacon of hope\n\t\t\t\tfor adventuring teams across the land! Unfortunately, the fight never truly ends. Click \n\t\t\t\t"Replay" to play again!',o=y(),r=w("button"),r.textContent="Replay",x(s,"class","loss-message"),x(r,"class","next svelte-150i7zg"),x(n,"class","message svelte-150i7zg")},m(t,i){p(t,n,i),g(n,s),g(n,o),g(n,r),a||(l=b(r,"click",e[19]),a=!0)},p:t,i(t){i||R(()=>{i=Q(n,e[10],{}),i.start()})},o:t,d(t){t&&h(n),a=!1,l()}}}function kt(e){let n,s,o,r,i,a,l,c,u,f,d,m,v=e[4][e[5]].name+"",_=e[3][e[5]]+"";return{c(){n=w("div"),s=w("span"),o=$("Uh oh! You made it to "),r=$(v),i=$(" Rank but then\n\t\t\t\tyou were defeated by "),a=$(_),l=$('. Better luck next time! Click "Replay"\n\t\t\t\tto play again!'),c=y(),u=w("button"),u.textContent="Replay",x(s,"class","loss-message"),x(u,"class","next svelte-150i7zg"),x(n,"class","message svelte-150i7zg")},m(t,f){p(t,n,f),g(n,s),g(s,o),g(s,r),g(s,i),g(s,a),g(s,l),g(n,c),g(n,u),d||(m=b(u,"click",e[18]),d=!0)},p(t,e){48&e[0]&&v!==(v=t[4][t[5]].name+"")&&C(r,v),40&e[0]&&_!==(_=t[3][t[5]]+"")&&C(a,_)},i(t){f||R(()=>{f=Q(n,e[10],{}),f.start()})},o:t,d(t){t&&h(n),d=!1,m()}}}function Tt(e){let n,s,o,r,i,a,l;return{c(){n=w("div"),s=w("div"),s.textContent='Welcome to the game! Press "Start" to continue!',o=y(),r=w("button"),r.textContent="Start",x(s,"class","opener-message"),x(r,"class","next svelte-150i7zg"),x(n,"class","message svelte-150i7zg")},m(t,i){p(t,n,i),g(n,s),g(n,o),g(n,r),a||(l=b(r,"click",e[17]),a=!0)},p:t,i(t){i||R(()=>{i=Q(n,e[10],{}),i.start()})},o:t,d(t){t&&h(n),a=!1,l()}}}function Bt(t){let e,n;return e=new ut({props:{questionText:t[0]}}),{c(){tt(e.$$.fragment)},m(t,s){et(e,t,s),n=!0},p(t,n){const s={};1&n[0]&&(s.questionText=t[0]),e.$set(s)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function Et(e){let n,s,r,i,a,l,c,u,f;return{c(){n=w("div"),s=w("span"),s.textContent="Is that your final answer?",r=y(),i=w("div"),a=w("button"),a.textContent="Yes",l=y(),c=w("button"),c.textContent="No",x(s,"class","final-answer"),x(a,"class","next svelte-150i7zg"),x(c,"class","next red svelte-150i7zg"),x(i,"class","final-buttons"),x(n,"class","message svelte-150i7zg")},m(t,o){p(t,n,o),g(n,s),g(n,r),g(n,i),g(i,a),g(i,l),g(i,c),u||(f=[b(a,"click",e[21]),b(c,"click",e[22])],u=!0)},p:t,i:t,o:t,d(t){t&&h(n),u=!1,o(f)}}}function Dt(t){let e,n,s,o,r,i,l,c,u;function f(...e){return t[24](t[31],t[33],...e)}return n=new mt({props:{class:"ans",answerText:t[31],idx:t[33]}}),{c(){e=w("button"),tt(n.$$.fragment),s=y(),x(e,"class",o=a(t[31].split(" ").join("-")+" answer")+" svelte-150i7zg"),x(e,"id",r=t[33])},m(t,o){p(t,e,o),et(n,e,null),g(e,s),l=!0,c||(u=b(e,"click",f),c=!0)},p(s,r){t=s;const i={};2&r[0]&&(i.answerText=t[31]),n.$set(i),(!l||2&r[0]&&o!==(o=a(t[31].split(" ").join("-")+" answer")+" svelte-150i7zg"))&&x(e,"class",o)},i(t){l||(U(n.$$.fragment,t),R(()=>{i||(i=V(e,wt,{x:200,duration:500},!0)),i.run(1)}),l=!0)},o(t){F(n.$$.fragment,t),i||(i=V(e,wt,{x:200,duration:500},!1)),i.run(0),l=!1},d(t){t&&h(e),nt(n),t&&i&&i.end(),c=!1,u()}}}function Lt(t){let e,n,s,o,r,i,l,c,u;function f(...e){return t[23](t[31],t[33],...e)}return n=new mt({props:{class:"ans",answerText:t[31],idx:t[33]}}),{c(){e=w("button"),tt(n.$$.fragment),s=y(),x(e,"class",o=a(t[31].split(" ").join("-")+" answer")+" svelte-150i7zg"),x(e,"id",r=t[33])},m(t,o){p(t,e,o),et(n,e,null),g(e,s),l=!0,c||(u=b(e,"click",f),c=!0)},p(s,r){t=s;const i={};2&r[0]&&(i.answerText=t[31]),n.$set(i),(!l||2&r[0]&&o!==(o=a(t[31].split(" ").join("-")+" answer")+" svelte-150i7zg"))&&x(e,"class",o)},i(t){l||(U(n.$$.fragment,t),R(()=>{i||(i=V(e,wt,{x:-200,duration:500},!0)),i.run(1)}),l=!0)},o(t){F(n.$$.fragment,t),i||(i=V(e,wt,{x:-200,duration:500},!1)),i.run(0),l=!1},d(t){t&&h(e),nt(n),t&&i&&i.end(),c=!1,u()}}}function St(t){let e,n,s,o;const r=[Lt,Dt],i=[];return e=function(t,e){return t[33]%2==0?0:1}(t),n=i[e]=r[e](t),{c(){n.c(),s=$("")},m(t,n){i[e].m(t,n),p(t,s,n),o=!0},p(t,e){n.p(t,e)},i(t){o||(U(n),o=!0)},o(t){F(n),o=!1},d(t){i[e].d(t),t&&h(s)}}}function It(t){let e,n,s,o,r,i,a,l,c,u,f,d,m,$,b,C,_,z,q;u=new ht({props:{timeLeft:t[9]}});let A=t[4],k=[];for(let e=0;e<A.length;e+=1)k[e]=_t(bt(t,A,e));const T=[Tt,kt,At,qt,zt],B=[];function E(t,e){return t[6]?t[8]?1:t[7]?2:0===t[9]?3:4:0}return b=E(t),C=B[b]=T[b](t),{c(){e=w("script"),s=y(),o=w("main"),r=w("div"),i=w("div"),a=w("img"),c=y(),tt(u.$$.fragment),f=y(),d=w("div");for(let t=0;t<k.length;t+=1)k[t].c();m=y(),$=w("div"),C.c(),_=y(),z=w("div"),z.innerHTML='<div class="about-container svelte-150i7zg"><img class="face svelte-150i7zg" src="images/face.jpg" alt="face"> \n\t\t\t<div class="about-popup svelte-150i7zg"><a href="https://github.com/chrisoney/"><span class="about-icon fab fa-github svelte-150i7zg"></span></a> \n\t\t\t\t<a href="https://www.linkedin.com/in/christopher-oney-317b84132/"><span class="about-icon fab fa-linkedin svelte-150i7zg"></span></a> \n\t\t\t\t<a href="https://angel.co/u/christopher-oney"><span class="about-icon fab fa-angellist svelte-150i7zg"></span></a></div></div>',e.src!==(n="https://kit.fontawesome.com/a229c5b13d.js")&&x(e,"src","https://kit.fontawesome.com/a229c5b13d.js"),x(e,"crossorigin","anonymous"),x(a,"class","title svelte-150i7zg"),a.src!==(l="images/title-2.png")&&x(a,"src","images/title-2.png"),x(a,"alt","title"),x(i,"class","top-left svelte-150i7zg"),x(d,"class","board svelte-150i7zg"),x(r,"class","top svelte-150i7zg"),x($,"class","bottom svelte-150i7zg"),x(z,"class","about svelte-150i7zg"),x(o,"class","svelte-150i7zg")},m(t,n){g($t.head,e),p(t,s,n),p(t,o,n),g(o,r),g(r,i),g(i,a),g(i,c),et(u,i,null),g(r,f),g(r,d);for(let t=0;t<k.length;t+=1)k[t].m(d,null);g(o,m),g(o,$),B[b].m($,null),g(o,_),g(o,z),q=!0},p(t,e){const n={};if(512&e[0]&&(n.timeLeft=t[9]),u.$set(n),48&e[0]){let n;for(A=t[4],n=0;n<A.length;n+=1){const s=bt(t,A,n);k[n]?k[n].p(s,e):(k[n]=_t(s),k[n].c(),k[n].m(d,null))}for(;n<k.length;n+=1)k[n].d(1);k.length=A.length}let s=b;b=E(t),b===s?B[b].p(t,e):(Y(),F(B[s],1,1,()=>{B[s]=null}),G(),C=B[b],C||(C=B[b]=T[b](t),C.c()),U(C,1),C.m($,null))},i(t){q||(U(u.$$.fragment,t),U(C),q=!0)},o(t){F(u.$$.fragment,t),F(C),q=!1},d(t){h(e),t&&h(s),t&&h(o),nt(u),v(k,t),B[b].d()}}}function Rt(t,e,n){let s=-1,o=!1,r=!1,i=!1,{monsters:a=["slimes","goblins","kobolds","bandits","ogres","sandworms","Githyanki","illithids","a beholder","a dragon"]}=e,{ranks:l=[{name:"Porcelain",class:"tag small"},{name:"Obsidian",class:"tag small"},{name:"Steel",class:"tag small"},{name:"Sapphire",class:"tag small"},{name:"Emerald",class:"tag small"},{name:"Ruby",class:"tag small"},{name:"Bronze",class:"tag small"},{name:"Silver",class:"tag small"},{name:"Gold",class:"tag small"},{name:"Platinum",class:"tag large"}]}=e,c=0,{question:u=""}=e,{correctAnswer:f=""}=e,{answers:d=[]}=e;function m(){const t=vt[c][Math.floor(Math.random()*vt[c].length)];n(0,u=t.question),n(14,f=t.correctAnswer),n(1,d=t.answers)}function g(t,e){t.stopPropagation(),"start"===e?(n(5,s=0),n(6,o=!0),n(9,b=30),m(),x()):"replay"===e&&(n(8,i=!1),n(7,r=!1),n(6,o=!1),n(5,s=-1),c=0)}let{choiceText:p=""}=e,{choiceIdx:h=0}=e,{final:v=!1}=e;function w(t,e,s){t.preventDefault(),n(15,p=e),n(16,h=s),n(2,v=!0),clearInterval(y)}function $(t,e){t.preventDefault(),n(2,v=!1),e?function(t,e){if(t===f)document.getElementById(e).classList.add("green"),n(0,u="Correct!"),setTimeout(()=>{document.getElementById(e).classList.remove("green"),c+=1,n(5,s+=1),c<=9?(n(9,b=30),x(),m()):n(7,r=!0)},2e3);else{n(0,u="Wrong!"),document.getElementById(e).classList.add("red");let t=document.getElementsByClassName("answer");for(let e=0;e<t.length;e++)t[e].classList.contains(f.split(" ").join("-"))&&t[e].classList.add("green");setTimeout(()=>{n(8,i=!0)},2e3)}}(p,h):x()}let y,b=30;function x(){y=setInterval(()=>{n(9,b-=1)},1e3)}return t.$$set=t=>{"monsters"in t&&n(3,a=t.monsters),"ranks"in t&&n(4,l=t.ranks),"question"in t&&n(0,u=t.question),"correctAnswer"in t&&n(14,f=t.correctAnswer),"answers"in t&&n(1,d=t.answers),"choiceText"in t&&n(15,p=t.choiceText),"choiceIdx"in t&&n(16,h=t.choiceIdx),"final"in t&&n(2,v=t.final)},[u,d,v,a,l,s,o,r,i,b,function(t,{delay:e=600,duration:n=1e3}){const s=+getComputedStyle(t).opacity;return{easing:at,delay:e,duration:n,css:t=>"opacity: "+t*s}},g,w,$,f,p,h,t=>g(t,"start"),t=>g(t,"replay"),t=>g(t,"replay"),t=>g(t,"time"),t=>$(t,!0),t=>$(t,!1),(t,e,n)=>w(n,t,e),(t,e,n)=>w(n,t,e)]}return new class extends rt{constructor(t){super(),ot(this,t,Rt,It,i,{monsters:3,ranks:4,question:0,correctAnswer:14,answers:1,choiceText:15,choiceIdx:16,final:2},[-1,-1])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
