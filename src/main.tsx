import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools"

//cmd輸入npm i reset-css 安裝 樣式初始化 並引入
//樣式初始化一般放在最前面 App上面 【順序1】
import "reset-css";
//UI框架樣式 【順序2】

//全局樣式【順序3】 
//@ 絕對路徑 但要去"vite.config.ts"聲明 path
import "@/assets/styles/global.scss";
// import "./index.css"
//組件的樣式 【順序4】

import App from './App';
import "./i18n.js";
import "./index.css";

//BrowserRouter 瀏覽器路由器 將 <APP/> 進行包覆
import { BrowserRouter } from "react-router-dom";
// import Router from "./router"
import { MyProvider } from './views/Context.tsx';


//狀態管理庫
import { Provider } from "react-redux";
import store from "@/store";
// import store from "./redux_redux_toolkit/store.tsx"
const queryClient = new QueryClient();
// 頁面第一次渲染從這裡開始
ReactDOM.createRoot(document.getElementById('root')!).render(
  //<React.StrictMode> = 嚴格模式
  //<React.StrictMode>
  <Provider store={store}>
    <MyProvider>
      <QueryClientProvider client={queryClient}>
          <BrowserRouter basename='/Zico-C'>
            <App />
          </BrowserRouter>
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </MyProvider>
  </Provider>
)
