import { useLocation } from 'react-router-dom';
import styles from "./page8_01.module.scss"
function MyComponent() {
  // 使用 useLocation 來取得當前路由位置
  const location = useLocation();
  
  // 使用 URLSearchParams 來解析搜索參數
  const searchParams = new URLSearchParams(location.search);
  
  // 使用 get() 方法來取得特定搜索參數的值
  const paramValue = searchParams.get('name');
  const paramValue2 = searchParams.get('age');
  return (
    <div className={styles.main}>
      <h1>搜尋參數示例</h1>
        <p>搜尋參數 name 的值是：
          <span style={{color:"blue",fontSize:"2.5rem"}}>
            {paramValue}
          </span>
        </p>
        <p>搜尋參數 age 的值是：
          <span style={{color:"DeepSkyBlue",fontSize:"2.5rem"}}>
            {paramValue2}
          </span>
        </p>
    </div>
  );
}

export default MyComponent;
