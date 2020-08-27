var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function r(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(t){return null==t?"":t}function l(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function g(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let v;function w(t){v=t}const $=[],y=[],b=[],x=[],q=Promise.resolve();let A=!1;function T(t){b.push(t)}let B=!1;const C=new Set;function k(){if(!B){B=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];w(e),_(e.$$)}for($.length=0;y.length;)y.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];C.has(e)||(C.add(e),e())}b.length=0}while($.length);for(;x.length;)x.pop()();A=!1,B=!1,C.clear()}}function _(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const E=new Set;let D;function S(){D={r:0,c:[],p:D}}function L(){D.r||s(D.c),D=D.p}function R(t,e){t&&t.i&&(E.delete(t),t.i(e))}function j(t,e,n,s){if(t&&t.o){if(E.has(t))return;E.add(t),D.c.push(()=>{E.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function N(t){t&&t.c()}function O(t,n,a){const{fragment:o,on_mount:l,on_destroy:i,after_update:c}=t.$$;o&&o.m(n,a),T(()=>{const n=l.map(e).filter(r);i?i.push(...n):s(n),t.$$.on_mount=[]}),c.forEach(T)}function I(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function P(t,e){-1===t.$$.dirty[0]&&($.push(t),A||(A=!0,q.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(e,r,a,o,l,i,u=[-1]){const f=v;w(e);const d=r.props||{},m=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let g=!1;if(m.ctx=a?a(e,d,(t,n,...s)=>{const r=s.length?s[0]:n;return m.ctx&&l(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),g&&P(e,t)),n}):[],m.update(),g=!0,s(m.before_update),m.fragment=!!o&&o(m.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);m.fragment&&m.fragment.l(t),t.forEach(c)}else m.fragment&&m.fragment.c();r.intro&&R(e.$$.fragment),O(e,r.target,r.anchor),k()}w(f)}class H{$destroy(){I(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function K(e){let n,s;return{c(){n=f("div"),s=d(e[0]),p(n,"class","question svelte-1dg4i2e")},m(t,e){i(t,n,e),l(n,s)},p(t,[e]){1&e&&h(s,t[0])},i:t,o:t,d(t){t&&c(n)}}}function Y(t,e,n){let{questionText:s}=e;return t.$$set=t=>{"questionText"in t&&n(0,s=t.questionText)},[s]}class U extends H{constructor(t){super(),W(this,t,Y,K,a,{questionText:0})}}function X(e){let n,s,r,a,o,u,g,v,w,$=e[2][e[1]]+"";return{c(){n=f("div"),s=f("span"),s.textContent="♦",r=m(),a=f("span"),o=d($),u=d(":"),g=m(),v=f("div"),w=d(e[0]),p(s,"class","diam svelte-1ai1f4m"),p(a,"class","answer-letter svelte-1ai1f4m"),p(v,"class","answer-text svelte-1ai1f4m"),p(n,"class","answer-container svelte-1ai1f4m")},m(t,e){i(t,n,e),l(n,s),l(n,r),l(n,a),l(a,o),l(a,u),l(n,g),l(n,v),l(v,w)},p(t,[e]){6&e&&$!==($=t[2][t[1]]+"")&&h(o,$),1&e&&h(w,t[0])},i:t,o:t,d(t){t&&c(n)}}}function z(t,e,n){let{answerText:s}=e,{idx:r}=e,{answerKeys:a=["A","B","C","D"]}=e;return t.$$set=t=>{"answerText"in t&&n(0,s=t.answerText),"idx"in t&&n(1,r=t.idx),"answerKeys"in t&&n(2,a=t.answerKeys)},[s,r,a]}class G extends H{constructor(t){super(),W(this,t,z,X,a,{answerText:0,idx:1,answerKeys:2})}}function M(t,e,n){const s=t.slice();return s[10]=e[n],s[12]=n,s}function F(t,e,n){const s=t.slice();return s[13]=e[n],s[15]=n,s}function J(t){let e,n,s,r,a=t[13].name+"";return{c(){e=f("div"),n=f("div"),s=d(a),p(n,"class",r=o(t[13].class)+" svelte-vwna7i"),p(e,"class","tag-contain svelte-vwna7i")},m(t,r){i(t,e,r),l(e,n),l(n,s)},p(t,e){2&e&&a!==(a=t[13].name+"")&&h(s,a),2&e&&r!==(r=o(t[13].class)+" svelte-vwna7i")&&p(n,"class",r)},d(t){t&&c(e)}}}function Q(t){let e,n,s,r,a=t[13].name+"";return{c(){e=f("div"),n=f("div"),s=d(a),p(n,"class",r=o(t[13].class+" curr-font")+" svelte-vwna7i"),p(e,"class","tag-contain curr svelte-vwna7i")},m(t,r){i(t,e,r),l(e,n),l(n,s)},p(t,e){2&e&&a!==(a=t[13].name+"")&&h(s,a),2&e&&r!==(r=o(t[13].class+" curr-font")+" svelte-vwna7i")&&p(n,"class",r)},d(t){t&&c(e)}}}function V(t){let e,n;function s(t,e){return t[15]===t[2]?Q:J}let r=s(t),a=r(t);return{c(){e=f("div"),a.c(),n=m(),p(e,"class","tag-area svelte-vwna7i")},m(t,s){i(t,e,s),a.m(e,null),l(e,n)},p(t,o){r===(r=s(t))&&a?a.p(t,o):(a.d(1),a=r(t),a&&(a.c(),a.m(e,n)))},d(t){t&&c(e),a.d()}}}function Z(t){let e,n,s,r;e=new U({props:{questionText:t[7][t[6]].question}});let a=t[7][t[6]].answers,o=[];for(let e=0;e<a.length;e+=1)o[e]=st(M(t,a,e));const l=t=>j(o[t],1,1,()=>{o[t]=null});return{c(){N(e.$$.fragment),n=m(),s=f("div");for(let t=0;t<o.length;t+=1)o[t].c();p(s,"class","answers svelte-vwna7i")},m(t,a){O(e,t,a),i(t,n,a),i(t,s,a);for(let t=0;t<o.length;t+=1)o[t].m(s,null);r=!0},p(t,n){const r={};if(192&n&&(r.questionText=t[7][t[6]].question),e.$set(r),704&n){let e;for(a=t[7][t[6]].answers,e=0;e<a.length;e+=1){const r=M(t,a,e);o[e]?(o[e].p(r,n),R(o[e],1)):(o[e]=st(r),o[e].c(),R(o[e],1),o[e].m(s,null))}for(S(),e=a.length;e<o.length;e+=1)l(e);L()}},i(t){if(!r){R(e.$$.fragment,t);for(let t=0;t<a.length;t+=1)R(o[t]);r=!0}},o(t){j(e.$$.fragment,t),o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)j(o[t]);r=!1},d(t){I(e,t),t&&c(n),t&&c(s),u(o,t)}}}function tt(e){let n,s,r,a,o,u;return{c(){n=f("div"),s=f("span"),s.textContent="You made it to Porcelain Rank! You stand as a beacon of hope\n\t\t\t\tfor adventuring teams across the land! Unfortunately, the fight never truly ends. Click \n\t\t\t\tReplay to play again!",r=m(),a=f("button"),p(s,"class","loss-message"),p(a,"class","replay"),a.value="Replay",p(n,"class","message")},m(t,c){i(t,n,c),l(n,s),l(n,r),l(n,a),o||(u=g(a,"click",e[8]("replay")),o=!0)},p:t,i:t,o:t,d(t){t&&c(n),o=!1,u()}}}function et(e){let n,s,r,a,o,u,v,w,$,y,b,x=e[1][e[2]].name+"",q=e[0][e[2]]+"";return{c(){n=f("div"),s=f("span"),r=d("Uh oh! You made it to "),a=d(x),o=d(" Rank but then\n\t\t\t\tyou were defeated by "),u=d(q),v=d(". Better luck next time! Click Replay\n\t\t\t\tto play again!"),w=m(),$=f("button"),p(s,"class","loss-message"),p($,"class","replay"),$.value="Replay",p(n,"class","message")},m(t,c){i(t,n,c),l(n,s),l(s,r),l(s,a),l(s,o),l(s,u),l(s,v),l(n,w),l(n,$),y||(b=g($,"click",e[8]("replay")),y=!0)},p(t,e){6&e&&x!==(x=t[1][t[2]].name+"")&&h(a,x),5&e&&q!==(q=t[0][t[2]]+"")&&h(u,q)},i:t,o:t,d(t){t&&c(n),y=!1,b()}}}function nt(e){let n,s,r,a,o,u;return{c(){n=f("div"),s=f("div"),s.textContent="Welcome to the game! Press Start To continue!",r=m(),a=f("button"),p(s,"class","opener-message"),p(a,"class","start"),a.value="Start",p(n,"class","message")},m(t,c){i(t,n,c),l(n,s),l(n,r),l(n,a),o||(u=g(a,"click",e[8]("start")),o=!0)},p:t,i:t,o:t,d(t){t&&c(n),o=!1,u()}}}function st(t){let e,n,s,a,u,d,h,v;return n=new G({props:{class:"ans",answerText:t[10],idx:t[12]}}),{c(){e=f("button"),N(n.$$.fragment),s=m(),p(e,"class",a=o(t[10].split(" ").join("-")+" answer")+" svelte-vwna7i"),p(e,"id",u=t[12])},m(a,o){i(a,e,o),O(n,e,null),l(e,s),d=!0,h||(v=g(e,"click",(function(){r(t[9](t[10],t[12]))&&t[9](t[10],t[12]).apply(this,arguments)})),h=!0)},p(s,r){t=s;const l={};192&r&&(l.answerText=t[10]),n.$set(l),(!d||192&r&&a!==(a=o(t[10].split(" ").join("-")+" answer")+" svelte-vwna7i"))&&p(e,"class",a)},i(t){d||(R(n.$$.fragment,t),d=!0)},o(t){j(n.$$.fragment,t),d=!1},d(t){t&&c(e),I(n),h=!1,v()}}}function rt(t){let e,n,s,r,a,o,d,g,h,v,w,$=t[1],y=[];for(let e=0;e<$.length;e+=1)y[e]=V(F(t,$,e));const b=[nt,et,tt,Z],x=[];function q(t,e){return t[3]?t[5]?1:t[4]?2:3:0}return h=q(t),v=x[h]=b[h](t),{c(){e=f("main"),n=f("div"),s=f("img"),a=m(),o=f("div");for(let t=0;t<y.length;t+=1)y[t].c();d=m(),g=f("div"),v.c(),p(s,"class","title svelte-vwna7i"),s.src!==(r="images/title-1.png")&&p(s,"src","images/title-1.png"),p(s,"alt","title"),p(o,"class","board svelte-vwna7i"),p(n,"class","top svelte-vwna7i"),p(g,"class","bottom svelte-vwna7i"),p(e,"class","svelte-vwna7i")},m(t,r){i(t,e,r),l(e,n),l(n,s),l(n,a),l(n,o);for(let t=0;t<y.length;t+=1)y[t].m(o,null);l(e,d),l(e,g),x[h].m(g,null),w=!0},p(t,[e]){if(6&e){let n;for($=t[1],n=0;n<$.length;n+=1){const s=F(t,$,n);y[n]?y[n].p(s,e):(y[n]=V(s),y[n].c(),y[n].m(o,null))}for(;n<y.length;n+=1)y[n].d(1);y.length=$.length}let n=h;h=q(t),h===n?x[h].p(t,e):(S(),j(x[n],1,1,()=>{x[n]=null}),L(),v=x[h],v||(v=x[h]=b[h](t),v.c()),R(v,1),v.m(g,null))},i(t){w||(R(v),w=!0)},o(t){j(v),w=!1},d(t){t&&c(e),u(y,t),x[h].d()}}}function at(t,e,n){let s=-1,r=!1,a=!1,o=!1,{monsters:l=["slimes","goblins","kobolds","bandits","ogres","slimes","goblins","kobolds","bandits","a dragon"]}=e,{ranks:i=[{name:"Porcelain",class:"tag small"},{name:"Obsidian",class:"tag small"},{name:"Steel",class:"tag small"},{name:"Sapphire",class:"tag small"},{name:"Emerald",class:"tag small"},{name:"Ruby",class:"tag small"},{name:"Bronze",class:"tag small"},{name:"Silver",class:"tag small"},{name:"Gold",class:"tag small"},{name:"Platinum",class:"tag large"}]}=e,c=0;const u=[{question:"What is the standard abbreviation for your Charisma score?",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]},{question:"This is question 2",correctAnswer:"B",answers:["A","B","C","D"]},{question:"This is question 3",correctAnswer:"B",answers:["A","B","C","D"]},{question:"This is question 4",correctAnswer:"B",answers:["A","B","C","D"]},{question:"This is question 5",correctAnswer:"B",answers:["A","B","C","D"]},{question:"This is question 6",correctAnswer:"CHA",answers:["CHA","DEX","WIS","CON"]},{question:"This is question 7",correctAnswer:"B",answers:["A","B","C","D"]},{question:"This is question 8",correctAnswer:"B",answers:["A","B","C","D"]},{question:"This is question 9",correctAnswer:"B",answers:["A","B","C","D"]},{question:"This is question 10",correctAnswer:"B",answers:["A","B","C","D"]}];return t.$$set=t=>{"monsters"in t&&n(0,l=t.monsters),"ranks"in t&&n(1,i=t.ranks)},[l,i,s,r,a,o,c,u,function(t=null){n(2,s=0),console.log(s),"start"?n(3,r=!0):(n(5,o=!1),n(4,a=!1),n(3,r=!1))},function(t,e){if(t===u[c].correctAnswer)document.getElementById(e).classList.add("green"),n(7,u[c].question="Correct!",u),setTimeout(()=>{document.getElementById(e).classList.remove("green"),n(6,c+=1),n(2,s+=1),c>9&&n(4,a=!0)},2e3);else{n(7,u[c].question="Wrong!",u),document.getElementById(e).classList.add("red");let t=document.getElementsByClassName("answer");for(let e=0;e<t.length;e++)t[e].classList.contains(u[c].correctAnswer.split(" ").join("-"))&&t[e].classList.add("green");setTimeout(()=>{n(5,o=!0)},2e3)}}]}return new class extends H{constructor(t){super(),W(this,t,at,rt,a,{monsters:0,ranks:1})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
