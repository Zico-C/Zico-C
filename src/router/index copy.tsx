//組件形式的寫法
import App from "../App"
import Home from "../views/Home"
import About from "../views/About"
import { BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
//兩種路由模式的組件：BrowserRouter（History模式），HashRouter（Hash模式）

/* 
方法一：
Const baseRouter = () => {
    return()
}
以上寫法可簡寫為：
方法二：
箭頭函數沒寫 return 不用寫 {}大括號，
直接使用()括號包覆即可
注意 沒有邏輯判斷可直接用簡寫，但有邏輯判斷需要寫Return
*/

const baseRouter = () =>(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                {/* 設定 使用者訪問/ 的時候，重新指向/home路徑 */}
                <Route path="/" element={<Navigate to="/home"/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default baseRouter