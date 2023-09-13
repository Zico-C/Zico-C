import React , { lazy } from 'react'
import Home from "../views/Home"
// import About from "../views/About"
// import User from "../views/User"

//懶加載 = lazy ( () => import ("路由路徑"))
const About = lazy( () => import ("../views/About"));
const User = lazy( () => import ("../views/User"));
const Page1 = lazy( () => import ("../views/Page1"));
const Page2 = lazy( () => import ("../views/Page2"));
// Navigate（導航） 重定向組件 
import { Navigate } from "react-router-dom"


//懶加載模式組件的寫法，
//外面需要套一層 "Loading" 的提示加載組件

// 這個函數，它接受一個 JSX 元素作為參數，並返回一個包裹在 React.Suspense 中的 JSX 元素。
const WithLoadingComponent = (comp:JSX.Element) => (
    // React.Suspense 允許在動態加載組件時提供一個備用內容（fallback）。
    // 在這裡，如果動態加載的組件尚未載入完成，將顯示 "Loading..." 字樣。
    <React.Suspense fallback={<div>Loading...</div>}>
        {/* 寫動態的組件都要加上大括號 */}
        {comp}
    </React.Suspense>
)

const Routes = [
    //嵌套路徑 開始---------->
    {
        path:"/",
        // 默認路徑
        element:<Navigate to="/page1" />
    },
    {
        path:"/",
        element:<Home/>,
        //子路徑
        children:[
            {
                path:"/page1",
                element:WithLoadingComponent(<Page1 />)
            },
            {
                path:"/page2",
                element:WithLoadingComponent(<Page2 />)
            }
        ]
    }
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
]

export default Routes