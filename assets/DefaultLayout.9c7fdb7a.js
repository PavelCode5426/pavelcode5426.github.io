import{d as p,o as _,c,a as n,r as g,t as u,u as i,b as o,e as b,w as m,n as x,F as f,f as y,s as C,g as k,h as w,i as S,T as F}from"./index.9850e6b3.js";import{_ as r,a as L,p as B,b as D}from"./LandingPage.674cb906.js";const T={class:"bottom_footer border_top_tran"},N={class:"container"},I={class:"row"},R={class:"col-12"},V={class:"copyright m-0 text-center"},E=p({__name:"BottomFooter",setup(s){const t=new Date().getFullYear();return(e,a)=>(_(),c("div",T,[n("div",N,[n("div",I,[g(e.$slots,"default",{},()=>[n("div",R,[n("p",V," \xA9 "+u(i(t))+" Todos los Derechos Reservados ",1)])])])])]))}}),H={},Y={class:"footer_dark bg_black4"},j={class:"container"},z={class:"row"},A={class:"col-12"};function M(s,t){const e=E;return _(),c("footer",Y,[n("div",j,[n("div",z,[n("div",A,[o(e)])])])])}var P=r(H,[["render",M]]);const q={},G={class:"page-content"};function J(s,t){const e=L,a=b("router-view"),l=P;return _(),c("div",G,[o(a,null,{default:m(()=>[o(e)]),_:1}),o(l)])}var K=r(q,[["render",J]]);const O={class:"contact_info contact_info_light list_none"},Q=n("span",{class:"ti-mobile"},null,-1),U=["href"],W=n("span",{class:"ti-email"},null,-1),X=["href"],Z=p({__name:"ContactInfo",setup(s){const{phone:t,email:e}=B,a=t.replace(" ","");return(l,d)=>(_(),c("ul",O,[n("li",null,[Q,n("a",{href:`tel:${i(a)}`},u(i(t)),9,U)]),n("li",null,[W,n("a",{href:`mailto:${i(e)}`},u(i(e)),9,X)])]))}}),nn=["href"],en=p({__name:"NavLink",props:{href:null,customClass:null,name:null},setup(s){return(t,e)=>(_(),c("li",null,[n("a",{class:x(["nav-link page-scroll",s.customClass]),href:s.href},u(s.name),11,nn)]))}});var on="/assets/images/logotipo-250x250.png";const tn={},sn={class:"navbar-brand page-scroll"},an=n("img",{class:"logo_light",src:on},null,-1),_n=[an];function cn(s,t){return _(),c("a",sn,_n)}var h=r(tn,[["render",cn]]);const rn={},ln=n("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[n("span",{class:"ion-android-menu"})],-1),dn={id:"navbarSupportedContent",class:"collapse navbar-collapse justify-content-end"},un={class:"navbar-nav"},pn={class:"bottom_content"};function mn(s,t){const e=h,a=en,l=Z,d=D;return _(),c(f,null,[ln,n("div",dn,[o(e),n("ul",un,[o(a,{name:"Inicio",href:"#home"}),o(a,{name:"Sobre mi",href:"#about"}),o(a,{name:"Habilidades",href:"#skill"}),o(a,{name:"Portafolio",href:"#portofolio"}),o(a,{name:"Resumen",href:"#resume"})]),n("div",pn,[o(l),o(d)])])],64)}var fn=r(rn,[["render",mn]]);const hn={},vn={class:"header_wrap fixed-top light_skin hover_menu_style3 sidebar_menu side_menu_mobile transparent-header"},$n={class:"container"},gn={class:"navbar navbar-expand-lg"};function bn(s,t){const e=h,a=fn;return _(),c("header",vn,[n("div",$n,[n("nav",gn,[o(e),o(a)])])])}var xn=r(hn,[["render",bn]]);const yn={},Cn={class:"loader"},kn=n("div",{class:"loader-inner ball-scale"},[n("div"),n("div"),n("div")],-1),wn=[kn];function Sn(s,t){return _(),c("div",Cn,wn)}var Fn=r(yn,[["render",Sn]]);const Ln={},Bn={class:"preloader"};function Dn(s,t){const e=Fn;return _(),c("div",Bn,[o(e)])}var Tn=r(Ln,[["render",Dn]]);const Nn={isLoading:!0},In=y("site",{state:()=>Nn});const En=p({__name:"DefaultLayout",setup(s){const t=In(),{isLoading:e}=C(t);return k(()=>{window.addEventListener("load",()=>e.value=!1)}),(a,l)=>{const d=Tn,v=xn,$=K;return _(),c(f,null,[o(F,null,{default:m(()=>[i(e)?(_(),w(d,{key:0})):S("",!0)]),_:1}),o(v),o($)],64)}}});export{En as default};
