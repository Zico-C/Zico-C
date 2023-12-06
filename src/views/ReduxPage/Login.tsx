import styles from "../page8_01.module.scss"
// import {RootState} from "../Page8_07"
import { useAppSelector ,useAppDispatch } from "../../store/hook";
import { setLogout,incrementAge } from "./Store/UserSlice";
function Login() {

    const state = useAppSelector((state:RootState) => state.user)
    // console.log(state)
    const dispatch = useAppDispatch();
    const handleLogin = () =>{
        // 引入setLogout函數 將state為初始化 並 login 為 false
        dispatch(setLogout());
    };
    const handleIncrementAge = () => {
      dispatch(incrementAge());
    };
  return (
    <div className={styles.main}>
      <p>Name：{state.profile.name}</p>
      <p>Age：{state.profile.age}</p>
      <p>Email：{state.profile.email}</p>
      <button onClick={handleIncrementAge}>Increment Age</button>
      <button onClick={handleLogin} className={styles.delete}>Logout</button>
    </div>
  )
}

export default Login