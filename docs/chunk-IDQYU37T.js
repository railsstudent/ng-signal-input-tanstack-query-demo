import{a as L,b as Q}from"./chunk-FLOSMIHW.js";import{d as B,e as U,g as $}from"./chunk-35PPAQLC.js";import{a as G,b as z,c as H,d as J,e as W,f as X,g as Y,h as Z,i as R,j as ee,k as te}from"./chunk-FSMFIZ3J.js";import{$ as V,K as A,L as S,N as l,V as p,X as g,Z as u,_ as N,aa as o,ba as n,ca as D,fa as f,ga as _,ha as O,ia as j,ja as k,ka as M,la as c,ma as x,n as h,na as I,pa as b,s as C,sa as E,t as P,ta as T,u as v,ya as w}from"./chunk-7PXBTGXQ.js";import{a as q,b as F,d as K}from"./chunk-5VTWB77A.js";var re=["f"];function ae(e,i){e&1&&(o(0,"div",13),c(1," Title is a required field "),n())}function de(e,i){e&1&&(o(0,"div",13),c(1," Minimum length of title is 3 "),n())}function ce(e,i){e&1&&(o(0,"div",13),c(1," Description is a required field "),n())}function se(e,i){e&1&&(o(0,"div",13),c(1," Price must be at least 0.1 "),n())}function le(e,i){e&1&&(o(0,"div",13),c(1," Price is a required field "),n())}function pe(e,i){e&1&&(o(0,"p"),c(1,"Adding new product"),n())}function ue(e,i){if(e&1&&(o(0,"p"),c(1),n()),e&2){let y=_();l(),x(y.mutation.error().message)}}function me(e,i){e&1&&(o(0,"p"),c(1,"New product created"),n())}var ie=(()=>{let i=class i{constructor(){this.category=h.required(),this.categoryService=C(Q),this.productService=C($),this.title=S(""),this.description=S(""),this.price=S(1),this.viewModel=A(()=>({title:this.title(),price:this.price(),description:this.description(),category:this.category(),image:"https://via.assets.so/img.jpg?w=100&h=100&tc=yellow&bg=blue&t=product"})),this.categoryProductsKey=["category_products"],this.mutation=B(r=>({mutationFn:a=>this.categoryService.addProduct(a),onMutate:a=>K(this,null,function*(){yield r.cancelQueries({queryKey:this.categoryProductsKey}),yield r.cancelQueries({queryKey:this.categoryKey});let t=F(q({},a),{id:this.productService.getNewProductId()}),d=this.optimisticUpdateCategoryProducts(r,t);return{previousAllProducts:this.optimisticUpdateAllProducts(r,t),previousCategoryProducts:d}}),onSettled:(a,t,d,s)=>{let m=s?.previousCategoryProducts,ne=s?.previousAllProducts;t?(r.setQueryData(this.categoryKey,m),r.setQueryData(this.categoryProductsKey,ne)):this.resetViewModel()}}))}get categoryKey(){return["categories",this.category()]}optimisticUpdateAllProducts(r,a){let t=r.getQueryData(this.categoryProductsKey);if(t){let d=t.map(s=>s.category===this.category()?{category:s.category,products:[...s.products,a]}:s);r.setQueryData(this.categoryProductsKey,d)}return t}optimisticUpdateCategoryProducts(r,a){let t=r.getQueryData(this.categoryKey);return t&&r.setQueryData(this.categoryKey,d=>[...d,a]),t}resetViewModel(){this.title.set(""),this.description.set(""),this.price.set(1);for(let r of Object.keys(this.form.controls))this.form.controls[r].markAsPristine()}createProduct(){this.mutation.mutate(this.viewModel())}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=v({type:i,selectors:[["app-create-product"]],viewQuery:function(a,t){if(a&1&&O(re,7),a&2){let d;j(d=k())&&(t.form=d.first)}},inputs:{category:[P.SignalBased,"category"]},standalone:!0,features:[b],decls:34,vars:14,consts:[[3,"ngSubmit"],["f","ngForm"],["for","name"],["name","title","id","title","required","","minlength","3",3,"ngModel","disabled","ngModelChange"],["titleCtrl","ngModel"],["class","form-errors"],["for","description"],["name","description","id","description","rows","5","cols","50","required","",3,"ngModel","disabled","ngModelChange"],["descriptionCtrl","ngModel"],["for","price"],["name","price","id","price","type","number","min","0.1","required","",3,"ngModel","disabled","ngModelChange"],["priceCtrl","ngModel"],["type","submit",3,"disabled"],[1,"form-errors"]],template:function(a,t){if(a&1&&(o(0,"h3"),c(1),E(2,"titlecase"),n(),o(3,"form",0,1),f("ngSubmit",function(){return t.createProduct()}),o(5,"div")(6,"label",2)(7,"span"),c(8,"Title: "),n(),o(9,"input",3,4),f("ngModelChange",function(s){return t.title.set(s)}),n()(),p(11,ae,2,0,"div",5)(12,de,2,0),n(),o(13,"div")(14,"label",6)(15,"span"),c(16,"Description: "),n(),o(17,"textarea",7,8),f("ngModelChange",function(s){return t.description.set(s)}),c(19,"      "),n()(),p(20,ce,2,0,"div",5),n(),o(21,"div")(22,"label",9)(23,"span"),c(24,"Price: "),n(),o(25,"input",10,11),f("ngModelChange",function(s){return t.price.set(s)}),n()(),p(27,se,2,0,"div",5)(28,le,2,0),n(),o(29,"button",12),c(30,"Submit"),n(),p(31,pe,2,0,"p")(32,ue,2,1)(33,me,2,0),n()),a&2){let d=M(10),s=M(18),m=M(26);l(),I("Create new product in ",T(2,12,t.category()),""),l(8),g("ngModel",t.title())("disabled",t.mutation.isPending()),l(2),u(11,d.errors!=null&&d.errors.required&&d.dirty?11:d.errors!=null&&d.errors.minlength&&d.dirty?12:-1),l(6),g("ngModel",t.description())("disabled",t.mutation.isPending()),l(3),u(20,s.errors!=null&&s.errors.required&&s.dirty?20:-1),l(5),g("ngModel",t.price())("disabled",t.mutation.isPending()),l(2),u(27,m.errors!=null&&m.errors.min&&m.dirty?27:m.errors!=null&&m.errors.required&&m.dirty?28:-1),l(2),g("disabled",t.form.invalid||t.mutation.isPending()),l(2),u(31,t.mutation.isPending()?31:t.mutation.isError()?32:t.mutation.isSuccess()?33:-1)}},dependencies:[te,X,G,Y,z,H,R,ee,Z,W,J,w],styles:["form[_ngcontent-%COMP%]{padding:.75rem .5rem;border:1px solid black}form[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-bottom:.5rem}label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-block;width:20%}"],changeDetection:0});let e=i;return e})();function ge(e,i){e&1&&(o(0,"p"),c(1,"Loading..."),n())}function ye(e,i){e&1&&(o(0,"p"),c(1,"Error"),n())}var Ce=(e,i)=>i.id;function fe(e,i){if(e&1&&D(0,"app-product",3),e&2){let y=i.$implicit;g("product",y)}}function _e(e,i){if(e&1&&(o(0,"div",2),N(1,fe,1,1,"app-product",3,Ce),n()),e&2){let y=_();l(),V(y)}}function he(e,i){e&1&&(o(0,"p"),c(1,"Category does not have products"),n())}function Pe(e,i){e&1&&p(0,_e,3,0,"div",1)(1,he,2,0),e&2&&u(0,i.length>0?0:1)}function ve(e,i){if(e&1&&p(0,Pe,2,1),e&2){let y=_(),r;u(0,(r=y.productsQuery.data())?0:-1,r)}}var Ue=(()=>{let i=class i{constructor(){this.categoryService=C(Q),this.category=h(""),this.productsQuery=U(()=>({queryKey:["categories",this.category()],queryFn:()=>this.categoryService.getCategory(this.category())}))}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=v({type:i,selectors:[["app-category-products"]],inputs:{category:[P.SignalBased,"category"]},standalone:!0,features:[b],decls:7,vars:5,consts:[[3,"category"],["class","products"],[1,"products"],[3,"product"]],template:function(a,t){a&1&&(D(0,"app-create-product",0),o(1,"h2"),c(2),E(3,"titlecase"),n(),p(4,ge,2,0,"p")(5,ye,2,0)(6,ve,1,1)),a&2&&(g("category",t.category()),l(2),x(T(3,3,t.category())),l(2),u(4,t.productsQuery.isPending()?4:t.productsQuery.isError()?5:t.productsQuery.isSuccess()?6:-1))},dependencies:[L,w,ie],styles:["div.products[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-content:stretch}app-product[_ngcontent-%COMP%]{flex-basis:250px;height:300px;margin-bottom:1rem}"],changeDetection:0});let e=i;return e})();export{Ue as CategoryProductsComponent};
