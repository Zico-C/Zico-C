import{r as s,j as e}from"./index-0842854f.js";import{s as x}from"./page8_01.module-d0811e66.js";function m(){const[a,i]=s.useState([]),[o,l]=s.useState(""),r=s.useRef(null),c=a.filter(t=>t.toLowerCase().includes(o.toLowerCase())),u=()=>{var n;const t=(n=r.current)==null?void 0:n.value;t!==void 0&&i(d=>[...d,t])};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:x.main,children:["Page5_01",e.jsxs("div",{children:[e.jsx("input",{type:"text",placeholder:"新增資料",ref:r}),e.jsx("input",{type:"text",placeholder:"搜尋資料",onChange:t=>l(t.target.value)}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("button",{onClick:u,children:"新增資料"})]}),e.jsx("div",{children:e.jsx("ul",{children:c.map(t=>e.jsx("p",{children:t},t))})})]})})}export{m as default};
