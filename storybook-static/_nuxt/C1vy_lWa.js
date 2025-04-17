import{B as d,a2 as f}from"./DqbVwyie.js";import{Z as o}from"./DGEOgZpe.js";import{s as m}from"./BElFpRxF.js";import h from"./CV8AKT6G.js";import{s as v}from"./xQwSG8Qu.js";import{j as b,d as r,o as i,k as c,e as L,m as s,a as y,n as S,p as w,q as k}from"./DY6LMajd.js";import"./B3EbFrEO.js";import"./Be1fzYNM.js";import"./CoGOkgiW.js";import"./BDeDiePN.js";import"./CyeDdDHw.js";import"./CZg7ZADd.js";import"./DmfvTtO6.js";var g=`
.p-scrolltop.p-button {
    position: fixed !important;
    inset-block-end: 20px;
    inset-inline-end: 20px;
}

.p-scrolltop-sticky.p-button {
    position: sticky !important;
    display: flex;
    margin-inline-start: auto;
}

.p-scrolltop-enter-from {
    opacity: 0;
}

.p-scrolltop-enter-active {
    transition: opacity 0.15s;
}

.p-scrolltop.p-scrolltop-leave-to {
    opacity: 0;
}

.p-scrolltop-leave-active {
    transition: opacity 0.15s;
}
`,E={root:function(n){var l=n.props;return["p-scrolltop",{"p-scrolltop-sticky":l.target!=="window"}]},icon:"p-scrolltop-icon"},$=d.extend({name:"scrolltop",style:g,classes:E}),C={name:"BaseScrollTop",extends:v,props:{target:{type:String,default:"window"},threshold:{type:Number,default:400},icon:{type:String,default:void 0},behavior:{type:String,default:"smooth"},buttonProps:{type:Object,default:function(){return{rounded:!0}}}},style:$,provide:function(){return{$pcScrollTop:this,$parentInstance:this}}},T={name:"ScrollTop",extends:C,inheritAttrs:!1,scrollListener:null,container:null,data:function(){return{visible:!1}},mounted:function(){this.target==="window"?this.bindDocumentScrollListener():this.target==="parent"&&this.bindParentScrollListener()},beforeUnmount:function(){this.target==="window"?this.unbindDocumentScrollListener():this.target==="parent"&&this.unbindParentScrollListener(),this.container&&(o.clear(this.container),this.overlay=null)},methods:{onClick:function(){var n=this.target==="window"?window:this.$el.parentElement;n.scroll({top:0,behavior:this.behavior})},checkVisibility:function(n){n>this.threshold?this.visible=!0:this.visible=!1},bindParentScrollListener:function(){var n=this;this.scrollListener=function(){n.checkVisibility(n.$el.parentElement.scrollTop)},this.$el.parentElement.addEventListener("scroll",this.scrollListener)},bindDocumentScrollListener:function(){var n=this;this.scrollListener=function(){n.checkVisibility(f())},window.addEventListener("scroll",this.scrollListener)},unbindParentScrollListener:function(){this.scrollListener&&(this.$el.parentElement.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},unbindDocumentScrollListener:function(){this.scrollListener&&(window.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},onEnter:function(n){o.set("overlay",n,this.$primevue.config.zIndex.overlay)},onAfterLeave:function(n){o.clear(n)},containerRef:function(n){this.container=n?n.$el:void 0}},computed:{scrollTopAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.scrollTop:void 0}},components:{ChevronUpIcon:m,Button:h}};function A(e,n,l,P,a,t){var p=b("Button");return i(),r(k,s({name:"p-scrolltop",appear:"",onEnter:t.onEnter,onAfterLeave:t.onAfterLeave},e.ptm("transition")),{default:c(function(){return[a.visible?(i(),r(p,s({key:0,ref:t.containerRef,class:e.cx("root"),onClick:t.onClick,"aria-label":t.scrollTopAriaLabel,unstyled:e.unstyled},e.buttonProps,{pt:e.ptm("root")}),{icon:c(function(u){return[y(e.$slots,"icon",{class:S(e.cx("icon"))},function(){return[(i(),r(w(e.icon?"span":"ChevronUpIcon"),s({class:[e.cx("icon"),e.icon,u.class]},e.ptm("root").icon,{"data-pc-section":"icon"}),null,16,["class"]))]})]}),_:3},16,["class","onClick","aria-label","unstyled","pt"])):L("",!0)]}),_:3},16,["onEnter","onAfterLeave"])}T.render=A;export{T as default};
