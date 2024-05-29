var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i,s;function u(t,e){return i||(i=document.createElement("a")),i.href=e,t===i.href}function a(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function h(){return p(" ")}function $(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t){return""===t?null:+t}function g(t,e){t.value=null==e?"":e}function b(t){s=t}const y=[],x=[];let _=[];const k=[],w=Promise.resolve();let E=!1;function I(t){_.push(t)}const F=new Set;let N=0;function O(){if(0!==N)return;const t=s;do{try{for(;N<y.length;){const t=y[N];N++,b(t),P(t.$$)}}catch(t){throw y.length=0,N=0,t}for(b(null),y.length=0,N=0;x.length;)x.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];F.has(e)||(F.add(e),e())}_.length=0}while(y.length);for(;k.length;)k.pop()();E=!1,F.clear(),b(t)}function P(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const j=new Set;let C;function L(t,e){t&&t.i&&(j.delete(t),t.i(e))}function T(t,e,n,r){if(t&&t.o){if(j.has(t))return;j.add(t),C.c.push((()=>{j.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}function A(t){t&&t.c()}function S(t,n,c,i){const{fragment:s,after_update:u}=t.$$;s&&s.m(n,c),i||I((()=>{const n=t.$$.on_mount.map(e).filter(o);t.$$.on_destroy?t.$$.on_destroy.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(I)}function H(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];_.forEach((r=>-1===t.indexOf(r)?e.push(r):n.push(r))),n.forEach((t=>t())),_=e}(n.after_update),r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function q(t,e){-1===t.$$.dirty[0]&&(y.push(t),E||(E=!0,w.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(e,o,c,i,u,a,l,d=[-1]){const p=s;b(e);const h=e.$$={fragment:null,ctx:[],props:a,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(p?p.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:o.target||p.$$.root};l&&l(h.root);let $=!1;if(h.ctx=c?c(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&u(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),$&&q(e,t)),n})):[],h.update(),$=!0,r(h.before_update),h.fragment=!!i&&i(h.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);h.fragment&&h.fragment.l(t),t.forEach(f)}else h.fragment&&h.fragment.c();o.intro&&L(e.$$.fragment),S(e,o.target,o.anchor,o.customElement),O()}b(p)}class D{$destroy(){H(this,1),this.$destroy=t}$on(e,n){if(!o(n))return t;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const t=r.indexOf(n);-1!==t&&r.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function M(e){let n;return{c(){n=d("h1"),n.textContent="History"},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class R extends D{constructor(t){super(),B(this,t,null,M,c,{})}}function U(e){let n,o,c,i,s,u,v,b,y;return{c(){n=d("h1"),n.textContent="Feedback Form",o=h(),c=d("form"),i=d("input"),s=h(),u=d("button"),v=p("Feedback senden"),m(i,"type","text"),i.required=!0,u.disabled=e[1]},m(t,r){l(t,n,r),l(t,o,r),l(t,c,r),a(c,i),g(i,e[0]),a(c,s),a(c,u),a(u,v),b||(y=[$(i,"input",e[5]),$(u,"click",e[2])],b=!0)},p(t,[e]){1&e&&i.value!==t[0]&&g(i,t[0]),2&e&&(u.disabled=t[1])},i:t,o:t,d(t){t&&f(n),t&&f(o),t&&f(c),b=!1,r(y)}}}function z(t,e,n){let{pictureId:r}=e,{loadPicture:o}=e,c="",i=!1;return t.$$set=t=>{"pictureId"in t&&n(3,r=t.pictureId),"loadPicture"in t&&n(4,o=t.loadPicture)},t.$$.update=()=>{t.$$.dirty},[c,i,async function(t){if(t.preventDefault(),!i){n(1,i=!0);try{const e=await fetch("/feedback/"+r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({feedback:c})});if(!e.ok)throw alert("Es ist ein Fehler aufgetreten"),new Error("Error");const i=await e.json();n(3,r=i.pictureId),o(t)}catch(t){console.error("Fetch error:",t)}finally{n(1,i=!1),n(0,c="")}}},r,o,function(){c=this.value,n(0,c)}]}class J extends D{constructor(t){super(),B(this,t,z,U,c,{pictureId:3,loadPicture:4})}}function K(t){let e,n,r,o,c,i,s;function p(e){t[4](e)}let $={loadPicture:t[2]};return void 0!==t[1]&&($.pictureId=t[1]),e=new J({props:$}),x.push((()=>function(t,e,n){const r=t.$$.props[e];void 0!==r&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}(e,"pictureId",p))),{c(){A(e.$$.fragment),r=h(),o=d("div"),c=d("img"),u(c.src,i=t[0])||m(c,"src",i),m(c,"alt","Fetched Image"),m(c,"class","fetched-image svelte-1vi7ps2"),m(o,"class","image-container svelte-1vi7ps2")},m(t,n){S(e,t,n),l(t,r,n),l(t,o,n),a(o,c),s=!0},p(t,r){const o={};var a;!n&&2&r&&(n=!0,o.pictureId=t[1],a=()=>n=!1,k.push(a)),e.$set(o),(!s||1&r&&!u(c.src,i=t[0]))&&m(c,"src",i)},i(t){s||(L(e.$$.fragment,t),s=!0)},o(t){T(e.$$.fragment,t),s=!1},d(t){H(e,t),t&&f(r),t&&f(o)}}}function G(t){let e,n,o,c,i,s,u,p,b,y,x,_,k,w,E=t[0]&&K(t);return x=new R({}),{c(){e=d("main"),n=d("nav"),n.innerHTML='<div class="navbar svelte-1vi7ps2"><h1 class="svelte-1vi7ps2">Lens less</h1> \n      <a href="#history" class="svelte-1vi7ps2">History</a></div>',o=h(),c=d("form"),i=d("input"),s=h(),u=d("button"),u.textContent="Foto anzeigen",p=h(),E&&E.c(),b=h(),y=d("div"),A(x.$$.fragment),m(n,"class","svelte-1vi7ps2"),m(i,"type","number"),m(i,"class","svelte-1vi7ps2"),m(u,"class","svelte-1vi7ps2"),m(c,"class","svelte-1vi7ps2"),m(y,"id","history"),m(y,"class","svelte-1vi7ps2"),m(e,"class","svelte-1vi7ps2")},m(r,f){l(r,e,f),a(e,n),a(e,o),a(e,c),a(c,i),g(i,t[1]),a(c,s),a(c,u),a(e,p),E&&E.m(e,null),a(e,b),a(e,y),S(x,y,null),_=!0,k||(w=[$(i,"input",t[3]),$(u,"click",t[2])],k=!0)},p(t,[n]){2&n&&v(i.value)!==t[1]&&g(i,t[1]),t[0]?E?(E.p(t,n),1&n&&L(E,1)):(E=K(t),E.c(),L(E,1),E.m(e,b)):E&&(C={r:0,c:[],p:C},T(E,1,1,(()=>{E=null})),C.r||r(C.c),C=C.p)},i(t){_||(L(E),L(x.$$.fragment,t),_=!0)},o(t){T(E),T(x.$$.fragment,t),_=!1},d(t){t&&f(e),E&&E.d(),H(x),k=!1,r(w)}}}function Q(t,e,n){let r,o="";return[o,r,function(t){t.preventDefault(),fetch("/picture/"+r).then((t=>{if(!t.ok)throw alert("Kein Bild verfügbar mit dieser Nummer!"),new Error("No picture found: "+t.statusText);return console.log(t),t.blob()})).then((t=>{n(0,o=URL.createObjectURL(t))})).catch((t=>{console.error("Fetch error:",t)}))},function(){r=v(this.value),n(1,r)},function(t){r=t,n(1,r)}]}return new class extends D{constructor(t){super(),B(this,t,Q,G,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
