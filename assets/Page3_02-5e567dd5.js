import{g as K,K as V,c as Q,d as q,r as l,C as U,e as T,o as k,i as R,f as H,j as e,G as tt,a as et}from"./index-a645c50b.js";import{u as it}from"./useQuery-4bd251ef.js";import{M as nt,T as ot,d as st,a as lt,b as at,P as rt,l as ct}from"./index-3ee754a9.js";import{C as A,M as dt}from"./index-20a24400.js";import{G as pt,M as N,r as mt}from"./index.esm-bf83b110.js";import{E as gt}from"./index-bf1c4341.js";import{R as ut,C as M}from"./row-4abd5d74.js";import{T as ht}from"./index-64cbc1f0.js";import"./index-ae231829.js";import"./CheckOutlined-26b1d373.js";import"./useLocale-6dc9b655.js";function ft(t,o,i){var s=i||{},a=s.noTrailing,x=a===void 0?!1:a,d=s.noLeading,j=d===void 0?!1:d,v=s.debounceMode,y=v===void 0?void 0:v,m,w=!1,b=0;function S(){m&&clearTimeout(m)}function C(g){var r=g||{},h=r.upcomingOnly,$=h===void 0?!1:h;S(),w=!$}function D(){for(var g=arguments.length,r=new Array(g),h=0;h<g;h++)r[h]=arguments[h];var $=this,z=Date.now()-b;if(w)return;function n(){b=Date.now(),o.apply($,r)}function c(){m=void 0}!j&&y&&!m&&n(),S(),y===void 0&&z>t?j?(b=Date.now(),x||(m=setTimeout(y?c:n,t))):n():x!==!0&&(m=setTimeout(y?c:n,y===void 0?t-z:t))}return D.cancel=C,D}function xt(t,o,i){var s=i||{},a=s.atBegin,x=a===void 0?!1:a;return ft(t,o,{debounceMode:x!==!1})}const yt=new V("antSpinMove",{to:{opacity:1}}),bt=new V("antRotate",{to:{transform:"rotate(405deg)"}}),St=t=>({[`${t.componentCls}`]:Object.assign(Object.assign({},q(t)),{position:"absolute",display:"none",color:t.colorPrimary,fontSize:0,textAlign:"center",verticalAlign:"middle",opacity:0,transition:`transform ${t.motionDurationSlow} ${t.motionEaseInOutCirc}`,"&-spinning":{position:"static",display:"inline-block",opacity:1},"&-nested-loading":{position:"relative",[`> div > ${t.componentCls}`]:{position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:t.contentHeight,[`${t.componentCls}-dot`]:{position:"absolute",top:"50%",insetInlineStart:"50%",margin:-t.dotSize/2},[`${t.componentCls}-text`]:{position:"absolute",top:"50%",width:"100%",paddingTop:(t.dotSize-t.fontSize)/2+2,textShadow:`0 1px 2px ${t.colorBgContainer}`,fontSize:t.fontSize},[`&${t.componentCls}-show-text ${t.componentCls}-dot`]:{marginTop:-(t.dotSize/2)-10},"&-sm":{[`${t.componentCls}-dot`]:{margin:-t.dotSizeSM/2},[`${t.componentCls}-text`]:{paddingTop:(t.dotSizeSM-t.fontSize)/2+2},[`&${t.componentCls}-show-text ${t.componentCls}-dot`]:{marginTop:-(t.dotSizeSM/2)-10}},"&-lg":{[`${t.componentCls}-dot`]:{margin:-(t.dotSizeLG/2)},[`${t.componentCls}-text`]:{paddingTop:(t.dotSizeLG-t.fontSize)/2+2},[`&${t.componentCls}-show-text ${t.componentCls}-dot`]:{marginTop:-(t.dotSizeLG/2)-10}}},[`${t.componentCls}-container`]:{position:"relative",transition:`opacity ${t.motionDurationSlow}`,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:t.colorBgContainer,opacity:0,transition:`all ${t.motionDurationSlow}`,content:'""',pointerEvents:"none"}},[`${t.componentCls}-blur`]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none","&::after":{opacity:.4,pointerEvents:"auto"}}},"&-tip":{color:t.spinDotDefault},[`${t.componentCls}-dot`]:{position:"relative",display:"inline-block",fontSize:t.dotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:(t.dotSize-t.marginXXS/2)/2,height:(t.dotSize-t.marginXXS/2)/2,backgroundColor:t.colorPrimary,borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:yt,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:bt,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&-sm ${t.componentCls}-dot`]:{fontSize:t.dotSizeSM,i:{width:(t.dotSizeSM-t.marginXXS/2)/2,height:(t.dotSizeSM-t.marginXXS/2)/2}},[`&-lg ${t.componentCls}-dot`]:{fontSize:t.dotSizeLG,i:{width:(t.dotSizeLG-t.marginXXS)/2,height:(t.dotSizeLG-t.marginXXS)/2}},[`&${t.componentCls}-show-text ${t.componentCls}-text`]:{display:"block"}})}),jt=K("Spin",t=>{const o=Q(t,{spinDotDefault:t.colorTextDescription});return[St(o)]},t=>({contentHeight:400,dotSize:t.controlHeightLG/2,dotSizeSM:t.controlHeightLG*.35,dotSizeLG:t.controlHeight}));var vt=globalThis&&globalThis.__rest||function(t,o){var i={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&o.indexOf(s)<0&&(i[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(t);a<s.length;a++)o.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(t,s[a])&&(i[s[a]]=t[s[a]]);return i};let P=null;function Ct(t,o){const{indicator:i}=o,s=`${t}-dot`;return i===null?null:R(i)?H(i,{className:T(i.props.className,s)}):R(P)?H(P,{className:T(P.props.className,s)}):l.createElement("span",{className:T(s,`${t}-dot-spin`)},l.createElement("i",{className:`${t}-dot-item`,key:1}),l.createElement("i",{className:`${t}-dot-item`,key:2}),l.createElement("i",{className:`${t}-dot-item`,key:3}),l.createElement("i",{className:`${t}-dot-item`,key:4}))}function zt(t,o){return!!t&&!!o&&!isNaN(Number(o))}const wt=t=>{const{spinPrefixCls:o,spinning:i=!0,delay:s=0,className:a,rootClassName:x,size:d="default",tip:j,wrapperClassName:v,style:y,children:m,hashId:w}=t,b=vt(t,["spinPrefixCls","spinning","delay","className","rootClassName","size","tip","wrapperClassName","style","children","hashId"]),[S,C]=l.useState(()=>i&&!zt(i,s));l.useEffect(()=>{if(i){const p=xt(s,()=>{C(!0)});return p(),()=>{var u;(u=p==null?void 0:p.cancel)===null||u===void 0||u.call(p)}}C(!1)},[s,i]);const D=l.useMemo(()=>typeof m<"u",[m]),{direction:g,spin:r}=l.useContext(U),h=T(o,r==null?void 0:r.className,{[`${o}-sm`]:d==="small",[`${o}-lg`]:d==="large",[`${o}-spinning`]:S,[`${o}-show-text`]:!!j,[`${o}-rtl`]:g==="rtl"},a,x,w),$=T(`${o}-container`,{[`${o}-blur`]:S}),z=k(b,["indicator","prefixCls"]),n=Object.assign(Object.assign({},r==null?void 0:r.style),y),c=l.createElement("div",Object.assign({},z,{style:n,className:h,"aria-live":"polite","aria-busy":S}),Ct(o,t),j&&D?l.createElement("div",{className:`${o}-text`},j):null);return D?l.createElement("div",Object.assign({},z,{className:T(`${o}-nested-loading`,v,w)}),S&&l.createElement("div",{key:"loading"},c),l.createElement("div",{className:$,key:"container"},m)):c},Y=t=>{const{prefixCls:o}=t,{getPrefixCls:i}=l.useContext(U),s=i("spin",o),[a,x]=jt(s),d=Object.assign(Object.assign({},t),{spinPrefixCls:s,hashId:x});return a(l.createElement(wt,Object.assign({},d)))};Y.setDefaultIndicator=t=>{P=t};const O=Y;function Dt(t){return pt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3 4v12c0 1.103.897 2 2 2h3.5l3.5 4 3.5-4H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2zm8 1h2v6h-2V5zm0 8h2v2h-2v-2z"}}]})(t)}const{useBreakpoint:$t}=tt,{Text:F}=ht;var Nt=(t=>(t.中山區="中山區",t.中正區="中正區",t.信義區="信義區",t.內湖區="內湖區",t.北投區="北投區",t.南港區="南港區",t.士林區="士林區",t.大同區="大同區",t.大安區="大安區",t.文山區="文山區",t.松山區="松山區",t.臺大公館校區="臺大公館校區",t.萬華區="萬華區",t))(Nt||{}),Tt=(t=>(t.BeitouDist="Beitou Dist",t.DaanDist="Daan Dist.",t.DatongDist="Datong Dist",t.NTUDist="NTU Dist",t.NangangDist="Nangang Dist",t.NeihuDist="Neihu Dist",t.ShilinDist="Shilin Dist",t.SongshanDist="Songshan Dist",t.WanhuaDist="Wanhua Dist",t.WenshanDist="Wenshan Dist",t.XinyiDist="Xinyi Dist",t.ZhongshanDist="Zhongshan Dist",t.ZhongzhengDist="Zhongzheng Dist",t))(Tt||{});const L=({title:t,children:o,bodyStyle:i})=>e.jsx(e.Fragment,{children:e.jsx(A,{title:t,headStyle:{backgroundColor:"#002FA7",color:"white",textAlign:"center",borderRadius:0},bodyStyle:{padding:3,height:"303px",userSelect:"text",...i},children:o})});function Wt(){const[t,o]=l.useState({center:[25.035751357120876,121.52047467202769],zoom:12}),[i,s]=l.useState(),[a,x]=l.useState(0),[d,j]=l.useState(0);console.log("youbikeBempNum",d);const[v,y]=l.useState(0),[m,w]=l.useState(["",""]),b=$t();l.useEffect(()=>{const n=localStorage.getItem("page3_02-viewport");n&&o(JSON.parse(n))},[]);const S=async()=>{try{return(await et.get("https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json")).data}catch(n){console.log(n.message)}};console.log("render....");const{data:C,status:D,isLoading:g,isFetching:r}=it(["TaipeiYouBike"],S,{refetchOnWindowFocus:!1,keepPreviousData:!0,cacheTime:6e4,staleTime:1/0,refetchInterval:6e4});l.useEffect(()=>{D==="success"&&(console.log("data",C),s(C))},[C]);const h=n=>{localStorage.setItem("page3_02-viewport",JSON.stringify(n))},$=(n,c,p,u)=>ct.divIcon({className:"",html:mt(e.jsx("div",{children:u==="1"&&c/p>=3?e.jsx(N,{style:{color:"#cf1322",fontSize:"1.8rem",marginLeft:"-11px",marginTop:"-20px"}}):u==="1"&&c/p>=2?e.jsx(N,{style:{color:"#d48806",fontSize:"1.8rem",marginLeft:"-11px",marginTop:"-20px"}}):u==="1"?e.jsx(N,{style:{color:"#006400",fontSize:"1.8rem",marginLeft:"-11px",marginTop:"-20px"}}):u==="0"&&e.jsx(Dt,{style:{color:"#dc3545",fontSize:"1.8rem",marginLeft:"-11px",marginTop:"-20px"}})},n))}),z=({tot:n,bemp:c,sbi:p,updateTime:u})=>{const E=(c/n*100).toFixed(2);return{tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},graphic:[{type:"text",left:"center",top:"35%",style:{text:"目前使用量",textAlign:"center",fill:"#555",fontSize:16,fontWeight:"bold"}},{type:"text",left:"center",top:"45%",style:{text:`${E} %`,textAlign:"center",fill:"#555",fontSize:20,fontWeight:"bold"}},{type:"text",left:"center",top:"88%",style:{text:`上次更新時間 ${u}`,textAlign:"center",fill:"#555",fontSize:20,fontWeight:"bold"}}],series:[{name:"Access From",type:"pie",radius:["45%","66%"],center:["50%","45%"],avoidLabelOverlap:!1,label:b.xs?{show:!1}:{show:!0,position:"outside",formatter:`{b}
{c}`,fontSize:14},emphasis:{label:{show:!b.xs,fontSize:16,fontWeight:"bold"}},labelLine:b.xs?{show:!1}:{show:!0},data:[{value:c,name:"可還空位數"},{value:p,name:"可借車位數"}]}]}};return console.log(z),l.useEffect(()=>{var X,G,W,_;const n=i==null?void 0:i.map(f=>f.tot),c=n==null?void 0:n.reduce((f,I)=>f+I+0),p=i==null?void 0:i.map(f=>f.bemp),u=p==null?void 0:p.reduce((f,I)=>f+I+0),E=i==null?void 0:i.map(f=>f.sbi),B=E==null?void 0:E.reduce((f,I)=>f+I+0),Z=(G=(X=i==null?void 0:i[600])==null?void 0:X.mday)==null?void 0:G.toString().slice(-8),J=(_=(W=i==null?void 0:i[600])==null?void 0:W.mday)==null?void 0:_.toString().slice(0,10);console.log(c),x(c),j(u),y(B),w([J,Z])},[i]),console.log("youbikeTotNum",a),e.jsxs(e.Fragment,{children:[e.jsxs(ut,{children:[e.jsx(M,{xs:24,sm:24,md:24,lg:12,xl:12,xxl:6,children:e.jsx(L,{title:"目前場站所有總停車格",bodyStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},children:g||r||a===0||d===void 0?e.jsx(e.Fragment,{children:e.jsx(O,{})}):e.jsx("h1",{style:{fontSize:"2.5rem",fontWeight:"bold",color:"#002FA7"},children:a})})}),e.jsx(M,{xs:24,sm:24,md:24,lg:12,xl:12,xxl:6,children:e.jsx(L,{title:"目前所有可還空位數",bodyStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},children:g||r||d===0||d===void 0?e.jsx(e.Fragment,{children:e.jsx(O,{})}):e.jsx("h1",{style:{fontSize:"2.5rem",fontWeight:"bold",color:"#002FA7"},children:d})})}),e.jsx(M,{xs:24,sm:24,md:24,lg:12,xl:12,xxl:6,children:e.jsx(L,{title:"目前所有可借車位數",bodyStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},children:g||r||v===0||d===void 0?e.jsx(e.Fragment,{children:e.jsx(O,{})}):e.jsx("h1",{style:{fontSize:"2.5rem",fontWeight:"bold",color:"#002FA7"},children:v})})}),e.jsx(M,{xs:24,sm:24,md:24,lg:12,xl:12,xxl:6,children:e.jsx(L,{title:"當前使用量 ｜ 數據更新時間",bodyStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},children:g||r||m[1]===""||d===void 0?e.jsx(e.Fragment,{children:e.jsx(O,{})}):e.jsx(gt,{option:z({tot:a,bemp:d,sbi:v,updateTime:m[1]}),style:{height:"303px",width:"100%"},notMerge:!0,lazyUpdate:!0})})})]}),e.jsxs(A,{bodyStyle:{margin:5,padding:0,height:"100%"},children:[e.jsx("div",{style:{margin:0,padding:0},children:e.jsxs(nt,{viewport:t,onViewportChange:h,style:{height:"calc(55vh - 65px)"},children:[e.jsx(ot,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> 貢獻者',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e.jsx(st,{disableClusteringAtZoom:16,removeOutsideVisibleBounds:!0,spiderfyDistanceMultiplier:1,showCoverageOnHover:!0,maxClusterRadius:35,children:i==null?void 0:i.map((n,c)=>e.jsxs(lt,{position:[n.lat,n.lng],icon:$(c,n.tot,n.sbi,n.act),children:[e.jsx(at,{direction:"bottom",offset:[0,7],children:n.sna}),e.jsx(rt,{offset:[0,-13],children:e.jsxs(A,{bodyStyle:{display:"inline-block",padding:15},children:[e.jsx(dt,{title:n.sna,description:n.sarea,style:{textAlign:"center"}}),e.jsx("hr",{style:{color:"gray",width:"90%",marginTop:"10px"}}),g||r?e.jsx(e.Fragment,{children:e.jsx(O,{style:{display:"flex",alignItems:"center",justifyContent:"center",position:"relative",height:"171.93800px"}})}):e.jsxs(e.Fragment,{children:[n.tot&&e.jsx(e.Fragment,{children:e.jsxs("p",{children:["場站總停車格：",n.tot]})}),n.sbi>=0&&e.jsx(e.Fragment,{children:e.jsxs("p",{children:["可借車位數：",n.sbi]})}),n.bemp&&e.jsx(e.Fragment,{children:e.jsxs("p",{children:["可還空位數：",n.bemp]})}),n.mday&&e.jsx(e.Fragment,{children:e.jsxs("p",{children:["上次更新時間：",n.mday]})}),n.act==="0"&&e.jsx(e.Fragment,{children:e.jsx("p",{style:{color:"red",textAlign:"center",fontSize:"1.2rem",margin:0,fontWeight:"bold"},children:"此站目前為禁用狀態"})})]})]})})]},c))})]})}),e.jsx("div",{style:{marginTop:"5px"},children:e.jsxs(e.Fragment,{children:[e.jsxs(F,{style:{verticalAlign:"4px"},children:["臺北市 YouBike2.0 即時資訊："," "]}),e.jsx(N,{style:{color:"#006400",fontSize:"1.3rem"}}),e.jsx(F,{style:{verticalAlign:"4px"},children:" 充足 "}),e.jsx(N,{style:{color:"#d48806",fontSize:"1.3rem"}}),e.jsx(F,{style:{verticalAlign:"4px"},children:" 適中 "}),e.jsx(N,{style:{color:"#cf1322",fontSize:"1.3rem"}}),e.jsx(F,{style:{verticalAlign:"4px"},children:" 有限 "})]})})]})]})}export{Nt as Sarea,Tt as Sareaen,Wt as default};
