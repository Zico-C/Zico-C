import { useRef, useState } from "react";
import { useMutation } from "react-query";
import styles from "./page8_01.module.scss";
import { message } from "antd";
// 定義傳送座標資料到後端的異步函數
const sendCoordinatesToBackend = async (data: any) => {
  try {
    // 使用 fetch 函數向後端 API 傳送 POST 要求
    const response = await fetch("http://localhost:3014/locationIP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // 將資料轉換為 JSON 字串並傳送
    });

    if (response.ok) {
      console.log("座標成功發送到後端"); // 請求成功時輸出日誌
    } else {
      console.error("無法發送座標到後端"); // 請求失敗時輸出錯誤日誌
    }
  } catch (error) {
    console.error("發送請求時出現錯誤：" + error); // 捕獲並輸出請求時的錯誤
  }
};

function App() {
  const [latitude, setLatitude] = useState(0); // 存儲緯度的狀態
  const [longitude, setLongitude] = useState(0); // 存儲經度的狀態
  const inputNameRef = useRef<HTMLInputElement>(null);
  const [messageApi, contextHolder] = message.useMessage();
  // 使用 useMutation 創建 mutation，並提供傳送座標資料到後端的函數
  const createPostMutation = useMutation(sendCoordinatesToBackend, {
    // 這裡可以添加其他配置選項，如onSuccess、onError等
  });

  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "請填入上傳人員",
    });
  };

  // 當點擊按鈕時觸發的函數
  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;

        const name = inputNameRef.current?.value;

        if (name !== "" && name?.trim() !== "") {
          const updateTime = new Date().toLocaleString("zh-TW");
          setLatitude(latitude);
          setLongitude(longitude);

          // 使用mutate觸發mutation，傳遞參數
          createPostMutation.mutate({
            id: 0,
            name: name,
            updateTime: `${updateTime} UTC+8`,
            latitude: latitude,
            longitude: longitude,
          });
        } else {
          warning();
          inputNameRef.current?.focus();
        }
      });
    } else {
      console.log("瀏覽器不支援地理位置服務"); // 如果瀏覽器不支援地理位置服務，則輸出錯誤日誌
    }
  };

  return (
    <div className={styles.main}>
      {contextHolder}
      <input type="text" placeholder="上傳人員" ref={inputNameRef} />
      <br />
      <button onClick={getLocation}>獲取並發送座標</button>
      <p>緯度：{latitude}</p>
      <p>經度：{longitude}</p>
    </div>
  );
}

export default App;
