import r from"./BDeDiePN.js";import{B as n}from"./DqbVwyie.js";import{j as o,c as s,o as l,a as i,z as p,m as a}from"./DY6LMajd.js";import"./Be1fzYNM.js";import"./xQwSG8Qu.js";var d=({dt:e})=>`
.p-overlaybadge {
    position: relative;
}

.p-overlaybadge .p-badge {
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
    outline-width: ${e("overlaybadge.outline.width")};
    outline-style: solid;
    outline-color: ${e("overlaybadge.outline.color")};
}

.p-overlaybadge .p-badge:dir(rtl) {
    transform: translate(-50%, -50%);
}
`,m={root:"p-overlaybadge"},v=n.extend({name:"overlaybadge",style:d,classes:m}),c={name:"OverlayBadge",extends:r,style:v,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},g={name:"OverlayBadge",extends:c,inheritAttrs:!1,components:{Badge:r}};function y(e,u,B,$,b,f){var t=o("Badge");return l(),s("div",a({class:e.cx("root")},e.ptmi("root")),[i(e.$slots,"default"),p(t,a(e.$props,{pt:e.ptm("pcBadge")}),null,16,["pt"])],16)}g.render=y;export{g as default};
