import{r as n,j as e}from"./index-fdf3babf.js";import{s as r}from"./page8_01.module-fc3ec9b1.js";function u(t){const[c,s]=n.useState("");return n.useEffect(()=>{const a=setTimeout(()=>{s(t)},500);return()=>clearTimeout(a)},[t]),c}function h(){const[t,c]=n.useState(""),s=u(t),a=o=>{c(o.target.value)};return n.useEffect(()=>{(async()=>{console.log("getApiData..."),console.log("End...")})()},[s]),e.jsxs("div",{className:r.main,children:[e.jsx("h1",{children:"Page6_06頁面 useDebounce"}),e.jsx("hr",{style:{marginTop:"2rem",marginBottom:"2rem"}}),e.jsxs("div",{children:[e.jsx("input",{type:"text",value:t,onChange:a,placeholder:"Search..."}),e.jsx("p",{children:t}),e.jsxs("p",{children:[e.jsx("span",{style:{color:"blue"},children:"debounceSearch："}),s]})]})]})}export{h as default};
