import { createSlice  } from "@reduxjs/toolkit";

const initialState = {
  profile: {
    name: "",     // 初始名字为空字串
    age: 0,       // 初始年齡為0
    email: "",    // 初始電子郵件為空字串
    login: false, // 登入狀態初始為false（未登入）
  },
};

const userSlice = createSlice({
  name: "user",               // 定義切片的名稱為"user"
  initialState: initialState, // 使用上面定義的初始狀態
  reducers: {
    setLogin(state, action) {
      console.log(action.payload)
      // 登入的 reducer 函式，用來設定使用者資訊
      const { name, age, email } = action.payload;
      state.profile = {
        name,       // 使用action中提供的名字
        age,        // 使用action中提供的年齡
        email,      // 使用action中提供的電子郵件
        login: true,// 設定登入狀態為true（已登入）
      };
    },
    setLogout(state) {
      // 登出的 reducer 函式，用來重置使用者資訊為初始狀態
      state.profile = {...initialState.profile}; // 使用初始狀態來重置使用者資訊
    },
  },
});

// 導出設定好的actions
export const { setLogin, setLogout } = userSlice.actions;  
// 導出reducer函式
export default userSlice.reducer; 