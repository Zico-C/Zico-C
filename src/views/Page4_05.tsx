import { SettingOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import type { CollapseProps } from "antd";
import { Collapse, Select, Card, Row, Col, Button } from "antd";
import ReactECharts from "echarts-for-react";
import { Liquid } from "@ant-design/plots";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import Page3_08 from "./Page3_08";
const DemoLiquid = () => {
  const config = {
    percent: 0.25,
    outline: {
      border: 4,
      distance: 8,
    },
    wave: {
      length: 128,
    },
    statistic: {},
  };
  return <Liquid {...config} />;
};

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
        style={{ width: "385px" }}
        // 標題樣式
        headStyle={{
          backgroundColor: "#002FA7",
          color: "white",
          textAlign: "center",
          minHeight: "45px",
          borderRadius: 0,
        }}
        bodyStyle={{
          padding: 3,
          height: "266px",
          userSelect: "text",
          border: "0.1px solid gray",
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
const { Option } = Select;

type ExpandIconPosition = "start" | "end";

const App: React.FC = () => {
  const [expandIconPosition, setExpandIconPosition] =
    useState<ExpandIconPosition>("start");
  const [chartText, setChartText] = useState("");
  const handle = useFullScreenHandle();

  const onPositionChange = (newExpandIconPosition: ExpandIconPosition) => {
    setExpandIconPosition(newExpandIconPosition);
  };

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );
  const option1 = {
    xAxis: {
      type: "category",
      data: ["18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"],
    },
    yAxis: {
      type: "value",
    },
    label: {
      show: "true",
      formatter: `{c}${chartText}`,
      fontSize: "12",
    },
    series: [
      {
        data: [82, 85, 81, 82, 78, 81, 80],
        type: "line",
      },
    ],
  };
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "This is panel header 1",
      children: (
        <div>
          {" "}
          <input
            value={chartText}
            onChange={(e) => {
              setChartText(e.target.value);
            }}
            type="text"
          />
        </div>
      ),
      extra: genExtra(),
    },
    {
      key: "2",
      label: "IP CAM",
      children: (
        <>
          <Row>
            <Col span={6}>
              <Charts
                title="一號停車場"
                bodyStyle={{
                  // @ts-ignore
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <Page3_08 />
              </Charts>
            </Col>
          </Row>
        </>
      ),
      extra: genExtra(),
    },
    {
      key: "3",
      label: "Charts",
      children: (
        <>
          <FullScreen handle={handle}>
            <div
              style={{
                backgroundColor: "#FFF",
                height: "100%",
                width: "100%",
                margin: 0,
                padding: 0,
              }}
            >
              <Row>
                <Col span={6}>
                  <Charts
                    title="溫度感測器"
                    bodyStyle={{
                      // @ts-ignore
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <DemoLiquid />
                  </Charts>
                </Col>
                <Col span={6}>
                  <Charts
                    title="濕度感測器"
                    bodyStyle={{
                      // @ts-ignore
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <ReactECharts
                      option={option1}
                      style={{ height: "303px", width: "100%" }}
                      notMerge={true}
                      lazyUpdate={true}
                    />
                  </Charts>
                </Col>
                <Col span={6}>
                  <Charts
                    title="PM2.5"
                    bodyStyle={{
                      // @ts-ignore
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <ReactECharts
                      option={option1}
                      style={{ height: "303px", width: "100%" }}
                      notMerge={true}
                      lazyUpdate={true}
                    />
                  </Charts>
                </Col>
                <Col span={6}>
                  <Charts
                    title="水位感測器"
                    bodyStyle={{
                      // @ts-ignore
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <ReactECharts
                      option={option1}
                      style={{ height: "303px", width: "100%" }}
                      notMerge={true}
                      lazyUpdate={true}
                    />
                  </Charts>
                </Col>
              </Row>
              <Row>
                <Col span={6}>
                  <Charts
                    title="溫度感測器"
                    bodyStyle={{
                      // @ts-ignore
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <ReactECharts
                      option={option1}
                      style={{ height: "303px", width: "100%" }}
                      notMerge={true}
                      lazyUpdate={true}
                    />
                  </Charts>
                </Col>
                <Col span={6}>
                  <Charts
                    title="濕度感測器"
                    bodyStyle={{
                      // @ts-ignore
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <ReactECharts
                      option={option1}
                      style={{ height: "303px", width: "100%" }}
                      notMerge={true}
                      lazyUpdate={true}
                    />
                  </Charts>
                </Col>
                <Col span={6}>
                  <Charts
                    title="PM2.5"
                    bodyStyle={{
                      // @ts-ignore
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <ReactECharts
                      option={option1}
                      style={{ height: "303px", width: "100%" }}
                      notMerge={true}
                      lazyUpdate={true}
                    />
                  </Charts>
                </Col>
                <Col span={6}>
                  <Charts
                    title="水位感測器"
                    bodyStyle={{
                      // @ts-ignore
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <ReactECharts
                      option={option1}
                      style={{ height: "303px", width: "100%" }}
                      notMerge={true}
                      lazyUpdate={true}
                    />
                  </Charts>
                </Col>
              </Row>
            </div>
          </FullScreen>
        </>
      ),
      extra: genExtra(),
    },
  ];

  return (
    <>
      <Collapse
        defaultActiveKey={["1"]}
        onChange={onChange}
        expandIconPosition={expandIconPosition}
        items={items}
      />
      <br />
      <span>Expand Icon Position: </span>
      <Select
        value={expandIconPosition}
        style={{ margin: "0 8px" }}
        onChange={onPositionChange}
      >
        <Option value="start">start</Option>
        <Option value="end">end</Option>
      </Select>
      <Button onClick={handle.enter}>full-Srceen</Button>
    </>
  );
};

export default App;
