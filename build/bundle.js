var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t){return null==t?"":t}const i="undefined"!=typeof window;let c=i?()=>window.performance.now():()=>Date.now(),u=i?t=>requestAnimationFrame(t):t;const d=new Set;function f(t){d.forEach(e=>{e.c(t)||(d.delete(e),e.f())}),0!==d.size&&u(f)}function m(t){let e;return 0===d.size&&u(f),{promise:new Promise(n=>{d.add(e={c:t,f:n})}),abort(){d.delete(e)}}}function h(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function w(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function y(){return v(" ")}function x(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}const _=new Set;let A,q=0;function T(t,e,n,s,r,o,l,a=0){const i=16.666/s;let c="{\n";for(let t=0;t<=1;t+=i){const s=e+(n-e)*o(t);c+=100*t+`%{${l(s,1-s)}}\n`}const u=c+`100% {${l(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${a}`,f=t.ownerDocument;_.add(f);const m=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild($("style")).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[d]||(h[d]=!0,m.insertRule(`@keyframes ${d} ${u}`,m.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?p+", ":""}${d} ${s}ms linear ${r}ms 1 both`,q+=1,d}function k(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-s.length;r&&(t.style.animation=s.join(", "),q-=r,q||u(()=>{q||(_.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),_.clear())}))}function B(t){A=t}const E=[],D=[],S=[],I=[],R=Promise.resolve();let O=!1;function j(t){S.push(t)}let L=!1;const N=new Set;function P(){if(!L){L=!0;do{for(let t=0;t<E.length;t+=1){const e=E[t];B(e),W(e.$$)}for(E.length=0;D.length;)D.pop()();for(let t=0;t<S.length;t+=1){const e=S[t];N.has(e)||(N.add(e),e())}S.length=0}while(E.length);for(;I.length;)I.pop()();O=!1,L=!1,N.clear()}}function W(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}let H;function K(){return H||(H=Promise.resolve(),H.then(()=>{H=null})),H}function M(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const X=new Set;let Y;function z(){Y={r:0,c:[],p:Y}}function G(){Y.r||r(Y.c),Y=Y.p}function U(t,e){t&&t.i&&(X.delete(t),t.i(e))}function F(t,e,n,s){if(t&&t.o){if(X.has(t))return;X.add(t),Y.c.push(()=>{X.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const J={duration:0};function Q(n,s,r){let l,a,i=s(n,r),u=!1,d=0;function f(){l&&k(n,l)}function h(){const{delay:s=0,duration:r=300,easing:o=e,tick:h=t,css:p}=i||J;p&&(l=T(n,0,1,r,s,o,p,d++)),h(0,1);const g=c()+s,w=g+r;a&&a.abort(),u=!0,j(()=>M(n,!0,"start")),a=m(t=>{if(u){if(t>=w)return h(1,0),M(n,!0,"end"),f(),u=!1;if(t>=g){const e=o((t-g)/r);h(e,1-e)}}return u})}let p=!1;return{start(){p||(k(n),o(i)?(i=i(),K().then(h)):h())},invalidate(){p=!1},end(){u&&(f(),u=!1)}}}function V(n,s,l,a){let i=s(n,l),u=a?0:1,d=null,f=null,h=null;function p(){h&&k(n,h)}function g(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function w(s){const{delay:o=0,duration:l=300,easing:a=e,tick:w=t,css:$}=i||J,v={start:c()+o,b:s};s||(v.group=Y,Y.r+=1),d?f=v:($&&(p(),h=T(n,u,s,l,o,a,$)),s&&w(0,1),d=g(v,l),j(()=>M(n,s,"start")),m(t=>{if(f&&t>f.start&&(d=g(f,l),f=null,M(n,d.b,"start"),$&&(p(),h=T(n,u,d.b,d.duration,0,a,i.css))),d)if(t>=d.end)w(u=d.b,1-u),M(n,d.b,"end"),f||(d.b?p():--d.group.r||r(d.group.c)),d=null;else if(t>=d.start){const e=t-d.start;u=d.a+d.d*a(e/d.duration),w(u,1-u)}return!(!d&&!f)}))}return{run(t){o(i)?K().then(()=>{i=i(),w(t)}):w(t)},end(){p(),d=f=null}}}function Z(t){t&&t.c()}function tt(t,e,s){const{fragment:l,on_mount:a,on_destroy:i,after_update:c}=t.$$;l&&l.m(e,s),j(()=>{const e=a.map(n).filter(o);i?i.push(...e):r(e),t.$$.on_mount=[]}),c.forEach(j)}function et(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function nt(t,e){-1===t.$$.dirty[0]&&(E.push(t),O||(O=!0,R.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function st(e,n,o,l,a,i,c=[-1]){const u=A;B(e);const d=n.props||{},f=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:c,skip_bound:!1};let m=!1;if(f.ctx=o?o(e,d,(t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),m&&nt(e,t)),n}):[],f.update(),m=!0,r(f.before_update),f.fragment=!!l&&l(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(g)}else f.fragment&&f.fragment.c();n.intro&&U(e.$$.fragment),tt(e,n.target,n.anchor),P()}B(u)}class rt{$destroy(){et(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ot(t){const e=t-1;return e*e*e+1}function lt(t){return--t*t*t*t*t+1}function at(e){let n,s;return{c(){n=$("div"),s=v(e[0]),b(n,"class","question svelte-1dg4i2e")},m(t,e){p(t,n,e),h(n,s)},p(t,[e]){1&e&&C(s,t[0])},i:t,o:t,d(t){t&&g(n)}}}function it(t,e,n){let{questionText:s}=e;return t.$$set=t=>{"questionText"in t&&n(0,s=t.questionText)},[s]}class ct extends rt{constructor(t){super(),st(this,t,it,at,l,{questionText:0})}}function ut(e){let n,s,r,o,l,a,i,c,u,d=e[2][e[1]]+"";return{c(){n=$("div"),s=$("span"),s.textContent="♦",r=y(),o=$("span"),l=v(d),a=v(":"),i=y(),c=$("div"),u=v(e[0]),b(s,"class","diam svelte-1f3aymc"),b(o,"class","answer-letter svelte-1f3aymc"),b(c,"class","answer-text svelte-1f3aymc"),b(n,"class","answer-container svelte-1f3aymc")},m(t,e){p(t,n,e),h(n,s),h(n,r),h(n,o),h(o,l),h(o,a),h(n,i),h(n,c),h(c,u)},p(t,[e]){6&e&&d!==(d=t[2][t[1]]+"")&&C(l,d),1&e&&C(u,t[0])},i:t,o:t,d(t){t&&g(n)}}}function dt(t,e,n){let{answerText:s}=e,{idx:r}=e,{answerKeys:o=["A","B","C","D"]}=e;return t.$$set=t=>{"answerText"in t&&n(0,s=t.answerText),"idx"in t&&n(1,r=t.idx),"answerKeys"in t&&n(2,o=t.answerKeys)},[s,r,o]}class ft extends rt{constructor(t){super(),st(this,t,dt,ut,l,{answerText:0,idx:1,answerKeys:2})}}function mt(e){let n,s,r;return{c(){n=$("div"),s=$("span"),r=v(e[0]),b(s,"class","timer-num"),b(n,"class","timer-container")},m(t,e){p(t,n,e),h(n,s),h(s,r)},p(t,[e]){1&e&&C(r,t[0])},i:t,o:t,d(t){t&&g(n)}}}function ht(t,e,n){let{lapse:s=0}=e;return t.$$set=t=>{"lapse"in t&&n(0,s=t.lapse)},[s]}class pt extends rt{constructor(t){super(),st(this,t,ht,mt,l,{lapse:0})}}const gt={0:[{question:"What is the standard abbreviation for your Charisma score?",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]},{question:"What is the standard abbreviation for your Dexterity score?",correctAnswer:"DEX",answers:["CHA","DEX","WIS","CON"]}],1:[{question:"This is question 2",correctAnswer:"B",answers:["A","B","C","D"]},{question:"This is question 2.5",correctAnswer:"C",answers:["A","B","C","D"]}],2:[{question:"This is question 3",correctAnswer:"B",answers:["A","B","C","D"]}],3:[{question:"This is question 4",correctAnswer:"B",answers:["A","B","C","D"]}],4:[{question:"This is question 5",correctAnswer:"B",answers:["A","B","C","D"]}],5:[{question:"This is question 6",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]}],6:[{question:"This is question 7",correctAnswer:"B",answers:["A","B","C","D"]}],7:[{question:"This is question 8",correctAnswer:"B",answers:["A","B","C","D"]}],8:[{question:"This is question 9",correctAnswer:"B",answers:["A","B","C","D"]}],9:[{question:"This is question 10",correctAnswer:"B",answers:["A","B","C","D"]}]};function wt(t,{delay:e=0,duration:n=400,easing:s=ot,x:r=0,y:o=0,opacity:l=0}){const a=getComputedStyle(t),i=+a.opacity,c="none"===a.transform?"":a.transform,u=i*(1-l);return{delay:e,duration:n,easing:s,css:(t,e)=>`\n\t\t\ttransform: ${c} translate(${(1-t)*r}px, ${(1-t)*o}px);\n\t\t\topacity: ${i-u*e}`}}function $t(t,e,n){const s=t.slice();return s[35]=e[n],s[37]=n,s}function vt(t,e,n){const s=t.slice();return s[38]=e[n],s[40]=n,s}function yt(t){let e,n,s,r,o=t[38].name+"";return{c(){e=$("div"),n=$("div"),s=v(o),b(n,"class",r=a(t[38].class)+" svelte-14whl80"),b(e,"class","tag-contain svelte-14whl80")},m(t,r){p(t,e,r),h(e,n),h(n,s)},p(t,e){16&e[0]&&o!==(o=t[38].name+"")&&C(s,o),16&e[0]&&r!==(r=a(t[38].class)+" svelte-14whl80")&&b(n,"class",r)},d(t){t&&g(e)}}}function xt(t){let e,n,s,r,o=t[38].name+"";return{c(){e=$("div"),n=$("div"),s=v(o),b(n,"class",r=a(t[38].class+" curr-font")+" svelte-14whl80"),b(e,"class","tag-contain curr svelte-14whl80")},m(t,r){p(t,e,r),h(e,n),h(n,s)},p(t,e){16&e[0]&&o!==(o=t[38].name+"")&&C(s,o),16&e[0]&&r!==(r=a(t[38].class+" curr-font")+" svelte-14whl80")&&b(n,"class",r)},d(t){t&&g(e)}}}function bt(t){let e,n;function s(t,e){return t[40]===t[5]?xt:yt}let r=s(t),o=r(t);return{c(){e=$("div"),o.c(),n=y(),b(e,"class","tag-area svelte-14whl80")},m(t,s){p(t,e,s),o.m(e,null),h(e,n)},p(t,l){r===(r=s(t))&&o?o.p(t,l):(o.d(1),o=r(t),o&&(o.c(),o.m(e,n)))},d(t){t&&g(e),o.d()}}}function Ct(t){let e,n,s,r,o;const l=[Bt,kt],a=[];function i(t,e){return t[2]?0:1}e=i(t),n=a[e]=l[e](t);let c=t[1],u=[];for(let e=0;e<c.length;e+=1)u[e]=St($t(t,c,e));const d=t=>F(u[t],1,1,()=>{u[t]=null});return{c(){n.c(),s=y(),r=$("div");for(let t=0;t<u.length;t+=1)u[t].c();b(r,"class","answers svelte-14whl80")},m(t,n){a[e].m(t,n),p(t,s,n),p(t,r,n);for(let t=0;t<u.length;t+=1)u[t].m(r,null);o=!0},p(t,o){let f=e;if(e=i(t),e===f?a[e].p(t,o):(z(),F(a[f],1,1,()=>{a[f]=null}),G(),n=a[e],n||(n=a[e]=l[e](t),n.c()),U(n,1),n.m(s.parentNode,s)),2050&o[0]){let e;for(c=t[1],e=0;e<c.length;e+=1){const n=$t(t,c,e);u[e]?(u[e].p(n,o),U(u[e],1)):(u[e]=St(n),u[e].c(),U(u[e],1),u[e].m(r,null))}for(z(),e=c.length;e<u.length;e+=1)d(e);G()}},i(t){if(!o){U(n);for(let t=0;t<c.length;t+=1)U(u[t]);o=!0}},o(t){F(n),u=u.filter(Boolean);for(let t=0;t<u.length;t+=1)F(u[t]);o=!1},d(t){a[e].d(t),t&&g(s),t&&g(r),w(u,t)}}}function _t(e){let n;return{c(){n=$("div"),n.textContent="Oops you failed",b(n,"class","message svelte-14whl80")},m(t,e){p(t,n,e)},p:t,i:t,o:t,d(t){t&&g(n)}}}function At(e){let n,s,r,o,l,a,i;return{c(){n=$("div"),s=$("span"),s.textContent='You made it to Porcelain Rank! You stand as a beacon of hope\n\t\t\t\tfor adventuring teams across the land! Unfortunately, the fight never truly ends. Click \n\t\t\t\t"Replay" to play again!',r=y(),o=$("button"),o.textContent="Replay",b(s,"class","loss-message"),b(o,"class","next svelte-14whl80"),b(n,"class","message svelte-14whl80")},m(t,l){p(t,n,l),h(n,s),h(n,r),h(n,o),a||(i=x(o,"click",e[18]),a=!0)},p:t,i(t){l||j(()=>{l=Q(n,e[9],{}),l.start()})},o:t,d(t){t&&g(n),a=!1,i()}}}function qt(e){let n,s,r,o,l,a,i,c,u,d,f,m,w=e[4][e[5]].name+"",_=e[3][e[5]]+"";return{c(){n=$("div"),s=$("span"),r=v("Uh oh! You made it to "),o=v(w),l=v(" Rank but then\n\t\t\t\tyou were defeated by "),a=v(_),i=v('. Better luck next time! Click "Replay"\n\t\t\t\tto play again!'),c=y(),u=$("button"),u.textContent="Replay",b(s,"class","loss-message"),b(u,"class","next svelte-14whl80"),b(n,"class","message svelte-14whl80")},m(t,d){p(t,n,d),h(n,s),h(s,r),h(s,o),h(s,l),h(s,a),h(s,i),h(n,c),h(n,u),f||(m=x(u,"click",e[17]),f=!0)},p(t,e){48&e[0]&&w!==(w=t[4][t[5]].name+"")&&C(o,w),40&e[0]&&_!==(_=t[3][t[5]]+"")&&C(a,_)},i(t){d||j(()=>{d=Q(n,e[9],{}),d.start()})},o:t,d(t){t&&g(n),f=!1,m()}}}function Tt(e){let n,s,r,o,l,a,i;return{c(){n=$("div"),s=$("div"),s.textContent='Welcome to the game! Press "Start" to continue!',r=y(),o=$("button"),o.textContent="Start",b(s,"class","opener-message"),b(o,"class","next svelte-14whl80"),b(n,"class","message svelte-14whl80")},m(t,l){p(t,n,l),h(n,s),h(n,r),h(n,o),a||(i=x(o,"click",e[16]),a=!0)},p:t,i(t){l||j(()=>{l=Q(n,e[9],{}),l.start()})},o:t,d(t){t&&g(n),a=!1,i()}}}function kt(t){let e,n;return e=new ct({props:{questionText:t[0]}}),{c(){Z(e.$$.fragment)},m(t,s){tt(e,t,s),n=!0},p(t,n){const s={};1&n[0]&&(s.questionText=t[0]),e.$set(s)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}function Bt(e){let n,s,o,l,a,i,c,u,d;return{c(){n=$("div"),s=$("span"),s.textContent="Is that your final answer?",o=y(),l=$("div"),a=$("button"),a.textContent="Yes",i=y(),c=$("button"),c.textContent="No",b(s,"class","final-answer"),b(a,"class","next svelte-14whl80"),b(c,"class","next red svelte-14whl80"),b(l,"class","final-buttons"),b(n,"class","message svelte-14whl80")},m(t,r){p(t,n,r),h(n,s),h(n,o),h(n,l),h(l,a),h(l,i),h(l,c),u||(d=[x(a,"click",e[19]),x(c,"click",e[20])],u=!0)},p:t,i:t,o:t,d(t){t&&g(n),u=!1,r(d)}}}function Et(t){let e,n,s,r,o,l,i,c,u;function d(...e){return t[22](t[35],t[37],...e)}return n=new ft({props:{class:"ans",answerText:t[35],idx:t[37]}}),{c(){e=$("button"),Z(n.$$.fragment),s=y(),b(e,"class",r=a(t[35].split(" ").join("-")+" answer")+" svelte-14whl80"),b(e,"id",o=t[37])},m(t,r){p(t,e,r),tt(n,e,null),h(e,s),i=!0,c||(u=x(e,"click",d),c=!0)},p(s,o){t=s;const l={};2&o[0]&&(l.answerText=t[35]),n.$set(l),(!i||2&o[0]&&r!==(r=a(t[35].split(" ").join("-")+" answer")+" svelte-14whl80"))&&b(e,"class",r)},i(t){i||(U(n.$$.fragment,t),j(()=>{l||(l=V(e,wt,{x:200,duration:500},!0)),l.run(1)}),i=!0)},o(t){F(n.$$.fragment,t),l||(l=V(e,wt,{x:200,duration:500},!1)),l.run(0),i=!1},d(t){t&&g(e),et(n),t&&l&&l.end(),c=!1,u()}}}function Dt(t){let e,n,s,r,o,l,i,c,u;function d(...e){return t[21](t[35],t[37],...e)}return n=new ft({props:{class:"ans",answerText:t[35],idx:t[37]}}),{c(){e=$("button"),Z(n.$$.fragment),s=y(),b(e,"class",r=a(t[35].split(" ").join("-")+" answer")+" svelte-14whl80"),b(e,"id",o=t[37])},m(t,r){p(t,e,r),tt(n,e,null),h(e,s),i=!0,c||(u=x(e,"click",d),c=!0)},p(s,o){t=s;const l={};2&o[0]&&(l.answerText=t[35]),n.$set(l),(!i||2&o[0]&&r!==(r=a(t[35].split(" ").join("-")+" answer")+" svelte-14whl80"))&&b(e,"class",r)},i(t){i||(U(n.$$.fragment,t),j(()=>{l||(l=V(e,wt,{x:-200,duration:500},!0)),l.run(1)}),i=!0)},o(t){F(n.$$.fragment,t),l||(l=V(e,wt,{x:-200,duration:500},!1)),l.run(0),i=!1},d(t){t&&g(e),et(n),t&&l&&l.end(),c=!1,u()}}}function St(t){let e,n,s,r;const o=[Dt,Et],l=[];return e=function(t,e){return t[37]%2==0?0:1}(t),n=l[e]=o[e](t),{c(){n.c(),s=v("")},m(t,n){l[e].m(t,n),p(t,s,n),r=!0},p(t,e){n.p(t,e)},i(t){r||(U(n),r=!0)},o(t){F(n),r=!1},d(t){l[e].d(t),t&&g(s)}}}function It(t){let e,n,s,r,o,l,a,i,c,u,d,f,m,v;a=new pt({props:{running:Rt}});let x=t[4],C=[];for(let e=0;e<x.length;e+=1)C[e]=bt(vt(t,x,e));const _=[Tt,qt,At,_t,Ct],A=[];function q(t,e){return t[6]?t[8]?1:t[7]?2:0===timeLeft?3:4:0}return f=q(t),m=A[f]=_[f](t),{c(){e=$("main"),n=$("div"),s=$("div"),r=$("img"),l=y(),Z(a.$$.fragment),i=y(),c=$("div");for(let t=0;t<C.length;t+=1)C[t].c();u=y(),d=$("div"),m.c(),b(r,"class","title svelte-14whl80"),r.src!==(o="images/title-2.png")&&b(r,"src","images/title-2.png"),b(r,"alt","title"),b(s,"class","top-left"),b(c,"class","board svelte-14whl80"),b(n,"class","top svelte-14whl80"),b(d,"class","bottom svelte-14whl80"),b(e,"class","svelte-14whl80")},m(t,o){p(t,e,o),h(e,n),h(n,s),h(s,r),h(s,l),tt(a,s,null),h(n,i),h(n,c);for(let t=0;t<C.length;t+=1)C[t].m(c,null);h(e,u),h(e,d),A[f].m(d,null),v=!0},p(t,e){if(48&e[0]){let n;for(x=t[4],n=0;n<x.length;n+=1){const s=vt(t,x,n);C[n]?C[n].p(s,e):(C[n]=bt(s),C[n].c(),C[n].m(c,null))}for(;n<C.length;n+=1)C[n].d(1);C.length=x.length}let n=f;f=q(t),f===n?A[f].p(t,e):(z(),F(A[n],1,1,()=>{A[n]=null}),G(),m=A[f],m||(m=A[f]=_[f](t),m.c()),U(m,1),m.m(d,null))},i(t){v||(U(a.$$.fragment,t),U(m),v=!0)},o(t){F(a.$$.fragment,t),F(m),v=!1},d(t){t&&g(e),et(a),w(C,t),A[f].d()}}}let Rt=!0;function Ot(t,e,n){let s=-1,r=!1,o=!1,l=!1,{monsters:a=["slimes","goblins","kobolds","bandits","ogres","sandworms","Githyanki","illithids","a beholder","a dragon"]}=e,{ranks:i=[{name:"Porcelain",class:"tag small"},{name:"Obsidian",class:"tag small"},{name:"Steel",class:"tag small"},{name:"Sapphire",class:"tag small"},{name:"Emerald",class:"tag small"},{name:"Ruby",class:"tag small"},{name:"Bronze",class:"tag small"},{name:"Silver",class:"tag small"},{name:"Gold",class:"tag small"},{name:"Platinum",class:"tag large"}]}=e,c=0,{question:u=""}=e,{correctAnswer:d=""}=e,{answers:f=[]}=e;function m(){const t=gt[c][Math.floor(Math.random()*gt[c].length)];n(0,u=t.question),n(13,d=t.correctAnswer),n(1,f=t.answers)}function h(t,e){t.stopPropagation(),"start"===e?(timeLeft.update(t=>t+30),n(5,s=0),n(6,r=!0),m()):"replay"===e&&(n(8,l=!1),n(7,o=!1),n(6,r=!1),n(5,s=-1),c=0)}let{choiceText:p=""}=e,{choiceIdx:g=0}=e,{final:w=!1}=e;function $(t,e,s){t.preventDefault(),n(14,p=e),n(15,g=s),n(2,w=!0)}function v(t,e){t.preventDefault(),n(2,w=!1),e&&function(t,e){if(t===d)document.getElementById(e).classList.add("green"),n(0,u="Correct!"),setTimeout(()=>{document.getElementById(e).classList.remove("green"),c+=1,n(5,s+=1),c<=9?m():n(7,o=!0)},2e3);else{n(0,u="Wrong!"),document.getElementById(e).classList.add("red");let t=document.getElementsByClassName("answer");for(let e=0;e<t.length;e++)t[e].classList.contains(d.split(" ").join("-"))&&t[e].classList.add("green");setTimeout(()=>{n(8,l=!0)},2e3)}}(p,g)}return t.$$set=t=>{"monsters"in t&&n(3,a=t.monsters),"ranks"in t&&n(4,i=t.ranks),"question"in t&&n(0,u=t.question),"correctAnswer"in t&&n(13,d=t.correctAnswer),"answers"in t&&n(1,f=t.answers),"choiceText"in t&&n(14,p=t.choiceText),"choiceIdx"in t&&n(15,g=t.choiceIdx),"final"in t&&n(2,w=t.final)},t.$$.update=()=>{t.$$.dirty[0],t.$$.dirty[0]},[u,f,w,a,i,s,r,o,l,function(t,{delay:e=600,duration:n=1e3}){const s=+getComputedStyle(t).opacity;return{easing:lt,delay:e,duration:n,css:t=>"opacity: "+t*s}},h,$,v,d,p,g,t=>h(t,"start"),t=>h(t,"replay"),t=>h(t,"replay"),t=>v(t,!0),t=>v(t,!1),(t,e,n)=>$(n,t,e),(t,e,n)=>$(n,t,e)]}return new class extends rt{constructor(t){super(),st(this,t,Ot,It,l,{monsters:3,ranks:4,question:0,correctAnswer:13,answers:1,choiceText:14,choiceIdx:15,final:2},[-1,-1])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
