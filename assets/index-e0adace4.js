import{C,e as q,D as A,f as K,g as R,h as T}from"./Dashboard-885c1ca0.js";import{d as L,L as O,a9 as m,aa as U,r as k,o as z,ab as $,z as E,ac as D,n as F,ad as w}from"./index-3d3f0f9c.js";const B={data:{type:Object,required:!0},options:{type:Object,default:()=>({})},plugins:{type:Array,default:()=>[]},datasetIdKey:{type:String,default:"label"},updateMode:{type:String,default:void 0}},G={ariaLabel:{type:String},ariaDescribedby:{type:String}},H={type:{type:String,required:!0},...B,...G},J=U[0]==="2"?(t,e)=>Object.assign(t,{attrs:e}):(t,e)=>Object.assign(t,e);function u(t){return w(t)?D(t):t}function N(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t;return w(e)?new Proxy(t,{}):t}function Q(t,e){const s=t.options;s&&e&&Object.assign(s,e)}function S(t,e){t.labels=e}function I(t,e,s){const o=[];t.datasets=e.map(n=>{const a=t.datasets.find(c=>c[s]===n[s]);return!a||!n.data||o.includes(a)?{...n}:(o.push(a),Object.assign(a,n),a)})}function V(t,e){const s={labels:[],datasets:[]};return S(s,t.labels),I(s,t.datasets,e),s}const W=L({props:H,setup(t,e){let{expose:s,slots:o}=e;const n=k(null),a=O(null);s({chart:a});const c=()=>{if(!n.value)return;const{type:r,data:b,options:y,plugins:p,datasetIdKey:v}=t,g=V(b,v),i=N(g,b);a.value=new C(n.value,{type:r,data:i,options:{...y},plugins:p})},d=()=>{const r=D(a.value);r&&(r.destroy(),a.value=null)},M=r=>{r.update(t.updateMode)};return z(c),$(d),E([()=>t.options,()=>t.data],(r,b)=>{let[y,p]=r,[v,g]=b;const i=D(a.value);if(!i)return;let h=!1;if(y){const l=u(y),x=u(v);l&&l!==x&&(Q(i,l),h=!0)}if(p){const l=u(p.labels),x=u(g.labels),P=u(p.datasets),j=u(g.datasets);l!==x&&(S(i.config.data,l),h=!0),P&&P!==j&&(I(i.config.data,P,t.datasetIdKey),h=!0)}h&&F(()=>{M(i)})},{deep:!0}),()=>m("canvas",{role:"img",ariaLabel:t.ariaLabel,ariaDescribedby:t.ariaDescribedby,ref:n},[m("p",{},[o.default?o.default():""])])}});function f(t,e){return C.register(e),L({props:B,setup(s,o){let{expose:n}=o;const a=O(null),c=d=>{a.value=d==null?void 0:d.chart};return n({chart:a}),()=>m(W,J({ref:c},{type:t,...s}))}})}const Z=f("bar",q),_=f("doughnut",A),tt=f("line",K),et=f("pie",R),at=f("bubble",T);export{at as B,_ as D,tt as L,et as P,Z as a};
//# sourceMappingURL=index-e0adace4.js.map
