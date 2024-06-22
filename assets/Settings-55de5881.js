import{d as g,E as f,e as b,f as d,a as r,c as p,b as e,h as i,u as v,m as x,g as S,G as E,F as y,p as w,t as k,w as h}from"./index-3d3f0f9c.js";const $={class:"flex items-center justify-between"},C=e("p",null,"Language",-1),N={class:"w-40"},P=g({__name:"LanguageSwitcher",setup(m){const{locale:l}=f(),n={english:"English",spanish:"Spanish",brazilian_portuguese:"Português",simplified_chinese:"Simplified Chinese",persian:"Persian"},t={gb:n.english,es:n.spanish,br:n.brazilian_portuguese,cn:n.simplified_chinese,ir:n.persian},a=Object.fromEntries(Object.entries(t).map(([o,c])=>[c,o])),u=Object.values(t),s=b({get(){return t[l.value]},set(o){l.value=a[o]}});return(o,c)=>{const _=d("VaSelect");return r(),p("div",$,[C,e("div",N,[i(_,{modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=V=>s.value=V),options:v(u)},null,8,["modelValue","options"])])])}}}),j=g({__name:"ThemeSwitcher",setup(m){const{applyPreset:l,currentPresetName:n}=x(),t=b({get(){return n.value},set(s){l(s)}}),{t:a}=f(),u=[{label:a("buttonSelect.dark"),value:"dark"},{label:a("buttonSelect.light"),value:"light"}];return(s,o)=>{const c=d("VaButtonToggle");return r(),S(c,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=_=>t.value=_),color:"background-element","border-color":"background-element",options:u},null,8,["modelValue"])}}}),A=E("notifications",{state:()=>({notifications:{searchingForAJob:{name:"Searching for a job",isEnabled:!0},hiringSomeone:{name:"Hiring someone",isEnabled:!1},connectingWithOthers:{name:"Connecting with others",isEnabled:!0},postingAndCommenting:{name:"Posting and commenting",isEnabled:!0},messaging:{name:"Messaging",isEnabled:!0},groups:{name:"Groups",isEnabled:!1},pages:{name:"Pages",isEnabled:!0},attendingEvents:{name:"Attending events",isEnabled:!0},newsAndReports:{name:"News and reports",isEnabled:!1},updatingYourProfile:{name:"Updating your profile",isEnabled:!0},verifications:{name:"Verifications",isEnabled:!0}}})}),B={class:"flex flex-col p-4 bg-backgroundSecondary rounded-lg"},L=e("h3",{class:"h3 mb-6"},"Notifications you receive",-1),U={class:"flex items-center justify-between overflow-x-hidden"},z={class:"text-regularLarge"},O=g({__name:"Notifications",setup(m){const{notifications:l}=A();return(n,t)=>{const a=d("VaSwitch"),u=d("VaDivider");return r(),p("div",B,[L,(r(!0),p(y,null,w(v(l),s=>(r(),p("div",{key:s.name,class:"group"},[e("div",U,[e("p",z,k(s.name),1),i(a,{modelValue:s.isEnabled,"onUpdate:modelValue":o=>s.isEnabled=o,size:"small"},null,8,["modelValue","onUpdate:modelValue"])]),i(u,{class:"py-4 group-last:hidden"})]))),128))])}}}),T={class:"flex flex-col space-y-6 md:space-y-4"},D=e("h1",{class:"page-title"},"Settings",-1),F={class:"flex flex-col p-4 space-y-4 bg-backgroundSecondary rounded-lg"},G=e("h3",{class:"h3"},"Theme",-1),I={class:"flex flex-col p-4 space-y-4 bg-backgroundSecondary rounded-lg"},Y=e("h3",{class:"h3"},"General preferences",-1),M=e("div",{class:"flex flex-col space-y-2"},[e("p",{class:"text-regularLarge font-bold"},"Your notification settings are regrouped and simplified"),e("p",{class:"text-regularMedium"},"Your previous setting choices aren't changed.")],-1),J=g({__name:"Settings",setup(m){return(l,n)=>{const t=d("VaIcon"),a=d("VaAlert");return r(),p("div",T,[D,e("div",F,[G,i(j)]),e("div",I,[Y,i(P)]),i(a,{class:"rounded-lg p-4 m-0",closeable:"",color:"info"},{icon:h(()=>[i(t,{size:"26px",name:"mso-notifications_active"})]),default:h(()=>[M]),_:1}),i(O)])}}});export{J as default};
//# sourceMappingURL=Settings-55de5881.js.map
