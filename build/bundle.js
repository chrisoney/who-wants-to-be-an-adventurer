var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function a(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t){return null==t?"":t}const c="undefined"!=typeof window;let l=c?()=>window.performance.now():()=>Date.now(),u=c?t=>requestAnimationFrame(t):t;const d=new Set;function f(t){d.forEach(e=>{e.c(t)||(d.delete(e),e.f())}),0!==d.size&&u(f)}function m(t){let e;return 0===d.size&&u(f),{promise:new Promise(n=>{d.add(e={c:t,f:n})}),abort(){d.delete(e)}}}function h(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function v(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function b(){return y(" ")}function $(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}const A=new Set;let T,_=0;function q(t,e,n,s,r,a,o,i=0){const c=16.666/s;let l="{\n";for(let t=0;t<=1;t+=c){const s=e+(n-e)*a(t);l+=100*t+`%{${o(s,1-s)}}\n`}const u=l+`100% {${o(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${i}`,f=t.ownerDocument;A.add(f);const m=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(w("style")).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[d]||(h[d]=!0,m.insertRule(`@keyframes ${d} ${u}`,m.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?p+", ":""}${d} ${s}ms linear ${r}ms 1 both`,_+=1,d}function C(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-s.length;r&&(t.style.animation=s.join(", "),_-=r,_||u(()=>{_||(A.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),A.clear())}))}function E(t){T=t}const B=[],R=[],W=[],S=[],I=Promise.resolve();let L=!1;function j(t){W.push(t)}let D=!1;const H=new Set;function O(){if(!D){D=!0;do{for(let t=0;t<B.length;t+=1){const e=B[t];E(e),M(e.$$)}for(B.length=0;R.length;)R.pop()();for(let t=0;t<W.length;t+=1){const e=W[t];H.has(e)||(H.add(e),e())}W.length=0}while(B.length);for(;S.length;)S.pop()();L=!1,D=!1,H.clear()}}function M(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}let G;function N(){return G||(G=Promise.resolve(),G.then(()=>{G=null})),G}function P(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const z=new Set;let F;function K(){F={r:0,c:[],p:F}}function Y(){F.r||r(F.c),F=F.p}function U(t,e){t&&t.i&&(z.delete(t),t.i(e))}function X(t,e,n,s){if(t&&t.o){if(z.has(t))return;z.add(t),F.c.push(()=>{z.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const Z={duration:0};function J(n,s,r){let o,i,c=s(n,r),u=!1,d=0;function f(){o&&C(n,o)}function h(){const{delay:s=0,duration:r=300,easing:a=e,tick:h=t,css:p}=c||Z;p&&(o=q(n,0,1,r,s,a,p,d++)),h(0,1);const g=l()+s,v=g+r;i&&i.abort(),u=!0,j(()=>P(n,!0,"start")),i=m(t=>{if(u){if(t>=v)return h(1,0),P(n,!0,"end"),f(),u=!1;if(t>=g){const e=a((t-g)/r);h(e,1-e)}}return u})}let p=!1;return{start(){p||(C(n),a(c)?(c=c(),N().then(h)):h())},invalidate(){p=!1},end(){u&&(f(),u=!1)}}}function Q(n,s,o,i){let c=s(n,o),u=i?0:1,d=null,f=null,h=null;function p(){h&&C(n,h)}function g(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function v(s){const{delay:a=0,duration:o=300,easing:i=e,tick:v=t,css:w}=c||Z,y={start:l()+a,b:s};s||(y.group=F,F.r+=1),d?f=y:(w&&(p(),h=q(n,u,s,o,a,i,w)),s&&v(0,1),d=g(y,o),j(()=>P(n,s,"start")),m(t=>{if(f&&t>f.start&&(d=g(f,o),f=null,P(n,d.b,"start"),w&&(p(),h=q(n,u,d.b,d.duration,0,i,c.css))),d)if(t>=d.end)v(u=d.b,1-u),P(n,d.b,"end"),f||(d.b?p():--d.group.r||r(d.group.c)),d=null;else if(t>=d.start){const e=t-d.start;u=d.a+d.d*i(e/d.duration),v(u,1-u)}return!(!d&&!f)}))}return{run(t){a(c)?N().then(()=>{c=c(),v(t)}):v(t)},end(){p(),d=f=null}}}const V="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function tt(t){t&&t.c()}function et(t,e,s){const{fragment:o,on_mount:i,on_destroy:c,after_update:l}=t.$$;o&&o.m(e,s),j(()=>{const e=i.map(n).filter(a);c?c.push(...e):r(e),t.$$.on_mount=[]}),l.forEach(j)}function nt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){-1===t.$$.dirty[0]&&(B.push(t),L||(L=!0,I.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function rt(e,n,a,o,i,c,l=[-1]){const u=T;E(e);const d=n.props||{},f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:l,skip_bound:!1};let m=!1;if(f.ctx=a?a(e,d,(t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),m&&st(e,t)),n}):[],f.update(),m=!0,r(f.before_update),f.fragment=!!o&&o(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(g)}else f.fragment&&f.fragment.c();n.intro&&U(e.$$.fragment),et(e,n.target,n.anchor),O()}E(u)}class at{$destroy(){nt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ot(t){const e=t-1;return e*e*e+1}function it(t){return--t*t*t*t*t+1}function ct(e){let n,s;return{c(){n=w("div"),s=y(e[0]),x(n,"class","question svelte-1dg4i2e")},m(t,e){p(t,n,e),h(n,s)},p(t,[e]){1&e&&k(s,t[0])},i:t,o:t,d(t){t&&g(n)}}}function lt(t,e,n){let{questionText:s}=e;return t.$$set=t=>{"questionText"in t&&n(0,s=t.questionText)},[s]}class ut extends at{constructor(t){super(),rt(this,t,lt,ct,o,{questionText:0})}}function dt(e){let n,s,r,a,o,i,c,l,u,d=e[2][e[1]]+"";return{c(){n=w("div"),s=w("span"),s.textContent="♦",r=b(),a=w("span"),o=y(d),i=y(":"),c=b(),l=w("div"),u=y(e[0]),x(s,"class","diam svelte-1f3aymc"),x(a,"class","answer-letter svelte-1f3aymc"),x(l,"class","answer-text svelte-1f3aymc"),x(n,"class","answer-container svelte-1f3aymc")},m(t,e){p(t,n,e),h(n,s),h(n,r),h(n,a),h(a,o),h(a,i),h(n,c),h(n,l),h(l,u)},p(t,[e]){6&e&&d!==(d=t[2][t[1]]+"")&&k(o,d),1&e&&k(u,t[0])},i:t,o:t,d(t){t&&g(n)}}}function ft(t,e,n){let{answerText:s}=e,{idx:r}=e,{answerKeys:a=["A","B","C","D"]}=e;return t.$$set=t=>{"answerText"in t&&n(0,s=t.answerText),"idx"in t&&n(1,r=t.idx),"answerKeys"in t&&n(2,a=t.answerKeys)},[s,r,a]}class mt extends at{constructor(t){super(),rt(this,t,ft,dt,o,{answerText:0,idx:1,answerKeys:2})}}function ht(e){let n,s,r,a,o;return{c(){n=w("link"),s=b(),r=w("div"),a=w("span"),o=y(e[0]),x(n,"href","https://fonts.googleapis.com/css2?family=Balthazar&display=swap"),x(n,"rel","stylesheet"),x(a,"class","timer-num svelte-kl566y"),x(r,"class","timer-container svelte-kl566y")},m(t,e){h(document.head,n),p(t,s,e),p(t,r,e),h(r,a),h(a,o)},p(t,[e]){1&e&&k(o,t[0])},i:t,o:t,d(t){g(n),t&&g(s),t&&g(r)}}}function pt(t,e,n){let{timeLeft:s}=e;return t.$$set=t=>{"timeLeft"in t&&n(0,s=t.timeLeft)},[s]}class gt extends at{constructor(t){super(),rt(this,t,pt,ht,o,{timeLeft:0})}}const vt={0:[{question:"What is the standard abbreviation for your Charisma score?",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]},{question:"What is the standard abbreviation for your Dexterity score?",correctAnswer:"DEX",answers:["CHA","DEX","WIS","CON"]}],1:[{question:"Which of these creatures is famous for transforming into treasure to trick adventurers?",correctAnswer:"Mimic",answers:["Bugbear","Mimic","Acid Slime","Werewolf"]},{question:"Which type of damage prevents a troll from regenerating?",correctAnswer:"Fire",answers:["Ice","Lightning","Radiant","Fire"]}],2:[{question:"How does a monk gain their powers?",correctAnswer:"Through their own life-force or ki",answers:["Through nature","Through a deity","Through their own life-force or ki","Through extensive study"]},{question:"Which is a wizard's most important piece of equipment?",correctAnswer:"Spellbook",answers:["Wand","Spellbook","Robes and wizard hat","Staff"]}],3:[{question:"There are two main types of dragons, metallic and …",correctAnswer:"Chromatic",answers:["Chromatic","Aberrant","Abyssal","Celestial"]},{question:"How do clerics get their spells?",correctAnswer:"Gaining the favor of a deity",answers:["Elaborate ritual dances","From scrolls","Gaining the favor of a deity","Spellbooks"]}],4:[{question:"The Barbarian class is known for a unique ability that allows them to inflict extra damage. What is it called?",correctAnswer:"Rage",answers:["Fury","Intimidation","Wildstrike","Rage"]},{question:"What is the only way to ensure the death of a lich?",correctAnswer:"Destroy its phylactery",answers:["Use a resurrection spell","Engulf it in flames","Remove its head","Destroy its phylactery"]}],5:[{question:"Which wizard is known for creating a variety of spells involving illusory hands and fists?",correctAnswer:"Bigby",answers:["Halaster","Harry","Bigby","Mordenkainen"]},{question:"What kind of special breath does a silver dragon have?",correctAnswer:"Cold Breath",answers:["Fire Breath","Cold Breath","Acid Spray","Lightning Breath"]}],6:[{question:"Which monster is feared not for the danger to an adventurer's life, but rather to their magical equipment?",correctAnswer:"Rust monster",answers:["Blue dragon","Hook horror","Rust monster","Arcanaloth"]},{question:"Which is the Arcane Tradition that focuses on modifying matter?",correctAnswer:"Transmutation",answers:["Abjuration","Evocation","Enchantment","Transmutation"]}],7:[{question:"Which monster has a large central eye, multiple spellcasting eyestalks and floats above the ground?",correctAnswer:"A beholder",answers:["A mind flayer","A bullette","A beholder","An intellect devourer"]},{question:"What is another name for a mind-flayer?",correctAnswer:"Illithid",answers:["Illithid","Kuo-toa","Malcanthet","Beholder"]}],8:[{question:"This creature can be identified by their lion head and backwards-facing hands.",correctAnswer:"Rakshasa",answers:["Githyanki","Rakshasa","Duergar","Ogre"]},{question:"Which kind of undead is Count Strahd von Zarovich?",correctAnswer:"A vampire",answers:["A vampire","A revenant","A mummy lord","A lich"]}],9:[{question:"Who is the god that most orcs worship?",correctAnswer:"Gruumsh",answers:["Lolth","Tiamat","Gruumsh","Kurtulmak"]},{question:"Which faction of the Forgotten Realms wants to acquire wealth and power, at any cost?",correctAnswer:"The Zhentarim",answers:["The Zhentarim","The Harpers","The Thieves' Guild","The Assassin's Blade"]}]};function wt(t,{delay:e=0,duration:n=400,easing:s=ot,x:r=0,y:a=0,opacity:o=0}){const i=getComputedStyle(t),c=+i.opacity,l="none"===i.transform?"":i.transform,u=c*(1-o);return{delay:e,duration:n,easing:s,css:(t,e)=>`\n\t\t\ttransform: ${l} translate(${(1-t)*r}px, ${(1-t)*a}px);\n\t\t\topacity: ${c-u*e}`}}const{document:yt}=V;function bt(t,e,n){const s=t.slice();return s[33]=e[n],s[35]=n,s}function $t(t,e,n){const s=t.slice();return s[36]=e[n],s[38]=n,s}function xt(t){let e,n,s,r,a=t[36].name+"";return{c(){e=w("div"),n=w("div"),s=y(a),x(n,"class",r=i(t[36].class)+" svelte-1ctn4i9"),x(e,"class","tag-contain svelte-1ctn4i9")},m(t,r){p(t,e,r),h(e,n),h(n,s)},p(t,e){16&e[0]&&a!==(a=t[36].name+"")&&k(s,a),16&e[0]&&r!==(r=i(t[36].class)+" svelte-1ctn4i9")&&x(n,"class",r)},d(t){t&&g(e)}}}function kt(t){let e,n,s,r,a=t[36].name+"";return{c(){e=w("div"),n=w("div"),s=y(a),x(n,"class",r=i(t[36].class+" curr-font")+" svelte-1ctn4i9"),x(e,"class","tag-contain curr svelte-1ctn4i9")},m(t,r){p(t,e,r),h(e,n),h(n,s)},p(t,e){16&e[0]&&a!==(a=t[36].name+"")&&k(s,a),16&e[0]&&r!==(r=i(t[36].class+" curr-font")+" svelte-1ctn4i9")&&x(n,"class",r)},d(t){t&&g(e)}}}function At(t){let e,n;function s(t,e){return t[38]===t[6]?kt:xt}let r=s(t),a=r(t);return{c(){e=w("div"),a.c(),n=b(),x(e,"class","tag-area svelte-1ctn4i9")},m(t,s){p(t,e,s),a.m(e,null),h(e,n)},p(t,o){r===(r=s(t))&&a?a.p(t,o):(a.d(1),a=r(t),a&&(a.c(),a.m(e,n)))},d(t){t&&g(e),a.d()}}}function Tt(t){let e,n,s,r,a;const o=[Rt,Bt],i=[];function c(t,e){return t[2]?0:1}e=c(t),n=i[e]=o[e](t);let l=t[1],u=[];for(let e=0;e<l.length;e+=1)u[e]=It(bt(t,l,e));const d=t=>X(u[t],1,1,()=>{u[t]=null});return{c(){n.c(),s=b(),r=w("div");for(let t=0;t<u.length;t+=1)u[t].c();x(r,"class","answers svelte-1ctn4i9")},m(t,n){i[e].m(t,n),p(t,s,n),p(t,r,n);for(let t=0;t<u.length;t+=1)u[t].m(r,null);a=!0},p(t,a){let f=e;if(e=c(t),e===f?i[e].p(t,a):(K(),X(i[f],1,1,()=>{i[f]=null}),Y(),n=i[e],n||(n=i[e]=o[e](t),n.c()),U(n,1),n.m(s.parentNode,s)),8194&a[0]){let e;for(l=t[1],e=0;e<l.length;e+=1){const n=bt(t,l,e);u[e]?(u[e].p(n,a),U(u[e],1)):(u[e]=It(n),u[e].c(),U(u[e],1),u[e].m(r,null))}for(K(),e=l.length;e<u.length;e+=1)d(e);Y()}},i(t){if(!a){U(n);for(let t=0;t<l.length;t+=1)U(u[t]);a=!0}},o(t){X(n),u=u.filter(Boolean);for(let t=0;t<u.length;t+=1)X(u[t]);a=!1},d(t){i[e].d(t),t&&g(s),t&&g(r),v(u,t)}}}function _t(e){let n,s,r,a,o,i,c,l,u;return{c(){n=w("div"),n.textContent=""+e[15](),s=b(),r=w("div"),a=w("span"),a.textContent='Oops, you ran out of time! Click \n\t\t\t\t"Replay" to play again!',o=b(),i=w("button"),i.textContent="Replay",x(n,"class","ignore svelte-1ctn4i9"),x(a,"class","loss-message"),x(i,"class","next svelte-1ctn4i9"),x(r,"class","message svelte-1ctn4i9")},m(t,c){p(t,n,c),p(t,s,c),p(t,r,c),h(r,a),h(r,o),h(r,i),l||(u=$(i,"click",e[22]),l=!0)},p:t,i(t){c||j(()=>{c=J(r,e[11],{}),c.start()})},o:t,d(t){t&&g(n),t&&g(s),t&&g(r),l=!1,u()}}}function qt(e){let n,s,r,a,o,i,c;return{c(){n=w("div"),s=w("span"),s.textContent='You made it to Platinum Rank! You stand as a beacon of hope\n\t\t\t\tfor adventuring teams across the land! Unfortunately, the fight never truly ends. Click \n\t\t\t\t"Replay" to play again!',r=b(),a=w("button"),a.textContent="Replay",x(s,"class","loss-message"),x(a,"class","next svelte-1ctn4i9"),x(n,"class","message svelte-1ctn4i9")},m(t,o){p(t,n,o),h(n,s),h(n,r),h(n,a),i||(c=$(a,"click",e[21]),i=!0)},p:t,i(t){o||j(()=>{o=J(n,e[11],{}),o.start()})},o:t,d(t){t&&g(n),i=!1,c()}}}function Ct(e){let n,s,r,a,o,i,c,l,u,d,f,m,v=e[4][e[6]].name+"",A=e[3][e[6]]+"";return{c(){n=w("div"),s=w("span"),r=y("Uh oh! You made it to "),a=y(v),o=y(" Rank but then\n\t\t\t\tyou were defeated by "),i=y(A),c=y('. Better luck next time! Click "Replay"\n\t\t\t\tto play again!'),l=b(),u=w("button"),u.textContent="Replay",x(s,"class","loss-message"),x(u,"class","next svelte-1ctn4i9"),x(n,"class","message svelte-1ctn4i9")},m(t,d){p(t,n,d),h(n,s),h(s,r),h(s,a),h(s,o),h(s,i),h(s,c),h(n,l),h(n,u),f||(m=$(u,"click",e[20]),f=!0)},p(t,e){80&e[0]&&v!==(v=t[4][t[6]].name+"")&&k(a,v),72&e[0]&&A!==(A=t[3][t[6]]+"")&&k(i,A)},i(t){d||j(()=>{d=J(n,e[11],{}),d.start()})},o:t,d(t){t&&g(n),f=!1,m()}}}function Et(e){let n,s,r,a,o,i,c;return{c(){n=w("div"),s=w("div"),s.textContent='Welcome to the game! Press "Start" to continue!',r=b(),a=w("button"),a.textContent="Start",x(s,"class","opener-message"),x(a,"class","next svelte-1ctn4i9"),x(n,"class","message svelte-1ctn4i9")},m(t,o){p(t,n,o),h(n,s),h(n,r),h(n,a),i||(c=$(a,"click",e[19]),i=!0)},p:t,i(t){o||j(()=>{o=J(n,e[11],{}),o.start()})},o:t,d(t){t&&g(n),i=!1,c()}}}function Bt(t){let e,n;return e=new ut({props:{questionText:t[0]}}),{c(){tt(e.$$.fragment)},m(t,s){et(e,t,s),n=!0},p(t,n){const s={};1&n[0]&&(s.questionText=t[0]),e.$set(s)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function Rt(e){let n,s,a,o,i,c,l,u,d;return{c(){n=w("div"),s=w("span"),s.textContent="Is that your final answer?",a=b(),o=w("div"),i=w("button"),i.textContent="Yes",c=b(),l=w("button"),l.textContent="No",x(s,"class","final-answer"),x(i,"class","next svelte-1ctn4i9"),x(l,"class","next red svelte-1ctn4i9"),x(o,"class","final-buttons"),x(n,"class","message svelte-1ctn4i9")},m(t,r){p(t,n,r),h(n,s),h(n,a),h(n,o),h(o,i),h(o,c),h(o,l),u||(d=[$(i,"click",e[23]),$(l,"click",e[24])],u=!0)},p:t,i:t,o:t,d(t){t&&g(n),u=!1,r(d)}}}function Wt(t){let e,n,s,r,a,o,c,l,u;function d(...e){return t[26](t[33],t[35],...e)}return n=new mt({props:{class:"ans",answerText:t[33],idx:t[35]}}),{c(){e=w("button"),tt(n.$$.fragment),s=b(),x(e,"class",r=i(t[33].split(" ").join("-")+" answer")+" svelte-1ctn4i9"),x(e,"id",a=t[35])},m(t,r){p(t,e,r),et(n,e,null),h(e,s),c=!0,l||(u=$(e,"click",d),l=!0)},p(s,a){t=s;const o={};2&a[0]&&(o.answerText=t[33]),n.$set(o),(!c||2&a[0]&&r!==(r=i(t[33].split(" ").join("-")+" answer")+" svelte-1ctn4i9"))&&x(e,"class",r)},i(t){c||(U(n.$$.fragment,t),j(()=>{o||(o=Q(e,wt,{x:200,duration:500},!0)),o.run(1)}),c=!0)},o(t){X(n.$$.fragment,t),o||(o=Q(e,wt,{x:200,duration:500},!1)),o.run(0),c=!1},d(t){t&&g(e),nt(n),t&&o&&o.end(),l=!1,u()}}}function St(t){let e,n,s,r,a,o,c,l,u;function d(...e){return t[25](t[33],t[35],...e)}return n=new mt({props:{class:"ans",answerText:t[33],idx:t[35]}}),{c(){e=w("button"),tt(n.$$.fragment),s=b(),x(e,"class",r=i(t[33].split(" ").join("-")+" answer")+" svelte-1ctn4i9"),x(e,"id",a=t[35])},m(t,r){p(t,e,r),et(n,e,null),h(e,s),c=!0,l||(u=$(e,"click",d),l=!0)},p(s,a){t=s;const o={};2&a[0]&&(o.answerText=t[33]),n.$set(o),(!c||2&a[0]&&r!==(r=i(t[33].split(" ").join("-")+" answer")+" svelte-1ctn4i9"))&&x(e,"class",r)},i(t){c||(U(n.$$.fragment,t),j(()=>{o||(o=Q(e,wt,{x:-200,duration:500},!0)),o.run(1)}),c=!0)},o(t){X(n.$$.fragment,t),o||(o=Q(e,wt,{x:-200,duration:500},!1)),o.run(0),c=!1},d(t){t&&g(e),nt(n),t&&o&&o.end(),l=!1,u()}}}function It(t){let e,n,s,r;const a=[St,Wt],o=[];return e=function(t,e){return t[35]%2==0?0:1}(t),n=o[e]=a[e](t),{c(){n.c(),s=y("")},m(t,n){o[e].m(t,n),p(t,s,n),r=!0},p(t,e){n.p(t,e)},i(t){r||(U(n),r=!0)},o(t){X(n),r=!1},d(t){o[e].d(t),t&&g(s)}}}function Lt(t){let e,n,s,r,a,o,c,l,u,d,f,m,y,$,k,A,T,_,q,C,E,B,R,W,S,I,L,j,D,H,O,M;d=new gt({props:{timeLeft:t[10]}});let G=t[4],N=[];for(let e=0;e<G.length;e+=1)N[e]=At($t(t,G,e));const P=[Et,Ct,qt,_t,Tt],z=[];function F(t,e){return t[7]?t[9]?1:t[8]?2:0===t[10]?3:4:0}return k=F(t),A=z[k]=P[k](t),{c(){e=w("script"),s=b(),r=w("main"),a=w("div"),o=w("div"),c=w("img"),u=b(),tt(d.$$.fragment),f=b(),m=w("div");for(let t=0;t<N.length;t+=1)N[t].c();y=b(),$=w("div"),A.c(),T=b(),_=w("div"),_.innerHTML='<div class="about-container svelte-1ctn4i9"><img class="face svelte-1ctn4i9" src="images/face.jpg" alt="face"> \n\t\t\t<div class="about-popup svelte-1ctn4i9"><a href="https://github.com/chrisoney/"><span class="about-icon fab fa-github svelte-1ctn4i9"></span></a> \n\t\t\t\t<a href="https://www.linkedin.com/in/christopher-oney-317b84132/"><span class="about-icon fab fa-linkedin svelte-1ctn4i9"></span></a> \n\t\t\t\t<a href="https://angel.co/u/christopher-oney"><span class="about-icon fab fa-angellist svelte-1ctn4i9"></span></a></div></div>',q=b(),C=w("div"),R=b(),W=w("audio"),I=b(),L=w("audio"),D=b(),H=w("audio"),e.src!==(n="https://kit.fontawesome.com/a229c5b13d.js")&&x(e,"src","https://kit.fontawesome.com/a229c5b13d.js"),x(e,"crossorigin","anonymous"),x(c,"class","title svelte-1ctn4i9"),c.src!==(l="images/title-2.png")&&x(c,"src","images/title-2.png"),x(c,"alt","title"),x(o,"class","top-left svelte-1ctn4i9"),x(m,"class","board svelte-1ctn4i9"),x(a,"class","top svelte-1ctn4i9"),x($,"class","bottom svelte-1ctn4i9"),x(_,"class","about svelte-1ctn4i9"),x(C,"class",E=i("mute-button fas "+(t[5]?"fa-volume-mute":"fa-volume-up"))+" svelte-1ctn4i9"),x(C,"onclick",B=t[27]),W.src!==(S="sounds/correct.mp3")&&x(W,"src","sounds/correct.mp3"),x(W,"id","correct"),x(W,"class","svelte-1ctn4i9"),L.src!==(j="sounds/lose.mp3")&&x(L,"src","sounds/lose.mp3"),x(L,"id","lose"),x(L,"class","svelte-1ctn4i9"),H.src!==(O="sounds/win.mp3")&&x(H,"src","sounds/win.mp3"),x(H,"id","win"),x(H,"class","svelte-1ctn4i9"),x(r,"class","svelte-1ctn4i9")},m(t,n){h(yt.head,e),p(t,s,n),p(t,r,n),h(r,a),h(a,o),h(o,c),h(o,u),et(d,o,null),h(a,f),h(a,m);for(let t=0;t<N.length;t+=1)N[t].m(m,null);h(r,y),h(r,$),z[k].m($,null),h(r,T),h(r,_),h(r,q),h(r,C),h(r,R),h(r,W),h(r,I),h(r,L),h(r,D),h(r,H),M=!0},p(t,e){const n={};if(1024&e[0]&&(n.timeLeft=t[10]),d.$set(n),80&e[0]){let n;for(G=t[4],n=0;n<G.length;n+=1){const s=$t(t,G,n);N[n]?N[n].p(s,e):(N[n]=At(s),N[n].c(),N[n].m(m,null))}for(;n<N.length;n+=1)N[n].d(1);N.length=G.length}let s=k;k=F(t),k===s?z[k].p(t,e):(K(),X(z[s],1,1,()=>{z[s]=null}),Y(),A=z[k],A||(A=z[k]=P[k](t),A.c()),U(A,1),A.m($,null)),(!M||32&e[0]&&E!==(E=i("mute-button fas "+(t[5]?"fa-volume-mute":"fa-volume-up"))+" svelte-1ctn4i9"))&&x(C,"class",E),(!M||32&e[0]&&B!==(B=t[27]))&&x(C,"onclick",B)},i(t){M||(U(d.$$.fragment,t),U(A),M=!0)},o(t){X(d.$$.fragment,t),X(A),M=!1},d(t){g(e),t&&g(s),t&&g(r),nt(d),v(N,t),z[k].d()}}}function jt(t,e,n){let s=!1;let r=-1,a=!1,o=!1,i=!1,{monsters:c=["slimes","goblins","kobolds","bandits","ogres","sandworms","Githyanki","illithids","a beholder","a dragon"]}=e,{ranks:l=[{name:"Porcelain",class:"tag small"},{name:"Obsidian",class:"tag small"},{name:"Steel",class:"tag small"},{name:"Sapphire",class:"tag small"},{name:"Emerald",class:"tag small"},{name:"Ruby",class:"tag small"},{name:"Bronze",class:"tag small"},{name:"Silver",class:"tag small"},{name:"Gold",class:"tag small"},{name:"Platinum",class:"tag large"}]}=e,u=0,{question:d=""}=e,{correctAnswer:f=""}=e,{answers:m=[]}=e;function h(){const t=vt[u][Math.floor(Math.random()*vt[u].length)];n(0,d=t.question),n(16,f=t.correctAnswer),n(1,m=t.answers)}function p(t,e){t.stopPropagation(),"start"===e?(n(6,r=0),n(7,a=!0),n(10,x=15),h(),k()):"replay"===e&&(n(9,i=!1),n(8,o=!1),n(7,a=!1),n(6,r=-1),u=0)}let{choiceText:g=""}=e,{choiceIdx:v=0}=e,{final:w=!1}=e;function y(t,e,s){t.preventDefault(),n(17,g=e),n(18,v=s),n(2,w=!0),A()}function b(t,e){t.preventDefault(),n(2,w=!1),e?function(t,e){if(t===f)document.getElementById(e).classList.add("green"),n(0,d="Correct!"),s||(u<9?document.getElementById("correct").play():document.getElementById("win").play()),setTimeout(()=>{document.getElementById(e).classList.remove("green"),u+=1,n(6,r+=1),u<=9?(n(10,x=15),k(),h()):n(8,o=!0)},5e3);else{n(0,d="Wrong!"),s||document.getElementById("lose").play(),document.getElementById(e).classList.add("red");let t=document.getElementsByClassName("answer");for(let e=0;e<t.length;e++)t[e].classList.contains(f.split(" ").join("-"))&&t[e].classList.add("green");setTimeout(()=>{n(9,i=!0)},5e3)}}(g,v):k()}let $,x=15;function k(){$=setInterval(()=>{n(10,x-=1)},1e3)}function A(){clearInterval($)}return t.$$set=t=>{"monsters"in t&&n(3,c=t.monsters),"ranks"in t&&n(4,l=t.ranks),"question"in t&&n(0,d=t.question),"correctAnswer"in t&&n(16,f=t.correctAnswer),"answers"in t&&n(1,m=t.answers),"choiceText"in t&&n(17,g=t.choiceText),"choiceIdx"in t&&n(18,v=t.choiceIdx),"final"in t&&n(2,w=t.final)},[d,m,w,c,l,s,r,a,o,i,x,function(t,{delay:e=600,duration:n=1e3}){const s=+getComputedStyle(t).opacity;return{easing:it,delay:e,duration:n,css:t=>"opacity: "+t*s}},p,y,b,A,f,g,v,t=>p(t,"start"),t=>p(t,"replay"),t=>p(t,"replay"),t=>p(t,"replay"),t=>b(t,!0),t=>b(t,!1),(t,e,n)=>y(n,t,e),(t,e,n)=>y(n,t,e),()=>n(5,s=!s)]}return new class extends at{constructor(t){super(),rt(this,t,jt,Lt,o,{monsters:3,ranks:4,question:0,correctAnswer:16,answers:1,choiceText:17,choiceIdx:18,final:2},[-1,-1])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
