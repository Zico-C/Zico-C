import { useLocation , useNavigate } from "react-router-dom";
import styles from "./page8_01.module.scss"
function page8_06() {

  const navigateTo = useNavigate();
  // 使用 useLocation 钩子获取当前路由位置
  const location = useLocation();

  const handleNavigate = () => {
    // 使用 navigateTo 來跳轉到不同路徑
    navigateTo("/page8/page8_07")
    // 重新載入目前 URL ，這裡沒有使用會除了這個子路徑更新到 page8_07 以外 MainMenu不會跟著變更，
    window.location.reload(); 
  };
  const scrollToSection = () => {
    window.location.hash = "#section1";
  };
  const scrollToSection2 = () => {
    window.location.hash = "#section2";
  };
  return (
    <div className={styles.main}>

      <div id="section1">
          <h2>這是 Section 1</h2>
          <p>這是 Section 1 的內容。</p>
          <button onClick={scrollToSection2}>滾動到Section 2</button>
        </div>
        <hr/>
      <h2>當前網頁路徑資訊：</h2>
      <pre>{JSON.stringify(location, null, 2)}</pre><br/>
      <p> "search"： 查詢參數 </p><hr />
      <p> "hash"：  通常用於滾動到頁面中的特定位置，例如 "#section1"。通常用於單頁應用（SPA）中。 </p><hr/>
      <p> "state"：  這是一個 JavaScript 物件，可以包含與路由相關的自訂資訊。通常用於保存一些臨時狀態或資訊。
        <p>(在Link to 的時候進行傳遞)</p></p><hr/>
      <p> "pathname"： 當前頁面路徑 </p>
      <hr/><br/>
      <h2>路由跳轉到：</h2>
      <button onClick={handleNavigate}>首頁</button>
      <div>
      <hr/><br/>
      <hr/><br/>
      <hr/><br/>
      <hr/><br/>
      <hr/><br/>      
      <hr/><br/>
      <hr/><br/>
      <hr/><br/>
      <hr/><br/>
      <hr/><br/>
        <div id="section2">
          <h2>這是 Section 2</h2>
          <p>這是 Section 2 的內容。</p>
          <button onClick={scrollToSection}>滾動到Section 1</button>
        </div>
        <hr/>
      </div>
    </div>
  );
}

export default page8_06;