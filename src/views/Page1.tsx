import { useAppSelector } from "../store/hook"
import styles from "./page8_01.module.scss"



function Page1() {
    const {isLogin, user ,email ,level} = useAppSelector((state:RootState) => state.global)
      console.log("isLogin", isLogin)
      console.log("user" , user)
      console.log("email" , email)
      console.log("level" , level)
  return (
    <div className={styles.main}>
        <h1>Page1</h1>
        <p>登入狀態：{isLogin && "登入中"}</p>
        <p>會員帳號：{user}</p>
        <p>會員帳號：{email}</p>
        <p>會員權限：{level}</p>
        {level === 'supersuper' ? 
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