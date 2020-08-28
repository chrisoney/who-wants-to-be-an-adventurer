var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(n)}function a(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e){return null==e?"":e}const c="undefined"!=typeof window;let l=c?()=>window.performance.now():()=>Date.now(),u=c?e=>requestAnimationFrame(e):e;const d=new Set;function f(e){d.forEach(t=>{t.c(e)||(d.delete(t),t.f())}),0!==d.size&&u(f)}function m(e){let t;return 0===d.size&&u(f),{promise:new Promise(n=>{d.add(t={c:e,f:n})}),abort(){d.delete(t)}}}function h(e,t){e.appendChild(t)}function p(e,t,n){e.insertBefore(t,n||null)}function g(e){e.parentNode.removeChild(e)}function v(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function w(e){return document.createTextNode(e)}function k(){return w(" ")}function b(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function $(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function q(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}const x=new Set;let j,A=0;function T(e,t,n,s,r,a,o,i=0){const c=16.666/s;let l="{\n";for(let e=0;e<=1;e+=c){const s=t+(n-t)*a(e);l+=100*e+`%{${o(s,1-s)}}\n`}const u=l+`100% {${o(n,1-n)}}\n}`,d=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${i}`,f=e.ownerDocument;x.add(f);const m=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(y("style")).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[d]||(h[d]=!0,m.insertRule(`@keyframes ${d} ${u}`,m.cssRules.length));const p=e.style.animation||"";return e.style.animation=`${p?p+", ":""}${d} ${s}ms linear ${r}ms 1 both`,A+=1,d}function _(e,t){const n=(e.style.animation||"").split(", "),s=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-s.length;r&&(e.style.animation=s.join(", "),A-=r,A||u(()=>{A||(x.forEach(e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}}),x.clear())}))}function C(e){j=e}const E=[],R=[],W=[],B=[],S=Promise.resolve();let I=!1;function L(e){W.push(e)}let D=!1;const H=new Set;function O(){if(!D){D=!0;do{for(let e=0;e<E.length;e+=1){const t=E[e];C(t),M(t.$$)}for(E.length=0;R.length;)R.pop()();for(let e=0;e<W.length;e+=1){const t=W[e];H.has(t)||(H.add(t),t())}W.length=0}while(E.length);for(;B.length;)B.pop()();I=!1,D=!1,H.clear()}}function M(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(L)}}let G;function N(){return G||(G=Promise.resolve(),G.then(()=>{G=null})),G}function P(e,t,n){e.dispatchEvent(function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(`${t?"intro":"outro"}${n}`))}const z=new Set;let F;function K(){F={r:0,c:[],p:F}}function Y(){F.r||r(F.c),F=F.p}function U(e,t){e&&e.i&&(z.delete(e),e.i(t))}function X(e,t,n,s){if(e&&e.o){if(z.has(e))return;z.add(e),F.c.push(()=>{z.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}}const Z={duration:0};function J(n,s,r){let o,i,c=s(n,r),u=!1,d=0;function f(){o&&_(n,o)}function h(){const{delay:s=0,duration:r=300,easing:a=t,tick:h=e,css:p}=c||Z;p&&(o=T(n,0,1,r,s,a,p,d++)),h(0,1);const g=l()+s,v=g+r;i&&i.abort(),u=!0,L(()=>P(n,!0,"start")),i=m(e=>{if(u){if(e>=v)return h(1,0),P(n,!0,"end"),f(),u=!1;if(e>=g){const t=a((e-g)/r);h(t,1-t)}}return u})}let p=!1;return{start(){p||(_(n),a(c)?(c=c(),N().then(h)):h())},invalidate(){p=!1},end(){u&&(f(),u=!1)}}}function Q(n,s,o,i){let c=s(n,o),u=i?0:1,d=null,f=null,h=null;function p(){h&&_(n,h)}function g(e,t){const n=e.b-u;return t*=Math.abs(n),{a:u,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function v(s){const{delay:a=0,duration:o=300,easing:i=t,tick:v=e,css:y}=c||Z,w={start:l()+a,b:s};s||(w.group=F,F.r+=1),d?f=w:(y&&(p(),h=T(n,u,s,o,a,i,y)),s&&v(0,1),d=g(w,o),L(()=>P(n,s,"start")),m(e=>{if(f&&e>f.start&&(d=g(f,o),f=null,P(n,d.b,"start"),y&&(p(),h=T(n,u,d.b,d.duration,0,i,c.css))),d)if(e>=d.end)v(u=d.b,1-u),P(n,d.b,"end"),f||(d.b?p():--d.group.r||r(d.group.c)),d=null;else if(e>=d.start){const t=e-d.start;u=d.a+d.d*i(t/d.duration),v(u,1-u)}return!(!d&&!f)}))}return{run(e){a(c)?N().then(()=>{c=c(),v(e)}):v(e)},end(){p(),d=f=null}}}const V="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function ee(e){e&&e.c()}function te(e,t,s){const{fragment:o,on_mount:i,on_destroy:c,after_update:l}=e.$$;o&&o.m(t,s),L(()=>{const t=i.map(n).filter(a);c?c.push(...t):r(t),e.$$.on_mount=[]}),l.forEach(L)}function ne(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function se(e,t){-1===e.$$.dirty[0]&&(E.push(e),I||(I=!0,S.then(O)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function re(t,n,a,o,i,c,l=[-1]){const u=j;C(t);const d=n.props||{},f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:l,skip_bound:!1};let m=!1;if(f.ctx=a?a(t,d,(e,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&i(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),m&&se(t,e)),n}):[],f.update(),m=!0,r(f.before_update),f.fragment=!!o&&o(f.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);f.fragment&&f.fragment.l(e),e.forEach(g)}else f.fragment&&f.fragment.c();n.intro&&U(t.$$.fragment),te(t,n.target,n.anchor),O()}C(u)}class ae{$destroy(){ne(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function oe(e){const t=e-1;return t*t*t+1}function ie(e){return--e*e*e*e*e+1}function ce(t){let n,s;return{c(){n=y("div"),s=w(t[0]),$(n,"class","question svelte-1dg4i2e")},m(e,t){p(e,n,t),h(n,s)},p(e,[t]){1&t&&q(s,e[0])},i:e,o:e,d(e){e&&g(n)}}}function le(e,t,n){let{questionText:s}=t;return e.$$set=e=>{"questionText"in e&&n(0,s=e.questionText)},[s]}class ue extends ae{constructor(e){super(),re(this,e,le,ce,o,{questionText:0})}}function de(t){let n,s,r,a,o,i,c,l,u,d=t[2][t[1]]+"";return{c(){n=y("div"),s=y("span"),s.textContent="♦",r=k(),a=y("span"),o=w(d),i=w(":"),c=k(),l=y("div"),u=w(t[0]),$(s,"class","diam svelte-1f3aymc"),$(a,"class","answer-letter svelte-1f3aymc"),$(l,"class","answer-text svelte-1f3aymc"),$(n,"class","answer-container svelte-1f3aymc")},m(e,t){p(e,n,t),h(n,s),h(n,r),h(n,a),h(a,o),h(a,i),h(n,c),h(n,l),h(l,u)},p(e,[t]){6&t&&d!==(d=e[2][e[1]]+"")&&q(o,d),1&t&&q(u,e[0])},i:e,o:e,d(e){e&&g(n)}}}function fe(e,t,n){let{answerText:s}=t,{idx:r}=t,{answerKeys:a=["A","B","C","D"]}=t;return e.$$set=e=>{"answerText"in e&&n(0,s=e.answerText),"idx"in e&&n(1,r=e.idx),"answerKeys"in e&&n(2,a=e.answerKeys)},[s,r,a]}class me extends ae{constructor(e){super(),re(this,e,fe,de,o,{answerText:0,idx:1,answerKeys:2})}}function he(t){let n,s,r,a,o;return{c(){n=y("link"),s=k(),r=y("div"),a=y("span"),o=w(t[0]),$(n,"href","https://fonts.googleapis.com/css2?family=Balthazar&display=swap"),$(n,"rel","stylesheet"),$(a,"class","timer-num svelte-kl566y"),$(r,"class","timer-container svelte-kl566y")},m(e,t){h(document.head,n),p(e,s,t),p(e,r,t),h(r,a),h(a,o)},p(e,[t]){1&t&&q(o,e[0])},i:e,o:e,d(e){g(n),e&&g(s),e&&g(r)}}}function pe(e,t,n){let{timeLeft:s}=t;return e.$$set=e=>{"timeLeft"in e&&n(0,s=e.timeLeft)},[s]}class ge extends ae{constructor(e){super(),re(this,e,pe,he,o,{timeLeft:0})}}const ve={0:[{question:"What is the standard abbreviation for your Charisma score?",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]},{question:"What is the standard abbreviation for your Dexterity score?",correctAnswer:"DEX",answers:["CHA","DEX","WIS","CON"]}],1:[{question:"Which of these creatures is famous for transforming into treasure to trick adventurers?",correctAnswer:"Mimic",answers:["Bugbear","Mimic","Acid Slime","Werewolf"]},{question:"Which type of damage prevents a troll from regenerating?",correctAnswer:"Fire",answers:["Ice","Lightning","Radiant","Fire"]}],2:[{question:"How does a monk gain their powers?",correctAnswer:"Through their own life-force or ki",answers:["Through nature","Through a deity","Through their own life-force or ki","Through extensive study"]},{question:"Which is a wizard's most important piece of equipment?",correctAnswer:"Spellbook",answers:["Wand","Spellbook","Robes and wizard hat","Staff"]}],3:[{question:"There are two main types of dragons, metallic and …",correctAnswer:"Chromatic",answers:["Chromatic","Aberrant","Abyssal","Celestial"]},{question:"How do clerics get their spells?",correctAnswer:"Gaining the favor of a deity",answers:["Elaborate ritual dances","From scrolls","Gaining the favor of a deity","Spellbooks"]}],4:[{question:"The Barbarian class is known for a unique ability that allows them to inflict extra damage. What is it called?",correctAnswer:"Rage",answers:["Fury","Intimidation","Wildstrike","Rage"]},{question:"What is the only way to ensure the death of a lich?",correctAnswer:"Destroy its phylactery",answers:["Use a resurrection spell","Engulf it in flames","Remove its head","Destroy its phylactery"]}],5:[{question:"Which wizard is known for creating a variety of spells involving illusory hands and fists?",correctAnswer:"Bigby",answers:["Halaster","Harry","Bigby","Mordenkainen"]},{question:"What kind of special breath does a silver dragon have?",correctAnswer:"Cold Breath",answers:["Fire Breath","Cold Breath","Acid Spray","Lightning Breath"]}],6:[{question:"Which monster is feared not for the danger to an adventurer's life, but rather to their magical equipment?",correctAnswer:"Rust monster",answers:["Blue dragon","Hook horror","Rust monster","Arcanaloth"]},{question:"Which is the Arcane Tradition that focuses on modifying matter?",correctAnswer:"Transmutation",answers:["Abjuration","Evocation","Enchantment","Transmutation"]}],7:[{question:"Which monster has a large central eye, multiple spellcasting eyestalks and floats above the ground?",correctAnswer:"A beholder",answers:["A mind flayer","A bullette","A beholder","An intellect devourer"]},{question:"What is another name for a mind-flayer?",correctAnswer:"Illithid",answers:["Illithid","Kuo-toa","Malcanthet","Beholder"]}],8:[{question:"This creature can be identified by their lion head and backwards-facing hands.",correctAnswer:"Rakshasa",answers:["Githyanki","Rakshasa","Duergar","Ogre"]},{question:"Which kind of undead is Count Strahd von Zarovich?",correctAnswer:"A vampire",answers:["A vampire","A revenant","A mummy lord","A lich"]}],9:[{question:"Who is the god that most orcs worship?",correctAnswer:"Gruumsh",answers:["Lolth","Tiamat","Gruumsh","Kurtulmak"]},{question:"Which faction of the Forgotten Realms wants to acquire wealth and power, at any cost?",correctAnswer:"The Zhentarim",answers:["The Zhentarim","The Harpers","The Thieves' Guild","The Assassin's Blade"]}]};function ye(e,{delay:t=0,duration:n=400,easing:s=oe,x:r=0,y:a=0,opacity:o=0}){const i=getComputedStyle(e),c=+i.opacity,l="none"===i.transform?"":i.transform,u=c*(1-o);return{delay:t,duration:n,easing:s,css:(e,t)=>`\n\t\t\ttransform: ${l} translate(${(1-e)*r}px, ${(1-e)*a}px);\n\t\t\topacity: ${c-u*t}`}}const{document:we}=V;function ke(e,t,n){const s=e.slice();return s[43]=t[n],s[45]=n,s}function be(e,t,n){const s=e.slice();return s[46]=t[n],s[48]=n,s}function $e(e){let t,n,s,r,a=e[46].name+"";return{c(){t=y("div"),n=y("div"),s=w(a),$(n,"class",r=i(e[46].class)+" svelte-j6qcke"),$(t,"class","tag-contain svelte-j6qcke")},m(e,r){p(e,t,r),h(t,n),h(n,s)},p(e,t){16&t[0]&&a!==(a=e[46].name+"")&&q(s,a),16&t[0]&&r!==(r=i(e[46].class)+" svelte-j6qcke")&&$(n,"class",r)},d(e){e&&g(t)}}}function qe(e){let t,n,s,r,a=e[46].name+"";return{c(){t=y("div"),n=y("div"),s=w(a),$(n,"class",r=i(e[46].class+" curr-font")+" svelte-j6qcke"),$(t,"class","tag-contain curr svelte-j6qcke")},m(e,r){p(e,t,r),h(t,n),h(n,s)},p(e,t){16&t[0]&&a!==(a=e[46].name+"")&&q(s,a),16&t[0]&&r!==(r=i(e[46].class+" curr-font")+" svelte-j6qcke")&&$(n,"class",r)},d(e){e&&g(t)}}}function xe(e){let t,n;function s(e,t){return e[48]===e[11]?qe:$e}let r=s(e),a=r(e);return{c(){t=y("div"),a.c(),n=k(),$(t,"class","tag-area svelte-j6qcke")},m(e,s){p(e,t,s),a.m(t,null),h(t,n)},p(e,o){r===(r=s(e))&&a?a.p(e,o):(a.d(1),a=r(e),a&&(a.c(),a.m(t,n)))},d(e){e&&g(t),a.d()}}}function je(e){let t,n,s,r,a;const o=[Re,Ee],i=[];function c(e,t){return e[2]?0:1}t=c(e),n=i[t]=o[t](e);let l=e[1],u=[];for(let t=0;t<l.length;t+=1)u[t]=Se(ke(e,l,t));const d=e=>X(u[e],1,1,()=>{u[e]=null});return{c(){n.c(),s=k(),r=y("div");for(let e=0;e<u.length;e+=1)u[e].c();$(r,"class","answers svelte-j6qcke")},m(e,n){i[t].m(e,n),p(e,s,n),p(e,r,n);for(let e=0;e<u.length;e+=1)u[e].m(r,null);a=!0},p(e,a){let f=t;if(t=c(e),t===f?i[t].p(e,a):(K(),X(i[f],1,1,()=>{i[f]=null}),Y(),n=i[t],n||(n=i[t]=o[t](e),n.c()),U(n,1),n.m(s.parentNode,s)),262146&a[0]){let t;for(l=e[1],t=0;t<l.length;t+=1){const n=ke(e,l,t);u[t]?(u[t].p(n,a),U(u[t],1)):(u[t]=Se(n),u[t].c(),U(u[t],1),u[t].m(r,null))}for(K(),t=l.length;t<u.length;t+=1)d(t);Y()}},i(e){if(!a){U(n);for(let e=0;e<l.length;e+=1)U(u[e]);a=!0}},o(e){X(n),u=u.filter(Boolean);for(let e=0;e<u.length;e+=1)X(u[e]);a=!1},d(e){i[t].d(e),e&&g(s),e&&g(r),v(u,e)}}}function Ae(t){let n,s,r,a,o,i,c,l,u;return{c(){n=y("div"),n.textContent=""+t[20](),s=k(),r=y("div"),a=y("span"),a.textContent='Oops, you ran out of time! Click \n\t\t\t\t"Replay" to play again!',o=k(),i=y("button"),i.textContent="Replay",$(n,"class","ignore svelte-j6qcke"),$(a,"class","loss-message"),$(i,"class","next svelte-j6qcke"),$(r,"class","message svelte-j6qcke")},m(e,c){p(e,n,c),p(e,s,c),p(e,r,c),h(r,a),h(r,o),h(r,i),l||(u=b(i,"click",t[27]),l=!0)},p:e,i(e){c||L(()=>{c=J(r,t[16],{}),c.start()})},o:e,d(e){e&&g(n),e&&g(s),e&&g(r),l=!1,u()}}}function Te(t){let n,s,r,a,o,i,c;return{c(){n=y("div"),s=y("span"),s.textContent='You made it to Platinum Rank! You stand as a beacon of hope\n\t\t\t\tfor adventuring teams across the land! Unfortunately, the fight never truly ends. Click \n\t\t\t\t"Replay" to play again!',r=k(),a=y("button"),a.textContent="Replay",$(s,"class","loss-message"),$(a,"class","next svelte-j6qcke"),$(n,"class","message svelte-j6qcke")},m(e,o){p(e,n,o),h(n,s),h(n,r),h(n,a),i||(c=b(a,"click",t[26]),i=!0)},p:e,i(e){o||L(()=>{o=J(n,t[16],{}),o.start()})},o:e,d(e){e&&g(n),i=!1,c()}}}function _e(t){let n,s,r,a,o,i,c,l,u,d,f,m,v=t[4][t[11]].name+"",x=t[3][t[11]]+"";return{c(){n=y("div"),s=y("span"),r=w("Uh oh! You made it to "),a=w(v),o=w(" Rank but then\n\t\t\t\tyou were defeated by "),i=w(x),c=w('. Better luck next time! Click "Replay"\n\t\t\t\tto play again!'),l=k(),u=y("button"),u.textContent="Replay",$(s,"class","loss-message"),$(u,"class","next svelte-j6qcke"),$(n,"class","message svelte-j6qcke")},m(e,d){p(e,n,d),h(n,s),h(s,r),h(s,a),h(s,o),h(s,i),h(s,c),h(n,l),h(n,u),f||(m=b(u,"click",t[25]),f=!0)},p(e,t){2064&t[0]&&v!==(v=e[4][e[11]].name+"")&&q(a,v),2056&t[0]&&x!==(x=e[3][e[11]]+"")&&q(i,x)},i(e){d||L(()=>{d=J(n,t[16],{}),d.start()})},o:e,d(e){e&&g(n),f=!1,m()}}}function Ce(t){let n,s,r,a,o,i,c;return{c(){n=y("div"),s=y("div"),s.textContent='Welcome to the game! Press "Start" to continue!',r=k(),a=y("button"),a.textContent="Start",$(s,"class","opener-message"),$(a,"class","next svelte-j6qcke"),$(n,"class","message svelte-j6qcke")},m(e,o){p(e,n,o),h(n,s),h(n,r),h(n,a),i||(c=b(a,"click",t[24]),i=!0)},p:e,i(e){o||L(()=>{o=J(n,t[16],{}),o.start()})},o:e,d(e){e&&g(n),i=!1,c()}}}function Ee(e){let t,n;return t=new ue({props:{questionText:e[0]}}),{c(){ee(t.$$.fragment)},m(e,s){te(t,e,s),n=!0},p(e,n){const s={};1&n[0]&&(s.questionText=e[0]),t.$set(s)},i(e){n||(U(t.$$.fragment,e),n=!0)},o(e){X(t.$$.fragment,e),n=!1},d(e){ne(t,e)}}}function Re(t){let n,s,a,o,i,c,l,u,d;return{c(){n=y("div"),s=y("span"),s.textContent="Is that your final answer?",a=k(),o=y("div"),i=y("button"),i.textContent="Yes",c=k(),l=y("button"),l.textContent="No",$(s,"class","final-answer"),$(i,"class","next svelte-j6qcke"),$(l,"class","next red svelte-j6qcke"),$(o,"class","final-buttons"),$(n,"class","message svelte-j6qcke")},m(e,r){p(e,n,r),h(n,s),h(n,a),h(n,o),h(o,i),h(o,c),h(o,l),u||(d=[b(i,"click",t[28]),b(l,"click",t[29])],u=!0)},p:e,i:e,o:e,d(e){e&&g(n),u=!1,r(d)}}}function We(e){let t,n,s,r,a,o,c,l,u;function d(...t){return e[31](e[43],e[45],...t)}return n=new me({props:{class:"ans",answerText:e[43],idx:e[45]}}),{c(){t=y("button"),ee(n.$$.fragment),s=k(),$(t,"class",r=i(e[43].split(" ").join("-")+" answer")+" svelte-j6qcke"),$(t,"id",a=e[45])},m(e,r){p(e,t,r),te(n,t,null),h(t,s),c=!0,l||(u=b(t,"click",d),l=!0)},p(s,a){e=s;const o={};2&a[0]&&(o.answerText=e[43]),n.$set(o),(!c||2&a[0]&&r!==(r=i(e[43].split(" ").join("-")+" answer")+" svelte-j6qcke"))&&$(t,"class",r)},i(e){c||(U(n.$$.fragment,e),L(()=>{o||(o=Q(t,ye,{x:200,duration:500},!0)),o.run(1)}),c=!0)},o(e){X(n.$$.fragment,e),o||(o=Q(t,ye,{x:200,duration:500},!1)),o.run(0),c=!1},d(e){e&&g(t),ne(n),e&&o&&o.end(),l=!1,u()}}}function Be(e){let t,n,s,r,a,o,c,l,u;function d(...t){return e[30](e[43],e[45],...t)}return n=new me({props:{class:"ans",answerText:e[43],idx:e[45]}}),{c(){t=y("button"),ee(n.$$.fragment),s=k(),$(t,"class",r=i(e[43].split(" ").join("-")+" answer")+" svelte-j6qcke"),$(t,"id",a=e[45])},m(e,r){p(e,t,r),te(n,t,null),h(t,s),c=!0,l||(u=b(t,"click",d),l=!0)},p(s,a){e=s;const o={};2&a[0]&&(o.answerText=e[43]),n.$set(o),(!c||2&a[0]&&r!==(r=i(e[43].split(" ").join("-")+" answer")+" svelte-j6qcke"))&&$(t,"class",r)},i(e){c||(U(n.$$.fragment,e),L(()=>{o||(o=Q(t,ye,{x:-200,duration:500},!0)),o.run(1)}),c=!0)},o(e){X(n.$$.fragment,e),o||(o=Q(t,ye,{x:-200,duration:500},!1)),o.run(0),c=!1},d(e){e&&g(t),ne(n),e&&o&&o.end(),l=!1,u()}}}function Se(e){let t,n,s,r;const a=[Be,We],o=[];return t=function(e,t){return e[45]%2==0?0:1}(e),n=o[t]=a[t](e),{c(){n.c(),s=w("")},m(e,n){o[t].m(e,n),p(e,s,n),r=!0},p(e,t){n.p(e,t)},i(e){r||(U(n),r=!0)},o(e){X(n),r=!1},d(e){o[t].d(e),e&&g(s)}}}function Ie(e){let t,n,s,a,o,i,c,l,u,d,f,m,w,q,x,j,A,T,_,C,E,R,W,B,S,I,L,D,H,O,M=!0,G=!0,N=!0;d=new ge({props:{timeLeft:e[15]}});let P=e[4],z=[];for(let t=0;t<P.length;t+=1)z[t]=xe(be(e,P,t));const F=[Ce,_e,Te,Ae,je],Z=[];function J(e,t){return e[12]?e[14]?1:e[13]?2:0===e[15]?3:4:0}return x=J(e),j=Z[x]=F[x](e),{c(){t=y("script"),s=k(),a=y("main"),o=y("div"),i=y("div"),c=y("img"),u=k(),ee(d.$$.fragment),f=k(),m=y("div");for(let e=0;e<z.length;e+=1)z[e].c();w=k(),q=y("div"),j.c(),A=k(),T=y("div"),T.innerHTML='<div class="about-container svelte-j6qcke"><img class="face svelte-j6qcke" src="images/face.jpg" alt="face"> \n\t\t\t<div class="about-popup svelte-j6qcke"><a href="https://github.com/chrisoney/"><span class="about-icon fab fa-github svelte-j6qcke"></span></a> \n\t\t\t\t<a href="https://www.linkedin.com/in/christopher-oney-317b84132/"><span class="about-icon fab fa-linkedin svelte-j6qcke"></span></a> \n\t\t\t\t<a href="https://angel.co/u/christopher-oney"><span class="about-icon fab fa-angellist svelte-j6qcke"></span></a></div></div>',_=k(),C=y("audio"),R=k(),W=y("audio"),S=k(),I=y("audio"),t.src!==(n="https://kit.fontawesome.com/a229c5b13d.js")&&$(t,"src","https://kit.fontawesome.com/a229c5b13d.js"),$(t,"crossorigin","anonymous"),$(c,"class","title svelte-j6qcke"),c.src!==(l="images/title-2.png")&&$(c,"src","images/title-2.png"),$(c,"alt","title"),$(i,"class","top-left svelte-j6qcke"),$(m,"class","board svelte-j6qcke"),$(o,"class","top svelte-j6qcke"),$(q,"class","bottom svelte-j6qcke"),$(T,"class","about svelte-j6qcke"),C.src!==(E="sounds/correct.mp3")&&$(C,"src","sounds/correct.mp3"),$(C,"id","correct"),$(C,"class","svelte-j6qcke"),W.src!==(B="sounds/lose.mp3")&&$(W,"src","sounds/lose.mp3"),$(W,"id","lose"),$(W,"class","svelte-j6qcke"),I.src!==(L="sounds/win.mp3")&&$(I,"src","sounds/win.mp3"),$(I,"id","win"),$(I,"class","svelte-j6qcke"),$(a,"class","svelte-j6qcke")},m(n,r){h(we.head,t),p(n,s,r),p(n,a,r),h(a,o),h(o,i),h(i,c),h(i,u),te(d,i,null),h(o,f),h(o,m);for(let e=0;e<z.length;e+=1)z[e].m(m,null);h(a,w),h(a,q),Z[x].m(q,null),h(a,A),h(a,T),h(a,_),h(a,C),C.muted=e[6],h(a,R),h(a,W),W.muted=e[8],h(a,S),h(a,I),I.muted=e[10],D=!0,H||(O=[b(C,"play",e[32]),b(C,"pause",e[32]),b(C,"volumechange",e[33]),b(W,"play",e[34]),b(W,"pause",e[34]),b(W,"volumechange",e[35]),b(I,"play",e[36]),b(I,"pause",e[36]),b(I,"volumechange",e[37])],H=!0)},p(e,t){const n={};if(32768&t[0]&&(n.timeLeft=e[15]),d.$set(n),2064&t[0]){let n;for(P=e[4],n=0;n<P.length;n+=1){const s=be(e,P,n);z[n]?z[n].p(s,t):(z[n]=xe(s),z[n].c(),z[n].m(m,null))}for(;n<z.length;n+=1)z[n].d(1);z.length=P.length}let s=x;x=J(e),x===s?Z[x].p(e,t):(K(),X(Z[s],1,1,()=>{Z[s]=null}),Y(),j=Z[x],j||(j=Z[x]=F[x](e),j.c()),U(j,1),j.m(q,null)),32&t[0]&&M!==(M=e[5])&&C[M?"pause":"play"](),64&t[0]&&(C.muted=e[6]),128&t[0]&&G!==(G=e[7])&&W[G?"pause":"play"](),256&t[0]&&(W.muted=e[8]),512&t[0]&&N!==(N=e[9])&&I[N?"pause":"play"](),1024&t[0]&&(I.muted=e[10])},i(e){D||(U(d.$$.fragment,e),U(j),D=!0)},o(e){X(d.$$.fragment,e),X(j),D=!1},d(e){g(t),e&&g(s),e&&g(a),ne(d),v(z,e),Z[x].d(),H=!1,r(O)}}}function Le(e,t,n){let s=!0,r=!1,a=!0,o=!1,i=!0,c=!1;let l=-1,u=!1,d=!1,f=!1,{monsters:m=["slimes","goblins","kobolds","bandits","ogres","sandworms","Githyanki","illithids","a beholder","a dragon"]}=t,{ranks:h=[{name:"Porcelain",class:"tag small"},{name:"Obsidian",class:"tag small"},{name:"Steel",class:"tag small"},{name:"Sapphire",class:"tag small"},{name:"Emerald",class:"tag small"},{name:"Ruby",class:"tag small"},{name:"Bronze",class:"tag small"},{name:"Silver",class:"tag small"},{name:"Gold",class:"tag small"},{name:"Platinum",class:"tag large"}]}=t,p=0,{question:g=""}=t,{correctAnswer:v=""}=t,{answers:y=[]}=t;function w(){const e=ve[p][Math.floor(Math.random()*ve[p].length)];n(0,g=e.question),n(21,v=e.correctAnswer),n(1,y=e.answers)}function k(e,t){e.stopPropagation(),"start"===t?(n(11,l=0),n(12,u=!0),n(15,T=15),w(),_()):"replay"===t&&(n(14,f=!1),n(13,d=!1),n(12,u=!1),n(11,l=-1),p=0)}let{choiceText:b=""}=t,{choiceIdx:$=0}=t,{final:q=!1}=t;function x(e,t,s){e.preventDefault(),n(22,b=t),n(23,$=s),n(2,q=!0),C()}function j(e,t){e.preventDefault(),n(2,q=!1),t?function(e,t){if(e===v)document.getElementById(t).classList.add("green"),n(0,g="Correct!"),document.getElementById("correct").play(),setTimeout(()=>{document.getElementById(t).classList.remove("green"),p+=1,n(11,l+=1),p<=9?(n(15,T=15),_(),w()):n(13,d=!0)},2e3);else{n(0,g="Wrong!"),document.getElementById(t).classList.add("red");let e=document.getElementsByClassName("answer");for(let t=0;t<e.length;t++)e[t].classList.contains(v.split(" ").join("-"))&&e[t].classList.add("green");setTimeout(()=>{n(14,f=!0)},2e3)}}(b,$):_()}let A,T=15;function _(){A=setInterval(()=>{n(15,T-=1)},1e3)}function C(){clearInterval(A)}return e.$$set=e=>{"monsters"in e&&n(3,m=e.monsters),"ranks"in e&&n(4,h=e.ranks),"question"in e&&n(0,g=e.question),"correctAnswer"in e&&n(21,v=e.correctAnswer),"answers"in e&&n(1,y=e.answers),"choiceText"in e&&n(22,b=e.choiceText),"choiceIdx"in e&&n(23,$=e.choiceIdx),"final"in e&&n(2,q=e.final)},[g,y,q,m,h,s,r,a,o,i,c,l,u,d,f,T,function(e,{delay:t=600,duration:n=1e3}){const s=+getComputedStyle(e).opacity;return{easing:ie,delay:t,duration:n,css:e=>"opacity: "+e*s}},k,x,j,C,v,b,$,e=>k(e,"start"),e=>k(e,"replay"),e=>k(e,"replay"),e=>k(e,"replay"),e=>j(e,!0),e=>j(e,!1),(e,t,n)=>x(n,e,t),(e,t,n)=>x(n,e,t),function(){s=this.paused,n(5,s)},function(){r=this.muted,n(6,r)},function(){a=this.paused,n(7,a)},function(){o=this.muted,n(8,o)},function(){i=this.paused,n(9,i)},function(){c=this.muted,n(10,c)}]}return new class extends ae{constructor(e){super(),re(this,e,Le,Ie,o,{monsters:3,ranks:4,question:0,correctAnswer:21,answers:1,choiceText:22,choiceIdx:23,final:2},[-1,-1])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
