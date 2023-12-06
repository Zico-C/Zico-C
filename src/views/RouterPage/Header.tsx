import { NavLink} from "react-router-dom"
import styles from "../page8_01.module.scss"

function Header() {
  return (
    <nav>
        <span>
          {/* isActive 是 NavLink 的自帶boolean函數，當前路由處於使用狀態 可自訂義樣式，
              這裡是將 isActive 為 true 時 將 styes.active1的css 套入 className 內
          */}
          <NavLink className={({isActive}) => (isActive ? styles.active1 : undefined)} 
          to="/page8/page8_04/">Home</NavLink>
        </span>{" "}
      | {" "}
        <span>
          <NavLink className={({isActive}) => (isActive ? styles.active1 : undefined)} 
          to="/page8/page8_04/products">Products</NavLink>
        </span>
    </nav>
  )
}

export default Header