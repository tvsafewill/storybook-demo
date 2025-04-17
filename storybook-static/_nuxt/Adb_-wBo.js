import{r as g,w as y}from"./DY6LMajd.js";import{_ as s}from"./CV9I41XK.js";import"./Bi8vgWpf.js";import"./Be1fzYNM.js";import"./DqbVwyie.js";import"./CyeDdDHw.js";import"./CZg7ZADd.js";import"./DmfvTtO6.js";import"./xQwSG8Qu.js";import"./CJ0OMXgg.js";import"./BqAuszHy.js";import"./DlAUqK2U.js";const Y={title:"Components/CustomSelectButton",component:s,tags:["autodocs"],argTypes:{modelValue:{control:"select"},options:{control:"object"},optionLabel:{control:"text"},optionValue:{control:"text"},label:{control:"text"},id:{control:"text"},"onUpdate:modelValue":{action:"update:modelValue"}},parameters:{layout:"centered"},render:n=>({components:{CustomSelectButton:s},setup(){const l=g(n.modelValue);return y(()=>n.modelValue,v=>{l.value=v}),{args:n,modelValueRef:l}},template:'<CustomSelectButton v-bind="args" v-model="modelValueRef" />'})},a=[{name:"Option 1",value:"opt1"},{name:"Option 2",value:"opt2"},{name:"Option 3",value:"opt3"}],r=["Yes","No","Maybe"],e={args:{modelValue:a[0].value,options:a,optionLabel:"name",optionValue:"value",label:"Select an Option",id:"story-select-obj"}},o={args:{modelValue:r[1],options:r,label:"Choose Yes/No/Maybe",id:"story-select-str"}},t={args:{modelValue:a[0].value,options:a,optionLabel:"name",optionValue:"value",id:"story-select-nolabel"}};var p,i,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    modelValue: sampleOptions[0].value,
    // Default selected value
    options: sampleOptions,
    optionLabel: 'name',
    optionValue: 'value',
    label: 'Select an Option',
    id: 'story-select-obj'
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,c,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    modelValue: simpleOptions[1],
    // Default selected value
    options: simpleOptions,
    label: 'Choose Yes/No/Maybe',
    id: 'story-select-str'
    // optionLabel/optionValue not needed for simple string array
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var b,O,V;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    modelValue: sampleOptions[0].value,
    options: sampleOptions,
    optionLabel: 'name',
    optionValue: 'value',
    id: 'story-select-nolabel'
    // label prop is omitted
  }
}`,...(V=(O=t.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const w=["WithObjectOptions","WithStringOptions","NoLabel"];export{t as NoLabel,e as WithObjectOptions,o as WithStringOptions,w as __namedExportsOrder,Y as default};
