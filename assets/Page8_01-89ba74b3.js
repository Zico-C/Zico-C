import{r as a,bO as I,a as F,j as e}from"./index-e75b2618.js";import{s as L}from"./page8_01.module-ad5c13d7.js";import{C as O}from"./index-33d3269c.js";import{R as G,C as n}from"./row-361ca9f1.js";const R="/Zico-C/assets/2682849_cloud_cloudy_day_forecast_sun_icon-821b66d9.svg",Z="/Zico-C/assets/2682848_day_forecast_sun_sunny_weather_icon-44a080e3.svg",z="/Zico-C/assets/2682812_cloud_coudy_day_fog_mist_icon-7109571b.svg",P="/Zico-C/assets/2682834_cloud_day_forecast_rain_rainy_icon-63599612.svg",k="/Zico-C/assets/2682811_cloud_cloudy_fog_mist_moon_icon-88a75c23.svg",H="/Zico-C/assets/2682843_cloud_forecast_moon_night_rain_icon-5f3876f4.svg",B="/Zico-C/assets/2682847_eclipse_forecast_moon_night_space_icon-79b8da2b.svg",J="/Zico-C/assets/2682846_cloud_cloudy_forecast_moon_night_icon-f62791ad.svg";function M(){const[o,w]=a.useState([]),[l,c]=a.useState(""),[h,b]=a.useState([]),[A,x]=a.useState([]),[N]=I(""),i=N.get("selectLocation")||"";if(console.log(h),console.log("postTest",o.map(s=>{var t;return(t=s==null?void 0:s.GeoInfo)==null?void 0:t.TownName})),a.useEffect(()=>{const s="https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWA-EB3FD491-9755-4E3C-A31D-70C0FCCFD682&format=JSON";F.get(s).then(function(t){const r=t.data.records.Station;w(r)}).catch(function(t){console.log(t)})},[]),a.useEffect(()=>{i&&(c(i),console.log("searchLocation",l),console.log("selectLocation",i))},[i]),a.useEffect(()=>{const s=o.filter(r=>r.GeoInfo.TownName.toLowerCase()===l);b(s);const t=o.filter(r=>r.GeoInfo.TownName.toLowerCase().includes(l.toLowerCase())).map(r=>r.GeoInfo.TownName);x(t),l===""&&x([])},[l,o]),!o)return"No Post !!!";console.log("post",o),console.log("filteredData");const v=s=>{c(s.target.value)};return e.jsxs("div",{className:L.main,children:[e.jsx("h1",{children:"天氣預報API"}),e.jsx("a",{href:"https://opendata.cwa.gov.tw/opendatadoc/Observation/O-A0003-001.pdf",style:{fontSize:"1.2rem"},target:"_New",children:"中央氣象署開放資料平臺資料標準說明文件 ｜ 發布時間：2023-11-15 ｜ 版次 1.0"}),e.jsx("hr",{}),e.jsx("input",{value:l,type:"text",placeholder:"查詢地區",onChange:v}),h.length>0?null:e.jsx(e.Fragment,{children:e.jsx("ul",{children:A.map((s,t)=>e.jsx("li",{onClick:()=>c(s),style:{cursor:"pointer",color:"#001529",borderRadius:"20px",width:"100%",marginTop:"10px",padding:"10px",textAlign:"left"},children:s},t))})}),e.jsx("ul",{children:h.map((s,t)=>{var r,d,m,g,p,u,f,j,y,_,T,W,E,C,S,D;return e.jsxs("li",{children:[e.jsxs("p",{children:["縣市：",s.GeoInfo.CountyName]}),e.jsxs("p",{children:["地區：",s.GeoInfo.TownName]}),e.jsxs("p",{children:["測站位置：",s.StationName]}),s.WeatherElement.AirTemperature!=-99?e.jsx(e.Fragment,{children:e.jsxs("p",{children:["當前溫度：",s.WeatherElement.AirTemperature]})}):e.jsx(e.Fragment,{children:e.jsx("p",{style:{color:"red"},children:"溫度缺值 或 資料異常"})}),e.jsxs("p",{children:["更新時間：",s.ObsTime.DateTime.toString().replace("T"," ").substring(0,19)]}),s.WeatherElement.AirTemperature!=-99?e.jsx(e.Fragment,{children:e.jsxs("p",{children:["天氣：",s.WeatherElement.Weather]})}):null,s.WeatherElement.AirTemperature!=-99?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["今日最高溫：",(g=(m=(d=(r=s.WeatherElement)==null?void 0:r.DailyExtreme)==null?void 0:d.DailyHigh)==null?void 0:m.TemperatureInfo)==null?void 0:g.AirTemperature]}),e.jsxs("p",{children:["今日最低溫：",(j=(f=(u=(p=s.WeatherElement)==null?void 0:p.DailyExtreme)==null?void 0:u.DailyLow)==null?void 0:f.TemperatureInfo)==null?void 0:j.AirTemperature]})]}):null,e.jsx(O,{style:{width:"525px",borderRadius:"2rem"},children:e.jsxs(G,{children:[e.jsx(n,{xs:24,sm:24,md:24,lg:24,xl:24,xxl:24,children:e.jsx("h1",{style:{fontSize:"2rem",fontWeight:"bold",color:"darkcyan"},children:s.GeoInfo.CountyName})}),e.jsx(n,{xs:24,sm:24,md:24,lg:24,xl:24,xxl:24,children:e.jsx("h2",{style:{fontSize:"1.5rem",margin:"5px 0 0 0"},children:s.GeoInfo.TownName})}),s.WeatherElement.AirTemperature!=-99?e.jsxs(e.Fragment,{children:[e.jsx(n,{xs:12,sm:12,md:12,lg:12,xl:12,xxl:12,children:e.jsxs("p",{style:{fontSize:"3.5rem",fontWeight:"500",color:"darkblue",margin:"20px 0"},children:[s.WeatherElement.AirTemperature,"°C"]})}),e.jsx(n,{xs:12,sm:12,md:12,lg:12,xl:12,xxl:12,children:s.ObsTime.DateTime.toString().replace("T"," ").substring(11,13)<="18"&&s.ObsTime.DateTime.toString().replace("T"," ").substring(11,13)>="06"?s.WeatherElement.Weather.includes("雨")?e.jsx("img",{src:P,alt:"",style:{height:"140px"}}):s.WeatherElement.Weather.slice(0,2)==="多雲"?e.jsx("img",{src:z,alt:"",style:{height:"140px"}}):s.WeatherElement.Weather.slice(0,1)==="晴"?e.jsx("img",{src:Z,alt:"",style:{height:"140px"}}):s.WeatherElement.Weather.slice(0,1)==="陰"?e.jsx("img",{src:R,alt:"",style:{height:"140px"}}):null:s.WeatherElement.Weather.includes("雨")?e.jsx("img",{src:H,alt:"",style:{height:"140px"}}):s.WeatherElement.Weather.slice(0,2)==="多雲"?e.jsx("img",{src:k,alt:"",style:{height:"140px"}}):s.WeatherElement.Weather.slice(0,1)==="晴"?e.jsx("img",{src:B,alt:"",style:{height:"140px"}}):s.WeatherElement.Weather.slice(0,1)==="陰"?e.jsx("img",{src:J,alt:"",style:{height:"140px"}}):null})]}):e.jsx(e.Fragment,{children:e.jsx("p",{style:{color:"red"},children:"溫度缺值 或 資料異常"})}),s.WeatherElement.AirTemperature!=-99?e.jsxs(e.Fragment,{children:[e.jsx(n,{xs:24,sm:24,md:24,lg:24,xl:24,xxl:24,children:e.jsxs("p",{style:{margin:"5px 0 15px 0"},children:["今日最高溫 ：",(W=(T=(_=(y=s.WeatherElement)==null?void 0:y.DailyExtreme)==null?void 0:_.DailyHigh)==null?void 0:T.TemperatureInfo)==null?void 0:W.AirTemperature]})}),e.jsx(n,{xs:24,sm:24,md:24,lg:24,xl:24,xxl:24,children:e.jsxs("p",{style:{margin:"0 0 15px 0 "},children:["今日最高溫 ：",(D=(S=(C=(E=s.WeatherElement)==null?void 0:E.DailyExtreme)==null?void 0:C.DailyLow)==null?void 0:S.TemperatureInfo)==null?void 0:D.AirTemperature]})})]}):null,e.jsx(n,{xs:12,sm:12,md:12,lg:12,xl:12,xxl:12,children:e.jsxs("p",{style:{fontSize:"18px",margin:"15px 0 0 0"},children:["測站位置 ：",s.StationName]})}),e.jsx(n,{xs:12,sm:12,md:12,lg:12,xl:12,xxl:12,children:e.jsxs("p",{style:{display:"flex",flexDirection:"row-reverse",color:"gray",fontWeight:"500",fontSize:"18px",margin:"15px 0 0 0"},children:["最後觀測時間 ：",s.ObsTime.DateTime.toString().replace("T"," ").substring(11,19)]})})]})}),e.jsx("hr",{})]},t)})})]})}export{M as default};