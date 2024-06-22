import{d as S,f as k,a as P,g as q,r as l,z as f,u as w,o as C,n as L,W as A,I as D,X as F,Y as O}from"./index-3d3f0f9c.js";import{s as h}from"./utils-b2fc192b.js";const N=e=>e,G=S({__name:"UserAvatar",props:{user:{type:Object,required:!0},size:{type:String,default:"medium"}},setup(e){const a=t=>{const r=["primary","#FFD43A","#ADFF00","#262824","danger"],n=t.charCodeAt(0)%r.length;return r[n]},i=t=>t.startsWith("http")||t.startsWith("blob:");return(t,r)=>{const n=k("VaAvatar");return P(),q(n,{size:e.size,src:i(e.user.avatar)?e.user.avatar:"","fallback-text":e.user.avatar||e.user.fullname[0],color:a(e.user.fullname)},null,8,["size","src","fallback-text","color"])}}}),c=[{id:0,project_name:"心臟內科",project_owner:1,team:[11,12],status:"in progress",creation_date:"20 Nov 2023"},{id:1,project_name:"胸腔內科",project_owner:2,team:[13,14],status:"completed",creation_date:"16 Oct 2023"},{id:2,project_name:"腎臟內科",project_owner:3,team:[15,16,17],status:"completed",creation_date:"1 Oct 2023"},{id:3,project_name:"神經外科",project_owner:4,team:[18,19,20],status:"completed",creation_date:"19 Sept 2023"}],g=[{id:1,fullname:"何東錦",email:"magicpan@example.gg",username:"magicpan",role:"user",avatar:"",active:!0,notes:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."},{id:2,fullname:"高劍虹",email:"niceadmin@mail.com",username:"admin",role:"admin",avatar:"😍",active:!0,notes:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."},{id:3,fullname:"蔡旻叡",email:"ebrown@gmail.com",username:"ebrown",role:"user",avatar:"https://randomuser.me/api/portraits/men/1.jpg",active:!0,notes:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."},{id:4,fullname:"趙紹清",email:"mrm@gmail.com",username:"mrm",role:"owner",avatar:"",active:!0,notes:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."},{id:5,fullname:"Kevin Smith",email:"kevin@gmail.com",username:"kevin13",role:"user",avatar:"https://randomuser.me/api/portraits/men/2.jpg",active:!0,notes:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."},{id:6,fullname:"Martin Hoff",email:"martin@gmail.com",username:"martin3",role:"user",avatar:"https://randomuser.me/api/portraits/men/3.jpg",active:!0,notes:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."},{id:7,fullname:"John Doe",email:"john@mail.com",username:"john",role:"user",avatar:"",active:!0,notes:""},{id:8,fullname:"Maksim Nedo",email:"maksim@epic.com",username:"maksim",role:"admin",avatar:"https://avatars.githubusercontent.com/u/23530004?v=4",active:!0,notes:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."},{id:9,fullname:"Dmitry Kuzmenko",email:"dd@pp.com",username:"dd",role:"user",avatar:"",active:!0,notes:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."},{id:10,fullname:"Rayan Gosling",email:"rayan@u.ua",username:"rayan",role:"user",avatar:"",active:!0,notes:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."},{id:11,active:!0,fullname:"Laura Smith",email:"laura@example.gg",username:"bbb",role:"user",avatar:"",notes:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."},{id:12,active:!0,fullname:"Ted Mosby",email:"tedmosby@mail.com",username:"gamer777",role:"user",avatar:"😭",notes:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."},{id:13,active:!0,fullname:"Forrest Schmidt Jr.",email:"Willard23@gmail.com",username:"Clementine72",role:"user",avatar:"https://randomuser.me/api/portraits/men/4.jpg",notes:"sed asperiores sed"},{id:14,active:!0,fullname:"Emilio Bruen",email:"Amya51@hotmail.com",username:"Madalyn_Brekke55",role:"user",avatar:"https://randomuser.me/api/portraits/men/5.jpg",notes:"architecto amet deleniti"},{id:15,active:!1,fullname:"Jenny Heathcote",email:"Granville_Lebsack38@yahoo.com",role:"user",username:"Vivienne98",avatar:"https://randomuser.me/api/portraits/men/6.jpg",notes:"provident ipsam recusandae"},{id:16,active:!0,fullname:"Sonya Cummerata III",email:"Toni2@yahoo.com",role:"user",username:"Norwood79",avatar:"https://randomuser.me/api/portraits/men/7.jpg",notes:"aut quaerat totam"},{id:17,active:!0,fullname:"Ruben Mitchell",email:"Lisette41@yahoo.com",role:"user",username:"Dariana_Schulist",avatar:"https://randomuser.me/api/portraits/men/8.jpg",notes:"minima harum ut"},{id:18,active:!0,fullname:"Blake Hudson I",email:"Israel88@hotmail.com",role:"user",username:"Crystal.Brakus29",avatar:"https://randomuser.me/api/portraits/men/9.jpg",notes:"sint culpa voluptatem"},{id:19,active:!0,fullname:"Alison Mueller",email:"Darien_Mayer@gmail.com",role:"user",username:"Cordie.Grant",avatar:"https://randomuser.me/api/portraits/men/10.jpg",notes:"officia autem aliquam"},{id:20,active:!1,fullname:"Miss Angelina Jenkins",email:"Cristal.Sauer@yahoo.com",role:"user",username:"Peggie.Runolfsdottir",avatar:"https://randomuser.me/api/portraits/men/11.jpg",notes:"rerum rerum rerum"},{id:21,active:!0,fullname:"Mack Boyle",email:"Shanny30@gmail.com",role:"user",username:"Phoebe67",avatar:"https://randomuser.me/api/portraits/men/12.jpg",notes:"voluptatibus et soluta"},{id:22,active:!0,fullname:"Raymond Simonis",email:"Tressie.Bruen45@gmail.com",role:"user",username:"Percy37",avatar:"https://randomuser.me/api/portraits/men/13.jpg",notes:"aut id molestiae"},{id:23,active:!0,fullname:"Janice Sporer",email:"Anastasia85@hotmail.com",role:"user",username:"Kali84",avatar:"https://randomuser.me/api/portraits/men/14.jpg",notes:"magnam eum aliquam"},{id:24,active:!0,fullname:"Francis Schowalter",email:"Tess56@gmail.com",role:"user",username:"Robyn.Kris",avatar:"https://randomuser.me/api/portraits/men/0.jpg",notes:"similique architecto in"},{id:25,active:!0,fullname:"Emilio Hoppe",email:"Bruce49@yahoo.com",role:"user",username:"Clemmie.Kutch",avatar:"https://randomuser.me/api/portraits/men/16.jpg",notes:"rerum quae dolorem"},{id:26,active:!0,fullname:"Janice Harber",email:"Jude38@hotmail.com",role:"user",username:"Neal70",avatar:"https://randomuser.me/api/portraits/men/17.jpg",notes:"iure dolor provident"},{id:27,fullname:"Evelyn Morar",email:"Laverne.Roberts@hotmail.com",role:"user",username:"Neal_Thompson84",active:!0,avatar:"https://randomuser.me/api/portraits/men/18.jpg",notes:"quae eos placeat"},{id:28,fullname:"Antoinette Schneider",email:"Ambrose_Stehr25@gmail.com",role:"user",username:"Esta.Hickle",active:!0,avatar:"https://randomuser.me/api/portraits/men/19.jpg",notes:"qui cumque unde"},{id:29,fullname:"Daniel Ebony",email:"Nyah44@hotmail.com",role:"user",username:"Jade.Kuhlman90",active:!0,avatar:"https://randomuser.me/api/portraits/men/20.jpg",notes:"exercitationem velit consectetur"}],b=(e,a)=>a==="project_owner"?e.project_owner.fullname:a==="team"?e.team.map(i=>i.fullname).join(", "):a==="creation_date"?new Date(e[a]):e[a],x=async e=>{await h(1e3);const a=c.map(t=>({...t,project_owner:g.find(r=>r.id===t.project_owner),team:g.filter(r=>t.team.includes(r.id))}));return e.sortBy&&e.sortingOrder&&a.sort((t,r)=>(t=b(t,e.sortBy),r=b(r,e.sortBy),t<r?e.sortingOrder==="asc"?-1:1:t>r?e.sortingOrder==="asc"?1:-1:0)),{data:a.slice((e.page-1)*e.perPage,e.page*e.perPage),pagination:{page:e.page,perPage:e.perPage,total:c.length}}},M=async e=>{await h(1e3);const a={...e,id:c.length+1,creation_date:new Date().toLocaleDateString("gb",{day:"numeric",month:"short",year:"numeric"})};return c.push(a),{...a,project_owner:g.find(i=>i.id===e.project_owner),team:g.filter(i=>e.team.includes(i.id))}},I=async e=>{await h(1e3);const a=c.findIndex(i=>i.id===e.id);return c[a]=e,e},Q=async e=>{await h(1e3);const a=c.findIndex(i=>i.id===e.id);return c.splice(a,1),e};function U(e){return F()?(O(e),!0):!1}function V(e){return typeof e=="function"?e():w(e)}const X=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Y=e=>typeof e<"u",B=Object.prototype.toString,Z=e=>B.call(e)==="[object Object]",$=()=>{};function _(e,a){function i(...t){return new Promise((r,n)=>{Promise.resolve(e(()=>a.apply(this,t),{fn:a,thisArg:this,args:t})).then(r).catch(n)})}return i}const j=e=>e();function T(e=j){const a=l(!0);function i(){a.value=!1}function t(){a.value=!0}const r=(...n)=>{a.value&&e(...n)};return{isActive:A(a),pause:i,resume:t,eventFilter:r}}function z(e){return e||D()}function J(e,a,i={}){const{eventFilter:t=j,...r}=i;return f(e,_(t,a),r)}function ee(e,a,i={}){const{eventFilter:t,...r}=i,{eventFilter:n,pause:p,resume:o,isActive:s}=T(t);return{stop:J(e,a,{...r,eventFilter:n}),pause:p,resume:o,isActive:s}}function ae(e,a=!0,i){z()?C(e,i):a?e():L(e)}function R(e,a,i={}){const{eventFilter:t=j,...r}=i,n=_(t,a);let p,o,s;if(r.flush==="sync"){const m=l(!1);o=()=>{},p=u=>{m.value=!0,u(),m.value=!1},s=f(e,(...u)=>{m.value||n(...u)},r)}else{const m=[],u=l(0),d=l(0);o=()=>{u.value=d.value},m.push(f(e,()=>{d.value++},{...r,flush:"sync"})),p=v=>{const y=d.value;v(),u.value+=d.value-y},m.push(f(e,(...v)=>{const y=u.value>0&&u.value===d.value;u.value=0,d.value=0,!y&&n(...v)},r)),s=()=>{m.forEach(v=>v())}}return{stop:s,ignoreUpdates:p,ignorePrevAsyncUpdates:o}}const W=()=>l({page:1,perPage:10,total:0}),E=()=>l({sortBy:"creation_date",sortingOrder:"desc"}),te=e=>{const a=l(!1),i=l([]),{sorting:t=E(),pagination:r=W()}=e??{},n=async()=>{a.value=!0;const{data:o,pagination:s}=await x({...w(t),...w(r)});i.value=o,p(()=>{r.value=s}),a.value=!1},{ignoreUpdates:p}=R([r,t],n,{deep:!0});return n(),{isLoading:a,projects:i,fetch:n,async add(o){a.value=!0,await M({...o,project_owner:o.project_owner.id,team:o.team.map(s=>s.id)}),await n(),a.value=!1},async update(o){a.value=!0,await I({...o,project_owner:o.project_owner.id,team:o.team.map(s=>s.id)}),await n(),a.value=!1},async remove(o){a.value=!0,await Q({...o,project_owner:o.project_owner.id,team:o.team.map(s=>s.id)}),await n(),a.value=!1},pagination:r,sorting:t}};export{G as _,ae as a,Y as b,Z as c,N as d,U as e,g as f,R as g,X as i,$ as n,c as p,V as t,te as u,ee as w};
//# sourceMappingURL=useProjects-0e78709e.js.map
