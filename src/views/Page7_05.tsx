import { useState, useMemo, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [countTest, setCountTest] = useState(0);
  const [returnCount, setReturnCount] = useState(0);
  // 這是一個的計算函數，計算 count 的平方
  const MemoValue = useMemo(() => {
    console.log("use Memo 計算中"); // 用於示範只在重新計算時執行
    return count ** 2;
  }, [count]); // 在 count 發生變化時重新計算

  // 模仿 useMemo 依賴項 [count] 進行計算，但不能直接返回計算結果 需要額外新增 useState
  useEffect(() => {
    console.log("useEffect 計算中");
    setReturnCount(count ** 2);
  }, [count]);

  /* 當 count 發生變化時，只有 MemoValue 會重新計算，其他部分不會重新渲染
   */
  return (
    <div className="Home">
      <h1>計算 count 的平方</h1>
      <p>Count 值： {count}</p>
      <p>useMemo 計算結果： {MemoValue}</p>
      <p>useEffect 計算結果： {returnCount}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>增加 Count</button>
      <br />
      <hr />
      <div>
        <p>CountTest 值：{countTest}</p>
        <button onClick={() => setCountTest((prev) => prev + 1)}>
          增加 CountTest
        </button>
      </div>
    </div>
  );
}

export default App;
