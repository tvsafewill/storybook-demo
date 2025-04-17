import{B as l,aj as c,$ as d}from"./DqbVwyie.js";import{s as t}from"./xQwSG8Qu.js";import{c as s,o as p,a as i,b as g,m}from"./DY6LMajd.js";var h=({dt:e})=>`
.p-imagecompare {
    position: relative;
    overflow: hidden;
    width: 100%;
    aspect-ratio: 16 / 9;
}

.p-imagecompare img {
    width: 100%;
    height: 100%;
    position: absolute;
}

.p-imagecompare img + img {
    clip-path: polygon(0 0, ${e("imagecompare.scope.x","50%")} 0, ${e("imagecompare.scope.x","50%")} 100%, 0 100%);
}

.p-imagecompare:dir(rtl) img + img {
    clip-path: polygon(calc(100% - ${e("imagecompare.scope.x","50%")}) 0, 100% 0, 100% 100%, calc(100% - ${e("imagecompare.scope.x","50%")}) 100%);
}

.p-imagecompare-slider {
    position: relative;
    -webkit-appearance: none;
    width: calc(100% + ${e("imagecompare.handle.size")});
    height: 100%;
    margin-inline-start: calc(-1 * calc(${e("imagecompare.handle.size")} / 2));
    background-color: transparent;
    outline: none;
    transition: all ${e("imagecompare.handle.transition.duration")};
}

.p-imagecompare-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: ${e("imagecompare.handle.size")};
    width: ${e("imagecompare.handle.size")};
    background: ${e("imagecompare.handle.background")};
    border: ${e("imagecompare.handle.border.width")} solid ${e("imagecompare.handle.border.color")};
    border-radius: ${e("imagecompare.handle.border.radius")};
    background-size: contain;
    cursor: ew-resize;
    transition: all ${e("imagecompare.handle.transition.duration")};
}

.p-imagecompare-slider::-moz-range-thumb {
    height: ${e("imagecompare.handle.size")};
    width: ${e("imagecompare.handle.size")};
    background: ${e("imagecompare.handle.background")};
    border: ${e("imagecompare.handle.border.width")} ${e("imagecompare.handle.border.style")} ${e("imagecompare.handle.border.color")};
    border-radius: ${e("imagecompare.handle.border.radius")};
    background-size: contain;
    cursor: ew-resize;
}

.p-imagecompare-slider:focus-visible::-webkit-slider-thumb {
    box-shadow: ${e("imagecompare.handle.focus.ring.shadow")};
    outline: ${e("imagecompare.handle.focus.ring.width")} ${e("imagecompare.handle.focus.ring.style")} ${e("imagecompare.handle.focus.ring.color")};
    outline-offset: ${e("imagecompare.handle.focus.ring.offset")};
}

.p-imagecompare-slider:focus-visible::-moz-range-thumb {
    box-shadow: ${e("imagecompare.handle.focus.ring.shadow")};
    outline: ${e("imagecompare.handle.focus.ring.width")} ${e("imagecompare.handle.focus.ring.style")} ${e("imagecompare.handle.focus.ring.color")};
    outline-offset: ${e("imagecompare.handle.focus.ring.offset")};
}

.p-imagecompare-slider:hover {
    width: calc(100% + ${e("imagecompare.handle.hover.size")});
    margin-inline-start: calc(-1 * calc(${e("imagecompare.handle.hover.size")} / 2));
}

.p-imagecompare-slider:hover::-webkit-slider-thumb {
    background: ${e("imagecompare.handle.hover.background")};
    border-color: ${e("imagecompare.handle.hover.border.color")};
    height: ${e("imagecompare.handle.hover.size")};
    width: ${e("imagecompare.handle.hover.size")};
}

.p-imagecompare-slider:hover::-moz-range-thumb {
    background: ${e("imagecompare.handle.hover.background")};
    border-color: ${e("imagecompare.handle.hover.border.color")};
    height: ${e("imagecompare.handle.hover.size")};
    width: ${e("imagecompare.handle.hover.size")};
}
`,u={root:"p-imagecompare",slider:"p-imagecompare-slider"},b=l.extend({name:"imagecompare",style:h,classes:u}),$={name:"BaseImageCompare",extends:t,props:{tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:b,provide:function(){return{$pcImageCompare:this,$parentInstance:this}}},f={name:"ImageCompare",extends:$,methods:{onSlide:function(a){var n=a.target.value,o=a.target.previousElementSibling;c(o,d("imagecompare.scope.x").name,"".concat(n,"%"))}}},v=["aria-labelledby","aria-label"];function w(e,a,n,o,y,r){return p(),s("div",m({class:e.cx("root"),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptmi("root")),[i(e.$slots,"left"),i(e.$slots,"right"),g("input",m({type:"range",min:"0",max:"100",value:"50",onInput:a[0]||(a[0]=function(){return r.onSlide&&r.onSlide.apply(r,arguments)}),class:e.cx("slider")},e.ptm("slider")),null,16)],16,v)}f.render=w;export{f as default};
