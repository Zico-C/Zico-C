import{r as s,j as n}from"./index-fcae4f03.js";import{s as c}from"./page8_01.module-ad5c13d7.js";function r(){const[e,a]=s.useState({width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}),o=[{id:1,name:"zico",age:26},{id:2,name:"may",age:23},{id:3,name:"hank",age:27}];console.log("User",o);const d=o.map(t=>t.name==="may"?{...t,name:"XXX"}:t.name==="hank"?{...t,age:30}:t);console.log("UserUp",d);const i=s.useCallback(()=>{console.log("正在縮放視窗"),a({width:document.documentElement.clientWidth,height:document.documentElement.clientHeight})},[]);return s.useEffect(()=>(window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}),[i]),n.jsxs("div",{className:c.main,children:[n.jsx("h1",{children:"Page6_07頁面 測試 useCallback"}),n.jsx("br",{}),n.jsxs("p",{style:{color:e.width>1200?"green":e.width>800?"blue":"red"},children:[e.width," * ",e.height]}),n.jsx("p",{children:e.width>1200?"desktop":e.width>800?"pad":"mobile"})]})}export{r as default};