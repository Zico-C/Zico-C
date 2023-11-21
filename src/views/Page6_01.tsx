import { Map, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "react-leaflet-markercluster/dist/styles.min.css";
import { useEffect, useState } from "react";
import { Button, Card, Checkbox, Grid, Typography } from "antd";
import Control from "react-leaflet-control";
import { ControlOutlined } from "@ant-design/icons";
import { divIcon, Point } from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { TiLocation } from "react-icons/ti";
import { MdDining } from "react-icons/md";
import { IoMdTrain } from "react-icons/io";
import Meta from "antd/es/card/Meta";
import { useAppDispatch } from "@/store/hook";
import {
  setFilterName,
  setMarkersS,
} from "@/redux_redux_toolkit/store/travelMapSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import { setTimeZone } from "@/redux_redux_toolkit/store/globalSlice";
// 在 React 組件中引入 CSS 檔案

/*  MapContainer：這是地圖的容器，用來顯示地圖。
    TileLayer：這是地圖的圖層，用來指定地圖的圖片資源。
    Marker：這是地圖上的標記點，可以用來標示位置。
    Popup：這是標記點的彈出窗口，顯示有關該標記點的信息。
*/

interface MapData {
  id: number;
  name: string;
  type: string;
}

// 定義 Marker 介面
export interface Markers {
  id: number;
  position: [number, number];
  name: string;
  type: string;
  officialWeb?: string;
  googleMap?: string;
  icon?: string;
}

const { useBreakpoint } = Grid;
const { Text } = Typography;

function MapView() {
  const screens = useBreakpoint();
  const disp = useAppDispatch();
  const navigateTo = useNavigate();
  const [disableClusteringAtZoom] = useState(15);
  // 控制是否顯示設備位置 "show Location" 是否顯示
  const [showLocation, setShowLocation] = useState(false);
  // 控制是否顯示設備位置 "show Type" 是否顯示
  const [showType, setShowType] = useState(false);
  const [isHover, setIsHover] = useState(false);
  // 保存 地圖 viewport 位置
  const [viewport, setViewPort] = useState({
    center: [24.80063398900308, 120.97787231991643],
    zoom: 12,
  });
  // 保存 axios 請求回來的 map_markers (地圖標記)API
  const [markers, setMarkers] = useState<Markers[]>([]);
  useEffect(() => {
    const localViewport = localStorage.getItem("viewport");
    if (!localViewport) {
      return;
    }
    setViewPort(JSON.parse(localViewport));
  }, []);
  // 請求地圖上的標記
  const fetchData = async () => {
    try {
      axios.defaults.baseURL = "https://zico-c.github.io/mapMarkers_api";
      const response = await axios.get("/mapMarkers.json");
      return response.data;
    } catch (error) {
      console.error("Error fetching data：", error);
    }
  };
  // 將發起的請求 fetchData 由 useQuery 自動發起請求並保存資料
  const { data, status } = useQuery(["map_Markers"], fetchData, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    cacheTime: Infinity,
    // staleTime: 300000, // 5分鐘
  });
  useEffect(() => {
    if (status === "success") {
      setMarkers(data?.markers);
      disp(setMarkersS(data?.markers));
      // JSON.stringify() ：物件變 JSON  | JSON.parse()：JSON 變物件
      localStorage.setItem("markers", JSON.stringify(data?.markers));
      disp(setTimeZone("123"));
    }
  }, [data]);
  console.log("data", data);
  console.log("markers", markers);

  const customMarkerIcon = (location: string, index: number, type: string) =>
    divIcon({
      className: "",
      html: renderToStaticMarkup(
        /* 1、在 <p> 標籤 加入 style={{whiteSpace: "nowrap", display: "inline"}：使樣式空白不換行，解決location、type 字體垂直顯示問題，
              確保文字內容不換行，並將元素以行內方式顯示在同一行上。
           2、使用 <div> 將 <p> 標籤的文字包覆並給予背景色，需使用 style={{display: "inline-block"} 才能使 <p>標籤內文字撐開 <div>
        */
        <div key={index}>
          {type === "景點" && (
            <TiLocation
              style={{
                color: "#006400",
                fontSize: "2rem",
                marginLeft: "-11px",
                marginTop: "-20px",
              }}
            />
          )}
          {type === "大眾交通工具" && (
            <IoMdTrain
              style={{
                color: "#008FC7",
                fontSize: "2rem",
                marginLeft: "-11px",
                marginTop: "-20px",
              }}
            />
          )}
          {type === "美食" && (
            <MdDining
              style={{
                color: "#dc3545",
                fontSize: "2rem",
                marginLeft: "-11px",
                marginTop: "-20px",
              }}
            />
          )}
          <div
            style={
              showLocation || showType
                ? {
                    backgroundColor: "#fff",
                    opacity: "0.85",
                    border: "1px solid #002fa7",
                    borderRadius: "10px",
                    padding: "5px",
                    display: "inline-block", // 將 div 設定為行內區塊，就可以使p段落文字撐開div
                  }
                : { display: "none" }
            }
          >
            <p
              style={
                showLocation
                  ? {
                      fontWeight: "bold",
                      marginBottom: "3px",
                      whiteSpace: "nowrap",
                    }
                  : { display: "none" }
              }
            >
              {location}
              <br />
            </p>
            <p
              style={
                showType
                  ? {
                      fontWeight: "bold",
                      whiteSpace: "nowrap",
                    }
                  : { display: "none" }
              }
            >
              {type}
            </p>
          </div>
        </div>
      ),
    });
  // 將地圖變化事件，狀態保存在本地儲存
  const onViewportChanged = (viewport: any) => {
    localStorage.setItem("viewport", JSON.stringify(viewport));
  };
  // 點擊 Card "view page" 點擊事件
  const onPopClick = (makresName: MapData) => {
    console.log("type", makresName);
    disp(setFilterName({ name: [makresName.name], type: [makresName.type] }));
    navigateTo("/page6/page6_02");
  };

  return (
    <>
      <Card
        style={{
          border: "1px solid gray",
          margin: "0",
        }}
      >
        <div id="map" style={{ height: "100%", width: "auto" }}>
          <h1>Leaflet 地圖示例</h1>
          {/* 地圖容器 */}
          <Map
            // @ts-ignore
            viewport={viewport}
            onViewportChange={onViewportChanged}
            style={{ height: "700px" }}
          >
            {/* 地圖圖層 */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> 貢獻者'
              //地圖圖層的URL
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* 地圖控制show Marker data 儀表盤 */}
            <Control position="topright">
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "0.4rem",
                  fontSize: "20px",
                  border: "solid 1px black",
                }}
                onClick={() => {
                  setIsHover((prev) => !prev);
                }}
                onMouseEnter={() => {
                  setIsHover(true);
                }}
                onMouseLeave={() => {
                  setIsHover(false);
                }}
              >
                {isHover ? (
                  <div
                    style={{
                      width: "150px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Checkbox
                      checked={showLocation}
                      onChange={() => setShowLocation(!showLocation)}
                    >
                      show Location
                    </Checkbox>
                    <Checkbox
                      checked={showType}
                      onChange={() => setShowType(!showType)}
                    >
                      show Type
                    </Checkbox>
                  </div>
                ) : (
                  <ControlOutlined />
                )}
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
              {markers.map((marker, index) => (
                <Marker
                  key={marker.id}
                  position={marker.position as [number, number]}
                  icon={customMarkerIcon(marker.name, index, marker.type)}
                  style={{ color: "red", backgoundcolor: "blue" }}
                >
                  {/* 座標提示：當滑鼠移至座標時自動顯示他的資訊 */}
                  <Tooltip direction="bottom" offset={[-1, 10]}>
                    {marker.name}
                  </Tooltip>
                  <Popup offset={[0, -11]}>
                    <Card
                      hoverable
                      cover={
                        marker.icon ? (
                          <img alt={marker.name} src={marker.icon} />
                        ) : null
                      }
                      bordered={true}
                      style={{
                        width: 234,
                        margin: "0",
                        padding: "0",
                        cursor: "auto",
                      }}
                    >
                      <Meta title={marker.name} description={marker.type} />
                      <hr color="gray" />
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
                      <Button
                        type="link"
                        style={{ padding: 0 }}
                        onClick={() => onPopClick(marker)}
                      >
                        view page
                      </Button>
                    </Card>
                  </Popup>
                </Marker>
              ))}
            </MarkerClusterGroup>
          </Map>
        </div>
        <div className={screens.xs ? "" : "styles.markerWrapper"}>
          {!screens.xs && (
            <>
              <TiLocation style={{ color: "#006400", fontSize: "1.3rem" }} />
              <Text>景點</Text>
              <IoMdTrain style={{ color: "#008FC7", fontSize: "1.3rem" }} />
              <Text>大眾交通工具</Text>
              <MdDining style={{ color: "#dc3545", fontSize: "1.3rem" }} />
              <Text>美食</Text>
            </>
          )}
        </div>
      </Card>
    </>
  );
}

export default MapView;
