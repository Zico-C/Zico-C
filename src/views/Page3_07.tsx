// 引入 React 相關模組
import { useAppSelector } from "@/store/hook"; // 假設這是一個自訂的 Redux hook，用於從 store 中選取狀態
import { useEffect, useMemo, useState } from "react"; // 引入 React 相關 hook

const MyWebSocketComponent = () => {
  // 定義狀態變數
  const [text, setText] = useState(0); // 用於保存 WebSocket 接收到的訊息
  const data = useAppSelector((State: RootState) => State.global); // 使用 Redux hook 從 store 中選取全域狀態

  // 使用 useMemo 避免每次重新渲染都重新建立 WebSocket 連線
  const ws = useMemo(() => new WebSocket("ws://localhost:1880/ws/request"), []);

  // useEffect 用於處理副作用，這裡用於設定 WebSocket 事件監聽和清理
  useEffect(() => {
    // 定義 WebSocket 連線建立時的處理函數
    const handleOpen = () => {
      console.log("WebSocket connected");
      // 在連接建立後，可以選擇在這裡觸發發送數據的操作
      ws.send(JSON.stringify(data)); // 向 Node-RED 傳送資料
    };

    // 定義 WebSocket 接收到訊息時的處理函數
    const handleMessage = (message: any) => {
      setText(message.data); // 更新 text 狀態，顯示接收到的訊息
      console.log("Received message:", message.data);
      // 處理從 WebSocket 服務器接收到的消息
      // 只在第一次接收到訊息時發送

      const Message = {
        websocketData: text,
        globalData: data,
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
  }, [ws, data]); // 依賴項包括 ws、data 和 hasSent，當它們發生變化時，useEffect 會重新運行

  // 組件的渲染部分
  return (
    <div style={{ height: "100%" }}>
      <iframe
        src="http://127.0.0.1:1880"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default MyWebSocketComponent;
