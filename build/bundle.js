var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t){return null==t?"":t}const l="undefined"!=typeof window;let c=l?()=>window.performance.now():()=>Date.now(),u=l?t=>requestAnimationFrame(t):t;const d=new Set;function f(t){d.forEach(e=>{e.c(t)||(d.delete(e),e.f())}),0!==d.size&&u(f)}function m(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function g(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function w(){return $(" ")}function v(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}const _=new Set;let C,A=0;function q(t,e,n,s,r,o,a,i=0){const l=16.666/s;let c="{\n";for(let t=0;t<=1;t+=l){const s=e+(n-e)*o(t);c+=100*t+`%{${a(s,1-s)}}\n`}const u=c+`100% {${a(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${i}`,f=t.ownerDocument;_.add(f);const m=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(y("style")).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[d]||(h[d]=!0,m.insertRule(`@keyframes ${d} ${u}`,m.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?p+", ":""}${d} ${s}ms linear ${r}ms 1 both`,A+=1,d}function T(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-s.length;r&&(t.style.animation=s.join(", "),A-=r,A||u(()=>{A||(_.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),_.clear())}))}function k(t){C=t}const B=[],E=[],D=[],S=[],R=Promise.resolve();let j=!1;function O(t){D.push(t)}let P=!1;const L=new Set;function N(){if(!P){P=!0;do{for(let t=0;t<B.length;t+=1){const e=B[t];k(e),W(e.$$)}for(B.length=0;E.length;)E.pop()();for(let t=0;t<D.length;t+=1){const e=D[t];L.has(e)||(L.add(e),e())}D.length=0}while(B.length);for(;S.length;)S.pop()();j=!1,P=!1,L.clear()}}function W(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}let I;function H(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const K=new Set;let M;function X(){M={r:0,c:[],p:M}}function z(){M.r||r(M.c),M=M.p}function Y(t,e){t&&t.i&&(K.delete(t),t.i(e))}function G(t,e,n,s){if(t&&t.o){if(K.has(t))return;K.add(t),M.c.push(()=>{K.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const U={duration:0};function F(n,s,a,i){let l=s(n,a),m=i?0:1,h=null,p=null,g=null;function y(){g&&T(n,g)}function $(t,e){const n=t.b-m;return e*=Math.abs(n),{a:m,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function w(s){const{delay:o=0,duration:a=300,easing:i=e,tick:w=t,css:v}=l||U,x={start:c()+o,b:s};s||(x.group=M,M.r+=1),h?p=x:(v&&(y(),g=q(n,m,s,a,o,i,v)),s&&w(0,1),h=$(x,a),O(()=>H(n,s,"start")),function(t){let e;0===d.size&&u(f),new Promise(n=>{d.add(e={c:t,f:n})})}(t=>{if(p&&t>p.start&&(h=$(p,a),p=null,H(n,h.b,"start"),v&&(y(),g=q(n,m,h.b,h.duration,0,i,l.css))),h)if(t>=h.end)w(m=h.b,1-m),H(n,h.b,"end"),p||(h.b?y():--h.group.r||r(h.group.c)),h=null;else if(t>=h.start){const e=t-h.start;m=h.a+h.d*i(e/h.duration),w(m,1-m)}return!(!h&&!p)}))}return{run(t){o(l)?(I||(I=Promise.resolve(),I.then(()=>{I=null})),I).then(()=>{l=l(),w(t)}):w(t)},end(){y(),h=p=null}}}function J(t){t&&t.c()}function Q(t,e,s){const{fragment:a,on_mount:i,on_destroy:l,after_update:c}=t.$$;a&&a.m(e,s),O(()=>{const e=i.map(n).filter(o);l?l.push(...e):r(e),t.$$.on_mount=[]}),c.forEach(O)}function V(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e){-1===t.$$.dirty[0]&&(B.push(t),j||(j=!0,R.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(e,n,o,a,i,l,c=[-1]){const u=C;k(e);const d=n.props||{},f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:c,skip_bound:!1};let m=!1;if(f.ctx=o?o(e,d,(t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),m&&Z(e,t)),n}):[],f.update(),m=!0,r(f.before_update),f.fragment=!!a&&a(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(p)}else f.fragment&&f.fragment.c();n.intro&&Y(e.$$.fragment),Q(e,n.target,n.anchor),N()}k(u)}class et{$destroy(){V(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function nt(t){const e=t-1;return e*e*e+1}function st(t,{delay:n=0,duration:s=400,easing:r=e}){const o=+getComputedStyle(t).opacity;return{delay:n,duration:s,easing:r,css:t=>"opacity: "+t*o}}function rt(t,{delay:e=0,duration:n=400,easing:s=nt,x:r=0,y:o=0,opacity:a=0}){const i=getComputedStyle(t),l=+i.opacity,c="none"===i.transform?"":i.transform,u=l*(1-a);return{delay:e,duration:n,easing:s,css:(t,e)=>`\n\t\t\ttransform: ${c} translate(${(1-t)*r}px, ${(1-t)*o}px);\n\t\t\topacity: ${l-u*e}`}}function ot(t){let e,n,s,r;return{c(){e=y("div"),n=$(t[0]),x(e,"class","question svelte-1dg4i2e")},m(t,s){h(t,e,s),m(e,n),r=!0},p(t,[e]){(!r||1&e)&&b(n,t[0])},i(t){r||(O(()=>{s||(s=F(e,st,{},!0)),s.run(1)}),r=!0)},o(t){s||(s=F(e,st,{},!1)),s.run(0),r=!1},d(t){t&&p(e),t&&s&&s.end()}}}function at(t,e,n){let{questionText:s}=e;return t.$$set=t=>{"questionText"in t&&n(0,s=t.questionText)},[s]}class it extends et{constructor(t){super(),tt(this,t,at,ot,a,{questionText:0})}}function lt(e){let n,s,r,o,a,i,l,c,u,d=e[2][e[1]]+"";return{c(){n=y("div"),s=y("span"),s.textContent="♦",r=w(),o=y("span"),a=$(d),i=$(":"),l=w(),c=y("div"),u=$(e[0]),x(s,"class","diam svelte-1f3aymc"),x(o,"class","answer-letter svelte-1f3aymc"),x(c,"class","answer-text svelte-1f3aymc"),x(n,"class","answer-container svelte-1f3aymc")},m(t,e){h(t,n,e),m(n,s),m(n,r),m(n,o),m(o,a),m(o,i),m(n,l),m(n,c),m(c,u)},p(t,[e]){6&e&&d!==(d=t[2][t[1]]+"")&&b(a,d),1&e&&b(u,t[0])},i:t,o:t,d(t){t&&p(n)}}}function ct(t,e,n){let{answerText:s}=e,{idx:r}=e,{answerKeys:o=["A","B","C","D"]}=e;return t.$$set=t=>{"answerText"in t&&n(0,s=t.answerText),"idx"in t&&n(1,r=t.idx),"answerKeys"in t&&n(2,o=t.answerKeys)},[s,r,o]}class ut extends et{constructor(t){super(),tt(this,t,ct,lt,a,{answerText:0,idx:1,answerKeys:2})}}const dt={0:[{question:"What is the standard abbreviation for your Charisma score?",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]},{question:"What is the standard abbreviation for your Dexterity score?",correctAnswer:"DEX",answers:["CHA","DEX","WIS","CON"]}],1:[{question:"This is question 2",correctAnswer:"B",answers:["A","B","C","D"]},{question:"This is question 2.5",correctAnswer:"C",answers:["A","B","C","D"]}],2:[{question:"This is question 3",correctAnswer:"B",answers:["A","B","C","D"]}],3:[{question:"This is question 4",correctAnswer:"B",answers:["A","B","C","D"]}],4:[{question:"This is question 5",correctAnswer:"B",answers:["A","B","C","D"]}],5:[{question:"This is question 6",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]}],6:[{question:"This is question 7",correctAnswer:"B",answers:["A","B","C","D"]}],7:[{question:"This is question 8",correctAnswer:"B",answers:["A","B","C","D"]}],8:[{question:"This is question 9",correctAnswer:"B",answers:["A","B","C","D"]}],9:[{question:"This is question 10",correctAnswer:"B",answers:["A","B","C","D"]}]};function ft(t,e,n){const s=t.slice();return s[16]=e[n],s[18]=n,s}function mt(t,e,n){const s=t.slice();return s[19]=e[n],s[21]=n,s}function ht(t){let e,n,s,r,o=t[19].name+"";return{c(){e=y("div"),n=y("div"),s=$(o),x(n,"class",r=i(t[19].class)+" svelte-1r1ihr8"),x(e,"class","tag-contain svelte-1r1ihr8")},m(t,r){h(t,e,r),m(e,n),m(n,s)},p(t,e){8&e&&o!==(o=t[19].name+"")&&b(s,o),8&e&&r!==(r=i(t[19].class)+" svelte-1r1ihr8")&&x(n,"class",r)},d(t){t&&p(e)}}}function pt(t){let e,n,s,r,o=t[19].name+"";return{c(){e=y("div"),n=y("div"),s=$(o),x(n,"class",r=i(t[19].class+" curr-font")+" svelte-1r1ihr8"),x(e,"class","tag-contain curr svelte-1r1ihr8")},m(t,r){h(t,e,r),m(e,n),m(n,s)},p(t,e){8&e&&o!==(o=t[19].name+"")&&b(s,o),8&e&&r!==(r=i(t[19].class+" curr-font")+" svelte-1r1ihr8")&&x(n,"class",r)},d(t){t&&p(e)}}}function gt(t){let e,n;function s(t,e){return t[21]===t[4]?pt:ht}let r=s(t),o=r(t);return{c(){e=y("div"),o.c(),n=w(),x(e,"class","tag-area svelte-1r1ihr8")},m(t,s){h(t,e,s),o.m(e,null),m(e,n)},p(t,a){r===(r=s(t))&&o?o.p(t,a):(o.d(1),o=r(t),o&&(o.c(),o.m(e,n)))},d(t){t&&p(e),o.d()}}}function yt(t){let e,n,s,r;e=new it({props:{questionText:t[0]}});let o=t[1],a=[];for(let e=0;e<o.length;e+=1)a[e]=_t(ft(t,o,e));const i=t=>G(a[t],1,1,()=>{a[t]=null});return{c(){J(e.$$.fragment),n=w(),s=y("div");for(let t=0;t<a.length;t+=1)a[t].c();x(s,"class","answers svelte-1r1ihr8")},m(t,o){Q(e,t,o),h(t,n,o),h(t,s,o);for(let t=0;t<a.length;t+=1)a[t].m(s,null);r=!0},p(t,n){const r={};if(1&n&&(r.questionText=t[0]),e.$set(r),514&n){let e;for(o=t[1],e=0;e<o.length;e+=1){const r=ft(t,o,e);a[e]?(a[e].p(r,n),Y(a[e],1)):(a[e]=_t(r),a[e].c(),Y(a[e],1),a[e].m(s,null))}for(X(),e=o.length;e<a.length;e+=1)i(e);z()}},i(t){if(!r){Y(e.$$.fragment,t);for(let t=0;t<o.length;t+=1)Y(a[t]);r=!0}},o(t){G(e.$$.fragment,t),a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)G(a[t]);r=!1},d(t){V(e,t),t&&p(n),t&&p(s),g(a,t)}}}function $t(e){let n,s,r,o,a,i;return{c(){n=y("div"),s=y("span"),s.textContent='You made it to Porcelain Rank! You stand as a beacon of hope\n\t\t\t\tfor adventuring teams across the land! Unfortunately, the fight never truly ends. Click \n\t\t\t\t"Replay" to play again!',r=w(),o=y("button"),o.textContent="Replay",x(s,"class","loss-message"),x(o,"class","next svelte-1r1ihr8"),x(n,"class","message svelte-1r1ihr8")},m(t,l){h(t,n,l),m(n,s),m(n,r),m(n,o),a||(i=v(o,"click",e[13]),a=!0)},p:t,i:t,o:t,d(t){t&&p(n),a=!1,i()}}}function wt(e){let n,s,r,o,a,i,l,c,u,d,f,g=e[3][e[4]].name+"",_=e[2][e[4]]+"";return{c(){n=y("div"),s=y("span"),r=$("Uh oh! You made it to "),o=$(g),a=$(" Rank but then\n\t\t\t\tyou were defeated by "),i=$(_),l=$('. Better luck next time! Click "Replay"\n\t\t\t\tto play again!'),c=w(),u=y("button"),u.textContent="Replay",x(s,"class","loss-message"),x(u,"class","next svelte-1r1ihr8"),x(n,"class","message svelte-1r1ihr8")},m(t,p){h(t,n,p),m(n,s),m(s,r),m(s,o),m(s,a),m(s,i),m(s,l),m(n,c),m(n,u),d||(f=v(u,"click",e[12]),d=!0)},p(t,e){24&e&&g!==(g=t[3][t[4]].name+"")&&b(o,g),20&e&&_!==(_=t[2][t[4]]+"")&&b(i,_)},i:t,o:t,d(t){t&&p(n),d=!1,f()}}}function vt(e){let n,s,r,o,a,i;return{c(){n=y("div"),s=y("div"),s.textContent='Welcome to the game! Press "Start" to continue!',r=w(),o=y("button"),o.textContent="Start",x(s,"class","opener-message"),x(o,"class","next svelte-1r1ihr8"),x(n,"class","message svelte-1r1ihr8")},m(t,l){h(t,n,l),m(n,s),m(n,r),m(n,o),a||(i=v(o,"click",e[11]),a=!0)},p:t,i:t,o:t,d(t){t&&p(n),a=!1,i()}}}function xt(t){let e,n,s,r,a,l,c,u,d;return n=new ut({props:{class:"ans",answerText:t[16],idx:t[18]}}),{c(){e=y("button"),J(n.$$.fragment),s=w(),x(e,"class",r=i(t[16].split(" ").join("-")+" answer")+" svelte-1r1ihr8"),x(e,"id",a=t[18])},m(r,a){h(r,e,a),Q(n,e,null),m(e,s),c=!0,u||(d=v(e,"click",(function(){o(t[9](t[16],t[18]))&&t[9](t[16],t[18]).apply(this,arguments)})),u=!0)},p(s,o){t=s;const a={};2&o&&(a.answerText=t[16]),n.$set(a),(!c||2&o&&r!==(r=i(t[16].split(" ").join("-")+" answer")+" svelte-1r1ihr8"))&&x(e,"class",r)},i(t){c||(Y(n.$$.fragment,t),O(()=>{l||(l=F(e,rt,{x:200,duration:1e3},!0)),l.run(1)}),c=!0)},o(t){G(n.$$.fragment,t),l||(l=F(e,rt,{x:200,duration:1e3},!1)),l.run(0),c=!1},d(t){t&&p(e),V(n),t&&l&&l.end(),u=!1,d()}}}function bt(t){let e,n,s,r,a,l,c,u,d;return n=new ut({props:{class:"ans",answerText:t[16],idx:t[18]}}),{c(){e=y("button"),J(n.$$.fragment),s=w(),x(e,"class",r=i(t[16].split(" ").join("-")+" answer")+" svelte-1r1ihr8"),x(e,"id",a=t[18])},m(r,a){h(r,e,a),Q(n,e,null),m(e,s),c=!0,u||(d=v(e,"click",(function(){o(t[9](t[16],t[18]))&&t[9](t[16],t[18]).apply(this,arguments)})),u=!0)},p(s,o){t=s;const a={};2&o&&(a.answerText=t[16]),n.$set(a),(!c||2&o&&r!==(r=i(t[16].split(" ").join("-")+" answer")+" svelte-1r1ihr8"))&&x(e,"class",r)},i(t){c||(Y(n.$$.fragment,t),O(()=>{l||(l=F(e,rt,{x:-200,duration:1e3},!0)),l.run(1)}),c=!0)},o(t){G(n.$$.fragment,t),l||(l=F(e,rt,{x:-200,duration:1e3},!1)),l.run(0),c=!1},d(t){t&&p(e),V(n),t&&l&&l.end(),u=!1,d()}}}function _t(t){let e,n,s,r;const o=[bt,xt],a=[];return e=function(t,e){return t[18]%2==0?0:1}(t),n=a[e]=o[e](t),{c(){n.c(),s=$("")},m(t,n){a[e].m(t,n),h(t,s,n),r=!0},p(t,e){n.p(t,e)},i(t){r||(Y(n),r=!0)},o(t){G(n),r=!1},d(t){a[e].d(t),t&&p(s)}}}function Ct(t){let e,n,s,r,o,a,i,l,c,u,d,f,$=t[3],v=[];for(let e=0;e<$.length;e+=1)v[e]=gt(mt(t,$,e));const b=[vt,wt,$t,yt],_=[];function C(t,e){return t[5]?t[7]?1:t[6]?2:3:0}return c=C(t),u=_[c]=b[c](t),{c(){e=y("main"),n=y("div"),s=y("img"),o=w(),a=y("div");for(let t=0;t<v.length;t+=1)v[t].c();i=w(),l=y("div"),u.c(),x(s,"class","title svelte-1r1ihr8"),s.src!==(r="images/title-2.png")&&x(s,"src","images/title-2.png"),x(s,"alt","title"),x(a,"class","board svelte-1r1ihr8"),x(n,"class","top svelte-1r1ihr8"),x(l,"class","bottom svelte-1r1ihr8"),x(e,"class","svelte-1r1ihr8")},m(t,r){h(t,e,r),m(e,n),m(n,s),m(n,o),m(n,a);for(let t=0;t<v.length;t+=1)v[t].m(a,null);m(e,i),m(e,l),_[c].m(l,null),f=!0},p(t,[e]){if(24&e){let n;for($=t[3],n=0;n<$.length;n+=1){const s=mt(t,$,n);v[n]?v[n].p(s,e):(v[n]=gt(s),v[n].c(),v[n].m(a,null))}for(;n<v.length;n+=1)v[n].d(1);v.length=$.length}let n=c;c=C(t),c===n?_[c].p(t,e):(X(),G(_[n],1,1,()=>{_[n]=null}),z(),u=_[c],u||(u=_[c]=b[c](t),u.c()),Y(u,1),u.m(l,null))},i(t){f||(Y(u),O(()=>{d||(d=F(l,At,{},!0)),d.run(1)}),f=!0)},o(t){G(u),d||(d=F(l,At,{},!1)),d.run(0),f=!1},d(t){t&&p(e),g(v,t),_[c].d(),t&&d&&d.end()}}}function At(t,{delay:e=500,duration:n=400}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:n,css:t=>"opacity: "+t*s}}function qt(t,e,n){let s=-1,r=!1,o=!1,a=!1,{monsters:i=["slimes","goblins","kobolds","bandits","ogres","sandworms","Githyanki","illithids","a beholder","a dragon"]}=e,{ranks:l=[{name:"Porcelain",class:"tag small"},{name:"Obsidian",class:"tag small"},{name:"Steel",class:"tag small"},{name:"Sapphire",class:"tag small"},{name:"Emerald",class:"tag small"},{name:"Ruby",class:"tag small"},{name:"Bronze",class:"tag small"},{name:"Silver",class:"tag small"},{name:"Gold",class:"tag small"},{name:"Platinum",class:"tag large"}]}=e,c=0,{question:u=""}=e,{correctAnswer:d=""}=e,{answers:f=[]}=e;function m(){const t=dt[c][Math.floor(Math.random()*dt[c].length)];n(0,u=t.question),n(10,d=t.correctAnswer),n(1,f=t.answers)}function h(t,e){t.stopPropagation(),"start"===e?(n(4,s=0),n(5,r=!0),m()):"replay"===e&&(n(7,a=!1),n(6,o=!1),n(5,r=!1),n(4,s=-1),c=0)}return t.$$set=t=>{"monsters"in t&&n(2,i=t.monsters),"ranks"in t&&n(3,l=t.ranks),"question"in t&&n(0,u=t.question),"correctAnswer"in t&&n(10,d=t.correctAnswer),"answers"in t&&n(1,f=t.answers)},[u,f,i,l,s,r,o,a,h,function(t,e){if(t===d)document.getElementById(e).classList.add("green"),n(0,u="Correct!"),setTimeout(()=>{document.getElementById(e).classList.remove("green"),c+=1,n(4,s+=1),c<=9?m():n(6,o=!0)},2e3);else{n(0,u="Wrong!"),document.getElementById(e).classList.add("red");let t=document.getElementsByClassName("answer");for(let e=0;e<t.length;e++)t[e].classList.contains(d.split(" ").join("-"))&&t[e].classList.add("green");setTimeout(()=>{n(7,a=!0)},2e3)}},d,t=>h(t,"start"),t=>h(t,"replay"),t=>h(t,"replay")]}return new class extends et{constructor(t){super(),tt(this,t,qt,Ct,a,{monsters:2,ranks:3,question:0,correctAnswer:10,answers:1})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
