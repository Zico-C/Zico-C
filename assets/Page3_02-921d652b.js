import{g as gt,K as it,c as mt,d as xt,r as l,C as nt,e as O,o as ht,i as Z,f as J,m as ut,j as e,B as K,G as ft,a as yt}from"./index-12c07a74.js";import{u as St}from"./useQuery-349fafce.js";import{M as bt,T as jt,d as vt,a as Q,b as q,P as k,l as tt}from"./index-91023ab1.js";import{C as X,M as zt}from"./index-42b831f4.js";import{G as wt,M,r as et,a as Ct}from"./index.esm-b256bd23.js";import{E as Dt}from"./index-085ebd29.js";import{R as $t,C as B}from"./row-8846ee78.js";import{T as Nt}from"./index-cae8497d.js";import"./index-6325ef3f.js";import"./CheckOutlined-b21c4202.js";import"./useLocale-2b817753.js";function Tt(t,s,n){var o=n||{},r=o.noTrailing,u=r===void 0?!1:r,c=o.noLeading,z=c===void 0?!1:c,w=o.debounceMode,y=w===void 0?void 0:w,p,D=!1,$=0;function S(){p&&clearTimeout(p)}function E(b){var d=b||{},m=d.upcomingOnly,T=m===void 0?!1:m;S(),D=!T}function N(){for(var b=arguments.length,d=new Array(b),m=0;m<b;m++)d[m]=arguments[m];var T=this,a=Date.now()-$;if(D)return;function C(){$=Date.now(),s.apply(T,d)}function j(){p=void 0}!z&&y&&!p&&C(),S(),y===void 0&&a>t?z?($=Date.now(),u||(p=setTimeout(y?j:C,t))):C():u!==!0&&(p=setTimeout(y?j:C,y===void 0?t-a:t))}return N.cancel=E,N}function It(t,s,n){var o=n||{},r=o.atBegin,u=r===void 0?!1:r;return Tt(t,s,{debounceMode:u!==!1})}const Et=new it("antSpinMove",{to:{opacity:1}}),Mt=new it("antRotate",{to:{transform:"rotate(405deg)"}}),Ot=t=>({[`${t.componentCls}`]:Object.assign(Object.assign({},xt(t)),{position:"absolute",display:"none",color:t.colorPrimary,fontSize:0,textAlign:"center",verticalAlign:"middle",opacity:0,transition:`transform ${t.motionDurationSlow} ${t.motionEaseInOutCirc}`,"&-spinning":{position:"static",display:"inline-block",opacity:1},"&-nested-loading":{position:"relative",[`> div > ${t.componentCls}`]:{position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:t.contentHeight,[`${t.componentCls}-dot`]:{position:"absolute",top:"50%",insetInlineStart:"50%",margin:-t.dotSize/2},[`${t.componentCls}-text`]:{position:"absolute",top:"50%",width:"100%",paddingTop:(t.dotSize-t.fontSize)/2+2,textShadow:`0 1px 2px ${t.colorBgContainer}`,fontSize:t.fontSize},[`&${t.componentCls}-show-text ${t.componentCls}-dot`]:{marginTop:-(t.dotSize/2)-10},"&-sm":{[`${t.componentCls}-dot`]:{margin:-t.dotSizeSM/2},[`${t.componentCls}-text`]:{paddingTop:(t.dotSizeSM-t.fontSize)/2+2},[`&${t.componentCls}-show-text ${t.componentCls}-dot`]:{marginTop:-(t.dotSizeSM/2)-10}},"&-lg":{[`${t.componentCls}-dot`]:{margin:-(t.dotSizeLG/2)},[`${t.componentCls}-text`]:{paddingTop:(t.dotSizeLG-t.fontSize)/2+2},[`&${t.componentCls}-show-text ${t.componentCls}-dot`]:{marginTop:-(t.dotSizeLG/2)-10}}},[`${t.componentCls}-container`]:{position:"relative",transition:`opacity ${t.motionDurationSlow}`,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:t.colorBgContainer,opacity:0,transition:`all ${t.motionDurationSlow}`,content:'""',pointerEvents:"none"}},[`${t.componentCls}-blur`]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none","&::after":{opacity:.4,pointerEvents:"auto"}}},"&-tip":{color:t.spinDotDefault},[`${t.componentCls}-dot`]:{position:"relative",display:"inline-block",fontSize:t.dotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:(t.dotSize-t.marginXXS/2)/2,height:(t.dotSize-t.marginXXS/2)/2,backgroundColor:t.colorPrimary,borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:Et,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:Mt,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&-sm ${t.componentCls}-dot`]:{fontSize:t.dotSizeSM,i:{width:(t.dotSizeSM-t.marginXXS/2)/2,height:(t.dotSizeSM-t.marginXXS/2)/2}},[`&-lg ${t.componentCls}-dot`]:{fontSize:t.dotSizeLG,i:{width:(t.dotSizeLG-t.marginXXS)/2,height:(t.dotSizeLG-t.marginXXS)/2}},[`&${t.componentCls}-show-text ${t.componentCls}-text`]:{display:"block"}})}),At=gt("Spin",t=>{const s=mt(t,{spinDotDefault:t.colorTextDescription});return[Ot(s)]},t=>({contentHeight:400,dotSize:t.controlHeightLG/2,dotSizeSM:t.controlHeightLG*.35,dotSizeLG:t.controlHeight}));var Ft=globalThis&&globalThis.__rest||function(t,s){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&s.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(t);r<o.length;r++)s.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]]);return n};let W=null;function Lt(t,s){const{indicator:n}=s,o=`${t}-dot`;return n===null?null:Z(n)?J(n,{className:O(n.props.className,o)}):Z(W)?J(W,{className:O(W.props.className,o)}):l.createElement("span",{className:O(o,`${t}-dot-spin`)},l.createElement("i",{className:`${t}-dot-item`,key:1}),l.createElement("i",{className:`${t}-dot-item`,key:2}),l.createElement("i",{className:`${t}-dot-item`,key:3}),l.createElement("i",{className:`${t}-dot-item`,key:4}))}function Pt(t,s){return!!t&&!!s&&!isNaN(Number(s))}const Bt=t=>{const{spinPrefixCls:s,spinning:n=!0,delay:o=0,className:r,rootClassName:u,size:c="default",tip:z,wrapperClassName:w,style:y,children:p,hashId:D}=t,$=Ft(t,["spinPrefixCls","spinning","delay","className","rootClassName","size","tip","wrapperClassName","style","children","hashId"]),[S,E]=l.useState(()=>n&&!Pt(n,o));l.useEffect(()=>{if(n){const I=It(o,()=>{E(!0)});return I(),()=>{var v;(v=I==null?void 0:I.cancel)===null||v===void 0||v.call(I)}}E(!1)},[o,n]);const N=l.useMemo(()=>typeof p<"u",[p]),{direction:b,spin:d}=l.useContext(nt),m=O(s,d==null?void 0:d.className,{[`${s}-sm`]:c==="small",[`${s}-lg`]:c==="large",[`${s}-spinning`]:S,[`${s}-show-text`]:!!z,[`${s}-rtl`]:b==="rtl"},r,u,D),T=O(`${s}-container`,{[`${s}-blur`]:S}),a=ht($,["indicator","prefixCls"]),C=Object.assign(Object.assign({},d==null?void 0:d.style),y),j=l.createElement("div",Object.assign({},a,{style:C,className:m,"aria-live":"polite","aria-busy":S}),Lt(s,t),z&&N?l.createElement("div",{className:`${s}-text`},z):null);return N?l.createElement("div",Object.assign({},a,{className:O(`${s}-nested-loading`,w,D)}),S&&l.createElement("div",{key:"loading"},j),l.createElement("div",{className:T,key:"container"},p)):j},st=t=>{const{prefixCls:s}=t,{getPrefixCls:n}=l.useContext(nt),o=n("spin",s),[r,u]=At(o),c=Object.assign(Object.assign({},t),{spinPrefixCls:o,hashId:u});return r(l.createElement(Bt,Object.assign({},c)))};st.setDefaultIndicator=t=>{W=t};const P=st;function Gt(t){return wt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3 4v12c0 1.103.897 2 2 2h3.5l3.5 4 3.5-4H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2zm8 1h2v6h-2V5zm0 8h2v2h-2v-2z"}}]})(t)}const{useBreakpoint:_t}=ft,{Text:G}=Nt;var Wt=(t=>(t.中山區="中山區",t.中正區="中正區",t.信義區="信義區",t.內湖區="內湖區",t.北投區="北投區",t.南港區="南港區",t.士林區="士林區",t.大同區="大同區",t.大安區="大安區",t.文山區="文山區",t.松山區="松山區",t.臺大公館校區="臺大公館校區",t.萬華區="萬華區",t))(Wt||{}),Xt=(t=>(t.BeitouDist="Beitou Dist",t.DaanDist="Daan Dist.",t.DatongDist="Datong Dist",t.NTUDist="NTU Dist",t.NangangDist="Nangang Dist",t.NeihuDist="Neihu Dist",t.ShilinDist="Shilin Dist",t.SongshanDist="Songshan Dist",t.WanhuaDist="Wanhua Dist",t.WenshanDist="Wenshan Dist",t.XinyiDist="Xinyi Dist",t.ZhongshanDist="Zhongshan Dist",t.ZhongzhengDist="Zhongzheng Dist",t))(Xt||{});const _=({title:t,children:s,bodyStyle:n})=>e.jsx(e.Fragment,{children:e.jsx(X,{title:t,headStyle:{backgroundColor:"#002FA7",color:"white",textAlign:"center",borderRadius:0},bodyStyle:{padding:3,height:"299px",userSelect:"text",...n},children:s})});function te(){const[t,s]=l.useState({center:[25.035751357120876,121.52047467202769],zoom:12}),[n,o]=l.useState(),[r,u]=l.useState(0),[c,z]=l.useState(0),[w,y]=l.useState(0),[p,D]=l.useState(["",""]),[$,S]=l.useState(0),[E,N]=l.useState(0),[b,d]=l.useState(!1),[m,T]=ut.useMessage(),a=_t();l.useEffect(()=>{const i=localStorage.getItem("page3_02-viewport");i&&s(JSON.parse(i))},[]);const C=async()=>{try{return(await yt.get("https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json")).data}catch(i){console.log(i.message)}};console.log("render....");const{data:j,status:I,isLoading:v,isFetching:A}=St(["TaipeiYouBike"],C,{refetchOnWindowFocus:!1,keepPreviousData:!0,cacheTime:6e4,staleTime:1/0,refetchInterval:6e4});l.useEffect(()=>{I==="success"&&(console.log("data",j),o(j))},[j]);const ot=i=>{localStorage.setItem("page3_02-viewport",JSON.stringify(i))};l.useEffect(()=>{localStorage.setItem("page3_02-viewport",JSON.stringify(t))},[b]);const lt=()=>tt.divIcon({className:"",html:et(e.jsx(e.Fragment,{children:e.jsx(Ct,{style:{color:"#263ea0",fontSize:"1.8rem",marginLeft:"-11px",marginTop:"-20px"}})}))}),at=(i,g,x,f)=>tt.divIcon({className:"",html:et(e.jsx("div",{children:f==="1"&&g/x>=3?e.jsx(M,{style:{color:"#cf1322",fontSize:"1.8rem",marginLeft:"-11px",marginTop:"-20px"}}):f==="1"&&g/x>=2?e.jsx(M,{style:{color:"#d48806",fontSize:"1.8rem",marginLeft:"-11px",marginTop:"-20px"}}):f==="1"?e.jsx(M,{style:{color:"#006400",fontSize:"1.8rem",marginLeft:"-11px",marginTop:"-20px"}}):f==="0"&&e.jsx(Gt,{style:{color:"#dc3545",fontSize:"1.8rem",marginLeft:"-11px",marginTop:"-20px"}})},i))}),rt=({tot:i,bemp:g,sbi:x,updateTime:f})=>{const F=(g/i*100).toFixed(2);return{tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},graphic:[{type:"text",left:"center",top:"35%",style:{text:"目前使用量",textAlign:"center",fill:"#555",fontSize:16,fontWeight:"bold"}},{type:"text",left:"center",top:"45%",style:{text:`${F} %`,textAlign:"center",fill:"#555",fontSize:20,fontWeight:"bold"}},{type:"text",left:"center",top:"88%",style:{text:`上次更新時間 ${f}`,textAlign:"center",fill:"#555",fontSize:20,fontWeight:"bold"}}],series:[{name:"Access From",type:"pie",radius:["45%","66%"],center:["50%","45%"],avoidLabelOverlap:!1,label:a.xs?{show:!1}:{show:!0,position:"outside",formatter:`{b}
{c}`,fontSize:14},emphasis:{label:{show:!a.xs,fontSize:16,fontWeight:"bold"}},labelLine:a.xs?{show:!1}:{show:!0},data:[{value:g,name:"可還空位數"},{value:x,name:"可借車位數"}]}]}};l.useEffect(()=>{var H,U,V,Y;const i=n==null?void 0:n.map(h=>h.tot),g=i==null?void 0:i.reduce((h,L)=>h+L+0),x=n==null?void 0:n.map(h=>h.bemp),f=x==null?void 0:x.reduce((h,L)=>h+L+0),F=n==null?void 0:n.map(h=>h.sbi),R=F==null?void 0:F.reduce((h,L)=>h+L+0),dt=(U=(H=n==null?void 0:n[600])==null?void 0:H.mday)==null?void 0:U.toString().slice(-8),pt=(Y=(V=n==null?void 0:n[600])==null?void 0:V.mday)==null?void 0:Y.toString().slice(0,10);u(g),z(f),y(R),D([pt,dt])},[n]);const ct=()=>{"geolocation"in navigator?navigator.geolocation.getCurrentPosition(function(i){const{latitude:g,longitude:x}=i.coords;S(g),N(x),s(f=>({...f,center:[g,x],zoom:a.xs?16:18})),d(!0)},function(i){i.code===i.PERMISSION_DENIED?m.warning("請開啟瀏覽器位置存取權限!"):console.log(`無法取得位置：${i.message}`)}):(m.error("瀏覽器不支援地理位置服務"),console.log("瀏覽器不支援地理位置服務"))};return e.jsxs(e.Fragment,{children:[e.jsxs($t,{children:[e.jsx(B,{xs:24,sm:24,md:24,lg:12,xl:12,xxl:6,children:e.jsx(_,{title:"目前場站所有總停車格",bodyStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},children:v||A||r===0||c===void 0?e.jsx(e.Fragment,{children:e.jsx(P,{})}):e.jsx("h1",{style:{fontSize:"2.5rem",fontWeight:"bold",color:"#002FA7"},children:r})})}),e.jsx(B,{xs:24,sm:24,md:24,lg:12,xl:12,xxl:6,children:e.jsx(_,{title:"目前所有可還空位數",bodyStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},children:v||A||c===0||c===void 0?e.jsx(e.Fragment,{children:e.jsx(P,{})}):e.jsx("h1",{style:{fontSize:"2.5rem",fontWeight:"bold",color:"#002FA7"},children:c})})}),e.jsx(B,{xs:24,sm:24,md:24,lg:12,xl:12,xxl:6,children:e.jsx(_,{title:"目前所有可借車位數",bodyStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},children:v||A||w===0||c===void 0?e.jsx(e.Fragment,{children:e.jsx(P,{})}):e.jsx("h1",{style:{fontSize:"2.5rem",fontWeight:"bold",color:"#002FA7"},children:w})})}),e.jsx(B,{xs:24,sm:24,md:24,lg:12,xl:12,xxl:6,children:e.jsx(_,{title:"當前使用量 ｜ 數據更新時間",bodyStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},children:v||A||p[1]===""||c===void 0?e.jsx(e.Fragment,{children:e.jsx(P,{})}):e.jsx(Dt,{option:rt({tot:r,bemp:c,sbi:w,updateTime:p[1]}),style:{height:"303px",width:"100%"},notMerge:!0,lazyUpdate:!0})})})]}),e.jsxs(X,{bodyStyle:{margin:5,padding:0,height:"100%"},children:[e.jsx("div",{style:{margin:0,padding:0},children:e.jsxs(bt,{viewport:t,onViewportChange:ot,style:{height:"calc(55vh - 65px)"},children:[e.jsx(jt,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> 貢獻者',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e.jsxs(vt,{disableClusteringAtZoom:16,removeOutsideVisibleBounds:!0,spiderfyDistanceMultiplier:1,showCoverageOnHover:!0,maxClusterRadius:35,children:[n==null?void 0:n.map((i,g)=>e.jsxs(Q,{position:[i.lat,i.lng],icon:at(g,i.tot,i.sbi,i.act),children:[e.jsx(q,{direction:"bottom",offset:[0,7],children:i.sna}),e.jsx(k,{offset:[0,-13],children:e.jsxs(X,{bodyStyle:a.xs?{display:"inline-block",padding:"5px 0 5px 0"}:{display:"inline-block",padding:15},children:[e.jsx(zt,{title:e.jsx("div",{style:a.xs?{fontSize:"1rem",padding:"0 15px 0 15px"}:{fontSize:"1.2rem",maxWidth:"244px",whiteSpace:"pre-line"},children:a.xs?i.sna.replace(/\([^)]*\)/g,""):i.sna}),description:i.sarea,style:a.xs?{fontSize:"0.9rem",textAlign:"center"}:{textAlign:"center"}}),e.jsx("hr",{style:{color:"gray",width:"90%",marginTop:"10px"}}),v||A?e.jsx(e.Fragment,{children:e.jsx(P,{style:{display:"flex",alignItems:"center",justifyContent:"center",position:"relative",height:"171.93800px"}})}):e.jsxs(e.Fragment,{children:[i.tot&&e.jsx(e.Fragment,{children:a.xs?e.jsxs("h6",{style:{fontSize:"1rem",textAlign:"left",margin:"10px 0 0 0",padding:"0 0 0 15px"},children:["場站總停車格：",i.tot]}):e.jsxs("p",{children:["場站總停車格：",i.tot]})}),i.sbi>=0&&e.jsx(e.Fragment,{children:a.xs?e.jsxs("h6",{style:{fontSize:"1rem",textAlign:"left",margin:"10px 0 0 0",padding:"0 0 0 15px"},children:["可借車位數：",i.sbi]}):e.jsxs("p",{children:["可借車位數：",i.sbi]})}),i.bemp&&e.jsx(e.Fragment,{children:a.xs?e.jsxs("h6",{style:{fontSize:"1rem",textAlign:"left",margin:"10px 0 0 0",padding:"0 0 0 15px"},children:["可還空位數：",i.bemp]}):e.jsxs("p",{children:["可還空位數：",i.bemp]})}),i.mday&&e.jsx(e.Fragment,{children:a.xs?e.jsxs("h6",{style:{fontSize:"1rem",textAlign:"left",margin:"10px 0 10px 0",padding:"0 0 0 15px"},children:["更新時間：",i.mday.slice(11,19)]}):e.jsxs("p",{children:["上次更新時間：",i.mday]})}),i.lat&&i.lng&&(a.xs?e.jsx(e.Fragment,{children:e.jsx("a",{href:`https://www.google.com/maps/dir/?api=1&destination=${i.lat},${i.lng}`,target:"_New",style:{fontSize:"1rem",textAlign:"left",padding:"0 0 0 15px",margin:"0 0 10px 0 "},children:"打開 Google 地圖導航"})}):e.jsx(e.Fragment,{children:e.jsx("a",{href:`https://www.google.com/maps/dir/?api=1&destination=${i.lat},${i.lng}`,target:"_blank",children:"打開 Google 地圖導航"})})),i.act==="0"&&e.jsx(e.Fragment,{children:e.jsx("p",{style:a.xs?{color:"red",textAlign:"center",fontSize:"1.2rem",fontWeight:"bold"}:{color:"red",textAlign:"center",fontSize:"1.2rem",margin:"10px 0 0 0 ",fontWeight:"bold"},children:"此站目前為禁用狀態"})})]})]})})]},`${i.lat}-${i.lng}-${g}`)),b&&e.jsxs(Q,{position:[$,E],icon:lt(),children:[e.jsx(q,{direction:"bottom",offset:[-3,8],permanent:!0,children:"我的位置"}),e.jsx(k,{offset:[-3,-13],closeButton:!1,children:e.jsx(K,{onClick:()=>d(!1),children:"close Marker"})})]})]})]})}),e.jsxs("div",{style:{marginTop:"5px",display:"flex",justifyContent:"space-between",alignItems:"baseline",flexDirection:a.xs?"column":"row"},children:[e.jsxs("div",{children:[e.jsxs(G,{style:{verticalAlign:"4px"},children:["臺北市 YouBike2.0 即時資訊："," "]}),e.jsx(M,{style:{color:"#006400",fontSize:"1.3rem"}}),e.jsx(G,{style:{verticalAlign:"4px"},children:" 充足 "}),e.jsx(M,{style:{color:"#d48806",fontSize:"1.3rem"}}),e.jsx(G,{style:{verticalAlign:"4px"},children:" 適中 "}),e.jsx(M,{style:{color:"#cf1322",fontSize:"1.3rem"}}),e.jsx(G,{style:{verticalAlign:"4px"},children:" 有限 "})]}),e.jsx("div",{children:e.jsx(K,{style:{verticalAlign:"4px",padding:"0 5px 0 5px"},onClick:ct,children:"尋找我的座標"})})]})]}),T]})}export{Wt as Sarea,Xt as Sareaen,te as default};
