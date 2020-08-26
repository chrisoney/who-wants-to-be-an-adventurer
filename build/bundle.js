var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function f(){return i(" ")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let p;function h(t){p=t}const m=[],g=[],$=[],b=[],y=Promise.resolve();let _=!1;function v(t){$.push(t)}let x=!1;const k=new Set;function j(){if(!x){x=!0;do{for(let t=0;t<m.length;t+=1){const n=m[t];h(n),w(n.$$)}for(m.length=0;g.length;)g.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];k.has(n)||(k.add(n),n())}$.length=0}while(m.length);for(;b.length;)b.pop()();_=!1,x=!1,k.clear()}}function w(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}const E=new Set;function S(t,n){-1===t.$$.dirty[0]&&(m.push(t),_||(_=!0,y.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function A(c,l,u,a,i,f,d=[-1]){const m=p;h(c);const g=l.props||{},$=c.$$={fragment:null,ctx:null,props:f,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:e(),dirty:d,skip_bound:!1};let b=!1;if($.ctx=u?u(c,g,(t,n,...e)=>{const o=e.length?e[0]:n;return $.ctx&&i($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),b&&S(c,t)),n}):[],$.update(),b=!0,o($.before_update),$.fragment=!!a&&a($.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);$.fragment&&$.fragment.l(t),t.forEach(s)}else $.fragment&&$.fragment.c();l.intro&&((y=c.$$.fragment)&&y.i&&(E.delete(y),y.i(_))),function(t,e,c){const{fragment:l,on_mount:u,on_destroy:s,after_update:a}=t.$$;l&&l.m(e,c),v(()=>{const e=u.map(n).filter(r);s?s.push(...e):o(e),t.$$.on_mount=[]}),a.forEach(v)}(c,l.target,l.anchor),j()}var y,_;h(m)}function O(t,n,e){const o=t.slice();return o[2]=n[e],o[4]=e,o}function N(t){let n,e,o,r,c,p,h=t[2]+"";return{c(){n=a("div"),e=f(),o=a("div"),r=i(h),c=f(),p=a("div"),d(n,"class","bar svelte-1je26l4"),d(o,"class","tag svelte-1je26l4"),d(p,"class","bar svelte-1je26l4")},m(t,s){u(t,n,s),u(t,e,s),u(t,o,s),l(o,r),u(t,c,s),u(t,p,s)},p(t,n){1&n&&h!==(h=t[2]+"")&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(r,h)},d(t){t&&s(n),t&&s(e),t&&s(o),t&&s(c),t&&s(p)}}}function P(n){let e,o,r=n[0],c=[];for(let t=0;t<r.length;t+=1)c[t]=N(O(n,r,t));return{c(){e=a("main"),o=a("div");for(let t=0;t<c.length;t+=1)c[t].c();d(o,"class","board"),d(e,"class","svelte-1je26l4")},m(t,n){u(t,e,n),l(e,o);for(let t=0;t<c.length;t+=1)c[t].m(o,null)},p(t,[n]){if(1&n){let e;for(r=t[0],e=0;e<r.length;e+=1){const l=O(t,r,e);c[e]?c[e].p(l,n):(c[e]=N(l),c[e].c(),c[e].m(o,null))}for(;e<c.length;e+=1)c[e].d(1);c.length=r.length}},i:t,o:t,d(t){t&&s(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(c,t)}}}function B(t,n,e){let{name:o}=n,{ranks:r=["Platinum","Gold","Silver","Bronze","Ruby","Emerald","Sapphire","Steel","Obsidian","Porcelain"]}=n;return t.$$set=t=>{"name"in t&&e(1,o=t.name),"ranks"in t&&e(0,r=t.ranks)},[r,o]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),A(this,t,B,P,c,{name:1,ranks:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
