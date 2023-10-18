import React, { useReducer, useState, useEffect } from 'react'; // 匯入 React，useReducer 和 useState 鉤子

import styles from "./page8_01.module.scss"; // 匯入樣式

type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'TOGGLE' }
  | { type: 'ADD'; text: string }
  | { type: 'TOGGLE_TODO'; id: number }
  | { type: 'REMOVE_TODO'; id: number };

// 初始狀態
const initialState = { count: 0, isOn: false, texts: [] };

// Reducer 函數，處理狀態更新的邏輯
const reducer = (state: any, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }; // 增加計數器
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }; // 減少計數器
    case 'TOGGLE':
      return { ...state, isOn: !state.isOn }; // 切換開關狀態
    case "ADD":
      return {
        ...state,
        texts: [
          ...state.texts,
          { id: Math.floor(Math.random() * 100000), text: action.text, completed: false }
        ]
      }; // 新增輸入的文字
    case 'TOGGLE_TODO':
      return {
        ...state,
        texts: state.texts.map((todo: any) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      }; // 切換待辦事項完成狀態
    case 'REMOVE_TODO':
      return {
        ...state,
        texts: state.texts.filter((todo: any) => todo.id !== action.id)
      }; // 移除待辦事項
    default:
      return state; // 如果沒有匹配的操作，保持原狀態不變
  }
};

function Counter() {
  // 使用 useReducer 初始化狀態和分派函數
  const [state, dispatch] = useReducer(reducer, initialState);
  // 使用 useState 初始化輸入框的值
  const [newInput, setNewInput] = useState('');
  
  const addTodo = (e: any) => {
    e.preventDefault(); // 阻止表單預設行為
    dispatch({ type: "ADD", text: newInput }); // 觸發 ADD 類型的操作，新增文字
    setNewInput(''); // 清空輸入欄位
  }

  return (
    <div className={styles.main}>
      <div>
        <p>計數器：{state.count}</p> {/* 顯示當前計數器值 */}
        <p>開關狀態：{state.isOn ? '開' : '關'}</p> {/* 顯示開關狀態文字 */}
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>增加</button> {/* 點擊按鈕執行 INCREMENT 操作 */}
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>減少</button> {/* 點擊按鈕執行 DECREMENT 操作 */}
        <button onClick={() => dispatch({ type: 'TOGGLE' })}>切換</button> {/* 點擊按鈕執行 TOGGLE 操作 */}
      </div>
      <div>
        <form onSubmit={addTodo}>
          <input
            type="text"
            value={newInput}
            placeholder='輸入資料'
            onChange={(e) => setNewInput(e.target.value)} /> {/* 輸入框，值綁定到 newInput */}
        </form>
        <ul>
          {state.texts.map((todo: any) => (
            <li key={todo.id}>
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
              </span> {/* 待辦事項文字，根據完成狀態添加刪除線 */}
              <button className={styles.toggle} onClick={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}>
                {todo.completed ? '標記未完成' : '標記完成'}
              </button> {/* 切換待辦事項完成狀態的按鈕 */}
              <button className={styles.deletes} onClick={() => dispatch({ type: 'REMOVE_TODO', id: todo.id })}>
                刪除
              </button> {/* 刪除待辦事項的按鈕 */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Counter;
