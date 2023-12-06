import { useCallback, useState, useEffect } from "react";
import styles from "./page8_01.module.scss";

function Page6_07() {
  // 使用 useState 來追蹤視窗大小的狀態
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });

  const User = [
    {
      id: 1,
      name: "zico",
      age: 26,
    },
    {
      id: 2,
      name: "may",
      age: 23,
    },
    {
      id: 3,
      name: "hank",
      age: 27,
    },
  ];

  console.log("User", User);

  const UserUp = User.map((user) => {
    return user.name === "may"
      ? { ...user, name: "XXX" }
      : user.name === "hank"
      ? { ...user, age: 30 }
      : user;
  });

  console.log("UserUp", UserUp);

  // 使用 useCallback 創建一個縮放視窗時的處理函數
  const onResize = useCallback(() => {
    console.log("正在縮放視窗");
    // 更新視窗大小的狀態
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
  }, []);

  // 使用 useEffect 監聽視窗大小的變化
  useEffect(() => {
    // 添加縮放視窗事件監聽器，當視窗大小變化時呼叫 onResize 函數
    window.addEventListener("resize", onResize);
    // 在組件卸載或依賴變化時，移除事件監聽器以避免記憶體洩漏
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onResize]); // 依賴 onResize 函數，只有當它發生變化時才執行 useEffect

  return (
    <div className={styles.main}>
      <h1>Page6_07頁面 測試 useCallback</h1>
      <br />
      <p
        style={{
          color:
            size.width > 1200 ? "green" : size.width > 800 ? "blue" : "red",
        }}
      >
        {size.width} * {size.height}
      </p>
      <p>
        {size.width > 1200 ? "desktop" : size.width > 800 ? "pad" : "mobile"}
      </p>
    </div>
  );
}

export default Page6_07;
