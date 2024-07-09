// src/App.tsx
import React, { useEffect, useState } from "react";
import mqtt from "precompiled-mqtt";

const MQTT_BROKER_URL = "ws://192.168.2.5:1884/mqtt"; // 使用WebSocket安全連接

const TOPIC = ["DO", "DETECTION"];

const Status: React.FC = () => {
  const [mqttData, setMqttData] = useState({
    DO: "",
    DETECTION: "",
  });

  useEffect(() => {
    // 創建MQTT客戶端
    const client = mqtt.connect(MQTT_BROKER_URL, {
      clientId: "mqttjs_" + Math.random().toString(16),
    });

    // 設置連接成功回調
    client.on("connect", () => {
      console.log("Connected to MQTT broker");
      client.subscribe(TOPIC, (err: any) => {
        if (err) {
          console.error("Failed to subscribe to topic:", err);
        } else {
          console.log(`Subscribed to topic: ${TOPIC}`);
        }
      });
    });

    // 設置消息到達回調
    client.on("message", (topic: any, message: any) => {
      console.log(
        `Received message: ${message.toString()} from topic: ${topic}`
      );

      setMqttData({
        ...mqttData,
        DO: message.toString(),
        DETECTION: JSON.parse(message.toString()).result.toString(),
      });

      // setMessages(message.toString());
    });
    // 清理函數：當組件卸載時topic斷開連接
    return () => {
      if (client.connected) {
        client.end();
      }
    };
  }, []);

  return (
    <div>
      <h1>MQTT Subscription Example</h1>
      <div id="messages">DO : {mqttData.DO}</div>
      <div id="messages">DETECTION : {mqttData.DETECTION}</div>
    </div>
  );
};

export default Status;
