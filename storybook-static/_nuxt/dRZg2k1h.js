import{c as h}from"./Be1fzYNM.js";import{s as v}from"./BJYa0Vlh.js";import{s as $}from"./DB48Du0g.js";import{R as w}from"./CyeDdDHw.js";import{s as P}from"./xQwSG8Qu.js";import{B as k}from"./DqbVwyie.js";import{s as O,c as g,o as d,b as a,z as B,a as p,e as c,l as u,m as r,t as f,n as S,d as j,p as D,k as L,v as C,q as I}from"./DY6LMajd.js";import"./B3EbFrEO.js";import"./CZg7ZADd.js";import"./DmfvTtO6.js";var E=({dt:e})=>`
.p-fieldset {
    background: ${e("fieldset.background")};
    border: 1px solid ${e("fieldset.border.color")};
    border-radius: ${e("fieldset.border.radius")};
    color: ${e("fieldset.color")};
    padding: ${e("fieldset.padding")};
    margin: 0;
}

.p-fieldset-legend {
    background: ${e("fieldset.legend.background")};
    border-radius: ${e("fieldset.legend.border.radius")};
    border-width: ${e("fieldset.legend.border.width")};
    border-style: solid;
    border-color: ${e("fieldset.legend.border.color")};
    padding: ${e("fieldset.legend.padding")};
    transition: background ${e("fieldset.transition.duration")}, color ${e("fieldset.transition.duration")}, outline-color ${e("fieldset.transition.duration")}, box-shadow ${e("fieldset.transition.duration")};
}

.p-fieldset-toggleable > .p-fieldset-legend {
    padding: 0;
}

.p-fieldset-toggle-button {
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    display: flex;
    gap: ${e("fieldset.legend.gap")};
    align-items: center;
    justify-content: center;
    padding: ${e("fieldset.legend.padding")};
    background: transparent;
    border: 0 none;
    border-radius: ${e("fieldset.legend.border.radius")};
    transition: background ${e("fieldset.transition.duration")}, color ${e("fieldset.transition.duration")}, outline-color ${e("fieldset.transition.duration")}, box-shadow ${e("fieldset.transition.duration")};
    outline-color: transparent;
}

.p-fieldset-legend-label {
    font-weight: ${e("fieldset.legend.font.weight")};
}

.p-fieldset-toggle-button:focus-visible {
    box-shadow: ${e("fieldset.legend.focus.ring.shadow")};
    outline: ${e("fieldset.legend.focus.ring.width")} ${e("fieldset.legend.focus.ring.style")} ${e("fieldset.legend.focus.ring.color")};
    outline-offset: ${e("fieldset.legend.focus.ring.offset")};
}

.p-fieldset-toggleable > .p-fieldset-legend:hover {
    color: ${e("fieldset.legend.hover.color")};
    background: ${e("fieldset.legend.hover.background")};
}

.p-fieldset-toggle-icon {
    color: ${e("fieldset.toggle.icon.color")};
    transition: color ${e("fieldset.transition.duration")};
}

.p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
    color: ${e("fieldset.toggle.icon.hover.color")};
}

.p-fieldset .p-fieldset-content {
    padding: ${e("fieldset.content.padding")};
}
`,K={root:function(t){var n=t.props;return["p-fieldset p-component",{"p-fieldset-toggleable":n.toggleable}]},legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},N=k.extend({name:"fieldset",style:E,classes:K}),A={name:"BaseFieldset",extends:P,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:N,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},F={name:"Fieldset",extends:A,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(t){this.d_collapsed=t}},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend},dataP:function(){return h({toggleable:this.toggleable})}},directives:{ripple:w},components:{PlusIcon:$,MinusIcon:v}};function s(e){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(e)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?b(Object(n),!0).forEach(function(o){V(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function V(e,t,n){return(t=z(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e){var t=M(e,"string");return s(t)=="symbol"?t:t+""}function M(e,t){if(s(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(s(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var R=["data-p"],T=["data-p"],q=["id"],G=["id","aria-controls","aria-expanded","aria-label"],H=["id","aria-labelledby"];function J(e,t,n,o,i,l){var y=O("ripple");return d(),g("fieldset",r({class:e.cx("root"),"data-p":l.dataP},e.ptmi("root")),[a("legend",r({class:e.cx("legend"),"data-p":l.dataP},e.ptm("legend")),[p(e.$slots,"legend",{toggleCallback:l.toggle},function(){return[e.toggleable?c("",!0):(d(),g("span",r({key:0,id:e.$id+"_header",class:e.cx("legendLabel")},e.ptm("legendLabel")),f(e.legend),17,q)),e.toggleable?u((d(),g("button",r({key:1,id:e.$id+"_header",type:"button","aria-controls":e.$id+"_content","aria-expanded":!i.d_collapsed,"aria-label":l.buttonAriaLabel,class:e.cx("toggleButton"),onClick:t[0]||(t[0]=function(){return l.toggle&&l.toggle.apply(l,arguments)}),onKeydown:t[1]||(t[1]=function(){return l.onKeyDown&&l.onKeyDown.apply(l,arguments)})},m(m({},e.toggleButtonProps),e.ptm("toggleButton"))),[p(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:i.d_collapsed,class:S(e.cx("toggleIcon"))},function(){return[(d(),j(D(i.d_collapsed?"PlusIcon":"MinusIcon"),r({class:e.cx("toggleIcon")},e.ptm("toggleIcon")),null,16,["class"]))]}),a("span",r({class:e.cx("legendLabel")},e.ptm("legendLabel")),f(e.legend),17)],16,G)),[[y]]):c("",!0)]})],16,T),B(I,r({name:"p-toggleable-content"},e.ptm("transition")),{default:L(function(){return[u(a("div",r({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[a("div",r({class:e.cx("content")},e.ptm("content")),[p(e.$slots,"default")],16)],16,H),[[C,!i.d_collapsed]])]}),_:3},16)],16,R)}F.render=J;export{F as default};
