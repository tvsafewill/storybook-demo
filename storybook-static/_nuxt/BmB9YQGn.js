import{s as t}from"./xQwSG8Qu.js";import{B as n}from"./DqbVwyie.js";import{c as s,o as l,b as a,a as o,m as e}from"./DY6LMajd.js";var p=({dt:r})=>`
.p-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: ${r("toolbar.padding")};
    background: ${r("toolbar.background")};
    border: 1px solid ${r("toolbar.border.color")};
    color: ${r("toolbar.color")};
    border-radius: ${r("toolbar.border.radius")};
    gap: ${r("toolbar.gap")};
}

.p-toolbar-start,
.p-toolbar-center,
.p-toolbar-end {
    display: flex;
    align-items: center;
}
`,d={root:"p-toolbar p-component",start:"p-toolbar-start",center:"p-toolbar-center",end:"p-toolbar-end"},i=n.extend({name:"toolbar",style:p,classes:d}),b={name:"BaseToolbar",extends:t,props:{ariaLabelledby:{type:String,default:null}},style:i,provide:function(){return{$pcToolbar:this,$parentInstance:this}}},c={name:"Toolbar",extends:b,inheritAttrs:!1},m=["aria-labelledby"];function $(r,u,y,f,v,g){return l(),s("div",e({class:r.cx("root"),role:"toolbar","aria-labelledby":r.ariaLabelledby},r.ptmi("root")),[a("div",e({class:r.cx("start")},r.ptm("start")),[o(r.$slots,"start")],16),a("div",e({class:r.cx("center")},r.ptm("center")),[o(r.$slots,"center")],16),a("div",e({class:r.cx("end")},r.ptm("end")),[o(r.$slots,"end")],16)],16,m)}c.render=$;export{c as default};
