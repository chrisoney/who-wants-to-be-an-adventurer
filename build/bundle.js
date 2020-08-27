var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t){return null==t?"":t}const l="undefined"!=typeof window;let c=l?()=>window.performance.now():()=>Date.now(),u=l?t=>requestAnimationFrame(t):t;const d=new Set;function f(t){d.forEach(e=>{e.c(t)||(d.delete(e),e.f())}),0!==d.size&&u(f)}function m(t){let e;return 0===d.size&&u(f),{promise:new Promise(n=>{d.add(e={c:t,f:n})}),abort(){d.delete(e)}}}function h(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function $(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function v(){return y(" ")}function x(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}const A=new Set;let C,q=0;function T(t,e,n,s,r,o,a,i=0){const l=16.666/s;let c="{\n";for(let t=0;t<=1;t+=l){const s=e+(n-e)*o(t);c+=100*t+`%{${a(s,1-s)}}\n`}const u=c+`100% {${a(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${i}`,f=t.ownerDocument;A.add(f);const m=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(w("style")).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[d]||(h[d]=!0,m.insertRule(`@keyframes ${d} ${u}`,m.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?p+", ":""}${d} ${s}ms linear ${r}ms 1 both`,q+=1,d}function k(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-s.length;r&&(t.style.animation=s.join(", "),q-=r,q||u(()=>{q||(A.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),A.clear())}))}function B(t){C=t}const E=[],D=[],S=[],R=[],j=Promise.resolve();let O=!1;function P(t){S.push(t)}let L=!1;const N=new Set;function W(){if(!L){L=!0;do{for(let t=0;t<E.length;t+=1){const e=E[t];B(e),I(e.$$)}for(E.length=0;D.length;)D.pop()();for(let t=0;t<S.length;t+=1){const e=S[t];N.has(e)||(N.add(e),e())}S.length=0}while(E.length);for(;R.length;)R.pop()();O=!1,L=!1,N.clear()}}function I(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}let H;function K(){return H||(H=Promise.resolve(),H.then(()=>{H=null})),H}function M(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const X=new Set;let z;function Y(){z={r:0,c:[],p:z}}function G(){z.r||r(z.c),z=z.p}function U(t,e){t&&t.i&&(X.delete(t),t.i(e))}function F(t,e,n,s){if(t&&t.o){if(X.has(t))return;X.add(t),z.c.push(()=>{X.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const J={duration:0};function Q(n,s,r){let a,i,l=s(n,r),u=!1,d=0;function f(){a&&k(n,a)}function h(){const{delay:s=0,duration:r=300,easing:o=e,tick:h=t,css:p}=l||J;p&&(a=T(n,0,1,r,s,o,p,d++)),h(0,1);const g=c()+s,$=g+r;i&&i.abort(),u=!0,P(()=>M(n,!0,"start")),i=m(t=>{if(u){if(t>=$)return h(1,0),M(n,!0,"end"),f(),u=!1;if(t>=g){const e=o((t-g)/r);h(e,1-e)}}return u})}let p=!1;return{start(){p||(k(n),o(l)?(l=l(),K().then(h)):h())},invalidate(){p=!1},end(){u&&(f(),u=!1)}}}function V(n,s,a,i){let l=s(n,a),u=i?0:1,d=null,f=null,h=null;function p(){h&&k(n,h)}function g(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function $(s){const{delay:o=0,duration:a=300,easing:i=e,tick:$=t,css:w}=l||J,y={start:c()+o,b:s};s||(y.group=z,z.r+=1),d?f=y:(w&&(p(),h=T(n,u,s,a,o,i,w)),s&&$(0,1),d=g(y,a),P(()=>M(n,s,"start")),m(t=>{if(f&&t>f.start&&(d=g(f,a),f=null,M(n,d.b,"start"),w&&(p(),h=T(n,u,d.b,d.duration,0,i,l.css))),d)if(t>=d.end)$(u=d.b,1-u),M(n,d.b,"end"),f||(d.b?p():--d.group.r||r(d.group.c)),d=null;else if(t>=d.start){const e=t-d.start;u=d.a+d.d*i(e/d.duration),$(u,1-u)}return!(!d&&!f)}))}return{run(t){o(l)?K().then(()=>{l=l(),$(t)}):$(t)},end(){p(),d=f=null}}}function Z(t){t&&t.c()}function tt(t,e,s){const{fragment:a,on_mount:i,on_destroy:l,after_update:c}=t.$$;a&&a.m(e,s),P(()=>{const e=i.map(n).filter(o);l?l.push(...e):r(e),t.$$.on_mount=[]}),c.forEach(P)}function et(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function nt(t,e){-1===t.$$.dirty[0]&&(E.push(t),O||(O=!0,j.then(W)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function st(e,n,o,a,i,l,c=[-1]){const u=C;B(e);const d=n.props||{},f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:c,skip_bound:!1};let m=!1;if(f.ctx=o?o(e,d,(t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),m&&nt(e,t)),n}):[],f.update(),m=!0,r(f.before_update),f.fragment=!!a&&a(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(g)}else f.fragment&&f.fragment.c();n.intro&&U(e.$$.fragment),tt(e,n.target,n.anchor),W()}B(u)}class rt{$destroy(){et(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ot(e){let n,s;return{c(){n=w("div"),s=y(e[0]),b(n,"class","question svelte-1dg4i2e")},m(t,e){p(t,n,e),h(n,s)},p(t,[e]){1&e&&_(s,t[0])},i:t,o:t,d(t){t&&g(n)}}}function at(t,e,n){let{questionText:s}=e;return t.$$set=t=>{"questionText"in t&&n(0,s=t.questionText)},[s]}class it extends rt{constructor(t){super(),st(this,t,at,ot,a,{questionText:0})}}function lt(e){let n,s,r,o,a,i,l,c,u,d=e[2][e[1]]+"";return{c(){n=w("div"),s=w("span"),s.textContent="♦",r=v(),o=w("span"),a=y(d),i=y(":"),l=v(),c=w("div"),u=y(e[0]),b(s,"class","diam svelte-1f3aymc"),b(o,"class","answer-letter svelte-1f3aymc"),b(c,"class","answer-text svelte-1f3aymc"),b(n,"class","answer-container svelte-1f3aymc")},m(t,e){p(t,n,e),h(n,s),h(n,r),h(n,o),h(o,a),h(o,i),h(n,l),h(n,c),h(c,u)},p(t,[e]){6&e&&d!==(d=t[2][t[1]]+"")&&_(a,d),1&e&&_(u,t[0])},i:t,o:t,d(t){t&&g(n)}}}function ct(t,e,n){let{answerText:s}=e,{idx:r}=e,{answerKeys:o=["A","B","C","D"]}=e;return t.$$set=t=>{"answerText"in t&&n(0,s=t.answerText),"idx"in t&&n(1,r=t.idx),"answerKeys"in t&&n(2,o=t.answerKeys)},[s,r,o]}class ut extends rt{constructor(t){super(),st(this,t,ct,lt,a,{answerText:0,idx:1,answerKeys:2})}}const dt={0:[{question:"What is the standard abbreviation for your Charisma score?",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]},{question:"What is the standard abbreviation for your Dexterity score?",correctAnswer:"DEX",answers:["CHA","DEX","WIS","CON"]}],1:[{question:"This is question 2",correctAnswer:"B",answers:["A","B","C","D"]},{question:"This is question 2.5",correctAnswer:"C",answers:["A","B","C","D"]}],2:[{question:"This is question 3",correctAnswer:"B",answers:["A","B","C","D"]}],3:[{question:"This is question 4",correctAnswer:"B",answers:["A","B","C","D"]}],4:[{question:"This is question 5",correctAnswer:"B",answers:["A","B","C","D"]}],5:[{question:"This is question 6",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]}],6:[{question:"This is question 7",correctAnswer:"B",answers:["A","B","C","D"]}],7:[{question:"This is question 8",correctAnswer:"B",answers:["A","B","C","D"]}],8:[{question:"This is question 9",correctAnswer:"B",answers:["A","B","C","D"]}],9:[{question:"This is question 10",correctAnswer:"B",answers:["A","B","C","D"]}]};function ft(t){const e=t-1;return e*e*e+1}function mt(t){return--t*t*t*t*t+1}function ht(t,{delay:e=0,duration:n=400,easing:s=ft,x:r=0,y:o=0,opacity:a=0}){const i=getComputedStyle(t),l=+i.opacity,c="none"===i.transform?"":i.transform,u=l*(1-a);return{delay:e,duration:n,easing:s,css:(t,e)=>`\n\t\t\ttransform: ${c} translate(${(1-t)*r}px, ${(1-t)*o}px);\n\t\t\topacity: ${l-u*e}`}}function pt(t,e,n){const s=t.slice();return s[17]=e[n],s[19]=n,s}function gt(t,e,n){const s=t.slice();return s[20]=e[n],s[22]=n,s}function $t(t){let e,n,s,r,o=t[20].name+"";return{c(){e=w("div"),n=w("div"),s=y(o),b(n,"class",r=i(t[20].class)+" svelte-1r1ihr8"),b(e,"class","tag-contain svelte-1r1ihr8")},m(t,r){p(t,e,r),h(e,n),h(n,s)},p(t,e){8&e&&o!==(o=t[20].name+"")&&_(s,o),8&e&&r!==(r=i(t[20].class)+" svelte-1r1ihr8")&&b(n,"class",r)},d(t){t&&g(e)}}}function wt(t){let e,n,s,r,o=t[20].name+"";return{c(){e=w("div"),n=w("div"),s=y(o),b(n,"class",r=i(t[20].class+" curr-font")+" svelte-1r1ihr8"),b(e,"class","tag-contain curr svelte-1r1ihr8")},m(t,r){p(t,e,r),h(e,n),h(n,s)},p(t,e){8&e&&o!==(o=t[20].name+"")&&_(s,o),8&e&&r!==(r=i(t[20].class+" curr-font")+" svelte-1r1ihr8")&&b(n,"class",r)},d(t){t&&g(e)}}}function yt(t){let e,n;function s(t,e){return t[22]===t[4]?wt:$t}let r=s(t),o=r(t);return{c(){e=w("div"),o.c(),n=v(),b(e,"class","tag-area svelte-1r1ihr8")},m(t,s){p(t,e,s),o.m(e,null),h(e,n)},p(t,a){r===(r=s(t))&&o?o.p(t,a):(o.d(1),o=r(t),o&&(o.c(),o.m(e,n)))},d(t){t&&g(e),o.d()}}}function vt(t){let e,n,s,r;e=new it({props:{questionText:t[0]}});let o=t[1],a=[];for(let e=0;e<o.length;e+=1)a[e]=qt(pt(t,o,e));const i=t=>F(a[t],1,1,()=>{a[t]=null});return{c(){Z(e.$$.fragment),n=v(),s=w("div");for(let t=0;t<a.length;t+=1)a[t].c();b(s,"class","answers svelte-1r1ihr8")},m(t,o){tt(e,t,o),p(t,n,o),p(t,s,o);for(let t=0;t<a.length;t+=1)a[t].m(s,null);r=!0},p(t,n){const r={};if(1&n&&(r.questionText=t[0]),e.$set(r),1026&n){let e;for(o=t[1],e=0;e<o.length;e+=1){const r=pt(t,o,e);a[e]?(a[e].p(r,n),U(a[e],1)):(a[e]=qt(r),a[e].c(),U(a[e],1),a[e].m(s,null))}for(Y(),e=o.length;e<a.length;e+=1)i(e);G()}},i(t){if(!r){U(e.$$.fragment,t);for(let t=0;t<o.length;t+=1)U(a[t]);r=!0}},o(t){F(e.$$.fragment,t),a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)F(a[t]);r=!1},d(t){et(e,t),t&&g(n),t&&g(s),$(a,t)}}}function xt(e){let n,s,r,o,a,i,l;return{c(){n=w("div"),s=w("span"),s.textContent='You made it to Porcelain Rank! You stand as a beacon of hope\n\t\t\t\tfor adventuring teams across the land! Unfortunately, the fight never truly ends. Click \n\t\t\t\t"Replay" to play again!',r=v(),o=w("button"),o.textContent="Replay",b(s,"class","loss-message"),b(o,"class","next svelte-1r1ihr8"),b(n,"class","message svelte-1r1ihr8")},m(t,a){p(t,n,a),h(n,s),h(n,r),h(n,o),i||(l=x(o,"click",e[14]),i=!0)},p:t,i(t){a||P(()=>{a=Q(n,e[8],{}),a.start()})},o:t,d(t){t&&g(n),i=!1,l()}}}function bt(e){let n,s,r,o,a,i,l,c,u,d,f,m,$=e[3][e[4]].name+"",A=e[2][e[4]]+"";return{c(){n=w("div"),s=w("span"),r=y("Uh oh! You made it to "),o=y($),a=y(" Rank but then\n\t\t\t\tyou were defeated by "),i=y(A),l=y('. Better luck next time! Click "Replay"\n\t\t\t\tto play again!'),c=v(),u=w("button"),u.textContent="Replay",b(s,"class","loss-message"),b(u,"class","next svelte-1r1ihr8"),b(n,"class","message svelte-1r1ihr8")},m(t,d){p(t,n,d),h(n,s),h(s,r),h(s,o),h(s,a),h(s,i),h(s,l),h(n,c),h(n,u),f||(m=x(u,"click",e[13]),f=!0)},p(t,e){24&e&&$!==($=t[3][t[4]].name+"")&&_(o,$),20&e&&A!==(A=t[2][t[4]]+"")&&_(i,A)},i(t){d||P(()=>{d=Q(n,e[8],{}),d.start()})},o:t,d(t){t&&g(n),f=!1,m()}}}function _t(e){let n,s,r,o,a,i,l;return{c(){n=w("div"),s=w("div"),s.textContent='Welcome to the game! Press "Start" to continue!',r=v(),o=w("button"),o.textContent="Start",b(s,"class","opener-message"),b(o,"class","next svelte-1r1ihr8"),b(n,"class","message svelte-1r1ihr8")},m(t,a){p(t,n,a),h(n,s),h(n,r),h(n,o),i||(l=x(o,"click",e[12]),i=!0)},p:t,i(t){a||P(()=>{a=Q(n,e[8],{}),a.start()})},o:t,d(t){t&&g(n),i=!1,l()}}}function At(t){let e,n,s,r,a,l,c,u,d;return n=new ut({props:{class:"ans",answerText:t[17],idx:t[19]}}),{c(){e=w("button"),Z(n.$$.fragment),s=v(),b(e,"class",r=i(t[17].split(" ").join("-")+" answer")+" svelte-1r1ihr8"),b(e,"id",a=t[19])},m(r,a){p(r,e,a),tt(n,e,null),h(e,s),c=!0,u||(d=x(e,"click",(function(){o(t[10](t[17],t[19]))&&t[10](t[17],t[19]).apply(this,arguments)})),u=!0)},p(s,o){t=s;const a={};2&o&&(a.answerText=t[17]),n.$set(a),(!c||2&o&&r!==(r=i(t[17].split(" ").join("-")+" answer")+" svelte-1r1ihr8"))&&b(e,"class",r)},i(t){c||(U(n.$$.fragment,t),P(()=>{l||(l=V(e,ht,{x:200,duration:500},!0)),l.run(1)}),c=!0)},o(t){F(n.$$.fragment,t),l||(l=V(e,ht,{x:200,duration:500},!1)),l.run(0),c=!1},d(t){t&&g(e),et(n),t&&l&&l.end(),u=!1,d()}}}function Ct(t){let e,n,s,r,a,l,c,u,d;return n=new ut({props:{class:"ans",answerText:t[17],idx:t[19]}}),{c(){e=w("button"),Z(n.$$.fragment),s=v(),b(e,"class",r=i(t[17].split(" ").join("-")+" answer")+" svelte-1r1ihr8"),b(e,"id",a=t[19])},m(r,a){p(r,e,a),tt(n,e,null),h(e,s),c=!0,u||(d=x(e,"click",(function(){o(t[10](t[17],t[19]))&&t[10](t[17],t[19]).apply(this,arguments)})),u=!0)},p(s,o){t=s;const a={};2&o&&(a.answerText=t[17]),n.$set(a),(!c||2&o&&r!==(r=i(t[17].split(" ").join("-")+" answer")+" svelte-1r1ihr8"))&&b(e,"class",r)},i(t){c||(U(n.$$.fragment,t),P(()=>{l||(l=V(e,ht,{x:-200,duration:500},!0)),l.run(1)}),c=!0)},o(t){F(n.$$.fragment,t),l||(l=V(e,ht,{x:-200,duration:500},!1)),l.run(0),c=!1},d(t){t&&g(e),et(n),t&&l&&l.end(),u=!1,d()}}}function qt(t){let e,n,s,r;const o=[Ct,At],a=[];return e=function(t,e){return t[19]%2==0?0:1}(t),n=a[e]=o[e](t),{c(){n.c(),s=y("")},m(t,n){a[e].m(t,n),p(t,s,n),r=!0},p(t,e){n.p(t,e)},i(t){r||(U(n),r=!0)},o(t){F(n),r=!1},d(t){a[e].d(t),t&&g(s)}}}function Tt(t){let e,n,s,r,o,a,i,l,c,u,d,f=t[3],m=[];for(let e=0;e<f.length;e+=1)m[e]=yt(gt(t,f,e));const y=[_t,bt,xt,vt],x=[];function _(t,e){return t[5]?t[7]?1:t[6]?2:3:0}return c=_(t),u=x[c]=y[c](t),{c(){e=w("main"),n=w("div"),s=w("img"),o=v(),a=w("div");for(let t=0;t<m.length;t+=1)m[t].c();i=v(),l=w("div"),u.c(),b(s,"class","title svelte-1r1ihr8"),s.src!==(r="images/title-2.png")&&b(s,"src","images/title-2.png"),b(s,"alt","title"),b(a,"class","board svelte-1r1ihr8"),b(n,"class","top svelte-1r1ihr8"),b(l,"class","bottom svelte-1r1ihr8"),b(e,"class","svelte-1r1ihr8")},m(t,r){p(t,e,r),h(e,n),h(n,s),h(n,o),h(n,a);for(let t=0;t<m.length;t+=1)m[t].m(a,null);h(e,i),h(e,l),x[c].m(l,null),d=!0},p(t,[e]){if(24&e){let n;for(f=t[3],n=0;n<f.length;n+=1){const s=gt(t,f,n);m[n]?m[n].p(s,e):(m[n]=yt(s),m[n].c(),m[n].m(a,null))}for(;n<m.length;n+=1)m[n].d(1);m.length=f.length}let n=c;c=_(t),c===n?x[c].p(t,e):(Y(),F(x[n],1,1,()=>{x[n]=null}),G(),u=x[c],u||(u=x[c]=y[c](t),u.c()),U(u,1),u.m(l,null))},i(t){d||(U(u),d=!0)},o(t){F(u),d=!1},d(t){t&&g(e),$(m,t),x[c].d()}}}function kt(t,e,n){let s=-1,r=!1,o=!1,a=!1,{monsters:i=["slimes","goblins","kobolds","bandits","ogres","sandworms","Githyanki","illithids","a beholder","a dragon"]}=e,{ranks:l=[{name:"Porcelain",class:"tag small"},{name:"Obsidian",class:"tag small"},{name:"Steel",class:"tag small"},{name:"Sapphire",class:"tag small"},{name:"Emerald",class:"tag small"},{name:"Ruby",class:"tag small"},{name:"Bronze",class:"tag small"},{name:"Silver",class:"tag small"},{name:"Gold",class:"tag small"},{name:"Platinum",class:"tag large"}]}=e,c=0,{question:u=""}=e,{correctAnswer:d=""}=e,{answers:f=[]}=e;function m(){const t=dt[c][Math.floor(Math.random()*dt[c].length)];n(0,u=t.question),n(11,d=t.correctAnswer),n(1,f=t.answers)}function h(t,e){t.stopPropagation(),"start"===e?(n(4,s=0),n(5,r=!0),m()):"replay"===e&&(n(7,a=!1),n(6,o=!1),n(5,r=!1),n(4,s=-1),c=0)}return t.$$set=t=>{"monsters"in t&&n(2,i=t.monsters),"ranks"in t&&n(3,l=t.ranks),"question"in t&&n(0,u=t.question),"correctAnswer"in t&&n(11,d=t.correctAnswer),"answers"in t&&n(1,f=t.answers)},[u,f,i,l,s,r,o,a,function(t,{delay:e=1e4,duration:n=1e3}){const s=+getComputedStyle(t).opacity;return{easing:mt,delay:e,duration:n,css:t=>"opacity: "+t*s}},h,function(t,e){if(t===d)document.getElementById(e).classList.add("green"),n(0,u="Correct!"),setTimeout(()=>{document.getElementById(e).classList.remove("green"),c+=1,n(4,s+=1),c<=9?m():n(6,o=!0)},2e3);else{n(0,u="Wrong!"),document.getElementById(e).classList.add("red");let t=document.getElementsByClassName("answer");for(let e=0;e<t.length;e++)t[e].classList.contains(d.split(" ").join("-"))&&t[e].classList.add("green");setTimeout(()=>{n(7,a=!0)},2e3)}},d,t=>h(t,"start"),t=>h(t,"replay"),t=>h(t,"replay")]}return new class extends rt{constructor(t){super(),st(this,t,kt,Tt,a,{monsters:2,ranks:3,question:0,correctAnswer:11,answers:1})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
