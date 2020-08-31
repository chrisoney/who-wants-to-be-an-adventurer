var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function a(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t){return null==t?"":t}const l="undefined"!=typeof window;let c=l?()=>window.performance.now():()=>Date.now(),u=l?t=>requestAnimationFrame(t):t;const d=new Set;function f(t){d.forEach(e=>{e.c(t)||(d.delete(e),e.f())}),0!==d.size&&u(f)}function m(t){let e;return 0===d.size&&u(f),{promise:new Promise(n=>{d.add(e={c:t,f:n})}),abort(){d.delete(e)}}}function h(t,e){t.appendChild(e)}function w(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function g(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function b(){return y(" ")}function $(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}const A=new Set;let z,T=0;function _(t,e,n,s,r,a,o,i=0){const l=16.666/s;let c="{\n";for(let t=0;t<=1;t+=l){const s=e+(n-e)*a(t);c+=100*t+`%{${o(s,1-s)}}\n`}const u=c+`100% {${o(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${i}`,f=t.ownerDocument;A.add(f);const m=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(v("style")).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[d]||(h[d]=!0,m.insertRule(`@keyframes ${d} ${u}`,m.cssRules.length));const w=t.style.animation||"";return t.style.animation=`${w?w+", ":""}${d} ${s}ms linear ${r}ms 1 both`,T+=1,d}function C(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-s.length;r&&(t.style.animation=s.join(", "),T-=r,T||u(()=>{T||(A.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),A.clear())}))}function q(t){z=t}const E=[],B=[],R=[],W=[],I=Promise.resolve();let S=!1;function L(t){R.push(t)}let H=!1;const j=new Set;function M(){if(!H){H=!0;do{for(let t=0;t<E.length;t+=1){const e=E[t];q(e),D(e.$$)}for(E.length=0;B.length;)B.pop()();for(let t=0;t<R.length;t+=1){const e=R[t];j.has(e)||(j.add(e),e())}R.length=0}while(E.length);for(;W.length;)W.pop()();S=!1,H=!1,j.clear()}}function D(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}let O;function G(){return O||(O=Promise.resolve(),O.then(()=>{O=null})),O}function N(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const P=new Set;let F;function K(){F={r:0,c:[],p:F}}function Y(){F.r||r(F.c),F=F.p}function U(t,e){t&&t.i&&(P.delete(t),t.i(e))}function X(t,e,n,s){if(t&&t.o){if(P.has(t))return;P.add(t),F.c.push(()=>{P.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const Z={duration:0};function J(n,s,r){let o,i,l=s(n,r),u=!1,d=0;function f(){o&&C(n,o)}function h(){const{delay:s=0,duration:r=300,easing:a=e,tick:h=t,css:w}=l||Z;w&&(o=_(n,0,1,r,s,a,w,d++)),h(0,1);const p=c()+s,g=p+r;i&&i.abort(),u=!0,L(()=>N(n,!0,"start")),i=m(t=>{if(u){if(t>=g)return h(1,0),N(n,!0,"end"),f(),u=!1;if(t>=p){const e=a((t-p)/r);h(e,1-e)}}return u})}let w=!1;return{start(){w||(C(n),a(l)?(l=l(),G().then(h)):h())},invalidate(){w=!1},end(){u&&(f(),u=!1)}}}function Q(n,s,o,i){let l=s(n,o),u=i?0:1,d=null,f=null,h=null;function w(){h&&C(n,h)}function p(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function g(s){const{delay:a=0,duration:o=300,easing:i=e,tick:g=t,css:v}=l||Z,y={start:c()+a,b:s};s||(y.group=F,F.r+=1),d?f=y:(v&&(w(),h=_(n,u,s,o,a,i,v)),s&&g(0,1),d=p(y,o),L(()=>N(n,s,"start")),m(t=>{if(f&&t>f.start&&(d=p(f,o),f=null,N(n,d.b,"start"),v&&(w(),h=_(n,u,d.b,d.duration,0,i,l.css))),d)if(t>=d.end)g(u=d.b,1-u),N(n,d.b,"end"),f||(d.b?w():--d.group.r||r(d.group.c)),d=null;else if(t>=d.start){const e=t-d.start;u=d.a+d.d*i(e/d.duration),g(u,1-u)}return!(!d&&!f)}))}return{run(t){a(l)?G().then(()=>{l=l(),g(t)}):g(t)},end(){w(),d=f=null}}}const V="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function tt(t){t&&t.c()}function et(t,e,s){const{fragment:o,on_mount:i,on_destroy:l,after_update:c}=t.$$;o&&o.m(e,s),L(()=>{const e=i.map(n).filter(a);l?l.push(...e):r(e),t.$$.on_mount=[]}),c.forEach(L)}function nt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){-1===t.$$.dirty[0]&&(E.push(t),S||(S=!0,I.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function rt(e,n,a,o,i,l,c=[-1]){const u=z;q(e);const d=n.props||{},f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:c,skip_bound:!1};let m=!1;if(f.ctx=a?a(e,d,(t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),m&&st(e,t)),n}):[],f.update(),m=!0,r(f.before_update),f.fragment=!!o&&o(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(p)}else f.fragment&&f.fragment.c();n.intro&&U(e.$$.fragment),et(e,n.target,n.anchor),M()}q(u)}class at{$destroy(){nt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ot(t){const e=t-1;return e*e*e+1}function it(t){return--t*t*t*t*t+1}function lt(e){let n,s;return{c(){n=v("div"),s=y(e[0]),x(n,"class","question svelte-1dg4i2e")},m(t,e){w(t,n,e),h(n,s)},p(t,[e]){1&e&&k(s,t[0])},i:t,o:t,d(t){t&&p(n)}}}function ct(t,e,n){let{questionText:s}=e;return t.$$set=t=>{"questionText"in t&&n(0,s=t.questionText)},[s]}class ut extends at{constructor(t){super(),rt(this,t,ct,lt,o,{questionText:0})}}function dt(e){let n,s,r,a,o,i,l,c,u,d=e[2][e[1]]+"";return{c(){n=v("div"),s=v("span"),s.textContent="♦",r=b(),a=v("span"),o=y(d),i=y(":"),l=b(),c=v("div"),u=y(e[0]),x(s,"class","diam svelte-1f3aymc"),x(a,"class","answer-letter svelte-1f3aymc"),x(c,"class","answer-text svelte-1f3aymc"),x(n,"class","answer-container svelte-1f3aymc")},m(t,e){w(t,n,e),h(n,s),h(n,r),h(n,a),h(a,o),h(a,i),h(n,l),h(n,c),h(c,u)},p(t,[e]){6&e&&d!==(d=t[2][t[1]]+"")&&k(o,d),1&e&&k(u,t[0])},i:t,o:t,d(t){t&&p(n)}}}function ft(t,e,n){let{answerText:s}=e,{idx:r}=e,{answerKeys:a=["A","B","C","D"]}=e;return t.$$set=t=>{"answerText"in t&&n(0,s=t.answerText),"idx"in t&&n(1,r=t.idx),"answerKeys"in t&&n(2,a=t.answerKeys)},[s,r,a]}class mt extends at{constructor(t){super(),rt(this,t,ft,dt,o,{answerText:0,idx:1,answerKeys:2})}}function ht(t){let e,n,s,r,a,o,i;return{c(){e=v("link"),n=b(),s=v("div"),r=v("span"),a=y(t[0]),x(e,"href","https://fonts.googleapis.com/css2?family=Balthazar&display=swap"),x(e,"rel","stylesheet"),x(r,"class","timer-num svelte-kl566y"),x(s,"class","timer-container svelte-kl566y")},m(t,o){h(document.head,e),w(t,n,o),w(t,s,o),h(s,r),h(r,a),i=!0},p(t,[e]){(!i||1&e)&&k(a,t[0])},i(e){i||(L(()=>{o||(o=Q(s,t[1],{},!0)),o.run(1)}),i=!0)},o(e){o||(o=Q(s,t[1],{},!1)),o.run(0),i=!1},d(t){p(e),t&&p(n),t&&p(s),t&&o&&o.end()}}}function wt(t,e,n){let{timeLeft:s}=e;return t.$$set=t=>{"timeLeft"in t&&n(0,s=t.timeLeft)},[s,function(t,{delay:e=0,duration:n=1e3}){const s=+getComputedStyle(t).opacity;return{easing:it,delay:e,duration:n,css:t=>"opacity: "+t*s}}]}class pt extends at{constructor(t){super(),rt(this,t,wt,ht,o,{timeLeft:0})}}const gt={0:[{question:"What is the standard abbreviation for your Charisma score?",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]},{question:"What is the standard abbreviation for your Dexterity score?",correctAnswer:"DEX",answers:["CHA","DEX","WIS","CON"]}],1:[{question:"Which of these creatures is famous for transforming into treasure to trick adventurers?",correctAnswer:"Mimic",answers:["Bugbear","Mimic","Acid Slime","Werewolf"]},{question:"Which type of damage prevents a troll from regenerating?",correctAnswer:"Fire",answers:["Ice","Lightning","Radiant","Fire"]}],2:[{question:"How does a monk gain their powers?",correctAnswer:"Through their own life-force or ki",answers:["Through nature","Through a deity","Through their own life-force or ki","Through extensive study"]},{question:"Which is a wizard's most important piece of equipment?",correctAnswer:"Spellbook",answers:["Wand","Spellbook","Robes and wizard hat","Staff"]}],3:[{question:"There are two main types of dragons, metallic and …",correctAnswer:"Chromatic",answers:["Chromatic","Aberrant","Abyssal","Celestial"]},{question:"How do clerics get their spells?",correctAnswer:"Gaining the favor of a deity",answers:["Elaborate ritual dances","From scrolls","Gaining the favor of a deity","Spellbooks"]}],4:[{question:"The Barbarian class is known for a unique ability that allows them to inflict extra damage. What is it called?",correctAnswer:"Rage",answers:["Fury","Intimidation","Wildstrike","Rage"]},{question:"What is the only way to ensure the death of a lich?",correctAnswer:"Destroy its phylactery",answers:["Use a resurrection spell","Engulf it in flames","Remove its head","Destroy its phylactery"]}],5:[{question:"Which wizard is known for creating a variety of spells involving illusory hands and fists?",correctAnswer:"Bigby",answers:["Halaster","Harry","Bigby","Mordenkainen"]},{question:"What kind of special breath does a silver dragon have?",correctAnswer:"Cold Breath",answers:["Fire Breath","Cold Breath","Acid Spray","Lightning Breath"]}],6:[{question:"Which monster is feared not for the danger to an adventurer's life, but rather to their magical equipment?",correctAnswer:"Rust monster",answers:["Blue dragon","Hook horror","Rust monster","Arcanaloth"]},{question:"Which is the Arcane Tradition that focuses on modifying matter?",correctAnswer:"Transmutation",answers:["Abjuration","Evocation","Enchantment","Transmutation"]}],7:[{question:"Which monster has a large central eye, multiple spellcasting eyestalks and floats above the ground?",correctAnswer:"A beholder",answers:["A mind flayer","A bullette","A beholder","An intellect devourer"]},{question:"What is another name for a mind-flayer?",correctAnswer:"Illithid",answers:["Illithid","Kuo-toa","Malcanthet","Beholder"]}],8:[{question:"This creature can be identified by their lion head and backwards-facing hands.",correctAnswer:"Rakshasa",answers:["Githyanki","Rakshasa","Duergar","Ogre"]},{question:"Which kind of undead is Count Strahd von Zarovich?",correctAnswer:"A vampire",answers:["A vampire","A revenant","A mummy lord","A lich"]}],9:[{question:"Who is the god that most orcs worship?",correctAnswer:"Gruumsh",answers:["Lolth","Tiamat","Gruumsh","Kurtulmak"]},{question:"Which faction of the Forgotten Realms wants to acquire wealth and power, at any cost?",correctAnswer:"The Zhentarim",answers:["The Zhentarim","The Harpers","The Thieves' Guild","The Assassin's Blade"]}]};function vt(t,{delay:e=0,duration:n=400,easing:s=ot,x:r=0,y:a=0,opacity:o=0}){const i=getComputedStyle(t),l=+i.opacity,c="none"===i.transform?"":i.transform,u=l*(1-o);return{delay:e,duration:n,easing:s,css:(t,e)=>`\n\t\t\ttransform: ${c} translate(${(1-t)*r}px, ${(1-t)*a}px);\n\t\t\topacity: ${l-u*e}`}}const{document:yt}=V;function bt(t,e,n){const s=t.slice();return s[36]=e[n],s[38]=n,s}function $t(t,e,n){const s=t.slice();return s[39]=e[n],s[41]=n,s}function xt(t){let e,n,s,r,a,o;return a=new pt({props:{timeLeft:t[11]}}),{c(){e=v("img"),r=b(),tt(a.$$.fragment),x(e,"class","title-small svelte-uw5vwz"),e.src!==(n="images/title-2.png")&&x(e,"src","images/title-2.png"),x(e,"alt","title")},m(t,n){w(t,e,n),w(t,r,n),et(a,t,n),o=!0},p(t,e){const n={};2048&e[0]&&(n.timeLeft=t[11]),a.$set(n)},i(n){o||(L(()=>{s||(s=Q(e,t[14],{},!0)),s.run(1)}),U(a.$$.fragment,n),o=!0)},o(n){s||(s=Q(e,t[14],{},!1)),s.run(0),X(a.$$.fragment,n),o=!1},d(t){t&&p(e),t&&s&&s.end(),t&&p(r),nt(a,t)}}}function kt(e){let n,s;return{c(){n=v("img"),x(n,"class","title-big svelte-uw5vwz"),n.src!==(s="images/title-2.png")&&x(n,"src","images/title-2.png"),x(n,"alt","title")},m(t,e){w(t,n,e)},p:t,i:t,o:t,d(t){t&&p(n)}}}function At(t){let e,n,s,r,a=t[39].name+"";return{c(){e=v("div"),n=v("div"),s=y(a),x(n,"class",r=i(t[39].class)+" svelte-uw5vwz"),x(e,"class","tag-contain svelte-uw5vwz")},m(t,r){w(t,e,r),h(e,n),h(n,s)},p(t,e){16&e[0]&&a!==(a=t[39].name+"")&&k(s,a),16&e[0]&&r!==(r=i(t[39].class)+" svelte-uw5vwz")&&x(n,"class",r)},d(t){t&&p(e)}}}function zt(t){let e,n,s,r,a=t[39].name+"";return{c(){e=v("div"),n=v("div"),s=y(a),x(n,"class",r=i(t[39].class+" curr-font")+" svelte-uw5vwz"),x(e,"class","tag-contain curr svelte-uw5vwz")},m(t,r){w(t,e,r),h(e,n),h(n,s)},p(t,e){16&e[0]&&a!==(a=t[39].name+"")&&k(s,a),16&e[0]&&r!==(r=i(t[39].class+" curr-font")+" svelte-uw5vwz")&&x(n,"class",r)},d(t){t&&p(e)}}}function Tt(t){let e,n;function s(t,e){return t[41]===t[7]?zt:At}let r=s(t),a=r(t);return{c(){e=v("div"),a.c(),n=b(),x(e,"class","tag-area svelte-uw5vwz")},m(t,s){w(t,e,s),a.m(e,null),h(e,n)},p(t,o){r===(r=s(t))&&a?a.p(t,o):(a.d(1),a=r(t),a&&(a.c(),a.m(e,n)))},d(t){t&&p(e),a.d()}}}function _t(t){let e,n,s,r,a;const o=[Wt,Rt],i=[];function l(t,e){return t[2]?0:1}e=l(t),n=i[e]=o[e](t);let c=t[1],u=[];for(let e=0;e<c.length;e+=1)u[e]=Lt(bt(t,c,e));const d=t=>X(u[t],1,1,()=>{u[t]=null});return{c(){n.c(),s=b(),r=v("div");for(let t=0;t<u.length;t+=1)u[t].c();x(r,"class","answers svelte-uw5vwz")},m(t,n){i[e].m(t,n),w(t,s,n),w(t,r,n);for(let t=0;t<u.length;t+=1)u[t].m(r,null);a=!0},p(t,a){let f=e;if(e=l(t),e===f?i[e].p(t,a):(K(),X(i[f],1,1,()=>{i[f]=null}),Y(),n=i[e],n||(n=i[e]=o[e](t),n.c()),U(n,1),n.m(s.parentNode,s)),65538&a[0]){let e;for(c=t[1],e=0;e<c.length;e+=1){const n=bt(t,c,e);u[e]?(u[e].p(n,a),U(u[e],1)):(u[e]=Lt(n),u[e].c(),U(u[e],1),u[e].m(r,null))}for(K(),e=c.length;e<u.length;e+=1)d(e);Y()}},i(t){if(!a){U(n);for(let t=0;t<c.length;t+=1)U(u[t]);a=!0}},o(t){X(n),u=u.filter(Boolean);for(let t=0;t<u.length;t+=1)X(u[t]);a=!1},d(t){i[e].d(t),t&&p(s),t&&p(r),g(u,t)}}}function Ct(e){let n,s,r,a,o,i,l,c,u;return{c(){n=v("div"),n.textContent=""+e[18](),s=b(),r=v("div"),a=v("span"),a.textContent='Oops, you ran out of time! Click \n\t\t\t\t"Replay" to play again!',o=b(),i=v("button"),i.textContent="Replay",x(n,"class","ignore svelte-uw5vwz"),x(a,"class","loss-message"),x(i,"class","next svelte-uw5vwz"),x(r,"class","message svelte-uw5vwz")},m(t,l){w(t,n,l),w(t,s,l),w(t,r,l),h(r,a),h(r,o),h(r,i),c||(u=$(i,"click",e[25]),c=!0)},p:t,i(t){l||L(()=>{l=J(r,e[13],{}),l.start()})},o:t,d(t){t&&p(n),t&&p(s),t&&p(r),c=!1,u()}}}function qt(e){let n,s,r,a,o,i,l;return{c(){n=v("div"),s=v("span"),s.textContent='You made it to Platinum Rank! You stand as a beacon of hope\n\t\t\t\tfor adventuring teams across the land! Unfortunately, the fight never truly ends. Click \n\t\t\t\t"Replay" to play again!',r=b(),a=v("button"),a.textContent="Replay",x(s,"class","loss-message"),x(a,"class","next svelte-uw5vwz"),x(n,"class","message svelte-uw5vwz")},m(t,o){w(t,n,o),h(n,s),h(n,r),h(n,a),i||(l=$(a,"click",e[24]),i=!0)},p:t,i(t){o||L(()=>{o=J(n,e[13],{}),o.start()})},o:t,d(t){t&&p(n),i=!1,l()}}}function Et(e){let n,s,r,a,o,i,l,c,u,d,f,m,g=e[4][e[7]].name+"",A=e[3][e[7]]+"";return{c(){n=v("div"),s=v("span"),r=y("Uh oh! You made it to "),a=y(g),o=y(" Rank but then\n\t\t\t\tyou were defeated by "),i=y(A),l=y('. Better luck next time! Click "Replay"\n\t\t\t\tto play again!'),c=b(),u=v("button"),u.textContent="Replay",x(s,"class","loss-message"),x(u,"class","next svelte-uw5vwz"),x(n,"class","message svelte-uw5vwz")},m(t,d){w(t,n,d),h(n,s),h(s,r),h(s,a),h(s,o),h(s,i),h(s,l),h(n,c),h(n,u),f||(m=$(u,"click",e[23]),f=!0)},p(t,e){144&e[0]&&g!==(g=t[4][t[7]].name+"")&&k(a,g),136&e[0]&&A!==(A=t[3][t[7]]+"")&&k(i,A)},i(t){d||L(()=>{d=J(n,e[13],{}),d.start()})},o:t,d(t){t&&p(n),f=!1,m()}}}function Bt(e){let n,s,r,a,o,i,l;return{c(){n=v("div"),s=v("div"),s.textContent='Welcome to the game! Press "Start" to continue!',r=b(),a=v("button"),a.textContent="Start",x(s,"class","opener-message"),x(a,"class","next svelte-uw5vwz"),x(n,"class","message svelte-uw5vwz")},m(t,o){w(t,n,o),h(n,s),h(n,r),h(n,a),i||(l=$(a,"click",e[22]),i=!0)},p:t,i(t){o||L(()=>{o=J(n,e[13],{}),o.start()})},o:t,d(t){t&&p(n),i=!1,l()}}}function Rt(t){let e,n;return e=new ut({props:{questionText:t[0]}}),{c(){tt(e.$$.fragment)},m(t,s){et(e,t,s),n=!0},p(t,n){const s={};1&n[0]&&(s.questionText=t[0]),e.$set(s)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function Wt(e){let n,s,a,o,i,l,c,u,d;return{c(){n=v("div"),s=v("span"),s.textContent="Is that your final answer?",a=b(),o=v("div"),i=v("button"),i.textContent="Yes",l=b(),c=v("button"),c.textContent="No",x(s,"class","final-answer"),x(i,"class","next svelte-uw5vwz"),x(c,"class","next red svelte-uw5vwz"),x(o,"class","final-buttons"),x(n,"class","message svelte-uw5vwz")},m(t,r){w(t,n,r),h(n,s),h(n,a),h(n,o),h(o,i),h(o,l),h(o,c),u||(d=[$(i,"click",e[26]),$(c,"click",e[27])],u=!0)},p:t,i:t,o:t,d(t){t&&p(n),u=!1,r(d)}}}function It(t){let e,n,s,r,a,o,l,c,u;function d(...e){return t[29](t[36],t[38],...e)}return n=new mt({props:{class:"ans",answerText:t[36],idx:t[38]}}),{c(){e=v("button"),tt(n.$$.fragment),s=b(),x(e,"class",r=i(t[36].split(" ").join("-")+" answer")+" svelte-uw5vwz"),x(e,"id",a=t[38])},m(t,r){w(t,e,r),et(n,e,null),h(e,s),l=!0,c||(u=$(e,"click",d),c=!0)},p(s,a){t=s;const o={};2&a[0]&&(o.answerText=t[36]),n.$set(o),(!l||2&a[0]&&r!==(r=i(t[36].split(" ").join("-")+" answer")+" svelte-uw5vwz"))&&x(e,"class",r)},i(t){l||(U(n.$$.fragment,t),L(()=>{o||(o=Q(e,vt,{x:200,duration:500},!0)),o.run(1)}),l=!0)},o(t){X(n.$$.fragment,t),o||(o=Q(e,vt,{x:200,duration:500},!1)),o.run(0),l=!1},d(t){t&&p(e),nt(n),t&&o&&o.end(),c=!1,u()}}}function St(t){let e,n,s,r,a,o,l,c,u;function d(...e){return t[28](t[36],t[38],...e)}return n=new mt({props:{class:"ans",answerText:t[36],idx:t[38]}}),{c(){e=v("button"),tt(n.$$.fragment),s=b(),x(e,"class",r=i(t[36].split(" ").join("-")+" answer")+" svelte-uw5vwz"),x(e,"id",a=t[38])},m(t,r){w(t,e,r),et(n,e,null),h(e,s),l=!0,c||(u=$(e,"click",d),c=!0)},p(s,a){t=s;const o={};2&a[0]&&(o.answerText=t[36]),n.$set(o),(!l||2&a[0]&&r!==(r=i(t[36].split(" ").join("-")+" answer")+" svelte-uw5vwz"))&&x(e,"class",r)},i(t){l||(U(n.$$.fragment,t),L(()=>{o||(o=Q(e,vt,{x:-200,duration:500},!0)),o.run(1)}),l=!0)},o(t){X(n.$$.fragment,t),o||(o=Q(e,vt,{x:-200,duration:500},!1)),o.run(0),l=!1},d(t){t&&p(e),nt(n),t&&o&&o.end(),c=!1,u()}}}function Lt(t){let e,n,s,r;const a=[St,It],o=[];return e=function(t,e){return t[38]%2==0?0:1}(t),n=o[e]=a[e](t),{c(){n.c(),s=y("")},m(t,n){o[e].m(t,n),w(t,s,n),r=!0},p(t,e){n.p(t,e)},i(t){r||(U(n),r=!0)},o(t){X(n),r=!1},d(t){o[e].d(t),t&&p(s)}}}function Ht(t){let e,n,s,a,o,l,c,u,d,f,m,y,k,A,z,T,_,C,q,E,B,R,W,I,S,L,H,j,M,D,O,G,N,P,F,Z,J;const Q=[kt,xt],V=[];function tt(t,e){return t[6]?1:0}c=tt(t),u=V[c]=Q[c](t);let et=t[4],nt=[];for(let e=0;e<et.length;e+=1)nt[e]=Tt($t(t,et,e));const st=[Bt,Et,qt,Ct,_t],rt=[];function at(t,e){return t[8]?t[10]?1:t[9]?2:0===t[11]?3:4:0}return k=at(t),A=rt[k]=st[k](t),{c(){e=v("script"),s=b(),a=v("main"),o=v("div"),l=v("div"),u.c(),d=b(),f=v("div");for(let t=0;t<nt.length;t+=1)nt[t].c();m=b(),y=v("div"),A.c(),z=b(),T=v("div"),T.innerHTML='<div class="about-container svelte-uw5vwz"><img class="face svelte-uw5vwz" src="images/face.jpg" alt="face"> \n\t\t\t<div class="about-popup svelte-uw5vwz"><a href="https://github.com/chrisoney/"><span class="about-icon fab fa-github svelte-uw5vwz"></span></a> \n\t\t\t\t<a href="https://www.linkedin.com/in/christopher-oney-317b84132/"><span class="about-icon fab fa-linkedin svelte-uw5vwz"></span></a> \n\t\t\t\t<a href="https://angel.co/u/christopher-oney"><span class="about-icon fab fa-angellist svelte-uw5vwz"></span></a></div></div>',_=b(),C=v("div"),E=b(),B=v("audio"),B.innerHTML='<track kind="captions">',W=b(),I=v("audio"),I.innerHTML='<track kind="captions">',L=b(),H=v("audio"),H.innerHTML='<track kind="captions">',M=b(),D=v("audio"),D.innerHTML='<track kind="captions">',G=b(),N=v("img"),e.src!==(n="https://kit.fontawesome.com/a229c5b13d.js")&&x(e,"src","https://kit.fontawesome.com/a229c5b13d.js"),x(e,"crossorigin","anonymous"),x(l,"class","top-left svelte-uw5vwz"),x(f,"class","board svelte-uw5vwz"),x(o,"class","top svelte-uw5vwz"),x(y,"class","bottom svelte-uw5vwz"),x(T,"class","about svelte-uw5vwz"),x(C,"class",q=i("mute-button fas "+(t[5]?"fa-volume-mute":"fa-volume-up"))+" svelte-uw5vwz"),B.src!==(R="sounds/correct.mp3")&&x(B,"src","sounds/correct.mp3"),x(B,"id","correct"),x(B,"class","svelte-uw5vwz"),I.src!==(S="sounds/lose.mp3")&&x(I,"src","sounds/lose.mp3"),x(I,"id","lose"),x(I,"class","svelte-uw5vwz"),H.src!==(j="sounds/win.mp3")&&x(H,"src","sounds/win.mp3"),x(H,"id","win"),x(H,"class","svelte-uw5vwz"),D.src!==(O="sounds/shia-song.mp3")&&x(D,"src","sounds/shia-song.mp3"),x(D,"id","shia-song"),x(D,"class","svelte-uw5vwz"),x(N,"class","shia svelte-uw5vwz"),N.src!==(P="images/hidden-shia.png")&&x(N,"src","images/hidden-shia.png"),x(N,"alt","shia labeouf"),x(a,"class","svelte-uw5vwz")},m(n,r){h(yt.head,e),w(n,s,r),w(n,a,r),h(a,o),h(o,l),V[c].m(l,null),h(o,d),h(o,f);for(let t=0;t<nt.length;t+=1)nt[t].m(f,null);h(a,m),h(a,y),rt[k].m(y,null),h(a,z),h(a,T),h(a,_),h(a,C),h(a,E),h(a,B),h(a,W),h(a,I),h(a,L),h(a,H),h(a,M),h(a,D),h(a,G),h(a,N),F=!0,Z||(J=[$(C,"click",t[12]),$(N,"click",t[30])],Z=!0)},p(t,e){let n=c;if(c=tt(t),c===n?V[c].p(t,e):(K(),X(V[n],1,1,()=>{V[n]=null}),Y(),u=V[c],u||(u=V[c]=Q[c](t),u.c()),U(u,1),u.m(l,null)),144&e[0]){let n;for(et=t[4],n=0;n<et.length;n+=1){const s=$t(t,et,n);nt[n]?nt[n].p(s,e):(nt[n]=Tt(s),nt[n].c(),nt[n].m(f,null))}for(;n<nt.length;n+=1)nt[n].d(1);nt.length=et.length}let s=k;k=at(t),k===s?rt[k].p(t,e):(K(),X(rt[s],1,1,()=>{rt[s]=null}),Y(),A=rt[k],A||(A=rt[k]=st[k](t),A.c()),U(A,1),A.m(y,null)),(!F||32&e[0]&&q!==(q=i("mute-button fas "+(t[5]?"fa-volume-mute":"fa-volume-up"))+" svelte-uw5vwz"))&&x(C,"class",q)},i(t){F||(U(u),U(A),F=!0)},o(t){X(u),X(A),F=!1},d(t){p(e),t&&p(s),t&&p(a),V[c].d(),g(nt,t),rt[k].d(),Z=!1,r(J)}}}function jt(t,e,n){let s=!1;let r=!1,a=-1,o=!1,i=!1,l=!1,{monsters:c=["slimes","goblins","kobolds","bandits","ogres","sandworms","Githyanki","illithids","a beholder","a dragon"]}=e,{ranks:u=[{name:"Porcelain",class:"tag small"},{name:"Obsidian",class:"tag small"},{name:"Steel",class:"tag small"},{name:"Sapphire",class:"tag small"},{name:"Emerald",class:"tag small"},{name:"Ruby",class:"tag small"},{name:"Bronze",class:"tag small"},{name:"Silver",class:"tag small"},{name:"Gold",class:"tag small"},{name:"Platinum",class:"tag large"}]}=e,d=0,{question:f=""}=e,{correctAnswer:m=""}=e,{answers:h=[]}=e;function w(){const t=gt[d][Math.floor(Math.random()*gt[d].length)];n(0,f=t.question),n(19,m=t.correctAnswer),n(1,h=t.answers)}function p(t,e){if(t.stopPropagation(),n(6,r=!0),"start"===e){let t=document.getElementById("win");t.pause(),t.currentTime=0,n(7,a=0),n(8,o=!0),n(11,k=15),w(),A()}else"replay"===e&&(n(10,l=!1),n(9,i=!1),n(8,o=!1),n(7,a=-1),d=0)}let{choiceText:g=""}=e,{choiceIdx:v=0}=e,{final:y=!1}=e;function b(t,e,s){t.preventDefault(),n(20,g=e),n(21,v=s),n(2,y=!0),z()}function $(t,e){t.preventDefault(),n(2,y=!1),e?function(t,e){if(t===m)document.getElementById(e).classList.add("green"),n(0,f="Correct!"),s||(d<9?document.getElementById("correct").play():document.getElementById("win").play()),setTimeout(()=>{document.getElementById(e).classList.remove("green"),d+=1,n(7,a+=1),d<=9?(n(11,k=15),A(),w()):n(9,i=!0)},5e3);else{n(0,f="Wrong!"),s||document.getElementById("lose").play(),document.getElementById(e).classList.add("red");let t=document.getElementsByClassName("answer");for(let e=0;e<t.length;e++)t[e].classList.contains(m.split(" ").join("-"))&&t[e].classList.add("green");setTimeout(()=>{n(10,l=!0)},5e3)}}(g,v):A()}let x,k=15;function A(){x=setInterval(()=>{n(11,k-=1)},1e3)}function z(){clearInterval(x)}return t.$$set=t=>{"monsters"in t&&n(3,c=t.monsters),"ranks"in t&&n(4,u=t.ranks),"question"in t&&n(0,f=t.question),"correctAnswer"in t&&n(19,m=t.correctAnswer),"answers"in t&&n(1,h=t.answers),"choiceText"in t&&n(20,g=t.choiceText),"choiceIdx"in t&&n(21,v=t.choiceIdx),"final"in t&&n(2,y=t.final)},[f,h,y,c,u,s,r,a,o,i,l,k,function(){if(n(5,s=!s),s){["correct","lose","win","shia-song"].forEach(t=>{let e=document.getElementById(t);e.pause(),e.currentTime=0})}},function(t,{delay:e=600,duration:n=1e3}){const s=+getComputedStyle(t).opacity;return{easing:it,delay:e,duration:n,css:t=>"opacity: "+t*s}},function(t,{delay:e=0,duration:n=1e3}){const s=+getComputedStyle(t).opacity;return{easing:it,delay:e,duration:n,css:t=>"opacity: "+t*s}},p,b,$,z,m,g,v,t=>p(t,"start"),t=>p(t,"replay"),t=>p(t,"replay"),t=>p(t,"replay"),t=>$(t,!0),t=>$(t,!1),(t,e,n)=>b(n,t,e),(t,e,n)=>b(n,t,e),()=>s?"":document.getElementById("shia-song").play()]}return new class extends at{constructor(t){super(),rt(this,t,jt,Ht,o,{monsters:3,ranks:4,question:0,correctAnswer:19,answers:1,choiceText:20,choiceIdx:21,final:2},[-1,-1])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
