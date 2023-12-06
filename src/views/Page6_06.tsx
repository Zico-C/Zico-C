import { useState, useEffect } from "react";
import styles from "./page8_01.module.scss";
import useDebounce from "./useDebounce";
function Page6_6() {
  const [search, setSearch] = useState("");

  // 自訂 Hook 將需要debounce的狀態輸入。
  const debounceSearch = useDebounce(search);

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  // 第一次渲染執行一次，當使用者在input 停止輸入0.5秒 後執行副作用處理
  useEffect(() => {
    const getApiData = async () => {
      console.log("getApiData...");
      // async await...
      console.log("End...");
    };
    getApiData();
  }, [debounceSearch]);

  return (
    <div className={styles.main}>
      <h1>Page6_06頁面 useDebounce</h1>
      <hr style={{ marginTop: "2rem", marginBottom: "2rem" }} />
      <div>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search..."
        />
        <p>{search}</p>
        <p>
          <span style={{ color: "blue" }}>debounceSearch：</span>
          {debounceSearch}
        </p>
      </div>
    </div>
  );
}

export default Page6_6;
