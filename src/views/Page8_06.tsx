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

  return (
    <div className={styles.main}>
      <h2>當前網頁路徑資訊：</h2>
      <pre>{JSON.stringify(location, null, 2)}</pre><br/>
      <h1>當前頁面路徑為：{location.pathname}</h1>
      <hr/><br/>
      <h2>路由跳轉到：</h2>
      <button onClick={handleNavigate}>首頁</button>
    </div>
  );
}

export default page8_06;