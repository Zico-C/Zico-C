import { useAppSelector } from "../store/hook"
import styles from "./page8_01.module.scss"



function Page1() {
    const user = useAppSelector((state:RootState) => state.global)
    console.log(user)
  return (
    <div className={styles.main}>
        <h1>Page1</h1>
        <p>登入狀態：{user.isLogin && "登入中"}</p>
        <p>會員帳號：{user.user}</p>
        <p>會員帳號：{user.email}</p>
        <p>會員權限：{user.level}</p>
        {user.level === 'supersuper' ? 
          ( <>
              <div>
                <hr color="red"/>
                <h1 style={{color:'orange'}}>管理員模式</h1>
              </div>
            </> )  :
          ( <>
              <div>
                <hr />
                <h1 style={{color:'blue'}}>使用者模式</h1>
              </div>
            </> )
        }
    </div>
  )
}

export default Page1