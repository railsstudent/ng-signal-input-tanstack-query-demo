import{g as R}from"./chunk-35PPAQLC.js";import{Ba as k,H as b,Ja as L,N as p,V as S,X as u,Z as _,aa as n,ba as i,c as s,ca as O,e as h,ga as f,i as C,la as r,ma as l,n as x,na as E,p as y,pa as M,ra as I,s as m,t as P,u as v}from"./chunk-7PXBTGXQ.js";function j(e,t){if(e&1&&r(0),e&2){let d=f();E(" ",d.product().title," ")}}var A=e=>["/products",e];function G(e,t){if(e&1&&(n(0,"a",9),r(1),i()),e&2){let d=f();u("routerLink",I(2,A,d.product().id)),p(),l(d.product().title)}}var Y=(()=>{let t=class t{constructor(){this.product=x.required()}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=v({type:t,selectors:[["app-product"]],inputs:{product:[P.SignalBased,"product"]},standalone:!0,features:[M],decls:19,vars:4,consts:[[1,"container"],[1,"image-container"],["alt","image","width","100","height","100",3,"src"],["for","id"],["id","id","name","id"],["for","name"],["id","name","name","name"],["for","price"],["id","price","name","price"],[3,"routerLink"]],template:function(o,c){o&1&&(n(0,"div",0)(1,"div",1),O(2,"img",2),i(),n(3,"label",3)(4,"span",4),r(5,"Id: "),i(),n(6,"span"),r(7),i()(),n(8,"label",5)(9,"span",6),r(10,"Title: "),i(),n(11,"span"),S(12,j,1,1)(13,G,2,4),i()(),n(14,"label",7)(15,"span",8),r(16,"Price: "),i(),n(17,"span"),r(18),i()()()),o&2&&(p(2),u("src",c.product().image,b),p(5),l(c.product().id),p(5),_(12,c.product().id>20?12:13),p(6),l(c.product().price))},dependencies:[L],styles:["div.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;border:1px solid black;padding:.5rem;height:calc(100% - 1rem)}div.image-container[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;margin-bottom:.5rem}label[_ngcontent-%COMP%]:first-of-type{margin-bottom:10px}label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-block}label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:first-of-type{color:#aaa;width:20%}label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:nth-of-type(2){width:80%}"],changeDetection:0});let e=t;return e})();var q="https://fakestoreapi.com/products",T="https://fakestoreapi.com/products/categories",z="https://fakestoreapi.com/products/category",tt=(()=>{let t=class t{constructor(){this.httpClient=m(k),this.productService=m(R),this.categories$=s(this.httpClient.get(T))}getCategoryProducts(){let o=this.httpClient.get(T).pipe(C(this.httpClient.get(q)),h(([c,w])=>c.reduce((F,g)=>{let $=w.filter(D=>D.category===g);return F.concat({category:g,products:$})},[])));return s(o)}getCategory(a){return s(this.httpClient.get(`${z}/${a}`))}addProduct(a){return this.productService.createProduct(a)}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{Y as a,tt as b};
