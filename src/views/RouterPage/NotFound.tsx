import styles from "../page8_01.module.scss"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function NotFound() {
  const navigateTo  = useNavigate();

  useEffect(()=>{
    setTimeout(()=>{
      navigateTo("/page8/page8_04/")
    },1500)
  },[])

  return (
    <div className={styles.main}>404 Not Found</div>
  )
}

export default NotFound