import ReactECharts from "echarts-for-react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface weatherElement {
  parameter: {
    parameterValue: string;
  }[];
  weatherElement: {
    elementValue: string;
  }[];
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
  console.log(post);

  console.log(
    post.filter((item: any) => {
      console.log(
        item.GeoInfo.TownName.toLowerCase().includes("竹北".toLowerCase())
      );
    })
  );

  const temperature = (location: string) => {
    const filteredData: any = post.filter((item: any) =>
      item.GeoInfo.TownName.toLowerCase().includes(location.toLowerCase())
    );

    if (filteredData.length > 0) {
      return filteredData[0].WeatherElement?.AirTemperature;
    }
    return "N/A"; // 或者返回一個默認值，表示未找到數據
  };

  const handleURL = (name: any) => {
    setSaveName(name.data.name);
  };
  useEffect(() => {
    if (saveName !== "") {
      navigateTo(`/page8/page8_01?selectLocation=${saveName}`);
    }
  }, [saveName]);
  // 基于准备好的dom，初始化echarts实例
  const option = {
    // 圖表的標題配置
    title: {
      text: "ECharts 入门示例", // 圖表的標題文字
    },
    // 提示框配置，當滑鼠懸停在圖表上時會顯示提示資訊
    tooltip: {},
    legend: {
      data: ["销量"],
    },
    // x軸配置，用於設置橫軸（通常是類別軸）
    xAxis: {
      // 橫軸的數據項目
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    // y軸配置，用於設置縱軸
    yAxis: {},
    // 系列配置，這裡是一個柱狀圖
    series: [
      {
        // 系列名稱
        name: "销量",
        // 系列類型，這裡是柱狀圖
        type: "bar",
        // 系列的數據，這是柱狀圖的數據
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };
  const option2 = {
    title: {
      text: "地區即時溫度",
      left: "center",
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
        data: ["竹北市", "楊梅區", "宜蘭市", "阿里山鄉", "大溪區"],
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
      <p>這是Page3_02頁面內容</p>
      {/* 使用 ReactECharts 组件来渲染图表 */}
      <ReactECharts option={option} style={{ height: "400px" }} />
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
