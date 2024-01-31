import{a as Z,b as tt,c as et,f as it,g as ot}from"./chunk-ACK5G3GU.js";import{B as A,Ba as L,Da as V,Ea as U,F as B,Fa as z,Ga as Y,H as M,Ha as G,Ia as v,Ja as J,Ka as K,La as W,Ma as X,O as I,Q as E,V as N,W as g,Y as q,_ as P,ba as l,ca as s,da as h,e as T,g as b,ia as _,ja as k,ka as j,m as O,ma as c,q as x,qa as d,ra as H,t as p,ta as D,u as F,ua as S,v as m,wa as R,y as Q,ya as $}from"./chunk-IPNFZVCL.js";import{E as at,ba as pt,d as f,t as nt,u as rt,w as st}from"./chunk-GF5JOMYG.js";import"./chunk-5VTWB77A.js";var lt=[{path:"products",loadComponent:()=>import("./chunk-4ZRLWUYK.js").then(t=>t.ProductCatalogueComponent),title:"Product list"},{path:"products/:id",loadComponent:()=>import("./chunk-ADN6K4PL.js").then(t=>t.ProductDetailsComponent),title:"Product"},{path:"my-cart",loadComponent:()=>import("./chunk-N63XZJBA.js").then(t=>t.CartComponent),title:"My shopping cart"},{path:"categories/:category",loadComponent:()=>import("./chunk-G7RQGFPS.js").then(t=>t.CategoryProductsComponent),title:"Category"},{path:"",pathMatch:"full",redirectTo:"products"},{path:"**",redirectTo:"products"}];var ut=(()=>{let e=class e extends v{constructor(){super(...arguments),this.title=p(z),this.productService=p(ot)}updateTitle(i){let n=this.buildTitle(i)||"",r=i.root.firstChild?.params.id||"";r?this.productService.getProduct(r).then(a=>{let u=a?.title||"";this.title.setTitle(`Product - ${u}`)}):this.title.setTitle(n)}};e.\u0275fac=(()=>{let i;return function(r){return(i||(i=A(e)))(r||e)}})(),e.\u0275prov=x({token:e,factory:e.\u0275fac});let t=e;return t})();var ct={providers:[V(),W(lt,X()),it(new tt({defaultOptions:{queries:{staleTime:1/0}}})),{provide:v,useClass:ut}]};var mt=class{#t;#e;#o;#i;#n=!1;#u;#r;#s;#a;#p;#l;#c;constructor(t){let{client:e,queryFlavor:o,version:i,onlineManager:n,buttonPosition:r,position:y,initialIsOpen:a,errorTypes:u,styleNonce:yt}=t;this.#t=f(e),this.#o=o,this.#i=i,this.#e=n,this.#u=yt,this.#r=f(r),this.#s=f(y),this.#a=f(a),this.#p=f(u)}setButtonPosition(t){this.#r[1](t)}setPosition(t){this.#s[1](t)}setInitialIsOpen(t){this.#a[1](t)}setErrorTypes(t){this.#p[1](t)}setClient(t){this.#t[1](t)}mount(t){if(this.#n)throw new Error("Devtools is already mounted");let e=at(()=>{let[o]=this.#r,[i]=this.#s,[n]=this.#a,[r]=this.#p,[y]=this.#t,a;this.#l?a=this.#l:(a=st(()=>import("./chunk-QDZH3DGF.js")),this.#l=a),pt(this.#u);let u=this;return nt(a,rt({get queryFlavor(){return u.#o},get version(){return u.#i},get onlineManager(){return u.#e}},{get client(){return y()},get buttonPosition(){return o()},get position(){return i()},get initialIsOpen(){return n()},get errorTypes(){return r()}}))},t);this.#n=!0,this.#c=e}unmount(){if(!this.#n)throw new Error("Devtools is not mounted");this.#c?.(),this.#n=!1}};var vt=["ref"],dt=(()=>{class t{initialIsOpen;buttonPosition;position;client;styleNonce;errorTypes;ref;#t;#e=L(p(M));#o=this.#e?et({optional:!0}):null;ngOnChanges(o){this.#t&&(o.client&&this.#t.setClient(this.#i()),o.buttonPosition&&this.buttonPosition!==void 0&&this.#t.setButtonPosition(this.buttonPosition),o.position&&this.position!==void 0&&this.#t.setPosition(this.position),o.initialIsOpen&&this.initialIsOpen!==void 0&&this.#t.setInitialIsOpen(this.initialIsOpen),o.errorTypes&&this.errorTypes!==void 0&&this.#t.setErrorTypes(this.errorTypes))}ngAfterViewInit(){if(!this.#e)return;let o=new mt({client:this.#i(),queryFlavor:"Angular Query",version:"5",onlineManager:Z,buttonPosition:this.buttonPosition,position:this.position,initialIsOpen:this.initialIsOpen,errorTypes:this.errorTypes,styleNonce:this.styleNonce});o.mount(this.ref.nativeElement),this.#t=o}ngOnDestroy(){this.#t?.unmount()}#i(){let o=this.client??this.#o;if(!o)throw new Error("You must either provide a client via `provideAngularQuery` or pass it to the `client` attribute of `<angular-query-devtools>`.");return o}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=m({type:t,selectors:[["angular-query-devtools"]],viewQuery:function(i,n){if(i&1&&_(vt,5),i&2){let r;k(r=j())&&(n.ref=r.first)}},hostAttrs:["ngSkipHydration","true"],inputs:{initialIsOpen:[F.HasDecoratorInputTransform,"initialIsOpen","initialIsOpen",R],buttonPosition:"buttonPosition",position:"position",client:"client",styleNonce:"styleNonce",errorTypes:"errorTypes"},standalone:!0,features:[N,Q,d],decls:2,vars:0,consts:[[1,"tsqd-parent-container"],["ref",""]],template:function(i,n){i&1&&h(0,"div",0,1)},encapsulation:2,changeDetection:0})}return t})();var C=(...t)=>{B(C);let e=p(J),o=p(E);return e.events.pipe(b(i=>i instanceof Y),T(i=>i),T(({url:i,urlAfterRedirects:n})=>!t.includes(i)&&!t.includes(n)),O(()=>o.markForCheck()))};function Ct(t,e){t&1&&(l(0,"a",0),c(1,"Home"),s())}function Tt(t,e){t&1&&(l(0,"span"),c(1,"\xA0"),s())}var It=()=>["my-cart"];function Pt(t,e){t&1&&(l(0,"a",1),c(1,"View Cart"),s()),t&2&&q("routerLink",H(1,It))}function Dt(t,e){t&1&&(l(0,"span"),c(1,"\xA0"),s())}var ft=(()=>{let e=class e{constructor(){this.isShowHomeButton$=C("/","/products"),this.isShowViewCartButton$=C("/my-cart")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["app-nav-bar"]],standalone:!0,features:[d],decls:7,vars:6,consts:[["routerLink","/"],[3,"routerLink"]],template:function(n,r){n&1&&(l(0,"div"),g(1,Ct,2,0,"a",0),D(2,"async"),g(3,Tt,2,0)(4,Pt,2,2,"a",1),D(5,"async"),g(6,Dt,2,0),s()),n&2&&(I(),P(1,S(2,2,r.isShowHomeButton$)?1:3),I(3),P(4,S(5,4,r.isShowViewCartButton$)?4:6))},dependencies:[K,$],styles:["div[_ngcontent-%COMP%]{background:#daa520;height:50px;padding:.25rem;margin-bottom:1rem;display:flex;justify-content:space-between;align-items:center}"],changeDetection:0});let t=e;return t})();var ht=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[d],decls:6,vars:0,consts:[["initialIsOpen","true"]],template:function(n,r){n&1&&(h(0,"angular-query-devtools",0),l(1,"div")(2,"h2"),c(3,"Angular Tanstack Query Demo"),s(),h(4,"app-nav-bar")(5,"router-outlet"),s())},dependencies:[G,dt,ft],styles:["div[_ngcontent-%COMP%]{padding:.75rem}h2[_ngcontent-%COMP%]{margin-bottom:.75rem}"],changeDetection:0});let t=e;return t})();U(ht,ct).catch(t=>console.error(t));
