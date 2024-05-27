var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let u,s;function i(t,e){return u||(u=document.createElement("a")),u.href=e,t===u.href}function l(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function h(){return t=" ",document.createTextNode(t);var t}function p(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return""===t?null:+t}function g(t,e){t.value=null==e?"":e}function y(t,e,n,r){null==n?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function b(t){s=t}function x(){if(!s)throw new Error("Function called outside component initialization");return s}const v=[],_=[];let w=[];const k=[],E=Promise.resolve();let j=!1;function C(t){w.push(t)}const O=new Set;let A=0;function L(){if(0!==A)return;const t=s;do{try{for(;A<v.length;){const t=v[A];A++,b(t),N(t.$$)}}catch(t){throw v.length=0,A=0,t}for(b(null),v.length=0,A=0;_.length;)_.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];O.has(e)||(O.add(e),e())}w.length=0}while(v.length);for(;k.length;)k.pop()();j=!1,O.clear(),b(t)}function N(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const F=new Set;let T;function B(t,e){t&&t.i&&(F.delete(t),t.i(e))}function P(t,e,n,r){if(t&&t.o){if(F.has(t))return;F.add(t),T.c.push((()=>{F.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}function S(t){t&&t.c()}function q(t,n,c,u){const{fragment:s,after_update:i}=t.$$;s&&s.m(n,c),u||C((()=>{const n=t.$$.on_mount.map(e).filter(o);t.$$.on_destroy?t.$$.on_destroy.push(...n):r(n),t.$$.on_mount=[]})),i.forEach(C)}function z(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];w.forEach((r=>-1===t.indexOf(r)?e.push(r):n.push(r))),n.forEach((t=>t())),w=e}(n.after_update),r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function H(t,e){-1===t.$$.dirty[0]&&(v.push(t),j||(j=!0,E.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(e,o,c,u,i,l,a,d=[-1]){const h=s;b(e);const p=e.$$={fragment:null,ctx:[],props:l,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(h?h.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:o.target||h.$$.root};a&&a(p.root);let m=!1;if(p.ctx=c?c(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),m&&H(e,t)),n})):[],p.update(),m=!0,r(p.before_update),p.fragment=!!u&&u(p.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();o.intro&&B(e.$$.fragment),q(e,o.target,o.anchor,o.customElement),L()}b(h)}class M{$destroy(){z(this,1),this.$destroy=t}$on(e,n){if(!o(n))return t;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const t=r.indexOf(n);-1!==t&&r.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function R(e){let n;return{c(){n=d("main"),n.innerHTML='<h1 class="svelte-x45sh3">Lens less</h1>',m(n,"class","svelte-x45sh3")},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class U extends M{constructor(t){super(),I(this,t,null,R,c,{})}}function D(e){let n,r,o,c,u;return{c(){n=d("h1"),n.textContent="Camera",r=h(),o=d("video"),c=h(),u=d("p"),u.textContent="Average Brightness: 0.00",o.autoplay=!0,o.playsInline=!0,y(o,"display","none"),m(u,"id","brightness")},m(t,s){a(t,n,s),a(t,r,s),a(t,o,s),e[1](o),a(t,c,s),a(t,u,s)},p:t,i:t,o:t,d(t){t&&f(n),t&&f(r),t&&f(o),e[1](null),t&&f(c),t&&f(u)}}}function K(t,e,n){let r,o;var c;return c=()=>{o=document.createElement("canvas"),o.getContext("2d"),o.width=640,o.height=480,document.body.appendChild(o),document.querySelector("#brightness")},x().$$.on_mount.push(c),function(t){x().$$.on_destroy.push(t)}((()=>{r&&r.srcObject&&(r.srcObject.getTracks().forEach((t=>t.stop())),n(0,r.srcObject=null,r)),o&&document.body.removeChild(o),cancelAnimationFrame(undefined)})),[r,function(t){_[t?"unshift":"push"]((()=>{r=t,n(0,r)}))}]}class G extends M{constructor(t){super(),I(this,t,K,D,c,{})}}function J(e){let n;return{c(){n=d("h1"),n.textContent="History"},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class Q extends M{constructor(t){super(),I(this,t,null,J,c,{})}}function V(t){let e,n;return{c(){e=d("img"),i(e.src,n=t[0])||m(e,"src",n),m(e,"alt","Fetched Image"),y(e,"height","200px"),y(e,"width","300px"),m(e,"class","svelte-wja69k")},m(t,n){a(t,e,n)},p(t,r){1&r&&!i(e.src,n=t[0])&&m(e,"src",n)},d(t){t&&f(e)}}}function W(t){let e,n,o,c,u,s,i,y,b,x,v,_,w,k,E;n=new U({}),c=new G({});let j=t[0]&&V(t);return _=new Q({}),{c(){e=d("main"),S(n.$$.fragment),o=h(),S(c.$$.fragment),u=h(),s=d("form"),i=d("input"),y=h(),b=d("button"),b.textContent="Foto anzeigen",x=h(),j&&j.c(),v=h(),S(_.$$.fragment),m(i,"type","number"),m(i,"class","svelte-wja69k"),m(b,"class","svelte-wja69k"),m(s,"class","svelte-wja69k"),m(e,"class","svelte-wja69k")},m(r,f){a(r,e,f),q(n,e,null),l(e,o),q(c,e,null),l(e,u),l(e,s),l(s,i),g(i,t[1]),l(s,y),l(s,b),l(e,x),j&&j.m(e,null),l(e,v),q(_,e,null),w=!0,k||(E=[p(i,"input",t[3]),p(b,"click",t[2])],k=!0)},p(t,[n]){2&n&&$(i.value)!==t[1]&&g(i,t[1]),t[0]?j?j.p(t,n):(j=V(t),j.c(),j.m(e,v)):j&&(j.d(1),j=null)},i(t){w||(B(n.$$.fragment,t),B(c.$$.fragment,t),B(_.$$.fragment,t),w=!0)},o(t){P(n.$$.fragment,t),P(c.$$.fragment,t),P(_.$$.fragment,t),w=!1},d(t){t&&f(e),z(n),z(c),j&&j.d(),z(_),k=!1,r(E)}}}function X(t,e,n){let r,o="";return[o,r,function(t){t.preventDefault(),fetch("/picture/"+r).then((t=>{if(!t.ok)throw alert("Kein Bild verfügbar mit dieser Nummer!"),new Error("No picture found: "+t.statusText);return console.log(t),t.blob()})).then((t=>{n(0,o=URL.createObjectURL(t))})).catch((t=>{console.error("Fetch error:",t)}))},function(){r=$(this.value),n(1,r)}]}return new class extends M{constructor(t){super(),I(this,t,X,W,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
