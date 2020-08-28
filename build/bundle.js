var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t){return null==t?"":t}const i="undefined"!=typeof window;let c=i?()=>window.performance.now():()=>Date.now(),u=i?t=>requestAnimationFrame(t):t;const f=new Set;function d(t){f.forEach(e=>{e.c(t)||(f.delete(e),e.f())}),0!==f.size&&u(d)}function m(t){let e;return 0===f.size&&u(d),{promise:new Promise(n=>{f.add(e={c:t,f:n})}),abort(){f.delete(e)}}}function h(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function w(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function y(){return $(" ")}function x(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}const _=new Set;let A,q=0;function T(t,e,n,s,r,o,l,a=0){const i=16.666/s;let c="{\n";for(let t=0;t<=1;t+=i){const s=e+(n-e)*o(t);c+=100*t+`%{${l(s,1-s)}}\n`}const u=c+`100% {${l(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${a}`,d=t.ownerDocument;_.add(d);const m=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(v("style")).sheet),h=d.__svelte_rules||(d.__svelte_rules={});h[f]||(h[f]=!0,m.insertRule(`@keyframes ${f} ${u}`,m.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?p+", ":""}${f} ${s}ms linear ${r}ms 1 both`,q+=1,f}function k(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-s.length;r&&(t.style.animation=s.join(", "),q-=r,q||u(()=>{q||(_.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),_.clear())}))}function B(t){A=t}const E=[],D=[],I=[],S=[],L=Promise.resolve();let R=!1;function O(t){I.push(t)}let j=!1;const N=new Set;function P(){if(!j){j=!0;do{for(let t=0;t<E.length;t+=1){const e=E[t];B(e),W(e.$$)}for(E.length=0;D.length;)D.pop()();for(let t=0;t<I.length;t+=1){const e=I[t];N.has(e)||(N.add(e),e())}I.length=0}while(E.length);for(;S.length;)S.pop()();R=!1,j=!1,N.clear()}}function W(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}let H;function K(){return H||(H=Promise.resolve(),H.then(()=>{H=null})),H}function M(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const X=new Set;let Y;function z(){Y={r:0,c:[],p:Y}}function G(){Y.r||r(Y.c),Y=Y.p}function U(t,e){t&&t.i&&(X.delete(t),t.i(e))}function F(t,e,n,s){if(t&&t.o){if(X.has(t))return;X.add(t),Y.c.push(()=>{X.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const J={duration:0};function Q(n,s,r){let l,a,i=s(n,r),u=!1,f=0;function d(){l&&k(n,l)}function h(){const{delay:s=0,duration:r=300,easing:o=e,tick:h=t,css:p}=i||J;p&&(l=T(n,0,1,r,s,o,p,f++)),h(0,1);const g=c()+s,w=g+r;a&&a.abort(),u=!0,O(()=>M(n,!0,"start")),a=m(t=>{if(u){if(t>=w)return h(1,0),M(n,!0,"end"),d(),u=!1;if(t>=g){const e=o((t-g)/r);h(e,1-e)}}return u})}let p=!1;return{start(){p||(k(n),o(i)?(i=i(),K().then(h)):h())},invalidate(){p=!1},end(){u&&(d(),u=!1)}}}function V(n,s,l,a){let i=s(n,l),u=a?0:1,f=null,d=null,h=null;function p(){h&&k(n,h)}function g(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function w(s){const{delay:o=0,duration:l=300,easing:a=e,tick:w=t,css:v}=i||J,$={start:c()+o,b:s};s||($.group=Y,Y.r+=1),f?d=$:(v&&(p(),h=T(n,u,s,l,o,a,v)),s&&w(0,1),f=g($,l),O(()=>M(n,s,"start")),m(t=>{if(d&&t>d.start&&(f=g(d,l),d=null,M(n,f.b,"start"),v&&(p(),h=T(n,u,f.b,f.duration,0,a,i.css))),f)if(t>=f.end)w(u=f.b,1-u),M(n,f.b,"end"),d||(f.b?p():--f.group.r||r(f.group.c)),f=null;else if(t>=f.start){const e=t-f.start;u=f.a+f.d*a(e/f.duration),w(u,1-u)}return!(!f&&!d)}))}return{run(t){o(i)?K().then(()=>{i=i(),w(t)}):w(t)},end(){p(),f=d=null}}}function Z(t){t&&t.c()}function tt(t,e,s){const{fragment:l,on_mount:a,on_destroy:i,after_update:c}=t.$$;l&&l.m(e,s),O(()=>{const e=a.map(n).filter(o);i?i.push(...e):r(e),t.$$.on_mount=[]}),c.forEach(O)}function et(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function nt(t,e){-1===t.$$.dirty[0]&&(E.push(t),R||(R=!0,L.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function st(e,n,o,l,a,i,c=[-1]){const u=A;B(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:c,skip_bound:!1};let m=!1;if(d.ctx=o?o(e,f,(t,n,...s)=>{const r=s.length?s[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),m&&nt(e,t)),n}):[],d.update(),m=!0,r(d.before_update),d.fragment=!!l&&l(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(g)}else d.fragment&&d.fragment.c();n.intro&&U(e.$$.fragment),tt(e,n.target,n.anchor),P()}B(u)}class rt{$destroy(){et(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ot(t){const e=t-1;return e*e*e+1}function lt(t){return--t*t*t*t*t+1}function at(e){let n,s;return{c(){n=v("div"),s=$(e[0]),b(n,"class","question svelte-1dg4i2e")},m(t,e){p(t,n,e),h(n,s)},p(t,[e]){1&e&&C(s,t[0])},i:t,o:t,d(t){t&&g(n)}}}function it(t,e,n){let{questionText:s}=e;return t.$$set=t=>{"questionText"in t&&n(0,s=t.questionText)},[s]}class ct extends rt{constructor(t){super(),st(this,t,it,at,l,{questionText:0})}}function ut(e){let n,s,r,o,l,a,i,c,u,f=e[2][e[1]]+"";return{c(){n=v("div"),s=v("span"),s.textContent="♦",r=y(),o=v("span"),l=$(f),a=$(":"),i=y(),c=v("div"),u=$(e[0]),b(s,"class","diam svelte-1f3aymc"),b(o,"class","answer-letter svelte-1f3aymc"),b(c,"class","answer-text svelte-1f3aymc"),b(n,"class","answer-container svelte-1f3aymc")},m(t,e){p(t,n,e),h(n,s),h(n,r),h(n,o),h(o,l),h(o,a),h(n,i),h(n,c),h(c,u)},p(t,[e]){6&e&&f!==(f=t[2][t[1]]+"")&&C(l,f),1&e&&C(u,t[0])},i:t,o:t,d(t){t&&g(n)}}}function ft(t,e,n){let{answerText:s}=e,{idx:r}=e,{answerKeys:o=["A","B","C","D"]}=e;return t.$$set=t=>{"answerText"in t&&n(0,s=t.answerText),"idx"in t&&n(1,r=t.idx),"answerKeys"in t&&n(2,o=t.answerKeys)},[s,r,o]}class dt extends rt{constructor(t){super(),st(this,t,ft,ut,l,{answerText:0,idx:1,answerKeys:2})}}function mt(e){let n,s,r;return{c(){n=v("div"),s=v("span"),r=$(e[0]),b(s,"class","timer-num svelte-132bh6y"),b(n,"class","timer-container")},m(t,e){p(t,n,e),h(n,s),h(s,r)},p(t,[e]){1&e&&C(r,t[0])},i:t,o:t,d(t){t&&g(n)}}}function ht(t,e,n){let{timeLeft:s}=e;return t.$$set=t=>{"timeLeft"in t&&n(0,s=t.timeLeft)},[s]}class pt extends rt{constructor(t){super(),st(this,t,ht,mt,l,{timeLeft:0})}}const gt={0:[{question:"What is the standard abbreviation for your Charisma score?",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]},{question:"What is the standard abbreviation for your Dexterity score?",correctAnswer:"DEX",answers:["CHA","DEX","WIS","CON"]}],1:[{question:"This is question 2",correctAnswer:"B",answers:["A","B","C","D"]},{question:"This is question 2.5",correctAnswer:"C",answers:["A","B","C","D"]}],2:[{question:"This is question 3",correctAnswer:"B",answers:["A","B","C","D"]}],3:[{question:"This is question 4",correctAnswer:"B",answers:["A","B","C","D"]}],4:[{question:"This is question 5",correctAnswer:"B",answers:["A","B","C","D"]}],5:[{question:"This is question 6",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]}],6:[{question:"This is question 7",correctAnswer:"B",answers:["A","B","C","D"]}],7:[{question:"This is question 8",correctAnswer:"B",answers:["A","B","C","D"]}],8:[{question:"This is question 9",correctAnswer:"B",answers:["A","B","C","D"]}],9:[{question:"This is question 10",correctAnswer:"B",answers:["A","B","C","D"]}]};function wt(t,{delay:e=0,duration:n=400,easing:s=ot,x:r=0,y:o=0,opacity:l=0}){const a=getComputedStyle(t),i=+a.opacity,c="none"===a.transform?"":a.transform,u=i*(1-l);return{delay:e,duration:n,easing:s,css:(t,e)=>`\n\t\t\ttransform: ${c} translate(${(1-t)*r}px, ${(1-t)*o}px);\n\t\t\topacity: ${i-u*e}`}}function vt(t,e,n){const s=t.slice();return s[29]=e[n],s[31]=n,s}function $t(t,e,n){const s=t.slice();return s[32]=e[n],s[34]=n,s}function yt(t){let e,n,s,r,o=t[32].name+"";return{c(){e=v("div"),n=v("div"),s=$(o),b(n,"class",r=a(t[32].class)+" svelte-14whl80"),b(e,"class","tag-contain svelte-14whl80")},m(t,r){p(t,e,r),h(e,n),h(n,s)},p(t,e){16&e[0]&&o!==(o=t[32].name+"")&&C(s,o),16&e[0]&&r!==(r=a(t[32].class)+" svelte-14whl80")&&b(n,"class",r)},d(t){t&&g(e)}}}function xt(t){let e,n,s,r,o=t[32].name+"";return{c(){e=v("div"),n=v("div"),s=$(o),b(n,"class",r=a(t[32].class+" curr-font")+" svelte-14whl80"),b(e,"class","tag-contain curr svelte-14whl80")},m(t,r){p(t,e,r),h(e,n),h(n,s)},p(t,e){16&e[0]&&o!==(o=t[32].name+"")&&C(s,o),16&e[0]&&r!==(r=a(t[32].class+" curr-font")+" svelte-14whl80")&&b(n,"class",r)},d(t){t&&g(e)}}}function bt(t){let e,n;function s(t,e){return t[34]===t[5]?xt:yt}let r=s(t),o=r(t);return{c(){e=v("div"),o.c(),n=y(),b(e,"class","tag-area svelte-14whl80")},m(t,s){p(t,e,s),o.m(e,null),h(e,n)},p(t,l){r===(r=s(t))&&o?o.p(t,l):(o.d(1),o=r(t),o&&(o.c(),o.m(e,n)))},d(t){t&&g(e),o.d()}}}function Ct(t){let e,n,s,r,o;const l=[Bt,kt],a=[];function i(t,e){return t[2]?0:1}e=i(t),n=a[e]=l[e](t);let c=t[1],u=[];for(let e=0;e<c.length;e+=1)u[e]=It(vt(t,c,e));const f=t=>F(u[t],1,1,()=>{u[t]=null});return{c(){n.c(),s=y(),r=v("div");for(let t=0;t<u.length;t+=1)u[t].c();b(r,"class","answers svelte-14whl80")},m(t,n){a[e].m(t,n),p(t,s,n),p(t,r,n);for(let t=0;t<u.length;t+=1)u[t].m(r,null);o=!0},p(t,o){let d=e;if(e=i(t),e===d?a[e].p(t,o):(z(),F(a[d],1,1,()=>{a[d]=null}),G(),n=a[e],n||(n=a[e]=l[e](t),n.c()),U(n,1),n.m(s.parentNode,s)),4098&o[0]){let e;for(c=t[1],e=0;e<c.length;e+=1){const n=vt(t,c,e);u[e]?(u[e].p(n,o),U(u[e],1)):(u[e]=It(n),u[e].c(),U(u[e],1),u[e].m(r,null))}for(z(),e=c.length;e<u.length;e+=1)f(e);G()}},i(t){if(!o){U(n);for(let t=0;t<c.length;t+=1)U(u[t]);o=!0}},o(t){F(n),u=u.filter(Boolean);for(let t=0;t<u.length;t+=1)F(u[t]);o=!1},d(t){a[e].d(t),t&&g(s),t&&g(r),w(u,t)}}}function _t(e){let n,s,r,o,l,a,i;return{c(){n=v("div"),s=v("span"),s.textContent='Oops, you ran out of time! Click \n\t\t\t\t"Replay" to play again!',r=y(),o=v("button"),o.textContent="Replay",b(s,"class","loss-message"),b(o,"class","next svelte-14whl80"),b(n,"class","message svelte-14whl80")},m(t,l){p(t,n,l),h(n,s),h(n,r),h(n,o),a||(i=x(o,"click",e[20]),a=!0)},p:t,i(t){l||O(()=>{l=Q(n,e[10],{}),l.start()})},o:t,d(t){t&&g(n),a=!1,i()}}}function At(e){let n,s,r,o,l,a,i;return{c(){n=v("div"),s=v("span"),s.textContent='You made it to Porcelain Rank! You stand as a beacon of hope\n\t\t\t\tfor adventuring teams across the land! Unfortunately, the fight never truly ends. Click \n\t\t\t\t"Replay" to play again!',r=y(),o=v("button"),o.textContent="Replay",b(s,"class","loss-message"),b(o,"class","next svelte-14whl80"),b(n,"class","message svelte-14whl80")},m(t,l){p(t,n,l),h(n,s),h(n,r),h(n,o),a||(i=x(o,"click",e[19]),a=!0)},p:t,i(t){l||O(()=>{l=Q(n,e[10],{}),l.start()})},o:t,d(t){t&&g(n),a=!1,i()}}}function qt(e){let n,s,r,o,l,a,i,c,u,f,d,m,w=e[4][e[5]].name+"",_=e[3][e[5]]+"";return{c(){n=v("div"),s=v("span"),r=$("Uh oh! You made it to "),o=$(w),l=$(" Rank but then\n\t\t\t\tyou were defeated by "),a=$(_),i=$('. Better luck next time! Click "Replay"\n\t\t\t\tto play again!'),c=y(),u=v("button"),u.textContent="Replay",b(s,"class","loss-message"),b(u,"class","next svelte-14whl80"),b(n,"class","message svelte-14whl80")},m(t,f){p(t,n,f),h(n,s),h(s,r),h(s,o),h(s,l),h(s,a),h(s,i),h(n,c),h(n,u),d||(m=x(u,"click",e[18]),d=!0)},p(t,e){48&e[0]&&w!==(w=t[4][t[5]].name+"")&&C(o,w),40&e[0]&&_!==(_=t[3][t[5]]+"")&&C(a,_)},i(t){f||O(()=>{f=Q(n,e[10],{}),f.start()})},o:t,d(t){t&&g(n),d=!1,m()}}}function Tt(e){let n,s,r,o,l,a,i;return{c(){n=v("div"),s=v("div"),s.textContent='Welcome to the game! Press "Start" to continue!',r=y(),o=v("button"),o.textContent="Start",b(s,"class","opener-message"),b(o,"class","next svelte-14whl80"),b(n,"class","message svelte-14whl80")},m(t,l){p(t,n,l),h(n,s),h(n,r),h(n,o),a||(i=x(o,"click",e[17]),a=!0)},p:t,i(t){l||O(()=>{l=Q(n,e[10],{}),l.start()})},o:t,d(t){t&&g(n),a=!1,i()}}}function kt(t){let e,n;return e=new ct({props:{questionText:t[0]}}),{c(){Z(e.$$.fragment)},m(t,s){tt(e,t,s),n=!0},p(t,n){const s={};1&n[0]&&(s.questionText=t[0]),e.$set(s)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}function Bt(e){let n,s,o,l,a,i,c,u,f;return{c(){n=v("div"),s=v("span"),s.textContent="Is that your final answer?",o=y(),l=v("div"),a=v("button"),a.textContent="Yes",i=y(),c=v("button"),c.textContent="No",b(s,"class","final-answer"),b(a,"class","next svelte-14whl80"),b(c,"class","next red svelte-14whl80"),b(l,"class","final-buttons"),b(n,"class","message svelte-14whl80")},m(t,r){p(t,n,r),h(n,s),h(n,o),h(n,l),h(l,a),h(l,i),h(l,c),u||(f=[x(a,"click",e[21]),x(c,"click",e[22])],u=!0)},p:t,i:t,o:t,d(t){t&&g(n),u=!1,r(f)}}}function Et(t){let e,n,s,r,o,l,i,c,u;function f(...e){return t[24](t[29],t[31],...e)}return n=new dt({props:{class:"ans",answerText:t[29],idx:t[31]}}),{c(){e=v("button"),Z(n.$$.fragment),s=y(),b(e,"class",r=a(t[29].split(" ").join("-")+" answer")+" svelte-14whl80"),b(e,"id",o=t[31])},m(t,r){p(t,e,r),tt(n,e,null),h(e,s),i=!0,c||(u=x(e,"click",f),c=!0)},p(s,o){t=s;const l={};2&o[0]&&(l.answerText=t[29]),n.$set(l),(!i||2&o[0]&&r!==(r=a(t[29].split(" ").join("-")+" answer")+" svelte-14whl80"))&&b(e,"class",r)},i(t){i||(U(n.$$.fragment,t),O(()=>{l||(l=V(e,wt,{x:200,duration:500},!0)),l.run(1)}),i=!0)},o(t){F(n.$$.fragment,t),l||(l=V(e,wt,{x:200,duration:500},!1)),l.run(0),i=!1},d(t){t&&g(e),et(n),t&&l&&l.end(),c=!1,u()}}}function Dt(t){let e,n,s,r,o,l,i,c,u;function f(...e){return t[23](t[29],t[31],...e)}return n=new dt({props:{class:"ans",answerText:t[29],idx:t[31]}}),{c(){e=v("button"),Z(n.$$.fragment),s=y(),b(e,"class",r=a(t[29].split(" ").join("-")+" answer")+" svelte-14whl80"),b(e,"id",o=t[31])},m(t,r){p(t,e,r),tt(n,e,null),h(e,s),i=!0,c||(u=x(e,"click",f),c=!0)},p(s,o){t=s;const l={};2&o[0]&&(l.answerText=t[29]),n.$set(l),(!i||2&o[0]&&r!==(r=a(t[29].split(" ").join("-")+" answer")+" svelte-14whl80"))&&b(e,"class",r)},i(t){i||(U(n.$$.fragment,t),O(()=>{l||(l=V(e,wt,{x:-200,duration:500},!0)),l.run(1)}),i=!0)},o(t){F(n.$$.fragment,t),l||(l=V(e,wt,{x:-200,duration:500},!1)),l.run(0),i=!1},d(t){t&&g(e),et(n),t&&l&&l.end(),c=!1,u()}}}function It(t){let e,n,s,r;const o=[Dt,Et],l=[];return e=function(t,e){return t[31]%2==0?0:1}(t),n=l[e]=o[e](t),{c(){n.c(),s=$("")},m(t,n){l[e].m(t,n),p(t,s,n),r=!0},p(t,e){n.p(t,e)},i(t){r||(U(n),r=!0)},o(t){F(n),r=!1},d(t){l[e].d(t),t&&g(s)}}}function St(t){let e,n,s,r,o,l,a,i,c,u,f,d,m,$;a=new pt({props:{timeLeft:t[9]}});let x=t[4],C=[];for(let e=0;e<x.length;e+=1)C[e]=bt($t(t,x,e));const _=[Tt,qt,At,_t,Ct],A=[];function q(t,e){return t[6]?t[8]?1:t[7]?2:0===t[9]?3:4:0}return d=q(t),m=A[d]=_[d](t),{c(){e=v("main"),n=v("div"),s=v("div"),r=v("img"),l=y(),Z(a.$$.fragment),i=y(),c=v("div");for(let t=0;t<C.length;t+=1)C[t].c();u=y(),f=v("div"),m.c(),b(r,"class","title svelte-14whl80"),r.src!==(o="images/title-2.png")&&b(r,"src","images/title-2.png"),b(r,"alt","title"),b(s,"class","top-left"),b(c,"class","board svelte-14whl80"),b(n,"class","top svelte-14whl80"),b(f,"class","bottom svelte-14whl80"),b(e,"class","svelte-14whl80")},m(t,o){p(t,e,o),h(e,n),h(n,s),h(s,r),h(s,l),tt(a,s,null),h(n,i),h(n,c);for(let t=0;t<C.length;t+=1)C[t].m(c,null);h(e,u),h(e,f),A[d].m(f,null),$=!0},p(t,e){const n={};if(512&e[0]&&(n.timeLeft=t[9]),a.$set(n),48&e[0]){let n;for(x=t[4],n=0;n<x.length;n+=1){const s=$t(t,x,n);C[n]?C[n].p(s,e):(C[n]=bt(s),C[n].c(),C[n].m(c,null))}for(;n<C.length;n+=1)C[n].d(1);C.length=x.length}let s=d;d=q(t),d===s?A[d].p(t,e):(z(),F(A[s],1,1,()=>{A[s]=null}),G(),m=A[d],m||(m=A[d]=_[d](t),m.c()),U(m,1),m.m(f,null))},i(t){$||(U(a.$$.fragment,t),U(m),$=!0)},o(t){F(a.$$.fragment,t),F(m),$=!1},d(t){t&&g(e),et(a),w(C,t),A[d].d()}}}function Lt(t,e,n){let s=-1,r=!1,o=!1,l=!1,{monsters:a=["slimes","goblins","kobolds","bandits","ogres","sandworms","Githyanki","illithids","a beholder","a dragon"]}=e,{ranks:i=[{name:"Porcelain",class:"tag small"},{name:"Obsidian",class:"tag small"},{name:"Steel",class:"tag small"},{name:"Sapphire",class:"tag small"},{name:"Emerald",class:"tag small"},{name:"Ruby",class:"tag small"},{name:"Bronze",class:"tag small"},{name:"Silver",class:"tag small"},{name:"Gold",class:"tag small"},{name:"Platinum",class:"tag large"}]}=e,c=0,{question:u=""}=e,{correctAnswer:f=""}=e,{answers:d=[]}=e;function m(){const t=gt[c][Math.floor(Math.random()*gt[c].length)];n(0,u=t.question),n(14,f=t.correctAnswer),n(1,d=t.answers)}function h(t,e){t.stopPropagation(),"start"===e?(n(5,s=0),n(6,r=!0),n(9,y=30),m(),x()):"replay"===e&&(n(8,l=!1),n(7,o=!1),n(6,r=!1),n(5,s=-1),c=0)}let{choiceText:p=""}=e,{choiceIdx:g=0}=e,{final:w=!1}=e;function v(t,e,s){t.preventDefault(),n(15,p=e),n(16,g=s),n(2,w=!0)}function $(t,e){clearInterval(myInterval),t.preventDefault(),n(2,w=!1),e?function(t,e){if(t===f)document.getElementById(e).classList.add("green"),n(0,u="Correct!"),setTimeout(()=>{document.getElementById(e).classList.remove("green"),c+=1,n(5,s+=1),c<=9?m():n(7,o=!0)},2e3);else{n(0,u="Wrong!"),document.getElementById(e).classList.add("red");let t=document.getElementsByClassName("answer");for(let e=0;e<t.length;e++)t[e].classList.contains(f.split(" ").join("-"))&&t[e].classList.add("green");setTimeout(()=>{n(8,l=!0)},2e3)}}(p,g):x()}let y=30;function x(){setInterval(()=>{n(9,y-=1)},1e3)}return t.$$set=t=>{"monsters"in t&&n(3,a=t.monsters),"ranks"in t&&n(4,i=t.ranks),"question"in t&&n(0,u=t.question),"correctAnswer"in t&&n(14,f=t.correctAnswer),"answers"in t&&n(1,d=t.answers),"choiceText"in t&&n(15,p=t.choiceText),"choiceIdx"in t&&n(16,g=t.choiceIdx),"final"in t&&n(2,w=t.final)},[u,d,w,a,i,s,r,o,l,y,function(t,{delay:e=600,duration:n=1e3}){const s=+getComputedStyle(t).opacity;return{easing:lt,delay:e,duration:n,css:t=>"opacity: "+t*s}},h,v,$,f,p,g,t=>h(t,"start"),t=>h(t,"replay"),t=>h(t,"replay"),t=>h(t,"time"),t=>$(t,!0),t=>$(t,!1),(t,e,n)=>v(n,t,e),(t,e,n)=>v(n,t,e)]}return new class extends rt{constructor(t){super(),st(this,t,Lt,St,l,{monsters:3,ranks:4,question:0,correctAnswer:14,answers:1,choiceText:15,choiceIdx:16,final:2},[-1,-1])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
