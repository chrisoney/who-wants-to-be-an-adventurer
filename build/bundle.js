var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function a(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let m;function g(t){m=t}const $=[],x=[],w=[],v=[],b=Promise.resolve();let q=!1;function y(t){w.push(t)}let k=!1;const _=new Set;function T(){if(!k){k=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];g(e),A(e.$$)}for($.length=0;x.length;)x.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];_.has(e)||(_.add(e),e())}w.length=0}while($.length);for(;v.length;)v.pop()();q=!1,k=!1,_.clear()}}function A(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(y)}}const E=new Set;let B;function C(t,e){t&&t.i&&(E.delete(t),t.i(e))}function H(t,e,n,r){if(t&&t.o){if(E.has(t))return;E.add(t),B.c.push(()=>{E.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function O(t){t&&t.c()}function S(t,n,o){const{fragment:c,on_mount:l,on_destroy:i,after_update:a}=t.$$;c&&c.m(n,o),y(()=>{const n=l.map(e).filter(s);i?i.push(...n):r(n),t.$$.on_mount=[]}),a.forEach(y)}function K(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function N(t,e){-1===t.$$.dirty[0]&&($.push(t),q||(q=!0,b.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(e,s,o,c,l,a,u=[-1]){const f=m;g(e);const d=s.props||{},h=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let p=!1;if(h.ctx=o?o(e,d,(t,n,...r)=>{const s=r.length?r[0]:n;return h.ctx&&l(h.ctx[t],h.ctx[t]=s)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](s),p&&N(e,t)),n}):[],h.update(),p=!0,r(h.before_update),h.fragment=!!c&&c(h.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);h.fragment&&h.fragment.l(t),t.forEach(i)}else h.fragment&&h.fragment.c();s.intro&&C(e.$$.fragment),S(e,s.target,s.anchor),T()}g(f)}class D{$destroy(){K(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function P(e){let n,r;return{c(){n=u("div"),r=f(e[0]),h(n,"class","question svelte-ts1vzn")},m(t,e){l(t,n,e),c(n,r)},p(t,[e]){1&e&&p(r,t[0])},i:t,o:t,d(t){t&&i(n)}}}function z(t,e,n){let{questionText:r}=e;return t.$$set=t=>{"questionText"in t&&n(0,r=t.questionText)},[r]}class L extends D{constructor(t){super(),j(this,t,z,P,o,{questionText:0})}}function G(e){let n,r,o,a;return{c(){n=u("button"),r=f(e[0]),h(n,"class","answer svelte-1wbl83e")},m(t,i){var u,f,d,h;l(t,n,i),c(n,r),o||(f="click",d=function(){s(e[1](e[0]))&&e[1](e[0]).apply(this,arguments)},(u=n).addEventListener(f,d,h),a=()=>u.removeEventListener(f,d,h),o=!0)},p(t,[n]){e=t,1&n&&p(r,e[0])},i:t,o:t,d(t){t&&i(n),o=!1,a()}}}function M(t,e,n){let{answerText:r}=e,{checkAnswerHandler:s}=e;return t.$$set=t=>{"answerText"in t&&n(0,r=t.answerText),"checkAnswerHandler"in t&&n(1,s=t.checkAnswerHandler)},[r,s]}class R extends D{constructor(t){super(),j(this,t,M,G,o,{answerText:0,checkAnswerHandler:1})}}function W(t,e,n){const r=t.slice();return r[8]=e[n],r[10]=n,r}function F(t,e,n){const r=t.slice();return r[11]=e[n],r[13]=n,r}function I(t){let e,n,r,s=t[11]+"";return{c(){e=u("div"),n=u("div"),r=f(s),h(n,"class","tag svelte-13xfqo3"),h(e,"class","tag-contain svelte-13xfqo3")},m(t,s){l(t,e,s),c(e,n),c(n,r)},p(t,e){1&e&&s!==(s=t[11]+"")&&p(r,s)},d(t){t&&i(e)}}}function J(t){let e,n,r,s=t[11]+"";return{c(){e=u("div"),n=u("div"),r=f(s),h(n,"class","tag curr svelte-13xfqo3"),h(e,"class","tag-contain svelte-13xfqo3")},m(t,s){l(t,e,s),c(e,n),c(n,r)},p(t,e){1&e&&s!==(s=t[11]+"")&&p(r,s)},d(t){t&&i(e)}}}function Q(t){let e,n,r,s,o,a;function f(t,e){return t[13]===t[2]?J:I}let p=f(t),m=p(t);return{c(){e=u("div"),n=u("div"),r=d(),m.c(),s=d(),o=u("div"),a=d(),h(n,"class","bar svelte-13xfqo3"),h(o,"class","bar svelte-13xfqo3"),h(e,"class","tag-area svelte-13xfqo3")},m(t,i){l(t,e,i),c(e,n),c(e,r),m.m(e,null),c(e,s),c(e,o),c(e,a)},p(t,n){p===(p=f(t))&&m?m.p(t,n):(m.d(1),m=p(t),m&&(m.c(),m.m(e,s)))},d(t){t&&i(e),m.d()}}}function U(t){let e,n,r,s,o,a,m,g=t[1][t[10]]+"";return o=new R({props:{answerText:t[8],checkAnswerHandler:t[5]}}),{c(){e=u("div"),n=u("span"),r=f(g),s=d(),O(o.$$.fragment),a=d(),h(n,"class","answer-letter"),h(e,"class","answer-container")},m(t,i){l(t,e,i),c(e,n),c(n,r),c(e,s),S(o,e,null),c(e,a),m=!0},p(t,e){(!m||2&e)&&g!==(g=t[1][t[10]]+"")&&p(r,g);const n={};24&e&&(n.answerText=t[8]),o.$set(n)},i(t){m||(C(o.$$.fragment,t),m=!0)},o(t){H(o.$$.fragment,t),m=!1},d(t){t&&i(e),K(o)}}}function V(t){let e,n,s,o,f,p,m,g=t[0],$=[];for(let e=0;e<g.length;e+=1)$[e]=Q(F(t,g,e));o=new L({props:{questionText:t[4][t[3]].question}});let x=t[4][t[3]].answers,w=[];for(let e=0;e<x.length;e+=1)w[e]=U(W(t,x,e));const v=t=>H(w[t],1,1,()=>{w[t]=null});return{c(){e=u("main"),n=u("div");for(let t=0;t<$.length;t+=1)$[t].c();s=d(),O(o.$$.fragment),f=d(),p=u("div");for(let t=0;t<w.length;t+=1)w[t].c();h(n,"class","board svelte-13xfqo3"),h(p,"class","answers svelte-13xfqo3"),h(e,"class","svelte-13xfqo3")},m(t,r){l(t,e,r),c(e,n);for(let t=0;t<$.length;t+=1)$[t].m(n,null);c(e,s),S(o,e,null),c(e,f),c(e,p);for(let t=0;t<w.length;t+=1)w[t].m(p,null);m=!0},p(t,[e]){if(5&e){let r;for(g=t[0],r=0;r<g.length;r+=1){const s=F(t,g,r);$[r]?$[r].p(s,e):($[r]=Q(s),$[r].c(),$[r].m(n,null))}for(;r<$.length;r+=1)$[r].d(1);$.length=g.length}const s={};if(24&e&&(s.questionText=t[4][t[3]].question),o.$set(s),58&e){let n;for(x=t[4][t[3]].answers,n=0;n<x.length;n+=1){const r=W(t,x,n);w[n]?(w[n].p(r,e),C(w[n],1)):(w[n]=U(r),w[n].c(),C(w[n],1),w[n].m(p,null))}for(B={r:0,c:[],p:B},n=x.length;n<w.length;n+=1)v(n);B.r||r(B.c),B=B.p}},i(t){if(!m){C(o.$$.fragment,t);for(let t=0;t<x.length;t+=1)C(w[t]);m=!0}},o(t){H(o.$$.fragment,t),w=w.filter(Boolean);for(let t=0;t<w.length;t+=1)H(w[t]);m=!1},d(t){t&&i(e),a($,t),K(o),a(w,t)}}}function X(t,e,n){let r=0,{name:s}=e,{ranks:o=["Porcelain","Obsidian","Steel","Sapphire","Emerald","Ruby","Bronze","Silver","Gold","Platinum"]}=e,{answerKeys:c=["A","B","C","D"]}=e,l=0;document.getElementsByClassName("tag");const i=[{question:"This is the question",correctAnswer:0,answers:["A","B","C","D"]},{question:"This is question 2",correctAnswer:1,answers:["A","B","C","D"]}];return t.$$set=t=>{"name"in t&&n(6,s=t.name),"ranks"in t&&n(0,o=t.ranks),"answerKeys"in t&&n(1,c=t.answerKeys)},[o,c,r,l,i,function(t){i[l].answers.indexOf(t)===i[l].correctAnswer?(n(2,r+=1),n(4,i[l].question="Correct!",i),setTimeout(()=>{n(3,l+=1)},2e3)):n(4,i[l].question="Wrong!",i)},s]}return new class extends D{constructor(t){super(),j(this,t,X,V,o,{name:6,ranks:0,answerKeys:1})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
