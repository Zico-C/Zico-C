import React, { lazy } from "react";
import Home from "../views/Home";
// import About from "../views/About"
// import User from "../views/User"
import Login from "../views/Login";
//懶加載 = lazy ( () => import ("路由路徑"))

// const About = lazy( () => import ("../views/About"));
const Page1 = lazy(() => import("../views/Page1"));
const Page2 = lazy(() => import("../views/Page2"));
const Page3_01 = lazy(() => import("../views/Page3_01"));
const Page3_02 = lazy(() => import("../views/Page3_02"));
const Page3_03 = lazy(() => import("../views/Page3_03"));
const Page3_04 = lazy(() => import("../views/Page3_04"));
const Page3_05 = lazy(() => import("../views/Page3_05"));
const Page3_06 = lazy(() => import("../views/Page3_06"));
const Page3_07 = lazy(() => import("../views/Page3_07"));
const Page3_08 = lazy(() => import("../views/Page3_08"));
const Page4_01 = lazy(() => import("../views/Page4_01"));
const Page4_02 = lazy(() => import("../views/Page4_02"));
const Page4_03 = lazy(() => import("../views/Page4_03"));
const Page4_04 = lazy(() => import("../views/Page4_04"));
const Page4_05 = lazy(() => import("../views/Page4_05"));
const Page4_06 = lazy(() => import("../views/Page4_06"));
const Page5_01 = lazy(() => import("../views/Page5_01"));
const Page5_02 = lazy(() => import("../views/Page5_02"));
const Page5_03 = lazy(() => import("../views/Page5_03"));
const Page5_04 = lazy(() => import("../views/Page5_04"));
const Page5_05 = lazy(() => import("../views/Page5_05"));
const Page5_06 = lazy(() => import("../views/Page5_06"));
const Page5_07 = lazy(() => import("../views/Page5_07"));
const Page7_01 = lazy(() => import("../views/Page7_01"));
const Page7_02 = lazy(() => import("../views/Page7_02"));
const Page7_03 = lazy(() => import("../views/Page7_03"));
const Page7_04 = lazy(() => import("../views/Page7_04"));
const Page7_05 = lazy(() => import("../views/Page7_05"));
const Page6_01 = lazy(() => import("../views/Page6_01"));
const Page6_02 = lazy(() => import("../views/Page6_02"));
const Page6_03 = lazy(() => import("../views/Page6_03"));
const Page6_04 = lazy(() => import("../views/Page6_04"));
const Page6_05 = lazy(() => import("../views/Page6_05"));
const Page6_06 = lazy(() => import("../views/Page6_06"));
const Page6_07 = lazy(() => import("../views/Page6_07"));
const Page8_01 = lazy(() => import("../views/Page8_01"));
const Page8_02 = lazy(() => import("../views/Page8_02"));
const Page8_03 = lazy(() => import("../views/Page8_03"));
const Page8_04 = lazy(() => import("../views/Page8_04"));
const Page8_05 = lazy(() => import("../views/Page8_05"));
const Page8_06 = lazy(() => import("../views/Page8_06"));
const Page8_07 = lazy(() => import("../views/Page8_07"));
const Page8_08 = lazy(() => import("../views/Page8_08"));

import { Navigate } from "react-router-dom";

//懶加載模式組件的寫法，
//外面需要套一層 "Loading" 的提示加載組件

// 這個函數，它接受一個 JSX 元素作為參數，並返回一個包裹在 React.Suspense 中的 JSX 元素。
const WithLoadingComponent = (comp: JSX.Element) => (
  // React.Suspense 允許在動態加載組件時提供一個備用內容（fallback）。
  // 在這裡，如果動態加載的組件尚未載入完成，將顯示 "Loading..." 字樣。
  <React.Suspense fallback={<div>Loading...</div>}>
    {/* 寫動態的組件都要加上大括號 */}
    {comp}
  </React.Suspense>
);

const Routes = [
  //嵌套路徑 開始---------->
  {
    path: "/",
    // 默認路徑
    element: <Navigate to="/page1" />,
  },
  {
    path: "/",
    element: <Home />,
    //子路徑
    children: [
      {
        path: "/page1",
        element: WithLoadingComponent(<Page1 />),
      },
      {
        path: "/page2",
        element: WithLoadingComponent(<Page2 />),
      },
      {
        path: "/Page3/Page3_01",
        element: WithLoadingComponent(<Page3_01 />),
      },
      {
        path: "/Page3/Page3_02",
        element: WithLoadingComponent(<Page3_02 />),
      },
      {
        path: "/Page3/Page3_03",
        element: WithLoadingComponent(<Page3_03 />),
      },
      {
        path: "/Page3/Page3_04",
        element: WithLoadingComponent(<Page3_04 />),
      },
      {
        path: "/Page3/Page3_05",
        element: WithLoadingComponent(<Page3_05 />),
      },
      {
        path: "/Page3/Page3_06",
        element: WithLoadingComponent(<Page3_06 />),
      },
      {
        path: "/Page3/Page3_07",
        element: WithLoadingComponent(<Page3_07 />),
      },
      {
        path: "/Page3/Page3_08",
        element: WithLoadingComponent(<Page3_08 />),
      },
      {
        path: "/Page4/Page4_01",
        element: WithLoadingComponent(<Page4_01 />),
      },
      {
        path: "/Page4/Page4_02",
        element: WithLoadingComponent(<Page4_02 />),
      },
      {
        path: "/Page4/Page4_03",
        element: WithLoadingComponent(<Page4_03 />),
      },
      {
        path: "/Page4/Page4_04",
        element: WithLoadingComponent(<Page4_04 />),
      },
      {
        path: "/Page4/Page4_05",
        element: WithLoadingComponent(<Page4_05 />),
      },
      {
        path: "/Page4/Page4_06",
        element: WithLoadingComponent(<Page4_06 />),
      },
      {
        path: "/Page5/Page5_01",
        element: WithLoadingComponent(<Page5_01 />),
      },
      {
        path: "/Page5/Page5_02",
        element: WithLoadingComponent(<Page5_02 />),
      },
      {
        path: "/Page5/Page5_03",
        element: WithLoadingComponent(<Page5_03 />),
      },
      {
        path: "/Page5/Page5_04",
        element: WithLoadingComponent(<Page5_04 />),
      },
      {
        path: "/Page5/Page5_05",
        element: WithLoadingComponent(<Page5_05 />),
      },
      {
        path: "/Page5/Page5_06/*",
        element: WithLoadingComponent(<Page5_06 />),
      },
      {
        path: "/Page5/Page5_07",
        element: WithLoadingComponent(<Page5_07 />),
      },
      {
        path: "/Page6/Page6_01",
        element: WithLoadingComponent(<Page6_01 />),
      },
      {
        path: "/Page6/Page6_02",
        element: WithLoadingComponent(<Page6_02 />),
      },
      {
        path: "/Page6/Page6_03",
        element: WithLoadingComponent(<Page6_03 />),
      },
      {
        path: "/Page6/Page6_04",
        element: WithLoadingComponent(<Page6_04 />),
      },
      {
        path: "/Page6/Page6_05",
        element: WithLoadingComponent(<Page6_05 />),
      },
      {
        path: "/Page6/Page6_06",
        element: WithLoadingComponent(<Page6_06 />),
      },
      {
        path: "/Page6/Page6_07",
        element: WithLoadingComponent(<Page6_07 />),
      },
      {
        path: "/page7/page7_01",
        element: WithLoadingComponent(<Page7_01 />),
      },
      {
        path: "/page7/page7_02",
        element: WithLoadingComponent(<Page7_02 />),
      },
      {
        path: "/page7/page7_03",
        element: WithLoadingComponent(<Page7_03 />),
      },
      {
        path: "/page7/page7_04",
        element: WithLoadingComponent(<Page7_04 />),
      },
      {
        path: "/page7/page7_05",
        element: WithLoadingComponent(<Page7_05 />),
      },
      {
        path: "/page8/page8_01/*",
        element: WithLoadingComponent(<Page8_01 />),
      },
      {
        path: "/page8/page8_02",
        element: WithLoadingComponent(<Page8_02 />),
      },
      {
        path: "/page8/page8_03",
        element: WithLoadingComponent(<Page8_03 />),
      },
      {
        // 需要在父路由的路徑末尾加上 "*" 作為通配符，以確保子路由正確匹配。
        path: "/page8/page8_04/*",
        element: WithLoadingComponent(<Page8_04 />),
      },
      {
        // 需要在父路由的路徑末尾加上 "*" 作為通配符，以確保子路由正確匹配。
        path: "/page8/page8_05/*",
        element: WithLoadingComponent(<Page8_05 />),
      },
      {
        path: "/page8/page8_06/*",
        element: WithLoadingComponent(<Page8_06 />),
      },
      {
        path: "/page8/page8_07",
        element: WithLoadingComponent(<Page8_07 />),
      },
      {
        path: "/page8/page8_08",
        element: WithLoadingComponent(<Page8_08 />),
      },
    ],
  },
  //嵌套路徑 結束------------------------
  {
    path: "/login",
    element: <Login />,
  },
  //當訪問其他網域時跳轉，回指定默認路徑
  {
    // * = 萬用字元
    path: "*",
    element: <Navigate to="/page1" />,
  },
  // {
  //     path:"/home",
  //     element:<Home/>
  // },
  // {
  //     path:"/about",
  //     element:WithLoadingComponent(<About />)
  // },
  // {
  //     path:"/user",
  //     //懶加載模式需要靠 React.Suspense fallback={<div>Loading...</div>}>
  //     //並包覆該 <User/>
  //     element:WithLoadingComponent(<User />)
  // }
];

export default Routes;
