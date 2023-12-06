import { useEffect } from "react";
import { useRoutes, useLocation, useNavigate } from "react-router-dom";
import router from "./router";
import { message } from "antd";

// 前往跳轉到首頁的組件
function ToPage1() {
  const navigateTo = useNavigate();
  //加載完組件之後實現跳轉
  useEffect(() => {
    //加載完組件之後執行這裡面的代碼
    navigateTo("/page1");
    message.warning("您已經登入過了！");
  }, []);
  return <div></div>;
}

// 前往跳轉到登錄頁面的組件
function ToLogin() {
  const navigateTo = useNavigate();
  useEffect(() => {
    navigateTo("/login");
    message.warning("尚未登入會員，請登入後再訪問！");
  });
  return <div></div>;
}

//手寫封裝路徑守衛
function BeforeRouterEnter() {
  // 使用 useRoutes 函數並傳入 router 來處理路由匹配
  const outlet = useRoutes(router);

  /* 
  後臺管理系統兩種經典的跳轉情況：
  1、如果訪問登入頁面，並且有token(可以識別或授權某種操作或身份)，要跳轉到首頁
  2、如果不是訪問登入頁面，並且沒有token，要跳轉到登錄頁面
  3、其餘都可以正常放行 訪問 outlet
  */

  const location = useLocation();

  // location.pathname 可以獲取當前網址的路徑
  /*
  例如https://www.example.com/products/electronics，
  使用 location.pathname 會返回的值為 /products/electronics
  */

  let token = localStorage.getItem("lege-react-management-token"); //獲取token的key
  //如果訪問登入頁面，並且有token(可以識別或授權某種操作或身份)，要跳轉到首頁
  if (location.pathname === "/login" && token) {
    //這裡不能直接使用 useNavigate 實現跳轉，因為需要BeforeRouterEnter是一個正常的JSX組件
    return <ToPage1 />;
  }
  //2、如果不是訪問登入頁面，並且沒有token，要跳轉到登錄頁面
  if (location.pathname !== "/login" && !token) {
    return <ToLogin />;
  }

  return outlet;
}

function App() {
  return (
    <>
      <div className="App">
        {/* <Link to="/home">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/user">User</Link> */}

        {/* 佔位符組件，類似窗口，用來展示組件，有點像vue中的 router-view */}
        {/* <Outlet></Outlet> */}
        {/* {outlet} */}
        <BeforeRouterEnter />
      </div>
    </>
  );
}

export default App;
