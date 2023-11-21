import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

const EChartsComponent = () => {
  const [seriesData, setSeriesData] = useState(500);
  const [seriesDataSecond, setSeriesDataSecond] = useState(800);

  useEffect(() => {
    const Times = setInterval(() => {
      setSeriesData(500 * Math.round(Math.random() * 5) + 1);
      console.log("Times render...", seriesData);
    }, 2000);

    const TimesSecond = setInterval(() => {
      setSeriesDataSecond(500 * Math.round(Math.random() * 5) + 1);
      console.log("Times2 render...", seriesDataSecond);
    }, 2500);

    return () => {
      clearInterval(Times);
      clearInterval(TimesSecond);
    };
  }, [seriesDataSecond, seriesDataSecond]);

  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        center: ["50%", "55%"], // 調整圓心位置
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,

        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: true,
          formatter(param: any) {
            return param.name + " (" + param.value + ")";
          },
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "冰箱" },
          { value: 735, name: "冷氣" },
          { value: 580, name: "電視" },
          { value: seriesDataSecond, name: "除濕機" },
          { value: seriesData, name: "電風扇" },
        ],
      },
    ],
  };
  return (
    <div>
      <ReactECharts
        option={option}
        //
        lazyUpdate={true}
        //notMerge(不合並設置)：使用true時 每當接收到新的配置後，會將新的配置完全替換舊的配置，並重新渲染整個圖表，
        //舉例：假設設定 true 將圖表 {冰箱、冷氣、電視} 隱藏，當有新的資料進來，則 重新渲染新的圖表，隱藏效果被重製
        notMerge={true}
      />
    </div>
  );
};

export default EChartsComponent;
