import{a as M,i as S}from"./chunk-RZKZPLRS.js";import{$a as l,Ka as d,L as f,N as h,Pa as i,Qa as o,Ra as P,T as C,V as y,W as b,_a as a,eb as x,gb as O,n as s,o as u,pa as v,w as g,ya as c}from"./chunk-RVDBUE2L.js";var w=e=>["/products",e],A=(()=>{let t=class t{constructor(){this.product=f.required()}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=b({type:t,selectors:[["app-product"]],inputs:{product:[y.SignalBased,"product"]},standalone:!0,features:[x],decls:19,vars:7,consts:[[1,"container"],[1,"image-container"],["alt","image","width","100","height","100",3,"src"],["for","id"],["id","id","name","id"],["for","name"],["id","name","name","name"],[3,"routerLink"],["for","price"],["id","price","name","price"]],template:function(n,r){n&1&&(i(0,"div",0)(1,"div",1),P(2,"img",2),o(),i(3,"label",3)(4,"span",4),a(5,"Id: "),o(),i(6,"span"),a(7),o()(),i(8,"label",5)(9,"span",6),a(10,"Title: "),o(),i(11,"span")(12,"a",7),a(13),o()()(),i(14,"label",8)(15,"span",9),a(16,"Price: "),o(),i(17,"span"),a(18),o()()()),n&2&&(c(2),d("src",r.product().image,v),c(5),l(r.product().id),c(5),d("routerLink",O(5,w,r.product().id)),c(),l(r.product().title),c(5),l(r.product().price))},dependencies:[S],styles:["div.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;border:1px solid black;padding:.5rem;height:calc(100% - 1rem)}div.image-container[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;margin-bottom:.5rem}label[_ngcontent-%COMP%]:first-of-type{margin-bottom:10px}label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-block}label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:first-of-type{color:#aaa;width:20%}label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:nth-of-type(2){width:80%}"],changeDetection:0});let e=t;return e})();var F="https://fakestoreapi.com/products",E="https://fakestoreapi.com/products/categories",$="https://fakestoreapi.com/products/category",V=(()=>{let t=class t{constructor(){this.httpClient=C(M),this.categories$=s(this.httpClient.get(E))}getCategoryProducts(){let n=this.httpClient.get(E).pipe(g(this.httpClient.get(F)),u(([r,k])=>r.reduce((I,m)=>{let L=k.filter(R=>R.category===m);return I.concat({category:m,products:L})},[])));return s(n)}getCategory(p){return s(this.httpClient.get(`${$}/${p}`))}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=h({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{A as a,V as b};
