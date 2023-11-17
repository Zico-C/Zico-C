import ReactECharts from "echarts-for-react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export interface weatherElement {
  StationName: string;
  StationId: string;
  ObsTime: ObsTime;
  GeoInfo: GeoInfo;
  WeatherElement: WeatherElementClass;
}

export interface GeoInfo {
  Coordinates: Coordinate[];
  StationAltitude: string;
  CountyName: string;
  TownName: string;
  CountyCode: string;
  TownCode: string;
}

export interface Coordinate {
  CoordinateName: string;
  CoordinateFormat: string;
  StationLatitude: string;
  StationLongitude: string;
}

export interface ObsTime {
  DateTime: string;
}

export interface WeatherElementClass {
  Weather: string;
  VisibilityDescription: string;
  SunshineDuration: string;
  Now: Now;
  WindDirection: string;
  WindSpeed: string;
  AirTemperature: string;
  RelativeHumidity: string;
  AirPressure: string;
  UVIndex: string;
  Max10MinAverage: Max10MinAverage;
  GustInfo: GustInfo;
  DailyExtreme: DailyExtreme;
}

export interface DailyExtreme {
  DailyHigh: Daily;
  DailyLow: Daily;
}

export interface Daily {
  TemperatureInfo: TemperatureInfo;
}

export interface TemperatureInfo {
  AirTemperature: string;
  Occurred_at: ObsTime;
}

export interface GustInfo {
  PeakGustSpeed: string;
  Occurred_at: OccurredAt;
}

export interface OccurredAt {
  WindDirection: string;
  DateTime: string;
}

export interface Max10MinAverage {
  WindSpeed: string;
  Occurred_at: OccurredAt;
}

export interface Now {
  Precipitation: string;
}

const View = () => {
  const [saveName, setSaveName] = useState("");
  const [post, setPost] = useState<weatherElement[]>([]); // 存儲從API獲取的氣象數據
  const navigateTo = useNavigate();
  useEffect(() => {
    const targetURL =
      "https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWA-EB3FD491-9755-4E3C-A31D-70C0FCCFD682&format=JSON";

    axios
      .get(targetURL)
      .then((response) => {
        const data = response.data.records.Station;
        setPost(data); // 將獲得的數據設定到post狀態變數中
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let str = "2023-07-17-001-834e";
  console.log(str.slice(0, 14));

  // updateData : 將時間格式化
  const updateData = post[0]?.ObsTime?.DateTime?.toString()
    .replace("T", " ")
    .substring(0, 19);

  // const xx = post.map((xxx) => xxx?.WeatherElement?.AirTemperature);
  // console.log("xx", xx);

  // 接收一個 location 並使用 filter 篩選地區 若找到一樣的則返回給 filteredData，
  // 在判斷 filteredData 陣列長度 是否大於 1 若有則回傳 溫度 若沒有 則回傳 "N/A"
  const temperature = (location: string) => {
    const filteredData: any = post.filter((item: any) =>
      item.GeoInfo.TownName.toLowerCase().includes(location.toLowerCase())
    );

    if (filteredData.length > 0) {
      const AirTemperature = filteredData[0].WeatherElement?.AirTemperature;
      return AirTemperature === -99 ? "N/A" : AirTemperature;
    }
    return "N/A"; // 或者返回一個默認值，表示未找到數據
  };

  const handleURL = (name: any) => {
    setSaveName(name.data.name);
  };
  useEffect(() => {
    if (saveName !== "") {
      console.log("new saveName", saveName);
      navigateTo(`/page8/page8_01?selectLocation=${saveName}`);
      location.reload();
    }
  }, [saveName]);
  console.log("...render");
  const option2 = {
    title: {
      text: "地區即時溫度",
      left: "center",
      subtext: `更新時間：${updateData}`,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["竹北市", "楊梅區", "宜蘭市", "阿里山鄉", "大溪區", "桃園區"],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "溫度",
        type: "bar",
        barWidth: "60%",
        data: [
          { value: temperature("竹北市"), name: "竹北市" },
          { value: temperature("楊梅區"), name: "楊梅區" },
          { value: temperature("宜蘭市"), name: "宜蘭市" },
          { value: temperature("阿里山鄉"), name: "阿里山鄉" },
          { value: temperature("大溪區"), name: "大溪區" },
          { value: temperature("桃園區"), name: "桃園區" },
        ],
      },
    ],
    label: {
      show: true, // 设置为 true，以显示标签
      position: "inside", // 设置标签显示在柱状图的顶部
      fontSize: "2rem",
    },
  };
  return (
    <div className="Home">
      {/* 使用 ReactECharts 组件来渲染图表 */}
      <ReactECharts
        option={option2}
        style={{ height: "400px" }}
        onEvents={{ click: handleURL }}
        notMerge={true}
        lazyUpdate={true}
      />
    </div>
  );
};

export default View;
