import React, { useReducer } from 'react';
import styles from "./page8_01.module.scss"

// 步驟1: 定義初始狀態
interface State {
  count: number;
}

const initialState: State = {
  count: 0, // 初始計數器值為 0
};

// 步驟2: 定義操作的型別（Action Types）
type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };

// 步驟3: 定義 Reducer 函數
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }; // 增加計數器值
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }; // 減少計數器值
    default:
      return state; // 如果沒有匹配的操作，保持原狀態不變
  }
};

// 步驟4: 創建 React 組件
function Counter()  {
  // 使用 useReducer 來初始化狀態並設置 dispatch 函數
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={styles.main}>
      <p>Count: {state.count}</p> {/* 顯示當前計數器值 */}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>增加</button> {/* 點擊按鈕執行 INCREMENT 操作 */}
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>減少</button> {/* 點擊按鈕執行 DECREMENT 操作 */}
    </div>
  );
};

export default Counter;
