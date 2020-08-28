var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t){return null==t?"":t}const l="undefined"!=typeof window;let c=l?()=>window.performance.now():()=>Date.now(),u=l?t=>requestAnimationFrame(t):t;const m=new Set;function f(t){m.forEach(e=>{e.c(t)||(m.delete(e),e.f())}),0!==m.size&&u(f)}function d(t){let e;return 0===m.size&&u(f),{promise:new Promise(n=>{m.add(e={c:t,f:n})}),abort(){m.delete(e)}}}function p(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function v(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function $(){return y(" ")}function b(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}const _=new Set;let k,A=0;function q(t,e,n,s,r,o,a,i=0){const l=16.666/s;let c="{\n";for(let t=0;t<=1;t+=l){const s=e+(n-e)*o(t);c+=100*t+`%{${a(s,1-s)}}\n`}const u=c+`100% {${a(n,1-n)}}\n}`,m=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${i}`,f=t.ownerDocument;_.add(f);const d=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(w("style")).sheet),p=f.__svelte_rules||(f.__svelte_rules={});p[m]||(p[m]=!0,d.insertRule(`@keyframes ${m} ${u}`,d.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?h+", ":""}${m} ${s}ms linear ${r}ms 1 both`,A+=1,m}function T(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-s.length;r&&(t.style.animation=s.join(", "),A-=r,A||u(()=>{A||(_.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),_.clear())}))}function B(t){k=t}const E=[],D=[],L=[],S=[],I=Promise.resolve();let R=!1;function j(t){L.push(t)}let O=!1;const N=new Set;function P(){if(!O){O=!0;do{for(let t=0;t<E.length;t+=1){const e=E[t];B(e),W(e.$$)}for(E.length=0;D.length;)D.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];N.has(e)||(N.add(e),e())}L.length=0}while(E.length);for(;S.length;)S.pop()();R=!1,O=!1,N.clear()}}function W(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}let H;function M(){return H||(H=Promise.resolve(),H.then(()=>{H=null})),H}function z(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const K=new Set;let X;function Y(){X={r:0,c:[],p:X}}function G(){X.r||r(X.c),X=X.p}function U(t,e){t&&t.i&&(K.delete(t),t.i(e))}function F(t,e,n,s){if(t&&t.o){if(K.has(t))return;K.add(t),X.c.push(()=>{K.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const J={duration:0};function Q(n,s,r){let a,i,l=s(n,r),u=!1,m=0;function f(){a&&T(n,a)}function p(){const{delay:s=0,duration:r=300,easing:o=e,tick:p=t,css:h}=l||J;h&&(a=q(n,0,1,r,s,o,h,m++)),p(0,1);const g=c()+s,v=g+r;i&&i.abort(),u=!0,j(()=>z(n,!0,"start")),i=d(t=>{if(u){if(t>=v)return p(1,0),z(n,!0,"end"),f(),u=!1;if(t>=g){const e=o((t-g)/r);p(e,1-e)}}return u})}let h=!1;return{start(){h||(T(n),o(l)?(l=l(),M().then(p)):p())},invalidate(){h=!1},end(){u&&(f(),u=!1)}}}function V(n,s,a,i){let l=s(n,a),u=i?0:1,m=null,f=null,p=null;function h(){p&&T(n,p)}function g(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function v(s){const{delay:o=0,duration:a=300,easing:i=e,tick:v=t,css:w}=l||J,y={start:c()+o,b:s};s||(y.group=X,X.r+=1),m?f=y:(w&&(h(),p=q(n,u,s,a,o,i,w)),s&&v(0,1),m=g(y,a),j(()=>z(n,s,"start")),d(t=>{if(f&&t>f.start&&(m=g(f,a),f=null,z(n,m.b,"start"),w&&(h(),p=q(n,u,m.b,m.duration,0,i,l.css))),m)if(t>=m.end)v(u=m.b,1-u),z(n,m.b,"end"),f||(m.b?h():--m.group.r||r(m.group.c)),m=null;else if(t>=m.start){const e=t-m.start;u=m.a+m.d*i(e/m.duration),v(u,1-u)}return!(!m&&!f)}))}return{run(t){o(l)?M().then(()=>{l=l(),v(t)}):v(t)},end(){h(),m=f=null}}}const Z="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function tt(t){t&&t.c()}function et(t,e,s){const{fragment:a,on_mount:i,on_destroy:l,after_update:c}=t.$$;a&&a.m(e,s),j(()=>{const e=i.map(n).filter(o);l?l.push(...e):r(e),t.$$.on_mount=[]}),c.forEach(j)}function nt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){-1===t.$$.dirty[0]&&(E.push(t),R||(R=!0,I.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function rt(e,n,o,a,i,l,c=[-1]){const u=k;B(e);const m=n.props||{},f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:c,skip_bound:!1};let d=!1;if(f.ctx=o?o(e,m,(t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),d&&st(e,t)),n}):[],f.update(),d=!0,r(f.before_update),f.fragment=!!a&&a(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(g)}else f.fragment&&f.fragment.c();n.intro&&U(e.$$.fragment),et(e,n.target,n.anchor),P()}B(u)}class ot{$destroy(){nt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function at(t){const e=t-1;return e*e*e+1}function it(t){return--t*t*t*t*t+1}function lt(e){let n,s;return{c(){n=w("div"),s=y(e[0]),x(n,"class","question svelte-1dg4i2e")},m(t,e){h(t,n,e),p(n,s)},p(t,[e]){1&e&&C(s,t[0])},i:t,o:t,d(t){t&&g(n)}}}function ct(t,e,n){let{questionText:s}=e;return t.$$set=t=>{"questionText"in t&&n(0,s=t.questionText)},[s]}class ut extends ot{constructor(t){super(),rt(this,t,ct,lt,a,{questionText:0})}}function mt(e){let n,s,r,o,a,i,l,c,u,m=e[2][e[1]]+"";return{c(){n=w("div"),s=w("span"),s.textContent="♦",r=$(),o=w("span"),a=y(m),i=y(":"),l=$(),c=w("div"),u=y(e[0]),x(s,"class","diam svelte-1f3aymc"),x(o,"class","answer-letter svelte-1f3aymc"),x(c,"class","answer-text svelte-1f3aymc"),x(n,"class","answer-container svelte-1f3aymc")},m(t,e){h(t,n,e),p(n,s),p(n,r),p(n,o),p(o,a),p(o,i),p(n,l),p(n,c),p(c,u)},p(t,[e]){6&e&&m!==(m=t[2][t[1]]+"")&&C(a,m),1&e&&C(u,t[0])},i:t,o:t,d(t){t&&g(n)}}}function ft(t,e,n){let{answerText:s}=e,{idx:r}=e,{answerKeys:o=["A","B","C","D"]}=e;return t.$$set=t=>{"answerText"in t&&n(0,s=t.answerText),"idx"in t&&n(1,r=t.idx),"answerKeys"in t&&n(2,o=t.answerKeys)},[s,r,o]}class dt extends ot{constructor(t){super(),rt(this,t,ft,mt,a,{answerText:0,idx:1,answerKeys:2})}}function pt(e){let n,s,r,o,a;return{c(){n=w("link"),s=$(),r=w("div"),o=w("span"),a=y(e[0]),x(n,"href","https://fonts.googleapis.com/css2?family=Balthazar&display=swap"),x(n,"rel","stylesheet"),x(o,"class","timer-num svelte-kl566y"),x(r,"class","timer-container svelte-kl566y")},m(t,e){p(document.head,n),h(t,s,e),h(t,r,e),p(r,o),p(o,a)},p(t,[e]){1&e&&C(a,t[0])},i:t,o:t,d(t){g(n),t&&g(s),t&&g(r)}}}function ht(t,e,n){let{timeLeft:s}=e;return t.$$set=t=>{"timeLeft"in t&&n(0,s=t.timeLeft)},[s]}class gt extends ot{constructor(t){super(),rt(this,t,ht,pt,a,{timeLeft:0})}}const vt={0:[{question:"What is the standard abbreviation for your Charisma score?",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]},{question:"What is the standard abbreviation for your Dexterity score?",correctAnswer:"DEX",answers:["CHA","DEX","WIS","CON"]}],1:[{question:"This is question 2",correctAnswer:"B",answers:["A","B","C","D"]},{question:"This is question 2.5",correctAnswer:"C",answers:["A","B","C","D"]}],2:[{question:"This is question 3",correctAnswer:"B",answers:["A","B","C","D"]}],3:[{question:"This is question 4",correctAnswer:"B",answers:["A","B","C","D"]}],4:[{question:"This is question 5",correctAnswer:"B",answers:["A","B","C","D"]}],5:[{question:"This is question 6",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]}],6:[{question:"This is question 7",correctAnswer:"B",answers:["A","B","C","D"]}],7:[{question:"This is question 8",correctAnswer:"B",answers:["A","B","C","D"]}],8:[{question:"This is question 9",correctAnswer:"B",answers:["A","B","C","D"]}],9:[{question:"This is question 10",correctAnswer:"B",answers:["A","B","C","D"]}]};function wt(t,{delay:e=0,duration:n=400,easing:s=at,x:r=0,y:o=0,opacity:a=0}){const i=getComputedStyle(t),l=+i.opacity,c="none"===i.transform?"":i.transform,u=l*(1-a);return{delay:e,duration:n,easing:s,css:(t,e)=>`\n\t\t\ttransform: ${c} translate(${(1-t)*r}px, ${(1-t)*o}px);\n\t\t\topacity: ${l-u*e}`}}const{document:yt}=Z;function $t(t,e,n){const s=t.slice();return s[31]=e[n],s[33]=n,s}function bt(t,e,n){const s=t.slice();return s[34]=e[n],s[36]=n,s}function xt(t){let e,n,s,r,o=t[34].name+"";return{c(){e=w("div"),n=w("div"),s=y(o),x(n,"class",r=i(t[34].class)+" svelte-mm59rr"),x(e,"class","tag-contain svelte-mm59rr")},m(t,r){h(t,e,r),p(e,n),p(n,s)},p(t,e){16&e[0]&&o!==(o=t[34].name+"")&&C(s,o),16&e[0]&&r!==(r=i(t[34].class)+" svelte-mm59rr")&&x(n,"class",r)},d(t){t&&g(e)}}}function Ct(t){let e,n,s,r,o=t[34].name+"";return{c(){e=w("div"),n=w("div"),s=y(o),x(n,"class",r=i(t[34].class+" curr-font")+" svelte-mm59rr"),x(e,"class","tag-contain curr svelte-mm59rr")},m(t,r){h(t,e,r),p(e,n),p(n,s)},p(t,e){16&e[0]&&o!==(o=t[34].name+"")&&C(s,o),16&e[0]&&r!==(r=i(t[34].class+" curr-font")+" svelte-mm59rr")&&x(n,"class",r)},d(t){t&&g(e)}}}function _t(t){let e,n;function s(t,e){return t[36]===t[5]?Ct:xt}let r=s(t),o=r(t);return{c(){e=w("div"),o.c(),n=$(),x(e,"class","tag-area svelte-mm59rr")},m(t,s){h(t,e,s),o.m(e,null),p(e,n)},p(t,a){r===(r=s(t))&&o?o.p(t,a):(o.d(1),o=r(t),o&&(o.c(),o.m(e,n)))},d(t){t&&g(e),o.d()}}}function kt(t){let e,n,s,r,o;const a=[Dt,Et],i=[];function l(t,e){return t[2]?0:1}e=l(t),n=i[e]=a[e](t);let c=t[1],u=[];for(let e=0;e<c.length;e+=1)u[e]=It($t(t,c,e));const m=t=>F(u[t],1,1,()=>{u[t]=null});return{c(){n.c(),s=$(),r=w("div");for(let t=0;t<u.length;t+=1)u[t].c();x(r,"class","answers svelte-mm59rr")},m(t,n){i[e].m(t,n),h(t,s,n),h(t,r,n);for(let t=0;t<u.length;t+=1)u[t].m(r,null);o=!0},p(t,o){let f=e;if(e=l(t),e===f?i[e].p(t,o):(Y(),F(i[f],1,1,()=>{i[f]=null}),G(),n=i[e],n||(n=i[e]=a[e](t),n.c()),U(n,1),n.m(s.parentNode,s)),4098&o[0]){let e;for(c=t[1],e=0;e<c.length;e+=1){const n=$t(t,c,e);u[e]?(u[e].p(n,o),U(u[e],1)):(u[e]=It(n),u[e].c(),U(u[e],1),u[e].m(r,null))}for(Y(),e=c.length;e<u.length;e+=1)m(e);G()}},i(t){if(!o){U(n);for(let t=0;t<c.length;t+=1)U(u[t]);o=!0}},o(t){F(n),u=u.filter(Boolean);for(let t=0;t<u.length;t+=1)F(u[t]);o=!1},d(t){i[e].d(t),t&&g(s),t&&g(r),v(u,t)}}}function At(e){let n,s,r,o,a,i,l;return{c(){n=w("div"),s=w("span"),s.textContent='Oops, you ran out of time! Click \n\t\t\t\t"Replay" to play again!',r=$(),o=w("button"),o.textContent="Replay",x(s,"class","loss-message"),x(o,"class","next svelte-mm59rr"),x(n,"class","message svelte-mm59rr")},m(t,a){h(t,n,a),p(n,s),p(n,r),p(n,o),i||(l=b(o,"click",e[20]),i=!0)},p:t,i(t){a||j(()=>{a=Q(n,e[10],{}),a.start()})},o:t,d(t){t&&g(n),i=!1,l()}}}function qt(e){let n,s,r,o,a,i,l;return{c(){n=w("div"),s=w("span"),s.textContent='You made it to Porcelain Rank! You stand as a beacon of hope\n\t\t\t\tfor adventuring teams across the land! Unfortunately, the fight never truly ends. Click \n\t\t\t\t"Replay" to play again!',r=$(),o=w("button"),o.textContent="Replay",x(s,"class","loss-message"),x(o,"class","next svelte-mm59rr"),x(n,"class","message svelte-mm59rr")},m(t,a){h(t,n,a),p(n,s),p(n,r),p(n,o),i||(l=b(o,"click",e[19]),i=!0)},p:t,i(t){a||j(()=>{a=Q(n,e[10],{}),a.start()})},o:t,d(t){t&&g(n),i=!1,l()}}}function Tt(e){let n,s,r,o,a,i,l,c,u,m,f,d,v=e[4][e[5]].name+"",_=e[3][e[5]]+"";return{c(){n=w("div"),s=w("span"),r=y("Uh oh! You made it to "),o=y(v),a=y(" Rank but then\n\t\t\t\tyou were defeated by "),i=y(_),l=y('. Better luck next time! Click "Replay"\n\t\t\t\tto play again!'),c=$(),u=w("button"),u.textContent="Replay",x(s,"class","loss-message"),x(u,"class","next svelte-mm59rr"),x(n,"class","message svelte-mm59rr")},m(t,m){h(t,n,m),p(n,s),p(s,r),p(s,o),p(s,a),p(s,i),p(s,l),p(n,c),p(n,u),f||(d=b(u,"click",e[18]),f=!0)},p(t,e){48&e[0]&&v!==(v=t[4][t[5]].name+"")&&C(o,v),40&e[0]&&_!==(_=t[3][t[5]]+"")&&C(i,_)},i(t){m||j(()=>{m=Q(n,e[10],{}),m.start()})},o:t,d(t){t&&g(n),f=!1,d()}}}function Bt(e){let n,s,r,o,a,i,l;return{c(){n=w("div"),s=w("div"),s.textContent='Welcome to the game! Press "Start" to continue!',r=$(),o=w("button"),o.textContent="Start",x(s,"class","opener-message"),x(o,"class","next svelte-mm59rr"),x(n,"class","message svelte-mm59rr")},m(t,a){h(t,n,a),p(n,s),p(n,r),p(n,o),i||(l=b(o,"click",e[17]),i=!0)},p:t,i(t){a||j(()=>{a=Q(n,e[10],{}),a.start()})},o:t,d(t){t&&g(n),i=!1,l()}}}function Et(t){let e,n;return e=new ut({props:{questionText:t[0]}}),{c(){tt(e.$$.fragment)},m(t,s){et(e,t,s),n=!0},p(t,n){const s={};1&n[0]&&(s.questionText=t[0]),e.$set(s)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function Dt(e){let n,s,o,a,i,l,c,u,m;return{c(){n=w("div"),s=w("span"),s.textContent="Is that your final answer?",o=$(),a=w("div"),i=w("button"),i.textContent="Yes",l=$(),c=w("button"),c.textContent="No",x(s,"class","final-answer"),x(i,"class","next svelte-mm59rr"),x(c,"class","next red svelte-mm59rr"),x(a,"class","final-buttons"),x(n,"class","message svelte-mm59rr")},m(t,r){h(t,n,r),p(n,s),p(n,o),p(n,a),p(a,i),p(a,l),p(a,c),u||(m=[b(i,"click",e[21]),b(c,"click",e[22])],u=!0)},p:t,i:t,o:t,d(t){t&&g(n),u=!1,r(m)}}}function Lt(t){let e,n,s,r,o,a,l,c,u;function m(...e){return t[24](t[31],t[33],...e)}return n=new dt({props:{class:"ans",answerText:t[31],idx:t[33]}}),{c(){e=w("button"),tt(n.$$.fragment),s=$(),x(e,"class",r=i(t[31].split(" ").join("-")+" answer")+" svelte-mm59rr"),x(e,"id",o=t[33])},m(t,r){h(t,e,r),et(n,e,null),p(e,s),l=!0,c||(u=b(e,"click",m),c=!0)},p(s,o){t=s;const a={};2&o[0]&&(a.answerText=t[31]),n.$set(a),(!l||2&o[0]&&r!==(r=i(t[31].split(" ").join("-")+" answer")+" svelte-mm59rr"))&&x(e,"class",r)},i(t){l||(U(n.$$.fragment,t),j(()=>{a||(a=V(e,wt,{x:200,duration:500},!0)),a.run(1)}),l=!0)},o(t){F(n.$$.fragment,t),a||(a=V(e,wt,{x:200,duration:500},!1)),a.run(0),l=!1},d(t){t&&g(e),nt(n),t&&a&&a.end(),c=!1,u()}}}function St(t){let e,n,s,r,o,a,l,c,u;function m(...e){return t[23](t[31],t[33],...e)}return n=new dt({props:{class:"ans",answerText:t[31],idx:t[33]}}),{c(){e=w("button"),tt(n.$$.fragment),s=$(),x(e,"class",r=i(t[31].split(" ").join("-")+" answer")+" svelte-mm59rr"),x(e,"id",o=t[33])},m(t,r){h(t,e,r),et(n,e,null),p(e,s),l=!0,c||(u=b(e,"click",m),c=!0)},p(s,o){t=s;const a={};2&o[0]&&(a.answerText=t[31]),n.$set(a),(!l||2&o[0]&&r!==(r=i(t[31].split(" ").join("-")+" answer")+" svelte-mm59rr"))&&x(e,"class",r)},i(t){l||(U(n.$$.fragment,t),j(()=>{a||(a=V(e,wt,{x:-200,duration:500},!0)),a.run(1)}),l=!0)},o(t){F(n.$$.fragment,t),a||(a=V(e,wt,{x:-200,duration:500},!1)),a.run(0),l=!1},d(t){t&&g(e),nt(n),t&&a&&a.end(),c=!1,u()}}}function It(t){let e,n,s,r;const o=[St,Lt],a=[];return e=function(t,e){return t[33]%2==0?0:1}(t),n=a[e]=o[e](t),{c(){n.c(),s=y("")},m(t,n){a[e].m(t,n),h(t,s,n),r=!0},p(t,e){n.p(t,e)},i(t){r||(U(n),r=!0)},o(t){F(n),r=!1},d(t){a[e].d(t),t&&g(s)}}}function Rt(t){let e,n,s,r,o,a,i,l,c,u,m,f,d,y,b,C,_,k,A;u=new gt({props:{timeLeft:t[9]}});let q=t[4],T=[];for(let e=0;e<q.length;e+=1)T[e]=_t(bt(t,q,e));const B=[Bt,Tt,qt,At,kt],E=[];function D(t,e){return t[6]?t[8]?1:t[7]?2:0===t[9]?3:4:0}return b=D(t),C=E[b]=B[b](t),{c(){e=w("script"),s=$(),r=w("main"),o=w("div"),a=w("div"),i=w("img"),c=$(),tt(u.$$.fragment),m=$(),f=w("div");for(let t=0;t<T.length;t+=1)T[t].c();d=$(),y=w("div"),C.c(),_=$(),k=w("div"),k.innerHTML='<div class="about-container svelte-mm59rr"><img class="face svelte-mm59rr" src="images/face.jpg" alt="face"> \n\t\t\t<div class="about-popup svelte-mm59rr"><a href="https://github.com/chrisoney/"><span class="about-icon fab fa-github svelte-mm59rr"></span></a> \n\t\t\t\t<a href="https://www.linkedin.com/in/christopher-oney-317b84132/"><span class="about-icon fab fa-linkedin svelte-mm59rr"></span></a> \n\t\t\t\t<a href="https://angel.co/u/christopher-oney"><span class="about-icon fab fa-angellist svelte-mm59rr"></span></a></div></div>',e.src!==(n="https://kit.fontawesome.com/a229c5b13d.js")&&x(e,"src","https://kit.fontawesome.com/a229c5b13d.js"),x(e,"crossorigin","anonymous"),x(i,"class","title svelte-mm59rr"),i.src!==(l="images/title-2.png")&&x(i,"src","images/title-2.png"),x(i,"alt","title"),x(a,"class","top-left svelte-mm59rr"),x(f,"class","board svelte-mm59rr"),x(o,"class","top svelte-mm59rr"),x(y,"class","bottom svelte-mm59rr"),x(k,"class","about svelte-mm59rr"),x(r,"class","svelte-mm59rr")},m(t,n){p(yt.head,e),h(t,s,n),h(t,r,n),p(r,o),p(o,a),p(a,i),p(a,c),et(u,a,null),p(o,m),p(o,f);for(let t=0;t<T.length;t+=1)T[t].m(f,null);p(r,d),p(r,y),E[b].m(y,null),p(r,_),p(r,k),A=!0},p(t,e){const n={};if(512&e[0]&&(n.timeLeft=t[9]),u.$set(n),48&e[0]){let n;for(q=t[4],n=0;n<q.length;n+=1){const s=bt(t,q,n);T[n]?T[n].p(s,e):(T[n]=_t(s),T[n].c(),T[n].m(f,null))}for(;n<T.length;n+=1)T[n].d(1);T.length=q.length}let s=b;b=D(t),b===s?E[b].p(t,e):(Y(),F(E[s],1,1,()=>{E[s]=null}),G(),C=E[b],C||(C=E[b]=B[b](t),C.c()),U(C,1),C.m(y,null))},i(t){A||(U(u.$$.fragment,t),U(C),A=!0)},o(t){F(u.$$.fragment,t),F(C),A=!1},d(t){g(e),t&&g(s),t&&g(r),nt(u),v(T,t),E[b].d()}}}function jt(t,e,n){let s=-1,r=!1,o=!1,a=!1,{monsters:i=["slimes","goblins","kobolds","bandits","ogres","sandworms","Githyanki","illithids","a beholder","a dragon"]}=e,{ranks:l=[{name:"Porcelain",class:"tag small"},{name:"Obsidian",class:"tag small"},{name:"Steel",class:"tag small"},{name:"Sapphire",class:"tag small"},{name:"Emerald",class:"tag small"},{name:"Ruby",class:"tag small"},{name:"Bronze",class:"tag small"},{name:"Silver",class:"tag small"},{name:"Gold",class:"tag small"},{name:"Platinum",class:"tag large"}]}=e,c=0,{question:u=""}=e,{correctAnswer:m=""}=e,{answers:f=[]}=e;function d(){const t=vt[c][Math.floor(Math.random()*vt[c].length)];n(0,u=t.question),n(14,m=t.correctAnswer),n(1,f=t.answers)}function p(t,e){t.stopPropagation(),"start"===e?(n(5,s=0),n(6,r=!0),n(9,b=30),d(),x()):"replay"===e&&(n(8,a=!1),n(7,o=!1),n(6,r=!1),n(5,s=-1),c=0)}let{choiceText:h=""}=e,{choiceIdx:g=0}=e,{final:v=!1}=e;function w(t,e,s){t.preventDefault(),n(15,h=e),n(16,g=s),n(2,v=!0),C()}function y(t,e){t.preventDefault(),n(2,v=!1),e?function(t,e){if(t===m)document.getElementById(e).classList.add("green"),n(0,u="Correct!"),setTimeout(()=>{document.getElementById(e).classList.remove("green"),c+=1,n(5,s+=1),c<=9?(n(9,b=30),x(),d()):n(7,o=!0)},2e3);else{n(0,u="Wrong!"),document.getElementById(e).classList.add("red");let t=document.getElementsByClassName("answer");for(let e=0;e<t.length;e++)t[e].classList.contains(m.split(" ").join("-"))&&t[e].classList.add("green");setTimeout(()=>{n(8,a=!0)},2e3)}}(h,g):x()}let $,b=30;function x(){$=setInterval(()=>{n(9,b-=1)},1e3)}function C(){clearInterval($)}0===b&&C();return t.$$set=t=>{"monsters"in t&&n(3,i=t.monsters),"ranks"in t&&n(4,l=t.ranks),"question"in t&&n(0,u=t.question),"correctAnswer"in t&&n(14,m=t.correctAnswer),"answers"in t&&n(1,f=t.answers),"choiceText"in t&&n(15,h=t.choiceText),"choiceIdx"in t&&n(16,g=t.choiceIdx),"final"in t&&n(2,v=t.final)},[u,f,v,i,l,s,r,o,a,b,function(t,{delay:e=600,duration:n=1e3}){const s=+getComputedStyle(t).opacity;return{easing:it,delay:e,duration:n,css:t=>"opacity: "+t*s}},p,w,y,m,h,g,t=>p(t,"start"),t=>p(t,"replay"),t=>p(t,"replay"),t=>p(t,"time"),t=>y(t,!0),t=>y(t,!1),(t,e,n)=>w(n,t,e),(t,e,n)=>w(n,t,e)]}return new class extends ot{constructor(t){super(),rt(this,t,jt,Rt,a,{monsters:3,ranks:4,question:0,correctAnswer:14,answers:1,choiceText:15,choiceIdx:16,final:2},[-1,-1])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
