var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function a(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t){return null==t?"":t}const l="undefined"!=typeof window;let c=l?()=>window.performance.now():()=>Date.now(),u=l?t=>requestAnimationFrame(t):t;const d=new Set;function f(t){d.forEach(e=>{e.c(t)||(d.delete(e),e.f())}),0!==d.size&&u(f)}function m(t){let e;return 0===d.size&&u(f),{promise:new Promise(n=>{d.add(e={c:t,f:n})}),abort(){d.delete(e)}}}function h(t,e){t.appendChild(e)}function g(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function v(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function b(){return y(" ")}function $(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function q(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}const k=new Set;let A,z=0;function T(t,e,n,s,r,a,o,i=0){const l=16.666/s;let c="{\n";for(let t=0;t<=1;t+=l){const s=e+(n-e)*a(t);c+=100*t+`%{${o(s,1-s)}}\n`}const u=c+`100% {${o(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${i}`,f=t.ownerDocument;k.add(f);const m=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(w("style")).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[d]||(h[d]=!0,m.insertRule(`@keyframes ${d} ${u}`,m.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?g+", ":""}${d} ${s}ms linear ${r}ms 1 both`,z+=1,d}function _(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-s.length;r&&(t.style.animation=s.join(", "),z-=r,z||u(()=>{z||(k.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),k.clear())}))}function C(t){A=t}const E=[],B=[],R=[],W=[],I=Promise.resolve();let L=!1;function S(t){R.push(t)}let j=!1;const H=new Set;function D(){if(!j){j=!0;do{for(let t=0;t<E.length;t+=1){const e=E[t];C(e),M(e.$$)}for(E.length=0;B.length;)B.pop()();for(let t=0;t<R.length;t+=1){const e=R[t];H.has(e)||(H.add(e),e())}R.length=0}while(E.length);for(;W.length;)W.pop()();L=!1,j=!1,H.clear()}}function M(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}let O;function G(){return O||(O=Promise.resolve(),O.then(()=>{O=null})),O}function N(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const P=new Set;let F;function K(){F={r:0,c:[],p:F}}function Y(){F.r||r(F.c),F=F.p}function U(t,e){t&&t.i&&(P.delete(t),t.i(e))}function X(t,e,n,s){if(t&&t.o){if(P.has(t))return;P.add(t),F.c.push(()=>{P.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const Z={duration:0};function J(n,s,r){let o,i,l=s(n,r),u=!1,d=0;function f(){o&&_(n,o)}function h(){const{delay:s=0,duration:r=300,easing:a=e,tick:h=t,css:g}=l||Z;g&&(o=T(n,0,1,r,s,a,g,d++)),h(0,1);const p=c()+s,v=p+r;i&&i.abort(),u=!0,S(()=>N(n,!0,"start")),i=m(t=>{if(u){if(t>=v)return h(1,0),N(n,!0,"end"),f(),u=!1;if(t>=p){const e=a((t-p)/r);h(e,1-e)}}return u})}let g=!1;return{start(){g||(_(n),a(l)?(l=l(),G().then(h)):h())},invalidate(){g=!1},end(){u&&(f(),u=!1)}}}function Q(n,s,o,i){let l=s(n,o),u=i?0:1,d=null,f=null,h=null;function g(){h&&_(n,h)}function p(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function v(s){const{delay:a=0,duration:o=300,easing:i=e,tick:v=t,css:w}=l||Z,y={start:c()+a,b:s};s||(y.group=F,F.r+=1),d?f=y:(w&&(g(),h=T(n,u,s,o,a,i,w)),s&&v(0,1),d=p(y,o),S(()=>N(n,s,"start")),m(t=>{if(f&&t>f.start&&(d=p(f,o),f=null,N(n,d.b,"start"),w&&(g(),h=T(n,u,d.b,d.duration,0,i,l.css))),d)if(t>=d.end)v(u=d.b,1-u),N(n,d.b,"end"),f||(d.b?g():--d.group.r||r(d.group.c)),d=null;else if(t>=d.start){const e=t-d.start;u=d.a+d.d*i(e/d.duration),v(u,1-u)}return!(!d&&!f)}))}return{run(t){a(l)?G().then(()=>{l=l(),v(t)}):v(t)},end(){g(),d=f=null}}}const V="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function tt(t){t&&t.c()}function et(t,e,s){const{fragment:o,on_mount:i,on_destroy:l,after_update:c}=t.$$;o&&o.m(e,s),S(()=>{const e=i.map(n).filter(a);l?l.push(...e):r(e),t.$$.on_mount=[]}),c.forEach(S)}function nt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){-1===t.$$.dirty[0]&&(E.push(t),L||(L=!0,I.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function rt(e,n,a,o,i,l,c=[-1]){const u=A;C(e);const d=n.props||{},f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:c,skip_bound:!1};let m=!1;if(f.ctx=a?a(e,d,(t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),m&&st(e,t)),n}):[],f.update(),m=!0,r(f.before_update),f.fragment=!!o&&o(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(p)}else f.fragment&&f.fragment.c();n.intro&&U(e.$$.fragment),et(e,n.target,n.anchor),D()}C(u)}class at{$destroy(){nt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ot(t){const e=t-1;return e*e*e+1}function it(t){return--t*t*t*t*t+1}function lt(e){let n,s;return{c(){n=w("div"),s=y(e[0]),q(n,"class","question svelte-1dg4i2e")},m(t,e){g(t,n,e),h(n,s)},p(t,[e]){1&e&&x(s,t[0])},i:t,o:t,d(t){t&&p(n)}}}function ct(t,e,n){let{questionText:s}=e;return t.$$set=t=>{"questionText"in t&&n(0,s=t.questionText)},[s]}class ut extends at{constructor(t){super(),rt(this,t,ct,lt,o,{questionText:0})}}function dt(e){let n,s,r,a,o,i,l,c,u,d=e[2][e[1]]+"";return{c(){n=w("div"),s=w("span"),s.textContent="♦",r=b(),a=w("span"),o=y(d),i=y(":"),l=b(),c=w("div"),u=y(e[0]),q(s,"class","diam svelte-1f3aymc"),q(a,"class","answer-letter svelte-1f3aymc"),q(c,"class","answer-text svelte-1f3aymc"),q(n,"class","answer-container svelte-1f3aymc")},m(t,e){g(t,n,e),h(n,s),h(n,r),h(n,a),h(a,o),h(a,i),h(n,l),h(n,c),h(c,u)},p(t,[e]){6&e&&d!==(d=t[2][t[1]]+"")&&x(o,d),1&e&&x(u,t[0])},i:t,o:t,d(t){t&&p(n)}}}function ft(t,e,n){let{answerText:s}=e,{idx:r}=e,{answerKeys:a=["A","B","C","D"]}=e;return t.$$set=t=>{"answerText"in t&&n(0,s=t.answerText),"idx"in t&&n(1,r=t.idx),"answerKeys"in t&&n(2,a=t.answerKeys)},[s,r,a]}class mt extends at{constructor(t){super(),rt(this,t,ft,dt,o,{answerText:0,idx:1,answerKeys:2})}}function ht(e){let n,s,r,a,o;return{c(){n=w("link"),s=b(),r=w("div"),a=w("span"),o=y(e[0]),q(n,"href","https://fonts.googleapis.com/css2?family=Balthazar&display=swap"),q(n,"rel","stylesheet"),q(a,"class","timer-num svelte-kl566y"),q(r,"class","timer-container svelte-kl566y")},m(t,e){h(document.head,n),g(t,s,e),g(t,r,e),h(r,a),h(a,o)},p(t,[e]){1&e&&x(o,t[0])},i:t,o:t,d(t){p(n),t&&p(s),t&&p(r)}}}function gt(t,e,n){let{timeLeft:s}=e;return t.$$set=t=>{"timeLeft"in t&&n(0,s=t.timeLeft)},[s]}class pt extends at{constructor(t){super(),rt(this,t,gt,ht,o,{timeLeft:0})}}const vt={0:[{question:"What is the standard abbreviation for your Charisma score?",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]},{question:"What is the standard abbreviation for your Dexterity score?",correctAnswer:"DEX",answers:["CHA","DEX","WIS","CON"]}],1:[{question:"Which of these creatures is famous for transforming into treasure to trick adventurers?",correctAnswer:"Mimic",answers:["Bugbear","Mimic","Acid Slime","Werewolf"]},{question:"Which type of damage prevents a troll from regenerating?",correctAnswer:"Fire",answers:["Ice","Lightning","Radiant","Fire"]}],2:[{question:"How does a monk gain their powers?",correctAnswer:"Through their own life-force or ki",answers:["Through nature","Through a deity","Through their own life-force or ki","Through extensive study"]},{question:"Which is a wizard's most important piece of equipment?",correctAnswer:"Spellbook",answers:["Wand","Spellbook","Robes and wizard hat","Staff"]}],3:[{question:"There are two main types of dragons, metallic and …",correctAnswer:"Chromatic",answers:["Chromatic","Aberrant","Abyssal","Celestial"]},{question:"How do clerics get their spells?",correctAnswer:"Gaining the favor of a deity",answers:["Elaborate ritual dances","From scrolls","Gaining the favor of a deity","Spellbooks"]}],4:[{question:"The Barbarian class is known for a unique ability that allows them to inflict extra damage. What is it called?",correctAnswer:"Rage",answers:["Fury","Intimidation","Wildstrike","Rage"]},{question:"What is the only way to ensure the death of a lich?",correctAnswer:"Destroy its phylactery",answers:["Use a resurrection spell","Engulf it in flames","Remove its head","Destroy its phylactery"]}],5:[{question:"Which wizard is known for creating a variety of spells involving illusory hands and fists?",correctAnswer:"Bigby",answers:["Halaster","Harry","Bigby","Mordenkainen"]},{question:"What kind of special breath does a silver dragon have?",correctAnswer:"Cold Breath",answers:["Fire Breath","Cold Breath","Acid Spray","Lightning Breath"]}],6:[{question:"Which monster is feared not for the danger to an adventurer's life, but rather to their magical equipment?",correctAnswer:"Rust monster",answers:["Blue dragon","Hook horror","Rust monster","Arcanaloth"]},{question:"Which is the Arcane Tradition that focuses on modifying matter?",correctAnswer:"Transmutation",answers:["Abjuration","Evocation","Enchantment","Transmutation"]}],7:[{question:"Which monster has a large central eye, multiple spellcasting eyestalks and floats above the ground?",correctAnswer:"A beholder",answers:["A mind flayer","A bullette","A beholder","An intellect devourer"]},{question:"What is another name for a mind-flayer?",correctAnswer:"Illithid",answers:["Illithid","Kuo-toa","Malcanthet","Beholder"]}],8:[{question:"This creature can be identified by their lion head and backwards-facing hands.",correctAnswer:"Rakshasa",answers:["Githyanki","Rakshasa","Duergar","Ogre"]},{question:"Which kind of undead is Count Strahd von Zarovich?",correctAnswer:"A vampire",answers:["A vampire","A revenant","A mummy lord","A lich"]}],9:[{question:"Who is the god that most orcs worship?",correctAnswer:"Gruumsh",answers:["Lolth","Tiamat","Gruumsh","Kurtulmak"]},{question:"Which faction of the Forgotten Realms wants to acquire wealth and power, at any cost?",correctAnswer:"The Zhentarim",answers:["The Zhentarim","The Harpers","The Thieves' Guild","The Assassin's Blade"]}]};function wt(t,{delay:e=0,duration:n=400,easing:s=ot,x:r=0,y:a=0,opacity:o=0}){const i=getComputedStyle(t),l=+i.opacity,c="none"===i.transform?"":i.transform,u=l*(1-o);return{delay:e,duration:n,easing:s,css:(t,e)=>`\n\t\t\ttransform: ${c} translate(${(1-t)*r}px, ${(1-t)*a}px);\n\t\t\topacity: ${l-u*e}`}}const{document:yt}=V;function bt(t,e,n){const s=t.slice();return s[33]=e[n],s[35]=n,s}function $t(t,e,n){const s=t.slice();return s[36]=e[n],s[38]=n,s}function qt(t){let e,n,s,r,a=t[36].name+"";return{c(){e=w("div"),n=w("div"),s=y(a),q(n,"class",r=i(t[36].class)+" svelte-1gzr6q7"),q(e,"class","tag-contain svelte-1gzr6q7")},m(t,r){g(t,e,r),h(e,n),h(n,s)},p(t,e){16&e[0]&&a!==(a=t[36].name+"")&&x(s,a),16&e[0]&&r!==(r=i(t[36].class)+" svelte-1gzr6q7")&&q(n,"class",r)},d(t){t&&p(e)}}}function xt(t){let e,n,s,r,a=t[36].name+"";return{c(){e=w("div"),n=w("div"),s=y(a),q(n,"class",r=i(t[36].class+" curr-font")+" svelte-1gzr6q7"),q(e,"class","tag-contain curr svelte-1gzr6q7")},m(t,r){g(t,e,r),h(e,n),h(n,s)},p(t,e){16&e[0]&&a!==(a=t[36].name+"")&&x(s,a),16&e[0]&&r!==(r=i(t[36].class+" curr-font")+" svelte-1gzr6q7")&&q(n,"class",r)},d(t){t&&p(e)}}}function kt(t){let e,n;function s(t,e){return t[38]===t[6]?xt:qt}let r=s(t),a=r(t);return{c(){e=w("div"),a.c(),n=b(),q(e,"class","tag-area svelte-1gzr6q7")},m(t,s){g(t,e,s),a.m(e,null),h(e,n)},p(t,o){r===(r=s(t))&&a?a.p(t,o):(a.d(1),a=r(t),a&&(a.c(),a.m(e,n)))},d(t){t&&p(e),a.d()}}}function At(t){let e,n,s,r,a;const o=[Bt,Et],i=[];function l(t,e){return t[2]?0:1}e=l(t),n=i[e]=o[e](t);let c=t[1],u=[];for(let e=0;e<c.length;e+=1)u[e]=It(bt(t,c,e));const d=t=>X(u[t],1,1,()=>{u[t]=null});return{c(){n.c(),s=b(),r=w("div");for(let t=0;t<u.length;t+=1)u[t].c();q(r,"class","answers svelte-1gzr6q7")},m(t,n){i[e].m(t,n),g(t,s,n),g(t,r,n);for(let t=0;t<u.length;t+=1)u[t].m(r,null);a=!0},p(t,a){let f=e;if(e=l(t),e===f?i[e].p(t,a):(K(),X(i[f],1,1,()=>{i[f]=null}),Y(),n=i[e],n||(n=i[e]=o[e](t),n.c()),U(n,1),n.m(s.parentNode,s)),16386&a[0]){let e;for(c=t[1],e=0;e<c.length;e+=1){const n=bt(t,c,e);u[e]?(u[e].p(n,a),U(u[e],1)):(u[e]=It(n),u[e].c(),U(u[e],1),u[e].m(r,null))}for(K(),e=c.length;e<u.length;e+=1)d(e);Y()}},i(t){if(!a){U(n);for(let t=0;t<c.length;t+=1)U(u[t]);a=!0}},o(t){X(n),u=u.filter(Boolean);for(let t=0;t<u.length;t+=1)X(u[t]);a=!1},d(t){i[e].d(t),t&&p(s),t&&p(r),v(u,t)}}}function zt(e){let n,s,r,a,o,i,l,c,u;return{c(){n=w("div"),n.textContent=""+e[16](),s=b(),r=w("div"),a=w("span"),a.textContent='Oops, you ran out of time! Click \n\t\t\t\t"Replay" to play again!',o=b(),i=w("button"),i.textContent="Replay",q(n,"class","ignore svelte-1gzr6q7"),q(a,"class","loss-message"),q(i,"class","next svelte-1gzr6q7"),q(r,"class","message svelte-1gzr6q7")},m(t,l){g(t,n,l),g(t,s,l),g(t,r,l),h(r,a),h(r,o),h(r,i),c||(u=$(i,"click",e[23]),c=!0)},p:t,i(t){l||S(()=>{l=J(r,e[12],{}),l.start()})},o:t,d(t){t&&p(n),t&&p(s),t&&p(r),c=!1,u()}}}function Tt(e){let n,s,r,a,o,i,l;return{c(){n=w("div"),s=w("span"),s.textContent='You made it to Platinum Rank! You stand as a beacon of hope\n\t\t\t\tfor adventuring teams across the land! Unfortunately, the fight never truly ends. Click \n\t\t\t\t"Replay" to play again!',r=b(),a=w("button"),a.textContent="Replay",q(s,"class","loss-message"),q(a,"class","next svelte-1gzr6q7"),q(n,"class","message svelte-1gzr6q7")},m(t,o){g(t,n,o),h(n,s),h(n,r),h(n,a),i||(l=$(a,"click",e[22]),i=!0)},p:t,i(t){o||S(()=>{o=J(n,e[12],{}),o.start()})},o:t,d(t){t&&p(n),i=!1,l()}}}function _t(e){let n,s,r,a,o,i,l,c,u,d,f,m,v=e[4][e[6]].name+"",k=e[3][e[6]]+"";return{c(){n=w("div"),s=w("span"),r=y("Uh oh! You made it to "),a=y(v),o=y(" Rank but then\n\t\t\t\tyou were defeated by "),i=y(k),l=y('. Better luck next time! Click "Replay"\n\t\t\t\tto play again!'),c=b(),u=w("button"),u.textContent="Replay",q(s,"class","loss-message"),q(u,"class","next svelte-1gzr6q7"),q(n,"class","message svelte-1gzr6q7")},m(t,d){g(t,n,d),h(n,s),h(s,r),h(s,a),h(s,o),h(s,i),h(s,l),h(n,c),h(n,u),f||(m=$(u,"click",e[21]),f=!0)},p(t,e){80&e[0]&&v!==(v=t[4][t[6]].name+"")&&x(a,v),72&e[0]&&k!==(k=t[3][t[6]]+"")&&x(i,k)},i(t){d||S(()=>{d=J(n,e[12],{}),d.start()})},o:t,d(t){t&&p(n),f=!1,m()}}}function Ct(e){let n,s,r,a,o,i,l;return{c(){n=w("div"),s=w("div"),s.textContent='Welcome to the game! Press "Start" to continue!',r=b(),a=w("button"),a.textContent="Start",q(s,"class","opener-message"),q(a,"class","next svelte-1gzr6q7"),q(n,"class","message svelte-1gzr6q7")},m(t,o){g(t,n,o),h(n,s),h(n,r),h(n,a),i||(l=$(a,"click",e[20]),i=!0)},p:t,i(t){o||S(()=>{o=J(n,e[12],{}),o.start()})},o:t,d(t){t&&p(n),i=!1,l()}}}function Et(t){let e,n;return e=new ut({props:{questionText:t[0]}}),{c(){tt(e.$$.fragment)},m(t,s){et(e,t,s),n=!0},p(t,n){const s={};1&n[0]&&(s.questionText=t[0]),e.$set(s)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function Bt(e){let n,s,a,o,i,l,c,u,d;return{c(){n=w("div"),s=w("span"),s.textContent="Is that your final answer?",a=b(),o=w("div"),i=w("button"),i.textContent="Yes",l=b(),c=w("button"),c.textContent="No",q(s,"class","final-answer"),q(i,"class","next svelte-1gzr6q7"),q(c,"class","next red svelte-1gzr6q7"),q(o,"class","final-buttons"),q(n,"class","message svelte-1gzr6q7")},m(t,r){g(t,n,r),h(n,s),h(n,a),h(n,o),h(o,i),h(o,l),h(o,c),u||(d=[$(i,"click",e[24]),$(c,"click",e[25])],u=!0)},p:t,i:t,o:t,d(t){t&&p(n),u=!1,r(d)}}}function Rt(t){let e,n,s,r,a,o,l,c,u;function d(...e){return t[27](t[33],t[35],...e)}return n=new mt({props:{class:"ans",answerText:t[33],idx:t[35]}}),{c(){e=w("button"),tt(n.$$.fragment),s=b(),q(e,"class",r=i(t[33].split(" ").join("-")+" answer")+" svelte-1gzr6q7"),q(e,"id",a=t[35])},m(t,r){g(t,e,r),et(n,e,null),h(e,s),l=!0,c||(u=$(e,"click",d),c=!0)},p(s,a){t=s;const o={};2&a[0]&&(o.answerText=t[33]),n.$set(o),(!l||2&a[0]&&r!==(r=i(t[33].split(" ").join("-")+" answer")+" svelte-1gzr6q7"))&&q(e,"class",r)},i(t){l||(U(n.$$.fragment,t),S(()=>{o||(o=Q(e,wt,{x:200,duration:500},!0)),o.run(1)}),l=!0)},o(t){X(n.$$.fragment,t),o||(o=Q(e,wt,{x:200,duration:500},!1)),o.run(0),l=!1},d(t){t&&p(e),nt(n),t&&o&&o.end(),c=!1,u()}}}function Wt(t){let e,n,s,r,a,o,l,c,u;function d(...e){return t[26](t[33],t[35],...e)}return n=new mt({props:{class:"ans",answerText:t[33],idx:t[35]}}),{c(){e=w("button"),tt(n.$$.fragment),s=b(),q(e,"class",r=i(t[33].split(" ").join("-")+" answer")+" svelte-1gzr6q7"),q(e,"id",a=t[35])},m(t,r){g(t,e,r),et(n,e,null),h(e,s),l=!0,c||(u=$(e,"click",d),c=!0)},p(s,a){t=s;const o={};2&a[0]&&(o.answerText=t[33]),n.$set(o),(!l||2&a[0]&&r!==(r=i(t[33].split(" ").join("-")+" answer")+" svelte-1gzr6q7"))&&q(e,"class",r)},i(t){l||(U(n.$$.fragment,t),S(()=>{o||(o=Q(e,wt,{x:-200,duration:500},!0)),o.run(1)}),l=!0)},o(t){X(n.$$.fragment,t),o||(o=Q(e,wt,{x:-200,duration:500},!1)),o.run(0),l=!1},d(t){t&&p(e),nt(n),t&&o&&o.end(),c=!1,u()}}}function It(t){let e,n,s,r;const a=[Wt,Rt],o=[];return e=function(t,e){return t[35]%2==0?0:1}(t),n=o[e]=a[e](t),{c(){n.c(),s=y("")},m(t,n){o[e].m(t,n),g(t,s,n),r=!0},p(t,e){n.p(t,e)},i(t){r||(U(n),r=!0)},o(t){X(n),r=!1},d(t){o[e].d(t),t&&p(s)}}}function Lt(t){let e,n,s,r,a,o,l,c,u,d,f,m,y,x,k,A,z,T,_,C,E,B,R,W,I,L,S,j,H,D,M,O,G;d=new pt({props:{timeLeft:t[10]}});let N=t[4],P=[];for(let e=0;e<N.length;e+=1)P[e]=kt($t(t,N,e));const F=[Ct,_t,Tt,zt,At],Z=[];function J(t,e){return t[7]?t[9]?1:t[8]?2:0===t[10]?3:4:0}return k=J(t),A=Z[k]=F[k](t),{c(){e=w("script"),s=b(),r=w("main"),a=w("div"),o=w("div"),l=w("img"),u=b(),tt(d.$$.fragment),f=b(),m=w("div");for(let t=0;t<P.length;t+=1)P[t].c();y=b(),x=w("div"),A.c(),z=b(),T=w("div"),T.innerHTML='<div class="about-container svelte-1gzr6q7"><img class="face svelte-1gzr6q7" src="images/face.jpg" alt="face"> \n\t\t\t<div class="about-popup svelte-1gzr6q7"><a href="https://github.com/chrisoney/"><span class="about-icon fab fa-github svelte-1gzr6q7"></span></a> \n\t\t\t\t<a href="https://www.linkedin.com/in/christopher-oney-317b84132/"><span class="about-icon fab fa-linkedin svelte-1gzr6q7"></span></a> \n\t\t\t\t<a href="https://angel.co/u/christopher-oney"><span class="about-icon fab fa-angellist svelte-1gzr6q7"></span></a></div></div>',_=b(),C=w("div"),B=b(),R=w("audio"),R.innerHTML='<track kind="captions">',I=b(),L=w("audio"),L.innerHTML='<track kind="captions">',j=b(),H=w("audio"),H.innerHTML='<track kind="captions">',e.src!==(n="https://kit.fontawesome.com/a229c5b13d.js")&&q(e,"src","https://kit.fontawesome.com/a229c5b13d.js"),q(e,"crossorigin","anonymous"),q(l,"class","title svelte-1gzr6q7"),l.src!==(c="images/title-2.png")&&q(l,"src","images/title-2.png"),q(l,"alt","title"),q(o,"class","top-left svelte-1gzr6q7"),q(m,"class","board svelte-1gzr6q7"),q(a,"class","top svelte-1gzr6q7"),q(x,"class","bottom svelte-1gzr6q7"),q(T,"class","about svelte-1gzr6q7"),q(C,"class",E=i("mute-button fas "+(t[5]?"fa-volume-mute":"fa-volume-up"))+" svelte-1gzr6q7"),R.src!==(W="sounds/correct.mp3")&&q(R,"src","sounds/correct.mp3"),q(R,"id","correct"),q(R,"class","svelte-1gzr6q7"),L.src!==(S="sounds/lose.mp3")&&q(L,"src","sounds/lose.mp3"),q(L,"id","lose"),q(L,"class","svelte-1gzr6q7"),H.src!==(D="sounds/win.mp3")&&q(H,"src","sounds/win.mp3"),q(H,"id","win"),q(H,"class","svelte-1gzr6q7"),q(r,"class","svelte-1gzr6q7")},m(n,i){h(yt.head,e),g(n,s,i),g(n,r,i),h(r,a),h(a,o),h(o,l),h(o,u),et(d,o,null),h(a,f),h(a,m);for(let t=0;t<P.length;t+=1)P[t].m(m,null);h(r,y),h(r,x),Z[k].m(x,null),h(r,z),h(r,T),h(r,_),h(r,C),h(r,B),h(r,R),h(r,I),h(r,L),h(r,j),h(r,H),M=!0,O||(G=$(C,"click",t[11]),O=!0)},p(t,e){const n={};if(1024&e[0]&&(n.timeLeft=t[10]),d.$set(n),80&e[0]){let n;for(N=t[4],n=0;n<N.length;n+=1){const s=$t(t,N,n);P[n]?P[n].p(s,e):(P[n]=kt(s),P[n].c(),P[n].m(m,null))}for(;n<P.length;n+=1)P[n].d(1);P.length=N.length}let s=k;k=J(t),k===s?Z[k].p(t,e):(K(),X(Z[s],1,1,()=>{Z[s]=null}),Y(),A=Z[k],A||(A=Z[k]=F[k](t),A.c()),U(A,1),A.m(x,null)),(!M||32&e[0]&&E!==(E=i("mute-button fas "+(t[5]?"fa-volume-mute":"fa-volume-up"))+" svelte-1gzr6q7"))&&q(C,"class",E)},i(t){M||(U(d.$$.fragment,t),U(A),M=!0)},o(t){X(d.$$.fragment,t),X(A),M=!1},d(t){p(e),t&&p(s),t&&p(r),nt(d),v(P,t),Z[k].d(),O=!1,G()}}}function St(t,e,n){let s=!1;let r=-1,a=!1,o=!1,i=!1,{monsters:l=["slimes","goblins","kobolds","bandits","ogres","sandworms","Githyanki","illithids","a beholder","a dragon"]}=e,{ranks:c=[{name:"Porcelain",class:"tag small"},{name:"Obsidian",class:"tag small"},{name:"Steel",class:"tag small"},{name:"Sapphire",class:"tag small"},{name:"Emerald",class:"tag small"},{name:"Ruby",class:"tag small"},{name:"Bronze",class:"tag small"},{name:"Silver",class:"tag small"},{name:"Gold",class:"tag small"},{name:"Platinum",class:"tag large"}]}=e,u=0,{question:d=""}=e,{correctAnswer:f=""}=e,{answers:m=[]}=e;function h(){const t=vt[u][Math.floor(Math.random()*vt[u].length)];n(0,d=t.question),n(17,f=t.correctAnswer),n(1,m=t.answers)}function g(t,e){if(t.stopPropagation(),"start"===e){let t=document.getElementById("win");t.pause(),t.currentTime=0,n(6,r=0),n(7,a=!0),n(10,q=15),h(),x()}else"replay"===e&&(n(9,i=!1),n(8,o=!1),n(7,a=!1),n(6,r=-1),u=0)}let{choiceText:p=""}=e,{choiceIdx:v=0}=e,{final:w=!1}=e;function y(t,e,s){t.preventDefault(),n(18,p=e),n(19,v=s),n(2,w=!0),k()}function b(t,e){t.preventDefault(),n(2,w=!1),e?function(t,e){if(t===f)document.getElementById(e).classList.add("green"),n(0,d="Correct!"),s||(u<9?document.getElementById("correct").play():document.getElementById("win").play()),setTimeout(()=>{document.getElementById(e).classList.remove("green"),u+=1,n(6,r+=1),u<=9?(n(10,q=15),x(),h()):n(8,o=!0)},5e3);else{n(0,d="Wrong!"),s||document.getElementById("lose").play(),document.getElementById(e).classList.add("red");let t=document.getElementsByClassName("answer");for(let e=0;e<t.length;e++)t[e].classList.contains(f.split(" ").join("-"))&&t[e].classList.add("green");setTimeout(()=>{n(9,i=!0)},5e3)}}(p,v):x()}let $,q=15;function x(){$=setInterval(()=>{n(10,q-=1)},1e3)}function k(){clearInterval($)}return t.$$set=t=>{"monsters"in t&&n(3,l=t.monsters),"ranks"in t&&n(4,c=t.ranks),"question"in t&&n(0,d=t.question),"correctAnswer"in t&&n(17,f=t.correctAnswer),"answers"in t&&n(1,m=t.answers),"choiceText"in t&&n(18,p=t.choiceText),"choiceIdx"in t&&n(19,v=t.choiceIdx),"final"in t&&n(2,w=t.final)},[d,m,w,l,c,s,r,a,o,i,q,function(){if(n(5,s=!s),s){["correct","lose","win"].forEach(t=>{let e=document.getElementById(t);e.pause(),e.currentTime=0})}},function(t,{delay:e=600,duration:n=1e3}){const s=+getComputedStyle(t).opacity;return{easing:it,delay:e,duration:n,css:t=>"opacity: "+t*s}},g,y,b,k,f,p,v,t=>g(t,"start"),t=>g(t,"replay"),t=>g(t,"replay"),t=>g(t,"replay"),t=>b(t,!0),t=>b(t,!1),(t,e,n)=>y(n,t,e),(t,e,n)=>y(n,t,e)]}return new class extends at{constructor(t){super(),rt(this,t,St,Lt,o,{monsters:3,ranks:4,question:0,correctAnswer:17,answers:1,choiceText:18,choiceIdx:19,final:2},[-1,-1])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
