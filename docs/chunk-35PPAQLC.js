import{B as bt,Ba as Ot,C as gt,D as Y,E as Z,F as vt,K as L,L as X,M as N,Q as H,R as tt,b as W,c as z,d as ct,e as J,f as lt,h as ft,j as dt,k as pt,p as yt,r as mt,s as Q}from"./chunk-7PXBTGXQ.js";import{a as o,b as l,c as k,d as x}from"./chunk-5VTWB77A.js";var F=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}};var R=typeof window>"u"||"Deno"in window;function O(){}function Ft(t,e){return typeof t=="function"?t(e):t}function T(t){return typeof t=="number"&&t>=0&&t!==1/0}function G(t,e){return Math.max(t+(e||0)-Date.now(),0)}function st(t,e){let{type:s="all",exact:i,fetchStatus:r,predicate:n,queryKey:a,stale:f}=t;if(a){if(i){if(e.queryHash!==j(a,e.options))return!1}else if(!A(e.queryKey,a))return!1}if(s!=="all"){let u=e.isActive();if(s==="active"&&!u||s==="inactive"&&u)return!1}return!(typeof f=="boolean"&&e.isStale()!==f||typeof r<"u"&&r!==e.state.fetchStatus||n&&!n(e))}function it(t,e){let{exact:s,status:i,predicate:r,mutationKey:n}=t;if(n){if(!e.options.mutationKey)return!1;if(s){if(S(e.options.mutationKey)!==S(n))return!1}else if(!A(e.options.mutationKey,n))return!1}return!(i&&e.state.status!==i||r&&!r(e))}function j(t,e){return(e?.queryKeyHashFn||S)(t)}function S(t){return JSON.stringify(t,(e,s)=>et(s)?Object.keys(s).sort().reduce((i,r)=>(i[r]=s[r],i),{}):s)}function A(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(s=>!A(t[s],e[s])):!1}function Rt(t,e){if(t===e)return t;let s=wt(t)&&wt(e);if(s||et(t)&&et(e)){let i=s?t:Object.keys(t),r=i.length,n=s?e:Object.keys(e),a=n.length,f=s?[]:{},u=0;for(let h=0;h<a;h++){let b=s?h:n[h];!s&&t[b]===void 0&&e[b]===void 0&&i.includes(b)?(f[b]=void 0,u++):(f[b]=Rt(t[b],e[b]),f[b]===t[b]&&t[b]!==void 0&&u++)}return r===a&&u===r?t:f}return e}function U(t,e){if(t&&!e||e&&!t)return!1;for(let s in t)if(t[s]!==e[s])return!1;return!0}function wt(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function et(t){if(!Ct(t))return!1;let e=t.constructor;if(typeof e>"u")return!0;let s=e.prototype;return!(!Ct(s)||!s.hasOwnProperty("isPrototypeOf"))}function Ct(t){return Object.prototype.toString.call(t)==="[object Object]"}function Pt(t){return new Promise(e=>{setTimeout(e,t)})}function K(t,e,s){return typeof s.structuralSharing=="function"?s.structuralSharing(t,e):s.structuralSharing!==!1?Rt(t,e):e}function St(t,e,s=0){let i=[...t,e];return s&&i.length>s?i.slice(1):i}function Mt(t,e,s=0){let i=[e,...t];return s&&i.length>s?i.slice(0,-1):i}var Nt=class extends F{#t;#e;#s;constructor(){super(),this.#s=t=>{if(!R&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#e||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#s=t,this.#e?.(),this.#e=t(e=>{typeof e=="boolean"?this.setFocused(e):this.onFocus()})}setFocused(t){this.#t!==t&&(this.#t=t,this.onFocus())}onFocus(){this.listeners.forEach(t=>{t()})}isFocused(){return typeof this.#t=="boolean"?this.#t:globalThis.document?.visibilityState!=="hidden"}},D=new Nt;var Ht=class extends F{#t=!0;#e;#s;constructor(){super(),this.#s=t=>{if(!R&&window.addEventListener){let e=()=>t(!0),s=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",s,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",s)}}}}onSubscribe(){this.#e||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#s=t,this.#e?.(),this.#e=t(this.setOnline.bind(this))}setOnline(t){this.#t!==t&&(this.#t=t,this.listeners.forEach(s=>{s(t)}))}isOnline(){return this.#t}},E=new Ht;function Gt(t){return Math.min(1e3*2**t,3e4)}function I(t){return(t??"online")==="online"?E.isOnline():!0}var Qt=class{constructor(t){this.revert=t?.revert,this.silent=t?.silent}};function _(t){return t instanceof Qt}function B(t){let e=!1,s=0,i=!1,r,n,a,f=new Promise((d,g)=>{n=d,a=g}),u=d=>{i||(y(new Qt(d)),t.abort?.())},h=()=>{e=!0},b=()=>{e=!1},M=()=>!D.isFocused()||t.networkMode!=="always"&&!E.isOnline(),c=d=>{i||(i=!0,t.onSuccess?.(d),r?.(),n(d))},y=d=>{i||(i=!0,t.onError?.(d),r?.(),a(d))},v=()=>new Promise(d=>{r=g=>{let w=i||!M();return w&&d(g),w},t.onPause?.()}).then(()=>{r=void 0,i||t.onContinue?.()}),m=()=>{if(i)return;let d;try{d=t.fn()}catch(g){d=Promise.reject(g)}Promise.resolve(d).then(c).catch(g=>{if(i)return;let w=t.retry??(R?0:3),P=t.retryDelay??Gt,q=typeof P=="function"?P(s,g):P,C=w===!0||typeof w=="number"&&s<w||typeof w=="function"&&w(s,g);if(e||!C){y(g);return}s++,t.onFail?.(s,g),Pt(q).then(()=>{if(M())return v()}).then(()=>{e?y(g):m()})})};return I(t.networkMode)?m():v().then(m),{promise:f,cancel:u,continue:()=>r?.()?f:Promise.resolve(),cancelRetry:h,continueRetry:b}}function _t(){let t=[],e=0,s=c=>{c()},i=c=>{c()},r=c=>setTimeout(c,0),n=c=>{r=c},a=c=>{let y;e++;try{y=c()}finally{e--,e||h()}return y},f=c=>{e?t.push(c):r(()=>{s(c)})},u=c=>(...y)=>{f(()=>{c(...y)})},h=()=>{let c=t;t=[],c.length&&r(()=>{i(()=>{c.forEach(y=>{s(y)})})})};return{batch:a,batchCalls:u,schedule:f,setNotifyFunction:c=>{s=c},setBatchNotifyFunction:c=>{i=c},setScheduler:n}}var p=_t();var V=class{#t;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),T(this.gcTime)&&(this.#t=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(R?1/0:5*60*1e3))}clearGcTimeout(){this.#t&&(clearTimeout(this.#t),this.#t=void 0)}};var Dt=class extends V{constructor(t){super(),this.#u=!1,this.#o=t.defaultOptions,this.#h(t.options),this.#n=[],this.#s=t.cache,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#t=t.state||Bt(this.options),this.state=this.#t,this.scheduleGc()}#t;#e;#s;#i;#r;#n;#o;#u;get meta(){return this.options.meta}#h(t){this.options=o(o({},this.#o),t),this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.#n.length&&this.state.fetchStatus==="idle"&&this.#s.remove(this)}setData(t,e){let s=K(this.state.data,t,this.options);return this.#a({data:s,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),s}setState(t,e){this.#a({type:"setState",state:t,setStateOptions:e})}cancel(t){let e=this.#i;return this.#r?.cancel(t),e?e.then(O).catch(O):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#t)}isActive(){return this.#n.some(t=>t.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.#n.some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!G(this.state.dataUpdatedAt,t)}onFocus(){this.#n.find(e=>e.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#r?.continue()}onOnline(){this.#n.find(e=>e.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#r?.continue()}addObserver(t){this.#n.includes(t)||(this.#n.push(t),this.clearGcTimeout(),this.#s.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.#n.includes(t)&&(this.#n=this.#n.filter(e=>e!==t),this.#n.length||(this.#r&&(this.#u?this.#r.cancel({revert:!0}):this.#r.cancelRetry()),this.scheduleGc()),this.#s.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.#n.length}invalidate(){this.state.isInvalidated||this.#a({type:"invalidate"})}fetch(t,e){if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#i)return this.#r?.continueRetry(),this.#i}if(t&&this.#h(t),!this.options.queryFn){let u=this.#n.find(h=>h.options.queryFn);u&&this.#h(u.options)}let s=new AbortController,i={queryKey:this.queryKey,meta:this.meta},r=u=>{Object.defineProperty(u,"signal",{enumerable:!0,get:()=>(this.#u=!0,s.signal)})};r(i);let n=()=>this.options.queryFn?(this.#u=!1,this.options.persister?this.options.persister(this.options.queryFn,i,this):this.options.queryFn(i)):Promise.reject(new Error(`Missing queryFn: '${this.options.queryHash}'`)),a={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:n};r(a),this.options.behavior?.onFetch(a,this),this.#e=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==a.fetchOptions?.meta)&&this.#a({type:"fetch",meta:a.fetchOptions?.meta});let f=u=>{_(u)&&u.silent||this.#a({type:"error",error:u}),_(u)||(this.#s.config.onError?.(u,this),this.#s.config.onSettled?.(this.state.data,u,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.#r=B({fn:a.fetchFn,abort:s.abort.bind(s),onSuccess:u=>{if(typeof u>"u"){f(new Error(`${this.queryHash} data is undefined`));return}this.setData(u),this.#s.config.onSuccess?.(u,this),this.#s.config.onSettled?.(u,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:f,onFail:(u,h)=>{this.#a({type:"failed",failureCount:u,error:h})},onPause:()=>{this.#a({type:"pause"})},onContinue:()=>{this.#a({type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode}),this.#i=this.#r.promise,this.#i}#a(t){let e=s=>{switch(t.type){case"failed":return l(o({},s),{fetchFailureCount:t.failureCount,fetchFailureReason:t.error});case"pause":return l(o({},s),{fetchStatus:"paused"});case"continue":return l(o({},s),{fetchStatus:"fetching"});case"fetch":return o(l(o({},s),{fetchFailureCount:0,fetchFailureReason:null,fetchMeta:t.meta??null,fetchStatus:I(this.options.networkMode)?"fetching":"paused"}),!s.dataUpdatedAt&&{error:null,status:"pending"});case"success":return o(l(o({},s),{data:t.data,dataUpdateCount:s.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success"}),!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null});case"error":let i=t.error;return _(i)&&i.revert&&this.#e?l(o({},this.#e),{fetchStatus:"idle"}):l(o({},s),{error:i,errorUpdateCount:s.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:s.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"});case"invalidate":return l(o({},s),{isInvalidated:!0});case"setState":return o(o({},s),t.state)}};this.state=e(this.state),p.batch(()=>{this.#n.forEach(s=>{s.onQueryUpdate()}),this.#s.notify({query:this,type:"updated",action:t})})}};function Bt(t){let e=typeof t.initialData=="function"?t.initialData():t.initialData,s=typeof e<"u",i=s?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:s?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}var Et=class extends F{constructor(t={}){super(),this.config=t,this.#t=new Map}#t;build(t,e,s){let i=e.queryKey,r=e.queryHash??j(i,e),n=this.get(r);return n||(n=new Dt({cache:this,queryKey:i,queryHash:r,options:t.defaultQueryOptions(e),state:s,defaultOptions:t.getQueryDefaults(i)}),this.add(n)),n}add(t){this.#t.has(t.queryHash)||(this.#t.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=this.#t.get(t.queryHash);e&&(t.destroy(),e===t&&this.#t.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){p.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#t.get(t)}getAll(){return[...this.#t.values()]}find(t){let e=o({exact:!0},t);return this.getAll().find(s=>st(e,s))}findAll(t={}){let e=this.getAll();return Object.keys(t).length>0?e.filter(s=>st(t,s)):e}notify(t){p.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){p.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){p.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}};var It=class extends V{constructor(t){super(),this.mutationId=t.mutationId,this.#e=t.defaultOptions,this.#s=t.mutationCache,this.#t=[],this.state=t.state||rt(),this.setOptions(t.options),this.scheduleGc()}#t;#e;#s;#i;setOptions(t){this.options=o(o({},this.#e),t),this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#t.includes(t)||(this.#t.push(t),this.clearGcTimeout(),this.#s.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#t=this.#t.filter(e=>e!==t),this.scheduleGc(),this.#s.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#t.length||(this.state.status==="pending"?this.scheduleGc():this.#s.remove(this))}continue(){return this.#i?.continue()??this.execute(this.state.variables)}execute(t){return x(this,null,function*(){let e=()=>(this.#i=B({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(i,r)=>{this.#r({type:"failed",failureCount:i,error:r})},onPause:()=>{this.#r({type:"pause"})},onContinue:()=>{this.#r({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.#i.promise),s=this.state.status==="pending";try{if(!s){this.#r({type:"pending",variables:t}),yield this.#s.config.onMutate?.(t,this);let r=yield this.options.onMutate?.(t);r!==this.state.context&&this.#r({type:"pending",context:r,variables:t})}let i=yield e();return yield this.#s.config.onSuccess?.(i,t,this.state.context,this),yield this.options.onSuccess?.(i,t,this.state.context),yield this.#s.config.onSettled?.(i,null,this.state.variables,this.state.context,this),yield this.options.onSettled?.(i,null,t,this.state.context),this.#r({type:"success",data:i}),i}catch(i){try{throw yield this.#s.config.onError?.(i,t,this.state.context,this),yield this.options.onError?.(i,t,this.state.context),yield this.#s.config.onSettled?.(void 0,i,this.state.variables,this.state.context,this),yield this.options.onSettled?.(void 0,i,t,this.state.context),i}finally{this.#r({type:"error",error:i})}}})}#r(t){let e=s=>{switch(t.type){case"failed":return l(o({},s),{failureCount:t.failureCount,failureReason:t.error});case"pause":return l(o({},s),{isPaused:!0});case"continue":return l(o({},s),{isPaused:!1});case"pending":return l(o({},s),{context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!I(this.options.networkMode),status:"pending",variables:t.variables,submittedAt:Date.now()});case"success":return l(o({},s),{data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1});case"error":return l(o({},s),{data:void 0,error:t.error,failureCount:s.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"})}};this.state=e(this.state),p.batch(()=>{this.#t.forEach(s=>{s.onMutationUpdate(t)}),this.#s.notify({mutation:this,type:"updated",action:t})})}};function rt(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var At=class extends F{constructor(t={}){super(),this.config=t,this.#t=[],this.#e=0}#t;#e;#s;build(t,e,s){let i=new It({mutationCache:this,mutationId:++this.#e,options:t.defaultMutationOptions(e),state:s});return this.add(i),i}add(t){this.#t.push(t),this.notify({type:"added",mutation:t})}remove(t){this.#t=this.#t.filter(e=>e!==t),this.notify({type:"removed",mutation:t})}clear(){p.batch(()=>{this.#t.forEach(t=>{this.remove(t)})})}getAll(){return this.#t}find(t){let e=o({exact:!0},t);return this.#t.find(s=>it(e,s))}findAll(t={}){return this.#t.filter(e=>it(t,e))}notify(t){p.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){return this.#s=(this.#s??Promise.resolve()).then(()=>{let t=this.#t.filter(e=>e.state.isPaused);return p.batch(()=>t.reduce((e,s)=>e.then(()=>s.continue().catch(O)),Promise.resolve()))}).then(()=>{this.#s=void 0}),this.#s}};function qt(t){return{onFetch:(e,s)=>{let i=()=>x(this,null,function*(){let r=e.options,n=e.fetchOptions?.meta?.fetchMore?.direction,a=e.state.data?.pages||[],f=e.state.data?.pageParams||[],u={pages:[],pageParams:[]},h=!1,b=v=>{Object.defineProperty(v,"signal",{enumerable:!0,get:()=>(e.signal.aborted?h=!0:e.signal.addEventListener("abort",()=>{h=!0}),e.signal)})},M=e.options.queryFn||(()=>Promise.reject(new Error(`Missing queryFn: '${e.options.queryHash}'`))),c=(v,m,d)=>x(this,null,function*(){if(h)return Promise.reject();if(m==null&&v.pages.length)return Promise.resolve(v);let g={queryKey:e.queryKey,pageParam:m,direction:d?"backward":"forward",meta:e.options.meta};b(g);let w=yield M(g),{maxPages:P}=e.options,q=d?Mt:St;return{pages:q(v.pages,w,P),pageParams:q(v.pageParams,m,P)}}),y;if(n&&a.length){let v=n==="backward",m=v?Vt:Ut,d={pages:a,pageParams:f},g=m(r,d);y=yield c(d,g,v)}else{y=yield c(u,f[0]??r.initialPageParam);let v=t??a.length;for(let m=1;m<v;m++){let d=Ut(r,y);y=yield c(y,d)}}return y});e.options.persister?e.fetchFn=()=>e.options.persister?.(i,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},s):e.fetchFn=i}}}function Ut(t,{pages:e,pageParams:s}){let i=e.length-1;return t.getNextPageParam(e[i],e,s[i],s)}function Vt(t,{pages:e,pageParams:s}){return t.getPreviousPageParam?.(e[0],e,s[0],s)}var $t=class{#t;#e;#s;#i;#r;#n;#o;#u;constructor(t={}){this.#t=t.queryCache||new Et,this.#e=t.mutationCache||new At,this.#s=t.defaultOptions||{},this.#i=new Map,this.#r=new Map,this.#n=0}mount(){this.#n++,this.#n===1&&(this.#o=D.subscribe(()=>{D.isFocused()&&(this.resumePausedMutations(),this.#t.onFocus())}),this.#u=E.subscribe(()=>{E.isOnline()&&(this.resumePausedMutations(),this.#t.onOnline())}))}unmount(){this.#n--,this.#n===0&&(this.#o?.(),this.#o=void 0,this.#u?.(),this.#u=void 0)}isFetching(t){return this.#t.findAll(l(o({},t),{fetchStatus:"fetching"})).length}isMutating(t){return this.#e.findAll(l(o({},t),{status:"pending"})).length}getQueryData(t){return this.#t.find({queryKey:t})?.state.data}ensureQueryData(t){let e=this.getQueryData(t.queryKey);return e!==void 0?Promise.resolve(e):this.fetchQuery(t)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:e,state:s})=>{let i=s.data;return[e,i]})}setQueryData(t,e,s){let r=this.#t.find({queryKey:t})?.state.data,n=Ft(e,r);if(typeof n>"u")return;let a=this.defaultQueryOptions({queryKey:t});return this.#t.build(this,a).setData(n,l(o({},s),{manual:!0}))}setQueriesData(t,e,s){return p.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,e,s)]))}getQueryState(t){return this.#t.find({queryKey:t})?.state}removeQueries(t){let e=this.#t;p.batch(()=>{e.findAll(t).forEach(s=>{e.remove(s)})})}resetQueries(t,e){let s=this.#t,i=o({type:"active"},t);return p.batch(()=>(s.findAll(t).forEach(r=>{r.reset()}),this.refetchQueries(i,e)))}cancelQueries(t={},e={}){let s=o({revert:!0},e),i=p.batch(()=>this.#t.findAll(t).map(r=>r.cancel(s)));return Promise.all(i).then(O).catch(O)}invalidateQueries(t={},e={}){return p.batch(()=>{if(this.#t.findAll(t).forEach(i=>{i.invalidate()}),t.refetchType==="none")return Promise.resolve();let s=l(o({},t),{type:t.refetchType??t.type??"active"});return this.refetchQueries(s,e)})}refetchQueries(t={},e){let s=l(o({},e),{cancelRefetch:e?.cancelRefetch??!0}),i=p.batch(()=>this.#t.findAll(t).filter(r=>!r.isDisabled()).map(r=>{let n=r.fetch(void 0,s);return s.throwOnError||(n=n.catch(O)),r.state.fetchStatus==="paused"?Promise.resolve():n}));return Promise.all(i).then(O)}fetchQuery(t){let e=this.defaultQueryOptions(t);typeof e.retry>"u"&&(e.retry=!1);let s=this.#t.build(this,e);return s.isStaleByTime(e.staleTime)?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(O).catch(O)}fetchInfiniteQuery(t){return t.behavior=qt(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(O).catch(O)}resumePausedMutations(){return this.#e.resumePausedMutations()}getQueryCache(){return this.#t}getMutationCache(){return this.#e}getDefaultOptions(){return this.#s}setDefaultOptions(t){this.#s=t}setQueryDefaults(t,e){this.#i.set(S(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...this.#i.values()],s={};return e.forEach(i=>{A(t,i.queryKey)&&(s=o(o({},s),i.defaultOptions))}),s}setMutationDefaults(t,e){this.#r.set(S(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...this.#r.values()],s={};return e.forEach(i=>{A(t,i.mutationKey)&&(s=o(o({},s),i.defaultOptions))}),s}defaultQueryOptions(t){if(t?._defaulted)return t;let e=l(o(o(o({},this.#s.queries),t?.queryKey&&this.getQueryDefaults(t.queryKey)),t),{_defaulted:!0});return e.queryHash||(e.queryHash=j(e.queryKey,e)),typeof e.refetchOnReconnect>"u"&&(e.refetchOnReconnect=e.networkMode!=="always"),typeof e.throwOnError>"u"&&(e.throwOnError=!!e.suspense),typeof e.networkMode>"u"&&e.persister&&(e.networkMode="offlineFirst"),e}defaultMutationOptions(t){return t?._defaulted?t:l(o(o(o({},this.#s.mutations),t?.mutationKey&&this.getMutationDefaults(t.mutationKey)),t),{_defaulted:!0})}clear(){this.#t.clear(),this.#e.clear()}};var ot=class extends F{constructor(t,e){super(),this.options=e,this.#t=t,this.#o=null,this.bindMethods(),this.setOptions(e)}#t;#e=void 0;#s=void 0;#i=void 0;#r;#n;#o;#u;#h;#a;#l;#f;#c;#p=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#e.addObserver(this),xt(this.#e,this.options)?this.#d():this.updateResult(),this.#g())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return nt(this.#e,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return nt(this.#e,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#v(),this.#O(),this.#e.removeObserver(this)}setOptions(t,e){let s=this.options,i=this.#e;if(this.options=this.#t.defaultQueryOptions(t),U(s,this.options)||this.#t.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#e,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.#w();let r=this.hasListeners();r&&Tt(this.#e,i,this.options,s)&&this.#d(),this.updateResult(e),r&&(this.#e!==i||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.#y();let n=this.#m();r&&(this.#e!==i||this.options.enabled!==s.enabled||n!==this.#c)&&this.#b(n)}getOptimisticResult(t){let e=this.#t.getQueryCache().build(this.#t,t),s=this.createResult(e,t);return zt(this,s)&&(this.#i=s,this.#n=this.options,this.#r=this.#e.state),s}getCurrentResult(){return this.#i}trackResult(t){let e={};return Object.keys(t).forEach(s=>{Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:()=>(this.#p.add(s),t[s])})}),e}getCurrentQuery(){return this.#e}refetch(e={}){var t=k(e,[]);return this.fetch(o({},t))}fetchOptimistic(t){let e=this.#t.defaultQueryOptions(t),s=this.#t.getQueryCache().build(this.#t,e);return s.isFetchingOptimistic=!0,s.fetch().then(()=>this.createResult(s,e))}fetch(t){return this.#d(l(o({},t),{cancelRefetch:t.cancelRefetch??!0})).then(()=>(this.updateResult(),this.#i))}#d(t){this.#w();let e=this.#e.fetch(this.options,t);return t?.throwOnError||(e=e.catch(O)),e}#y(){if(this.#v(),R||this.#i.isStale||!T(this.options.staleTime))return;let e=G(this.#i.dataUpdatedAt,this.options.staleTime)+1;this.#l=setTimeout(()=>{this.#i.isStale||this.updateResult()},e)}#m(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.#e):this.options.refetchInterval)??!1}#b(t){this.#O(),this.#c=t,!(R||this.options.enabled===!1||!T(this.#c)||this.#c===0)&&(this.#f=setInterval(()=>{(this.options.refetchIntervalInBackground||D.isFocused())&&this.#d()},this.#c))}#g(){this.#y(),this.#b(this.#m())}#v(){this.#l&&(clearTimeout(this.#l),this.#l=void 0)}#O(){this.#f&&(clearInterval(this.#f),this.#f=void 0)}createResult(t,e){let s=this.#e,i=this.options,r=this.#i,n=this.#r,a=this.#n,u=t!==s?t.state:this.#s,{state:h}=t,{error:b,errorUpdatedAt:M,fetchStatus:c,status:y}=h,v=!1,m;if(e._optimisticResults){let C=this.hasListeners(),$=!C&&xt(t,e),Lt=C&&Tt(t,s,e,i);($||Lt)&&(c=I(t.options.networkMode)?"fetching":"paused",h.dataUpdatedAt||(y="pending")),e._optimisticResults==="isRestoring"&&(c="idle")}if(e.select&&typeof h.data<"u")if(r&&h.data===n?.data&&e.select===this.#u)m=this.#h;else try{this.#u=e.select,m=e.select(h.data),m=K(r?.data,m,e),this.#h=m,this.#o=null}catch(C){this.#o=C}else m=h.data;if(typeof e.placeholderData<"u"&&typeof m>"u"&&y==="pending"){let C;if(r?.isPlaceholderData&&e.placeholderData===a?.placeholderData)C=r.data;else if(C=typeof e.placeholderData=="function"?e.placeholderData(this.#a?.state.data,this.#a):e.placeholderData,e.select&&typeof C<"u")try{C=e.select(C),this.#o=null}catch($){this.#o=$}typeof C<"u"&&(y="success",m=K(r?.data,C,e),v=!0)}this.#o&&(b=this.#o,m=this.#h,M=Date.now(),y="error");let d=c==="fetching",g=y==="pending",w=y==="error",P=g&&d;return{status:y,fetchStatus:c,isPending:g,isSuccess:y==="success",isError:w,isInitialLoading:P,isLoading:P,data:m,dataUpdatedAt:h.dataUpdatedAt,error:b,errorUpdatedAt:M,failureCount:h.fetchFailureCount,failureReason:h.fetchFailureReason,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>u.dataUpdateCount||h.errorUpdateCount>u.errorUpdateCount,isFetching:d,isRefetching:d&&!g,isLoadingError:w&&h.dataUpdatedAt===0,isPaused:c==="paused",isPlaceholderData:v,isRefetchError:w&&h.dataUpdatedAt!==0,isStale:at(t,e),refetch:this.refetch}}updateResult(t){let e=this.#i,s=this.createResult(this.#e,this.options);if(this.#r=this.#e.state,this.#n=this.options,this.#r.data!==void 0&&(this.#a=this.#e),U(s,e))return;this.#i=s;let i={},r=()=>{if(!e)return!0;let{notifyOnChangeProps:n}=this.options,a=typeof n=="function"?n():n;if(a==="all"||!a&&!this.#p.size)return!0;let f=new Set(a??this.#p);return this.options.throwOnError&&f.add("error"),Object.keys(this.#i).some(u=>{let h=u;return this.#i[h]!==e[h]&&f.has(h)})};t?.listeners!==!1&&r()&&(i.listeners=!0),this.#C(o(o({},i),t))}#w(){let t=this.#t.getQueryCache().build(this.#t,this.options);if(t===this.#e)return;let e=this.#e;this.#e=t,this.#s=t.state,this.hasListeners()&&(e?.removeObserver(this),t.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#g()}#C(t){p.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(this.#i)}),this.#t.getQueryCache().notify({query:this.#e,type:"observerResultsUpdated"})})}};function Wt(t,e){return e.enabled!==!1&&!t.state.dataUpdatedAt&&!(t.state.status==="error"&&e.retryOnMount===!1)}function xt(t,e){return Wt(t,e)||t.state.dataUpdatedAt>0&&nt(t,e,e.refetchOnMount)}function nt(t,e,s){if(e.enabled!==!1){let i=typeof s=="function"?s(t):s;return i==="always"||i!==!1&&at(t,e)}return!1}function Tt(t,e,s,i){return s.enabled!==!1&&(t!==e||i.enabled===!1)&&(!s.suspense||t.state.status!=="error")&&at(t,s)}function at(t,e){return t.isStaleByTime(e.staleTime)}function zt(t,e){return!U(t.getCurrentResult(),e)}var ut=class extends F{constructor(t,e){super(),this.#e=void 0,this.#t=t,this.setOptions(e),this.bindMethods(),this.#r()}#t;#e;#s;#i;bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#t.defaultMutationOptions(t),U(e,this.options)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#s,observer:this}),this.#s?.setOptions(this.options),e?.mutationKey&&this.options.mutationKey&&S(e.mutationKey)!==S(this.options.mutationKey)&&this.reset()}onUnsubscribe(){this.hasListeners()||this.#s?.removeObserver(this)}onMutationUpdate(t){this.#r(),this.#n(t)}getCurrentResult(){return this.#e}reset(){this.#s?.removeObserver(this),this.#s=void 0,this.#r(),this.#n()}mutate(t,e){return this.#i=e,this.#s?.removeObserver(this),this.#s=this.#t.getMutationCache().build(this.#t,this.options),this.#s.addObserver(this),this.#s.execute(t)}#r(){let t=this.#s?.state??rt();this.#e=l(o({},t),{isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})}#n(t){p.batch(()=>{if(this.#i&&this.hasListeners()){let e=this.#e.variables,s=this.#e.context;t?.type==="success"?(this.#i.onSuccess?.(t.data,e,s),this.#i.onSettled?.(t.data,null,e,s)):t?.type==="error"&&(this.#i.onError?.(t.error,e,s),this.#i.onSettled?.(void 0,t.error,e,s))}this.listeners.forEach(e=>{e(this.#e)})})}};function ht(t,e,s){!e&&Z(t);let i=e??Q(vt);return s?Y(i,s):i}function Jt(t){return function(i={}){var r=i,{injector:e}=r,s=k(r,["injector"]);return e=ht(this,e),Y(e,()=>Q(t,s))}}function Yt(t,e,s={}){let{deps:i=[],multi:r=!1,extraProviders:n=[]}=s;return(a,f=!1)=>{let u;return typeof a<"u"?u={provide:t,useFactory:typeof a=="function"?f?()=>a:a:()=>a,multi:r}:u={provide:t,useFactory:e,deps:i,multi:r},[n,u]}}function Zt(t,e){let s=e?.token||new mt(t);return[Jt(s),Yt(s,()=>null,e||{}),s,()=>{}]}var[jt,Xt,Ts]=Zt("QueryClientToken");function Kt(t){let e={};return new Proxy(e,{get(s,i){let r=s[i];if(r)return r;let n=N(t)[i];return typeof n=="function"?n:s[i]=L(()=>t()[i])},has(s,i){return!!N(t)[i]},ownKeys(){return Reflect.ownKeys(N(t))},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}})}function te(t,e){return ht(te,e,()=>{let s=jt(),i=Q(H),r=new ut(s,t(s)),n=(h,b)=>{r.mutate(h,b).catch(ee)};tt(()=>{r.setOptions(t(s))});let a=X(r.getCurrentResult()),f=r.subscribe(p.batchCalls(h=>a.set(h)));i.onDestroy(f);let u=L(()=>l(o({},a()),{mutate:n,mutateAsync:a().mutate}));return Kt(u)})}function ee(){}function kt(t,e,s){Z(kt);let i=Q(H),r=L(()=>{let u=s.defaultQueryOptions(t(s));return u._optimisticResults="optimistic",u}),n=new e(s,r()),a=X(n.getOptimisticResult(r()));tt(()=>{let u=r();n.setOptions(u,{listeners:!1}),a.set(n.getOptimisticResult(u))},{allowSignalWrites:!0});let f=n.subscribe(p.batchCalls(u=>a.set(u)));return i.onDestroy(f),Kt(a)}function se(t,e){return ht(se,e,()=>{let s=jt();return kt(t,ot,s)})}function js(t){return gt([Xt(t),{provide:bt,multi:!0,useValue:()=>{t.mount(),Q(H).onDestroy(()=>t.unmount())}}])}var ie="https://fakestoreapi.com/products",re="https://gist.githubusercontent.com/railsstudent/ae150ae2b14abb207f131596e8b283c3/raw/131a6b3a51dfb4d848b75980bfe3443b1665704b/featured-products.json",Vs=(()=>{let e=class e{constructor(){this.httpClient=Q(Ot),this.nextId=21}getProduct(i){return i?z(this.getProductQuery(i)):Promise.resolve(null)}getProductQuery(i){return this.httpClient.get(`${ie}/${i}`).pipe(ft(r=>(console.error(r),W(null))))}getFeaturedProducts(){let i=this.httpClient.get(re).pipe(J(({ids:r})=>r),pt(r=>{let n=r.map(a=>this.getProductQuery(a));return lt(n)}),J(r=>{let n=[];return r.forEach(a=>a&&n.push(a)),n}));return z(i)}getNewProductId(){return this.nextId}createProduct(i){let r=l(o({},i),{id:this.nextId});return this.nextId=this.nextId+1,ct(W(r).pipe(dt(2e3)))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=yt({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();export{E as a,$t as b,jt as c,te as d,se as e,js as f,Vs as g};
