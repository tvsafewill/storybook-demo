import{s as t}from"./xQwSG8Qu.js";import{B as i}from"./DqbVwyie.js";import{c as e,o as s,m as r,b as p}from"./DY6LMajd.js";var a=({dt:n})=>`
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: ${n("progressspinner.colorOne")};
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: ${n("progressspinner.color.one")};
    }
    40% {
        stroke: ${n("progressspinner.color.two")};
    }
    66% {
        stroke: ${n("progressspinner.color.three")};
    }
    80%,
    90% {
        stroke: ${n("progressspinner.color.four")};
    }
}
`,l={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},c=i.extend({name:"progressspinner",style:a,classes:l}),d={name:"BaseProgressSpinner",extends:t,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:c,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},g={name:"ProgressSpinner",extends:d,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},f=["fill","stroke-width"];function m(n,h,k,u,y,o){return s(),e("div",r({class:n.cx("root"),role:"progressbar"},n.ptmi("root")),[(s(),e("svg",r({class:n.cx("spin"),viewBox:"25 25 50 50",style:o.svgStyle},n.ptm("spin")),[p("circle",r({class:n.cx("circle"),cx:"50",cy:"50",r:"20",fill:n.fill,"stroke-width":n.strokeWidth,strokeMiterlimit:"10"},n.ptm("circle")),null,16,f)],16))],16)}g.render=m;export{g as default};
