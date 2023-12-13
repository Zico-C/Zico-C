import { useEffect, useMemo } from "react";
import { useAppSelector } from "./store/hook";

function nodeRedWebSocket() {
  ////////////////////////////【 node-Red WebSocket 連線 】//////////////////////////////////
  // 定義狀態變數
  const globalData = useAppSelector((State: RootState) => State.global); // 使用 Redux hook 從 store 中選取全域狀態
  const mapData = useAppSelector((State: RootState) => State.Map.markers); // 使用 Redux hook 從 store 中選取全域狀態

  // 使用 useMemo 避免每次重新渲染都重新建立 WebSocket 連線
  const ws = useMemo(() => new WebSocket("ws://localhost:1880/ws/request"), []);

  // useEffect 用於處理副作用，這裡用於設定 WebSocket 事件監聽和清理
  useEffect(() => {
    // 定義 WebSocket 連線建立時的處理函數
    const handleOpen = () => {
      console.log("WebSocket connected");
      // 在連接建立後，可以選擇在這裡觸發發送數據的操作
    };

    // 定義 WebSocket 接收到訊息時的處理函數
    const handleMessage = (message: any) => {
      console.log("Received message:", message.data);
      // 處理從 WebSocket 服務器接收到的消息
      // 只在第一次接收到訊息時發送

      const Message = {
        websocketData: message.data,
        globalData: globalData,
        mapData: mapData,
      };

      ws.send(JSON.stringify(Message)); // 向 Node-RED 傳送資料
    };

    // 定義 WebSocket 連線關閉時的處理函數
    const handleClose = () => {
      console.log("WebSocket disconnected");
    };

    // 添加事件監聽器
    ws.addEventListener("open", handleOpen);
    ws.addEventListener("message", handleMessage);
    ws.addEventListener("close", handleClose);

    // Cleanup when component unmounts
    return () => {
      // 移除事件監聽器
      ws.removeEventListener("open", handleOpen);
      ws.removeEventListener("message", handleMessage);
      ws.removeEventListener("close", handleClose);

      // 如果 WebSocket 連線處於打開或連接中狀態，則關閉連線
      // if (
      //   ws.readyState === WebSocket.OPEN ||
      //   ws.readyState === WebSocket.CONNECTING
      // ) {
      //   ws.close();
      // }
    };
  }, [ws, globalData, mapData]); // 依賴項包括 ws、data 和 hasSent，當它們發生變化時，useEffect 會重新運行
  //////////////////////////////////////////////////////////////////////////////
}

export default nodeRedWebSocket;
