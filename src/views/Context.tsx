import { createContext, useState } from "react";
// 建立一個名為 MyContext 的上下文，包含 count、add 和 minus 這些狀態和函數。
const MyContext = createContext({
  count: 0, // 計數
  add: () => {}, // 增加計數的函數
  minus: () => {}, // 減少計數的函數
});
// MyProvider 是上下文的提供者，它包裹子組件並提供訪問 MyContext 中值的途徑。
const MyProvider = ({ children }: any) => {
  // 使用 useState 創建名為 count 的狀態，初始值為 0
  const [count, setCount] = useState(0);
  // 定義 add 函數，當調用時增加計數。
  const add = () => {
    setCount(count + 1);
  };
  // 定義 minus 函數，當調用時減少計數。
  const minus = () => {
    setCount(count - 1);
  };

  return (
    <MyContext.Provider value={{ count, add, minus }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };
