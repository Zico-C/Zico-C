import{j as e,L as c,O as x,G as j,r as d,H as g,I as o}from"./index-b999ebff.js";import{s as h}from"./page8_01.module-ce61cfc9.js";const p=({user:s,members:t})=>{const n=s.members.includes("User"),r=s.members.includes("Admin"),i=s.login;return console.log("找到User",n),console.log("找到Admin",r),console.log("找到isLogin",i),console.log(t),e.jsxs("div",{children:[e.jsx(c,{to:"/page8/page8_05/",children:"Home"})," |",e.jsx(c,{to:"/page8/page8_05/loginTest",children:" Login"}),i&&r?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:" | "}),e.jsx(c,{to:"/page8/page8_05/account",children:"Account"})]}):null,i&&(r||n)?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:" | "}),e.jsx(c,{to:"/page8/page8_05/dashboard",children:"Dashboard"})]}):null]})},u=()=>e.jsxs("div",{style:{marginTop:"5%"},children:["😇 Login Page",e.jsx("hr",{}),e.jsx("p",{style:{color:"green"},children:"(無須登入 公共路由)"})]}),b=()=>e.jsxs("div",{style:{marginTop:"5%"},children:["🥴 Home Page",e.jsx("hr",{}),e.jsx("p",{style:{color:"green"},children:"(無須登入 公共路由)"})]}),A=()=>e.jsxs("div",{style:{marginTop:"5%"},children:["😀 Accounts Page",e.jsx("hr",{}),e.jsx("p",{style:{color:"red"},children:"(需要驗證 私人路由 僅限Admin)"})]}),v=()=>e.jsxs("div",{style:{marginTop:"5%"},children:["🥰 Dashboard Page",e.jsx("hr",{}),e.jsx("p",{style:{color:"red"},children:"(需要驗證 私人路由 )"})]}),m=({user:s,Members:t})=>s.login&&s.members.find(n=>t.includes(n))?e.jsx(x,{}):e.jsx(j,{to:"/page8/page8_05/"}),l={User:"User",Admin:"Admin"};function U(){const[s,t]=d.useState(!1),[n,r]=d.useState(""),i=()=>{r(n===""?"User":n==="User"?"Admin":"")},a={login:s,members:[n]};return console.log(s),e.jsxs("div",{className:h.main,children:[e.jsx(p,{user:a,members:[l.Admin,l.User]}),e.jsxs(g,{children:[e.jsx(o,{path:"/",element:e.jsx(b,{})}),e.jsx(o,{path:"/loginTest",element:e.jsx(u,{})}),e.jsx(o,{element:e.jsx(m,{user:a,Members:[l.Admin]}),children:e.jsx(o,{path:"/account",element:e.jsx(A,{})})}),e.jsx(o,{element:e.jsx(m,{user:a,Members:[l.Admin,l.User]}),children:e.jsx(o,{path:"/dashboard",element:e.jsx(v,{})})})]}),e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>t(!s),children:["目前登錄狀態為：",s?"登入中":"尚未登入"]}),e.jsxs("button",{onClick:i,children:["目前會員是：",n]})]})]})}export{U as default};
