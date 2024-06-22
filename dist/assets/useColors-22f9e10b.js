import{I as wr,H as Bt,r as kt,e as x,u as Ut,U as Re,Z as Nt,a7 as be,a8 as Vt}from"./index-1ba8e26d.js";const Me={light:{primary:"#154EC1",secondary:"#767C88",success:"#3D9209",info:"#158DE3",danger:"#E42222",warning:"#FFD43A",backgroundPrimary:"#f6f6f6",backgroundSecondary:"#FFFFFF",backgroundElement:"#ECF0F1",backgroundBorder:"#DEE5F2",textPrimary:"#262824",textInverted:"#FFFFFF",shadow:"rgba(0, 0, 0, 0.12)",focus:"#49A8FF",transparent:"rgba(0, 0, 0, 0)"},dark:{primary:"#3472F0",secondary:"#767C88",success:"#66BE33",info:"#3EAAF8",danger:"#F34030",warning:"#FFD952",backgroundPrimary:"#050A10",backgroundSecondary:"#1F262F",backgroundElement:"#131A22",backgroundBorder:"#3D4C58",textPrimary:"#F1F1F1",textInverted:"#0B121A",shadow:"rgba(255, 255, 255, 0.12)",focus:"#49A8FF",transparent:"rgba(0, 0, 0, 0)"}},Ht={xs:0,sm:640,md:1024,lg:1440,xl:1920},Kt=()=>({enabled:!0,bodyClass:!0,thresholds:Ht}),K=e=>e&&typeof e=="object"&&!Array.isArray(e),ce=(e,r)=>!K(e)||!K(r)?r:(Object.keys(r).forEach(t=>{const a=e[t],n=r[t];K(a)&&K(n)?e[t]=ce(Object.create(Object.getPrototypeOf(a),Object.getOwnPropertyDescriptors(a)),n):e[t]=n}),e);var z=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function U(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function zt(){this.__data__=[],this.size=0}var Wt=zt;function Zt(e,r){return e===r||e!==e&&r!==r}var Y=Zt,qt=Y;function Jt(e,r){for(var t=e.length;t--;)if(qt(e[t][0],r))return t;return-1}var X=Jt,Yt=X,Xt=Array.prototype,Qt=Xt.splice;function ea(e){var r=this.__data__,t=Yt(r,e);if(t<0)return!1;var a=r.length-1;return t==a?r.pop():Qt.call(r,t,1),--this.size,!0}var ra=ea,ta=X;function aa(e){var r=this.__data__,t=ta(r,e);return t<0?void 0:r[t][1]}var na=aa,oa=X;function sa(e){return oa(this.__data__,e)>-1}var ia=sa,ca=X;function ua(e,r){var t=this.__data__,a=ca(t,e);return a<0?(++this.size,t.push([e,r])):t[a][1]=r,this}var la=ua,fa=Wt,va=ra,ga=na,pa=ia,da=la;function j(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var a=e[r];this.set(a[0],a[1])}}j.prototype.clear=fa;j.prototype.delete=va;j.prototype.get=ga;j.prototype.has=pa;j.prototype.set=da;var Q=j,$a=Q;function ba(){this.__data__=new $a,this.size=0}var ha=ba;function ya(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}var _a=ya;function ma(e){return this.__data__.get(e)}var Ca=ma;function Aa(e){return this.__data__.has(e)}var Oa=Aa,Sa=typeof z=="object"&&z&&z.Object===Object&&z,Ir=Sa,Ta=Ir,xa=typeof self=="object"&&self&&self.Object===Object&&self,Pa=Ta||xa||Function("return this")(),y=Pa,wa=y,Ia=wa.Symbol,N=Ia,De=N,jr=Object.prototype,ja=jr.hasOwnProperty,Fa=jr.toString,k=De?De.toStringTag:void 0;function Ea(e){var r=ja.call(e,k),t=e[k];try{e[k]=void 0;var a=!0}catch{}var n=Fa.call(e);return a&&(r?e[k]=t:delete e[k]),n}var La=Ea,Ra=Object.prototype,Ma=Ra.toString;function Da(e){return Ma.call(e)}var Ga=Da,Ge=N,Ba=La,ka=Ga,Ua="[object Null]",Na="[object Undefined]",Be=Ge?Ge.toStringTag:void 0;function Va(e){return e==null?e===void 0?Na:Ua:Be&&Be in Object(e)?Ba(e):ka(e)}var F=Va;function Ha(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var _=Ha,Ka=F,za=_,Wa="[object AsyncFunction]",Za="[object Function]",qa="[object GeneratorFunction]",Ja="[object Proxy]";function Ya(e){if(!za(e))return!1;var r=Ka(e);return r==Za||r==qa||r==Wa||r==Ja}var he=Ya,Xa=y,Qa=Xa["__core-js_shared__"],en=Qa,ie=en,ke=function(){var e=/[^.]+$/.exec(ie&&ie.keys&&ie.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function rn(e){return!!ke&&ke in e}var tn=rn,an=Function.prototype,nn=an.toString;function on(e){if(e!=null){try{return nn.call(e)}catch{}try{return e+""}catch{}}return""}var Fr=on,sn=he,cn=tn,un=_,ln=Fr,fn=/[\\^$.*+?()[\]{}|]/g,vn=/^\[object .+?Constructor\]$/,gn=Function.prototype,pn=Object.prototype,dn=gn.toString,$n=pn.hasOwnProperty,bn=RegExp("^"+dn.call($n).replace(fn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function hn(e){if(!un(e)||cn(e))return!1;var r=sn(e)?bn:vn;return r.test(ln(e))}var yn=hn;function _n(e,r){return e==null?void 0:e[r]}var mn=_n,Cn=yn,An=mn;function On(e,r){var t=An(e,r);return Cn(t)?t:void 0}var P=On,Sn=P,Tn=y,xn=Sn(Tn,"Map"),ye=xn,Pn=P,wn=Pn(Object,"create"),ee=wn,Ue=ee;function In(){this.__data__=Ue?Ue(null):{},this.size=0}var jn=In;function Fn(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var En=Fn,Ln=ee,Rn="__lodash_hash_undefined__",Mn=Object.prototype,Dn=Mn.hasOwnProperty;function Gn(e){var r=this.__data__;if(Ln){var t=r[e];return t===Rn?void 0:t}return Dn.call(r,e)?r[e]:void 0}var Bn=Gn,kn=ee,Un=Object.prototype,Nn=Un.hasOwnProperty;function Vn(e){var r=this.__data__;return kn?r[e]!==void 0:Nn.call(r,e)}var Hn=Vn,Kn=ee,zn="__lodash_hash_undefined__";function Wn(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Kn&&r===void 0?zn:r,this}var Zn=Wn,qn=jn,Jn=En,Yn=Bn,Xn=Hn,Qn=Zn;function E(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var a=e[r];this.set(a[0],a[1])}}E.prototype.clear=qn;E.prototype.delete=Jn;E.prototype.get=Yn;E.prototype.has=Xn;E.prototype.set=Qn;var eo=E,Ne=eo,ro=Q,to=ye;function ao(){this.size=0,this.__data__={hash:new Ne,map:new(to||ro),string:new Ne}}var no=ao;function oo(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}var so=oo,io=so;function co(e,r){var t=e.__data__;return io(r)?t[typeof r=="string"?"string":"hash"]:t.map}var re=co,uo=re;function lo(e){var r=uo(this,e).delete(e);return this.size-=r?1:0,r}var fo=lo,vo=re;function go(e){return vo(this,e).get(e)}var po=go,$o=re;function bo(e){return $o(this,e).has(e)}var ho=bo,yo=re;function _o(e,r){var t=yo(this,e),a=t.size;return t.set(e,r),this.size+=t.size==a?0:1,this}var mo=_o,Co=no,Ao=fo,Oo=po,So=ho,To=mo;function L(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var a=e[r];this.set(a[0],a[1])}}L.prototype.clear=Co;L.prototype.delete=Ao;L.prototype.get=Oo;L.prototype.has=So;L.prototype.set=To;var Er=L,xo=Q,Po=ye,wo=Er,Io=200;function jo(e,r){var t=this.__data__;if(t instanceof xo){var a=t.__data__;if(!Po||a.length<Io-1)return a.push([e,r]),this.size=++t.size,this;t=this.__data__=new wo(a)}return t.set(e,r),this.size=t.size,this}var Fo=jo,Eo=Q,Lo=ha,Ro=_a,Mo=Ca,Do=Oa,Go=Fo;function R(e){var r=this.__data__=new Eo(e);this.size=r.size}R.prototype.clear=Lo;R.prototype.delete=Ro;R.prototype.get=Mo;R.prototype.has=Do;R.prototype.set=Go;var Lr=R;function Bo(e,r){for(var t=-1,a=e==null?0:e.length;++t<a&&r(e[t],t,e)!==!1;);return e}var ko=Bo,Uo=P,No=function(){try{var e=Uo(Object,"defineProperty");return e({},"",{}),e}catch{}}(),Rr=No,Ve=Rr;function Vo(e,r,t){r=="__proto__"&&Ve?Ve(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var _e=Vo,Ho=_e,Ko=Y,zo=Object.prototype,Wo=zo.hasOwnProperty;function Zo(e,r,t){var a=e[r];(!(Wo.call(e,r)&&Ko(a,t))||t===void 0&&!(r in e))&&Ho(e,r,t)}var me=Zo,qo=me,Jo=_e;function Yo(e,r,t,a){var n=!t;t||(t={});for(var o=-1,s=r.length;++o<s;){var i=r[o],u=a?a(t[i],e[i],i,t,e):void 0;u===void 0&&(u=e[i]),n?Jo(t,i,u):qo(t,i,u)}return t}var M=Yo;function Xo(e,r){for(var t=-1,a=Array(e);++t<e;)a[t]=r(t);return a}var Qo=Xo;function es(e){return e!=null&&typeof e=="object"}var O=es,rs=F,ts=O,as="[object Arguments]";function ns(e){return ts(e)&&rs(e)==as}var os=ns,He=os,ss=O,Mr=Object.prototype,is=Mr.hasOwnProperty,cs=Mr.propertyIsEnumerable,us=He(function(){return arguments}())?He:function(e){return ss(e)&&is.call(e,"callee")&&!cs.call(e,"callee")},te=us,ls=Array.isArray,m=ls,Z={exports:{}};function fs(){return!1}var vs=fs;Z.exports;(function(e,r){var t=y,a=vs,n=r&&!r.nodeType&&r,o=n&&!0&&e&&!e.nodeType&&e,s=o&&o.exports===n,i=s?t.Buffer:void 0,u=i?i.isBuffer:void 0,l=u||a;e.exports=l})(Z,Z.exports);var Ce=Z.exports,gs=9007199254740991,ps=/^(?:0|[1-9]\d*)$/;function ds(e,r){var t=typeof e;return r=r??gs,!!r&&(t=="number"||t!="symbol"&&ps.test(e))&&e>-1&&e%1==0&&e<r}var ae=ds,$s=9007199254740991;function bs(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=$s}var Ae=bs,hs=F,ys=Ae,_s=O,ms="[object Arguments]",Cs="[object Array]",As="[object Boolean]",Os="[object Date]",Ss="[object Error]",Ts="[object Function]",xs="[object Map]",Ps="[object Number]",ws="[object Object]",Is="[object RegExp]",js="[object Set]",Fs="[object String]",Es="[object WeakMap]",Ls="[object ArrayBuffer]",Rs="[object DataView]",Ms="[object Float32Array]",Ds="[object Float64Array]",Gs="[object Int8Array]",Bs="[object Int16Array]",ks="[object Int32Array]",Us="[object Uint8Array]",Ns="[object Uint8ClampedArray]",Vs="[object Uint16Array]",Hs="[object Uint32Array]",v={};v[Ms]=v[Ds]=v[Gs]=v[Bs]=v[ks]=v[Us]=v[Ns]=v[Vs]=v[Hs]=!0;v[ms]=v[Cs]=v[Ls]=v[As]=v[Rs]=v[Os]=v[Ss]=v[Ts]=v[xs]=v[Ps]=v[ws]=v[Is]=v[js]=v[Fs]=v[Es]=!1;function Ks(e){return _s(e)&&ys(e.length)&&!!v[hs(e)]}var zs=Ks;function Ws(e){return function(r){return e(r)}}var Oe=Ws,q={exports:{}};q.exports;(function(e,r){var t=Ir,a=r&&!r.nodeType&&r,n=a&&!0&&e&&!e.nodeType&&e,o=n&&n.exports===a,s=o&&t.process,i=function(){try{var u=n&&n.require&&n.require("util").types;return u||s&&s.binding&&s.binding("util")}catch{}}();e.exports=i})(q,q.exports);var ne=q.exports,Zs=zs,qs=Oe,Ke=ne,ze=Ke&&Ke.isTypedArray,Js=ze?qs(ze):Zs,Dr=Js,Ys=Qo,Xs=te,Qs=m,ei=Ce,ri=ae,ti=Dr,ai=Object.prototype,ni=ai.hasOwnProperty;function oi(e,r){var t=Qs(e),a=!t&&Xs(e),n=!t&&!a&&ei(e),o=!t&&!a&&!n&&ti(e),s=t||a||n||o,i=s?Ys(e.length,String):[],u=i.length;for(var l in e)(r||ni.call(e,l))&&!(s&&(l=="length"||n&&(l=="offset"||l=="parent")||o&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||ri(l,u)))&&i.push(l);return i}var Gr=oi,si=Object.prototype;function ii(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||si;return e===t}var Se=ii;function ci(e,r){return function(t){return e(r(t))}}var Br=ci,ui=Br,li=ui(Object.keys,Object),fi=li,vi=Se,gi=fi,pi=Object.prototype,di=pi.hasOwnProperty;function $i(e){if(!vi(e))return gi(e);var r=[];for(var t in Object(e))di.call(e,t)&&t!="constructor"&&r.push(t);return r}var bi=$i,hi=he,yi=Ae;function _i(e){return e!=null&&yi(e.length)&&!hi(e)}var oe=_i,mi=Gr,Ci=bi,Ai=oe;function Oi(e){return Ai(e)?mi(e):Ci(e)}var Te=Oi,Si=M,Ti=Te;function xi(e,r){return e&&Si(r,Ti(r),e)}var Pi=xi;function wi(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var Ii=wi,ji=_,Fi=Se,Ei=Ii,Li=Object.prototype,Ri=Li.hasOwnProperty;function Mi(e){if(!ji(e))return Ei(e);var r=Fi(e),t=[];for(var a in e)a=="constructor"&&(r||!Ri.call(e,a))||t.push(a);return t}var Di=Mi,Gi=Gr,Bi=Di,ki=oe;function Ui(e){return ki(e)?Gi(e,!0):Bi(e)}var V=Ui,Ni=M,Vi=V;function Hi(e,r){return e&&Ni(r,Vi(r),e)}var Ki=Hi,J={exports:{}};J.exports;(function(e,r){var t=y,a=r&&!r.nodeType&&r,n=a&&!0&&e&&!e.nodeType&&e,o=n&&n.exports===a,s=o?t.Buffer:void 0,i=s?s.allocUnsafe:void 0;function u(l,g){if(g)return l.slice();var d=l.length,$=i?i(d):new l.constructor(d);return l.copy($),$}e.exports=u})(J,J.exports);var kr=J.exports;function zi(e,r){var t=-1,a=e.length;for(r||(r=Array(a));++t<a;)r[t]=e[t];return r}var Ur=zi;function Wi(e,r){for(var t=-1,a=e==null?0:e.length,n=0,o=[];++t<a;){var s=e[t];r(s,t,e)&&(o[n++]=s)}return o}var Zi=Wi;function qi(){return[]}var Nr=qi,Ji=Zi,Yi=Nr,Xi=Object.prototype,Qi=Xi.propertyIsEnumerable,We=Object.getOwnPropertySymbols,ec=We?function(e){return e==null?[]:(e=Object(e),Ji(We(e),function(r){return Qi.call(e,r)}))}:Yi,xe=ec,rc=M,tc=xe;function ac(e,r){return rc(e,tc(e),r)}var nc=ac;function oc(e,r){for(var t=-1,a=r.length,n=e.length;++t<a;)e[n+t]=r[t];return e}var Pe=oc,sc=Br,ic=sc(Object.getPrototypeOf,Object),we=ic,cc=Pe,uc=we,lc=xe,fc=Nr,vc=Object.getOwnPropertySymbols,gc=vc?function(e){for(var r=[];e;)cc(r,lc(e)),e=uc(e);return r}:fc,Vr=gc,pc=M,dc=Vr;function $c(e,r){return pc(e,dc(e),r)}var bc=$c,hc=Pe,yc=m;function _c(e,r,t){var a=r(e);return yc(e)?a:hc(a,t(e))}var Hr=_c,mc=Hr,Cc=xe,Ac=Te;function Oc(e){return mc(e,Ac,Cc)}var Sc=Oc,Tc=Hr,xc=Vr,Pc=V;function wc(e){return Tc(e,Pc,xc)}var Kr=wc,Ic=P,jc=y,Fc=Ic(jc,"DataView"),Ec=Fc,Lc=P,Rc=y,Mc=Lc(Rc,"Promise"),Dc=Mc,Gc=P,Bc=y,kc=Gc(Bc,"Set"),Uc=kc,Nc=P,Vc=y,Hc=Nc(Vc,"WeakMap"),Kc=Hc,ue=Ec,le=ye,fe=Dc,ve=Uc,ge=Kc,zr=F,D=Fr,Ze="[object Map]",zc="[object Object]",qe="[object Promise]",Je="[object Set]",Ye="[object WeakMap]",Xe="[object DataView]",Wc=D(ue),Zc=D(le),qc=D(fe),Jc=D(ve),Yc=D(ge),S=zr;(ue&&S(new ue(new ArrayBuffer(1)))!=Xe||le&&S(new le)!=Ze||fe&&S(fe.resolve())!=qe||ve&&S(new ve)!=Je||ge&&S(new ge)!=Ye)&&(S=function(e){var r=zr(e),t=r==zc?e.constructor:void 0,a=t?D(t):"";if(a)switch(a){case Wc:return Xe;case Zc:return Ze;case qc:return qe;case Jc:return Je;case Yc:return Ye}return r});var Ie=S,Xc=Object.prototype,Qc=Xc.hasOwnProperty;function eu(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&Qc.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var ru=eu,tu=y,au=tu.Uint8Array,nu=au,Qe=nu;function ou(e){var r=new e.constructor(e.byteLength);return new Qe(r).set(new Qe(e)),r}var je=ou,su=je;function iu(e,r){var t=r?su(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var cu=iu,uu=/\w*$/;function lu(e){var r=new e.constructor(e.source,uu.exec(e));return r.lastIndex=e.lastIndex,r}var fu=lu,er=N,rr=er?er.prototype:void 0,tr=rr?rr.valueOf:void 0;function vu(e){return tr?Object(tr.call(e)):{}}var gu=vu,pu=je;function du(e,r){var t=r?pu(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var Wr=du,$u=je,bu=cu,hu=fu,yu=gu,_u=Wr,mu="[object Boolean]",Cu="[object Date]",Au="[object Map]",Ou="[object Number]",Su="[object RegExp]",Tu="[object Set]",xu="[object String]",Pu="[object Symbol]",wu="[object ArrayBuffer]",Iu="[object DataView]",ju="[object Float32Array]",Fu="[object Float64Array]",Eu="[object Int8Array]",Lu="[object Int16Array]",Ru="[object Int32Array]",Mu="[object Uint8Array]",Du="[object Uint8ClampedArray]",Gu="[object Uint16Array]",Bu="[object Uint32Array]";function ku(e,r,t){var a=e.constructor;switch(r){case wu:return $u(e);case mu:case Cu:return new a(+e);case Iu:return bu(e,t);case ju:case Fu:case Eu:case Lu:case Ru:case Mu:case Du:case Gu:case Bu:return _u(e,t);case Au:return new a;case Ou:case xu:return new a(e);case Su:return hu(e);case Tu:return new a;case Pu:return yu(e)}}var Uu=ku,Nu=_,ar=Object.create,Vu=function(){function e(){}return function(r){if(!Nu(r))return{};if(ar)return ar(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}(),Hu=Vu,Ku=Hu,zu=we,Wu=Se;function Zu(e){return typeof e.constructor=="function"&&!Wu(e)?Ku(zu(e)):{}}var Zr=Zu,qu=Ie,Ju=O,Yu="[object Map]";function Xu(e){return Ju(e)&&qu(e)==Yu}var Qu=Xu,el=Qu,rl=Oe,nr=ne,or=nr&&nr.isMap,tl=or?rl(or):el,al=tl,nl=Ie,ol=O,sl="[object Set]";function il(e){return ol(e)&&nl(e)==sl}var cl=il,ul=cl,ll=Oe,sr=ne,ir=sr&&sr.isSet,fl=ir?ll(ir):ul,vl=fl,gl=Lr,pl=ko,dl=me,$l=Pi,bl=Ki,hl=kr,yl=Ur,_l=nc,ml=bc,Cl=Sc,Al=Kr,Ol=Ie,Sl=ru,Tl=Uu,xl=Zr,Pl=m,wl=Ce,Il=al,jl=_,Fl=vl,El=Te,Ll=V,Rl=1,Ml=2,Dl=4,qr="[object Arguments]",Gl="[object Array]",Bl="[object Boolean]",kl="[object Date]",Ul="[object Error]",Jr="[object Function]",Nl="[object GeneratorFunction]",Vl="[object Map]",Hl="[object Number]",Yr="[object Object]",Kl="[object RegExp]",zl="[object Set]",Wl="[object String]",Zl="[object Symbol]",ql="[object WeakMap]",Jl="[object ArrayBuffer]",Yl="[object DataView]",Xl="[object Float32Array]",Ql="[object Float64Array]",ef="[object Int8Array]",rf="[object Int16Array]",tf="[object Int32Array]",af="[object Uint8Array]",nf="[object Uint8ClampedArray]",of="[object Uint16Array]",sf="[object Uint32Array]",f={};f[qr]=f[Gl]=f[Jl]=f[Yl]=f[Bl]=f[kl]=f[Xl]=f[Ql]=f[ef]=f[rf]=f[tf]=f[Vl]=f[Hl]=f[Yr]=f[Kl]=f[zl]=f[Wl]=f[Zl]=f[af]=f[nf]=f[of]=f[sf]=!0;f[Ul]=f[Jr]=f[ql]=!1;function W(e,r,t,a,n,o){var s,i=r&Rl,u=r&Ml,l=r&Dl;if(t&&(s=n?t(e,a,n,o):t(e)),s!==void 0)return s;if(!jl(e))return e;var g=Pl(e);if(g){if(s=Sl(e),!i)return yl(e,s)}else{var d=Ol(e),$=d==Jr||d==Nl;if(wl(e))return hl(e,i);if(d==Yr||d==qr||$&&!n){if(s=u||$?{}:xl(e),!i)return u?ml(e,bl(s,e)):_l(e,$l(s,e))}else{if(!f[d])return n?e:{};s=Tl(e,d,i)}}o||(o=new gl);var A=o.get(e);if(A)return A;o.set(e,s),Fl(e)?e.forEach(function(c){s.add(W(c,r,t,c,e,o))}):Il(e)&&e.forEach(function(c,p){s.set(p,W(c,r,t,p,e,o))});var w=l?u?Al:Cl:u?Ll:El,B=g?void 0:w(e);return pl(B||e,function(c,p){B&&(p=c,c=e[p]),dl(s,p,W(c,r,t,p,e,o))}),s}var Xr=W,cf=Xr,uf=1,lf=4;function ff(e){return cf(e,uf|lf)}var vf=ff;const cr=U(vf);function gf(e,r,t,a){var n=-1,o=e==null?0:e.length;for(a&&o&&(t=e[++n]);++n<o;)t=r(t,e[n],n,e);return t}var pf=gf;function df(e){return function(r){return e==null?void 0:e[r]}}var $f=df,bf=$f,hf={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},yf=bf(hf),_f=yf;function mf(e,r){for(var t=-1,a=e==null?0:e.length,n=Array(a);++t<a;)n[t]=r(e[t],t,e);return n}var Qr=mf,Cf=F,Af=O,Of="[object Symbol]";function Sf(e){return typeof e=="symbol"||Af(e)&&Cf(e)==Of}var Fe=Sf,ur=N,Tf=Qr,xf=m,Pf=Fe,wf=1/0,lr=ur?ur.prototype:void 0,fr=lr?lr.toString:void 0;function et(e){if(typeof e=="string")return e;if(xf(e))return Tf(e,et)+"";if(Pf(e))return fr?fr.call(e):"";var r=e+"";return r=="0"&&1/e==-wf?"-0":r}var If=et,jf=If;function Ff(e){return e==null?"":jf(e)}var H=Ff,Ef=_f,Lf=H,Rf=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Mf="\\u0300-\\u036f",Df="\\ufe20-\\ufe2f",Gf="\\u20d0-\\u20ff",Bf=Mf+Df+Gf,kf="["+Bf+"]",Uf=RegExp(kf,"g");function Nf(e){return e=Lf(e),e&&e.replace(Rf,Ef).replace(Uf,"")}var Vf=Nf,Hf=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Kf(e){return e.match(Hf)||[]}var zf=Kf,Wf=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Zf(e){return Wf.test(e)}var qf=Zf,rt="\\ud800-\\udfff",Jf="\\u0300-\\u036f",Yf="\\ufe20-\\ufe2f",Xf="\\u20d0-\\u20ff",Qf=Jf+Yf+Xf,tt="\\u2700-\\u27bf",at="a-z\\xdf-\\xf6\\xf8-\\xff",ev="\\xac\\xb1\\xd7\\xf7",rv="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",tv="\\u2000-\\u206f",av=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",nt="A-Z\\xc0-\\xd6\\xd8-\\xde",nv="\\ufe0e\\ufe0f",ot=ev+rv+tv+av,st="['’]",vr="["+ot+"]",ov="["+Qf+"]",it="\\d+",sv="["+tt+"]",ct="["+at+"]",ut="[^"+rt+ot+it+tt+at+nt+"]",iv="\\ud83c[\\udffb-\\udfff]",cv="(?:"+ov+"|"+iv+")",uv="[^"+rt+"]",lt="(?:\\ud83c[\\udde6-\\uddff]){2}",ft="[\\ud800-\\udbff][\\udc00-\\udfff]",I="["+nt+"]",lv="\\u200d",gr="(?:"+ct+"|"+ut+")",fv="(?:"+I+"|"+ut+")",pr="(?:"+st+"(?:d|ll|m|re|s|t|ve))?",dr="(?:"+st+"(?:D|LL|M|RE|S|T|VE))?",vt=cv+"?",gt="["+nv+"]?",vv="(?:"+lv+"(?:"+[uv,lt,ft].join("|")+")"+gt+vt+")*",gv="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",pv="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",dv=gt+vt+vv,$v="(?:"+[sv,lt,ft].join("|")+")"+dv,bv=RegExp([I+"?"+ct+"+"+pr+"(?="+[vr,I,"$"].join("|")+")",fv+"+"+dr+"(?="+[vr,I+gr,"$"].join("|")+")",I+"?"+gr+"+"+pr,I+"+"+dr,pv,gv,it,$v].join("|"),"g");function hv(e){return e.match(bv)||[]}var yv=hv,_v=zf,mv=qf,Cv=H,Av=yv;function Ov(e,r,t){return e=Cv(e),r=t?void 0:r,r===void 0?mv(e)?Av(e):_v(e):e.match(r)||[]}var Sv=Ov,Tv=pf,xv=Vf,Pv=Sv,wv="['’]",Iv=RegExp(wv,"g");function jv(e){return function(r){return Tv(Pv(xv(r).replace(Iv,"")),e,"")}}var pt=jv,Fv=pt,Ev=Fv(function(e,r,t){return e+(t?"-":"")+r.toLowerCase()}),Lv=Ev;const pe=U(Lv);function Rv(e,r,t){var a=-1,n=e.length;r<0&&(r=-r>n?0:n+r),t=t>n?n:t,t<0&&(t+=n),n=r>t?0:t-r>>>0,r>>>=0;for(var o=Array(n);++a<n;)o[a]=e[a+r];return o}var dt=Rv,Mv=dt;function Dv(e,r,t){var a=e.length;return t=t===void 0?a:t,!r&&t>=a?e:Mv(e,r,t)}var Gv=Dv,Bv="\\ud800-\\udfff",kv="\\u0300-\\u036f",Uv="\\ufe20-\\ufe2f",Nv="\\u20d0-\\u20ff",Vv=kv+Uv+Nv,Hv="\\ufe0e\\ufe0f",Kv="\\u200d",zv=RegExp("["+Kv+Bv+Vv+Hv+"]");function Wv(e){return zv.test(e)}var $t=Wv;function Zv(e){return e.split("")}var qv=Zv,bt="\\ud800-\\udfff",Jv="\\u0300-\\u036f",Yv="\\ufe20-\\ufe2f",Xv="\\u20d0-\\u20ff",Qv=Jv+Yv+Xv,eg="\\ufe0e\\ufe0f",rg="["+bt+"]",de="["+Qv+"]",$e="\\ud83c[\\udffb-\\udfff]",tg="(?:"+de+"|"+$e+")",ht="[^"+bt+"]",yt="(?:\\ud83c[\\udde6-\\uddff]){2}",_t="[\\ud800-\\udbff][\\udc00-\\udfff]",ag="\\u200d",mt=tg+"?",Ct="["+eg+"]?",ng="(?:"+ag+"(?:"+[ht,yt,_t].join("|")+")"+Ct+mt+")*",og=Ct+mt+ng,sg="(?:"+[ht+de+"?",de,yt,_t,rg].join("|")+")",ig=RegExp($e+"(?="+$e+")|"+sg+og,"g");function cg(e){return e.match(ig)||[]}var ug=cg,lg=qv,fg=$t,vg=ug;function gg(e){return fg(e)?vg(e):lg(e)}var pg=gg,dg=Gv,$g=$t,bg=pg,hg=H;function yg(e){return function(r){r=hg(r);var t=$g(r)?bg(r):void 0,a=t?t[0]:r.charAt(0),n=t?dg(t,1).join(""):r.slice(1);return a[e]()+n}}var _g=yg,mg=_g,Cg=mg("toUpperCase"),Ag=Cg,Og=H,Sg=Ag;function Tg(e){return Sg(Og(e).toLowerCase())}var xg=Tg,Pg=xg,wg=pt,Ig=wg(function(e,r,t){return r=r.toLowerCase(),e+(t?Pg(r):r)}),jg=Ig;const Fg=U(jg);var Eg=m,Lg=Fe,Rg=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Mg=/^\w*$/;function Dg(e,r){if(Eg(e))return!1;var t=typeof e;return t=="number"||t=="symbol"||t=="boolean"||e==null||Lg(e)?!0:Mg.test(e)||!Rg.test(e)||r!=null&&e in Object(r)}var Gg=Dg,At=Er,Bg="Expected a function";function Ee(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(Bg);var t=function(){var a=arguments,n=r?r.apply(this,a):a[0],o=t.cache;if(o.has(n))return o.get(n);var s=e.apply(this,a);return t.cache=o.set(n,s)||o,s};return t.cache=new(Ee.Cache||At),t}Ee.Cache=At;var kg=Ee,Ug=kg,Ng=500;function Vg(e){var r=Ug(e,function(a){return t.size===Ng&&t.clear(),a}),t=r.cache;return r}var Hg=Vg,Kg=Hg,zg=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Wg=/\\(\\)?/g,Zg=Kg(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(zg,function(t,a,n,o){r.push(n?o.replace(Wg,"$1"):a||t)}),r}),qg=Zg,Jg=m,Yg=Gg,Xg=qg,Qg=H;function ep(e,r){return Jg(e)?e:Yg(e,r)?[e]:Xg(Qg(e))}var G=ep,rp=Fe,tp=1/0;function ap(e){if(typeof e=="string"||rp(e))return e;var r=e+"";return r=="0"&&1/e==-tp?"-0":r}var se=ap,np=G,op=se;function sp(e,r){r=np(r,e);for(var t=0,a=r.length;e!=null&&t<a;)e=e[op(r[t++])];return t&&t==a?e:void 0}var Ot=sp,ip=me,cp=G,up=ae,$r=_,lp=se;function fp(e,r,t,a){if(!$r(e))return e;r=cp(r,e);for(var n=-1,o=r.length,s=o-1,i=e;i!=null&&++n<o;){var u=lp(r[n]),l=t;if(u==="__proto__"||u==="constructor"||u==="prototype")return e;if(n!=s){var g=i[u];l=a?a(g,u,i):void 0,l===void 0&&(l=$r(g)?g:up(r[n+1])?[]:{})}ip(i,u,l),i=i[u]}return e}var vp=fp,gp=Ot,pp=vp,dp=G;function $p(e,r,t){for(var a=-1,n=r.length,o={};++a<n;){var s=r[a],i=gp(e,s);t(i,s)&&pp(o,dp(s,e),i)}return o}var bp=$p;function hp(e,r){return e!=null&&r in Object(e)}var yp=hp,_p=G,mp=te,Cp=m,Ap=ae,Op=Ae,Sp=se;function Tp(e,r,t){r=_p(r,e);for(var a=-1,n=r.length,o=!1;++a<n;){var s=Sp(r[a]);if(!(o=e!=null&&t(e,s)))break;e=e[s]}return o||++a!=n?o:(n=e==null?0:e.length,!!n&&Op(n)&&Ap(s,n)&&(Cp(e)||mp(e)))}var xp=Tp,Pp=yp,wp=xp;function Ip(e,r){return e!=null&&wp(e,r,Pp)}var jp=Ip,Fp=bp,Ep=jp;function Lp(e,r){return Fp(e,r,function(t,a){return Ep(e,a)})}var Rp=Lp,br=N,Mp=te,Dp=m,hr=br?br.isConcatSpreadable:void 0;function Gp(e){return Dp(e)||Mp(e)||!!(hr&&e&&e[hr])}var Bp=Gp,kp=Pe,Up=Bp;function St(e,r,t,a,n){var o=-1,s=e.length;for(t||(t=Up),n||(n=[]);++o<s;){var i=e[o];r>0&&t(i)?r>1?St(i,r-1,t,a,n):kp(n,i):a||(n[n.length]=i)}return n}var Np=St,Vp=Np;function Hp(e){var r=e==null?0:e.length;return r?Vp(e,1):[]}var Kp=Hp;function zp(e,r,t){switch(t.length){case 0:return e.call(r);case 1:return e.call(r,t[0]);case 2:return e.call(r,t[0],t[1]);case 3:return e.call(r,t[0],t[1],t[2])}return e.apply(r,t)}var Wp=zp,Zp=Wp,yr=Math.max;function qp(e,r,t){return r=yr(r===void 0?e.length-1:r,0),function(){for(var a=arguments,n=-1,o=yr(a.length-r,0),s=Array(o);++n<o;)s[n]=a[r+n];n=-1;for(var i=Array(r+1);++n<r;)i[n]=a[n];return i[r]=t(s),Zp(e,this,i)}}var Tt=qp;function Jp(e){return function(){return e}}var Yp=Jp;function Xp(e){return e}var xt=Xp,Qp=Yp,_r=Rr,ed=xt,rd=_r?function(e,r){return _r(e,"toString",{configurable:!0,enumerable:!1,value:Qp(r),writable:!0})}:ed,td=rd,ad=800,nd=16,od=Date.now;function sd(e){var r=0,t=0;return function(){var a=od(),n=nd-(a-t);if(t=a,n>0){if(++r>=ad)return arguments[0]}else r=0;return e.apply(void 0,arguments)}}var id=sd,cd=td,ud=id,ld=ud(cd),Pt=ld,fd=Kp,vd=Tt,gd=Pt;function pd(e){return gd(vd(e,void 0,fd),e+"")}var wt=pd,dd=Rp,$d=wt;$d(function(e,r){return e==null?{}:dd(e,r)});var bd=_e,hd=Y;function yd(e,r,t){(t!==void 0&&!hd(e[r],t)||t===void 0&&!(r in e))&&bd(e,r,t)}var It=yd;function _d(e){return function(r,t,a){for(var n=-1,o=Object(r),s=a(r),i=s.length;i--;){var u=s[e?i:++n];if(t(o[u],u,o)===!1)break}return r}}var md=_d,Cd=md,Ad=Cd(),Od=Ad,Sd=oe,Td=O;function xd(e){return Td(e)&&Sd(e)}var Pd=xd,wd=F,Id=we,jd=O,Fd="[object Object]",Ed=Function.prototype,Ld=Object.prototype,jt=Ed.toString,Rd=Ld.hasOwnProperty,Md=jt.call(Object);function Dd(e){if(!jd(e)||wd(e)!=Fd)return!1;var r=Id(e);if(r===null)return!0;var t=Rd.call(r,"constructor")&&r.constructor;return typeof t=="function"&&t instanceof t&&jt.call(t)==Md}var Ft=Dd;function Gd(e,r){if(!(r==="constructor"&&typeof e[r]=="function")&&r!="__proto__")return e[r]}var Et=Gd,Bd=M,kd=V;function Ud(e){return Bd(e,kd(e))}var Nd=Ud,mr=It,Vd=kr,Hd=Wr,Kd=Ur,zd=Zr,Cr=te,Ar=m,Wd=Pd,Zd=Ce,qd=he,Jd=_,Yd=Ft,Xd=Dr,Or=Et,Qd=Nd;function e$(e,r,t,a,n,o,s){var i=Or(e,t),u=Or(r,t),l=s.get(u);if(l){mr(e,t,l);return}var g=o?o(i,u,t+"",e,r,s):void 0,d=g===void 0;if(d){var $=Ar(u),A=!$&&Zd(u),w=!$&&!A&&Xd(u);g=u,$||A||w?Ar(i)?g=i:Wd(i)?g=Kd(i):A?(d=!1,g=Vd(u,!0)):w?(d=!1,g=Hd(u,!0)):g=[]:Yd(u)||Cr(u)?(g=i,Cr(i)?g=Qd(i):(!Jd(i)||qd(i))&&(g=zd(u))):d=!1}d&&(s.set(u,g),n(g,u,a,o,s),s.delete(u)),mr(e,t,g)}var r$=e$,t$=Lr,a$=It,n$=Od,o$=r$,s$=_,i$=V,c$=Et;function Lt(e,r,t,a,n){e!==r&&n$(r,function(o,s){if(n||(n=new t$),s$(o))o$(e,r,s,t,Lt,a,n);else{var i=a?a(c$(e,s),o,s+"",e,r,n):void 0;i===void 0&&(i=o),a$(e,s,i)}},i$)}var u$=Lt,l$=xt,f$=Tt,v$=Pt;function g$(e,r){return v$(f$(e,r,l$),e+"")}var p$=g$,d$=Y,$$=oe,b$=ae,h$=_;function y$(e,r,t){if(!h$(t))return!1;var a=typeof r;return(a=="number"?$$(t)&&b$(r,t.length):a=="string"&&r in t)?d$(t[r],e):!1}var _$=y$,m$=p$,C$=_$;function A$(e){return m$(function(r,t){var a=-1,n=t.length,o=n>1?t[n-1]:void 0,s=n>2?t[2]:void 0;for(o=e.length>3&&typeof o=="function"?(n--,o):void 0,s&&C$(t[0],t[1],s)&&(o=n<3?void 0:o,n=1),r=Object(r);++a<n;){var i=t[a];i&&e(r,i,a,o)}return r})}var O$=A$,S$=u$,T$=O$,x$=T$(function(e,r,t){S$(e,r,t)}),P$=x$;const Gb=U(P$);function w$(e){var r=e==null?0:e.length;return r?e[r-1]:void 0}var I$=w$,j$=Ot,F$=dt;function E$(e,r){return r.length<2?e:j$(e,F$(r,0,-1))}var L$=E$,R$=G,M$=I$,D$=L$,G$=se;function B$(e,r){return r=R$(r,e),e=D$(e,r),e==null||delete e[G$(M$(r))]}var k$=B$,U$=Ft;function N$(e){return U$(e)?void 0:e}var V$=N$,H$=Qr,K$=Xr,z$=k$,W$=G,Z$=M,q$=V$,J$=wt,Y$=Kr,X$=1,Q$=2,eb=4,rb=J$(function(e,r){var t={};if(e==null)return t;var a=!1;r=H$(r,function(o){return o=W$(o,e),a||(a=o.length>1),o}),Z$(e,Y$(e),t),a&&(t=K$(t,X$|Q$|eb,q$));for(var n=r.length;n--;)z$(t,r[n]);return t}),tb=rb;const Bb=U(tb);var Sr=ne;Sr&&Sr.isDate;const ab=e=>({...e,get variables(){return this.presets[this.currentPresetName]},set variables(r){this.presets[this.currentPresetName]=r}}),nb=typeof process<"u"?process:{},ob=nb.env||{},sb=ob.NODE_ENV||"",ib=typeof __DEV__<"u"?__DEV__:!["prod","production"].includes(sb),Tr=(...e)=>(ib&&console.warn(...e),!1),cb=e=>{throw new Error(`[Vuestic] ${e}`)};let ub=null;const Rt=()=>ub,Mt=(e,r=void 0)=>{var t;const a=(t=Rt())==null?void 0:t._context.provides[e];return wr()?Bt(e,r):a??cb("You're using Vuestic composable outside Vue app. Since you registered Vuestic in multiple apps, composables can not be used outside setup function anymore.")},lb=[{prefix:"bg",property:"background-color"},{prefix:"text",property:["color","fill"]}],fb=()=>lb,vb=()=>ab({threshold:150,presets:{light:Me.light,dark:Me.dark},currentPresetName:"light"}),gb=[{name:"va-arrow-first",to:"mi-first_page"},{name:"va-arrow-last",to:"mi-last_page"},{name:"va-arrow-right",to:"mi-chevron_right"},{name:"va-arrow-left",to:"mi-chevron_left"},{name:"va-arrow-down",to:"mi-expand_more"},{name:"va-arrow-up",to:"mi-expand_less"},{name:"va-calendar",to:"mi-calendar_today"},{name:"va-delete",to:"mi-delete_outline"},{name:"va-check",to:"mi-check"},{name:"va-check-circle",to:"mi-check_circle"},{name:"va-warning",to:"mi-warning"},{name:"va-clear",to:"mi-highlight_off"},{name:"va-close",to:"mi-close"},{name:"va-loading",to:"mi-loop"},{name:"va-plus",to:"add"},{name:"va-minus",to:"remove"}],pb=[{name:"mi-{icon}",class:"material-icons",resolve:({icon:e})=>({content:e})},{name:"{icon}",class:"material-icons",resolve:({icon:e})=>({content:e})}],db=e=>(e.aliases=e.aliases||[],e.fonts=e.fonts||[],[...e.aliases,...gb,...e.fonts,...pb]),$b=()=>db({}),bb=()=>({VaIcon:{sizesConfig:{defaultSize:18,sizes:{small:14,medium:18,large:24}}},VaRating:{sizesConfig:{defaultSize:18,sizes:{small:14,medium:18,large:24}}},all:{},presets:{VaButton:{default:{backgroundOpacity:1,hoverBehavior:"mask",hoverOpacity:.15,pressedBehavior:"mask",pressedOpacity:.13},primary:{backgroundOpacity:.1,hoverBehavior:"opacity",hoverOpacity:.07,pressedBehavior:"opacity",pressedOpacity:.13},secondary:{backgroundOpacity:0,hoverBehavior:"opacity",hoverOpacity:.07,pressedBehavior:"opacity",pressedOpacity:.13},plain:{plain:!0,hoverBehavior:"mask",hoverOpacity:.15,pressedBehavior:"mask",pressedOpacity:.13},plainOpacity:{plain:!0,textOpacity:.6,hoverBehavior:"opacity",hoverOpacity:1,pressedBehavior:"opacity",pressedOpacity:.9}},VaInputWrapper:{solid:{background:"backgroundElement"},bordered:{class:"va-input-wrapper--bordered",background:"backgroundElement"}},VaCheckbox:{solid:{style:"--va-checkbox-background: var(--va-background-element)"}},VaRadio:{solid:{style:"--va-radio-background: var(--va-background-element)"}},VaMenu:{context:{cursor:!0,placement:"right-start",trigger:"right-click"}}}}),hb=()=>({search:"Search",noOptions:"Items not found",ok:"OK",cancel:"Cancel",uploadFile:"Upload file",undo:"Undo",dropzone:"Drop files here to upload",fileDeleted:"File deleted",closeAlert:"close alert",backToTop:"back to top",toggleDropdown:"toggle dropdown",carousel:"carousel",goPreviousSlide:"go previous slide",goNextSlide:"go next slide",goSlide:"go slide {index}",slideOf:"slide {index} of {length}",close:"close",openColorPicker:"open color picker",colorSelection:"color selection",colorName:"color {color}",decreaseCounter:"decrease counter",increaseCounter:"increase counter",selectAllRows:"select all rows",sortColumnBy:"sort column by {name}",selectRowByIndex:"select row {index}",resetDate:"reset date",nextPeriod:"next period",switchView:"switch view",previousPeriod:"previous period",removeFile:"remove file",reset:"reset",pagination:"pagination",goToTheFirstPage:"go to the first page",goToPreviousPage:"go to the previous page",goToSpecificPage:"go to the {page} page",goToSpecificPageInput:"enter the page number to go",goNextPage:"go next page",goLastPage:"go last page",currentRating:"current rating {value} of {max}",voteRating:"vote rating {value} of {max}",optionsFilter:"options filter",splitPanels:"split panels",movePaginationLeft:"move pagination left",movePaginationRight:"move pagination right",resetTime:"reset time",closeToast:"close toast",selectedOption:"Selected option",noSelectedOption:"Option is not selected",breadcrumbs:"breadcrumbs",counterValue:"counter value",selectedDate:"selected date",selectedTime:"selected time",progressState:"progress state",color:"color",next:"Next",back:"Previous",finish:"Finish",step:"step",progress:"progress",loading:"Loading",sliderValue:"Current slider value is {value}",switch:"Switch",inputField:"Input field"}),Dt=Symbol("GLOBAL_CONFIG"),yb=()=>({colors:vb(),icons:$b(),components:bb(),breakpoint:Kt(),i18n:hb(),colorsClasses:fb(),routerComponent:void 0}),_b=(e={})=>{const r=kt(ce(yb(),e));return{getGlobalConfig:()=>r.value,setGlobalConfig:o=>{const s=typeof o=="function"?o(r.value):o;r.value=cr(s)},mergeGlobalConfig:o=>{const s=typeof o=="function"?o(r.value):o;r.value=ce(cr(r.value),s)},globalConfig:r}},mb=e=>{var r,t;const a=((r=wr())==null?void 0:r.appContext.provides)||((t=Rt())==null?void 0:t._context.provides);if(!a)throw new Error("Vue app not found for provide");return a[Dt]=e,e};function Cb(){let e=Mt(Dt);return e||(e=_b(),mb(e)),e}const Ab=Symbol("VaAppCachePlugin"),Ob=()=>{const e=Mt(Ab);return e||{colorContrast:{}}},Sb=e=>{const r=typeof e=="function"?x(e):x(e),t=new Proxy(r,{get(a,n,o){if(typeof r.value=="object")return Ut(Reflect.get(r.value,n,o))},set(a,n,o){return Re(r.value[n])&&!Re(o)?r.value[n].value=o:r.value[n]=o,!0},deleteProperty(a,n){return Reflect.deleteProperty(r.value,n)},has(a,n){return typeof r.value!="object"?!1:Reflect.has(r.value,n)},ownKeys(){return typeof r.value!="object"?[]:Object.keys(r.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Nt(t)},C=e=>{try{return new be(e)}catch(r){throw new Error(`Color ${e} is not valid. Please, provide valid color.`,{cause:r})}},Tb=e=>/var\(--.+\)/.test(e),xb=e=>`--va-${pe(e)}`,xr=e=>Fg(e),Gt=(e,r)=>C(e).setA(r).RGBA,Pr=e=>{const{R:r,G:t,B:a}=C(e);return Math.sqrt(r*r*.241+t*t*.691+a*a*.068)},Pb=(e,r=.4)=>C(e).setA(r).RGBA,wb=(e,r=.4)=>C(e).setA(r).RGBA,Ib=(e,r=.2)=>C(e).setA(r).RGBA,jb=(e,r=.3)=>C(e).setA(r).RGBA,T=(e,r)=>{const t=C(e);return r.h&&t.setH(t.H+r.h),r.s&&t.setS(t.S+r.s),r.l&&t.setL(t.L+r.l),r.a&&t.setA(t.A+r.a),t.HSLA},Fb=(e,r)=>{const t=C(e);return r.h!==void 0&&t.setH(r.h),r.s!==void 0&&t.setS(r.s),r.l!==void 0&&t.setL(r.l),r.a!==void 0&&t.setA(r.a),t.HSLA},Eb=e=>{const r=be.toHSLA(e,!1);if(r.s<10)return T(r,{h:2,s:5,l:10});if(r.s<30)return T(r,{s:-14,l:11});if(r.h>=0&&r.h<44||r.h>=285)return T(r,{h:11,s:27,l:8});if(r.h>=44&&r.h<85)return T(r,{h:3,l:9});if(r.h>=85&&r.h<165)return T(r,{h:16,l:14});if(r.h>=165&&r.h<285)return T(r,{h:-15,s:3,l:2});throw new Error("This method should handle all colors. But it didn't for some reason.")},Lb=e=>{const r=Eb(e),t=be.toHSLA(e);return`linear-gradient(to right, ${r}, ${t})`},Rb=(e,r,t)=>{const a=Gt(r,t);return`linear-gradient(0deg, ${a}, ${a}), ${e}`},Mb=e=>/^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$|(rgb|hsl)a?\((\s*-?\d+%?\s*,){2}(\s*-?\d+%?\s*,?\s*\)?)(,\s*(0?\.\d+)?|1)?\)/.test(e.toLocaleLowerCase()),kb=e=>e?e==="transparent"?!0:C(e).A<=.1:!1,Ub=()=>{const e=Cb();if(!e)throw new Error("useColors must be used in setup function or Vuestic GlobalConfigPlugin is not registered!");const{globalConfig:r}=e,t=Sb({get:()=>r.value.colors.presets[r.value.colors.currentPresetName],set:c=>{a(c)}}),a=c=>{r.value.colors.presets[r.value.colors.currentPresetName]={...r.value.colors.variables,...c}},n=()=>t,o=(c,p,b)=>{if(p||(p=t.primary),c==="transparent")return"#ffffff00";if(c==="currentColor")return c;if(c!=null&&c.startsWith("on")){const Le=c.slice(2);if(t[xr(Le)])return o($(o(Le)),void 0,b)}c||(c=o(p));const h=t[c]||t[xr(c)];return h?b?`var(${xb(c)})`:h:Mb(c)||b&&Tb(c)?c:(Tr(`'${c}' is not a proper color! Use HEX or default color themes
      names (https://vuestic.dev/en/styles/colors#default-color-themes)`),o(p))},s=c=>x({get(){return o(c)},set(p){a({[c]:p})}}),i=(c,p="va")=>Object.keys(c).filter(b=>c[b]!==void 0).reduce((b,h)=>(b[`--${p}-${pe(h)}`]=o(c[h],void 0,!0),b[`--${p}-on-${pe(h)}`]=o($(o(c[h])),void 0,!0),b),{}),u=Ob(),l=c=>typeof c!="string"?Pr(c):(u.colorContrast[c]||(u.colorContrast[c]=Pr(c)),u.colorContrast[c]),g=x(()=>l(o("textPrimary"))>255/2?"textInverted":"textPrimary"),d=x(()=>l(o("textPrimary"))>255/2?"textPrimary":"textInverted"),$=(c,p,b)=>{const h=`on${Vt(String(c))}`;return t[h]?t[h]:(p=p||g.value,b=b||d.value,l(c)>r.value.colors.threshold?p:b)},A=x({get:()=>r.value.colors.currentPresetName,set:c=>{B(c)}}),w=x(()=>r.value.colors.presets),B=c=>{if(r.value.colors.currentPresetName=c,!r.value.colors.presets[c])return Tr(`Preset ${c} does not exist`)};return{colors:t,currentPresetName:A,presets:w,applyPreset:B,setColors:a,getColors:n,getColor:o,getComputedColor:s,getBoxShadowColor:Pb,getBoxShadowColorFromBg:wb,getHoverColor:Ib,getFocusColor:jb,getGradientBackground:Lb,getTextColor:$,shiftHSLAColor:T,setHSLAColor:Fb,colorsToCSSVariable:i,colorToRgba:Gt,getStateMaskGradientBackground:Rb}};export{Ub as a,Rt as g,kb as i,Gb as m,Bb as o,Cb as u,Tr as w};
//# sourceMappingURL=useColors-22f9e10b.js.map
