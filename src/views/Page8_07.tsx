import Profile from "./ReduxPage/Profile";
// import UserSlice from "./ReduxPage/Store/UserSlice"
import styles from "./page8_01.module.scss";
// import { configureStore } from "@reduxjs/toolkit"
// import { Provider } from "react-redux"
// 引入 useLocation 查詢 Page8_06 傳過來的 State
import { useLocation } from "react-router-dom";
//創建 Redux store
// const store = configureStore({
//   reducer :{
//     // key : Value
//     user:UserSlice, //將 user 的Redux 切片(Reducer) 添加到 Store 中
//     // 這裡可添加其他切片或者 Reducer
//   }
// })

function Page8_07() {
  const Location = useLocation();

  const { state } = Location;

  state
    ? (console.log("Page8_06 SomeData：", state.SomeData),
      console.log("Page8_06 TestData：", state.TestData))
    : null;

  return (
    // Provider 需要給 store 並 將組件包起來才能把 State 往下傳給每個組件
    // <Provider store={store}>
    <div className={styles.main}>
      Page8_07的頁面
      <Profile />
    </div>
    // </Provider>
  );
}

export default Page8_07;

// 用來定義類型，表示整個 Redux 應用的狀態類型，有助於在組件中進行型別安全的狀態選擇和管理。
// export type RootState = ReturnType<typeof store.getState>;
