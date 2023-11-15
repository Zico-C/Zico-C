import{r as n,H as U,q as K,bp as Y,bd as M,a2 as J,g as Q,e as Z,d as R,aL as ee,R as re,f as B,at as oe,av as te,h as V,bq as ne,W as ae,br as le,ac as ie,Y as T}from"./index-6665707e.js";var se={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};const ce=se;var de=function(r,o){return n.createElement(U,K({},r,{ref:o,icon:ce}))};const Oe=n.forwardRef(de),ue=(e,r)=>{const o=n.useContext(Y),t=n.useMemo(()=>{var u;const b=r||M[e],g=(u=o==null?void 0:o[e])!==null&&u!==void 0?u:{};return Object.assign(Object.assign({},typeof b=="function"?b():b),g||{})},[e,r,o]),a=n.useMemo(()=>{const u=o==null?void 0:o.locale;return o!=null&&o.exist&&!u?M.locale:u},[o]);return[t,a]},we=ue,Ee=e=>({color:e.colorLink,textDecoration:"none",outline:"none",cursor:"pointer",transition:`color ${e.motionDurationSlow}`,"&:focus, &:hover":{color:e.colorLinkHover},"&:active":{color:e.colorLinkActive}});var A=function(r){if(J()&&window.document.documentElement){var o=Array.isArray(r)?r:[r],t=window.document.documentElement;return o.some(function(a){return a in t.style})}return!1},be=function(r,o){if(!A(r))return!1;var t=document.createElement("div"),a=t.style[r];return t.style[r]=o,t.style[r]!==a};function Ie(e,r){return!Array.isArray(e)&&r!==void 0?be(e,r):A(e)}const pe=e=>{const{checkboxCls:r}=e,o=`${r}-wrapper`;return[{[`${r}-group`]:Object.assign(Object.assign({},R(e)),{display:"inline-flex",flexWrap:"wrap",columnGap:e.marginXS,[`> ${e.antCls}-row`]:{flex:1}}),[o]:Object.assign(Object.assign({},R(e)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${o}`]:{marginInlineStart:0},[`&${o}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[r]:Object.assign(Object.assign({},R(e)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:e.borderRadiusSM,alignSelf:"center",[`${r}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${r}-inner`]:Object.assign({},ee(e))},[`${r}-inner`]:{boxSizing:"border-box",position:"relative",top:0,insetInlineStart:0,display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:`all ${e.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"21.5%",display:"table",width:e.checkboxSize/14*5,height:e.checkboxSize/14*8,border:`${e.lineWidthBold}px solid ${e.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`}},"& + span":{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}})},{[`
        ${o}:not(${o}-disabled),
        ${r}:not(${r}-disabled)
      `]:{[`&:hover ${r}-inner`]:{borderColor:e.colorPrimary}},[`${o}:not(${o}-disabled)`]:{[`&:hover ${r}-checked:not(${r}-disabled) ${r}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${r}-checked:not(${r}-disabled):after`]:{borderColor:e.colorPrimaryHover}}},{[`${r}-checked`]:{[`${r}-inner`]:{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`}}},[`
        ${o}-checked:not(${o}-disabled),
        ${r}-checked:not(${r}-disabled)
      `]:{[`&:hover ${r}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"}}},{[r]:{"&-indeterminate":{[`${r}-inner`]:{backgroundColor:e.colorBgContainer,borderColor:e.colorBorder,"&:after":{top:"50%",insetInlineStart:"50%",width:e.fontSizeLG/2,height:e.fontSizeLG/2,backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}}}}},{[`${o}-disabled`]:{cursor:"not-allowed"},[`${r}-disabled`]:{[`&, ${r}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${r}-inner`]:{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:e.colorTextDisabled},[`&${r}-indeterminate ${r}-inner::after`]:{background:e.colorTextDisabled}}}]};function fe(e,r){const o=Z(r,{checkboxCls:`.${e}`,checkboxSize:r.controlInteractiveSize});return[pe(o)]}const H=Q("Checkbox",(e,r)=>{let{prefixCls:o}=r;return[fe(o,e)]}),ve=re.createContext(null),N=ve;var ge=globalThis&&globalThis.__rest||function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(o[t[a]]=e[t[a]]);return o};const he=(e,r)=>{var o;const{prefixCls:t,className:a,rootClassName:u,children:b,indeterminate:g=!1,style:O,onMouseEnter:C,onMouseLeave:d,skipGroup:$=!1,disabled:w}=e,s=ge(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),{getPrefixCls:y,direction:E,checkbox:p}=n.useContext(B),l=n.useContext(N),{isFormItemInput:I}=n.useContext(oe),P=n.useContext(te),x=(o=(l==null?void 0:l.disabled)||w)!==null&&o!==void 0?o:P,f=n.useRef(s.value);n.useEffect(()=>{l==null||l.registerValue(s.value)},[]),n.useEffect(()=>{if(!$)return s.value!==f.current&&(l==null||l.cancelValue(f.current),l==null||l.registerValue(s.value),f.current=s.value),()=>l==null?void 0:l.cancelValue(s.value)},[s.value]);const c=y("checkbox",t),[j,S]=H(c),v=Object.assign({},s);l&&!$&&(v.onChange=function(){s.onChange&&s.onChange.apply(s,arguments),l.toggleOption&&l.toggleOption({label:b,value:s.value})},v.name=l.name,v.checked=l.value.includes(s.value));const L=V(`${c}-wrapper`,{[`${c}-rtl`]:E==="rtl",[`${c}-wrapper-checked`]:v.checked,[`${c}-wrapper-disabled`]:x,[`${c}-wrapper-in-form-item`]:I},p==null?void 0:p.className,a,u,S),_=V({[`${c}-indeterminate`]:g},ne,S),k=g?"mixed":void 0;return j(n.createElement(ae,{component:"Checkbox",disabled:x},n.createElement("label",{className:L,style:Object.assign(Object.assign({},p==null?void 0:p.style),O),onMouseEnter:C,onMouseLeave:d},n.createElement(le,Object.assign({"aria-checked":k},v,{prefixCls:c,className:_,disabled:x,ref:r})),b!==void 0&&n.createElement("span",null,b))))},me=n.forwardRef(he),F=me;var Ce=globalThis&&globalThis.__rest||function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(o[t[a]]=e[t[a]]);return o};const xe=(e,r)=>{const{defaultValue:o,children:t,options:a=[],prefixCls:u,className:b,rootClassName:g,style:O,onChange:C}=e,d=Ce(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls:$,direction:w}=n.useContext(B),[s,y]=n.useState(d.value||o||[]),[E,p]=n.useState([]);n.useEffect(()=>{"value"in d&&y(d.value||[])},[d.value]);const l=n.useMemo(()=>a.map(i=>typeof i=="string"||typeof i=="number"?{label:i,value:i}:i),[a]),I=i=>{p(h=>h.filter(m=>m!==i))},P=i=>{p(h=>[].concat(T(h),[i]))},x=i=>{const h=s.indexOf(i.value),m=T(s);h===-1?m.push(i.value):m.splice(h,1),"value"in d||y(m),C==null||C(m.filter(D=>E.includes(D)).sort((D,W)=>{const X=l.findIndex(z=>z.value===D),q=l.findIndex(z=>z.value===W);return X-q}))},f=$("checkbox",u),c=`${f}-group`,[j,S]=H(f),v=ie(d,["value","disabled"]),L=a.length?l.map(i=>n.createElement(F,{prefixCls:f,key:i.value.toString(),disabled:"disabled"in i?i.disabled:d.disabled,value:i.value,checked:s.includes(i.value),onChange:i.onChange,className:`${c}-item`,style:i.style,title:i.title,id:i.id},i.label)):t,_={toggleOption:x,value:s,disabled:d.disabled,name:d.name,registerValue:P,cancelValue:I},k=V(c,{[`${c}-rtl`]:w==="rtl"},b,g,S);return j(n.createElement("div",Object.assign({className:k,style:O},v,{ref:r}),n.createElement(N.Provider,{value:_},L)))},$e=n.forwardRef(xe),ye=n.memo($e),G=F;G.Group=ye;G.__ANT_CHECKBOX=!0;const Pe=G;export{Oe as C,Pe as a,fe as g,Ie as i,Ee as o,we as u};
