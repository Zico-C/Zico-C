import React from 'react'
import ReactDOM from 'react-dom/client'
//cmd輸入npm i reset-css 安裝 樣式初始化 並引入
//樣式初始化一般放在最前面 App上面 【順序1】
import "reset-css"
//UI框架樣式 【順序2】

//全局樣式【順序3】 
//@ 絕對路徑 但要去"vite.config.ts"聲明 path
import "@/assets/styles/global.scss"
//組件的樣式 【順序4】
import App from './App'
//BrowserRouter 瀏覽器路由器 將 <APP/> 進行包覆
import { BrowserRouter } from "react-router-dom"
// import Router from "./router"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
