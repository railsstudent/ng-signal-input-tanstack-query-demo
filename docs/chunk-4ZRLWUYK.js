import{a as v,b as D}from"./chunk-OXVNYH3J.js";import{e as x,g as M}from"./chunk-ACK5G3GU.js";import{$ as _,O as p,W as m,Y as y,_ as l,aa as C,ba as i,ca as r,da as u,ha as P,ma as c,na as h,qa as f,t as g,ta as S,ua as F,v as s,za as T}from"./chunk-IPNFZVCL.js";import"./chunk-5VTWB77A.js";function w(t,e){t&1&&(i(0,"p"),c(1,"Loading featured products..."),r())}var O=(t,e)=>e.id;function $(t,e){if(t&1&&u(0,"app-product",2),t&2){let a=e.$implicit;y("product",a)}}function b(t,e){t&1&&(i(0,"div",1),_(1,$,1,1,"app-product",3,O),r()),t&2&&(p(),C(e))}function j(t,e){if(t&1&&(i(0,"h2"),c(1,"Featured Products"),r(),m(2,b,3,0,"div",0),u(3,"hr")),t&2){let a=P(),n;p(2),l(2,(n=a.featuredProductsQuery.data())?2:-1,n)}}var Q=(()=>{let e=class e{constructor(){this.productService=g(M),this.featuredProductsQuery=x(()=>({queryKey:["feature_products"],queryFn:()=>this.productService.getFeaturedProducts()}))}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["app-feature-products"]],standalone:!0,features:[f],decls:2,vars:1,consts:[["class","featured"],[1,"featured"],[1,"item",3,"product"],["class","item",3,"product"]],template:function(o,d){o&1&&m(0,w,2,0,"p")(1,j,4,1),o&2&&l(0,d.featuredProductsQuery.isPending()?0:d.featuredProductsQuery.isSuccess()?1:-1)},dependencies:[v],styles:["h2[_ngcontent-%COMP%], hr[_ngcontent-%COMP%]{margin-bottom:.5rem}div.featured[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-bottom:.75rem}div.featured[_ngcontent-%COMP%] > .item[_ngcontent-%COMP%]{flex-basis:250px}"],changeDetection:0});let t=e;return t})();function q(t,e){t&1&&(i(0,"p"),c(1,"Loading..."),r())}function k(t,e){t&1&&(i(0,"p"),c(1,"Error"),r())}var K=(t,e)=>e.category,B=(t,e)=>e.id;function I(t,e){if(t&1&&u(0,"app-product",1),t&2){let a=e.$implicit;y("product",a)}}function z(t,e){if(t&1&&(i(0,"h3"),c(1),S(2,"titlecase"),r(),i(3,"div",0),_(4,I,1,1,"app-product",1,B),r()),t&2){let a=e.$implicit;p(),h(F(2,1,a.category)),p(3),C(a.products)}}function A(t,e){t&1&&_(0,z,6,3,null,null,K),t&2&&C(e)}function G(t,e){if(t&1&&m(0,A,2,0),t&2){let a=P(),n;l(0,(n=a.categoryProductsQuery.data())?0:-1,n)}}var L=(()=>{let e=class e{constructor(){this.categoryService=g(D),this.categoryProductsQuery=x(()=>({queryKey:["category_products"],queryFn:()=>this.categoryService.getCategoryProducts()}))}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["app-product-list"]],standalone:!0,features:[f],decls:6,vars:1,consts:[[1,"products"],[3,"product"]],template:function(o,d){o&1&&(i(0,"h2"),c(1,"Catalogue"),r(),i(2,"div"),m(3,q,2,0,"p")(4,k,2,0)(5,G,1,1),r()),o&2&&(p(3),l(3,d.categoryProductsQuery.isPending()?3:d.categoryProductsQuery.isError()?4:d.categoryProductsQuery.isSuccess()?5:-1))},dependencies:[v,T],styles:["div.products[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-content:stretch}app-product[_ngcontent-%COMP%]{flex-basis:250px;height:300px;margin-bottom:1rem}"],changeDetection:0});let t=e;return t})();var ct=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["app-product-catalogue"]],standalone:!0,features:[f],decls:2,vars:0,template:function(o,d){o&1&&u(0,"app-feature-products")(1,"app-product-list")},dependencies:[Q,L],encapsulation:2,changeDetection:0});let t=e;return t})();export{ct as ProductCatalogueComponent};
