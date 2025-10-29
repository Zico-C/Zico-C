import React, { useState, useEffect } from "react";
import { Button, Tooltip, Table, Space } from "antd";
import {
  ReloadOutlined,
  DatabaseOutlined,
  ThunderboltOutlined,
  SyncOutlined,
} from "@ant-design/icons";

const MOCK_DATA_DB = [
  { key: "1", name: "Device A", temperature: "25°C", source: "db" },
  { key: "2", name: "Device B", temperature: "28°C", source: "db" },
];

const MOCK_DATA_DEVICE = [
  { key: "1", name: "Device A", temperature: "26°C", source: "device" },
  { key: "2", name: "Device B", temperature: "29°C", source: "device" },
  { key: "3", name: "Device C", temperature: "30°C", source: "device" },
];

const columns = [
  {
    title: "裝置名稱",
    dataIndex: "name",
  },
  {
    title: "溫度",
    dataIndex: "temperature",
  },
  {
    title: "來源",
    dataIndex: "source",
    render: (text: any) => (
      <Tooltip
        title={
          text === "db"
            ? "來自資料庫（快但可能不完整）"
            : "來自設備（完整但慢）"
        }
      >
        <span style={{ color: text === "db" ? "green" : "orange" }}>
          {text === "db" ? "資料庫" : "設備"}
        </span>
      </Tooltip>
    ),
  },
];

const IotDataFetcher = () => {
  const [mode, setMode] = useState("db");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [autoRefresh, setAutoRefresh] = useState(false);

  useEffect(() => {
    if (autoRefresh) {
      const timer = setInterval(() => handleRefresh(), 10000); // 固定 10 秒
      return () => clearInterval(timer);
    }
  }, [autoRefresh, mode]);

  const handleRefresh = async () => {
    setLoading(true);
    try {
      const result: any = await new Promise((res) => {
        setTimeout(
          () => res(mode === "db" ? MOCK_DATA_DB : MOCK_DATA_DEVICE),
          1000
        );
      });
      setData(result);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <Space>
          <Tooltip title="快速模式（資料庫）">
            <Button
              type={mode === "db" ? "primary" : "default"}
              icon={<DatabaseOutlined />}
              onClick={() => setMode("db")}
            />
          </Tooltip>

          <Tooltip title="即時模式（設備）">
            <Button
              type={mode === "device" ? "primary" : "default"}
              icon={<ThunderboltOutlined />}
              onClick={() => setMode("device")}
            />
          </Tooltip>
          <Tooltip title="重新整理">
            <Button
              icon={<ReloadOutlined />}
              onClick={handleRefresh}
              loading={loading}
            />
          </Tooltip>
          <Tooltip title="自動更新 (每 10 秒)">
            <Button
              type={autoRefresh ? "primary" : "default"}
              icon={<SyncOutlined spin={autoRefresh} />}
              onClick={() => setAutoRefresh((prev) => !prev)}
            />
          </Tooltip>
        </Space>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={false}
      />
    </div>
  );
};

export default IotDataFetcher;
