import{u as E,a as M,b as K}from"./useUsers-abbfa8ef.js";import{_ as O,d as Q,u as X}from"./useProjects-0e78709e.js";import{_ as z}from"./ProjectStatusBadge.vue_vue_type_script_setup_true_lang-d0f0b55e.js";import{d as A,f as c,a as g,g as B,w as u,c as w,p as I,F as q,j as Y,h as a,b as m,t as k,e as L,i as P,u as r,U as D,D as T,_ as N,r as F,z as Z}from"./index-3d3f0f9c.js";import{u as ee}from"./useModal-68ddd076.js";import{u as te}from"./useToast-e9be880b.js";import"./utils-b2fc192b.js";const oe={class:"flex flex-col items-center gap-4 grow"},ae={class:"va-h4 text-center self-stretch overflow-hidden line-clamp-2 text-ellipsis"},le=m("span",{class:"text-[var(--va-secondary)]"},"科主任: ",-1),se=m("div",{class:"flex justify-between"},null,-1),ne={key:1,class:"p-4 flex justify-center items-center text-[var(--va-secondary)]"},re=A({__name:"ProjectCards",props:{projects:{type:Array,required:!0},loading:{type:Boolean,required:!0}},emits:["edit","delete"],setup(_){const V=v=>{const f=["primary","#FFD43A","#ADFF00","#262824","danger"],n=v.charCodeAt(0)%f.length;return f[n]};return(v,f)=>{const n=c("VaAvatarGroup"),C=c("VaCardContent"),b=c("VaCard"),y=c("VaInnerLoading");return _.projects.length>0||_.loading?(g(),B(y,{key:0,loading:_.loading,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[4rem]"},{default:u(()=>[(g(!0),w(q,null,I(_.projects,i=>(g(),B(b,{key:i.project_name,style:Y({"--va-card-outlined-border":"1px solid var(--va-background-element)"}),outlined:""},{default:u(()=>[a(C,{class:"flex flex-col h-full"},{default:u(()=>[m("div",oe,[m("h4",ae,k(i.project_name),1),m("p",null,[le,m("span",null,k(i.project_owner.fullname),1)]),a(n,{class:"my-4",options:i.team.map(l=>({label:l.fullname,src:l.avatar,fallbackText:l.fullname[0],color:V(l.fullname)})),max:5},null,8,["options"]),a(z,{status:i.status},null,8,["status"])]),se]),_:2},1024)]),_:2},1032,["style"]))),128))]),_:1},8,["loading"])):(g(),w("div",ne,"No projects"))}}}),ie={class:"ellipsis max-w-[230px] lg:max-w-[450px]"},de={class:"flex items-center gap-2 ellipsis max-w-[230px]"},ue={class:"flex gap-2 justify-end"},ce={class:"flex flex-col-reverse md:flex-row gap-2 justify-between items-center py-2"},pe={key:0,class:"flex"},me=A({__name:"ProjectsTable",props:{projects:{type:Array,required:!0},loading:{type:Boolean,required:!0},sortBy:{type:Object,required:!0},sortingOrder:{type:Object,required:!0},pagination:{type:Object,required:!0}},emits:["edit","delete"],setup(_,{emit:V}){const v=Q([{label:"科室單位",key:"project_name",sortable:!0},{label:"科主任",key:"project_owner",sortable:!0},{label:"團隊成員",key:"team",sortable:!0},{label:"看診進度",key:"status",sortable:!0}]),f=_,n=V,C=l=>{const s=["primary","#FFD43A","#ADFF00","#262824","danger"],d=l.charCodeAt(0)%s.length;return s[d]},b=E(f,"sortBy",n),y=E(f,"sortingOrder",n),i=L(()=>Math.ceil(f.pagination.total/f.pagination.perPage));return(l,s)=>{const d=c("VaAvatarGroup"),t=c("VaButton"),U=c("VaDataTable"),$=c("VaSelect"),h=c("VaPagination");return g(),w("div",null,[a(U,{"sort-by":r(b),"onUpdate:sortBy":s[0]||(s[0]=o=>D(b)?b.value=o:null),"sorting-order":r(y),"onUpdate:sortingOrder":s[1]||(s[1]=o=>D(y)?y.value=o:null),items:_.projects,columns:r(v),loading:_.loading},{"cell(project_name)":u(({rowData:o})=>[m("div",ie,k(o.project_name),1)]),"cell(project_owner)":u(({rowData:o})=>[m("div",de,[a(O,{user:o.project_owner,size:"small"},null,8,["user"]),P(" "+k(o.project_owner.fullname),1)])]),"cell(team)":u(({rowData:o})=>[a(d,{size:"small",options:o.team.map(x=>({label:x.fullname,src:x.avatar,fallbackText:x.fullname[0],color:C(x.fullname)})),max:5},null,8,["options"])]),"cell(status)":u(({rowData:o})=>[a(z,{status:o.status},null,8,["status"])]),"cell(actions)":u(({rowData:o})=>[m("div",ue,[a(t,{preset:"primary",size:"small",color:"primary",icon:"mso-edit","aria-label":"Edit project",onClick:x=>l.$emit("edit",o)},null,8,["onClick"]),a(t,{preset:"primary",size:"small",icon:"mso-delete",color:"danger","aria-label":"Delete project",onClick:x=>l.$emit("delete",o)},null,8,["onClick"])])]),_:1},8,["sort-by","sorting-order","items","columns","loading"]),m("div",ce,[m("div",null,[m("b",null,k(l.$props.pagination.total)+" results.",1),P(" Results per page "),a($,{modelValue:l.$props.pagination.perPage,"onUpdate:modelValue":s[2]||(s[2]=o=>l.$props.pagination.perPage=o),class:"!w-20",options:[10,50,100]},null,8,["modelValue"])]),i.value>1?(g(),w("div",pe,[a(t,{preset:"secondary",icon:"va-arrow-left","aria-label":"Previous page",disabled:l.$props.pagination.page===1,onClick:s[3]||(s[3]=o=>l.$props.pagination.page--)},null,8,["disabled"]),a(t,{class:"mr-2",preset:"secondary",icon:"va-arrow-right","aria-label":"Next page",disabled:l.$props.pagination.page===i.value,onClick:s[4]||(s[4]=o=>l.$props.pagination.page++)},null,8,["disabled"]),a(h,{modelValue:l.$props.pagination.page,"onUpdate:modelValue":s[5]||(s[5]=o=>l.$props.pagination.page=o),"buttons-preset":"secondary",pages:i.value,"visible-pages":5,"boundary-links":!1,"direction-links":!1},null,8,["modelValue","pages"])])):T("",!0)])])}}});const ge=N(me,[["__scopeId","data-v-61bcc908"]]),ve={class:"flex justify-end flex-col-reverse sm:flex-row mt-4 gap-2"},fe=A({__name:"EditProjectForm",props:{project:{},saveButtonLabel:{}},emits:["save","close"],setup(_,{expose:V}){const v=_,f={project_name:"",project_owner:void 0,team:[],status:void 0},n=F({...f}),C=L(()=>Object.keys(n.value).some(d=>{var t;return d==="team"?!1:n.value[d]!==((t=v.project??f)==null?void 0:t[d])}));V({isFormHasUnsavedChanges:C}),Z(()=>v.project,()=>{v.project&&(n.value={...v.project,project_owner:v.project.project_owner})},{immediate:!0});const b=d=>!!d||"This field is required",{users:y,filters:i}=M({pagination:F({page:1,perPage:100,total:10})}),{users:l,filters:s}=M({pagination:F({page:1,perPage:100,total:10})});return(d,t)=>{const U=c("VaInput"),$=c("VaSelect"),h=c("VaButton"),o=c("VaForm");return g(),B(o,{class:"flex flex-col gap-2"},{default:u(({validate:x})=>[a(U,{modelValue:n.value.project_name,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value.project_name=e),label:"Project name",rules:[b]},null,8,["modelValue","rules"]),a($,{modelValue:n.value.project_owner,"onUpdate:modelValue":t[1]||(t[1]=e=>n.value.project_owner=e),search:r(s).search,"onUpdate:search":t[2]||(t[2]=e=>r(s).search=e),searchable:"",label:"Owner","text-by":"fullname","track-by":"id",rules:[b],options:r(l)},{content:u(({value:e})=>[e?(g(),w("div",{key:e.id,class:"flex items-center gap-1 mr-4"},[a(O,{user:e,size:"18px"},null,8,["user"]),P(" "+k(e.fullname),1)])):T("",!0)]),_:1},8,["modelValue","search","rules","options"]),a($,{modelValue:n.value.team,"onUpdate:modelValue":t[3]||(t[3]=e=>n.value.team=e),search:r(i).search,"onUpdate:search":t[4]||(t[4]=e=>r(i).search=e),label:"Team","text-by":"fullname","track-by":"id",multiple:"",rules:[e=>"length"in e&&e.length>0||"This field is required"],options:r(y),"max-visible-options":d.$vaBreakpoint.mdUp?3:1},{content:u(({valueArray:e})=>[e?(g(!0),w(q,{key:0},I(e,(p,S)=>(g(),w("div",{key:p.id,class:"flex items-center gap-1 mr-2"},[a(O,{user:p,size:"18px"},null,8,["user"]),P(" "+k(p.fullname)+k(S<e.length-1?",":""),1)]))),128)):T("",!0)]),_:1},8,["modelValue","search","rules","options","max-visible-options"]),a($,{modelValue:n.value.status,"onUpdate:modelValue":t[5]||(t[5]=e=>n.value.status=e),label:"Status",rules:[b],"track-by":"value","value-by":"value",options:[{text:"In progress",value:"in progress"},{text:"Archived",value:"archived"},{text:"Completed",value:"completed"},{text:"Important",value:"important"}]},{content:u(({value:e})=>[e?(g(),B(z,{key:0,status:e.value},null,8,["status"])):T("",!0)]),_:1},8,["modelValue","rules"]),m("div",ve,[a(h,{preset:"secondary",color:"secondary",onClick:t[6]||(t[6]=e=>d.$emit("close"))},{default:u(()=>[P("Cancel")]),_:1}),a(h,{onClick:e=>x()&&d.$emit("save",n.value)},{default:u(()=>[P(k(d.saveButtonLabel),1)]),_:2},1032,["onClick"])])]),_:1})}}});const _e=N(fe,[["__scopeId","data-v-cc1c112b"]]),be=m("h1",{class:"page-title"},"診間看診進度",-1),ye={class:"flex flex-col md:flex-row gap-2 mb-2 justify-between"},je={class:"flex flex-col md:flex-row gap-2 justify-start"},Ve={key:0,class:"va-h5 mb-4"},xe={key:1,class:"va-h5 mb-4"},Be=A({__name:"ProjectsPage",setup(_){const V=K("projects-view",!0),{projects:v,update:f,add:n,isLoading:C,remove:b,pagination:y,sorting:i}=X(),l=F(null),s=F(!1),d=e=>{l.value=e,s.value=!0},{init:t}=te(),U=async e=>{s.value=!1,"id"in e?(await f(e),t({message:"Project updated",color:"success"})):(await n(e),t({message:"Project created",color:"success"}))},{confirm:$}=ee(),h=async e=>{await $({title:"Delete project",message:`Are you sure you want to delete project "${e.project_name}"?`,okText:"Delete",size:"small",maxWidth:"380px"})&&(await b(e),t({message:"Project deleted",color:"success"}))},o=F(),x=async e=>{o.value.isFormHasUnsavedChanges?await $({maxWidth:"380px",message:"Form has unsaved changes. Are you sure you want to close it?",size:"small"})&&e():e()};return(e,p)=>{const S=c("VaButtonToggle"),G=c("VaCardContent"),R=c("VaModal"),H=c("VaCard");return g(),w(q,null,[be,a(H,null,{default:u(()=>[a(G,null,{default:u(()=>[m("div",ye,[m("div",je,[a(S,{modelValue:r(V),"onUpdate:modelValue":p[0]||(p[0]=j=>D(V)?V.value=j:null),color:"background-element","border-color":"background-element",options:[{label:"Cards",value:!0},{label:"Table",value:!1}]},null,8,["modelValue"])])]),r(V)?(g(),B(re,{key:0,projects:r(v),loading:r(C),onEdit:d,onDelete:h},null,8,["projects","loading"])):(g(),B(ge,{key:1,"sort-by":r(i).sortBy,"onUpdate:sortBy":p[1]||(p[1]=j=>r(i).sortBy=j),"sorting-order":r(i).sortingOrder,"onUpdate:sortingOrder":p[2]||(p[2]=j=>r(i).sortingOrder=j),pagination:r(y),"onUpdate:pagination":p[3]||(p[3]=j=>D(y)?y.value=j:null),projects:r(v),loading:r(C),onEdit:d,onDelete:h},null,8,["sort-by","sorting-order","pagination","projects","loading"]))]),_:1}),a(R,{modelValue:s.value,"onUpdate:modelValue":p[4]||(p[4]=j=>s.value=j),size:"small","mobile-fullscreen":"","close-button":"",stateful:"","hide-default-actions":"","before-cancel":x},{default:u(({cancel:j,ok:W})=>[l.value===null?(g(),w("h1",Ve,"Add project")):(g(),w("h1",xe,"Edit project")),a(_e,{ref_key:"editFormRef",ref:o,project:l.value,"save-button-label":l.value===null?"Add":"Save",onClose:j,onSave:J=>{U(J),W()}},null,8,["project","save-button-label","onClose","onSave"])]),_:1},8,["modelValue"])]),_:1})],64)}}});export{Be as default};
//# sourceMappingURL=ProjectsPage-5c900bf9.js.map