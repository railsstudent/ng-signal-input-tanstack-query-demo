import{L as l,M as h,q as p}from"./chunk-IPNFZVCL.js";import{a as c,b as r}from"./chunk-5VTWB77A.js";var q=(()=>{let n=class n{constructor(){this.cart=h([]),this.promoCode=h(""),this.discountPercent=l(()=>{let e=this.promoCode();return e==="DEVFESTHK2023"?.1:e==="ANGULARNATION"?.2:0}),this.summary=l(()=>{let e=this.cart().reduce(({quantity:u,subtotal:f},d)=>{let m=u+d.quantity,I=f+d.price*d.quantity;return{quantity:m,subtotal:I}},{quantity:0,subtotal:0}),{subtotal:o,quantity:s}=e,t=o*this.discountPercent(),i=o-t;return{quantity:s,subtotal:o.toFixed(2),discount:t.toFixed(2),total:i.toFixed(2)}})}addItem(e,o){let s=this.cart().findIndex(t=>t.id===e.id);console.log("addItem",s),s>=0?this.cart.update(t=>{let i=t[s],u=i.quantity+o;return t.splice(s,1,r(c({},i),{quantity:u})),t}):this.cart.update(t=>[...t,r(c({},e),{quantity:o})])}deleteItem(e){this.cart.update(o=>o.filter(s=>s.id!==e))}updateItem(e,o){o<=0?this.deleteItem(e):this.cart.update(s=>s.map(t=>t.id===e?r(c({},t),{quantity:o}):t))}};n.\u0275fac=function(o){return new(o||n)},n.\u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"});let a=n;return a})();export{q as a};
