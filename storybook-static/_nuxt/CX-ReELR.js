import{w as I,u as s}from"./-XOOWjqP.js";import{_ as k}from"./CV9I41XK.js";import{f as A,r as l,c as g,b as e,e as C,t as D,z as r,u,k as b,E as T,o as w,h as q}from"./DY6LMajd.js";import R from"./B60zhWAS.js";import P from"./2E5cVRtk.js";import U from"./CV8AKT6G.js";import $ from"./DV9fmgBF.js";import L from"./Zn7ixzD9.js";import{_ as O}from"./DlAUqK2U.js";import"./Bi8vgWpf.js";import"./Be1fzYNM.js";import"./DqbVwyie.js";import"./CyeDdDHw.js";import"./CZg7ZADd.js";import"./DmfvTtO6.js";import"./xQwSG8Qu.js";import"./CJ0OMXgg.js";import"./BqAuszHy.js";import"./-44iJlvR.js";import"./CP4V5_YK.js";import"./B3EbFrEO.js";import"./DlG2Ibku.js";import"./CoGOkgiW.js";import"./BDeDiePN.js";const Q={class:"card product-form-card"},j={key:0,class:"col-12 mt-4 message-section"},z={class:"col-12 flex justify-center mt-3"},G={class:"field col-12"},H={class:"field col-12 md:col-6"},J={class:"field col-12 md:col-6"},M={class:"field col-12"},h=A({__name:"ProductForm",setup(f){const a=l(null),o=l(null),i=l(null),c=l([{name:"Electronics",value:"electronics"},{name:"Accessories",value:"accessories"},{name:"Clothing",value:"clothing"},{name:"Home Goods",value:"home_goods"}]),p=l(c.value[0].value),y=l(null),N=()=>{const v={name:a.value,price:o.value,quantity:i.value,category:p.value};y.value=v,console.log("Submitting Product:",v)};return(v,t)=>{const S=k;return w(),g("div",Q,[e("form",{onSubmit:T(N,["prevent"]),class:"p-fluid grid formgrid"},[y.value?(w(),g("div",j,[t[4]||(t[4]=e("h4",null,"Submitted Data:",-1)),e("pre",null,D(JSON.stringify(y.value,null,2)),1)])):C("",!0),t[9]||(t[9]=e("h3",{class:"col-12 text-center mb-4"},"Add Product",-1)),e("div",z,[r(u(U),{type:"submit",label:"Add Product",icon:"pi pi-plus"})]),e("div",G,[t[5]||(t[5]=e("label",{for:"productName"},"Product Name",-1)),r(u(R),{id:"productName",modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=n=>a.value=n)},null,8,["modelValue"])]),e("div",H,[t[7]||(t[7]=e("label",{for:"price"},"Price",-1)),r(u($),null,{default:b(()=>[r(u(L),null,{default:b(()=>t[6]||(t[6]=[q("$")])),_:1}),r(u(P),{id:"price",modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=n=>o.value=n),mode:"decimal",minFractionDigits:2,maxFractionDigits:2},null,8,["modelValue"])]),_:1})]),e("div",J,[t[8]||(t[8]=e("label",{for:"quantity"},"Quantity",-1)),r(u(P),{id:"quantity",modelValue:i.value,"onUpdate:modelValue":t[2]||(t[2]=n=>i.value=n),integeronly:""},null,8,["modelValue"])]),e("div",M,[r(S,{label:"Select Category",modelValue:p.value,"onUpdate:modelValue":t[3]||(t[3]=n=>p.value=n),options:c.value,optionLabel:"name",optionValue:"value"},null,8,["modelValue","options"])])],32)])}}}),K=O(h,[["__scopeId","data-v-4046b480"]]);h.__docgenInfo={exportName:"default",displayName:"ProductForm",description:"",tags:{},sourceFiles:["/Users/tantungvo/dev/storybook-demo/nuxt-primevue-app/components/ProductForm.vue"]};const Pt={title:"Components/ProductForm",component:K,tags:["autodocs"],argTypes:{},parameters:{layout:"centered"}},m={args:{}},d={args:{},play:async({canvasElement:f,step:a})=>{const o=I(f);await a("Enter product details",async()=>{await s.type(o.getByLabelText("Product Name"),"Test Product");const i=o.getByRole("spinbutton",{name:"Price"});await s.clear(i),await s.type(i,"123.45");const c=o.getByRole("spinbutton",{name:"Quantity"});await s.clear(c),await s.type(c,"50"),await s.click(o.getByRole("button",{name:"Accessories"}))}),await a("Form filled snapshot",async()=>{}),await a("Submit the form",async()=>{await s.click(o.getByRole("button",{name:"Add Product"}))}),await a("Form submitted snapshot",async()=>{})}};var _,V,x;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    // Props to pass to the component for this story
    // Since ProductForm manages its own state internally now, 
    // we don't need to pass much here unless we add props later.
  }
}`,...(x=(V=m.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var B,F,E;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    // ... same args as Default ...
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Enter product details', async () => {
      // Use label text to find controls for standard InputText
      await userEvent.type(canvas.getByLabelText('Product Name'), 'Test Product');

      // Target InputNumber using its role and accessible name derived from the label
      const priceInput = canvas.getByRole('spinbutton', {
        name: 'Price'
      });
      await userEvent.clear(priceInput);
      await userEvent.type(priceInput, '123.45');
      const quantityInput = canvas.getByRole('spinbutton', {
        name: 'Quantity'
      });
      await userEvent.clear(quantityInput);
      await userEvent.type(quantityInput, '50');

      // Click a category button (CustomSelectButton renders buttons)
      await userEvent.click(canvas.getByRole('button', {
        name: 'Accessories'
      }));
    });

    // Visual snapshot point 1: After filling form
    await step('Form filled snapshot', async () => {});
    await step('Submit the form', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: 'Add Product'
      }));
    });

    // Visual snapshot point 2: After submission (shows submitted data)
    await step('Form submitted snapshot', async () => {
      // Optional: Add functional assertions here if needed
      // await expect(canvas.getByText('Submitted Data:')).toBeInTheDocument();
    });
  }
}`,...(E=(F=d.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};const _t=["Default","FilledForm"];export{m as Default,d as FilledForm,_t as __namedExportsOrder,Pt as default};
