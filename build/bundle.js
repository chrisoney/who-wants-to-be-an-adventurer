var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(n)}function a(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e){return null==e?"":e}const l="undefined"!=typeof window;let c=l?()=>window.performance.now():()=>Date.now(),u=l?e=>requestAnimationFrame(e):e;const d=new Set;function f(e){d.forEach(t=>{t.c(e)||(d.delete(t),t.f())}),0!==d.size&&u(f)}function m(e){let t;return 0===d.size&&u(f),{promise:new Promise(n=>{d.add(t={c:e,f:n})}),abort(){d.delete(t)}}}function h(e,t){e.appendChild(t)}function p(e,t,n){e.insertBefore(t,n||null)}function g(e){e.parentNode.removeChild(e)}function b(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function v(e){return document.createElement(e)}function w(e){return document.createTextNode(e)}function y(){return w(" ")}function $(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function q(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function x(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}const k=new Set;let A,T=0;function _(e,t,n,s,r,a,o,i=0){const l=16.666/s;let c="{\n";for(let e=0;e<=1;e+=l){const s=t+(n-t)*a(e);c+=100*e+`%{${o(s,1-s)}}\n`}const u=c+`100% {${o(n,1-n)}}\n}`,d=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${i}`,f=e.ownerDocument;k.add(f);const m=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(v("style")).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[d]||(h[d]=!0,m.insertRule(`@keyframes ${d} ${u}`,m.cssRules.length));const p=e.style.animation||"";return e.style.animation=`${p?p+", ":""}${d} ${s}ms linear ${r}ms 1 both`,T+=1,d}function C(e,t){const n=(e.style.animation||"").split(", "),s=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-s.length;r&&(e.style.animation=s.join(", "),T-=r,T||u(()=>{T||(k.forEach(e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}}),k.clear())}))}function E(e){A=e}const B=[],R=[],W=[],I=[],L=Promise.resolve();let S=!1;function j(e){W.push(e)}let H=!1;const D=new Set;function M(){if(!H){H=!0;do{for(let e=0;e<B.length;e+=1){const t=B[e];E(t),O(t.$$)}for(B.length=0;R.length;)R.pop()();for(let e=0;e<W.length;e+=1){const t=W[e];D.has(t)||(D.add(t),t())}W.length=0}while(B.length);for(;I.length;)I.pop()();S=!1,H=!1,D.clear()}}function O(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}let G;function N(){return G||(G=Promise.resolve(),G.then(()=>{G=null})),G}function P(e,t,n){e.dispatchEvent(function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(`${t?"intro":"outro"}${n}`))}const z=new Set;let F;function K(){F={r:0,c:[],p:F}}function Y(){F.r||r(F.c),F=F.p}function U(e,t){e&&e.i&&(z.delete(e),e.i(t))}function X(e,t,n,s){if(e&&e.o){if(z.has(e))return;z.add(e),F.c.push(()=>{z.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}}const Z={duration:0};function J(n,s,r){let o,i,l=s(n,r),u=!1,d=0;function f(){o&&C(n,o)}function h(){const{delay:s=0,duration:r=300,easing:a=t,tick:h=e,css:p}=l||Z;p&&(o=_(n,0,1,r,s,a,p,d++)),h(0,1);const g=c()+s,b=g+r;i&&i.abort(),u=!0,j(()=>P(n,!0,"start")),i=m(e=>{if(u){if(e>=b)return h(1,0),P(n,!0,"end"),f(),u=!1;if(e>=g){const t=a((e-g)/r);h(t,1-t)}}return u})}let p=!1;return{start(){p||(C(n),a(l)?(l=l(),N().then(h)):h())},invalidate(){p=!1},end(){u&&(f(),u=!1)}}}function Q(n,s,o,i){let l=s(n,o),u=i?0:1,d=null,f=null,h=null;function p(){h&&C(n,h)}function g(e,t){const n=e.b-u;return t*=Math.abs(n),{a:u,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function b(s){const{delay:a=0,duration:o=300,easing:i=t,tick:b=e,css:v}=l||Z,w={start:c()+a,b:s};s||(w.group=F,F.r+=1),d?f=w:(v&&(p(),h=_(n,u,s,o,a,i,v)),s&&b(0,1),d=g(w,o),j(()=>P(n,s,"start")),m(e=>{if(f&&e>f.start&&(d=g(f,o),f=null,P(n,d.b,"start"),v&&(p(),h=_(n,u,d.b,d.duration,0,i,l.css))),d)if(e>=d.end)b(u=d.b,1-u),P(n,d.b,"end"),f||(d.b?p():--d.group.r||r(d.group.c)),d=null;else if(e>=d.start){const t=e-d.start;u=d.a+d.d*i(t/d.duration),b(u,1-u)}return!(!d&&!f)}))}return{run(e){a(l)?N().then(()=>{l=l(),b(e)}):b(e)},end(){p(),d=f=null}}}const V="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function ee(e){e&&e.c()}function te(e,t,s){const{fragment:o,on_mount:i,on_destroy:l,after_update:c}=e.$$;o&&o.m(t,s),j(()=>{const t=i.map(n).filter(a);l?l.push(...t):r(t),e.$$.on_mount=[]}),c.forEach(j)}function ne(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function se(e,t){-1===e.$$.dirty[0]&&(B.push(e),S||(S=!0,L.then(M)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function re(t,n,a,o,i,l,c=[-1]){const u=A;E(t);const d=n.props||{},f=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:i,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:c,skip_bound:!1};let m=!1;if(f.ctx=a?a(t,d,(e,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&i(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),m&&se(t,e)),n}):[],f.update(),m=!0,r(f.before_update),f.fragment=!!o&&o(f.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);f.fragment&&f.fragment.l(e),e.forEach(g)}else f.fragment&&f.fragment.c();n.intro&&U(t.$$.fragment),te(t,n.target,n.anchor),M()}E(u)}class ae{$destroy(){ne(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function oe(e){const t=e-1;return t*t*t+1}function ie(e){return--e*e*e*e*e+1}function le(t){let n,s;return{c(){n=v("div"),s=w(t[0]),q(n,"class","question svelte-1dg4i2e")},m(e,t){p(e,n,t),h(n,s)},p(e,[t]){1&t&&x(s,e[0])},i:e,o:e,d(e){e&&g(n)}}}function ce(e,t,n){let{questionText:s}=t;return e.$$set=e=>{"questionText"in e&&n(0,s=e.questionText)},[s]}class ue extends ae{constructor(e){super(),re(this,e,ce,le,o,{questionText:0})}}function de(t){let n,s,r,a,o,i,l,c,u,d=t[2][t[1]]+"";return{c(){n=v("div"),s=v("span"),s.textContent="♦",r=y(),a=v("span"),o=w(d),i=w(":"),l=y(),c=v("div"),u=w(t[0]),q(s,"class","diam svelte-1f3aymc"),q(a,"class","answer-letter svelte-1f3aymc"),q(c,"class","answer-text svelte-1f3aymc"),q(n,"class","answer-container svelte-1f3aymc")},m(e,t){p(e,n,t),h(n,s),h(n,r),h(n,a),h(a,o),h(a,i),h(n,l),h(n,c),h(c,u)},p(e,[t]){6&t&&d!==(d=e[2][e[1]]+"")&&x(o,d),1&t&&x(u,e[0])},i:e,o:e,d(e){e&&g(n)}}}function fe(e,t,n){let{answerText:s}=t,{idx:r}=t,{answerKeys:a=["A","B","C","D"]}=t;return e.$$set=e=>{"answerText"in e&&n(0,s=e.answerText),"idx"in e&&n(1,r=e.idx),"answerKeys"in e&&n(2,a=e.answerKeys)},[s,r,a]}class me extends ae{constructor(e){super(),re(this,e,fe,de,o,{answerText:0,idx:1,answerKeys:2})}}function he(t){let n,s,r,a,o;return{c(){n=v("link"),s=y(),r=v("div"),a=v("span"),o=w(t[0]),q(n,"href","https://fonts.googleapis.com/css2?family=Balthazar&display=swap"),q(n,"rel","stylesheet"),q(a,"class","timer-num svelte-kl566y"),q(r,"class","timer-container svelte-kl566y")},m(e,t){h(document.head,n),p(e,s,t),p(e,r,t),h(r,a),h(a,o)},p(e,[t]){1&t&&x(o,e[0])},i:e,o:e,d(e){g(n),e&&g(s),e&&g(r)}}}function pe(e,t,n){let{timeLeft:s}=t;return e.$$set=e=>{"timeLeft"in e&&n(0,s=e.timeLeft)},[s]}class ge extends ae{constructor(e){super(),re(this,e,pe,he,o,{timeLeft:0})}}const be={0:[{question:"What is the standard abbreviation for your Charisma score?",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]},{question:"What is the standard abbreviation for your Dexterity score?",correctAnswer:"DEX",answers:["CHA","DEX","WIS","CON"]}],1:[{question:"Which of these creatures is famous for transforming into treasure to trick adventurers?",correctAnswer:"Mimic",answers:["Bugbear","Mimic","Acid Slime","Werewolf"]},{question:"Which type of damage prevents a troll from regenerating?",correctAnswer:"Fire",answers:["Ice","Lightning","Radiant","Fire"]}],2:[{question:"How does a monk gain their powers?",correctAnswer:"Through their own life-force or ki",answers:["Through nature","Through a deity","Through their own life-force or ki","Through extensive study"]},{question:"Which is a wizard's most important piece of equipment?",correctAnswer:"Spellbook",answers:["Wand","Spellbook","Robes and wizard hat","Staff"]}],3:[{question:"There are two main types of dragons, metallic and …",correctAnswer:"Chromatic",answers:["Chromatic","Aberrant","Abyssal","Celestial"]},{question:"How do clerics get their spells?",correctAnswer:"Gaining the favor of a deity",answers:["Elaborate ritual dances","From scrolls","Gaining the favor of a deity","Spellbooks"]}],4:[{question:"The Barbarian class is known for a unique ability that allows them to inflict extra damage. What is it called?",correctAnswer:"Rage",answers:["Fury","Intimidation","Wildstrike","Rage"]},{question:"What is the only way to ensure the death of a lich?",correctAnswer:"Destroy its phylactery",answers:["Use a resurrection spell","Engulf it in flames","Remove its head","Destroy its phylactery"]}],5:[{question:"Which wizard is known for creating a variety of spells involving illusory hands and fists?",correctAnswer:"Bigby",answers:["Halaster","Harry","Bigby","Mordenkainen"]},{question:"What kind of special breath does a silver dragon have?",correctAnswer:"Cold Breath",answers:["Fire Breath","Cold Breath","Acid Spray","Lightning Breath"]}],6:[{question:"Which monster is feared not for the danger to an adventurer's life, but rather to their magical equipment?",correctAnswer:"Rust monster",answers:["Blue dragon","Hook horror","Rust monster","Arcanaloth"]},{question:"Which is the Arcane Tradition that focuses on modifying matter?",correctAnswer:"Transmutation",answers:["Abjuration","Evocation","Enchantment","Transmutation"]}],7:[{question:"Which monster has a large central eye, multiple spellcasting eyestalks and floats above the ground?",correctAnswer:"A beholder",answers:["A mind flayer","A bullette","A beholder","An intellect devourer"]},{question:"What is another name for a mind-flayer?",correctAnswer:"Illithid",answers:["Illithid","Kuo-toa","Malcanthet","Beholder"]}],8:[{question:"This creature can be identified by their lion head and backwards-facing hands.",correctAnswer:"Rakshasa",answers:["Githyanki","Rakshasa","Duergar","Ogre"]},{question:"Which kind of undead is Count Strahd von Zarovich?",correctAnswer:"A vampire",answers:["A vampire","A revenant","A mummy lord","A lich"]}],9:[{question:"Who is the god that most orcs worship?",correctAnswer:"Gruumsh",answers:["Lolth","Tiamat","Gruumsh","Kurtulmak"]},{question:"Which faction of the Forgotten Realms wants to acquire wealth and power, at any cost?",correctAnswer:"The Zhentarim",answers:["The Zhentarim","The Harpers","The Thieves' Guild","The Assassin's Blade"]}]};function ve(e,{delay:t=0,duration:n=400,easing:s=oe,x:r=0,y:a=0,opacity:o=0}){const i=getComputedStyle(e),l=+i.opacity,c="none"===i.transform?"":i.transform,u=l*(1-o);return{delay:t,duration:n,easing:s,css:(e,t)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*r}px, ${(1-e)*a}px);\n\t\t\topacity: ${l-u*t}`}}const{document:we}=V;function ye(e,t,n){const s=e.slice();return s[33]=t[n],s[35]=n,s}function $e(e,t,n){const s=e.slice();return s[36]=t[n],s[38]=n,s}function qe(e){let t,n,s,r,a=e[36].name+"";return{c(){t=v("div"),n=v("div"),s=w(a),q(n,"class",r=i(e[36].class)+" svelte-8q230b"),q(t,"class","tag-contain svelte-8q230b")},m(e,r){p(e,t,r),h(t,n),h(n,s)},p(e,t){16&t[0]&&a!==(a=e[36].name+"")&&x(s,a),16&t[0]&&r!==(r=i(e[36].class)+" svelte-8q230b")&&q(n,"class",r)},d(e){e&&g(t)}}}function xe(e){let t,n,s,r,a=e[36].name+"";return{c(){t=v("div"),n=v("div"),s=w(a),q(n,"class",r=i(e[36].class+" curr-font")+" svelte-8q230b"),q(t,"class","tag-contain curr svelte-8q230b")},m(e,r){p(e,t,r),h(t,n),h(n,s)},p(e,t){16&t[0]&&a!==(a=e[36].name+"")&&x(s,a),16&t[0]&&r!==(r=i(e[36].class+" curr-font")+" svelte-8q230b")&&q(n,"class",r)},d(e){e&&g(t)}}}function ke(e){let t,n;function s(e,t){return e[38]===e[6]?xe:qe}let r=s(e),a=r(e);return{c(){t=v("div"),a.c(),n=y(),q(t,"class","tag-area svelte-8q230b")},m(e,s){p(e,t,s),a.m(t,null),h(t,n)},p(e,o){r===(r=s(e))&&a?a.p(e,o):(a.d(1),a=r(e),a&&(a.c(),a.m(t,n)))},d(e){e&&g(t),a.d()}}}function Ae(e){let t,n,s,r,a;const o=[Re,Be],i=[];function l(e,t){return e[2]?0:1}t=l(e),n=i[t]=o[t](e);let c=e[1],u=[];for(let t=0;t<c.length;t+=1)u[t]=Le(ye(e,c,t));const d=e=>X(u[e],1,1,()=>{u[e]=null});return{c(){n.c(),s=y(),r=v("div");for(let e=0;e<u.length;e+=1)u[e].c();q(r,"class","answers svelte-8q230b")},m(e,n){i[t].m(e,n),p(e,s,n),p(e,r,n);for(let e=0;e<u.length;e+=1)u[e].m(r,null);a=!0},p(e,a){let f=t;if(t=l(e),t===f?i[t].p(e,a):(K(),X(i[f],1,1,()=>{i[f]=null}),Y(),n=i[t],n||(n=i[t]=o[t](e),n.c()),U(n,1),n.m(s.parentNode,s)),16386&a[0]){let t;for(c=e[1],t=0;t<c.length;t+=1){const n=ye(e,c,t);u[t]?(u[t].p(n,a),U(u[t],1)):(u[t]=Le(n),u[t].c(),U(u[t],1),u[t].m(r,null))}for(K(),t=c.length;t<u.length;t+=1)d(t);Y()}},i(e){if(!a){U(n);for(let e=0;e<c.length;e+=1)U(u[e]);a=!0}},o(e){X(n),u=u.filter(Boolean);for(let e=0;e<u.length;e+=1)X(u[e]);a=!1},d(e){i[t].d(e),e&&g(s),e&&g(r),b(u,e)}}}function Te(t){let n,s,r,a,o,i,l,c,u;return{c(){n=v("div"),n.textContent=""+t[16](),s=y(),r=v("div"),a=v("span"),a.textContent='Oops, you ran out of time! Click \n\t\t\t\t"Replay" to play again!',o=y(),i=v("button"),i.textContent="Replay",q(n,"class","ignore svelte-8q230b"),q(a,"class","loss-message"),q(i,"class","next svelte-8q230b"),q(r,"class","message svelte-8q230b")},m(e,l){p(e,n,l),p(e,s,l),p(e,r,l),h(r,a),h(r,o),h(r,i),c||(u=$(i,"click",t[23]),c=!0)},p:e,i(e){l||j(()=>{l=J(r,t[12],{}),l.start()})},o:e,d(e){e&&g(n),e&&g(s),e&&g(r),c=!1,u()}}}function _e(t){let n,s,r,a,o,i,l;return{c(){n=v("div"),s=v("span"),s.textContent='You made it to Platinum Rank! You stand as a beacon of hope\n\t\t\t\tfor adventuring teams across the land! Unfortunately, the fight never truly ends. Click \n\t\t\t\t"Replay" to play again!',r=y(),a=v("button"),a.textContent="Replay",q(s,"class","loss-message"),q(a,"class","next svelte-8q230b"),q(n,"class","message svelte-8q230b")},m(e,o){p(e,n,o),h(n,s),h(n,r),h(n,a),i||(l=$(a,"click",t[22]),i=!0)},p:e,i(e){o||j(()=>{o=J(n,t[12],{}),o.start()})},o:e,d(e){e&&g(n),i=!1,l()}}}function Ce(t){let n,s,r,a,o,i,l,c,u,d,f,m,b=t[4][t[6]].name+"",k=t[3][t[6]]+"";return{c(){n=v("div"),s=v("span"),r=w("Uh oh! You made it to "),a=w(b),o=w(" Rank but then\n\t\t\t\tyou were defeated by "),i=w(k),l=w('. Better luck next time! Click "Replay"\n\t\t\t\tto play again!'),c=y(),u=v("button"),u.textContent="Replay",q(s,"class","loss-message"),q(u,"class","next svelte-8q230b"),q(n,"class","message svelte-8q230b")},m(e,d){p(e,n,d),h(n,s),h(s,r),h(s,a),h(s,o),h(s,i),h(s,l),h(n,c),h(n,u),f||(m=$(u,"click",t[21]),f=!0)},p(e,t){80&t[0]&&b!==(b=e[4][e[6]].name+"")&&x(a,b),72&t[0]&&k!==(k=e[3][e[6]]+"")&&x(i,k)},i(e){d||j(()=>{d=J(n,t[12],{}),d.start()})},o:e,d(e){e&&g(n),f=!1,m()}}}function Ee(t){let n,s,r,a,o,i,l;return{c(){n=v("div"),s=v("div"),s.textContent='Welcome to the game! Press "Start" to continue!',r=y(),a=v("button"),a.textContent="Start",q(s,"class","opener-message"),q(a,"class","next svelte-8q230b"),q(n,"class","message svelte-8q230b")},m(e,o){p(e,n,o),h(n,s),h(n,r),h(n,a),i||(l=$(a,"click",t[20]),i=!0)},p:e,i(e){o||j(()=>{o=J(n,t[12],{}),o.start()})},o:e,d(e){e&&g(n),i=!1,l()}}}function Be(e){let t,n;return t=new ue({props:{questionText:e[0]}}),{c(){ee(t.$$.fragment)},m(e,s){te(t,e,s),n=!0},p(e,n){const s={};1&n[0]&&(s.questionText=e[0]),t.$set(s)},i(e){n||(U(t.$$.fragment,e),n=!0)},o(e){X(t.$$.fragment,e),n=!1},d(e){ne(t,e)}}}function Re(t){let n,s,a,o,i,l,c,u,d;return{c(){n=v("div"),s=v("span"),s.textContent="Is that your final answer?",a=y(),o=v("div"),i=v("button"),i.textContent="Yes",l=y(),c=v("button"),c.textContent="No",q(s,"class","final-answer"),q(i,"class","next svelte-8q230b"),q(c,"class","next red svelte-8q230b"),q(o,"class","final-buttons"),q(n,"class","message svelte-8q230b")},m(e,r){p(e,n,r),h(n,s),h(n,a),h(n,o),h(o,i),h(o,l),h(o,c),u||(d=[$(i,"click",t[24]),$(c,"click",t[25])],u=!0)},p:e,i:e,o:e,d(e){e&&g(n),u=!1,r(d)}}}function We(e){let t,n,s,r,a,o,l,c,u;function d(...t){return e[27](e[33],e[35],...t)}return n=new me({props:{class:"ans",answerText:e[33],idx:e[35]}}),{c(){t=v("button"),ee(n.$$.fragment),s=y(),q(t,"class",r=i(e[33].split(" ").join("-")+" answer")+" svelte-8q230b"),q(t,"id",a=e[35])},m(e,r){p(e,t,r),te(n,t,null),h(t,s),l=!0,c||(u=$(t,"click",d),c=!0)},p(s,a){e=s;const o={};2&a[0]&&(o.answerText=e[33]),n.$set(o),(!l||2&a[0]&&r!==(r=i(e[33].split(" ").join("-")+" answer")+" svelte-8q230b"))&&q(t,"class",r)},i(e){l||(U(n.$$.fragment,e),j(()=>{o||(o=Q(t,ve,{x:200,duration:500},!0)),o.run(1)}),l=!0)},o(e){X(n.$$.fragment,e),o||(o=Q(t,ve,{x:200,duration:500},!1)),o.run(0),l=!1},d(e){e&&g(t),ne(n),e&&o&&o.end(),c=!1,u()}}}function Ie(e){let t,n,s,r,a,o,l,c,u;function d(...t){return e[26](e[33],e[35],...t)}return n=new me({props:{class:"ans",answerText:e[33],idx:e[35]}}),{c(){t=v("button"),ee(n.$$.fragment),s=y(),q(t,"class",r=i(e[33].split(" ").join("-")+" answer")+" svelte-8q230b"),q(t,"id",a=e[35])},m(e,r){p(e,t,r),te(n,t,null),h(t,s),l=!0,c||(u=$(t,"click",d),c=!0)},p(s,a){e=s;const o={};2&a[0]&&(o.answerText=e[33]),n.$set(o),(!l||2&a[0]&&r!==(r=i(e[33].split(" ").join("-")+" answer")+" svelte-8q230b"))&&q(t,"class",r)},i(e){l||(U(n.$$.fragment,e),j(()=>{o||(o=Q(t,ve,{x:-200,duration:500},!0)),o.run(1)}),l=!0)},o(e){X(n.$$.fragment,e),o||(o=Q(t,ve,{x:-200,duration:500},!1)),o.run(0),l=!1},d(e){e&&g(t),ne(n),e&&o&&o.end(),c=!1,u()}}}function Le(e){let t,n,s,r;const a=[Ie,We],o=[];return t=function(e,t){return e[35]%2==0?0:1}(e),n=o[t]=a[t](e),{c(){n.c(),s=w("")},m(e,n){o[t].m(e,n),p(e,s,n),r=!0},p(e,t){n.p(e,t)},i(e){r||(U(n),r=!0)},o(e){X(n),r=!1},d(e){o[t].d(e),e&&g(s)}}}function Se(e){let t,n,s,r,a,o,l,c,u,d,f,m,w,x,k,A,T,_,C,E,B,R,W,I,L,S,j,H,D,M,O,G,N,P,z,F;d=new ge({props:{timeLeft:e[10]}});let Z=e[4],J=[];for(let t=0;t<Z.length;t+=1)J[t]=ke($e(e,Z,t));const Q=[Ee,Ce,_e,Te,Ae],V=[];function se(e,t){return e[7]?e[9]?1:e[8]?2:0===e[10]?3:4:0}return k=se(e),A=V[k]=Q[k](e),{c(){t=v("script"),s=y(),r=v("main"),a=v("div"),o=v("div"),l=v("img"),u=y(),ee(d.$$.fragment),f=y(),m=v("div");for(let e=0;e<J.length;e+=1)J[e].c();w=y(),x=v("div"),A.c(),T=y(),_=v("div"),_.innerHTML='<div class="about-container svelte-8q230b"><img class="face svelte-8q230b" src="images/face.jpg" alt="face"> \n\t\t\t<div class="about-popup svelte-8q230b"><a href="https://github.com/chrisoney/"><span class="about-icon fab fa-github svelte-8q230b"></span></a> \n\t\t\t\t<a href="https://www.linkedin.com/in/christopher-oney-317b84132/"><span class="about-icon fab fa-linkedin svelte-8q230b"></span></a> \n\t\t\t\t<a href="https://angel.co/u/christopher-oney"><span class="about-icon fab fa-angellist svelte-8q230b"></span></a></div></div>',C=y(),E=v("div"),R=y(),W=v("audio"),W.innerHTML='<track kind="captions">',L=y(),S=v("audio"),S.innerHTML='<track kind="captions">',H=y(),D=v("audio"),D.innerHTML='<track kind="captions">',O=y(),G=v("img"),t.src!==(n="https://kit.fontawesome.com/a229c5b13d.js")&&q(t,"src","https://kit.fontawesome.com/a229c5b13d.js"),q(t,"crossorigin","anonymous"),q(l,"class","title svelte-8q230b"),l.src!==(c="images/title-2.png")&&q(l,"src","images/title-2.png"),q(l,"alt","title"),q(o,"class","top-left svelte-8q230b"),q(m,"class","board svelte-8q230b"),q(a,"class","top svelte-8q230b"),q(x,"class","bottom svelte-8q230b"),q(_,"class","about svelte-8q230b"),q(E,"class",B=i("mute-button fas "+(e[5]?"fa-volume-mute":"fa-volume-up"))+" svelte-8q230b"),W.src!==(I="sounds/correct.mp3")&&q(W,"src","sounds/correct.mp3"),q(W,"id","correct"),q(W,"class","svelte-8q230b"),S.src!==(j="sounds/lose.mp3")&&q(S,"src","sounds/lose.mp3"),q(S,"id","lose"),q(S,"class","svelte-8q230b"),D.src!==(M="sounds/win.mp3")&&q(D,"src","sounds/win.mp3"),q(D,"id","win"),q(D,"class","svelte-8q230b"),q(G,"class","shia svelte-8q230b"),G.src!==(N="images/hidden-shia.png")&&q(G,"src","images/hidden-shia.png"),q(G,"alt","shia labeouf"),q(r,"class","svelte-8q230b")},m(n,i){h(we.head,t),p(n,s,i),p(n,r,i),h(r,a),h(a,o),h(o,l),h(o,u),te(d,o,null),h(a,f),h(a,m);for(let e=0;e<J.length;e+=1)J[e].m(m,null);h(r,w),h(r,x),V[k].m(x,null),h(r,T),h(r,_),h(r,C),h(r,E),h(r,R),h(r,W),h(r,L),h(r,S),h(r,H),h(r,D),h(r,O),h(r,G),P=!0,z||(F=$(E,"click",e[11]),z=!0)},p(e,t){const n={};if(1024&t[0]&&(n.timeLeft=e[10]),d.$set(n),80&t[0]){let n;for(Z=e[4],n=0;n<Z.length;n+=1){const s=$e(e,Z,n);J[n]?J[n].p(s,t):(J[n]=ke(s),J[n].c(),J[n].m(m,null))}for(;n<J.length;n+=1)J[n].d(1);J.length=Z.length}let s=k;k=se(e),k===s?V[k].p(e,t):(K(),X(V[s],1,1,()=>{V[s]=null}),Y(),A=V[k],A||(A=V[k]=Q[k](e),A.c()),U(A,1),A.m(x,null)),(!P||32&t[0]&&B!==(B=i("mute-button fas "+(e[5]?"fa-volume-mute":"fa-volume-up"))+" svelte-8q230b"))&&q(E,"class",B)},i(e){P||(U(d.$$.fragment,e),U(A),P=!0)},o(e){X(d.$$.fragment,e),X(A),P=!1},d(e){g(t),e&&g(s),e&&g(r),ne(d),b(J,e),V[k].d(),z=!1,F()}}}function je(e,t,n){let s=!1;let r=-1,a=!1,o=!1,i=!1,{monsters:l=["slimes","goblins","kobolds","bandits","ogres","sandworms","Githyanki","illithids","a beholder","a dragon"]}=t,{ranks:c=[{name:"Porcelain",class:"tag small"},{name:"Obsidian",class:"tag small"},{name:"Steel",class:"tag small"},{name:"Sapphire",class:"tag small"},{name:"Emerald",class:"tag small"},{name:"Ruby",class:"tag small"},{name:"Bronze",class:"tag small"},{name:"Silver",class:"tag small"},{name:"Gold",class:"tag small"},{name:"Platinum",class:"tag large"}]}=t,u=0,{question:d=""}=t,{correctAnswer:f=""}=t,{answers:m=[]}=t;function h(){const e=be[u][Math.floor(Math.random()*be[u].length)];n(0,d=e.question),n(17,f=e.correctAnswer),n(1,m=e.answers)}function p(e,t){if(e.stopPropagation(),"start"===t){let e=document.getElementById("win");e.pause(),e.currentTime=0,n(6,r=0),n(7,a=!0),n(10,q=15),h(),x()}else"replay"===t&&(n(9,i=!1),n(8,o=!1),n(7,a=!1),n(6,r=-1),u=0)}let{choiceText:g=""}=t,{choiceIdx:b=0}=t,{final:v=!1}=t;function w(e,t,s){e.preventDefault(),n(18,g=t),n(19,b=s),n(2,v=!0),k()}function y(e,t){e.preventDefault(),n(2,v=!1),t?function(e,t){if(e===f)document.getElementById(t).classList.add("green"),n(0,d="Correct!"),s||(u<9?document.getElementById("correct").play():document.getElementById("win").play()),setTimeout(()=>{document.getElementById(t).classList.remove("green"),u+=1,n(6,r+=1),u<=9?(n(10,q=15),x(),h()):n(8,o=!0)},5e3);else{n(0,d="Wrong!"),s||document.getElementById("lose").play(),document.getElementById(t).classList.add("red");let e=document.getElementsByClassName("answer");for(let t=0;t<e.length;t++)e[t].classList.contains(f.split(" ").join("-"))&&e[t].classList.add("green");setTimeout(()=>{n(9,i=!0)},5e3)}}(g,b):x()}let $,q=15;function x(){$=setInterval(()=>{n(10,q-=1)},1e3)}function k(){clearInterval($)}return e.$$set=e=>{"monsters"in e&&n(3,l=e.monsters),"ranks"in e&&n(4,c=e.ranks),"question"in e&&n(0,d=e.question),"correctAnswer"in e&&n(17,f=e.correctAnswer),"answers"in e&&n(1,m=e.answers),"choiceText"in e&&n(18,g=e.choiceText),"choiceIdx"in e&&n(19,b=e.choiceIdx),"final"in e&&n(2,v=e.final)},[d,m,v,l,c,s,r,a,o,i,q,function(){if(n(5,s=!s),s){["correct","lose","win"].forEach(e=>{let t=document.getElementById(e);t.pause(),t.currentTime=0})}},function(e,{delay:t=600,duration:n=1e3}){const s=+getComputedStyle(e).opacity;return{easing:ie,delay:t,duration:n,css:e=>"opacity: "+e*s}},p,w,y,k,f,g,b,e=>p(e,"start"),e=>p(e,"replay"),e=>p(e,"replay"),e=>p(e,"replay"),e=>y(e,!0),e=>y(e,!1),(e,t,n)=>w(n,e,t),(e,t,n)=>w(n,e,t)]}return new class extends ae{constructor(e){super(),re(this,e,je,Se,o,{monsters:3,ranks:4,question:0,correctAnswer:17,answers:1,choiceText:18,choiceIdx:19,final:2},[-1,-1])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
