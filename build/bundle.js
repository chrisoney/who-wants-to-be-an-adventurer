var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function s(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t){return null==t?"":t}const l="undefined"!=typeof window;let c=l?()=>window.performance.now():()=>Date.now(),u=l?t=>requestAnimationFrame(t):t;const d=new Set;function f(t){d.forEach(e=>{e.c(t)||(d.delete(e),e.f())}),0!==d.size&&u(f)}function g(t){let e;return 0===d.size&&u(f),{promise:new Promise(n=>{d.add(e={c:t,f:n})}),abort(){d.delete(e)}}}function m(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function w(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function q(){return y(" ")}function b(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}const k=new Set;let A,T=0;function _(t,e,n,s,o,r,a,i=0){const l=16.666/s;let c="{\n";for(let t=0;t<=1;t+=l){const s=e+(n-e)*r(t);c+=100*t+`%{${a(s,1-s)}}\n`}const u=c+`100% {${a(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${i}`,f=t.ownerDocument;k.add(f);const g=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(v("style")).sheet),m=f.__svelte_rules||(f.__svelte_rules={});m[d]||(m[d]=!0,g.insertRule(`@keyframes ${d} ${u}`,g.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?h+", ":""}${d} ${s}ms linear ${o}ms 1 both`,T+=1,d}function C(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-s.length;o&&(t.style.animation=s.join(", "),T-=o,T||u(()=>{T||(k.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),k.clear())}))}function E(t){A=t}const R=[],W=[],B=[],S=[],L=Promise.resolve();let I=!1;function j(t){B.push(t)}let D=!1;const H=new Set;function O(){if(!D){D=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];E(e),M(e.$$)}for(R.length=0;W.length;)W.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];H.has(e)||(H.add(e),e())}B.length=0}while(R.length);for(;S.length;)S.pop()();I=!1,D=!1,H.clear()}}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}let G;function N(){return G||(G=Promise.resolve(),G.then(()=>{G=null})),G}function P(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const z=new Set;let F;function K(){F={r:0,c:[],p:F}}function Y(){F.r||o(F.c),F=F.p}function U(t,e){t&&t.i&&(z.delete(t),t.i(e))}function X(t,e,n,s){if(t&&t.o){if(z.has(t))return;z.add(t),F.c.push(()=>{z.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const Z={duration:0};function J(n,s,o){let a,i,l=s(n,o),u=!1,d=0;function f(){a&&C(n,a)}function m(){const{delay:s=0,duration:o=300,easing:r=e,tick:m=t,css:h}=l||Z;h&&(a=_(n,0,1,o,s,r,h,d++)),m(0,1);const p=c()+s,w=p+o;i&&i.abort(),u=!0,j(()=>P(n,!0,"start")),i=g(t=>{if(u){if(t>=w)return m(1,0),P(n,!0,"end"),f(),u=!1;if(t>=p){const e=r((t-p)/o);m(e,1-e)}}return u})}let h=!1;return{start(){h||(C(n),r(l)?(l=l(),N().then(m)):m())},invalidate(){h=!1},end(){u&&(f(),u=!1)}}}function Q(n,s,a,i){let l=s(n,a),u=i?0:1,d=null,f=null,m=null;function h(){m&&C(n,m)}function p(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function w(s){const{delay:r=0,duration:a=300,easing:i=e,tick:w=t,css:v}=l||Z,y={start:c()+r,b:s};s||(y.group=F,F.r+=1),d?f=y:(v&&(h(),m=_(n,u,s,a,r,i,v)),s&&w(0,1),d=p(y,a),j(()=>P(n,s,"start")),g(t=>{if(f&&t>f.start&&(d=p(f,a),f=null,P(n,d.b,"start"),v&&(h(),m=_(n,u,d.b,d.duration,0,i,l.css))),d)if(t>=d.end)w(u=d.b,1-u),P(n,d.b,"end"),f||(d.b?h():--d.group.r||o(d.group.c)),d=null;else if(t>=d.start){const e=t-d.start;u=d.a+d.d*i(e/d.duration),w(u,1-u)}return!(!d&&!f)}))}return{run(t){r(l)?N().then(()=>{l=l(),w(t)}):w(t)},end(){h(),d=f=null}}}const V="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function tt(t){t&&t.c()}function et(t,e,s){const{fragment:a,on_mount:i,on_destroy:l,after_update:c}=t.$$;a&&a.m(e,s),j(()=>{const e=i.map(n).filter(r);l?l.push(...e):o(e),t.$$.on_mount=[]}),c.forEach(j)}function nt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){-1===t.$$.dirty[0]&&(R.push(t),I||(I=!0,L.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ot(e,n,r,a,i,l,c=[-1]){const u=A;E(e);const d=n.props||{},f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:c,skip_bound:!1};let g=!1;if(f.ctx=r?r(e,d,(t,n,...s)=>{const o=s.length?s[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),g&&st(e,t)),n}):[],f.update(),g=!0,o(f.before_update),f.fragment=!!a&&a(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(p)}else f.fragment&&f.fragment.c();n.intro&&U(e.$$.fragment),et(e,n.target,n.anchor),O()}E(u)}class rt{$destroy(){nt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function at(t){const e=t-1;return e*e*e+1}function it(t){return--t*t*t*t*t+1}function lt(e){let n,s;return{c(){n=v("div"),s=y(e[0]),$(n,"class","question svelte-1dg4i2e")},m(t,e){h(t,n,e),m(n,s)},p(t,[e]){1&e&&x(s,t[0])},i:t,o:t,d(t){t&&p(n)}}}function ct(t,e,n){let{questionText:s}=e;return t.$$set=t=>{"questionText"in t&&n(0,s=t.questionText)},[s]}class ut extends rt{constructor(t){super(),ot(this,t,ct,lt,a,{questionText:0})}}function dt(e){let n,s,o,r,a,i,l,c,u,d=e[2][e[1]]+"";return{c(){n=v("div"),s=v("span"),s.textContent="♦",o=q(),r=v("span"),a=y(d),i=y(":"),l=q(),c=v("div"),u=y(e[0]),$(s,"class","diam svelte-1f3aymc"),$(r,"class","answer-letter svelte-1f3aymc"),$(c,"class","answer-text svelte-1f3aymc"),$(n,"class","answer-container svelte-1f3aymc")},m(t,e){h(t,n,e),m(n,s),m(n,o),m(n,r),m(r,a),m(r,i),m(n,l),m(n,c),m(c,u)},p(t,[e]){6&e&&d!==(d=t[2][t[1]]+"")&&x(a,d),1&e&&x(u,t[0])},i:t,o:t,d(t){t&&p(n)}}}function ft(t,e,n){let{answerText:s}=e,{idx:o}=e,{answerKeys:r=["A","B","C","D"]}=e;return t.$$set=t=>{"answerText"in t&&n(0,s=t.answerText),"idx"in t&&n(1,o=t.idx),"answerKeys"in t&&n(2,r=t.answerKeys)},[s,o,r]}class gt extends rt{constructor(t){super(),ot(this,t,ft,dt,a,{answerText:0,idx:1,answerKeys:2})}}function mt(e){let n,s,o,r,a;return{c(){n=v("link"),s=q(),o=v("div"),r=v("span"),a=y(e[0]),$(n,"href","https://fonts.googleapis.com/css2?family=Balthazar&display=swap"),$(n,"rel","stylesheet"),$(r,"class","timer-num svelte-kl566y"),$(o,"class","timer-container svelte-kl566y")},m(t,e){m(document.head,n),h(t,s,e),h(t,o,e),m(o,r),m(r,a)},p(t,[e]){1&e&&x(a,t[0])},i:t,o:t,d(t){p(n),t&&p(s),t&&p(o)}}}function ht(t,e,n){let{timeLeft:s}=e;return t.$$set=t=>{"timeLeft"in t&&n(0,s=t.timeLeft)},[s]}class pt extends rt{constructor(t){super(),ot(this,t,ht,mt,a,{timeLeft:0})}}const wt={0:[{question:"What is the standard abbreviation for your Charisma score?",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]},{question:"What is the standard abbreviation for your Dexterity score?",correctAnswer:"DEX",answers:["CHA","DEX","WIS","CON"]}],1:[{question:"Which of these creatures is famous for transforming into treasure to trick adventurers?",correctAnswer:"Mimic",answers:["Bugbear","Mimic","Acid Slime","Werewolf"]},{question:"Which type of damage prevents a troll from regenerating?",correctAnswer:"Fire",answers:["Ice","Lightning","Radiant","Fire"]}],2:[{question:"How does a monk gain their powers?",correctAnswer:"Through their own life-force or ki",answers:["Through nature","Through a deity","Through their own life-force or ki","Through extensive study"]},{question:"Which is a wizard's most important piece of equipment?",correctAnswer:"Spellbook",answers:["Wand","Spellbook","Robes and wizard hat","Staff"]}],3:[{question:"There are two main types of dragons, metallic and …",correctAnswer:"Chromatic",answers:["Chromatic","Aberrant","Abyssal","Celestial"]},{question:"How do clerics get their spells?",correctAnswer:"Gaining the favor of a deity",answers:["Elaborate ritual dances","From scrolls","Gaining the favor of a deity","Spellbooks"]}],4:[{question:"The Barbarian class is known for a unique ability that allows them to inflict extra damage. What is it called?",correctAnswer:"Rage",answers:["Fury","Intimidation","Wildstrike","Rage"]},{question:"What is the only way to ensure the death of a lich?",correctAnswer:"Destroy its phylactery",answers:["Use a resurrection spell","Engulf it in flames","Remove its head","Destroy its phylactery"]}],5:[{question:"Which wizard is known for creating a variety of spells involving illusory hands and fists?",correctAnswer:"Bigby",answers:["Halaster","Harry","Bigby","Mordenkainen"]},{question:"What kind of special breath does a silver dragon have?",correctAnswer:"Cold Breath",answers:["Fire Breath","Cold Breath","Acid Spray","Lightning Breath"]}],6:[{question:"Which monster is feared not for the danger to an adventurer's life, but rather to their magical equipment?",correctAnswer:"Rust monster",answers:["Blue dragon","Hook horror","Rust monster","Arcanaloth"]},{question:"Which is the Arcane Tradition that focuses on modifying matter?",correctAnswer:"Transmutation",answers:["Abjuration","Evocation","Enchantment","Transmutation"]}],7:[{question:"Which monster has a large central eye, multiple spellcasting eyestalks and floats above the ground?",correctAnswer:"A beholder",answers:["A mind flayer","A bullette","A beholder","An intellect devourer"]},{question:"What is another name for a mind-flayer?",correctAnswer:"Illithid",answers:["Illithid","Kuo-toa","Malcanthet","Beholder"]}],8:[{question:"This creature can be identified by their lion head and backwards-facing hands.",correctAnswer:"Rakshasa",answers:["Githyanki","Rakshasa","Duergar","Ogre"]},{question:"Which kind of undead is Count Strahd von Zarovich?",correctAnswer:"A vampire",answers:["A vampire","A revenant","A mummy lord","A lich"]}],9:[{question:"Who is the god that most orcs worship?",correctAnswer:"Gruumsh",answers:["Lolth","Tiamat","Gruumsh","Kurtulmak"]},{question:"Which faction of the Forgotten Realms wants to acquire wealth and power, at any cost?",correctAnswer:"The Zhentarim",answers:["The Zhentarim","The Harpers","The Thieves' Guild","The Assassin's Blade"]}]};function vt(t,{delay:e=0,duration:n=400,easing:s=at,x:o=0,y:r=0,opacity:a=0}){const i=getComputedStyle(t),l=+i.opacity,c="none"===i.transform?"":i.transform,u=l*(1-a);return{delay:e,duration:n,easing:s,css:(t,e)=>`\n\t\t\ttransform: ${c} translate(${(1-t)*o}px, ${(1-t)*r}px);\n\t\t\topacity: ${l-u*e}`}}const{document:yt}=V;function qt(t,e,n){const s=t.slice();return s[31]=e[n],s[33]=n,s}function bt(t,e,n){const s=t.slice();return s[34]=e[n],s[36]=n,s}function $t(t){let e,n,s,o,r=t[34].name+"";return{c(){e=v("div"),n=v("div"),s=y(r),$(n,"class",o=i(t[34].class)+" svelte-ggnqqo"),$(e,"class","tag-contain svelte-ggnqqo")},m(t,o){h(t,e,o),m(e,n),m(n,s)},p(t,e){16&e[0]&&r!==(r=t[34].name+"")&&x(s,r),16&e[0]&&o!==(o=i(t[34].class)+" svelte-ggnqqo")&&$(n,"class",o)},d(t){t&&p(e)}}}function xt(t){let e,n,s,o,r=t[34].name+"";return{c(){e=v("div"),n=v("div"),s=y(r),$(n,"class",o=i(t[34].class+" curr-font")+" svelte-ggnqqo"),$(e,"class","tag-contain curr svelte-ggnqqo")},m(t,o){h(t,e,o),m(e,n),m(n,s)},p(t,e){16&e[0]&&r!==(r=t[34].name+"")&&x(s,r),16&e[0]&&o!==(o=i(t[34].class+" curr-font")+" svelte-ggnqqo")&&$(n,"class",o)},d(t){t&&p(e)}}}function kt(t){let e,n;function s(t,e){return t[36]===t[5]?xt:$t}let o=s(t),r=o(t);return{c(){e=v("div"),r.c(),n=q(),$(e,"class","tag-area svelte-ggnqqo")},m(t,s){h(t,e,s),r.m(e,null),m(e,n)},p(t,a){o===(o=s(t))&&r?r.p(t,a):(r.d(1),r=o(t),r&&(r.c(),r.m(e,n)))},d(t){t&&p(e),r.d()}}}function At(t){let e,n,s,o,r;const a=[Wt,Rt],i=[];function l(t,e){return t[2]?0:1}e=l(t),n=i[e]=a[e](t);let c=t[1],u=[];for(let e=0;e<c.length;e+=1)u[e]=Lt(qt(t,c,e));const d=t=>X(u[t],1,1,()=>{u[t]=null});return{c(){n.c(),s=q(),o=v("div");for(let t=0;t<u.length;t+=1)u[t].c();$(o,"class","answers svelte-ggnqqo")},m(t,n){i[e].m(t,n),h(t,s,n),h(t,o,n);for(let t=0;t<u.length;t+=1)u[t].m(o,null);r=!0},p(t,r){let f=e;if(e=l(t),e===f?i[e].p(t,r):(K(),X(i[f],1,1,()=>{i[f]=null}),Y(),n=i[e],n||(n=i[e]=a[e](t),n.c()),U(n,1),n.m(s.parentNode,s)),4098&r[0]){let e;for(c=t[1],e=0;e<c.length;e+=1){const n=qt(t,c,e);u[e]?(u[e].p(n,r),U(u[e],1)):(u[e]=Lt(n),u[e].c(),U(u[e],1),u[e].m(o,null))}for(K(),e=c.length;e<u.length;e+=1)d(e);Y()}},i(t){if(!r){U(n);for(let t=0;t<c.length;t+=1)U(u[t]);r=!0}},o(t){X(n),u=u.filter(Boolean);for(let t=0;t<u.length;t+=1)X(u[t]);r=!1},d(t){i[e].d(t),t&&p(s),t&&p(o),w(u,t)}}}function Tt(e){let n,s,o,r,a,i,l,c,u;return{c(){n=v("div"),n.textContent=""+e[14](),s=q(),o=v("div"),r=v("span"),r.textContent='Oops, you ran out of time! Click \n\t\t\t\t"Replay" to play again!',a=q(),i=v("button"),i.textContent="Replay",$(n,"class","ignore svelte-ggnqqo"),$(r,"class","loss-message"),$(i,"class","next svelte-ggnqqo"),$(o,"class","message svelte-ggnqqo")},m(t,l){h(t,n,l),h(t,s,l),h(t,o,l),m(o,r),m(o,a),m(o,i),c||(u=b(i,"click",e[21]),c=!0)},p:t,i(t){l||j(()=>{l=J(o,e[10],{}),l.start()})},o:t,d(t){t&&p(n),t&&p(s),t&&p(o),c=!1,u()}}}function _t(e){let n,s,o,r,a,i,l;return{c(){n=v("div"),s=v("span"),s.textContent='You made it to Platinum Rank! You stand as a beacon of hope\n\t\t\t\tfor adventuring teams across the land! Unfortunately, the fight never truly ends. Click \n\t\t\t\t"Replay" to play again!',o=q(),r=v("button"),r.textContent="Replay",$(s,"class","loss-message"),$(r,"class","next svelte-ggnqqo"),$(n,"class","message svelte-ggnqqo")},m(t,a){h(t,n,a),m(n,s),m(n,o),m(n,r),i||(l=b(r,"click",e[20]),i=!0)},p:t,i(t){a||j(()=>{a=J(n,e[10],{}),a.start()})},o:t,d(t){t&&p(n),i=!1,l()}}}function Ct(e){let n,s,o,r,a,i,l,c,u,d,f,g,w=e[4][e[5]].name+"",k=e[3][e[5]]+"";return{c(){n=v("div"),s=v("span"),o=y("Uh oh! You made it to "),r=y(w),a=y(" Rank but then\n\t\t\t\tyou were defeated by "),i=y(k),l=y('. Better luck next time! Click "Replay"\n\t\t\t\tto play again!'),c=q(),u=v("button"),u.textContent="Replay",$(s,"class","loss-message"),$(u,"class","next svelte-ggnqqo"),$(n,"class","message svelte-ggnqqo")},m(t,d){h(t,n,d),m(n,s),m(s,o),m(s,r),m(s,a),m(s,i),m(s,l),m(n,c),m(n,u),f||(g=b(u,"click",e[19]),f=!0)},p(t,e){48&e[0]&&w!==(w=t[4][t[5]].name+"")&&x(r,w),40&e[0]&&k!==(k=t[3][t[5]]+"")&&x(i,k)},i(t){d||j(()=>{d=J(n,e[10],{}),d.start()})},o:t,d(t){t&&p(n),f=!1,g()}}}function Et(e){let n,s,o,r,a,i,l;return{c(){n=v("div"),s=v("div"),s.textContent='Welcome to the game! Press "Start" to continue!',o=q(),r=v("button"),r.textContent="Start",$(s,"class","opener-message"),$(r,"class","next svelte-ggnqqo"),$(n,"class","message svelte-ggnqqo")},m(t,a){h(t,n,a),m(n,s),m(n,o),m(n,r),i||(l=b(r,"click",e[18]),i=!0)},p:t,i(t){a||j(()=>{a=J(n,e[10],{}),a.start()})},o:t,d(t){t&&p(n),i=!1,l()}}}function Rt(t){let e,n;return e=new ut({props:{questionText:t[0]}}),{c(){tt(e.$$.fragment)},m(t,s){et(e,t,s),n=!0},p(t,n){const s={};1&n[0]&&(s.questionText=t[0]),e.$set(s)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function Wt(e){let n,s,r,a,i,l,c,u,d;return{c(){n=v("div"),s=v("span"),s.textContent="Is that your final answer?",r=q(),a=v("div"),i=v("button"),i.textContent="Yes",l=q(),c=v("button"),c.textContent="No",$(s,"class","final-answer"),$(i,"class","next svelte-ggnqqo"),$(c,"class","next red svelte-ggnqqo"),$(a,"class","final-buttons"),$(n,"class","message svelte-ggnqqo")},m(t,o){h(t,n,o),m(n,s),m(n,r),m(n,a),m(a,i),m(a,l),m(a,c),u||(d=[b(i,"click",e[22]),b(c,"click",e[23])],u=!0)},p:t,i:t,o:t,d(t){t&&p(n),u=!1,o(d)}}}function Bt(t){let e,n,s,o,r,a,l,c,u;function d(...e){return t[25](t[31],t[33],...e)}return n=new gt({props:{class:"ans",answerText:t[31],idx:t[33]}}),{c(){e=v("button"),tt(n.$$.fragment),s=q(),$(e,"class",o=i(t[31].split(" ").join("-")+" answer")+" svelte-ggnqqo"),$(e,"id",r=t[33])},m(t,o){h(t,e,o),et(n,e,null),m(e,s),l=!0,c||(u=b(e,"click",d),c=!0)},p(s,r){t=s;const a={};2&r[0]&&(a.answerText=t[31]),n.$set(a),(!l||2&r[0]&&o!==(o=i(t[31].split(" ").join("-")+" answer")+" svelte-ggnqqo"))&&$(e,"class",o)},i(t){l||(U(n.$$.fragment,t),j(()=>{a||(a=Q(e,vt,{x:200,duration:500},!0)),a.run(1)}),l=!0)},o(t){X(n.$$.fragment,t),a||(a=Q(e,vt,{x:200,duration:500},!1)),a.run(0),l=!1},d(t){t&&p(e),nt(n),t&&a&&a.end(),c=!1,u()}}}function St(t){let e,n,s,o,r,a,l,c,u;function d(...e){return t[24](t[31],t[33],...e)}return n=new gt({props:{class:"ans",answerText:t[31],idx:t[33]}}),{c(){e=v("button"),tt(n.$$.fragment),s=q(),$(e,"class",o=i(t[31].split(" ").join("-")+" answer")+" svelte-ggnqqo"),$(e,"id",r=t[33])},m(t,o){h(t,e,o),et(n,e,null),m(e,s),l=!0,c||(u=b(e,"click",d),c=!0)},p(s,r){t=s;const a={};2&r[0]&&(a.answerText=t[31]),n.$set(a),(!l||2&r[0]&&o!==(o=i(t[31].split(" ").join("-")+" answer")+" svelte-ggnqqo"))&&$(e,"class",o)},i(t){l||(U(n.$$.fragment,t),j(()=>{a||(a=Q(e,vt,{x:-200,duration:500},!0)),a.run(1)}),l=!0)},o(t){X(n.$$.fragment,t),a||(a=Q(e,vt,{x:-200,duration:500},!1)),a.run(0),l=!1},d(t){t&&p(e),nt(n),t&&a&&a.end(),c=!1,u()}}}function Lt(t){let e,n,s,o;const r=[St,Bt],a=[];return e=function(t,e){return t[33]%2==0?0:1}(t),n=a[e]=r[e](t),{c(){n.c(),s=y("")},m(t,n){a[e].m(t,n),h(t,s,n),o=!0},p(t,e){n.p(t,e)},i(t){o||(U(n),o=!0)},o(t){X(n),o=!1},d(t){a[e].d(t),t&&p(s)}}}function It(t){let e,n,s,o,r,a,i,l,c,u,d,f,g,y,b,x,k,A,T;u=new pt({props:{timeLeft:t[9]}});let _=t[4],C=[];for(let e=0;e<_.length;e+=1)C[e]=kt(bt(t,_,e));const E=[Et,Ct,_t,Tt,At],R=[];function W(t,e){return t[6]?t[8]?1:t[7]?2:0===t[9]?3:4:0}return b=W(t),x=R[b]=E[b](t),{c(){e=v("script"),s=q(),o=v("main"),r=v("div"),a=v("div"),i=v("img"),c=q(),tt(u.$$.fragment),d=q(),f=v("div");for(let t=0;t<C.length;t+=1)C[t].c();g=q(),y=v("div"),x.c(),k=q(),A=v("div"),A.innerHTML='<div class="about-container svelte-ggnqqo"><img class="face svelte-ggnqqo" src="images/face.jpg" alt="face"> \n\t\t\t<div class="about-popup svelte-ggnqqo"><a href="https://github.com/chrisoney/"><span class="about-icon fab fa-github svelte-ggnqqo"></span></a> \n\t\t\t\t<a href="https://www.linkedin.com/in/christopher-oney-317b84132/"><span class="about-icon fab fa-linkedin svelte-ggnqqo"></span></a> \n\t\t\t\t<a href="https://angel.co/u/christopher-oney"><span class="about-icon fab fa-angellist svelte-ggnqqo"></span></a></div></div>',e.src!==(n="https://kit.fontawesome.com/a229c5b13d.js")&&$(e,"src","https://kit.fontawesome.com/a229c5b13d.js"),$(e,"crossorigin","anonymous"),$(i,"class","title svelte-ggnqqo"),i.src!==(l="images/title-2.png")&&$(i,"src","images/title-2.png"),$(i,"alt","title"),$(a,"class","top-left svelte-ggnqqo"),$(f,"class","board svelte-ggnqqo"),$(r,"class","top svelte-ggnqqo"),$(y,"class","bottom svelte-ggnqqo"),$(A,"class","about svelte-ggnqqo"),$(o,"class","svelte-ggnqqo")},m(t,n){m(yt.head,e),h(t,s,n),h(t,o,n),m(o,r),m(r,a),m(a,i),m(a,c),et(u,a,null),m(r,d),m(r,f);for(let t=0;t<C.length;t+=1)C[t].m(f,null);m(o,g),m(o,y),R[b].m(y,null),m(o,k),m(o,A),T=!0},p(t,e){const n={};if(512&e[0]&&(n.timeLeft=t[9]),u.$set(n),48&e[0]){let n;for(_=t[4],n=0;n<_.length;n+=1){const s=bt(t,_,n);C[n]?C[n].p(s,e):(C[n]=kt(s),C[n].c(),C[n].m(f,null))}for(;n<C.length;n+=1)C[n].d(1);C.length=_.length}let s=b;b=W(t),b===s?R[b].p(t,e):(K(),X(R[s],1,1,()=>{R[s]=null}),Y(),x=R[b],x||(x=R[b]=E[b](t),x.c()),U(x,1),x.m(y,null))},i(t){T||(U(u.$$.fragment,t),U(x),T=!0)},o(t){X(u.$$.fragment,t),X(x),T=!1},d(t){p(e),t&&p(s),t&&p(o),nt(u),w(C,t),R[b].d()}}}function jt(t,e,n){let s=-1,o=!1,r=!1,a=!1,{monsters:i=["slimes","goblins","kobolds","bandits","ogres","sandworms","Githyanki","illithids","a beholder","a dragon"]}=e,{ranks:l=[{name:"Porcelain",class:"tag small"},{name:"Obsidian",class:"tag small"},{name:"Steel",class:"tag small"},{name:"Sapphire",class:"tag small"},{name:"Emerald",class:"tag small"},{name:"Ruby",class:"tag small"},{name:"Bronze",class:"tag small"},{name:"Silver",class:"tag small"},{name:"Gold",class:"tag small"},{name:"Platinum",class:"tag large"}]}=e,c=0,{question:u=""}=e,{correctAnswer:d=""}=e,{answers:f=[]}=e;function g(){const t=wt[c][Math.floor(Math.random()*wt[c].length)];n(0,u=t.question),n(15,d=t.correctAnswer),n(1,f=t.answers)}function m(t,e){t.stopPropagation(),"start"===e?(n(5,s=0),n(6,o=!0),n(9,b=15),g(),$()):"replay"===e&&(n(8,a=!1),n(7,r=!1),n(6,o=!1),n(5,s=-1),c=0)}let{choiceText:h=""}=e,{choiceIdx:p=0}=e,{final:w=!1}=e;function v(t,e,s){t.preventDefault(),n(16,h=e),n(17,p=s),n(2,w=!0),x()}function y(t,e){t.preventDefault(),n(2,w=!1),e?function(t,e){if(t===d)document.getElementById(e).classList.add("green"),n(0,u="Correct!"),setTimeout(()=>{document.getElementById(e).classList.remove("green"),c+=1,n(5,s+=1),c<=9?(n(9,b=15),$(),g()):n(7,r=!0)},2e3);else{n(0,u="Wrong!"),document.getElementById(e).classList.add("red");let t=document.getElementsByClassName("answer");for(let e=0;e<t.length;e++)t[e].classList.contains(d.split(" ").join("-"))&&t[e].classList.add("green");setTimeout(()=>{n(8,a=!0)},2e3)}}(h,p):$()}let q,b=15;function $(){q=setInterval(()=>{n(9,b-=1)},1e3)}function x(){clearInterval(q)}return t.$$set=t=>{"monsters"in t&&n(3,i=t.monsters),"ranks"in t&&n(4,l=t.ranks),"question"in t&&n(0,u=t.question),"correctAnswer"in t&&n(15,d=t.correctAnswer),"answers"in t&&n(1,f=t.answers),"choiceText"in t&&n(16,h=t.choiceText),"choiceIdx"in t&&n(17,p=t.choiceIdx),"final"in t&&n(2,w=t.final)},[u,f,w,i,l,s,o,r,a,b,function(t,{delay:e=600,duration:n=1e3}){const s=+getComputedStyle(t).opacity;return{easing:it,delay:e,duration:n,css:t=>"opacity: "+t*s}},m,v,y,x,d,h,p,t=>m(t,"start"),t=>m(t,"replay"),t=>m(t,"replay"),t=>m(t,"replay"),t=>y(t,!0),t=>y(t,!1),(t,e,n)=>v(n,t,e),(t,e,n)=>v(n,t,e)]}return new class extends rt{constructor(t){super(),ot(this,t,jt,It,a,{monsters:3,ranks:4,question:0,correctAnswer:15,answers:1,choiceText:16,choiceIdx:17,final:2},[-1,-1])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
