var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t){return null==t?"":t}function i(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function h(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let w;function v(t){w=t}const $=[],y=[],x=[],b=[],A=Promise.resolve();let q=!1;function C(t){x.push(t)}let B=!1;const T=new Set;function k(){if(!B){B=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];v(e),_(e.$$)}for($.length=0;y.length;)y.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];T.has(e)||(T.add(e),e())}x.length=0}while($.length);for(;b.length;)b.pop()();q=!1,B=!1,T.clear()}}function _(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const E=new Set;let D;function S(){D={r:0,c:[],p:D}}function L(){D.r||s(D.c),D=D.p}function N(t,e){t&&t.i&&(E.delete(t),t.i(e))}function O(t,e,n,s){if(t&&t.o){if(E.has(t))return;E.add(t),D.c.push(()=>{E.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function R(t){t&&t.c()}function W(t,n,o){const{fragment:a,on_mount:i,on_destroy:l,after_update:c}=t.$$;a&&a.m(n,o),C(()=>{const n=i.map(e).filter(r);l?l.push(...n):s(n),t.$$.on_mount=[]}),c.forEach(C)}function j(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function I(t,e){-1===t.$$.dirty[0]&&($.push(t),q||(q=!0,A.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(e,r,o,a,i,l,u=[-1]){const f=w;v(e);const d=r.props||{},m=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let h=!1;if(m.ctx=o?o(e,d,(t,n,...s)=>{const r=s.length?s[0]:n;return m.ctx&&i(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),h&&I(e,t)),n}):[],m.update(),h=!0,s(m.before_update),m.fragment=!!a&&a(m.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);m.fragment&&m.fragment.l(t),t.forEach(c)}else m.fragment&&m.fragment.c();r.intro&&N(e.$$.fragment),W(e,r.target,r.anchor),k()}v(f)}class H{$destroy(){j(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function M(e){let n,s;return{c(){n=f("div"),s=d(e[0]),g(n,"class","question svelte-1dg4i2e")},m(t,e){l(t,n,e),i(n,s)},p(t,[e]){1&e&&p(s,t[0])},i:t,o:t,d(t){t&&c(n)}}}function K(t,e,n){let{questionText:s}=e;return t.$$set=t=>{"questionText"in t&&n(0,s=t.questionText)},[s]}class X extends H{constructor(t){super(),P(this,t,K,M,o,{questionText:0})}}function Y(e){let n,s,r,o,a,u,h,w,v,$=e[2][e[1]]+"";return{c(){n=f("div"),s=f("span"),s.textContent="♦",r=m(),o=f("span"),a=d($),u=d(":"),h=m(),w=f("div"),v=d(e[0]),g(s,"class","diam svelte-1f3aymc"),g(o,"class","answer-letter svelte-1f3aymc"),g(w,"class","answer-text svelte-1f3aymc"),g(n,"class","answer-container svelte-1f3aymc")},m(t,e){l(t,n,e),i(n,s),i(n,r),i(n,o),i(o,a),i(o,u),i(n,h),i(n,w),i(w,v)},p(t,[e]){6&e&&$!==($=t[2][t[1]]+"")&&p(a,$),1&e&&p(v,t[0])},i:t,o:t,d(t){t&&c(n)}}}function G(t,e,n){let{answerText:s}=e,{idx:r}=e,{answerKeys:o=["A","B","C","D"]}=e;return t.$$set=t=>{"answerText"in t&&n(0,s=t.answerText),"idx"in t&&n(1,r=t.idx),"answerKeys"in t&&n(2,o=t.answerKeys)},[s,r,o]}class U extends H{constructor(t){super(),P(this,t,G,Y,o,{answerText:0,idx:1,answerKeys:2})}}const z={0:[{question:"What is the standard abbreviation for your Charisma score?",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]},{question:"What is the standard abbreviation for your Dexterity score?",correctAnswer:"DEX",answers:["CHA","DEX","WIS","CON"]}],1:[{question:"This is question 2",correctAnswer:"B",answers:["A","B","C","D"]},{question:"This is question 2.5",correctAnswer:"C",answers:["A","B","C","D"]}],2:[{question:"This is question 3",correctAnswer:"B",answers:["A","B","C","D"]}],3:[{question:"This is question 4",correctAnswer:"B",answers:["A","B","C","D"]}],4:[{question:"This is question 5",correctAnswer:"B",answers:["A","B","C","D"]}],5:[{question:"This is question 6",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]}],6:[{question:"This is question 7",correctAnswer:"B",answers:["A","B","C","D"]}],7:[{question:"This is question 8",correctAnswer:"B",answers:["A","B","C","D"]}],8:[{question:"This is question 9",correctAnswer:"B",answers:["A","B","C","D"]}],9:[{question:"This is question 10",correctAnswer:"B",answers:["A","B","C","D"]}]};function F(t,e,n){const s=t.slice();return s[16]=e[n],s[18]=n,s}function J(t,e,n){const s=t.slice();return s[19]=e[n],s[21]=n,s}function Q(t){let e,n,s,r,o=t[19].name+"";return{c(){e=f("div"),n=f("div"),s=d(o),g(n,"class",r=a(t[19].class)+" svelte-1r1ihr8"),g(e,"class","tag-contain svelte-1r1ihr8")},m(t,r){l(t,e,r),i(e,n),i(n,s)},p(t,e){8&e&&o!==(o=t[19].name+"")&&p(s,o),8&e&&r!==(r=a(t[19].class)+" svelte-1r1ihr8")&&g(n,"class",r)},d(t){t&&c(e)}}}function V(t){let e,n,s,r,o=t[19].name+"";return{c(){e=f("div"),n=f("div"),s=d(o),g(n,"class",r=a(t[19].class+" curr-font")+" svelte-1r1ihr8"),g(e,"class","tag-contain curr svelte-1r1ihr8")},m(t,r){l(t,e,r),i(e,n),i(n,s)},p(t,e){8&e&&o!==(o=t[19].name+"")&&p(s,o),8&e&&r!==(r=a(t[19].class+" curr-font")+" svelte-1r1ihr8")&&g(n,"class",r)},d(t){t&&c(e)}}}function Z(t){let e,n;function s(t,e){return t[21]===t[4]?V:Q}let r=s(t),o=r(t);return{c(){e=f("div"),o.c(),n=m(),g(e,"class","tag-area svelte-1r1ihr8")},m(t,s){l(t,e,s),o.m(e,null),i(e,n)},p(t,a){r===(r=s(t))&&o?o.p(t,a):(o.d(1),o=r(t),o&&(o.c(),o.m(e,n)))},d(t){t&&c(e),o.d()}}}function tt(t){let e,n,s,r;e=new X({props:{questionText:t[0]}});let o=t[1],a=[];for(let e=0;e<o.length;e+=1)a[e]=rt(F(t,o,e));const i=t=>O(a[t],1,1,()=>{a[t]=null});return{c(){R(e.$$.fragment),n=m(),s=f("div");for(let t=0;t<a.length;t+=1)a[t].c();g(s,"class","answers svelte-1r1ihr8")},m(t,o){W(e,t,o),l(t,n,o),l(t,s,o);for(let t=0;t<a.length;t+=1)a[t].m(s,null);r=!0},p(t,n){const r={};if(1&n&&(r.questionText=t[0]),e.$set(r),514&n){let e;for(o=t[1],e=0;e<o.length;e+=1){const r=F(t,o,e);a[e]?(a[e].p(r,n),N(a[e],1)):(a[e]=rt(r),a[e].c(),N(a[e],1),a[e].m(s,null))}for(S(),e=o.length;e<a.length;e+=1)i(e);L()}},i(t){if(!r){N(e.$$.fragment,t);for(let t=0;t<o.length;t+=1)N(a[t]);r=!0}},o(t){O(e.$$.fragment,t),a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)O(a[t]);r=!1},d(t){j(e,t),t&&c(n),t&&c(s),u(a,t)}}}function et(e){let n,s,r,o,a,u;return{c(){n=f("div"),s=f("span"),s.textContent='You made it to Porcelain Rank! You stand as a beacon of hope\n\t\t\t\tfor adventuring teams across the land! Unfortunately, the fight never truly ends. Click \n\t\t\t\t"Replay" to play again!',r=m(),o=f("button"),o.textContent="Replay",g(s,"class","loss-message"),g(o,"class","next svelte-1r1ihr8"),g(n,"class","message svelte-1r1ihr8")},m(t,c){l(t,n,c),i(n,s),i(n,r),i(n,o),a||(u=h(o,"click",e[13]),a=!0)},p:t,i:t,o:t,d(t){t&&c(n),a=!1,u()}}}function nt(e){let n,s,r,o,a,u,w,v,$,y,x,b=e[3][e[4]].name+"",A=e[2][e[4]]+"";return{c(){n=f("div"),s=f("span"),r=d("Uh oh! You made it to "),o=d(b),a=d(" Rank but then\n\t\t\t\tyou were defeated by "),u=d(A),w=d('. Better luck next time! Click "Replay"\n\t\t\t\tto play again!'),v=m(),$=f("button"),$.textContent="Replay",g(s,"class","loss-message"),g($,"class","next svelte-1r1ihr8"),g(n,"class","message svelte-1r1ihr8")},m(t,c){l(t,n,c),i(n,s),i(s,r),i(s,o),i(s,a),i(s,u),i(s,w),i(n,v),i(n,$),y||(x=h($,"click",e[12]),y=!0)},p(t,e){24&e&&b!==(b=t[3][t[4]].name+"")&&p(o,b),20&e&&A!==(A=t[2][t[4]]+"")&&p(u,A)},i:t,o:t,d(t){t&&c(n),y=!1,x()}}}function st(e){let n,s,r,o,a,u;return{c(){n=f("div"),s=f("div"),s.textContent='Welcome to the game! Press "Start" to continue!',r=m(),o=f("button"),o.textContent="Start",g(s,"class","opener-message"),g(o,"class","next svelte-1r1ihr8"),g(n,"class","message svelte-1r1ihr8")},m(t,c){l(t,n,c),i(n,s),i(n,r),i(n,o),a||(u=h(o,"click",e[11]),a=!0)},p:t,i:t,o:t,d(t){t&&c(n),a=!1,u()}}}function rt(t){let e,n,s,o,u,d,p,w;return n=new U({props:{class:"ans",answerText:t[16],idx:t[18]}}),{c(){e=f("button"),R(n.$$.fragment),s=m(),g(e,"class",o=a(t[16].split(" ").join("-")+" answer")+" svelte-1r1ihr8"),g(e,"id",u=t[18])},m(o,a){l(o,e,a),W(n,e,null),i(e,s),d=!0,p||(w=h(e,"click",(function(){r(t[9](t[16],t[18]))&&t[9](t[16],t[18]).apply(this,arguments)})),p=!0)},p(s,r){t=s;const i={};2&r&&(i.answerText=t[16]),n.$set(i),(!d||2&r&&o!==(o=a(t[16].split(" ").join("-")+" answer")+" svelte-1r1ihr8"))&&g(e,"class",o)},i(t){d||(N(n.$$.fragment,t),d=!0)},o(t){O(n.$$.fragment,t),d=!1},d(t){t&&c(e),j(n),p=!1,w()}}}function ot(t){let e,n,s,r,o,a,d,h,p,w,v,$=t[3],y=[];for(let e=0;e<$.length;e+=1)y[e]=Z(J(t,$,e));const x=[st,nt,et,tt],b=[];function A(t,e){return t[5]?t[7]?1:t[6]?2:3:0}return p=A(t),w=b[p]=x[p](t),{c(){e=f("main"),n=f("div"),s=f("img"),o=m(),a=f("div");for(let t=0;t<y.length;t+=1)y[t].c();d=m(),h=f("div"),w.c(),g(s,"class","title svelte-1r1ihr8"),s.src!==(r="images/title-2.png")&&g(s,"src","images/title-2.png"),g(s,"alt","title"),g(a,"class","board svelte-1r1ihr8"),g(n,"class","top svelte-1r1ihr8"),g(h,"class","bottom svelte-1r1ihr8"),g(e,"class","svelte-1r1ihr8")},m(t,r){l(t,e,r),i(e,n),i(n,s),i(n,o),i(n,a);for(let t=0;t<y.length;t+=1)y[t].m(a,null);i(e,d),i(e,h),b[p].m(h,null),v=!0},p(t,[e]){if(24&e){let n;for($=t[3],n=0;n<$.length;n+=1){const s=J(t,$,n);y[n]?y[n].p(s,e):(y[n]=Z(s),y[n].c(),y[n].m(a,null))}for(;n<y.length;n+=1)y[n].d(1);y.length=$.length}let n=p;p=A(t),p===n?b[p].p(t,e):(S(),O(b[n],1,1,()=>{b[n]=null}),L(),w=b[p],w||(w=b[p]=x[p](t),w.c()),N(w,1),w.m(h,null))},i(t){v||(N(w),v=!0)},o(t){O(w),v=!1},d(t){t&&c(e),u(y,t),b[p].d()}}}function at(t,e,n){let s=-1,r=!1,o=!1,a=!1,{monsters:i=["slimes","goblins","kobolds","bandits","ogres","sandworms","Githyanki","illithids","a beholder","a dragon"]}=e,{ranks:l=[{name:"Porcelain",class:"tag small"},{name:"Obsidian",class:"tag small"},{name:"Steel",class:"tag small"},{name:"Sapphire",class:"tag small"},{name:"Emerald",class:"tag small"},{name:"Ruby",class:"tag small"},{name:"Bronze",class:"tag small"},{name:"Silver",class:"tag small"},{name:"Gold",class:"tag small"},{name:"Platinum",class:"tag large"}]}=e,c=0,{question:u=""}=e,{correctAnswer:f=""}=e,{answers:d=[]}=e;function m(t,e){t.stopPropagation(),"start"===e?(n(4,s=0),n(5,r=!0),function(){const t=z[c][Math.floor(Math.random()*z[c].length)];n(0,u=t.question),n(10,f=t.correctAnswer),n(1,d=t.answers);let e=[];for(;d.length>0;){let t=d[Math.floor(Math.random()*d.length)];e=[...e,d[t]],n(1,d=d.splice(t))}n(1,d=e)}()):"replay"===e&&(n(7,a=!1),n(6,o=!1),n(5,r=!1),n(4,s=-1),c=0)}return t.$$set=t=>{"monsters"in t&&n(2,i=t.monsters),"ranks"in t&&n(3,l=t.ranks),"question"in t&&n(0,u=t.question),"correctAnswer"in t&&n(10,f=t.correctAnswer),"answers"in t&&n(1,d=t.answers)},[u,d,i,l,s,r,o,a,m,function(t,e){if(t===f)document.getElementById(e).classList.add("green"),n(0,u="Correct!"),setTimeout(()=>{document.getElementById(e).classList.remove("green"),c+=1,n(4,s+=1),c>9&&n(6,o=!0)},2e3);else{n(0,u="Wrong!"),document.getElementById(e).classList.add("red");let t=document.getElementsByClassName("answer");for(let e=0;e<t.length;e++)t[e].classList.contains(f.split(" ").join("-"))&&t[e].classList.add("green");setTimeout(()=>{n(7,a=!0)},2e3)}},f,t=>m(t,"start"),t=>m(t,"replay"),t=>m(t,"replay")]}return new class extends H{constructor(t){super(),P(this,t,at,ot,o,{monsters:2,ranks:3,question:0,correctAnswer:10,answers:1})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
