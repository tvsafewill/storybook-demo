import{B as h,k as B}from"./DqbVwyie.js";import{s as w}from"./DEyQw1Qx.js";import v from"./CV8AKT6G.js";import $ from"./C3wHHOoo.js";import{s as S}from"./xQwSG8Qu.js";import{j as b,c as k,o as c,z as u,y as f,k as o,a as i,n as a,b as C,m as s,d as D,p as I}from"./DY6LMajd.js";import"./B3EbFrEO.js";import"./Be1fzYNM.js";import"./CoGOkgiW.js";import"./BDeDiePN.js";import"./CyeDdDHw.js";import"./CZg7ZADd.js";import"./DmfvTtO6.js";import"./DGEOgZpe.js";import"./C1Q51F-h.js";import"./sJfwQox4.js";import"./DJJ2nUAv.js";import"./D1TNJVux.js";var g=({dt:n})=>`
.p-splitbutton {
    display: inline-flex;
    position: relative;
    border-radius: ${n("splitbutton.border.radius")};
}

.p-splitbutton-button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
    border-inline-end: 0 none;
}

.p-splitbutton-button:focus-visible,
.p-splitbutton-dropdown:focus-visible {
    z-index: 1;
}

.p-splitbutton-button:not(:disabled):hover,
.p-splitbutton-button:not(:disabled):active {
    border-inline-end: 0 none;
}

.p-splitbutton-dropdown {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
}

.p-splitbutton .p-menu {
    min-width: 100%;
}

.p-splitbutton-fluid {
    display: flex;
}

.p-splitbutton-rounded .p-splitbutton-dropdown {
    border-start-end-radius: ${n("splitbutton.rounded.border.radius")};
    border-end-end-radius: ${n("splitbutton.rounded.border.radius")};
}

.p-splitbutton-rounded .p-splitbutton-button {
    border-start-start-radius: ${n("splitbutton.rounded.border.radius")};
    border-end-start-radius: ${n("splitbutton.rounded.border.radius")};
}

.p-splitbutton-raised {
    box-shadow: ${n("splitbutton.raised.shadow")};
}
`,z={root:function(t){var l=t.instance,r=t.props;return["p-splitbutton p-component",{"p-splitbutton-raised":r.raised,"p-splitbutton-rounded":r.rounded,"p-splitbutton-fluid":l.hasFluid}]},pcButton:"p-splitbutton-button",pcDropdown:"p-splitbutton-dropdown"},V=h.extend({name:"splitbutton",style:g,classes:z}),Z={name:"BaseSplitButton",extends:S,props:{label:{type:String,default:null},icon:{type:String,default:null},model:{type:Array,default:null},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1},fluid:{type:Boolean,default:null},class:{type:null,default:null},style:{type:null,default:null},buttonProps:{type:null,default:null},menuButtonProps:{type:null,default:null},menuButtonIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},style:V,provide:function(){return{$pcSplitButton:this,$parentInstance:this}}},E={name:"SplitButton",extends:Z,inheritAttrs:!1,emits:["click"],inject:{$pcFluid:{default:null}},data:function(){return{isExpanded:!1}},mounted:function(){var t=this;this.$watch("$refs.menu.visible",function(l){t.isExpanded=l})},methods:{onDropdownButtonClick:function(t){t&&t.preventDefault(),this.$refs.menu.toggle({currentTarget:this.$el,relatedTarget:this.$refs.button.$el}),this.isExpanded=this.$refs.menu.visible},onDropdownKeydown:function(t){(t.code==="ArrowDown"||t.code==="ArrowUp")&&(this.onDropdownButtonClick(),t.preventDefault())},onDefaultButtonClick:function(t){this.isExpanded&&this.$refs.menu.hide(t),this.$emit("click",t)}},computed:{containerClass:function(){return[this.cx("root"),this.class]},hasFluid:function(){return B(this.fluid)?!!this.$pcFluid:this.fluid}},components:{PVSButton:v,PVSMenu:$,ChevronDownIcon:w}},T=["data-p-severity"];function F(n,t,l,r,m,d){var p=b("PVSButton"),y=b("PVSMenu");return c(),k("div",s({class:d.containerClass,style:n.style},n.ptmi("root"),{"data-p-severity":n.severity}),[u(p,s({type:"button",class:n.cx("pcButton"),label:n.label,disabled:n.disabled,severity:n.severity,text:n.text,icon:n.icon,outlined:n.outlined,size:n.size,fluid:n.fluid,"aria-label":n.label,onClick:d.onDefaultButtonClick},n.buttonProps,{pt:n.ptm("pcButton"),unstyled:n.unstyled}),f({default:o(function(){return[i(n.$slots,"default")]}),_:2},[n.$slots.icon?{name:"icon",fn:o(function(e){return[i(n.$slots,"icon",{class:a(e.class)},function(){return[C("span",s({class:[n.icon,e.class]},n.ptm("pcButton").icon,{"data-pc-section":"buttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","label","disabled","severity","text","icon","outlined","size","fluid","aria-label","onClick","pt","unstyled"]),u(p,s({ref:"button",type:"button",class:n.cx("pcDropdown"),disabled:n.disabled,"aria-haspopup":"true","aria-expanded":m.isExpanded,"aria-controls":n.$id+"_overlay",onClick:d.onDropdownButtonClick,onKeydown:d.onDropdownKeydown,severity:n.severity,text:n.text,outlined:n.outlined,size:n.size,unstyled:n.unstyled},n.menuButtonProps,{pt:n.ptm("pcDropdown")}),{icon:o(function(e){return[i(n.$slots,n.$slots.dropdownicon?"dropdownicon":"menubuttonicon",{class:a(e.class)},function(){return[(c(),D(I(n.menuButtonIcon||n.dropdownIcon?"span":"ChevronDownIcon"),s({class:[n.dropdownIcon||n.menuButtonIcon,e.class]},n.ptm("pcDropdown").icon,{"data-pc-section":"menubuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-expanded","aria-controls","onClick","onKeydown","severity","text","outlined","size","unstyled","pt"]),u(y,{ref:"menu",id:n.$id+"_overlay",model:n.model,popup:!0,autoZIndex:n.autoZIndex,baseZIndex:n.baseZIndex,appendTo:n.appendTo,unstyled:n.unstyled,pt:n.ptm("pcMenu")},f({_:2},[n.$slots.menuitemicon?{name:"itemicon",fn:o(function(e){return[i(n.$slots,"menuitemicon",{item:e.item,class:a(e.class)})]}),key:"0"}:void 0,n.$slots.item?{name:"item",fn:o(function(e){return[i(n.$slots,"item",{item:e.item,hasSubmenu:e.hasSubmenu,label:e.label,props:e.props})]}),key:"1"}:void 0]),1032,["id","model","autoZIndex","baseZIndex","appendTo","unstyled","pt"])],16,T)}E.render=F;export{E as default};
