import{B as l,M as r,ak as m,w as a}from"./DqbVwyie.js";import{Z as n}from"./DGEOgZpe.js";import{u as c,b as d}from"./CCQ_ZXOd.js";import{s as k}from"./xQwSG8Qu.js";import{c as u,o as p,a as h,m as b}from"./DY6LMajd.js";var f=({dt:s})=>`
.p-blockui {
    position: relative;
}

.p-blockui-mask {
    border-radius: ${s("blockui.border.radius")};
}

.p-blockui-mask.p-overlay-mask {
    position: absolute;
}

.p-blockui-mask-document.p-overlay-mask {
    position: fixed;
}
`,v={root:"p-blockui"},y=l.extend({name:"blockui",style:f,classes:v}),B={name:"BaseBlockUI",extends:k,props:{blocked:{type:Boolean,default:!1},fullScreen:{type:Boolean,default:!1},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0}},style:y,provide:function(){return{$pcBlockUI:this,$parentInstance:this}}},x={name:"BlockUI",extends:B,inheritAttrs:!1,emits:["block","unblock"],mask:null,data:function(){return{isBlocked:!1}},watch:{blocked:function(e){e===!0?this.block():this.unblock()}},mounted:function(){this.blocked&&this.block()},methods:{block:function(){var e="p-blockui-mask p-overlay-mask p-overlay-mask-enter";this.fullScreen?(e+=" p-blockui-mask-document",this.mask=a("div",{style:{position:"fixed",top:"0",left:"0",width:"100%",height:"100%"},class:!this.isUnstyled&&e,"p-bind":this.ptm("mask")}),document.body.appendChild(this.mask),d(),document.activeElement.blur()):(this.mask=a("div",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},class:!this.isUnstyled&&e,"p-bind":this.ptm("mask")}),this.$refs.container.appendChild(this.mask)),this.autoZIndex&&n.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal),this.isBlocked=!0,this.$emit("block")},unblock:function(){var e=this;if(this.mask){!this.isUnstyled&&r(this.mask,"p-overlay-mask-leave");var t=function(){clearTimeout(i),e.mask.removeEventListener("animationend",t),e.mask.removeEventListener("webkitAnimationEnd",t)},i=setTimeout(function(){e.removeMask()},10);m(this.mask)>0&&(this.mask.addEventListener("animationend",t),this.mask.addEventListener("webkitAnimationEnd",t))}else this.removeMask()},removeMask:function(){if(n.clear(this.mask),this.fullScreen)document.body.removeChild(this.mask),c();else{var e;(e=this.$refs.container)===null||e===void 0||e.removeChild(this.mask)}this.isBlocked=!1,this.$emit("unblock")}}},I=["aria-busy"];function S(s,e,t,i,o,$){return p(),u("div",b({ref:"container",class:s.cx("root"),"aria-busy":o.isBlocked},s.ptmi("root")),[h(s.$slots,"default")],16,I)}x.render=S;export{x as default};
