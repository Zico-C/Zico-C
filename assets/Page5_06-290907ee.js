import{j as s}from"./index-db6a9efe.js";import{M as o,T as a,d as n,a as i,L as p}from"./index-65e331af.js";/* empty css                   */import"./index-a841779d.js";const m=()=>{const e=24.98992602827932+Math.random()*.1,t=121.47831148890552+Math.random()*.1;return p.latLng(e,t)},l=e=>{const t=[];for(let r=0;r<e;r++)t.push({position:m()});return t},x=()=>s.jsxs(o,{center:[25.03,121.52],zoom:12,style:{height:"500px",width:"100%"},children:[s.jsx(a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),s.jsx(n,{removeOutsideVisibleBounds:!1,children:l(5e3).map((e,t)=>s.jsx(i,{position:e.position},t))})]});export{x as default};
