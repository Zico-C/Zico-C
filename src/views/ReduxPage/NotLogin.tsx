import styles from "../page8_01.module.scss"
import {useRef } from "react"
// 使用 Redux 定義的 function
import { useAppDispatch } from "../../store/hook";
import { setLogin } from "./Store/UserSlice";
function NotLogin() {

    const dispatch = useAppDispatch();
    const nameRef = useRef<HTMLInputElement | null>(null);
    const ageRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);

    const handleLogin = () =>{
      const nameValue = nameRef?.current?.value;
      const ageValue: number = parseInt(ageRef?.current?.value || "0", 10);
      const emailValue = emailRef?.current?.value;
      dispatch(setLogin({
          name:nameValue,
          age: ageValue,
          email:emailValue,
        }
      ));
    };
    console.log(ageRef?.current?.type)
  return (
    <div className={styles.main}>
      <label htmlFor="name">Name：</label>
      <input type="text" placeholder="name" name="name" id="name" ref={nameRef}/>
      <br/>
      <label htmlFor="age">Age：</label>
      <input type="text" placeholder="age" name="age" id="age" ref={ageRef}/>

      <br/>
      <label htmlFor="email">Email：</label>
      <input type="text" placeholder="email" name="email" id="email" ref={emailRef} />
      <br/>
      <button onClick={handleLogin} className={styles.toggle}>Login</button>
    </div>
  )
}

export default NotLogin