import{h as Q,l as X,al as Oe,k as je,i as de,B as Se,am as ke}from"./DqbVwyie.js";import{J as oe,g as ie,K as Ee,L as Pe,M as he,m as re,N as ue,r as me,w as $e,c as Ae,o as Le,a as Fe,E as le}from"./DY6LMajd.js";import{s as Ie}from"./xQwSG8Qu.js";function U(e){"@babel/helpers - typeof";return U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},U(e)}function se(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(y){return Object.getOwnPropertyDescriptor(e,y).enumerable})),t.push.apply(t,o)}return t}function Z(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?se(Object(t),!0).forEach(function(o){be(e,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):se(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})}return e}function be(e,r,t){return(r=_e(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _e(e){var r=Te(e,"string");return U(r)=="symbol"?r:r+""}function Te(e,r){if(U(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var o=t.call(e,r);if(U(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function N(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */N=function(){return r};var e,r={},t=Object.prototype,o=t.hasOwnProperty,y=Object.defineProperty||function(i,n,a){i[n]=a.value},h=typeof Symbol=="function"?Symbol:{},b=h.iterator||"@@iterator",P=h.asyncIterator||"@@asyncIterator",g=h.toStringTag||"@@toStringTag";function w(i,n,a){return Object.defineProperty(i,n,{value:a,enumerable:!0,configurable:!0,writable:!0}),i[n]}try{w({},"")}catch{w=function(a,u,f){return a[u]=f}}function A(i,n,a,u){var f=n&&n.prototype instanceof H?n:H,c=Object.create(f.prototype),S=new R(u||[]);return y(c,"_invoke",{value:E(i,a,S)}),c}function B(i,n,a){try{return{type:"normal",arg:i.call(n,a)}}catch(u){return{type:"throw",arg:u}}}r.wrap=A;var M="suspendedStart",D="suspendedYield",K="executing",C="completed",T={};function H(){}function W(){}function k(){}var l={};w(l,b,function(){return this});var s=Object.getPrototypeOf,d=s&&s(s(Y([])));d&&d!==t&&o.call(d,b)&&(l=d);var m=k.prototype=H.prototype=Object.create(l);function O(i){["next","throw","return"].forEach(function(n){w(i,n,function(a){return this._invoke(n,a)})})}function j(i,n){function a(f,c,S,$){var L=B(i[f],i,c);if(L.type!=="throw"){var V=L.arg,I=V.value;return I&&U(I)=="object"&&o.call(I,"__await")?n.resolve(I.__await).then(function(_){a("next",_,S,$)},function(_){a("throw",_,S,$)}):n.resolve(I).then(function(_){V.value=_,S(V)},function(_){return a("throw",_,S,$)})}$(L.arg)}var u;y(this,"_invoke",{value:function(c,S){function $(){return new n(function(L,V){a(c,S,L,V)})}return u=u?u.then($,$):$()}})}function E(i,n,a){var u=M;return function(f,c){if(u===K)throw Error("Generator is already running");if(u===C){if(f==="throw")throw c;return{value:e,done:!0}}for(a.method=f,a.arg=c;;){var S=a.delegate;if(S){var $=v(S,a);if($){if($===T)continue;return $}}if(a.method==="next")a.sent=a._sent=a.arg;else if(a.method==="throw"){if(u===M)throw u=C,a.arg;a.dispatchException(a.arg)}else a.method==="return"&&a.abrupt("return",a.arg);u=K;var L=B(i,n,a);if(L.type==="normal"){if(u=a.done?C:D,L.arg===T)continue;return{value:L.arg,done:a.done}}L.type==="throw"&&(u=C,a.method="throw",a.arg=L.arg)}}}function v(i,n){var a=n.method,u=i.iterator[a];if(u===e)return n.delegate=null,a==="throw"&&i.iterator.return&&(n.method="return",n.arg=e,v(i,n),n.method==="throw")||a!=="return"&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+a+"' method")),T;var f=B(u,i.iterator,n.arg);if(f.type==="throw")return n.method="throw",n.arg=f.arg,n.delegate=null,T;var c=f.arg;return c?c.done?(n[i.resultName]=c.value,n.next=i.nextLoc,n.method!=="return"&&(n.method="next",n.arg=e),n.delegate=null,T):c:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,T)}function G(i){var n={tryLoc:i[0]};1 in i&&(n.catchLoc=i[1]),2 in i&&(n.finallyLoc=i[2],n.afterLoc=i[3]),this.tryEntries.push(n)}function F(i){var n=i.completion||{};n.type="normal",delete n.arg,i.completion=n}function R(i){this.tryEntries=[{tryLoc:"root"}],i.forEach(G,this),this.reset(!0)}function Y(i){if(i||i===""){var n=i[b];if(n)return n.call(i);if(typeof i.next=="function")return i;if(!isNaN(i.length)){var a=-1,u=function f(){for(;++a<i.length;)if(o.call(i,a))return f.value=i[a],f.done=!1,f;return f.value=e,f.done=!0,f};return u.next=u}}throw new TypeError(U(i)+" is not iterable")}return W.prototype=k,y(m,"constructor",{value:k,configurable:!0}),y(k,"constructor",{value:W,configurable:!0}),W.displayName=w(k,g,"GeneratorFunction"),r.isGeneratorFunction=function(i){var n=typeof i=="function"&&i.constructor;return!!n&&(n===W||(n.displayName||n.name)==="GeneratorFunction")},r.mark=function(i){return Object.setPrototypeOf?Object.setPrototypeOf(i,k):(i.__proto__=k,w(i,g,"GeneratorFunction")),i.prototype=Object.create(m),i},r.awrap=function(i){return{__await:i}},O(j.prototype),w(j.prototype,P,function(){return this}),r.AsyncIterator=j,r.async=function(i,n,a,u,f){f===void 0&&(f=Promise);var c=new j(A(i,n,a,u),f);return r.isGeneratorFunction(n)?c:c.next().then(function(S){return S.done?S.value:c.next()})},O(m),w(m,g,"Generator"),w(m,b,function(){return this}),w(m,"toString",function(){return"[object Generator]"}),r.keys=function(i){var n=Object(i),a=[];for(var u in n)a.push(u);return a.reverse(),function f(){for(;a.length;){var c=a.pop();if(c in n)return f.value=c,f.done=!1,f}return f.done=!0,f}},r.values=Y,R.prototype={constructor:R,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(F),!n)for(var a in this)a.charAt(0)==="t"&&o.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=e)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if(n.type==="throw")throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var a=this;function u(V,I){return S.type="throw",S.arg=n,a.next=V,I&&(a.method="next",a.arg=e),!!I}for(var f=this.tryEntries.length-1;f>=0;--f){var c=this.tryEntries[f],S=c.completion;if(c.tryLoc==="root")return u("end");if(c.tryLoc<=this.prev){var $=o.call(c,"catchLoc"),L=o.call(c,"finallyLoc");if($&&L){if(this.prev<c.catchLoc)return u(c.catchLoc,!0);if(this.prev<c.finallyLoc)return u(c.finallyLoc)}else if($){if(this.prev<c.catchLoc)return u(c.catchLoc,!0)}else{if(!L)throw Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return u(c.finallyLoc)}}}},abrupt:function(n,a){for(var u=this.tryEntries.length-1;u>=0;--u){var f=this.tryEntries[u];if(f.tryLoc<=this.prev&&o.call(f,"finallyLoc")&&this.prev<f.finallyLoc){var c=f;break}}c&&(n==="break"||n==="continue")&&c.tryLoc<=a&&a<=c.finallyLoc&&(c=null);var S=c?c.completion:{};return S.type=n,S.arg=a,c?(this.method="next",this.next=c.finallyLoc,T):this.complete(S)},complete:function(n,a){if(n.type==="throw")throw n.arg;return n.type==="break"||n.type==="continue"?this.next=n.arg:n.type==="return"?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):n.type==="normal"&&a&&(this.next=a),T},finish:function(n){for(var a=this.tryEntries.length-1;a>=0;--a){var u=this.tryEntries[a];if(u.finallyLoc===n)return this.complete(u.completion,u.afterLoc),F(u),T}},catch:function(n){for(var a=this.tryEntries.length-1;a>=0;--a){var u=this.tryEntries[a];if(u.tryLoc===n){var f=u.completion;if(f.type==="throw"){var c=f.arg;F(u)}return c}}throw Error("illegal catch attempt")},delegateYield:function(n,a,u){return this.delegate={iterator:Y(n),resultName:a,nextLoc:u},this.method==="next"&&(this.arg=e),T}},r}function ce(e,r,t,o,y,h,b){try{var P=e[h](b),g=P.value}catch(w){return void t(w)}P.done?r(g):Promise.resolve(g).then(o,y)}function q(e){return function(){var r=this,t=arguments;return new Promise(function(o,y){var h=e.apply(r,t);function b(g){ce(h,o,y,b,P,"next",g)}function P(g){ce(h,o,y,b,P,"throw",g)}b(void 0)})}}function te(e,r){return Ne(e)||Ve(e,r)||Be(e,r)||Re()}function Re(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Be(e,r){if(e){if(typeof e=="string")return fe(e,r);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?fe(e,r):void 0}}function fe(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,o=Array(r);t<r;t++)o[t]=e[t];return o}function Ve(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var o,y,h,b,P=[],g=!0,w=!1;try{if(h=(t=t.call(e)).next,r!==0)for(;!(g=(o=h.call(t)).done)&&(P.push(o.value),P.length!==r);g=!0);}catch(A){w=!0,y=A}finally{try{if(!g&&t.return!=null&&(b=t.return(),Object(b)!==b))return}finally{if(w)throw y}}return P}}function Ne(e){if(Array.isArray(e))return e}function Ge(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;Ee()?Pe(e):r?e():he(e)}function Me(e,r,t){var o=me(!0),y=$e(e,function(h,b){o.value&&r(h,b)},t);return{stop:y,pause:function(){o.value=!1},resume:function(){o.value=!0}}}function ee(e){return Object.entries(e).reduce(function(r,t){var o=te(t,2),y=o[0],h=o[1];return y.split(/[\.\[\]]+/).filter(Boolean).reduce(function(b,P,g,w){var A;return(A=b[P])!==null&&A!==void 0?A:b[P]=isNaN(w[g+1])?g===w.length-1?h:{}:[]},r),r},{})}function ve(e,r){if(!e||!r)return null;try{var t=e[r];if(de(t))return t}catch{}var o=r.split(/[\.\[\]]+/).filter(Boolean);return o.reduce(function(y,h){return y&&y[h]!==void 0?y[h]:void 0},e)}var De=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=oe({}),o=oe({}),y=ie(function(){return Object.values(t).every(function(k){return!k.invalid})}),h=ie(function(){return ee(t)}),b=function(l,s){return{value:s??ve(r.initialValues,l),touched:!1,dirty:!1,pristine:!0,valid:!0,invalid:!1,error:null,errors:[]}},P=function(l,s){var d=Q(s,l);return d===!0||X(d)&&d.includes(l)},g=function(){var k=q(N().mark(function l(s,d){var m,O,j;return N().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(O={},!X(r[s])){v.next=7;break}return v.next=4,D(r[s]);case 4:O=v.sent,v.next=12;break;case 7:if(v.t0=(m=r[s])!==null&&m!==void 0?m:d,!v.t0){v.next=12;break}return v.next=11,D();case 11:O=v.sent;case 12:if(j=Object.keys(o).filter(function(G){var F;return(F=o[G])===null||F===void 0||(F=F.options)===null||F===void 0?void 0:F[s]})||[],v.t1=de(j),!v.t1){v.next=18;break}return v.next=17,D(j);case 17:O=v.sent;case 18:return v.abrupt("return",O);case 19:case"end":return v.stop()}},l)}));return function(s,d){return k.apply(this,arguments)}}(),w=function(l,s,d,m){var O,j;((O=s==null?void 0:s[d])!==null&&O!==void 0?O:P(l,(j=r[d])!==null&&j!==void 0?j:m))&&D(l)},A=function(l,s){var d,m;if(!l)return[];(d=o[l])===null||d===void 0||d._watcher.stop(),t[l]||(t[l]=b(l,s==null?void 0:s.initialValue));var O=re((m=Q(s,t[l]))===null||m===void 0?void 0:m.props,Q(s==null?void 0:s.props,t[l]),{name:l,onBlur:function(){t[l].touched=!0,w(l,s,"validateOnBlur")},onInput:function(v){t[l].value=v&&Object.hasOwn(v,"value")?v.value:v.target.value},onChange:function(v){t[l].value=v&&Object.hasOwn(v,"value")?v.value:v.target.type==="checkbox"||v.target.type==="radio"?v.target.checked:v.target.value},onInvalid:function(v){var G;t[l].invalid=!0,t[l].errors=v,t[l].error=(G=v==null?void 0:v[0])!==null&&G!==void 0?G:null}}),j=Me(function(){return t[l].value},function(E,v){t[l].pristine&&(t[l].pristine=!1),E!==v&&(t[l].dirty=!0),w(l,s,"validateOnValueUpdate",!0)});return o[l]={props:O,states:t[l],options:s,_watcher:j},[t[l],O]},B=function(l){return function(){var s=q(N().mark(function d(m){var O;return N().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,g("validateOnSubmit",!0);case 2:return O=E.sent,E.abrupt("return",l(Z({originalEvent:m,valid:ue(y),states:ue(h),reset:K},O)));case 4:case"end":return E.stop()}},d)}));return function(d){return s.apply(this,arguments)}}()},M=function(l){return function(){var s=q(N().mark(function d(m){return N().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return K(),j.abrupt("return",l({originalEvent:m}));case 2:case"end":return j.stop()}},d)}));return function(d){return s.apply(this,arguments)}}()},D=function(){var k=q(N().mark(function l(s){var d,m,O,j,E,v,G,F,R,Y,i,n,a,u,f,c,S,$,L,V,I,_,x;return N().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return E=Object.entries(t).reduce(function(z,ge){var ne=te(ge,2),ae=ne[0],we=ne[1];return z.names.push(ae),z.values[ae]=we.value,z},{names:[],values:{}}),v=[E.names,ee(E.values)],G=v[0],F=v[1],p.next=4,(m=r.resolver)===null||m===void 0?void 0:m.call(r,{names:G,values:F});case 4:if(p.t1=d=p.sent,p.t0=p.t1!==null,!p.t0){p.next=8;break}p.t0=d!==void 0;case 8:if(!p.t0){p.next=12;break}p.t2=d,p.next=13;break;case 12:p.t2={values:F};case 13:R=p.t2,(j=(O=R).errors)!==null&&j!==void 0||(O.errors={}),Y=[s].flat(),i=0,n=Object.entries(o);case 17:if(!(i<n.length)){p.next=45;break}if(a=te(n[i],2),u=a[0],f=a[1],!(Y.includes(u)||!s||je(R.errors))){p.next=42;break}if(L=(c=f.options)===null||c===void 0?void 0:c.resolver,!L){p.next=37;break}return I=f.states.value,p.next=25,L({values:I,value:I,name:u});case 25:if(p.t4=V=p.sent,p.t3=p.t4!==null,!p.t3){p.next=29;break}p.t3=V!==void 0;case 29:if(!p.t3){p.next=33;break}p.t5=V,p.next=34;break;case 33:p.t5={values:I};case 34:_=p.t5,X(_.errors)&&(_.errors=be({},u,_.errors)),R=Oe(R,_);case 37:x=(S=ve(R.errors,u))!==null&&S!==void 0?S:[],t[u].invalid=x.length>0,t[u].valid=!t[u].invalid,t[u].errors=x,t[u].error=($=x==null?void 0:x[0])!==null&&$!==void 0?$:null;case 42:i++,p.next=17;break;case 45:return p.abrupt("return",Z(Z({},R),{},{errors:ee(R.errors)}));case 46:case"end":return p.stop()}},l)}));return function(s){return k.apply(this,arguments)}}(),K=function(){Object.keys(t).forEach(function(){var l=q(N().mark(function s(d){var m,O;return N().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return O=o[d]._watcher,O.pause(),o[d].states=t[d]=b(d,(m=o[d])===null||m===void 0||(m=m.options)===null||m===void 0?void 0:m.initialValue),E.next=5,he();case 5:O.resume();case 6:case"end":return E.stop()}},s)}));return function(s){return l.apply(this,arguments)}}())},C=function(l,s){t[l].value=s},T=function(l){var s;return(s=o[l])===null||s===void 0?void 0:s.states},H=function(l){Object.keys(l).forEach(function(s){return C(s,l[s])})},W=function(){g("validateOnMount")};return Ge(W),{defineField:A,setFieldValue:C,getFieldState:T,handleSubmit:B,handleReset:M,validate:D,setValues:H,reset:K,valid:y,states:h,fields:o}},Ce={root:"p-form p-component"},Ke=Se.extend({name:"form",classes:Ce}),Ue={name:"BaseForm",extends:Ie,style:Ke,props:{resolver:{type:Function,default:null},initialValues:{type:Object,default:null},validateOnValueUpdate:{type:[Boolean,Array],default:!0},validateOnBlur:{type:[Boolean,Array],default:!1},validateOnMount:{type:[Boolean,Array],default:!1},validateOnSubmit:{type:[Boolean,Array],default:!0}},provide:function(){return{$pcForm:this,$parentInstance:this}}};function J(e){"@babel/helpers - typeof";return J=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},J(e)}function pe(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(y){return Object.getOwnPropertyDescriptor(e,y).enumerable})),t.push.apply(t,o)}return t}function We(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?pe(Object(t),!0).forEach(function(o){Ye(e,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):pe(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})}return e}function Ye(e,r,t){return(r=xe(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function xe(e){var r=He(e,"string");return J(r)=="symbol"?r:r+""}function He(e,r){if(J(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var o=t.call(e,r);if(J(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function qe(e,r){return Xe(e)||Qe(e,r)||ze(e,r)||Je()}function Je(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ze(e,r){if(e){if(typeof e=="string")return ye(e,r);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ye(e,r):void 0}}function ye(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,o=Array(r);t<r;t++)o[t]=e[t];return o}function Qe(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var o,y,h,b,P=[],g=!0,w=!1;try{if(h=(t=t.call(e)).next,r!==0)for(;!(g=(o=h.call(t)).done)&&(P.push(o.value),P.length!==r);g=!0);}catch(A){w=!0,y=A}finally{try{if(!g&&t.return!=null&&(b=t.return(),Object(b)!==b))return}finally{if(w)throw y}}return P}}function Xe(e){if(Array.isArray(e))return e}var Ze={name:"Form",extends:Ue,inheritAttrs:!1,emits:["submit","reset"],setup:function(r,t){var o=t.emit,y=me(null),h=De(r),b=function(){var B;(B=y.value)===null||B===void 0||B.requestSubmit()},P=function(B,M){if(!(M!=null&&M.novalidate)){var D=h.defineField(B,M),K=qe(D,2),C=K[1];return C}return{}},g=h.handleSubmit(function(A){o("submit",A)}),w=h.handleReset(function(A){o("reset",A)});return We({formRef:y,submit:b,register:P,onSubmit:g,onReset:w},ke(h,["handleSubmit","handleReset"]))}};function er(e,r,t,o,y,h){return Le(),Ae("form",re({ref:"formRef",onSubmit:r[0]||(r[0]=le(function(){return o.onSubmit&&o.onSubmit.apply(o,arguments)},["prevent"])),onReset:r[1]||(r[1]=le(function(){return o.onReset&&o.onReset.apply(o,arguments)},["prevent"])),class:e.cx("root")},e.ptmi("root")),[Fe(e.$slots,"default",re({register:o.register,valid:e.valid,reset:e.reset},e.states))],16)}Ze.render=er;export{Ze as default};
