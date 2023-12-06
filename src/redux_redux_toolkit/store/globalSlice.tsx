// 引入 createSlice 
import { createSlice , PayloadAction } from "@reduxjs/toolkit";

// 
interface globalSlice  {
    isLogin:boolean;
    user:string |undefined;
    email:string;
    address:string;
    level:string;
    time_zone:string;
}

const initialState : globalSlice = {
    isLogin : localStorage.getItem("User.name") ? true : false,
    user : localStorage.getItem("User.name")  || undefined,
    email : localStorage.getItem("User.email") || "",
    address : localStorage.getItem("User.address") || "",
    level : localStorage.getItem("User.level") || "normal",
    time_zone : "Asia/Taipei",
}
const globalSlice = createSlice({
    name:"global",
    initialState,
    reducers:{
        setIsLogin:(state,action:PayloadAction<boolean>)=>{
            state.isLogin = action.payload;
        },
        setUser:(state,action:PayloadAction<string|undefined>)=>{
            state.user = action.payload;
        },
        setEmail:(state,action:PayloadAction<string>)=>{
            state.email = action.payload;
        },
        setAddress:(state,action:PayloadAction<string>)=>{
            state.address = action.payload;
        },
        setIevel:(state,action:PayloadAction<string>)=>{
           if(action.payload === 'zico12356'){
            state.level = 'supersuper';
           }else{
            state.level = 'normal' ;
           }
            // 保存 level 到 localStorage
           localStorage.setItem("User.level", state.level);
        },    
        setTimeZone: (state, action: PayloadAction<string>) => {
            state.time_zone = action.payload;
        },
        
    },
});

export const {
    setIsLogin,
    setUser,
    setEmail,
    setAddress,
    setIevel,
    setTimeZone
} = globalSlice.actions;

export default globalSlice.reducer;
