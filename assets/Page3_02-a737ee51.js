import{g as Z,K as W,c as J,d as K,r as l,C as R,e as N,o as Q,i as G,f as H,j as e,a as q}from"./index-fcae4f03.js";import{u as k}from"./useQuery-a8074719.js";import{M as tt,T as et,d as it,a as nt,b as st,P as ot,l as lt}from"./index-77d89319.js";import{C as L,M as at}from"./index-b849a11f.js";import{G as rt,M as $,T as ct,r as dt}from"./index.esm-924c1928.js";import{R as pt,C as O}from"./row-01e5871e.js";import"./index-97b523ce.js";import"./CheckOutlined-3f56a60d.js";function mt(t,s,i){var o=i||{},a=o.noTrailing,y=a===void 0?!1:a,S=o.noLeading,v=S===void 0?!1:S,C=o.debounceMode,b=C===void 0?void 0:C,c,D=!1,z=0;function u(){c&&clearTimeout(c)}function w(m){var d=m||{},f=d.upcomingOnly,n=f===void 0?!1:f;u(),D=!n}function h(){for(var m=arguments.length,d=new Array(m),f=0;f<m;f++)d[f]=arguments[f];var n=this,r=Date.now()-z;if(D)return;function p(){z=Date.now(),s.apply(n,d)}function g(){c=void 0}!v&&b&&!c&&p(),u(),b===void 0&&r>t?v?(z=Date.now(),y||(c=setTimeout(b?g:p,t))):p():y!==!0&&(c=setTimeout(b?g:p,b===void 0?t-r:t))}return h.cancel=w,h}function gt(t,s,i){var o=i||{},a=o.atBegin,y=a===void 0?!1:a;return mt(t,s,{debounceMode:y!==!1})}const ut=new W("antSpinMove",{to:{opacity:1}}),ht=new W("antRotate",{to:{transform:"rotate(405deg)"}}),ft=t=>({[`${t.componentCls}`]:Object.assign(Object.assign({},K(t)),{position:"absolute",display:"none",color:t.colorPrimary,fontSize:0,textAlign:"center",verticalAlign:"middle",opacity:0,transition:`transform ${t.motionDurationSlow} ${t.motionEaseInOutCirc}`,"&-spinning":{position:"static",display:"inline-block",opacity:1},"&-nested-loading":{position:"relative",[`> div > ${t.componentCls}`]:{position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:t.contentHeight,[`${t.componentCls}-dot`]:{position:"absolute",top:"50%",insetInlineStart:"50%",margin:-t.dotSize/2},[`${t.componentCls}-text`]:{position:"absolute",top:"50%",width:"100%",paddingTop:(t.dotSize-t.fontSize)/2+2,textShadow:`0 1px 2px ${t.colorBgContainer}`,fontSize:t.fontSize},[`&${t.componentCls}-show-text ${t.componentCls}-dot`]:{marginTop:-(t.dotSize/2)-10},"&-sm":{[`${t.componentCls}-dot`]:{margin:-t.dotSizeSM/2},[`${t.componentCls}-text`]:{paddingTop:(t.dotSizeSM-t.fontSize)/2+2},[`&${t.componentCls}-show-text ${t.componentCls}-dot`]:{marginTop:-(t.dotSizeSM/2)-10}},"&-lg":{[`${t.componentCls}-dot`]:{margin:-(t.dotSizeLG/2)},[`${t.componentCls}-text`]:{paddingTop:(t.dotSizeLG-t.fontSize)/2+2},[`&${t.componentCls}-show-text ${t.componentCls}-dot`]:{marginTop:-(t.dotSizeLG/2)-10}}},[`${t.componentCls}-container`]:{position:"relative",transition:`opacity ${t.motionDurationSlow}`,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:t.colorBgContainer,opacity:0,transition:`all ${t.motionDurationSlow}`,content:'""',pointerEvents:"none"}},[`${t.componentCls}-blur`]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none","&::after":{opacity:.4,pointerEvents:"auto"}}},"&-tip":{color:t.spinDotDefault},[`${t.componentCls}-dot`]:{position:"relative",display:"inline-block",fontSize:t.dotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:(t.dotSize-t.marginXXS/2)/2,height:(t.dotSize-t.marginXXS/2)/2,backgroundColor:t.colorPrimary,borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:ut,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:ht,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&-sm ${t.componentCls}-dot`]:{fontSize:t.dotSizeSM,i:{width:(t.dotSizeSM-t.marginXXS/2)/2,height:(t.dotSizeSM-t.marginXXS/2)/2}},[`&-lg ${t.componentCls}-dot`]:{fontSize:t.dotSizeLG,i:{width:(t.dotSizeLG-t.marginXXS)/2,height:(t.dotSizeLG-t.marginXXS)/2}},[`&${t.componentCls}-show-text ${t.componentCls}-text`]:{display:"block"}})}),xt=Z("Spin",t=>{const s=J(t,{spinDotDefault:t.colorTextDescription});return[ft(s)]},t=>({contentHeight:400,dotSize:t.controlHeightLG/2,dotSizeSM:t.controlHeightLG*.35,dotSizeLG:t.controlHeight}));var yt=globalThis&&globalThis.__rest||function(t,s){var i={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&s.indexOf(o)<0&&(i[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(t);a<o.length;a++)s.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(t,o[a])&&(i[o[a]]=t[o[a]]);return i};let P=null;function St(t,s){const{indicator:i}=s,o=`${t}-dot`;return i===null?null:G(i)?H(i,{className:N(i.props.className,o)}):G(P)?H(P,{className:N(P.props.className,o)}):l.createElement("span",{className:N(o,`${t}-dot-spin`)},l.createElement("i",{className:`${t}-dot-item`,key:1}),l.createElement("i",{className:`${t}-dot-item`,key:2}),l.createElement("i",{className:`${t}-dot-item`,key:3}),l.createElement("i",{className:`${t}-dot-item`,key:4}))}function bt(t,s){return!!t&&!!s&&!isNaN(Number(s))}const jt=t=>{const{spinPrefixCls:s,spinning:i=!0,delay:o=0,className:a,rootClassName:y,size:S="default",tip:v,wrapperClassName:C,style:b,children:c,hashId:D}=t,z=yt(t,["spinPrefixCls","spinning","delay","className","rootClassName","size","tip","wrapperClassName","style","children","hashId"]),[u,w]=l.useState(()=>i&&!bt(i,o));l.useEffect(()=>{if(i){const j=gt(o,()=>{w(!0)});return j(),()=>{var T;(T=j==null?void 0:j.cancel)===null||T===void 0||T.call(j)}}w(!1)},[o,i]);const h=l.useMemo(()=>typeof c<"u",[c]),{direction:m,spin:d}=l.useContext(R),f=N(s,d==null?void 0:d.className,{[`${s}-sm`]:S==="small",[`${s}-lg`]:S==="large",[`${s}-spinning`]:u,[`${s}-show-text`]:!!v,[`${s}-rtl`]:m==="rtl"},a,y,D),n=N(`${s}-container`,{[`${s}-blur`]:u}),r=Q(z,["indicator","prefixCls"]),p=Object.assign(Object.assign({},d==null?void 0:d.style),b),g=l.createElement("div",Object.assign({},r,{style:p,className:f,"aria-live":"polite","aria-busy":u}),St(s,t),v&&h?l.createElement("div",{className:`${s}-text`},v):null);return h?l.createElement("div",Object.assign({},r,{className:N(`${s}-nested-loading`,C,D)}),u&&l.createElement("div",{key:"loading"},g),l.createElement("div",{className:n,key:"container"},c)):g},V=t=>{const{prefixCls:s}=t,{getPrefixCls:i}=l.useContext(R),o=i("spin",s),[a,y]=xt(o),S=Object.assign(Object.assign({},t),{spinPrefixCls:o,hashId:y});return a(l.createElement(jt,Object.assign({},S)))};V.setDefaultIndicator=t=>{P=t};const E=V;function vt(t){return rt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3 4v12c0 1.103.897 2 2 2h3.5l3.5 4 3.5-4H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2zm8 1h2v6h-2V5zm0 8h2v2h-2v-2z"}}]})(t)}const{Text:M}=ct;var Ct=(t=>(t.中山區="中山區",t.中正區="中正區",t.信義區="信義區",t.內湖區="內湖區",t.北投區="北投區",t.南港區="南港區",t.士林區="士林區",t.大同區="大同區",t.大安區="大安區",t.文山區="文山區",t.松山區="松山區",t.臺大公館校區="臺大公館校區",t.萬華區="萬華區",t))(Ct||{}),Dt=(t=>(t.BeitouDist="Beitou Dist",t.DaanDist="Daan Dist.",t.DatongDist="Datong Dist",t.NTUDist="NTU Dist",t.NangangDist="Nangang Dist",t.NeihuDist="Neihu Dist",t.ShilinDist="Shilin Dist",t.SongshanDist="Songshan Dist",t.WanhuaDist="Wanhua Dist",t.WenshanDist="Wenshan Dist",t.XinyiDist="Xinyi Dist",t.ZhongshanDist="Zhongshan Dist",t.ZhongzhengDist="Zhongzheng Dist",t))(Dt||{});const F=({title:t,children:s,bodyStyle:i})=>e.jsx(e.Fragment,{children:e.jsx(L,{title:t,headStyle:{backgroundColor:"#002FA7",color:"white",textAlign:"center"},bodyStyle:{padding:3,height:"303px",userSelect:"text",...i},children:s})});function Mt(){const[t,s]=l.useState({center:[25.035751357120876,121.52047467202769],zoom:12}),[i,o]=l.useState(),[a,y]=l.useState(0),[S,v]=l.useState(0),[C,b]=l.useState(0),[c,D]=l.useState(["",""]);l.useEffect(()=>{const n=localStorage.getItem("page3_02-viewport");n&&s(JSON.parse(n))},[]);const z=async()=>{try{return(await q.get("https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json")).data}catch(n){console.log(n.message)}};console.log("render....");const{data:u,status:w,isLoading:h,isFetching:m}=k(["TaipeiYouBike"],z,{refetchOnWindowFocus:!1,keepPreviousData:!0,cacheTime:6e4,staleTime:1/0,refetchInterval:6e4});l.useEffect(()=>{w==="success"&&(console.log("data",u),o(u))},[u]);const d=n=>{localStorage.setItem("page3_02-viewport",JSON.stringify(n))},f=(n,r,p,g)=>lt.divIcon({className:"",html:dt(e.jsx("div",{children:g==="1"&&r/p>=3?e.jsx($,{style:{color:"#cf1322",fontSize:"2rem",marginLeft:"-11px",marginTop:"-20px"}}):g==="1"&&r/p>=2?e.jsx($,{style:{color:"#d48806",fontSize:"2rem",marginLeft:"-11px",marginTop:"-20px"}}):g==="1"?e.jsx($,{style:{color:"#006400",fontSize:"2rem",marginLeft:"-11px",marginTop:"-20px"}}):g==="0"&&e.jsx(vt,{style:{color:"#dc3545",fontSize:"2rem",marginLeft:"-11px",marginTop:"-20px"}})},n))});return l.useEffect(()=>{var A,B,X,_;const n=i==null?void 0:i.map(x=>x.tot),r=n==null?void 0:n.reduce((x,I)=>x+I+0),p=i==null?void 0:i.map(x=>x.bemp),g=p==null?void 0:p.reduce((x,I)=>x+I+0),j=i==null?void 0:i.map(x=>x.sbi),T=j==null?void 0:j.reduce((x,I)=>x+I+0),U=(B=(A=i==null?void 0:i[600])==null?void 0:A.mday)==null?void 0:B.toString().slice(-8),Y=(_=(X=i==null?void 0:i[600])==null?void 0:X.mday)==null?void 0:_.toString().slice(0,10);console.log(r),y(r),v(g),b(T),D([Y,U])},[i]),console.log("youbikeTotNum",a),e.jsxs(e.Fragment,{children:[e.jsxs(pt,{children:[e.jsx(O,{xs:24,sm:24,md:24,lg:12,xl:12,xxl:6,children:e.jsx(F,{title:"目前場站所有總停車格",bodyStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},children:h||m||a===0?e.jsx(e.Fragment,{children:e.jsx(E,{})}):e.jsx("h1",{style:{fontSize:"2.5rem",fontWeight:"bold",color:"#002FA7"},children:a})})}),e.jsx(O,{xs:24,sm:24,md:24,lg:12,xl:12,xxl:6,children:e.jsx(F,{title:"目前所有可還空位數",bodyStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},children:h||m||S===0?e.jsx(e.Fragment,{children:e.jsx(E,{})}):e.jsx("h1",{style:{fontSize:"2.5rem",fontWeight:"bold",color:"#002FA7"},children:S})})}),e.jsx(O,{xs:24,sm:24,md:24,lg:12,xl:12,xxl:6,children:e.jsx(F,{title:"目前所有可借車位數",bodyStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},children:h||m||C===0?e.jsx(e.Fragment,{children:e.jsx(E,{})}):e.jsx("h1",{style:{fontSize:"2.5rem",fontWeight:"bold",color:"#002FA7"},children:C})})}),e.jsx(O,{xs:24,sm:24,md:24,lg:12,xl:12,xxl:6,children:e.jsx(F,{title:"數據更新時間",bodyStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},children:h||m||c[1]===""?e.jsx(e.Fragment,{children:e.jsx(E,{})}):e.jsx("h1",{style:{fontSize:"2.5rem",fontWeight:"bold",color:"#002FA7"},children:c[1]})})})]}),e.jsxs(L,{bodyStyle:{margin:0,padding:0,height:"100%"},children:[e.jsx("div",{style:{margin:0,padding:0},children:e.jsxs(tt,{viewport:t,onViewportChange:d,style:{height:"calc(55vh - 50px)"},children:[e.jsx(et,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> 貢獻者',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e.jsx(it,{disableClusteringAtZoom:18,removeOutsideVisibleBounds:!0,spiderfyDistanceMultiplier:1,showCoverageOnHover:!1,maxClusterRadius:35,children:i==null?void 0:i.map((n,r)=>e.jsxs(nt,{position:[n.lat,n.lng],icon:f(r,n.tot,n.sbi,n.act),children:[e.jsx(st,{direction:"bottom",children:n.sna}),e.jsx(ot,{offset:[0,-13],children:e.jsxs(L,{bodyStyle:{display:"inline-block",padding:15},children:[e.jsx(at,{title:n.sna,description:n.sarea,style:{textAlign:"center"}}),e.jsx("hr",{style:{color:"gray",width:"90%",marginTop:"10px"}}),h||m?e.jsx(e.Fragment,{children:e.jsx(E,{style:{display:"flex",alignItems:"center",justifyContent:"center",position:"relative",height:"171.93800px"}})}):e.jsxs(e.Fragment,{children:[n.tot&&e.jsx(e.Fragment,{children:e.jsxs("p",{children:["場站總停車格：",n.tot]})}),n.sbi>=0&&e.jsx(e.Fragment,{children:e.jsxs("p",{children:["可借車位數：",n.sbi]})}),n.bemp&&e.jsx(e.Fragment,{children:e.jsxs("p",{children:["可還空位數：",n.bemp]})}),n.mday&&e.jsx(e.Fragment,{children:e.jsxs("p",{children:["上次更新時間：",n.mday]})})]})]})})]},r))})]})}),e.jsx("div",{children:e.jsxs(e.Fragment,{children:[e.jsx(M,{style:{verticalAlign:"4px"},children:"站點可借數量： "}),e.jsx($,{style:{color:"#006400",fontSize:"1.3rem"}}),e.jsx(M,{style:{verticalAlign:"4px"},children:" 充足 "}),e.jsx($,{style:{color:"#d48806",fontSize:"1.3rem"}}),e.jsx(M,{style:{verticalAlign:"4px"},children:" 適中 "}),e.jsx($,{style:{color:"#cf1322",fontSize:"1.3rem"}}),e.jsx(M,{style:{verticalAlign:"4px"},children:" 有限 "})]})})]})]})}export{Ct as Sarea,Dt as Sareaen,Mt as default};