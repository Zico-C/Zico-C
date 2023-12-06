import { useState, useEffect } from 'react';

function useDebounce(value:any) {
  // 創建一個狀態變數 debounceSearch，用於存儲延遲處理後的輸入值
  const [debounceSearch, setDebounceSearch] = useState("");

  useEffect(() => {
    /* 在 useEffect 內部，設定一個延遲函數 debounce
       ，它會在指定的時間後執行 */
    const debounce = setTimeout(() => {
      // 更新 debounceSearch 為最新的輸入值
      setDebounceSearch(value);
      // 使用者在 0.5 秒內沒有輸入新值，debounce 才會觸發
    }, 500);

    // 每當這個 useEffect 執行，都會返回一個清除 Timeout 的函數
    // 這是為了確保前一次的 Timeout 已被清除，防止多個 Timeout 疊加
    return () => clearTimeout(debounce);
  }, [value]);

  // 最後，回傳 debounceSearch 這個狀態變數
  return debounceSearch;
}

export default useDebounce;