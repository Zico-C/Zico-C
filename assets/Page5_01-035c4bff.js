import{j as s,G as x,a as c}from"./index-0ef130ba.js";import{u as l}from"./useQuery-630941b5.js";import{s as d}from"./page8_01.module-ad5c13d7.js";const{useBreakpoint:p}=x;async function h(){try{return(await c.get("http://localhost:3014/todo")).data}catch{throw new Error("代辦事項載入失敗...")}}function m(){const e=p(),{data:i,isLoading:n,isError:t,error:o,isFetched:a}=l("todo",h,{refetchOnWindowFocus:!1});return a?n?s.jsx("div",{children:"正在 Loading 代辦事項..."}):t?s.jsx("div",{children:o.message}):s.jsx(s.Fragment,{children:s.jsx("div",{className:d.page5_01,children:s.jsx("ul",{children:i==null?void 0:i.map(r=>s.jsxs("div",{style:e.xs?{marginLeft:"5px",marginRight:"5px"}:{},children:[s.jsxs("p",{children:[s.jsx("span",{style:e.xs?{fontSize:"22px"}:{},children:"代辦ID："}),r.id]}),s.jsxs("p",{style:e.xs?{fontSize:"22px"}:{},children:[s.jsx("span",{style:e.xs?{fontSize:"22px"}:{},children:"代辦項目："}),r.title]}),s.jsxs("p",{style:e.xs?{fontSize:"22px"}:{},children:[s.jsx("span",{style:e.xs?{fontSize:"22px"}:{},children:"代辦內容："}),r.subtitle]})]},r.id))})})}):s.jsx("div",{children:"正在請求代辦事項資料..."})}export{m as default};