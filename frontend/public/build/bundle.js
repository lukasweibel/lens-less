var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode&&t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function a(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let f;function l(t){f=t}function d(t){(function(){if(!f)throw new Error("Function called outside component initialization");return f})().$$.on_mount.push(t)}const $=[],h=[];let p=[];const m=[],g=Promise.resolve();let y=!1;function _(t){p.push(t)}const b=new Set;let x=0;function w(){if(0!==x)return;const t=f;do{try{for(;x<$.length;){const t=$[x];x++,l(t),v(t.$$)}}catch(t){throw $.length=0,x=0,t}for(l(null),$.length=0,x=0;h.length;)h.pop()();for(let t=0;t<p.length;t+=1){const n=p[t];b.has(n)||(b.add(n),n())}p.length=0}while($.length);for(;m.length;)m.pop()();y=!1,b.clear(),l(t)}function v(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_)}}const E=new Set;let k;function A(t,n){t&&t.i&&(E.delete(t),t.i(n))}function O(t,e,c,s){const{fragment:u,after_update:i}=t.$$;u&&u.m(e,c),s||_((()=>{const e=t.$$.on_mount.map(n).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...e):o(e),t.$$.on_mount=[]})),i.forEach(_)}function j(t,n){const e=t.$$;null!==e.fragment&&(!function(t){const n=[],e=[];p.forEach((o=>-1===t.indexOf(o)?n.push(o):e.push(o))),e.forEach((t=>t())),p=n}(e.after_update),o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function N(t,n){-1===t.$$.dirty[0]&&($.push(t),y||(y=!0,g.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function L(n,r,c,s,i,a,d,$=[-1]){const h=f;l(n);const p=n.$$={fragment:null,ctx:[],props:a,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(h?h.$$.context:[])),callbacks:e(),dirty:$,skip_bound:!1,root:r.target||h.$$.root};d&&d(p.root);let m=!1;if(p.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&i(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),m&&N(n,t)),e})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!s&&s(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();r.intro&&A(n.$$.fragment),O(n,r.target,r.anchor,r.customElement),w()}l(h)}class M{$destroy(){j(this,1),this.$destroy=t}$on(n,e){if(!r(e))return t;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function S(n){let e;return{c(){e=i("main"),e.innerHTML='<h1 class="svelte-x45sh3">Lens less</h1>',a(e,"class","svelte-x45sh3")},m(t,n){s(t,e,n)},p:t,i:t,o:t,d(t){t&&u(e)}}}class q extends M{constructor(t){super(),L(this,t,null,S,c,{})}}function z(n){let e,o,r;return o=new q({}),{c(){var t;e=i("main"),(t=o.$$.fragment)&&t.c(),a(e,"class","svelte-360gnp")},m(t,n){s(t,e,n),O(o,e,null),r=!0},p:t,i(t){r||(A(o.$$.fragment,t),r=!0)},o(t){!function(t,n,e,o){if(t&&t.o){if(E.has(t))return;E.add(t),k.c.push((()=>{E.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}else o&&o()}(o.$$.fragment,t),r=!1},d(t){t&&u(e),j(o)}}}function B(t){return d((async()=>{})),[]}return new class extends M{constructor(t){super(),L(this,t,B,z,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map