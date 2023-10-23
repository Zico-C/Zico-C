import styles from "../page8_01.module.scss"
import {RootState} from "../Page8_07"
import { useSelector ,useDispatch } from "react-redux";
import { setLogout } from "./Store/UserSlice";
function Login() {

    const state = useSelector((state:RootState) => state.user)
    // console.log(state)
    const dispatch = useDispatch();
    const handleLogin = () =>{
        // 引入setLogout函數 將state為初始化 並 login 為 false
        dispatch(setLogout());
    };

  return (
    <div className={styles.main}>
      <p>Name：{state.profile.name}</p>
      <p>Age：{state.profile.age}</p>
      <p>Email：{state.profile.email}</p>
      <button onClick={handleLogin} className={styles.delete}>Logout</button>
    </div>
  )
}

export default Login