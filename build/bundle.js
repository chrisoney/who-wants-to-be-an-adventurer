var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function s(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t){return null==t?"":t}const l="undefined"!=typeof window;let c=l?()=>window.performance.now():()=>Date.now(),u=l?t=>requestAnimationFrame(t):t;const f=new Set;function d(t){f.forEach(e=>{e.c(t)||(f.delete(e),e.f())}),0!==f.size&&u(d)}function g(t){let e;return 0===f.size&&u(d),{promise:new Promise(n=>{f.add(e={c:t,f:n})}),abort(){f.delete(e)}}}function m(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function q(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function y(){return w(" ")}function $(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}const C=new Set;let _,k=0;function A(t,e,n,s,o,r,a,i=0){const l=16.666/s;let c="{\n";for(let t=0;t<=1;t+=l){const s=e+(n-e)*r(t);c+=100*t+`%{${a(s,1-s)}}\n`}const u=c+`100% {${a(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${i}`,d=t.ownerDocument;C.add(d);const g=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(v("style")).sheet),m=d.__svelte_rules||(d.__svelte_rules={});m[f]||(m[f]=!0,g.insertRule(`@keyframes ${f} ${u}`,g.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?p+", ":""}${f} ${s}ms linear ${o}ms 1 both`,k+=1,f}function T(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-s.length;o&&(t.style.animation=s.join(", "),k-=o,k||u(()=>{k||(C.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),C.clear())}))}function B(t){_=t}const E=[],D=[],L=[],S=[],I=Promise.resolve();let R=!1;function j(t){L.push(t)}let O=!1;const N=new Set;function P(){if(!O){O=!0;do{for(let t=0;t<E.length;t+=1){const e=E[t];B(e),W(e.$$)}for(E.length=0;D.length;)D.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];N.has(e)||(N.add(e),e())}L.length=0}while(E.length);for(;S.length;)S.pop()();R=!1,O=!1,N.clear()}}function W(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}let H;function M(){return H||(H=Promise.resolve(),H.then(()=>{H=null})),H}function z(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const K=new Set;let X;function Y(){X={r:0,c:[],p:X}}function G(){X.r||o(X.c),X=X.p}function U(t,e){t&&t.i&&(K.delete(t),t.i(e))}function F(t,e,n,s){if(t&&t.o){if(K.has(t))return;K.add(t),X.c.push(()=>{K.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const J={duration:0};function Q(n,s,o){let a,i,l=s(n,o),u=!1,f=0;function d(){a&&T(n,a)}function m(){const{delay:s=0,duration:o=300,easing:r=e,tick:m=t,css:p}=l||J;p&&(a=A(n,0,1,o,s,r,p,f++)),m(0,1);const h=c()+s,q=h+o;i&&i.abort(),u=!0,j(()=>z(n,!0,"start")),i=g(t=>{if(u){if(t>=q)return m(1,0),z(n,!0,"end"),d(),u=!1;if(t>=h){const e=r((t-h)/o);m(e,1-e)}}return u})}let p=!1;return{start(){p||(T(n),r(l)?(l=l(),M().then(m)):m())},invalidate(){p=!1},end(){u&&(d(),u=!1)}}}function V(n,s,a,i){let l=s(n,a),u=i?0:1,f=null,d=null,m=null;function p(){m&&T(n,m)}function h(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function q(s){const{delay:r=0,duration:a=300,easing:i=e,tick:q=t,css:v}=l||J,w={start:c()+r,b:s};s||(w.group=X,X.r+=1),f?d=w:(v&&(p(),m=A(n,u,s,a,r,i,v)),s&&q(0,1),f=h(w,a),j(()=>z(n,s,"start")),g(t=>{if(d&&t>d.start&&(f=h(d,a),d=null,z(n,f.b,"start"),v&&(p(),m=A(n,u,f.b,f.duration,0,i,l.css))),f)if(t>=f.end)q(u=f.b,1-u),z(n,f.b,"end"),d||(f.b?p():--f.group.r||o(f.group.c)),f=null;else if(t>=f.start){const e=t-f.start;u=f.a+f.d*i(e/f.duration),q(u,1-u)}return!(!f&&!d)}))}return{run(t){r(l)?M().then(()=>{l=l(),q(t)}):q(t)},end(){p(),f=d=null}}}const Z="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function tt(t){t&&t.c()}function et(t,e,s){const{fragment:a,on_mount:i,on_destroy:l,after_update:c}=t.$$;a&&a.m(e,s),j(()=>{const e=i.map(n).filter(r);l?l.push(...e):o(e),t.$$.on_mount=[]}),c.forEach(j)}function nt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){-1===t.$$.dirty[0]&&(E.push(t),R||(R=!0,I.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ot(e,n,r,a,i,l,c=[-1]){const u=_;B(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:c,skip_bound:!1};let g=!1;if(d.ctx=r?r(e,f,(t,n,...s)=>{const o=s.length?s[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),g&&st(e,t)),n}):[],d.update(),g=!0,o(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(h)}else d.fragment&&d.fragment.c();n.intro&&U(e.$$.fragment),et(e,n.target,n.anchor),P()}B(u)}class rt{$destroy(){nt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function at(t){const e=t-1;return e*e*e+1}function it(t){return--t*t*t*t*t+1}function lt(e){let n,s;return{c(){n=v("div"),s=w(e[0]),x(n,"class","question svelte-1dg4i2e")},m(t,e){p(t,n,e),m(n,s)},p(t,[e]){1&e&&b(s,t[0])},i:t,o:t,d(t){t&&h(n)}}}function ct(t,e,n){let{questionText:s}=e;return t.$$set=t=>{"questionText"in t&&n(0,s=t.questionText)},[s]}class ut extends rt{constructor(t){super(),ot(this,t,ct,lt,a,{questionText:0})}}function ft(e){let n,s,o,r,a,i,l,c,u,f=e[2][e[1]]+"";return{c(){n=v("div"),s=v("span"),s.textContent="♦",o=y(),r=v("span"),a=w(f),i=w(":"),l=y(),c=v("div"),u=w(e[0]),x(s,"class","diam svelte-1f3aymc"),x(r,"class","answer-letter svelte-1f3aymc"),x(c,"class","answer-text svelte-1f3aymc"),x(n,"class","answer-container svelte-1f3aymc")},m(t,e){p(t,n,e),m(n,s),m(n,o),m(n,r),m(r,a),m(r,i),m(n,l),m(n,c),m(c,u)},p(t,[e]){6&e&&f!==(f=t[2][t[1]]+"")&&b(a,f),1&e&&b(u,t[0])},i:t,o:t,d(t){t&&h(n)}}}function dt(t,e,n){let{answerText:s}=e,{idx:o}=e,{answerKeys:r=["A","B","C","D"]}=e;return t.$$set=t=>{"answerText"in t&&n(0,s=t.answerText),"idx"in t&&n(1,o=t.idx),"answerKeys"in t&&n(2,r=t.answerKeys)},[s,o,r]}class gt extends rt{constructor(t){super(),ot(this,t,dt,ft,a,{answerText:0,idx:1,answerKeys:2})}}function mt(e){let n,s,o,r,a;return{c(){n=v("link"),s=y(),o=v("div"),r=v("span"),a=w(e[0]),x(n,"href","https://fonts.googleapis.com/css2?family=Balthazar&display=swap"),x(n,"rel","stylesheet"),x(r,"class","timer-num svelte-kl566y"),x(o,"class","timer-container svelte-kl566y")},m(t,e){m(document.head,n),p(t,s,e),p(t,o,e),m(o,r),m(r,a)},p(t,[e]){1&e&&b(a,t[0])},i:t,o:t,d(t){h(n),t&&h(s),t&&h(o)}}}function pt(t,e,n){let{timeLeft:s}=e;return t.$$set=t=>{"timeLeft"in t&&n(0,s=t.timeLeft)},[s]}class ht extends rt{constructor(t){super(),ot(this,t,pt,mt,a,{timeLeft:0})}}const qt={0:[{question:"What is the standard abbreviation for your Charisma score?",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]},{question:"What is the standard abbreviation for your Dexterity score?",correctAnswer:"DEX",answers:["CHA","DEX","WIS","CON"]}],1:[{question:"This is question 2",correctAnswer:"B",answers:["A","B","C","D"]},{question:"This is question 2.5",correctAnswer:"C",answers:["A","B","C","D"]}],2:[{question:"This is question 3",correctAnswer:"B",answers:["A","B","C","D"]}],3:[{question:"This is question 4",correctAnswer:"B",answers:["A","B","C","D"]}],4:[{question:"This is question 5",correctAnswer:"B",answers:["A","B","C","D"]}],5:[{question:"This is question 6",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]}],6:[{question:"This is question 7",correctAnswer:"B",answers:["A","B","C","D"]}],7:[{question:"This is question 8",correctAnswer:"B",answers:["A","B","C","D"]}],8:[{question:"This is question 9",correctAnswer:"B",answers:["A","B","C","D"]}],9:[{question:"This is question 10",correctAnswer:"B",answers:["A","B","C","D"]}]};function vt(t,{delay:e=0,duration:n=400,easing:s=at,x:o=0,y:r=0,opacity:a=0}){const i=getComputedStyle(t),l=+i.opacity,c="none"===i.transform?"":i.transform,u=l*(1-a);return{delay:e,duration:n,easing:s,css:(t,e)=>`\n\t\t\ttransform: ${c} translate(${(1-t)*o}px, ${(1-t)*r}px);\n\t\t\topacity: ${l-u*e}`}}const{document:wt}=Z;function yt(t,e,n){const s=t.slice();return s[31]=e[n],s[33]=n,s}function $t(t,e,n){const s=t.slice();return s[34]=e[n],s[36]=n,s}function xt(t){let e,n,s,o,r=t[34].name+"";return{c(){e=v("div"),n=v("div"),s=w(r),x(n,"class",o=i(t[34].class)+" svelte-ggnqqo"),x(e,"class","tag-contain svelte-ggnqqo")},m(t,o){p(t,e,o),m(e,n),m(n,s)},p(t,e){16&e[0]&&r!==(r=t[34].name+"")&&b(s,r),16&e[0]&&o!==(o=i(t[34].class)+" svelte-ggnqqo")&&x(n,"class",o)},d(t){t&&h(e)}}}function bt(t){let e,n,s,o,r=t[34].name+"";return{c(){e=v("div"),n=v("div"),s=w(r),x(n,"class",o=i(t[34].class+" curr-font")+" svelte-ggnqqo"),x(e,"class","tag-contain curr svelte-ggnqqo")},m(t,o){p(t,e,o),m(e,n),m(n,s)},p(t,e){16&e[0]&&r!==(r=t[34].name+"")&&b(s,r),16&e[0]&&o!==(o=i(t[34].class+" curr-font")+" svelte-ggnqqo")&&x(n,"class",o)},d(t){t&&h(e)}}}function Ct(t){let e,n;function s(t,e){return t[36]===t[5]?bt:xt}let o=s(t),r=o(t);return{c(){e=v("div"),r.c(),n=y(),x(e,"class","tag-area svelte-ggnqqo")},m(t,s){p(t,e,s),r.m(e,null),m(e,n)},p(t,a){o===(o=s(t))&&r?r.p(t,a):(r.d(1),r=o(t),r&&(r.c(),r.m(e,n)))},d(t){t&&h(e),r.d()}}}function _t(t){let e,n,s,o,r;const a=[Dt,Et],i=[];function l(t,e){return t[2]?0:1}e=l(t),n=i[e]=a[e](t);let c=t[1],u=[];for(let e=0;e<c.length;e+=1)u[e]=It(yt(t,c,e));const f=t=>F(u[t],1,1,()=>{u[t]=null});return{c(){n.c(),s=y(),o=v("div");for(let t=0;t<u.length;t+=1)u[t].c();x(o,"class","answers svelte-ggnqqo")},m(t,n){i[e].m(t,n),p(t,s,n),p(t,o,n);for(let t=0;t<u.length;t+=1)u[t].m(o,null);r=!0},p(t,r){let d=e;if(e=l(t),e===d?i[e].p(t,r):(Y(),F(i[d],1,1,()=>{i[d]=null}),G(),n=i[e],n||(n=i[e]=a[e](t),n.c()),U(n,1),n.m(s.parentNode,s)),4098&r[0]){let e;for(c=t[1],e=0;e<c.length;e+=1){const n=yt(t,c,e);u[e]?(u[e].p(n,r),U(u[e],1)):(u[e]=It(n),u[e].c(),U(u[e],1),u[e].m(o,null))}for(Y(),e=c.length;e<u.length;e+=1)f(e);G()}},i(t){if(!r){U(n);for(let t=0;t<c.length;t+=1)U(u[t]);r=!0}},o(t){F(n),u=u.filter(Boolean);for(let t=0;t<u.length;t+=1)F(u[t]);r=!1},d(t){i[e].d(t),t&&h(s),t&&h(o),q(u,t)}}}function kt(e){let n,s,o,r,a,i,l,c,u;return{c(){n=v("div"),n.textContent=""+e[14](),s=y(),o=v("div"),r=v("span"),r.textContent='Oops, you ran out of time! Click \n\t\t\t\t"Replay" to play again!',a=y(),i=v("button"),i.textContent="Replay",x(n,"class","ignore svelte-ggnqqo"),x(r,"class","loss-message"),x(i,"class","next svelte-ggnqqo"),x(o,"class","message svelte-ggnqqo")},m(t,l){p(t,n,l),p(t,s,l),p(t,o,l),m(o,r),m(o,a),m(o,i),c||(u=$(i,"click",e[21]),c=!0)},p:t,i(t){l||j(()=>{l=Q(o,e[10],{}),l.start()})},o:t,d(t){t&&h(n),t&&h(s),t&&h(o),c=!1,u()}}}function At(e){let n,s,o,r,a,i,l;return{c(){n=v("div"),s=v("span"),s.textContent='You made it to Porcelain Rank! You stand as a beacon of hope\n\t\t\t\tfor adventuring teams across the land! Unfortunately, the fight never truly ends. Click \n\t\t\t\t"Replay" to play again!',o=y(),r=v("button"),r.textContent="Replay",x(s,"class","loss-message"),x(r,"class","next svelte-ggnqqo"),x(n,"class","message svelte-ggnqqo")},m(t,a){p(t,n,a),m(n,s),m(n,o),m(n,r),i||(l=$(r,"click",e[20]),i=!0)},p:t,i(t){a||j(()=>{a=Q(n,e[10],{}),a.start()})},o:t,d(t){t&&h(n),i=!1,l()}}}function Tt(e){let n,s,o,r,a,i,l,c,u,f,d,g,q=e[4][e[5]].name+"",C=e[3][e[5]]+"";return{c(){n=v("div"),s=v("span"),o=w("Uh oh! You made it to "),r=w(q),a=w(" Rank but then\n\t\t\t\tyou were defeated by "),i=w(C),l=w('. Better luck next time! Click "Replay"\n\t\t\t\tto play again!'),c=y(),u=v("button"),u.textContent="Replay",x(s,"class","loss-message"),x(u,"class","next svelte-ggnqqo"),x(n,"class","message svelte-ggnqqo")},m(t,f){p(t,n,f),m(n,s),m(s,o),m(s,r),m(s,a),m(s,i),m(s,l),m(n,c),m(n,u),d||(g=$(u,"click",e[19]),d=!0)},p(t,e){48&e[0]&&q!==(q=t[4][t[5]].name+"")&&b(r,q),40&e[0]&&C!==(C=t[3][t[5]]+"")&&b(i,C)},i(t){f||j(()=>{f=Q(n,e[10],{}),f.start()})},o:t,d(t){t&&h(n),d=!1,g()}}}function Bt(e){let n,s,o,r,a,i,l;return{c(){n=v("div"),s=v("div"),s.textContent='Welcome to the game! Press "Start" to continue!',o=y(),r=v("button"),r.textContent="Start",x(s,"class","opener-message"),x(r,"class","next svelte-ggnqqo"),x(n,"class","message svelte-ggnqqo")},m(t,a){p(t,n,a),m(n,s),m(n,o),m(n,r),i||(l=$(r,"click",e[18]),i=!0)},p:t,i(t){a||j(()=>{a=Q(n,e[10],{}),a.start()})},o:t,d(t){t&&h(n),i=!1,l()}}}function Et(t){let e,n;return e=new ut({props:{questionText:t[0]}}),{c(){tt(e.$$.fragment)},m(t,s){et(e,t,s),n=!0},p(t,n){const s={};1&n[0]&&(s.questionText=t[0]),e.$set(s)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function Dt(e){let n,s,r,a,i,l,c,u,f;return{c(){n=v("div"),s=v("span"),s.textContent="Is that your final answer?",r=y(),a=v("div"),i=v("button"),i.textContent="Yes",l=y(),c=v("button"),c.textContent="No",x(s,"class","final-answer"),x(i,"class","next svelte-ggnqqo"),x(c,"class","next red svelte-ggnqqo"),x(a,"class","final-buttons"),x(n,"class","message svelte-ggnqqo")},m(t,o){p(t,n,o),m(n,s),m(n,r),m(n,a),m(a,i),m(a,l),m(a,c),u||(f=[$(i,"click",e[22]),$(c,"click",e[23])],u=!0)},p:t,i:t,o:t,d(t){t&&h(n),u=!1,o(f)}}}function Lt(t){let e,n,s,o,r,a,l,c,u;function f(...e){return t[25](t[31],t[33],...e)}return n=new gt({props:{class:"ans",answerText:t[31],idx:t[33]}}),{c(){e=v("button"),tt(n.$$.fragment),s=y(),x(e,"class",o=i(t[31].split(" ").join("-")+" answer")+" svelte-ggnqqo"),x(e,"id",r=t[33])},m(t,o){p(t,e,o),et(n,e,null),m(e,s),l=!0,c||(u=$(e,"click",f),c=!0)},p(s,r){t=s;const a={};2&r[0]&&(a.answerText=t[31]),n.$set(a),(!l||2&r[0]&&o!==(o=i(t[31].split(" ").join("-")+" answer")+" svelte-ggnqqo"))&&x(e,"class",o)},i(t){l||(U(n.$$.fragment,t),j(()=>{a||(a=V(e,vt,{x:200,duration:500},!0)),a.run(1)}),l=!0)},o(t){F(n.$$.fragment,t),a||(a=V(e,vt,{x:200,duration:500},!1)),a.run(0),l=!1},d(t){t&&h(e),nt(n),t&&a&&a.end(),c=!1,u()}}}function St(t){let e,n,s,o,r,a,l,c,u;function f(...e){return t[24](t[31],t[33],...e)}return n=new gt({props:{class:"ans",answerText:t[31],idx:t[33]}}),{c(){e=v("button"),tt(n.$$.fragment),s=y(),x(e,"class",o=i(t[31].split(" ").join("-")+" answer")+" svelte-ggnqqo"),x(e,"id",r=t[33])},m(t,o){p(t,e,o),et(n,e,null),m(e,s),l=!0,c||(u=$(e,"click",f),c=!0)},p(s,r){t=s;const a={};2&r[0]&&(a.answerText=t[31]),n.$set(a),(!l||2&r[0]&&o!==(o=i(t[31].split(" ").join("-")+" answer")+" svelte-ggnqqo"))&&x(e,"class",o)},i(t){l||(U(n.$$.fragment,t),j(()=>{a||(a=V(e,vt,{x:-200,duration:500},!0)),a.run(1)}),l=!0)},o(t){F(n.$$.fragment,t),a||(a=V(e,vt,{x:-200,duration:500},!1)),a.run(0),l=!1},d(t){t&&h(e),nt(n),t&&a&&a.end(),c=!1,u()}}}function It(t){let e,n,s,o;const r=[St,Lt],a=[];return e=function(t,e){return t[33]%2==0?0:1}(t),n=a[e]=r[e](t),{c(){n.c(),s=w("")},m(t,n){a[e].m(t,n),p(t,s,n),o=!0},p(t,e){n.p(t,e)},i(t){o||(U(n),o=!0)},o(t){F(n),o=!1},d(t){a[e].d(t),t&&h(s)}}}function Rt(t){let e,n,s,o,r,a,i,l,c,u,f,d,g,w,$,b,C,_,k;u=new ht({props:{timeLeft:t[9]}});let A=t[4],T=[];for(let e=0;e<A.length;e+=1)T[e]=Ct($t(t,A,e));const B=[Bt,Tt,At,kt,_t],E=[];function D(t,e){return t[6]?t[8]?1:t[7]?2:0===t[9]?3:4:0}return $=D(t),b=E[$]=B[$](t),{c(){e=v("script"),s=y(),o=v("main"),r=v("div"),a=v("div"),i=v("img"),c=y(),tt(u.$$.fragment),f=y(),d=v("div");for(let t=0;t<T.length;t+=1)T[t].c();g=y(),w=v("div"),b.c(),C=y(),_=v("div"),_.innerHTML='<div class="about-container svelte-ggnqqo"><img class="face svelte-ggnqqo" src="images/face.jpg" alt="face"> \n\t\t\t<div class="about-popup svelte-ggnqqo"><a href="https://github.com/chrisoney/"><span class="about-icon fab fa-github svelte-ggnqqo"></span></a> \n\t\t\t\t<a href="https://www.linkedin.com/in/christopher-oney-317b84132/"><span class="about-icon fab fa-linkedin svelte-ggnqqo"></span></a> \n\t\t\t\t<a href="https://angel.co/u/christopher-oney"><span class="about-icon fab fa-angellist svelte-ggnqqo"></span></a></div></div>',e.src!==(n="https://kit.fontawesome.com/a229c5b13d.js")&&x(e,"src","https://kit.fontawesome.com/a229c5b13d.js"),x(e,"crossorigin","anonymous"),x(i,"class","title svelte-ggnqqo"),i.src!==(l="images/title-2.png")&&x(i,"src","images/title-2.png"),x(i,"alt","title"),x(a,"class","top-left svelte-ggnqqo"),x(d,"class","board svelte-ggnqqo"),x(r,"class","top svelte-ggnqqo"),x(w,"class","bottom svelte-ggnqqo"),x(_,"class","about svelte-ggnqqo"),x(o,"class","svelte-ggnqqo")},m(t,n){m(wt.head,e),p(t,s,n),p(t,o,n),m(o,r),m(r,a),m(a,i),m(a,c),et(u,a,null),m(r,f),m(r,d);for(let t=0;t<T.length;t+=1)T[t].m(d,null);m(o,g),m(o,w),E[$].m(w,null),m(o,C),m(o,_),k=!0},p(t,e){const n={};if(512&e[0]&&(n.timeLeft=t[9]),u.$set(n),48&e[0]){let n;for(A=t[4],n=0;n<A.length;n+=1){const s=$t(t,A,n);T[n]?T[n].p(s,e):(T[n]=Ct(s),T[n].c(),T[n].m(d,null))}for(;n<T.length;n+=1)T[n].d(1);T.length=A.length}let s=$;$=D(t),$===s?E[$].p(t,e):(Y(),F(E[s],1,1,()=>{E[s]=null}),G(),b=E[$],b||(b=E[$]=B[$](t),b.c()),U(b,1),b.m(w,null))},i(t){k||(U(u.$$.fragment,t),U(b),k=!0)},o(t){F(u.$$.fragment,t),F(b),k=!1},d(t){h(e),t&&h(s),t&&h(o),nt(u),q(T,t),E[$].d()}}}function jt(t,e,n){let s=-1,o=!1,r=!1,a=!1,{monsters:i=["slimes","goblins","kobolds","bandits","ogres","sandworms","Githyanki","illithids","a beholder","a dragon"]}=e,{ranks:l=[{name:"Porcelain",class:"tag small"},{name:"Obsidian",class:"tag small"},{name:"Steel",class:"tag small"},{name:"Sapphire",class:"tag small"},{name:"Emerald",class:"tag small"},{name:"Ruby",class:"tag small"},{name:"Bronze",class:"tag small"},{name:"Silver",class:"tag small"},{name:"Gold",class:"tag small"},{name:"Platinum",class:"tag large"}]}=e,c=0,{question:u=""}=e,{correctAnswer:f=""}=e,{answers:d=[]}=e;function g(){const t=qt[c][Math.floor(Math.random()*qt[c].length)];n(0,u=t.question),n(15,f=t.correctAnswer),n(1,d=t.answers)}function m(t,e){t.stopPropagation(),"start"===e?(n(5,s=0),n(6,o=!0),n(9,$=30),g(),x()):"replay"===e&&(n(8,a=!1),n(7,r=!1),n(6,o=!1),n(5,s=-1),c=0)}let{choiceText:p=""}=e,{choiceIdx:h=0}=e,{final:q=!1}=e;function v(t,e,s){t.preventDefault(),n(16,p=e),n(17,h=s),n(2,q=!0),b()}function w(t,e){t.preventDefault(),n(2,q=!1),e?function(t,e){if(t===f)document.getElementById(e).classList.add("green"),n(0,u="Correct!"),setTimeout(()=>{document.getElementById(e).classList.remove("green"),c+=1,n(5,s+=1),c<=9?(n(9,$=30),x(),g()):n(7,r=!0)},2e3);else{n(0,u="Wrong!"),document.getElementById(e).classList.add("red");let t=document.getElementsByClassName("answer");for(let e=0;e<t.length;e++)t[e].classList.contains(f.split(" ").join("-"))&&t[e].classList.add("green");setTimeout(()=>{n(8,a=!0)},2e3)}}(p,h):x()}let y,$=30;function x(){y=setInterval(()=>{n(9,$-=1)},1e3)}function b(){clearInterval(y)}return t.$$set=t=>{"monsters"in t&&n(3,i=t.monsters),"ranks"in t&&n(4,l=t.ranks),"question"in t&&n(0,u=t.question),"correctAnswer"in t&&n(15,f=t.correctAnswer),"answers"in t&&n(1,d=t.answers),"choiceText"in t&&n(16,p=t.choiceText),"choiceIdx"in t&&n(17,h=t.choiceIdx),"final"in t&&n(2,q=t.final)},[u,d,q,i,l,s,o,r,a,$,function(t,{delay:e=600,duration:n=1e3}){const s=+getComputedStyle(t).opacity;return{easing:it,delay:e,duration:n,css:t=>"opacity: "+t*s}},m,v,w,b,f,p,h,t=>m(t,"start"),t=>m(t,"replay"),t=>m(t,"replay"),t=>m(t,"time"),t=>w(t,!0),t=>w(t,!1),(t,e,n)=>v(n,t,e),(t,e,n)=>v(n,t,e)]}return new class extends rt{constructor(t){super(),ot(this,t,jt,Rt,a,{monsters:3,ranks:4,question:0,correctAnswer:15,answers:1,choiceText:16,choiceIdx:17,final:2},[-1,-1])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
