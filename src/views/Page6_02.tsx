import { useState , useEffect} from "react";
import styles from "./page8_01.module.scss"

function Page6_02() {
  const [inputText,setInputText] = useState("");

  useEffect (()=>{
    console.log(inputText)
  })

  return (
    <div className={styles.main}>
      <h1>Page 6_02 頁面</h1>
      <input 
        type="text" 
        value={inputText} 
        onChange={(e)=>setInputText(e.target.value)} 
        placeholder="請輸入文字"/>

    </div>
  )
}

export default Page6_02