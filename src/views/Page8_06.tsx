import { useLocation, useNavigate } from "react-router-dom";
import styles from "./page8_01.module.scss";
import { useAppSelector } from "@/store/hook";
function page8_06() {
  // 使用 useNavigate 鉤子來獲取路由導航函數
  const navigateTo = useNavigate();
  // 使用 useLocation 鉤子來獲取當前路由位置
  const location = useLocation();

  const user = useAppSelector((State: RootState) => State.global);

  const handleNavigate = () => {
    // 使用 navigateTo 函數來跳轉到不同路徑
    navigateTo("/page8/page8_07", {
      // 將 資訊儲存在 state 當中 使跳轉後的頁面能接受到此資訊
      // state ( 路由之間傳遞自定義資訊 )
      state: {
        SomeData: "Hello,World !!!",
        TestData: {
          name: "joe",
          age: 25,
          userName: user.user,
          userLevel: user.level,
        },
      },
    });
    // 沒有使用 reload() 只有子路徑會被更新
    // 父路徑不會更新，MainMenu不會跟著變更 TODO:"已修改完成"
    // window.location.reload();
  };
  const scrollToSection = () => {
    window.location.hash = "#section1";
  };
  const scrollToSection2 = () => {
    window.location.hash = "#section2";
  };
  return (
    <>
      <div className={styles.main}>
        <div id="section1">
          <h2>這是 Section 1</h2>
          <p>這是 Section 1 的內容。</p>
          <button onClick={scrollToSection2}>滾動到Section 2</button>
        </div>
        <hr />
        <h2>當前網頁路徑資訊：</h2>
        <pre>{JSON.stringify(location, null, 2)}</pre>
        <br />
        <p> "search"： 查詢參數 </p>
        <hr />
        <p>
          {" "}
          "hash"： 通常用於滾動到頁面中的特定位置，例如
          "#section1"。通常用於單頁應用（SPA）中。{" "}
        </p>
        <hr />
        <p>
          {" "}
          "state"： 這是一個 JavaScript
          物件，可以包含與路由相關的自訂資訊。通常用於保存一些臨時狀態或資訊，藉由路徑跳轉時傳遞。
        </p>
        <hr />
        <p> "pathname"： 當前頁面路徑 </p>
        <hr />
        <br />
        <h2>路由跳轉到：</h2>
        <button onClick={handleNavigate}>
          跳轉 Page8_07的頁面 "並傳遞state狀態"
        </button>
        <div>
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <div id="section2">
            <h2>這是 Section 2</h2>
            <p>這是 Section 2 的內容。</p>
            <button onClick={scrollToSection}>滾動到Section 1</button>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

export default page8_06;
