import{r as i,m as y,j as t}from"./index-0842854f.js";import{u as T}from"./useMutation-2205df7c.js";import{s as C}from"./page8_01.module-d0811e66.js";import"./utils-0507c293.js";const S=async n=>{try{(await fetch("http://localhost:3005/locationIP",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).ok?console.log("座標成功發送到後端"):console.error("無法發送座標到後端")}catch(o){console.error("發送請求時出現錯誤："+o)}};function b(){const[n,o]=i.useState(0),[u,d]=i.useState(0),s=i.useRef(null),[p,g]=y.useMessage(),m=T(S,{}),f=()=>{p.open({type:"warning",content:"請填入上傳人員"})},h=()=>{"geolocation"in navigator?navigator.geolocation.getCurrentPosition(function(x){var c,l;const{latitude:a,longitude:r}=x.coords,e=(c=s.current)==null?void 0:c.value;if(e!==""&&(e==null?void 0:e.trim())!==""){const j=new Date().toLocaleString("zh-TW");o(a),d(r),m.mutate({id:0,name:e,updateTime:`${j} UTC+8`,latitude:a,longitude:r})}else f(),(l=s.current)==null||l.focus()}):console.log("瀏覽器不支援地理位置服務")};return t.jsxs("div",{className:C.main,children:[g,t.jsx("input",{type:"text",placeholder:"上傳人員",ref:s}),t.jsx("br",{}),t.jsx("button",{onClick:h,children:"獲取並發送座標"}),t.jsxs("p",{children:["緯度：",n]}),t.jsxs("p",{children:["經度：",u]})]})}export{b as default};
