(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function v(){}function I(e){return e()}function P(){return Object.create(null)}function A(e){e.forEach(I)}function K(e){return typeof e=="function"}function F(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let k;function X(e,t){return k||(k=document.createElement("a")),k.href=t.replace(/^\//mg, ''),e===k.href}function Y(e){return Object.keys(e).length===0}function c(e,t){e.appendChild(t)}function z(e,t,n){e.insertBefore(t,n||null)}function M(e){e.parentNode&&e.parentNode.removeChild(e)}function a(e){return document.createElement(e)}function O(e){return document.createTextNode(e)}function x(){return O(" ")}function Z(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function f(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ee(e){return Array.from(e.childNodes)}function te(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let T;function w(e){T=e}const $=[],B=[],S=[],H=[],ne=Promise.resolve();let j=!1;function re(){j||(j=!0,ne.then(D))}function q(e){S.push(e)}const N=new Set;let _=0;function D(){if(_!==0)return;const e=T;do{try{for(;_<$.length;){const t=$[_];_++,w(t),oe(t.$$)}}catch(t){throw $.length=0,_=0,t}for(w(null),$.length=0,_=0;B.length;)B.pop()();for(let t=0;t<S.length;t+=1){const n=S[t];N.has(n)||(N.add(n),n())}S.length=0}while($.length);for(;H.length;)H.pop()();j=!1,N.clear(),w(e)}function oe(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(q)}}const C=new Set;let ie;function G(e,t){e&&e.i&&(C.delete(e),e.i(t))}function se(e,t,n,r){if(e&&e.o){if(C.has(e))return;C.add(e),ie.c.push(()=>{C.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function le(e){e&&e.c()}function J(e,t,n,r){const{fragment:o,after_update:i}=e.$$;o&&o.m(t,n),r||q(()=>{const s=e.$$.on_mount.map(I).filter(K);e.$$.on_destroy?e.$$.on_destroy.push(...s):A(s),e.$$.on_mount=[]}),i.forEach(q)}function Q(e,t){const n=e.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ce(e,t){e.$$.dirty[0]===-1&&($.push(e),re(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function R(e,t,n,r,o,i,s,h=[-1]){const m=T;w(e);const l=e.$$={fragment:null,ctx:[],props:i,update:v,not_equal:o,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(m?m.$$.context:[])),callbacks:P(),dirty:h,skip_bound:!1,root:t.target||m.$$.root};s&&s(l.root);let y=!1;if(l.ctx=n?n(e,t.props||{},(u,d,...b)=>{const g=b.length?b[0]:d;return l.ctx&&o(l.ctx[u],l.ctx[u]=g)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](g),y&&ce(e,u)),d}):[],l.update(),y=!0,A(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const u=ee(t.target);l.fragment&&l.fragment.l(u),u.forEach(M)}else l.fragment&&l.fragment.c();t.intro&&G(e.$$.fragment),J(e,t.target,t.anchor,t.customElement),D()}w(m)}class U{$destroy(){Q(this,1),this.$destroy=v}$on(t,n){if(!K(n))return v;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!Y(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ue="/assets/svelte-a39f39b7.svg";function fe(e){let t,n,r,o,i;return{c(){t=a("button"),n=O("count is "),r=O(e[0])},m(s,h){z(s,t,h),c(t,n),c(t,r),o||(i=Z(t,"click",e[1]),o=!0)},p(s,[h]){h&1&&te(r,s[0])},i:v,o:v,d(s){s&&M(t),o=!1,i()}}}function ae(e,t,n){let r=0;return[r,()=>{n(0,r+=1)}]}class de extends U{constructor(t){super(),R(this,t,ae,fe,F,{})}}function he(e){let t,n,r,o,i,s,h,m,l,y,u,d,b,g,V,L,E;return d=new de({}),{c(){t=a("main"),n=a("div"),r=a("a"),r.innerHTML='<img src="/vite.svg" class="logo svelte-11cv5lq" alt="Vite Logo"/>',o=x(),i=a("a"),s=a("img"),m=x(),l=a("h1"),l.textContent="Vite + Svelte",y=x(),u=a("div"),le(d.$$.fragment),b=x(),g=a("p"),g.innerHTML='Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!',V=x(),L=a("p"),L.textContent="Click on the Vite and Svelte logos to learn more",f(r,"href","https://vitejs.dev"),f(r,"target","_blank"),f(r,"rel","noreferrer"),X(s.src,h=ue)||f(s,"src",h),f(s,"class","logo svelte svelte-11cv5lq"),f(s,"alt","Svelte Logo"),f(i,"href","https://svelte.dev"),f(i,"target","_blank"),f(i,"rel","noreferrer"),f(u,"class","card"),f(L,"class","read-the-docs svelte-11cv5lq")},m(p,W){z(p,t,W),c(t,n),c(n,r),c(n,o),c(n,i),c(i,s),c(t,m),c(t,l),c(t,y),c(t,u),J(d,u,null),c(t,b),c(t,g),c(t,V),c(t,L),E=!0},p:v,i(p){E||(G(d.$$.fragment,p),E=!0)},o(p){se(d.$$.fragment,p),E=!1},d(p){p&&M(t),Q(d)}}}class me extends U{constructor(t){super(),R(this,t,null,he,F,{})}}new me({target:document.getElementById("app")});
