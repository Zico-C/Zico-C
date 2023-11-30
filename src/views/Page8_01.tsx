import { useState, useEffect } from "react";
import styles from "./page8_01.module.scss";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { weatherElement } from "./Page8_08";
import { Card, Row, Col, Grid } from "antd";
import CloudyDay from "../../public/images/2682849_cloud_cloudy_day_forecast_sun_icon.svg";
import SunnyDay from "../../public/images/2682848_day_forecast_sun_sunny_weather_icon.svg";
import CloudyfogDay from "../../public/images/2682812_cloud_coudy_day_fog_mist_icon.svg";
import Rainy from "../../public/images/2682834_cloud_day_forecast_rain_rainy_icon.svg";
import CloudyfogNight from "../../public/images/2682811_cloud_cloudy_fog_mist_moon_icon.svg";
import RainyNight from "../../public/images/2682843_cloud_forecast_moon_night_rain_icon.svg";
import moonNight from "../../public/images/2682847_eclipse_forecast_moon_night_space_icon.svg";
import CloudyNight from "../../public/images/2682846_cloud_cloudy_forecast_moon_night_icon.svg";

const { useBreakpoint } = Grid;
function Page8_01() {
  // 使用useState來宣告多個狀態變數
  const [post, setPost] = useState<weatherElement[]>([]); // 存儲從API獲取的氣象數據
  const [searchLocation, setSearchLocation] = useState(""); // 用戶輸入的地區名稱
  const [filteredData, setFilteredData] = useState<weatherElement[]>([]); // 用於存儲匹配的數據
  const [suggestions, setSuggestions] = useState<string[]>([]); // 存儲匹配的地區名稱建議
  const [SearchParams] = useSearchParams("");
  const screens = useBreakpoint();

  const selectLocationX = SearchParams.get("selectLocation") || "";
  console.log(filteredData);
  console.log(
    "postTest",
    post.map((xxx) => {
      // 使用花括號 {} 包裹，並使用 return 返回值
      return xxx?.GeoInfo?.TownName;
    })
  );
  // useEffect用於在組件加載時發起API請求以獲取氣象數據
  useEffect(() => {
    const targetURL =
      "https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWA-EB3FD491-9755-4E3C-A31D-70C0FCCFD682&format=JSON";

    axios
      .get(targetURL)
      .then(function (response) {
        const data = response.data.records.Station;
        setPost(data); // 將獲得的數據設定到post狀態變數中
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (selectLocationX) {
      setSearchLocation(selectLocationX);
      console.log("searchLocation", searchLocation);
      console.log("selectLocation", selectLocationX);
    }
    // 當 selectLocationX 發生變化時，賦值給 setSearchLocation
  }, [selectLocationX]);

  // useEffect用於監聽searchLocation和post的變化，並在它們改變時過濾和更新數據
  useEffect(() => {
    // 使用過濾邏輯來找到匹配的數據
    const filtered: any = post.filter(
      (item: any) => item.GeoInfo.TownName.toLowerCase() === searchLocation
    );
    setFilteredData(filtered); // 更新filteredData狀態變數

    // 過濾匹配的地區名稱並存儲在suggestions中
    const matchingSuggestions = post
      .filter((item: any) =>
        item.GeoInfo.TownName.toLowerCase().includes(
          searchLocation.toLowerCase()
        )
      )
      .map((item: any) => item.GeoInfo.TownName);
    setSuggestions(matchingSuggestions); // 更新suggestions狀態變數

    if (searchLocation === "") {
      setSuggestions([]); // 如果searchLocation為空，清空建議列表
    }
  }, [searchLocation, post]);

  if (!post) return "No Post !!!";

  console.log("post", post);
  console.log("filteredData");

  // 處理用戶輸入的函數，當輸入框的值變化時觸發
  const inputChange = (value: any) => {
    setSearchLocation(value.target.value);
  };

  return (
    <div className={styles.main}>
      <h1
        style={
          screens.xs
            ? { fontSize: "1.5rem", fontWeight: "500" }
            : { fontSize: "1.8rem" }
        }
      >
        天氣預報API
      </h1>
      <a
        href="https://opendata.cwa.gov.tw/opendatadoc/Observation/O-A0003-001.pdf"
        style={screens.xs ? { fontSize: "1rem" } : { fontSize: "1.2rem" }}
        target="_New"
      >
        中央氣象署開放資料平臺資料標準說明文件{" "}
        {screens.xs ? (
          <>
            <br />
          </>
        ) : (
          <>｜</>
        )}
        發布時間：2023-11-15 ｜ 版次 1.0
      </a>
      <hr />
      <input
        value={searchLocation}
        type="text"
        placeholder="查詢地區"
        onChange={inputChange}
      />
      {/* 顯示匹配的地區名稱建議 */}
      {filteredData.length > 0 ? null : (
        <>
          <ul>
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => setSearchLocation(suggestion)}
                style={{
                  cursor: "pointer",
                  color: "#001529",
                  borderRadius: "20px",
                  width: "100%",
                  marginTop: "10px",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </>
      )}
      <ul>
        {filteredData.map((item: any, index: any) => (
          <li key={index}>
            <p>縣市：{item.GeoInfo.CountyName}</p>
            <p>地區：{item.GeoInfo.TownName}</p>
            <p>測站位置：{item.StationName}</p>
            {item.WeatherElement.AirTemperature != -99 ? (
              <>
                <p>
                  當前溫度：
                  {item.WeatherElement.AirTemperature}
                </p>
              </>
            ) : (
              <>
                <p style={{ color: "red" }}>溫度缺值 或 資料異常</p>
              </>
            )}
            <p>
              更新時間：
              {item.ObsTime.DateTime.toString()
                .replace("T", " ")
                .substring(0, 19)}
            </p>
            {item.WeatherElement.AirTemperature != -99 ? (
              <>
                <p>天氣：{item.WeatherElement.Weather}</p>
              </>
            ) : null}
            {item.WeatherElement.AirTemperature != -99 ? (
              <>
                <p>
                  今日最高溫：
                  {
                    item.WeatherElement?.DailyExtreme?.DailyHigh
                      ?.TemperatureInfo?.AirTemperature
                  }
                </p>
                <p>
                  今日最低溫：
                  {
                    item.WeatherElement?.DailyExtreme?.DailyLow?.TemperatureInfo
                      ?.AirTemperature
                  }
                </p>
              </>
            ) : null}
            {/* 其他欄位 */}
            <Card
              style={{
                width: screens.xs ? "385px" : "525px",
                borderRadius: "2rem",
                padding: screens.xs ? "0" : "12px",
              }}
            >
              <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                  <h1
                    style={{
                      fontSize: screens.xs ? "35px" : "2.5rem",
                      fontWeight: "bold",
                      color: "darkcyan",
                    }}
                  >
                    {item.GeoInfo.CountyName}
                  </h1>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                  <h2 style={{ fontSize: "1.8rem", margin: "5px 0 0 0" }}>
                    {item.GeoInfo.TownName}
                  </h2>
                </Col>

                {item.WeatherElement.AirTemperature != -99 ? (
                  <>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                      <h3
                        style={{
                          fontSize: screens.xs ? "50px" : "3.5rem",
                          display: "flex",
                          fontWeight: "500",
                          color: "darkblue",
                          margin: screens.xs ? "20px 20px 0 0" : "20px 0",
                        }}
                      >
                        {item.WeatherElement.AirTemperature}°C
                      </h3>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                      {item.ObsTime.DateTime.toString()
                        .replace("T", " ")
                        .substring(11, 13) <= "18" &&
                      item.ObsTime.DateTime.toString()
                        .replace("T", " ")
                        .substring(11, 13) >= "06" ? (
                        item.WeatherElement.Weather.includes("雨") ? (
                          <img src={Rainy} alt="" style={{ height: "140px" }} />
                        ) : item.WeatherElement.Weather.slice(0, 2) ===
                          "多雲" ? (
                          <img
                            src={CloudyfogDay}
                            alt=""
                            style={{ height: "140px" }}
                          />
                        ) : item.WeatherElement.Weather.slice(0, 1) === "晴" ? (
                          <img
                            src={SunnyDay}
                            alt=""
                            style={{ height: "140px" }}
                          />
                        ) : item.WeatherElement.Weather.slice(0, 1) === "陰" ? (
                          <img
                            src={CloudyDay}
                            alt=""
                            style={{ height: "140px" }}
                          />
                        ) : null
                      ) : item.WeatherElement.Weather.includes("雨") ? (
                        <img
                          src={RainyNight}
                          alt=""
                          style={{ height: "140px" }}
                        />
                      ) : item.WeatherElement.Weather.slice(0, 2) === "多雲" ? (
                        <img
                          src={CloudyfogNight}
                          alt=""
                          style={{ height: "140px" }}
                        />
                      ) : item.WeatherElement.Weather.slice(0, 1) === "晴" ? (
                        <img
                          src={moonNight}
                          alt=""
                          style={{ height: "140px" }}
                        />
                      ) : item.WeatherElement.Weather.slice(0, 1) === "陰" ? (
                        <img
                          src={CloudyNight}
                          alt=""
                          style={{ height: "140px" }}
                        />
                      ) : null}
                    </Col>
                  </>
                ) : (
                  <>
                    <p style={{ color: "red" }}>溫度缺值 或 資料異常</p>
                  </>
                )}
                {item.WeatherElement.AirTemperature != -99 ? (
                  <>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                      <h6
                        style={
                          screens.xs
                            ? { fontSize: "20px", margin: "5px 0 0 0" }
                            : {
                                fontSize: "1.5rem",
                                fontWeight: "500",
                                margin: "5px 0 15px 0",
                              }
                        }
                      >
                        今日最高溫 ：
                        {
                          item.WeatherElement?.DailyExtreme?.DailyHigh
                            ?.TemperatureInfo?.AirTemperature
                        }
                      </h6>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                      <h6
                        style={
                          screens.xs
                            ? { fontSize: "20px", margin: "5px 0 5px 0" }
                            : {
                                fontSize: "1.5rem",
                                fontWeight: "500",
                                margin: "0 0 15px 0",
                              }
                        }
                      >
                        今日最高溫 ：
                        {
                          item.WeatherElement?.DailyExtreme?.DailyLow
                            ?.TemperatureInfo?.AirTemperature
                        }
                      </h6>
                    </Col>
                  </>
                ) : null}
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <h6
                    style={{
                      fontSize: screens.xs ? "18px" : "25px",
                      margin: screens.xs ? "5px 0 0 0 " : "15px 0 0 0",
                    }}
                  >
                    測站位置 ：{item.StationName}
                  </h6>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <h6
                    style={{
                      display: "flex",
                      flexDirection: "row-reverse",
                      color: "gray",
                      fontWeight: "500",
                      fontSize: screens.xs ? "18px" : "25px",
                      margin: screens.xs ? "5px 0 0 0 " : "15px 0 0 0",
                    }}
                  >
                    觀測時間 ：
                    {item.ObsTime.DateTime.toString()
                      .replace("T", " ")
                      .substring(11, 19)}
                  </h6>
                </Col>
              </Row>
            </Card>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page8_01;
