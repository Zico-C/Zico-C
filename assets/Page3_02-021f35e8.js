import{g as dt,K as et,c as pt,d as mt,r as l,C as it,e as M,o as gt,i as Y,f as Z,j as e,B as J,G as ut,a as ht}from"./index-86779f9e.js";import{u as ft}from"./useQuery-abc8b4d7.js";import{M as xt,T as yt,d as bt,a as K,b as Q,P as q,l as k}from"./index-64b8b98e.js";import{C as _,M as St}from"./index-cd2b6706.js";import{G as jt,M as E,r as tt,a as vt}from"./index.esm-957f9556.js";import{E as Ct}from"./index-e27cc041.js";import{R as zt,C as A}from"./row-f95385a9.js";import{T as wt}from"./index-deea25de.js";import"./index-9b3fdcb7.js";import"./CheckOutlined-7bb35c42.js";import"./useLocale-da572be9.js";function Dt(t,o,i){var s=i||{},a=s.noTrailing,x=a===void 0?!1:a,r=s.noLeading,v=r===void 0?!1:r,C=s.debounceMode,b=C===void 0?void 0:C,p,D=!1,$=0;function S(){p&&clearTimeout(p)}function I(j){var c=j||{},d=c.upcomingOnly,T=d===void 0?!1:d;S(),D=!T}function N(){for(var j=arguments.length,c=new Array(j),d=0;d<j;d++)c[d]=arguments[d];var T=this,z=Date.now()-$;if(D)return;function w(){$=Date.now(),o.apply(T,c)}function g(){p=void 0}!v&&b&&!p&&w(),S(),b===void 0&&z>t?v?($=Date.now(),x||(p=setTimeout(b?g:w,t))):w():x!==!0&&(p=setTimeout(b?g:w,b===void 0?t-z:t))}return N.cancel=I,N}function $t(t,o,i){var s=i||{},a=s.atBegin,x=a===void 0?!1:a;return Dt(t,o,{debounceMode:x!==!1})}const Nt=new et("antSpinMove",{to:{opacity:1}}),Tt=new et("antRotate",{to:{transform:"rotate(405deg)"}}),It=t=>({[`${t.componentCls}`]:Object.assign(Object.assign({},mt(t)),{position:"absolute",display:"none",color:t.colorPrimary,fontSize:0,textAlign:"center",verticalAlign:"middle",opacity:0,transition:`transform ${t.motionDurationSlow} ${t.motionEaseInOutCirc}`,"&-spinning":{position:"static",display:"inline-block",opacity:1},"&-nested-loading":{position:"relative",[`> div > ${t.componentCls}`]:{position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:t.contentHeight,[`${t.componentCls}-dot`]:{position:"absolute",top:"50%",insetInlineStart:"50%",margin:-t.dotSize/2},[`${t.componentCls}-text`]:{position:"absolute",top:"50%",width:"100%",paddingTop:(t.dotSize-t.fontSize)/2+2,textShadow:`0 1px 2px ${t.colorBgContainer}`,fontSize:t.fontSize},[`&${t.componentCls}-show-text ${t.componentCls}-dot`]:{marginTop:-(t.dotSize/2)-10},"&-sm":{[`${t.componentCls}-dot`]:{margin:-t.dotSizeSM/2},[`${t.componentCls}-text`]:{paddingTop:(t.dotSizeSM-t.fontSize)/2+2},[`&${t.componentCls}-show-text ${t.componentCls}-dot`]:{marginTop:-(t.dotSizeSM/2)-10}},"&-lg":{[`${t.componentCls}-dot`]:{margin:-(t.dotSizeLG/2)},[`${t.componentCls}-text`]:{paddingTop:(t.dotSizeLG-t.fontSize)/2+2},[`&${t.componentCls}-show-text ${t.componentCls}-dot`]:{marginTop:-(t.dotSizeLG/2)-10}}},[`${t.componentCls}-container`]:{position:"relative",transition:`opacity ${t.motionDurationSlow}`,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:t.colorBgContainer,opacity:0,transition:`all ${t.motionDurationSlow}`,content:'""',pointerEvents:"none"}},[`${t.componentCls}-blur`]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none","&::after":{opacity:.4,pointerEvents:"auto"}}},"&-tip":{color:t.spinDotDefault},[`${t.componentCls}-dot`]:{position:"relative",display:"inline-block",fontSize:t.dotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:(t.dotSize-t.marginXXS/2)/2,height:(t.dotSize-t.marginXXS/2)/2,backgroundColor:t.colorPrimary,borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:Nt,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:Tt,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&-sm ${t.componentCls}-dot`]:{fontSize:t.dotSizeSM,i:{width:(t.dotSizeSM-t.marginXXS/2)/2,height:(t.dotSizeSM-t.marginXXS/2)/2}},[`&-lg ${t.componentCls}-dot`]:{fontSize:t.dotSizeLG,i:{width:(t.dotSizeLG-t.marginXXS)/2,height:(t.dotSizeLG-t.marginXXS)/2}},[`&${t.componentCls}-show-text ${t.componentCls}-text`]:{display:"block"}})}),Et=dt("Spin",t=>{const o=pt(t,{spinDotDefault:t.colorTextDescription});return[It(o)]},t=>({contentHeight:400,dotSize:t.controlHeightLG/2,dotSizeSM:t.controlHeightLG*.35,dotSizeLG:t.controlHeight}));var Mt=globalThis&&globalThis.__rest||function(t,o){var i={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&o.indexOf(s)<0&&(i[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(t);a<s.length;a++)o.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(t,s[a])&&(i[s[a]]=t[s[a]]);return i};let X=null;function Ot(t,o){const{indicator:i}=o,s=`${t}-dot`;return i===null?null:Y(i)?Z(i,{className:M(i.props.className,s)}):Y(X)?Z(X,{className:M(X.props.className,s)}):l.createElement("span",{className:M(s,`${t}-dot-spin`)},l.createElement("i",{className:`${t}-dot-item`,key:1}),l.createElement("i",{className:`${t}-dot-item`,key:2}),l.createElement("i",{className:`${t}-dot-item`,key:3}),l.createElement("i",{className:`${t}-dot-item`,key:4}))}function Ft(t,o){return!!t&&!!o&&!isNaN(Number(o))}const Lt=t=>{const{spinPrefixCls:o,spinning:i=!0,delay:s=0,className:a,rootClassName:x,size:r="default",tip:v,wrapperClassName:C,style:b,children:p,hashId:D}=t,$=Mt(t,["spinPrefixCls","spinning","delay","className","rootClassName","size","tip","wrapperClassName","style","children","hashId"]),[S,I]=l.useState(()=>i&&!Ft(i,s));l.useEffect(()=>{if(i){const u=$t(s,()=>{I(!0)});return u(),()=>{var O;(O=u==null?void 0:u.cancel)===null||O===void 0||O.call(u)}}I(!1)},[s,i]);const N=l.useMemo(()=>typeof p<"u",[p]),{direction:j,spin:c}=l.useContext(it),d=M(o,c==null?void 0:c.className,{[`${o}-sm`]:r==="small",[`${o}-lg`]:r==="large",[`${o}-spinning`]:S,[`${o}-show-text`]:!!v,[`${o}-rtl`]:j==="rtl"},a,x,D),T=M(`${o}-container`,{[`${o}-blur`]:S}),z=gt($,["indicator","prefixCls"]),w=Object.assign(Object.assign({},c==null?void 0:c.style),b),g=l.createElement("div",Object.assign({},z,{style:w,className:d,"aria-live":"polite","aria-busy":S}),Ot(o,t),v&&N?l.createElement("div",{className:`${o}-text`},v):null);return N?l.createElement("div",Object.assign({},z,{className:M(`${o}-nested-loading`,C,D)}),S&&l.createElement("div",{key:"loading"},g),l.createElement("div",{className:T,key:"container"},p)):g},nt=t=>{const{prefixCls:o}=t,{getPrefixCls:i}=l.useContext(it),s=i("spin",o),[a,x]=Et(s),r=Object.assign(Object.assign({},t),{spinPrefixCls:s,hashId:x});return a(l.createElement(Lt,Object.assign({},r)))};nt.setDefaultIndicator=t=>{X=t};const P=nt;function Pt(t){return jt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3 4v12c0 1.103.897 2 2 2h3.5l3.5 4 3.5-4H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2zm8 1h2v6h-2V5zm0 8h2v2h-2v-2z"}}]})(t)}const{useBreakpoint:At}=ut,{Text:B}=wt;var Bt=(t=>(t.中山區="中山區",t.中正區="中正區",t.信義區="信義區",t.內湖區="內湖區",t.北投區="北投區",t.南港區="南港區",t.士林區="士林區",t.大同區="大同區",t.大安區="大安區",t.文山區="文山區",t.松山區="松山區",t.臺大公館校區="臺大公館校區",t.萬華區="萬華區",t))(Bt||{}),Gt=(t=>(t.BeitouDist="Beitou Dist",t.DaanDist="Daan Dist.",t.DatongDist="Datong Dist",t.NTUDist="NTU Dist",t.NangangDist="Nangang Dist",t.NeihuDist="Neihu Dist",t.ShilinDist="Shilin Dist",t.SongshanDist="Songshan Dist",t.WanhuaDist="Wanhua Dist",t.WenshanDist="Wenshan Dist",t.XinyiDist="Xinyi Dist",t.ZhongshanDist="Zhongshan Dist",t.ZhongzhengDist="Zhongzheng Dist",t))(Gt||{});const G=({title:t,children:o,bodyStyle:i})=>e.jsx(e.Fragment,{children:e.jsx(_,{title:t,headStyle:{backgroundColor:"#002FA7",color:"white",textAlign:"center",borderRadius:0},bodyStyle:{padding:3,height:"299px",userSelect:"text",...i},children:o})});function Qt(){const[t,o]=l.useState({center:[25.035751357120876,121.52047467202769],zoom:12}),[i,s]=l.useState(),[a,x]=l.useState(0),[r,v]=l.useState(0),[C,b]=l.useState(0),[p,D]=l.useState(["",""]),[$,S]=l.useState(0),[I,N]=l.useState(0),[j,c]=l.useState(!1),d=At();l.useEffect(()=>{const n=localStorage.getItem("page3_02-viewport");n&&o(JSON.parse(n))},[]);const T=async()=>{try{return(await ht.get("https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json")).data}catch(n){console.log(n.message)}};console.log("render....");const{data:z,status:w,isLoading:g,isFetching:u}=ft(["TaipeiYouBike"],T,{refetchOnWindowFocus:!1,keepPreviousData:!0,cacheTime:6e4,staleTime:1/0,refetchInterval:6e4});l.useEffect(()=>{w==="success"&&s(z)},[z]);const O=n=>{localStorage.setItem("page3_02-viewport",JSON.stringify(n))};l.useEffect(()=>{localStorage.setItem("page3_02-viewport",JSON.stringify(t))},[j]);const ot=()=>k.divIcon({className:"",html:tt(e.jsx(e.Fragment,{children:e.jsx(vt,{style:{color:"#263ea0",fontSize:"1.8rem",marginLeft:"-11px",marginTop:"-20px"}})}))}),st=(n,m,h,y)=>k.divIcon({className:"",html:tt(e.jsx("div",{children:y==="1"&&m/h>=3?e.jsx(E,{style:{color:"#cf1322",fontSize:"1.8rem",marginLeft:"-11px",marginTop:"-20px"}}):y==="1"&&m/h>=2?e.jsx(E,{style:{color:"#d48806",fontSize:"1.8rem",marginLeft:"-11px",marginTop:"-20px"}}):y==="1"?e.jsx(E,{style:{color:"#006400",fontSize:"1.8rem",marginLeft:"-11px",marginTop:"-20px"}}):y==="0"&&e.jsx(Pt,{style:{color:"#dc3545",fontSize:"1.8rem",marginLeft:"-11px",marginTop:"-20px"}})},n))}),lt=({tot:n,bemp:m,sbi:h,updateTime:y})=>{const F=(m/n*100).toFixed(2);return{tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},graphic:[{type:"text",left:"center",top:"35%",style:{text:"目前使用量",textAlign:"center",fill:"#555",fontSize:16,fontWeight:"bold"}},{type:"text",left:"center",top:"45%",style:{text:`${F} %`,textAlign:"center",fill:"#555",fontSize:20,fontWeight:"bold"}},{type:"text",left:"center",top:"88%",style:{text:`上次更新時間 ${y}`,textAlign:"center",fill:"#555",fontSize:20,fontWeight:"bold"}}],series:[{name:"Access From",type:"pie",radius:["45%","66%"],center:["50%","45%"],avoidLabelOverlap:!1,label:d.xs?{show:!1}:{show:!0,position:"outside",formatter:`{b}
{c}`,fontSize:14},emphasis:{label:{show:!d.xs,fontSize:16,fontWeight:"bold"}},labelLine:d.xs?{show:!1}:{show:!0},data:[{value:m,name:"可還空位數"},{value:h,name:"可借車位數"}]}]}};l.useEffect(()=>{var R,H,U,V;const n=i==null?void 0:i.map(f=>f.tot),m=n==null?void 0:n.reduce((f,L)=>f+L+0),h=i==null?void 0:i.map(f=>f.bemp),y=h==null?void 0:h.reduce((f,L)=>f+L+0),F=i==null?void 0:i.map(f=>f.sbi),W=F==null?void 0:F.reduce((f,L)=>f+L+0),rt=(H=(R=i==null?void 0:i[600])==null?void 0:R.mday)==null?void 0:H.toString().slice(-8),ct=(V=(U=i==null?void 0:i[600])==null?void 0:U.mday)==null?void 0:V.toString().slice(0,10);x(m),v(y),b(W),D([ct,rt])},[i]);const at=()=>{"geolocation"in navigator?navigator.geolocation.getCurrentPosition(function(n){const{latitude:m,longitude:h}=n.coords;S(m),N(h),o(y=>({...y,center:[m,h],zoom:18})),c(!0)}):console.log("瀏覽器不支援地理位置服務")};return e.jsxs(e.Fragment,{children:[e.jsxs(zt,{children:[e.jsx(A,{xs:24,sm:24,md:24,lg:12,xl:12,xxl:6,children:e.jsx(G,{title:"目前場站所有總停車格",bodyStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},children:g||u||a===0||r===void 0?e.jsx(e.Fragment,{children:e.jsx(P,{})}):e.jsx("h1",{style:{fontSize:"2.5rem",fontWeight:"bold",color:"#002FA7"},children:a})})}),e.jsx(A,{xs:24,sm:24,md:24,lg:12,xl:12,xxl:6,children:e.jsx(G,{title:"目前所有可還空位數",bodyStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},children:g||u||r===0||r===void 0?e.jsx(e.Fragment,{children:e.jsx(P,{})}):e.jsx("h1",{style:{fontSize:"2.5rem",fontWeight:"bold",color:"#002FA7"},children:r})})}),e.jsx(A,{xs:24,sm:24,md:24,lg:12,xl:12,xxl:6,children:e.jsx(G,{title:"目前所有可借車位數",bodyStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},children:g||u||C===0||r===void 0?e.jsx(e.Fragment,{children:e.jsx(P,{})}):e.jsx("h1",{style:{fontSize:"2.5rem",fontWeight:"bold",color:"#002FA7"},children:C})})}),e.jsx(A,{xs:24,sm:24,md:24,lg:12,xl:12,xxl:6,children:e.jsx(G,{title:"當前使用量 ｜ 數據更新時間",bodyStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},children:g||u||p[1]===""||r===void 0?e.jsx(e.Fragment,{children:e.jsx(P,{})}):e.jsx(Ct,{option:lt({tot:a,bemp:r,sbi:C,updateTime:p[1]}),style:{height:"303px",width:"100%"},notMerge:!0,lazyUpdate:!0})})})]}),e.jsxs(_,{bodyStyle:{margin:5,padding:0,height:"100%"},children:[e.jsx("div",{style:{margin:0,padding:0},children:e.jsxs(xt,{viewport:t,onViewportChange:O,style:{height:"calc(55vh - 65px)"},children:[e.jsx(yt,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> 貢獻者',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e.jsxs(bt,{disableClusteringAtZoom:16,removeOutsideVisibleBounds:!0,spiderfyDistanceMultiplier:1,showCoverageOnHover:!0,maxClusterRadius:35,children:[i==null?void 0:i.map((n,m)=>e.jsxs(K,{position:[n.lat,n.lng],icon:st(m,n.tot,n.sbi,n.act),children:[e.jsx(Q,{direction:"bottom",offset:[0,7],children:n.sna}),e.jsx(q,{offset:[0,-13],children:e.jsxs(_,{bodyStyle:{display:"inline-block",padding:15},children:[e.jsx(St,{title:n.sna,description:n.sarea,style:{textAlign:"center"}}),e.jsx("hr",{style:{color:"gray",width:"90%",marginTop:"10px"}}),g||u?e.jsx(e.Fragment,{children:e.jsx(P,{style:{display:"flex",alignItems:"center",justifyContent:"center",position:"relative",height:"171.93800px"}})}):e.jsxs(e.Fragment,{children:[n.tot&&e.jsx(e.Fragment,{children:e.jsxs("p",{children:["場站總停車格：",n.tot]})}),n.sbi>=0&&e.jsx(e.Fragment,{children:e.jsxs("p",{children:["可借車位數：",n.sbi]})}),n.bemp&&e.jsx(e.Fragment,{children:e.jsxs("p",{children:["可還空位數：",n.bemp]})}),n.mday&&e.jsx(e.Fragment,{children:e.jsxs("p",{children:["上次更新時間：",n.mday]})}),n.act==="0"&&e.jsx(e.Fragment,{children:e.jsx("p",{style:{color:"red",textAlign:"center",fontSize:"1.2rem",margin:0,fontWeight:"bold"},children:"此站目前為禁用狀態"})})]})]})})]},`${n.lat}-${n.lng}-${m}`)),j&&e.jsxs(K,{position:[$,I],icon:ot(),children:[e.jsx(Q,{direction:"bottom",offset:[-3,8],permanent:!0,children:"我的位置"}),e.jsx(q,{offset:[-3,-13],closeButton:!1,children:e.jsx(J,{onClick:()=>c(!1),children:"close Marker"})})]})]})]})}),e.jsxs("div",{style:{marginTop:"5px",display:"flex",justifyContent:"space-between",alignItems:"baseline",flexDirection:d.xs?"column":"row"},children:[e.jsxs("div",{children:[e.jsxs(B,{style:{verticalAlign:"4px"},children:["臺北市 YouBike2.0 即時資訊："," "]}),e.jsx(E,{style:{color:"#006400",fontSize:"1.3rem"}}),e.jsx(B,{style:{verticalAlign:"4px"},children:" 充足 "}),e.jsx(E,{style:{color:"#d48806",fontSize:"1.3rem"}}),e.jsx(B,{style:{verticalAlign:"4px"},children:" 適中 "}),e.jsx(E,{style:{color:"#cf1322",fontSize:"1.3rem"}}),e.jsx(B,{style:{verticalAlign:"4px"},children:" 有限 "})]}),e.jsx("div",{children:e.jsx(J,{style:{verticalAlign:"4px",padding:"0 5px 0 5px"},onClick:at,children:"尋找我的座標"})})]})]})]})}export{Bt as Sarea,Gt as Sareaen,Qt as default};
