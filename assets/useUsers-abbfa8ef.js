import{i as T,t as z,w as W,a as $,b as H,n as B,c as K,e as q,f as G,p as Q,g as X}from"./useProjects-0e78709e.js";import{I as Y,r as N,z as U,e as Z,L as k,n as P,u as L}from"./index-3d3f0f9c.js";import{s as C}from"./utils-b2fc192b.js";function ee(e){var t;const n=z(e);return(t=n==null?void 0:n.$el)!=null?t:n}const x=T?window:void 0;function F(...e){let t,n,s,u;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,s,u]=e,t=x):[t,n,s,u]=e,!t)return B;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const a=[],o=()=>{a.forEach(f=>f()),a.length=0},d=(f,c,v,l)=>(f.addEventListener(c,v,l),()=>f.removeEventListener(c,v,l)),i=U(()=>[ee(t),z(u)],([f,c])=>{if(o(),!f)return;const v=K(c)?{...c}:c;a.push(...n.flatMap(l=>s.map(b=>d(f,l,b,v))))},{immediate:!0,flush:"post"}),m=()=>{i(),o()};return q(m),m}function te(e){return JSON.parse(JSON.stringify(e))}const D=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},J="__vueuse_ssr_handlers__",ne=re();function re(){return J in D||(D[J]=D[J]||{}),D[J]}function ae(e,t){return ne[e]||t}function se(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const ie={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},I="vueuse-storage";function oe(e,t,n,s={}){var u;const{flush:a="pre",deep:o=!0,listenToStorageChanges:d=!0,writeDefaults:i=!0,mergeDefaults:m=!1,shallow:f,window:c=x,eventFilter:v,onError:l=r=>{console.error(r)},initOnMounted:b}=s,w=(f?k:N)(typeof t=="function"?t():t);if(!n)try{n=ae("getDefaultStorage",()=>{var r;return(r=x)==null?void 0:r.localStorage})()}catch(r){l(r)}if(!n)return w;const y=z(t),V=se(y),S=(u=s.serializer)!=null?u:ie[V],{pause:p,resume:O}=W(w,()=>A(w.value),{flush:a,deep:o,eventFilter:v});return c&&d&&$(()=>{F(c,"storage",j),F(c,I,R),b&&j()}),b||j(),w;function A(r){try{if(r==null)n.removeItem(e);else{const g=S.write(r),_=n.getItem(e);_!==g&&(n.setItem(e,g),c&&c.dispatchEvent(new CustomEvent(I,{detail:{key:e,oldValue:_,newValue:g,storageArea:n}})))}}catch(g){l(g)}}function E(r){const g=r?r.newValue:n.getItem(e);if(g==null)return i&&y!=null&&n.setItem(e,S.write(y)),y;if(!r&&m){const _=S.read(g);return typeof m=="function"?m(_,y):V==="object"&&!Array.isArray(_)?{...y,..._}:_}else return typeof g!="string"?g:S.read(g)}function R(r){j(r.detail)}function j(r){if(!(r&&r.storageArea!==n)){if(r&&r.key==null){w.value=y;return}if(!(r&&r.key!==e)){p();try{(r==null?void 0:r.newValue)!==S.write(w.value)&&(w.value=E(r))}catch(g){l(g)}finally{r?P(O):O()}}}}}function Se(e,t,n={}){const{window:s=x}=n;return oe(e,t,s==null?void 0:s.localStorage,n)}function he(e,t,n,s={}){var u,a,o;const{clone:d=!1,passive:i=!1,eventName:m,deep:f=!1,defaultValue:c,shouldEmit:v}=s,l=Y(),b=n||(l==null?void 0:l.emit)||((u=l==null?void 0:l.$emit)==null?void 0:u.bind(l))||((o=(a=l==null?void 0:l.proxy)==null?void 0:a.$emit)==null?void 0:o.bind(l==null?void 0:l.proxy));let w=m;t||(t="modelValue"),w=w||`update:${t.toString()}`;const y=p=>d?typeof d=="function"?d(p):te(p):p,V=()=>H(e[t])?y(e[t]):c,S=p=>{v?v(p)&&b(w,p):b(w,p)};if(i){const p=V(),O=N(p);let A=!1;return U(()=>e[t],E=>{A||(A=!0,O.value=y(E),P(()=>A=!1))}),U(O,E=>{!A&&(E!==e[t]||f)&&S(E)},{deep:f}),O}else return Z({get(){return V()},set(p){S(p)}})}const h=G,le=e=>Q.filter(t=>t.team.includes(Number(e))).map(t=>({...t,project_owner:h.find(n=>n.id===t.project_owner),team:t.team.map(n=>h.find(s=>s.id===n)),status:t.status})),M=(e,t)=>t==="projects"?e.projects.map(n=>n.project_name).join(", "):e[t],ue=async e=>{await C(1e3);const{isActive:t,search:n,sortBy:s,sortingOrder:u}=e;let a=h;a=a.filter(i=>i.active===t),n&&(a=a.filter(i=>i.fullname.toLowerCase().includes(n.toLowerCase()))),a=a.map(i=>({...i,projects:le(i.id)})),s&&u&&(a=a.sort((i,m)=>{const f=M(i,s),c=M(m,s);return f>c?u==="asc"?1:-1:f<c?u==="asc"?-1:1:0}));const{page:o=1,perPage:d=10}=e||{};return{data:a.slice((o-1)*d,o*d),pagination:{page:o,perPage:d,total:a.length}}},ce=async e=>{await C(1e3),h.unshift(e)},fe=async e=>{await C(1e3);const t=h.findIndex(n=>n.id===e.id);h[t]=e},de=async e=>{await C(1e3),h.splice(h.findIndex(t=>t.id===e.id),1)},pe=()=>N({page:1,perPage:10,total:0}),ge=()=>N({sortBy:"fullname",sortingOrder:null}),me=()=>N({isActive:!0,search:""}),be=e=>{const t=N(!1),n=N([]),{filters:s=me(),sorting:u=ge(),pagination:a=pe()}=e||{},o=async()=>{t.value=!0;const{data:i,pagination:m}=await ue({...L(s),...L(u),...L(a)});n.value=i,d(()=>{a.value=m}),t.value=!1},{ignoreUpdates:d}=X([a,u],o,{deep:!0});return U(s,()=>{a.value.page=1,o()},{deep:!0}),o(),{isLoading:t,filters:s,sorting:u,pagination:a,users:n,fetch:o,async add(i){t.value=!0,await ce(i),await o(),t.value=!1},async update(i){t.value=!0,await fe(i),await o(),t.value=!1},async remove(i){t.value=!0,await de(i),await o(),t.value=!1}}};export{be as a,Se as b,he as u};
//# sourceMappingURL=useUsers-abbfa8ef.js.map
