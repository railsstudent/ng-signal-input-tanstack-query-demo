var p=Object.defineProperty,q=Object.defineProperties;var r=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;var l=(b,a)=>(a=Symbol[b])?a:Symbol.for("Symbol."+b);var m=(b,a,c)=>a in b?p(b,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):b[a]=c,t=(b,a)=>{for(var c in a||={})n.call(a,c)&&m(b,c,a[c]);if(j)for(var c of j(a))o.call(a,c)&&m(b,c,a[c]);return b},u=(b,a)=>q(b,r(a));var v=(b,a)=>{var c={};for(var d in b)n.call(b,d)&&a.indexOf(d)<0&&(c[d]=b[d]);if(b!=null&&j)for(var d of j(b))a.indexOf(d)<0&&o.call(b,d)&&(c[d]=b[d]);return c};var w=(b,a,c)=>new Promise((d,g)=>{var e=f=>{try{i(c.next(f))}catch(k){g(k)}},h=f=>{try{i(c.throw(f))}catch(k){g(k)}},i=f=>f.done?d(f.value):Promise.resolve(f.value).then(e,h);i((c=c.apply(b,a)).next())}),s=function(b,a){this[0]=b,this[1]=a};var x=b=>{var a=b[l("asyncIterator")],c=!1,d,g={};return a==null?(a=b[l("iterator")](),d=e=>g[e]=h=>a[e](h)):(a=a.call(b),d=e=>g[e]=h=>{if(c){if(c=!1,e==="throw")throw h;return h}return c=!0,{done:!1,value:new s(new Promise(i=>{var f=a[e](h);if(!(f instanceof Object))throw TypeError("Object expected");i(f)}),1)}}),g[l("iterator")]=()=>g,d("next"),"throw"in a?d("throw"):g.throw=e=>{throw e},"return"in a&&d("return"),g};export{t as a,u as b,v as c,w as d,x as e};
