import{c as y}from"./Be1fzYNM.js";import{s as v}from"./xQwSG8Qu.js";import{B as M}from"./DqbVwyie.js";import{c as l,o as i,F as h,x as P,m as u,a as s,b as $,n as S,t as g,j as O,e as b,z as f}from"./DY6LMajd.js";var w=({dt:e})=>`
.p-metergroup {
    display: flex;
    gap: ${e("metergroup.gap")};
}

.p-metergroup-meters {
    display: flex;
    background: ${e("metergroup.meters.background")};
    border-radius: ${e("metergroup.border.radius")};
}

.p-metergroup-label-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.p-metergroup-label {
    display: inline-flex;
    align-items: center;
    gap: ${e("metergroup.label.gap")};
}

.p-metergroup-label-marker {
    display: inline-flex;
    width: ${e("metergroup.label.marker.size")};
    height: ${e("metergroup.label.marker.size")};
    border-radius: 100%;
}

.p-metergroup-label-icon {
    font-size: ${e("metergroup.label.icon.size")};
    width: ${e("metergroup.label.icon.size")};
    height: ${e("metergroup.label.icon.size")};
}

.p-metergroup-horizontal {
    flex-direction: column;
}

.p-metergroup-label-list-horizontal {
    gap: ${e("metergroup.label.list.horizontal.gap")};
}

.p-metergroup-horizontal .p-metergroup-meters {
    height: ${e("metergroup.meters.size")};
}

.p-metergroup-horizontal .p-metergroup-meter:first-of-type {
    border-start-start-radius: ${e("metergroup.border.radius")};
    border-end-start-radius: ${e("metergroup.border.radius")};
}

.p-metergroup-horizontal .p-metergroup-meter:last-of-type {
    border-start-end-radius: ${e("metergroup.border.radius")};
    border-end-end-radius: ${e("metergroup.border.radius")};
}

.p-metergroup-vertical {
    flex-direction: row;
}

.p-metergroup-label-list-vertical {
    flex-direction: column;
    gap: ${e("metergroup.label.list.vertical.gap")};
}

.p-metergroup-vertical .p-metergroup-meters {
    flex-direction: column;
    width: ${e("metergroup.meters.size")};
    height: 100%;
}

.p-metergroup-vertical .p-metergroup-label-list {
    align-items: flex-start;
}

.p-metergroup-vertical .p-metergroup-meter:first-of-type {
    border-start-start-radius: ${e("metergroup.border.radius")};
    border-start-end-radius: ${e("metergroup.border.radius")};
}

.p-metergroup-vertical .p-metergroup-meter:last-of-type {
    border-end-start-radius: ${e("metergroup.border.radius")};
    border-end-end-radius: ${e("metergroup.border.radius")};
}
`,G={root:function(r){var t=r.props;return["p-metergroup p-component",{"p-metergroup-horizontal":t.orientation==="horizontal","p-metergroup-vertical":t.orientation==="vertical"}]},meters:"p-metergroup-meters",meter:"p-metergroup-meter",labelList:function(r){var t=r.props;return["p-metergroup-label-list",{"p-metergroup-label-list-vertical":t.labelOrientation==="vertical","p-metergroup-label-list-horizontal":t.labelOrientation==="horizontal"}]},label:"p-metergroup-label",labelIcon:"p-metergroup-label-icon",labelMarker:"p-metergroup-label-marker",labelText:"p-metergroup-label-text"},L=M.extend({name:"metergroup",style:w,classes:G}),V={name:"MeterGroup",extends:v,props:{value:{type:Array,default:null},min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:"horizontal"},labelPosition:{type:String,default:"end"},labelOrientation:{type:String,default:"horizontal"}},style:L,provide:function(){return{$pcMeterGroup:this,$parentInstance:this}}};function m(e){"@babel/helpers - typeof";return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},m(e)}function j(e,r,t){return(r=C(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function C(e){var r=N(e,"string");return m(r)=="symbol"?r:r+""}function N(e,r){if(m(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var a=t.call(e,r);if(m(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}var z={name:"MeterGroupLabel",hostName:"MeterGroup",extends:v,inheritAttrs:!1,inject:["$pcMeterGroup"],props:{value:{type:Array,default:null},labelPosition:{type:String,default:"end"},labelOrientation:{type:String,default:"horizontal"}},computed:{dataP:function(){return y(j({},this.$pcMeterGroup.labelOrientation,this.$pcMeterGroup.labelOrientation))}}},T=["data-p"];function I(e,r,t,a,k,n){return i(),l("ol",u({class:e.cx("labelList"),"data-p":n.dataP},e.ptm("labelList")),[(i(!0),l(h,null,P(t.value,function(o,p){return i(),l("li",u({key:p+"_label",class:e.cx("label"),ref_for:!0},e.ptm("label")),[s(e.$slots,"icon",{value:o,class:S(e.cx("labelIcon"))},function(){return[o.icon?(i(),l("i",u({key:0,class:[o.icon,e.cx("labelIcon")],style:{color:o.color},ref_for:!0},e.ptm("labelIcon")),null,16)):(i(),l("span",u({key:1,class:e.cx("labelMarker"),style:{backgroundColor:o.color},ref_for:!0},e.ptm("labelMarker")),null,16))]}),$("span",u({class:e.cx("labelText"),ref_for:!0},e.ptm("labelText")),g(o.label)+" ("+g(e.$parentInstance.percentValue(o.value))+")",17)],16)}),128))],16,T)}z.render=I;function c(e){"@babel/helpers - typeof";return c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},c(e)}function A(e,r,t){return(r=B(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function B(e){var r=E(e,"string");return c(r)=="symbol"?r:r+""}function E(e,r){if(c(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var a=t.call(e,r);if(c(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}var F={name:"MeterGroup",extends:V,inheritAttrs:!1,methods:{getPTOptions:function(r,t,a){return this.ptm(r,{context:{value:t,index:a}})},percent:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,t=(r-this.min)/(this.max-this.min)*100;return Math.round(Math.max(0,Math.min(100,t)))},percentValue:function(r){return this.percent(r)+"%"},meterCalculatedStyles:function(r){return{backgroundColor:r.color,width:this.orientation==="horizontal"&&this.percentValue(r.value),height:this.orientation==="vertical"&&this.percentValue(r.value)}}},computed:{totalPercent:function(){return this.percent(this.value.reduce(function(r,t){return r+t.value},0))},percentages:function(){var r=0,t=[];return this.value.forEach(function(a){r+=a.value,t.push(r)}),t},dataP:function(){return y(A({},this.orientation,this.orientation))}},components:{MeterGroupLabel:z}},K=["aria-valuemin","aria-valuemax","aria-valuenow","data-p"],D=["data-p"],q=["data-p"];function H(e,r,t,a,k,n){var o=O("MeterGroupLabel");return i(),l("div",u({class:e.cx("root"),role:"meter","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":n.totalPercent,"data-p":n.dataP},e.ptmi("root")),[e.labelPosition==="start"?s(e.$slots,"label",{key:0,value:e.value,totalPercent:n.totalPercent,percentages:n.percentages},function(){return[f(o,{value:e.value,labelPosition:e.labelPosition,labelOrientation:e.labelOrientation,unstyled:e.unstyled,pt:e.pt},null,8,["value","labelPosition","labelOrientation","unstyled","pt"])]}):b("",!0),s(e.$slots,"start",{value:e.value,totalPercent:n.totalPercent,percentages:n.percentages}),$("div",u({class:e.cx("meters"),"data-p":n.dataP},e.ptm("meters")),[(i(!0),l(h,null,P(e.value,function(p,d){return s(e.$slots,"meter",{key:d,value:p,index:d,class:S(e.cx("meter")),orientation:e.orientation,size:n.percentValue(p.value),totalPercent:n.totalPercent},function(){return[n.percent(p.value)?(i(),l("span",u({key:0,class:e.cx("meter"),style:n.meterCalculatedStyles(p),"data-p":n.dataP,ref_for:!0},n.getPTOptions("meter",p,d)),null,16,q)):b("",!0)]})}),128))],16,D),s(e.$slots,"end",{value:e.value,totalPercent:n.totalPercent,percentages:n.percentages}),e.labelPosition==="end"?s(e.$slots,"label",{key:1,value:e.value,totalPercent:n.totalPercent,percentages:n.percentages},function(){return[f(o,{value:e.value,labelPosition:e.labelPosition,labelOrientation:e.labelOrientation,unstyled:e.unstyled,pt:e.pt},null,8,["value","labelPosition","labelOrientation","unstyled","pt"])]}):b("",!0)],16,K)}F.render=H;export{F as default};
