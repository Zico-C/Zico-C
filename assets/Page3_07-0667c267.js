import{r as a,A,_ as L,R as m,C as G,ab as ee,e as J,n as M,ac as te,j as b}from"./index-0ef130ba.js";import{u as ne,T as re,S as se,f as Q,c as oe,a as le,b as ce,C as ae}from"./iconUtil-cf5c334d.js";import"./List-24a097f6.js";var ie={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"}}]},name:"folder-open",theme:"outlined"};const de=ie;var fe=function(s,r){return a.createElement(A,L({},s,{ref:r,icon:de}))};const ue=a.forwardRef(fe);var pe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"}}]},name:"folder",theme:"outlined"};const ye=pe;var he=function(s,r){return a.createElement(A,L({},s,{ref:r,icon:ye}))};const ge=a.forwardRef(he);var xe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z"}}]},name:"holder",theme:"outlined"};const me=xe;var ve=function(s,r){return a.createElement(A,L({},s,{ref:r,icon:me}))};const be=a.forwardRef(ve),B=4;function Oe(t){const{dropPosition:s,dropLevelOffset:r,prefixCls:n,indent:o,direction:e="ltr"}=t,c=e==="ltr"?"left":"right",l=e==="ltr"?"right":"left",d={[c]:-r*o+B,[l]:0};switch(s){case-1:d.top=-3;break;case 1:d.bottom=-3;break;default:d.bottom=-3,d[c]=o+B;break}return m.createElement("div",{style:d,className:`${n}-drop-indicator`})}const Ee=m.forwardRef((t,s)=>{const{getPrefixCls:r,direction:n,virtual:o,tree:e}=m.useContext(G),{prefixCls:c,className:l,showIcon:d=!1,showLine:f,switcherIcon:C,blockNode:O=!1,children:S,checkable:E=!1,selectable:K=!0,draggable:v,motion:w,style:$}=t,p=r("tree",c),H=r(),I=w??Object.assign(Object.assign({},ee(H)),{motionAppear:!1}),D=Object.assign(Object.assign({},t),{checkable:E,selectable:K,showIcon:d,motion:I,blockNode:O,showLine:!!f,dropIndicatorRender:Oe}),[k,F]=ne(p),h=m.useMemo(()=>{if(!v)return!1;let i={};switch(typeof v){case"function":i.nodeDraggable=v;break;case"object":i=Object.assign({},v);break}return i.icon!==!1&&(i.icon=i.icon||m.createElement(be,null)),i},[v]),u=i=>m.createElement(se,{prefixCls:p,switcherIcon:C,treeNodeProps:i,showLine:f});return k(m.createElement(re,Object.assign({itemHeight:20,ref:s,virtual:o},D,{style:Object.assign(Object.assign({},e==null?void 0:e.style),$),prefixCls:p,className:J({[`${p}-icon-hide`]:!d,[`${p}-block-node`]:O,[`${p}-unselectable`]:!K,[`${p}-rtl`]:n==="rtl"},e==null?void 0:e.className,l,F),direction:n,checkable:E&&m.createElement("span",{className:`${p}-checkbox-inner`}),selectable:K,switcherIcon:u,draggable:h}),S))}),U=Ee;var x;(function(t){t[t.None=0]="None",t[t.Start=1]="Start",t[t.End=2]="End"})(x||(x={}));function R(t,s,r){const{key:n,children:o}=r;function e(c){const l=c[n],d=c[o];s(l,c)!==!1&&R(d||[],s,r)}t.forEach(e)}function Ke(t){let{treeData:s,expandedKeys:r,startKey:n,endKey:o,fieldNames:e}=t;const c=[];let l=x.None;if(n&&n===o)return[n];if(!n||!o)return[];function d(f){return f===n||f===o}return R(s,f=>{if(l===x.End)return!1;if(d(f)){if(c.push(f),l===x.None)l=x.Start;else if(l===x.Start)return l=x.End,!1}else l===x.Start&&c.push(f);return r.includes(f)},Q(e)),c}function z(t,s,r){const n=M(s),o=[];return R(t,(e,c)=>{const l=n.indexOf(e);return l!==-1&&(o.push(c),n.splice(l,1)),!!n.length},Q(r)),o}var Z=globalThis&&globalThis.__rest||function(t,s){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&s.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)s.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]]);return r};function we(t){const{isLeaf:s,expanded:r}=t;return s?a.createElement(te,null):r?a.createElement(ue,null):a.createElement(ge,null)}function q(t){let{treeData:s,children:r}=t;return s||ce(r)}const ke=(t,s)=>{var{defaultExpandAll:r,defaultExpandParent:n,defaultExpandedKeys:o}=t,e=Z(t,["defaultExpandAll","defaultExpandParent","defaultExpandedKeys"]);const c=a.useRef(),l=a.useRef(),d=()=>{const{keyEntities:h}=oe(q(e));let u;return r?u=Object.keys(h):n?u=le(e.expandedKeys||o||[],h):u=e.expandedKeys||o,u},[f,C]=a.useState(e.selectedKeys||e.defaultSelectedKeys||[]),[O,S]=a.useState(()=>d());a.useEffect(()=>{"selectedKeys"in e&&C(e.selectedKeys)},[e.selectedKeys]),a.useEffect(()=>{"expandedKeys"in e&&S(e.expandedKeys)},[e.expandedKeys]);const E=(h,u)=>{var i;return"expandedKeys"in e||S(h),(i=e.onExpand)===null||i===void 0?void 0:i.call(e,h,u)},K=(h,u)=>{var i;const{multiple:V,fieldNames:N}=e,{node:W,nativeEvent:g}=u,{key:j=""}=W,P=q(e),T=Object.assign(Object.assign({},u),{selected:!0}),X=(g==null?void 0:g.ctrlKey)||(g==null?void 0:g.metaKey),Y=g==null?void 0:g.shiftKey;let y;V&&X?(y=h,c.current=j,l.current=y,T.selectedNodes=z(P,y,N)):V&&Y?(y=Array.from(new Set([].concat(M(l.current||[]),M(Ke({treeData:P,expandedKeys:O,startKey:j,endKey:c.current,fieldNames:N}))))),T.selectedNodes=z(P,y,N)):(y=[j],c.current=j,l.current=y,T.selectedNodes=z(P,y,N)),(i=e.onSelect)===null||i===void 0||i.call(e,y,T),"selectedKeys"in e||C(y)},{getPrefixCls:v,direction:w}=a.useContext(G),{prefixCls:$,className:p,showIcon:H=!0,expandAction:I="click"}=e,D=Z(e,["prefixCls","className","showIcon","expandAction"]),k=v("tree",$),F=J(`${k}-directory`,{[`${k}-directory-rtl`]:w==="rtl"},p);return a.createElement(U,Object.assign({icon:we,ref:s,blockNode:!0},D,{showIcon:H,expandAction:I,prefixCls:k,className:F,expandedKeys:O,selectedKeys:f,onSelect:K,onExpand:E}))},Ce=a.forwardRef(ke),Se=Ce,_=U;_.DirectoryTree=Se;_.TreeNode=ae;const Ne=_,je="/Zico-C/assets/vite-4a748afd.svg",Pe=[{title:"0-0",key:"0-0",children:[{title:"0-0-0",key:"0-0-0",children:[{title:"0-0-0-0",key:"0-0-0-0"},{title:"0-0-0-1",key:"0-0-0-1"},{title:"0-0-0-2",key:"0-0-0-2"}]},{title:"0-0-1",key:"0-0-1",children:[{title:"0-0-1-0",key:"0-0-1-0"},{title:"0-0-1-1",key:"0-0-1-1"},{title:"0-0-1-2",key:"0-0-1-2"}]},{title:"0-0-2",key:"0-0-2"}]},{title:"0-1",key:"0-1",children:[{title:"0-1-0-0",key:"0-1-0-0"},{title:"0-1-0-1",key:"0-1-0-1"},{title:"0-1-0-2",key:"0-1-0-2"}]},{title:"0-2",key:"0-2"}],Ie=()=>b.jsxs(b.Fragment,{children:[b.jsx("div",{style:{marginTop:"25px",width:"100%",height:"100%"},children:b.jsx(Ne,{checkable:!0,treeData:Pe,showLine:!0,style:{backgroundColor:"#333",color:"#fff",width:"100%",height:"100%"}})}),b.jsx("div",{style:{marginTop:"25px",backgroundColor:"green",width:"50%",height:"50%"},children:b.jsx("img",{src:je,alt:"",width:"100%",height:"100%"})})]});export{Ie as default};
