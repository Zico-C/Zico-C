import Login from "./Login"
import NotLogin from "./NotLogin"
import styles from "../page8_01.module.scss"
import {RootState} from "../Page8_07"
// 取得 userSlice  profile內定義的值；取得 Redux 中定義的 State
import { useSelector  } from "react-redux"

function Profile() {

  const state = useSelector((state:RootState) => state.user);
  console.log(state);

  return (
    <div className={styles.main}>
      {/* 如果 state.profile.login為登入狀態為 true 則顯示 Lonig ，false 顯示 NotLogin */}
        {state.profile.login ? <Login/> : <NotLogin/>}
    </div>
  )
}

export default Profile