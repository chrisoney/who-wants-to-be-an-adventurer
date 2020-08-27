var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t){return null==t?"":t}const l="undefined"!=typeof window;let c=l?()=>window.performance.now():()=>Date.now(),u=l?t=>requestAnimationFrame(t):t;const d=new Set;function f(t){d.forEach(e=>{e.c(t)||(d.delete(e),e.f())}),0!==d.size&&u(f)}function m(t){let e;return 0===d.size&&u(f),{promise:new Promise(n=>{d.add(e={c:t,f:n})}),abort(){d.delete(e)}}}function h(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function y(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function v(){return w(" ")}function x(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}const C=new Set;let A,q=0;function T(t,e,n,s,r,o,a,i=0){const l=16.666/s;let c="{\n";for(let t=0;t<=1;t+=l){const s=e+(n-e)*o(t);c+=100*t+`%{${a(s,1-s)}}\n`}const u=c+`100% {${a(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${i}`,f=t.ownerDocument;C.add(f);const m=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild($("style")).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[d]||(h[d]=!0,m.insertRule(`@keyframes ${d} ${u}`,m.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?p+", ":""}${d} ${s}ms linear ${r}ms 1 both`,q+=1,d}function k(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-s.length;r&&(t.style.animation=s.join(", "),q-=r,q||u(()=>{q||(C.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),C.clear())}))}function B(t){A=t}const E=[],D=[],S=[],R=[],j=Promise.resolve();let O=!1;function P(t){S.push(t)}let L=!1;const N=new Set;function W(){if(!L){L=!0;do{for(let t=0;t<E.length;t+=1){const e=E[t];B(e),I(e.$$)}for(E.length=0;D.length;)D.pop()();for(let t=0;t<S.length;t+=1){const e=S[t];N.has(e)||(N.add(e),e())}S.length=0}while(E.length);for(;R.length;)R.pop()();O=!1,L=!1,N.clear()}}function I(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}let H;function K(){return H||(H=Promise.resolve(),H.then(()=>{H=null})),H}function M(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const X=new Set;let z;function Y(){z={r:0,c:[],p:z}}function G(){z.r||r(z.c),z=z.p}function U(t,e){t&&t.i&&(X.delete(t),t.i(e))}function F(t,e,n,s){if(t&&t.o){if(X.has(t))return;X.add(t),z.c.push(()=>{X.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const J={duration:0};function Q(n,s,a,i){let l=s(n,a),u=i?0:1,d=null,f=null,h=null;function p(){h&&k(n,h)}function g(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function y(s){const{delay:o=0,duration:a=300,easing:i=e,tick:y=t,css:$}=l||J,w={start:c()+o,b:s};s||(w.group=z,z.r+=1),d?f=w:($&&(p(),h=T(n,u,s,a,o,i,$)),s&&y(0,1),d=g(w,a),P(()=>M(n,s,"start")),m(t=>{if(f&&t>f.start&&(d=g(f,a),f=null,M(n,d.b,"start"),$&&(p(),h=T(n,u,d.b,d.duration,0,i,l.css))),d)if(t>=d.end)y(u=d.b,1-u),M(n,d.b,"end"),f||(d.b?p():--d.group.r||r(d.group.c)),d=null;else if(t>=d.start){const e=t-d.start;u=d.a+d.d*i(e/d.duration),y(u,1-u)}return!(!d&&!f)}))}return{run(t){o(l)?K().then(()=>{l=l(),y(t)}):y(t)},end(){p(),d=f=null}}}function V(t){t&&t.c()}function Z(t,e,s){const{fragment:a,on_mount:i,on_destroy:l,after_update:c}=t.$$;a&&a.m(e,s),P(()=>{const e=i.map(n).filter(o);l?l.push(...e):r(e),t.$$.on_mount=[]}),c.forEach(P)}function tt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function et(t,e){-1===t.$$.dirty[0]&&(E.push(t),O||(O=!0,j.then(W)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function nt(e,n,o,a,i,l,c=[-1]){const u=A;B(e);const d=n.props||{},f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:c,skip_bound:!1};let m=!1;if(f.ctx=o?o(e,d,(t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),m&&et(e,t)),n}):[],f.update(),m=!0,r(f.before_update),f.fragment=!!a&&a(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(g)}else f.fragment&&f.fragment.c();n.intro&&U(e.$$.fragment),Z(e,n.target,n.anchor),W()}B(u)}class st{$destroy(){tt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function rt(t){const e=t-1;return e*e*e+1}function ot(t,{delay:n=0,duration:s=400,easing:r=e}){const o=+getComputedStyle(t).opacity;return{delay:n,duration:s,easing:r,css:t=>"opacity: "+t*o}}function at(t,{delay:e=0,duration:n=400,easing:s=rt,x:r=0,y:o=0,opacity:a=0}){const i=getComputedStyle(t),l=+i.opacity,c="none"===i.transform?"":i.transform,u=l*(1-a);return{delay:e,duration:n,easing:s,css:(t,e)=>`\n\t\t\ttransform: ${c} translate(${(1-t)*r}px, ${(1-t)*o}px);\n\t\t\topacity: ${l-u*e}`}}function it(t){let e,n,s,r;return{c(){e=$("div"),n=w(t[0]),b(e,"class","question svelte-1dg4i2e")},m(t,s){p(t,e,s),h(e,n),r=!0},p(t,[e]){(!r||1&e)&&_(n,t[0])},i(t){r||(P(()=>{s||(s=Q(e,ot,{},!0)),s.run(1)}),r=!0)},o(t){s||(s=Q(e,ot,{},!1)),s.run(0),r=!1},d(t){t&&g(e),t&&s&&s.end()}}}function lt(t,e,n){let{questionText:s}=e;return t.$$set=t=>{"questionText"in t&&n(0,s=t.questionText)},[s]}class ct extends st{constructor(t){super(),nt(this,t,lt,it,a,{questionText:0})}}function ut(e){let n,s,r,o,a,i,l,c,u,d=e[2][e[1]]+"";return{c(){n=$("div"),s=$("span"),s.textContent="♦",r=v(),o=$("span"),a=w(d),i=w(":"),l=v(),c=$("div"),u=w(e[0]),b(s,"class","diam svelte-1f3aymc"),b(o,"class","answer-letter svelte-1f3aymc"),b(c,"class","answer-text svelte-1f3aymc"),b(n,"class","answer-container svelte-1f3aymc")},m(t,e){p(t,n,e),h(n,s),h(n,r),h(n,o),h(o,a),h(o,i),h(n,l),h(n,c),h(c,u)},p(t,[e]){6&e&&d!==(d=t[2][t[1]]+"")&&_(a,d),1&e&&_(u,t[0])},i:t,o:t,d(t){t&&g(n)}}}function dt(t,e,n){let{answerText:s}=e,{idx:r}=e,{answerKeys:o=["A","B","C","D"]}=e;return t.$$set=t=>{"answerText"in t&&n(0,s=t.answerText),"idx"in t&&n(1,r=t.idx),"answerKeys"in t&&n(2,o=t.answerKeys)},[s,r,o]}class ft extends st{constructor(t){super(),nt(this,t,dt,ut,a,{answerText:0,idx:1,answerKeys:2})}}const mt={0:[{question:"What is the standard abbreviation for your Charisma score?",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]},{question:"What is the standard abbreviation for your Dexterity score?",correctAnswer:"DEX",answers:["CHA","DEX","WIS","CON"]}],1:[{question:"This is question 2",correctAnswer:"B",answers:["A","B","C","D"]},{question:"This is question 2.5",correctAnswer:"C",answers:["A","B","C","D"]}],2:[{question:"This is question 3",correctAnswer:"B",answers:["A","B","C","D"]}],3:[{question:"This is question 4",correctAnswer:"B",answers:["A","B","C","D"]}],4:[{question:"This is question 5",correctAnswer:"B",answers:["A","B","C","D"]}],5:[{question:"This is question 6",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]}],6:[{question:"This is question 7",correctAnswer:"B",answers:["A","B","C","D"]}],7:[{question:"This is question 8",correctAnswer:"B",answers:["A","B","C","D"]}],8:[{question:"This is question 9",correctAnswer:"B",answers:["A","B","C","D"]}],9:[{question:"This is question 10",correctAnswer:"B",answers:["A","B","C","D"]}]};function ht(t,e,n){const s=t.slice();return s[16]=e[n],s[18]=n,s}function pt(t,e,n){const s=t.slice();return s[19]=e[n],s[21]=n,s}function gt(t){let e,n,s,r,o=t[19].name+"";return{c(){e=$("div"),n=$("div"),s=w(o),b(n,"class",r=i(t[19].class)+" svelte-1r1ihr8"),b(e,"class","tag-contain svelte-1r1ihr8")},m(t,r){p(t,e,r),h(e,n),h(n,s)},p(t,e){8&e&&o!==(o=t[19].name+"")&&_(s,o),8&e&&r!==(r=i(t[19].class)+" svelte-1r1ihr8")&&b(n,"class",r)},d(t){t&&g(e)}}}function yt(t){let e,n,s,r,o=t[19].name+"";return{c(){e=$("div"),n=$("div"),s=w(o),b(n,"class",r=i(t[19].class+" curr-font")+" svelte-1r1ihr8"),b(e,"class","tag-contain curr svelte-1r1ihr8")},m(t,r){p(t,e,r),h(e,n),h(n,s)},p(t,e){8&e&&o!==(o=t[19].name+"")&&_(s,o),8&e&&r!==(r=i(t[19].class+" curr-font")+" svelte-1r1ihr8")&&b(n,"class",r)},d(t){t&&g(e)}}}function $t(t){let e,n;function s(t,e){return t[21]===t[4]?yt:gt}let r=s(t),o=r(t);return{c(){e=$("div"),o.c(),n=v(),b(e,"class","tag-area svelte-1r1ihr8")},m(t,s){p(t,e,s),o.m(e,null),h(e,n)},p(t,a){r===(r=s(t))&&o?o.p(t,a):(o.d(1),o=r(t),o&&(o.c(),o.m(e,n)))},d(t){t&&g(e),o.d()}}}function wt(t){let e,n,s,r;e=new ct({props:{questionText:t[0]}});let o=t[1],a=[];for(let e=0;e<o.length;e+=1)a[e]=At(ht(t,o,e));const i=t=>F(a[t],1,1,()=>{a[t]=null});return{c(){V(e.$$.fragment),n=v(),s=$("div");for(let t=0;t<a.length;t+=1)a[t].c();b(s,"class","answers svelte-1r1ihr8")},m(t,o){Z(e,t,o),p(t,n,o),p(t,s,o);for(let t=0;t<a.length;t+=1)a[t].m(s,null);r=!0},p(t,n){const r={};if(1&n&&(r.questionText=t[0]),e.$set(r),514&n){let e;for(o=t[1],e=0;e<o.length;e+=1){const r=ht(t,o,e);a[e]?(a[e].p(r,n),U(a[e],1)):(a[e]=At(r),a[e].c(),U(a[e],1),a[e].m(s,null))}for(Y(),e=o.length;e<a.length;e+=1)i(e);G()}},i(t){if(!r){U(e.$$.fragment,t);for(let t=0;t<o.length;t+=1)U(a[t]);r=!0}},o(t){F(e.$$.fragment,t),a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)F(a[t]);r=!1},d(t){tt(e,t),t&&g(n),t&&g(s),y(a,t)}}}function vt(e){let n,s,r,o,a,i;return{c(){n=$("div"),s=$("span"),s.textContent='You made it to Porcelain Rank! You stand as a beacon of hope\n\t\t\t\tfor adventuring teams across the land! Unfortunately, the fight never truly ends. Click \n\t\t\t\t"Replay" to play again!',r=v(),o=$("button"),o.textContent="Replay",b(s,"class","loss-message"),b(o,"class","next svelte-1r1ihr8"),b(n,"class","message svelte-1r1ihr8")},m(t,l){p(t,n,l),h(n,s),h(n,r),h(n,o),a||(i=x(o,"click",e[13]),a=!0)},p:t,i:t,o:t,d(t){t&&g(n),a=!1,i()}}}function xt(e){let n,s,r,o,a,i,l,c,u,d,f,m=e[3][e[4]].name+"",y=e[2][e[4]]+"";return{c(){n=$("div"),s=$("span"),r=w("Uh oh! You made it to "),o=w(m),a=w(" Rank but then\n\t\t\t\tyou were defeated by "),i=w(y),l=w('. Better luck next time! Click "Replay"\n\t\t\t\tto play again!'),c=v(),u=$("button"),u.textContent="Replay",b(s,"class","loss-message"),b(u,"class","next svelte-1r1ihr8"),b(n,"class","message svelte-1r1ihr8")},m(t,m){p(t,n,m),h(n,s),h(s,r),h(s,o),h(s,a),h(s,i),h(s,l),h(n,c),h(n,u),d||(f=x(u,"click",e[12]),d=!0)},p(t,e){24&e&&m!==(m=t[3][t[4]].name+"")&&_(o,m),20&e&&y!==(y=t[2][t[4]]+"")&&_(i,y)},i:t,o:t,d(t){t&&g(n),d=!1,f()}}}function bt(e){let n,s,r,o,a,i;return{c(){n=$("div"),s=$("div"),s.textContent='Welcome to the game! Press "Start" to continue!',r=v(),o=$("button"),o.textContent="Start",b(s,"class","opener-message"),b(o,"class","next svelte-1r1ihr8"),b(n,"class","message svelte-1r1ihr8")},m(t,l){p(t,n,l),h(n,s),h(n,r),h(n,o),a||(i=x(o,"click",e[11]),a=!0)},p:t,i:t,o:t,d(t){t&&g(n),a=!1,i()}}}function _t(t){let e,n,s,r,a,l,c,u,d;return n=new ft({props:{class:"ans",answerText:t[16],idx:t[18]}}),{c(){e=$("button"),V(n.$$.fragment),s=v(),b(e,"class",r=i(t[16].split(" ").join("-")+" answer")+" svelte-1r1ihr8"),b(e,"id",a=t[18])},m(r,a){p(r,e,a),Z(n,e,null),h(e,s),c=!0,u||(d=x(e,"click",(function(){o(t[9](t[16],t[18]))&&t[9](t[16],t[18]).apply(this,arguments)})),u=!0)},p(s,o){t=s;const a={};2&o&&(a.answerText=t[16]),n.$set(a),(!c||2&o&&r!==(r=i(t[16].split(" ").join("-")+" answer")+" svelte-1r1ihr8"))&&b(e,"class",r)},i(t){c||(U(n.$$.fragment,t),P(()=>{l||(l=Q(e,at,{x:200,duration:500},!0)),l.run(1)}),c=!0)},o(t){F(n.$$.fragment,t),l||(l=Q(e,at,{x:200,duration:500},!1)),l.run(0),c=!1},d(t){t&&g(e),tt(n),t&&l&&l.end(),u=!1,d()}}}function Ct(t){let e,n,s,r,a,l,c,u,d;return n=new ft({props:{class:"ans",answerText:t[16],idx:t[18]}}),{c(){e=$("button"),V(n.$$.fragment),s=v(),b(e,"class",r=i(t[16].split(" ").join("-")+" answer")+" svelte-1r1ihr8"),b(e,"id",a=t[18])},m(r,a){p(r,e,a),Z(n,e,null),h(e,s),c=!0,u||(d=x(e,"click",(function(){o(t[9](t[16],t[18]))&&t[9](t[16],t[18]).apply(this,arguments)})),u=!0)},p(s,o){t=s;const a={};2&o&&(a.answerText=t[16]),n.$set(a),(!c||2&o&&r!==(r=i(t[16].split(" ").join("-")+" answer")+" svelte-1r1ihr8"))&&b(e,"class",r)},i(t){c||(U(n.$$.fragment,t),P(()=>{l||(l=Q(e,at,{x:-200,duration:500},!0)),l.run(1)}),c=!0)},o(t){F(n.$$.fragment,t),l||(l=Q(e,at,{x:-200,duration:500},!1)),l.run(0),c=!1},d(t){t&&g(e),tt(n),t&&l&&l.end(),u=!1,d()}}}function At(t){let e,n,s,r;const o=[Ct,_t],a=[];return e=function(t,e){return t[18]%2==0?0:1}(t),n=a[e]=o[e](t),{c(){n.c(),s=w("")},m(t,n){a[e].m(t,n),p(t,s,n),r=!0},p(t,e){n.p(t,e)},i(t){r||(U(n),r=!0)},o(t){F(n),r=!1},d(t){a[e].d(t),t&&g(s)}}}function qt(n){let s,r,a,i,l,u,d,f,w,x,_,C,A=n[3],q=[];for(let t=0;t<A.length;t+=1)q[t]=$t(pt(n,A,t));const B=[bt,xt,vt,wt],E=[];function D(t,e){return t[5]?t[7]?1:t[6]?2:3:0}return w=D(n),x=E[w]=B[w](n),{c(){s=$("main"),r=$("div"),a=$("img"),l=v(),u=$("div");for(let t=0;t<q.length;t+=1)q[t].c();d=v(),f=$("div"),x.c(),b(a,"class","title svelte-1r1ihr8"),a.src!==(i="images/title-2.png")&&b(a,"src","images/title-2.png"),b(a,"alt","title"),b(u,"class","board svelte-1r1ihr8"),b(r,"class","top svelte-1r1ihr8"),b(f,"class","bottom svelte-1r1ihr8"),b(s,"class","svelte-1r1ihr8")},m(t,e){p(t,s,e),h(s,r),h(r,a),h(r,l),h(r,u);for(let t=0;t<q.length;t+=1)q[t].m(u,null);h(s,d),h(s,f),E[w].m(f,null),C=!0},p(t,[e]){if(24&e){let n;for(A=t[3],n=0;n<A.length;n+=1){const s=pt(t,A,n);q[n]?q[n].p(s,e):(q[n]=$t(s),q[n].c(),q[n].m(u,null))}for(;n<q.length;n+=1)q[n].d(1);q.length=A.length}let n=w;w=D(t),w===n?E[w].p(t,e):(Y(),F(E[n],1,1,()=>{E[n]=null}),G(),x=E[w],x||(x=E[w]=B[w](t),x.c()),U(x,1),x.m(f,null))},i(n){C||(U(x),_||P(()=>{_=function(n,s,r){let a,i,l=s(n,r),u=!1,d=0;function f(){a&&k(n,a)}function h(){const{delay:s=0,duration:r=300,easing:o=e,tick:h=t,css:p}=l||J;p&&(a=T(n,0,1,r,s,o,p,d++)),h(0,1);const g=c()+s,y=g+r;i&&i.abort(),u=!0,P(()=>M(n,!0,"start")),i=m(t=>{if(u){if(t>=y)return h(1,0),M(n,!0,"end"),f(),u=!1;if(t>=g){const e=o((t-g)/r);h(e,1-e)}}return u})}let p=!1;return{start(){p||(k(n),o(l)?(l=l(),K().then(h)):h())},invalidate(){p=!1},end(){u&&(f(),u=!1)}}}(f,Tt,{}),_.start()}),C=!0)},o(t){F(x),C=!1},d(t){t&&g(s),y(q,t),E[w].d()}}}function Tt(t,{delay:e=2e3,duration:n=1e3}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:n,css:t=>"opacity: "+t*s}}function kt(t,e,n){let s=-1,r=!1,o=!1,a=!1,{monsters:i=["slimes","goblins","kobolds","bandits","ogres","sandworms","Githyanki","illithids","a beholder","a dragon"]}=e,{ranks:l=[{name:"Porcelain",class:"tag small"},{name:"Obsidian",class:"tag small"},{name:"Steel",class:"tag small"},{name:"Sapphire",class:"tag small"},{name:"Emerald",class:"tag small"},{name:"Ruby",class:"tag small"},{name:"Bronze",class:"tag small"},{name:"Silver",class:"tag small"},{name:"Gold",class:"tag small"},{name:"Platinum",class:"tag large"}]}=e,c=0,{question:u=""}=e,{correctAnswer:d=""}=e,{answers:f=[]}=e;function m(){const t=mt[c][Math.floor(Math.random()*mt[c].length)];n(0,u=t.question),n(10,d=t.correctAnswer),n(1,f=t.answers)}function h(t,e){t.stopPropagation(),"start"===e?(n(4,s=0),n(5,r=!0),m()):"replay"===e&&(n(7,a=!1),n(6,o=!1),n(5,r=!1),n(4,s=-1),c=0)}return t.$$set=t=>{"monsters"in t&&n(2,i=t.monsters),"ranks"in t&&n(3,l=t.ranks),"question"in t&&n(0,u=t.question),"correctAnswer"in t&&n(10,d=t.correctAnswer),"answers"in t&&n(1,f=t.answers)},[u,f,i,l,s,r,o,a,h,function(t,e){if(t===d)document.getElementById(e).classList.add("green"),n(0,u="Correct!"),setTimeout(()=>{document.getElementById(e).classList.remove("green"),c+=1,n(4,s+=1),c<=9?m():n(6,o=!0)},2e3);else{n(0,u="Wrong!"),document.getElementById(e).classList.add("red");let t=document.getElementsByClassName("answer");for(let e=0;e<t.length;e++)t[e].classList.contains(d.split(" ").join("-"))&&t[e].classList.add("green");setTimeout(()=>{n(7,a=!0)},2e3)}},d,t=>h(t,"start"),t=>h(t,"replay"),t=>h(t,"replay")]}return new class extends st{constructor(t){super(),nt(this,t,kt,qt,a,{monsters:2,ranks:3,question:0,correctAnswer:10,answers:1})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
