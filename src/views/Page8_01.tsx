import { useState, useEffect } from "react";
import styles from "./page8_01.module.scss";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
function Page8_01() {
  // 使用useState來宣告多個狀態變數
  const [post, setPost] = useState([]); // 存儲從API獲取的氣象數據
  const [searchLocation, setSearchLocation] = useState(""); // 用戶輸入的地區名稱
  const [filteredData, setFilteredData] = useState([]); // 用於存儲匹配的數據
  const [suggestions, setSuggestions] = useState<string[]>([]); // 存儲匹配的地區名稱建議
  const [SearchParams] = useSearchParams("");

  const selectLocationX = SearchParams.get("selectLocation") || "";

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
      <h1>天氣預報API</h1>
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
            <p>
              當前溫度：
              {item.WeatherElement.AirTemperature}
            </p>
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
            <hr />
            {/* 其他欄位 */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page8_01;
