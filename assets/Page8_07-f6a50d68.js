import{u as g,Y as u,j as e,Z as h,r as o,$ as j,a0 as f,K as L}from"./index-b2ebdb2d.js";import{s as l}from"./page8_01.module-dd110603.js";function N(){const a=g(t=>t.user),s=u(),n=()=>{s(h())};return e.jsxs("div",{className:l.main,children:[e.jsxs("p",{children:["Name：",a.profile.name]}),e.jsxs("p",{children:["Age：",a.profile.age]}),e.jsxs("p",{children:["Email：",a.profile.email]}),e.jsx("button",{onClick:n,className:l.delete,children:"Logout"})]})}function b(){const a=u(),s=o.useRef(null),n=o.useRef(null),t=o.useRef(null),m=()=>{var i,r,c;const d=(i=s==null?void 0:s.current)==null?void 0:i.value,p=(r=n==null?void 0:n.current)==null?void 0:r.value,x=(c=t==null?void 0:t.current)==null?void 0:c.value;a(j({name:d,age:p,email:x}))};return e.jsxs("div",{className:l.main,children:[e.jsx("label",{htmlFor:"name",children:"Name："}),e.jsx("input",{type:"text",placeholder:"name",name:"name",id:"name",ref:s}),e.jsx("br",{}),e.jsx("label",{htmlFor:"age",children:"Age："}),e.jsx("input",{type:"text",placeholder:"age",name:"age",id:"age",ref:n}),e.jsx("br",{}),e.jsx("label",{htmlFor:"email",children:"Email："}),e.jsx("input",{type:"text",placeholder:"email",name:"email",id:"email",ref:t}),e.jsx("br",{}),e.jsx("button",{onClick:m,className:l.toggle,children:"Login"})]})}function v(){const a=f(s=>s.user);return console.log(a),e.jsx("div",{className:l.main,children:a.profile.login?e.jsx(N,{}):e.jsx(b,{})})}function y(){const a=L(),{state:s}=a;return s&&(console.log("Page8_06 SomeData：",s.SomeData),console.log("Page8_06 TestData：",s.TestData)),e.jsxs("div",{className:l.main,children:["Page8_07的頁面",e.jsx(v,{})]})}export{y as default};
