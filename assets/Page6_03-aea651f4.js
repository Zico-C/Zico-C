import{v as m,j as s}from"./index-0842854f.js";import{s as t}from"./page8_01.module-d0811e66.js";const j="/Zico-C/assets/adsadasdtest-24b4941e.jpg",x="/Zico-C/assets/asdsadtest-35042cc3.jpg",h=["玩具總動員4","靈魂急轉彎"],p=["1","2","3","4","5"];function N(){const[r,o]=m({movie:"",star:""}),c=r.get("movie"),a=r.get("star"),i=(e,l)=>{o(d=>(d.set(e,l),d),{replace:!0})},n=(e,l)=>e===l?t.selected:"";return s.jsx(s.Fragment,{children:s.jsxs("div",{children:[s.jsx("div",{className:t.select,children:c&&s.jsx("img",{src:c==="玩具總動員4"?x:j,width:250,alt:"電影海報",className:t.movie})}),c&&s.jsxs("p",{className:t.select,children:["電影名稱：",c]}),s.jsx("br",{}),s.jsx("div",{className:t.select,children:h.map(e=>s.jsx("div",{className:`${n(e,c)} movie`,onClick:()=>i("movie",e),children:s.jsx("p",{children:e})},e))}),s.jsx("br",{}),a&&s.jsxs("p",{className:t.select,children:["您給了：",a," 顆星。"]}),s.jsxs("div",{className:t.select,children:[s.jsx("br",{}),p.map(e=>s.jsx("div",{onClick:()=>i("star",e),className:`${n(e,a)} star`,children:s.jsx("p",{children:e})},e))]}),s.jsx("a",{href:"https://youtu.be/-ScajqKRzOs?si=GwLz7v6tvWqlQi9d",style:{fontSize:"15px"},children:"參考資料"})]})})}export{N as default};
