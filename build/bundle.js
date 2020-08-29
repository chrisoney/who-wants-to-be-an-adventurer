var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function a(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t){return null==t?"":t}const l="undefined"!=typeof window;let c=l?()=>window.performance.now():()=>Date.now(),u=l?t=>requestAnimationFrame(t):t;const d=new Set;function f(t){d.forEach(e=>{e.c(t)||(d.delete(e),e.f())}),0!==d.size&&u(f)}function m(t){let e;return 0===d.size&&u(f),{promise:new Promise(n=>{d.add(e={c:t,f:n})}),abort(){d.delete(e)}}}function h(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function v(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function b(){return w(" ")}function $(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}const A=new Set;let T,_=0;function C(t,e,n,s,r,a,o,i=0){const l=16.666/s;let c="{\n";for(let t=0;t<=1;t+=l){const s=e+(n-e)*a(t);c+=100*t+`%{${o(s,1-s)}}\n`}const u=c+`100% {${o(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${i}`,f=t.ownerDocument;A.add(f);const m=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(y("style")).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[d]||(h[d]=!0,m.insertRule(`@keyframes ${d} ${u}`,m.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?p+", ":""}${d} ${s}ms linear ${r}ms 1 both`,_+=1,d}function q(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-s.length;r&&(t.style.animation=s.join(", "),_-=r,_||u(()=>{_||(A.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),A.clear())}))}function E(t){T=t}const B=[],R=[],W=[],I=[],S=Promise.resolve();let L=!1;function H(t){W.push(t)}let j=!1;const M=new Set;function D(){if(!j){j=!0;do{for(let t=0;t<B.length;t+=1){const e=B[t];E(e),O(e.$$)}for(B.length=0;R.length;)R.pop()();for(let t=0;t<W.length;t+=1){const e=W[t];M.has(e)||(M.add(e),e())}W.length=0}while(B.length);for(;I.length;)I.pop()();L=!1,j=!1,M.clear()}}function O(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}let G;function N(){return G||(G=Promise.resolve(),G.then(()=>{G=null})),G}function P(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const z=new Set;let F;function K(){F={r:0,c:[],p:F}}function Y(){F.r||r(F.c),F=F.p}function U(t,e){t&&t.i&&(z.delete(t),t.i(e))}function X(t,e,n,s){if(t&&t.o){if(z.has(t))return;z.add(t),F.c.push(()=>{z.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const Z={duration:0};function J(n,s,r){let o,i,l=s(n,r),u=!1,d=0;function f(){o&&q(n,o)}function h(){const{delay:s=0,duration:r=300,easing:a=e,tick:h=t,css:p}=l||Z;p&&(o=C(n,0,1,r,s,a,p,d++)),h(0,1);const g=c()+s,v=g+r;i&&i.abort(),u=!0,H(()=>P(n,!0,"start")),i=m(t=>{if(u){if(t>=v)return h(1,0),P(n,!0,"end"),f(),u=!1;if(t>=g){const e=a((t-g)/r);h(e,1-e)}}return u})}let p=!1;return{start(){p||(q(n),a(l)?(l=l(),N().then(h)):h())},invalidate(){p=!1},end(){u&&(f(),u=!1)}}}function Q(n,s,o,i){let l=s(n,o),u=i?0:1,d=null,f=null,h=null;function p(){h&&q(n,h)}function g(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function v(s){const{delay:a=0,duration:o=300,easing:i=e,tick:v=t,css:y}=l||Z,w={start:c()+a,b:s};s||(w.group=F,F.r+=1),d?f=w:(y&&(p(),h=C(n,u,s,o,a,i,y)),s&&v(0,1),d=g(w,o),H(()=>P(n,s,"start")),m(t=>{if(f&&t>f.start&&(d=g(f,o),f=null,P(n,d.b,"start"),y&&(p(),h=C(n,u,d.b,d.duration,0,i,l.css))),d)if(t>=d.end)v(u=d.b,1-u),P(n,d.b,"end"),f||(d.b?p():--d.group.r||r(d.group.c)),d=null;else if(t>=d.start){const e=t-d.start;u=d.a+d.d*i(e/d.duration),v(u,1-u)}return!(!d&&!f)}))}return{run(t){a(l)?N().then(()=>{l=l(),v(t)}):v(t)},end(){p(),d=f=null}}}const V="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function tt(t){t&&t.c()}function et(t,e,s){const{fragment:o,on_mount:i,on_destroy:l,after_update:c}=t.$$;o&&o.m(e,s),H(()=>{const e=i.map(n).filter(a);l?l.push(...e):r(e),t.$$.on_mount=[]}),c.forEach(H)}function nt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){-1===t.$$.dirty[0]&&(B.push(t),L||(L=!0,S.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function rt(e,n,a,o,i,l,c=[-1]){const u=T;E(e);const d=n.props||{},f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:c,skip_bound:!1};let m=!1;if(f.ctx=a?a(e,d,(t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),m&&st(e,t)),n}):[],f.update(),m=!0,r(f.before_update),f.fragment=!!o&&o(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(g)}else f.fragment&&f.fragment.c();n.intro&&U(e.$$.fragment),et(e,n.target,n.anchor),D()}E(u)}class at{$destroy(){nt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ot(t){const e=t-1;return e*e*e+1}function it(t){return--t*t*t*t*t+1}function lt(e){let n,s;return{c(){n=y("div"),s=w(e[0]),x(n,"class","question svelte-1dg4i2e")},m(t,e){p(t,n,e),h(n,s)},p(t,[e]){1&e&&k(s,t[0])},i:t,o:t,d(t){t&&g(n)}}}function ct(t,e,n){let{questionText:s}=e;return t.$$set=t=>{"questionText"in t&&n(0,s=t.questionText)},[s]}class ut extends at{constructor(t){super(),rt(this,t,ct,lt,o,{questionText:0})}}function dt(e){let n,s,r,a,o,i,l,c,u,d=e[2][e[1]]+"";return{c(){n=y("div"),s=y("span"),s.textContent="♦",r=b(),a=y("span"),o=w(d),i=w(":"),l=b(),c=y("div"),u=w(e[0]),x(s,"class","diam svelte-1f3aymc"),x(a,"class","answer-letter svelte-1f3aymc"),x(c,"class","answer-text svelte-1f3aymc"),x(n,"class","answer-container svelte-1f3aymc")},m(t,e){p(t,n,e),h(n,s),h(n,r),h(n,a),h(a,o),h(a,i),h(n,l),h(n,c),h(c,u)},p(t,[e]){6&e&&d!==(d=t[2][t[1]]+"")&&k(o,d),1&e&&k(u,t[0])},i:t,o:t,d(t){t&&g(n)}}}function ft(t,e,n){let{answerText:s}=e,{idx:r}=e,{answerKeys:a=["A","B","C","D"]}=e;return t.$$set=t=>{"answerText"in t&&n(0,s=t.answerText),"idx"in t&&n(1,r=t.idx),"answerKeys"in t&&n(2,a=t.answerKeys)},[s,r,a]}class mt extends at{constructor(t){super(),rt(this,t,ft,dt,o,{answerText:0,idx:1,answerKeys:2})}}function ht(e){let n,s,r,a,o;return{c(){n=y("link"),s=b(),r=y("div"),a=y("span"),o=w(e[0]),x(n,"href","https://fonts.googleapis.com/css2?family=Balthazar&display=swap"),x(n,"rel","stylesheet"),x(a,"class","timer-num svelte-kl566y"),x(r,"class","timer-container svelte-kl566y")},m(t,e){h(document.head,n),p(t,s,e),p(t,r,e),h(r,a),h(a,o)},p(t,[e]){1&e&&k(o,t[0])},i:t,o:t,d(t){g(n),t&&g(s),t&&g(r)}}}function pt(t,e,n){let{timeLeft:s}=e;return t.$$set=t=>{"timeLeft"in t&&n(0,s=t.timeLeft)},[s]}class gt extends at{constructor(t){super(),rt(this,t,pt,ht,o,{timeLeft:0})}}const vt={0:[{question:"What is the standard abbreviation for your Charisma score?",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]},{question:"What is the standard abbreviation for your Dexterity score?",correctAnswer:"DEX",answers:["CHA","DEX","WIS","CON"]}],1:[{question:"Which of these creatures is famous for transforming into treasure to trick adventurers?",correctAnswer:"Mimic",answers:["Bugbear","Mimic","Acid Slime","Werewolf"]},{question:"Which type of damage prevents a troll from regenerating?",correctAnswer:"Fire",answers:["Ice","Lightning","Radiant","Fire"]}],2:[{question:"How does a monk gain their powers?",correctAnswer:"Through their own life-force or ki",answers:["Through nature","Through a deity","Through their own life-force or ki","Through extensive study"]},{question:"Which is a wizard's most important piece of equipment?",correctAnswer:"Spellbook",answers:["Wand","Spellbook","Robes and wizard hat","Staff"]}],3:[{question:"There are two main types of dragons, metallic and …",correctAnswer:"Chromatic",answers:["Chromatic","Aberrant","Abyssal","Celestial"]},{question:"How do clerics get their spells?",correctAnswer:"Gaining the favor of a deity",answers:["Elaborate ritual dances","From scrolls","Gaining the favor of a deity","Spellbooks"]}],4:[{question:"The Barbarian class is known for a unique ability that allows them to inflict extra damage. What is it called?",correctAnswer:"Rage",answers:["Fury","Intimidation","Wildstrike","Rage"]},{question:"What is the only way to ensure the death of a lich?",correctAnswer:"Destroy its phylactery",answers:["Use a resurrection spell","Engulf it in flames","Remove its head","Destroy its phylactery"]}],5:[{question:"Which wizard is known for creating a variety of spells involving illusory hands and fists?",correctAnswer:"Bigby",answers:["Halaster","Harry","Bigby","Mordenkainen"]},{question:"What kind of special breath does a silver dragon have?",correctAnswer:"Cold Breath",answers:["Fire Breath","Cold Breath","Acid Spray","Lightning Breath"]}],6:[{question:"Which monster is feared not for the danger to an adventurer's life, but rather to their magical equipment?",correctAnswer:"Rust monster",answers:["Blue dragon","Hook horror","Rust monster","Arcanaloth"]},{question:"Which is the Arcane Tradition that focuses on modifying matter?",correctAnswer:"Transmutation",answers:["Abjuration","Evocation","Enchantment","Transmutation"]}],7:[{question:"Which monster has a large central eye, multiple spellcasting eyestalks and floats above the ground?",correctAnswer:"A beholder",answers:["A mind flayer","A bullette","A beholder","An intellect devourer"]},{question:"What is another name for a mind-flayer?",correctAnswer:"Illithid",answers:["Illithid","Kuo-toa","Malcanthet","Beholder"]}],8:[{question:"This creature can be identified by their lion head and backwards-facing hands.",correctAnswer:"Rakshasa",answers:["Githyanki","Rakshasa","Duergar","Ogre"]},{question:"Which kind of undead is Count Strahd von Zarovich?",correctAnswer:"A vampire",answers:["A vampire","A revenant","A mummy lord","A lich"]}],9:[{question:"Who is the god that most orcs worship?",correctAnswer:"Gruumsh",answers:["Lolth","Tiamat","Gruumsh","Kurtulmak"]},{question:"Which faction of the Forgotten Realms wants to acquire wealth and power, at any cost?",correctAnswer:"The Zhentarim",answers:["The Zhentarim","The Harpers","The Thieves' Guild","The Assassin's Blade"]}]};function yt(t,{delay:e=0,duration:n=400,easing:s=ot,x:r=0,y:a=0,opacity:o=0}){const i=getComputedStyle(t),l=+i.opacity,c="none"===i.transform?"":i.transform,u=l*(1-o);return{delay:e,duration:n,easing:s,css:(t,e)=>`\n\t\t\ttransform: ${c} translate(${(1-t)*r}px, ${(1-t)*a}px);\n\t\t\topacity: ${l-u*e}`}}const{document:wt}=V;function bt(t,e,n){const s=t.slice();return s[36]=e[n],s[38]=n,s}function $t(t,e,n){const s=t.slice();return s[39]=e[n],s[41]=n,s}function xt(t){let e,n,s,r,a,o;return a=new gt({props:{timeLeft:t[11]}}),{c(){e=y("div"),n=y("img"),r=b(),tt(a.$$.fragment),x(n,"class","title-small svelte-13tr27"),n.src!==(s="images/title-2.png")&&x(n,"src","images/title-2.png"),x(n,"alt","title"),x(e,"class","top-left svelte-13tr27")},m(t,s){p(t,e,s),h(e,n),h(e,r),et(a,e,null),o=!0},p(t,e){const n={};2048&e[0]&&(n.timeLeft=t[11]),a.$set(n)},i(t){o||(U(a.$$.fragment,t),o=!0)},o(t){X(a.$$.fragment,t),o=!1},d(t){t&&g(e),nt(a)}}}function kt(e){let n,s,r,a,o;return{c(){n=y("div"),s=y("img"),x(s,"class","title-big svelte-13tr27"),s.src!==(r="images/title-2.png")&&x(s,"src","images/title-2.png"),x(s,"alt","title"),x(n,"class","top-left svelte-13tr27")},m(t,e){p(t,n,e),h(n,s),o=!0},p:t,i(t){o||(H(()=>{a||(a=Q(s,e[14],{},!0)),a.run(1)}),o=!0)},o(t){a||(a=Q(s,e[14],{},!1)),a.run(0),o=!1},d(t){t&&g(n),t&&a&&a.end()}}}function At(t){let e,n,s,r,a=t[39].name+"";return{c(){e=y("div"),n=y("div"),s=w(a),x(n,"class",r=i(t[39].class)+" svelte-13tr27"),x(e,"class","tag-contain svelte-13tr27")},m(t,r){p(t,e,r),h(e,n),h(n,s)},p(t,e){16&e[0]&&a!==(a=t[39].name+"")&&k(s,a),16&e[0]&&r!==(r=i(t[39].class)+" svelte-13tr27")&&x(n,"class",r)},d(t){t&&g(e)}}}function Tt(t){let e,n,s,r,a=t[39].name+"";return{c(){e=y("div"),n=y("div"),s=w(a),x(n,"class",r=i(t[39].class+" curr-font")+" svelte-13tr27"),x(e,"class","tag-contain curr svelte-13tr27")},m(t,r){p(t,e,r),h(e,n),h(n,s)},p(t,e){16&e[0]&&a!==(a=t[39].name+"")&&k(s,a),16&e[0]&&r!==(r=i(t[39].class+" curr-font")+" svelte-13tr27")&&x(n,"class",r)},d(t){t&&g(e)}}}function _t(t){let e,n;function s(t,e){return t[41]===t[7]?Tt:At}let r=s(t),a=r(t);return{c(){e=y("div"),a.c(),n=b(),x(e,"class","tag-area svelte-13tr27")},m(t,s){p(t,e,s),a.m(e,null),h(e,n)},p(t,o){r===(r=s(t))&&a?a.p(t,o):(a.d(1),a=r(t),a&&(a.c(),a.m(e,n)))},d(t){t&&g(e),a.d()}}}function Ct(t){let e,n,s,r,a;const o=[It,Wt],i=[];function l(t,e){return t[2]?0:1}e=l(t),n=i[e]=o[e](t);let c=t[1],u=[];for(let e=0;e<c.length;e+=1)u[e]=Ht(bt(t,c,e));const d=t=>X(u[t],1,1,()=>{u[t]=null});return{c(){n.c(),s=b(),r=y("div");for(let t=0;t<u.length;t+=1)u[t].c();x(r,"class","answers svelte-13tr27")},m(t,n){i[e].m(t,n),p(t,s,n),p(t,r,n);for(let t=0;t<u.length;t+=1)u[t].m(r,null);a=!0},p(t,a){let f=e;if(e=l(t),e===f?i[e].p(t,a):(K(),X(i[f],1,1,()=>{i[f]=null}),Y(),n=i[e],n||(n=i[e]=o[e](t),n.c()),U(n,1),n.m(s.parentNode,s)),65538&a[0]){let e;for(c=t[1],e=0;e<c.length;e+=1){const n=bt(t,c,e);u[e]?(u[e].p(n,a),U(u[e],1)):(u[e]=Ht(n),u[e].c(),U(u[e],1),u[e].m(r,null))}for(K(),e=c.length;e<u.length;e+=1)d(e);Y()}},i(t){if(!a){U(n);for(let t=0;t<c.length;t+=1)U(u[t]);a=!0}},o(t){X(n),u=u.filter(Boolean);for(let t=0;t<u.length;t+=1)X(u[t]);a=!1},d(t){i[e].d(t),t&&g(s),t&&g(r),v(u,t)}}}function qt(e){let n,s,r,a,o,i,l,c,u;return{c(){n=y("div"),n.textContent=""+e[18](),s=b(),r=y("div"),a=y("span"),a.textContent='Oops, you ran out of time! Click \n\t\t\t\t"Replay" to play again!',o=b(),i=y("button"),i.textContent="Replay",x(n,"class","ignore svelte-13tr27"),x(a,"class","loss-message"),x(i,"class","next svelte-13tr27"),x(r,"class","message svelte-13tr27")},m(t,l){p(t,n,l),p(t,s,l),p(t,r,l),h(r,a),h(r,o),h(r,i),c||(u=$(i,"click",e[25]),c=!0)},p:t,i(t){l||H(()=>{l=J(r,e[13],{}),l.start()})},o:t,d(t){t&&g(n),t&&g(s),t&&g(r),c=!1,u()}}}function Et(e){let n,s,r,a,o,i,l;return{c(){n=y("div"),s=y("span"),s.textContent='You made it to Platinum Rank! You stand as a beacon of hope\n\t\t\t\tfor adventuring teams across the land! Unfortunately, the fight never truly ends. Click \n\t\t\t\t"Replay" to play again!',r=b(),a=y("button"),a.textContent="Replay",x(s,"class","loss-message"),x(a,"class","next svelte-13tr27"),x(n,"class","message svelte-13tr27")},m(t,o){p(t,n,o),h(n,s),h(n,r),h(n,a),i||(l=$(a,"click",e[24]),i=!0)},p:t,i(t){o||H(()=>{o=J(n,e[13],{}),o.start()})},o:t,d(t){t&&g(n),i=!1,l()}}}function Bt(e){let n,s,r,a,o,i,l,c,u,d,f,m,v=e[4][e[7]].name+"",A=e[3][e[7]]+"";return{c(){n=y("div"),s=y("span"),r=w("Uh oh! You made it to "),a=w(v),o=w(" Rank but then\n\t\t\t\tyou were defeated by "),i=w(A),l=w('. Better luck next time! Click "Replay"\n\t\t\t\tto play again!'),c=b(),u=y("button"),u.textContent="Replay",x(s,"class","loss-message"),x(u,"class","next svelte-13tr27"),x(n,"class","message svelte-13tr27")},m(t,d){p(t,n,d),h(n,s),h(s,r),h(s,a),h(s,o),h(s,i),h(s,l),h(n,c),h(n,u),f||(m=$(u,"click",e[23]),f=!0)},p(t,e){144&e[0]&&v!==(v=t[4][t[7]].name+"")&&k(a,v),136&e[0]&&A!==(A=t[3][t[7]]+"")&&k(i,A)},i(t){d||H(()=>{d=J(n,e[13],{}),d.start()})},o:t,d(t){t&&g(n),f=!1,m()}}}function Rt(e){let n,s,r,a,o,i,l;return{c(){n=y("div"),s=y("div"),s.textContent='Welcome to the game! Press "Start" to continue!',r=b(),a=y("button"),a.textContent="Start",x(s,"class","opener-message"),x(a,"class","next svelte-13tr27"),x(n,"class","message svelte-13tr27")},m(t,o){p(t,n,o),h(n,s),h(n,r),h(n,a),i||(l=$(a,"click",e[22]),i=!0)},p:t,i(t){o||H(()=>{o=J(n,e[13],{}),o.start()})},o:t,d(t){t&&g(n),i=!1,l()}}}function Wt(t){let e,n;return e=new ut({props:{questionText:t[0]}}),{c(){tt(e.$$.fragment)},m(t,s){et(e,t,s),n=!0},p(t,n){const s={};1&n[0]&&(s.questionText=t[0]),e.$set(s)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function It(e){let n,s,a,o,i,l,c,u,d;return{c(){n=y("div"),s=y("span"),s.textContent="Is that your final answer?",a=b(),o=y("div"),i=y("button"),i.textContent="Yes",l=b(),c=y("button"),c.textContent="No",x(s,"class","final-answer"),x(i,"class","next svelte-13tr27"),x(c,"class","next red svelte-13tr27"),x(o,"class","final-buttons"),x(n,"class","message svelte-13tr27")},m(t,r){p(t,n,r),h(n,s),h(n,a),h(n,o),h(o,i),h(o,l),h(o,c),u||(d=[$(i,"click",e[26]),$(c,"click",e[27])],u=!0)},p:t,i:t,o:t,d(t){t&&g(n),u=!1,r(d)}}}function St(t){let e,n,s,r,a,o,l,c,u;function d(...e){return t[29](t[36],t[38],...e)}return n=new mt({props:{class:"ans",answerText:t[36],idx:t[38]}}),{c(){e=y("button"),tt(n.$$.fragment),s=b(),x(e,"class",r=i(t[36].split(" ").join("-")+" answer")+" svelte-13tr27"),x(e,"id",a=t[38])},m(t,r){p(t,e,r),et(n,e,null),h(e,s),l=!0,c||(u=$(e,"click",d),c=!0)},p(s,a){t=s;const o={};2&a[0]&&(o.answerText=t[36]),n.$set(o),(!l||2&a[0]&&r!==(r=i(t[36].split(" ").join("-")+" answer")+" svelte-13tr27"))&&x(e,"class",r)},i(t){l||(U(n.$$.fragment,t),H(()=>{o||(o=Q(e,yt,{x:200,duration:500},!0)),o.run(1)}),l=!0)},o(t){X(n.$$.fragment,t),o||(o=Q(e,yt,{x:200,duration:500},!1)),o.run(0),l=!1},d(t){t&&g(e),nt(n),t&&o&&o.end(),c=!1,u()}}}function Lt(t){let e,n,s,r,a,o,l,c,u;function d(...e){return t[28](t[36],t[38],...e)}return n=new mt({props:{class:"ans",answerText:t[36],idx:t[38]}}),{c(){e=y("button"),tt(n.$$.fragment),s=b(),x(e,"class",r=i(t[36].split(" ").join("-")+" answer")+" svelte-13tr27"),x(e,"id",a=t[38])},m(t,r){p(t,e,r),et(n,e,null),h(e,s),l=!0,c||(u=$(e,"click",d),c=!0)},p(s,a){t=s;const o={};2&a[0]&&(o.answerText=t[36]),n.$set(o),(!l||2&a[0]&&r!==(r=i(t[36].split(" ").join("-")+" answer")+" svelte-13tr27"))&&x(e,"class",r)},i(t){l||(U(n.$$.fragment,t),H(()=>{o||(o=Q(e,yt,{x:-200,duration:500},!0)),o.run(1)}),l=!0)},o(t){X(n.$$.fragment,t),o||(o=Q(e,yt,{x:-200,duration:500},!1)),o.run(0),l=!1},d(t){t&&g(e),nt(n),t&&o&&o.end(),c=!1,u()}}}function Ht(t){let e,n,s,r;const a=[Lt,St],o=[];return e=function(t,e){return t[38]%2==0?0:1}(t),n=o[e]=a[e](t),{c(){n.c(),s=w("")},m(t,n){o[e].m(t,n),p(t,s,n),r=!0},p(t,e){n.p(t,e)},i(t){r||(U(n),r=!0)},o(t){X(n),r=!1},d(t){o[e].d(t),t&&g(s)}}}function jt(t){let e,n,s,a,o,l,c,u,d,f,m,w,k,A,T,_,C,q,E,B,R,W,I,S,L,H,j,M,D,O,G,N,P,z,F,Z;const J=[kt,xt],Q=[];function V(t,e){return t[6]?1:0}l=V(t),c=Q[l]=J[l](t);let tt=t[4],et=[];for(let e=0;e<tt.length;e+=1)et[e]=_t($t(t,tt,e));const nt=[Rt,Bt,Et,qt,Ct],st=[];function rt(t,e){return t[8]?t[10]?1:t[9]?2:0===t[11]?3:4:0}return w=rt(t),k=st[w]=nt[w](t),{c(){e=y("script"),s=b(),a=y("main"),o=y("div"),c.c(),u=b(),d=y("div");for(let t=0;t<et.length;t+=1)et[t].c();f=b(),m=y("div"),k.c(),A=b(),T=y("div"),T.innerHTML='<div class="about-container svelte-13tr27"><img class="face svelte-13tr27" src="images/face.jpg" alt="face"> \n\t\t\t<div class="about-popup svelte-13tr27"><a href="https://github.com/chrisoney/"><span class="about-icon fab fa-github svelte-13tr27"></span></a> \n\t\t\t\t<a href="https://www.linkedin.com/in/christopher-oney-317b84132/"><span class="about-icon fab fa-linkedin svelte-13tr27"></span></a> \n\t\t\t\t<a href="https://angel.co/u/christopher-oney"><span class="about-icon fab fa-angellist svelte-13tr27"></span></a></div></div>',_=b(),C=y("div"),E=b(),B=y("audio"),B.innerHTML='<track kind="captions">',W=b(),I=y("audio"),I.innerHTML='<track kind="captions">',L=b(),H=y("audio"),H.innerHTML='<track kind="captions">',M=b(),D=y("audio"),D.innerHTML='<track kind="captions">',G=b(),N=y("img"),e.src!==(n="https://kit.fontawesome.com/a229c5b13d.js")&&x(e,"src","https://kit.fontawesome.com/a229c5b13d.js"),x(e,"crossorigin","anonymous"),x(d,"class","board svelte-13tr27"),x(o,"class","top svelte-13tr27"),x(m,"class","bottom svelte-13tr27"),x(T,"class","about svelte-13tr27"),x(C,"class",q=i("mute-button fas "+(t[5]?"fa-volume-mute":"fa-volume-up"))+" svelte-13tr27"),B.src!==(R="sounds/correct.mp3")&&x(B,"src","sounds/correct.mp3"),x(B,"id","correct"),x(B,"class","svelte-13tr27"),I.src!==(S="sounds/lose.mp3")&&x(I,"src","sounds/lose.mp3"),x(I,"id","lose"),x(I,"class","svelte-13tr27"),H.src!==(j="sounds/win.mp3")&&x(H,"src","sounds/win.mp3"),x(H,"id","win"),x(H,"class","svelte-13tr27"),D.src!==(O="sounds/shia-song.mp3")&&x(D,"src","sounds/shia-song.mp3"),x(D,"id","shia-song"),x(D,"class","svelte-13tr27"),x(N,"class","shia svelte-13tr27"),N.src!==(P="images/hidden-shia.png")&&x(N,"src","images/hidden-shia.png"),x(N,"alt","shia labeouf"),x(a,"class","svelte-13tr27")},m(n,r){h(wt.head,e),p(n,s,r),p(n,a,r),h(a,o),Q[l].m(o,null),h(o,u),h(o,d);for(let t=0;t<et.length;t+=1)et[t].m(d,null);h(a,f),h(a,m),st[w].m(m,null),h(a,A),h(a,T),h(a,_),h(a,C),h(a,E),h(a,B),h(a,W),h(a,I),h(a,L),h(a,H),h(a,M),h(a,D),h(a,G),h(a,N),z=!0,F||(Z=[$(C,"click",t[12]),$(N,"click",t[30])],F=!0)},p(t,e){let n=l;if(l=V(t),l===n?Q[l].p(t,e):(K(),X(Q[n],1,1,()=>{Q[n]=null}),Y(),c=Q[l],c||(c=Q[l]=J[l](t),c.c()),U(c,1),c.m(o,u)),144&e[0]){let n;for(tt=t[4],n=0;n<tt.length;n+=1){const s=$t(t,tt,n);et[n]?et[n].p(s,e):(et[n]=_t(s),et[n].c(),et[n].m(d,null))}for(;n<et.length;n+=1)et[n].d(1);et.length=tt.length}let s=w;w=rt(t),w===s?st[w].p(t,e):(K(),X(st[s],1,1,()=>{st[s]=null}),Y(),k=st[w],k||(k=st[w]=nt[w](t),k.c()),U(k,1),k.m(m,null)),(!z||32&e[0]&&q!==(q=i("mute-button fas "+(t[5]?"fa-volume-mute":"fa-volume-up"))+" svelte-13tr27"))&&x(C,"class",q)},i(t){z||(U(c),U(k),z=!0)},o(t){X(c),X(k),z=!1},d(t){g(e),t&&g(s),t&&g(a),Q[l].d(),v(et,t),st[w].d(),F=!1,r(Z)}}}function Mt(t,e,n){let s=!1;let r=!1,a=-1,o=!1,i=!1,l=!1,{monsters:c=["slimes","goblins","kobolds","bandits","ogres","sandworms","Githyanki","illithids","a beholder","a dragon"]}=e,{ranks:u=[{name:"Porcelain",class:"tag small"},{name:"Obsidian",class:"tag small"},{name:"Steel",class:"tag small"},{name:"Sapphire",class:"tag small"},{name:"Emerald",class:"tag small"},{name:"Ruby",class:"tag small"},{name:"Bronze",class:"tag small"},{name:"Silver",class:"tag small"},{name:"Gold",class:"tag small"},{name:"Platinum",class:"tag large"}]}=e,d=0,{question:f=""}=e,{correctAnswer:m=""}=e,{answers:h=[]}=e;function p(){const t=vt[d][Math.floor(Math.random()*vt[d].length)];n(0,f=t.question),n(19,m=t.correctAnswer),n(1,h=t.answers)}function g(t,e){if(t.stopPropagation(),n(6,r=!0),"start"===e){let t=document.getElementById("win");t.pause(),t.currentTime=0,n(7,a=0),n(8,o=!0),n(11,k=15),p(),A()}else"replay"===e&&(n(10,l=!1),n(9,i=!1),n(8,o=!1),n(7,a=-1),d=0)}let{choiceText:v=""}=e,{choiceIdx:y=0}=e,{final:w=!1}=e;function b(t,e,s){t.preventDefault(),n(20,v=e),n(21,y=s),n(2,w=!0),T()}function $(t,e){t.preventDefault(),n(2,w=!1),e?function(t,e){if(t===m)document.getElementById(e).classList.add("green"),n(0,f="Correct!"),s||(d<9?document.getElementById("correct").play():document.getElementById("win").play()),setTimeout(()=>{document.getElementById(e).classList.remove("green"),d+=1,n(7,a+=1),d<=9?(n(11,k=15),A(),p()):n(9,i=!0)},5e3);else{n(0,f="Wrong!"),s||document.getElementById("lose").play(),document.getElementById(e).classList.add("red");let t=document.getElementsByClassName("answer");for(let e=0;e<t.length;e++)t[e].classList.contains(m.split(" ").join("-"))&&t[e].classList.add("green");setTimeout(()=>{n(10,l=!0)},5e3)}}(v,y):A()}let x,k=15;function A(){x=setInterval(()=>{n(11,k-=1)},1e3)}function T(){clearInterval(x)}return t.$$set=t=>{"monsters"in t&&n(3,c=t.monsters),"ranks"in t&&n(4,u=t.ranks),"question"in t&&n(0,f=t.question),"correctAnswer"in t&&n(19,m=t.correctAnswer),"answers"in t&&n(1,h=t.answers),"choiceText"in t&&n(20,v=t.choiceText),"choiceIdx"in t&&n(21,y=t.choiceIdx),"final"in t&&n(2,w=t.final)},[f,h,w,c,u,s,r,a,o,i,l,k,function(){if(n(5,s=!s),s){["correct","lose","win","shia-song"].forEach(t=>{let e=document.getElementById(t);e.pause(),e.currentTime=0})}},function(t,{delay:e=600,duration:n=1e3}){const s=+getComputedStyle(t).opacity;return{easing:it,delay:e,duration:n,css:t=>"opacity: "+t*s}},function(t,{duration:e=5e3}){const n=+getComputedStyle(t).width,s=+getComputedStyle(t).height;return{easing:it,duration:e,css:t=>"width: "+t*n,css:t=>"height: "+t*s}},g,b,$,T,m,v,y,t=>g(t,"start"),t=>g(t,"replay"),t=>g(t,"replay"),t=>g(t,"replay"),t=>$(t,!0),t=>$(t,!1),(t,e,n)=>b(n,t,e),(t,e,n)=>b(n,t,e),()=>s?"":document.getElementById("shia-song").play()]}return new class extends at{constructor(t){super(),rt(this,t,Mt,jt,o,{monsters:3,ranks:4,question:0,correctAnswer:19,answers:1,choiceText:20,choiceIdx:21,final:2},[-1,-1])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
