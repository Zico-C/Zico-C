import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup  from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';
import { useEffect, useState } from "react";
import { Card, Checkbox } from 'antd';
import Control from "react-leaflet-control";
import { ControlOutlined } from "@ant-design/icons";
import { divIcon } from 'leaflet';
import { renderToStaticMarkup } from "react-dom/server";
import { TiLocation } from "react-icons/ti";
// 在 React 組件中引入 CSS 檔案


/*  MapContainer：這是地圖的容器，用來顯示地圖。
    TileLayer：這是地圖的圖層，用來指定地圖的圖片資源。
    Marker：這是地圖上的標記點，可以用來標示位置。
    Popup：這是標記點的彈出窗口，顯示有關該標記點的信息。
*/
function MapView() {
  const [disableClusteringAtZoom]= useState(15);
  // 控制是否顯示設備位置 "show Location" 是否顯示
  const [showLocation, setShowLocation] = useState(false);
  // 控制是否顯示設備位置 "show Type" 是否顯示
  const [showType, setShowType] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [viewport, setViewPort] = useState({
    center: [24.80063398900308, 120.97787231991643],
    zoom: 12,
  });
  useEffect(()=>{
    const localViewport = localStorage.getItem("viewport");
    if(!localViewport){
      return
    }
    setViewPort(JSON.parse(localViewport))
  },[])
  // 設定地圖上的標記聚類行為
  const markers = [
    { id: 1 , 
      position : [24.80063398900308, 120.97787231991643],
      name : "新竹公園",
      type :"景點",
      officialWeb:"https://hsinchupark.hccg.gov.tw/#/home",
      googleMap:"https://maps.app.goo.gl/SxA1LHhCgrmuSoE88"
    },
    { id: 2 , 
      position : [24.80016211057047, 120.97992782840024],
      name : "新竹動物園",
      type :"景點",
      googleMap:"https://maps.app.goo.gl/8Nc9JnUiJtf69ovC7"
    },
    {
      id: 3 , 
      position : [24.801613979783625, 120.97158683304652],
      name : "新竹火車站",
      type :"大眾交通工具",
      officialWeb:"https://www.railway.gov.tw/tra-tip-web/tip"
    },
    {
      id: 4 , 
      position : [24.804515249498532, 120.96593682133481],
      name : "新竹城隍廟",
      type :"美食",
      googleMap:"https://maps.app.goo.gl/zirQEaWhozH58C9Q9"
    },
    {
      id: 5 , 
      position : [24.809903505194157, 120.97507425837118],
      name : "Big City遠東巨城購物中心",
      type :"美食",
      officialWeb:"https://www.febigcity.com/bigcity",
      googleMap:"https://maps.app.goo.gl/FBQxYSpNicraEdVt5"
    }
  ]
  const customMarkerIcon = (location:string,index:number,type:string) =>
    divIcon({
      className:"",
      html:renderToStaticMarkup( 
          // style={{whiteSpace:"nowrap"}：使樣式空白不換行，解決location、type 字體垂直顯示問題
          <div key={index} style={{whiteSpace:"nowrap"}}>
            <TiLocation style={type === "美食"? 
            {color:"#006400",fontSize:"2rem",marginLeft:"-11px",marginTop:"-20px"} : 
            {color:"#dc3545",fontSize:"2rem",marginLeft:"-11px",marginTop:"-20px"}} />
            <p style={showLocation ? {fontWeight:"bold",marginBottom:"3px"}:{display:"none"}}>{location}</p>
            <p style={showType ? {fontWeight:"bold"}:{display:"none"}}>{type}</p>
          </div>
      )
    });
    // 將地圖變化事件，狀態保存在本地儲存
    const onViewportChanged = (viewport: any) => {
      localStorage.setItem("viewport", JSON.stringify(viewport));
    };
  
  return (
    <div id="map" style={{ height: '100%', width: 'auto' }}>
      <h1>Leaflet 地圖示例</h1>
      {/* 地圖容器 */}
      <Map 
        // @ts-ignore
        viewport={viewport} 
        onViewportChange={onViewportChanged}
        style={{ height: '700px' }}>
        {/* 地圖圖層 */}
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> 貢獻者'
            //地圖圖層的URL
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* 地圖控制show Marker data 儀表盤 */}
        <Control position="topright">
          <div style={{backgroundColor:"#fff",padding:"0.4rem",fontSize:"20px",border:"solid 1px black"}}
               onClick={()=>{setIsHover((prev)=>!prev)}}
               onMouseEnter={()=>{setIsHover(true)}}
               onMouseLeave={()=>{setIsHover(false)}}
          >
            {isHover ? (
              <div style={{width:"150px",display:"flex",flexDirection:"column"}}>
                  <Checkbox checked={showLocation} onChange={() => setShowLocation(!showLocation)}>
                    show Location
                  </Checkbox>
                  <Checkbox checked={showType} onChange={() => setShowType(!showType)}>
                    show Type
                  </Checkbox>
              </div>
            ): <ControlOutlined />}
          </div>
        </Control>
        {/* 地圖標記 */}
        <MarkerClusterGroup
        // 控制地圖縮放級別，當地圖縮放到這個級別時，標記不再聚合。
        disableClusteringAtZoom={disableClusteringAtZoom} 
        // removeOutsideVisibleBounds ：當設為 true 時，地圖上不在可見範圍內的標記將被自動移除。
        // 對於大量標記的地圖，可以使用這個屬性來優化性能，只顯示可見範圍內的標記。  *預設值為 false *
        removeOutsideVisibleBounds={true}
        >
          {markers.map((marker,index) => (
            <Marker 
              key={marker.id} 
              position={marker.position as [number, number]}
              icon={customMarkerIcon(marker.name,index,marker.type)}
              style={{color:"red",backgoundcolor:"blue"}}
            >
              <Popup>
                <Card bordered={false} style={{ width: "auto", margin: "0", padding: "0" }}>
                  <h1>{marker.name}</h1>
                  <p style={{margin:"0"}}>【{marker.type}】</p>
                  <hr color='gray' />
                  {marker.officialWeb && (
                    <>
                      <a href={marker.officialWeb} target="_new">
                        官方網站
                      </a>
                      <br />
                    </>
                  )}
                  {marker.googleMap && (
                    <>
                      <a href={marker.googleMap} target="_blank">
                        Google 地圖
                      </a>
                      <br />
                    </>
                  )}
                </Card>
              </Popup>
            </Marker>
          ))}
          </MarkerClusterGroup>
      </Map>
    </div>
  );
}


export default MapView;