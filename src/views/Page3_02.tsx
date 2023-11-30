import { Card, Row, Col, Spin, Typography, Grid, Button } from "antd";
import { useState, useEffect } from "react";
// import Screens from "./Page3_03";
import axios from "axios";
import { useQuery } from "react-query";
import { Map, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import { divIcon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import Meta from "antd/es/card/Meta";
import { renderToStaticMarkup } from "react-dom/server";
import { MdDirectionsBike } from "react-icons/md";
import { BiSolidMessageAltError } from "react-icons/bi";
import { MdOutlineEmojiPeople } from "react-icons/md";
import ReactECharts from "echarts-for-react";

const { useBreakpoint } = Grid;

const { Text } = Typography;

export interface YouBike {
  sno: string;
  sna: string;
  tot: number;
  sbi: number;
  sarea: Sarea;
  mday: string;
  lat: number;
  lng: number;
  ar: string;
  sareaen: Sareaen;
  snaen: string;
  aren: string;
  bemp: number;
  act: string;
  srcUpdateTime: string;
  updateTime: string;
  infoTime: string;
  infoDate: string;
}

export enum Sarea {
  中山區 = "中山區",
  中正區 = "中正區",
  信義區 = "信義區",
  內湖區 = "內湖區",
  北投區 = "北投區",
  南港區 = "南港區",
  士林區 = "士林區",
  大同區 = "大同區",
  大安區 = "大安區",
  文山區 = "文山區",
  松山區 = "松山區",
  臺大公館校區 = "臺大公館校區",
  萬華區 = "萬華區",
}

export enum Sareaen {
  BeitouDist = "Beitou Dist",
  DaanDist = "Daan Dist.",
  DatongDist = "Datong Dist",
  NTUDist = "NTU Dist",
  NangangDist = "Nangang Dist",
  NeihuDist = "Neihu Dist",
  ShilinDist = "Shilin Dist",
  SongshanDist = "Songshan Dist",
  WanhuaDist = "Wanhua Dist",
  WenshanDist = "Wenshan Dist",
  XinyiDist = "Xinyi Dist",
  ZhongshanDist = "Zhongshan Dist",
  ZhongzhengDist = "Zhongzheng Dist",
}

const Charts = ({
  title,
  children,
  bodyStyle,
}: {
  title: string;
  children: React.ReactNode;
  bodyStyle?: React.ComponentProps<typeof Card>;
}) => {
  return (
    <>
      <Card
        title={title}
        // 標題樣式
        headStyle={{
          backgroundColor: "#002FA7",
          color: "white",
          textAlign: "center",
          borderRadius: 0,
        }}
        bodyStyle={{
          padding: 3,
          height: "299px",
          userSelect: "text",
          ...bodyStyle,
        }}
      >
        {children}
        {/*加入{children} 能接受任何 React 元素，包括文字、組件、陣列等，這些內容都會透過 {children} 存取與渲染 
      例如 <DashCard title="My Card">This is some text content.</DashCard>，若沒有 {children} 則不會渲染內部文字或組件*/}
      </Card>
    </>
  );
};

function Page3_02() {
  const [viewport, setViewPort] = useState({
    center: [25.035751357120876, 121.52047467202769],
    zoom: 12,
  });
  const [marker, setMarkers] = useState<YouBike[]>();
  // 取得所有場站總停車格的數量
  const [youbikeTotNum, setYoubikeTotNum] = useState<number | undefined>(0);
  // 取得所有場站可還空位數
  const [youbikeBempNum, setYoubikeBempNum] = useState<number | undefined>(0);
  // 取得所有場站可借車位數
  const [youbikeSbiNum, setYoubikeSbiNum] = useState<number | undefined>(0);
  // 取得第一筆的更新時間
  const [youbikeUpdateTime, setYoubikeUpdateTime] = useState<[string, string]>([
    "",
    "",
  ]);
  const [getLatitude, setGetLatitude] = useState(0); // 存儲緯度的狀態
  const [getLongitude, setGetLongitude] = useState(0); // 存儲經度的狀態
  const [showUserMarker, setShowUserMarker] = useState(false); // 顯示使用者座標
  const screens = useBreakpoint();

  useEffect(() => {
    const localViewport = localStorage.getItem("page3_02-viewport");
    if (!localViewport) {
      return;
    }
    setViewPort(JSON.parse(localViewport));
  }, []);

  const fetchYouBikeAPI = async () => {
    try {
      const response = await axios.get(
        "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"
      );
      return response.data;
    } catch (error) {
      console.log((error as Error).message);
    }
  };
  console.log("render....");
  const { data, status, isLoading, isFetching } = useQuery(
    ["TaipeiYouBike"],
    fetchYouBikeAPI,
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      cacheTime: 60000,
      staleTime: Infinity, // 設置 staleTime 為 Infinity，表示即使過期，仍然使用舊資料直到新資料到來
      refetchInterval: 60000, // 設置 refetchInterval 為 60000 毫秒 (1 分鐘)，自動觸發一次重新查詢。
    }
  );

  useEffect(() => {
    if (status === "success") {
      console.log("data", data);
      setMarkers(data);
    }
  }, [data]);

  // 將地圖變化事件，狀態保存在本地儲存
  const onViewportChanged = (viewport: any) => {
    localStorage.setItem("page3_02-viewport", JSON.stringify(viewport));
  };
  useEffect(() => {
    localStorage.setItem("page3_02-viewport", JSON.stringify(viewport));
  }, [showUserMarker]);

  const userMarkerIcon = () => {
    return divIcon({
      className: "",
      html: renderToStaticMarkup(
        <>
          <MdOutlineEmojiPeople
            style={{
              color: "#263ea0",
              fontSize: "1.8rem",
              marginLeft: "-11px",
              marginTop: "-20px",
            }}
          />
        </>
      ),
    });
  };
  const customMarkerIcon = (
    index: number,
    tot: number,
    sbi: number,
    act: string
  ) =>
    divIcon({
      className: "",
      html: renderToStaticMarkup(
        <div key={index}>
          {act === "1" && tot / sbi >= 3 ? (
            <MdDirectionsBike
              style={{
                color: "#cf1322",
                fontSize: "1.8rem",
                marginLeft: "-11px",
                marginTop: "-20px",
              }}
            />
          ) : act === "1" && tot / sbi >= 2 ? (
            <MdDirectionsBike
              style={{
                color: "#d48806",
                fontSize: "1.8rem",
                marginLeft: "-11px",
                marginTop: "-20px",
              }}
            />
          ) : act === "1" ? (
            <MdDirectionsBike
              style={{
                color: "#006400",
                fontSize: "1.8rem",
                marginLeft: "-11px",
                marginTop: "-20px",
              }}
            />
          ) : (
            act === "0" && (
              <BiSolidMessageAltError
                style={{
                  color: "#dc3545",
                  fontSize: "1.8rem",
                  marginLeft: "-11px",
                  marginTop: "-20px",
                }}
              />
            )
          )}
        </div>
      ),
    });

  const charts = ({ tot, bemp, sbi, updateTime }: any) => {
    const utilizationRate = ((bemp / tot) * 100).toFixed(2);
    const option = {
      tooltip: {
        trigger: "item",
        formatter: "{b}: {c} ({d}%)", // 顯示百分比
      },
      graphic: [
        {
          type: "text",
          left: "center",
          top: "35%",
          style: {
            text: "目前使用量",
            textAlign: "center",
            fill: "#555", // 文字顏色
            fontSize: 16, // 文字大小
            fontWeight: "bold",
          },
        },

        {
          type: "text",
          left: "center",
          top: "45%", // 調整此值以垂直居中
          style: {
            text: `${utilizationRate} %`, // 這裡設置你的使用量百分比
            textAlign: "center",
            fill: "#555", // 文字顏色
            fontSize: 20, // 文字大小
            fontWeight: "bold",
          },
        },
        {
          type: "text",
          left: "center",
          top: "88%", // 調整此值以垂直居中
          style: {
            text: `上次更新時間 ${updateTime}`, // 這裡設置你的使用量百分比
            textAlign: "center",
            fill: "#555", // 文字顏色
            fontSize: 20, // 文字大小
            fontWeight: "bold",
          },
        },
      ],
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["45%", "66%"],
          center: ["50%", "45%"], // 調整整個圓餅圖的位置
          avoidLabelOverlap: false,
          label: screens.xs
            ? { show: false }
            : {
                show: true,
                position: "outside",
                formatter: "{b}\n{c}",
                fontSize: 14,
              },
          emphasis: {
            label: {
              show: screens.xs ? false : true,
              fontSize: 16,
              fontWeight: "bold",
            },
          },
          labelLine: screens.xs
            ? { show: false }
            : {
                show: true,
              },
          data: [
            { value: bemp, name: "可還空位數" },
            { value: sbi, name: "可借車位數" },
          ],
        },
      ],
    };
    return option;
  };
  // console.log(charts);

  useEffect(() => {
    const youbikeTotNumArray = marker?.map((youbike) => youbike.tot);
    const totNumber = youbikeTotNumArray?.reduce(
      (acc, cur) => acc + cur + 0
    ) as number;
    const youbikeBempNumArray = marker?.map((youbike) => youbike.bemp);
    const bempNumber = youbikeBempNumArray?.reduce(
      (acc, cur) => acc + cur + 0
    ) as number;
    const youbikeSbiNumArray = marker?.map((youbike) => youbike.sbi);
    const sbiNumber = youbikeSbiNumArray?.reduce(
      (acc, cur) => acc + cur + 0
    ) as number;
    const youbikeUpdateTime = marker?.[600]?.mday
      ?.toString()
      .slice(-8) as string;
    const youbikeUpdateDate = marker?.[600]?.mday
      ?.toString()
      .slice(0, 10) as string;
    // console.log(totNumber);
    setYoubikeTotNum(totNumber);
    setYoubikeBempNum(bempNumber);
    setYoubikeSbiNum(sbiNumber);
    setYoubikeUpdateTime([youbikeUpdateDate, youbikeUpdateTime]);
  }, [marker]);
  // console.log("youbikeTotNum", youbikeTotNum);

  const handleGetPosition = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        setGetLatitude(latitude);
        setGetLongitude(longitude);
        // console.log("latitude", latitude, "longitude", longitude);
        // console.log("viewport", viewport);
        setViewPort((prev) => ({
          ...prev,
          center: [latitude, longitude],
          zoom: screens.xs ? 16 : 18,
        }));
        setShowUserMarker(true);
      });
    } else {
      console.log("瀏覽器不支援地理位置服務"); // 如果瀏覽器不支援地理位置服務，則輸出錯誤日誌
    }
    // localStorage.setItem("page3_02-viewport", JSON.stringify(viewport));
  };
  // console.log("getLatitude", getLatitude, "getLongitude", getLongitude);

  return (
    <>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={6}>
          <Charts
            title="目前場站所有總停車格"
            bodyStyle={{
              // @ts-ignore
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {isLoading ||
            isFetching ||
            youbikeTotNum === 0 ||
            youbikeBempNum === undefined ? (
              <>
                <Spin />
              </>
            ) : (
              <h1
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "#002FA7",
                }}
              >
                {youbikeTotNum}
              </h1>
            )}
          </Charts>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={6}>
          <Charts
            title="目前所有可還空位數"
            bodyStyle={{
              // @ts-ignore
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {isLoading ||
            isFetching ||
            youbikeBempNum === 0 ||
            youbikeBempNum === undefined ? (
              <>
                <Spin />
              </>
            ) : (
              <h1
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "#002FA7",
                }}
              >
                {youbikeBempNum}
              </h1>
            )}
          </Charts>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={6}>
          <Charts
            title="目前所有可借車位數"
            bodyStyle={{
              // @ts-ignore
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {isLoading ||
            isFetching ||
            youbikeSbiNum === 0 ||
            youbikeBempNum === undefined ? (
              <>
                <Spin />
              </>
            ) : (
              <h1
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "#002FA7",
                }}
              >
                {youbikeSbiNum}
              </h1>
            )}
          </Charts>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={6}>
          <Charts
            title="當前使用量 ｜ 數據更新時間"
            bodyStyle={{
              // @ts-ignore
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {isLoading ||
            isFetching ||
            youbikeUpdateTime[1] === "" ||
            youbikeBempNum === undefined ? (
              <>
                <Spin />
              </>
            ) : (
              <ReactECharts
                option={charts({
                  tot: youbikeTotNum,
                  bemp: youbikeBempNum,
                  sbi: youbikeSbiNum,
                  updateTime: youbikeUpdateTime[1],
                })}
                style={{ height: "303px", width: "100%" }}
                notMerge={true}
                lazyUpdate={true}
              />
            )}
          </Charts>
        </Col>
      </Row>
      {/* <Screens /> */}
      <Card
        bodyStyle={{
          margin: 5,
          padding: 0,
          height: "100%",
        }}
      >
        <div style={{ margin: 0, padding: 0 }}>
          <Map
            // @ts-ignore
            viewport={viewport}
            onViewportChange={onViewportChanged}
            style={{ height: "calc(55vh - 65px)" }}
          >
            {/* 地圖圖層 */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> 貢獻者'
              //地圖圖層的URL
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <Control></Control> */}
            <MarkerClusterGroup
              // 控制地圖縮放級別，當地圖縮放到這個級別時，標記不再聚合。
              disableClusteringAtZoom={16}
              // removeOutsideVisibleBounds ：當設為 true 時，地圖上不在可見範圍內的標記將被自動移除。
              // 對於大量標記的地圖，可以使用這個屬性來優化性能，只顯示可見範圍內的標記。  *預設值為 false *
              removeOutsideVisibleBounds={true}
              spiderfyDistanceMultiplier={1}
              showCoverageOnHover={true}
              maxClusterRadius={35}
            >
              {marker?.map((marker, index) => (
                <Marker
                  key={`${marker.lat}-${marker.lng}-${index}`}
                  position={[marker.lat, marker.lng]}
                  icon={customMarkerIcon(
                    index,
                    marker.tot,
                    marker.sbi,
                    marker.act
                  )}
                >
                  <Tooltip direction="bottom" offset={[0, 7]}>
                    {marker.sna}
                  </Tooltip>
                  <Popup offset={[0, -13]}>
                    <Card
                      bodyStyle={
                        screens.xs
                          ? {
                              display: "inline-block",
                              padding: "5px 0 5px 0",
                            }
                          : { display: "inline-block", padding: 15 }
                      }
                    >
                      <Meta
                        title={
                          <div
                            style={
                              screens.xs
                                ? {
                                    fontSize: "1rem",
                                    padding: "0 15px 0 15px",
                                  }
                                : {
                                    fontSize: "1.2rem",
                                    maxWidth: "244px",
                                    whiteSpace: "pre-line",
                                  }
                            }
                          >
                            {screens.xs
                              ? marker.sna.replace(/\([^)]*\)/g, "")
                              : marker.sna}
                          </div>
                        }
                        description={marker.sarea}
                        style={
                          screens.xs
                            ? { fontSize: "0.9rem", textAlign: "center" }
                            : { textAlign: "center" }
                        }
                      />
                      <hr
                        style={{
                          color: "gray",
                          width: "90%",
                          marginTop: "10px",
                        }}
                      />
                      {isLoading || isFetching ? (
                        <>
                          <Spin
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              position: "relative",
                              height: "171.93800px",
                            }}
                          />
                        </>
                      ) : (
                        <>
                          {marker.tot && (
                            <>
                              {screens.xs ? (
                                <h6
                                  style={{
                                    fontSize: "1rem",
                                    textAlign: "left",
                                    margin: "10px 0 0 0",
                                    padding: "0 0 0 15px",
                                  }}
                                >
                                  場站總停車格：{marker.tot}
                                </h6>
                              ) : (
                                <p>場站總停車格：{marker.tot}</p>
                              )}
                            </>
                          )}
                          {marker.sbi >= 0 && (
                            <>
                              {screens.xs ? (
                                <h6
                                  style={{
                                    fontSize: "1rem",
                                    textAlign: "left",
                                    margin: "10px 0 0 0",
                                    padding: "0 0 0 15px",
                                  }}
                                >
                                  可借車位數：{marker.sbi}
                                </h6>
                              ) : (
                                <p>可借車位數：{marker.sbi}</p>
                              )}
                            </>
                          )}
                          {marker.bemp && (
                            <>
                              {screens.xs ? (
                                <h6
                                  style={{
                                    fontSize: "1rem",
                                    textAlign: "left",
                                    margin: "10px 0 0 0",
                                    padding: "0 0 0 15px",
                                  }}
                                >
                                  可還空位數：{marker.bemp}
                                </h6>
                              ) : (
                                <p>可還空位數：{marker.bemp}</p>
                              )}
                            </>
                          )}
                          {marker.mday && (
                            <>
                              {screens.xs ? (
                                <h6
                                  style={{
                                    fontSize: "1rem",
                                    textAlign: "left",
                                    margin: "10px 0 10px 0",
                                    padding: "0 0 0 15px",
                                  }}
                                >
                                  更新時間：{marker.mday.slice(11, 19)}
                                </h6>
                              ) : (
                                <p>上次更新時間：{marker.mday}</p>
                              )}
                            </>
                          )}
                          {marker.lat &&
                            marker.lng &&
                            (screens.xs ? (
                              <>
                                <a
                                  href={`https://www.google.com/maps/dir/?api=1&destination=${marker.lat},${marker.lng}`}
                                  target="_New"
                                  style={{
                                    fontSize: "1rem",
                                    textAlign: "left",
                                    padding: "0 0 0 15px",
                                    margin: "0 0 10px 0 ",
                                  }}
                                >
                                  打開 Google 地圖導航
                                </a>
                              </>
                            ) : (
                              <>
                                <a
                                  href={`https://www.google.com/maps/dir/?api=1&destination=${marker.lat},${marker.lng}`}
                                  target="_New"
                                >
                                  打開 Google 地圖導航
                                </a>
                              </>
                            ))}
                          {marker.act === "0" && (
                            <>
                              <p
                                style={
                                  screens.xs
                                    ? {
                                        color: "red",
                                        textAlign: "center",
                                        fontSize: "1.2rem",
                                        fontWeight: "bold",
                                      }
                                    : {
                                        color: "red",
                                        textAlign: "center",
                                        fontSize: "1.2rem",
                                        margin: "10px 0 0 0 ",

                                        fontWeight: "bold",
                                      }
                                }
                              >
                                此站目前為禁用狀態
                              </p>
                            </>
                          )}
                        </>
                      )}
                    </Card>
                  </Popup>
                </Marker>
              ))}
              {showUserMarker && (
                <Marker
                  position={[getLatitude, getLongitude]}
                  icon={userMarkerIcon()}
                >
                  {/* 用於用戶位置的自定義標記圖標 */}
                  <Tooltip direction="bottom" offset={[-3, 8]} permanent={true}>
                    我的位置
                  </Tooltip>
                  <Popup offset={[-3, -13]} closeButton={false}>
                    <Button onClick={() => setShowUserMarker(false)}>
                      close Marker
                    </Button>
                  </Popup>
                </Marker>
              )}
            </MarkerClusterGroup>
          </Map>
        </div>
        <div
          style={{
            marginTop: "5px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            flexDirection: screens.xs ? "column" : "row",
          }}
        >
          <div>
            <Text style={{ verticalAlign: "4px" }}>
              臺北市 YouBike2.0 即時資訊：{" "}
            </Text>
            <MdDirectionsBike
              style={{ color: "#006400", fontSize: "1.3rem" }}
            />
            <Text style={{ verticalAlign: "4px" }}> 充足 </Text>
            <MdDirectionsBike
              style={{ color: "#d48806", fontSize: "1.3rem" }}
            />
            <Text style={{ verticalAlign: "4px" }}> 適中 </Text>
            <MdDirectionsBike
              style={{ color: "#cf1322", fontSize: "1.3rem" }}
            />
            <Text style={{ verticalAlign: "4px" }}> 有限 </Text>
          </div>
          <div>
            <Button
              style={{
                verticalAlign: "4px",
                padding: "0 5px 0 5px",
              }}
              onClick={handleGetPosition}
            >
              尋找我的座標
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
}

export default Page3_02;
