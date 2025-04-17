import{w as N,u as r}from"./-XOOWjqP.js";import{_ as D}from"./CV9I41XK.js";import{f as h,r as n,c as y,o as b,b as t,e as k,z as l,u as p,t as C,E as R}from"./DY6LMajd.js";import g from"./B60zhWAS.js";import T from"./CV8AKT6G.js";import{_ as L}from"./DlAUqK2U.js";import"./Bi8vgWpf.js";import"./Be1fzYNM.js";import"./DqbVwyie.js";import"./CyeDdDHw.js";import"./CZg7ZADd.js";import"./DmfvTtO6.js";import"./xQwSG8Qu.js";import"./CJ0OMXgg.js";import"./BqAuszHy.js";import"./-44iJlvR.js";import"./CoGOkgiW.js";import"./B3EbFrEO.js";import"./BDeDiePN.js";const j={class:"card user-form-card"},I={class:"field col-12"},J={class:"field col-12 md:col-6"},O={class:"field col-12 md:col-6"},A={class:"col-12 flex justify-center mt-3"},z={key:0,class:"col-12 mt-4 message-section"},B=h({__name:"UserForm",setup(v){const a=n(null),s=n(null),f=n([{name:"Admin",value:"admin"},{name:"Editor",value:"editor"},{name:"Viewer",value:"viewer"}]),u=n(f.value[0].value),c=n(null),V=()=>{const d={name:a.value,email:s.value,role:u.value};c.value=d,console.log("Submitting User:",d)};return(d,e)=>{const F=D;return b(),y("div",j,[t("form",{onSubmit:R(V,["prevent"]),class:"p-fluid grid formgrid"},[e[6]||(e[6]=t("h3",{class:"col-12 text-center mb-4"},"Create User",-1)),t("div",I,[l(F,{label:"Select Role",modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=o=>u.value=o),options:f.value,optionLabel:"name",optionValue:"value",id:"userRole"},null,8,["modelValue","options"])]),t("div",J,[e[3]||(e[3]=t("label",{for:"userName"},"Name",-1)),l(p(g),{id:"userName",modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=o=>a.value=o)},null,8,["modelValue"])]),t("div",O,[e[4]||(e[4]=t("label",{for:"userEmail"},"Email",-1)),l(p(g),{id:"userEmail",type:"email",modelValue:s.value,"onUpdate:modelValue":e[2]||(e[2]=o=>s.value=o)},null,8,["modelValue"])]),t("div",A,[l(p(T),{type:"submit",label:"Create User",icon:"pi pi-user-plus"})]),c.value?(b(),y("div",z,[e[5]||(e[5]=t("h4",null,"Submitted User Data:",-1)),t("pre",null,C(JSON.stringify(c.value,null,2)),1)])):k("",!0)],32)])}}}),M=L(B,[["__scopeId","data-v-b8281ea5"]]);B.__docgenInfo={exportName:"default",displayName:"UserForm",description:"",tags:{},sourceFiles:["/Users/tantungvo/dev/storybook-demo/nuxt-primevue-app/components/UserForm.vue"]};const ie={title:"Components/UserForm",component:M,tags:["autodocs"],parameters:{layout:"centered"}},i={args:{}},m={args:{},play:async({canvasElement:v,step:a})=>{const s=N(v);await a("Enter user details",async()=>{await r.click(s.getByRole("button",{name:"Editor"})),await r.type(s.getByLabelText("Name"),"Jane Doe"),await r.type(s.getByLabelText("Email"),"jane.doe@example.com")}),await a("User form filled snapshot",async()=>{}),await a("Submit the user form",async()=>{await r.click(s.getByRole("button",{name:"Create User"}))}),await a("User form submitted snapshot",async()=>{})}};var w,E,U;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    // Form manages its own state internally
  }
}`,...(U=(E=i.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var _,x,S;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    // ... same args as Default ...
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Enter user details', async () => {
      // Select a role (e.g., Editor)
      await userEvent.click(canvas.getByRole('button', {
        name: 'Editor'
      }));

      // Fill in Name
      await userEvent.type(canvas.getByLabelText('Name'), 'Jane Doe');

      // Fill in Email
      await userEvent.type(canvas.getByLabelText('Email'), 'jane.doe@example.com');
    });

    // Snapshot after filling
    await step('User form filled snapshot', async () => {});
    await step('Submit the user form', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: 'Create User'
      }));
    });

    // Snapshot after submission
    await step('User form submitted snapshot', async () => {
      // Optional: Assert submitted data is shown
      // await expect(canvas.getByText('Submitted User Data:')).toBeInTheDocument();
    });
  }
}`,...(S=(x=m.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const me=["Default","FilledUserForm"];export{i as Default,m as FilledUserForm,me as __namedExportsOrder,ie as default};
