import{u as h,bn as d,j as e,bH as j,bI as b,r as c,bJ as f,bK as L,by as N}from"./index-6665707e.js";import{s as l}from"./page8_01.module-9ab2ecea.js";function v(){const n=h(o=>o.user),s=d(),a=()=>{s(j())},t=()=>{s(b())};return e.jsxs("div",{className:l.main,children:[e.jsxs("p",{children:["Name：",n.profile.name]}),e.jsxs("p",{children:["Age：",n.profile.age]}),e.jsxs("p",{children:["Email：",n.profile.email]}),e.jsx("button",{onClick:t,children:"Increment Age"}),e.jsx("button",{onClick:a,className:l.delete,children:"Logout"})]})}function A(){var i;const n=d(),s=c.useRef(null),a=c.useRef(null),t=c.useRef(null),o=()=>{var r,m,u;const p=(r=s==null?void 0:s.current)==null?void 0:r.value,x=parseInt(((m=a==null?void 0:a.current)==null?void 0:m.value)||"0",10),g=(u=t==null?void 0:t.current)==null?void 0:u.value;n(f({name:p,age:x,email:g}))};return console.log((i=a==null?void 0:a.current)==null?void 0:i.type),e.jsxs("div",{className:l.main,children:[e.jsx("label",{htmlFor:"name",children:"Name："}),e.jsx("input",{type:"text",placeholder:"name",name:"name",id:"name",ref:s}),e.jsx("br",{}),e.jsx("label",{htmlFor:"age",children:"Age："}),e.jsx("input",{type:"text",placeholder:"age",name:"age",id:"age",ref:a}),e.jsx("br",{}),e.jsx("label",{htmlFor:"email",children:"Email："}),e.jsx("input",{type:"text",placeholder:"email",name:"email",id:"email",ref:t}),e.jsx("br",{}),e.jsx("button",{onClick:o,className:l.toggle,children:"Login"})]})}function y(){const n=L(s=>s.user);return console.log(n),e.jsx("div",{className:l.main,children:n.profile.login?e.jsx(v,{}):e.jsx(A,{})})}function E(){const n=N(),{state:s}=n;return s&&(console.log("Page8_06 SomeData：",s.SomeData),console.log("Page8_06 TestData：",s.TestData)),e.jsxs("div",{className:l.main,children:["Page8_07的頁面",e.jsx(y,{})]})}export{E as default};
