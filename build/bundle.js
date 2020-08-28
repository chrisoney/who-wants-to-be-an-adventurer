var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function s(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t){return null==t?"":t}const l="undefined"!=typeof window;let c=l?()=>window.performance.now():()=>Date.now(),u=l?t=>requestAnimationFrame(t):t;const f=new Set;function d(t){f.forEach(e=>{e.c(t)||(f.delete(e),e.f())}),0!==f.size&&u(d)}function m(t){let e;return 0===f.size&&u(d),{promise:new Promise(n=>{f.add(e={c:t,f:n})}),abort(){f.delete(e)}}}function p(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function b(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function $(){return w(" ")}function y(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function q(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}const C=new Set;let _,A=0;function k(t,e,n,s,o,r,i,a=0){const l=16.666/s;let c="{\n";for(let t=0;t<=1;t+=l){const s=e+(n-e)*r(t);c+=100*t+`%{${i(s,1-s)}}\n`}const u=c+`100% {${i(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${a}`,d=t.ownerDocument;C.add(d);const m=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(v("style")).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[f]||(p[f]=!0,m.insertRule(`@keyframes ${f} ${u}`,m.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?h+", ":""}${f} ${s}ms linear ${o}ms 1 both`,A+=1,f}function T(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-s.length;o&&(t.style.animation=s.join(", "),A-=o,A||u(()=>{A||(C.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),C.clear())}))}function B(t){_=t}const E=[],D=[],L=[],S=[],I=Promise.resolve();let R=!1;function j(t){L.push(t)}let O=!1;const N=new Set;function P(){if(!O){O=!0;do{for(let t=0;t<E.length;t+=1){const e=E[t];B(e),W(e.$$)}for(E.length=0;D.length;)D.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];N.has(e)||(N.add(e),e())}L.length=0}while(E.length);for(;S.length;)S.pop()();R=!1,O=!1,N.clear()}}function W(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}let H;function M(){return H||(H=Promise.resolve(),H.then(()=>{H=null})),H}function z(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const K=new Set;let X;function Y(){X={r:0,c:[],p:X}}function G(){X.r||o(X.c),X=X.p}function U(t,e){t&&t.i&&(K.delete(t),t.i(e))}function F(t,e,n,s){if(t&&t.o){if(K.has(t))return;K.add(t),X.c.push(()=>{K.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const J={duration:0};function Q(n,s,o){let i,a,l=s(n,o),u=!1,f=0;function d(){i&&T(n,i)}function p(){const{delay:s=0,duration:o=300,easing:r=e,tick:p=t,css:h}=l||J;h&&(i=k(n,0,1,o,s,r,h,f++)),p(0,1);const g=c()+s,b=g+o;a&&a.abort(),u=!0,j(()=>z(n,!0,"start")),a=m(t=>{if(u){if(t>=b)return p(1,0),z(n,!0,"end"),d(),u=!1;if(t>=g){const e=r((t-g)/o);p(e,1-e)}}return u})}let h=!1;return{start(){h||(T(n),r(l)?(l=l(),M().then(p)):p())},invalidate(){h=!1},end(){u&&(d(),u=!1)}}}function V(n,s,i,a){let l=s(n,i),u=a?0:1,f=null,d=null,p=null;function h(){p&&T(n,p)}function g(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function b(s){const{delay:r=0,duration:i=300,easing:a=e,tick:b=t,css:v}=l||J,w={start:c()+r,b:s};s||(w.group=X,X.r+=1),f?d=w:(v&&(h(),p=k(n,u,s,i,r,a,v)),s&&b(0,1),f=g(w,i),j(()=>z(n,s,"start")),m(t=>{if(d&&t>d.start&&(f=g(d,i),d=null,z(n,f.b,"start"),v&&(h(),p=k(n,u,f.b,f.duration,0,a,l.css))),f)if(t>=f.end)b(u=f.b,1-u),z(n,f.b,"end"),d||(f.b?h():--f.group.r||o(f.group.c)),f=null;else if(t>=f.start){const e=t-f.start;u=f.a+f.d*a(e/f.duration),b(u,1-u)}return!(!f&&!d)}))}return{run(t){r(l)?M().then(()=>{l=l(),b(t)}):b(t)},end(){h(),f=d=null}}}const Z="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function tt(t){t&&t.c()}function et(t,e,s){const{fragment:i,on_mount:a,on_destroy:l,after_update:c}=t.$$;i&&i.m(e,s),j(()=>{const e=a.map(n).filter(r);l?l.push(...e):o(e),t.$$.on_mount=[]}),c.forEach(j)}function nt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){-1===t.$$.dirty[0]&&(E.push(t),R||(R=!0,I.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ot(e,n,r,i,a,l,c=[-1]){const u=_;B(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:c,skip_bound:!1};let m=!1;if(d.ctx=r?r(e,f,(t,n,...s)=>{const o=s.length?s[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),m&&st(e,t)),n}):[],d.update(),m=!0,o(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(g)}else d.fragment&&d.fragment.c();n.intro&&U(e.$$.fragment),et(e,n.target,n.anchor),P()}B(u)}class rt{$destroy(){nt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function it(t){const e=t-1;return e*e*e+1}function at(t){return--t*t*t*t*t+1}function lt(e){let n,s;return{c(){n=v("div"),s=w(e[0]),q(n,"class","question svelte-1dg4i2e")},m(t,e){h(t,n,e),p(n,s)},p(t,[e]){1&e&&x(s,t[0])},i:t,o:t,d(t){t&&g(n)}}}function ct(t,e,n){let{questionText:s}=e;return t.$$set=t=>{"questionText"in t&&n(0,s=t.questionText)},[s]}class ut extends rt{constructor(t){super(),ot(this,t,ct,lt,i,{questionText:0})}}function ft(e){let n,s,o,r,i,a,l,c,u,f=e[2][e[1]]+"";return{c(){n=v("div"),s=v("span"),s.textContent="♦",o=$(),r=v("span"),i=w(f),a=w(":"),l=$(),c=v("div"),u=w(e[0]),q(s,"class","diam svelte-1f3aymc"),q(r,"class","answer-letter svelte-1f3aymc"),q(c,"class","answer-text svelte-1f3aymc"),q(n,"class","answer-container svelte-1f3aymc")},m(t,e){h(t,n,e),p(n,s),p(n,o),p(n,r),p(r,i),p(r,a),p(n,l),p(n,c),p(c,u)},p(t,[e]){6&e&&f!==(f=t[2][t[1]]+"")&&x(i,f),1&e&&x(u,t[0])},i:t,o:t,d(t){t&&g(n)}}}function dt(t,e,n){let{answerText:s}=e,{idx:o}=e,{answerKeys:r=["A","B","C","D"]}=e;return t.$$set=t=>{"answerText"in t&&n(0,s=t.answerText),"idx"in t&&n(1,o=t.idx),"answerKeys"in t&&n(2,r=t.answerKeys)},[s,o,r]}class mt extends rt{constructor(t){super(),ot(this,t,dt,ft,i,{answerText:0,idx:1,answerKeys:2})}}function pt(e){let n,s,o,r,i;return{c(){n=v("link"),s=$(),o=v("div"),r=v("span"),i=w(e[0]),q(n,"href","https://fonts.googleapis.com/css2?family=Balthazar&display=swap"),q(n,"rel","stylesheet"),q(r,"class","timer-num svelte-9nlqtm"),q(o,"class","timer-container svelte-9nlqtm")},m(t,e){p(document.head,n),h(t,s,e),h(t,o,e),p(o,r),p(r,i)},p(t,[e]){1&e&&x(i,t[0])},i:t,o:t,d(t){g(n),t&&g(s),t&&g(o)}}}function ht(t,e,n){let{timeLeft:s}=e;return t.$$set=t=>{"timeLeft"in t&&n(0,s=t.timeLeft)},[s]}class gt extends rt{constructor(t){super(),ot(this,t,ht,pt,i,{timeLeft:0})}}const bt={0:[{question:"What is the standard abbreviation for your Charisma score?",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]},{question:"What is the standard abbreviation for your Dexterity score?",correctAnswer:"DEX",answers:["CHA","DEX","WIS","CON"]}],1:[{question:"This is question 2",correctAnswer:"B",answers:["A","B","C","D"]},{question:"This is question 2.5",correctAnswer:"C",answers:["A","B","C","D"]}],2:[{question:"This is question 3",correctAnswer:"B",answers:["A","B","C","D"]}],3:[{question:"This is question 4",correctAnswer:"B",answers:["A","B","C","D"]}],4:[{question:"This is question 5",correctAnswer:"B",answers:["A","B","C","D"]}],5:[{question:"This is question 6",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]}],6:[{question:"This is question 7",correctAnswer:"B",answers:["A","B","C","D"]}],7:[{question:"This is question 8",correctAnswer:"B",answers:["A","B","C","D"]}],8:[{question:"This is question 9",correctAnswer:"B",answers:["A","B","C","D"]}],9:[{question:"This is question 10",correctAnswer:"B",answers:["A","B","C","D"]}]};function vt(t,{delay:e=0,duration:n=400,easing:s=it,x:o=0,y:r=0,opacity:i=0}){const a=getComputedStyle(t),l=+a.opacity,c="none"===a.transform?"":a.transform,u=l*(1-i);return{delay:e,duration:n,easing:s,css:(t,e)=>`\n\t\t\ttransform: ${c} translate(${(1-t)*o}px, ${(1-t)*r}px);\n\t\t\topacity: ${l-u*e}`}}const{document:wt}=Z;function $t(t,e,n){const s=t.slice();return s[31]=e[n],s[33]=n,s}function yt(t,e,n){const s=t.slice();return s[34]=e[n],s[36]=n,s}function qt(t){let e,n,s,o,r=t[34].name+"";return{c(){e=v("div"),n=v("div"),s=w(r),q(n,"class",o=a(t[34].class)+" svelte-o5ib2q"),q(e,"class","tag-contain svelte-o5ib2q")},m(t,o){h(t,e,o),p(e,n),p(n,s)},p(t,e){16&e[0]&&r!==(r=t[34].name+"")&&x(s,r),16&e[0]&&o!==(o=a(t[34].class)+" svelte-o5ib2q")&&q(n,"class",o)},d(t){t&&g(e)}}}function xt(t){let e,n,s,o,r=t[34].name+"";return{c(){e=v("div"),n=v("div"),s=w(r),q(n,"class",o=a(t[34].class+" curr-font")+" svelte-o5ib2q"),q(e,"class","tag-contain curr svelte-o5ib2q")},m(t,o){h(t,e,o),p(e,n),p(n,s)},p(t,e){16&e[0]&&r!==(r=t[34].name+"")&&x(s,r),16&e[0]&&o!==(o=a(t[34].class+" curr-font")+" svelte-o5ib2q")&&q(n,"class",o)},d(t){t&&g(e)}}}function Ct(t){let e,n;function s(t,e){return t[36]===t[5]?xt:qt}let o=s(t),r=o(t);return{c(){e=v("div"),r.c(),n=$(),q(e,"class","tag-area svelte-o5ib2q")},m(t,s){h(t,e,s),r.m(e,null),p(e,n)},p(t,i){o===(o=s(t))&&r?r.p(t,i):(r.d(1),r=o(t),r&&(r.c(),r.m(e,n)))},d(t){t&&g(e),r.d()}}}function _t(t){let e,n,s,o,r;const i=[Dt,Et],a=[];function l(t,e){return t[2]?0:1}e=l(t),n=a[e]=i[e](t);let c=t[1],u=[];for(let e=0;e<c.length;e+=1)u[e]=It($t(t,c,e));const f=t=>F(u[t],1,1,()=>{u[t]=null});return{c(){n.c(),s=$(),o=v("div");for(let t=0;t<u.length;t+=1)u[t].c();q(o,"class","answers svelte-o5ib2q")},m(t,n){a[e].m(t,n),h(t,s,n),h(t,o,n);for(let t=0;t<u.length;t+=1)u[t].m(o,null);r=!0},p(t,r){let d=e;if(e=l(t),e===d?a[e].p(t,r):(Y(),F(a[d],1,1,()=>{a[d]=null}),G(),n=a[e],n||(n=a[e]=i[e](t),n.c()),U(n,1),n.m(s.parentNode,s)),4098&r[0]){let e;for(c=t[1],e=0;e<c.length;e+=1){const n=$t(t,c,e);u[e]?(u[e].p(n,r),U(u[e],1)):(u[e]=It(n),u[e].c(),U(u[e],1),u[e].m(o,null))}for(Y(),e=c.length;e<u.length;e+=1)f(e);G()}},i(t){if(!r){U(n);for(let t=0;t<c.length;t+=1)U(u[t]);r=!0}},o(t){F(n),u=u.filter(Boolean);for(let t=0;t<u.length;t+=1)F(u[t]);r=!1},d(t){a[e].d(t),t&&g(s),t&&g(o),b(u,t)}}}function At(e){let n,s,o,r,i,a,l;return{c(){n=v("div"),s=v("span"),s.textContent='Oops, you ran out of time! Click \n\t\t\t\t"Replay" to play again!',o=$(),r=v("button"),r.textContent="Replay",q(s,"class","loss-message"),q(r,"class","next svelte-o5ib2q"),q(n,"class","message svelte-o5ib2q")},m(t,i){h(t,n,i),p(n,s),p(n,o),p(n,r),a||(l=y(r,"click",e[20]),a=!0)},p:t,i(t){i||j(()=>{i=Q(n,e[10],{}),i.start()})},o:t,d(t){t&&g(n),a=!1,l()}}}function kt(e){let n,s,o,r,i,a,l;return{c(){n=v("div"),s=v("span"),s.textContent='You made it to Porcelain Rank! You stand as a beacon of hope\n\t\t\t\tfor adventuring teams across the land! Unfortunately, the fight never truly ends. Click \n\t\t\t\t"Replay" to play again!',o=$(),r=v("button"),r.textContent="Replay",q(s,"class","loss-message"),q(r,"class","next svelte-o5ib2q"),q(n,"class","message svelte-o5ib2q")},m(t,i){h(t,n,i),p(n,s),p(n,o),p(n,r),a||(l=y(r,"click",e[19]),a=!0)},p:t,i(t){i||j(()=>{i=Q(n,e[10],{}),i.start()})},o:t,d(t){t&&g(n),a=!1,l()}}}function Tt(e){let n,s,o,r,i,a,l,c,u,f,d,m,b=e[4][e[5]].name+"",C=e[3][e[5]]+"";return{c(){n=v("div"),s=v("span"),o=w("Uh oh! You made it to "),r=w(b),i=w(" Rank but then\n\t\t\t\tyou were defeated by "),a=w(C),l=w('. Better luck next time! Click "Replay"\n\t\t\t\tto play again!'),c=$(),u=v("button"),u.textContent="Replay",q(s,"class","loss-message"),q(u,"class","next svelte-o5ib2q"),q(n,"class","message svelte-o5ib2q")},m(t,f){h(t,n,f),p(n,s),p(s,o),p(s,r),p(s,i),p(s,a),p(s,l),p(n,c),p(n,u),d||(m=y(u,"click",e[18]),d=!0)},p(t,e){48&e[0]&&b!==(b=t[4][t[5]].name+"")&&x(r,b),40&e[0]&&C!==(C=t[3][t[5]]+"")&&x(a,C)},i(t){f||j(()=>{f=Q(n,e[10],{}),f.start()})},o:t,d(t){t&&g(n),d=!1,m()}}}function Bt(e){let n,s,o,r,i,a,l;return{c(){n=v("div"),s=v("div"),s.textContent='Welcome to the game! Press "Start" to continue!',o=$(),r=v("button"),r.textContent="Start",q(s,"class","opener-message"),q(r,"class","next svelte-o5ib2q"),q(n,"class","message svelte-o5ib2q")},m(t,i){h(t,n,i),p(n,s),p(n,o),p(n,r),a||(l=y(r,"click",e[17]),a=!0)},p:t,i(t){i||j(()=>{i=Q(n,e[10],{}),i.start()})},o:t,d(t){t&&g(n),a=!1,l()}}}function Et(t){let e,n;return e=new ut({props:{questionText:t[0]}}),{c(){tt(e.$$.fragment)},m(t,s){et(e,t,s),n=!0},p(t,n){const s={};1&n[0]&&(s.questionText=t[0]),e.$set(s)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function Dt(e){let n,s,r,i,a,l,c,u,f;return{c(){n=v("div"),s=v("span"),s.textContent="Is that your final answer?",r=$(),i=v("div"),a=v("button"),a.textContent="Yes",l=$(),c=v("button"),c.textContent="No",q(s,"class","final-answer"),q(a,"class","next svelte-o5ib2q"),q(c,"class","next red svelte-o5ib2q"),q(i,"class","final-buttons"),q(n,"class","message svelte-o5ib2q")},m(t,o){h(t,n,o),p(n,s),p(n,r),p(n,i),p(i,a),p(i,l),p(i,c),u||(f=[y(a,"click",e[21]),y(c,"click",e[22])],u=!0)},p:t,i:t,o:t,d(t){t&&g(n),u=!1,o(f)}}}function Lt(t){let e,n,s,o,r,i,l,c,u;function f(...e){return t[24](t[31],t[33],...e)}return n=new mt({props:{class:"ans",answerText:t[31],idx:t[33]}}),{c(){e=v("button"),tt(n.$$.fragment),s=$(),q(e,"class",o=a(t[31].split(" ").join("-")+" answer")+" svelte-o5ib2q"),q(e,"id",r=t[33])},m(t,o){h(t,e,o),et(n,e,null),p(e,s),l=!0,c||(u=y(e,"click",f),c=!0)},p(s,r){t=s;const i={};2&r[0]&&(i.answerText=t[31]),n.$set(i),(!l||2&r[0]&&o!==(o=a(t[31].split(" ").join("-")+" answer")+" svelte-o5ib2q"))&&q(e,"class",o)},i(t){l||(U(n.$$.fragment,t),j(()=>{i||(i=V(e,vt,{x:200,duration:500},!0)),i.run(1)}),l=!0)},o(t){F(n.$$.fragment,t),i||(i=V(e,vt,{x:200,duration:500},!1)),i.run(0),l=!1},d(t){t&&g(e),nt(n),t&&i&&i.end(),c=!1,u()}}}function St(t){let e,n,s,o,r,i,l,c,u;function f(...e){return t[23](t[31],t[33],...e)}return n=new mt({props:{class:"ans",answerText:t[31],idx:t[33]}}),{c(){e=v("button"),tt(n.$$.fragment),s=$(),q(e,"class",o=a(t[31].split(" ").join("-")+" answer")+" svelte-o5ib2q"),q(e,"id",r=t[33])},m(t,o){h(t,e,o),et(n,e,null),p(e,s),l=!0,c||(u=y(e,"click",f),c=!0)},p(s,r){t=s;const i={};2&r[0]&&(i.answerText=t[31]),n.$set(i),(!l||2&r[0]&&o!==(o=a(t[31].split(" ").join("-")+" answer")+" svelte-o5ib2q"))&&q(e,"class",o)},i(t){l||(U(n.$$.fragment,t),j(()=>{i||(i=V(e,vt,{x:-200,duration:500},!0)),i.run(1)}),l=!0)},o(t){F(n.$$.fragment,t),i||(i=V(e,vt,{x:-200,duration:500},!1)),i.run(0),l=!1},d(t){t&&g(e),nt(n),t&&i&&i.end(),c=!1,u()}}}function It(t){let e,n,s,o;const r=[St,Lt],i=[];return e=function(t,e){return t[33]%2==0?0:1}(t),n=i[e]=r[e](t),{c(){n.c(),s=w("")},m(t,n){i[e].m(t,n),h(t,s,n),o=!0},p(t,e){n.p(t,e)},i(t){o||(U(n),o=!0)},o(t){F(n),o=!1},d(t){i[e].d(t),t&&g(s)}}}function Rt(t){let e,n,s,o,r,i,a,l,c,u,f,d,m,w,y,x,C,_,A;u=new gt({props:{timeLeft:t[9]}});let k=t[4],T=[];for(let e=0;e<k.length;e+=1)T[e]=Ct(yt(t,k,e));const B=[Bt,Tt,kt,At,_t],E=[];function D(t,e){return t[6]?t[8]?1:t[7]?2:0===t[9]?3:4:0}return y=D(t),x=E[y]=B[y](t),{c(){e=v("script"),s=$(),o=v("main"),r=v("div"),i=v("div"),a=v("img"),c=$(),tt(u.$$.fragment),f=$(),d=v("div");for(let t=0;t<T.length;t+=1)T[t].c();m=$(),w=v("div"),x.c(),C=$(),_=v("div"),_.innerHTML='<div class="about-container svelte-o5ib2q"><img class="face svelte-o5ib2q" src="images/face.jpg" alt="face"> \n\t\t\t<div class="about-popup svelte-o5ib2q"><a href="https://github.com/chrisoney/"><span class="about-icon fab fa-github svelte-o5ib2q"></span></a> \n\t\t\t\t<a href="https://www.linkedin.com/in/christopher-oney-317b84132/"><span class="about-icon fab fa-linkedin svelte-o5ib2q"></span></a> \n\t\t\t\t<a href="https://angel.co/u/christopher-oney"><span class="about-icon fab fa-angellist svelte-o5ib2q"></span></a></div></div>',e.src!==(n="https://kit.fontawesome.com/a229c5b13d.js")&&q(e,"src","https://kit.fontawesome.com/a229c5b13d.js"),q(e,"crossorigin","anonymous"),q(a,"class","title svelte-o5ib2q"),a.src!==(l="images/title-2.png")&&q(a,"src","images/title-2.png"),q(a,"alt","title"),q(i,"class","top-left svelte-o5ib2q"),q(d,"class","board svelte-o5ib2q"),q(r,"class","top svelte-o5ib2q"),q(w,"class","bottom svelte-o5ib2q"),q(_,"class","about svelte-o5ib2q"),q(o,"class","svelte-o5ib2q")},m(t,n){p(wt.head,e),h(t,s,n),h(t,o,n),p(o,r),p(r,i),p(i,a),p(i,c),et(u,i,null),p(r,f),p(r,d);for(let t=0;t<T.length;t+=1)T[t].m(d,null);p(o,m),p(o,w),E[y].m(w,null),p(o,C),p(o,_),A=!0},p(t,e){const n={};if(512&e[0]&&(n.timeLeft=t[9]),u.$set(n),48&e[0]){let n;for(k=t[4],n=0;n<k.length;n+=1){const s=yt(t,k,n);T[n]?T[n].p(s,e):(T[n]=Ct(s),T[n].c(),T[n].m(d,null))}for(;n<T.length;n+=1)T[n].d(1);T.length=k.length}let s=y;y=D(t),y===s?E[y].p(t,e):(Y(),F(E[s],1,1,()=>{E[s]=null}),G(),x=E[y],x||(x=E[y]=B[y](t),x.c()),U(x,1),x.m(w,null))},i(t){A||(U(u.$$.fragment,t),U(x),A=!0)},o(t){F(u.$$.fragment,t),F(x),A=!1},d(t){g(e),t&&g(s),t&&g(o),nt(u),b(T,t),E[y].d()}}}function jt(t,e,n){let s=-1,o=!1,r=!1,i=!1,{monsters:a=["slimes","goblins","kobolds","bandits","ogres","sandworms","Githyanki","illithids","a beholder","a dragon"]}=e,{ranks:l=[{name:"Porcelain",class:"tag small"},{name:"Obsidian",class:"tag small"},{name:"Steel",class:"tag small"},{name:"Sapphire",class:"tag small"},{name:"Emerald",class:"tag small"},{name:"Ruby",class:"tag small"},{name:"Bronze",class:"tag small"},{name:"Silver",class:"tag small"},{name:"Gold",class:"tag small"},{name:"Platinum",class:"tag large"}]}=e,c=0,{question:u=""}=e,{correctAnswer:f=""}=e,{answers:d=[]}=e;function m(){const t=bt[c][Math.floor(Math.random()*bt[c].length)];n(0,u=t.question),n(14,f=t.correctAnswer),n(1,d=t.answers)}function p(t,e){t.stopPropagation(),"start"===e?(n(5,s=0),n(6,o=!0),n(9,y=30),m(),q()):"replay"===e&&(n(8,i=!1),n(7,r=!1),n(6,o=!1),n(5,s=-1),c=0)}let{choiceText:h=""}=e,{choiceIdx:g=0}=e,{final:b=!1}=e;function v(t,e,s){t.preventDefault(),n(15,h=e),n(16,g=s),n(2,b=!0),clearInterval($)}function w(t,e){t.preventDefault(),n(2,b=!1),e?function(t,e){if(t===f)document.getElementById(e).classList.add("green"),n(0,u="Correct!"),setTimeout(()=>{document.getElementById(e).classList.remove("green"),c+=1,n(5,s+=1),c<=9?(n(9,y=30),q(),m()):n(7,r=!0)},2e3);else{n(0,u="Wrong!"),document.getElementById(e).classList.add("red");let t=document.getElementsByClassName("answer");for(let e=0;e<t.length;e++)t[e].classList.contains(f.split(" ").join("-"))&&t[e].classList.add("green");setTimeout(()=>{n(8,i=!0)},2e3)}}(h,g):q()}let $,y=30;function q(){$=setInterval(()=>{n(9,y-=1)},1e3)}return t.$$set=t=>{"monsters"in t&&n(3,a=t.monsters),"ranks"in t&&n(4,l=t.ranks),"question"in t&&n(0,u=t.question),"correctAnswer"in t&&n(14,f=t.correctAnswer),"answers"in t&&n(1,d=t.answers),"choiceText"in t&&n(15,h=t.choiceText),"choiceIdx"in t&&n(16,g=t.choiceIdx),"final"in t&&n(2,b=t.final)},[u,d,b,a,l,s,o,r,i,y,function(t,{delay:e=600,duration:n=1e3}){const s=+getComputedStyle(t).opacity;return{easing:at,delay:e,duration:n,css:t=>"opacity: "+t*s}},p,v,w,f,h,g,t=>p(t,"start"),t=>p(t,"replay"),t=>p(t,"replay"),t=>p(t,"time"),t=>w(t,!0),t=>w(t,!1),(t,e,n)=>v(n,t,e),(t,e,n)=>v(n,t,e)]}return new class extends rt{constructor(t){super(),ot(this,t,jt,Rt,i,{monsters:3,ranks:4,question:0,correctAnswer:14,answers:1,choiceText:15,choiceIdx:16,final:2},[-1,-1])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
