import styles from "../page8_01.module.scss"
import { Link , Outlet } from "react-router-dom"


function ProductLayout() {
  return (
    <> 
      <nav className={styles.products}>
        <span>
          <Link to="/page8/page8_04/products/1">Product 1</Link>
        </span>{" "}
        | {" "}
        <span>
          <Link to="/page8/page8_04/products/2">Product 2</Link>
        </span>{" "}
        | {" "}
        <span>
          <Link to="/page8/page8_04/products/3">Product 3</Link>
        </span>{" "}
        | {" "}
        <span>
          <Link to="/page8/page8_04/products/features">Product  Features</Link>
        </span>
      </nav>
      {/* 需要在父組件路由中渲染子組件路由時，使用Outlet 可渲染已配對的子路由內容 
        1.可使用 Context 將 資料傳遞給 子路由
            */}
      <Outlet context={{name:"zico"}}/>
    </>
  )
}
export default ProductLayout